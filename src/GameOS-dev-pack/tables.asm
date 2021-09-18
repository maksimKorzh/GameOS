;==========================
;     TABLES COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define SHELL_SEGMENT 0x800         ; segment to load SHELL at from sector 3
%define THEME_ADDR 0x8200           ; physical memory address to load THEME at from sector 6
%define THEME_UPDATE 0x0045         ; local offset of THEME_ADDR used for far call to update theme
%define ASCII_ADDR 0x8400           ; physical memory address to load ASCII table
%define OPCODES_ADDR 0x8B81         ; physical memory address to load OPCODES table
%define ESC_KEY 0x01                ; ESC key scan code
%define ENTER_KEY 0x1c              ; ENTER scan code
%define BACKSPACE_KEY 0x0e          ; BACKSPACE scan code

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00
mov si, message                     ; point SI to intro message
call print_string                   ; print intro message
call THEME_ADDR:THEME_UPDATE        ; update color scheme
mov ah, 0x00                        ; BIOS code to wait for a keystroke
int 0x16                            ; wait for user input
cmp al, 'a'                         ; if user typed 'a'
je show_ascii                       ; go to show_ascii
cmp al, 'o'                         ; if user typed 'o'
je show_opcodes                     ; go to show_opcodes
jmp SHELL_SEGMENT:0x0000            ; go back to shell

return:
    mov si, new_line                ; point SI to new_line variable
    call print_string               ; print new line
    mov si, good_luck               ; point SI to good_luck variable
    call print_string               ; print OPCODES table
    jmp SHELL_SEGMENT:0x0000        ; go back to shell

show_ascii:
    mov si, ASCII_ADDR              ; point SI to ASCII table
    call print_string               ; print ASCII table
    jmp hand_assemble               ; extract value by hands)

show_opcodes:
    mov si, OPCODES_ADDR            ; point SI to OPCODES table
    call print_string               ; print good_luck
    jmp hand_assemble               ; extract value by hands)

hand_assemble:
    call THEME_ADDR:THEME_UPDATE    ; update color scheme    
    mov si, prompt                  ; point SI to prompt
    call print_string               ; print prompt
    .next_byte:
        mov ah, 0x00                ; BIOS code to read key stroke from the keyboard
        int 0x16                    ; read a single keystroke from the keyboard
        cmp ah, ESC_KEY             ; if user pressed ESC key
        je return                   ; return to shell
        cmp ah, ENTER_KEY           ; if ENTER key has been pressed...
        je .new_line                ; type next line
        cmp ah, BACKSPACE_KEY       ; if BACKSPACE key has been pressed...
        je .erase_char              ; ... erase char
        mov ah, 0x0e                ; BIOS code for char output
        int 0x10                    ; echo char that has been typedtyped
        jmp .next_byte              ; read next byte from the user
    
    .erase_char:
        mov ah, 0x03                ; BIOS code to get cursor position
        int 0x10                    ; get cursor position
        cmp dl, 3                   ; cursor too far to the left?
        je .next_byte               ; if so process next byte
        mov ah, 0x0e                ; BIOS code for char output
        mov al, 8                   ; ASCII code for '\b'
        int 0x10                    ; move cursor one step back
        mov ah, 0x0e                ; BIOS code for char output
        mov al, 0                   ; ASCII code for empty char
        int 0x10                    ; move cursor one step back
        mov ah, 0x0e                ; BIOS code for char output
        mov al, 8                   ; ASCII code for '\b'
        int 0x10                    ; move cursor one step back
        jmp .next_byte              ; process next byte
    
    .new_line:
        mov si, new_line            ; point SI to new_line
        call print_string           ; print new line
        jmp hand_assemble           ; infinite shell loop    

; procedure to print a string
print_string:
    cld                             ; clear direction flag
    mov ah, 0x0e                    ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                     ; print next char
        lodsb                       ; read next byte from SOURCE INDEX register
        cmp al, 0                   ; match the zero terminating char of the string
        je .return                  ; return if string doesn't contain any chars any more
        int 0x10                    ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char              ; repeat printing char until string is fully printed
    
    .return: ret                    ; return from procedure

; messages
message db 'Show ASCII table - type "a"', 10, 13
        db 'Show OPCODES table - type "o"', 10, 13, 0
prompt  db '>>> ', 0

good_luck db '                 GOOD LUCK WITH HAND ASSEMBLED INSTRUCTIONS ;)', 10, 13, 0
new_line db 10, 13, 0

; fill trailing zeros to get exactly 512 bytes long binary file
times 512 - ($ - $$) db 0






