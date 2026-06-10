const lec06Data = [
    {
        category: "Lecture 06",
        text: "........ is an 8-bit register used solely for serial communication.",
        options: ["SBUF", "SCON", "TMOD", "TCON"],
        correctIndex: 0,
        explanation: "في معمارية المتحكم 8051، يُعد مسجل SBUF (Serial Buffer) مسجلاً بثمانية بتات مخصصاً بالكامل لإدارة تدفق البيانات في الاتصال التسلسلي (UART). هندسياً، يتكون SBUF من مسجلين فيزيائيين منفصلين يحملان نفس العنوان: أحدهما للإرسال (Transmit Buffer، يُكتب إليه) والآخر للاستقبال (Receive Buffer، يُقرأ منه)، مما يسمح بالتشغيل التزامني المزدوج (Full-Duplex Operation)."
    },
    {
        category: "Lecture 06",
        text: "In asynchronous serial communication, the start bit is always a ........ and the stop bit is ........",
        options: ["0 (low), 1 (high)", "1 (high), 0 (low)", "0 (high), 1 (low)", "1 (low), 0 (high)"],
        correctIndex: 0,
        explanation: "في بروتوكول الاتصال التسلسلي غير المتزامن (Asynchronous UART Protocol)، يكون خط النقل في حالة الخمول المنطقي المرتفع (Idle High/Mark state). لتهيئة المستقبل لاستقبال حزمة بيانات (Frame Synchronization)، يتم إرسال بت البداية (Start Bit) بمستوى منطقي منخفض (Low/0). بعد نقل بتات البيانات، يُختتم الإطار ببت التوقف (Stop Bit) الذي يجب أن يكون بمستوى منطقي مرتفع (High/1) لضمان فصل الإطارات بوضوح وإعادة الخط لحالة الخمول."
    },
    {
        category: "Lecture 06",
        text: "The TMOD register is loaded with the value ........ to indicate the use of timer 1 in mode 2 for setting the baud rate.",
        options: ["20H", "02H", "50H", "05H"],
        correctIndex: 0,
        explanation: "لتوليد معدل الباود (Baud Rate Generation) للاتصال التسلسلي، تعتمد وحدة UART في الـ 8051 على نبضات فيضان Timer 1. لضمان تردد باود ثابت ومستمر، يجب تشغيل Timer 1 في النمط 2 ذو إعادة التحميل التلقائي بـ 8 بتات (8-bit Auto-reload Mode 2). للقيام بذلك برمجياً، نُخصص الجزء العلوي من مسجل TMOD لـ Timer 1 ونعطيه القيمة 0010 (M1=1, M0=0)، وبفرض تصفير الجزء السفلي لـ Timer 0، نحصل على القيمة 0x20."
    },
    {
        category: "Lecture 06",
        text: "To program the start bit, stop bit, and data bits of data framing, the ........ register is used.",
        options: ["SCON", "SBUF", "TMOD", "PCON"],
        correctIndex: 0,
        explanation: "مسجل التحكم التسلسلي SCON (Serial Control Register) هو واجهة التحكم الأساسية التي تبرمج المكونات المنطقية لوحدة UART. من خلال بتات SM0 و SM1 في هذا المسجل، يحدد المهندس نمط الاتصال (على سبيل المثال، النمط 1 للاتصال غير المتزامن بـ 8 بتات مع بتات بداية ونهاية). كما يحتوي على بت التحكم بالاستقبال REN وإعلامات الانتهاء (Flags) TI و RI."
    },
    {
        category: "Lecture 06",
        text: "True or False: The TI flag bit is set by software at the beginning of the stop bit in mode 1.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "بت إعلام الإرسال TI (Transmit Interrupt) يُرفع عتادياً (Hardware Set) بواسطة دارات التحكم التسلسلي في 8051. تحديداً، في النمط 1، بمجرد أن يقوم مسجل الإزاحة (Shift Register) بإرسال بت التوقف (Stop Bit) بشكل كامل إلى طرف TxD، تقوم الدوائر الصلبة بتعيين TI إلى 1 كإشارة لوحدة المعالجة أن الإطار قد نُقل وأن SBUF جاهز لبيانات جديدة. ومع ذلك، يجب تصفيره برمجياً (Software Cleared) استعداداً للعملية التالية."
    },
    {
        category: "Lecture 06",
        text: "Which of the following describes Serial Mode 1?",
        options: ["8-bit data, 1 stop bit, 1 start bit", "8-bit auto-reload", "9-bit data, 1 stop bit, 1 start bit", "13-bit timer mode"],
        correctIndex: 0,
        explanation: "النمط التسلسلي 1 (Serial Mode 1) هو التكوين الأكثر استخداماً للاتصال بمنفذ COM/UART القياسي (RS-232). في هذا النمط، يتم توضيب البيانات في إطار من 10 بتات (10-bit Frame): بت بداية واحد (منطقي 0)، متبوعاً بـ 8 بتات تحمل البيانات الفعلية (LSB first)، ويُختتم ببت توقف واحد (منطقي 1). يعتمد معدل النقل (Baud Rate) في هذا النمط بشكل ديناميكي على معدل فيضان المؤقت."
    },
    {
        category: "Lecture 06",
        text: "For a baud rate of 9600, the TH1 register should be loaded with the decimal value ........",
        options: ["-3", "-6", "-12", "-24"],
        correctIndex: 0,
        explanation: "يرتبط حساب TH1 بتردد الكريستالة. عند استخدام XTAL = 11.0592 MHz، يكون تردد دورة الآلة (Oscillator / 12) = 921.6 kHz. تقسم وحدة UART هذا التردد افتراضياً على 32، ليصبح تردد ساعة UART = 28800 Hz. للحصول على باود مقداره 9600، نقسم 28800 / 9600 فنجد أننا نحتاج إلى 3 دورات عد للمؤقت. بما أن المؤقت يعمل تصاعدياً (Auto-reload)، فإن القيمة الابتدائية يجب أن تكون 256 - 3 = 253 أو FD بالهيكس، وهو ما يعادل -3 في التكميل الثنائي (Two's Complement)."
    },
    {
        category: "Lecture 06",
        text: "True or False: Asynchronous serial data communication is widely used for block-oriented transmissions.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "الاتصال غير المتزامن (Asynchronous) مصمم هندسياً للتعامل مع البيانات حرفاً بحرف (Character-oriented) مثل مدخلات لوحة المفاتيح والاتصال التسلسلي البسيط، حيث يُغلف كل حرف ببتات التحكم الخاصة به (Start/Stop). في المقابل، العمليات الموجهة للكتل (Block-oriented) تعتمد على البروتوكولات المتزامنة (Synchronous) حيث يتم نقل كتل كبيرة من البيانات دفعة واحدة استناداً إلى إشارة ساعة مشتركة لزيادة كفاءة وعرض النطاق الترددي (Bandwidth)."
    },
    {
        category: "Lecture 06",
        text: "The UART frequency divider divides the machine cycle frequency by ........ to set the baud rate.",
        options: ["32", "12", "1", "16"],
        correctIndex: 0,
        explanation: "وفقاً للتصميم الداخلي للمتحكم 8051، تتضمن الدائرة المسؤولة عن معالجة نبضات المؤقت للاتصال التسلسلي في الأنماط المتغيرة مقسماً عتادياً إضافياً ثابتاً. بعد أن يُصدر Timer 1 إشارة فيضان (Overflow rate)، يتم تقسيم هذه الإشارة افتراضياً على 32 (حالة البت SMOD=0 في مسجل PCON) قبل استخدامها كنبضات إزاحة فعلية (Shift Clock) لدفع البيانات خارج أو داخل منفذ UART."
    },
    {
        category: "Lecture 06",
        text: "True or False: The instruction JNB TI, xx is used to see if the character has been received completely.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "إشارة الانتهاء TI (Transmit Interrupt) مخصصة فقط لعمليات الإرسال. التعليمة 'JNB TI, xx' (Jump if Not Bit) تقوم بإنشاء حلقة مراقبة لانتظار اكتمال عملية إرسال بايت خارج المتحكم عبر طرف TxD. للتحقق من الاستقبال (Reception)، يجب استقصاء البت RI (Receive Interrupt)، والذي يتم رفعه عندما يقوم المتحكم بتلقي البيانات بالكامل عبر طرف RxD."
    },
    {
        category: "Lecture 06",
        text: "In the context of 8051 serial communication, what does framing refer to?",
        options: ["Placing each character between start and stop bits", "Dividing the crystal frequency by 12", "Setting the baud rate using Timer 1", "Connecting TxD and RxD pins"],
        correctIndex: 0,
        explanation: "عملية التأطير (Framing) في الاتصالات الرقمية هي عملية تغليف البيانات المجردة بمعلومات بروتوكولية لتمكين المزامنة واكتشاف الأخطاء. في الـ UART، يتم التأطير عن طريق إضافة بت بداية (Start Bit = 0) في مقدمة البتات الثمانية للبيانات، وبت توقف (Stop Bit = 1) في نهايتها. هذا الهيكل المنطقي يُعلم المستقبل الدقيق ببدء الإطار ونهايته، لضمان صحة توقيت استخراج البيانات (Data Sampling)."
    },
    {
        category: "Lecture 06",
        text: "If SCON is loaded with 50H, what is the state of the REN bit?",
        options: ["1 (Reception enabled)", "0 (Reception disabled)", "1 (Transmission enabled)", "0 (Transmission disabled)"],
        correctIndex: 0,
        explanation: "القيمة الست عشرية 50H تُترجم إلى الثنائي 01010000. بوضعها في مسجل SCON، يكون التوزيع المنطقي للبتات: SM0=0، SM1=1، SM2=0، REN=1، وبقية البتات (TB8, RB8, TI, RI) كلها صفر. بت تمكين الاستقبال (Receive Enable - REN) هو البت الرابع (Bit 4). رفع هذا البت إلى 1 (Logic High) ضروري لتفعيل دوائر الاستقبال الداخلية والسماح للمتحكم بتلقي وإزاحة البيانات الواردة عبر RxD."
    },
    {
        category: "Lecture 06",
        text: "True or False: In mode 2 (8-bit auto-reload), THx holds a value which is to be reloaded into TLx each time it underflows.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "المؤقتات في عائلة 8051 هي عدادات تصاعدية صلبة (Hardware Up-counters) في جميع أنماطها. بناءً على ذلك، يتم إعادة تحميل قيمة THx إلى TLx عند حدوث عملية فيضان للحد الأقصى (Overflow - تجاوز القيمة FFH للعودة إلى 00H)، وليس عند حدوث تدفق سفلي (Underflow)، لأن العداد لا يعد تنازلياً (Down-counting)."
    },
    {
        category: "Lecture 06",
        text: "The simplest connection between a PC and a microcontroller requires a minimum of three pins: TxD, RxD, and ........",
        options: ["ground", "VCC", "DTR", "CTS"],
        correctIndex: 0,
        explanation: "لإنشاء قناة اتصال تسلسلي (RS-232/UART Communication) قابلة للعمل بشكل كامل (Full-Duplex)، يُشترط هندسياً توفر خط لنقل البيانات (TxD)، خط لاستقبال البيانات (RxD)، والأهم هو الخط الأرضي المشترك (Common Ground/GND). بدون الأرضي المشترك، لا يوجد مستوى مرجعي لفرق الجهد (Voltage Reference Level) لمقارنة الإشارات المنطقية، مما يجعل اكتشاف النبضات (0 و 1) مستحيلاً أو عرضة للتشويش الشديد (Signal Noise/Floating Ground)."
    },
    {
        category: "Lecture 06",
        text: "True or False: To transfer the next byte serially, TI must be cleared by hardware.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "يتولى العتاد الداخلي (Hardware) رفع بت TI (إعلام الإرسال) إلى 1 بمجرد خروج بت التوقف إلى خط النقل. لكن، المعمارية تتطلب تدخلاً برمجياً (Software Intervention) لمسح البت (TI = 0). إذا لم يقم المبرمج بتصفير البت، سيُعتبر أن عملية الإرسال مستمرة أو معلقة، ولن تتمكن وحدة UART من استئناف دورة العمل لإرسال البايت التالي أو لن تولد مقاطعة للإرسال التالي."
    },
    {
        category: "Lecture 06",
        text: "Which of the following is NOT an SCON register bit?",
        options: ["TF1", "SM0", "REN", "RB8"],
        correctIndex: 0,
        explanation: "مسجل التحكم التسلسلي SCON مخصص حصرياً لبتات واجهة UART مثل SM0 (Serial Mode 0)، REN (Receive Enable)، و RB8 (Receive Bit 8). البت TF1 (Timer 1 Flag) هو علامة الانتهاء الخاصة بالمؤقت 1، وهو فيزيائياً جزء من مسجل التحكم الخاص بالمؤقتات TCON (Timer Control Register)، وليس مسجل الاتصال التسلسلي."
    },
    {
        category: "Lecture 06",
        text: "If TH1 is loaded with -6 (FA Hex), what will be the baud rate assuming an 11.0592 MHz crystal?",
        options: ["4800", "9600", "2400", "1200"],
        correctIndex: 0,
        explanation: "في التردد المرجعي للكريستالة 11.0592 MHz، يكون تردد ساعة UART (بعد تقسيمها على 12 ثم 32) هو 28800 هرتز. القيمة المحملة في TH1 تحدد معدل الفيضان (Overflow Rate)، وهو يُحسب كقيمة تكميلية للعدد المستهدف. إذا كانت TH1 = -6 (وهي FA في النظام الست عشري)، فهذا يعني أن المؤقت يحتاج إلى 6 نبضات ليفيض. وبتقسيم التردد الأساسي: 28800 / 6 = 4800 باود."
    },
    {
        category: "Lecture 06",
        text: "When establishing a serial connection using a USB to Serial UART module, the TXD pin of the module should be connected to the ........ pin of the microcontroller.",
        options: ["RxD", "TxD", "GND", "VCC"],
        correctIndex: 0,
        explanation: "الاتصال التسلسلي (UART) مبني على مسارات بيانات متقاطعة (Cross-coupled Data Lines). لضمان التبادل الصحيح للبيانات بين طرفين مرسل ومستقبل، يجب أن يتم توصيل الدبوس الذي يقوم ببث البيانات (TXD - Transmit) في الجهاز الأول إلى الدبوس المخصص للاستماع واستقبال البيانات (RXD - Receive) في الجهاز الثاني، والعكس صحيح، لتشكيل حلقة الاتصال المنطقية."
    },
    {
        category: "Lecture 06",
        text: "In C programming for 8051, the instruction `while(TI==0);` is used to ........",
        options: ["Wait until the stop bit is transmitted", "Clear the TI flag", "Start the timer", "Wait until a character is received"],
        correctIndex: 0,
        explanation: "هذه التعليمة تُنفذ تقنية الاستقصاء المستمر (Polling Mechanism). تظل وحدة المعالجة المركزية (CPU) محصورة في دورة فارغة طالما أن البت TI يُساوي 0 (ما يعني أن عملية إزاحة البتات لا تزال جارية في مسجل الإرسال). بمجرد انتهاء إرسال الإطار كاملاً (بما في ذلك بت التوقف)، يقوم الهاردوير بتعيين TI=1، مما يكسر شرط الحلقة ويسمح للبرنامج بالانتقال للخطوة التالية، كإرسال الحرف القادم أو مسح البت."
    },
    {
        category: "Lecture 06",
        text: "True or False: The RI flag is set by hardware at the beginning of the start bit in mode 1.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "في هندسة 8051، تم تصميم آليات رفع إعلامات المقاطعة للعمل عند اكتمال العمليات لتجنب قراءة بيانات غير مكتملة. بالتالي، يُرفع إعلام الاستقبال RI (Receive Interrupt) عتادياً بشكل صارم في منتصف أو نهاية بت التوقف (Stop Bit) الخاص بالإطار المستلم في النمط 1، وذلك لتأكيد أن حزمة الـ 8 بتات بأكملها قد نُقلت بنجاح إلى مسجل SBUF وأصبحت جاهزة وتامة للقراءة."
    },
    {
        category: "Lecture 06",
        text: "Which pin corresponds to the RxD function in the 8051 microcontroller?",
        options: ["P3.0", "P3.1", "P2.0", "P2.1"],
        correctIndex: 0,
        explanation: "في المعمارية القياسية للأطراف (Pin-out Architecture) في معالجات 8051، يحتوي المنفذ P3 على وظائف متطورة متعددة (Multiplexed Alternate Functions). يتم فيزيائياً ربط الدبوس P3.0 بوحدة الاستقبال للاتصال التسلسلي (RxD)، بينما يُربط الدبوس P3.1 بوحدة الإرسال التسلسلي (TxD). التوجيه بين وظيفة الدبوس كمدخل عام أو خط UART يتم التحكم به تلقائياً عبر التهيئة الداخلية."
    },
    {
        category: "Lecture 06",
        text: "True or False: SBUF is a 16-bit register used solely for serial communication.",
        options: ["True", "False"],
        correctIndex: 1,
        explanation: "معمارية 8051 مبنية بالكامل على مسارات بيانات وبنية معالجة بعرض 8 بتات (8-bit Architecture). لذا، فإن مسجل SBUF (Serial Data Buffer) مصمم فيزيائياً ليكون مسجلاً بسعة 8 بتات قادراً على احتجاز بايت واحد فقط من البيانات في كل لحظة، سواء كان ذلك لغرض التحميل تمهيداً للإرسال عبر خط TxD أو لتخزين البيانات المستخلصة عبر خط RxD."
    },
    {
        category: "Lecture 06",
        text: "........ data transfers use the synchronous method.",
        options: ["Block-oriented", "Character-oriented", "Byte-oriented", "Bit-oriented"],
        correctIndex: 0,
        explanation: "في الاتصالات المتزامنة (Synchronous Communication)، يتم نقل إشارة الساعة (Clock Signal) كخط منفصل لضمان التزامن الدقيق بين المرسل والمستقبل. بفضل هذا التزامن العتادي المستمر، ينتفي الاحتياج لإضافة بتات بداية وتوقف لكل بايت منفرد، مما يتيح نقل كتل كبيرة من البيانات (Block-oriented Data Transfers) المتتالية بسرعة عالية وموثوقية فائقة وعرض نطاق ترددي (Bandwidth) أمثل."
    },
    {
        category: "Lecture 06",
        text: "The crystal frequency commonly used to generate standard baud rates with the 8051 without error is ........ MHz.",
        options: ["11.0592", "12.0000", "16.0000", "8.0000"],
        correctIndex: 0,
        explanation: "اختيار التردد 11.0592 MHz يمثل تصميماً هندسياً دقيقاً في دوائر الاتصال التسلسلي (UART Engineering). هذا الرقم المميز يقبل القسمة التامة والمنتظمة من خلال دوائر قسمة التردد في الـ 8051 (القسمة على 12 ثم على 32 أو 16) لإنتاج مضاعفات عددية صحيحة (Integer Multiples) تتطابق تماماً مع معدلات الباود القياسية للحواسيب الشخصية (مثل 9600، 4800، 19200) بدون أي نسبة خطأ تراكمية في التزامن الزمنـي (0% Timing Error)."
    },
    {
        category: "Lecture 06",
        text: "To clear the Transmit Interrupt flag in C, which instruction is used?",
        options: ["TI = 0;", "TI == 0;", "clear(TI);", "TI = 1;"],
        correctIndex: 0,
        explanation: "إعلام الإرسال TI (Transmit Interrupt) مدمج كبت فردي قابل للعنونة (Bit-addressable) في مسجل SCON. في لغة C الخاصة بالأنظمة المدمجة، لإعادة تعيين (Reset) حالة هذا البت برمجياً، نستخدم عامل الإسناد المباشر (=). التعليمة 'TI = 0;' توجه المعالج لإرسال أمر مباشر لتصفير القلاب (Flip-Flop) الخاص بهذا البت في الهاردوير، لتمكينه من رصد إشارة انتهاء بايت جديد."
    }
];
