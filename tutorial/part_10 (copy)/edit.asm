;==========================
;       EDIT COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 read_addressess (shell)

%define OFFSET 8                    ; size of a filename
%define FILES_read_address 0x7e00           ; physical memory read_addressess to load FILES at from sector 2
%define SHELL_SEGMENT 0x800        ; shell segment for far jump

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00



;mov di, 0x7700              ; point DESTINATION INDEX register to user_input variable's read_addressess

call print_memory
; main OS loop
edit_loop:     
    mov dx, 0
    
    mov si, hex
    call print_string
    
    mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
    int 0x16                    ; read a single keystroke from the keyboard
    cmp ah, 0x01
    je .return
    mov ah, 0x0e
    int 0x10
    call xdigit
    mov dh, al
    shl dh, 4
    
    mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
    int 0x16                    ; read a single keystroke from the keyboard
    mov ah, 0x0e
    int 0x10
    call xdigit
    or dh, al
    
    mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
    int 0x16                    ; read a single keystroke from the keyboard
    mov ah, 0x0e
    int 0x10
    call xdigit
    mov dl, al
    shl dl, 4
    
    mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
    int 0x16                    ; read a single keystroke from the keyboard
    mov ah, 0x0e
    int 0x10
    call xdigit
    or dl, al

    mov ax, dx
    mov di, write_read_addressess
    stosw
    mov di, [write_read_addressess]

    mov si, colon
    call print_string
    
    mov dx, 0
    ; 4b left, 48 up, 4d right, 50 down
    .next_byte:
        
        mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
        int 0x16                    ; read a single keystroke from the keyboard
        cmp ah, 0x01
        je .return
        cmp ah, 0x1c                ; if ENTER key has been pressed...
        je .new_line                ; got to .search label
        mov ah, 0x0e                ; BIOS code for char output
        int 0x10                    ; echo char that has been typedtyped
        cmp al, 32
        je .next_byte
        inc dh
        call xdigit
        call encode
        jmp .next_byte              ; read next byte from the user
     
     .new_line:
        mov si, new_line
        call print_string            ; ... search the game by name
        call print_memory
        jmp edit_loop
     
     .return:
        mov si, new_line
        call print_string
        jmp 0x800:0x0000

    jmp edit_loop                  ; infinite shell loop

encode:
    cmp dh, 1
    je .1st
    cmp dh, 2
    je .2nd
    
    .1st:
        mov dl, al
        shl dl, 4
        ret
    
    .2nd:
        mov dh, 0
        or dl, al
        mov al, dl
        stosb
        ret

xdigit:
    cmp al, 0x61
    jl .digit
    sub al, 0x57
    ret
    
    .digit:
        sub al, 0x30
        ret


ascii_digit:
    cmp al, 10
    jl .digit
    cmp al, 10
    jge .letter
    .digit:
        add al, '0'        
        jmp .print
    .letter:
        add al, 'a' - 10
        jmp .print
    .print:
        mov ah, 0x0e
        int 0x10
        ret

print_memory:
    cld
    mov bx, 0
    
    .next_line:
        cmp bx, 32
        jge .return
        mov si, [lines + bx]    
        call print_string
        mov si, [read_address + bx]                             ; clear direction flag
        mov ch, 0
        mov ah, 0x0e                    ; enable teletype output for 0x10 BIOS interrupt
        mov ah, 0x0e
        mov al, ' '
        int 0x10
        
        .next_char:                     ; print next char
            lodsb                       ; read next byte from SI register and then increment SI
            cmp ch, 32                   ; match the zero terminating char of the string
            je .continue                  ; return if string doesn't contain any chars any more
            mov cl, al
            and al, 0xf0 ; first digit
            shr al, 4    ; shift right
            call ascii_digit
            mov al, cl   ; second digit
            and al, 0x0f ; second digit
            call ascii_digit
            inc ch
            jmp .next_char              ; repeat printing char until string is fully printed

        .continue:
            add bx, 2
            mov si, new_line
            call print_string
            jmp .next_line
    
    .return:
        mov si, new_line
        call print_string
        ret                    ; return from procedure

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

new_line db 10, 13, 0
hex db '0x', 0
colon db ': ', 0
l1 db '0x7700:', 0
l2 db '0x7720:', 0
l3 db '0x7740:', 0
l4 db '0x7760:', 0
l5 db '0x7780:', 0
l6 db '0x77a0:', 0
l7 db '0x77c0:', 0
l8 db '0x77e0:', 0
l9 db '0x7800:', 0
l10 db '0x7820:', 0
l11 db '0x7840:', 0
l12 db '0x7860:', 0
l13 db '0x7880:', 0
l14 db '0x78a0:', 0
l15 db '0x78c0:', 0
l16 db '0x78e0:', 0

lines dw l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16
read_address dw 0x7700, 0x7720, 0x7740, 0x7760, 0x7780, 0x77a0, 0x77c0, 0x77e0
     dw 0x7800, 0x7820, 0x7840, 0x7860, 0x7880, 0x78a0, 0x78c0, 0x78e0

;read_address dw 0x7c00, 0x7c20, 0x7c40, 0x7c60, 0x7c80, 0x7ca0, 0x7cc0, 0x7ce0,
;     dw 0x7D00, 0x7D20, 0x7D40, 0x7D60, 0x7D80, 0x7Da0, 0x7Dc0, 0x7de0

write_read_addressess dw 0x0000

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file




