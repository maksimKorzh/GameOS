;==========================
;          FILES
;==========================

[bits 16]

%define SHELL 0x800                         ; shell segment
%define SOURCE 0x1a0                        ; asm source code segment
%define THEME_ADDR 0x8200                   ; physical memory address to load THEME at from sector 6
%define THEME_UPDATE 0x0045                 ; local offset of THEME_ADDR used for far call to update theme
%define ESC 0x01                            ; ESC scan code
%define ENTER 0x1C                          ; ENTER scan code
%define BACKSPACE 0x0E                      ; BACKSPACE scancode

mov ah, 0x00                                ; BIOS code to set video mode
mov al, 0x03                                ; 80 x 25 text mode
int 0x10                                    ; set video mode
mov ax, SOURCE                              ; set AX to asm source segment
mov ds, ax                                  ; set DS to asm source segment
mov es, ax                                  ; set DS to asm source segment

mov di, 0                                   ; point DI to asm source's 1st char
clear_memory:
    cmp di, 0x2600                          ; did DI pass through 0x0700?
    je next                                 ; if so we're done
    mov al, 0                               ; byte value to set to ehre DI is pointing to
    stosb                                   ; store the value at AL to the byte where DI is pointing to
    jmp clear_memory                        ; repeat until all the 512 bytes in (0x0000_0500-0x0000_0700) range are cleared

next:
mov di, 0                                   ; point DI to asm source's 1st char

edit_loop:
    call THEME_ADDR:THEME_UPDATE            ; update color scheme
    mov ah, 0x00                            ; BIOS code to get user input
    int 0x16                                ; get key stroke from user
    cmp ah, ESC                             ; if ESC is pressed
    je .return                              ; quit the editor
    cmp ah, ENTER                           ; if ENTER is pressed
    je .new_line                            ; go to new line
    cmp ah, BACKSPACE                       ; if BACKSPACE is pressed
    je .erase                               ; erase char

    .echo:
        mov ah, 0x0E                        ; BIOS code to output char in teletype mode
        int 0x10                            ; print char to screen
        stosb                               ; store printed char to memory
            
    jmp edit_loop                           ; continue editing

    .new_line:
        mov ah, 0x0E                        ; BIOS code to output char in teletype mode
        mov al, 10                          ; set AL to new line char
        int 0x10                            ; print char to screen
        stosb                               ; store printed char to memory
        mov al, 13                          ; set AL to carriage return        
        int 0x10                            ; print char to screen
        jmp edit_loop                       ; print new line

    .erase:
        mov ah, 0x03                        ; BIOS code to output char in teletype mode
        int 0x10                            ; print char to screen
        cmp dl, 0                           ; if cursor in the left most position
        je edit_loop                        ; continue editing
        mov ah, 0x0E                        ; BIOS code to output char in teletype mode
        mov al, 8                           ; set AL to '\b'
        int 0x10                            ; move cursor one step to tle left
        mov ah, 0x0E                        ; BIOS code to output char in teletype mode
        mov al, 0                           ; set AL to empty char
        int 0x10                            ; print empty char (erase char)
        mov ah, 0x0E                        ; BIOS code to output char in teletype mode
        mov al, 8                           ; set AL to empty char
        int 0x10                            ; print empty char (erase char)
        mov al, 0                           ; set AL to 0
        dec di                              ; decrement source code pointer in memory
        stosb                               ; replace last printed char with 0
        dec di                              ; decrement source code pointer in memory
        jmp edit_loop                       ; continue editing

    .return:
        jmp SHELL:0x0000                    ; return to GameOS shell

print:
    cld                                     ; clear direction flag to make sure SI/DI gets incremented
    mov ah, 0x0E                            ; BIOS code to output char in teletype mode

    .next_char:
        lodsb                               ; init AL with next char of the asm source code
        cmp al, 10                          ; is it a new line?
        je .new_line                        ; if so then print new line

    .end_str:
        cmp al, 0                           ; is it zero terminating char?
        je .end                             ; if so then end printing
        int 0x10                            ; print char on screen
        jmp .next_char                      ; process next char

    .new_line:
        int 0x10                            ; print char on screen
        mov al, 13                          ; set AL to '\r'
        jmp .end_str                        ; end string
    
    .end:
        ret                                 ; return from procedure

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file
