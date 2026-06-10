const examQuiz2026 = [
  {
    category: "Quiz 2026",
    text: "The 8051 timers can count down only.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The 8051 timers are engineered as strictly up-counters at the hardware level, incrementing their values incrementally with each machine cycle or external pulse until they reach their maximum terminal count. تعمل هذه المؤقتات تصاعدياً فقط (Up-counters)، ولا تمتلك دوائر تنازلية (Down-counting logic) مدمجة في بنيتها المعمارية."
  },
  {
    category: "Quiz 2026",
    text: "What happens when a timer overflows?",
    options: ["TMOD is cleared", "TRx bit becomes 0", "TFx flag becomes 1", "The program stops"],
    correctIndex: 2,
    explanation: "Upon rolling over from its maximum capacity (e.g., 0xFFFF in 16-bit mode) to 0x0000, the timer's hardware mechanism sets the respective Timer Overflow Flag (TF0 or TF1) to Logic 1, which subsequently triggers an interrupt if enabled. عند حدوث هذا الفيضان (Overflow)، يتم رفع راية المؤقت (TFx) للإشارة إلى اكتمال دورة العد."
  },
  {
    category: "Quiz 2026",
    text: "Both Timer 0 and Timer 1 are 16-bit registers.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Architecturally, both Timer 0 and Timer 1 are 16-bit wide registers, practically implemented by cascading two discrete 8-bit Special Function Registers (SFRs) designated as THx (High byte) and TLx (Low byte). يتم دمج هذين السجلين لتوفير قدرة عد تصل إلى 16 بتاً."
  },
  {
    category: "Quiz 2026",
    text: "In TMOD register, which bit is used to select Timer or Counter operation?",
    options: ["M0", "C/T", "M1", "GATE"],
    correctIndex: 1,
    explanation: "The C/T (Counter/Timer) selection bit within the Timer Mode (TMOD) register acts as a multiplexer control signal. Clearing it to 0 selects the internal oscillator (Timer mode), while setting it to 1 routes the input from external pins (T0 or T1) for event counting. تحدد هذه البتة مسار الإشارة التي ستعمل على زيادة قيمة السجل."
  },
  {
    category: "Quiz 2026",
    text: "Which timer mode is known as the '8-bit auto-reload' mode?",
    options: ["Mode 1", "Mode 0", "Mode 3", "Mode 2"],
    correctIndex: 3,
    explanation: "Mode 2 configures the timer as an 8-bit auto-reload counter, where the TLx register acts as the primary counter and THx holds the invariant reload value. Upon TLx overflow, the hardware seamlessly and instantly reloads the THx value into TLx without software intervention. يُعرف هذا النمط بإعادة التحميل التلقائي ويُستخدم بكثرة في توليد معدلات الباود (Baud Rates)."
  },
  {
    category: "Quiz 2026",
    text: "If TMOD is loaded with 0x01, which mode is selected for Timer 0?",
    options: ["Mode 1", "Mode 0", "Mode 2", "Mode 3"],
    correctIndex: 0,
    explanation: "Writing 0x01 (binary 00000001) to the TMOD register specifically configures the lower nibble for Timer 0. Setting M1=0 and M0=1 assigns Timer 0 to Mode 1, configuring it as a full 16-bit counter comprised of TH0 and TL0. هذه القيمة تضبط المؤقت صفر للعمل بسعة 16 بتاً (Mode 1)."
  },
  {
    category: "Quiz 2026",
    text: "What is the maximum count value in 16-bit mode (Mode 1)?",
    options: ["0x00FF", "0xFFFF", "0x1FFFF", "0xFF00"],
    correctIndex: 1,
    explanation: "In Mode 1 (16-bit mode), the cascaded registers provide 16 binary bits of counting space, which translates to a terminal unipolar integer value of 2^16 - 1, yielding a maximum count of 0xFFFF in hexadecimal or 65,535 in decimal. هذا هو الحد الأقصى قبل حدوث فيضان للمؤقت وتفعيل راية (TF)."
  },
  {
    category: "Quiz 2026",
    text: "How many 16-bit timer/counters are available in the standard 8051 microcontroller?",
    options: ["3", "1", "2", "4"],
    correctIndex: 2,
    explanation: "The orthodox Intel 8051 silicon die incorporates exactly two independently programmable 16-bit Timer/Counter peripherals: Timer 0 and Timer 1. Each is orchestrated via the overarching TMOD and TCON Special Function Registers. المعالج القياسي يحتوي على مؤقتين فقط، بينما قد تحتوي الإصدارات الأحدث (مثل 8052) على ثلاثة."
  },
  {
    category: "Quiz 2026",
    text: "When operating as a timer, the input comes from the external pin T0 or T1.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "In Timer configuration (C/T = 0), the count clock is derived synchronously from the internal system oscillator frequency divided by 12. External pins T0 and T1 are exclusively utilized when functioning in Counter configuration (C/T = 1) to tabulate external asynchronous events. النبضات تأتي من النظام الداخلي عند استخدامه كمؤقت، وليس من الأطراف الخارجية."
  },
  {
    category: "Quiz 2026",
    text: "Which of the following registers is used to select the operating mode of the timers?",
    options: ["SCON", "PCON", "TMOD", "TCON"],
    correctIndex: 2,
    explanation: "The Timer/Counter Mode Control (TMOD) register is an 8-bit non-bit-addressable Special Function Register fundamentally dedicated to dictating the operational topology (Modes 0-3) and clock source (C/T) for both Timer 0 and Timer 1. مسجل TMOD هو المسؤول الحصري عن برمجة أنماط عمل المؤقتات في المعالج."
  },
  {
    category: "Quiz 2026",
    text: "In Auto-Reload mode (Mode 2), THx retains its value until changed by the user.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "During Mode 2 execution, the THx register functions as an immutable holding latch for the reload seed value. It remains uncorrupted during the TLx incrementation and overflow cycles, persisting strictly until overwritten by a new software instruction. يحتفظ سجل (THx) بالقيمة كمرجع ثابت يعاد تحميله تلقائياً في السجل (TLx) عند كل فيضان."
  },
  {
    category: "Quiz 2026",
    text: "When the C/T bit is set to 1, the timer operates as a:",
    options: ["Baud Rate Generator", "None of the above", "Timer", "Counter"],
    correctIndex: 3,
    explanation: "Asserting the C/T logic bit to 1 transitions the peripheral into Counter mode, effectively connecting its clock input matrix to the external pin (T0 or T1) to tally high-to-low transitions (falling edges) originating from external hardware signals. هذا يحوله من مؤقت يعتمد على نبضات المعالج إلى عداد للأحداث الخارجية."
  },
  {
    category: "Quiz 2026",
    text: "The 8051 timer counts up, starting from a loaded value and overflowing at FFFFh.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "The core arithmetic logic of the timers is strictly positive-incrementing. Starting from an arbitrary user-seeded 16-bit value, it iteratively counts upwards until surpassing its peak hardware capacity of 0xFFFF, precipitating an overflow to 0x0000. التصميم المنطقي يعتمد على الجمع المستمر (Up-counting) حتى يصل السجل لأقصى سعة ثم يعود للصفر."
  },
  {
    category: "Quiz 2026",
    text: "What is the frequency of the clock source for the timers?",
    options: ["f/12", "f/6", "f/2", "Crystal frequency (f)"],
    correctIndex: 0,
    explanation: "According to the classic 8051 timing paradigm, the timer increment frequency is mathematically synchronized to one full machine cycle, which inherently constitutes 12 distinct oscillator periods. Thus, the effective clock rate is exactly F_oscillator / 12. يتم تقسيم تردد الكريستالة الأساسي على 12 لإنتاج النبضات التي تزيد من قيمة المؤقت."
  },
  {
    category: "Quiz 2026",
    text: "The GATE bit in TMOD allows the timer to be controlled by an external interrupt pin.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Setting the GATE bit to 1 subjects the timer's run-control logic to an external hardware condition. Specifically, the timer will only increment if both the internal TRx bit is set AND the corresponding external interrupt pin (INT0/INT1) is driven logically High. هذه الميزة حاسمة في قياس عرض النبضات الخارجية (Pulse Width Measurement) بدقة متناهية عبر الهاردوير."
  }
];
