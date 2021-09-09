;==========================
;          SHELL
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x8000]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define BOOTSECTOR_SEGMENT 0x7c0    ; boot sector segment address used for far jumps to execute boot sector games
%define BOOTSECTOR_ADDR 0x7c00      ; physical memory address used to init stack base pointer
%define FILES_ADDR 0x7e00           ; physical memory address to load FILES at from sector 2
%define OFFSET 8                    ; size of a filename
%define ENTER_KEY 0x1c              ; ENTER scan code
%define BACKSPACE_KEY 0x0e          ; BACKSPACE scan code

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00
mov ah, 0x00                        ; BIOS code to set video mode
mov al, 0x03                        ; 80 x 25 text mode
int 0x10                            ; set video mode
mov si, intro                       ; point SOURCE INDEX register to intro variable's address
call print_string                   ; print intro to screen

; main OS loop
shell_loop:
    mov si, user_prompt             ; point SOURCE INDEX register to user_prompt variable's address
    call print_string               ; print user_prompt to screen
    mov di, user_input              ; point DESTINATION INDEX register to user_input variable's address
    mov al, 0                       ; AL is used by stosb instruction
    times 20 stosb                  ; store zero at DI and then increment DI
    mov di, user_input              ; point DESTINATION INDEX register to user_input variable's address
    
    .next_byte:
        mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
        int 0x16                    ; read a single keystroke from the keyboard
        cmp ah, 0x01
        je .r
        cmp ah, ENTER_KEY           ; if ENTER key has been pressed...
        je .search                  ; got to .search label
        cmp ah, BACKSPACE_KEY       ; if BACKSPACE key has been pressed...
        je .r              ; ... erase char
        stosb                       ; store key that has been pressed into user_input variable
        mov ah, 0x0e                ; BIOS code for char output
        int 0x10                    ; echo char that has been typedtyped
        jmp .next_byte              ; read next byte from the user
    
    .erase_char:
        mov ah, 0x03                ; BIOS code to get cursor position
        int 0x10                    ; get cursor position
        cmp dl, 3                   ; cursor too far to the left?
        je .next_byte               ; if so process next byte
        mov ah, 0x0e                ; BIOS code for char output
        mov al, 8                   ; ASCII code for '\b'
        int 0x10                    ; move cursor one step back
        mov ah, 0x0e                ; BIOS code for char output
        mov al, 0                   ; ASCII code for empty char
        int 0x10                    ; move cursor one step back
        mov ah, 0x0e                ; BIOS code for char output
        mov al, 8                   ; ASCII code for '\b'
        int 0x10                    ; move cursor one step back
        mov al, 0                   ; AL is used by stosb instruction
        dec di,                     ; drop user input pointer one position back
        stosb                       ; replace whatever is there with 0
        dec di                      ; drop user input pointer one position back
        jmp .next_byte              ; process next byte
     
     .search:
        call search_file            ; ... search the game by name
     
     
     .r:
         jmp 0x770:0x0000

    jmp shell_loop                  ; infinite shell loop

; search file procedure
search_file:
    cmp byte [user_input], 0        ; check the first byte user has entered
    je .return                      ; if nothing then return
    
    mov bx, 0                       ; file name list index
    mov dl, 3                       ; sector of the first executable on the USB flash drive
    
    .next_game:
        mov ax, [file_list + bx]    ; AX points to the address of the 1st char of the current file name located in 'files.asm'
        cmp ax, no_file             ; if no more files left in the list
        je .no_file_found           ; go to no file found label
        add bx, 2                   ; point bx to the next filename
        inc dl                      ; sync file name with a corresponding sector on the USB flash drive
        call compare_strings        ; compare user_input with the corresponding file name
        cmp cl, 1                   ; if user input matches file name then execute corresponding file
        je execute                  ; execute the file name corresponding binary file
        jmp .next_game              ; process next file name
    
    .no_file_found:
        mov si, error_no_file       ; point SI to no_file_found variable
        call print_string           ; print error message
        ret                         ; return to main OS shell loop
    .return: ret                    ; return to main OS shell loop

;---------------------------------------------------------------------------------------------------------
;                   DI => scasb compares value stored in DI which is 's' with 's' stored in AX register
;                         and then increments DI if DF is 0
;                    v
; memory address 1: |s|n|a|t|0|       user input string
; memory address 2: |s|n|a|k|e|0|     file name string
;                    ^
;                   SI => lodsb loads value stored at SI to AX and then increments SI if DF is 0
;---------------------------------------------------------------------------------------------------------

; procedure to compare two strings
compare_strings:
    cld                             ; clear direction flag so that SI and DI gets incremented after SCASB/LODSB
    mov di, user_input              ; point DI to the target string
    mov si, ax                      ; point SI to the source string
    
    .next_byte:
        lodsb                       ; init AX equals to the value of where SI is pointing at
        scasb                       ; compare the value of where DI is poining at with the value stored in AX
        jne .return_false           ; return flase if chars do not match
        cmp al, 0                   ; if reached the zero terminating char...
        je .return_true             ; ... string match each other
        jmp .next_byte              ; process next byte
        
        .return_true:
            mov cl, 1
            ret
        
        .return_false:
            mov cl, 0
            ret

; procedure to execute boot sector game
execute:
    mov ax, BOOTSECTOR_SEGMENT         ; init the segment
    mov es, ax                      ; init EXTRA SEGMENT register
    mov bx, 0                       ; init local offset within the segment
    mov cl, dl                      ; sector 2 on USB flash drive contains shell binary executable
    call read_sector                ; read sector from USB flash drive
    jmp BOOTSECTOR_SEGMENT:0x0000   ; jump to rhe shell executable and run it
    
; procedure to print a string
print_string:
    cld                             ; clear direction flag
    mov ah, 0x0e                    ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                     ; print next char
        lodsb                       ; read next byte from SI register and then increment SI
        cmp al, 0                   ; match the zero terminating char of the string
        je .return                  ; return if string doesn't contain any chars any more
        int 0x10                    ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char              ; repeat printing char until string is fully printed
    
    .return: ret                    ; return from procedure

; procedure to read a single sector from USB flash drive
read_sector:
    mov ah, 0x02                    ; BIOS code to READ from storage device
    mov al, 1                       ; how many sectors to read
    mov ch, 0                       ; specify celinder
    mov dh, 0                       ; specify head
    mov dl, 0x80                    ; specify HDD code
    int 0x13                        ; read the sector from USB flash drive
    jc .error                       ; if failed to read the sector handle the error
    ret                             ; return from procedure
    
    .error:
        mov si, error_message       ; point SOURCE INDEX register to error_message string's address
        call print_string           ; print error message
        jmp $                       ; stuck here forevevr (infinite loop)

; messages
error_message db 'Failed to read sector from USB!', 10, 13, 0
error_no_file db 10, 13, 'No file found!', 0

; variables
intro db 'Type "list" to list the files', 10, 13, 0
user_prompt db 10, 13, ' $ ', 0
user_input times 20 db 0
new_line db 10, 13
no_file dw 0
file_list dw FILES_ADDR, FILES_ADDR + OFFSET, FILES_ADDR + 2 * OFFSET, FILES_ADDR + 3 * OFFSET, no_file

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file





