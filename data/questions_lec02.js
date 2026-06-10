const lec02Data = [
  {
    category: "Lecture 02",
    text: "How long does it typically take to erase an 8751 microcontroller equipped with a UV-EPROM?",
    options: ["20 minutes", "5 minutes", "1 hour", "10 seconds"],
    correctIndex: 0,
    explanation: "The 8751 microcontroller utilizes an Ultra-Violet Erasable Programmable Read-Only Memory (UV-EPROM) architecture. The floating-gate MOSFETs within the memory array rely on a phenomenon called Fowler-Nordheim tunneling to hold charge. Exposing the quartz window to high-energy UV-C photons (~254 nm) supplies enough kinetic energy to the trapped electrons to escape the potential barrier, a photo-electric discharge process that typically spans 20 minutes to clear all memory cells. <br>في ميكروكنترولر 8751، تُستخدم ذاكرة UV-EPROM، حيث تتطلب فوتونات الأشعة فوق البنفسجية حوالي 20 دقيقة لمنح الإلكترونات المحتبسة طاقة كافية للتحرر من البوابة العائمة (Floating Gate) ومسح الذاكرة."
  },
  {
    category: "Lecture 02",
    text: "........ pin is provided to allow or disallow the internal memory, and it is pulled high if internal program memory is to be used.",
    options: ["EA", "ALE", "PSEN", "RST"],
    correctIndex: 0,
    explanation: "The EA (External Access) pin determines the program fetch vector mapping for the 8051. When EA is strapped to Vcc (Logic High), the internal Program Counter resolves opcode fetches starting from the internal ROM (0000H to 0FFFH in 8051). If pulled low (GND), the architecture unconditionally forces all instruction fetches to address the external memory subsystem via Ports 0 and 2. <br>طرف الـ EA (External Access) يحدد مسار قراءة التعليمات البرمجية؛ فعند توصيله بجهد عالٍ (High) يعتمد المعالج على ذاكرته الداخلية (ROM)، وعند توصيله بالأرضي ينتقل للقراءة من الذاكرة الخارجية."
  },
  {
    category: "Lecture 02",
    text: "For systems using serial communications facilities, a crystal of frequency ........ MHz is more appropriate as the standard baud rates may easily be generated.",
    options: ["11.0592", "12.0000", "16.0000", "8.0000"],
    correctIndex: 0,
    explanation: "The 11.0592 MHz oscillator frequency is mathematically integral for asynchronous serial communication (UART). Since the 8051 machine cycle divides the crystal frequency by 12, the internal UART timer resolves to 11.0592 MHz / 12 = 921.6 kHz. Further dividing by 32 yields precisely 28,800 Hz, allowing Timer 1 to flawlessly derive standard baud rates (e.g., 28,800 / 3 = 9600 baud) with absolute zero percent quantization error. <br>تردد 11.0592 ميجاهرتز ضروري لأن قسمته رياضياً على دورة الآلة والمؤقتات يُنتج ترددات مطابقة تماماً لمعدلات نقل البيانات القياسية (Baud rates) كـ 9600 بت/ثانية بدون أي نسبة خطأ."
  },
  {
    category: "Lecture 02",
    text: "True or False: In Von-Neumann architecture, separate data bus and instruction bus are used, allowing data transfer and program fetching to occur simultaneously.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The Von-Neumann microarchitecture employs a unified bus multiplexing scheme, sharing a single contiguous address and data space for both opcodes and variables. This creates a systemic bottleneck known as the Von-Neumann bottleneck, restricting simultaneous fetching and execution. Conversely, the Harvard architecture operates dual distinct buses (Code and Data), enabling true concurrent memory operations critical for high-speed DSPs. <br>معمارية فون-نيومان تشترك في ناقل (Bus) واحد للبيانات والتعليمات مما يسبب اختناقاً في الأداء، بينما تستخدم معمارية هارفارد نواقل منفصلة لتسريع عملية القراءة والتنفيذ المتزامن."
  },
  {
    category: "Lecture 02",
    text: "The AT89C51 microcontroller requires ........ clocks per machine cycle.",
    options: ["12", "6", "4", "1"],
    correctIndex: 0,
    explanation: "The canonical MCS-51 architecture, inherited by the Atmel AT89C51, fundamentally utilizes a fixed 12-clock-cycle state machine execution model. Internally, a machine cycle consists of six distinct states (S1-S6), with each state sub-divided into two oscillator clock phases (P1, P2). Thus, an instruction operating at 12 MHz precisely mandates a 1-microsecond execution time per machine cycle. <br>ميكروكنترولر AT89C51 يعتمد معمارية كلاسيكية تتطلب 12 نبضة ساعة لإتمام دورة آلة (Machine Cycle) واحدة، وهي مقسمة داخلياً لست حالات منطقية للتحكم الدقيق في التوقيت."
  },
  {
    category: "Lecture 02",
    text: "The 8052 microcontroller features ........ bytes of on-chip ROM and ........ bytes of RAM.",
    options: ["8K, 256", "4K, 128", "16K, 512", "32K, 1024"],
    correctIndex: 0,
    explanation: "The 8052 microcontroller is a superset extension of the core 8051 silicon die. It expands the internal embedded structures by doubling the on-chip non-volatile Program ROM to 8K bytes (0000H to 1FFFH) and supplementing the internal volatile SRAM to 256 bytes (00H to FFH). The upper 128 bytes of RAM use indirect addressing logic to differentiate from the SFR memory space map. <br>النسخة 8052 تعد تطويراً لـ 8051، حيث تتضمن ضعف الذاكرة: 8 كيلوبايت لذاكرة القراءة (ROM) لتخزين البرنامج، و 256 بايت لذاكرة الوصول العشوائي (RAM) لمعالجة البيانات الإضافية والمكدس."
  },
  {
    category: "Lecture 02",
    text: "........ stands for Program Store Enable, and in an 8031-based system it is connected to the ........ pin of the external ROM.",
    options: ["PSEN, OE", "ALE, CE", "EA, VCC", "RST, GND"],
    correctIndex: 0,
    explanation: "The PSEN (Program Store Enable) is an active-low control signal explicitly synthesized by the 8051's internal state machine during opcode fetches from external memory. By physically strapping PSEN to the OE (Output Enable) pin of an external ROM or EPROM chip, it unconditionally governs the precise temporal activation of the memory's tri-state output buffers, preventing bus contention on Port 0. <br>إشارة PSEN مسؤولة عن تفعيل القراءة من الذاكرة الخارجية للبرنامج، وتُوصل دائماً بطرف الـ OE (Output Enable) في الذاكرة لتشغيل بوابات الخرج وإرسال البيانات للناقل."
  },
  {
    category: "Lecture 02",
    text: "In the 8051 microcontroller, the RESET pin must have a high pulse for a minimum duration of ........ before it is allowed to go low.",
    options: ["2 machine cycles", "12 clock cycles", "1 instruction cycle", "4 machine cycles"],
    correctIndex: 0,
    explanation: "The hard-reset logic initialization sequence in the 8051 mandates that the RST pin is held at a logic High (Vcc) for an exact threshold of at least two complete machine cycles (i.e., 24 continuous oscillator clock periods) while the oscillator is successfully running. This stringent latency permits the internal Flip-Flops, Program Counter, and SFRs to deterministically clear and settle at default states. <br>لإعادة تشغيل النظام (Reset)، يتطلب المعالج استمرار الجهد العالي على طرف RST لفترة لا تقل عن دورتي آلة (2 Machine cycles) لضمان تصفير جميع السجلات الداخلية وعداد البرنامج بشكل كامل."
  },
  {
    category: "Lecture 02",
    text: "True or False: Port 0 ( P0 ) can be used for input or output, and each pin must be connected externally to a 10K ohm pull-down resistor due to its open drain structure.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Port 0 (P0) within the 8051 is uniquely fabricated utilizing an open-drain Field-Effect Transistor (FET) architecture completely devoid of internal pull-up logic. Consequently, to interface securely with logic-high digital thresholds, the drain terminals mandate an external 10 kΩ pull-up resistor network mapped to Vcc, facilitating sourcing current for connected loads. <br>المنفذ (Port 0) صُمم كـ Open-Drain ولا يحتوي على مقاومات رفع داخلية؛ لذا عند استخدامه كمنفذ إدخال/إخراج عام، يجب توصيل مقاومات رفع خارجية (Pull-UP) بقيمة 10 كيلو أوم لضمان تيار كافٍ للجهد العالي (Logic 1)."
  },
  {
    category: "Lecture 02",
    text: "The internal data memory of the 8051 is divided into three parts. The register banks are located from address ........ to ........",
    options: ["00H, 1FH", "20H, 2FH", "30H, 7FH", "80H, FFH"],
    correctIndex: 0,
    explanation: "The lower 32 bytes of the internal SRAM (Addresses 00H through 1FH) constitute the hardware context-switching registers. This segment is rigidly partitioned into four distinct Register Banks (Bank 0 to Bank 3), each housing eight working registers (R0-R7). The active bank is synchronously multiplexed by asserting bits RS0 and RS1 located in the Program Status Word (PSW). <br>أول 32 بايت من ذاكرة الـ RAM الداخلية مقسمة إلى أربعة بنوك للسجلات، يبدأ كل منها بثمانية سجلات من R0 إلى R7 وتستخدم لتسريع معالجة البيانات وتبديل المهام."
  },
  {
    category: "Lecture 02",
    text: "Out of the four register banks in the 8051, Bank ........ uses the exact same RAM space as the stack.",
    options: ["1", "0", "2", "3"],
    correctIndex: 0,
    explanation: "Upon internal reset execution, the 8051's Stack Pointer (SP) is automatically initialized to address 07H. This hardware default dictates that primary PUSH and CALL stack operations increment directly into the 08H-0FH segment, which absolutely geographically overlaps with Register Bank 1. Thus, utilizing Bank 1 while neglecting to re-vector the Stack Pointer provokes fatal memory corruption. <br>عند تشغيل المعالج، يبدأ مؤشر المكدس (Stack Pointer) من العنوان 07H ليتم الحفظ في العنوان 08H وهو نفس النطاق المخصص للبنك الأول (Bank 1)، مما قد يسبب تعارضاً وتدميراً للبيانات إذا لم يُنقل المكدس لمكان آخر."
  },
  {
    category: "Lecture 02",
    text: "True or False: An off-chip cache is one that is fabricated directly in the CPU chip to maximize processing speed.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "In advanced microprocessor hierarchy, Cache Memory bridges the tremendous latency gap between the high-frequency CPU ALUs and slower bulk main memory. L1 (On-chip) cache is directly lithographed onto the same physical CPU silicon die functioning at core operational frequencies, whereas L2/L3 (Off-chip) cache operates via external bus structures with higher propagation delay penalties. <br>ذاكرة الكاش الداخلية (On-chip) تُدمج في شريحة المعالج ذاتها لتعمل بنفس سرعته وتقليل التأخير، بينما الكاش الخارجية (Off-chip) تكون خارج الشريحة وتتطلب نواقل للاتصال."
  },
  {
    category: "Lecture 02",
    text: "........ indicates whether Port 0 has an address or data during external memory interfacing.",
    options: ["ALE", "PSEN", "EA", "WR"],
    correctIndex: 0,
    explanation: "The Address Latch Enable (ALE) governs the temporal multiplexing of Port 0. Because Port 0 transmits both the low-order address byte (A0-A7) and data byte (D0-D7), ALE strobes high to trigger an external octal D-type transparent latch (e.g., 74HC373). This captures and stabilizes the physical address vector right before the same pins transition to reading/writing data. <br>بما أن المنفذ (Port 0) يدمج إشارات العناوين والبيانات معاً، تصدر إشارة (ALE) بنبضة عالية لفتح مزلاج خارجي (Latch) وتثبيت العنوان مؤقتاً قبل أن يعود المنفذ لنقل البيانات."
  },
  {
    category: "Lecture 02",
    text: "True or False: When ALE=0, it indicates that Port 0 has address A0-A7, and when ALE=1, it provides data D0-D7.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Under the stringent time-division multiplexing sequence of the MCS-51 external bus cycle, the logical state of ALE dictates the current pin vector meaning. ALE = 1 asserts the lower 8 bits of the physical address bus (A0-A7) to be latched. Once safely stored, ALE gracefully transitions to 0, completely reassigning the bus topography for bi-directional data flow (D0-D7). <br>عندما تكون إشارة ALE في حالة (1)، ينقل المنفذ العناوين (A0-A7) لتخزينها. وعندما تنخفض لحالة (0)، يتحول المنفذ لنقل واستقبال البيانات ضمن دورة القراءة أو الكتابة."
  },
  {
    category: "Lecture 02",
    text: "The 8051 can access up to ........ bytes of opcode since the program counter is a 16-bit register.",
    options: ["64K", "32K", "16K", "256K"],
    correctIndex: 0,
    explanation: "The architectural boundary of program execution space in the 8051 is mathematically bounded by its 16-bit physical addressing capability. Through combinatorics, a 16-bit Program Counter yields exactly 2^16 = 65,536 unique addressing vectors (64 KiloBytes), representing the absolute supremum of executable memory available via the external code fetching logic. <br>الـ 8051 مزود بعداد برنامج (Program Counter) بحجم 16 بت، مما يتيح للمعالج توليد 65,536 عنوان مختلف رياضياً، لتصل مساحة ذاكرة البرنامج المتاحة للاستخدام إلى 64 كيلوبايت."
  },
  {
    category: "Lecture 02",
    text: "The bit-addressable area in the 8051 internal RAM has addresses ranging from ........ to ........",
    options: ["20H, 2FH", "00H, 1FH", "30H, 7FH", "80H, FFH"],
    correctIndex: 0,
    explanation: "A highly specialized sub-block of the 8051 SRAM lies between byte vectors 20H and 2FH. This precisely yields 16 bytes, functioning as a unique bit-addressable topography yielding exactly 128 discrete Boolean variables (addresses 00H to 7FH). This intricate hardware boolean-processor capability radically accelerates complex logic flag manipulations critical to real-time embedded systems. <br>تم تخصيص نطاق العناوين من 20H إلى 2FH كذاكرة قابلة للوصول على مستوى البت الواحد (Bit-addressable)، وهي توفر 128 بتاً منفرداً لتسريع معالجة العمليات المنطقية والأعلام (Flags)."
  },
  {
    category: "Lecture 02",
    text: "True or False: All widely used registers in the 8051 are 8-bit, except the DPTR and Accumulator which are 16-bit.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The internal ALU architecture of the 8051 is inherently 8-bit, hence core computational registers like the Accumulator (A) and B register strictly accommodate 8-bit operand manipulations. Conversely, the Data Pointer (DPTR) and Program Counter (PC) are structurally constructed as wide 16-bit registers specifically to span the sprawling 64 KB memory maps for external variables and instruction fetching. <br>معمارية المعالج ذات 8 بت ولذلك المُراكم (Accumulator) حجمه 8 بت فقط، بينما سجلات العناوين كمؤشر البيانات (DPTR) وعداد البرنامج (PC) تتطلب 16 بت لتغطية عناوين الذاكرة الخارجية الشاسعة."
  },
  {
    category: "Lecture 02",
    text: "Out of the 128 bytes reserved for Special Function Registers (SFRs) in MCS-51, only ........ locations are actually used.",
    options: ["21", "128", "64", "48"],
    correctIndex: 0,
    explanation: "Within the heavily partitioned Special Function Register (SFR) address geography scaling from 80H to FFH (128 possible spaces), the foundational standard 8051 physically implements merely 21 explicit hardware registers (e.g., TMOD, SCON, PSW). Addressing unimplemented interstitial zones within this SFR range provokes undefined silicon behavior and arbitrary system crashing. <br>في مساحة الـ SFR المخصصة للتحكم بالمعالج (من 80H لـ FFH)، توجد 21 وظيفة فعالة فقط مستخدمة لمؤقتات ومنافذ ومقاطعات المعالج، وباقي العناوين غير مستخدمة وتُعتبر محجوزة."
  },
  {
    category: "Lecture 02",
    text: "During the ........ phase, an instruction is read from memory and decoded by the instruction decoder.",
    options: ["fetch", "execute", "decode", "store"],
    correctIndex: 0,
    explanation: "In standard cyclical machine instruction execution, the highly deterministic FETCH sequence drives the Program Counter onto the memory bus, subsequently loading the fetched machine-code byte securely into the Instruction Register (IR). The embedded decoding combinatorial logic matrix instantaneously parses the opcode bits, configuring ALU multiplexers and dispatching immediate control signals for subsequent execution phase resolution. <br>في مرحلة الجلب (Fetch)، يقوم المعالج بإرسال عنوان التعليمات للذاكرة ثم قراءة الشفرة (Opcode) وتخزينها في مسجل التعليمات (IR)، ليتم تحليلها وفك تشفيرها بواسطة وحدة التحكم المنطقية لتنفيذ الأمر."
  },
  {
    category: "Lecture 02",
    text: "True or False: In an 8031/51-based system with external memory, Port 1 is used to provide the upper 8 bits of the 16-bit address (A8-A15).",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "When the 8031/8051 resolves a 16-bit address access constraint (e.g., executing a MOVC or reading a 64K RAM matrix), Port 0 is dynamically multiplexed for A0-A7 and D0-D7. Geographically, Port 2 systematically drives the upper order address byte natively (A8-A15), bypassing Port 1 entirely, allowing Port 1 to freely serve purely as an unencumbered general-purpose I/O GPIO matrix. <br>عند ربط المعالج بذاكرة خارجية تحتاج 16 بت للعنونة، يُستخدم المنفذ الثاني (Port 2) حصراً لتوفير البايت العلوي من العناوين (A8-A15)، ليبقى المنفذ الأول (Port 1) متاحاً كمنفذ إدخال وإخراج عام."
  },
  {
    category: "Lecture 02",
    text: "The 8051 microcontroller provides ........ interrupt sources.",
    options: ["6", "8", "4", "5"],
    correctIndex: 0,
    explanation: "The interrupt control unit of the standard 8051 oversees six discrete vectors: two external hardware interrupt pins (INT0 and INT1), two embedded timer overflow triggers (Timer 0 and Timer 1), a serial UART communication vector (combining TX/RX), and a fundamental systemic Reset interrupt. They are mediated through the Interrupt Enable (IE) and Interrupt Priority (IP) special function registers. <br>يعتمد ميكروكنترولر 8051 على نظام مقاطعات قوي يحتوي على 6 مصادر محددة: مقاطعتين خارجيتين، مقاطعتي مؤقتات، مقاطعة اتصال تسلسلي، بالإضافة إلى مقاطعة إعادة التشغيل (Reset)."
  },
  {
    category: "Lecture 02",
    text: "True or False: Port 3 requires external 10K ohm pull-up resistors to function properly as input or output.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "Unlike the open-drain topology inherent in Port 0, Port 3 integrates physically embedded internal pull-up field-effect resistors. This sophisticated internal buffering allows Port 3 pins to alternate between their Alternate Functions (such as RXD, TXD, INT0, WR) and generic logic functions seamlessly, without ever demanding the spatial burden of an external resistor network. <br>المنفذ الثالث (Port 3) يتميز باحتوائه على مقاومات رفع داخلية مدمجة بالسيليكون (Internal Pull-up)، وبالتالي لا يحتاج لأي مقاومات خارجية عند برمجته كمدخل أو مخرج للوظائف الإضافية."
  },
  {
    category: "Lecture 02",
    text: "The 8031 microcontroller has exactly ........ bytes of on-chip program ROM space.",
    options: ["0K", "4K", "8K", "16K"],
    correctIndex: 0,
    explanation: "The 8031 is a strategic architectural deviation from the 8051 die that is strictly 'ROM-less' (possessing precisely 0 KB of internal program memory). This necessitates permanently strapping the EA (External Access) pin to ground logic (0V), forcing the absolute entirety of execution vectors to be fetched invariably from an external ROM EPROM circuit via the Port 0/2 multiplex bus architecture. <br>المعالج 8031 هو نسخة خالية من ذاكرة البرنامج الداخلية (0K ROM)، مما يُجبر المصمم على إضافة شريحة ذاكرة خارجية وربط طرف (EA) بالأرضي لضمان عمل المعالج وسحب التعليمات من الخارج."
  },
  {
    category: "Lecture 02",
    text: "True or False: The P89C54X2 from Philips requires 12 clocks per machine cycle, similar to the AT89C51.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The Philips/NXP P89C54X2 represents a massive generational leap, structurally re-engineering the archaic MCS-51 core logic to execute fundamentally on a 6-clock cycle basis. This precisely halves the oscillator divider sequence, directly doubling the processor's MIPS (Millions of Instructions Per Second) throughput given an identical quartz crystal frequency relative to standard 12-clock Atmel variants. <br>معالجات سلسلة X2 مثل P89C54X2 طورت لتعمل بسرعة مضاعفة، حيث تقلصت دورة الآلة من 12 نبضة إلى 6 نبضات ساعة فقط، مما ضاعف كفاءة وسرعة تنفيذ البرامج دون زيادة تردد الكريستالة."
  },
  {
    category: "Lecture 02",
    text: "........ is the specific units, their design and organization inside a single integrated circuit like a microprocessor.",
    options: ["Architecture", "System Software", "Peripherals", "Instruction Set"],
    correctIndex: 0,
    explanation: "In advanced electronics engineering, Microprocessor Architecture signifies the fundamental blueprint of the silicon ecosystem. It encompasses the meticulous layout of the Arithmetic Logic Units (ALUs), memory multiplexing matrices, hardware register configurations, and decoding control systems, essentially formulating the ISA (Instruction Set Architecture) dictating the computational behavior of the hardware substrate. <br>معمارية المعالج (Architecture) تعبر عن التصميم الداخلي للشريحة من حيث تنظيم وحدات الحساب والمنطق، السجلات، وناقلات البيانات والتعليمات التي تشكل أداء وعقل النظام المدمج."
  }
];

