const lec05Data = [
  {
    category: "Lecture 05",
    text: "........ is an 8-bit register in which the lower 4 bits are set aside for Timer 0 and the upper 4 bits for Timer 1.",
    options: ["TMOD", "TCON", "SCON", "PCON"],
    correctIndex: 0,
    explanation: "في بنية المتحكم الدقيق 8051 (8051 Microcontroller Architecture)، يُعد مسجل TMOD (Timer Mode Register) مسجلاً بثمانية بتات (8-bit SFR) غير قابل للعنونة على مستوى البت (Non-bit-addressable). يُقسم هذا المسجل هيكلياً إلى نصفين (Nibbles): النصف الأقل أهمية (Lower Nibble) مخصص لضبط أنماط تشغيل Timer 0، والنصف الأكثر أهمية (Upper Nibble) مخصص لـ Timer 1. يتحكم كل نصف في إعدادات البوابات المنطقية (Gate control)، اختيار مصدر النبضات (C/T)، ونمط التشغيل (M1, M0) المحددة لعملية العد المتزامنة (Synchronous Counting)."
  },
  {
    category: "Lecture 05",
    text: "True/False: Both Timer 0 and Timer 1 are 8 bits wide and each is accessed as two separate registers of low byte and high byte.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "المؤقتات في عائلة 8051 مصممة هندسياً كمؤقتات بـ 16 بت (16-bit Timers). نظراً لأن ناقل البيانات الداخلي (Internal Data Bus) ومسجلات المعالجة في 8051 بعرض 8 بتات فقط (8-bit Architecture)، لا يمكن لوحدة الحساب والمنطق (ALU) التعامل مع 16 بت دفعة واحدة. لذلك، يُقسم كل مؤقت فيزيائياً إلى مسجلين من 8 بت: مسجل منخفض (TLx) ومسجل مرتفع (THx) يتم الوصول إليهما بشكل مستقل (Independent SFR Access)."
  },
  {
    category: "Lecture 05",
    text: "When M1=........ and M0=........, the timer operates in 8-bit auto reload mode.",
    options: ["1, 0", "0, 1", "1, 1", "0, 0"],
    correctIndex: 0,
    explanation: "تكوين البتات M1 و M0 في مسجل TMOD يحدد نمط التشغيل (Operating Mode) للمؤقت. عندما تكون القيمة M1=1 و M0=0 (أي النمط 2 أو Mode 2)، يتم تشكيل دائرة المؤقت لتعمل كعداد بـ 8 بتات (TLx) مع خاصية إعادة التحميل التلقائي (Auto-reload). فيزيائياً، يتم تخزين القيمة الابتدائية في المسجل THx، وعند حدوث فيضان (Overflow) في TLx (تجاوز القيمة 0xFF)، تقوم المكونات الصلبة (Hardware) بنسخ قيمة THx إلى TLx في دورة الآلة (Machine Cycle) التالية دون أي تدخل برمجي (Software Intervention)."
  },
  {
    category: "Lecture 05",
    text: "True/False: When the GATE bit is cleared, the timer is enabled only while the INTx pin is high and the TRx control pin is set.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "بت البوابة (GATE bit) يعمل كآلية تحكم عتادية (Hardware Control Mechanism) لتمكين المؤقت. هندسياً، إشارة التمكين للمؤقت تعتمد على بوابة AND منطقية. عندما يُمسح بت GATE (أي GATE = 0)، يتم تمرير إشارة التمكين اعتماداً فقط على حالة البت البرمجي TRx (Timer Run) في مسجل TCON. أما إذا كان GATE = 1، فإن تشغيل المؤقت يصبح مشروطاً بوجود إشارة منطقية مرتفعة (High Level) على طرف المقاطعة الخارجية (External Interrupt Pin INTx) بالإضافة إلى كون TRx=1."
  },
  {
    category: "Lecture 05",
    text: "In Mode 1 programming, when the timer rolls over from FFFFH to 0000, it sets high a flag bit called ........",
    options: ["TF (timer flag)", "IE (interrupt enable)", "RI (receive interrupt)", "EA (external access)"],
    correctIndex: 0,
    explanation: "في نمط التشغيل الأول (Mode 1 - 16-bit Timer)، يبدأ المؤقت بالعد التصاعدي من القيمة المحملة مبدئياً في مسجلي THx و TLx. عند بلوغ أقصى سعة للعداد (Maximum Capacity) وهي FFFF Hexadecimal، فإن النبضة التالية (Next Clock Pulse) ستؤدي إلى تصفير العداد إلى 0000H. هذا الانتقال المفاجئ (Rollover/Overflow) يُحفّز الدائرة المنطقية لتغيير حالة بت علم المؤقت (Timer Flag - TFx) في مسجل TCON إلى مستوى منطقي مرتفع (Logic 1)، مما يُشكل طلب مقاطعة (Interrupt Request) إذا كانت مفعلة."
  },
  {
    category: "Lecture 05",
    text: "To clear the timer 0 run control bit and stop the timer, the correct syntax is ........",
    options: ["TR0 = 0;", "TF0 = 0;", "TCON = 0x00;", "TR1 = 0;"],
    correctIndex: 0,
    explanation: "للتحكم البرمجي المباشر في تشغيل وإيقاف المؤقت 0، يتم تعديل البت TR0 (Timer 0 Run Control Bit) الموجود في مسجل TCON. نظراً لأن TCON مسجل قابل للعنونة على مستوى البت (Bit-addressable SFR)، يمكن للمترجم (Compiler) إرسال تعليمة (CLR TR0) مباشرة لمعالجة هذا البت الفردي. تصفير TR0 يُعطل مرور النبضات (Clock Pulses) إلى مسجلات العداد."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Mode 2, when the TL register rolls from FFH to 0, it is reloaded automatically with the original value kept by the TMOD register.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "في النمط 2 (Mode 2 - Auto-reload)، يعمل المؤقت بـ 8 بتات باستخدام المسجل TLx فقط. آلية إعادة التحميل (Reload Mechanism) مُصممة عتادياً بحيث يتم الاحتفاظ بقيمة البداية (Seed Value) في المسجل THx كعازل (Buffer)، وليس في TMOD (الذي يُعنى فقط بنمط التشغيل). عند فيضان TLx (انتقاله من FFH إلى 00H)، يتم تفريغ محتوى THx مباشرة إلى TLx بواسطة الهاردوير، مما يضمن استمرارية توليد نبضات أو فترات زمنية دقيقة دون تأخير برمجي (Zero Software Latency)."
  },
  {
    category: "Lecture 05",
    text: "The 8051 timers use ........ of the XTAL frequency, regardless of the machine cycle time.",
    options: ["1/12", "1/4", "1/2", "1/16"],
    correctIndex: 0,
    explanation: "في المعمارية الكلاسيكية لـ 8051، تتكون دورة الآلة (Machine Cycle) من 12 دورة مذبذب (Oscillator Periods). وحدة التوقيت الداخلية (Internal Timing Circuit) تحتوي على مقسم تردد عتادي (Hardware Frequency Divider) يقوم بقسمة التردد الكلي للكريستالة (XTAL Frequency) على 12. بالتالي، فإن كل نبضة عد (Count Pulse) تدخل إلى المؤقت تُمثل دورة آلة واحدة، مما يجعل التردد الفعلي للمؤقت يساوي (XTAL / 12)."
  },
  {
    category: "Lecture 05",
    text: "If XTAL = 11.0592 MHz, the timer period is approximately ........",
    options: ["1.085 µs", "1.250 µs", "1.500 µs", "2.000 µs"],
    correctIndex: 0,
    explanation: "يُحسب الزمن الدوري للمؤقت (Timer Period) بناءً على تردد دورة الآلة. رياضياً، بتردد مذبذب XTAL = 11.0592 MHz، يتم حساب تردد المؤقت كالتالي: (11.0592 * 10^6) / 12 = 921.6 kHz. الزمن الدوري (T) هو المقلوب (1 / f)، مما يعطي T = 1 / 921,600 ≈ 1.08506 ميكروثانية (µs). هذا التردد مُختار هندسياً بدقة ليتوافق مع معدلات الباود القياسية (Standard Baud Rates) في الاتصال التسلسلي."
  },
  {
    category: "Lecture 05",
    text: "The ........ bit in the TMOD register decides the source of the clock for the timer.",
    options: ["C/T", "GATE", "M1", "M0"],
    correctIndex: 0,
    explanation: "البت C/T (Counter/Timer) يعمل كمفتاح توجيه (Multiplexer Control) في الدائرة المنطقية للمؤقت. عند تصفير هذا البت (C/T = 0)، يتم توجيه نبضات الساعة الداخلية المتولدة من دورات الآلة (System Clock / 12) إلى العداد، مما يحوله إلى (Timer) لقياس الزمن. أما عند تعيينه (C/T = 1)، فإنه يأخذ النبضات من الأطراف الخارجية (External Pins Tx)، ليعمل كعداد للأحداث الخارجية (Event Counter)."
  },
  {
    category: "Lecture 05",
    text: "True/False: When C/T = 1, the timer is cleared for timer operation and receives input from the internal system clock.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "هذا الادعاء يعكس وظيفة البت C/T بشكل معاكس. من منظور التصميم المنطقي لـ 8051، عندما يتم ضبط البت (C/T = 1)، يتم تفعيل مسار إشارة العداد (Counter Path)، والذي يأخذ النبضات من الدبابيس الخارجية (External Input Pins P3.4 or P3.5). للعمل كمؤقت زمني (Timer) يعتمد على نبضات النظام الداخلية (Internal Machine Cycles)، يجب مسح هذا البت (C/T = 0)."
  },
  {
    category: "Lecture 05",
    text: "Pin 14 (P3.4) is used for ........ and Pin 15 (P3.5) is used for ........",
    options: ["T0 external input, T1 external input", "T1 external input, T0 external input", "INT0 input, INT1 input", "RxD input, TxD output"],
    correctIndex: 0,
    explanation: "في التوزيع القياسي لأطراف المتحكم (Pinout Mapping) لعائلة 8051، تعمل دبابيس المنفذ الثالث (Port 3) بوظائف مزدوجة (Alternate Functions). الدبوس P3.4 مخصص فيزيائياً ليكون مدخل النبضات الخارجي للعداد الأول (T0)، والدبوس P3.5 مخصص للعداد الثاني (T1). عندما يعمل أي منهما في نمط العداد (Counter Mode C/T=1)، تكتشف الدائرة المنطقية الداخلية حواف النزول (Falling Edges) على هذه الدبابيس لزيادة قيمة العداد."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Mode 1, to generate a time delay, you must keep monitoring the TR flag to see if it is raised to get out of the loop.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "عند توليد تأخير زمني ببرمجة الاستقصاء (Polling)، الآلية الصحيحة تعتمد على مراقبة بت الفيضان (Timer Flag - TFx)، وليس بت التشغيل (Timer Run - TRx). البت TRx يتم تعيينه بواسطة المبرمج لبدء تشغيل المؤقت ويبقى ثابتاً. في المقابل، فإن المكونات الصلبة (Hardware) تقوم تلقائياً بتغيير حالة بت TFx من 0 إلى 1 فقط عند حدوث الفيضان (Overflow)، مما يجعله المؤشر الدقيق لانقضاء الفترة الزمنية المطلوبة."
  },
  {
    category: "Lecture 05",
    text: "To set Timer 1 in Mode 2 (8-bit auto-reload), TMOD should be loaded with ........ assuming Timer 0 is not used (0000).",
    options: ["0x20", "0x02", "0x10", "0x01"],
    correctIndex: 0,
    explanation: "يحتوي مسجل TMOD على 8 بتات، حيث تمثل البتات الأربعة العليا (Upper Nibble: Bits 4-7) تكوينات Timer 1. لاختيار النمط 2 (Mode 2)، نضبط M1=1 و M0=0 في النصف العلوي، بينما نبقي GATE=0 و C/T=0. رياضياً: 0010 للقسم العلوي و 0000 للنصف السفلي (بفرض عدم استخدام Timer 0). بالجمع نحصل على العدد الثنائي 00100000، والذي يعادل في النظام الست عشري 0x20."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Mode 2 (8-bit auto-reload), the programmer has to manually reload TH and TL every time the timer rolls over.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الميزة الهندسية المحورية للنمط 2 (Mode 2) هي خاصية إعادة التحميل التلقائي (Auto-reload feature) التي ينفذها العتاد (Hardware). بمجرد حدوث فيضان في المسجل TLx (Overflow)، تتولى بوابات التحكم الداخلية في المعالج نسخ محتوى THx إلى TLx خلال نفس دورة الآلة، مما يقضي على زمن التأخير المرتبط بالبرمجيات (Software Overhead/Latency). بينما في النمط 1، يتوجب على المبرمج إعادة تحميل المسجلين يدوياً."
  },
  {
    category: "Lecture 05",
    text: "The C instruction to wait for Timer 1 to roll over is ........",
    options: ["while(TF1==0);", "while(TR1==0);", "while(TF0==0);", "while(IE==0);"],
    correctIndex: 0,
    explanation: "في بنية التحكم البرمجية بلغة C، يتم تنفيذ حلقة انتظار دائرية (Polling Loop) لفحص حالة بت الفيضان TF1 (Timer 1 Overflow Flag). التعليمة 'while(TF1==0);' تُجبر وحدة المعالجة المركزية (CPU) على البقاء في وضع الخمول المعرفي لهذا السطر حتى تتغير حالة TF1 إلى 1 بواسطة عتاد المؤقت إثر حدوث عملية الفيضان (Rollover)."
  },
  {
    category: "Lecture 05",
    text: "To calculate the initial count value for a delay with 1.085 µs period in Mode 1, we subtract the required counts from ........",
    options: ["65536", "256", "1024", "4096"],
    correctIndex: 0,
    explanation: "النمط 1 يعمل كمؤقت بـ 16 بت (16-bit Timer Mode)، مما يعني قدرة الاستيعاب القصوى للعداد هي 2^16 = 65,536 حالة (من 0000H إلى FFFFH). المؤقت يعد تصاعدياً (Up-counter)، لذا لحساب القيمة الابتدائية (Seed Value)، يجب طرح عدد النبضات المطلوبة (Required Machine Cycles) من السعة القصوى للمؤقت وهي 65536. هذا يضمن أن المؤقت سيصل إلى حالة الفيضان بعد انقضاء الزمن المحدد بالضبط."
  },
  {
    category: "Lecture 05",
    text: "True/False: The 13-bit timer mode is selected when M1=1 and M0=1.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "التكوين M1=1 و M0=1 يُفعل النمط 3 (Mode 3)، وهو نمط المؤقت المنفصل (Split Timer Mode) حيث يعمل Timer 0 كمؤقتين مستقلين بـ 8 بتات، ويتوقف Timer 1 عن العمل بشكل كامل تقريباً في هذا الوضع. لتفعيل النمط ذو 13 بت (13-bit Timer Mode)، يجب ضبط M1=0 و M0=0 (وهو النمط 0 - Mode 0)، والذي يدمج 5 بتات من مسجل THx مع 8 بتات من مسجل TLx، وكان يُستخدم أساساً للتوافق مع المعالجات الأقدم مثل 8048."
  },
  {
    category: "Lecture 05",
    text: "When dealing with Timer 0 Mode 1, after the TF0 flag is raised and the loop is exited, the next necessary software step before clearing TF0 is to ........",
    options: ["Stop the timer by clearing TR0", "Reload TH0 and TL0", "Clear TMOD register", "Enable the global interrupt"],
    correctIndex: 0,
    explanation: "بعد حدوث الفيضان والخروج من حلقة الانتظار (Polling Loop)، فإن أول خطوة حاسمة للحفاظ على الدقة الزمنية (Timing Precision) هي إيقاف المؤقت فوراً عن طريق مسح بت التحكم في التشغيل (TR0 = 0). إذا لم يتم إيقافه، فإن المؤقت سيستمر في العد العشوائي بناءً على النبضات القادمة، مما سيؤدي إلى تلف القيمة الزمنية وإحداث أخطاء تراكمية عند إعادة تحميل القيم الابتدائية للدورة التالية."
  },
  {
    category: "Lecture 05",
    text: "For an 8051 timer, each 16-bit timer is accessed as two separate registers of ........ byte and ........ byte.",
    options: ["low, high", "source, destination", "transmit, receive", "master, slave"],
    correctIndex: 0,
    explanation: "نظراً للقيود المعمارية لوحدة المعالجة ذات الـ 8 بتات (8-bit CPU Architecture)، لا يمتلك الـ 8051 مسجلات مخصصة بحجم 16 بت للعمليات المباشرة. لتمثيل مؤقت ذو 16 بت، يتم استخدام مسجلين بـ 8 بتات (8-bit SFRs) يمثلان هندسياً الـ Low Byte (TLx) و الـ High Byte (THx). تتطلب كتابة أو قراءة قيمة كاملة بـ 16 بت دورتين تعليميتين متعاقبتين (Two Consecutive Instruction Cycles)."
  },
  {
    category: "Lecture 05",
    text: "True/False: To use Timer 0 as an event counter fed from external pin P3.4, TMOD lower 4 bits should have C/T = 0.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "البت C/T (Counter/Timer) هو المحدد الرئيسي لمسار الإشارة. لاستخدام المؤقت كعداد للأحداث (Event Counter) يعتمد على النبضات القادمة من الدبوس الخارجي (P3.4 لـ Timer 0)، يجب توجيه المُجمع (Multiplexer) عبر ضبط البت إلى الحالة المنطقية (C/T = 1). إذا كان البت C/T = 0، فسيستمر العداد في استقبال تردد دورات الآلة الداخلية بدلاً من الأحداث الخارجية."
  },
  {
    category: "Lecture 05",
    text: "In C language for 8051, to load the hex value 4B into TH0, the correct statement is ........",
    options: ["TH0 = 0x4B;", "TMOD = 0x4B;", "TL0 = 0x4B;", "SCON = 0x4B;"],
    correctIndex: 0,
    explanation: "في لغة C الخاصة بالأنظمة المدمجة (Embedded C)، يتم الوصول إلى مسجلات الوظائف الخاصة (SFRs) مثل TH0 كمتغيرات معرفة مسبقاً. الصيغة القياسية لإسناد قيمة ست عشرية (Hexadecimal Assignment) تتطلب البادئة '0x'. لذا، التعليمة 'TH0 = 0x4B;' تنفذ نقلاً صريحاً للقيمة 4B Hex إلى المسجل TH0."
  },
  {
    category: "Lecture 05",
    text: "True/False: In Timer Mode 2, TH holds the value which is to be reloaded into TL each time it overfolws.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "هذا هو الأساس الهندسي للنمط 2 (8-bit Auto-reload). لتقليل العبء على وحدة المعالجة المركزية (CPU Overhead)، تُخصص المعمارية المسجل TLx لعملية العد المباشرة بينما يعمل المسجل THx كذاكرة تخزين مؤقتة (Holding Register/Buffer) ثابتة. عند رصد فيضان (Overflow) في TLx، تتدخل الدائرة العتادية (Hardware Logic) لإعادة نسخ القيمة الابتدائية المحفوظة في THx مباشرة إلى TLx."
  },
  {
    category: "Lecture 05",
    text: "To set both Timer 0 and Timer 1 to operate in 16-bit timer mode (Mode 1), the TMOD register should be loaded with ........",
    options: ["0x11", "0x22", "0x01", "0x10"],
    correctIndex: 0,
    explanation: "إعداد كلا المؤقتين ليعملا في النمط 1 (Mode 1 - 16-bit) كمؤقتات زمنية (C/T=0 و GATE=0) يتطلب وضع النمط الثنائي M1=0 و M0=1. بتطبيق هذا على الجزء السفلي من TMOD (الخاص بـ Timer 0) يعطي القيمة 0001، وعلى الجزء العلوي (الخاص بـ Timer 1) يعطي القيمة 0001. دمج هذين الجزئين (Concatenation) يعطي البايت الكامل 00010001 بالثنائي، والذي يترجم إلى 0x11 في النظام السداسي عشري."
  },
  {
    category: "Lecture 05",
    text: "The start and stop of the timer are controlled by way of software by the ........ bits.",
    options: ["TR0 and TR1", "TF0 and TF1", "M0 and M1", "C/T and GATE"],
    correctIndex: 0,
    explanation: "البتات TRx (Timer Run) الموجودة في مسجل التحكم TCON تُعتبر بمثابة المفاتيح البرمجية (Software Control Switches) للتحكم في تدفق النبضات إلى المؤقتات. عند تنفيذ أمر تعيين للبت (TRx = 1)، يتم تفعيل بوابات التمرير المنطقية (Pass-gates) للبدء في العد، وعند تصفيره (TRx = 0)، تتوقف دورة العد فوراً. هذه البتات قابلة للوصول والعنونة الفردية (Bit-addressable)."
  }
];
