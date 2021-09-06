;==========================
;        BOOTLOADER
;==========================

[bits 16]                       ; tell NASM to assemble 16-bit code

; list of available games
db 'Hello from sector 2', 0
db 'tetris', 0
db 'bricks', 0              
db 'slides', 0

times 512 - ($ - $$) db 0       ; fill trailing zeros to get exactly 512 bytes long binary file
