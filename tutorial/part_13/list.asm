;==========================
;       LIST COMMAND
;==========================

[bits 16]                           ; tell NASM to assemble 16-bit code
[org 0x7c00]                        ; tell NASM the code is running at 0x0000_8000 address (shell)

%define OFFSET 8                    ; size of a filename
%define FILES_ADDR 0x7e00           ; physical memory address to load FILES at from sector 2
%define SHELL_SEGMENT 0x800         ; shell segment for far jump

mov ax, 0                           ; set ACCUMULATOR REGISTER to 0
mov ds, ax                          ; set DATA SEGMENT to 0
mov es, ax                          ; set EXTRA SEGMENT to 0
mov ss, ax                          ; set STACK SEGMENT to 0
mov bp, 0x7c00                      ; set STACK BASE to 0x0000_7c00
mov sp, bp                          ; set STACK POINTER to 0x0000_7c00
mov bx, FILES_ADDR                  ; destination address in RAM of where data from sector 2 is going to be loaded
mov cl, 2                           ; sector 2 on USB flash drive contains file names
call read_sector                    ; read sector from USB flash drive
call print_files                    ; output all the files available
jmp SHELL_SEGMENT:0x0000            ; go back to shell

; print all files available on USB flash drive
print_files:
    cld
    mov bx, 0                       ; reset game counter
    
    .next_file:
        mov ax, [file_list + bx]    ; AX points to the address of the 1st char of the current file name located in 'files.asm'
        cmp ax, no_file             ; if no more files left in the list
        je .return                  ; return then
        mov si, ax                  ; SI points to the address of the 1st char of the current file name located in 'files.asm'
        call print_string           ; print current file name from 'files.asm'
        mov si, new_line            ; SI points to new_line variable
        call print_string           ; print new line
        add bx, 2                   ; point bx to the next filename
        jmp .next_file              ; process next file name
    
    .return: ret                    ; return from the procedure

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
    
    .return: ret                    ; return from procedure

; procedure to read a single sector from USB flash drive
read_sector:
    mov ah, 0x02                    ; BIOS code to READ from storage device
    mov al, 1                       ; how many sectors to read
    mov ch, 0                       ; specify celinder
    mov dh, 0                       ; specify head
    mov dl, 0x80                    ; specify HDD code
    int 0x13                        ; read the sector from USB flash drive
    jc .error                       ; if failed to read the sector handle the error
    ret                             ; return from procedure
    
    .error:
        mov si, error_message       ; point SOURCE INDEX register to error_message string's address
        call print_string           ; print error message
        jmp $                       ; stuck here forevevr (infinite loop)

; messages
error_message db 'Failed to read sector from USB!', 10, 13, 0

; variables
new_line db 10, 13
no_file dw 0
file_list dw FILES_ADDR, FILES_ADDR + OFFSET, FILES_ADDR + 2 * OFFSET, FILES_ADDR + 3 * OFFSET, no_file

times 512 - ($ - $$) db 0           ; fill trailing zeros to get exactly 512 bytes long binary file






