# assemble bootloader
nasm -f bin boot.asm -o boot.bin

# generate floppy image (2880 - 1 sector for bootloader = 2879)
dd if=/dev/zero of=floppy.bin count=2879 bs=512

# merge bootloader into floppy image
cat boot.bin floppy.bin > GameOS.img

# clean up files
rm -f boot.bin floppy.bin

# run OS image in the QEMU emulator (NOTE we load image from HDD not from FLOPPY!)
qemu-system-i386 -hda GameOS.img
