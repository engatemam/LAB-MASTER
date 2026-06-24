const lec04Data = [
  {
    category: "Lecture 04",
    text: "A Bipolar Junction Transistor (BJT) consists of three layers and three terminals named: Base, Collector, and ........",
    options: ["Gate", "Drain", "Emitter", "Source"],
    correctIndex: 2,
    explanation: "أطراف الترانزستور BJT هي القاعدة (Base)، المجمع (Collector)، والمشع (Emitter)."
  },
  {
    category: "Lecture 04",
    text: "The BC547 and 2N2222 are popular examples of PNP transistors.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "هذه الأرقام (BC547, 2N2222) هي أشهر أنواع الترانزستورات من النوع NPN وليس PNP."
  },
  {
    category: "Lecture 04",
    text: "In an NPN transistor, a small current applied to the Base controls a much larger current flowing from the ........ to the ........",
    options: ["Emitter, Collector", "Collector, Emitter", "Base, Emitter", "Collector, Base"],
    correctIndex: 1,
    explanation: "في الـ NPN، التيار الرئيسي يسري من المجمع (Collector) إلى المشع (Emitter) ويتم التحكم فيه عن طريق تيار القاعدة."
  },
  {
    category: "Lecture 04",
    text: "Which BJT configuration is the most commonly used in electronic control circuits and switching applications?",
    options: ["Common Base", "Common Collector", "Common Emitter", "Common Gate"],
    correctIndex: 2,
    explanation: "دائرتا الباعث المشترك (Common Emitter) هما الأكثر استخداماً في دوائر التكبير والتحكم (Switching)."
  },
  {
    category: "Lecture 04",
    text: "You can use the hFE measurement function on a digital multimeter to determine the correct pinout of a BJT.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نعم، المالتيميتر يوفر خاصية قياس الـ hFE (معامل التكبير Beta)، وإذا أعطى قراءة منطقية (مثلاً 100-200) فهذا يؤكد صحة تحديد الأطراف."
  },
  {
    category: "Lecture 04",
    text: "In digital embedded systems, transistors are usually operated in the active region to act as an amplifier rather than a switch.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "في الأنظمة المدمجة (Embedded)، يُستخدم الترانزستور كـ 'مفتاح' (Switch) في منطقتي الـ Saturation والـ Cut-off، وليس كمكبر في منطقة Active."
  },
  {
    category: "Lecture 04",
    text: "For an NPN transistor to turn ON and act as a closed switch, the voltage at the Base must be ........ than the voltage at the Emitter.",
    options: ["Lower", "Higher", "Equal", "Negative"],
    correctIndex: 1,
    explanation: "لتشغيل ترانزستور NPN، يجب أن يكون جهد القاعدة (Base) أعلى من جهد المشع (Emitter) بمقدار 0.7 فولت تقريباً."
  },
  {
    category: "Lecture 04",
    text: "A Common Collector configuration is heavily used in audio amplification due to its high voltage gain.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الـ Common Collector لا يكبر الجهد (Voltage Gain = 1)، بل يكبر التيار. ولذلك لا يستخدم كمكبر صوتي مباشر."
  },
  {
    category: "Lecture 04",
    text: "In the symbol of a BJT transistor, the arrow is always placed on the ........ terminal.",
    options: ["Base", "Collector", "Emitter", "Gate"],
    correctIndex: 2,
    explanation: "السهم في رمز الترانزستور يُرسم دائماً على طرف المشع (Emitter) ليدل على اتجاه التيار."
  },
  {
    category: "Lecture 04",
    text: "In an NPN transistor symbol, the arrow on the emitter points ........ the base.",
    options: ["Towards", "Away from", "Parallel to", "None of the above"],
    correctIndex: 1,
    explanation: "في الـ NPN، السهم يشير 'للخارج' (Away from the base)، بينما في الـ PNP يشير 'للداخل'."
  },
  {
    category: "Lecture 04",
    text: "An optocoupler is primarily used in electronic circuits to ........",
    options: ["Amplify high-frequency audio signals", "Generate clock pulses for microcontrollers", "Provide electrical isolation between input and output circuits", "Store data during power failures"],
    correctIndex: 2,
    explanation: "وظيفة الأوبتوكابلر الأساسية هي العزل الكهربائي التام (Isolation) بين دائرتين (مثل المايكرو ودوائر الجهد العالي) لحماية المتحكم."
  },
  {
    category: "Lecture 04",
    text: "An optocoupler package typically contains an LED and a ........",
    options: ["Relay coil", "Phototransistor", "Variable resistor", "Magnetic switch"],
    correctIndex: 1,
    explanation: "يتكون داخلياً من دايود مشع للضوء (LED) يقابله ترانزستور ضوئي (Phototransistor) يستجيب للضوء بدلاً من تيار القاعدة."
  },
  {
    category: "Lecture 04",
    text: "In a phototransistor, the base current is replaced by ........",
    options: ["Sound waves", "Magnetic fields", "Light intensity", "Heat"],
    correctIndex: 2,
    explanation: "الضوء المنبعث من الـ LED هو الذي يقوم بتحفيز القاعدة (Base) وجعل الترانزستور الضوئي يمرر التيار."
  },
  {
    category: "Lecture 04",
    text: "A very popular 4-pin optocoupler IC used in many electronic devices and chargers is the ........",
    options: ["PC817", "BC547", "2N2222", "AT89S52"],
    correctIndex: 0,
    explanation: "الـ PC817 هو أشهر نوع Optocoupler تجاري بأربعة أطراف (DIP/SMD)."
  },
  {
    category: "Lecture 04",
    text: "Optocouplers are generally much slower than electro-mechanical relays in switching applications.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "العكس تماماً. الأوبتوكابلر يعتمد على الضوء والإلكترونيات (Solid-state) فهو أسرع بكثير جداً من الريلاي الميكانيكي البطيء."
  },
  {
    category: "Lecture 04",
    text: "Optocouplers can ONLY be used at the output stage of a microcontroller, not at the input stage.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "يمكن استخدامه في الإدخال (Input) لعزل إشارة قادمة من حساس خارجي، وفي الإخراج (Output) لعزل موتور أو ريلاي."
  },
  {
    category: "Lecture 04",
    text: "If an optocoupler's LED anode is connected to VCC, and its cathode is connected to a microcontroller pin, the LED will turn ON when the pin outputs a Logic ........",
    options: ["1 (High)", "0 (Low)", "High-Z", "Floating"],
    correctIndex: 1,
    explanation: "إذا كان الموجب واصلاً بـ VCC، فلابد أن يعطي المايكرو (0 فولت) للكاثود لكي تكتمل الدائرة (طريقة Sink)."
  },
  {
    category: "Lecture 04",
    text: "Microcontrollers are generally better at 'sinking' current than 'sourcing' current.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "المايكروكنترولر يُفضل دائماً أن يمتص التيار (Sink) لـ Ground بدلاً من إخراجه (Source) من VCC لتجنب حرق أطرافه."
  },
  {
    category: "Lecture 04",
    text: "The direct electrical connection between the input and output sides of an optocoupler makes it vulnerable to voltage spikes.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "لا يوجد أي اتصال كهربائي (Direct connection) بين الدخل والخرج في الأوبتوكابلر! الاتصال ضوئي فقط (Optical coupling)."
  },
  {
    category: "Lecture 04",
    text: "In an optocoupler (e.g., PC817), Pin 1 and Pin 2 are connected to the internal Phototransistor.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الأطراف 1 و 2 متصلة بالـ LED الداخلي، بينما 3 و 4 متصلة بالترانزستور الضوئي (Emitter و Collector)."
  },
  {
    category: "Lecture 04",
    text: "A relay is an electro-mechanical switch that works based on the principle of ........",
    options: ["Capacitance", "Electromagnetism", "Piezoelectricity", "Optics"],
    correctIndex: 1,
    explanation: "الريلاي يعمل بالمغناطيسية الكهرومغناطيسية. عند مرور تيار في الملف، يتولد مجال مغناطيسي يجذب المفتاح الميكانيكي."
  },
  {
    category: "Lecture 04",
    text: "The most common standard Relay has exactly ........ pins.",
    options: ["3", "4", "5", "8"],
    correctIndex: 2,
    explanation: "الريلاي القياسي (SPDT) يمتلك 5 أطراف: 2 للملف (Coil) و 3 للمفتاح (Common, NO, NC)."
  },
  {
    category: "Lecture 04",
    text: "In a relay, the terminal that is connected to the Common terminal when the relay coil is NOT energized is called ........",
    options: ["Normally Open (NO)", "Normally Closed (NC)", "Coil 1", "Emitter"],
    correctIndex: 1,
    explanation: "الـ Normally Closed (NC) هو الطرف الذي يكون متصلاً بالـ Common افتراضياً أثناء راحة الريلاي (دون تيار)."
  },
  {
    category: "Lecture 04",
    text: "When a voltage is applied to the relay coil, the armature moves and connects the Common terminal to the ........ terminal.",
    options: ["Normally Closed (NC)", "Normally Open (NO)", "Ground", "Coil 2"],
    correctIndex: 1,
    explanation: "عند إثارة الملف (Energized)، تنجذب الإبرة وتفصل عن الـ NC وتتصل بالـ Normally Open (NO)."
  },
  {
    category: "Lecture 04",
    text: "A major advantage of using a mechanical relay over an optocoupler is that the relay ........",
    options: ["Switches much faster", "Consumes less power", "Can handle much higher load currents and AC voltages", "Does not suffer from mechanical wear"],
    correctIndex: 2,
    explanation: "ميزة الريلاي الميكانيكي أنه يستطيع تشغيل أحمال ثقيلة جداً (مثل مواتير AC وتكييفات) بعكس الأوبتوكابلر الذي يتحمل تيارات ضعيفة."
  },
  {
    category: "Lecture 04",
    text: "You can safely connect the coil of a 5V relay directly to an output pin of the 8051 microcontroller.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "مستحيل! الـ 8051 يخرج تياراً ضعيفاً جداً (بالملي أمبير) لا يكفي لتشغيل ملف الريلاي، وسيحترق طرف المايكرو. لابد من استخدام ترانزستور (Driver)."
  },
  {
    category: "Lecture 04",
    text: "One disadvantage of mechanical relays is that they are prone to mechanical wear and tear over time.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "نظراً لوجود أجزاء متحركة داخله (إبرة وسوستة)، فإن عمره الافتراضي أقل ويتلف مع كثرة الاستخدام."
  },
  {
    category: "Lecture 04",
    text: "If you want a connected lamp to turn ON only when the relay is energized, you should connect it between the power source and the ........ terminal of the relay.",
    options: ["NC", "NO", "Coil", "VCC"],
    correctIndex: 1,
    explanation: "الطرف الـ NO (Normally Open) يكون مفصولاً في البداية، ولا يمرر الكهرباء للمبة إلا عند تفعيل الريلاي."
  },
  {
    category: "Lecture 04",
    text: "Relays can only be used to switch DC loads, not AC loads.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "الريلاي معزول تماماً من الداخل، ويمكنه تشغيل أحمال دي سي (DC) أو إي سي (AC) مثل لمبات المنازل."
  },
  {
    category: "Lecture 04",
    text: "The 'Common' terminal in a relay is an input solely meant to power the relay's internal electromagnet.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "المغناطيس يعمل عن طريق طرفي 'الكويل' (Coil). الـ Common هو جزء من المفتاح الميكانيكي ولا علاقة له بتشغيل المغناطيس."
  },
  {
    category: "Lecture 04",
    text: "To drive a relay using an 8051 microcontroller, a ........ is typically used as a switch to provide the necessary current.",
    options: ["Resistor", "Capacitor", "Transistor", "Crystal Oscillator"],
    correctIndex: 2,
    explanation: "نستخدم ترانزستور (Driver) كعضلة لتكبير تيار المايكرو الضعيف وتشغيل الريلاي."
  },
  {
    category: "Lecture 04",
    text: "In a transistor-relay driving circuit, a diode is usually placed in parallel with the relay coil. What is the purpose of this diode?",
    options: ["To convert AC to DC", "To protect the microcontroller from short circuits", "To protect the transistor from the high-voltage back EMF generated by the coil", "To increase the relay switching speed"],
    correctIndex: 2,
    explanation: "يسمى هذا الدايود (Freewheeling diode أو Flyback diode). وظيفته حماية الترانزستور من الجهد العكسي المدمر الذي يتولد عند إطفاء الملف."
  },
  {
    category: "Lecture 04",
    text: "The flyback diode across a relay coil is connected in a ........ biased configuration with respect to the normal power supply.",
    options: ["Forward", "Reverse", "Zener", "Series"],
    correctIndex: 1,
    explanation: "الدايود يُوصل في وضعية الانحياز العكسي (Reverse biased) حتى لا يمرر التيار في الحالة العادية، ويعمل فقط كمسار للتفريغ عند فصل الكهرباء عن الملف."
  },
  {
    category: "Lecture 04",
    text: "Combining both an Optocoupler and a Relay in the same output circuit is completely redundant and never used.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "دمجهم معاً يوفر أقصى درجات الحماية (Double Isolation). الأوبتوكابلر يعزل المايكرو عن الترانزستور، والريلاي يعزل الدائرة عن جهد الـ 220V."
  },
  {
    category: "Lecture 04",
    text: "If an optocoupler's phototransistor is used to drive a high-current load directly without a secondary BJT transistor, it may burn out.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "الترانزستور الضوئي داخل الأوبتوكابلر لا يتحمل تيارات عالية. يجب أن يوصل بترانزستور خارجي أكبر لتشغيل أحمال كالريلاي."
  },
  {
    category: "Lecture 04",
    text: "When an NPN transistor is used to drive a relay, the relay coil is typically connected between the VCC and the ........ of the transistor.",
    options: ["Base", "Collector", "Emitter", "Ground"],
    correctIndex: 1,
    explanation: "في دائرة درايفر الريلاي المعتادة (Common Emitter)، يتم توصيل الحمل (الريلاي) بين الـ VCC والـ Collector."
  },
  {
    category: "Lecture 04",
    text: "To turn ON a relay driven by an NPN transistor, the 8051 output pin connected to the transistor's base must be driven to Logic 0.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "ترانزستور الـ NPN يحتاج لجهد موجب (Logic 1) على القاعدة (Base) لكي يعمل ويمرر التيار لتشغيل الريلاي."
  },
  {
    category: "Lecture 04",
    text: "In practical circuits, a resistor is placed between the 8051 pin and the Base of the transistor to ........",
    options: ["Limit the base current and protect both the MCU and the transistor", "Increase the voltage sent to the transistor", "Act as a pull-down resistor", "Generate a time delay"],
    correctIndex: 0,
    explanation: "مقاومة القاعدة (Base Resistor) ضرورية جداً لحماية طرف المايكروكنترولر من سحب تيار عالي، ولحماية الترانزستور من التلف."
  },
  {
    category: "Lecture 04",
    text: "The 'Relay Module' available in the market usually has the driving transistor and flyback diode built-in.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "الموديول الجاهز يريح المبرمج، حيث يحتوي على الترانزستور، الدايود، وحتى أوبتوكابلر أحياناً، وكل ما تحتاجه هو توصيل إشارة المايكرو مباشرة."
  },
  {
    category: "Lecture 04",
    text: "Why does Dr. Emad suggest using the 'Sink' configuration (Logic 0 to turn ON) over 'Source' configuration for the optocoupler's LED?",
    options: ["It creates a brighter light", "The 8051 can sink more current than it can source, making it safer and more stable", "Sinking current is faster", "Sourcing current damages the ROM"],
    correctIndex: 1,
    explanation: "بنية أطراف المايكروكنترولر (وخاصة Port 0 الذي هو Open Drain) تجعله قادراً على امتصاص تيار (Sinking) بأمان أكبر من قدرته على إعطاء تيار (Sourcing)."
  },
  {
    category: "Lecture 04",
    text: "A Push Button configured with a 'Pull-up' resistor will send a Logic ........ to the microcontroller when it is NOT pressed.",
    options: ["0", "1", "High-Z", "Undefined"],
    correctIndex: 1,
    explanation: "دائرة الـ Pull-up تسحب الجهد دائماً للـ VCC (1). وعند ضغط المفتاح يتصل بالأرضي وتصبح الإشارة (0)."
  },
  {
    category: "Lecture 04",
    text: "In a 'Pull-down' resistor configuration, pressing the button sends a Logic 0 to the microcontroller.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "في دائرة הـ Pull-down العكس هو الصحيح. الجهد الافتراضي هو 0، وعند الضغط تتصل الدائرة بالـ VCC وتُرسل Logic 1."
  },
  {
    category: "Lecture 04",
    text: "If a switch is connected to P0.0 using a Pull-up configuration, which of the following C conditions checks if the switch is PRESSED?",
    options: ["if (P0^0 == 1)", "if (P0^0 == 0)", "if (P0^0 == 0xFF)", "if (P0^0 == 0x00)"],
    correctIndex: 1,
    explanation: "طالما هي دائرة Pull-up (Active Low)، فإن الضغط على المفتاح سيعطي 0."
  },
  {
    category: "Lecture 04",
    text: "Before reading the status of an input button connected to a port pin, the programmer MUST initialize that specific pin with a Logic ........",
    options: ["0", "1", "-1", "Z"],
    correctIndex: 1,
    explanation: "تهيئة منفذ الإدخال بـ 1 هو شرط أساسي في 8051 لكي يستطيع قراءة الإشارات الخارجية بشكل صحيح."
  },
  {
    category: "Lecture 04",
    text: "The 'sbit' declaration is commonly used in C to assign a meaningful name to a specific pin, such as 'sbit RELAY = P2^0;'.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "استخدام الـ sbit يجعل الكود أسهل في القراءة (Readability) بحيث نستخدم اسم المكون بدلاً من رقم البن."
  },
  {
    category: "Lecture 04",
    text: "If 'sbit LED = P2^7;' and the LED is connected with its Anode to VCC and Cathode to P2.7, writing 'LED = 1;' will turn the LED ON.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "بما أن الأنود متصل بالـ VCC، فيجب أن يكون الكاثود (البن P2.7) مساوياً لـ 0 (Low) لكي تكتمل الدائرة وينير الليد. (طريقة Sink)."
  },
  {
    category: "Lecture 04",
    text: "In a complete C code to monitor a switch, the 'if' condition checking the switch state is usually placed inside a(n) ........",
    options: ["Empty for loop", "Infinite while(1) loop", "Interrupt vector", "One-time execution block"],
    correctIndex: 1,
    explanation: "يجب وضع فحص الزر داخل حلقة لا نهائية (while(1)) لكي يستمر المايكرو في مراقبة الزر طوال فترة التشغيل."
  },
  {
    category: "Lecture 04",
    text: "If you want to use Port 0 as an input to read multiple buttons, you must connect external pull-up resistors to it.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Port 0 من النوع (Open Drain) ولا يحتوي على مقاومات رفع داخلية، لذلك يجب وضعها خارجياً لكي يعمل بشكل سليم."
  },
  {
    category: "Lecture 04",
    text: "Why do we usually add a 'delay' after toggling a relay state in C code?",
    options: ["To prevent the microcontroller from crashing", "To allow the mechanical contacts of the relay enough time to physically move and settle", "To save power consumption", "To increase the baud rate"],
    correctIndex: 1,
    explanation: "الريلاي الميكانيكي بطيء نسبياً (يستغرق ملي ثواني للحركة)، لذلك التأخير الزمني يضمن استقرار التلامس الميكانيكي قبل اتخاذ أي قرار آخر."
  },
  {
    category: "Lecture 04",
    text: "When writing C code to interface with hardware components like relays or LEDs, the 'main' function ends with a 'return 0;' to properly close the hardware circuits.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "كما ذكرنا سابقاً، برنامج المايكروكنترولر لا ينتهي أبداً (يدور في while(1))، ولا يوجد عائد لنظام تشغيل لكي نكتب return 0."
  }
];
