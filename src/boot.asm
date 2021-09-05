;==========================
;        BOOTLOADER
;==========================


[bits 16]
[org 0x7c00]

; segament registers
mov ax, 0
mov ds, ax
mov es, ax

; Read sector 2 of this drive into memory
mov bx, 0x0000_7E00 ; Destination
mov cl, 2           ; Sector
mov ah, 2           ; Code to read data
mov al, 1           ; Number of sectors to read
mov ch, 0           ; Cylinder
mov dh, 0           ; Head
int 0x13            ; Fire in the hole!
jc err

mov si, success
call print
mov si, 0x0000_7E00
call print 
jmp $

err:
    mov si, error
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
    
    .end:
    ret

success db 'GameOS loaded!', 0
error db 'Failed to load sector 2!', 0

; boot
times 510 - ($ - $$) db 0
dw 0xaa55

db 'hello from sector 2!'
