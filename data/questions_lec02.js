const lec02Data = [
    {
        "id": 1,
        "category": "Lecture 02",
        "question": "What are the three main tasks a computer system must perform with information?",
        "options": ["Acquire, Process, Provide", "Fetch, Execute, Halt", "Input, Output, Store", "Read, Write, Delete"],
        "answer": "Acquire, Process, Provide",
        "explanation": "Computer systems acquire information, process it as directed by a program, and provide the result to recipients."
    },
    {
        "id": 2,
        "category": "Lecture 02",
        "question": "What are the two fundamental phases of the repetitive cycle a processor goes through?",
        "options": ["Fetch and Execute", "Read and Write", "Load and Store", "Input and Output"],
        "answer": "Fetch and Execute",
        "explanation": "During fetch, an instruction is read and decoded. During execute, the operations are carried out."
    },
    {
        "id": 3,
        "category": "Lecture 02",
        "question": "Which part of the processor contains the logic to perform arithmetic and logic operations?",
        "options": ["ALU", "Control Unit", "Registers", "DMA"],
        "answer": "ALU",
        "explanation": "The Arithmetic Logic Unit (ALU) performs all the arithmetic and logic operations."
    },
    {
        "id": 4,
        "category": "Lecture 02",
        "question": "Which type of memory architecture allows data transfer and program fetching to occur simultaneously on separate buses?",
        "options": ["Harvard Architecture", "Von-Neumann Architecture", "Register File", "CISC Architecture"],
        "answer": "Harvard Architecture",
        "explanation": "Harvard architecture has separate data and instruction buses, allowing simultaneous access."
    },
    {
        "id": 5,
        "category": "Lecture 02",
        "question": "When was the Intel 8051 microcontroller introduced?",
        "options": ["1981", "1975", "1985", "1990"],
        "answer": "1981",
        "explanation": "Intel introduced the 8051 (MCS-51) in 1981."
    },
    {
        "id": 6,
        "category": "Lecture 02",
        "question": "How many bytes of on-chip RAM does the standard 8051 microcontroller have?",
        "options": ["128 bytes", "256 bytes", "4K bytes", "64K bytes"],
        "answer": "128 bytes",
        "explanation": "The original 8051 has 128 bytes of RAM."
    },
    {
        "id": 7,
        "category": "Lecture 02",
        "question": "How many bytes of internal data memory does the 8052 microcontroller offer?",
        "options": ["256 bytes", "128 bytes", "4K bytes", "8K bytes"],
        "answer": "256 bytes",
        "explanation": "Versions like the 8052 and 8054 offer 256 bytes of internal data memory."
    },
    {
        "id": 8,
        "category": "Lecture 02",
        "question": "What is the maximum size of program memory (ROM) the 8051 family can access?",
        "options": ["64K bytes", "4K bytes", "128K bytes", "256 bytes"],
        "answer": "64K bytes",
        "explanation": "The 8051 has a 16-bit program counter, allowing it to address up to 64K bytes (0000 to FFFF)."
    },
    {
        "id": 9,
        "category": "Lecture 02",
        "question": "What does the ALE pin indicate when ALE = 0?",
        "options": ["Port 0 provides Data D0-D7", "Port 0 has Address A0-A7", "The microcontroller is resetting", "External memory is disabled"],
        "answer": "Port 0 provides Data D0-D7",
        "explanation": "When ALE=0, it indicates that Port 0 provides data. When ALE=1, it provides the address."
    },
    {
        "id": 10,
        "category": "Lecture 02",
        "question": "What is the function of the EA pin in the 8051 microcontroller?",
        "options": ["External Access to allow or disallow internal memory", "Enable Arithmetic operations", "External Address latch", "Enable Address decoding"],
        "answer": "External Access to allow or disallow internal memory",
        "explanation": "EA must be pulled high if internal program memory is to be used, and grounded to use external memory."
    },
    {
        "id": 11,
        "category": "Lecture 02",
        "question": "What is the purpose of the PSEN pin?",
        "options": ["Program Store Enable for external ROM", "Power Supply Enable", "Port Selection Enable", "Program Stack Enable"],
        "answer": "Program Store Enable for external ROM",
        "explanation": "PSEN is connected to the Output Enable (OE) pin of an external ROM."
    },
    {
        "id": 12,
        "category": "Lecture 02",
        "question": "Which port in the 8051 requires external 10K ohm pull-up resistors when used as input/output?",
        "options": ["Port 0", "Port 1", "Port 2", "Port 3"],
        "answer": "Port 0",
        "explanation": "P0 is an open drain and requires external pull-up resistors for normal I/O operation."
    },
    {
        "id": 13,
        "category": "Lecture 02",
        "question": "Which port in the 8051 provides the lower 8 bits of the address (A0-A7) during external memory interfacing?",
        "options": ["Port 0", "Port 1", "Port 2", "Port 3"],
        "answer": "Port 0",
        "explanation": "Port 0 multiplexes the lower address byte (A0-A7) and the data byte (D0-D7)."
    },
    {
        "id": 14,
        "category": "Lecture 02",
        "question": "Which port provides the upper 8 bits of the address (A8-A15) for external memory?",
        "options": ["Port 2", "Port 0", "Port 1", "Port 3"],
        "answer": "Port 2",
        "explanation": "Port 2 is used to provide the upper 8 bits of the 16-bit address for external memory."
    },
    {
        "id": 15,
        "category": "Lecture 02",
        "question": "Which registers in the 8051 are 16-bit registers?",
        "options": ["DPTR and PC", "Accumulator and B", "R0 and R7", "Timer 0 and Port 0"],
        "answer": "DPTR and PC",
        "explanation": "All major registers are 8-bit except the Data Pointer (DPTR) and the Program Counter (PC)."
    },
    {
        "id": 16,
        "category": "Lecture 02",
        "question": "What frequency is often used for the crystal oscillator to easily generate standard baud rates for serial communications?",
        "options": ["11.0592 MHz", "12.000 MHz", "8.000 MHz", "16.000 MHz"],
        "answer": "11.0592 MHz",
        "explanation": "11.0592 MHz is widely used because it can divide down precisely to standard baud rates like 9600."
    },
    {
        "id": 17,
        "category": "Lecture 02",
        "question": "How is the 128 bytes of internal data memory (RAM) divided in the 8051?",
        "options": ["Register Banks, Bit-Addressable Area, Scratch-pad Area", "ROM, RAM, Cache", "L1 Cache, L2 Cache, Main Memory", "Special Function Registers, Stack, Heap"],
        "answer": "Register Banks, Bit-Addressable Area, Scratch-pad Area",
        "explanation": "The internal RAM is divided into register banks (00H-1FH), bit-addressable (20H-2FH), and scratch-pad (30H onwards)."
    },
    {
        "id": 18,
        "category": "Lecture 02",
        "question": "What is the memory address range for the Bit-Addressable area in the 8051 internal RAM?",
        "options": ["20H to 2FH", "00H to 1FH", "30H to 7FH", "80H to FFH"],
        "answer": "20H to 2FH",
        "explanation": "16 bytes from 20H to 2FH are bit-addressable, providing 128 individually addressable bits."
    },
    {
        "id": 19,
        "category": "Lecture 02",
        "question": "What is the reset value of the Stack Pointer (SP) in the 8051?",
        "options": ["07H", "00H", "08H", "20H"],
        "answer": "07H",
        "explanation": "The stack pointer defaults to 07H upon reset. It increments before a push, meaning the first pushed byte goes to 08H."
    },
    {
        "id": 20,
        "category": "Lecture 02",
        "question": "In the standard 8051, a machine cycle consists of how many clock cycles?",
        "options": ["12", "1", "4", "6"],
        "answer": "12",
        "explanation": "The original 8051 divides the external oscillator frequency by 12 to form a machine cycle."
    },
    {
        "id": 21,
        "category": "Lecture 02",
        "question": "The 8031 microcontroller differs from the 8051 primarily because it lacks:",
        "options": ["On-chip ROM", "On-chip RAM", "Timers", "Serial Port"],
        "answer": "On-chip ROM",
        "explanation": "The 8031 is essentially an 8051 without internal program memory (ROM), forcing the use of external memory."
    },
    {
        "id": 22,
        "category": "Lecture 02",
        "question": "How many Special Function Registers (SFRs) are actually used in the MCS-51 out of the 128 reserved locations?",
        "options": ["21", "128", "64", "40"],
        "answer": "21",
        "explanation": "Although 128 bytes are reserved for SFRs, the standard 8051 only implements 21 of them."
    },
    {
        "id": 23,
        "category": "Lecture 02",
        "question": "What type of memory does the AT89C51 use instead of UV-EPROM?",
        "options": ["Flash Memory", "SRAM", "EEPROM", "DRAM"],
        "answer": "Flash Memory",
        "explanation": "The AT89C51 from Atmel uses Flash memory which can be easily erased and reprogrammed."
    },
    {
        "id": 24,
        "category": "Lecture 02",
        "question": "How many pins does the standard 8051 microcontroller package (like DIP) typically have?",
        "options": ["40 pins", "20 pins", "32 pins", "64 pins"],
        "answer": "40 pins",
        "explanation": "The 8051 typically comes in a 40-pin DIP or QFP package."
    },
    {
        "id": 25,
        "category": "Lecture 02",
        "question": "Which port in the 8051 provides additional special functions like serial communication and external interrupts?",
        "options": ["Port 3", "Port 0", "Port 1", "Port 2"],
        "answer": "Port 3",
        "explanation": "Port 3 has alternate functions for its pins, such as RXD, TXD, INT0, INT1, T0, T1, WR, and RD."
    }
]
;