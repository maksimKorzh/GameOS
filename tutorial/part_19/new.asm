;==========================
;        NEW COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define SHELL_SEG 0x800             ; executable file bytes typed from hex editor

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00

jmp SHELL_SEG:0x0000                ; execute code at 0x0000_0500!

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file

