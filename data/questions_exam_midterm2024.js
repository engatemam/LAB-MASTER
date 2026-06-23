const examMidterm2024 = [
  {
    category: "Midterm 2024",
    text: "Multimeters measure both AC and DC voltage and current as well as resistance.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Multimeters are versatile tools used to measure AC/DC current, voltage, and resistance."
  },
  {
    category: "Midterm 2024",
    text: "Oscilloscopes display signals in a graphical format on a pair of axes, generally with Y as the voltage and X as the time.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "An oscilloscope graphs voltage over time."
  },
  {
    category: "Midterm 2024",
    text: "Often power supplies operate in either a non-constant-voltage or current mode.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "They typically operate in constant-voltage or constant-current mode."
  },
  {
    category: "Midterm 2024",
    text: "AWG stands for arbitrary waveform generator.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "AWG generates arbitrary waveforms as defined by the user."
  },
  {
    category: "Midterm 2024",
    text: "A jump wire is an electrical wire, or group of them in a cable, with a connector or pin at each end.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Jumper wires are used to connect components on a breadboard."
  },
  {
    category: "Midterm 2024",
    text: "A soldering station is designed for electronic components inspection.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "It is designed for soldering components, not inspecting them."
  },
  {
    category: "Midterm 2024",
    text: "For SN74HC00N IC, 74 represents the manufacturer.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "74 represents the logic family (commercial grade), SN indicates the manufacturer (Texas Instruments)."
  },
  {
    category: "Midterm 2024",
    text: "Place and route step comes after the technology map step in the classical digital design flow.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Mapping maps to primitives, then place and route physically places and connects them."
  },
  {
    category: "Midterm 2024",
    text: "In sequential circuits, the output depends only upon present input.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "In strict accordance with digital logic theory, sequential circuits fundamentally differ from combinational logic by incorporating feedback loops and memory elements (Flip-Flops/Latches). Consequently, their output state vector is a deterministic mathematical function of both the instantaneous present input vector and the accumulated past history, known as the Present State (الحالة الحالية والسابقة).<br><br><b>💡 Exam Trap:</b> Confusing sequential circuits with combinational circuits, which depend solely on present inputs."
  },
  {
    category: "Midterm 2024",
    text: "Level triggering is a type of triggering in digital circuits.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Clock triggering mechanisms in digital electronics are bifurcated into two primary topologies: Level-triggering (where latches are transparent during the logic HIGH or LOW state) and Edge-triggering (where flip-flops sample data precisely at the dynamic dV/dt transition of the clock signal, either posedge or negedge)."
  },
  {
    category: "Midterm 2024",
    text: "A register can be used for data storage.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "A register is a highly specialized array of high-speed flip-flops fundamentally integrated directly into the microprocessor's execution core. It serves as the absolute fastest hierarchical data storage mechanism (أسرع وحدة تخزين), designed for instantaneous retention and manipulation of binary operands during Arithmetic Logic Unit (ALU) operations."
  },
  {
    category: "Midterm 2024",
    text: "The serial data transfer requires more wire than parallel transfer.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "Parallel data transfer necessitates an extensive topological routing of multiple parallel physical traces (e.g., 8, 16, or 32 wires) to transmit bits simultaneously. Conversely, serial data communication fundamentally multiplexes the entire data word sequentially over a single transmission line (خط نقل واحد), drastically minimizing PCB wire count and routing complexity.<br><br><b>💡 Exam Trap:</b> Thinking serial requires more wires because the word 'serial' implies a sequence of hardware components."
  },
  {
    category: "Midterm 2024",
    text: "The most common type of SMT package is the dual in-line package (DIP).",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The Dual In-line Package (DIP) is strictly classified under Through-Hole Technology (THT), requiring mechanical pins to penetrate through drilled PCB vias for wave soldering. Surface Mount Technology (SMT) packages, conversely, mount directly onto planar PCB copper pads (مثل SOIC و QFP), rendering the assertion completely false.<br><br><b>💡 Exam Trap:</b> Confusing traditional THT DIP packages with surface-mount components."
  },
  {
    category: "Midterm 2024",
    text: "PLCC (plastic-leaded chip carrier) are turned under the package in a J-type shape.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Plastic Leaded Chip Carrier (PLCC) packages utilize a distinct 'J-lead' geometric configuration. The peripheral metallic pins physically curve inward underneath the plastic IC substrate (تنحني أسفل الشريحة) in the shape of the letter 'J', providing significant mechanical compliance to absorb thermal expansion stress while conserving PCB surface area."
  },
  {
    category: "Midterm 2024",
    text: "Application software acts as an interface between system software and hardware.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "From a strict computer science hierarchical perspective, System Software (specifically the Operating System Kernel and Hardware Abstraction Layers) serves as the fundamental intermediary. Application Software occupies the highest abstraction tier and is strictly prohibited from direct hardware manipulation; it must issue system calls (نداءات النظام) to the underlying system software.<br><br><b>💡 Exam Trap:</b> Reversing the hierarchical roles of application software and system software."
  },
  {
    category: "Midterm 2024",
    text: "During the fetch phase, an instruction is read from the memory and decoded by the instruction decoder.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "In the von Neumann instruction pipeline, the 'Fetch' phase is exclusively dedicated to asserting the Program Counter (PC) address on the memory bus and retrieving the raw binary opcode. The subsequent extraction of operands and hardware signaling (Decoding) is strictly executed in the distinct 'Decode' machine cycle (مرحلة فك الشفرة).<br><br><b>💡 Exam Trap:</b> Assuming fetching and decoding happen simultaneously in the very same phase."
  },
  {
    category: "Midterm 2024",
    text: "Instruction decoder performs arithmetic and logic operations.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The Instruction Decoder is merely a combinational logic matrix responsible for translating binary opcodes into CPU control signals. The actual mathematical computation and Boolean logic manipulation are physically executed by the Arithmetic Logic Unit (ALU), functioning as the primary mathematical coprocessor of the datapath (وحدة الحساب والمنطق).<br><br><b>💡 Exam Trap:</b> Attributing the ALU's execution role to the instruction decoder."
  },
  {
    category: "Midterm 2024",
    text: "Off-chip cache is one that is implemented with the dedicated SRAM.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Historically and architecturally, an off-chip cache memory hierarchy physically resides external to the microprocessor silicon die. It is implemented utilizing extremely high-speed, dedicated Static Random-Access Memory (SRAM) discrete chips, which offer significantly lower access latency (زمن وصول أقل) compared to standard dynamic RAM (DRAM)."
  },
  {
    category: "Midterm 2024",
    text: "Register file memory is faster than L1 cache memory.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "In the von Neumann memory hierarchy, the CPU Register File is constructed from ultra-fast bipolar or CMOS flip-flops structurally embedded directly within the Arithmetic Logic Unit (ALU) datapath. Consequently, access latency is effectively zero clock cycles, making it orders of magnitude faster than Level 1 (L1) static cache memory (أسرع من الذاكرة المخبئية)."
  },
  {
    category: "Midterm 2024",
    text: "Multiple I/O interfaces are connected by a common bus.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "A microprocessor architecture inherently relies on a shared, parallel electrical conduit known as the System Bus (comprising Address, Data, and Control buses). This shared topological backplane acts as a universal communication multiplexer (ناقل مشترك), seamlessly integrating multiple peripheral I/O interfaces and memory arrays to the central CPU."
  },
  {
    category: "Midterm 2024",
    text: "The address bus is bidirectional.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The Address Bus is fundamentally an architectural unidirectional transmission line (ناقل أحادي الاتجاه). The CPU acts as the exclusive Master bus controller, broadcasting the physical memory or I/O address outwards to slave peripherals. Slave devices merely decode this address and possess zero physical hardware capability to drive signals back onto the address bus.<br><br><b>💡 Exam Trap:</b> Confusing the unidirectional Address Bus with the bidirectional Data Bus."
  },
  {
    category: "Midterm 2024",
    text: "Instruction set architecture is an abstract interface between the hardware and the lowest-level software.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "The Instruction Set Architecture (ISA) constitutes the critical architectural abstraction layer and boundary definition between bare-metal silicon logic and software engineering. It exhaustively defines the processor's native machine-code opcodes, register models, memory addressing modes, and interrupt handling mechanisms (واجهة البرمجيات والعتاد)."
  },
  {
    category: "Midterm 2024",
    text: "The compiler generates the assembly code in the toolchain.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Within the embedded systems toolchain sequence, the Compiler is a sophisticated software entity that parses high-level source code (e.g., C/C++) and strictly generates intermediate, architecture-specific Assembly language mnemonics. Subsequently, the Assembler acts to synthesize these text-based mnemonics into binary machine code objects (شفرة الآلة)."
  },
  {
    category: "Midterm 2024",
    text: "Harvard architecture shares a single common bus for fetching both instructions and data.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The classical von Neumann architecture multiplexes both instructions and data over a singular shared bus. Conversely, the strict Harvard Architecture physically isolates the memory domains, implementing dual dedicated buses (ناقلين منفصلين). This hardware bifurcation allows simultaneous, collision-free fetching of both the instruction opcode and the data operand.<br><br><b>💡 Exam Trap:</b> Confusing Harvard architecture (dual buses) with von Neumann architecture (single shared bus)."
  },
  {
    category: "Midterm 2024",
    text: "An embedded system is an electronic/electro-mechanical system designed to perform a specific function.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "An embedded system is fundamentally a tightly constrained, application-specific cyber-physical integration of microprocessor hardware and dedicated firmware. Unlike general-purpose PCs, it is engineered for absolute determinism, minimal power consumption, and optimized performance to execute a highly specialized singular task (مهمة محددة بدقة)."
  },
  {
    category: "Midterm 2024",
    text: "Embedded system hardware can include ADC.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Embedded hardware interfaces intrinsically interact with the continuous physical world. Thus, the integration of Analog-to-Digital Converters (ADCs) is mathematically vital. ADCs sample and quantize continuous analog voltage signals from external sensors, translating them into discrete binary vectors (تحويل الإشارة التناظرية إلى رقمية) readable by the CPU datapath."
  },
  {
    category: "Midterm 2024",
    text: "The system kernel handles the inter-task communication.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "The System Kernel represents the highly-privileged execution core of an Operating System. In embedded environments, the kernel fundamentally orchestrates preemptive CPU time-slicing algorithms, context switching, and implements complex Inter-Process Communication (IPC) primitives such as semaphores, mutexes, and message queues (إدارة التواصل بين المهام)."
  },
  {
    category: "Midterm 2024",
    text: "SMT more reliable at high speed.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Surface Mount Technology (SMT) definitively maximizes high-frequency electromagnetic performance. The microscopic form factor of SMT eliminates lengthy through-hole mechanical leads, thereby drastically attenuating parasitic series inductance (L) and shunt capacitance (C). This ensures high signal integrity and minimal transmission line reflection at elevated switching speeds (الترددات العالية)."
  },
  {
    category: "Midterm 2024",
    text: "Stencil is used to provide variable position for solder paste printing.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "In the Surface Mount PCB manufacturing process, a Solder Paste Stencil is fundamentally a rigid, laser-cut stainless steel foil. It enforces a strictly fixed, non-variable geometric aperture pattern (نمط ثابت وغير متغير) to precisely deposit volumetric solder paste exclusively onto the designated copper landing pads, negating any variable positioning.<br><br><b>💡 Exam Trap:</b> Assuming stencils offer variable positioning, when they are by definition static physical templates."
  },
  {
    category: "Midterm 2024",
    text: "SMT resistance labelled '472' is a 47K ohm resistance.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "Based on the standard 3-digit EIA SMD marking schema, the first two digits designate the significant base value, while the third digit strictly defines the base-10 exponential multiplier (10^n). Thus, '472' mathematically evaluates to 47 * 10^2 = 4700 Ohms or 4.7 kOhms, effectively rendering the claim of 47 kOhms completely erroneous (خاطئة تماماً).<br><br><b>💡 Exam Trap:</b> Interpreting the last digit directly as 'kilos' rather than the number of trailing zeros."
  },
  {
    category: "Midterm 2024",
    text: "Microcontroller is a self-contained unit.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "A Microcontroller (MCU) is physically and architecturally a highly integrated, self-contained System-on-Chip (SoC). It coalesces the entire computing microarchitecture—including the Central Processing Unit (CPU), non-volatile Flash memory, volatile SRAM, and I/O peripheral subsystems—directly onto a single contiguous silicon substrate (شريحة إلكترونية متكاملة)."
  },
  {
    category: "Midterm 2024",
    text: "After the link stage, the IDE can also generate the program image in other file formats for the purpose of programming the image to the device.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Following the compiler and assembler stages, the Linker resolves absolute memory addresses and merges multiple object files (.o) into an ELF executable. The IDE's post-build utilities (e.g., objcopy) then systematically translate this ELF file into standardized raw binary (.bin) or Intel Hex (.hex) image formats, which are mandatory for physical Flash memory programming (برمجة الذاكرة)."
  },
  {
    category: "Midterm 2024",
    text: "During execution of the compiled program, you can check the program execution.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "In modern embedded development, runtime validation of the compiled program is structurally facilitated via in-circuit hardware debuggers (utilizing JTAG/SWD for core register monitoring) or via diagnostic instrumentation trace ports (e.g., UART telemetry, ITM). This permits comprehensive, real-time observability of internal program states (مراقبة التنفيذ الفعلي)."
  },
  {
    category: "Midterm 2024",
    text: "Polling method is an efficient method in terms of execution time.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The Polling architectural methodology forces the CPU core into a continuous, deterministic infinite loop (Busy-Waiting), repetitively sampling a peripheral's status register. This paradigm is tremendously inefficient regarding execution time and power (I^2R losses), monopolizing computational bandwidth that could otherwise be allocated to concurrent background threads (إهدار طاقة المعالج).<br><br><b>💡 Exam Trap:</b> Assuming polling is efficient simply because it is structurally simple to program."
  },
  {
    category: "Midterm 2024",
    text: "A Real-Time Operating System (RTOS) can be used to handle the task scheduling.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "A Real-Time Operating System (RTOS) is structurally engineered around a deterministic, priority-preemptive scheduling kernel. It algorithmically guarantees the CPU execution context switches (تبديل السياق) precisely based on task criticality, thereby efficiently arbitrating shared hardware resources and ensuring absolute adherence to strict temporal deadlines."
  },
  {
    category: "Midterm 2024",
    text: "Signal substitution is used when the system being tested has been separated from its signal source.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Signal Substitution is an analytical diagnostic technique employed in systemic troubleshooting. When a critical upstream signal generator is physically isolated or non-functional, an external synthesized calibration signal (إشارة بديلة) is purposefully injected into the node to emulate the missing source, enabling rigorous validation of the downstream amplification or logic stages."
  },
  {
    category: "Midterm 2024",
    text: "FPGAs are ICs that contain an array of identical logic blocks with programmable interconnections.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Field-Programmable Gate Arrays (FPGAs) are complex VLSI architectures built exclusively upon an extensive, two-dimensional matrix of geometrically identical Configurable Logic Blocks (CLBs). These are interconnected via an incredibly dense, software-programmable routing hierarchy, allowing pure hardware implementation of virtually any Boolean digital system (بناء أي نظام رقمي مادي)."
  },
  {
    category: "Midterm 2024",
    text: "The synthesis step translates the behavioral netlist into a gate level netlist.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "The Logic Synthesis compilation phase is a computationally intensive mathematical transformation. It ingests high-level, human-readable Register-Transfer Level (RTL) behavioral code (e.g., Verilog/VHDL) and algorithmically maps it down into a highly optimized, structural Gate-Level Netlist (مخطط بوابات منطقية), defining the exact physical primitives and interconnects required."
  }
];




