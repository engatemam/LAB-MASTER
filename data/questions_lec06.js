const lec06Data = [
    {
        category: "Lecture 06",
        text: "........ is an 8-bit register used solely for serial communication.",
        options: ["SBUF", "SCON", "TMOD", "TCON"],
        correctIndex: 0,
        explanation: "SBUF is dedicated solely for holding the serial data to be transmitted or received."
    },
    {
        category: "Lecture 06",
        text: "In asynchronous serial communication, the start bit is always a ........ and the stop bit is ........",
        options: ["0 (low), 1 (high)", "1 (high), 0 (low)", "0 (high), 1 (low)", "1 (low), 0 (high)"],
        correctIndex: 0,
        explanation: "The start bit is always a 0 (low) and the stop bit(s) is 1 (high)."
    },
    {
        category: "Lecture 06",
        text: "The TMOD register is loaded with the value ........ to indicate the use of timer 1 in mode 2 for setting the baud rate.",
        options: ["20H", "02H", "50H", "05H"],
        correctIndex: 0,
        explanation: "20H sets Timer 1 to mode 2 (8-bit auto-reload), which is required for serial communication baud rate generation."
    },
    {
        category: "Lecture 06",
        text: "To program the start bit, stop bit, and data bits of data framing, the ........ register is used.",
        options: ["SCON", "SBUF", "TMOD", "PCON"],
        correctIndex: 0,
        explanation: "The SCON (Serial Control) register is used to set the modes and framing."
    },
    {
        category: "Lecture 06",
        text: "True or False: The TI flag bit is set by software at the beginning of the stop bit in mode 1.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "It is set by hardware (HW), not software (SW), although it must be cleared by software."
    },
    {
        category: "Lecture 06",
        text: "Which of the following describes Serial Mode 1?",
        options: ["8-bit data, 1 stop bit, 1 start bit", "8-bit auto-reload", "9-bit data, 1 stop bit, 1 start bit", "13-bit timer mode"],
        correctIndex: 0,
        explanation: "Serial Mode 1 frames an 8-bit data with 1 start bit and 1 stop bit."
    },
    {
        category: "Lecture 06",
        text: "For a baud rate of 9600, the TH1 register should be loaded with the decimal value ........",
        options: ["-3", "-6", "-12", "-24"],
        correctIndex: 0,
        explanation: "-3 corresponds to FD Hex, which gives a 9600 baud rate with an 11.0592 MHz crystal."
    },
    {
        category: "Lecture 06",
        text: "True or False: Asynchronous serial data communication is widely used for block-oriented transmissions.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "Asynchronous is used for character-oriented transmissions, while synchronous is used for block-oriented."
    },
    {
        category: "Lecture 06",
        text: "The UART frequency divider divides the machine cycle frequency by ........ to set the baud rate.",
        options: ["32", "12", "1", "16"],
        correctIndex: 0,
        explanation: "The default value upon activation of the 8051 RESET pin divides the timer frequency by 32 for the UART."
    },
    {
        category: "Lecture 06",
        text: "True or False: The instruction JNB TI, xx is used to see if the character has been received completely.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "TI stands for Transmit Interrupt, so it monitors if the character has been transferred, not received."
    },
    {
        category: "Lecture 06",
        text: "In the context of 8051 serial communication, what does framing refer to?",
        options: ["Placing each character between start and stop bits", "Dividing the crystal frequency by 12", "Setting the baud rate using Timer 1", "Connecting TxD and RxD pins"],
        correctIndex: 0,
        explanation: "Framing is the process of enclosing the data bits between a start bit and stop bit(s)."
    },
    {
        category: "Lecture 06",
        text: "If SCON is loaded with 50H, what is the state of the REN bit?",
        options: ["1 (Reception enabled)", "0 (Reception disabled)", "1 (Transmission enabled)", "0 (Transmission disabled)"],
        correctIndex: 0,
        explanation: "50H is 01010000 in binary, which sets SM1 = 1 and REN = 1, enabling reception."
    },
    {
        category: "Lecture 06",
        text: "True or False: In mode 2 (8-bit auto-reload), THx holds a value which is to be reloaded into TLx each time it underflows.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "It reloads the value each time it overflows, not underflows."
    },
    {
        category: "Lecture 06",
        text: "The simplest connection between a PC and a microcontroller requires a minimum of three pins: TxD, RxD, and ........",
        options: ["ground", "VCC", "DTR", "CTS"],
        correctIndex: 0,
        explanation: "Ground is necessary to establish a common voltage reference."
    },
    {
        category: "Lecture 06",
        text: "True or False: To transfer the next byte serially, TI must be cleared by hardware.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "TI must be explicitly cleared by software (e.g., TI=0) before the next byte can be transferred."
    },
    {
        category: "Lecture 06",
        text: "Which of the following is NOT an SCON register bit?",
        options: ["TF1", "SM0", "REN", "RB8"],
        correctIndex: 0,
        explanation: "TF1 is a Timer 1 overflow flag located in the TCON register, not SCON."
    },
    {
        category: "Lecture 06",
        text: "If TH1 is loaded with -6 (FA Hex), what will be the baud rate assuming an 11.0592 MHz crystal?",
        options: ["4800", "9600", "2400", "1200"],
        correctIndex: 0,
        explanation: "-6 gives a baud rate of 4800."
    },
    {
        category: "Lecture 06",
        text: "When establishing a serial connection using a USB to Serial UART module, the TXD pin of the module should be connected to the ........ pin of the microcontroller.",
        options: ["RxD", "TxD", "GND", "VCC"],
        correctIndex: 0,
        explanation: "Transmit (TXD) of one device must connect to Receive (RxD) of the other."
    },
    {
        category: "Lecture 06",
        text: "In C programming for 8051, the instruction `while(TI==0);` is used to ........",
        options: ["Wait until the stop bit is transmitted", "Clear the TI flag", "Start the timer", "Wait until a character is received"],
        correctIndex: 0,
        explanation: "This creates a polling loop that waits until TI is set to 1 by the hardware, indicating the transmission is complete."
    },
    {
        category: "Lecture 06",
        text: "True or False: The RI flag is set by hardware at the beginning of the start bit in mode 1.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "RI (Receive Interrupt) is set by hardware at the beginning of the stop bit, not the start bit."
    },
    {
        category: "Lecture 06",
        text: "Which pin corresponds to the RxD function in the 8051 microcontroller?",
        options: ["P3.0", "P3.1", "P2.0", "P2.1"],
        correctIndex: 0,
        explanation: "Port 3.0 is multiplexed with the RxD (Receive Data) function."
    },
    {
        category: "Lecture 06",
        text: "True or False: SBUF is a 16-bit register used solely for serial communication.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "SBUF is an 8-bit register, not a 16-bit register."
    },
    {
        category: "Lecture 06",
        text: "........ data transfers use the synchronous method.",
        options: ["Block-oriented", "Character-oriented", "Byte-oriented", "Bit-oriented"],
        correctIndex: 0,
        explanation: "Block-oriented data transfers use the synchronous method, whereas character-oriented uses asynchronous."
    },
    {
        category: "Lecture 06",
        text: "The crystal frequency commonly used to generate standard baud rates with the 8051 without error is ........ MHz.",
        options: ["11.0592", "12.0000", "16.0000", "8.0000"],
        correctIndex: 0,
        explanation: "11.0592 MHz divides cleanly to generate exact standard baud rates like 9600."
    },
    {
        category: "Lecture 06",
        text: "To clear the Transmit Interrupt flag in C, which instruction is used?",
        options: ["TI = 0;", "TI == 0;", "clear(TI);", "TI = 1;"],
        correctIndex: 0,
        explanation: "The assignment operator (=) is used to clear the flag to 0. `TI == 0;` is an evaluation trap."
    }
];

