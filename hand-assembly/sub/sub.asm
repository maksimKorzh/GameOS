;==========================
;     SUB instruction
;==========================

sub ax, 0x8855             ; 2d5588
sub dh, 0x05               ; 8h 0000b 1110b 1110b 05h => 80ee05
sub byte [mem], 0x05       ; 8h 0000b 0010b 1110b f001h 05h => 802ef00105
sub dx, cx                 ; 2h 1001b 1100b 1010b => 29ca
sub word [mem], bx         ; 2h 1001b 0001b 1110b f001h  => 291ef001
sub dh, byte [mem]         ; 2h 1010b 0011b 0110b f001h => 2a36f001

times 496 - ($-$$) db 0
mem db 'Hello, x86 machine codes!' 
