# assemble bootloader
nasm -f bin boot.asm -o boot.bin

# assemble game list
nasm -f bin files.asm -o files.bin

# assemble system utilities
nasm -f bin help.asm -o help.bin
nasm -f bin clear.asm -o clear.bin
nasm -f bin theme.asm -o theme.bin
nasm -f bin edit.asm -o edit.bin
nasm -f bin run.asm -o run.bin
nasm -f bin save.asm -o save.bin
nasm -f bin load.asm -o load.bin
nasm -f bin new.asm -o new.bin


# assemble user defined program's placeholders
nasm -f bin prog_1.asm -o prog_1.bin
nasm -f bin prog_2.asm -o prog_2.bin
nasm -f bin prog_3.asm -o prog_3.bin
nasm -f bin prog_4.asm -o prog_4.bin
nasm -f bin prog_5.asm -o prog_5.bin

# assemble shell
nasm -f bin shell.asm -o shell.bin

# generate floppy image (2880 - 16 sectors used = 2864)
dd if=/dev/zero of=floppy.bin count=2864 bs=512

# merge bootloader into floppy image
cat boot.bin files.bin shell.bin \
    help.bin                     \
    clear.bin                    \
    theme.bin                    \
    edit.bin                     \
    save.bin                     \
    load.bin                     \
    new.bin                      \
    run.bin                      \
    prog_1.bin                   \
    prog_2.bin                   \
    prog_3.bin                   \
    prog_4.bin                   \
    prog_5.bin                   \
    floppy.bin > GameOS.img

# clean up files
rm -f boot.bin floppy.bin files.bin shell.bin
rm -f clear.bin theme.bin help.bin edit.bin run.bin save.bin load.bin new.bin 
rm -f prog_1.bin prog_2.bin prog_3.bin prog_4.bin prog_5.bin

# run OS image in the QEMU emulator (NOTE we load image from HDD not from FLOPPY!)
qemu-system-i386 -hda GameOS.img









