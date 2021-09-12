;==========================
;          PROG_2
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code

%define SHELL_SEGMENT 0x800         ; shell segment

mov ax, cs                          ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov si, message                     ; point SI to message
call print_string                   ; print mesage
jmp SHELL_SEGMENT:0x0000            ; return to shell

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

; message
message db 'This is "prog_2" placeholder', 10, 13
        db 'Use "edit" to input bytes to replace it with your own custom app', 10, 13
        db 'Use "save" followed by the prog number to store it as (prog1...prog5)', 10, 13, 0 

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file














