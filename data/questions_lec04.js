const lec04Data = [
  {
    "id": 1,
    "category": "Lecture 04",
    "question": "What are the three terminals of a Bipolar Junction Transistor (BJT)?",
    "options": ["Source, Gate, Drain", "Base, Collector, Emitter", "Anode, Cathode, Gate", "Input, Output, Ground"],
    "answer": "Base, Collector, Emitter",
    "explanation": "A BJT has three terminals: the Base, the Collector, and the Emitter. Current applied to the base is amplified to control the current between the collector and emitter."
  },
  {
    "id": 2,
    "category": "Lecture 04",
    "question": "Which BJT configuration is most commonly used in computer and control circuits?",
    "options": ["Common Base", "Common Collector", "Common Emitter", "Common Gate"],
    "answer": "Common Emitter",
    "explanation": "According to the lecture, the Common Emitter configuration is the most widely used in computer and control circuits, even though it may not be ideal for audio amplification."
  },
  {
    "id": 3,
    "category": "Lecture 04",
    "question": "Which of the following are examples of commonly used NPN transistors mentioned in the lecture?",
    "options": ["BC547 and 2N2222", "PC817 and 2N2222", "BC547 and PC817", "AT89S52 and 8051"],
    "answer": "BC547 and 2N2222",
    "explanation": "The BC547 and 2N2222 are two of the most famous and widely available NPN transistors in the market."
  },
  {
    "id": 4,
    "category": "Lecture 04",
    "question": "What setting on a multimeter is used to test a transistor and measure its Beta (current gain)?",
    "options": ["VDC", "hFE", "Ohms", "Continuity"],
    "answer": "hFE",
    "explanation": "To test a transistor and find its Beta value (which is usually between 100 and 200), the multimeter should be set to the hFE option."
  },
  {
    "id": 5,
    "category": "Lecture 04",
    "question": "What are the primary internal components of an Optocoupler?",
    "options": ["A relay coil and a metal armature", "An LED and a photodiode or phototransistor", "A capacitor and an inductor", "A BJT and a MOSFET"],
    "answer": "An LED and a photodiode or phototransistor",
    "explanation": "An optocoupler consists of an LED optically coupled to a photodiode or a phototransistor within a single package to provide circuit isolation."
  },
  {
    "id": 6,
    "category": "Lecture 04",
    "question": "What is the main function of an Optocoupler in a circuit?",
    "options": ["To amplify high-frequency signals", "To store electrostatic charge", "To provide electrical isolation between input and output", "To convert AC to DC"],
    "answer": "To provide electrical isolation between input and output",
    "explanation": "Optocouplers are primarily used for circuit isolation, suppressing interference, and high voltage separation."
  },
  {
    "id": 7,
    "category": "Lecture 04",
    "question": "Which of the following is a widely used Optocoupler IC model mentioned in the lecture?",
    "options": ["PC817", "BC547", "2N2222", "AT89S52"],
    "answer": "PC817",
    "explanation": "The PC817 is a very famous optocoupler model found in many devices, including mobile chargers."
  },
  {
    "id": 8,
    "category": "Lecture 04",
    "question": "How does a Relay differ from an Optocoupler in terms of speed and power handling?",
    "options": ["A relay is faster but handles less power.", "A relay is slower but handles higher currents and voltages.", "A relay is faster and handles more power.", "A relay is slower and handles less power."],
    "answer": "A relay is slower but handles higher currents and voltages.",
    "explanation": "Because a relay is an electro-mechanical device, it is slower than an optocoupler. However, it can handle much higher loads (current and voltage)."
  },
  {
    "id": 9,
    "category": "Lecture 04",
    "question": "How many pins does a standard Relay typically have, and how are they divided?",
    "options": ["3 pins: Base, Collector, Emitter", "4 pins: 2 for input, 2 for output", "5 pins: 2 for the input coil, 3 for output (Common, NC, NO)", "6 pins: 3 for input, 3 for output"],
    "answer": "5 pins: 2 for the input coil, 3 for output (Common, NC, NO)",
    "explanation": "A standard relay has 5 pins: two for the input coil to generate the magnetic field, and three for the output contacts (Common, Normally Closed, and Normally Open)."
  },
  {
    "id": 10,
    "category": "Lecture 04",
    "question": "In a relay, which terminal is the 'Common' pin normally connected to when the coil is NOT energized?",
    "options": ["Normally Open (NO)", "Normally Closed (NC)", "Ground", "VCC"],
    "answer": "Normally Closed (NC)",
    "explanation": "When no current flows through the relay coil, the 'Common' pin rests against the 'Normally Closed' (NC) pin."
  },
  {
    "id": 11,
    "category": "Lecture 04",
    "question": "Why is a transistor usually required to interface a relay with an 8051 microcontroller?",
    "options": ["To step down the voltage", "To convert AC to DC", "Because the microcontroller's output current is too weak to drive the relay coil", "Because the relay requires an optical signal"],
    "answer": "Because the microcontroller's output current is too weak to drive the relay coil",
    "explanation": "The output current from the 8051 pins is generally too weak to energize a relay coil directly. A driver transistor is used to amplify the current."
  },
  {
    "id": 12,
    "category": "Lecture 04",
    "question": "When interfacing an 8051 microcontroller, what must be done to a pin before using it as an input?",
    "options": ["It must be set to 0", "It must be set to 1", "It must be connected to an optocoupler", "It must be connected to a relay"],
    "answer": "It must be set to 1",
    "explanation": "To configure a pin or port on the 8051 as an input, a '1' must be written to it first (e.g., P0 = 0xFF or setting the specific bit to 1)."
  },
  {
    "id": 13,
    "category": "Lecture 04",
    "question": "In a Pull-Up resistor circuit for a push button, what is the default logic state read by the microcontroller when the button is NOT pressed?",
    "options": ["Logic 0", "Logic 1", "High Impedance", "Floating"],
    "answer": "Logic 1",
    "explanation": "In a pull-up circuit, a resistor connects the pin to VCC. Thus, the default state is Logic 1. Pressing the button connects the pin to Ground, making it Logic 0."
  },
  {
    "id": 14,
    "category": "Lecture 04",
    "question": "When integrating an optocoupler with an 8051, why is it recommended to configure the microcontroller as a 'sink' rather than a 'source'?",
    "options": ["To increase the operating speed", "To minimize memory usage", "To avoid problems with current limitations when driving the LED", "To allow the optocoupler to work without power"],
    "answer": "To avoid problems with current limitations when driving the LED",
    "explanation": "The lecture notes that it is safer and more reliable to use the microcontroller to sink current (outputting 0 to turn on the component) rather than sourcing current, avoiding potential interfacing problems."
  },
  {
    "id": 15,
    "category": "Lecture 04",
    "question": "What is the purpose of the flyback diode placed in parallel with the relay coil?",
    "options": ["To emit light when the relay is on", "To amplify the current for the transistor", "To protect the circuit from reverse voltage spikes when the relay turns off", "To increase the relay's switching speed"],
    "answer": "To protect the circuit from reverse voltage spikes when the relay turns off",
    "explanation": "A diode is typically placed across the relay coil to protect the driving transistor and the microcontroller from reverse voltage spikes generated when the coil's magnetic field collapses."
  }
]
;