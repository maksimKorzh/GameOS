# GameOS
16-bit real mode OS running prepacked boot sector games

# How to run it
1. Navigate to https://copy.sh/v86
2. Upload 'GameOS.img' as floppy image
3. Click 'Start Emulation'

# How it works
1. Bootloader loads SHELL from 2nd sector of FLOPPY image at 0x00000500
2. SHELL loads boot sector games to boot sector and jumps there
3. Exiting from games is done via INT 0x19 (reboot)

# Game credits & links
SNAKE:           https://gitlab.com/pmikkelsen/asm_snake
TETRANGLEX:      https://github.com/XlogicX/tetranglix
BRICKS:          https://github.com/nanochess/bricks

# Issues
Unfortunately not compatible with all boot sector games
