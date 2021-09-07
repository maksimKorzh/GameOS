; use 16-bit mode
[bits 16]
[org 0x8000]

; init
mov ax, 0
mov ds, ax
mov es, ax

; set text mode (80 x 25)
mov ah, 0x00
mov al, 0x03
int 0x10

; print greeting   
mov si, intro
call print


; main loop
shell_loop:
    ; print prompt
    mov si, prompt
    call print

    ; clear user input
    mov di, user_input
    mov al, 0
    times 20 stosb

    ; read user input
    ; prepare user input to store bytes
    mov di, user_input
    
    ; read next byte in user input
    .next_byte:
        ; get user input from keyboard
        mov ah, 0x00
        int 0x16

        ; return on ENTER key pressed
        cmp ah, 0x1C    ; Enter scan code ;
        je search_game
        
        ; on BACKSPACE key pressed
        cmp ah, 0x0E
        je .erase
        
        ; store input character
        stosb
        
        ; print input character
        mov ah, 0x0E
        int 0x10
        
        ; loop
        jmp .next_byte
    
    ; erase character
    .erase:
        ; get cursor position
        mov ah, 0x03
        int 0x10
        
        ; if cursor column is 3 continue shell loop 
        cmp dl, 3
        je .next_byte
        
        ; erase char on screen ;
        mov ah, 0x0E
        mov al, 8
        int 0x10
        mov ah, 0x0E
        mov al, 0
        int 0x10
        mov ah, 0x0E
        mov al, 8
        int 0x10

        ; erase char in buffer ;
        mov al, 0
        dec di
        stosb
        dec di
        jmp .next_byte

    ; search for available games
    search_game:
        ; if command wasn't printed continue shell loop
        cmp byte [user_input], 0
        je shell_loop

        mov bx, 0   ; game list index ;
        mov dl, 3   ; first game on FLOPPY locates sector 3 ;
        
        .next_game:
            mov ax, word [game_list + bx]
            cmp ax, no_game
            je .game_not_found
            add bx, 2
            inc dl
            
            
            call compare_string

            cmp cl, 1
            je execute
            
            jmp .next_game

            .invalid_command:
                mov si, error_no_game
                call print
                mov ah, 0x00
                int 0x16
                jmp .next_game

                    

            .game_not_found:
                mov si, error_no_game
                call print        
                jmp shell_loop

execute:
    ; load sector
    mov ax, 0x7c0 ; RAM address for SHELL
    mov es, ax
    mov bx, 0
    mov cl, dl ; FLOPPY sector for SHELL

    call load_sector
    jmp 0x7C0:0x0000 ; run game at bootsector!    

; match user input with available game names
compare_string:
    cld
    mov di, user_input
    mov si, ax
    
    .next_byte:
        lodsb
        scasb
        jne .return_false 
        cmp al, 0
        je .return_true
        jmp .next_byte    
    
        .return_true:
            mov cl, 1
            ret

        .return_false:
            mov cl, 0
            ret

; load game from FLOPPY image
load_sector:
    mov ah, 0x02                ; BIOS code to READ from storage device
    mov al, 1                   ; how many sectors to read
    mov ch, 0                   ; specify celinder
    mov dh, 0                   ; specify head
    mov dl, 0x80
    int 0x13                    ; read the sector from USB flash drive
    jc .error                   ; if failed to read the sector handle the error
    ret                         ; return from procedure
    
    .error:
        mov si, error_sector   ; point SOURCE INDEX register to error_message string's address
        call print       ; print error message
        jmp $                   ; stuck here forevevr (infinite loop)

; print string
print:
    cld
    mov ah, 0x0E

    ; print char
    .next:
        lodsb
        cmp al, 0
        je .end
        int 0x10
        jmp .next
    
    .end:
        ret

; messages
intro db 10, 13, ' Available games, type game name and hit enter to play:', 10, 10, 13,
      db         ' snake', 10, 13
      db         ' tetranglix', 10, 13
      db         ' bricks', 10, 13
      db 10, 13, ' Hit ESC or "q" to quit the game', 10, 13, 0 
prompt db 10, 13, ' $ ', 0
error_no_game db 10, 13, 'No game found!', 0
error_sector db 10, 13, 'Failed to load sector!', 0

; games
;snake db 'snake', 0
;tetranglix db 'tetranglix', 0
;bricks db 'bricks', 0
no_game dw  0
game_list dw 0x7e00, 0x7e00 + 8, 0x7e00 + 16, no_game
;game_list db 0x7e00 + 25;

; user input
user_input times 20 db 0

; executable should be 512 bytes long
times 512 - ($ - $$) db 0
