const lec03Data = [
  {
    category: "Lecture 03",
    text: "........ is the default data type used by 8051 C compilers when no keyword is specified.",
    options: ["unsigned char", "signed char", "signed int", "unsigned int"],
    correctIndex: 1,
    explanation: "C compilers use the signed char as the default if we do not put the keyword unsigned."
  },
  {
    category: "Lecture 03",
    text: "True or False: Writing programs in C is generally more time consuming than writing in Assembly, but results in a smaller hex file size.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. C programming is less time consuming but has a larger hex file size. This twists the definition of C advantages."
  },
  {
    category: "Lecture 03",
    text: "The ........ data type allows access to single bits of bit-addressable RAM memory spaces, whereas `sbit` is used strictly for SFR registers.",
    options: ["sbit", "bit", "sfr", "char"],
    correctIndex: 1,
    explanation: "`bit` is for RAM bit-addressable only, while `sbit` is for SFR bit-addressable only."
  },
  {
    category: "Lecture 03",
    text: "For the 8051 microcontroller, the `sfr` data type represents 8-bit RAM addresses strictly in the range of ........",
    options: ["00 - 7FH", "80 - FFH", "20 - 2FH", "00 - FFH"],
    correctIndex: 1,
    explanation: "The `sfr` data type accesses RAM addresses 80 – FFH only. Distractor math is used in other options."
  },
  {
    category: "Lecture 03",
    text: "The size of an `unsigned int` in 8051 C is 16 bits, which allows it to take a value from 0 to ........",
    options: ["65536", "32767", "65535", "32768"],
    correctIndex: 2,
    explanation: "`unsigned int` is a 16-bit data type, taking a value from 0 to 65535. 65536 is a math distractor."
  },
  {
    category: "Lecture 03",
    text: "Which of the following is the correct syntax trap to include the 8051 header file in a C program?",
    options: ["#include <8051.h>", "#include <reg51.h>", "#include <mcu51.h>", "#include <at89c51.h>"],
    correctIndex: 1,
    explanation: "#include <reg51.h> is the correct syntax. Spaces or wrong extensions are syntax traps."
  },
  {
    category: "Lecture 03",
    text: "True or False: The `sbit` keyword allows access to the single bits of the bit-addressable RAM memory spaces 20 – 2FH.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. `sbit` allows access to single bits of the SFR registers, whereas `bit` accesses RAM memory spaces 20-2FH."
  },
  {
    category: "Lecture 03",
    text: "The MSB ........ is used to represent the sign (- or +) in an 8-bit signed char data type.",
    options: ["D0", "D7", "D8", "D15"],
    correctIndex: 1,
    explanation: "D7 is the MSB for an 8-bit data type, representing the sign."
  },
  {
    category: "Lecture 03",
    text: "In 8051 C, the `signed int` uses exactly ........ bits for the magnitude of the number, excluding the sign bit.",
    options: ["16", "15", "8", "7"],
    correctIndex: 1,
    explanation: "It uses 15 bits for the magnitude, and 1 bit (D15) for the sign. 16 is a math distractor."
  },
  {
    category: "Lecture 03",
    text: "True or False: Ports P0 – P3 are bit-accessible but they are never byte-accessible.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Ports P0 – P3 are byte-accessible and we use the P0 – P3 labels as defined in the header file."
  },
  {
    category: "Lecture 03",
    text: "When burning code into the 8052 microcontroller, the ........ file must be uploaded to the programmer.",
    options: ["C source code", "Executable image", "HEX file", "Disassembled Code"],
    correctIndex: 2,
    explanation: "The HEX file is sent to the programmer to burn into the microcontroller."
  },
  {
    category: "Lecture 03",
    text: "During the code building process, which tool specifically takes Object files (.o) and a Linker script (.ld) to produce an Executable image file?",
    options: ["gcc compiler", "as (assembler)", "ld (linker)", "objcopy utility"],
    correctIndex: 2,
    explanation: "ld (linker) takes object files and a linker script to link them."
  },
  {
    category: "Lecture 03",
    text: "The numerical value range for a `(signed) char` in 8051 C programming is from ........",
    options: ["-128 to +127", "-127 to +128", "0 to 255", "-32768 to +32767"],
    correctIndex: 0,
    explanation: "The range is -128 to +127. Distractor math -127 to +128 is a common trap."
  },
  {
    category: "Lecture 03",
    text: "To declare a single bit of Port 1 (P1.0) in C, which of the following is the exact syntax used?",
    options: ["sfr MYBIT = 0x90;", "bit MYBIT = P1_0;", "sbit MYBIT = P1^0;", "#define MYBIT P1.0"],
    correctIndex: 2,
    explanation: "sbit MYBIT = P1^0; is the exact syntax. P1.0 or using bit instead of sbit are syntax traps."
  },
  {
    category: "Lecture 03",
    text: "True or False: The gcc compiler performs ONLY the link stage to output an Executable image file.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. The diagram shows gcc performing both (compile + link) stages."
  },
  {
    category: "Lecture 03",
    text: "In a C program, writing `P0=0xFF;` configures Port 0 to act as a(n) ........ port.",
    options: ["Output", "Input", "Bidirectional", "Analog"],
    correctIndex: 1,
    explanation: "Writing 0xFF to a port makes it an input port."
  },
  {
    category: "Lecture 03",
    text: "To represent the sign in a 16-bit `signed int`, the MSB ........ is utilized.",
    options: ["D7", "D8", "D15", "D16"],
    correctIndex: 2,
    explanation: "D15 is the MSB for a 16-bit signed int. D16 is distractor math."
  },
  {
    category: "Lecture 03",
    text: "True or False: A major disadvantage of C code is that it is highly non-portable to other microcontrollers.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. C code is highly portable to other microcontrollers with little or no modification."
  },
  {
    category: "Lecture 03",
    text: "The array declaration `char mynum[]={+1,-1,+2,-2};` implicitly allocates an array of type ........",
    options: ["unsigned char", "signed char", "unsigned int", "signed int"],
    correctIndex: 1,
    explanation: "C compilers use the signed char as the default if we do not put the keyword unsigned."
  },
  {
    category: "Lecture 03",
    text: "During the firmware building process, the tool ........ produces the Disassembled Code (.lst) from the Executable image file.",
    options: ["objcopy", "gcc", "objdump", "ld"],
    correctIndex: 2,
    explanation: "The diagram explicitly shows objdump generating Disassembled Code (.lst)."
  },
  {
    category: "Lecture 03",
    text: "What is the primary function of `objcopy` during the code building process?",
    options: ["It links Object files", "It produces the Binary program file", "It compiles C files", "It assembles ASM files"],
    correctIndex: 1,
    explanation: "objcopy generates the Binary program file (.bin) from the Executable image file."
  },
  {
    category: "Lecture 03",
    text: "True or False: The `bit` data type can be freely used to access the byte-size SFR registers.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. The `sfr` data type is used to access the byte-size SFR registers, while `bit` is for RAM."
  },
  {
    category: "Lecture 03",
    text: "In the Keil IDE, when configuring the output for an 8051 project, the exact HEX Format selected to create the hex file is ........",
    options: ["HEX-80", "HEX-86", "HEX-386", "HEX-51"],
    correctIndex: 0,
    explanation: "The screenshot shows the HEX Format selected as 'HEX-80' under Options for Target."
  },
  {
    category: "Lecture 03",
    text: "........ is the specific Xtal (MHz) value correctly configured in the Keil project options for the AT89S52 microcontroller example.",
    options: ["11.0592", "12.0000", "16.0000", "8.0000"],
    correctIndex: 0,
    explanation: "The screenshot of the Keil Options for Target shows Xtal (MHz) as precisely 11.0592. Other values are distractor math."
  },
  {
    category: "Lecture 03",
    text: "True or False: The Hex File is transferred directly from the Text Editor to the Monitor ROM via a Serial Cable.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. The Hex file must first be generated by a Compiler/Assembler, and then sent via a Programmer or Terminal Emulator to the microcontroller."
  }
];

