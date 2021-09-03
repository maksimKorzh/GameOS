;=====================================
;
;             Boot loader
;
;=====================================

[bits 16]
[org 0x7C00]

start:
    ; clear direction flag
    cld

    ; stack is not being set becuase the boot games would
    ; most likely override that anyway

    ; set up SHELL segment at 0x0000500
    mov ax, 0x50 ; RAM address for SHELL
    mov es, ax
    mov bx, 0
    mov cl, 2 ; FLOPPY sector for SHELL
    
    ; load shell
    call load_sector
    
    ; run shell
    jmp 0x50:0x0000 ; RAM address for SHELL

; load sector from FLOPPY
load_sector:
    mov al, 1
    mov ch, 0
    mov dh, 0
    mov dl, 0x00 ; FLOPPY
    mov ah, 0x02
    int 0x13
    jc .err
    ret
    
    .err:
        mov si, error_sector
        call print
        jmp $    

print:
    cld
    mov ah, 0x0E

    .next_char:
        lodsb
        cmp al, 0
        je .end
        int 0x10
        jmp .next_char
    
    .end: ret

error_sector db 'Failed to load sector!', 0
ok db 'Game OS loaded!', 0
times 510 - ($ - $$) db 0
dw 0xAA55
