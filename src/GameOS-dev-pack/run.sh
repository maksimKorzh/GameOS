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

# assemble lookup tables reference
nasm -f bin tables.asm -o tables.bin
nasm -f bin ascii.asm -o ascii.bin
nasm -f bin opcodes.asm -o opcodes.bin

# assemble user defined program's placeholders
nasm -f bin prog_1.asm -o prog_1.bin
nasm -f bin prog_2.asm -o prog_2.bin
nasm -f bin prog_3.asm -o prog_3.bin
nasm -f bin code.asm -o code.bin
nasm -f bin assembler.asm -o assembler.bin

# assemble shell
nasm -f bin shell.asm -o shell.bin

# generate floppy image (2880 - 28 sectors used = 2852)
dd if=/dev/zero of=floppy.bin count=2852 bs=512

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
    code.bin                     \
    assembler.bin                \
    tables.bin                   \
    ascii.bin                    \
    opcodes.bin                  \
    floppy.bin > GameOS.img

# clean up files
rm -f boot.bin floppy.bin files.bin shell.bin
rm -f clear.bin theme.bin help.bin edit.bin run.bin save.bin load.bin new.bin
rm -f prog_1.bin prog_2.bin code.bin assembler.bin prog_5.bin
rm -f tables.bin ascii.bin opcodes.bin

# run OS image in the QEMU emulator (NOTE we load image from HDD not from FLOPPY!)
qemu-system-i386 -hda GameOS.img









