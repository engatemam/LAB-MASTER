const lec05Data = [
  {
    category: "Lecture 05",
    text: "The standard 8051 microcontroller has exactly ........ timers/counters.",
    options: ["One", "Two", "Three", "Four"],
    correctIndex: 1,
    explanation: "الـ 8051 القياسي يحتوي على مؤقتين فقط (Timer 0 و Timer 1)."
  },
  {
    category: "Lecture 05",
    text: "Both Timer 0 and Timer 1 in the 8051 are ........ wide.",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correctIndex: 1,
    explanation: "كل تايمر حجمه 16 بت، ويُقسم إلى مسجلين 8 بت (Low byte و High byte) لأن المعالج 8 بت."
  },
  {
    category: "Lecture 05",
    text: "Which register is used to set the various timer operation modes for both Timer 0 and Timer 1?",
    options: ["TCON", "SCON", "TMOD", "PSW"],
    correctIndex: 2,
    explanation: "مسجل الـ TMOD (Timer Mode) هو المسؤول عن تحديد المود (Mode 0, 1, 2) وهل يعمل كتايمر أم كاونتر."
  },
  {
    category: "Lecture 05",
    text: "In the 8-bit TMOD register, the lower 4 bits are dedicated to ........",
    options: ["Timer 1", "Timer 0", "Serial port", "Interrupts"],
    correctIndex: 1,
    explanation: "الـ 4 بت اللي على اليمين (Lower) مخصصين لـ Timer 0، والـ 4 بت اللي على اليسار (Upper) لـ Timer 1."
  },
  {
    category: "Lecture 05",
    text: "What is the function of the C/T bit in the TMOD register?",
    options: ["It starts and stops the timer", "It selects between Timer mode and Counter mode", "It selects between 8-bit and 16-bit operation", "It clears the timer flag"],
    correctIndex: 1,
    explanation: "إذا كان C/T = 0 يعمل كـ Timer (يعتمد على كلوك المعالج الداخلي)، وإذا كان 1 يعمل كـ Counter (يعد النبضات الخارجية)."
  },
  {
    category: "Lecture 05",
    text: "When the GATE bit in the TMOD register is set to 0, the timer can be started or stopped completely by ........",
    options: ["Hardware only (external INT pin)", "Software only (TR bit)", "Both hardware and software", "It cannot be stopped"],
    correctIndex: 1,
    explanation: "عند GATE=0، التحكم يكون بالكامل للسوفتوير عبر تعليمة (TR0=1 أو TR1=1)."
  },
  {
    category: "Lecture 05",
    text: "If you load the TMOD register with the value 0x20, this configures ........",
    options: ["Timer 0 in Mode 2", "Timer 1 in Mode 2", "Timer 0 in Mode 1", "Timer 1 in Mode 0"],
    correctIndex: 1,
    explanation: "0x20 بالثنائي هي 0010 0000. الجزء الخاص بـ Timer 1 (اليسار) هو 0010. المود بتات هي 10 يعني Mode 2. والـ C/T=0 يعني Timer."
  },
  {
    category: "Lecture 05",
    text: "What value should be loaded into TMOD to configure Timer 0 as a 16-bit Timer (Mode 1) with software control?",
    options: ["0x10", "0x01", "0x02", "0x11"],
    correctIndex: 1,
    explanation: "Timer 0 هو النصف الأيمن. لجعله Mode 1 (01) و Timer (0) و Gate (0)، فالقيمة هي 0000 0001 = 0x01."
  },
  {
    category: "Lecture 05",
    text: "A Machine Cycle in the standard 8051 microcontroller requires ........ clock oscillator periods.",
    options: ["1", "2", "6", "12"],
    correctIndex: 3,
    explanation: "الـ 8051 يقسم تردد الكريستالة الخارجية على 12 لإنتاج دورة آلة واحدة (Machine Cycle)."
  },
  {
    category: "Lecture 05",
    text: "If an 8051 is connected to a 12 MHz crystal, what is the time duration of one Machine Cycle?",
    options: ["1 microsecond", "12 microseconds", "1.085 microseconds", "1 millisecond"],
    correctIndex: 0,
    explanation: "التردد = 12 ميجا هرتز. تردد دورة الآلة = 12/12 = 1 ميجا هرتز. الزمن = مقلوب التردد = 1 مايكروثانية."
  },
  {
    category: "Lecture 05",
    text: "Mode 1 of the 8051 timers is known as the ........ timer/counter mode.",
    options: ["8-bit auto-reload", "13-bit", "16-bit", "Split"],
    correctIndex: 2,
    explanation: "Mode 1 يستخدم المسجلين TH و TL بالكامل ليصبح العداد 16 بت، أي يستطيع العد حتى 65535 (FFFFH)."
  },
  {
    category: "Lecture 05",
    text: "In Mode 1, when the timer counts up from FFFFH and rolls over to 0000H, it ........",
    options: ["Stops automatically", "Sets the Timer Flag (TF) bit to 1", "Resets the microcontroller", "Reloads from TH"],
    correctIndex: 1,
    explanation: "عند الانتقال من أعلى قيمة (FFFF) إلى (0000)، يرتفع علم التايمر (TF) ليعلم المعالج بانتهاء الوقت."
  },
  {
    category: "Lecture 05",
    text: "In Mode 1, after the timer rolls over and the TF flag is set, the timer will automatically reload the initial count value.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "في Mode 1 يجب على المبرمج (السوفتوير) إعادة شحن المسجلات (TH و TL) يدوياً قبل تشغيل التايمر للدورة التالية."
  },
  {
    category: "Lecture 05",
    text: "To clear the Timer 0 flag (TF0) manually in C so the next round can begin, you write ........",
    options: ["TF0 = 1;", "TR0 = 0;", "TF0 = 0;", "TMOD = 0;"],
    correctIndex: 2,
    explanation: "تفريغ الفلاج (مسحه) يتم بإعطائه القيمة 0 (Clear)."
  },
  {
    category: "Lecture 05",
    text: "The line of C code 'while(TF0 == 0);' is used to ........",
    options: ["Wait in an infinite loop until the timer overflows", "Start the timer", "Stop the timer", "Reset the timer"],
    correctIndex: 0,
    explanation: "هذه الحلقة تبقي المعالج منتظراً (Polling) طالما أن العلم TF0 يساوي صفراً، وتكسر الحلقة عند اكتمال العد."
  },
  {
    category: "Lecture 05",
    text: "In Mode 1, if you want to count 10,000 machine cycles, what is the formula to find the initial value to load into TH and TL?",
    options: ["256 - 10000", "65536 + 10000", "65536 - 10000", "10000 / 12"],
    correctIndex: 2,
    explanation: "لأن التايمر يعد تصاعدياً (Count up) حتى 65536، يجب طرح عدد العدادات المطلوبة من الحد الأقصى للحصول على القيمة الابتدائية."
  },
  {
    category: "Lecture 05",
    text: "What control bit is used to START Timer 1?",
    options: ["TF1", "TR1", "GATE", "ET1"],
    correctIndex: 1,
    explanation: "بت الـ TR (Timer Run) هو المسؤول عن بدء الإيقاف. TR1=1 يبدأ العد، TR1=0 يوقف العد."
  },
  {
    category: "Lecture 05",
    text: "Step 1 of programming a timer is ALWAYS to load the TMOD register.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، تحديد المود (TMOD) هي أول خطوة أساسية قبل شحن التايمر أو تشغيله."
  },
  {
    category: "Lecture 05",
    text: "Which mode is historically compatible with older 8048 microcontrollers and uses only 13 bits?",
    options: ["Mode 0", "Mode 1", "Mode 2", "Mode 3"],
    correctIndex: 0,
    explanation: "Mode 0 يسمى الـ 13-bit Mode وتم وضعه للتوافق مع الإصدارات الأقدم."
  },
  {
    category: "Lecture 05",
    text: "When running a timer loop, the step 'TR0 = 0;' means ........",
    options: ["Start Timer 0", "Stop Timer 0", "Clear the overflow flag", "Reset TMOD"],
    correctIndex: 1,
    explanation: "إعطاء TR قيمة صفر يعني إيقاف التايمر عن العد."
  },
  {
    category: "Lecture 05",
    text: "Mode 2 of the 8051 timers is known as the ........ timer/counter mode.",
    options: ["8-bit auto-reload", "13-bit", "16-bit", "Split"],
    correctIndex: 0,
    explanation: "Mode 2 هو وضع الـ 8 بت مع إعادة الشحن التلقائي (Auto-reload)."
  },
  {
    category: "Lecture 05",
    text: "In Mode 2, which register acts as the actual counter that increments with each machine cycle?",
    options: ["TH", "TL", "TMOD", "PC"],
    correctIndex: 1,
    explanation: "في هذا المود، TL هو الذي يقوم بالعد."
  },
  {
    category: "Lecture 05",
    text: "In Mode 2, what is the role of the TH register?",
    options: ["It holds the upper 8 bits of the count", "It holds the reload value that is automatically copied to TL upon overflow", "It acts as a secondary independent timer", "It counts external pulses"],
    correctIndex: 1,
    explanation: "الـ TH وظيفته تخزين 'النسخة الاحتياطية' للقيمة الابتدائية ليضخها أوتوماتيكياً في الـ TL عندما يصل لـ FFH."
  },
  {
    category: "Lecture 05",
    text: "In Mode 2, the programmer does NOT need to reload the initial value into the timer inside the loop.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "هذه هي ميزة Auto-reload، الهاردوير يعيد شحن نفسه دون تدخل برمجي مما يسرع الأداء."
  },
  {
    category: "Lecture 05",
    text: "The maximum number of counts a timer can perform in a single cycle in Mode 2 is ........",
    options: ["128", "256", "1024", "65536"],
    correctIndex: 1,
    explanation: "لأنه 8 بت، 2 أس 8 = 256 (يعد من 0 حتى 255)."
  },
  {
    category: "Lecture 05",
    text: "When writing C code for Keil in Mode 2, if you want the timer to count 23 times, you can simply write 'TH0 = -23;'.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "المترجم الذكي (Keil) سيحسب المكمل الثنائي (Two's complement) للرقم السالب -23 وسيضع القيمة الصحيحة (256-23) في TH."
  },
  {
    category: "Lecture 05",
    text: "In Mode 2, when the TL register rolls over from FFH to 00H, the TF flag is NOT set.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ TF يرتفع (TF=1) في كل المودات عند حدوث الـ Overflow، لكي يعلم المعالج بانتهاء العد."
  },
  {
    category: "Lecture 05",
    text: "To create a 500 millisecond delay using Mode 2 (which can max out at roughly 256 us), a common programming technique is to ........",
    options: ["Change the crystal frequency", "Place the timer code inside a software 'for' loop that repeats multiple times", "Connect Timer 0 and Timer 1 in series", "Use Mode 0 instead"],
    correctIndex: 1,
    explanation: "نظراً لسعته الصغيرة (256)، نضع التايمر داخل حلقة تكرارية (Loop) ليعد الفترات الصغيرة مرات عديدة حتى يكمل الـ 500 ملي ثانية."
  },
  {
    category: "Lecture 05",
    text: "Mode 2 is frequently used for setting the Baud Rate of the 8051 serial communication.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "دقة التكرار التلقائي دون الاعتماد على تأخير السوفتوير يجعل Mode 2 مثالياً لضبط توقيتات السيريال بدقة."
  },
  {
    category: "Lecture 05",
    text: "If you load 'TH1 = 200;' in Mode 2, the timer will count ........ machine cycles before overflow.",
    options: ["200", "56", "255", "65336"],
    correctIndex: 1,
    explanation: "التايمر يعد تصاعدياً من القيمة المحملة حتى أقصاها. 256 - 200 = 56 دورة."
  },
  {
    category: "Lecture 05",
    text: "When the TMOD C/T bit is set to 1, the timer operates as a ........",
    options: ["Timer", "Counter", "Baud rate generator", "Split timer"],
    correctIndex: 1,
    explanation: "C/T = 1 يعني أن المصدر أصبح خارجياً وتعمل الدائرة كـ Counter."
  },
  {
    category: "Lecture 05",
    text: "A Timer counts internal clock pulses, while a Counter counts ........",
    options: ["Software delays", "Internal RAM bytes", "External events or pulses", "The number of instructions executed"],
    correctIndex: 2,
    explanation: "الكاونتر يُستخدم لعد الأشياء المادية، مثل حساس مرور منتجات على سير."
  },
  {
    category: "Lecture 05",
    text: "Which pins on the 8051 are designated as the external inputs for Counter 0 and Counter 1?",
    options: ["P0.0 and P0.1", "P1.0 and P1.1", "P3.4 (T0) and P3.5 (T1)", "P2.4 and P2.5"],
    correctIndex: 2,
    explanation: "T0 هو البورت P3.4، و T1 هو البورت P3.5. وتعتبر هذه الوظيفة البديلة لمنفذ 3."
  },
  {
    category: "Lecture 05",
    text: "To use Pin 3.4 (T0) as a counter input, you must first configure it as an input port by writing a '0' to it.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "في 8051، لتهيئة منفذ كـ Input يجب كتابة '1' وليس '0' (مثال: P3^4 = 1;)."
  },
  {
    category: "Lecture 05",
    text: "If you configure Timer 0 as a counter in Mode 1, it will be able to count up to ........ external pulses before an overflow occurs.",
    options: ["256", "65536", "12", "1000"],
    correctIndex: 1,
    explanation: "كونه Counter يغير فقط (مصدر النبضات)، لكن الـ Mode (سواء Mode 1 أو 2) يحدد السعة. Mode 1 سعته 16 بت أي 65536."
  },
  {
    category: "Lecture 05",
    text: "When operating as a counter, the increment of the TH and TL registers happens on the ........ transition of the external pulse.",
    options: ["Rising edge (0 to 1)", "Falling edge (1 to 0)", "Both edges", "Steady High state"],
    correctIndex: 1,
    explanation: "دقة فنية: كاونتر الـ 8051 يستجيب لتغير النبضة من عالي إلى منخفض (High to Low)."
  },
  {
    category: "Lecture 05",
    text: "You can display the current count value of a counter continuously on Port 1 by writing 'P1 = TL0;' inside the main loop.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، المسجلات TL0 و TH0 يمكن قراءتها في أي وقت وعرض محتواها على ليدات أو شاشات عبر أي بورت."
  },
  {
    category: "Lecture 05",
    text: "TMOD value 0x50 configures Timer 1 as an 8-bit auto-reload counter.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "0x50 بالثنائي هو 0101 0000. البت C/T هو 1 (يعني Counter). وبتات المود هي 01 (يعني Mode 1 وهو 16-bit). إذن هو 16-bit Counter وليس 8-bit auto-reload."
  },
  {
    category: "Lecture 05",
    text: "TMOD value 0x60 configures Timer 1 as an 8-bit auto-reload counter.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "0x60 بالثنائي هو 0110 0000. البت C/T = 1 (Counter). بتات المود = 10 (Mode 2 يعني 8-bit auto-reload). الجملة صحيحة 100%."
  },
  {
    category: "Lecture 05",
    text: "If C/T = 1, the timer completely ignores the system crystal frequency (oscillator).",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "برغم أن نبضات العد تأتي من الخارج، إلا أن المايكروكنترولر ما زال يعتمد على الكريستالة الداخلية لعملية (Sampling) وتتبع النبضة الخارجية، لذا سرعة الكاونتر محدودة بتردد النظام."
  },
  {
    category: "Lecture 05",
    text: "You want to create a 25 ms delay. The machine cycle is 1 us. You decide to use Mode 1. The number of counts needed is ........",
    options: ["25000", "25", "250", "65536"],
    correctIndex: 0,
    explanation: "25 ملي ثانية = 25000 مايكروثانية. بما أن دورة الآلة 1 مايكرو، إذن نحتاج 25000 عدة."
  },
  {
    category: "Lecture 05",
    text: "Continuing the previous question (25000 counts needed), what is the formula to find the Initial Value to load into TH and TL?",
    options: ["25000 - 1", "65536 + 25000", "65536 - 25000", "256 - 25000"],
    correctIndex: 2,
    explanation: "في Mode 1، نطرح العدد المطلوب من الـ Max وهو 65536."
  },
  {
    category: "Lecture 05",
    text: "Why do we usually subtract a slightly smaller value than the exact mathematical count (e.g. asking the timer to count 25000 instead of 25050) when generating delays in C?",
    options: ["Because C variables can't hold exact numbers", "To compensate for the extra machine cycles consumed by the C loop overhead (e.g. 'while' instructions)", "To prevent the microcontroller from overheating", "Because the crystal is always slower than advertised"],
    correctIndex: 1,
    explanation: "تعليمات لغة السوفتوير كـ while وغيرها تستهلك دورات آلة أثناء التنفيذ، لذلك ننقص من حمل التايمر قليلاً لتعويض هذا الوقت ليصبح التأخير دقيقاً."
  },
  {
    category: "Lecture 05",
    text: "In C programming for 8051, if the calculated delay initial value is 40536, what is the best way to load this into TH and TL?",
    options: ["TH = 405; TL = 36;", "TH = 40536 >> 8; TL = 40536 & 0xFF;", "TH = 40; TL = 536;", "TMOD = 40536;"],
    correctIndex: 1,
    explanation: "بالـ C، نقوم بإزاحة الرقم لليمين بمقدار 8 للحصول على الـ High byte، ونعمل عملية AND مع 0xFF للحصول على الـ Low byte."
  },
  {
    category: "Lecture 05",
    text: "To toggle a bit named 'LED' correctly inside a timer delay function, you should use: LED = ~LED;",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "علامة الـ Tilde (~) تعكس البت (من 0 لـ 1 والعكس) بشكل فعال."
  },
  {
    category: "Lecture 05",
    text: "If the GATE bit is 1, Timer 0 will run ONLY if ........",
    options: ["TR0 = 1 AND external INT0 pin is High", "TR0 = 1 OR external INT0 pin is High", "TR0 = 0 AND TF0 = 1", "External INT0 pin is Low"],
    correctIndex: 0,
    explanation: "الـ GATE يربط تشغيل التايمر بهاردوير خارجي. التايمر لن يعمل إلا بتوفر شرطين (AND): أمر برمجي TR0=1، وإشارة موجبة من هاردوير خارجي على طرف INT0."
  },
  {
    category: "Lecture 05",
    text: "The 'GATE' feature is highly useful for measuring the duration of an external pulse.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، فعندما تأتي نبضة خارجية على طرف INT0 سيبدأ التايمر بالعد، وبمجرد اختفائها سيتوقف التايمر. قيمة التايمر تمثل عرض النبضة الزمني بدقة!"
  },
  {
    category: "Lecture 05",
    text: "In Mode 3 (Split Timer Mode), Timer 0 is split into two independent 8-bit timers.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Mode 3 يقسم تايمر 0 إلى (TL0 كتايمر/كاونتر) و (TH0 كتايمر فقط). بينما يتوقف Timer 1 عن العمل العادي ويمكن استخدامه للسيريال."
  },
  {
    category: "Lecture 05",
    text: "When converting the decimal number 23042 into Hex for Timer 0, it becomes 0x5A02. Which part goes into TL0?",
    options: ["5A", "02", "5A02", "None"],
    correctIndex: 1,
    explanation: "الـ 02 هي الجزء الأصغر (Lower Byte) فتذهب إلى الـ TL0. والـ 5A هي الأكبر تذهب لـ TH0."
  },
  {
    category: "Lecture 05",
    text: "A major advantage of Mode 2 (auto-reload) over Mode 1 is that Mode 2 requires much less CPU attention to reload the count values.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "الـ Auto-reload يتم عن طريق الهاردوير داخلياً بلمح البصر دون حاجة لتوقف السوفتوير وإعطاء أوامر، مما يوفر وقت الـ CPU."
  }
];
