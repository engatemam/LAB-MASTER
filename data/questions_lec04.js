const lec04Data = [
  {
    category: "Lecture 04",
    text: "........ configuration of BJT is predominantly utilized in computer logic and switching circuits rather than audio amplification.",
    options: [
      "Common Emitter",
      "Common Collector",
      "Common Base",
      "Common Gate"
    ],
    correctIndex: 0,
    explanation: "Common Emitter is the most widely used configuration for logic and switching, often tested with tricky spellings like 'Emmiter'."
  },
  {
    category: "Lecture 04",
    text: "When verifying BJT connections using a multimeter, the ........ setting is used to determine the Beta value, which typically falls between ........ for valid configurations.",
    options: [
      "hFE, 100 and 200",
      "hIE, 50 and 80",
      "hOE, 10 and 20",
      "hRE, 200 and 300"
    ],
    correctIndex: 0,
    explanation: "Capitalization matters (hFE) and the normal Beta value for these transistors is between 100 and 200."
  },
  {
    category: "Lecture 04",
    text: "True/False: An optocoupler strictly functions by using an external electrical current applied directly to the base of its internal phototransistor to suppress interference and isolate circuits.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. The optical light from the LED replaces the electrical base current to activate the phototransistor, achieving isolation."
  },
  {
    category: "Lecture 04",
    text: "The famous optocoupler IC frequently used in mobile chargers and interface circuits is the ........ , which typically comes in a ........ -pin package.",
    options: [
      "PC817, 4",
      "LM358, 8",
      "NE555, 8",
      "ULN2003, 16"
    ],
    correctIndex: 0,
    explanation: "PC817 is the most famous, usually found in a 4-pin Dual-in-line or SMD package. Distractor math (871) and pin counts (6)."
  },
  {
    category: "Lecture 04",
    text: "True/False: While relays provide mechanical isolation and are faster than optocouplers, they handle significantly lower voltages and currents, making them suitable only for micro-level switching.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. Relays are slower (mechanical) but handle higher voltages and currents compared to optocouplers. Definition is completely twisted."
  },
  {
    category: "Lecture 04",
    text: "A standard electromagnetic Relay typically contains ........ pins in total, precisely divided into ........ for the coil (input) and ........ for the contacts (output).",
    options: [
      "5, 2, 3",
      "5, 3, 2",
      "6, 2, 4",
      "4, 2, 2"
    ],
    correctIndex: 0,
    explanation: "5 pins total: 2 for the coil (input) and 3 for the output contacts (COM, NO, NC). Distractor math trap."
  },
  {
    category: "Lecture 04",
    text: "In a relay's unenergized (default) state, the ........ pin is directly connected to the ........ pin, allowing current to flow if a circuit is attached.",
    options: [
      "Common, Normally Closed",
      "Common, Normally Open",
      "Coil, Normally Closed",
      "Armature, Normally Open"
    ],
    correctIndex: 0,
    explanation: "The Common (COM) is connected to Normally Closed (NC) by default. Watch out for 'Normaly' syntax trap."
  },
  {
    category: "Lecture 04",
    text: "To successfully interface a Relay with an 8051 microcontroller, a ........ is strictly required because the microcontroller's output current is generally too weak to energize the relay coil directly.",
    options: [
      "Transistor driver",
      "Voltage regulator",
      "Transformer driver",
      "Operational amplifier"
    ],
    correctIndex: 0,
    explanation: "A transistor driver amplifies the weak microcontroller current to a sufficient level to drive the relay coil. Syntax trap on 'Transister'."
  },
  {
    category: "Lecture 04",
    text: "True/False: In 8051 C programming for practical exams, it is absolutely mandatory to write the full definition body of the Delay function before the main() function to avoid syntax compilation errors.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. Dr. Emad explicitly mentioned that a function prototype before main() is sufficient; the full definition is not mandatory."
  },
  {
    category: "Lecture 04",
    text: "In order to configure an 8051 microcontroller pin strictly as an INPUT to read a push button, the pin MUST first be initialized with a logic ........ .",
    options: [
      "1",
      "0",
      "0xFF",
      "High-Z"
    ],
    correctIndex: 0,
    explanation: "To use a pin as input in the 8051, a logic 1 must be written to it first to configure its internal latch."
  },
  {
    category: "Lecture 04",
    text: "Conversely, to initialize an 8051 microcontroller pin strictly as an OUTPUT (e.g., to drive an LED), it is standard practice to initialize the pin with a logic ........ .",
    options: [
      "0",
      "1",
      "0x00",
      "Low-Z"
    ],
    correctIndex: 0,
    explanation: "Initializing with a logic 0 is standard for preparing a pin as an output, especially when sinking current."
  },
  {
    category: "Lecture 04",
    text: "True/False: When interfacing the 8051 microcontroller with external components like LEDs or Optocouplers, it is strongly recommended to configure the microcontroller as a 'source' rather than a 'sink' to avoid interface problems.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. The lecturer emphasized it is better to 'sink' current (output 0 to turn ON) rather than 'source' it. Twisted definition."
  },
  {
    category: "Lecture 04",
    text: "In a standard ........ circuit configuration, the default logic state read by the microcontroller when the push button is NOT pressed is ........ .",
    options: [
      "Pull-up, 1",
      "Pull-down, 1",
      "Pull-up, 0",
      "Pull-down, High-Z"
    ],
    correctIndex: 0,
    explanation: "A pull-up resistor connects the pin to VCC, making the default unpressed state logic 1."
  },
  {
    category: "Lecture 04",
    text: "The precise syntax ........ is used in Keil C to declare and access a single bit of a Special Function Register (SFR), such as an individual port pin.",
    options: [
      "sbit",
      "sfr",
      "bit",
      "pin"
    ],
    correctIndex: 0,
    explanation: "'sbit' is the exact Keil C keyword. Syntax traps: Sbit, s_bit, bit."
  },
  {
    category: "Lecture 04",
    text: "True/False: If an external pull-down resistor circuit is connected to an 8051 input pin, pressing the connected push button will force a logic 0 into the microcontroller.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. In a pull-down circuit, the default is 0. Pressing the button connects it to VCC, supplying a logic 1."
  },
  {
    category: "Lecture 04",
    text: "The commonly used general-purpose NPN transistors mentioned in the lecture for switching and driving applications are ........ and ........ .",
    options: [
      "BC547, 2N2222",
      "TIP120, IRFZ44N",
      "LM317, 7805",
      "NE555, LM358"
    ],
    correctIndex: 0,
    explanation: "BC547 and 2N2222 are correct. Distractor math traps with transposed digits like BC574 or missing digits 2N222."
  },
  {
    category: "Lecture 04",
    text: "In an optocoupler structure, the internal components consist of an LED optically coupled with a ........ or a ........ inside a single package.",
    options: [
      "Photodiode, Phototransistor",
      "Photodiode, Photoresistor",
      "Phototransistor, Photothyristor",
      "Photodiode, Photothyristor"
    ],
    correctIndex: 0,
    explanation: "Direct quote from the lecture slide: 'coupled to a photodiode or a phototransistor in a single package.'"
  },
  {
    category: "Lecture 04",
    text: "True/False: When an optocoupler's LED cathode is connected to an 8051 pin (sink configuration), outputting a logic 1 from the microcontroller turns ON the internal LED.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. Outputting logic 1 means the pin is at VCC. Since the anode is also at VCC, the potential difference is 0, so the LED is OFF."
  },
  {
    category: "Lecture 04",
    text: "To correctly assign the name 'IN' to the first bit of Port 0 and 'OUT' to the last bit of Port 2 in Keil C, one MUST write: ........ .",
    options: [
      "sbit IN=P0^0; sbit OUT=P2^7;",
      "sbit IN=P0^1; sbit OUT=P2^8;",
      "sbit IN=P0.0; sbit OUT=P2.7;",
      "sfr IN=0x80; sfr OUT=0xA0;"
    ],
    correctIndex: 0,
    explanation: "P0^0 and P2^7 are the exact syntax for the 1st and 8th bits. 'Sbit' and dot notation are syntax traps."
  },
  {
    category: "Lecture 04",
    text: "An optocoupler is extensively used in electronic circuits primarily for ........ in data communication and for high voltage separation.",
    options: [
      "Suppressing interference",
      "Amplifying signals",
      "Generating oscillations",
      "Regulating voltage"
    ],
    correctIndex: 0,
    explanation: "'Suppressing interference' is the exact slide terminology. Watch out for spelling 'Supressing' trap."
  },
  {
    category: "Lecture 04",
    text: "True/False: The 'Normally Open' (NO) pin of a relay is physically connected to the 'Normally Closed' (NC) pin when a sufficient magnetic field is generated by the relay coil.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. The COM pin moves from NC to NO. NO does not connect to NC. Tricky twisted definition."
  },
  {
    category: "Lecture 04",
    text: "In the context of a relay module driven by a BJT, placing a ........ in parallel with the relay coil is crucial to protect the transistor from back EMF.",
    options: [
      "Diode",
      "Resistor",
      "Capacitor",
      "Inductor"
    ],
    correctIndex: 0,
    explanation: "A freewheeling/flyback diode is used in parallel with the coil for reverse current protection."
  },
  {
    category: "Lecture 04",
    text: "True/False: According to the lecture, the most famous optocoupler (PC817) exclusively comes in a 6-pin Dual-in-line package for maximum isolation.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "False. PC817 is primarily a 4-pin device. The definition is twisted with distractor numbers."
  },
  {
    category: "Lecture 04",
    text: "A Bipolar Junction Transistor (BJT) is a semiconductor device that consists of ........ alternating layers of P-type and N-type materials.",
    options: [
      "3",
      "2",
      "4",
      "5"
    ],
    correctIndex: 0,
    explanation: "A BJT consists of exactly 3 layers (NPN or PNP)."
  },
  {
    category: "Lecture 04",
    text: "In a typical Relay structure, when current flows through the insulated coil, the generated magnetic field specifically attracts the metal ........ to mechanically switch the contact point.",
    options: [
      "Armature",
      "Stator",
      "Core",
      "Commutator"
    ],
    correctIndex: 0,
    explanation: "The magnetic field attracts the armature. 'Armeture' is a syntax trap, and the core is the stationary part."
  }
];

