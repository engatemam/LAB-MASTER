const lec06Data = [
  {
    "id": 1,
    "category": "Lecture 06",
    "question": "What are the two main ways computers transfer data?",
    "options": [
      "Parallel and Serial",
      "Synchronous and Asynchronous",
      "Analog and Digital",
      "Wired and Wireless"
    ],
    "answer": "Parallel and Serial",
    "explanation": "Data transfer happens either parallelly (multiple bits at once) or serially (one bit at a time)."
  },
  {
    "id": 2,
    "category": "Lecture 06",
    "question": "What is the main disadvantage of parallel data transfer compared to serial data transfer over long distances?",
    "options": [
      "It requires more wires making it bulky and expensive",
      "It is much slower",
      "It cannot transmit 8 bits at once",
      "It requires complex synchronization protocols"
    ],
    "answer": "It requires more wires making it bulky and expensive",
    "explanation": "Parallel transfer requires multiple wires for simultaneous bit transmission, increasing cost and complexity over distance compared to serial."
  },
  {
    "id": 3,
    "category": "Lecture 06",
    "question": "In serial communication, what is the primary difference between synchronous and asynchronous methods?",
    "options": [
      "Synchronous uses a shared clock signal while asynchronous does not",
      "Asynchronous uses a shared clock signal while synchronous does not",
      "Synchronous is only used for analog signals",
      "Asynchronous cannot be used in microcontrollers"
    ],
    "answer": "Synchronous uses a shared clock signal while asynchronous does not",
    "explanation": "Synchronous transfer relies on a clock signal synchronized between sender and receiver, while asynchronous transfer relies on predefined baud rates and framing bits."
  },
  {
    "id": 4,
    "category": "Lecture 06",
    "question": "What does UART stand for?",
    "options": [
      "Universal Asynchronous Receiver-transmitter",
      "Universal Analog Receiver-transmitter",
      "Unified Asynchronous Receiver-transmitter",
      "Universal Asynchronous Relay-transmitter"
    ],
    "answer": "Universal Asynchronous Receiver-transmitter",
    "explanation": "UART is a hardware communication protocol that uses asynchronous serial communication."
  },
  {
    "id": 5,
    "category": "Lecture 06",
    "question": "What does USART stand for?",
    "options": [
      "Universal Synchronous-Asynchronous Receiver-transmitter",
      "Universal Serial-Asynchronous Receiver-transmitter",
      "Unified Synchronous-Asynchronous Receiver-transmitter",
      "Universal Synchronous-Analog Receiver-transmitter"
    ],
    "answer": "Universal Synchronous-Asynchronous Receiver-transmitter",
    "explanation": "USART can operate in both synchronous and asynchronous modes."
  },
  {
    "id": 6,
    "category": "Lecture 06",
    "question": "What is the purpose of \"framing\" in asynchronous serial communication?",
    "options": [
      "To encapsulate data between start and stop bits for proper detection",
      "To increase the speed of the transmission",
      "To convert analog signals to digital",
      "To encrypt the data before transmission"
    ],
    "answer": "To encapsulate data between start and stop bits for proper detection",
    "explanation": "Framing involves placing the data character between a start bit and one or more stop bits so the receiver knows when data begins and ends."
  },
  {
    "id": 7,
    "category": "Lecture 06",
    "question": "In standard asynchronous serial communication, what are the logic levels for the start and stop bits?",
    "options": [
      "Start bit is 0 (low) and stop bit is 1 (high)",
      "Start bit is 1 (high) and stop bit is 0 (low)",
      "Both start and stop bits are 0 (low)",
      "Both start and stop bits are 1 (high)"
    ],
    "answer": "Start bit is 0 (low) and stop bit is 1 (high)",
    "explanation": "A transition from high (mark) to low (space) indicates a start bit, and the frame ends with a high stop bit."
  },
  {
    "id": 8,
    "category": "Lecture 06",
    "question": "What is the simplest physical connection requirement for a PC to communicate with a microcontroller via UART?",
    "options": [
      "Three pins: TxD, RxD, and ground",
      "Two pins: TxD and RxD",
      "Four pins: TxD, RxD, VCC, and ground",
      "Five pins: TxD, RxD, Clock, VCC, and ground"
    ],
    "answer": "Three pins: TxD, RxD, and ground",
    "explanation": "A common ground is required, along with Transmit Data (TxD) and Receive Data (RxD) pins."
  },
  {
    "id": 9,
    "category": "Lecture 06",
    "question": "How are the TxD and RxD pins of a microcontroller connected to a USB to Serial UART module?",
    "options": [
      "TxD to RxD and RxD to TxD",
      "TxD to TxD and RxD to RxD",
      "Both to ground",
      "Both to VCC"
    ],
    "answer": "TxD to RxD and RxD to TxD",
    "explanation": "The transmitter of one device must connect to the receiver of the other device."
  },
  {
    "id": 10,
    "category": "Lecture 06",
    "question": "What is the name of the 8-bit register in the 8051 microcontroller used solely to hold data for serial communication?",
    "options": [
      "SBUF",
      "SCON",
      "TMOD",
      "TH1"
    ],
    "answer": "SBUF",
    "explanation": "The Serial Buffer (SBUF) is used to hold the data byte being transmitted or received."
  },
  {
    "id": 11,
    "category": "Lecture 06",
    "question": "Which register is used to program the start bit, stop bit, and data bits of data framing in the 8051?",
    "options": [
      "SCON",
      "SBUF",
      "PCON",
      "TCON"
    ],
    "answer": "SCON",
    "explanation": "The Serial Control (SCON) register configures the serial communication modes and framing."
  },
  {
    "id": 12,
    "category": "Lecture 06",
    "question": "In the 8051, which timer is typically used to set the baud rate for serial communication?",
    "options": [
      "Timer 1 in Mode 2 (8-bit auto-reload)",
      "Timer 0 in Mode 1 (16-bit)",
      "Timer 1 in Mode 1 (16-bit)",
      "Timer 0 in Mode 2 (8-bit auto-reload)"
    ],
    "answer": "Timer 1 in Mode 2 (8-bit auto-reload)",
    "explanation": "Timer 1 is configured in Mode 2 (TMOD = 20H) to continuously reload TH1 and generate a steady baud rate."
  },
  {
    "id": 13,
    "category": "Lecture 06",
    "question": "To configure Timer 1 in Mode 2 for serial communication, what value is loaded into the TMOD register?",
    "options": [
      "20H",
      "50H",
      "10H",
      "02H"
    ],
    "answer": "20H",
    "explanation": "Loading TMOD with 20H sets Timer 1 to Mode 2 (8-bit auto-reload)."
  },
  {
    "id": 14,
    "category": "Lecture 06",
    "question": "If the 8051 uses an 11.0592 MHz crystal oscillator, what is the frequency of the machine cycle fed to the timer?",
    "options": [
      "921.6 kHz",
      "11.0592 MHz",
      "1 MHz",
      "28800 Hz"
    ],
    "answer": "921.6 kHz",
    "explanation": "The oscillator frequency is divided by 12. 11.0592 MHz / 12 = 921.6 kHz."
  },
  {
    "id": 15,
    "category": "Lecture 06",
    "question": "In the 8051 UART baud rate calculation, by what factor is the timer frequency further divided to calculate the TH1 reload value?",
    "options": [
      "32",
      "12",
      "16",
      "64"
    ],
    "answer": "32",
    "explanation": "The UART circuitry divides the timer overflow rate by 32. So 921.6 kHz / 32 = 28800 Hz."
  },
  {
    "id": 16,
    "category": "Lecture 06",
    "question": "Why is an 11.0592 MHz crystal frequently used in 8051 systems requiring serial communication?",
    "options": [
      "Because it perfectly divides down to standard baud rates without error",
      "Because it is the fastest crystal the 8051 supports",
      "Because it consumes the least power",
      "Because it is required by the Timer 0 hardware"
    ],
    "answer": "Because it perfectly divides down to standard baud rates without error",
    "explanation": "The division of 11.0592 MHz yields an exact integer value (28800) which perfectly divides into standard baud rates like 9600, 4800, etc."
  },
  {
    "id": 17,
    "category": "Lecture 06",
    "question": "What value must be loaded into TH1 to achieve a baud rate of 9600 using an 11.0592 MHz crystal?",
    "options": [
      "-3 (or FDH)",
      "-6 (or FAH)",
      "-12 (or F4H)",
      "-24 (or E8H)"
    ],
    "answer": "-3 (or FDH)",
    "explanation": "28800 / 9600 = 3. Since the timer counts up, we load the two's complement, which is -3 or FDH."
  },
  {
    "id": 18,
    "category": "Lecture 06",
    "question": "What value must be loaded into TH1 to achieve a baud rate of 4800 using an 11.0592 MHz crystal?",
    "options": [
      "-6 (or FAH)",
      "-3 (or FDH)",
      "-12 (or F4H)",
      "-24 (or E8H)"
    ],
    "answer": "-6 (or FAH)",
    "explanation": "28800 / 4800 = 6. So TH1 is loaded with -6."
  },
  {
    "id": 19,
    "category": "Lecture 06",
    "question": "What does loading the SCON register with 50H achieve?",
    "options": [
      "Selects Mode 1 and enables the receiver (REN=1)",
      "Selects Mode 2 and disables the receiver",
      "Selects Mode 0 and enables the receiver",
      "Selects Mode 1 and starts Timer 1"
    ],
    "answer": "Selects Mode 1 and enables the receiver (REN=1)",
    "explanation": "SCON = 50H (01010000 in binary) sets SM1=1 (Mode 1) and REN=1 (Receive Enable)."
  },
  {
    "id": 20,
    "category": "Lecture 06",
    "question": "Which SCON bits are used to determine the serial communication mode?",
    "options": [
      "SM0 and SM1",
      "REN and TI",
      "TI and RI",
      "SM2 and REN"
    ],
    "answer": "SM0 and SM1",
    "explanation": "SM0 and SM1 are the top two bits of the SCON register that determine Mode 0, 1, 2, or 3."
  },
  {
    "id": 21,
    "category": "Lecture 06",
    "question": "What does Mode 1 of the 8051 serial port correspond to?",
    "options": [
      "8-bit data framed with 1 start bit and 1 stop bit",
      "9-bit data framed with 1 start bit and 1 stop bit",
      "8-bit shift register mode",
      "9-bit multiprocessor mode"
    ],
    "answer": "8-bit data framed with 1 start bit and 1 stop bit",
    "explanation": "Mode 1 is the standard 8-bit UART mode with framing."
  },
  {
    "id": 22,
    "category": "Lecture 06",
    "question": "Which bit enables the 8051 to receive serial data?",
    "options": [
      "REN (Receive Enable)",
      "TI (Transmit Interrupt)",
      "RI (Receive Interrupt)",
      "TR1 (Timer Run 1)"
    ],
    "answer": "REN (Receive Enable)",
    "explanation": "The REN bit in the SCON register must be set to 1 for the UART to receive data."
  },
  {
    "id": 23,
    "category": "Lecture 06",
    "question": "How does the software know when a character has finished transmitting from SBUF?",
    "options": [
      "The TI (Transmit Interrupt) flag is set to 1 by hardware",
      "The RI (Receive Interrupt) flag is set to 1 by hardware",
      "SBUF becomes 0",
      "The REN bit is cleared"
    ],
    "answer": "The TI (Transmit Interrupt) flag is set to 1 by hardware",
    "explanation": "Once the stop bit is transmitted, the hardware sets the TI flag, which the software must monitor and then clear."
  },
  {
    "id": 24,
    "category": "Lecture 06",
    "question": "After monitoring that the TI flag is set to 1, what must the programmer do before sending the next byte?",
    "options": [
      "Clear the TI flag to 0 using software",
      "Set the TI flag to 1 again",
      "Clear the RI flag to 0",
      "Stop Timer 1"
    ],
    "answer": "Clear the TI flag to 0 using software",
    "explanation": "The hardware does not clear the TI flag automatically; it must be cleared by software before the next transmission."
  },
  {
    "id": 25,
    "category": "Lecture 06",
    "question": "How does the software know when a new character has been fully received?",
    "options": [
      "The RI (Receive Interrupt) flag is set to 1 by hardware",
      "The TI (Transmit Interrupt) flag is set to 1 by hardware",
      "The REN bit becomes 0",
      "The SBUF register overflows"
    ],
    "answer": "The RI (Receive Interrupt) flag is set to 1 by hardware",
    "explanation": "Once the stop bit is received, the hardware sets the RI flag indicating that a complete byte is in SBUF."
  },
  {
    "id": 26,
    "category": "Lecture 06",
    "question": "What instruction is commonly used to poll the TI flag to check if transmission is complete?",
    "options": [
      "JNB TI, label",
      "SETB TI",
      "CLR TI",
      "MOV TI, #1"
    ],
    "answer": "JNB TI, label",
    "explanation": "\"Jump if Not Bit\" (JNB) loops in place checking TI until it becomes 1."
  },
  {
    "id": 27,
    "category": "Lecture 06",
    "question": "In the serial reception code, what should be done immediately after detecting that RI is 1 and reading the data from SBUF?",
    "options": [
      "Clear the RI flag to 0",
      "Clear the TI flag to 0",
      "Disable the REN bit",
      "Stop the timer"
    ],
    "answer": "Clear the RI flag to 0",
    "explanation": "To allow the next byte to be received and detected, RI must be manually cleared."
  },
  {
    "id": 28,
    "category": "Lecture 06",
    "question": "Why do modern PCs require a USB to Serial UART module to communicate with an 8051 microcontroller?",
    "options": [
      "Because modern PCs do not have built-in physical RS-232/UART COM ports",
      "Because the 8051 UART protocol is completely proprietary",
      "Because the PC operates at too fast a baud rate",
      "Because USB uses synchronous communication while 8051 uses asynchronous"
    ],
    "answer": "Because modern PCs do not have built-in physical RS-232/UART COM ports",
    "explanation": "Modern laptops and PCs have dropped DB9 serial ports in favor of USB, necessitating a converter."
  },
  {
    "id": 29,
    "category": "Lecture 06",
    "question": "When transferring strings via UART using C programming (as mentioned in the lecture), how is the string handled?",
    "options": [
      "It is passed as a pointer and transmitted character by character using a loop until the null terminator (0) is reached",
      "The entire string is written to SBUF simultaneously",
      "A special 16-bit register is used instead of SBUF",
      "The string is compressed before transmission"
    ],
    "answer": "It is passed as a pointer and transmitted character by character using a loop until the null terminator (0) is reached",
    "explanation": "SBUF can only hold one byte, so a loop iterating through a character array pointer is used."
  },
  {
    "id": 30,
    "category": "Lecture 06",
    "question": "During serial communication, what is the 'mark' and 'space' state referring to?",
    "options": [
      "Mark represents logic 1 (high) and Space represents logic 0 (low)",
      "Mark represents logic 0 (low) and Space represents logic 1 (high)",
      "Mark is the data bit and Space is the parity bit",
      "Mark is the start bit and Space is the stop bit"
    ],
    "answer": "Mark represents logic 1 (high) and Space represents logic 0 (low)",
    "explanation": "In standard UART terminology, logic high is called mark and logic low is called space."
  },
  {
    "id": 31,
    "category": "Lecture 06",
    "question": "What is the purpose of the SM2 bit in the SCON register?",
    "options": [
      "It is used for multiprocessor communication",
      "It enables the serial port",
      "It sets the timer mode",
      "It clears the SBUF register"
    ],
    "answer": "It is used for multiprocessor communication",
    "explanation": "SM2 is primarily utilized in Modes 2 and 3 for multiprocessor communication environments."
  },
  {
    "id": 32,
    "category": "Lecture 06",
    "question": "Which bits in the SCON register are used for the 9th data bit in 9-bit communication modes?",
    "options": [
      "TB8 and RB8",
      "SM0 and SM1",
      "TI and RI",
      "REN and SM2"
    ],
    "answer": "TB8 and RB8",
    "explanation": "TB8 is the 9th bit to be transmitted, and RB8 is the 9th bit received in modes 2 and 3."
  },
  {
    "id": 33,
    "category": "Lecture 06",
    "question": "When sending a byte, when exactly is the TI flag set to 1?",
    "options": [
      "At the end of the transmission of the stop bit",
      "At the beginning of the transmission of the start bit",
      "As soon as data is written to SBUF",
      "When the timer overflows"
    ],
    "answer": "At the end of the transmission of the stop bit",
    "explanation": "The TI flag is raised by hardware indicating that the entire frame, including the stop bit, has been transmitted."
  },
  {
    "id": 34,
    "category": "Lecture 06",
    "question": "What is the purpose of software programs like PuTTY or TeraTerm in this context?",
    "options": [
      "To open a COM port on the PC and communicate with the microcontroller via the USB-to-Serial module",
      "To compile the C code for the 8051",
      "To simulate the 8051 circuit",
      "To burn the hex file onto the microcontroller"
    ],
    "answer": "To open a COM port on the PC and communicate with the microcontroller via the USB-to-Serial module",
    "explanation": "These terminal emulator programs allow the user to send keystrokes and view received serial data over a specified COM port."
  }
]
;