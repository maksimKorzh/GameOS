;==========================
;       HELP COMMAND
;==========================

[bits 16]                               ; tell NASM to assemble 16-bit code
[org 0x7c00]                            ; tell NASM the code is running at 0x0000_8000 address (shell)

%define OFFSET 8                        ; size of a filename
%define FILES_ADDR 0x7e00               ; physical memory address to load FILES at from sector 2
%define SHELL_SEGMENT 0x800             ; shell segment for far jump

mov ax, 0                               ; set ACCUMULATOR REGISTER to 0
mov ds, ax                              ; set DATA SEGMENT to 0
mov es, ax                              ; set EXTRA SEGMENT to 0
mov ss, ax                              ; set STACK SEGMENT to 0
mov bp, 0x7c00                          ; set STACK BASE to 0x0000_7c00
mov sp, bp                              ; set STACK POINTER to 0x0000_7c00


call print_files                        ; output all the files available

jmp SHELL_SEGMENT:0x0000                ; go back to shell

; print all files available on USB flash drive
print_files:
    cld
    mov bx, 0                           ; reset game counter
    
    .next_file:
        mov ax, [file_list + bx]        ; AX points to the address of the 1st char of the current file name located in 'files.asm'
        cmp ax, no_file                 ; if no more files left in the list
        je .return                      ; return then
        mov si, ax                      ; SI points to the address of the 1st char of the current file name located in 'files.asm'
        call print_string               ; print current file name from 'files.asm'
        mov si, new_line                ; SI points to new_line variable
        call print_string               ; print new line
        add bx, 2                       ; point bx to the next filename
        jmp .next_file                  ; process next file name
    
    .return: ret                        ; return from the procedure

; procedure to print a string
print_string:
    cld                                 ; clear direction flag
    mov ah, 0x0e                        ; enable teletype output for 0x10 BIOS interrupt
    
    .next_char:                         ; print next char
        lodsb                           ; read next byte from SI register and then increment SI
        cmp al, 0                       ; match the zero terminating char of the string
        je .return                      ; return if string doesn't contain any chars any more
        int 0x10                        ; assuming ah = 0x0e int 0x10 would print a single char
        jmp .next_char                  ; repeat printing char until string is fully printed
    
    .return: ret                        ; return from procedure

; messages
error_message db 'Failed to read sector from USB!', 10, 13, 0

; variables
new_line db 10, 13
no_file dw 0
file_list dw FILES_ADDR                 ; help
          dw FILES_ADDR + OFFSET        ; clear
          dw FILES_ADDR + 2 * OFFSET    ; theme
          dw FILES_ADDR + 3 * OFFSET    ; edit
          dw FILES_ADDR + 4 * OFFSET    ; save
          dw FILES_ADDR + 5 * OFFSET    ; load
          dw FILES_ADDR + 6 * OFFSET    ; new
          dw FILES_ADDR + 7 * OFFSET    ; run
          dw FILES_ADDR + 8 * OFFSET    ; prog_1
          dw FILES_ADDR + 9 * OFFSET    ; prog_2
          dw FILES_ADDR + 10 * OFFSET   ; prog_3
          dw FILES_ADDR + 11 * OFFSET   ; prog_4
          dw FILES_ADDR + 12 * OFFSET   ; prog_5
          dw FILES_ADDR + 13 * OFFSET   ; tables
          dw no_file

times 512 - ($ - $$) db 0               ; fill trailing zeros to get exactly 512 bytes long binary file






