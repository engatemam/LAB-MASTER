const examMidtermSummer2025 = [
  {
    category: "Midterm Summer 2025",
    text: "SMT does not requires drilling.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Surface Mount Technology (SMT) relies on soldering components directly onto the pads located on the Printed Circuit Board (PCB) surface without the need for through-hole vias. يعتمد هذا النظام على تقنية اللحام السطحي (Reflow Soldering)، مما يلغي الحاجة إلى عملية الثقب (Drilling) الميكانيكية المعقدة، ويقلل من الحث الطفيلي (Parasitic Inductance) ويسهم في تصغير حجم الدائرة."
  },
  {
    category: "Midterm Summer 2025",
    text: "Schematic capturing is considered as a back-end design of PCB.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Schematic capture is inherently the cornerstone of the front-end design phase, wherein the logical connectivity and netlist generation occur. لا يُعد هذا الجزء من التصميم الخلفي (Back-end) الذي يختص بتخطيط اللوحة المادية (Physical Layout) والتوجيه (Routing) وتوليد ملفات التصنيع."
  },
  {
    category: "Midterm Summer 2025",
    text: "Connects between layers in PCB.",
    options: ["Solder mask", "Via", "Footprint", "Solder paste"],
    correctIndex: 1,
    explanation: "A Vertical Interconnect Access (Via) acts as a conductive pathway traversing multiple layers of a PCB. من الناحية الهندسية، هي عبارة عن ثقب مطلي بالنحاس (Plated Through-Hole) يضمن الاستمرارية الكهربائية والحرارية بين الطبقات المختلفة لتمكين توجيه الإشارات المعقدة."
  },
  {
    category: "Midterm Summer 2025",
    text: "There are ____ main types of ESD failures.",
    options: ["two", "three", "four", "five"],
    correctIndex: 0,
    explanation: "Electrostatic Discharge (ESD) primarily manifests in two failure modes at the semiconductor physics level: Hard (Catastrophic) failure causing permanent dielectric breakdown, and Soft (Latent) failure resulting in intermittent logic errors due to partial junction degradation. تنحصر هذه الأعطال إما في تدمير مادي كامل للترانزستور أو تلف جزئي يضعف الأداء بمرور الوقت."
  },
  {
    category: "Midterm Summer 2025",
    text: "The value of SMD resistor has the label '224' is ____ ohm.",
    options: ["22", "22K", "220K", "22M"],
    correctIndex: 2,
    explanation: "According to the Electronic Industries Alliance (EIA) standard for 3-digit SMD resistor marking, the first two digits signify the significant mantissa and the third digit denotes the power of 10 multiplier. لذا فإن الكود '224' يعادل 22 × 10^4 أوم، أي 220,000 أوم (220 kΩ)."
  },
  {
    category: "Midterm Summer 2025",
    text: "The value of SMD resistor has the label 'R33' is ____ ohm.",
    options: ["33", "3.3", "330", "0.33"],
    correctIndex: 3,
    explanation: "In precise SMD resistor nomenclature, the letter 'R' operates as a decimal radix point for fractional resistance values. وبالتالي، فإن الرمز 'R33' يترجم مباشرة إلى القيمة 0.33 أوم، والتي تستخدم عادة في تطبيقات تحسس التيار (Current Sensing)."
  },
  {
    category: "Midterm Summer 2025",
    text: "One advantage of SMD is the lower heat tolerance.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "While Surface Mount Devices (SMDs) exhibit reduced thermal mass leading to lower heat tolerance during soldering processes like wave or reflow soldering, this thermal sensitivity is an inherent disadvantage, potentially causing thermal shock. على الرغم من أن ذلك يعد من خصائصها، إلا أنه يمثل قيداً حرارياً (Thermal Constraint) وليس ميزة."
  },
  {
    category: "Midterm Summer 2025",
    text: "QFP is an example of through-hole technology.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The Quad Flat Package (QFP) is fundamentally a Surface Mount Technology (SMT) integrated circuit package featuring gull-wing leads extending from all four sides. لا ينتمي هذا الغلاف لتقنية الثقوب النافذة (Through-hole Technology) نظراً لاعتماده على اللحام السطحي للحصول على كثافة أطراف (Pin Density) عالية."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ is the primary measurement tool to observe the shape of signals.",
    options: ["Power Supply", "Oscilloscope", "Multimeter", "Function Generator"],
    correctIndex: 1,
    explanation: "The Oscilloscope is an essential diagnostic instrument that provides a two-dimensional visual representation of electrical potential differences over time. يقوم راسم الإشارة (Oscilloscope) بتحليل الخصائص الديناميكية للإشارات مثل التردد، السعة، وتشوه الإشارة (Signal Distortion) في المجال الزمني."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ protects outer layers from oxidation and prevents solder bridges.",
    options: ["Via", "Silk-screen", "Solder mask", "Footprint"],
    correctIndex: 2,
    explanation: "The Solder Mask (Solder Resist) is a critical polymer layer applied over the copper traces to prevent atmospheric oxidation and to act as an electrical insulator. يلعب دوراً حاسماً في منع حدوث قصر كهربائي (Solder Bridges) بين المسارات الدقيقة أثناء عملية اللحام الآلي."
  },
  {
    category: "Midterm Summer 2025",
    text: "A ____ signal can only take on one value from a finite set of possible values at a given time.",
    options: ["analog", "digital"],
    correctIndex: 1,
    explanation: "Digital signals are strictly quantized in both time and amplitude, existing only within a finite set of discrete logical states (e.g., Boolean 0 and 1). على عكس الإشارات التناظرية المستمرة، تعتمد الإشارات الرقمية على مستويات جهد محددة (Quantization Levels) مما يعزز مناعتها ضد الضوضاء (Noise Immunity)."
  },
  {
    category: "Midterm Summer 2025",
    text: "DIP is considered as ____ Technology.",
    options: ["SMT", "Through-hole"],
    correctIndex: 1,
    explanation: "Dual In-line Package (DIP) is an archetypal Through-Hole Technology (THT) architecture. يتميز بأطراف توصيل (Pins) مصممة لاختراق ثقوب اللوحة المطبوعة (Through-holes) لتُلحم في الجهة المقابلة، مما يوفر متانة ميكانيكية (Mechanical Robustness) عالية."
  },
  {
    category: "Midterm Summer 2025",
    text: "Generating of CAM files is done in ____-end level of PCB design flow.",
    options: ["front", "back"],
    correctIndex: 1,
    explanation: "Computer-Aided Manufacturing (CAM) file generation, including Gerber files (RS-274X) and NC Drill files, represents the final stage of the back-end PCB design flow. يتم تصدير هذه الملفات بعد الانتهاء من تخطيط المسارات المادية لتوجيه آلات التصنيع (Photoplotters and CNC drills)."
  },
  {
    category: "Midterm Summer 2025",
    text: "In SMT, the physical contact to PCB is weak.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Due to the absence of through-hole anchors, Surface Mount Technology relies exclusively on the metallurgical bond of the solder fillets for mechanical integrity. هذا يجعل الارتباط الميكانيكي أضعف نسبياً وعرضة للتشققات نتيجة الإجهاد الحراري والميكانيكي (Thermal and Mechanical Stress)."
  },
  {
    category: "Midterm Summer 2025",
    text: "In ____ level, the SMD components are placed in their locations.",
    options: ["SMC placement", "Reflow soldering", "Stencil preparation", "Solder paste printing"],
    correctIndex: 0,
    explanation: "Surface Mount Component (SMC) placement involves high-precision pick-and-place robotic systems executing exact X-Y-Θ positioning of components onto printed solder paste. تعتبر هذه المرحلة حاسمة في خط التجميع الآلي قبل الدخول لفرن إعادة التشكيل (Reflow Oven)."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ failures result in permanent damage to the system.",
    options: ["Hard", "Soft"],
    correctIndex: 0,
    explanation: "Hard (Catastrophic) failures involve irreversible macroscopic or microscopic physical destruction, such as oxide punch-through, thermal runaway, or metallic trace melting due to high-voltage transients. هذا النوع من الفشل يؤدي إلى عطل دائم غير قابل للإصلاح في شريحة أشباه الموصلات."
  },
  {
    category: "Midterm Summer 2025",
    text: "A soldering station is designed for electronic components inspection.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "A soldering station is engineered strictly for the precise thermal application required in metallurgical joining (soldering) of electronic components. لعمليات الفحص (Inspection)، تُستخدم أدوات بصرية متقدمة مثل المجهر الإلكتروني (Microscope) أو أنظمة الفحص البصري الآلي (AOI)."
  },
  {
    category: "Midterm Summer 2025",
    text: "Anti-static ____ are used for storing ESD-susceptible electronics.",
    options: ["wrist straps", "grounding clamp", "bags", "ESD Mat Kits"],
    correctIndex: 2,
    explanation: "Anti-static bags (typically metallized shielding bags) function as Faraday cages, creating a conductive shield that prevents external static charge from penetrating the encapsulated volume. تُعد الأكياس المضادة للشحنات الساكنة بيئة العزل المثلى لحماية المكونات الحساسة (ESD-susceptible) أثناء التخزين والنقل."
  },
  {
    category: "Midterm Summer 2025",
    text: "Multimeters measure both AC and DC voltage and current.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Digital Multimeters (DMMs) employ internal rectification circuits (e.g., RMS-to-DC converters) alongside standard ADC architectures to accurately quantify both Alternating Current (AC) and Direct Current (DC) parameters. هذه المرونة تسمح بقياس الجهود والتيارات في مختلف الترددات والدوائر."
  },
  {
    category: "Midterm Summer 2025",
    text: "Which is the fastest memory among them.",
    options: ["Main memory", "L2 cache", "L1 cache", "Register"],
    correctIndex: 3,
    explanation: "Registers are ultra-fast memory storage units built directly into the CPU core's datapath, typically fabricated using high-speed SRAM cells. توفر المسجلات وصولاً شبه لحظي (Zero-wait-state) للبيانات أثناء تنفيذ التعليمات، مما يجعلها الأسرع في هرمية الذاكرة."
  },
  {
    category: "Midterm Summer 2025",
    text: "L2 cache memory is slower than L3 cache memory.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "In the memory hierarchy, spatial locality dictates that L2 cache, being physically closer to the CPU core and logically more tightly coupled than L3 cache, exhibits significantly lower latency. ذاكرة التخزين المؤقت من المستوى الثاني (L2) أسرع دائماً من المستوى الثالث (L3)."
  },
  {
    category: "Midterm Summer 2025",
    text: "The storage capacity of main memory is higher than L2 cache.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Main Memory (typically DRAM) offers gigabytes of storage density at the cost of higher latency, utilizing a single transistor-capacitor pair per bit. سعة الذاكرة الرئيسية أكبر بكثير من ذاكرة الكاش (L2) التي تُبنى باستخدام خلايا SRAM المكلفة والأقل كثافة."
  },
  {
    category: "Midterm Summer 2025",
    text: "In a computer system, CPU communicates with I/O devices via I/O interfaces.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "I/O interfaces bridge the architectural and electrical gaps between the high-speed synchronous CPU bus and lower-speed asynchronous peripheral devices. تقوم هذه الواجهات بمهام التزامن، وتخزين البيانات المؤقت (Buffering)، ومطابقة الجهود الكهربائية لضمان الاتصال السليم."
  },
  {
    category: "Midterm Summer 2025",
    text: "During the ____ phase, an instruction is read from the memory.",
    options: ["fetch", "decode", "execute"],
    correctIndex: 0,
    explanation: "The Fetch phase involves the CPU placing the Program Counter (PC) value on the address bus, enabling memory to place the operational code (Opcode) onto the data bus to be loaded into the Instruction Register (IR). إنها المرحلة الأولى من دورة المعالج (Fetch-Decode-Execute) حيث يتم استدعاء التعليمة."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ architecture shares a single common bus for fetching both instructions and data.",
    options: ["Harvard", "Von-Neumann"],
    correctIndex: 1,
    explanation: "The Von Neumann architecture features a unified memory space and a singular system bus for both instructions and data. يؤدي هذا التصميم إلى ما يُعرف بـعنق الزجاجة لفون نيومان (Von Neumann Bottleneck) حيث لا يمكن جلب تعليمة وبيانات في نفس الدورة الزمنية، بخلاف معمارية هارفارد."
  },
  {
    category: "Midterm Summer 2025",
    text: "8051 has ____ bytes of RAM.",
    options: ["4K", "8K", "128", "256"],
    correctIndex: 2,
    explanation: "The classic Intel 8051 microcontroller is architected with strictly 128 bytes of internal Data RAM, encompassing register banks, bit-addressable memory, and a general-purpose scratchpad area. تم تخصيص هذا الحجم الصغير لتلبية احتياجات التطبيقات المدمجة الأساسية بأقصى كفاءة للمتحكم."
  },
  {
    category: "Midterm Summer 2025",
    text: "8051 has ____ timers.",
    options: ["one", "two", "three", "zero"],
    correctIndex: 1,
    explanation: "The legacy 8051 incorporates two dedicated 16-bit Timer/Counter hardware modules, designated as Timer 0 and Timer 1. يدار كل مؤقت عبر مسجلات تحكم (TMOD and TCON) لتمكين توليد تأخيرات زمنية دقيقة (Time Delays) أو عد النبضات الخارجية."
  },
  {
    category: "Midterm Summer 2025",
    text: "8052 has ____ interrupt sources.",
    options: ["6", "7", "8", "Zero"],
    correctIndex: 0,
    explanation: "The enhanced 8052 microcontroller architecture supports 6 distinct interrupt vector sources: two external interrupts (INT0, INT1), three timer interrupts (T0, T1, T2), and one serial port interrupt. هذا يعزز قدرته على التعامل مع الأحداث المتزامنة مقارنة بمعالج 8051 الذي يحتوي على 5 مصادر فقط."
  },
  {
    category: "Midterm Summer 2025",
    text: "The reset value of SP register of 8051 is ...",
    options: ["06", "07", "08", "09"],
    correctIndex: 1,
    explanation: "Upon system reset, the 8051's Stack Pointer (SP) register defaults to 07H. Consequently, the first stack push operation pre-increments the SP to 08H, which initiates stack storage seamlessly at the beginning of the general-purpose RAM following Register Bank 0. يبدأ التخزين في الذاكرة لتجنب الكتابة فوق المسجلات الأساسية."
  },
  {
    category: "Midterm Summer 2025",
    text: "In order for the RESET input to be effective, it must have a minimum duration of ... machine cycles.",
    options: ["2", "4", "6", "8"],
    correctIndex: 0,
    explanation: "For reliable initialization, the asynchronous RESET pin (RST) must be driven to a logic HIGH state for a minimum duration spanning two consecutive machine cycles (equivalent to 24 oscillator periods). هذه المدة ضرورية لضمان استقرار إشارات التحكم وإعادة تعيين المسجلات الداخلية (Flip-flops) بشكل صحيح."
  },
  {
    category: "Midterm Summer 2025",
    text: "____ pin is provided to allow or disallow the internal memory of 8051.",
    options: ["ALE", "EA", "PSEN", "XTAL1"],
    correctIndex: 1,
    explanation: "The External Access (EA) pin dictates the program counter's execution bound. When strapped low (GND), the microcontroller is forced to exclusively fetch opcodes from external ROM, bypassing any internal Program Memory. يحدد هذا الطرف ما إذا كان المعالج سيعتمد على ذاكرة البرنامج الداخلية أم الخارجية."
  },
  {
    category: "Midterm Summer 2025",
    text: "The original 8051 divide the external frequency by ...",
    options: ["1", "4", "8", "12"],
    correctIndex: 3,
    explanation: "The 8051's internal timing architecture relies on a fundamental machine cycle consisting of 6 states (S1-S6), each comprising 2 oscillator periods. Thus, the external quartz crystal frequency is pre-scaled by a factor of 12. يتم تقسيم تردد المذبذب على 12 لحساب تردد دورة الآلة (Machine Cycle) لتنفيذ التعليمات."
  },
  {
    category: "Midterm Summer 2025",
    text: "Assembly code is easier to modify and update.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Assembly language is highly architecture-dependent, relying on absolute memory addresses, specific register allocations, and mnemonic instructions mapping directly to machine code. This lack of abstraction makes refactoring and maintenance inherently complex. لغات المستوى العالي توفر تجريداً برمجياً يجعل التعديل أسهل بكثير من لغة التجميع ذات المستوى المنخفض."
  },
  {
    category: "Midterm Summer 2025",
    text: "In ..., each pin must be connected externally to a 10K ohm pull-up resistor.",
    options: ["P0", "P1", "P2", "P3"],
    correctIndex: 0,
    explanation: "Port 0 (P0) of the 8051 microcontroller features a true open-drain output topology, lacking internal pull-up field-effect transistors. Therefore, external pull-up resistors (typically 10kΩ) are mandatory to establish a defined High logic level during general-purpose I/O operations. بدون هذه المقاومات، لا يمكن للطرف إخراج مستوى الجهد العالي (Logic 1) بشكل صحيح."
  }
];
