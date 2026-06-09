const questionsData = [
    {
        "id": 1,
        "category": "Lab Tools",
        "question": "Which measurement device displays graphical signals in a format on a pair of axes, generally with Y as voltage and X as the time?",
        "options": [
            "Multimeter",
            "Oscilloscope",
            "Power Supply",
            "Function Generator"
        ],
        "answer": "Oscilloscope",
        "explanation": "An oscilloscope is the primary tool used to observe the exact shape, amplitude, and timing of electrical signals over time."
    },
    {
        "id": 2,
        "category": "Lab Tools",
        "question": "Which piece of equipment is able to generate custom, user-defined waveforms rather than just common shapes?",
        "options": [
            "Arbitrary Waveform Generator (AWG)",
            "Standard Function Generator",
            "Digital Multimeter",
            "Logic Analyzer"
        ],
        "answer": "Arbitrary Waveform Generator (AWG)",
        "explanation": "Unlike a standard function generator that outputs basic shapes (sine, square), an AWG allows you to draw or program exact, arbitrary voltage waveforms."
    },
    {
        "id": 3,
        "category": "Lab Tools",
        "question": "Which troubleshooting method checks for the presence or absence of a signal at a point halfway between input and output?",
        "options": [
            "Signal-Tracing",
            "Signal Substitution",
            "Half-Splitting",
            "Power-Cycling"
        ],
        "answer": "Half-Splitting",
        "explanation": "Half-splitting dramatically reduces troubleshooting time by splitting the circuit in half, checking the midpoint, and instantly eliminating half of the circuit as the fault location."
    },
    {
        "id": 4,
        "category": "Lab Tools",
        "question": "Signal substitution is used when the system being tested has been ........ from its signal source.",
        "options": [
            "separated",
            "integrated",
            "short-circuited",
            "grounded"
        ],
        "answer": "separated",
        "explanation": "When a system is disconnected from its original input, a function generator is used to 'substitute' the missing signal to test the remaining stages."
    },
    {
        "id": 5,
        "category": "PCB & SMT",
        "question": "The most common type of through-hole package for integrated circuits is the.......",
        "options": [
            "PLCC",
            "DIP",
            "QFP",
            "SSOP"
        ],
        "answer": "DIP",
        "explanation": "DIP (Dual In-line Package) is the classic rectangular housing with a row of electrical pins on each side designed for through-hole mounting."
    },
    {
        "id": 6,
        "category": "PCB & SMT",
        "question": "At which stage are the electrical solder connections formed between the SMD components and PCB by heating the assembly?",
        "options": [
            "Reflow soldering",
            "Solder paste printing",
            "SMC placement",
            "Wave soldering"
        ],
        "answer": "Reflow soldering",
        "explanation": "Reflow soldering involves passing the loaded PCB through an oven with specific temperature zones to melt the solder paste and secure the components."
    },
    {
        "id": 7,
        "category": "PCB & SMT",
        "question": "An SMD resistor with the label \"474\" has a resistance of ........",
        "options": [
            "4704 \u2126",
            "470 \u2126",
            "470 K\u2126",
            "47.4 \u2126"
        ],
        "answer": "470 K\u2126",
        "explanation": "In 3-digit EIA codes, the first two digits are the value and the third is the multiplier (number of zeros). 47 followed by 4 zeros is 470,000 ohms (470 K\u2126)."
    },
    {
        "id": 8,
        "category": "PCB & SMT",
        "question": "What is used to provide a fixed position for solder paste printing?",
        "options": [
            "PCB",
            "Solder paste",
            "SMC",
            "Stencil"
        ],
        "answer": "Stencil",
        "explanation": "A stainless steel stencil is laid over the PCB. It has laser-cut holes exactly where the component pads are, allowing solder paste to be applied precisely."
    },
    {
        "id": 9,
        "category": "PCB & SMT",
        "question": "An SMD resistor with the label \"R33\" has a resistance value of:",
        "options": [
            "33 \u2126",
            "3.3 \u2126",
            "330 \u2126",
            "0.33 \u2126"
        ],
        "answer": "0.33 \u2126",
        "explanation": "The letter 'R' denotes the decimal point. Thus, R33 equates to 0.33 ohms."
    },
    {
        "id": 10,
        "category": "PCB & SMT",
        "question": "Which layer protects the outer copper layers from oxidation and prevents solder bridges during assembly?",
        "options": [
            "Via",
            "Silk-screen",
            "Solder mask",
            "Footprint"
        ],
        "answer": "Solder mask",
        "explanation": "The solder mask is the typically green polymer layer applied over traces to prevent oxidation and restrict solder to the exposed pads only."
    },
    {
        "id": 11,
        "category": "PCB & SMT",
        "question": "Which of the following connects signals between different routing layers in a PCB?",
        "options": [
            "Solder mask",
            "Via",
            "Footprint",
            "Solder paste"
        ],
        "answer": "Via",
        "explanation": "Vias are plated-through holes used specifically to route electrical traces from one layer to another in a multi-layer board."
    },
    {
        "id": 12,
        "category": "PCB & SMT",
        "question": "A PLCC package has leads that are:",
        "options": [
            "Turned outward in a gull-wing shape",
            "Turned under the package in a J-type shape",
            "Straight pins for through-hole",
            "Ball grids embedded underneath"
        ],
        "answer": "Turned under the package in a J-type shape",
        "explanation": "PLCC (Plastic Leaded Chip Carrier) features J-leads that wrap underneath the chip to save board space and protect the pins."
    },
    {
        "id": 13,
        "category": "ESD & Safety",
        "question": "What defines a 'Soft failure' caused by Electrostatic Discharge (ESD)?",
        "options": [
            "Permanent physical damage to a logic gate",
            "Latent damage that weakens a trace but leaves it functional",
            "Temporary failure due to data corruption or a bit flip",
            "Destruction of the protective solder mask"
        ],
        "answer": "Temporary failure due to data corruption or a bit flip",
        "explanation": "Soft failures involve altered logic states or memory corruption that can typically be fixed by resetting or rebooting the device."
    },
    {
        "id": 14,
        "category": "ESD & Safety",
        "question": "Which ESD protection device connects equipment susceptible to a discharge event directly to the ground?",
        "options": [
            "Anti-Static Bags",
            "ESD Grounding Clamps",
            "ESD Mat Kits",
            "Anti-Static Wrist Straps"
        ],
        "answer": "ESD Grounding Clamps",
        "explanation": "Grounding clamps physically attach to the hardware being worked on and route any static buildup safely into the earth."
    },
    {
        "id": 15,
        "category": "Computer Architecture",
        "question": "During the ____ phase, an instruction is read from the memory and decoded by the instruction decoder.",
        "options": [
            "execute",
            "fetch",
            "halting",
            "interrupt"
        ],
        "answer": "fetch",
        "explanation": "The fetch phase retrieves the binary opcode from memory. The CPU then decodes it to determine the operation."
    },
    {
        "id": 16,
        "category": "Computer Architecture",
        "question": "Which architecture shares a single common bus for fetching both instructions and data?",
        "options": [
            "Harvard",
            "Von-Neumann",
            "Cortex",
            "RISC"
        ],
        "answer": "Von-Neumann",
        "explanation": "Von-Neumann architecture relies on a unified memory and single bus system, which can cause bottlenecks. Harvard uses separate buses."
    },
    {
        "id": 17,
        "category": "Computer Architecture",
        "question": "The high-speed ______ are inserted in between the CPU and memory to bridge the speed gap.",
        "options": [
            "Registers",
            "caches",
            "SSD drives",
            "ROM blocks"
        ],
        "answer": "caches",
        "explanation": "Cache memory (L1, L2, L3) operates much faster than main memory, storing frequently accessed data to prevent the CPU from stalling."
    },
    {
        "id": 18,
        "category": "Computer Architecture",
        "question": "This part of the processor contains the logic to perform arithmetic and logic operations.",
        "options": [
            "CU",
            "DMA",
            "ALU",
            "Registers"
        ],
        "answer": "ALU",
        "explanation": "The Arithmetic Logic Unit handles all mathematical (addition, subtraction) and logical (AND, OR) operations."
    },
    {
        "id": 19,
        "category": "Computer Architecture",
        "question": "Which of the following is considered the fastest memory hierarchy level?",
        "options": [
            "Main memory",
            "L2 cache",
            "L1 cache",
            "Register"
        ],
        "answer": "Register",
        "explanation": "Registers are located directly inside the CPU core, operating at the processor's native clock speed, making them the fastest data storage possible."
    },
    {
        "id": 20,
        "category": "FPGA & Verilog",
        "question": "The capacities of some FPGAs are specified in a number of...",
        "options": [
            "LUTs",
            "capacitors",
            "Buses",
            "Inverters"
        ],
        "answer": "LUTs",
        "explanation": "Look-Up Tables (LUTs) are the primary programmable logic elements inside an FPGA. Capacity is directly proportional to the LUT count."
    },
    {
        "id": 21,
        "category": "FPGA & Verilog",
        "question": "At the ______ stage of the digital design flow, behavioral description is translated into generic logic gates.",
        "options": [
            "Technology mapping",
            "Synthesis",
            "Functional design",
            "Place and route"
        ],
        "answer": "Synthesis",
        "explanation": "Synthesis takes HDL code (like Verilog) and generates a structural netlist composed of logic gates and flip-flops."
    },
    {
        "id": 22,
        "category": "FPGA & Verilog",
        "question": "A 5-variable expression can be implemented by using ____ of a 4-input LUT.",
        "options": [
            "one",
            "two",
            "three",
            "four"
        ],
        "answer": "two",
        "explanation": "To implement a 5-input logic function, you require two 4-input LUTs fed into a multiplexer that uses the 5th variable as the selector."
    },
    {
        "id": 23,
        "category": "FPGA & Verilog",
        "question": "The programming file used to configure an FPGA hardware structure is called a....",
        "options": [
            "bitstream",
            "elf",
            "netlist",
            "constraints"
        ],
        "answer": "bitstream",
        "explanation": "A bitstream is a proprietary binary file generated after routing, used to program the SRAM cells controlling the LUTs and interconnects inside the FPGA."
    },
    {
        "id": 24,
        "category": "FPGA & Verilog",
        "question": "Importing submodules inside a top module in Verilog is called ........",
        "options": [
            "declaration",
            "modulation",
            "substitution",
            "instantiation"
        ],
        "answer": "instantiation",
        "explanation": "Instantiation is the method of invoking a lower-level module within a higher-level module to create a hierarchical design."
    },
    {
        "id": 25,
        "category": "FPGA & Verilog",
        "question": "Which assignment type is strictly recommended for modeling sequential circuits in Verilog?",
        "options": [
            "non-blocking",
            "blocking",
            "continuous",
            "procedural"
        ],
        "answer": "non-blocking",
        "explanation": "Non-blocking assignments (`<=`) evaluate and execute concurrently, properly modeling the behavior of hardware flip-flops updating simultaneously on a clock edge."
    },
    {
        "id": 26,
        "category": "FPGA & Verilog",
        "question": "Refer to `reg[5:0] mem [0:1023]`, we can select the 3rd bit of the 6th element by using...",
        "options": [
            "mem[2][5]",
            "mem[6][3]",
            "mem[5][2]",
            "mem[3][6]"
        ],
        "answer": "mem[5][2]",
        "explanation": "The array is 0-indexed. The 6th element is index 5 (`mem[5]`). The 3rd bit (from LSB) is index 2 (`[2]`)."
    },
    {
        "id": 27,
        "category": "FPGA & Verilog",
        "question": "The conditional operator snippet `assign F = E ? A : (C ? B : D);` implies:",
        "options": [
            "If E is true, F=A. Otherwise, if C is true, F=B. Otherwise F=D.",
            "If E is false, F=A. Otherwise F=B.",
            "If C is true, F=A. Otherwise F=D.",
            "Syntax error"
        ],
        "answer": "If E is true, F=A. Otherwise, if C is true, F=B. Otherwise F=D.",
        "explanation": "The ternary operator `condition ? true_val : false_val` is evaluated sequentially. It functions identically to a nested if-else hardware multiplexer."
    },
    {
        "id": 28,
        "category": "FPGA & Verilog",
        "question": "The user ........ are specified for physical pin mapping, timing, and area constraints.",
        "options": [
            "bitstream",
            "netlist",
            "constraints",
            "Verilog modules"
        ],
        "answer": "constraints",
        "explanation": "Constraint files (like .xdc or .sdc) guide the placement and routing tools, mapping logical Verilog ports to physical FPGA pins."
    },
    {
        "id": 29,
        "category": "Microcontrollers",
        "question": "The standard 8051 microcontroller contains how many bytes of internal RAM?",
        "options": [
            "4K",
            "8K",
            "128",
            "256"
        ],
        "answer": "128",
        "explanation": "The original 8051 has 128 bytes of on-chip RAM. The 8052 upgraded this to 256 bytes."
    },
    {
        "id": 30,
        "category": "Microcontrollers",
        "question": "How many 16-bit timer/counters are available in the standard 8051?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "2",
        "explanation": "The standard 8051 features exactly two timers: Timer 0 and Timer 1. (The 8052 adds a third, Timer 2)."
    },
    {
        "id": 31,
        "category": "Microcontrollers",
        "question": "Which timer mode in the 8051 is known as the '8-bit auto-reload' mode?",
        "options": [
            "Mode 0",
            "Mode 1",
            "Mode 2",
            "Mode 3"
        ],
        "answer": "Mode 2",
        "explanation": "In Mode 2, the timer operates as an 8-bit timer in TLx. When TLx overflows, it is automatically reloaded with a value stored in THx."
    },
    {
        "id": 32,
        "category": "Microcontrollers",
        "question": "If the TMOD register is loaded with 0x01, which mode is selected for Timer 0?",
        "options": [
            "Mode 0",
            "Mode 1",
            "Mode 2",
            "Mode 3"
        ],
        "answer": "Mode 1",
        "explanation": "0x01 is binary 00000001. Looking at the Timer 0 nibble (lower 4 bits), M1=0 and M0=1, which configures it as a 16-bit timer."
    },
    {
        "id": 33,
        "category": "Microcontrollers",
        "question": "What happens when an 8051 timer overflows its maximum value?",
        "options": [
            "TMOD is cleared",
            "The TRx bit becomes 0",
            "The TFx flag becomes 1",
            "The program halts"
        ],
        "answer": "The TFx flag becomes 1",
        "explanation": "Upon rolling over (e.g., FFFFh to 0000h), the hardware sets the Timer Flag (TF0 or TF1), which can trigger an interrupt."
    },
    {
        "id": 34,
        "category": "Microcontrollers",
        "question": "When the C/T bit in the TMOD register is set to 1, the timer operates as a:",
        "options": [
            "Baud Rate Generator",
            "Timer",
            "Counter",
            "Watchdog"
        ],
        "answer": "Counter",
        "explanation": "When C/T is 1, the peripheral counts external pulses arriving on the T0 or T1 pins. When 0, it counts internal oscillator machine cycles (Timer)."
    },
    {
        "id": 35,
        "category": "Microcontrollers",
        "question": "The reset value of the SP (Stack Pointer) register in the 8051 is:",
        "options": [
            "06h",
            "07h",
            "08h",
            "09h"
        ],
        "answer": "07h",
        "explanation": "The 8051 increments the stack pointer before pushing. Starting at 07h means the very first push lands safely at 08h."
    },
    {
        "id": 36,
        "category": "Microcontrollers",
        "question": "In order for the 8051 RESET input to be effective, it must be held high for a minimum duration of:",
        "options": [
            "2 machine cycles",
            "4 machine cycles",
            "6 machine cycles",
            "8 machine cycles"
        ],
        "answer": "2 machine cycles",
        "explanation": "The hardware architecture strictly requires the reset pin to be held high for at least two complete machine cycles to safely reset all registers."
    },
    {
        "id": 37,
        "category": "Microcontrollers",
        "question": "Which pin is provided to allow or disallow the internal memory execution on the 8051?",
        "options": [
            "ALE",
            "EA",
            "PSEN",
            "XTAL1"
        ],
        "answer": "EA",
        "explanation": "External Access (EA). If tied high, the MCU fetches from internal ROM. If tied low (GND), it completely ignores internal ROM and fetches from external memory."
    },
    {
        "id": 38,
        "category": "Microcontrollers",
        "question": "The original 8051 divides the external crystal frequency by ____ to derive one machine cycle.",
        "options": [
            "1",
            "4",
            "8",
            "12"
        ],
        "answer": "12",
        "explanation": "In standard 8051 architecture, one machine cycle takes 12 clock oscillator periods (divided into 6 states of 2 pulses each)."
    },
    {
        "id": 39,
        "category": "Microcontrollers",
        "question": "The 8051 ALE (Address Latch Enable) pin is used to:",
        "options": [
            "Enable external interrupts",
            "Latch the lower 8 bits of the address from Port 0",
            "Allow program writing to ROM",
            "Divide the clock frequency"
        ],
        "answer": "Latch the lower 8 bits of the address from Port 0",
        "explanation": "Port 0 multiplexes data and the lower address byte. ALE pulses to instruct an external latch (like 74LS373) to hold the address byte so the bus can then be used for data."
    },
    {
        "id": 40,
        "category": "ARM Cortex-M",
        "question": "The AHB bus in the ARM Cortex-M architecture is primarily used for:",
        "options": [
            "High-bandwidth communication",
            "Low-bandwidth communication",
            "Debugging only",
            "External interrupts"
        ],
        "answer": "High-bandwidth communication",
        "explanation": "The Advanced High-performance Bus (AHB) connects the core to high-speed memory and DMA, while the APB connects slower peripherals."
    },
    {
        "id": 41,
        "category": "ARM Cortex-M",
        "question": "_____ is a dedicated hardware unit inside Cortex-M based microcontrollers responsible for exception and interrupt handling.",
        "options": [
            "NVIC",
            "EXTI",
            "IRQ",
            "SysTick"
        ],
        "answer": "NVIC",
        "explanation": "The Nested Vectored Interrupt Controller (NVIC) provides fast, deterministic interrupt handling securely integrated into the core."
    },
    {
        "id": 42,
        "category": "ARM Cortex-M",
        "question": "SWD (Serial Wire Debug) uses a protocol targeting a bus port called:",
        "options": [
            "JTAG",
            "DAP",
            "AHB",
            "GPIO"
        ],
        "answer": "DAP",
        "explanation": "SWD communicates directly with the Debug Access Port (DAP) inside the ARM architecture, using only two pins."
    },
    {
        "id": 43,
        "category": "ARM Cortex-M",
        "question": "The address space of the ARM Cortex-M utilized for memory mapping is:",
        "options": [
            "2 GB",
            "4 GB",
            "8 GB",
            "32 GB"
        ],
        "answer": "4 GB",
        "explanation": "Being a 32-bit processor, it can address 2^32 distinct memory locations, resulting in a flat 4 GB address space."
    },
    {
        "id": 44,
        "category": "Operating Systems",
        "question": "Which software technique allows multiple processes to be executed concurrently by dividing the processor\u2019s time into time slots?",
        "options": [
            "Interrupt driven execution",
            "Polling",
            "RTOS",
            "Bootloader"
        ],
        "answer": "RTOS",
        "explanation": "A Real-Time Operating System uses a scheduler to swap contexts and allocate execution time-slices, creating concurrent execution."
    },
    {
        "id": 45,
        "category": "Operating Systems",
        "question": "The ______ method is considered highly energy inefficient because the CPU cannot sleep.",
        "options": [
            "Interrupt driven",
            "Polling",
            "RTOS",
            "Event-driven"
        ],
        "answer": "Polling",
        "explanation": "Polling forces the CPU to constantly run loops checking a status register. An interrupt-driven design allows the CPU to enter low-power sleep modes until awoken."
    },
    {
        "id": 46,
        "category": "Toolchains",
        "question": "Which of the following is responsible for checking program execution status and results by outputting debug information via an interface?",
        "options": [
            "Flash memory",
            "Bootloader",
            "UART",
            "Linker"
        ],
        "answer": "UART",
        "explanation": "Universal Asynchronous Receiver-Transmitter (UART) is widely used to print debug log statements from a microcontroller to a PC terminal."
    },
    {
        "id": 47,
        "category": "Microcontrollers",
        "question": "What does a microcontroller incorporate that a standard microprocessor does not?",
        "options": [
            "An ALU",
            "A Control Unit",
            "Internal memory (RAM/ROM) and Peripherals",
            "Cache memory"
        ],
        "answer": "Internal memory (RAM/ROM) and Peripherals",
        "explanation": "Microcontrollers are system-on-chips designed for standalone embedded control, packing memory, timers, and I/O directly onto the chip."
    },
    {
        "id": 48,
        "category": "Microcontrollers",
        "question": "In 8051, when dealing with external memory, which port acts exclusively as the upper byte of the address (A8-A15)?",
        "options": [
            "Port 0",
            "Port 1",
            "Port 2",
            "Port 3"
        ],
        "answer": "Port 2",
        "explanation": "Port 0 handles the multiplexed lower address and data. Port 2 handles the non-multiplexed upper address byte for 16-bit addressing."
    },
    {
        "id": 49,
        "category": "ESD & Safety",
        "question": "What is the function of Anti-Static Wrist Straps in a lab environment?",
        "options": [
            "To measure the user's heart rate",
            "To connect the user to ground, bleeding off static electricity",
            "To prevent the user from being electrocuted by mains voltage",
            "To hold SMD components during soldering"
        ],
        "answer": "To connect the user to ground, bleeding off static electricity",
        "explanation": "Wrist straps securely connect a human operator to ground, ensuring any static charge developed via triboelectric effect is instantly discharged safely."
    },
    {
        "id": 50,
        "category": "Computer Architecture",
        "question": "Linux is considered what type of software?",
        "options": [
            "System Software",
            "Application Software",
            "Firmware",
            "Bootloader"
        ],
        "answer": "System Software",
        "explanation": "An Operating System like Linux is system software, providing the bridge and resource management between the bare hardware and user applications."
    }
];
