const examMidtermSummer2025 = [
  {
    category: "Midterm Summer 2025",
    text: "SMT does not requires drilling.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Surface Mount Technology (SMT) components are placed directly onto the PCB surface, requiring no through-holes to be drilled."
  },
  {
    category: "Midterm Summer 2025",
    text: "Schematic capturing is considered as a back-end design of PCB.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Schematic capturing is part of the front-end design, not back-end."
  },
  {
    category: "Midterm Summer 2025",
    text: "Connects between layers in PCB.",
    options: ["Solder mask", "Via", "Footprint", "Solder paste"],
    correctIndex: 1,
    explanation: "A via is an electrical connection between layers in a printed circuit board."
  },
  {
    category: "Midterm Summer 2025",
    text: "There are ____ main types of ESD failures.",
    options: ["two", "three", "four", "five"],
    correctIndex: 0,
    explanation: "The two main types are hard (catastrophic) and soft (upset/latent) failures."
  },
  {
    category: "Midterm Summer 2025",
    text: "The value of SMD resistor has the label '224' is ____ ohm.",
    options: ["22", "22K", "220K", "22M"],
    correctIndex: 2,
    explanation: "22 followed by 4 zeros is 220,000 ohms (220K)."
  },
  {
    category: "Midterm Summer 2025",
    text: "The value of SMD resistor has the label 'R33' is ____ ohm.",
    options: ["33", "3.3", "330", "0.33"],
    correctIndex: 3,
    explanation: "The 'R' indicates a decimal point, making it 0.33 ohms."
  },
  {
    category: "Midterm Summer 2025",
    text: "One advantage of SMD is the lower heat tolerance.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "SMD components typically have lower heat tolerance, but this is a disadvantage, not an advantage."
  },
  {
    category: "Midterm Summer 2025",
    text: "QFP is an example of through-hole technology.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "QFP (Quad Flat Package) is an SMD (Surface Mount Device) package, not through-hole."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ is the primary measurement tool to observe the shape of signals.",
    options: ["Power Supply", "Oscilloscope", "Multimeter", "Function Generator"],
    correctIndex: 1,
    explanation: "Oscilloscopes display signal waveforms."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ protects outer layers from oxidation and prevents solder bridges.",
    options: ["Via", "Silk-screen", "Solder mask", "Footprint"],
    correctIndex: 2,
    explanation: "Solder mask (or solder resist) provides a protective layer and prevents bridging between pads."
  },
  {
    category: "Midterm Summer 2025",
    text: "A ____ signal can only take on one value from a finite set of possible values at a given time.",
    options: ["analog", "digital"],
    correctIndex: 1,
    explanation: "Digital signals represent discrete states."
  },
  {
    category: "Midterm Summer 2025",
    text: "DIP is considered as ____ Technology.",
    options: ["SMT", "Through-hole"],
    correctIndex: 1,
    explanation: "Dual In-line Package (DIP) components have leads that go through holes in the PCB."
  },
  {
    category: "Midterm Summer 2025",
    text: "Generating of CAM files is done in ____-end level of PCB design flow.",
    options: ["front", "back"],
    correctIndex: 1,
    explanation: "CAM files (like Gerber files) are generated at the back-end level for manufacturing."
  },
  {
    category: "Midterm Summer 2025",
    text: "In SMT, the physical contact to PCB is weak.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Without through-hole leads, the mechanical bond relies entirely on the solder joint, which can be weaker."
  },
  {
    category: "Midterm Summer 2025",
    text: "In ____ level, the SMD components are placed in their locations.",
    options: ["SMC placement", "Reflow soldering", "Stencil preparation", "Solder paste printing"],
    correctIndex: 0,
    explanation: "Surface Mount Component (SMC) placement is the stage where pick-and-place machines position the parts."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ failures result in permanent damage to the system.",
    options: ["Hard", "Soft"],
    correctIndex: 0,
    explanation: "Hard (catastrophic) ESD failures cause permanent physical damage."
  },
  {
    category: "Midterm Summer 2025",
    text: "A soldering station is designed for electronic components inspection.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "A soldering station is for assembling/soldering, not for inspection."
  },
  {
    category: "Midterm Summer 2025",
    text: "Anti-static ____ are used for storing ESD-susceptible electronics.",
    options: ["wrist straps", "grounding clamp", "bags", "ESD Mat Kits"],
    correctIndex: 2,
    explanation: "Anti-static bags store and protect susceptible components from ESD."
  },
  {
    category: "Midterm Summer 2025",
    text: "Multimeters measure both AC and DC voltage and current.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Modern multimeters are capable of measuring both AC and DC."
  },
  {
    category: "Midterm Summer 2025",
    text: "Which is the fastest memory among them.",
    options: ["Main memory", "L2 cache", "L1 cache", "Register"],
    correctIndex: 3,
    explanation: "Registers, located inside the CPU, are the fastest memory."
  },
  {
    category: "Midterm Summer 2025",
    text: "L2 cache memory is slower than L3 cache memory.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "L2 cache is faster than L3 cache (it's closer to the core)."
  },
  {
    category: "Midterm Summer 2025",
    text: "The storage capacity of main memory is higher than L2 cache.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Main memory (RAM) has a significantly larger capacity than cache."
  },
  {
    category: "Midterm Summer 2025",
    text: "In a computer system, CPU communicates with I/O devices via I/O interfaces.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "I/O interfaces act as intermediaries for communication."
  },
  {
    category: "Midterm Summer 2025",
    text: "During the ____ phase, an instruction is read from the memory.",
    options: ["fetch", "decode", "execute"],
    correctIndex: 0,
    explanation: "Fetching brings the instruction from memory into the processor."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ architecture shares a single common bus for fetching both instructions and data.",
    options: ["Harvard", "Von-Neumann"],
    correctIndex: 1,
    explanation: "Von-Neumann uses a unified memory architecture for data and instructions."
  },
  {
    category: "Midterm Summer 2025",
    text: "8051 has ____ bytes of RAM.",
    options: ["4K", "8K", "128", "256"],
    correctIndex: 2,
    explanation: "The standard 8051 microcontroller has 128 bytes of internal RAM."
  },
  {
    category: "Midterm Summer 2025",
    text: "8051 has ____ timers.",
    options: ["one", "two", "three", "zero"],
    correctIndex: 1,
    explanation: "The 8051 has two 16-bit timers (Timer 0 and Timer 1)."
  },
  {
    category: "Midterm Summer 2025",
    text: "8052 has ____ interrupt sources.",
    options: ["6", "7", "8", "Zero"],
    correctIndex: 0,
    explanation: "The 8052 has 6 interrupt sources."
  },
  {
    category: "Midterm Summer 2025",
    text: "The reset value of SP register of 8051 is ...",
    options: ["06", "07", "08", "09"],
    correctIndex: 1,
    explanation: "The Stack Pointer resets to 07H."
  },
  {
    category: "Midterm Summer 2025",
    text: "In order for the RESET input to be effective, it must have a minimum duration of ... machine cycles.",
    options: ["2", "4", "6", "8"],
    correctIndex: 0,
    explanation: "The RESET pulse needs to be held high for at least 2 machine cycles."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ pin is provided to allow or disallow the internal memory of 8051.",
    options: ["ALE", "EA", "PSEN", "XTAL1"],
    correctIndex: 1,
    explanation: "EA (External Access) is used to select internal or external program memory execution."
  },
  {
    category: "Midterm Summer 2025",
    text: "The original 8051 divide the external frequency by ...",
    options: ["1", "4", "8", "12"],
    correctIndex: 3,
    explanation: "The oscillator frequency is divided by 12 to yield the machine cycle frequency."
  },
  {
    category: "Midterm Summer 2025",
    text: "Assembly code is easier to modify and update.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "High-level languages like C are easier to modify than Assembly."
  },
  {
    category: "Midterm Summer 2025",
    text: "In ..., each pin must be connected externally to a 10K ohm pull-up resistor.",
    options: ["P0", "P1", "P2", "P3"],
    correctIndex: 0,
    explanation: "Port 0 acts as open drain and requires external pull-up resistors for normal I/O."
  }
];




