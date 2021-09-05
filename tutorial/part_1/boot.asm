;==========================
;        BOOTLOADER
;==========================

[bits 16]                       ; tell NASM to assemble 16-bit code
[org 0x7c00]                    ; tell NASM the code is running at boot sector

mov ax, 0                       ; set ACCUMULATOR REGISTER to 0
mov ds, ax                      ; set DATA SEGMENT to 0
mov es, ax                      ; set EXTRA SEGMENT to 0

mov si, success_message         ; point SOURCE INDEX register to success_message string's address
call print_string               ; print success-message to screen

; procedure to print a string
print_string:
    cld                         ; clear direction flag
    mov ah, 0x0e                ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                 ; print next char
        lodsb                   ; read next byte from SOURCE INDEX register
        cmp al, 0               ; match the zero terminating char of the string
        je .return              ; return if string doesn't contain any chars any more
        int 0x10                ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char          ; repeat printing char until string is fully printed
    
    .return: ret                ; return from procedure

; messages
success_message dw 'GameOS is loaded!', 0

times 510 - ($ - $$) db 0       ; fill trailing zeros to get exactly 512 bytes long binary file
dw 0xaa55                       ; set boot signutare
