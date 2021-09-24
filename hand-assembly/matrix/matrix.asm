;==========================================================================================================
;                                         MATRIX Screensaver
;==========================================================================================================
start:                          mov ax, 0x0003                   ; BIOS code to set 80 x 25 text mode
                                int 0x10                         ; set video mode
                                mov ch, 0x20                     ; needed to remove cursor from screen
                                mov ah, 1                        ; needed to remove cursor from screen
                                int 0x10                         ; update screen
                                mov bx, 0xb800                   ; video memory segment constant
                                mov es, bx                       ; point ES to video memory
                                mov ax, 0x022f                   ; set fg=green, bg=black, char='0' - 1
print:                          xor di, di                       ; move cursor to the top left corner
next_byte:                      inc al                           ; pick up next digit char
                                stosw                            ; print digit on screen
                                add di, 2                        ; skip column
                                cmp di, 0x0fa0                   ; if cursor is at bottom right corner
                                je print                         ; then move it back to top left one
                                cmp al, 0x3a                     ; if digit char has been exhausted
                                jge reset                        ; set it back to '0' - 1
                                jmp next_byte                    ; print next digit
reset:                          mov ax, 0x022f                   ; reset digit to print to '0' - 1
                                jmp next_byte                    ; print next digit
                                times 510 - ($-$$) db 0          ; boot sector padding
                                dw 0xaa55                        ; BIOS boot signature
                                times (2880 * 512) - ($-$$) db 0 ; floppy image padding
