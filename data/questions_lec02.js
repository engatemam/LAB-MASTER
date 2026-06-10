const lec02Data = [
  {
    category: "Lecture 02",
    text: "How long does it typically take to erase an 8751 microcontroller equipped with a UV-EPROM?",
    options: ["20 minutes", "5 minutes", "1 hour", "10 seconds"],
    correctIndex: 0,
    explanation: "UV-EPROM eraser takes 20 min to erase for the 8751 microcontroller."
  },
  {
    category: "Lecture 02",
    text: "........ pin is provided to allow or disallow the internal memory, and it is pulled high if internal program memory is to be used.",
    options: ["EA", "ALE", "PSEN", "RST"],
    correctIndex: 0,
    explanation: "EA (External Access) is pulled high if internal program memory is used. Case matters in abbreviations."
  },
  {
    category: "Lecture 02",
    text: "For systems using serial communications facilities, a crystal of frequency ........ MHz is more appropriate as the standard baud rates may easily be generated.",
    options: ["11.0592", "12.0000", "16.0000", "8.0000"],
    correctIndex: 0,
    explanation: "A crystal of 11.0592 MHz generates standard baud rates like 9600, 4800, etc., easily."
  },
  {
    category: "Lecture 02",
    text: "True or False: In Von-Neumann architecture, separate data bus and instruction bus are used, allowing data transfer and program fetching to occur simultaneously.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Von-Neumann shares a single common bus. Harvard architecture uses separate buses."
  },
  {
    category: "Lecture 02",
    text: "The AT89C51 microcontroller requires ........ clocks per machine cycle.",
    options: ["12", "6", "4", "1"],
    correctIndex: 0,
    explanation: "The AT89C51 from Atmel requires 12 clocks per machine cycle."
  },
  {
    category: "Lecture 02",
    text: "The 8052 microcontroller features ........ bytes of on-chip ROM and ........ bytes of RAM.",
    options: ["8K, 256", "4K, 128", "16K, 512", "32K, 1024"],
    correctIndex: 0,
    explanation: "The 8052 has 8K bytes of ROM and 256 bytes of RAM."
  },
  {
    category: "Lecture 02",
    text: "........ stands for Program Store Enable, and in an 8031-based system it is connected to the ........ pin of the external ROM.",
    options: ["PSEN, OE", "ALE, CE", "EA, VCC", "RST, GND"],
    correctIndex: 0,
    explanation: "PSEN (Program Store Enable) connects to the OE (Output Enable) pin."
  },
  {
    category: "Lecture 02",
    text: "In the 8051 microcontroller, the RESET pin must have a high pulse for a minimum duration of ........ before it is allowed to go low.",
    options: ["2 machine cycles", "12 clock cycles", "1 instruction cycle", "4 machine cycles"],
    correctIndex: 0,
    explanation: "The RESET pulse must be high for a minimum of 2 machine cycles."
  },
  {
    category: "Lecture 02",
    text: "True or False: Port 0 ( P0 ) can be used for input or output, and each pin must be connected externally to a 10K ohm pull-down resistor due to its open drain structure.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. It requires a 10K ohm pull-UP resistor, not pull-down."
  },
  {
    category: "Lecture 02",
    text: "The internal data memory of the 8051 is divided into three parts. The register banks are located from address ........ to ........",
    options: ["00H, 1FH", "20H, 2FH", "30H, 7FH", "80H, FFH"],
    correctIndex: 0,
    explanation: "Register banks span from 00H to 1FH."
  },
  {
    category: "Lecture 02",
    text: "Out of the four register banks in the 8051, Bank ........ uses the exact same RAM space as the stack.",
    options: ["1", "0", "2", "3"],
    correctIndex: 0,
    explanation: "Bank 1 uses the same RAM space as the stack."
  },
  {
    category: "Lecture 02",
    text: "True or False: An off-chip cache is one that is fabricated directly in the CPU chip to maximize processing speed.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. On-chip cache is fabricated in the CPU. Off-chip cache is outside the CPU."
  },
  {
    category: "Lecture 02",
    text: "........ indicates whether Port 0 has an address or data during external memory interfacing.",
    options: ["ALE", "PSEN", "EA", "WR"],
    correctIndex: 0,
    explanation: "ALE (Address Latch Enable) indicates whether P0 carries an address or data."
  },
  {
    category: "Lecture 02",
    text: "True or False: When ALE=0, it indicates that Port 0 has address A0-A7, and when ALE=1, it provides data D0-D7.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. When ALE=0 it provides data D0-D7. When ALE=1 it provides address A0-A7."
  },
  {
    category: "Lecture 02",
    text: "The 8051 can access up to ........ bytes of opcode since the program counter is a 16-bit register.",
    options: ["64K", "32K", "16K", "256K"],
    correctIndex: 0,
    explanation: "The 16-bit program counter allows accessing up to 64K bytes of opcode."
  },
  {
    category: "Lecture 02",
    text: "The bit-addressable area in the 8051 internal RAM has addresses ranging from ........ to ........",
    options: ["20H, 2FH", "00H, 1FH", "30H, 7FH", "80H, FFH"],
    correctIndex: 0,
    explanation: "The bit-addressable area ranges from 20H to 2FH."
  },
  {
    category: "Lecture 02",
    text: "True or False: All widely used registers in the 8051 are 8-bit, except the DPTR and Accumulator which are 16-bit.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. DPTR and Program Counter (PC) are 16-bit, the Accumulator is 8-bit."
  },
  {
    category: "Lecture 02",
    text: "Out of the 128 bytes reserved for Special Function Registers (SFRs) in MCS-51, only ........ locations are actually used.",
    options: ["21", "128", "64", "48"],
    correctIndex: 0,
    explanation: "Only 21 locations are used in the MCS-51 for SFRs."
  },
  {
    category: "Lecture 02",
    text: "During the ........ phase, an instruction is read from memory and decoded by the instruction decoder.",
    options: ["fetch", "execute", "decode", "store"],
    correctIndex: 0,
    explanation: "The fetch phase reads and decodes the instruction."
  },
  {
    category: "Lecture 02",
    text: "True or False: In an 8031/51-based system with external memory, Port 1 is used to provide the upper 8 bits of the 16-bit address (A8-A15).",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Port 2 is used for the upper 8 bits (A8-A15), not Port 1."
  },
  {
    category: "Lecture 02",
    text: "The 8051 microcontroller provides ........ interrupt sources.",
    options: ["6", "8", "4", "5"],
    correctIndex: 0,
    explanation: "The 8051 provides 6 interrupt sources."
  },
  {
    category: "Lecture 02",
    text: "True or False: Port 3 requires external 10K ohm pull-up resistors to function properly as input or output.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Port 3 does not need any pull-up resistors."
  },
  {
    category: "Lecture 02",
    text: "The 8031 microcontroller has exactly ........ bytes of on-chip program ROM space.",
    options: ["0K", "4K", "8K", "16K"],
    correctIndex: 0,
    explanation: "The 8031 is a ROM-less version of the 8051, possessing 0K bytes."
  },
  {
    category: "Lecture 02",
    text: "True or False: The P89C54X2 from Philips requires 12 clocks per machine cycle, similar to the AT89C51.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. The P89C54X2 requires 6 clocks per machine cycle."
  },
  {
    category: "Lecture 02",
    text: "........ is the specific units, their design and organization inside a single integrated circuit like a microprocessor.",
    options: ["Architecture", "System Software", "Peripherals", "Instruction Set"],
    correctIndex: 0,
    explanation: "Architecture refers to the specific units, design, and organization within a microprocessor."
  }
];

