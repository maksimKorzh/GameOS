;==========================
;       THEME COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code

%define SHELL_SEGMENT 0x800         ; executable file bytes typed from hex editor
%define THEME_ADDR 0x8200           ; address where far call is referencing mode

boot_call:                          ; jump from shell to set attributes redirects here
mov ax, THEME_ADDR                  ; here CS:IP is 0x0000_7c00, however attr variable is referenced from 0x0000_8200
mov es, ax                          ; init extra segment to 0x0000_8200
mov ds, ax                          ; init data segment to 0x0000_8200
mov si, colors                      ; point SI to colors
call print_string                   ; print available color codes
mov si, prompt_bg                   ; point SI to prompt_bg
call print_string                   ; print foreground prompt
mov ah, 0x00                        ; BIOS code to get user key stroke
int 0x16                            ; get user key stroke
mov ah, 0x0e                        ; BIOS code to print char
int 0x10                            ; echo user input
call ascii_to_hex                   ; convert user input to color integer
mov dl, al                          ; temp store user input in DL
shl dl, 4                           ; encode 1st color
mov si, prompt_fg                   ; point SI to prompt_fg
call print_string                   ; print foreground prompt
mov ah, 0x00                        ; BIOS code to get user key stroke
int 0x16                            ; get user key stroke
mov ah, 0x0e                        ; BIOS code to print char
int 0x10                            ; echo user char
call ascii_to_hex                   ; convert user input to color integer
or dl, al                           ; encode 2nd color
mov byte [attr], dl                 ; store theme attributes
mov si, new_line                    ; point SI to new_line
call print_string                   ; print new_line

jmp SHELL_SEGMENT:0x0000            ; go back to shell

far_call:                           ; far calls from apps to update color scheme redirects here
push ds                             ; preserve DS register
mov ax, cs                          ; get current code segment
mov ds, ax                          ; init DS to current code segment
mov al, byte [attr]                 ; AL is attribute (1st nibble is background, 2nd nibble is foreground)
pop ds                              ; restore DS register

; procedure to set the text-mode attributes for 80x25 screen
set_attributes:
    push    es                      ; preserve ES register
    mov     cx, 80 * 25             ; number of chars to apply attributes to
    mov     bx, 0xb800              ; segment of the screen memory for this video mode
    mov     es, bx                  ; point ES to video memory
    xor     di, di                  ; point to char data of screen-pos 0,0

    .next_byte:
        inc di                      ; advance by 1 to point to the attribute, rather than the char
        stosb                       ; store our attribute byte to [es:di] and increment di. di now points to a character
        loop .next_byte             ; process next byte
        pop es                      ; restore ES register
        retf                        ; far return to caller app

; procedure to convert ASCII char to nibble (half of a byte)
ascii_to_hex:
    cmp al, 'a'                     ; did user input digit or letter
    jl .digit                       ; if digit then go to converting to digit
    sub al, 'a' - 10                ; otherwise convert ASCII char to hex letter ('a' => 10, 'b' => 11...'f' => 15)
    ret                             ; return from procedure
    
    .digit:
        sub al, '0'                 ; convert ASCII char to digit ('0' = > 0, '1' = > 1...'9' => 9)
        ret                         ; return from procedure

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
        ret                         ; return from procedure

; variables
colors:
db 'Background & foreground colors:', 10, 13
db '0: black', 10, 13
db '1: blue', 10, 13
db '2: green', 10, 13
db '3: cyan', 10, 13
db '4: red', 10, 13
db '5: magenta', 10, 13
db '6: brown', 10, 13
db '7: light gray', 10, 10, 13
db 'Foreground only:', 10, 13
db '8: dark gray', 10, 13
db '9: light blue', 10, 13
db 'a: light green', 10, 13
db 'b: light cyan', 10, 13
db 'c: light red', 10, 13
db 'd: light magenta', 10, 13
db 'e: yellow', 10, 13
db 'f: white', 10, 13, 0
new_line db 10, 13, 0
prompt_bg db 10, 13, 'Enter background color (0-7): ', 0
prompt_fg db 10, 13, 'Enter foreground color (0-f): ', 0
attr db 0x07

; fill trailing zeros to get exactly 512 bytes long binary file
times 512 - ($ - $$) db 0





