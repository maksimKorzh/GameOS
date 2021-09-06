;==========================
;          SHELL
;==========================

[bits 16]                       ; tell NASM to assemble 16-bit code
[org 0x8000]                    ; tell NASM the code is running at 0x0000_8000 address (shell)

mov ax, 0                       ; set ACCUMULATOR REGISTER to 0
mov ds, ax                      ; set DATA SEGMENT to 0
mov es, ax                      ; set EXTRA SEGMENT to 0

mov si, 0x7e00
call print_string

; main OS loop
;shell_loop:

;    jmp shell_loop

; procedure to execute the boot sector game
execute:
    mov ax, 0x7c0                   ; init the segment
    mov es, ax                      ; init EXTRA SEGMENT register
    mov bx, 0                       ; init local offset within the segment
    mov cl, 6                       ; sector 2 on USB flash drive contains shell binary executable
    call read_sector                ; read sector from USB flash drive
    jmp 0x7c0:0x0000                ; jump to rhe shell executable and run it

; procedure to print a string
print_string:
    cld                         ; clear direction flag
    mov ah, 0x0e                ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                 ; print next char
        lodsb                   ; read next byte from SOURCE INDEX register
        cmp al, 0               ; match the zero terminating char of the string
        je .return              ; return if string doesn't contain any chars any more
        int 0x10                ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char          ; repeat printing char until string is fully printed
    
    .return: ret                ; return from procedure

; procedure to read a single sector from USB flash drive
read_sector:
    mov ah, 0x02                ; BIOS code to READ from storage device
    mov al, 1                   ; how many sectors to read
    mov ch, 0                   ; specify celinder
    mov dh, 0                   ; specify head
    mov dl, 0x80                ; specify HDD code
    int 0x13                    ; read the sector from USB flash drive
    jc .error                   ; if failed to read the sector handle the error
    ret                         ; return from procedure
    
    .error:
        mov si, error_message   ; point SOURCE INDEX register to error_message string's address
        call print_string       ; print error message
        jmp $                   ; stuck here forevevr (infinite loop)

; messages
error_message db 'Failed to read sector from USB!', 10, 13, 0

times 512 - ($ - $$) db 0       ; fill trailing zeros to get exactly 512 bytes long binary file

