const lec02Data = [
  {
    category: "Lecture 02",
    text: "In a computer system, the phase where an instruction is read from memory and decoded is called the ........ phase.",
    options: ["Execute", "Fetch", "Write-back", "Interpret"],
    correctIndex: 1,
    explanation: "المعالج يمر بدورتين أساسيتين: Fetch (لجلب التعليمة من الذاكرة وفك شفرتها) و Execute (لتنفيذها)."
  },
  {
    category: "Lecture 02",
    text: "System software and application software are the two major categories of software used in computers.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "السوفتوير ينقسم لنوعين رئيسيين: System (مثل أنظمة التشغيل) و Application (مثل البرامج العادية كالوورد)."
  },
  {
    category: "Lecture 02",
    text: "The ALU is the part of the processor that handles memory fetching.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ ALU (Arithmetic Logic Unit) مخصصة فقط للعمليات الحسابية والمنطقية، وليس لجلب الذاكرة."
  },
  {
    category: "Lecture 02",
    text: "In the memory hierarchy, which cache level usually consists of separated instruction and data caches?",
    options: ["L1 cache", "L2 cache", "L3 cache", "Main memory"],
    correctIndex: 0,
    explanation: "الكاش من المستوى الأول (L1) ينقسم عادة إلى جزء مخصص للتعليمات (Instruction) وجزء للبيانات (Data)."
  },
  {
    category: "Lecture 02",
    text: "The L2 on-chip cache is typically shared by both instructions and data.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "على عكس الـ L1، فإن الـ L2 تكون ذاكرة مشتركة للاثنين."
  },
  {
    category: "Lecture 02",
    text: "The ........ is an abstract interface between the hardware and the lowest-level software that encompasses instructions, registers, and memory access.",
    options: ["ALU", "Operating System", "Instruction Set Architecture (ISA)", "I/O Interface"],
    correctIndex: 2,
    explanation: "الـ ISA هي حلقة الوصل (الوسيط) بين الهاردوير والسوفتوير، وتحدد كيف سيفهم المعالج لغة الآلة (Assembly)."
  },
  {
    category: "Lecture 02",
    text: "The 8051 microcontroller was originally introduced by Atmel in 1981.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تم ابتكار الـ 8051 بواسطة شركة Intel وليس Atmel (رغم أن Atmel تصنع نسخاً منه الآن مثل AT89C51)."
  },
  {
    category: "Lecture 02",
    text: "The original MCS-51 (8051) features ........ of on-chip ROM.",
    options: ["128 bytes", "4K bytes", "64K bytes", "8K bytes"],
    correctIndex: 1,
    explanation: "النسخة القياسية من 8051 تمتلك 4KB من ذاكرة الـ ROM الداخلية، و 128 Bytes للـ RAM."
  },
  {
    category: "Lecture 02",
    text: "How many interrupt sources does the standard 8051 have?",
    options: ["2", "4", "5", "6"],
    correctIndex: 3,
    explanation: "عدد مصادر المقاطعة في الـ 8051 القياسي هو 6."
  },
  {
    category: "Lecture 02",
    text: "The 8751 microcontroller version uses a Flash memory that can be erased electrically in seconds.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "إصدار 8751 يستخدم UV-EPROM والتي تتطلب التعرض للأشعة فوق البنفسجية لمدة 20 دقيقة لمسحها. بينما الـ AT89C51 هو الذي يستخدم الـ Flash memory."
  },
  {
    category: "Lecture 02",
    text: "AT89C51 from Atmel Corporation features UV-EPROM memory.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "كما وضحنا، شريحة Atmel (حرف C يعبر عن CMOS و Flash) تستخدم Flash memory وتُمسح كهربياً قبل الكتابة."
  },
  {
    category: "Lecture 02",
    text: "The most common package for the 8051 microcontroller provides ........ pins.",
    options: ["20", "28", "32", "40"],
    correctIndex: 3,
    explanation: "الشريحة القياسية للـ 8051 تأتي بـ 40 طرفاً (Pins) في شكل DIP أو QFP."
  },
  {
    category: "Lecture 02",
    text: "The RESET pin of the 8051 is an active ........ input.",
    options: ["High", "Low", "Falling edge", "Rising edge"],
    correctIndex: 0,
    explanation: "طرف الـ RESET في الـ 8051 يعمل عند تطبيق جهد عالي (Active High)."
  },
  {
    category: "Lecture 02",
    text: "For the RESET input to be effective, the high pulse must be maintained for a minimum of ........",
    options: ["1 machine cycle", "2 machine cycles", "4 clock cycles", "12 clock cycles"],
    correctIndex: 1,
    explanation: "من التريكات الهامة جداً؛ يجب أن يستمر النبض العالي لدورتي آلة (2 Machine cycles) على الأقل لعمل إعادة ضبط (Reset)."
  },
  {
    category: "Lecture 02",
    text: "The EA (External Access) pin must be connected to ........ if the internal program ROM is to be used.",
    options: ["Ground (Low)", "VCC (High)", "ALE", "PSEN"],
    correctIndex: 1,
    explanation: "طرف الـ EA يجب أن يُرفع للـ VCC (High) لتفعيل استخدام الـ ROM الداخلية. إذا وُصل بالأرضي (Low) سيتجاهل الذاكرة الداخلية ويبحث عن خارجية."
  },
  {
    category: "Lecture 02",
    text: "........ stands for Program Store Enable and is connected to the OE pin of an external ROM.",
    options: ["EA", "ALE", "PSEN", "TXD"],
    correctIndex: 2,
    explanation: "طرف الـ PSEN (Program Store Enable) يُستخدم لتمكين قراءة كود البرنامج من الـ ROM الخارجية."
  },
  {
    category: "Lecture 02",
    text: "The ALE (Address Latch Enable) signal is used to de-multiplex the address and data lines of ........",
    options: ["Port 0", "Port 1", "Port 2", "Port 3"],
    correctIndex: 0,
    explanation: "منفذ Port 0 وظيفته مزدوجة (يحمل العناوين A0-A7 والبيانات D0-D7). طرف ALE هو الذي يفصل بينهما."
  },
  {
    category: "Lecture 02",
    text: "When ALE = 0, Port 0 provides the lower 8 bits of the address (A0-A7).",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تريكة امتحانات! عندما ALE=0، فإن Port 0 يوفر 'البيانات' D0-D7. وعندما ALE=1، يوفر 'العنوان' A0-A7."
  },
  {
    category: "Lecture 02",
    text: "The recommended crystal frequency for 8051 systems requiring standard serial baud rates (e.g., 9600 bps) is ........",
    options: ["12.000 MHz", "11.0592 MHz", "16.000 MHz", "8.000 MHz"],
    correctIndex: 1,
    explanation: "الرقم 11.0592 مهم جداً لأنه يقبل القسمة للحصول على معدل نقل بيانات (Baud rate) قياسي وخالي من أخطاء النقل في الـ Serial Communication."
  },
  {
    category: "Lecture 02",
    text: "Which of the following registers in the 8051 is a 16-bit register?",
    options: ["Accumulator (A)", "R0", "B register", "DPTR (Data Pointer)"],
    correctIndex: 3,
    explanation: "جميع مسجلات الـ 8051 حجمها 8 بت، باستثناء مسجلين هما الـ DPTR والـ PC (حجمهما 16 بت)."
  },
  {
    category: "Lecture 02",
    text: "The Program Counter (PC) is an 8-bit register.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ PC في الـ 8051 هو 16-bit register ليستطيع العنونة حتى 64 كيلو بايت (من 0000H إلى FFFFH)."
  },
  {
    category: "Lecture 02",
    text: "The 8051 family can access a maximum of ........ bytes of program memory (ROM).",
    options: ["4K", "16K", "32K", "64K"],
    correctIndex: 3,
    explanation: "لأن عداد البرنامج (PC) حجمه 16 بت، فإن أقصى ذاكرة يمكن الوصول إليها هي 2 أس 16 = 65,536 بايت = 64KB."
  },
  {
    category: "Lecture 02",
    text: "Some versions of the 8051, like the 8052, offer ........ bytes of internal data memory (RAM).",
    options: ["128", "256", "512", "1024"],
    correctIndex: 1,
    explanation: "في حين أن الـ 8051 القياسي به 128 بايت، فإن عائلة 8052 المحدثة تمتلك 256 بايت."
  },
  {
    category: "Lecture 02",
    text: "The 128 bytes of internal RAM in the 8051 are divided into three main functional parts: Register banks, Bit-addressable area, and ........",
    options: ["Flash memory", "Scratch-pad area", "SFR area", "Stack pointer area"],
    correctIndex: 1,
    explanation: "الجزء الثالث هو الـ Scratch-pad (من 30H لآخر الذاكرة 7FH) ويستخدم للاستخدامات العامة وتخزين المتغيرات."
  },
  {
    category: "Lecture 02",
    text: "The Register Banks area in the 8051 RAM spans from address ........",
    options: ["00H to 0FH", "00H to 1FH", "20H to 2FH", "30H to 7FH"],
    correctIndex: 1,
    explanation: "مساحة البنوك تأخذ 32 بايت (من 00H حتى 1FH)."
  },
  {
    category: "Lecture 02",
    text: "The 8051 has ........ Register Banks.",
    options: ["2", "4", "8", "16"],
    correctIndex: 1,
    explanation: "يحتوي على 4 بنوك (Bank 0, Bank 1, Bank 2, Bank 3)، وكل بنك يحتوي على 8 مسجلات من R0 إلى R7."
  },
  {
    category: "Lecture 02",
    text: "In the 8051, multiple register banks can be selected to be active at the exact same time.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "بنك واحد فقط هو الذي يكون 'نشطاً' (Active) في المرة الواحدة، ويتم اختياره عبر مسجل الـ PSW."
  },
  {
    category: "Lecture 02",
    text: "Which register bank uses the exact same RAM space that is initially designated for the Stack?",
    options: ["Bank 0", "Bank 1", "Bank 2", "Bank 3"],
    correctIndex: 1,
    explanation: "الـ Stack Pointer (SP) يبدأ افتراضياً بـ 07H وبالتالي التخزين يبدأ من 08H، وهو نفس العنوان الذي يبدأ منه Bank 1. لذلك يحدث تداخل إذا لم يغير المبرمج مكان الـ Stack."
  },
  {
    category: "Lecture 02",
    text: "The Bit-Addressable area in the 8051 RAM starts at address ........ and ends at 2FH.",
    options: ["00H", "10H", "20H", "30H"],
    correctIndex: 2,
    explanation: "المساحة المخصصة للعنونة بالبت (Bit-addressable) تقع بين العناوين 20H إلى 2FH."
  },
  {
    category: "Lecture 02",
    text: "The Bit-Addressable area allows for economical usage of system memory when storing Boolean variables.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، لأنك بدلاً من حجز 'بايت' كامل لتخزين متغير قيمته (0 أو 1)، يمكنك حجز 'بت' واحد فقط."
  },
  {
    category: "Lecture 02",
    text: "The Special Function Registers (SFRs) are located in the upper 128 bytes of RAM space in 8052 (from 80H to FFH). Out of these 128 locations, only ........ locations are used in MCS-51.",
    options: ["16", "21", "32", "64"],
    correctIndex: 1,
    explanation: "برغم تخصيص 128 بايت للـ SFRs، الـ 8051 الأصلي يستخدم منها 21 مكاناً فقط (مثل A, B, PSW, TMOD, SCON... إلخ)."
  },
  {
    category: "Lecture 02",
    text: "Port 0 requires an external ........ resistor network when used as an input/output port.",
    options: ["10K ohm pull-down", "10K ohm pull-up", "1K ohm pull-up", "Capacitor"],
    correctIndex: 1,
    explanation: "منفذ P0 مُصمم داخلياً كـ (Open Drain)، لذا لابد من إضافة مقاومة سحب لأعلى (Pull-up Resistor) بقيمة 10K أوم ليعمل بشكل سليم كـ I/O."
  },
  {
    category: "Lecture 02",
    text: "Port 1 is the only port in the 8051 that does not have an alternate (dual) function.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "P0 و P2 يستخدمان للذاكرة الخارجية، و P3 يستخدم للمقاطعات والسيريال، بينما P1 مخصص فقط للـ I/O العادي."
  },
  {
    category: "Lecture 02",
    text: "Port 2 requires an external pull-up resistor to function properly as an I/O port.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Port 0 هو الوحيد الذي يحتاج لمقاومة خارجية. Port 1 و Port 2 و Port 3 يمتلكون مقاومات Pull-up داخلية (Internal Pull-up)."
  },
  {
    category: "Lecture 02",
    text: "In an 8051-based system with external memory connections, which port provides the upper 8 bits of the 16-bit address (A8 – A15)?",
    options: ["Port 0", "Port 1", "Port 2", "Port 3"],
    correctIndex: 2,
    explanation: "عند توصيل ذاكرة خارجية، P0 يوفر (A0-A7 مع D0-D7)، بينما P2 يوفر (A8-A15) ولا يمكن استخدامه كـ I/O عادي حينها."
  },
  {
    category: "Lecture 02",
    text: "Port 3 has an additional function of providing important signals such as Interrupts, Timers, and Serial communications.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "P3 يعتبر المنفذ 'الجوكر' لأنه يحمل أطراف الـ RXD, TXD, INT0, INT1, T0, T1 بالإضافة لـ WR و RD."
  },
  {
    category: "Lecture 02",
    text: "If you want to interface an external ROM and external RAM to an 8051, which combination of pins will definitely lose their simple I/O functionality?",
    options: ["P1 and P3", "P0 and P2", "P0 and P1", "P2 and P3"],
    correctIndex: 1,
    explanation: "P0 و P2 سيتم استخدامهما بالكامل لنقل العناوين والبيانات (Address/Data bus) للذاكرة الخارجية ولن تستطيع استخدامهما لتوصيل ليدات أو أزرار."
  },
  {
    category: "Lecture 02",
    text: "The CPU cache memory size is significantly larger than the main RAM size, which makes it faster.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "حجم الـ Cache 'أصغر' بكثير جداً من الـ RAM، ولكنه 'أسرع' لاقترابه من الـ CPU واستخدام تقنية SRAM بدلاً من DRAM."
  },
  {
    category: "Lecture 02",
    text: "The Scratch-pad area in the internal RAM of the 8051 starts at address ........",
    options: ["00H", "20H", "30H", "80H"],
    correctIndex: 2,
    explanation: "مساحة الـ Scratch-pad تبدأ من 30H وتمتد حتى آخر الـ RAM عند 7FH."
  },
  {
    category: "Lecture 02",
    text: "In the 8051, to reset the microcontroller, the RESET pin must receive a low pulse.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الدكتور يحب هذه التريكة. الـ RESET هو Active HIGH (يحتاج لنبضة High) وليس Low."
  },
  {
    category: "Lecture 02",
    text: "What is the status of the ALE pin when the 8051 is outputting address A0-A7 on Port 0?",
    options: ["ALE = 0", "ALE = 1", "High-Impedance", "Floating"],
    correctIndex: 1,
    explanation: "لكي يلتقط الـ Latch الخارجي العنوان (Address)، يجب أن تكون النبضة ALE = 1."
  },
  {
    category: "Lecture 02",
    text: "The 8051 microcontroller is inherently a Von Neumann architecture device.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ 8051 مبني على معمارية هارفارد (Harvard) حيث توجد ذاكرتين منفصلتين للكود والبيانات."
  },
  {
    category: "Lecture 02",
    text: "During the Execute phase of a CPU cycle, the processor ........",
    options: ["Reads instruction from memory", "Decodes the instruction", "Carries out the operations specified by the instruction", "Reboots the system"],
    correctIndex: 2,
    explanation: "في مرحلة التنفيذ (Execute) يقوم المعالج بإجراء العملية الحسابية أو نقل البيانات بناءً على التعليمة التي تم جلبها (Fetch)."
  },
  {
    category: "Lecture 02",
    text: "The 8051 has 4 I/O ports, meaning it has a total of 16 I/O pins.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "كل منفذ (Port) يحتوي على 8 أطراف. 4 منافذ × 8 أطراف = 32 طرف (32 pins)."
  },
  {
    category: "Lecture 02",
    text: "To use external program memory instead of the 4KB internal ROM in an 8051, the EA pin must be ........",
    options: ["Left unconnected", "Tied to VCC", "Tied to Ground", "Connected to ALE"],
    correctIndex: 2,
    explanation: "لتعطيل الـ ROM الداخلي وإجبار المتحكم على القراءة من ذاكرة خارجية دائماً، نصل الـ EA بالأرضي (External Access)."
  },
  {
    category: "Lecture 02",
    text: "Which register is specifically utilized along with the Accumulator for 'Multiplication' and 'Division'?",
    options: ["R0", "PSW", "DPTR", "B register"],
    correctIndex: 3,
    explanation: "مسجل الـ B لا يُستخدم إلا كمساعد مع الـ A في عمليتي MUL AB و DIV AB."
  },
  {
    category: "Lecture 02",
    text: "The Bit-Addressable area (20H to 2FH) contains exactly ........ individually addressable bits.",
    options: ["16", "32", "64", "128"],
    correctIndex: 3,
    explanation: "المساحة تتكون من 16 بايت (من 20H لـ 2FH). وكل بايت فيه 8 بت. 16 × 8 = 128 بت."
  },
  {
    category: "Lecture 02",
    text: "The L3 cache is always placed 'on-chip' inside the CPU in older systems.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تاريخياً، الـ L3 cache تكون Off-chip (خارج الشريحة)، بينما الـ L1 والـ L2 غالباً On-chip."
  },
  {
    category: "Lecture 02",
    text: "In an 8051 microcontroller, the Program Counter (PC) stores the data address of the currently executing arithmetic operation.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ PC مسؤوليته فقط تخزين عنوان 'التعليمة' القادمة في الـ ROM، ولا علاقة له بعناوين البيانات في الـ RAM."
  },
  {
    category: "Lecture 02",
    text: "When port 0 is used as a simple output port (without external memory), why must you add a 10K ohm pull-up resistor?",
    options: ["To prevent short circuits", "Because P0 is an open-drain and cannot output a Logic 1 on its own", "To reduce the clock frequency", "To activate the ALE signal"],
    correctIndex: 1,
    explanation: "تصميم الترانزستورات داخل P0 هو من نوع (Open Drain) وبالتالي يفتقر للترانزستور المسئول عن إخراج الجهد العالي (Logic 1)، لذلك نحتاج المقاومة لتوفير هذا الجهد من الـ VCC."
  }
];
