;==========================
;        HEX EDITOR
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define SHELL_SEGMENT 0x800         ; shell segment for far jump
%define THEME_ADDR 0x8200               ; physical memory address to load THEME at from sector 6
%define THEME_UPDATE 0x0045             ; local offset of THEME_ADDR used for far call to update theme
%define ENTER_KEY 0x1c              ; ENTER scan code
%define ESC_KEY 0x01                ; ESC scan code

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00

call print_memory                   ; initially print hex dump

; main editor loop
edit_loop:
    call encode_word                ; encode write address
    mov dx, 0                       ; reset DX again to be used later on
    
    .next_byte:
        mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
        int 0x16                    ; read a single keystroke from the keyboard
        cmp ah, ESC_KEY             ; did user press ESC?
        je .return                  ; if so go to .return
        cmp ah, ENTER_KEY           ; did user press ENTER?
        je .next_line               ; if so then process next line input
        mov ah, 0x0e                ; BIOS code to output char to screen
        int 0x10                    ; print current char to screen
        cmp al, ' '                 ; did user enter white space?
        je .next_byte               ; if so, don't encode it and process next byte
        inc dh                      ; let encode_byte know whether this is the 1st or 2nd nibble
        call ascii_to_hex           ; convert user input char from ASCII to nibble (whatever 1st or 2nd)
        call encode_byte            ; encode user byte
        jmp .next_byte              ; process next byte
    
    .next_line:
        mov si, new_line            ; point SI to new_line variable
        call print_string           ; print new line
        call print_memory           ; print hex dump
        jmp edit_loop               ; repeat edit loop
    
    .return:
        mov si, new_line            ; point SI to new_line variable
        call print_string           ; print new line
        jmp SHELL_SEGMENT:0x0000    ; return to shell

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
        ret                         ; return to edit loop

encode_word:
    mov dx, 0                       ; reset DX register serving as a temp storage for a write_address
    mov si, prompt                  ; point SI to prompt variable
    call print_string               ; print prompt
    call THEME_ADDR:THEME_UPDATE    ; update color scheme
    mov ah, 0x00                    ; BIOS code to read key stroke from the keyboard
    int 0x16                        ; read a single keystroke from the keyboard
    cmp ah, ESC_KEY                 ; did user press ESC?
    je .return                      ; if so go to .return
    mov ah, 0x0e                    ; BIOS code to output char to screen
    int 0x10                        ; print current char to screen
    call ascii_to_hex               ; convert ASCII char typed by the user to 1st nibble
    mov dh, al                      ; move 1st nibble from AL to DH
    shl dh, 4                       ; encode 1st nibble (DX: (DH: 1111 0000) (DL: 0000 0000))
    mov ah, 0x00                    ; BIOS code to read key stroke from the keyboard
    int 0x16                        ; read a single keystroke from the keyboard
    mov ah, 0x0e                    ; BIOS code to output char to screen
    int 0x10                        ; print current char to screen
    call ascii_to_hex               ; convert ASCII char typed by the user to 1st nibble
    or dh, al                       ; encode 2st nibble (DX: (DH: 1111 1111) (DL: 0000 0000))
    mov ah, 0x00                    ; BIOS code to read key stroke from the keyboard
    int 0x16                        ; read a single keystroke from the keyboard
    mov ah, 0x0e                    ; BIOS code to output char to screen
    int 0x10                        ; print current char to screen
    call ascii_to_hex               ; convert ASCII char typed by the user to 1st nibble
    mov dl, al                      ; move 3rd nibble from AL to DH
    shl dl, 4                       ; encode 3rd nibble (DX: (DH: 1111 1111) (DL: 1111 0000))
    mov ah, 0x00                    ; BIOS code to read key stroke from the keyboard
    int 0x16                        ; read a single keystroke from the keyboard
    mov ah, 0x0e                    ; BIOS code to output char to screen
    int 0x10                        ; print current char to screen
    call ascii_to_hex               ; convert ASCII char typed by the user to 1st nibble
    or dl, al                       ; encode 4th nibble (DX: (DH: 1111 1111) (DL: 1111 1111))
    mov ax, dx                      ; move entire completed write address from DX to AX
    mov di, write_address           ; point DI to the address of write_address
    stosw                           ; write value of AX (write address) to write_address variable
    mov di, [write_address]         ; point DI to the physical RAM address to write bytes to stored in write_address
    mov si, colon                   ; point SI to colon variable
    call print_string               ; print colon on screen
    ret                             ; return to the edit loop
    
    .return:
        mov si, new_line            ; point SI to new_line
        call print_string           ; print new line
        jmp SHELL_SEGMENT:0x0000    ; return to shell

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
    
    .return:
        ret                    ; return from procedure

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
prompt db 'Enter address & bytes:', 10, 13, '> ', 0
colon db ':', 0

; print addresses
l1  db '0500:', 0
l2  db '0520:', 0
l3  db '0540:', 0
l4  db '0560:', 0
l5  db '0580:', 0
l6  db '05a0:', 0
l7  db '05c0:', 0
l8  db '05e0:', 0
l9  db '0600:', 0
l10 db '0620:', 0
l11 db '0640:', 0
l12 db '0660:', 0
l13 db '0680:', 0
l14 db '06a0:', 0
l15 db '06c0:', 0
l16 db '06e0:', 0

; map printed addresses
lines dw l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16

; addresses to read bytes from (comment out and uncomment below addresse for debug)
read_address dw 0x0500, 0x0520, 0x0540, 0x0560, 0x0580, 0x05A0, 0x05C0, 0x05E0
             dw 0x0600, 0x0620, 0x0640, 0x0660, 0x0680, 0x06A0, 0x06C0, 0x06E0

; address to write bytes to
write_address dw 0x0500

; fill trailing zeros to get exactly 512 bytes long binary file
times 512 - ($ - $$) db 0






