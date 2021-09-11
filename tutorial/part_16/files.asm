;==========================
;          FILES
;==========================

[bits 16]                       ; tell NASM to assemble 16-bit code

; list of available games
db 'list', 0, 0, 0, 0
db 'edit', 0, 0, 0, 0
db 'tetros', 0, 0
db 'bricks', 0, 0

times 512 - ($ - $$) db 0       ; fill trailing zeros to get exactly 512 bytes long binary file
