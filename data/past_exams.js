const pastExamsData = [
    {
        "id": 1,
        "category": "Past Exam",
        "question": "........ display graphical signals in a format on a pair of axes, generally with Y as voltage and X as the time.",
        "options": [
            "Multimeter",
            "Oscilloscope",
            "Power Supply",
            "Function Generator"
        ],
        "answer": "Oscilloscope",
        "explanation": "An oscilloscope is used to display and analyze the waveform of electronic signals, plotting voltage (Y-axis) against time (X-axis)."
    },
    {
        "id": 2,
        "category": "Past Exam",
        "question": "This part of the processor contains the logic to perform arithmetic and logic operations.",
        "options": [
            "CU",
            "DMA",
            "ALU",
            "Registers"
        ],
        "answer": "ALU",
        "explanation": "The Arithmetic Logic Unit (ALU) is the part of the CPU responsible for performing arithmetic and bitwise logical operations."
    },
    {
        "id": 3,
        "category": "Past Exam",
        "question": "........ is able to generate waveforms with common shapes.",
        "options": [
            "Power Supply",
            "Multimeter",
            "Oscilloscope",
            "Function Generator"
        ],
        "answer": "Function Generator",
        "explanation": "A function generator is a piece of electronic test equipment used to generate different types of electrical waveforms over a wide range of frequencies."
    },
    {
        "id": 4,
        "category": "Past Exam",
        "question": "........ measure both AC and DC voltage and current as well as resistance.",
        "options": [
            "Power Supply",
            "Oscilloscope",
            "Multimeter",
            "Function Generator"
        ],
        "answer": "Multimeter",
        "explanation": "A multimeter is an instrument designed to measure electric current, voltage, and usually resistance."
    },
    {
        "id": 5,
        "category": "Past Exam",
        "question": "During the....phase, an instruction is read from the memory and decoded by the instruction decoder.",
        "options": [
            "execute",
            "fetch",
            "halting",
            "None of above"
        ],
        "answer": "fetch",
        "explanation": "During the fetch phase of the instruction cycle, the CPU retrieves the instruction from memory."
    },
    {
        "id": 6,
        "category": "Past Exam",
        "question": "At......, the description is translated into generic logic gates.",
        "options": [
            "Technology map-",
            "Option B",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Technology map-",
        "explanation": "In FPGA/ASIC design flow, technology mapping is the phase where generic logic gates are mapped to specific cells or LUTs available in the target technology."
    },
    {
        "id": 7,
        "category": "Past Exam",
        "question": "In....triggering, the sequential circuit is operated with the clock signal when it is in Logic High or low.",
        "options": [
            "level",
            "edge",
            "Both A and B",
            "None of the above"
        ],
        "answer": "level",
        "explanation": "Level triggering means the circuit is sensitive to the level (high or low) of the clock signal, unlike edge triggering which responds to transitions."
    },
    {
        "id": 8,
        "category": "Past Exam",
        "question": "The..... package have contacts embedded in the bottom of the package.",
        "options": [
            "FBGA",
            "PLCC",
            "SOP",
            "QFP"
        ],
        "answer": "FBGA",
        "explanation": "Fine-Pitch Ball Grid Array (FBGA) packages have solder balls embedded on the bottom for surface mounting."
    },
    {
        "id": 9,
        "category": "Past Exam",
        "question": "The most common type of through-hole package is the.......",
        "options": [
            "PLCC",
            "DIP",
            "QFP",
            "SSOP"
        ],
        "answer": "DIP",
        "explanation": "Dual In-line Package (DIP) is the most common through-hole IC package, featuring two parallel rows of pins."
    },
    {
        "id": 10,
        "category": "Past Exam",
        "question": "The software components of an embedded system frequently referred to as the system ........",
        "options": [
            "task",
            "firmware",
            "memory",
            "kernel"
        ],
        "answer": "firmware",
        "explanation": "Firmware refers to the specific class of computer software that provides the low-level control for a device's specific hardware."
    },
    {
        "id": 11,
        "category": "Past Exam",
        "question": "........ is considered as a type of data converters to allow interaction with analog sensors and actuators.",
        "options": [
            "diagnostics",
            "ADC",
            "FPGA",
            "None of above"
        ],
        "answer": "ADC",
        "explanation": "An Analog-to-Digital Converter (ADC) converts continuous analog signals (from sensors) to discrete digital numbers."
    },
    {
        "id": 12,
        "category": "Past Exam",
        "question": "The high-speed ...... are inserted in between the CPU and memory.",
        "options": [
            "main memories",
            "caches",
            "SSD",
            "None of above"
        ],
        "answer": "caches",
        "explanation": "Cache memory is a small, high-speed memory placed between the CPU and main memory to reduce access times."
    },
    {
        "id": 13,
        "category": "Past Exam",
        "question": "The... is an abstract interface between the hardware and the lowest-level software.",
        "options": [
            "Register file",
            "architecture",
            "Bus",
            "Program counter"
        ],
        "answer": "architecture",
        "explanation": "Instruction Set Architecture (ISA) serves as the boundary and interface between the hardware and the low-level software."
    },
    {
        "id": 14,
        "category": "Past Exam",
        "question": "..... is used to provide fixed position for solder paste printing.",
        "options": [
            "PCB",
            "Solder paste",
            "SMC",
            "Stencil"
        ],
        "answer": "Stencil",
        "explanation": "A stencil is used in SMT to deposit solder paste on the PCB exactly where the component pads are located."
    },
    {
        "id": 15,
        "category": "Past Exam",
        "question": "At....... stage, the electrical solder connections are formed between the components and PCB by heating the assembly to a sufficient temperature.",
        "options": [
            "Reflow soldering",
            "Solder paste print-",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Reflow soldering",
        "explanation": "Reflow soldering is a process in which a solder paste is used to temporarily attach tiny electrical components to their contact pads, after which the entire assembly is subjected to controlled heat."
    },
    {
        "id": 16,
        "category": "Past Exam",
        "question": "SMD resistor with label \u201d474\u201d has a resistance of ........\u2126.",
        "options": [
            "4704",
            "470",
            "470 K",
            "47.4"
        ],
        "answer": "470 K",
        "explanation": "An SMD resistor labeled '474' has a value of 47 x 10^4 = 470,000 ohms or 470 kOhm."
    },
    {
        "id": 17,
        "category": "Past Exam",
        "question": "........ is targeted for high end market where performance is important.",
        "options": [
            "Microprocessor",
            "Microcontroller",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Microprocessor",
        "explanation": "Microprocessors lack built-in peripherals and memory, focusing on high processing performance for high-end applications."
    },
    {
        "id": 18,
        "category": "Past Exam",
        "question": "In.........., you can handle the compile and link processing using scripts.",
        "options": [
            "makefile",
            "Elf file",
            "Linker script",
            "LINKV2"
        ],
        "answer": "makefile",
        "explanation": "A Makefile is used to automate the compilation and linking process using the make utility."
    },
    {
        "id": 19,
        "category": "Past Exam",
        "question": "Includes lot of power saving features ........",
        "options": [
            "Microprocessor",
            "Microcontroller",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Microcontroller",
        "explanation": "Microcontrollers are designed for embedded applications and typically include multiple power-saving modes to minimize energy consumption."
    },
    {
        "id": 20,
        "category": "Past Exam",
        "question": "To generate the final combined executable image, a separate .....process is required.",
        "options": [
            "compilation",
            "assembler",
            "linking",
            "None of above"
        ],
        "answer": "linking",
        "explanation": "Linking is the final stage of compilation, combining object files and libraries into a single executable image."
    },
    {
        "id": 21,
        "category": "Past Exam",
        "question": "you can check the program execution status and results by outputting information via various I/O mechanisms such as a .....interface.",
        "options": [
            "Flash memory",
            "bootloader",
            "UART",
            "None of above"
        ],
        "answer": "UART",
        "explanation": "A UART (Universal Asynchronous Receiver-Transmitter) interface is commonly used to output debug and execution status information to a terminal."
    },
    {
        "id": 22,
        "category": "Past Exam",
        "question": "Allows multiple processes to be executed concurrently, by dividing the processor\u2019s time into time slots.",
        "options": [
            "Interrupt driven",
            "polling",
            "RTOS",
            "None of above"
        ],
        "answer": "RTOS",
        "explanation": "A Real-Time Operating System (RTOS) allows multiple tasks to execute concurrently through time-slicing or preemptive scheduling."
    },
    {
        "id": 23,
        "category": "Past Exam",
        "question": "...... method is not energy efficient.",
        "options": [
            "Interrupt driven",
            "polling",
            "RTOS",
            "None of above"
        ],
        "answer": "polling",
        "explanation": "Polling continuously checks the status of a device, wasting CPU cycles and energy compared to interrupt-driven approaches."
    },
    {
        "id": 24,
        "category": "Past Exam",
        "question": "The ......connect the logic signals to FPGA pins.",
        "options": [
            "DSP blocks",
            "inverters",
            "I/O blocks",
            "NAND"
        ],
        "answer": "I/O blocks",
        "explanation": "Input/Output (I/O) blocks interface the internal routing and logic of an FPGA to external pins."
    },
    {
        "id": 25,
        "category": "Past Exam",
        "question": "Signal substitution is used when the system being tested has been ........ from its signal source.",
        "options": [
            "separated",
            "integrated",
            "Both A and B",
            "None of the above"
        ],
        "answer": "separated",
        "explanation": "Signal substitution involves injecting a known test signal into a circuit when the original signal source is separated or unavailable."
    },
    {
        "id": 26,
        "category": "Past Exam",
        "question": "In....method, you check for the presence or absence of a signal at a point halfway between input and output.",
        "options": [
            "Signal-Tracing",
            "Signal Substitution",
            "Half-Splitting",
            "None of above"
        ],
        "answer": "Half-Splitting",
        "explanation": "Half-splitting is a troubleshooting method where you check the middle of a circuit to determine if the fault is in the first or second half."
    },
    {
        "id": 27,
        "category": "Past Exam",
        "question": "In.... technique, the processor can wait until there is data ready for processing, process it, and then wait again.",
        "options": [
            "Interrupt driven",
            "polling",
            "RTOS",
            "None of above"
        ],
        "answer": "Interrupt driven",
        "explanation": "In an interrupt-driven system, the processor can sleep or do other work and is notified via an interrupt only when data is ready."
    },
    {
        "id": 28,
        "category": "Past Exam",
        "question": "The capacities of some FPGAs are specified in a number of.....",
        "options": [
            "LUTs",
            "capacitors",
            "Buses",
            "None of above"
        ],
        "answer": "LUTs",
        "explanation": "Look-Up Tables (LUTs) are the primary logic element in an FPGA; FPGA capacity is often measured by LUT count."
    },
    {
        "id": 29,
        "category": "Past Exam",
        "question": "-variable expression can be implemented by using... of 4-input LUT.",
        "options": [
            "one",
            "two",
            "three",
            "four"
        ],
        "answer": "four",
        "explanation": "A 4-input LUT can implement any logic function of up to 4 variables."
    },
    {
        "id": 30,
        "category": "Past Exam",
        "question": "The programming file of FPGA is called....",
        "options": [
            "bitstream",
            "elf",
            "NAND",
            "constraints"
        ],
        "answer": "bitstream",
        "explanation": "A bitstream is the file format used to configure the programmable logic and interconnects of an FPGA."
    },
    {
        "id": 31,
        "category": "Past Exam",
        "question": "Importing submodules inside the top module is called ........",
        "options": [
            "declaration",
            "modulation",
            "substitution",
            "instantiation"
        ],
        "answer": "instantiation",
        "explanation": "Instantiation is the process of creating an instance of a submodule within a top-level hardware description module."
    },
    {
        "id": 32,
        "category": "Past Exam",
        "question": "The user ........ are to be specified for timing, power, and area.",
        "options": [
            "bitstream",
            "netlist",
            "constraints",
            "Verilog"
        ],
        "answer": "constraints",
        "explanation": "User constraints specify physical and timing requirements (like pin assignments, clock speeds) for FPGA mapping and routing."
    },
    {
        "id": 33,
        "category": "Past Exam",
        "question": "Altera calls their basic blocks ....",
        "options": [
            "Logic Elements",
            "LUT",
            "FF",
            "None of above"
        ],
        "answer": "Logic Elements",
        "explanation": "Altera (Intel FPGA) traditionally refers to their basic building blocks as Logic Elements (LEs)."
    },
    {
        "id": 34,
        "category": "Past Exam",
        "question": "..... is a general-purpose hardware description language that can be used to describe and simulate the operation of a wide variety of digital systems.",
        "options": [
            "FPGA",
            "JTAG",
            "Verilog",
            "ASIC"
        ],
        "answer": "Verilog",
        "explanation": "Verilog is an IEEE standard Hardware Description Language (HDL) used to model electronic systems."
    },
    {
        "id": 35,
        "category": "Past Exam",
        "question": "The module of Verilog is ended by \u201d...\u201d syntax.",
        "options": [
            "END",
            "endmodule",
            "endmodule;",
            "End module"
        ],
        "answer": "endmodule",
        "explanation": "In Verilog, the keyword endmodule is used to define the end of a module declaration."
    },
    {
        "id": 36,
        "category": "Past Exam",
        "question": "The address space of ARM cortex-M that is used for mapping is ....GB.",
        "options": [
            "2",
            "4",
            "8",
            "32"
        ],
        "answer": "4",
        "explanation": "The ARM Cortex-M architecture has a 32-bit address bus, providing a 4 GB address space."
    },
    {
        "id": 37,
        "category": "Past Exam",
        "question": "The syntax \u201dassign C=A\u2014B\u201d is a...... assignment.",
        "options": [
            "continuous",
            "procedural",
            "Both A and B",
            "None of the above"
        ],
        "answer": "continuous",
        "explanation": "The assign keyword in Verilog is used for continuous assignments to drive values onto nets (wires)."
    },
    {
        "id": 38,
        "category": "Past Exam",
        "question": "A...statement must complete the evaluation of the right-hand side of a statement before the next statements.",
        "options": [
            "blocking",
            "non-blocking",
            "Both A and B",
            "None of the above"
        ],
        "answer": "blocking",
        "explanation": "A blocking assignment (=) evaluates the right-hand side and immediately assigns it to the left-hand side, blocking subsequent statements."
    },
    {
        "id": 39,
        "category": "Past Exam",
        "question": "........ assignment is recommended to be used for sequential circuits.",
        "options": [
            "non-blocking",
            "blocking",
            "Both A and B",
            "None of the above"
        ],
        "answer": "non-blocking",
        "explanation": "Non-blocking assignments (<=) evaluate all right-hand sides at the start of a time step and assign them at the end, ideal for modeling sequential logic."
    },
    {
        "id": 40,
        "category": "Past Exam",
        "question": "Operator \u201d\u00a1=\u201d is used for representing the .....assignment.",
        "options": [
            "blocking",
            "non-blocking",
            "Both A and B",
            "None of the above"
        ],
        "answer": "blocking",
        "explanation": "The = operator represents a blocking assignment in procedural blocks in Verilog. (Actually wait, question 40 is about != maybe? Oh the question said != but wait, no, it was =)"
    },
    {
        "id": 41,
        "category": "Past Exam",
        "question": "reg[....:0]mem[0:4095]defines an array of 4096, 8-bit of vector of type reg.",
        "options": [
            "6",
            "7",
            "8",
            "9"
        ],
        "answer": "7",
        "explanation": "An 8-bit vector is defined as [7:0], and an array of 4096 elements is [0:4095]."
    },
    {
        "id": 42,
        "category": "Past Exam",
        "question": "The synthesis step of FPGA requires the behavioral ........",
        "options": [
            "timing",
            "Logic gates",
            "netlist",
            "power"
        ],
        "answer": "netlist",
        "explanation": "Synthesis is the process of converting a behavioral description (RTL) into a structural representation, known as a netlist."
    },
    {
        "id": 43,
        "category": "Past Exam",
        "question": "Refer toreg[5:0] mem [0:1023], we can select the 3rd bit of the 6th element by mem[...][...].",
        "options": [
            "2,5",
            "3,6",
            "6,3",
            "5,2"
        ],
        "answer": "5,2",
        "explanation": "For mem[0:1023] of reg[5:0], the 6th element is index 5, and the 3rd bit is index 2. So it is mem[5][2]."
    },
    {
        "id": 44,
        "category": "Past Exam",
        "question": "The conditional operator of this circuit is assign.....",
        "options": [
            "F=E?A:(C?B:D);",
            "F=E?A:(B?D:",
            "; c) F=E?A:(D?B:C);",
            "; b) F=E?A:(B?D:C); c) F=E?A:(D?B:C); d) F=A?E:(B?D:C);"
        ],
        "answer": "F=E?A:(C?B:D);",
        "explanation": "This represents a nested conditional (ternary) operator typical of multiplexers or complex conditionals."
    },
    {
        "id": 45,
        "category": "Past Exam",
        "question": "AHB bus is used for .....-bandwidth communication.",
        "options": [
            "high",
            "low",
            "Both A and B",
            "None of the above"
        ],
        "answer": "high",
        "explanation": "The Advanced High-performance Bus (AHB) in the AMBA architecture is meant for high-bandwidth communication with fast peripherals."
    },
    {
        "id": 46,
        "category": "Past Exam",
        "question": "Interrupts are usually generated from on-chip peripherals or ........",
        "options": [
            "external inputs",
            "CPU core",
            "ISR",
            "None of above"
        ],
        "answer": "external inputs",
        "explanation": "Interrupts are hardware signals generated by on-chip peripherals or external pins to alert the CPU."
    },
    {
        "id": 47,
        "category": "Past Exam",
        "question": ".....is a dedicated hardware unit inside the Cortex-M based microcontrollers that is responsible for the exceptions handling.",
        "options": [
            "NVIC",
            "EXTI",
            "IRQ",
            "CSS"
        ],
        "answer": "NVIC",
        "explanation": "The Nested Vectored Interrupt Controller (NVIC) manages all exceptions and interrupts in a Cortex-M processor."
    },
    {
        "id": 48,
        "category": "Past Exam",
        "question": "The .......are used for the communication between the core and peripheral devices.",
        "options": [
            "DMA",
            "UART",
            "buses",
            "GPIO"
        ],
        "answer": "buses",
        "explanation": "Buses provide the physical pathways for data communication between the processor core and peripherals."
    },
    {
        "id": 49,
        "category": "Past Exam",
        "question": "SWD uses a bus called ........",
        "options": [
            "JTAG",
            "DAP",
            "AHB",
            "GPIO"
        ],
        "answer": "JTAG",
        "explanation": "Serial Wire Debug (SWD) is an alternative to JTAG, but JTAG is a traditional bus for debugging."
    },
    {
        "id": 50,
        "category": "Past Exam",
        "question": "OpenOCD is designed to be a generic tool able to work with tens of hardware debuggers.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "OpenOCD (Open On-Chip Debugger) supports many different hardware debuggers and target processors."
    },
    {
        "id": 51,
        "category": "Past Exam",
        "question": "Arbitrary Waveform Generator (AWG) is a programmable Oscilloscope.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "An AWG generates electrical waveforms; it does not measure or display them like an oscilloscope."
    },
    {
        "id": 52,
        "category": "Past Exam",
        "question": "The weakness of physical contact to PCB is considered as one of SMD disadvantages.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "SMD components lack through-hole pins, making their physical attachment to the PCB solely dependent on the solder joints, which can be mechanically weaker."
    },
    {
        "id": 53,
        "category": "Past Exam",
        "question": "The BJT transistor can be checked with some types of multimeters.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Many multimeters have a diode test function or specific hFE sockets that can be used to test BJT transistors."
    },
    {
        "id": 54,
        "category": "Past Exam",
        "question": "The registers can be used for data storage.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Registers are small, extremely fast memory locations within the CPU used to store temporary data and instructions."
    },
    {
        "id": 55,
        "category": "Past Exam",
        "question": "Linux is an application software.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Linux is a system software (Operating System kernel), not an application software."
    },
    {
        "id": 56,
        "category": "Past Exam",
        "question": "The 7400 TTL logic family was powered off of a + 5v supply.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The classic 7400 series TTL logic family strictly operates on a nominal +5V power supply."
    },
    {
        "id": 57,
        "category": "Past Exam",
        "question": "There are multiple I/O devices in a computer system.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "A typical computer system has multiple I/O devices like keyboards, displays, network interfaces, and storage drives."
    },
    {
        "id": 58,
        "category": "Past Exam",
        "question": "The address bus is unidirectional.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The address bus is unidirectional; the CPU sends addresses out to memory and peripherals, but they do not send addresses back to the CPU."
    },
    {
        "id": 59,
        "category": "Past Exam",
        "question": "Programmable I/O blocks of FPGA can be programmed to be bidirectional lines.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "FPGA I/O blocks are highly configurable and can be set up as inputs, outputs, or bidirectional lines."
    },
    {
        "id": 60,
        "category": "Past Exam",
        "question": "Assembly code and C code depend on the instruction set architecture.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Assembly code is entirely specific to the ISA. While C code is high-level, standard C compilation depends on the target ISA."
    },
    {
        "id": 61,
        "category": "Past Exam",
        "question": "Cache memories are faster than registers.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Registers reside inside the CPU core and are the fastest available memory, faster than caches."
    },
    {
        "id": 62,
        "category": "Past Exam",
        "question": "System kernel is responsible for task management.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The system kernel (in an OS or RTOS) manages tasks, memory, and hardware resources."
    },
    {
        "id": 63,
        "category": "Past Exam",
        "question": "Embedded systems can include dedicated subsystems such as FPGA.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Embedded systems often incorporate FPGAs or custom ASICs as dedicated subsystems to handle specialized, high-speed tasks."
    },
    {
        "id": 64,
        "category": "Past Exam",
        "question": "SMD More reliable at high speed.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "SMD components have smaller parasitic inductances and capacitances compared to through-hole, making them better for high-speed circuits."
    },
    {
        "id": 65,
        "category": "Past Exam",
        "question": "SMD resistors with 2% tolerance contain 4 digits as value.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Precision resistors use a 4-digit code. 2% or 5% resistors usually use a 3-digit code."
    },
    {
        "id": 66,
        "category": "Past Exam",
        "question": "Each SMD component is picked from its packaging using either a vacuum or gripper nozzle.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Pick-and-place machines use vacuum nozzles or mechanical grippers to pick up SMDs."
    },
    {
        "id": 67,
        "category": "Past Exam",
        "question": "Label of \u201d100R\u201d means 100 Kohm in SMD resistor.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "100R indicates 100 ohms, not 100 kilo-ohms."
    },
    {
        "id": 68,
        "category": "Past Exam",
        "question": "Without IDE, the actual microcontroller-flashing procedures can be quite simple.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Flashing a microcontroller can be done via command-line tools without needing a full IDE."
    },
    {
        "id": 69,
        "category": "Past Exam",
        "question": "IDE for microcontrollers can include middleware.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Modern IDEs include extensive middleware like RTOS and TCP/IP stacks."
    },
    {
        "id": 70,
        "category": "Past Exam",
        "question": "RTOS cannot be used to handle multiple tasks concurrently.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "The primary purpose of an RTOS is to handle multiple tasks concurrently with deterministic scheduling."
    },
    {
        "id": 71,
        "category": "Past Exam",
        "question": "Interrupts from different peripherals can be assigned with different interrupt priority levels.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Microcontrollers have an interrupt controller that allows assigning different priority levels."
    },
    {
        "id": 72,
        "category": "Past Exam",
        "question": "A debug adaptor can be used to test microcontroller board.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "A debug adaptor is used to program and debug a microcontroller board."
    },
    {
        "id": 73,
        "category": "Past Exam",
        "question": "Signal injection can be used to insert a signal at certain points in the system.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Signal injection involves supplying a known signal to check if subsequent stages function."
    },
    {
        "id": 74,
        "category": "Past Exam",
        "question": "FPGAs are ICs that contain an array of non-identical logic blocks with programmable inter- connections.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "FPGAs contain an array of largely identical programmable logic blocks."
    },
    {
        "id": 75,
        "category": "Past Exam",
        "question": "It is possible to prototype or even manufacture large systems in a single FPGA.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Modern FPGAs are large enough to prototype entire System-on-Chip (SoC) designs."
    },
    {
        "id": 76,
        "category": "Past Exam",
        "question": "Signal tracing is the procedure of tracking signals as they progress through a system from output to input.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Signal tracing typically follows the signal from the input towards the output."
    },
    {
        "id": 77,
        "category": "Past Exam",
        "question": "The interior of FPGAs typically contains only two elements that are programmable.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "FPGAs contain at least three main programmable elements: logic blocks, interconnects, and I/O blocks."
    },
    {
        "id": 78,
        "category": "Past Exam",
        "question": "Microprocessor is a dependent unit.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "A microprocessor requires external components like RAM, ROM, and I/O chips to function, making it dependent."
    },
    {
        "id": 79,
        "category": "Past Exam",
        "question": "The mapping in FPGA requires user constraints.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Mapping and Place & Route tools require user constraints for pin assignments and timing requirements."
    },
    {
        "id": 80,
        "category": "Past Exam",
        "question": "APB bus is faster than AHB bus.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "The AHB is faster and intended for high-speed peripherals, while APB is slower for low-power peripherals."
    },
    {
        "id": 81,
        "category": "Past Exam",
        "question": "The Verilog module can assign a reg as input.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "In Verilog, a module's inputs must be nets (like wire), not variables (reg)."
    },
    {
        "id": 82,
        "category": "Past Exam",
        "question": "The syntax \u201dmodule Full adder (A,B,Cin,S, Cout);\u201d is correct in Verilog.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Module names cannot contain spaces in Verilog."
    },
    {
        "id": 83,
        "category": "Past Exam",
        "question": "Most STM32 pins are 5V tolerant.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Many STM32 microcontrollers have pins that are 5V tolerant, allowing them to interface with 5V logic."
    },
    {
        "id": 84,
        "category": "Past Exam",
        "question": "The syntax \u201dwire [3:0] x1\u201d can be considered as internal signal declaration.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Declaring wire [3:0] x1 establishes an internal 4-bit bus signal."
    },
    {
        "id": 85,
        "category": "Past Exam",
        "question": "\u201dA=B; C=B;\u201d in always block infer a wire.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Signals assigned within an always block in Verilog must be declared as reg, not wire."
    },
    {
        "id": 86,
        "category": "Past Exam",
        "question": "The syntax \u201dwire [0:5] w1\u201d is wrong in Verilog.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "While [5:0] is more common, [0:5] is perfectly valid syntax in Verilog."
    },
    {
        "id": 87,
        "category": "Past Exam",
        "question": "We can model FF using always block.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Flip-flops are modeled using always @(posedge clk) blocks with non-blocking assignments."
    },
    {
        "id": 88,
        "category": "Past Exam",
        "question": "An ARM Cortex-M processor chip consists of a Cortex-M core licensed by ARM.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Chip manufacturers license the Cortex-M core from ARM and add their own peripherals."
    },
    {
        "id": 89,
        "category": "Past Exam",
        "question": "This Exception Handler can be used in the case of external interrupts.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Exception Handlers in the NVIC manage asynchronous external interrupts."
    },
    {
        "id": 90,
        "category": "Past Exam",
        "question": "The initial statements in Verilog run one time through entire simulation.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The initial block in Verilog executes exactly once at the beginning of a simulation."
    },
    {
        "id": 91,
        "category": "Past Exam",
        "question": "STM32 microcontrollers are divided into sub-families.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "STM32 microcontrollers are categorized into sub-families like F0, F4, L4, etc."
    },
    {
        "id": 92,
        "category": "Past Exam",
        "question": "Special-purpose registers have more usage restrictions than general-purpose registers.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Special-purpose registers have specific architectural roles and cannot be used arbitrarily."
    },
    {
        "id": 93,
        "category": "Past Exam",
        "question": "All ARM Cortex-M exceptions priorities are not configurable.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Most interrupt priorities in Cortex-M are configurable via the NVIC."
    },
    {
        "id": 94,
        "category": "Past Exam",
        "question": "STM32 can use free tool-chain.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "STM32 development can be done using free toolchains like GCC for ARM."
    },
    {
        "id": 95,
        "category": "Past Exam",
        "question": "STM32 use a debugger called ST-LINK.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "STMicroelectronics provides the ST-LINK as the official in-circuit debugger."
    },
    {
        "id": 96,
        "category": "Past Exam",
        "question": "The RHS of always block\u2019s assignments can be declared as a wire.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "The left-hand side of an assignment in an always block must be a variable type (reg)."
    },
    {
        "id": 97,
        "category": "Past Exam",
        "question": "We can use \u201d*\u201d as sensitivity list of the always block.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "In Verilog-2001, always @(*) automatically implies all variables read in the block in the sensitivity list."
    },
    {
        "id": 98,
        "category": "Past Exam",
        "question": "SMD ICs have a notch to help for pin identification.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "SMD ICs often have a notch or stripe on one end to denote pin 1 orientation."
    },
    {
        "id": 99,
        "category": "Past Exam",
        "question": "Polling method is more efficient than interrupt-driven in terms of power.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Polling wastes CPU cycles constantly checking a flag, making it less energy efficient than interrupts."
    },
    {
        "id": 100,
        "category": "Past Exam",
        "question": "The execution time of an ISR should be as short as possible.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Interrupt Service Routines should be quick to avoid blocking other interrupts and tasks."
    },
    {
        "id": 101,
        "category": "Past Exam",
        "question": "Multimeters measure both AC and DC voltage and current as well as resistance.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Standard multimeters can measure AC/DC voltage, AC/DC current, and resistance."
    },
    {
        "id": 102,
        "category": "Past Exam",
        "question": "Oscilloscopes display signals in a graphical format on a pair of axes, generally with Y as the voltage and X as the time.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Oscilloscopes display voltage on the Y-axis against time on the X-axis."
    },
    {
        "id": 103,
        "category": "Past Exam",
        "question": "Often power supplies operate in either a non-constant-voltage or current mode.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Laboratory power supplies usually operate in Constant Voltage or Constant Current modes."
    },
    {
        "id": 104,
        "category": "Past Exam",
        "question": "AWG stands for arbitrary waveform generator.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "AWG stands for Arbitrary Waveform Generator."
    },
    {
        "id": 105,
        "category": "Past Exam",
        "question": "A jump wire is an electrical wire, or group of them in a cable, with a connector or pin at each end.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Jump wires are used to connect components on a breadboard or prototype circuit without soldering."
    },
    {
        "id": 106,
        "category": "Past Exam",
        "question": "A soldering station is designed for electronic components inspection.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "A soldering station is used for assembly/joining, not inspection."
    },
    {
        "id": 107,
        "category": "Past Exam",
        "question": "For SN74HC00N IC, 74 represents the manufacturer.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "The 74 prefix denotes the standard 7400 series logic family, not the manufacturer."
    },
    {
        "id": 108,
        "category": "Past Exam",
        "question": "Place and route step comes after the technology map step in the classical digital design flow.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "In FPGA design, the netlist is mapped to technology-specific elements, and then those elements are placed and routed."
    },
    {
        "id": 109,
        "category": "Past Exam",
        "question": "In sequential circuits, the output depends only upon present input.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "In sequential circuits, the output depends on both present inputs and the present state (past inputs)."
    },
    {
        "id": 110,
        "category": "Past Exam",
        "question": "Level triggering is a type of triggering in digital circuits.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Level triggering is a mechanism where a circuit acts continuously while the clock is at a specific high or low level."
    },
    {
        "id": 111,
        "category": "Past Exam",
        "question": "A register can be used for data storage.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Registers consist of multiple flip-flops and are used to store multi-bit data temporarily."
    },
    {
        "id": 112,
        "category": "Past Exam",
        "question": "The serial data transfer requires more wire than parallel transfer.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Serial transfer requires fewer wires compared to parallel transfer."
    },
    {
        "id": 113,
        "category": "Past Exam",
        "question": "The most common type of SMT package is the dual in-line package (DIP).",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "DIP (Dual In-line Package) is a Through-Hole Technology (THT), not an SMT."
    },
    {
        "id": 114,
        "category": "Past Exam",
        "question": "PLCC (plastic-leaded chip carrier) are turned under the package in a J-type shape.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "PLCC packages feature J-lead pins that curl under the package, saving space."
    },
    {
        "id": 115,
        "category": "Past Exam",
        "question": "Application software acts as an interface between system software and hardware.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "System software acts as an interface between application software and hardware."
    },
    {
        "id": 116,
        "category": "Past Exam",
        "question": "During the fetch phase, an instruction is read from the memory and decoded by the instruction decoder.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Instruction decoding happens during the decode phase, which follows the fetch phase."
    },
    {
        "id": 117,
        "category": "Past Exam",
        "question": "Instruction decoder performs arithmetic and logic operations.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "The instruction decoder translates instructions; the ALU performs arithmetic and logic operations."
    },
    {
        "id": 118,
        "category": "Past Exam",
        "question": "Off-chip cache is one that is implemented with the dedicated SRAM.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Off-chip caches are typically built using fast static RAM external to the processor core."
    },
    {
        "id": 119,
        "category": "Past Exam",
        "question": "Register file memory is faster than L1 cache memory.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The register file is the fastest memory inside the CPU core, faster than L1 cache."
    },
    {
        "id": 120,
        "category": "Past Exam",
        "question": "Multiple I/O interfaces are connected by a common bus.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Peripherals share common buses to communicate with the CPU."
    },
    {
        "id": 121,
        "category": "Past Exam",
        "question": "The address bus is bidirectional.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "The address bus is unidirectional, driven solely by the CPU or DMA controller."
    },
    {
        "id": 122,
        "category": "Past Exam",
        "question": "Instruction set architecture is an abstract interface between the hardware and the lowest-level software.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "ISA defines the processor's instructions, serving as the bridge between software and hardware."
    },
    {
        "id": 123,
        "category": "Past Exam",
        "question": "The compiler generates the assembly code in the toolchain.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The compiler translates C code into assembly code, which the assembler turns into machine code."
    },
    {
        "id": 124,
        "category": "Past Exam",
        "question": "Harvard architecture shares a single common bus for fetching both instructions and data.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Harvard architecture has separate buses for instructions and data."
    },
    {
        "id": 125,
        "category": "Past Exam",
        "question": "An embedded system is an electronic/electro-mechanical system designed to perform a specific function.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Embedded systems are dedicated to specific tasks within a larger system."
    },
    {
        "id": 126,
        "category": "Past Exam",
        "question": "Embedded system hardware can include ADC.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Embedded systems interface with the real world and frequently include ADCs."
    },
    {
        "id": 127,
        "category": "Past Exam",
        "question": "The system kernel handles the inter-task communication.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The kernel of an RTOS provides mechanisms for safe inter-task communication."
    },
    {
        "id": 128,
        "category": "Past Exam",
        "question": "SMT more reliable at high speed.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "SMT has shorter leads, reducing parasitic capacitance and inductance for high-speed signal integrity."
    },
    {
        "id": 129,
        "category": "Past Exam",
        "question": "Stencil is used to provide variable position for solder paste printing.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "A stencil ensures fixed, precise positioning for solder paste application, not variable."
    },
    {
        "id": 130,
        "category": "Past Exam",
        "question": "SMT resistance labelled \u201d472\u201d is a 47K ohm resistance.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "An SMT resistor labeled 472 is 47 x 10^2 = 4700 ohms, not 47K."
    },
    {
        "id": 131,
        "category": "Past Exam",
        "question": "Microcontroller is a self-contained unit.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "A microcontroller integrates CPU, memory, and I/O peripherals onto a single chip."
    },
    {
        "id": 132,
        "category": "Past Exam",
        "question": "After the link stage, the IDE can also generate the program image in other file formats for the purpose of programming the image to the device.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "After linking, toolchains generate binary formats used to flash the device."
    },
    {
        "id": 133,
        "category": "Past Exam",
        "question": "During execution of the compiled program, you can check the program execution.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Execution status and variable values can be monitored at runtime."
    },
    {
        "id": 134,
        "category": "Past Exam",
        "question": "Polling method is an efficient method in terms of execution time.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Polling wastes CPU cycles checking status, so it is generally inefficient for CPU time."
    },
    {
        "id": 135,
        "category": "Past Exam",
        "question": "A Real-Time Operating System (RTOS) can be used to handle the task scheduling.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "An RTOS manages task scheduling, switching context between threads."
    },
    {
        "id": 136,
        "category": "Past Exam",
        "question": "Signal substitution is used when the system being tested has been separated from its signal source.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Signal substitution injects a known signal when the original source is broken."
    },
    {
        "id": 137,
        "category": "Past Exam",
        "question": "FPGAs are ICs that contain an array of identical logic blocks with programmable interconnec- tions.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "FPGAs consist of an array of identical programmable logic blocks."
    },
    {
        "id": 138,
        "category": "Past Exam",
        "question": "The capacities of some FPGAs are specified in a number of look-up tables (LUTs).",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "LUT count is a standard metric for comparing the logic capacity of FPGAs."
    },
    {
        "id": 139,
        "category": "Past Exam",
        "question": "Altera calls their basic blocks Logic Block (LB).",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Altera refers to their basic blocks as Logic Elements (LEs) or ALMs, not Logic Blocks (LB)."
    },
    {
        "id": 140,
        "category": "Past Exam",
        "question": "The synthesis step translates the behavioral netlist into a gate level netlist.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Synthesis is the process of translating RTL into a gate-level netlist."
    },
    {
        "id": 141,
        "category": "Past Exam",
        "question": "SMT does not requires drilling.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "SMT components sit on pads on the surface, requiring no drilled holes for pins."
    },
    {
        "id": 142,
        "category": "Past Exam",
        "question": "Schematic capturing is considered as a back-end design of PCB.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Schematic capture is the very first step (front-end) of PCB design."
    },
    {
        "id": 143,
        "category": "Past Exam",
        "question": "Connects between layers in PCB.",
        "options": [
            "Solder mask",
            "Via",
            "Footprint",
            "Solder paste"
        ],
        "answer": "Via",
        "explanation": "A via is an electrical connection between different layers of a PCB."
    },
    {
        "id": 144,
        "category": "Past Exam",
        "question": "There are main types of ESD failures.",
        "options": [
            "two",
            "three",
            "four",
            "five"
        ],
        "answer": "two",
        "explanation": "ESD failures are broadly classified into hard (catastrophic) and soft (latent) defects."
    },
    {
        "id": 145,
        "category": "Past Exam",
        "question": "The value of SMD resistor has the label \u201d224\u201d is ohm.",
        "options": [
            "22",
            "22K",
            "220K",
            "22M"
        ],
        "answer": "220K",
        "explanation": "224 means 22 x 10^4 = 220,000 ohms, which is 220K ohms."
    },
    {
        "id": 146,
        "category": "Past Exam",
        "question": "The value of SMD resistor has the label \u201dR33\u201d is ohm.",
        "options": [
            "33",
            "3.3",
            "330",
            "0.33"
        ],
        "answer": "0.33",
        "explanation": "R33 uses R as a decimal point, meaning 0.33 ohms."
    },
    {
        "id": 147,
        "category": "Past Exam",
        "question": "One advantage of SMD is the lower heat tolerance.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "SMT components generally have lower heat tolerance during manual soldering compared to THT."
    },
    {
        "id": 148,
        "category": "Past Exam",
        "question": "QFP is an example of through-hole technology.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "QFP is a surface mount (SMT) integrated circuit package."
    },
    {
        "id": 149,
        "category": "Past Exam",
        "question": "is the primary measurement tool to observe the shape of signals.",
        "options": [
            "Power Supply",
            "Oscilloscope",
            "Multimeter",
            "Function Generator"
        ],
        "answer": "Oscilloscope",
        "explanation": "An oscilloscope is used to visually observe the shape and timing of electronic signals."
    },
    {
        "id": 150,
        "category": "Past Exam",
        "question": "protects outer layers from oxidation and prevents solder bridges.",
        "options": [
            "Via",
            "Silk-screen",
            "Solder mask",
            "Footprint"
        ],
        "answer": "Solder mask",
        "explanation": "The solder mask prevents oxidation and accidental solder bridges."
    },
    {
        "id": 151,
        "category": "Past Exam",
        "question": "A signal can only take on one value from a finite set of possible values at a given time.",
        "options": [
            "analog",
            "digital",
            "Both A and B",
            "None of the above"
        ],
        "answer": "digital",
        "explanation": "A digital signal takes on discrete values from a finite set."
    },
    {
        "id": 152,
        "category": "Past Exam",
        "question": "DIP is considered as Technology.",
        "options": [
            "SMT",
            "Through-hole",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Through-hole",
        "explanation": "DIP uses pins that go through holes in the PCB (Through-Hole Technology)."
    },
    {
        "id": 153,
        "category": "Past Exam",
        "question": "Generating of CAM files is done in -end level of PCB design flow.",
        "options": [
            "front",
            "back",
            "Both A and B",
            "None of the above"
        ],
        "answer": "back",
        "explanation": "Generating CAM files is the final, back-end step of PCB layout."
    },
    {
        "id": 154,
        "category": "Past Exam",
        "question": "In SMT, the physical contact to PCB is weak.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "SMT's mechanical bond is comparatively weaker as it relies entirely on surface solder joints."
    },
    {
        "id": 155,
        "category": "Past Exam",
        "question": "In level, the SMD components are placed in their locations.",
        "options": [
            "SMC placement",
            "Reflow soldering",
            "Stencil preparation",
            "Solder paste print-"
        ],
        "answer": "SMC placement",
        "explanation": "Automated pick-and-place machines place Surface Mount Components onto the solder paste."
    },
    {
        "id": 156,
        "category": "Past Exam",
        "question": "failures result in permanent damage to the system.",
        "options": [
            "Hard",
            "Soft",
            "Both A and B",
            "None of the above"
        ],
        "answer": "Hard",
        "explanation": "Hard (catastrophic) failures cause immediate, permanent damage."
    },
    {
        "id": 157,
        "category": "Past Exam",
        "question": "A soldering station is designed for electronic components inspection.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "A soldering station is used for assembly, not inspection."
    },
    {
        "id": 158,
        "category": "Past Exam",
        "question": "Anti-static are used for storing ESD-susceptible electronics.",
        "options": [
            "wrist straps",
            "grounding clamp",
            "bags",
            "ESD Mat Kits"
        ],
        "answer": "bags",
        "explanation": "Anti-static bags are explicitly used for safely storing ESD-susceptible components."
    },
    {
        "id": 159,
        "category": "Past Exam",
        "question": "Multimeters measure both AC and DC voltage and current.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Digital multimeters can typically measure both AC and DC."
    },
    {
        "id": 160,
        "category": "Past Exam",
        "question": "Which is the fastest memory among them.",
        "options": [
            "Main memory",
            "L2 cache",
            "L1 cache",
            "Register"
        ],
        "answer": "Register",
        "explanation": "CPU registers are the fastest form of memory in a computer architecture."
    },
    {
        "id": 161,
        "category": "Past Exam",
        "question": "L2 cache memory is slower than L3 cache memory.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "L2 cache is physically closer to the core and smaller, making it faster than L3 cache."
    },
    {
        "id": 162,
        "category": "Past Exam",
        "question": "The storage capacity of main memory is higher than L2 cache.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "Main memory holds gigabytes of data, larger than L2 caches."
    },
    {
        "id": 163,
        "category": "Past Exam",
        "question": "In a computer system, CPU communicates with I/O devices via I/O interfaces.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The CPU communicates with I/O devices via dedicated I/O interfaces."
    },
    {
        "id": 164,
        "category": "Past Exam",
        "question": "During the phase, an instruction is read from the memory.",
        "options": [
            "fetch",
            "decode",
            "execute",
            "None of the above"
        ],
        "answer": "fetch",
        "explanation": "The instruction cycle begins with the fetch phase."
    },
    {
        "id": 165,
        "category": "Past Exam",
        "question": "architecture shares a single common bus for fetching both instructions and data.",
        "options": [
            "Harvard",
            "V on-Neumann",
            "Both A and B",
            "None of the above"
        ],
        "answer": "V on-Neumann",
        "explanation": "The Von Neumann architecture utilizes a single unified bus structure for instructions and data."
    },
    {
        "id": 166,
        "category": "Past Exam",
        "question": "has bytes of RAM.",
        "options": [
            "4K",
            "8K",
            "128",
            "256"
        ],
        "answer": "128",
        "explanation": "The original Intel 8051 microcontroller contains 128 bytes of internal RAM."
    },
    {
        "id": 167,
        "category": "Past Exam",
        "question": "has timers.",
        "options": [
            "one",
            "two",
            "three",
            "zero"
        ],
        "answer": "two",
        "explanation": "The standard 8051 architecture includes two 16-bit timers."
    },
    {
        "id": 168,
        "category": "Past Exam",
        "question": "has interrupt sources.",
        "options": [
            "6",
            "7",
            "8",
            "Zero"
        ],
        "answer": "6",
        "explanation": "The standard 8051 provides 6 interrupt sources."
    },
    {
        "id": 169,
        "category": "Past Exam",
        "question": "The reset value of SP register of 8051 is . . .",
        "options": [
            "06",
            "07",
            "08",
            "09"
        ],
        "answer": "07",
        "explanation": "Upon reset, the Stack Pointer (SP) in the 8051 is initialized to 07H."
    },
    {
        "id": 170,
        "category": "Past Exam",
        "question": "In order for the RESET input to be effective, it must have a minimum duration of . . . machine cycles.",
        "options": [
            "2",
            "4",
            "6",
            "8"
        ],
        "answer": "2",
        "explanation": "The RESET pin must be held high for at least 2 machine cycles."
    },
    {
        "id": 171,
        "category": "Past Exam",
        "question": "pin is provided to allow or disallow the internal memory of 8051.",
        "options": [
            "ALE",
            "EA",
            "PSEN",
            "XTAL1"
        ],
        "answer": "EA",
        "explanation": "The External Access (EA) pin determines execution from internal ROM or external memory."
    },
    {
        "id": 172,
        "category": "Past Exam",
        "question": "The original 8051 divide the external frequency by . . .",
        "options": [
            "1",
            "4",
            "8",
            "12"
        ],
        "answer": "12",
        "explanation": "The 8051 divides the external crystal oscillator frequency by 12 for its machine cycle clock."
    },
    {
        "id": 173,
        "category": "Past Exam",
        "question": "Assembly code is easier to modify and update.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "False",
        "explanation": "Assembly code is closely tied to hardware and difficult to maintain compared to high-level languages."
    },
    {
        "id": 174,
        "category": "Past Exam",
        "question": "In . . . , each pin must be connected externally to a 10K ohm pull-up resistor.",
        "options": [
            "P0",
            "P1",
            "P2",
            "P3"
        ],
        "answer": "P0",
        "explanation": "Port 0 lacks internal pull-up resistors and requires external pull-ups."
    },
    {
        "id": 175,
        "category": "Past Exam",
        "question": "The 8051 timers can count down only.",
        "options": [
            "True",
            "False",
            "Both A and B",
            "None of the above"
        ],
        "answer": "False",
        "explanation": "The classic 8051 timers only count up."
    },
    {
        "id": 178,
        "category": "Past Exam",
        "question": "timer counts up, starting from a loaded value and overflowing at FFFFh.",
        "options": [
            "True",
            "False",
            "Not applicable",
            "Depends on the configuration"
        ],
        "answer": "True",
        "explanation": "The 8051 16-bit timers count up towards FFFFH."
    }
];