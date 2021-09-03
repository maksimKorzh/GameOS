# assemble GameOS

# assemble games
nasm -f bin slide.asm -o slide.img

# creating blank floppy image
dd if=/dev/zero of=floppy.img count=2879 bs=512

# install OS to floppy image
cat slide.img floppy.img > GameOS.img

# clean up
rm -f boot.lst shell.lst edit.lst
rm -f boot.img shell.img edit.img
rm -f floppy.img

# run GameOS in QEMU
qemu-system-x86_64 -fda GameOS.img
