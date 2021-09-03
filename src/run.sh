# assemble GameOS
nasm -f bin boot.asm -o boot.img
nasm -f bin shell.asm -o shell.img

# assemble games
nasm -f bin snake.asm -o snake.img
nasm -f bin tetranglix.asm -o tetranglix.img
nasm -f bin bricks.asm -o bricks.img

# creating blank floppy image
dd if=/dev/zero of=floppy.img count=2875 bs=512
# count = 2879 if bootsector only, 2879 - 4 more sectors = 2875

# install OS to floppy image
cat boot.img shell.img snake.img tetranglix.img bricks.img floppy.img > GameOS.img

# clean up
rm -f boot.lst shell.lst snake.lst tetranglix.lst bricks.lst
rm -f boot.img shell.img snake.img tetranglix.img bricks.img
rm -f floppy.img

# run GameOS in QEMU
qemu-system-x86_64 -fda GameOS.img
