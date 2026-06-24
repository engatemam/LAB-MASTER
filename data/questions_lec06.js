const lec06Data = [
  {
    category: "Lecture 06",
    text: "In serial communication, how many data lines are minimally required to transmit an 8-bit byte from one device to another?",
    options: ["1 line", "8 lines", "9 lines", "16 lines"],
    correctIndex: 0,
    explanation: "الاتصال التسلسلي (Serial) يرسل البيانات بت وراء الآخر عبر خط واحد للبيانات (Tx)، بخلاف التوازي (Parallel) الذي يحتاج خطاً لكل بت."
  },
  {
    category: "Lecture 06",
    text: "Parallel communication is generally faster than serial communication over very short distances, but it is impractical for long distances due to the large number of wires required.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "التوازي أسرع لأنه ينقل كل البتات في نفس الوقت، لكنه مكلف جداً للمسافات الطويلة لكثرة الأسلاك."
  },
  {
    category: "Lecture 06",
    text: "The acronym UART stands for ........",
    options: ["Universal Asynchronous Receiver-Transmitter", "Universal Audio Receiver-Transmitter", "United Advanced Radio Transceiver", "Universal Asynchronous Router-Topology"],
    correctIndex: 0,
    explanation: "الـ UART هي الدائرة أو البروتوكول المسؤول عن إرسال واستقبال البيانات التسلسلية غير المتزامنة."
  },
  {
    category: "Lecture 06",
    text: "What is the fundamental difference between Synchronous and Asynchronous serial communication?",
    options: ["Asynchronous communication is much faster", "Synchronous communication shares a common clock signal between sender and receiver, while asynchronous does not", "Synchronous uses 1 wire, asynchronous uses 8 wires", "Asynchronous can only receive data"],
    correctIndex: 1,
    explanation: "في الـ Synchronous (مثل SPI و I2C) يوجد خط خاص للـ Clock لضبط التزامن. أما الـ Asynchronous (مثل UART) فلا يوجد خط كلوك بينهما، ويعتمدان على الاتفاق المسبق على سرعة النقل (Baud Rate)."
  },
  {
    category: "Lecture 06",
    text: "Which communication type is widely used for character-oriented data transfers (e.g., sending ASCII characters one by one)?",
    options: ["Synchronous", "Asynchronous", "Parallel", "DMA"],
    correctIndex: 1,
    explanation: "الـ Asynchronous (UART) مثالي لإرسال الأحرف المتقطعة، كل حرف يُغلف بمفرده."
  },
  {
    category: "Lecture 06",
    text: "A USART chip can perform both synchronous and asynchronous communication.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "حرف S في USART يشير إلى Synchronous، وحرف A يشير إلى Asynchronous، فهو يدعم النظامين."
  },
  {
    category: "Lecture 06",
    text: "The simplest full-duplex serial connection between a PC and an 8051 microcontroller requires a minimum of how many pins?",
    options: ["2 (TxD, RxD)", "3 (TxD, RxD, Ground)", "4 (TxD, RxD, VCC, Ground)", "9 (DB9 connector)"],
    correctIndex: 1,
    explanation: "للاتصال المزدوج الكامل نحتاج خط إرسال Tx، خط استقبال Rx، وطرف أرضي مشترك Ground لتوحيد الجهد."
  },
  {
    category: "Lecture 06",
    text: "In the 8051 microcontroller, which pins of Port 3 are dedicated to UART serial communication?",
    options: ["P3.0 (RxD) and P3.1 (TxD)", "P3.4 (T0) and P3.5 (T1)", "P3.2 (INT0) and P3.3 (INT1)", "P3.6 (WR) and P3.7 (RD)"],
    correctIndex: 0,
    explanation: "P3.0 هو طرف الاستقبال RxD، و P3.1 هو طرف الإرسال TxD."
  },
  {
    category: "Lecture 06",
    text: "When connecting a USB-to-Serial module to the 8051, the TxD pin of the module must be connected to the ........ pin of the 8051.",
    options: ["TxD", "RxD", "VCC", "Reset"],
    correctIndex: 1,
    explanation: "إرسال الطرف الأول يجب أن يقابله استقبال في الطرف الثاني (Tx to Rx) والعكس."
  },
  {
    category: "Lecture 06",
    text: "In serial data communication, the term 'Baud Rate' refers to ........",
    options: ["The voltage level of the signal", "The number of start bits used", "The rate of data transfer in bits per second (bps)", "The frequency of the crystal oscillator"],
    correctIndex: 2,
    explanation: "الـ Baud Rate هو سرعة نقل البيانات وتقاس بالبت في الثانية (Bits per second)."
  },
  {
    category: "Lecture 06",
    text: "In asynchronous transmission, 'Framing' refers to placing the actual 8-bit data character between ........",
    options: ["Two parity bits", "A Start bit and a Stop bit(s)", "A Clock pulse and a Reset pulse", "0xFF and 0x00"],
    correctIndex: 1,
    explanation: "التغليف (Framing) يتم بوضع بت بداية (Start) قبل الداتا وبت نهاية (Stop) بعدها لكي يتعرف المستقبل على حدود الحرف."
  },
  {
    category: "Lecture 06",
    text: "In standard UART framing, the Start bit is always a ........ and the Stop bit is always a ........",
    options: ["1 (High), 0 (Low)", "0 (Low), 1 (High)", "1 (High), 1 (High)", "0 (Low), 0 (Low)"],
    correctIndex: 1,
    explanation: "بت البداية دائماً 0 (لأن الخط في حالة الراحة يكون 1)، وبت النهاية دائماً 1 ليعيد الخط لحالة الراحة."
  },
  {
    category: "Lecture 06",
    text: "When there is no data being transmitted, the serial communication line is held in a Logic 1 state. This state is known as ........",
    options: ["Space", "Mark", "Idle zero", "Start condition"],
    correctIndex: 1,
    explanation: "في علم الاتصالات، حالة الراحة التي يكون فيها الخط High (1) تسمى Mark، وحالة الـ 0 تسمى Space."
  },
  {
    category: "Lecture 06",
    text: "If you transmit the ASCII character 'A' (which is 0x41 or 01000001 in binary) over UART with 1 stop bit, how many bits are physically transmitted over the wire?",
    options: ["8 bits", "9 bits", "10 bits", "11 bits"],
    correctIndex: 2,
    explanation: "1 بت بداية + 8 بت داتا + 1 بت نهاية = 10 بت لكل حرف."
  },
  {
    category: "Lecture 06",
    text: "The UART receiver uses the Stop bit(s) to verify that the frame was received without errors and to prepare for the next Start bit.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "بت النهاية يضمن عودة الخط لحالة High (Mark) حتى يتمكن المستقبل من اكتشاف انتقال الـ High to Low الذي يمثل بت البداية القادم."
  },
  {
    category: "Lecture 06",
    text: "Which of the following crystal oscillator frequencies is STRICTLY RECOMMENDED by Dr. Emad for standard 8051 serial communication?",
    options: ["12.0000 MHz", "8.0000 MHz", "11.0592 MHz", "16.0000 MHz"],
    correctIndex: 2,
    explanation: "هذا التردد العجيب (11.0592 MHz) عند قسمته يعطي أرقاماً صحيحة لتوليد سرعات الـ Baud Rate القياسية (مثل 9600) بدون أي نسبة خطأ."
  },
  {
    category: "Lecture 06",
    text: "If a 12 MHz crystal is used instead of an 11.0592 MHz crystal for serial communication, what is the most likely result?",
    options: ["Communication will be exactly 10% faster", "The microcontroller will not boot up", "The baud rate will have a fractional error, leading to reception of 'garbage' data", "Timer 1 will stop working entirely"],
    correctIndex: 2,
    explanation: "استخدام 12 MHz لا يعطي أرقاماً صحيحة عند القسمة، مما ينتج عنه عدم تطابق في التوقيتات (Error)، فيقرأ المستقبل حروفاً مشوهة (Garbage)."
  },
  {
    category: "Lecture 06",
    text: "In the 8051, the internal UART circuitry further divides the Machine Cycle frequency by ........ to calculate the final baud rate.",
    options: ["12", "32", "256", "2"],
    correctIndex: 1,
    explanation: "قانون حساب البود ريت في المايكروكنترولر: Baud Rate = (Machine Cycle Frequency) / 32 / (256 - TH1)."
  },
  {
    category: "Lecture 06",
    text: "Assuming an 11.0592 MHz crystal, the machine cycle frequency is 921.6 kHz. After dividing by 32 for the UART, what is the base frequency used to determine TH1?",
    options: ["9600 Hz", "28800 Hz", "115200 Hz", "1000 Hz"],
    correctIndex: 1,
    explanation: "921600 / 32 = 28800 هرتز. هذا هو الرقم السحري الذي نقسمه على الـ Baud Rate المطلوب لنعرف قيمة شحن التايمر."
  },
  {
    category: "Lecture 06",
    text: "To generate a standard Baud Rate of 9600 using an 11.0592 MHz crystal, the required reload value for TH1 is ........",
    options: ["-3 (FD Hex)", "-6 (FA Hex)", "-12 (F4 Hex)", "-24 (E8 Hex)"],
    correctIndex: 0,
    explanation: "نقسم (28800 / 9600) = 3. وبما أن التايمر يعد تصاعدياً نضع القيمة بالسالب TH1 = -3."
  },
  {
    category: "Lecture 06",
    text: "If you want a Baud Rate of 4800 (which is exactly half of 9600), what value should you load into TH1?",
    options: ["-3", "-6 (FA Hex)", "-1.5", "0"],
    correctIndex: 1,
    explanation: "28800 / 4800 = 6. إذن TH1 = -6."
  },
  {
    category: "Lecture 06",
    text: "Which timer MUST be used to generate the Baud Rate for 8051 serial communication in Mode 1?",
    options: ["Timer 0", "Timer 1", "Either Timer 0 or Timer 1", "The Watchdog Timer"],
    correctIndex: 1,
    explanation: "هاردوير الـ 8051 مصمم ليربط اليو ارت (UART Mode 1 & 3) بـ Timer 1 فقط لتوليد البود ريت."
  },
  {
    category: "Lecture 06",
    text: "When using Timer 1 for baud rate generation, which mode MUST it be configured in?",
    options: ["Mode 0 (13-bit)", "Mode 1 (16-bit)", "Mode 2 (8-bit auto-reload)", "Mode 3 (Split timer)"],
    correctIndex: 2,
    explanation: "يجب استخدام Mode 2 (Auto-reload) لضمان ثبات البود ريت واستمراريته أوتوماتيكياً دون تدخل السوفتوير لتجنب أي أخطاء في التوقيت."
  },
  {
    category: "Lecture 06",
    text: "Based on the previous questions, what is the mandatory value to load into the TMOD register for standard serial communication?",
    options: ["0x02", "0x20", "0x50", "0x11"],
    correctIndex: 1,
    explanation: "0x20 بالثنائي (0010 0000) تضبط Timer 1 على المود 2، وتترك Timer 0 مُطفأ. وهذا هو الإعداد القياسي للبود ريت."
  },
  {
    category: "Lecture 06",
    text: "Which 8-bit register is used solely to hold the data byte being transmitted or the data byte just received?",
    options: ["SCON", "TMOD", "PCON", "SBUF"],
    correctIndex: 3,
    explanation: "الـ SBUF (Serial Buffer) هو صندوق البريد. تضع فيه الداتا للإرسال، وتقرأ منه الداتا المستلمة."
  },
  {
    category: "Lecture 06",
    text: "Writing a byte to the SBUF register automatically triggers the 8051 hardware to start transmitting it serially over the TxD pin.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "مجرد كتابة السطر `SBUF = 'A';` تعطي أمراً فورياً للهاردوير ببدء التغليف (Start/Stop) والإرسال."
  },
  {
    category: "Lecture 06",
    text: "Physically, SBUF consists of two separate registers (one write-only for transmit, one read-only for receive) that share the same address.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "برغم أننا نستخدم اسم SBUF في الحالتين، إلا أن الهاردوير الداخلي يوجه عملية الكتابة لمسجل الإرسال، وعملية القراءة لمسجل الاستقبال منعاً للتصادم."
  },
  {
    category: "Lecture 06",
    text: "The register used to configure the UART mode (e.g., 8-bit UART) and enable reception is the ........ register.",
    options: ["TMOD", "IE", "SCON", "SBUF"],
    correctIndex: 2,
    explanation: "الـ SCON (Serial Control) يحتوي على بتات التحكم مثل SM0, SM1, REN, TI, RI."
  },
  {
    category: "Lecture 06",
    text: "To configure the 8051 for 8-bit UART variable baud rate (Serial Mode 1) and to enable the receiver (REN=1), what Hex value is loaded into SCON?",
    options: ["0x20", "0x50", "0x90", "0xFF"],
    correctIndex: 1,
    explanation: "0x50 بالثنائي (0101 0000). البت رقم 6 هو SM1=1 (لضبط المود 1)، والبت رقم 4 هو REN=1 (لتفعيل الاستقبال)."
  },
  {
    category: "Lecture 06",
    text: "The TI (Transmit Interrupt) flag is set to 1 by ........ when the last bit (stop bit) of a byte is successfully transmitted.",
    options: ["The programmer", "The hardware", "The Putty software", "Timer 0"],
    correctIndex: 1,
    explanation: "الهاردوير يرفع الفلاج TI لـ 1 تلقائياً ليعلمك أن الصندوق (SBUF) أصبح فارغاً وجاهزاً لإرسال بايت جديد."
  },
  {
    category: "Lecture 06",
    text: "After the TI flag is set to 1 by the hardware, the hardware will automatically clear it back to 0 for the next transmission.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "هذه قاعدة ذهبية: الهاردوير يرفع الفلاج (TI أو RI) فقط، ولكن السوفتوير (المبرمج) هو المسؤول عن إعادته للصفر (`TI = 0;`)."
  },
  {
    category: "Lecture 06",
    text: "The RI (Receive Interrupt) flag is set to 1 by the hardware when ........",
    options: ["SBUF is written to", "A complete frame (including stop bit) has been successfully received", "The start bit is detected", "Timer 1 overflows"],
    correctIndex: 1,
    explanation: "الهاردوير يرفع RI لـ 1 ليقول لك 'يوجد رسالة جديدة كاملة في SBUF، يرجى قراءتها'."
  },
  {
    category: "Lecture 06",
    text: "If the REN (Receive Enable) bit in SCON is set to 0, the 8051 will ........",
    options: ["Be able to receive data normally", "Ignore any incoming data on the RxD pin", "Stop transmitting data", "Change the baud rate"],
    correctIndex: 1,
    explanation: "بت الـ REN هو المفتاح الرئيسي للاستقبال. إذا كان 0، فكأنك أغلقت أذن المايكروكنترولر."
  },
  {
    category: "Lecture 06",
    text: "In the C code line 'while(TI == 0);', the microcontroller is ........",
    options: ["Generating a delay", "Waiting for the current byte in SBUF to be fully transmitted", "Waiting to receive a new byte", "Halting the program forever"],
    correctIndex: 1,
    explanation: "هذه الحلقة تجمد المعالج مؤقتاً حتى ينتهي إرسال الحرف بالكامل (يصبح TI=1) لضمان عدم الكتابة فوقه بحرف جديد."
  },
  {
    category: "Lecture 06",
    text: "What is the correct sequence to initialize the 8051 for Serial Transmission at 9600 baud?",
    options: ["TMOD=0x20; TH1=-3; SCON=0x50; TR1=1;", "SCON=0x50; TMOD=0x01; TR0=1;", "TH1=253; TMOD=0x50; SCON=0x20; TR1=1;", "TR1=1; SCON=0x50; TMOD=0x20;"],
    correctIndex: 0,
    explanation: "هذا هو التسلسل القياسي: ضبط المود (TMOD)، شحن البود ريت (TH1)، ضبط السيريال وتفعيل الاستقبال (SCON)، ثم تشغيل التايمر (TR1)."
  },
  {
    category: "Lecture 06",
    text: "Before writing a new character to SBUF inside a transmission loop, what MUST the programmer do to the TI flag?",
    options: ["Set TI = 1", "Clear TI = 0", "Read TI into a variable", "Ignore it"],
    correctIndex: 1,
    explanation: "بمجرد خروجك من حلقة `while(TI==0)` يجب أن تمسح الفلاج `TI = 0;` لتهيئته للحرف القادم."
  },
  {
    category: "Lecture 06",
    text: "To read a byte received by the 8051 over UART, the correct C code structure is:",
    options: ["while(TI==0); char x = SBUF; TI=0;", "while(RI==0); char x = SBUF; RI=0;", "SBUF = 'x'; while(RI==0);", "char x = P3;"],
    correctIndex: 1,
    explanation: "للاستقبال ننتظر الـ RI (RI==0)، ثم نقرأ الـ SBUF، ثم نمسح الـ RI للصفر."
  },
  {
    category: "Lecture 06",
    text: "In a complete program that transmits a string, why do we pass the string as a pointer (e.g., 'void Transmit_String(char *str)')?",
    options: ["Because SBUF can only hold pointers", "Because a string is an array of characters, and we need to loop through and transmit them one by one until reaching the Null terminator '\u0000'", "To increase the baud rate", "To encrypt the data"],
    correctIndex: 1,
    explanation: "الـ UART يرسل حرفاً واحداً فقط 8-bit كل مرة. لإرسال جملة (String)، نمرر مؤشراً ونعمل Loop ترسل حرفاً بحرف حتى نصل لنهاية الجملة (Null)."
  },
  {
    category: "Lecture 06",
    text: "Inside a string transmission function, the condition 'while(*str != 0)' or 'while(*str != '\u0000')' ensures that ........",
    options: ["The baud rate is zero", "The timer has not overflowed", "The loop stops when the end of the string is reached", "The TI flag is zero"],
    correctIndex: 2,
    explanation: "لغة الـ C تنهي أي String بحرف Null (قيمته 0). الشرط يضمن إرسال كل الحروف والتوقف عند الـ Null."
  },
  {
    category: "Lecture 06",
    text: "If your C program contains the line 'if (x == '1') { LED = 0; }', where 'x' is received from UART, it checks if ........",
    options: ["The binary value 1 was received", "The ASCII character '1' (Hex 31) was received from the PC keyboard", "The first pin is High", "SBUF is empty"],
    correctIndex: 1,
    explanation: "عندما تكتب '1' على الـ Putty في الكمبيوتر، يتم إرسال كود الـ ASCII الخاص به وهو 0x31. لذلك نقارن بحرف '1' بين علامتي تنصيص مفردة وليس القيمة 1."
  },
  {
    category: "Lecture 06",
    text: "You cannot use both Transmit (TxD) and Receive (RxD) functions simultaneously in the 8051 (Full Duplex).",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ UART في 8051 هو Full Duplex بالكامل، يمكنك الإرسال والاستقبال في نفس الوقت لأن لكل منهما مساره الخاص (TxD و RxD) ومسجل SBUF خاص."
  },
  {
    category: "Lecture 06",
    text: "If a student forgets to write 'TI = 0;' after sending a character in a loop, what will happen to the next character?",
    options: ["It will be sent perfectly", "The `while(TI==0);` loop will instantly break, causing characters to overwrite each other in SBUF before being sent, leading to data loss.", "The microcontroller will reset", "The baud rate will double"],
    correctIndex: 1,
    explanation: "إذا لم تمسح الـ TI، سيظن المعالج دائماً أن الإرسال السابق انتهى، فيكتب الحرف الجديد فوق القديم فوراً، فتضيع البيانات."
  },
  {
    category: "Lecture 06",
    text: "Which PC software is commonly used as a Serial Terminal to communicate with the microcontroller via USB-to-TTL?",
    options: ["Microsoft Word", "Putty", "Keil uVision", "Proteus"],
    correctIndex: 1,
    explanation: "برنامج Putty (وأيضاً Tera Term) هي البرامج القياسية لفتح قناة اتصال (COM Port) مع المايكروكنترولر ورؤية الـ Serial Data."
  },
  {
    category: "Lecture 06",
    text: "In the Putty configuration window, the baud rate entered must exactly match the baud rate programmed into the 8051.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "في الاتصال الـ Asynchronous لا يوجد خط كلوك، لذلك يجب أن يكون الطرفان متفقين تماماً على نفس السرعة (مثلاً 9600) ليفهموا بعضهم."
  },
  {
    category: "Lecture 06",
    text: "To send a 'New Line' character over UART so the Putty terminal jumps to the next line, you send ........",
    options: ["'\t'", "'\r\n' (Carriage Return + Line Feed)", "'\u0000'", "'\b'"],
    correctIndex: 1,
    explanation: "لعمل سطر جديد بشكل صحيح في برامج التيرمينال يجب إرسال Carriage Return (\r) لعودة المؤشر لأول السطر، ثم Line Feed (\n) للنزول لسطر جديد."
  },
  {
    category: "Lecture 06",
    text: "If you want to configure Timer 1 Mode 2 and Timer 0 Mode 1 simultaneously, what value should you load into TMOD?",
    options: ["0x21", "0x12", "0x20", "0x01"],
    correctIndex: 0,
    explanation: "بالثنائي: نصف Timer 1 هو 0010 (Mode 2)، ونصف Timer 0 هو 0001 (Mode 1). المحصلة 0010 0001 = 0x21."
  },
  {
    category: "Lecture 06",
    text: "It is impossible to use an Arduino board as a USB-to-TTL converter for the 8051.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "كما ذكر الطالب في المحاضرة، يمكن استخدام الـ Arduino كـ USB-to-Serial converter عن طريق تفريغ المايكروكنترولر الخاص به (أو عمل Reset دائم له) واستخدام أطراف Rx و Tx الخاصة به للتواصل مع 8051."
  },
  {
    category: "Lecture 06",
    text: "The SM2 bit in the SCON register is used primarily for ........",
    options: ["Setting the baud rate", "Multiprocessor communication (networking multiple 8051s)", "Enabling the receiver", "Generating parity bits"],
    correctIndex: 1,
    explanation: "بت الـ SM2 يُستخدم في بيئات الـ Multiprocessor للسماح لمايكروكنترولر واحد بمخاطبة عدة أجهزة مايكروكنترولر أخرى على نفس الخط."
  },
  {
    category: "Lecture 06",
    text: "During initialization of UART in C, it is a good practice to explicitly clear both TI and RI to 0 before starting the main loop.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، مسح الأعلام (Flags) في الـ Initialization يضمن عدم وجود أي Interrupts وهمية عالقة من بقايا تشغيل سابق."
  },
  {
    category: "Lecture 06",
    text: "When Dr. Emad says 'Microcontrollers usually Sink current rather than Source it', he means it's safer for the microcontroller pin to provide VCC (5V) to the load than to connect the load to Ground.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "العكس تماماً. Sink تعني أن المايكرو يعمل كأرضي (Ground/0V) ليسحب التيار من الحمل المتصل بالـ VCC. وهذا هو الوضع الآمن (Sinking) مقارنة بالـ Sourcing."
  }
];
