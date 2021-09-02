[bits 16]                    ; tell assembler to use 16-bit mode
[ORG 0x7C00]                 ; load bootloader (OS in our case) code to 0x7C00 address into RAM

mov si, intro                ; point SI to 'hello' string
call print                   ; print string
jmp $                        ; infinite loop

print:                       ; print string, assumes SI points to 1st char in string
    cld                      ; clear direction flag
    mov ah, 0x0E             ; scrolling teletype mode

    .next:                   ; print char
        lodsb                ; reads byte at SI, increments SI, equal to: mov AL, [SI] and then: inc SI
        cmp al, 0            ; AL equals to 0 ?
        je .end              ; if so then jump to label 'end' and
        int 0x10             ; call video interrupt to print char on screen
        jmp .next            ; otherwise loop back to 'next' label to process next char
    
    .end:                    ; end of string
        ret                  ; return from procedure

intro db 'GameOS loaded, '   ; greeting string
      db 'type "games"'      ; ...
      db 10, 13, 0           ; new line, carriage return, end of string

times 510 - ($ - $$) db 0    ; fill the rest of boot sector bytes with 0s
dw 0xAA55                    ; add boot signature bytes
