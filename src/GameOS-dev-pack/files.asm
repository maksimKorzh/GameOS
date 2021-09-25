;==========================
;          FILES
;==========================

[bits 16]                       ; tell NASM to assemble 16-bit code

; list of available games
db 'help',   0, 0, 0, 0
db 'clear',  0, 0, 0
db 'theme',  0, 0, 0
db 'edit',   0, 0, 0, 0
db 'save',   0, 0, 0, 0
db 'load',   0, 0, 0, 0
db 'new',    0 ,0 ,0, 0, 0
db 'run',    0, 0, 0, 0, 0
db 'prog_1', 0, 0
db 'prog_2', 0, 0
db 'prog_3', 0, 0
db 'code',   0, 0, 0, 0
db 'asm',    0, 0, 0, 0, 0
db 'tables', 0, 0

times 512 - ($ - $$) db 0       ; fill trailing zeros to get exactly 512 bytes long binary file
