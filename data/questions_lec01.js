const lec01Data = [
  {
    category: "Lecture 01",
    text: "A ........ signal can only take on one value from a finite set of possible values at a given time.",
    options: ["digital", "analog", "continuous", "hybrid"],
    correctIndex: 0,
    explanation: "Trap: exact case match 'digital' inside the sentence, intentional spaces."
  },
  {
    category: "Lecture 01",
    text: "The 7400 TTL logic family was powered off of a ........ supply.",
    options: ["+ 5v", "+ 12v", "+ 3.3v", "- 5v"],
    correctIndex: 0,
    explanation: "Trap: exact matching of '+ 5v' with spacing and lowercase 'v' as per slide."
  },
  {
    category: "Lecture 01",
    text: "The original circuits came in either plastic or ceramic ........ packages.",
    options: ["Dual-In-Line", "Quad-Flat-Pack", "Pin-Grid-Array", "Surface-Mount"],
    correctIndex: 0,
    explanation: "Trap: precise casing and hyphenation 'Dual-In-Line'."
  },
  {
    category: "Lecture 01",
    text: "Connection between layers is accomplished with ........ holes.",
    options: ["via", "pad", "trace", "trench"],
    correctIndex: 0,
    explanation: "Trap: singular 'via' with no trailing space vs plural or spaced versions."
  },
  {
    category: "Lecture 01",
    text: "........ mounting is a space-saving alternative to through-hole mounting.",
    options: ["Surface", "Point-to-point", "Wire-wrap", "Chassis"],
    correctIndex: 0,
    explanation: "Trap: Capitalized 'Surface' without trailing spaces."
  },
  {
    category: "Lecture 01",
    text: "........ layer deposited on top and bottom layers protects outer layers from oxidation.",
    options: ["Thin polymer", "Copper oxide", "Aluminum foil", "Dielectric ceramic"],
    correctIndex: 0,
    explanation: "Trap: exact text 'Thin polymer' with single space and correct capitalization."
  },
  {
    category: "Lecture 01",
    text: "........ measure both AC and DC voltage and current as well as resistance.",
    options: ["Multimeters", "Oscilloscopes", "Signal generators", "Spectrum analyzers"],
    correctIndex: 0,
    explanation: "Trap: Plural 'Multimeters' capitalized."
  },
  {
    category: "Lecture 01",
    text: "Oscilloscopes display signals in a graphical format on a pair of axes, generally with ........ as the time.",
    options: ["Y as the voltage and X", "X as the voltage and Y", "Y as the frequency and X", "X as the phase and Y"],
    correctIndex: 0,
    explanation: "Trap: Exact variable casing 'Y' and 'X'."
  },
  {
    category: "Lecture 01",
    text: "It cannot be programmed to create additional waveforms - an ........ is required for this.",
    options: ["arbitrary waveform generator, AWG", "oscilloscope, OSC", "spectrum analyzer, SA", "logic analyzer, LA"],
    correctIndex: 0,
    explanation: "Trap: exact lowercase phrase with ', AWG' suffix."
  },
  {
    category: "Lecture 01",
    text: "Soldering station consists of one or more soldering tools connected to the main unit, which includes the controls (........), means of indication.",
    options: ["temperature adjustment", "voltage regulation", "current limitation", "frequency modulation"],
    correctIndex: 0,
    explanation: "Trap: lowercase 'temperature adjustment'."
  },
  {
    category: "Lecture 01",
    text: "It supplies heat to melt ........ so that it can flow into the joint between two workpieces.",
    options: ["solder", "flux", "rosin", "copper"],
    correctIndex: 0,
    explanation: "Trap: spelling of solder vs solider, and lowercase."
  },
  {
    category: "Lecture 01",
    text: "Static electricity is the result of something called ........ effect charging which happens whenever the atoms of the surface layers of two materials rub against each other.",
    options: ["triboelectric", "piezoelectric", "photoelectric", "thermoelectric"],
    correctIndex: 0,
    explanation: "Trap: one word 'triboelectric', lowercase."
  },
  {
    category: "Lecture 01",
    text: "Electrostatic discharge (ESD) is defined as the rapid, ........ transfer of electrostatic charge induced by a high electrostatic field.",
    options: ["spontaneous", "continuous", "gradual", "oscillating"],
    correctIndex: 0,
    explanation: "Trap: exact spelling and no trailing space."
  },
  {
    category: "Lecture 01",
    text: "........ failures are temporary failures due to the corruption of data or some other recoverable mechanism.",
    options: ["Soft", "Hard", "Latent", "Catastrophic"],
    correctIndex: 0,
    explanation: "Trap: Capitalized 'Soft' vs 'Hard' or 'Latent'."
  },
  {
    category: "Lecture 01",
    text: "did you know that you can prevent ESD by controlling ........ humidity.",
    options: ["relative", "absolute", "specific", "volumetric"],
    correctIndex: 0,
    explanation: "Trap: lowercase 'relative' and no trailing spaces."
  },
  {
    category: "Lecture 01",
    text: "ESD safety mats are also referred to as static control ........ mats.",
    options: ["grounding", "insulating", "conducting", "dissipative"],
    correctIndex: 0,
    explanation: "Trap: exact word 'grounding'."
  },
  {
    category: "Lecture 01",
    text: "SMT disadvantages include ........ heat tolerance.",
    options: ["Lower", "Higher", "Absolute", "Variable"],
    correctIndex: 0,
    explanation: "Trap: Capitalized 'Lower' as it begins a bullet point in the slide."
  },
  {
    category: "Lecture 01",
    text: "SMT advantages include ........ and cheaper assembly.",
    options: ["Faster", "Slower", "Heavier", "Larger"],
    correctIndex: 0,
    explanation: "Trap: Capitalized 'Faster' as it begins a bullet point."
  },
  {
    category: "Lecture 01",
    text: "........ is used to provide fixed position for solder paste printing.",
    options: ["Stencil", "Solder mask", "Silk screen", "Copper trace"],
    correctIndex: 0,
    explanation: "Trap: Capitalized 'Stencil'."
  },
  {
    category: "Lecture 01",
    text: "It’s applied to PCB with the stencil using a squeegee on an angle range from ........",
    options: ["45°-60°", "10°-20°", "75°-90°", "30°-40°"],
    correctIndex: 0,
    explanation: "Trap: presence of degree symbols exactly as written '45°-60°'."
  },
  {
    category: "Lecture 01",
    text: "the correct ........ profile is key to ensure acceptable solder joints without damaging the parts or assembly due to excessive heat.",
    options: ["reflow", "wave soldering", "cooling", "curing"],
    correctIndex: 0,
    explanation: "Trap: lowercase 'reflow'."
  },
  {
    category: "Lecture 01",
    text: "For a circuit with the same number of pins, a surface-mounted package is much ........ than a dual in-line package.",
    options: ["smaller", "larger", "heavier", "thicker"],
    correctIndex: 0,
    explanation: "Trap: lowercase 'smaller' with no trailing space."
  },
  {
    category: "Lecture 01",
    text: "The Logic Function code for a 4-Input NAND Gate(s) is ........",
    options: ["20", "00", "02", "10"],
    correctIndex: 0,
    explanation: "Trap: exact matching number from the logic families chart."
  },
  {
    category: "Lecture 01",
    text: "The 1% resistor code 4701 has a resistance value of ........",
    options: ["4.7 kΩ", "47 kΩ", "470 Ω", "470 kΩ"],
    correctIndex: 0,
    explanation: "Trap: distractor math based on the resistor table."
  },
  {
    category: "Lecture 01",
    text: "True or False: The leads of the PLCC (plastic-leaded chip carrier) are turned under the package in a gull-wing shape.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Trap: False statement twist (PLCC uses J-type, SSOP uses gull-wing)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lec01Data;
} else if (typeof window !== 'undefined') {
  window.lec01Data = lec01Data;
}

