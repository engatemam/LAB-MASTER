const lec03Data = [
  {
    "id": 1,
    "category": "Lecture 03",
    "question": "Why is C programming preferred over Assembly for 8051?",
    "options": [
      "It has smaller hex file sizes",
      "It is easier, less time-consuming, and portable",
      "It executes faster",
      "It requires no compiler"
    ],
    "answer": "It is easier, less time-consuming, and portable",
    "explanation": "C programming is less time-consuming, easier to modify, allows the use of libraries, and is portable to other microcontrollers."
  },
  {
    "id": 2,
    "category": "Lecture 03",
    "question": "What is the disadvantage of using C programming compared to Assembly?",
    "options": [
      "It is harder to modify",
      "It lacks function libraries",
      "It produces a larger hex file size",
      "It is not portable"
    ],
    "answer": "It produces a larger hex file size",
    "explanation": "While C is easier and faster to write, it generates a larger hex file size compared to optimized Assembly code."
  },
  {
    "id": 3,
    "category": "Lecture 03",
    "question": "Which data type is used to access the byte-size Special Function Registers (SFR) in C?",
    "options": [
      "sbit",
      "bit",
      "sfr",
      "unsigned char"
    ],
    "answer": "sfr",
    "explanation": "To access the byte-size SFR registers, the 'sfr' data type is used."
  },
  {
    "id": 4,
    "category": "Lecture 03",
    "question": "Which data type allows access to single bits of bit-addressable memory spaces (20 \u2013 2FH)?",
    "options": [
      "bit",
      "sbit",
      "char",
      "int"
    ],
    "answer": "bit",
    "explanation": "The 'bit' data type allows access to single bits within the bit-addressable memory space."
  },
  {
    "id": 5,
    "category": "Lecture 03",
    "question": "If the keyword 'unsigned' is not specified, what is the default for a char data type in Keil C compiler?",
    "options": [
      "unsigned char",
      "signed char",
      "unsigned int",
      "signed int"
    ],
    "answer": "signed char",
    "explanation": "C compilers use the signed char as the default if the keyword unsigned is not put."
  },
  {
    "id": 6,
    "category": "Lecture 03",
    "question": "What is the value range of a signed char?",
    "options": [
      "0 to 255",
      "-128 to +127",
      "-32768 to +32767",
      "0 to 65535"
    ],
    "answer": "-128 to +127",
    "explanation": "The signed char is an 8-bit data type that gives values from -128 to +127."
  },
  {
    "id": 7,
    "category": "Lecture 03",
    "question": "What is the value range of an unsigned char?",
    "options": [
      "0 to 255",
      "-128 to +127",
      "0 to 65535",
      "-32768 to +32767"
    ],
    "answer": "0 to 255",
    "explanation": "An unsigned char is an 8-bit data type with a value range from 0 to 255."
  },
  {
    "id": 8,
    "category": "Lecture 03",
    "question": "What is the size and value range of an unsigned int?",
    "options": [
      "8-bit, 0 to 255",
      "16-bit, 0 to 65535",
      "16-bit, -32768 to +32767",
      "8-bit, -128 to +127"
    ],
    "answer": "16-bit, 0 to 65535",
    "explanation": "The unsigned int is a 16-bit data type that takes a value in the range of 0 to 65535 (0000 \u2013 FFFFH)."
  },
  {
    "id": 9,
    "category": "Lecture 03",
    "question": "In signed data types, which bit is used to represent the sign (positive or negative)?",
    "options": [
      "LSB",
      "MSB",
      "The parity bit",
      "The carry flag"
    ],
    "answer": "MSB",
    "explanation": "The Most Significant Bit (MSB) is used to represent the sign (+ or -) in signed data types."
  },
  {
    "id": 10,
    "category": "Lecture 03",
    "question": "Which header file must be included to use standard SFR names like P1 and P2 without defining their addresses manually?",
    "options": [
      "<stdio.h>",
      "<math.h>",
      "<reg51.h> or <reg52.h>",
      "<8051.h>"
    ],
    "answer": "<reg51.h> or <reg52.h>",
    "explanation": "The reg51.h or reg52.h header file contains all the pre-defined SFR addresses so you can use names like P1 directly."
  },
  {
    "id": 11,
    "category": "Lecture 03",
    "question": "To configure an 8051 port pin as an input, what should be written to it?",
    "options": [
      "0",
      "1",
      "It is configured by default",
      "High impedance"
    ],
    "answer": "1",
    "explanation": "Writing a 1 to an 8051 port pin configures it as an input."
  },
  {
    "id": 12,
    "category": "Lecture 03",
    "question": "To configure an 8051 port pin as an output, what is the recommended initialization value?",
    "options": [
      "0",
      "1",
      "0xFF",
      "Floating"
    ],
    "answer": "0",
    "explanation": "Writing a 0 to an 8051 port pin initializes it for output operations."
  },
  {
    "id": 13,
    "category": "Lecture 03",
    "question": "In the building process, which tool converts C code into Assembly code?",
    "options": [
      "Assembler",
      "Linker",
      "Compiler",
      "Object Copy"
    ],
    "answer": "Compiler",
    "explanation": "The C Compiler converts the C source files into Assembly code."
  },
  {
    "id": 14,
    "category": "Lecture 03",
    "question": "Which tool collects multiple object files and assigns memory addresses using a script?",
    "options": [
      "Assembler",
      "Linker",
      "Compiler",
      "Programmer"
    ],
    "answer": "Linker",
    "explanation": "The Linker combines multiple object files and assigns absolute memory addresses."
  },
  {
    "id": 15,
    "category": "Lecture 03",
    "question": "What is the role of the Linker Script (.ld file)?",
    "options": [
      "To convert Assembly to machine code",
      "To define the memory ranges and divide Load view and Run view",
      "To burn the hex file to the microcontroller",
      "To map C code to Assembly for debugging"
    ],
    "answer": "To define the memory ranges and divide Load view and Run view",
    "explanation": "The Linker script specifies memory boundaries and where code (ROM) and variables (RAM) reside."
  },
  {
    "id": 16,
    "category": "Lecture 03",
    "question": "Where is the actual executing program code primarily stored (Load view) when the system is powered off?",
    "options": [
      "RAM",
      "ROM",
      "Registers",
      "Cache"
    ],
    "answer": "ROM",
    "explanation": "The code is written to ROM so that it is preserved when the device loses power."
  },
  {
    "id": 17,
    "category": "Lecture 03",
    "question": "Which file format is ultimately burned into the 8051 microcontroller?",
    "options": [
      ".c",
      ".obj",
      ".hex",
      ".lst"
    ],
    "answer": ".hex",
    "explanation": "The HEX file is the final binary format containing machine code and memory addresses that is burned into the microcontroller."
  },
  {
    "id": 18,
    "category": "Lecture 03",
    "question": "What is the purpose of the list file (.lst)?",
    "options": [
      "To be burned into the microcontroller",
      "To map C code to Assembly for debugging and provide compilation information",
      "To define memory segments",
      "To store function libraries"
    ],
    "answer": "To map C code to Assembly for debugging and provide compilation information",
    "explanation": "The list file helps developers debug by showing the C code mapped directly to generated Assembly."
  },
  {
    "id": 19,
    "category": "Lecture 03",
    "question": "What specific letter in the microcontroller's part name (e.g., AT89S52) indicates support for SPI programming?",
    "options": [
      "A",
      "C",
      "S",
      "P"
    ],
    "answer": "S",
    "explanation": "The 'S' in parts like AT89S52 stands for SPI programming capability, allowing easy in-system programming."
  },
  {
    "id": 20,
    "category": "Lecture 03",
    "question": "In Keil IDE, to generate a hex file, what option must be checked in the Output tab?",
    "options": [
      "Create HEX file",
      "Generate Assembly",
      "Build Object",
      "Compile to Binary"
    ],
    "answer": "Create HEX file",
    "explanation": "You must check 'Create HEX file' in the Output options to instruct the toolchain to generate the .hex file."
  },
  {
    "id": 21,
    "category": "Lecture 03",
    "question": "What components are necessary for the 8051 hardware reset circuit?",
    "options": [
      "Inductor and Capacitor",
      "Resistor and Capacitor",
      "Two resistors",
      "Diode and Capacitor"
    ],
    "answer": "Resistor and Capacitor",
    "explanation": "A standard RC (Resistor-Capacitor) circuit is used to provide the reset signal during power-up."
  },
  {
    "id": 22,
    "category": "Lecture 03",
    "question": "What is the minimum duration the reset pin must be held high to effectively reset the 8051?",
    "options": [
      "1 machine cycle",
      "2 machine cycles",
      "4 machine cycles",
      "8 machine cycles"
    ],
    "answer": "2 machine cycles",
    "explanation": "The reset pin must be high for at least 2 machine cycles to successfully reset the microcontroller."
  },
  {
    "id": 23,
    "category": "Lecture 03",
    "question": "Which tool can be used as an ISP programmer to transfer the hex file from the PC to the microcontroller?",
    "options": [
      "A multimeter",
      "An oscilloscope",
      "An Arduino board",
      "A function generator"
    ],
    "answer": "An Arduino board",
    "explanation": "An Arduino can be configured as an In-System Programmer (ISP) to burn the hex file to the 8051 microcontroller."
  }
]
;