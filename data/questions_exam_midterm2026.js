const examMidterm2026 = [
  {
    category: "Midterm 2026",
    text: ".... signals can only take on one value from a finite set of possible values at a given time.",
    options: ["Analog", "Digital"],
    answer: "Digital",
    explanation: "Digital signals take discrete (finite) values, unlike analog signals which are continuous."
  },
  {
    category: "Midterm 2026",
    text: "System definition is considered as a stage of ....-end of PCB design flow.",
    options: ["front", "back"],
    answer: "front",
    explanation: "System definition is the initial phase, so it's considered part of the front-end design flow."
  },
  {
    category: "Midterm 2026",
    text: "8051 has ...... bytes of RAM.",
    options: ["4K", "8K", "128", "256"],
    answer: "128",
    explanation: "The standard 8051 microcontroller has 128 bytes of internal RAM."
  },
  {
    category: "Midterm 2026",
    text: "Low heat tolerance is an advantage of SMT.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Low heat tolerance is a disadvantage, not an advantage. SMT components can be sensitive to heat during soldering."
  },
  {
    category: "Midterm 2026",
    text: ".....is used to provide fixed position for solder paste printing",
    options: ["Flux", "Solder paste", "Stencil", "None of above"],
    answer: "Stencil",
    explanation: "A stencil is used to apply solder paste to the exact locations (pads) where components will be placed."
  },
  {
    category: "Midterm 2026",
    text: "8051 has a number of ..... I/O pins.",
    options: ["8", "16", "32", "40"],
    answer: "32",
    explanation: "The 8051 has 4 ports (P0, P1, P2, P3), each with 8 pins, totaling 32 I/O pins."
  },
  {
    category: "Midterm 2026",
    text: "In ...., each pin must be connected externally to a 10K ohm pull-up resistor.",
    options: ["P0", "P1", "P2", "P3"],
    answer: "P0",
    explanation: "Port 0 lacks internal pull-up resistors (open drain) and requires external 10K pull-up resistors to function correctly as an I/O port."
  },
  {
    category: "Midterm 2026",
    text: "The bit-addressable area of 8051 RAM has ...... bytes.",
    options: ["8", "16", "32", "80"],
    answer: "16",
    explanation: "The bit-addressable area spans from 20H to 2FH, which is exactly 16 bytes (128 bits)."
  },
  {
    category: "Midterm 2026",
    text: "Through-hole technology of PCB requires drilling.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Through-Hole Technology (THT) involves inserting component leads into holes drilled in the PCB."
  },
  {
    category: "Midterm 2026",
    text: "8051 has .... Interrupt sources.",
    options: ["four", "five", "six", "ten"],
    answer: "five",
    explanation: "The standard 8051 has 5 interrupt sources: 2 external (INT0, INT1), 2 timers (Timer 0, Timer 1), and 1 serial port interrupt."
  },
  {
    category: "Midterm 2026",
    text: "Mainly, the main memory is faster than L2-cache memory.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Cache memory (L1, L2, L3) is much faster than main memory (RAM). Main memory is slower."
  },
  {
    category: "Midterm 2026",
    text: "..... encompasses all the information necessary to write a machine language program.",
    options: ["ISA", "I/O", "registers", "None of above"],
    answer: "ISA",
    explanation: "The Instruction Set Architecture (ISA) defines the instructions, registers, memory architecture, and everything needed to write machine/assembly language code."
  },
  {
    category: "Midterm 2026",
    text: ".....architecture shares a single common bus for fetching both instructions and data.",
    options: ["Harvard", "Von-Neumann"],
    answer: "Von-Neumann",
    explanation: "Von Neumann architecture uses a single memory space and common bus for both data and instructions."
  },
  {
    category: "Midterm 2026",
    text: "..... pin is provided to allow or disallow the internal memory of 8051.",
    options: ["ALE", "EA", "PSEN", "XTAL1"],
    answer: "EA",
    explanation: "EA (External Access) pin determines whether the 8051 executes code from internal ROM (EA=1) or external ROM (EA=0)."
  },
  {
    category: "Midterm 2026",
    text: "The executable file extension that is used for 8051 microcontrollers is .......",
    options: ["elf", "exe", "hex", "ld"],
    answer: "hex",
    explanation: "The .hex file (Intel HEX format) is the standard executable file uploaded/burned to 8051 microcontrollers."
  },
  {
    category: "Midterm 2026",
    text: "The value of SMD resistor has the label \"224\" is ....... ohm",
    options: ["22", "22K", "220K", "22M"],
    answer: "220K",
    explanation: "The label '224' means 22 followed by 4 zeros: 220,000 ohms = 220 kΩ."
  },
  {
    category: "Midterm 2026",
    text: "......... Connects between layers in PCB.",
    options: ["Solder mask", "Via", "Footprint", "Solder paste"],
    answer: "Via",
    explanation: "A Via (Vertical Interconnect Access) is an electrical connection between different layers of a PCB."
  },
  {
    category: "Midterm 2026",
    text: "......is the primary measurement tool to observe the shape of signals.",
    options: ["Multimeter", "Oscilloscope", "Power Supply", "Function Generator"],
    answer: "Oscilloscope",
    explanation: "An oscilloscope allows you to see the exact shape, amplitude, and frequency of electrical signals over time."
  },
  {
    category: "Midterm 2026",
    text: "In a computer system, CPU communicates with I/O devices via I/O interfaces.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The CPU cannot communicate directly with I/O devices due to differences in speed and data formats, so it uses I/O interfaces/controllers."
  },
  {
    category: "Midterm 2026",
    text: "8052 has ..... timers.",
    options: ["one", "two", "three", "four"],
    answer: "three",
    explanation: "The 8052 is an enhanced version of the 8051 and features 3 timers (Timer 0, Timer 1, and Timer 2), compared to the 8051's two timers."
  },
  {
    category: "Midterm 2026",
    text: "By default, the stack starts from bank..... when the \"push\" command is executed.",
    options: ["0", "1", "2", "3"],
    answer: "1",
    explanation: "The default value of the Stack Pointer (SP) is 07H. The first 'push' increments SP to 08H, which is the starting address of Register Bank 1."
  },
  {
    category: "Midterm 2026",
    text: ".....is used as the upper 8 bits of the 16-bit address.",
    options: ["P0", "P1", "P2", "P3"],
    answer: "P2",
    explanation: "When accessing external memory, Port 2 (P2) outputs the upper 8 bits (A8-A15) of the 16-bit address, while Port 0 handles the lower 8 bits."
  },
  {
    category: "Midterm 2026",
    text: "RxD and TxD pins are belong to ....",
    options: ["P0", "P1", "P2", "P3"],
    answer: "P3",
    explanation: "Port 3 pins have dual functions. RxD (Receive Data) is P3.0 and TxD (Transmit Data) is P3.1."
  },
  {
    category: "Midterm 2026",
    text: "Windows OS is a type of application software.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Windows OS is System Software, not application software."
  },
  {
    category: "Midterm 2026",
    text: "During the .... phase, the processor carries out the sequence of operations called for by the instruction",
    options: ["fetch", "execute"],
    answer: "execute",
    explanation: "The execution phase is where the CPU performs the operations specified by the fetched instruction."
  },
  {
    category: "Midterm 2026",
    text: "\"sfr\" data type is used for RAM addresses 80-FFH only.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The 'sfr' (Special Function Register) data type is specifically used to access memory locations 80H to FFH in the 8051 architecture."
  },
  {
    category: "Midterm 2026",
    text: "C code is portable to other microcontrollers with little or no modification.",
    options: ["True", "False"],
    answer: "True",
    explanation: "One of the main advantages of C over Assembly is portability. C code can often be recompiled for different microcontrollers with minimal changes."
  },
  {
    category: "Midterm 2026",
    text: "For 1% - tolerance SMT resistor, the value of resistance consists of .... digits.",
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation: "1% tolerance SMD resistors use a 4-digit code (e.g., 1002) for higher precision, while 5% use a 3-digit code (e.g., 103)."
  },
  {
    category: "Midterm 2026",
    text: "A soldering station is designed for electronic components inspection.",
    options: ["True", "False"],
    answer: "False",
    explanation: "A soldering station is used for melting solder to join components, not for inspection. Inspection is done with tools like microscopes or magnifiers."
  },
  {
    category: "Midterm 2026",
    text: "In order for the RESET input to be effective, it must have a minimum duration of ... machine cycles.",
    options: ["2", "4", "6", "8"],
    answer: "2",
    explanation: "The RESET pin must be held high for at least 2 machine cycles for the 8051 microcontroller to properly reset."
  }
];
