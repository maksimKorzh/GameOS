;==========================
;       LIST COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

;%define FILES_ADDR 0x7e00           ; physical memory address to load FILES at from sector 2
%define SHELL_SEGMENT 0x800         ; shell segment for far jump

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00

; write address
mov di, 0x0500

; encode 1st nibble
mov al, 'a'
call ascii_to_hex
mov dh, 1
call encode_byte

; encode 2nd nibble
mov al, '4'
call ascii_to_hex
mov dh, 2
call encode_byte


call print_memory
jmp SHELL_SEGMENT:0x0000


; procedire to display hex dump to screen
print_memory:
    cld                             ; ensure lodsb instruction increments SI register
    mov bx, 0                       ; BX serves as a line counter, init it
    
    .next_line:
        cmp bx, 32                  ; is there any more lines left to print?
        je .return                  ; if not then return
        mov si, [lines + bx]        ; point SI to corresponding byte string address
        call print_string           ; print byte string address (l1, l2...l16)
        mov si, [read_address + bx] ; point SI to the address to get hex dump from (read from address)
        mov ch, 0                   ; CH serves as a byte counter, init it
        mov ah, 0x0e                ; BIOS code to type a char to screen
        mov al, ' '                 ; which char to type
        int 0x10                    ; print space after address and colon
        
        .next_byte:
            lodsb                   ; read next byte where SI is pointing to, increment SI register
            cmp ch, 32              ; is there any more bytes left to print
            je .continue            ; go to .continue label
            mov cl, al              ; temp store al to cl
            and al, 0xf0            ; extract 1st nibble => 0xF0 => 1111 0000
            shr al, 4               ; shift 1st nibble 4 bits to the right 1111 0000 => 0000 1111
            call hex_to_ascii       ; print 2st nibble
            mov al, cl              ; restore byte value from cl back to al
            and al, 0x0f            ; extract 2nd nibble => 0x0F => 0000 1111
            call hex_to_ascii       ; print 2nd nibble
            inc ch                  ; increment byte counter
            jmp .next_byte          ; process next byte
        
        .continue:
             add bx, 2              ; update line counter
             mov si, new_line       ; point SI to new_line
             call print_string      ; print the new line char by the end of the line
             jmp .next_line         ; process next line
    
    .return:
        mov si, new_line            ; point SI to new_line
        call print_string           ; print new line
        ret

; procedure to encode byte
encode_byte:
    cmp dh, 1                       ; are we dealing 1st nibble?
    je .nibble_one                  ; if so encode 1st nibble
    cmp dh, 2                       ; are we dealing 2nd nibble?
    je .nibble_two                  ; if so encode 2nd nibble
    
    .nibble_one:
        mov dl, al                  ; temp store value form AL to DL
        shl dl, 4                   ; encode current AL value to be the 1st nibble (0000 1111 << 4 1111 0000)
        ret                         ; return from the procedure
    
    .nibble_two:
        mov dh, 0                   ; reset DH because the byte is now completed
        or  dl, al                  ; bitwise OR 1st nibble in DL and 2nd nibble in AL (1111 0000 | 0000 1111 => 1111 1111)
        mov al, dl                  ; move complete byte value from DL to AL
        stosb                       ; write the resulting byte stored as AL to where DI is pointing to
        ret                         ; return from procedure

; procedure to convert ASCII char to nibble (half of a byte)
ascii_to_hex:
    cmp al, 'a'                     ; did user input digit or letter
    jl .digit                       ; if digit then go to converting to digit
    sub al, 'a' - 10                ; otherwise convert ASCII char to hex letter ('a' => 10, 'b' => 11...'f' => 15)
    ret                             ; return from procedure
    
    .digit:
        sub al, '0'                 ; convert ASCII char to digit ('0' = > 0, '1' = > 1...'9' => 9)
        ret                         ; return from procedure
        
; procedure to convert nibble (half of a byte) to ASCII char
hex_to_ascii:
    cmp al, 10                      ; distinguish between digits and letters
    jl .digit                       ; convert digit
    cmp al, 10                      ; distinguish between digits and letters
    jge .letter                     ; convert letter
    
    .digit:
        add al, '0'                 ; convert integer to character (digits 0-9)
        jmp .print_nibble           ; go and print it
    
    .letter:
        add al, 'a' - 10            ; convert integer to character (letters A-F)
        jmp .print_nibble           ; go and print it
    
    .print_nibble:
        mov ah, 0x0e                ; BIOS code to print a char
        int 0x10                    ; print character to screen
        ret

; procedure to print a string
print_string:
    cld                             ; clear direction flag
    mov ah, 0x0e                    ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                     ; print next char
        lodsb                       ; read next byte from SI register and then increment SI
        cmp al, 0                   ; match the zero terminating char of the string
        je .return                  ; return if string doesn't contain any chars any more
        int 0x10                    ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char              ; repeat printing char until string is fully printed
    
    .return: ret                    ; return from procedure


;--------------------------------------------------------------------------------
;    Hex dump
;--------------------------------------------------------------------------------
;    0x0500: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0520: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0540: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0560: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0580: 0000000000000000000000000000000000000000000000000000000000000000
;    0x05A0: 0000000000000000000000000000000000000000000000000000000000000000
;    0x05C0: 0000000000000000000000000000000000000000000000000000000000000000
;    0x05E0: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0600: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0620: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0640: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0660: 0000000000000000000000000000000000000000000000000000000000000000
;    0x0680: 0000000000000000000000000000000000000000000000000000000000000000
;    0x06A0: 0000000000000000000000000000000000000000000000000000000000000000
;    0x06C0: 0000000000000000000000000000000000000000000000000000000000000000
;    0x06E0: 0000000000000000000000000000000000000000000000000000000000000000
;--------------------------------------------------------------------------------

; variables
new_line db 10, 13, 0

; print addresses
l1  db '0x0500:', 0
l2  db '0x0520:', 0
l3  db '0x0540:', 0
l4  db '0x0560:', 0
l5  db '0x0580:', 0
l6  db '0x05A0:', 0
l7  db '0x05C0:', 0
l8  db '0x05E0:', 0
l9  db '0x0600:', 0
l10 db '0x0620:', 0
l11 db '0x0640:', 0
l12 db '0x0660:', 0
l13 db '0x0680:', 0
l14 db '0x06A0:', 0
l15 db '0x06C0:', 0
l16 db '0x06E0:', 0

; map printed addresses
lines dw l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16

; addresses to read bytes from (comment out and uncomment below addresse for debug)
read_address dw 0x0500, 0x0520, 0x0540, 0x0560, 0x0580, 0x05A0, 0x05C0, 0x05E0
             dw 0x0600, 0x0620, 0x0640, 0x0660, 0x0680, 0x06A0, 0x06C0, 0x06E0

; address to write bytes to
write_address dw 0x0000

; fill trailing zeros to get exactly 512 bytes long binary file
times 512 - ($ - $$) db 0






