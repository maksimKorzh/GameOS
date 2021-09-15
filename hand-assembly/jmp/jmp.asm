; The two's complement is calculated by inverting the bits and adding one.
jl label                    ; 0111 1100 13h => 7c13
nop                         ; 1001 0000 => 90
nop                         ; 1001 0000 => 90
nop                         ; 1001 0000 => 90
loop1:
    nop                     ; 1001 0000 => 90
    nop                     ; 1001 0000 => 90
    .subloop1:
        nop                 ; 1001 0000 => 90
        nop                 ; 1001 0000 => 90
        jmp .repeat         ; 1110 1011 02h => eb02
        jmp .subloop1       ; 1110 1011 1111 1010 => ebfa
    .repeat:
        jmp loop1           ; 1110 1011 1111 0110 => ebf6
nop                         ; 1001 0000 => 90
nop                         ; 1001 0000 => 90
db 0, 0, 0, 0
label:
nop                         ; 1001 0000 => 90
jmp 0x0577:0x1234           ; 1110 1010 3412h 7705h => ea34127705
times 496 - ($-$$) db 0

