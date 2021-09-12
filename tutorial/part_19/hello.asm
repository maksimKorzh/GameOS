mov ah, 0x0e                ; BIOS code to output a char
mov al, 'H'                 ; char to print
int 0x10                    ; print the char
mov ah, 0x0e                ; BIOS code to output a char
mov al, 'e'                 ; char to print
int 0x10                    ; print the char
mov ah, 0x0e                ; BIOS code to output a char
mov al, 'l'                 ; char to print
int 0x10                    ; print the char
mov ah, 0x0e                ; BIOS code to output a char
mov al, 'l'                 ; char to print
int 0x10                    ; print the char
mov ah, 0x0e                ; BIOS code to output a char
mov al, 'o'                 ; char to print
int 0x10                    ; print the char
mov ah, 0x0e                ; BIOS code to output a char
mov al, 10                  ; char to print
int 0x10                    ; print the char
mov ah, 0x0e                ; BIOS code to output a char
mov al, 13                  ; char to print
int 0x10                    ; print the char
jmp 0x800:0x0000            ; return to shell
