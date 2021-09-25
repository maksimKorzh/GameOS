;==========================
;        NEW COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define SHELL_SEG 0x800             ; executable file bytes typed from hex editor
%define COMMAND_FILE_ADDR 0x0500    ; physical memory address of user defined app

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00
mov di, COMMAND_FILE_ADDR           ; point DI to user defined app's initial byte

clear_memory:
    cmp di, 0x06fe                  ; did DI pass through 0x0700?
    je return                       ; if so we're done
    mov al, 0                       ; byte value to set to ehre DI is pointing to
    stosb                           ; store the value at AL to the byte where DI is pointing to
    jmp clear_memory                ; repeat until all the 512 bytes in (0x0000_0500-0x0000_0700) range are cleared

return:
    mov si, message                 ; point SI to message
    call print_string               ; print message
    jmp SHELL_SEG:0x0000            ; execute code at 0x0000_0500!

; procedure to print a string
print_string:
    cld                             ; clear direction flag
    mov ah, 0x0e                    ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                     ; print next char
        lodsb                       ; read next byte from SOURCE INDEX register
        cmp al, 0                   ; match the zero terminating char of the string
        je .return                  ; return if string doesn't contain any chars any more
        int 0x10                    ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char              ; repeat printing char until string is fully printed
    
    .return: ret                    ; return from procedure

; variables
message db 'Memory at range (0x0500-0x6ff) has been cleared!', 10, 13, 0

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file

