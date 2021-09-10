# assemble bootloader
nasm -f bin boot.asm -o boot.bin

# assemble game list
nasm -f bin files.asm -o files.bin

# assemble system utilities
nasm -f bin list.asm -o list.bin
nasm -f bin edit.asm -o edit.bin

# assemble shell
nasm -f bin shell.asm -o shell.bin

# generate floppy image (2880 - 6 sectors used = 2874)
dd if=/dev/zero of=floppy.bin count=2874 bs=512

# merge bootloader into floppy image
cat boot.bin files.bin shell.bin \
    list.bin                     \
    edit.bin                     \
    ./games/tetros.bin           \
    ./games/bricks.bin           \
    floppy.bin > GameOS.img

# clean up files
rm -f boot.bin floppy.bin files.bin shell.bin list.bin

# run OS image in the QEMU emulator (NOTE we load image from HDD not from FLOPPY!)
qemu-system-i386 -hda GameOS.img
