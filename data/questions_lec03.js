const lec03Data = [
  {
    category: "Lecture 03",
    text: "Writing programs in C for the 8051 is generally more time-consuming than writing in Assembly.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "لغة الـ C أسهل وأسرع بكثير في الكتابة من لغة الـ Assembly (Less time consuming)."
  },
  {
    category: "Lecture 03",
    text: "One disadvantage of using C programming over Assembly is that C produces a ........",
    options: ["Slower CPU clock speed", "Larger hex file size", "Smaller hex file size", "Non-portable code"],
    correctIndex: 1,
    explanation: "من أهم عيوب لغة الـ C أن حجم ملف الـ Hex الناتج يكون أكبر وأقل تحسيناً مقارنة بالكتابة المباشرة بالـ Assembly."
  },
  {
    category: "Lecture 03",
    text: "C code written for the 8051 is completely non-portable to other microcontrollers.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "ميزة لغة الـ C هي الـ Portability، حيث يمكن نقل الكود لمتحكم آخر بتعديلات بسيطة جداً أو بدون تعديل."
  },
  {
    category: "Lecture 03",
    text: "In Keil C compiler for 8051, what is the default behavior if you define a variable simply as 'char' without specifying signed or unsigned?",
    options: ["It defaults to unsigned char", "It defaults to signed char", "It causes a compilation error", "It defaults to int"],
    correctIndex: 1,
    explanation: "تريكة امتحانات! المترجم (Compiler) يعتبر الـ char تلقائياً signed (موجب وسالب) إذا لم تكتب كلمة unsigned صراحة."
  },
  {
    category: "Lecture 03",
    text: "The 'unsigned char' data type is an 8-bit variable that can hold values from ........",
    options: ["-128 to +127", "0 to 255", "0 to 65535", "-32768 to +32767"],
    correctIndex: 1,
    explanation: "الـ unsigned (بدون إشارة) يحمل أرقاماً موجبة فقط. لـ 8 بت، المدى من 0 إلى 255."
  },
  {
    category: "Lecture 03",
    text: "The 'signed char' data type uses the ........ to represent the sign of the number (- or +).",
    options: ["LSB D0", "MSB D7", "MSB D15", "Carry Flag"],
    correctIndex: 1,
    explanation: "في المتغير 8-bit، البت الأخير من اليسار (D7) يُحجز كإشارة (Sign bit)."
  },
  {
    category: "Lecture 03",
    text: "The 'unsigned int' data type is a 16-bit variable that takes a value in the range of 0 to 65535.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "الـ unsigned int حجمه 16 بت، وبالتالي 2 أس 16 = 65,536 (من 0 لـ 65535)."
  },
  {
    category: "Lecture 03",
    text: "If you need a loop counter to count exactly 50,000 times, which data type is the most memory-efficient choice that will work correctly?",
    options: ["unsigned char", "signed char", "unsigned int", "signed int"],
    correctIndex: 2,
    explanation: "الـ char آخره 255 ولا يصلح. الـ signed int آخره 32767. الـ unsigned int يصل إلى 65535 وهو الوحيد المناسب لـ 50,000."
  },
  {
    category: "Lecture 03",
    text: "The data type used to access a single bit inside the bit-addressable RAM (20H-2FH) or SFRs is called ........",
    options: ["bit", "sbit", "sfr", "Both a and b"],
    correctIndex: 3,
    explanation: "يُمكن استخدام 'bit' للمتغيرات العادية في الذاكرة، و 'sbit' للإشارة لأطراف معينة كبتات (مثل P1^0)."
  },
  {
    category: "Lecture 03",
    text: "The 'sfr' data type is used to access byte-size special function registers (like P1, P2, TMOD).",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "الكلمة المحجوزة sfr تُستخدم لتعريف عنوان مسجل كامل (بايت 8 بت) ضمن مساحة الـ SFRs (من 80H لـ FFH)."
  },
  {
    category: "Lecture 03",
    text: "To avoid writing the memory addresses of standard SFRs manually, you should include the header file ........ at the beginning of your C code.",
    options: ["", "", "", ""],
    correctIndex: 2,
    explanation: "ملف  أو  يحتوي على تعريفات جميع المسجلات الأساسية للـ 8051."
  },
  {
    category: "Lecture 03",
    text: "In Keil C compiler, how do you correctly assign a specific pin like Pin 2 of Port 1 to a variable named 'LED'?",
    options: ["sbit LED = P1.2;", "sbit LED = P1^2;", "sfr LED = P1[2];", "bit LED = P1-2;"],
    correctIndex: 1,
    explanation: "تريكة قوية نبه عليها الدكتور! في لغة الـ C لا نستخدم النقطة (P1.2)، بل نستخدم رمز الـ XOR (^)، فتُكتب P1^2."
  },
  {
    category: "Lecture 03",
    text: "In 8051, if you want to use a port (e.g., Port 1) as an INPUT port, you should initialize it by writing ........ to it.",
    options: ["0x00", "0xFF", "0x55", "0xAA"],
    correctIndex: 1,
    explanation: "لجعل البورت يعمل كـ Input ليستقبل إشارات، يجب تهيئته بكتابة وحايد (Logic 1) على أطرافه."
  },
  {
    category: "Lecture 03",
    text: "Initializing an output port with 0xFF is a standard practice before sending data to it.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "بورت الإخراج (Output) نُهيئه بـ 0x00 في البداية حتى لا يعمل الليد أو الجهاز الموصل عليه عشوائياً."
  },
  {
    category: "Lecture 03",
    text: "A simple way to create a software delay in C is to use an empty ........ loop.",
    options: ["if", "switch", "for", "return"],
    correctIndex: 2,
    explanation: "وضع حلقة for فارغة بدون تعليمات بداخلها يؤدي إلى تضييع دورات المعالج لخلق تأخير زمني."
  },
  {
    category: "Lecture 03",
    text: "If you want to toggle a bit named 'LED' continuously, the correct C expression inside a while(1) loop is ........",
    options: ["LED = 1;", "LED = 0;", "LED = ~LED;", "LED = LED + 1;"],
    correctIndex: 2,
    explanation: "علامة الـ Tilde (~) تعكس قيمة البت (من 1 إلى 0 والعكس)."
  },
  {
    category: "Lecture 03",
    text: "When defining an array in C for the 8051, if the data is constant (e.g., a lookup table) and won't change during runtime, it is better to store it in ........ to save RAM.",
    options: ["R0-R7", "ROM", "Accumulator", "Stack"],
    correctIndex: 1,
    explanation: "الثوابت يجب أن توضع في الـ ROM (أو Code memory) لأن الـ RAM صغيرة جداً (128 بايت فقط)."
  },
  {
    category: "Lecture 03",
    text: "In the software building process, which tool is responsible for translating Assembly language code into an Object file?",
    options: ["Compiler", "Assembler", "Linker", "Programmer"],
    correctIndex: 1,
    explanation: "الأسمبلر (Assembler) هو المترجم المخصص لتحويل لغة التجميع إلى لغة الآلة (Object file)."
  },
  {
    category: "Lecture 03",
    text: "The Compiler is a tool that takes C source code and produces an Object file (sometimes via an assembly file first).",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "المترجم (Compiler) يأخذ الـ High-level code ويحوله إلى مستوى أدنى حتى يصل لـ Object file."
  },
  {
    category: "Lecture 03",
    text: "The tool that collects multiple Object files and library files together and assigns absolute memory addresses to them is called the ........",
    options: ["Compiler", "Assembler", "Linker", "Simulator"],
    correctIndex: 2,
    explanation: "اللينكر (Linker) هو الذي يجمع كل الملفات والمكتبات ويربطها معاً لينتج ملفاً نهائياً قابلاً للتنفيذ (Executable)."
  },
  {
    category: "Lecture 03",
    text: "A Linker Script (.ld or .sct) is used to tell the Linker about the boundaries and layout of the microcontroller's Memory (RAM and ROM).",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "سكريبت اللينكر هو الذي يُفهم اللينكر أين يضع الكود (ROM) وأين يضع المتغيرات (RAM) بناءً على مساحات الذاكرة."
  },
  {
    category: "Lecture 03",
    text: "The term 'Load View' refers to how the data and code are distributed in the ........ before the program runs.",
    options: ["RAM", "Cache", "CPU Registers", "ROM (Flash)"],
    correctIndex: 3,
    explanation: "الـ Load View (شكل التحميل) يعبر عن الكود وهو محروق في الـ ROM. بينما الـ Run View يظهر عندما تُنسخ المتغيرات للـ RAM أثناء التشغيل."
  },
  {
    category: "Lecture 03",
    text: "Variables that can change during program execution are typically stored in the ROM to save space.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "المتغيرات التي تتغير قيمتها (Variables) يجب أن تُحمل للـ RAM (Run View) أثناء التشغيل، لأن الـ ROM للقراءة فقط."
  },
  {
    category: "Lecture 03",
    text: "Which tool converts the Absolute Object File into the final HEX file that will be burned into the microcontroller?",
    options: ["Linker", "Object to Hex Converter (e.g. OH51)", "Assembler", "Simulator"],
    correctIndex: 1,
    explanation: "بعد الانتهاء من دور اللينكر، نحتاج لبرنامج يحول صيغة الـ Object إلى صيغة Intel HEX القياسية للحرق."
  },
  {
    category: "Lecture 03",
    text: "The '.lst' (List) file generated during the build process is primarily used for ........",
    options: ["Burning to the microcontroller", "Linking libraries", "Defining memory boundaries", "Debugging by showing C code alongside the generated Assembly code"],
    correctIndex: 3,
    explanation: "ملف الـ List لا يُحرق، بل يستخدمه المبرمج للمراجعة والـ Debugging ليرى كيف تم ترجمة الكود الخاص به لـ Assembly."
  },
  {
    category: "Lecture 03",
    text: "To program (burn) the hex file into an AT89S52 microcontroller, you need both Software (like an uploader program) and Hardware (a Programmer/Burner).",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "عملية الحرق (Burn/Download) تتطلب برنامجاً على الكمبيوتر (السوفتوير) ودائرة هاردوير تنقل البيانات للمتحكم."
  },
  {
    category: "Lecture 03",
    text: "In the part number AT89S52, the letter 'S' indicates that the microcontroller ........",
    options: ["Is extremely Small", "Supports SPI Serial downloading (In-System Programming)", "Is completely Static", "Has a Secure memory module"],
    correctIndex: 1,
    explanation: "حرف S يرمز لدعم الشريحة لبرمجتها عبر الـ Serial (SPI) مباشرة دون الحاجة لفكها ووضعها في مبرمجة توازي (Parallel Programmer)."
  },
  {
    category: "Lecture 03",
    text: "An Arduino board can be used as an SPI hardware programmer to burn hex files into the AT89S52 microcontroller.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، لامتلاك الأردوينو لأطراف الـ SPI (MOSI, MISO, SCK)، يمكن استخدامه كمبرمجة لنقل ملف الـ Hex."
  },
  {
    category: "Lecture 03",
    text: "In Keil software, to ensure a HEX file is generated upon compiling, you must enable the 'Create HEX File' option in the ........ tab of the Options for Target menu.",
    options: ["Target", "Output", "C51", "Debug"],
    correctIndex: 1,
    explanation: "خيار (Create HEX File) يتواجد تحديداً في شريط الـ Output."
  },
  {
    category: "Lecture 03",
    text: "In Keil software, the operating frequency of the microcontroller (Crystal oscillator) is specified in the ........ tab.",
    options: ["Target", "Output", "C51", "Listing"],
    correctIndex: 0,
    explanation: "تردد الكريستالة (Xtal) يُكتب في شريط الـ Target (مثلاً 11.0592 أو 12 MHz)."
  },
  {
    category: "Lecture 03",
    text: "Pressing 'Build Target' (or F7) in Keil will only check for syntax errors and will never generate the hex file even if configured.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "أمر Build Target يقوم بالترجمة، والربط، وتوليد ملف الـ Hex إذا كان خيار 'Create HEX File' مفعلاً."
  },
  {
    category: "Lecture 03",
    text: "A syntax error, such as a missing semicolon (;) in a C program, will be detected by the ........",
    options: ["Linker", "Object to Hex converter", "Compiler", "Programmer hardware"],
    correctIndex: 2,
    explanation: "المترجم (Compiler) هو الذي يحلل قواعد اللغة (Syntax) ويرفض إكمال العملية إذا وجد خطأ."
  },
  {
    category: "Lecture 03",
    text: "In C, prefixing a number with '0x' indicates that the number is in ........ format.",
    options: ["Binary", "Decimal", "Hexadecimal", "Octal"],
    correctIndex: 2,
    explanation: "0x تستخدم لتعريف الأرقام بالنظام السداسي عشر (Hexadecimal)، مثال: 0xFF."
  },
  {
    category: "Lecture 03",
    text: "If you write 'P1 = 0xAA;', what is the binary equivalent pattern that will appear on the pins of Port 1?",
    options: ["00000000", "11111111", "10101010", "01010101"],
    correctIndex: 2,
    explanation: "الحرف A في السداسي عشر يساوي 10 (أي 1010 ثنائي)، وبالتالي AA تساوي 10101010."
  },
  {
    category: "Lecture 03",
    text: "A logic '1' applied to an I/O pin corresponds to 0V, and a logic '0' corresponds to +5V.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "منطق 1 يعني 5 فولت (High)، ومنطق 0 يعني 0 فولت (Low)."
  },
  {
    category: "Lecture 03",
    text: "If a program requires defining a bit variable to store the state of a push-button (0 or 1), the most efficient data type in Keil is 'unsigned char'.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ unsigned char يحجز بايت كامل (8 بت)، بينما استخدام 'bit' أو 'sbit' يحجز (1 بت) فقط وهو الأوفر والأصح للمفتاح."
  },
  {
    category: "Lecture 03",
    text: "Which of the following commands correctly turns OFF the LED connected to Pin 0 of Port 2 (assuming the LED turns ON with Logic 1)?",
    options: ["P2^0 = 1;", "P2^0 = 0;", "P2.0 = 0;", "P2 = 0x01;"],
    correctIndex: 1,
    explanation: "نعطي البت P2^0 منطق 0 (Low) ليتم إطفاؤه. (P2.0 خاطئة برمجياً في Keil)."
  },
  {
    category: "Lecture 03",
    text: "The standard 8051 allows you to declare exactly 256 individual 'bit' variables in its bit-addressable memory space.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تريكة أرقام! مساحة الـ Bit-addressable هي 16 بايت، 16 × 8 = 128 بت فقط. وليس 256."
  },
  {
    category: "Lecture 03",
    text: "Why do we often use 'unsigned' data types in microcontroller programming instead of 'signed' ones when reading from sensors or ports?",
    options: ["It makes the code execute faster", "Because real-world analog readings and digital port statuses are never negative", "It saves RAM space", "Signed numbers cannot be handled by the 8051"],
    correctIndex: 1,
    explanation: "قراءات البورتات (مثلاً بورت 8 بت قيمته بين 0 و 255) لا تحتمل أرقاماً سالبة، استخدام الـ signed سيقسم المدى من -128 إلى 127 وهو غير مناسب لقراءة بورت."
  },
  {
    category: "Lecture 03",
    text: "Writing 'P3 = P1;' in C will read the data from Port 1 and output it directly to Port 3.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "هذه عملية نسخ بسيطة وفعالة جداً؛ المترجم سيحولها إلى تعليمة نقل مباشرة تقرأ من P1 وتكتب في P3."
  },
  {
    category: "Lecture 03",
    text: "In C, the condition 'if (P1 == 0x00)' means ........",
    options: ["Check if all pins of Port 1 are High", "Assign the value 0x00 to Port 1", "Check if all pins of Port 1 are Low", "Check if any single pin of Port 1 is Low"],
    correctIndex: 2,
    explanation: "علامة الـ == هي عملية مقارنة منطقية تتحقق مما إذا كانت قيمة بورت 1 بالكامل تساوي صفراً (All Low)."
  },
  {
    category: "Lecture 03",
    text: "The code 'while (1) { P0 = ~P0; }' will continuously toggle all pins of Port 0 at maximum speed.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، while(1) تجعل الحلقة لا نهائية، و ~P0 تعكس جميع البتات بأقصى سرعة يسمح بها المعالج."
  },
  {
    category: "Lecture 03",
    text: "During the execution of a typical C program on an 8051, the Linker resolves unresolved external references between multiple C files.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "هذه هي وظيفة اللينكر الأساسية؛ ربط الفايلات ببعضها ومعرفة عناوين الدوال المشتركة بينها."
  },
  {
    category: "Lecture 03",
    text: "In C programming for microcontrollers, the 'main()' function must eventually return a value of 0 to exit back to the operating system.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "في أنظمة المتحكمات الدقيقة (Embedded Systems) لا يوجد 'نظام تشغيل' نعود إليه! الميكروكنترولر يعمل في حلقة لا نهائية (while(1)) ولا يتوقف أبداً، ودالة main لا تـُنهي عملها."
  },
  {
    category: "Lecture 03",
    text: "To include a user-defined header file in C (instead of a standard library file), you should enclose the filename in ........",
    options: ["Angle brackets < >", "Curly braces { }", "Double quotes \" \"", "Parentheses ( )"],
    correctIndex: 2,
    explanation: "الملفات القياسية مثل  تكتب بين أقواس الزاوية، أما ملفاتك الشخصية مثل \"my_delay.h\" تكتب بين علامتي تنصيص."
  },
  {
    category: "Lecture 03",
    text: "If you compile a C code for the 8051 and the generated Hex file is exactly 5 KB, you can successfully burn and run it on a standard AT89C51.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "تريكة قوية! الـ AT89C51 يمتلك 4KB من الـ ROM فقط. 5KB تعني أنك تجاوزت الذاكرة المتاحة ولن يقبله."
  },
  {
    category: "Lecture 03",
    text: "The 'sbit' declaration cannot be used to declare a variable inside a local function; it must be global.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "في لغة C للمتحكمات، تعريفات الأطراف باستخدام sbit تُكتب في أعلى البرنامج (Global) ولا تُعرّف كمتغيرات محلية داخل الدوال."
  },
  {
    category: "Lecture 03",
    text: "The Hex file (.hex) generated by Keil is basically a plain text file containing hexadecimal characters.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، ملف الـ Hex (Intel HEX) هو ملف نصي عادي (Text file) يمكنك فتحه بالـ Notepad، وكل سطر فيه يحتوي على عناوين وبيانات مكتوبة بأحرف سداسية عشرية."
  },
  {
    category: "Lecture 03",
    text: "Which C operator is used for 'bit-wise AND' operation, which is very useful for masking specific bits in a port?",
    options: ["&&", "&", "|", "%"],
    correctIndex: 1,
    explanation: "الـ Single ampersand (&) هي دالة الـ Bit-wise AND. أما (&&) فهي اللوجيك (Logical AND)."
  },
  {
    category: "Lecture 03",
    text: "If the reset capacitor in the microcontroller's hardware circuit is missing, the software generated by Keil will fail to compile.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الكومبايلر (السوفتوير) لا علاقة له إطلاقاً بالهاردوير الخارجي أثناء الترجمة! سيتم التجميع بنجاح، لكن الدائرة لن تعمل عملياً لغياب الريسيت."
  }
];
