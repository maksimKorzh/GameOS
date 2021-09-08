# GameOS
Operating system for running boot sector games & apps

# What a heck is it?
GameOS is a 16-bit real mode 'operating system' allowing to run<br>
binary executables in a boot sector (0x0000_7C00 physical RAM address)<br>
It's distributed in a form of 'packs' with bundled games/apps.<br>

# GameOS runs on a real hardware
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/fJDYgAqOTxU/0.jpg)](https://youtu.be/fJDYgAqOTxU)

# YouTube tutorials on how to make it
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/jthPhsZLK7o/0.jpg)](https://www.youtube.com/watch?v=jthPhsZLK7o&list=PLLfIBXQeu3aZCod5V6FWRNkeLiFAizR3g&index=2)

# Run in emulator
1. Pick up GameOS.img from the desired pack, e.g. from <a href="https://github.com/maksimKorzh/GameOS/tree/main/src/GameOS_3rd_party_games_pack">here</a>
2. Command to run in QEMU: qemu-system-i386 -hda GameOS.img
3. Run in online emulator(https://copy.sh/v86/): click upload HDD image then start emulation

# Create bootable USB (on linux) & run on real hardware 
1. Plug in USB flash drive
2. Run command 'sudo fdisk -l' => /dev/sdb should be your USB flash drive
3. Navigate to where GameOS image is located
4. Run command 'dd if=GameOS.img of=/dev/sdb count=2880 bs=512'
5. Boot from USB flash drive

# Usefule resources
x86 Real mode: https://wiki.osdev.org/Real_Mode<br>
x86 Real mode memory segmentation: https://wiki.osdev.org/Segmentation<br>
x86 Memory map: https://wiki.osdev.org/Memory_Map_(x86)<br>
x86 BIOS interrupts: http://www.ablmcc.edu.hk/~scy/CIT/8086_bios_and_dos_interrupts.htm<br>
x86 Assembly registers: https://www.assemblylanguagetuts.com/x86-assembly-registers-explained/</br>
x86 Assembly instructions: https://www.aldeid.com/wiki/X86-assembly/Instructions</br>
CHS addresses: https://en.wikipedia.org/wiki/Cylinder-head-sector</br>
x86 Online emulator: https://copy.sh/v86/</br>
