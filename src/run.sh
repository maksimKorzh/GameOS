# assemble GameOS
nasm -f bin GameOS.asm -l GameOS.lst -o boot.img

# creating blank floppy image
dd if=/dev/zero of=floppy.img count=2879 bs=512

# install OS to floppy image
cat boot.img chess.img floppy.img > GameOS.img

# clean up
rm -f GameOS.lst boot.img floppy.img

# run GameOS in QEMU
qemu-system-x86_64 -fda GameOS.img
