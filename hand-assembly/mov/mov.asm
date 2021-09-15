;==========================
;     MOV instruction
;==========================

; immediate data to register
mov si, message
; 1011 1110 e001h => bee001

; register to register
mov ax, bx
; 1000 1001 1101 1000 => 89d8

; segment to register
mov ax, cs 
; 1000 1100 1100 1000 => 8cc8

; register to segment
mov ds, ax
; 1000 1110 1101 1000 => 8ed8

; register to memory value
mov word [message], dx
; 1000 1001 0001 0110 e001h => 8916e001

; immediate data to memory value
mov byte [message], 0x61
; 1100 0110 0000 0110 e001 61 => c606e00161

; ax to value at memory
mov word [message], ax
; 1010 0011 e001h => a3e001

; memory value to ax
mov ax, word [message]
; 1010 0001 e001h => a1e001

; memory value to register
mov bx, word [message]
; 1000 1011 0001 1110 e001h => 8b1ee001


; fill zeros, so that 'message' address is 0x1e0
times 480 - ($ - $$)  db 0       
message db 'hand assembly', 0
