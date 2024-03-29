# GameOS
Operating system for developing boot sector games & apps

# What a heck is it?
GameOS is a 16-bit real mode operating system allowing to run<br>
binary executables in a boot sector (0x0000_7C00 physical RAM address)<br>
It's distributed in a form of 'packs' with bundled games/apps.<br>

# GameOS runs on a real hardware
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/fJDYgAqOTxU/0.jpg)](https://youtu.be/fJDYgAqOTxU)

# Coding in x86 machine codes under GameOS:
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ZdBYSx3zuqE/0.jpg)](https://www.youtube.com/watch?v=ZdBYSx3zuqE)

# Coding GameOS in x86 assembly (20 videos)
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/jthPhsZLK7o/0.jpg)](https://www.youtube.com/watch?v=jthPhsZLK7o&list=PLLfIBXQeu3aZCod5V6FWRNkeLiFAizR3g&index=2)

# Distribution: GameOS: 3rd party games
 - run boot sector games from floppy image

# Distribution: GameOS: developer pack
 - create new 512 bytes programs in hex editor using x86 machine codes!
 - save up to 5 programs onto USB flash drive
 - load & edit one of 5 user defined programs
 - run user defined games/apps in the boot sector or at 0x0000_0500-0x0000_06FF (hex editor's scope)
 - change color scheme
 - clear screen

# Run in emulator
1. Pick up GameOS.img from the <a href="https://github.com/maksimKorzh/GameOS/tree/main/src">desired pack</a>
2. Command to run in QEMU: <strong>qemu-system-i386 -hda GameOS.img</strong>
3. Run in online emulator(https://copy.sh/v86/): click upload HDD image then start emulation

# Create bootable USB (on linux) & run on real hardware 
1. Plug in USB flash drive
2. Run command <strong>sudo fdisk -l</strong> => /dev/sdb should be your USB flash drive
3. Navigate to where GameOS image is located
4. Run command <strong>dd if=GameOS.img of=/dev/sdb count=2880 bs=512</strong>
5. Boot from USB flash drive

# Useful resources
CHS addresses: https://en.wikipedia.org/wiki/Cylinder-head-sector</br>
x86 Real mode: https://wiki.osdev.org/Real_Mode<br>
x86 Real mode memory segmentation: https://wiki.osdev.org/Segmentation<br>
x86 Memory map: https://wiki.osdev.org/Memory_Map_(x86)<br>
x86 BIOS interrupts: http://www.ablmcc.edu.hk/~scy/CIT/8086_bios_and_dos_interrupts.htm<br>
x86 Assembly registers: https://www.assemblylanguagetuts.com/x86-assembly-registers-explained/</br>
x86 Assembly instructions: https://www.aldeid.com/wiki/X86-assembly/Instructions</br>
x86 Assembler Instruction Set Opcode Table http://sparksandflames.com/files/x86InstructionChart.html
x86 Online emulator: https://copy.sh/v86/</br>
