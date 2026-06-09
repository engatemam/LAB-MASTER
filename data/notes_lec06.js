const notesLec06 = [
  {
    "title": "Introduction to Serial Communication: Parallel vs Serial",
    "conceptOverview": "يناقش الدكتور في هذا الجزء الفرق بين نقل البيانات بشكل متوازي (Parallel) وبشكل تسلسلي (Serial). يوضح أن النقل المتوازي، رغم كونه أسرع بكثير لنقله عدة بتات في نفس الوقت (مثل 8 بتات)، إلا أنه يتطلب عددًا كبيرًا من الأسلاك (Pins) مما يزيد من التكلفة والتعقيد في التوصيل مع الأجهزة الخارجية. لذلك، مع تطور سرعات الأجهزة، أصبح النقل التسلسلي هو المعيار السائد (مثل USB) لأنه يستخدم مسارات أقل، حيث يتم إرسال البتات بشكل متتابع، بت تلو الآخر.",
    "technicalDeepDive": "Data communication fundamentally occurs in two modes: Parallel and Serial. Parallel transfer sends multiple bits simultaneously using multiple wires (e.g., an 8-bit data bus), offering high speed but requiring high pin count and complex interfacing hardware. Serial transfer sends bits sequentially over a single line. Despite initially being slower, modern serial protocols (USB, I2C, SPI) have surpassed parallel interfaces in speed and efficiency due to reduced crosstalk and simplified cabling. Serial communication is further categorized into Synchronous (sharing a common clock signal between sender and receiver) and Asynchronous (no shared clock). The 8051 relies on UART (Universal Asynchronous Receiver-Transmitter) for asynchronous communication, as opposed to USART which adds synchronous capabilities.",
    "profFocus": "يركز الدكتور على أن معظم الأجهزة الحديثة (مثل الحواسيب المحمولة) تخلت عن النقل المتوازي وأصبحت تعتمد بالكامل على النقل التسلسلي (مثل منافذ USB) بسبب كفاءته وتوفيره لعدد الأطراف، مشيراً إلى أن النقل المتوازي أصبح من الماضي في أجهزة الكمبيوتر الحديثة.",
    "mermaidCode": `graph LR;
    subgraph Parallel Transfer
        S1["Sender"] -- "Bit 0" --> R1["Receiver"]
        S1 -- "Bit 1" --> R1
        S1 -- "Bit 7" --> R1
    end
    subgraph Serial Transfer
        S2["Sender"] -- "Bits 0-7 sequentially" --> R2["Receiver"]
    end`
  },
  {
    "title": "Asynchronous Communication, Framing, and UART",
    "conceptOverview": "يشرح الدكتور كيفية عمل النقل التسلسلي غير المتزامن (Asynchronous) باستخدام بروتوكول UART. بما أنه لا توجد إشارة مزامنة (Clock)، يجب تغليف البيانات بما يسمى 'Framing' لكي يتعرف المستقبل على بداية ونهاية البيانات. يتكون الإطار من 'Start Bit' بقيمة 0، ثم البيانات (غالباً 8 بتات)، ثم 'Stop Bit' أو أكثر بقيمة 1. قبل البدء يكون الخط في حالة 'Mark' أي 1، وبعد الانتهاء يعود لـ 'Space'.",
    "technicalDeepDive": "In asynchronous serial communication, there is no shared clock, meaning the receiver must independently sample the incoming data. This is achieved through data 'framing'. An 8-bit character is encapsulated by a Start bit (always Low, 0) and one or more Stop bits (always High, 1). The idle state of the transmission line is High (Logic 1), known as 'Mark'. The transition from High to Low signals the Start bit, preparing the receiver to sample the subsequent bits. The Stop bit ensures a transition back to the High state, completing the frame. The total frame length is typically 10 bits (1 start + 8 data + 1 stop). The simplest PC-to-microcontroller connection requires only 3 pins: Transmit (TxD), Receive (RxD), and Ground (GND). Transfer speed is measured in bps (bits per second) or Baud Rate.",
    "profFocus": "يؤكد الدكتور على أهمية فهم مكونات الـ Frame (Start bit = 0, Stop bit = 1) وأن هذه البتات تضاف تلقائياً بواسطة هاردوير الـ UART، ولا يتدخل المبرمج في وضعها يدوياً.",
    "mermaidCode": `sequenceDiagram
    participant Line as TxD Line State
    Note over Line: Idle State (Mark = 1)
    Line->>Line: Start Bit (0)
    Note over Line: Data Bit 0 (LSB)
    Note over Line: Data Bits 1-6
    Note over Line: Data Bit 7 (MSB)
    Line->>Line: Stop Bit (1)
    Note over Line: Idle State (Mark = 1)`
  },
  {
    "title": "Baud Rate Calculation and 8051 Timers",
    "conceptOverview": "يتطرق الدكتور إلى السرعات القياسية (Baud Rates) المستخدمة في التواصل التسلسلي، مثل 9600 و 4800. يشرح بالتفصيل كيف يحسب الميكروكنترولر هذه السرعات. للوصول لهذه السرعات القياسية، يجب استخدام كريستالة بتردد 11.0592 ميجاهرتز تحديداً. يتم قسمة هذا التردد على 12 للحصول على تردد الآلة (Machine Cycle)، ثم يقسم على 32 داخل دائرة الـ UART، فينتج تردد قدره 28800 هرتز. هذا الرقم يستخدم لتحديد القيمة السالبة التي ستوضع في مسجل Timer 1 للوصول للـ Baud Rate المطلوب.",
    "technicalDeepDive": "The 8051's UART requires a precise baud rate to synchronize with external devices. To achieve standard PC baud rates (e.g., 9600, 4800, 2400), an exact crystal oscillator frequency of 11.0592 MHz must be used. The hardware divides this frequency by 12 to yield the machine cycle frequency (11.0592 MHz / 12 = 921.6 kHz). For UART operations, this frequency is further divided by 32, resulting in exactly 28,800 Hz. Timer 1, configured in Mode 2 (8-bit auto-reload), is utilized as the baud rate generator. The TH1 register is loaded with a calculated value: TH1 = -(28800 / Desired Baud Rate). For example, for 9600 baud, TH1 = -(28800 / 9600) = -3 (which is 0xFD in hexadecimal). For 4800 baud, TH1 = -6 (0xFA). For 2400 baud, TH1 = -12 (0xF4).",
    "profFocus": "يُحذر الدكتور بشدة من استخدام أي تردد كريستالة آخر غير 11.0592 ميجاهرتز إذا أردت التواصل مع أجهزة الـ PC، لأن أي رقم آخر (مثل 12 ميجاهرتز) سيؤدي إلى إنتاج Baud Rates غير دقيقة بنسبة خطأ عالية، مما يتسبب في إرسال أو استقبال بيانات غير مفهومة (Garbage data).",
    "mermaidCode": `graph TD;
    A["Crystal Oscillator 11.0592 MHz"] --> B["Divide by 12"];
    B --> C["Machine Cycle 921.6 kHz"];
    C --> D["Divide by 32"];
    D --> E["UART Base Frequency 28800 Hz"];
    E --> F["Divide by Desired Baud Rate e.g. 9600"];
    F --> G["Timer TH1 Reload Value = 3 -> loaded as -3"]`
  },
  {
    "title": "SBUF and SCON Registers",
    "conceptOverview": "يشرح الدكتور المسجلات الأساسية المسؤولة عن التواصل التسلسلي: مسجل SBUF ومسجل SCON. مسجل SBUF (Serial Buffer) يتكون من 8 بتات ويُستخدم كوعاء لوضع البيانات المراد إرسالها أو استخراج البيانات المُستقبلة. بمجرد كتابة البيانات فيه، يبدأ الميكروكنترولر بإرسالها. أما مسجل SCON (Serial Control)، فيُستخدم لضبط إعدادات النقل مثل تحديد الـ Mode (نستخدم Mode 1 الذي يعتمد على 8 بتات وبيانات الـ Framing)، وكذلك تفعيل الاستقبال عبر البت (REN)، وفيه أيضاً أعلام الإرسال والاستقبال (TI و RI) التي تشير لانتهاء الإرسال أو وصول بيانات جديدة.",
    "technicalDeepDive": "Serial communication in the 8051 relies on two primary Special Function Registers (SFRs). 1. SBUF (Serial Buffer): An 8-bit register handling both transmission and reception. Writing to SBUF initiates serial transmission via the TxD pin. Reading from SBUF retrieves data received via the RxD pin. Physically, there are two separate SBUF registers (one for Tx, one for Rx) sharing the same address. 2. SCON (Serial Control): An 8-bit register configuring the UART mode. Its bit structure is [SM0, SM1, SM2, REN, TB8, RB8, TI, RI]. We configure SM0=0 and SM1=1 to select Mode 1 (8-bit UART, variable baud rate framed with start/stop bits). SM2 is for multiprocessor communication (kept 0). REN (Receive Enable) must be set to 1 to allow data reception. TI (Transmit Interrupt) flag is raised by hardware when a byte has finished transmitting. RI (Receive Interrupt) flag is raised when a full byte is received. SCON is typically initialized with 0x50 (01010000 in binary), setting Mode 1 and enabling REN.",
    "profFocus": "يؤكد الدكتور على أهمية مراقبة الأعلام (Flags) الـ TI والـ RI. لا يتم تصفير هذه الأعلام تلقائياً بواسطة الهاردوير بعد رفعها، بل يجب على المبرمج تصفيرها برمجياً (Clear TI / Clear RI) لكي يتمكن الميكروكنترولر من إرسال أو استقبال البايت التالي بنجاح.",
    "mermaidCode": `classDiagram
    class SCON {
        SM0: 0
        SM1: 1
        SM2: 0
        REN: 1
        TB8: 0
        RB8: 0
        TI: 0
        RI: 0
    }
    class SBUF_TX
    class SBUF_RX
    SCON --> SBUF_TX : Controls
    SCON --> SBUF_RX : Controls`
  },
  {
    "title": "Programming Serial Data Transmitting and Receiving",
    "conceptOverview": "يقدم الدكتور خطوات برمجة الميكروكنترولر للإرسال التسلسلي. تبدأ الخطوات بضبط التايمر (TMOD = 0x20) ليعمل Timer 1 في Mode 2، ثم وضع القيمة السالبة في مسجل TH1 بناءً على الـ Baud Rate. يتم ضبط مسجل SCON بالقيمة 50H لاختيار Mode 1 وتفعيل الاستقبال. يتم تشغيل التايمر عبر (TR1 = 1). للإرسال، يتم مسح علم TI، ووضع البيانات في SBUF، ثم الانتظار في حلقة (While loop) حتى يصبح TI بواحد، مما يعني اكتمال الإرسال، ثم يتم تصفيره. للاستقبال، ننتظر العكس حتى يصبح RI بواحد، نقرأ البيانات من SBUF، ونصفر علم الـ RI.",
    "technicalDeepDive": "The sequence to program 8051 UART initialization and communication involves specific steps: \n1. Initialization: Configure TMOD = 0x20 to set Timer 1 in Mode 2 (8-bit auto-reload). Load TH1 with the required reload value (e.g., TH1 = -3 for 9600 baud). Configure SCON = 0x50 to select UART Mode 1 (8-bit data, 1 start, 1 stop) and enable reception (REN=1). Start Timer 1 by setting TR1 = 1. \n2. Transmission Routine: Clear the TI flag (TI = 0). Write the character to SBUF (SBUF = 'A'). Wait synchronously by polling TI (`while(TI==0);`). Once the hardware completes shifting the byte out through the TxD pin, it sets TI=1. Clear TI before the next transmission. \n3. Reception Routine: Poll the RI flag (`while(RI==0);`). Once hardware shifts a full byte in from the RxD pin, it sets RI=1. Clear RI (RI = 0). Read the byte from SBUF (`char x = SBUF;`). In advanced C programs, strings are sent sequentially via pointer manipulation, iterating through characters to the transmit routine until a null-terminator (0x00) is encountered.",
    "profFocus": "يشير الدكتور إلى أسلوب برمجة متقدم ومُفضل لإرسال جملة كاملة (String)، حيث يتم تمرير مؤشر (Pointer) لدالة مخصصة، وتقوم هذه الدالة بالمرور على كل حرف، ترسله وتنتظر اكتمال إرساله، ثم تنتقل للحرف الذي يليه حتى تصل إلى حرف النهاية (Null character).",
    "mermaidCode": `flowchart TD;
    StartInit("Initialize UART") --> TMOD["TMOD = 0x20"];
    TMOD --> TH1["TH1 = -3 for 9600"];
    TH1 --> SCON["SCON = 0x50"];
    SCON --> TR1["TR1 = 1"];
    TR1 --> TxRxChoice{"Tx or Rx Routine?"};
    TxRxChoice -- Transmit --> ClrTI["Clear TI=0"];
    ClrTI --> LoadSBUF["SBUF = Data"];
    LoadSBUF --> WaitTI{"Is TI=1?"};
    WaitTI -- No --> WaitTI;
    WaitTI -- Yes --> DoneTx["Clear TI, Done"];
    TxRxChoice -- Receive --> WaitRI{"Is RI=1?"};
    WaitRI -- No --> WaitRI;
    WaitRI -- Yes --> ReadSBUF["Data = SBUF"];
    ReadSBUF --> ClrRI["Clear RI=0"];`
  },
  {
    "title": "PC Interfacing via USB to Serial UART Module",
    "conceptOverview": "يشرح الدكتور الجانب العملي من التوصيل والتطبيق. نظراً لأن الحواسيب الحديثة لا تحتوي على منفذ UART أو RS232 المباشر، يجب استخدام قطعة تحويل (USB to Serial UART Converter). يتم توصيل طرف الإرسال Tx من الميكروكنترولر بطرف الاستقبال Rx في المحول، وطرف الاستقبال Rx في الميكرو بطرف الإرسال Tx في المحول، مع توحيد الأرضي (Ground) لكلا الدائرتين. على جهاز الكمبيوتر، نحتاج لبرنامج Terminal (مثل Putty)، وتحديد الـ COM Port الخاص بالمحول وسرعة النقل (Baud Rate) التي يجب أن تتطابق تماماً مع ما تمت برمجته في الميكروكنترولر، لتتمكن من إرسال الأوامر (مثل 1 أو 2 لفتح وغلق الليدات) واستقبال الردود النصية من الميكروكنترولر.",
    "technicalDeepDive": "Physical interfacing between an 8051 and a modern PC requires a USB to Serial UART converter module (e.g., using CH340 or FT232 chips), as native serial ports are obsolete. The connections use a crossed/null-modem configuration: the 8051's TxD (Port 3.1) connects to the module's Rx pin, and the 8051's RxD (Port 3.0) connects to the module's Tx pin. Common ground (GND) between the microcontroller circuit and the USB module is mandatory. On the PC side, the module mounts as a Virtual COM Port (verified via Windows Device Manager). A Serial Terminal software (like PuTTY or Tera Term) is used to establish communication. The software configuration must exactly match the 8051's programmed settings: correct COM port, matching baud rate (e.g., 9600), 8 data bits, 1 stop bit, and no parity. Typing in the terminal sends ASCII characters to the microcontroller, which evaluates them using logic structures (e.g., `if (number == '1')`) to execute hardware control, such as toggling LEDs, and sends responsive status strings back to the terminal.",
    "profFocus": "أشار الدكتور إلى خطأ شائع جداً يقع فيه الطلاب وهو توصيل Tx بـ Tx و Rx بـ Rx، وأكد أن التوصيل يجب أن يكون متعاكساً (Tx مع Rx) لكي يتحدث المرسل مع المستقبل. كما أشار إلى أن الضغط على أزرار لوحة المفاتيح يرسل بيانات للبرنامج، ولكن الحرف المكتوب قد لا يظهر على الشاشة إلا إذا كان هناك ميزة الـ 'Local Echo' مفعلة في برنامج الـ Terminal أو إذا برمجت الميكروكنترولر ليعيد إرسال الحرف الذي استقبله.",
    "mermaidCode": `graph LR;
    subgraph 8051 Microcontroller
        P31["P3.1 / TxD"]
        P30["P3.0 / RxD"]
        G1["GND"]
    end
    subgraph USB-to-UART Converter
        Rx["Rx Pin"]
        Tx["Tx Pin"]
        G2["GND"]
        USB["USB Interface"]
    end
    subgraph PC
        Port["COM Port"]
        Term["Terminal Software e.g., PuTTY"]
    end
    P31 -->|"Data"| Rx
    Tx -->|"Data"| P30
    G1 --- G2
    USB <--> Port
    Port <--> Term`
  }
];

