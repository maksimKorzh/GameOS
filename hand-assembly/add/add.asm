;==========================
;     ADD instruction
;==========================

add ax, 0x8855             ; 055588
add dh, 0x05               ; 8h 0000b 1100b 0110b 05h => 80c605
add byte [mem], 0x05       ; 8h 0000b 0000b 0110b f001h 05h => 8006f00105
add dx, cx                 ; 0h 0001b 1100b 1010b => 01ca
add word [mem], bx         ; 0h 0001b 0001b 1110b f001 => 011ef001
add dh, byte [mem]         ; 0h 0010b 0011b 0110b f001 => 0236f001

times 496 - ($-$$) db 0
mem db 'Hello, x86 machine codes!' 
