;==========================
;       LOAD COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define COMMAND_FILE_ADDR 0x0500    ; physical memory address to save executable from to USB flash drive
%define SHELL_SEGMENT 0x800         ; executable file bytes typed from hex editor
%define THEME_ADDR 0x8200           ; physical memory address to load THEME at from sector 6
%define THEME_UPDATE 0x0045         ; local offset of THEME_ADDR used for far call to update theme
%define ESC_KEY 0x01                ; ESC key scan code

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00
mov bx, COMMAND_FILE_ADDR           ; destination address in RAM of where data is going to be loaded
mov si, select_sector               ; point SI to select_sector variable
call print_string                   ; print select sector message
pusha                               ; preserve all registers
call THEME_ADDR:THEME_UPDATE        ; update color scheme
popa                                ; restore all registers
mov ah, 0x00                        ; BIOS code to wait for a keystroke
int 0x16                            ; wait for user input
cmp ah, ESC_KEY                     ; did user press ESC?
je return                           ; if so the return to shell
mov ah, 0x0e                        ; BIOS code to output char to screen
int 0x10                            ; print user input to screen
sub al, '0' - 11                    ; convert ASCII to integer + 11 files offset before prog_1
mov cl, al                          ; init sector to read byte from
call read_sector                    ; write sector to USB flash drive
mov si, success_message             ; point SI to success_message
call print_string                   ; print success message 

return:
    mov si, new_line                ; point SI to new_line variable
    call print_string               ; print new line
    jmp SHELL_SEGMENT:0x0000        ; go back to shell

; procedure to print a string
print_string:
    cld                                 ; clear direction flag
    mov ah, 0x0e                        ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                         ; print next char
        lodsb                           ; read next byte from SI register and then increment SI
        cmp al, 0                       ; match the zero terminating char of the string
        je .return                      ; return if string doesn't contain any chars any more
        int 0x10                        ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char                  ; repeat printing char until string is fully printed
    
    .return: ret                        ; return from procedure

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
error_message db 'Failed to write sector from USB!', 10, 13, 0
success_message db 10, 13, '512 Bytes from USB flash drive has been loaded, use "edit" to check that out!', 10, 13, 0
select_sector db 'Type 1-3 to load bytes to memory range (0x500-0x6ff) from (prog_1...prog_3)', 10, 13
              db '> ', 0

; variables
new_line db 10, 13, 0

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file










