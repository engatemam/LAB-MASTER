const notesLec06 = [
  {
    "title": "Parallel vs. Serial Communication Basics",
    "conceptOverview": "يناقش الدكتور الطرق الأساسية لنقل البيانات بين الأجهزة: النقل المتوازي (Parallel) والنقل التسلسلي (Serial). النقل المتوازي يرسل عدة بتات (مثل 8 بت) في نفس الوقت، لكن يعيبه أنه يحتاج إلى عدد كبير من الأسلاك مما يزيد من التكلفة ويجعله غير عملي للمسافات الطويلة. بالمقابل، النقل التسلسلي يرسل بت واحد في كل مرة عبر سلك واحد، مما يقلل التكلفة والتعقيد. ينقسم النقل التسلسلي إلى متزامن (Synchronous) يعتمد على إشارة ساعة مشتركة، وغير متزامن (Asynchronous) لا يعتمد على إشارة ساعة بل على سرعة متفق عليها مسبقاً (Baud Rate).",
    "technicalDeepDive": "Data transfer between computers and microcontrollers fundamentally occurs in two ways: Parallel and Serial. \n\n1. **Parallel Transfer**: Multiple bits (e.g., 8, 16, or 32 bits) are transmitted simultaneously over multiple data lines. While inherently faster over short distances (like internal CPU buses), its primary disadvantage over long distances is the requirement of more wires, making it bulky, expensive, and susceptible to crosstalk and clock skew.\n\n2. **Serial Transfer**: Data is transmitted bit by bit over a single line. It requires fewer wires, reducing physical complexity and cost, making it ideal for long-distance communication.\n\nSerial communication is further classified into:\n- **Synchronous**: Relies on a shared clock signal between the sender and receiver to synchronize data sampling.\n- **Asynchronous**: Does not use a shared clock. Instead, it relies on predefined communication parameters (Baud Rate) and data framing (Start and Stop bits) to synchronize the transmission. In standard UART terminology, the idle state of the line is known as 'Mark' (logic 1 or high), and the active/start state is 'Space' (logic 0 or low).",
    "profFocus": "يركز الدكتور على أن النقل التسلسلي هو الخيار الأمثل للمسافات الطويلة، وأن فهم الفرق بين 'Mark' (Logic 1) و 'Space' (Logic 0) هو حجر الأساس لفهم حالة خط النقل في وضع السكون (Idle) وأثناء الإرسال.",
    "mermaidCode": `graph TD
    subgraph Parallel
        S1["Sender"] -- "Bit 0" --> R1["Receiver"]
        S1 -- "Bit 1" --> R1
        S1 -- "Bit 7" --> R1
    end
    subgraph Serial
        S2["Sender"] -- "Bits 0-7 sequentially" --> R2["Receiver"]
    end
    subgraph Timing
        A["Synchronous (Shared Clock)"]
        B["Asynchronous (No Clock, uses Framing)"]
    end`,
    "imageDesc": "يوضح هذا المخطط الفروق الأساسية بين أنواع الاتصال. في القسم الأول (Parallel)، نرى كيف يتم إرسال البتات من 0 إلى 7 بشكل متوازٍ عبر خطوط متعددة بين المرسل والمستقبل. في القسم الثاني (Serial)، يتم إرسال البتات بشكل متسلسل عبر خط واحد. أما القسم الثالث (Timing)، فيبين تقسيم الاتصال التسلسلي إلى متزامن يعتمد على إشارة ساعة مشتركة، وغير متزامن يعتمد على إطار البيانات بدون إشارة ساعة."
  },
  {
    "title": "UART, USART, and Asynchronous Framing",
    "conceptOverview": "يشرح الدكتور بروتوكولات UART و USART، وكيفية تكوين إطار البيانات (Framing) في النقل غير المتزامن. نظراً لغياب إشارة الساعة، يتم تغليف البيانات بـ Start Bit (قيمته 0) للإعلان عن بداية البيانات، و Stop Bit (قيمته 1) للإعلان عن نهايتها. كما يناقش التوصيل الفعلي للـ UART والذي يحتاج إلى 3 أطراف فقط (TxD, RxD, Ground). لتوصيل الميكروكنترولر بحاسوب حديث، نستخدم محول (USB to Serial) ونعكس أطراف الإرسال والاستقبال، ثم نستخدم برامج مثل PuTTY أو TeraTerm للتواصل.",
    "technicalDeepDive": "The hardware handling asynchronous serial communication is the **UART** (Universal Asynchronous Receiver-transmitter). A related protocol, **USART** (Universal Synchronous-Asynchronous Receiver-transmitter), can operate in both synchronous and asynchronous modes.\n\n**Framing**: Because asynchronous communication lacks a shared clock, data must be encapsulated in a frame for proper detection. The standard frame consists of:\n- **Start Bit**: Always a logic 0 (Low / Space). It signals the receiver that a new data packet is arriving, causing a transition from the idle High state to Low.\n- **Data Bits**: Usually 8 bits, transmitted LSB first.\n- **Stop Bit(s)**: Always a logic 1 (High / Mark). It signals the end of the data packet and ensures the line returns to the idle state.\n\n**Physical Connection**: The simplest physical connection for a PC to communicate with a microcontroller via UART requires only three pins: **TxD** (Transmit Data), **RxD** (Receive Data), and **Ground** (Common ground is mandatory for voltage reference).\n\n**Modern Interfacing**: Modern PCs lack built-in RS-232/UART COM ports. To bridge this gap, a **USB to Serial UART module** is required. The connection must be cross-coupled: the microcontroller's TxD connects to the module's RxD, and the microcontroller's RxD connects to the module's TxD. Software terminal emulators like **PuTTY** or **TeraTerm** are used on the PC to open a virtual COM port and interface with the microcontroller.",
    "profFocus": "يؤكد الدكتور بشدة على قاعدة التوصيل العكسي (TxD to RxD and RxD to TxD) عند استخدام محول USB، مشيراً إلى أن الخطأ في هذا التوصيل هو السبب الأكثر شيوعاً لعدم استجابة الدوائر العملية. كما يبرز أهمية برامج الـ Terminal كأداة تشخيص أساسية للمهندس.",
    "mermaidCode": `sequenceDiagram
    participant PC as "USB-UART Module (PC)"
    participant MCU as "8051 Microcontroller"
    Note over PC, MCU: 3-Wire Connection
    PC-->>MCU: Common Ground
    MCU->>PC: MCU TxD connects to PC RxD
    PC->>MCU: PC TxD connects to MCU RxD
    Note over MCU: Framing Process
    MCU->>MCU: Line Idle (Mark = 1)
    MCU->>MCU: Start Bit (Space = 0)
    MCU->>MCU: 8 Data Bits
    MCU->>MCU: Stop Bit (Mark = 1)`,
    "imageDesc": "يوضح هذا المخطط التتابعي كيفية توصيل وتشغيل واجهة UART. يبدأ بتوضيح التوصيل ثلاثي الأسلاك بين الميكروكنترولر (8051) ومحول USB-UART في الحاسوب، حيث يتم توصيل الأرضي المشترك، وربط خط الإرسال (TxD) من الميكروكنترولر بخط الاستقبال (RxD) في الحاسوب والعكس. ثم يشرح المخطط عملية تغليف البيانات (Framing Process)، بدءاً من حالة السكون (Mark = 1)، مروراً ببت البداية (Space = 0)، ثم 8 بتات من البيانات، وأخيراً بت النهاية (Mark = 1)."
  },
  {
    "title": "8051 UART Registers: SBUF and SCON",
    "conceptOverview": "يتناول هذا الجزء المسجلات المخصصة للـ UART في الـ 8051. مسجل SBUF هو وعاء يحمل البيانات (8 بت) المراد إرسالها أو التي تم استقبالها. أما مسجل SCON فهو لوحة التحكم التي تحدد وضع التشغيل (Mode)، وتفعل خاصية الاستقبال (REN)، وتدير بتات البيانات التاسعة (TB8/RB8)، وتحتوي على أعلام المقاطعة (TI و RI).",
    "technicalDeepDive": "The 8051 UART heavily relies on two 8-bit Special Function Registers:\n\n1. **SBUF (Serial Buffer)**: This register is used solely to hold data for serial communication. Physically, it acts as two distinct registers: one for writing (transmit buffer) and one for reading (receive buffer). Writing a byte to SBUF automatically initiates the framing and transmission process.\n\n2. **SCON (Serial Control)**: Used to program the start bit, stop bit, data bits, and operational modes.\nKey bits in SCON include:\n- **SM0 and SM1**: Mode selection bits. Setting SM0=0 and SM1=1 selects **Mode 1**, which is the standard 8-bit data framing with 1 start bit and 1 stop bit.\n- **SM2**: Primarily utilized in Modes 2 and 3 for multiprocessor communication environments.\n- **REN (Receive Enable)**: Must be set to 1 to enable the 8051 to receive serial data.\n- **TB8 and RB8**: Represent the 9th bit transmitted and received, respectively, exclusively in 9-bit communication modes (Modes 2 and 3).\n- **TI and RI**: Transmit and Receive Interrupt flags.\n\nLoading SCON with **50H** (01010000 in binary) is standard practice. This selects Mode 1 and enables the receiver (REN=1).",
    "profFocus": "يسلط الدكتور الضوء على القيمة 50H لمسجل SCON، معتبراً إياها 'الرقم السحري' لتهيئة الاتصال التسلسلي القياسي. كما يشدد على التفريق بين وظيفتي SBUF كمسجل للإرسال والاستقبال في نفس الوقت رغم أنه يحمل نفس الاسم البرمجي.",
    "mermaidCode": `graph TD
    SCON["SCON Register (50H)"] --> SM0["Bit 7: SM0 = 0"]
    SCON --> SM1["Bit 6: SM1 = 1 (Mode 1)"]
    SCON --> SM2["Bit 5: SM2 = 0"]
    SCON --> REN["Bit 4: REN = 1 (Receive Enable)"]
    SCON --> TB8["Bit 3: TB8 = 0"]
    SCON --> RB8["Bit 2: RB8 = 0"]
    SCON --> TI["Bit 1: TI (Tx Interrupt)"]
    SCON --> RI["Bit 0: RI (Rx Interrupt)"]
    SBUF_TX["SBUF (Transmit Buffer)"]
    SBUF_RX["SBUF (Receive Buffer)"]
    SCON -- "Controls Framing" --> SBUF_TX
    SCON -- "Controls Framing" --> SBUF_RX`,
    "imageDesc": "يستعرض هذا المخطط الهيكلي تركيبة مسجل التحكم SCON في الميكروكنترولر 8051 عند تهيئته بالقيمة 50H. يوضح المخطط تفاصيل كل بت، مثل اختيار وضع التشغيل الأول (Mode 1) عبر SM0 و SM1، وتفعيل الاستقبال (REN). كما يظهر كيف يتحكم هذا المسجل في عملية تغليف البيانات لكل من مسجل إرسال البيانات (SBUF_TX) ومسجل استقبال البيانات (SBUF_RX)."
  },
  {
    "title": "Baud Rate Generation: Crystal 11.0592 MHz and Timer 1",
    "conceptOverview": "يشرح الدكتور كيفية حساب سرعة النقل (Baud Rate) في الـ 8051. السر يكمن في استخدام كريستالة بتردد 11.0592 ميجاهرتز بالتحديد. هذا التردد العجيب ينقسم ليولد ترددات تتوافق تماماً مع السرعات القياسية (مثل 9600 و 4800) بدون أي نسبة خطأ. نستخدم Timer 1 في الوضع الثاني (Mode 2 - Auto Reload) عبر وضع القيمة 20H في TMOD، ثم نحسب قيمة سالبة نضعها في مسجل TH1.",
    "technicalDeepDive": "In the 8051, **Timer 1 configured in Mode 2 (8-bit auto-reload)** is standardly used to set the baud rate. To configure this, the value **20H** is loaded into the **TMOD** register.\n\n**Baud Rate Calculation Math**:\n1. **Machine Cycle Frequency**: The 8051 divides the external crystal frequency by 12. Using a mathematically precise **11.0592 MHz crystal**, the machine cycle fed to the timer is `11.0592 MHz / 12 = 921.6 kHz`.\n2. **UART Division**: The UART circuitry further divides this timer overflow rate by **32** (in default mode 1). Thus, the base frequency for the timer overflow is `921.6 kHz / 32 = 28,800 Hz`.\n3. **Why 11.0592 MHz?** This specific crystal is frequently used because the resulting 28,800 Hz perfectly divides down to standard baud rates without error, ensuring reliable communication.\n\n**Calculating TH1 Reload Value**:\nWe divide 28,800 by the desired baud rate to find the timer ticks needed, and load the two's complement (negative value) into TH1.\n- **For 9600 Baud**: `28800 / 9600 = 3`. The timer must count 3 steps to overflow. Loading TH1 with **-3 (which is FDH in hexadecimal)** achieves exactly 9600 baud.\n- **For 4800 Baud**: `28800 / 4800 = 6`. Loading TH1 with **-6 (or FAH)** achieves exactly 4800 baud.",
    "profFocus": "يحذر الدكتور من محاولة استخدام كريستالة 12 ميجاهرتز للتواصل التسلسلي مع الحاسوب، لأن قسمتها لا تعطي أرقاماً صحيحة للسرعات القياسية، مما يولد نسبة خطأ عالية تجعل البيانات المستقبلة مشوهة. التردد 11.0592 ميجاهرتز هو شرط أساسي لنجاح الاتصال.",
    "mermaidCode": `graph TD
    A["Crystal: 11.0592 MHz"] -->|"Divide by 12"| B["Machine Cycle: 921.6 kHz"]
    B -->|"Divide by 32"| C["Base Frequency: 28800 Hz"]
    C -->|"Divide by 9600 Baud"| D["Timer Ticks: 3"]
    D -->|"Two's Complement"| E["TH1 = -3 (FDH)"]
    C -->|"Divide by 4800 Baud"| F["Timer Ticks: 6"]
    F -->|"Two's Complement"| G["TH1 = -6 (FAH)"]`,
    "imageDesc": "يشرح هذا المخطط التسلسلي خطوات حساب سرعة نقل البيانات (Baud Rate). يبدأ بتردد الكريستالة 11.0592 ميجاهرتز الذي يُقسم على 12 للحصول على تردد دورة الآلة (921.6 كيلوهرتز)، ثم يُقسم على 32 للحصول على التردد الأساسي (28800 هرتز). بعد ذلك، يوضح كيفية حساب قيمة المؤقت عبر قسمة التردد الأساسي على سرعة النقل المطلوبة (مثل 9600 أو 4800)، وتحويل الناتج إلى المتمم الثنائي (Two's Complement) ليتم تخزينه في مسجل TH1 بقيم مثل FDH أو FAH."
  },
  {
    "title": "Software Implementation: TI/RI Flags and String Transmission",
    "conceptOverview": "يركز هذا القسم على الجانب البرمجي وتتبع أعلام (Flags) الإرسال والاستقبال. عند الانتهاء من إرسال البايت، يرفع الهاردوير علم TI (Transmit Interrupt). وعند اكتمال استقبال بايت جديد، يرفع علم RI (Receive Interrupt). الفخ هنا أن المبرمج يجب أن يقوم بتصفير هذه الأعلام يدوياً في الكود. كما يوضح كيفية إرسال نصوص كاملة في لغة C باستخدام المؤشرات (Pointers) والتكرار حتى الوصول لحرف نهاية النص (Null terminator).",
    "technicalDeepDive": "Proper software flow control relies on monitoring the hardware flags in the SCON register:\n\n- **TI (Transmit Interrupt) Flag**: When data is written to SBUF, hardware begins framing and transmission. The hardware sets the TI flag to 1 **at the end of the transmission of the stop bit**. Software monitors this using instructions like `JNB TI, label` (Jump if Not Bit) to wait. Once TI is 1, **the programmer must clear the TI flag to 0 using software** before initiating the next byte transmission.\n- **RI (Receive Interrupt) Flag**: When the receiver detects a valid frame, it shifts the data into the receive SBUF. Hardware sets the RI flag to 1 **once the new character has been fully received** (at the stop bit). Software polls RI, reads the byte from SBUF, and **immediately clears the RI flag to 0** to prepare for the next incoming byte.\n\n**Transmitting Strings in C**:\nSince SBUF can only hold one byte at a time, strings cannot be written simultaneously. In C programming, the string is handled as a character array. It is passed as a pointer and transmitted character by character using a loop until the **null terminator ('\\\\0' or 0)** is reached.\n```c\nvoid SendString(char *str) {\n    int i = 0;\n    while(str[i] != '\\\\0') {\n        SBUF = str[i];     // Load byte\n        while(TI == 0);    // Wait for TI flag\n        TI = 0;            // Clear TI flag\n        i++;\n    }\n}\n```",
    "profFocus": "يعتبر الدكتور أن نسيان كتابة سطر `TI = 0` أو `RI = 0` هو الخطأ البرمجي الأكثر شيوعاً بين الطلاب، مما يؤدي إلى إرسال أول حرف فقط أو توقف البرنامج في حلقة مفرغة (Infinite Loop). كما يؤكد على أهمية فهم كيفية تعامل لغة C مع النصوص كمصفوفات تنتهي بالصفر.",
    "mermaidCode": `graph TD
    subgraph Tx Logic
        TxStart["Write Data to SBUF"] --> TxWait["Check if TI == 1"]
        TxWait -- "No" --> TxWait
        TxWait -- "Yes (Stop Bit Sent)" --> TxClear["Software: Clear TI = 0"]
        TxClear --> TxNext["Ready for Next Byte"]
    end
    subgraph Rx Logic
        RxWait["Check if RI == 1"]
        RxWait -- "No" --> RxWait
        RxWait -- "Yes (Byte Received)" --> RxRead["Read Data from SBUF"]
        RxRead --> RxClear["Software: Clear RI = 0"]
        RxClear --> RxNext["Ready for Next Byte"]
    end`,
    "imageDesc": "يوضح هذا المخطط المنطق البرمجي لعمليتي الإرسال والاستقبال في UART. في قسم الإرسال (Tx Logic)، تبدأ العملية بكتابة البيانات في SBUF، ثم الانتظار حتى يصبح علم الإرسال (TI) بواحد، وبعدها يجب تصفيره برمجياً استعداداً للبايت التالي. في قسم الاستقبال (Rx Logic)، يتم الانتظار حتى يصبح علم الاستقبال (RI) بواحد دلالة على استلام بايت، ثم تُقرأ البيانات من SBUF، ويُصفر العلم برمجياً لاستقبال البايت القادم."
  }
];
