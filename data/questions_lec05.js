const lec05Data = [
  {
    category: "Lecture 05",
    text: "........ is an 8-bit register in which the lower 4 bits are set aside for Timer 0 and the upper 4 bits for Timer 1.",
    options: ["TMOD", "TCON", "SCON", "PCON"],
    correctIndex: 0,
    explanation: "TMOD is used for timer mode selection. Syntax trap: tmod is lowercase and invalid in standard 8051 SFR definitions."
  },
  {
    category: "Lecture 05",
    text: "True/False: Both Timer 0 and Timer 1 are 8 bits wide and each is accessed as two separate registers of low byte and high byte.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. They are 16 bits wide, not 8 bits wide. Because the 8051 has an 8-bit architecture, each 16-bit timer is accessed as two 8-bit registers."
  },
  {
    category: "Lecture 05",
    text: "When M1=........ and M0=........, the timer operates in 8-bit auto reload mode.",
    options: ["1, 0", "0, 1", "1, 1", "0, 0"],
    correctIndex: 0,
    explanation: "M1=1 and M0=0 corresponds to Mode 2 (8-bit auto reload). M1=0, M0=1 is Mode 1 (16-bit)."
  },
  {
    category: "Lecture 05",
    text: "True/False: When the GATE bit is cleared, the timer is enabled only while the INTx pin is high and the TRx control pin is set.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. When GATE is set, it depends on the INTx pin. When GATE is cleared, the timer is enabled whenever the TRx bit is set, ignoring the INTx pin."
  },
  {
    category: "Lecture 05",
    text: "In Mode 1 programming, when the timer rolls over from FFFFH to 0000, it sets high a flag bit called ........",
    options: ["TF (timer flag)", "IE (interrupt enable)", "RI (receive interrupt)", "EA (external access)"],
    correctIndex: 0,
    explanation: "TF (timer flag) is raised upon rollover from FFFFH to 0000. Each timer has its own, like TF0 and TF1."
  },
  {
    category: "Lecture 05",
    text: "To clear the timer 0 run control bit and stop the timer, the correct syntax is ........",
    options: ["TR0 = 0;", "TF0 = 0;", "TCON = 0x00;", "TR1 = 0;"],
    correctIndex: 0,
    explanation: "TR0 = 0; stops the timer. Syntax trap: lowercase tr0 is usually undefined, and TR0 == 0; is a comparison, not an assignment."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Mode 2, when the TL register rolls from FFH to 0, it is reloaded automatically with the original value kept by the TMOD register.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. It is reloaded with the value kept by the TH register, not TMOD."
  },
  {
    category: "Lecture 05",
    text: "The 8051 timers use ........ of the XTAL frequency, regardless of the machine cycle time.",
    options: ["1/12", "1/4", "1/2", "1/16"],
    correctIndex: 0,
    explanation: "Timers use 1/12 of the XTAL frequency to increment the count."
  },
  {
    category: "Lecture 05",
    text: "If XTAL = 11.0592 MHz, the timer period is approximately ........",
    options: ["1.085 µs", "1.250 µs", "1.500 µs", "2.000 µs"],
    correctIndex: 0,
    explanation: "Distractor Math: 1 / (11.0592 MHz / 12) = 1.08506 µs. The distractors flip digits or units."
  },
  {
    category: "Lecture 05",
    text: "The ........ bit in the TMOD register decides the source of the clock for the timer.",
    options: ["C/T", "GATE", "M1", "M0"],
    correctIndex: 0,
    explanation: "The C/T (Counter/Timer) bit determines if the clock source is internal (timer) or external (counter)."
  },
  {
    category: "Lecture 05",
    text: "True/False: When C/T = 1, the timer is cleared for timer operation and receives input from the internal system clock.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. When C/T = 1, it is set for counter operation (gets pulses from outside). It must be cleared (0) for internal timer operation."
  },
  {
    category: "Lecture 05",
    text: "Pin 14 (P3.4) is used for ........ and Pin 15 (P3.5) is used for ........",
    options: ["T0 external input, T1 external input", "T1 external input, T0 external input", "INT0 input, INT1 input", "RxD input, TxD output"],
    correctIndex: 0,
    explanation: "P3.4 is T0 (Timer 0 external input), and P3.5 is T1 (Timer 1 external input)."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Mode 1, to generate a time delay, you must keep monitoring the TR flag to see if it is raised to get out of the loop.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. You must monitor the TF (Timer Flag) to see if it is raised, not TR (Timer Run)."
  },
  {
    category: "Lecture 05",
    text: "To set Timer 1 in Mode 2 (8-bit auto-reload), TMOD should be loaded with ........ assuming Timer 0 is not used (0000).",
    options: ["0x20", "0x02", "0x10", "0x01"],
    correctIndex: 0,
    explanation: "The upper 4 bits of TMOD are for Timer 1. Mode 2 is 0010 (binary). So TMOD = 0010 0000 = 0x20. 0x02 would set Timer 0 to Mode 2."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Mode 2 (8-bit auto-reload), the programmer has to manually reload TH and TL every time the timer rolls over.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. Mode 2 is auto-reload. The hardware automatically reloads TL with the value from TH. Mode 1 requires manual reload."
  },
  {
    category: "Lecture 05",
    text: "The C instruction to wait for Timer 1 to roll over is ........",
    options: ["while(TF1==0);", "while(TR1==0);", "while(TF0==0);", "while(IE==0);"],
    correctIndex: 0,
    explanation: "while(TF1==0); correctly polls the flag. Syntax trap: 'TF1=0' is an assignment. 'tf1' is lowercase. 'TF1==1' would immediately fall through."
  },
  {
    category: "Lecture 05",
    text: "To calculate the initial count value for a delay with 1.085 µs period in Mode 1, we subtract the required counts from ........",
    options: ["65536", "256", "1024", "4096"],
    correctIndex: 0,
    explanation: "The rollover happens from FFFFH to 0000, so we subtract the count from 65536 (which is FFFFH + 1)."
  },
  {
    category: "Lecture 05",
    text: "True/False: The 13-bit timer mode is selected when M1=1 and M0=1.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. 13-bit mode is Mode 0 (M1=0, M0=0). M1=1, M0=1 is Split timer mode (Mode 3)."
  },
  {
    category: "Lecture 05",
    text: "When dealing with Timer 0 Mode 1, after the TF0 flag is raised and the loop is exited, the next necessary software step before clearing TF0 is to ........",
    options: ["Stop the timer by clearing TR0", "Reload TH0 and TL0", "Clear TMOD register", "Enable the global interrupt"],
    correctIndex: 0,
    explanation: "Step 5 in generating a delay is 'Stop the timer'. Clearing TR0 stops it before you clear TF0 for the next round."
  },
  {
    category: "Lecture 05",
    text: "For an 8051 timer, each 16-bit timer is accessed as two separate registers of ........ byte and ........ byte.",
    options: ["low, high", "source, destination", "transmit, receive", "master, slave"],
    correctIndex: 0,
    explanation: "They are accessed as low byte (TLx) and high byte (THx)."
  },
  {
    category: "Lecture 05",
    text: "True/False: To use Timer 0 as an event counter fed from external pin P3.4, TMOD lower 4 bits should have C/T = 0.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "False. C/T must be 1 to use it as a counter (external input). 0 is for internal timer."
  },
  {
    category: "Lecture 05",
    text: "In C language for 8051, to load the hex value 4B into TH0, the correct statement is ........",
    options: ["TH0 = 0x4B;", "TMOD = 0x4B;", "TL0 = 0x4B;", "SCON = 0x4B;"],
    correctIndex: 0,
    explanation: "TH0 = 0x4B; is valid syntax. 4BH and 4B; will cause compiler syntax errors."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Timer Mode 2, TH holds the value which is to be reloaded into TL each time it overfolws.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "True. TH holds the auto-reload value that is copied into TL upon rollover."
  },
  {
    category: "Lecture 05",
    text: "To set both Timer 0 and Timer 1 to operate in 16-bit timer mode (Mode 1), the TMOD register should be loaded with ........",
    options: ["0x11", "0x22", "0x01", "0x10"],
    correctIndex: 0,
    explanation: "Timer 1 Mode 1 is upper nibble = 1 (0001). Timer 0 Mode 1 is lower nibble = 1 (0001). Combined result is 0001 0001 binary, which is 0x11."
  },
  {
    category: "Lecture 05",
    text: "The start and stop of the timer are controlled by way of software by the ........ bits.",
    options: ["TR0 and TR1", "TF0 and TF1", "M0 and M1", "C/T and GATE"],
    correctIndex: 0,
    explanation: "TR (Timer Run) bits control the start and stop in software."
  }
];

