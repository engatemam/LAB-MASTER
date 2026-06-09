const lec05Data = [
  {
    "id": 1,
    "category": "Lecture 05",
    "question": "How many timers does the standard 8051 microcontroller have?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "answer": "Two",
    "explanation": "The 8051 has two timers: Timer 0 and Timer 1. They can be used either as timers or as event counters."
  },
  {
    "id": 2,
    "category": "Lecture 05",
    "question": "What is the size of Timer 0 and Timer 1 in the 8051 microcontroller?",
    "options": [
      "8 bits",
      "16 bits",
      "32 bits",
      "64 bits"
    ],
    "answer": "16 bits",
    "explanation": "Both Timer 0 and Timer 1 are 16 bits wide, accessed as two separate registers of low byte (TL) and high byte (TH)."
  },
  {
    "id": 3,
    "category": "Lecture 05",
    "question": "Which register is used to set the various timer operation modes for both timers?",
    "options": [
      "TCON",
      "TMOD",
      "SCON",
      "PCON"
    ],
    "answer": "TMOD",
    "explanation": "Both timers 0 and 1 use the same register, called TMOD (timer mode) register, to set the various timer operation modes."
  },
  {
    "id": 4,
    "category": "Lecture 05",
    "question": "How are the bits in the TMOD register divided between Timer 0 and Timer 1?",
    "options": [
      "Lower 4 bits for Timer 1, upper 4 bits for Timer 0",
      "Lower 4 bits for Timer 0, upper 4 bits for Timer 1",
      "Both timers share all 8 bits simultaneously",
      "Lower 4 bits for counters, upper 4 bits for timers"
    ],
    "answer": "Lower 4 bits for Timer 0, upper 4 bits for Timer 1",
    "explanation": "TMOD is an 8-bit register in which the lower 4 bits are set aside for Timer 0 and the upper 4 bits for Timer 1."
  },
  {
    "id": 5,
    "category": "Lecture 05",
    "question": "Which bit controls the start and stop of the timer by way of software?",
    "options": [
      "TF (Timer Flag)",
      "TR (Timer Start)",
      "C/T (Counter/Timer)",
      "GATE"
    ],
    "answer": "TR (Timer Start)",
    "explanation": "The start and stop of the timer are controlled by way of software using the TR (timer start) bits TR0 and TR1."
  },
  {
    "id": 6,
    "category": "Lecture 05",
    "question": "In Mode 1 programming, what happens when the 16-bit timer rolls over from FFFFH to 0000H?",
    "options": [
      "It stops the timer automatically",
      "It sets the TR bit to 0",
      "It sets high a flag bit called TF (timer flag)",
      "It reloads the original value automatically"
    ],
    "answer": "It sets high a flag bit called TF (timer flag)",
    "explanation": "When the timer rolls over from FFFFH to 0000H, it sets high a flag bit called TF (timer flag), which can be monitored by the software."
  },
  {
    "id": 7,
    "category": "Lecture 05",
    "question": "Which timer mode is known as the auto-reload mode?",
    "options": [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    "answer": "Mode 2",
    "explanation": "Mode 2 is an 8-bit auto-reload mode. When TL rolls from FFH to 0, it is automatically reloaded with the original value kept in the TH register."
  },
  {
    "id": 8,
    "category": "Lecture 05",
    "question": "What is the role of the C/T bit in the TMOD register?",
    "options": [
      "To clear the timer flag",
      "To start the timer",
      "To stop the timer",
      "To decide the source of the clock for the timer (timer vs. counter)"
    ],
    "answer": "To decide the source of the clock for the timer (timer vs. counter)",
    "explanation": "The C/T bit decides the source of the clock. C/T = 0 uses the internal crystal oscillator (timer), while C/T = 1 uses an external pulse (counter)."
  },
  {
    "id": 9,
    "category": "Lecture 05",
    "question": "When C/T = 1, where does the timer get its input pulses from?",
    "options": [
      "Internal crystal oscillator",
      "Outside the 8051 from pins T0 and T1",
      "From the serial UART port",
      "From a software loop delay"
    ],
    "answer": "Outside the 8051 from pins T0 and T1",
    "explanation": "When C/T = 1, the timer is used as an event counter and gets its pulses from outside the 8051, fed from pins 14 (T0) and 15 (T1)."
  },
  {
    "id": 10,
    "category": "Lecture 05",
    "question": "According to the professor's explanation, how do you calculate the initial value to load into the timer for a specific delay in Mode 1?",
    "options": [
      "Multiply the delay by the machine cycle and add 1",
      "Divide the desired delay by the machine cycle time, then subtract this count from 65536",
      "Divide the machine cycle by the delay and subtract from 256",
      "Add 65536 to the machine cycle time"
    ],
    "answer": "Divide the desired delay by the machine cycle time, then subtract this count from 65536",
    "explanation": "To calculate the initial value for Mode 1: Divide the delay by the machine cycle time to get the number of clocks needed, then subtract this number from 65536. Convert the result to hex and load it into TH and TL."
  },
  {
    "id": 11,
    "category": "Lecture 05",
    "question": "What happens if the GATE bit in TMOD is set to 1?",
    "options": [
      "The timer starts immediately without TR",
      "The timer runs continuously in a loop",
      "The timer starts based on both TR being 1 AND an external interrupt pin being high",
      "The timer functions as an auto-reload timer"
    ],
    "answer": "The timer starts based on both TR being 1 AND an external interrupt pin being high",
    "explanation": "If GATE is 1, the timer operation depends on both the software (TR bit) and the hardware (the corresponding external interrupt pin being high)."
  },
  {
    "id": 12,
    "category": "Lecture 05",
    "question": "What is the maximum count value in 16-bit mode (Mode 1) before the timer rolls over?",
    "options": [
      "0xFF",
      "0xFFFF",
      "0x0FFF",
      "0x7FFF"
    ],
    "answer": "0xFFFF",
    "explanation": "Mode 1 is a 16-bit timer mode. It counts up to 0xFFFF (65535 in decimal) before rolling over to 0000H and setting the TF flag."
  },
  {
    "id": 13,
    "category": "Lecture 05",
    "question": "How does the 8051 generate its internal machine cycle frequency for the timers?",
    "options": [
      "By multiplying the external crystal frequency by 12",
      "By dividing the external crystal frequency by 12",
      "By using the exact crystal frequency directly",
      "By dividing the external crystal frequency by 2"
    ],
    "answer": "By dividing the external crystal frequency by 12",
    "explanation": "The oscillator frequency from the external crystal is divided by 12 to provide the internal machine cycle time, which serves as the clock for the timers."
  },
  {
    "id": 14,
    "category": "Lecture 05",
    "question": "What should the software generally do immediately after the Timer Flag (TF) is raised?",
    "options": [
      "Clear the TR bit, clear the TF flag, and reload TH and TL for the next round",
      "Set the TR bit to increment the counter again",
      "Clear the TMOD register completely",
      "Increment the GATE bit"
    ],
    "answer": "Clear the TR bit, clear the TF flag, and reload TH and TL for the next round",
    "explanation": "When TF becomes high, indicating a rollover, the software should stop the timer (clear TR), clear the TF flag, and loop back to reload TH and TL to start the delay again."
  },
  {
    "id": 15,
    "category": "Lecture 05",
    "question": "In Mode 2 (8-bit auto-reload mode), which register holds the original reload value?",
    "options": [
      "TL",
      "TH",
      "TMOD",
      "TCON"
    ],
    "answer": "TH",
    "explanation": "In Mode 2, after TH is loaded with the initial 8-bit value, it gives a copy to TL. When TL rolls over from FFH to 0, it is reloaded automatically with the original value kept by the TH register."
  },
  {
    "id": 16,
    "category": "Lecture 05",
    "question": "What is Mode 0 in the 8051 timers?",
    "options": [
      "8-bit auto-reload mode",
      "16-bit timer mode",
      "13-bit timer mode",
      "Split timer mode"
    ],
    "answer": "13-bit timer mode",
    "explanation": "Mode 0 is a 13-bit timer mode, using 8 bits of TH and 5 bits of TL. It exists primarily for historical compatibility with older microcontrollers like the 8048."
  },
  {
    "id": 17,
    "category": "Lecture 05",
    "question": "When writing a program to create a very large delay (e.g., 500 ms), what method did the professor recommend?",
    "options": [
      "Using an external crystal to delay the timer physically",
      "Decreasing the machine cycle frequency internally",
      "Creating a smaller timer delay (e.g., 25 ms) and looping it repeatedly (e.g., 20 times)",
      "Using a 32-bit timer mode"
    ],
    "answer": "Creating a smaller timer delay (e.g., 25 ms) and looping it repeatedly (e.g., 20 times)",
    "explanation": "Because a 16-bit timer can only count up to 65535, it cannot handle very large delays in a single pass. Large delays like 500 ms are achieved by configuring a smaller delay like 25 ms and placing it inside a loop that runs 20 times."
  },
  {
    "id": 18,
    "category": "Lecture 05",
    "question": "If the TMOD register is loaded with 0x20, what is the configuration?",
    "options": [
      "Timer 0 in Mode 2",
      "Timer 1 in Mode 2",
      "Timer 0 in Mode 1",
      "Timer 1 in Mode 1"
    ],
    "answer": "Timer 1 in Mode 2",
    "explanation": "0x20 is 0010 0000 in binary. The upper 4 bits control Timer 1, and 0010 sets M1=1 and M0=0, which corresponds to Mode 2 (8-bit auto-reload) for Timer 1."
  },
  {
    "id": 19,
    "category": "Lecture 05",
    "question": "In Mode 2, what is the maximum count value before the timer rolls over?",
    "options": [
      "255 (FFH)",
      "65535 (FFFFH)",
      "8191 (1FFFH)",
      "127 (7FH)"
    ],
    "answer": "255 (FFH)",
    "explanation": "Mode 2 operates as an 8-bit timer. Therefore, its maximum value is FFH (255 in decimal) before rolling over to 00H and setting the TF flag."
  },
  {
    "id": 20,
    "category": "Lecture 05",
    "question": "When using the timer as an event counter (C/T = 1), what triggers the count to increment?",
    "options": [
      "The internal machine cycle",
      "A software interrupt instruction",
      "An external pulse on pin T0 or T1",
      "The rollover of the alternate timer"
    ],
    "answer": "An external pulse on pin T0 or T1",
    "explanation": "When C/T = 1, the timer operates as a counter and increments based on external pulses fed from the external pins T0 (for Timer 0) or T1 (for Timer 1)."
  },
  {
    "id": 21,
    "category": "Lecture 05",
    "question": "According to the professor's notes, how many timers does the 8052 microcontroller have compared to the 8051?",
    "options": [
      "Two timers",
      "Three timers",
      "Four timers",
      "One timer"
    ],
    "answer": "Three timers",
    "explanation": "The 8051 has two timers (Timer 0 and Timer 1), while the 8052 model includes an additional timer, making it three timers in total."
  },
  {
    "id": 22,
    "category": "Lecture 05",
    "question": "What is the value loaded into TMOD to use Timer 0 in Mode 1 as a timer with software start/stop?",
    "options": [
      "0x01",
      "0x10",
      "0x02",
      "0x20"
    ],
    "answer": "0x01",
    "explanation": "For Timer 0 in Mode 1 (16-bit timer), M1=0, M0=1 in the lower 4 bits. C/T=0 (timer), GATE=0 (software control). So the lower 4 bits are 0001, making TMOD 0x01."
  },
  {
    "id": 23,
    "category": "Lecture 05",
    "question": "When calculating the initial value for a timer, why does the professor subtract from 65536 instead of 65535?",
    "options": [
      "To account for the extra clock cycle needed to roll over from FFFFH to 0000H and set the TF flag",
      "Because the timer counts starting from 1 rather than 0",
      "To include the time taken to execute the TR start instruction",
      "To adjust for the machine cycle division by 12"
    ],
    "answer": "To account for the extra clock cycle needed to roll over from FFFFH to 0000H and set the TF flag",
    "explanation": "The timer rolls over after FFFFH (65535). It takes one additional count to go from FFFFH to 0000H and set the TF flag, meaning the total capacity is 65536 counts."
  },
  {
    "id": 24,
    "category": "Lecture 05",
    "question": "What does the C syntax instruction `while(TF0 == 0);` achieve in a timer delay program?",
    "options": [
      "It stops the timer execution completely",
      "It polls the TF0 flag, waiting in a loop until the timer rolls over and sets TF0 to 1",
      "It clears the timer flag to restart the delay",
      "It starts the timer count from zero"
    ],
    "answer": "It polls the TF0 flag, waiting in a loop until the timer rolls over and sets TF0 to 1",
    "explanation": "This is a polling loop that keeps the microcontroller waiting (stuck in the loop) until TF0 becomes high, indicating the timer has reached its maximum value and rolled over."
  },
  {
    "id": 25,
    "category": "Lecture 05",
    "question": "If Mode 2 generates an initial negative value in calculation (e.g., -23), how can it be used in the 8051 IDE?",
    "options": [
      "It cannot be used; it must be converted to positive binary manually",
      "It can be directly loaded into TH, as the assembler will calculate the correct two's complement hex value",
      "The value must be multiplied by 12 first",
      "The timer will count downwards instead"
    ],
    "answer": "It can be directly loaded into TH, as the assembler will calculate the correct two's complement hex value",
    "explanation": "As the professor mentioned, instead of manually subtracting from 256, you can simply load the negative decimal value (e.g., -23) into TH, and the IDE/assembler will automatically convert it to the correct hex value."
  }
]
;