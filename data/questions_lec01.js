const lec01Data = [
  {
    category: "Lecture 01",
    text: "An analog signal can only take on one value from a finite set of possible values at a given time.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "هذا تعريف الـ Digital Signal، بينما الإشارة التماثلية (Analog) تأخذ قيماً لا نهائية ضمن نطاق مستمر."
  },
  {
    category: "Lecture 01",
    text: "In the PCB Design Flow, the step that comes immediately after 'Concept / System Specification' is ........",
    options: ["PCB Layout", "CAM Files", "Capture (Simulation)", "Populate"],
    correctIndex: 2,
    explanation: "بناءً على الفلوشارت، بعد تحديد المواصفات نقوم بعمل الـ Capture أو الـ Simulation للتأكد من الدائرة قبل تحويلها إلى Layout."
  },
  {
    category: "Lecture 01",
    text: "The thin polymer layer deposited on top and bottom layers of a PCB to protect from oxidation is called ........",
    options: ["Silkscreen", "Solder mask", "Vias", "Overlay"],
    correctIndex: 1,
    explanation: "السولدر ماسك (غالباً الطبقة الخضراء) يحمي النحاس من الأكسدة ويمنع تلامس اللحام (Solder bridges)."
  },
  {
    category: "Lecture 01",
    text: "The layer applied on top of the solder resist to print component names and outlines is called the Silkscreen.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "السيلك سكرين (الطباعة البيضاء) تُستخدم لكتابة أسماء المكونات وإطارها الخارجي."
  },
  {
    category: "Lecture 01",
    text: "A laboratory power supply usually operates ONLY in constant-voltage mode.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "العديد من أجهزة الباور سبلاي المعملية تدعم وضعين: Constant-voltage و Constant-current."
  },
  {
    category: "Lecture 01",
    text: "Which of the following instruments is REQUIRED if you want to create a completely custom waveform with a DC offset?",
    options: ["Standard Function Generator", "Oscilloscope", "Multimeter", "Arbitrary Waveform Generator (AWG)"],
    correctIndex: 3,
    explanation: "مولد الدوال العادي يولد أشكالاً قياسية فقط، بينما الـ AWG يمكن برمجته لتوليد أي إشارة مخصصة."
  },
  {
    category: "Lecture 01",
    text: "........ is a rectangular plastic board with tiny holes to easily insert electronic components to prototype a circuit without soldering.",
    options: ["Breadboard", "PCB", "Stencil", "LCC"],
    correctIndex: 0,
    explanation: "التيست بورد (Breadboard) تُستخدم للتجربة المؤقتة بدون لحام."
  },
  {
    category: "Lecture 01",
    text: "In soldering, ........ is used to clean the metal surfaces and prevent oxidation during the heating process.",
    options: ["Etching acid", "Flux", "Solder mask", "Stencil"],
    correctIndex: 1,
    explanation: "الفلاكس (Flux) أو مساعد اللحام ينظف السطح ويساعد في انسياب القصدير ويمنع الأكسدة."
  },
  {
    category: "Lecture 01",
    text: "The 7400 TTL logic family is typically powered off of a +12V supply.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "عائلة הـ TTL تعمل دائماً بجهد +5V وليس 12V."
  },
  {
    category: "Lecture 01",
    text: "Which IC package type has its leads turned under the package in a J-type shape?",
    options: ["SSOP", "PLCC", "LQFP", "FBGA"],
    correctIndex: 1,
    explanation: "الـ Plastic-Leaded Chip Carrier (PLCC) تتميز بأطراف مطوية للداخل على شكل حرف J لتوفير المساحة."
  },
  {
    category: "Lecture 01",
    text: "For a circuit with the same number of pins, a dual in-line package (DIP) is much smaller than a surface-mounted package.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "العكس هو الصحيح. الـ SMD أصغر بكثير من الـ DIP لنفس عدد الأطراف."
  },
  {
    category: "Lecture 01",
    text: "In an IC package, pin numbering typically goes ........ starting from the notch or dot.",
    options: ["Clockwise", "Counter-Clockwise", "Top to Bottom", "Randomly"],
    correctIndex: 1,
    explanation: "يتم عد البنّات دائماً عكس عقارب الساعة (Counter-Clockwise) بداية من النقطة الدليلية (Notch)."
  },
  {
    category: "Lecture 01",
    text: "One of the main advantages of SMT (Surface Mount Technology) is its high power handling capability.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تحمل الطاقة العالية هو ميزة لمكونات الـ Through-hole، بينما الـ SMT تعاني من Lower power handling capability بسبب صغر حجمها وضعف تشتيتها للحرارة."
  },
  {
    category: "Lecture 01",
    text: "During SMT assembly, Solder paste is applied to the PCB using a ........ on an angle range from 45°-60°.",
    options: ["Vacuum nozzle", "Gripper", "Squeegee", "Soldering iron"],
    correctIndex: 2,
    explanation: "يتم فرد معجون اللحام فوق الاستنسل باستخدام الـ Squeegee (الممسحة)."
  },
  {
    category: "Lecture 01",
    text: "An SMD resistor labeled '103' has a value of 103 ohms.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الرقم الأخير (3) يمثل عدد الأصفار، أي 10 وأمامها 3 أصفار = 10,000 أوم = 10 كيلو أوم."
  },
  {
    category: "Lecture 01",
    text: "An SMD resistor labeled '4R7' has a value of ........",
    options: ["47 ohms", "4.7 ohms", "470 ohms", "4.7 K ohms"],
    correctIndex: 1,
    explanation: "حرف R يمثل العلامة العشرية (Decimal point)، وبالتالي 4R7 تعني 4.7 أوم."
  },
  {
    category: "Lecture 01",
    text: "........ failures in electronics due to ESD are temporary failures caused by corruption of data, and the device can be recovered.",
    options: ["Hard", "Catastrophic", "Soft", "Latent"],
    correctIndex: 2,
    explanation: "الـ Soft failure هو عطل مؤقت كتهنيج الجهاز، ويمكن استرجاعه بإعادة التشغيل."
  },
  {
    category: "Lecture 01",
    text: "A 'Latent damage' caused by ESD causes the device to fail immediately.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "التلف الكامن (Latent damage) لا يُسقط الجهاز فوراً، بل يُضعف الوصلات ويقصّر من عمر الجهاز ويفشل مع مرور الوقت."
  },
  {
    category: "Lecture 01",
    text: "Which of the following is NOT typically used for ESD protection in an assembly line?",
    options: ["Anti-Static Wrist Straps", "ESD Grounding Clamps", "Polypropylene Boxes", "Standard Nylon Carpets"],
    correctIndex: 3,
    explanation: "السجاد المصنوع من النايلون يولّد شحنات استاتيكية عالية بالاحتكاك، ويجب تجنبه في ورش الإلكترونيات، بينما تستخدم أرضيات PVC مضادة للاستاتيكية."
  },
  {
    category: "Lecture 01",
    text: "Anti-static wrist straps connect the electrical device being worked on to the ground to prevent ESD.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تريكة قوية! إسورة المعصم توصل 'المستخدم' (The User) بالأرضي، بينما الـ Grounding clamps هي التي توصل المعدة (Equipment) بالأرضي."
  },
  {
    category: "Lecture 01",
    text: "SMT disadvantages include lower heat tolerance and complex manual assembly.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نظراً لصغر حجمها، يصعب تجميعها يدوياً وتتلف بسرعة بالحرارة العالية المستمرة."
  },
  {
    category: "Lecture 01",
    text: "The term 'Footprint' in PCB design refers to ........",
    options: ["The physical size and pad layout of a component on the board", "The manufacturing output file", "The overall board dimensions", "The length of the copper traces"],
    correctIndex: 0,
    explanation: "الـ Footprint هو البصمة أو الأبعاد الفيزيائية للمكون وأماكن نقاط اللحام الخاصة به على اللوحة."
  },
  {
    category: "Lecture 01",
    text: "Vias are used in multi-layer PCBs to create electrical connections between different layers.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "الـ Vias هي ثقوب معدنية وظيفتها ربط المسارات في طبقة الـ Top بطبقة الـ Bottom أو الطبقات الداخلية."
  },
  {
    category: "Lecture 01",
    text: "In the component numbering scheme (e.g., SN74LS04N), the first two letters 'SN' typically refer to ........",
    options: ["The package type", "The technology family", "The manufacturer name", "The function of the IC"],
    correctIndex: 2,
    explanation: "أول حرفين يشيران إلى الشركة المصنعة (مثل SN لشركة Texas Instruments)."
  },
  {
    category: "Lecture 01",
    text: "Triboelectric effect is the generation of static electricity when the atoms of the surface layers of two materials rub against each other.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "هذا هو التفسير العلمي لتولد الشحنات الاستاتيكية نتيجة الاحتكاك بين مادتين."
  },
  {
    category: "Lecture 01",
    text: "A Microprocessor contains a CPU, RAM, ROM, and I/O ports all integrated on a single silicon chip.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "هذا تعريف الـ Microcontroller. الميكروبروسيسور يحتوي فقط على الـ CPU ويحتاج لمكونات خارجية."
  },
  {
    category: "Lecture 01",
    text: "Which of the following is typically a characteristic of a Microcontroller?",
    options: ["High power consumption", "Used for general-purpose applications like PCs", "Extremely flexible and scalable", "Designed for specific, dedicated tasks (embedded systems)"],
    correctIndex: 3,
    explanation: "الميكروكنترولر مُصمم لأداء مهمة محددة داخل نظام مدمج (Embedded System) ولا يصلح كحاسب عام."
  },
  {
    category: "Lecture 01",
    text: "Microprocessors are generally cheaper than microcontrollers for simple dedicated tasks.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الميكروكنترولر أرخص بكثير (Low cost) مقارنة بالميكروبروسيسور الذي يحتاج للوحة أم وذواكر خارجية."
  },
  {
    category: "Lecture 01",
    text: "In ........ Architecture, there is a single shared memory space and a single data bus for both program instructions and data.",
    options: ["Harvard", "Von Neumann", "RISC", "CISC"],
    correctIndex: 1,
    explanation: "معمارية فون نيومان تستخدم ذاكرة واحدة وناقل واحد، مما يسبب بطء (Bottleneck) لعدم القدرة على جلب كود وبيانات في نفس اللحظة."
  },
  {
    category: "Lecture 01",
    text: "Harvard Architecture allows the CPU to fetch an instruction and read/write data simultaneously.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "لأن هارفارد يمتلك ذاكرتين منفصلتين (واحدة للكود وواحدة للبيانات) بنواقل منفصلة، فيمكنه إتمام العمليتين معاً في نفس الوقت."
  },
  {
    category: "Lecture 01",
    text: "The 8051 Microcontroller is based on ........ architecture.",
    options: ["Von Neumann", "Harvard", "ARM", "PIC"],
    correctIndex: 1,
    explanation: "الـ 8051 يستخدم معمارية هارفارد (يمتلك مساحتين منفصلتين 64KB للـ Code و 64KB للـ Data)."
  },
  {
    category: "Lecture 01",
    text: "CISC stands for Complex Instruction Set Computer.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "CISC تعني أن المتحكم أو المعالج يدعم تعليمات معقدة يمكنها تنفيذ أكثر من عملية في دورة واحدة، مثل الـ 8051."
  },
  {
    category: "Lecture 01",
    text: "Which of the following architectures emphasizes executing most instructions in a single machine cycle?",
    options: ["CISC", "RISC", "Von Neumann", "8051"],
    correctIndex: 1,
    explanation: "معمارية RISC تهدف إلى تبسيط التعليمات بحيث تُنفذ كل تعليمة في دورة واحدة (1 clock cycle)."
  },
  {
    category: "Lecture 01",
    text: "The 8051 microcontroller is an example of a RISC architecture.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ 8051 هو CISC بامتياز، حيث يحتوي على عدد كبير من التعليمات المعقدة وطرق العنونة المتعددة."
  },
  {
    category: "Lecture 01",
    text: "The standard 8051 microcontroller has ........ bytes of on-chip RAM.",
    options: ["4 K", "128", "256", "64 K"],
    correctIndex: 1,
    explanation: "ركز في الرقم! الـ 8051 القياسي يمتلك 128 بايت (Bytes) فقط من الرام الداخلي."
  },
  {
    category: "Lecture 01",
    text: "The standard 8051 microcontroller has 4 KB of on-chip ROM.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، ذاكرة البرنامج (ROM) الداخلية في الـ 8051 القياسي هي 4 كيلو بايت."
  },
  {
    category: "Lecture 01",
    text: "How many I/O pins does the standard 8051 microcontroller have?",
    options: ["8", "16", "32", "40"],
    correctIndex: 2,
    explanation: "يمتلك الـ 8051 أربعة منافذ (Port 0, 1, 2, 3)، كل منفذ به 8 أطراف، بإجمالي 32 طرف للإدخال والإخراج."
  },
  {
    category: "Lecture 01",
    text: "The 8051 is a 16-bit microcontroller.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ 8051 هو متحكم 8-bit، حيث أن الـ Accumulator ونواقل البيانات الداخلية حجمها 8 بت."
  },
  {
    category: "Lecture 01",
    text: "Which register is considered the most important register in the 8051 and is used for all arithmetic and logic operations?",
    options: ["B register", "PC (Program Counter)", "DPTR (Data Pointer)", "A register (Accumulator)"],
    correctIndex: 3,
    explanation: "الـ Accumulator (A) هو العقل المدبر لجميع العمليات الحسابية والمنطقية."
  },
  {
    category: "Lecture 01",
    text: "The 'B' register in 8051 is primarily used for ........",
    options: ["Storing the next instruction address", "Pointing to external memory", "Multiplication and division operations with the Accumulator", "Storing processor status flags"],
    correctIndex: 2,
    explanation: "مسجل الـ B يُستخدم بشكل رئيسي كمساعد للـ Accumulator في عمليتي الضرب (MUL AB) والقسمة (DIV AB)."
  },
  {
    category: "Lecture 01",
    text: "The DPTR (Data Pointer) in 8051 is a 16-bit register.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "الـ DPTR هو المسجل الوحيد (مع الـ PC) المكون من 16 بت (DPH و DPL) ليتمكن من عنونة 64KB من الذاكرة الخارجية."
  },
  {
    category: "Lecture 01",
    text: "The Program Counter (PC) in 8051 always points to ........",
    options: ["The top of the stack", "The address of the next instruction to be executed", "The current data address in RAM", "The interrupt vector table"],
    correctIndex: 1,
    explanation: "الـ PC مسؤوليته تتبع الكود ليحتفظ دائماً بعنوان التعليمة 'التالية' المطلوب تنفيذها."
  },
  {
    category: "Lecture 01",
    text: "The Stack Pointer (SP) in the 8051 is initialized to 00H upon system reset.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تريكة امتحانات شائعة! الـ SP يبدأ افتراضياً بالقيمة 07H بعد الـ Reset، بحيث يبدأ التخزين الفعلي من 08H."
  },
  {
    category: "Lecture 01",
    text: "Which register holds the flags (such as Carry, Auxiliary Carry, and Parity) in the 8051?",
    options: ["Accumulator", "PSW (Program Status Word)", "SP (Stack Pointer)", "DPTR"],
    correctIndex: 1,
    explanation: "مسجل الـ PSW يضم جميع الأعلام (Flags) التي تبين حالة المعالج بعد العمليات الحسابية."
  },
  {
    category: "Lecture 01",
    text: "In the 8051, the 128 bytes of RAM are divided into three main sections: Register banks, Bit-addressable area, and General-purpose (scratchpad) area.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "التقسيمة صحيحة 100%. (32 بايت للبنوك، 16 بايت bit-addressable، 80 بايت General-purpose)."
  },
  {
    category: "Lecture 01",
    text: "How many register banks are available in the 8051 RAM?",
    options: ["2", "4", "8", "16"],
    correctIndex: 1,
    explanation: "يوجد 4 بنوك للريجستر (Bank 0 إلى Bank 3)، وكل بنك يحتوي على 8 مسجلات (R0 إلى R7)."
  },
  {
    category: "Lecture 01",
    text: "The register banks in 8051 occupy the RAM locations from 00H to ........",
    options: ["07H", "0FH", "1FH", "2FH"],
    correctIndex: 2,
    explanation: "4 بنوك × 8 مسجلات = 32 بايت. العناوين من 00H إلى 1FH تمثل 32 مكاناً."
  },
  {
    category: "Lecture 01",
    text: "The Bit-Addressable area in the 8051 RAM allows the programmer to change individual bits without affecting the other bits in the same byte.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "هذه من أهم مميزات الـ 8051؛ حيث يمكنك عنونة 'بت' محدد (مثل SETB 20.0) مباشرة."
  },
  {
    category: "Lecture 01",
    text: "Which ports in the 8051 are purely I/O ports and do NOT serve dual functions (like address/data multiplexing)?",
    options: ["Port 0", "Port 1", "Port 2", "Port 3"],
    correctIndex: 1,
    explanation: "Port 1 هو البورت الوحيد في الـ 8051 الذي ليس له وظيفة بديلة (Dual function)، ويستخدم فقط كـ I/O عادي."
  },
  {
    category: "Lecture 01",
    text: "When power consumption, cost, and physical space are the primary constraints in a design, a Microprocessor is usually the best choice.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الميكروكنترولر هو الأفضل دائماً في تطبيقات الـ Embedded Systems لأنه يستهلك طاقة أقل، ومساحته صغيرة، وتكلفته منخفضة مقارنة بالميكروبروسيسور."
  }
];
