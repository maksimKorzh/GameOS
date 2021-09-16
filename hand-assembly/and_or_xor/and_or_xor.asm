;==========================
;      AND, OR, XOR
;==========================

and ax, 0x8855             ; 255588
and dh, 0x05               ; 8h 0000b 1110b 0110b 05h => 80e605
and dx, cx                 ; 2h 0001b 1100b 1010b => 21ca 
and word [mem], bx         ; 2h 0001b 0001b 1110b f001h => 211ef001
and dh, byte [mem]         ; 2h 0010b 0011b 0110b f001h => 2236f001

or ax, 0x8855              ; 0d5588
or dh, 0x05                ; 8h 0000b 1100b 1110b 05h => 80ce05
or dx, cx                  ; 0h 1001b 1100b 1010b => 09ca
or word [mem], bx          ; 0h 1001b 0001b 1110b f001h => 091ef001
or dh, byte [mem]          ; 0h 1010b 0011b 0110b f001h => 0a36f001

xor ax, 0x8855             ; 355588
xor dh, 0x05               ; 8h 0000b 1111b 0110b 05h => 80f605
xor dx, cx                 ; 3h 0001b 1100b 1010b => 31ca 
xor word [mem], bx         ; 3h 0001b 0001b 1110b f001h => 311ef001
xor dh, byte [mem]         ; 3h 0010b 0011b 0110b f001h => 3236f001

times 496 - ($-$$) db 0
mem db 'Hello, x86 machine codes!' 
