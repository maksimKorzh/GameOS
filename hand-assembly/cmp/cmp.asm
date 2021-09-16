;==========================
;     CMP instruction
;==========================

cmp ax, 0x8855             ; 3d5588 
cmp dh, 0x05               ; 8h 0000b 1111b 1110b 05h => 80fe05
cmp cx, 0x8866             ; 8h 0001b 1111b 1001b 6688h => 81f96688
cmp byte [mem], 0x05       ; 8h 0000b 0011b 1110b f001h 05h => 803ef00105
cmp ah, ch                 ; 3h 1000b 1110b 1100b => 38ec   
cmp word [mem], bx         ; 3h 1001b 0001b 1110b f001h => 391ef001
cmp dh, byte [mem]         ; 3h 1010b 0011b 0110b f001h => 3a36f001

times 496 - ($-$$) db 0
mem db 'Hello, x86 machine codes!' 
