;==========================
;        BOOTLOADER
;==========================

[bits 16]                       ; tell NASM to assemble 16-bit code

; list of available games
; games
snake db 'snake', 0
tetranglix db 'tetranglix', 0
bricks db 'bricks', 0
no_game db  0
game_list dw snake, tetranglix, bricks, no_game, 0

times 512 - ($ - $$) db 0       ; fill trailing zeros to get exactly 512 bytes long binary file
