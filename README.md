# GameOS
Operating system for running boot sector games & apps

# What is it
GameOS is a 16-bit real mode 'operating system' allowing to run<br>
binary executables in a boot sector (0x0000_7C00 physical RAM address)<br>
It's distributed in a form of 'packs' with bundled games/apps.<br>

# GameOS runs on a real hardware
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/fJDYgAqOTxU/0.jpg)](https://youtu.be/fJDYgAqOTxU)

# YouTube tutorials on how to make it
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/jthPhsZLK7o/0.jpg)](https://www.youtube.com/watch?v=jthPhsZLK7o&list=PLLfIBXQeu3aZCod5V6FWRNkeLiFAizR3g&index=2)

# Run in emulator
1. Pick up GameOS.img from the desired pack
2. Command to run in QEMU: qemu-system-i386 -hda GameOS.img
3. https://copy.sh/v86/ run in online emulator: click upload HDD image then start emulation

# Create bootable USB (on linux) & run on real hardware 
1. Plug in USB flash drive
2. Run command 'sudo fdisk -l' => /dev/sdb should be your USB flash drive
3. Navigate to where GameOS image is located
4. Run command 'dd if=GameOS.img of=/dev/sdb count=2880 bs=512'
5. Boot from USB flash drive
