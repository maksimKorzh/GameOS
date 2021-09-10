;==========================
;       LIST COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define OFFSET 8                    ; size of a filename
%define FILES_ADDR 0x7e00           ; physical memory address to load FILES at from sector 2
%define SHELL_SEGMENT 0x800        ; shell segment for far jump

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00

jmp 0x770:0x0000

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file






