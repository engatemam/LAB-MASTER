const lec01Data = [
  {
    "id": 1,
    "category": "Lecture 01",
    "question": "What is the primary difference between analog and digital signals?",
    "options": [
      "Analog signals are time-varying with infinite values in a continuous range, while digital signals take finite values.",
      "Digital signals have infinite values, while analog signals are discrete.",
      "Analog signals are finite, while digital signals are continuous.",
      "There is no difference between them."
    ],
    "answer": "Analog signals are time-varying with infinite values in a continuous range, while digital signals take finite values.",
    "explanation": "An analog signal is time-varying with an infinite number of values within a continuous range. A digital signal takes on one value from a finite set of possible values at a given time."
  },
  {
    "id": 2,
    "category": "Lecture 01",
    "question": "In the PCB design flow, what comes after the schematic capture and simulation phase (Front-end)?",
    "options": [
      "Component placement",
      "PCB Layout (Back-end)",
      "Reflow soldering",
      "Material preparation"
    ],
    "answer": "PCB Layout (Back-end)",
    "explanation": "After the front-end (Idea, Specs, Schematic/Simulation) comes the back-end, which starts with the PCB layout."
  },
  {
    "id": 3,
    "category": "Lecture 01",
    "question": "What is the function of the solder mask on a PCB?",
    "options": [
      "To provide a surface for component placement",
      "To connect different layers of the PCB",
      "To protect outer layers from oxidation and prevent solder bridges",
      "To display component labels and values"
    ],
    "answer": "To protect outer layers from oxidation and prevent solder bridges",
    "explanation": "The solder mask is a thin polymer layer deposited on the top and bottom layers that protects against oxidation and prevents solder bridges."
  },
  {
    "id": 4,
    "category": "Lecture 01",
    "question": "Which tool is used as the primary measurement device to observe the shape of signals in a graphical format?",
    "options": [
      "Multimeter",
      "Function Generator",
      "Power Supply",
      "Oscilloscope"
    ],
    "answer": "Oscilloscope",
    "explanation": "Oscilloscopes display signals in a graphical format on a pair of axes, generally with Y as the voltage and X as the time."
  },
  {
    "id": 5,
    "category": "Lecture 01",
    "question": "What does AWG stand for in the context of laboratory equipment?",
    "options": [
      "Analog Waveform Generator",
      "Arbitrary Waveform Generator",
      "Automatic Wave Generator",
      "Amplitude Waveform Generator"
    ],
    "answer": "Arbitrary Waveform Generator",
    "explanation": "AWG stands for Arbitrary Waveform Generator, which is required to create additional programmed waveforms and add a DC offset."
  },
  {
    "id": 6,
    "category": "Lecture 01",
    "question": "Which of the following is an advantage of Surface Mount Technology (SMT) over Through-hole technology?",
    "options": [
      "Higher heat tolerance",
      "More reliable at high speed",
      "Stronger physical contact to PCB",
      "Higher power handling capability"
    ],
    "answer": "More reliable at high speed",
    "explanation": "SMT advantages include being more compact, not requiring drilling, faster/cheaper assembly, and more reliable at high speed. Disadvantages include lower heat tolerance, weak physical contact, and lower power handling."
  },
  {
    "id": 7,
    "category": "Lecture 01",
    "question": "Which step in the Surface Mount Assembly Process involves applying a mixture of flux and tin through a stencil onto the PCB pads?",
    "options": [
      "Reflow soldering",
      "SMC placement",
      "Solder paste printing",
      "Clean and inspection"
    ],
    "answer": "Solder paste printing",
    "explanation": "Solder paste printing uses a squeegee to apply solder paste (mixture of flux and tin) onto the PCB via a stencil."
  },
  {
    "id": 8,
    "category": "Lecture 01",
    "question": "What is the purpose of 'Reflow soldering' in the SMT assembly process?",
    "options": [
      "To print solder paste onto the board",
      "To form electrical solder connections by heating the assembly to a sufficient temperature",
      "To clean the boards after soldering",
      "To accurately place components on the board"
    ],
    "answer": "To form electrical solder connections by heating the assembly to a sufficient temperature",
    "explanation": "Reflow soldering uses a controlled temperature profile to heat the assembly, forming solder joints without damaging the components."
  },
  {
    "id": 9,
    "category": "Lecture 01",
    "question": "What type of ESD failure results in permanent damage to the system requiring part replacement?",
    "options": [
      "Soft failure",
      "Catastrophic failure",
      "Latent failure",
      "Hard failure"
    ],
    "answer": "Hard failure",
    "explanation": "Hard failures result in permanent damage to the system that may require replacement of a part before the equipment operation can be restored."
  },
  {
    "id": 10,
    "category": "Lecture 01",
    "question": "Which ESD protection device connects equipment directly to the ground to reduce the risk of ESD damage?",
    "options": [
      "Anti-Static Wrist Strap",
      "ESD Shoes",
      "ESD Grounding Clamp",
      "Anti-Static Bags"
    ],
    "answer": "ESD Grounding Clamp",
    "explanation": "An ESD grounding clamp is used to connect equipment susceptible to a discharge event directly to the ground."
  },
  {
    "id": 11,
    "category": "Lecture 01",
    "question": "What is a 'via' in a multi-layer PCB?",
    "options": [
      "A layer of polymer protecting the copper",
      "A hole used to accomplish connection between different layers",
      "The text printed on the top layer",
      "A type of surface-mounted component"
    ],
    "answer": "A hole used to accomplish connection between different layers",
    "explanation": "Connections between layers in a PCB are accomplished with via holes."
  },
  {
    "id": 12,
    "category": "Lecture 01",
    "question": "What does the silkscreen (or overlay/legend) provide on a PCB?",
    "options": [
      "Connections between different layers",
      "Protection from oxidation",
      "Labels, component values, and designations for assembly",
      "A medium for solder to adhere to"
    ],
    "answer": "Labels, component values, and designations for assembly",
    "explanation": "The legend/silkscreen/overlay is applied on top of the solder resist to show component names, values, and other text information."
  },
  {
    "id": 13,
    "category": "Lecture 01",
    "question": "What is the role of flux during the soldering process according to the professor's notes?",
    "options": [
      "It generates the required heat for soldering.",
      "It helps solder flow and protects the joint from oxidation.",
      "It etches the copper from the PCB.",
      "It acts as a physical stencil for the solder paste."
    ],
    "answer": "It helps solder flow and protects the joint from oxidation.",
    "explanation": "Flux is a chemical cleaning agent that facilitates soldering by removing oxidation from the metals to be joined and prevents further oxidation."
  },
  {
    "id": 14,
    "category": "Lecture 01",
    "question": "What is a characteristic of a latent ESD damage?",
    "options": [
      "It causes immediate and catastrophic failure.",
      "It completely melts the circuitry instantly.",
      "The device remains functional initially, but its life is significantly shortened.",
      "It results in temporary data corruption that is easily recoverable."
    ],
    "answer": "The device remains functional initially, but its life is significantly shortened.",
    "explanation": "In latent damage, a portion of the conductor is weakened. The device is still functional, but the connection will most likely fail over time."
  },
  {
    "id": 15,
    "category": "Lecture 01",
    "question": "How do 7400 Series Logic ICs typically indicate their logic function in their part number (e.g., SN74LS00)?",
    "options": [
      "The first two letters (SN)",
      "The number '74'",
      "The letters 'LS'",
      "The last digits (e.g., '00')"
    ],
    "answer": "The last digits (e.g., '00')",
    "explanation": "In a part number like SN74LS00, 'SN' is the manufacturer, '74' is the logic family, 'LS' is the technology (Low-power Schottky), and '00' is the specific logic function (Quad 2-input NAND)."
  },
  {
    "id": 16,
    "category": "Lecture 01",
    "question": "What is the main function of an Anti-Static Wrist Strap?",
    "options": [
      "To connect the electrical device to ground.",
      "To connect the user to ground, preventing static build-up on the body.",
      "To provide power to static-sensitive devices.",
      "To measure the electrostatic discharge level."
    ],
    "answer": "To connect the user to ground, preventing static build-up on the body.",
    "explanation": "Anti-static wrist straps connect the user to the ground rather than the electrical device, safely dissipating static charge from the person."
  },
  {
    "id": 17,
    "category": "Lecture 01",
    "question": "Which of the following is NOT a phase in the front-end PCB design flow?",
    "options": [
      "Idea/Conception",
      "System Specifications",
      "Fabrication",
      "Schematic Capture/Simulation"
    ],
    "answer": "Fabrication",
    "explanation": "Fabrication is part of the back-end process, which occurs after the layout and generation of CAM files."
  },
  {
    "id": 18,
    "category": "Lecture 01",
    "question": "What does the 'footprint' of a component refer to in PCB design?",
    "options": [
      "The logical function of the component.",
      "The physical dimensions and pad layout of the component on the PCB.",
      "The temperature limit of the component.",
      "The voltage rating of the component."
    ],
    "answer": "The physical dimensions and pad layout of the component on the PCB.",
    "explanation": "A footprint is the pattern or physical layout of pads/holes on the PCB designed to match the specific component's leads."
  },
  {
    "id": 19,
    "category": "Lecture 01",
    "question": "Why are Through-Hole packages considered to have stronger physical contact than Surface Mount packages?",
    "options": [
      "Because they use more solder paste.",
      "Because the pins are inserted through holes drilled in the board and soldered on the opposite side.",
      "Because they have a larger footprint.",
      "Because they operate at lower speeds."
    ],
    "answer": "Because the pins are inserted through holes drilled in the board and soldered on the opposite side.",
    "explanation": "Through-hole components have leads passing through the board, creating a stronger mechanical bond compared to SMT components which are just soldered to the surface."
  },
  {
    "id": 20,
    "category": "Lecture 01",
    "question": "Which instrument is used to supply power to a circuit without needing to build a specific power regulation circuit?",
    "options": [
      "Multimeter",
      "Oscilloscope",
      "Power Supply",
      "Function Generator"
    ],
    "answer": "Power Supply",
    "explanation": "A laboratory power supply can operate in constant-voltage or constant-current mode, allowing rapid testing of components without building a regulation circuit."
  },
  {
    "id": 21,
    "category": "Lecture 01",
    "question": "In the context of IC packages, what does DIP stand for?",
    "options": [
      "Digital In-line Package",
      "Dual In-line Package",
      "Direct Integrated Package",
      "Discrete In-line Processor"
    ],
    "answer": "Dual In-line Package",
    "explanation": "DIP stands for Dual In-line Package, which is a common through-hole package for ICs."
  },
  {
    "id": 22,
    "category": "Lecture 01",
    "question": "Which of the following describes the 'triboelectric effect'?",
    "options": [
      "The generation of waveforms by a function generator.",
      "The rapid transfer of electrostatic charge induced by a high electrostatic field.",
      "The retention of electrons by one surface when two materials rub against each other and separate.",
      "The process of melting solder using a reflow oven."
    ],
    "answer": "The retention of electrons by one surface when two materials rub against each other and separate.",
    "explanation": "Static electricity is the result of triboelectric effect charging, which happens when atoms of surface layers of two materials rub together and separate, transferring electrons."
  }
]
;