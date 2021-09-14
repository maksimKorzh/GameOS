;==========================
;         PRINT 'a'
;==========================

; BIOS code to output char to screen
mov ah, 0x0e        ; 1011 w reg immediate data
                    ; 1011 0 100 0000 1110 =>
                    ; 1011 0100 0000 1110 =>
                    ;    b    4    0    e => b40e 

; Char to print
mov al, 'a'         ; 1011 w reg immediate data
                    ; 1011 0 000 0110 0001 =>
                    ; 1011 0000 0110 0001 =>
                    ;    b    0    6    1 => b061

; Call BIOS interrupt to print char ('a')
int 0x10            ; 1100 1101 0001 0000 =>
                    ;    c    d    1    0 => cd10

; BIOS code to output char to screen
mov ah, 0x0e        ; 1011 w reg immediate data
                    ; 1011 0 100 0000 1110 =>
                    ; 1011 0100 0000 1110 =>
                    ;    b    4    0    e => b40e 

; Char to print
mov al, 0x0a        ; 1011 w reg immediate data
                    ; 1011 0 000 0110 0001 =>
                    ; 1011 0000 0000 1010 =>
                    ;    b    0    0    a => b00a

; Call BIOS interrupt to print char (new line)
int 0x10            ; 1100 1101 0001 0000 =>
                    ;    c    d    1    0 => cd10

; BIOS code to output char to screen
mov ah, 0x0e        ; 1011 w reg immediate data
                    ; 1011 0 100 0000 1110 =>
                    ; 1011 0100 0000 1110 =>
                    ;    b    4    0    e => b40e 

; Char to print
mov al, 0x0d        ; 1011 w reg immediate data
                    ; 1011 0 000 0110 0001 =>
                    ; 1011 0000 0000 1101 =>
                    ;    b    0    0    d => b00d

; Call BIOS interrupt to print char (carriage return)
int 0x10            ; 1100 1101 0001 0000 =>
                    ;    c    d    1    0 => cd10


; go back to shell
; 0x800 - segment
; 0x0000 - offset
; physical address = 0x800 * 10 + 0x0000 = 8000 0000 => 0000 0008
jmp 0x800:0x0000    ; 1110 1010 0000 0000 0000 0000 0000 0000 0000 1000 =>
                    ;    e    a    0    0    0    0    0    0    0    8 =>
                    ; ea00 0000 08 (ea 0000 0008)

;-------------------
; x86 machine code
;-------------------
; b40e              ; mov ah, 0x0e     ; BIOS code to output char to screen
; b061              ; mov al, 'a'      ; Char to print ('a')
; cd10              ; int 0x10         ; Call BIOS interrupt to print char
; b40e              ; mov ah, 0x0e     ; BIOS code to output char to screen
; b00a              ; mov al, 0x0a     ; Char to print (new line)
; cd10              ; int 0x10         ; Call BIOS interrupt to print char
; b40e              ; mov ah, 0x0e     ; BIOS code to output char to screen
; b00d              ; mov al, 0x0a     ; Char to print (carriage return)
; cd10              ; int 0x10         ; Call BIOS interrupt to print char

; ea00 0000 08      ; jmp 0x800:0x0000 ; jump back to shell







