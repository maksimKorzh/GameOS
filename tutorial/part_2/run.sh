# assemble bootloader
nasm -f bin boot.asm -o boot.bin

# assemble game list
nasm -f bin files.asm -o files.bin

# generate floppy image (2880 - 2 sectors for bootloader & files = 2878)
dd if=/dev/zero of=floppy.bin count=2878 bs=512

# merge bootloader into floppy image
cat boot.bin files.bin floppy.bin > GameOS.img

# clean up files
rm -f boot.bin floppy.bin files.bin

# run OS image in the QEMU emulator (NOTE we load image from HDD not from FLOPPY!)
qemu-system-i386 -hda GameOS.img
