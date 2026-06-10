const examQuiz2026 = [
  {
    category: "Quiz 2026",
    text: "The 8051 timers can count down only.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "8051 timers operate as up-counters."
  },
  {
    category: "Quiz 2026",
    text: "What happens when a timer overflows?",
    options: ["TMOD is cleared", "TRx bit becomes 0", "TFx flag becomes 1", "The program stops"],
    correctIndex: 2,
    explanation: "When a timer overflows from its maximum value, the corresponding Timer Flag (TFx) is set to 1."
  },
  {
    category: "Quiz 2026",
    text: "Both Timer 0 and Timer 1 are 16-bit registers.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Yes, both timers are 16-bit registers (composed of THx and TLx)."
  },
  {
    category: "Quiz 2026",
    text: "In TMOD register, which bit is used to select Timer or Counter operation?",
    options: ["M0", "C/T", "M1", "GATE"],
    correctIndex: 1,
    explanation: "The C/T (Counter/Timer) bit determines if it acts as a timer or counter."
  },
  {
    category: "Quiz 2026",
    text: "Which timer mode is known as the '8-bit auto-reload' mode?",
    options: ["Mode 1", "Mode 0", "Mode 3", "Mode 2"],
    correctIndex: 3,
    explanation: "Mode 2 is the 8-bit auto-reload mode."
  },
  {
    category: "Quiz 2026",
    text: "If TMOD is loaded with 0x01, which mode is selected for Timer 0?",
    options: ["Mode 1", "Mode 0", "Mode 2", "Mode 3"],
    correctIndex: 0,
    explanation: "0x01 configures Timer 0 in Mode 1 (16-bit timer) since M1=0, M0=1."
  },
  {
    category: "Quiz 2026",
    text: "What is the maximum count value in 16-bit mode (Mode 1)?",
    options: ["0x00FF", "0xFFFF", "0x1FFFF", "0xFF00"],
    correctIndex: 1,
    explanation: "A 16-bit register can count up to 0xFFFF (65535)."
  },
  {
    category: "Quiz 2026",
    text: "How many 16-bit timer/counters are available in the standard 8051 microcontroller?",
    options: ["3", "1", "2", "4"],
    correctIndex: 2,
    explanation: "The standard 8051 has two 16-bit timer/counters: Timer 0 and Timer 1."
  },
  {
    category: "Quiz 2026",
    text: "When operating as a timer, the input comes from the external pin T0 or T1.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "When operating as a counter, input comes from external pins. As a timer, it comes from the internal system clock."
  },
  {
    category: "Quiz 2026",
    text: "Which of the following registers is used to select the operating mode of the timers?",
    options: ["SCON", "PCON", "TMOD", "TCON"],
    correctIndex: 2,
    explanation: "The Timer Mode (TMOD) register is used to set the operating mode."
  },
  {
    category: "Quiz 2026",
    text: "In Auto-Reload mode (Mode 2), THx retains its value until changed by the user.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "In Mode 2, THx holds the reload value which is preserved and automatically loaded into TLx upon overflow."
  },
  {
    category: "Quiz 2026",
    text: "When the C/T bit is set to 1, the timer operates as a:",
    options: ["Baud Rate Generator", "None of the above", "Timer", "Counter"],
    correctIndex: 3,
    explanation: "C/T = 1 selects Counter operation (counting external pulses)."
  },
  {
    category: "Quiz 2026",
    text: "The 8051 timer counts up, starting from a loaded value and overflowing at FFFFh.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Yes, 8051 timers count up towards their maximum value before overflowing."
  },
  {
    category: "Quiz 2026",
    text: "What is the frequency of the clock source for the timers?",
    options: ["f/12", "f/6", "f/2", "Crystal frequency (f)"],
    correctIndex: 0,
    explanation: "The timer clock frequency is the oscillator frequency divided by 12."
  },
  {
    category: "Quiz 2026",
    text: "The GATE bit in TMOD allows the timer to be controlled by an external interrupt pin.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "When GATE=1, the timer runs only when the corresponding external interrupt pin (INT0/INT1) is high and TRx is set."
  }
];




