;==========================
;          SHELL
;==========================

[bits 16]                       ; tell NASM to assemble 16-bit code
[org 0x8000]                    ; tell NASM the code is running at 0x0000_8000 address (shell)

%define BOOTSECTOR_ADDR 0x7c0   ; physical memory address to load GAMES at from game sectors
%define FILES_ADDR 0x7e00       ; physical memory address to load FILES at from sector 2
%define ENTER_KEY 0x1c          ; ENTER scan code
%define BACKSPACE_KEY 0x0e      ; BACKSPACE scan code    

mov ax, 0                       ; set ACCUMULATOR REGISTER to 0
mov ds, ax                      ; set DATA SEGMENT to 0
mov es, ax                      ; set EXTRA SEGMENT to 0

mov ah, 0x00                    ; BIOS code to set video mode
mov al, 0x03                    ; 80 x 25 text mode
int 0x10                        ; set video mode

mov si, intro                   ; point SOURCE INDEX register to intro variable's address
call print_string               ; print intro to screen

; main OS loop
shell_loop:
    mov si, user_prompt         ; point SOURCE INDEX register to user_prompt variable's address
    call print_string           ; print user_prompt to screen
    
    mov di, user_input          ; point DESTINATION INDEX register to user_input variable's address
    mov al, 0                   ; AL is used by stosb instruction
    times 20 stosb              ; store zero at DI and then increment DI
    mov di, user_input          ; point DESTINATION INDEX register to user_input variable's address
    
    .next_byte:
        mov ah, 0x00            ; BIOS code to read key stroke from the keyboard
        int 0x16                ; read a single keystroke from the keyboard
        cmp ah, ENTER_KEY       ; if ENTER key has been pressed...
        je shell_loop           ; process command
        ;je search_game         ; ... search the game by name
        cmp ah, BACKSPACE_KEY   ; if BACKSPACE key has been pressed...
        je .erase_char          ; ... erase char
        stosb                   ; store key that has been pressed into user_input variable
        mov ah, 0x0e            ; BIOS code for char output
        int 0x10                ; echo char that has been typedtyped
        jmp .next_byte          ; read next byte from the user
    
    .erase_char:
        mov ah, 0x03            ; BIOS code to get cursor position
        int 0x10                ; get cursor position
        cmp dl, 3               ; cursor too far to the left?
        je .next_byte           ; if so process next byte
        mov ah, 0x0e            ; BIOS code for char output
        mov al, 8               ; ASCII code for '\b'
        int 0x10                ; move cursor one step back
        mov ah, 0x0e            ; BIOS code for char output
        mov al, 0               ; ASCII code for empty char
        int 0x10                ; move cursor one step back
        mov ah, 0x0e            ; BIOS code for char output
        mov al, 8               ; ASCII code for '\b'
        int 0x10                ; move cursor one step back
        mov al, 0               ; AL is used by stosb instruction
        dec di,                 ; drop user input pointer one position back
        stosb                   ; replace whatever is there with 0
        dec di                  ; drop user input pointer one position back
        jmp .next_byte          ; process next byte
    
    jmp shell_loop              ; infinite shell loop

; procedure to execute the boot sector game
execute:
    mov ax, 0x7c0                   ; init the segment
    mov es, ax                      ; init EXTRA SEGMENT register
    mov bx, 0                       ; init local offset within the segment
    mov cl, 5                       ; sector 2 on USB flash drive contains shell binary executable
    call read_sector                ; read sector from USB flash drive
    jmp 0x7c0:0x0000                ; jump to rhe shell executable and run it

; procedure to print a string
print_string:
    cld                         ; clear direction flag
    mov ah, 0x0e                ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                 ; print next char
        lodsb                   ; read next byte from SI register and then increment SI
        cmp al, 0               ; match the zero terminating char of the string
        je .return              ; return if string doesn't contain any chars any more
        int 0x10                ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char          ; repeat printing char until string is fully printed
    
    .return: ret                ; return from procedure

; procedure to read a single sector from USB flash drive
read_sector:
    mov ah, 0x02                ; BIOS code to READ from storage device
    mov al, 1                   ; how many sectors to read
    mov ch, 0                   ; specify celinder
    mov dh, 0                   ; specify head
    mov dl, 0x80                ; specify HDD code
    int 0x13                    ; read the sector from USB flash drive
    jc .error                   ; if failed to read the sector handle the error
    ret                         ; return from procedure
    
    .error:
        mov si, error_message   ; point SOURCE INDEX register to error_message string's address
        call print_string       ; print error message
        jmp $                   ; stuck here forevevr (infinite loop)

; messages
error_message db 'Failed to read sector from USB!', 10, 13, 0

; variables
intro db 'Welcome to GameOS. Type "list" to list the games', 10, 13, 0
user_prompt db 10, 13, ' $ ', 0
user_input times 20 db 0

times 512 - ($ - $$) db 0       ; fill trailing zeros to get exactly 512 bytes long binary file





