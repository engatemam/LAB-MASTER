const examFinal2024 = [
  {
    category: "Final 2024",
    text: "........ display graphical signals in a format on a pair of axes, generally with Y as voltage and X as the time.",
    options: [
      "Multimeter",
      "Oscilloscope",
      "Power Supply",
      "Function Generator"
    ],
    correctIndex: 1,
    explanation: "Oscilloscopes plot voltage against time."
  },
  {
    category: "Final 2024",
    text: "........ is able to generate waveforms with common shapes.",
    options: [
      "Power Supply",
      "Multimeter",
      "Oscilloscope",
      "Function Generator"
    ],
    correctIndex: 3,
    explanation: "A function generator creates standard waveforms."
  },
  {
    category: "Final 2024",
    text: "........ measure both AC and DC voltage and current as well as resistance.",
    options: [
      "Power Supply",
      "Oscilloscope",
      "Multimeter",
      "Function Generator"
    ],
    correctIndex: 2,
    explanation: "A multimeter measures voltage, current, and resistance."
  },
  {
    category: "Final 2024",
    text: "The..... package have contacts embedded in the bottom of the package.",
    options: [
      "FBGA",
      "PLCC",
      "SOP",
      "QFP"
    ],
    correctIndex: 0,
    explanation: "Fine-pitch Ball Grid Array (FBGA) uses an array of solder balls on the bottom."
  },
  {
    category: "Final 2024",
    text: "The most common type of through-hole package is the.......",
    options: [
      "PLCC",
      "DIP",
      "QFP",
      "SSOP"
    ],
    correctIndex: 1,
    explanation: "Dual In-line Package (DIP) is the most standard through-hole."
  },
  {
    category: "Final 2024",
    text: "..... is used to provide fixed position for solder paste printing.",
    options: [
      "PCB",
      "Solder paste",
      "SMC",
      "Stencil"
    ],
    correctIndex: 3,
    explanation: "Stencils provide the mask for applying solder paste accurately."
  },
  {
    category: "Final 2024",
    text: "At....... stage, the electrical solder connections are formed between the components and PCB by heating the assembly to a sufficient temperature.",
    options: [
      "Reflow soldering",
      "Solder paste printing",
      "SMC placement",
      "None of above"
    ],
    correctIndex: 0,
    explanation: "Reflow soldering melts the paste to form connections."
  },
  {
    category: "Final 2024",
    text: "SMD resistor with label '474' has a resistance of ........ Ω.",
    options: [
      "4704",
      "470",
      "470 K",
      "47.4"
    ],
    correctIndex: 2,
    explanation: "47 * 10^4 = 470,000 Ω or 470 KΩ."
  },
  {
    category: "Final 2024",
    text: "Includes lot of power saving features ........",
    options: [
      "Microprocessor",
      "Microcontroller"
    ],
    correctIndex: 1,
    explanation: "Microcontrollers usually feature deep sleep and power-saving modes."
  },
  {
    category: "Final 2024",
    text: "To generate the final combined executable image, a separate .....process is required.",
    options: [
      "compilation",
      "assembler",
      "linking",
      "None of above"
    ],
    correctIndex: 2,
    explanation: "The linker combines object files into the final executable."
  },
  {
    category: "Final 2024",
    text: "you can check the program execution status and results by outputting information via various I/O mechanisms such as a .....interface.",
    options: [
      "Flash memory",
      "bootloader",
      "UART",
      "None of above"
    ],
    correctIndex: 2,
    explanation: "UART allows printing text output for debugging."
  },
  {
    category: "Final 2024",
    text: "Arbitrary Waveform Generator (AWG) is a programmable Oscilloscope.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "An AWG generates waveforms; an oscilloscope measures them."
  },
  {
    category: "Final 2024",
    text: "The weakness of physical contact to PCB is considered as one of SMD disadvantages.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "SMD solder joints bear the mechanical stress, making them weaker than through-hole."
  },
  {
    category: "Final 2024",
    text: "The BJT transistor can be checked with some types of multimeters.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Many multimeters have hFE or diode test modes for BJT testing."
  },
  {
    category: "Final 2024",
    text: "SMD More reliable at high speed.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Surface Mount Devices (SMDs) exhibit significantly superior high-frequency response due to the minimization of parasitic inductance (L_p) and parasitic capacitance (C_p) inherent in their extremely short lead lengths, thereby reducing signal reflection and impedance mismatching (عدم تطابق الممانعة) during high-speed signal propagation."
  },
  {
    category: "Final 2024",
    text: "SMD resistors with 2% tolerance contain 4 digits as value.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "In Electronic Industries Alliance (EIA) standards for SMD resistors, a 3-digit coding scheme is universally employed for tolerances of 2%, 5%, and 10% (where the 3rd digit is the multiplier), whereas 1% or tighter precision resistors necessitate a 4-digit code (or EIA-96 standard) to accommodate the required precision (الدقة العالية).<br><br><b>💡 Exam Trap:</b> Assuming 4 digits means 2% tolerance, while it actually indicates 1% or tighter."
  },
  {
    category: "Final 2024",
    text: "Each SMD component is picked from its packaging using either a vacuum or gripper nozzle.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation: "Automated Surface Mount Technology (SMT) assembly utilizes computer numerical control (CNC) Pick-and-Place robotic systems equipped with pneumatic vacuum nozzles (فوهات الشفط الفراغي) or mechanical grippers to precisely extract components from tape-and-reel packaging and place them onto the PCB solder paste."
  },
  {
    category: "Final 2024",
    text: "Label of '100R' means 100 Kohm in SMD resistor.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "According to standard alphanumeric SMD coding conventions, the character 'R' represents the decimal point location for resistive values. Consequently, '100R' unequivocally designates a resistance of 100 Ohms exactly, not 100 kOhms (والتي كانت ستُكتب 104 أو 1003).<br><br><b>💡 Exam Trap:</b> Confusing the 'R' character (decimal point) with 'k' or assuming the 0 is a multiplier."
  },
  {
    category: "Final 2024",
    text: "SMD ICs have a notch to help for pin identification.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "In contemporary Surface Mount Device (SMD) packaging (e.g., SOIC, TQFP), Pin 1 identification is predominantly indicated by a circular laser-etched dot, a microscopic dimple, or a chamfered (beveled) edge on the package body (حافة مشطوفة). The traditional semicircular 'notch' is a mechanical feature strictly characteristic of Through-Hole Technology (THT) Dual In-line Packages (DIP).<br><br><b>💡 Exam Trap:</b> Confusing SMD Pin 1 indicators with the classic notch found strictly on through-hole DIP packages."
  }
];




