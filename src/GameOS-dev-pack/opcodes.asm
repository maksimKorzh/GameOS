db 'BIN:  0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101 1110 1111'
db 'HEX:     1    2    3    4    5    6    7    8    9    a    b    c    d    e    f'
db '--------------------------------------------------------------------------------'
db 'REG   8 16 16 | KEY  tttn |   SRC DST MOD REG REG  ADDR  DATA | imm  ?  | inc OP'
db '000  AL AX ES | je   0100 | 1 imm reg[11   ? ]reg        data | cmp 111 | ax  40'
db '001  CL CX CS | jne  0101 | 2 imm mem 00   ?  110  addr  data | add 000 | bx  43'
db '010  DL DX SS | jge  1101 | 3 reg reg 11  reg reg             | sub 101 | cx  41'
db '011  BL BX DS | jle  1110 | 4 reg mem 00  reg 110  addr       | and 100 | dx  42'
db '100  AH SP FS | jg   1111 | 5 mem reg 00  reg 110  addr       |  or 001 | si  46'
db '101  CH BP GS | jl   1100 | 6  ax mem              addr       | xor 110 | di  47'
db '110  DH SI  - |           | 7 mem  ax              addr       | shl 100 | 8bit r'
db '111  BH DI  - |           | 8 reg seg 11  seg reg             | shr 101 | fec 0r'
db '              |           | 9 seg reg 11  seg reg             | mov 000 | inc ^ '
db '--------------------------------------------------------------------------------'
db '  MOV  CMP   ADD  SUB   AND   OR    XOR   SHL    SHR      CLD fc  OPCODE JMP    '
db '1 b w  80w?  80w  80w?  80w?  80w?  80w?  c0w?   c0w?   PUSHA 60  e 1011 8-bit  '
db '2 c3w? 80w?  80w  80w?                    c0w?26 c0w?2e  POPA 61  e 1010 addr   '
db '3 84w  34w   00w  24w   20w   04w   30w   LODSB ac       PUSH OP  JCC (cond)    '
db '4 84w  34w   00w  24w   20w   04w   30w   LODSW ad         ax 50  0111 tttn 8bit'
db '5 85w  35w   01w  25w   21w   05w   31w   STOSB aa         bx 53  INT cd  NOP 90'
db '6 a1w  AX    AX   AX    AX    AX    AX    STOSW ab         cx 51  Positive JMPs:'
db '7 a0w  3d    05   2d    25    0d    35     CALL e8 16b srt dx 52  add op bytes  '
db '8 8e -----------------------------------    RET c3         si 56  Negative JMPs:'
db '9 8c | <d>(<d>w => (000)w=16-bit? 1:0) |   RETF cb         di 57  invert bits -1'
db 0

