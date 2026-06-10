const lec04Data = [
  {
    category: "Lecture 04",
    text: "........ configuration of BJT is predominantly utilized in computer logic and switching circuits rather than audio amplification.",
    options: [
      "Common Emitter",
      "Common Collector",
      "Common Base",
      "Common Gate"
    ],
    correctIndex: 0,
    explanation: "In discrete electronics, the Common Emitter (CE) topology provides substantial voltage and current gain simultaneously. By heavily driving the base current, the BJT shifts from cutoff (logic HIGH/OFF) deeply into the saturation region (logic LOW/ON), making it the optimal configuration for binary digital switching. وضع الباعث المشترك (Common Emitter) هو الأنسب لدوائر المفاتيح الإلكترونية لتوفيره أقصى تكبير للجهد والتيار معاً."
  },
  {
    category: "Lecture 04",
    text: "When verifying BJT connections using a multimeter, the ........ setting is used to determine the Beta value, which typically falls between ........ for valid configurations.",
    options: [
      "hFE, 100 and 200",
      "hIE, 50 and 80",
      "hOE, 10 and 20",
      "hRE, 200 and 300"
    ],
    correctIndex: 0,
    explanation: "The Hybrid-Pi parameter `hFE` (Forward Current Transfer Ratio in Common-Emitter mode) quantitatively defines the static DC current gain (`Beta = Ic / Ib`). Standard silicon NPN switching transistors exhibit standard `hFE` values optimally ranging from 100 to 200 during saturation characterization. معامل `hFE` يُعبر عن مقدار التكبير للتيار المستمر للترانزستور، وتتراوح قيمته الطبيعية للترانزستورات الشائعة بين 100 و 200."
  },
  {
    category: "Lecture 04",
    text: "True/False: An optocoupler strictly functions by using an external electrical current applied directly to the base of its internal phototransistor to suppress interference and isolate circuits.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "An optocoupler ensures absolute galvanic isolation by eradicating any conductive path between the input and output stages. The input signal drives an infrared LED (GaAs emitting at ~900nm), whose photonic flux strikes the depleted base region of the integrated phototransistor, instigating electron-hole pair generation to activate collector current without direct electrical base contact. الأوبتوكبلر يعتمد كلياً على النقل الضوئي للإشارة وليس التوصيل الكهربائي لقاعدة الترانزستور، مما يضمن العزل الكهربائي الكامل."
  },
  {
    category: "Lecture 04",
    text: "The famous optocoupler IC frequently used in mobile chargers and interface circuits is the ........ , which typically comes in a ........ -pin package.",
    options: [
      "PC817, 4",
      "LM358, 8",
      "NE555, 8",
      "ULN2003, 16"
    ],
    correctIndex: 0,
    explanation: "The `PC817` is a ubiquitous industry-standard linear optical isolator embedded in a compact 4-pin Dual In-line Package (DIP). Pins 1 and 2 service the internal IR diode (Anode/Cathode), while pins 3 and 4 access the intrinsic phototransistor (Emitter/Collector) for output feedback loop control. الآي سي PC817 هي المكون الأشهر للعزل الضوئي في دوائر التغذية وتحتوي على 4 أطراف فقط."
  },
  {
    category: "Lecture 04",
    text: "True/False: While relays provide mechanical isolation and are faster than optocouplers, they handle significantly lower voltages and currents, making them suitable only for micro-level switching.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "Electromechanical relays exhibit intrinsic physical latency (measured in milliseconds) due to armature inertia, rendering them orders of magnitude slower than solid-state optocouplers (microseconds). However, their metallic alloy contact pads natively sustain macroscopic voltage potentials (e.g., 220V AC) and massive currents far exceeding micro-level limits. الريلاي ميكانيكي وبالتالي فهو أبطأ بكثير من الأوبتوكبلر، ولكنه يتميز بقدرته الفائقة على تحمل جهود وتيارات كهربائية عالية جداً."
  },
  {
    category: "Lecture 04",
    text: "A standard electromagnetic Relay typically contains ........ pins in total, precisely divided into ........ for the coil (input) and ........ for the contacts (output).",
    options: [
      "5, 2, 3",
      "5, 3, 2",
      "6, 2, 4",
      "4, 2, 2"
    ],
    correctIndex: 0,
    explanation: "A standard SPDT (Single Pole Double Throw) relay mechanically asserts a 5-pin topography: 2 primary pins are structurally wired to the copper induction coil (electromagnetic input excitation), and 3 secondary pins frame the high-power output nexus encompassing COM (Common), NO (Normally Open), and NC (Normally Closed). التكوين القياسي للريلاي يتكون من 5 أطراف: اثنان لتشغيل الملف الكهرومغناطيسي، وثلاثة تمثل مفاتيح الخرج للتحكم بالدائرة."
  },
  {
    category: "Lecture 04",
    text: "In a relay's unenergized (default) state, the ........ pin is directly connected to the ........ pin, allowing current to flow if a circuit is attached.",
    options: [
      "Common, Normally Closed",
      "Common, Normally Open",
      "Coil, Normally Closed",
      "Armature, Normally Open"
    ],
    correctIndex: 0,
    explanation: "In a quiescent (zero-excitation) state, mechanical spring tension physically biases the movable armature (COM - Common) against the static NC (Normally Closed) contact pad, establishing immediate electrical continuity without external power. في الوضع الافتراضي (بدون تيار)، تقوم السوستة الميكانيكية بجعل الطرف المشترك في حالة اتصال دائم مع الطرف المغلق."
  },
  {
    category: "Lecture 04",
    text: "To successfully interface a Relay with an 8051 microcontroller, a ........ is strictly required because the microcontroller's output current is generally too weak to energize the relay coil directly.",
    options: [
      "Transistor driver",
      "Voltage regulator",
      "Transformer driver",
      "Operational amplifier"
    ],
    correctIndex: 0,
    explanation: "The typical generic output pin of an 8051 microcontroller can safely source merely ~1-2 mA, catastrophically insufficient to trigger a 50-100 mA relay induction coil. Implementing an intermediary BJT (Transistor driver) acting as a saturated switch amplifies this marginal control current to an adequate sink drive. ميكروكنترولر 8051 لا يمكنه إعطاء تيار كافٍ لتشغيل ملف الريلاي مباشرة، لذا يُعد استخدام ترانزستور مكبر كعنصر وسيط أمراً حتمياً."
  },
  {
    category: "Lecture 04",
    text: "True/False: In 8051 C programming for practical exams, it is absolutely mandatory to write the full definition body of the Delay function before the main() function to avoid syntax compilation errors.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "In standard C parsing, establishing a forward function prototype (e.g., `void delay(unsigned int);`) above `main()` is fully sufficient to resolve compiler symbol linkage. The full operational definition body can logically reside at the end of the file, satisfying linker requirements cleanly. بلغة الـ C، يكفي كتابة التصريح للدالة قبل دالة `main` ليتعرف عليها المترجم، ولا يشترط كتابة بنية الدالة بالكامل أعلى الكود."
  },
  {
    category: "Lecture 04",
    text: "In order to configure an 8051 microcontroller pin strictly as an INPUT to read a push button, the pin MUST first be initialized with a logic ........ .",
    options: [
      "1",
      "0",
      "0xFF",
      "High-Z"
    ],
    correctIndex: 0,
    explanation: "Due to the quasi-bidirectional CMOS latches of the 8051 architecture, writing a logic `1` forcibly deactivates the internal strong pull-down N-channel MOSFET. This places the pin in a floating, high-impedance (High-Z) receiver state, safely awaiting external signal assertion without inducing hardware short circuits. لتهيئة المنفذ كمدخل، يجب أولاً كتابة `1` على البت لإيقاف ترانزستور الإخراج، مما يسمح باستقبال الإشارة الخارجية دون تداخل."
  },
  {
    category: "Lecture 04",
    text: "Conversely, to initialize an 8051 microcontroller pin strictly as an OUTPUT (e.g., to drive an LED), it is standard practice to initialize the pin with a logic ........ .",
    options: [
      "0",
      "1",
      "0x00",
      "Low-Z"
    ],
    correctIndex: 0,
    explanation: "Initializing a target pin to logical `0` actively triggers the N-channel pull-down transistor into saturation, linking the peripheral output heavily to system Ground (GND). This guarantees an initial deactivated (OFF) state for Active-Low components systematically avoiding spurious startup glitches. لتهيئة الطرف كمخرج بصورة آمنة وتجنب التشغيل العشوائي عند بدء تشغيل الدائرة، يتم تهيئته منطقياً بـ `0`."
  },
  {
    category: "Lecture 04",
    text: "True/False: When interfacing the 8051 microcontroller with external components like LEDs or Optocouplers, it is strongly recommended to configure the microcontroller as a 'source' rather than a 'sink' to avoid interface problems.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The 8051 I/O internal topology natively possesses a highly resistive internal pull-up network, resulting in exceedingly anemic current sourcing capabilities (~1mA). Conversely, the hardware sink capacity (driving to Ground) is robustly handled by dedicated MOSFETs capable of absorbing up to 15mA. Therefore, components must invariably be connected in an Active-Low, Current Sink orientation. تصميم منافذ 8051 يجعلها ضعيفة جداً في إعطاء تيار لكنها ممتازة في سحب التيار، لذلك يُفضل دائماً توصيل الأحمال بطريقة السحب لضمان التشغيل المستقر."
  },
  {
    category: "Lecture 04",
    text: "In a standard ........ circuit configuration, the default logic state read by the microcontroller when the push button is NOT pressed is ........ .",
    options: [
      "Pull-up, 1",
      "Pull-down, 1",
      "Pull-up, 0",
      "Pull-down, High-Z"
    ],
    correctIndex: 0,
    explanation: "A Pull-Up resistor topology inherently anchors the input line to the +Vcc rail through a fixed impedance (e.g., 10kΩ). In a nominal unpressed state, the MCU natively reads a quiescent Logic 1 (+5V). Actuation of the switch shunts this line directly to Ground, registering a dynamic Logic 0. دائرة الـ Pull-Up تضمن أن الجهد الافتراضي على المنفذ هو 5 فولت طالما أن المفتاح غير مضغوط."
  },
  {
    category: "Lecture 04",
    text: "The precise syntax ........ is used in Keil C to declare and access a single bit of a Special Function Register (SFR), such as an individual port pin.",
    options: [
      "sbit",
      "sfr",
      "bit",
      "pin"
    ],
    correctIndex: 0,
    explanation: "Within the Keil C51 extension specifications, the keyword `sbit` is an absolute addressing directive instructing the compiler to evaluate and isolate a discrete boolean flag within the specialized SFR bit-addressable memory hierarchy (`80H-FFH`). الكلمة المفتاحية `sbit` تستخدم حصرياً في بيئة Keil للوصول إلى بت واحد محدد من مسجلات النظام أو أطراف الميكروكنترولر."
  },
  {
    category: "Lecture 04",
    text: "True/False: If an external pull-down resistor circuit is connected to an 8051 input pin, pressing the connected push button will force a logic 0 into the microcontroller.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "A Pull-Down resistor effectively ties the input gate to GND (Logic 0) in rest mode. Depressing the tactile switch bridges the input node directly to the Vcc rail, thereby overwriting the resistor and forcibly injecting a solid Logic 1 into the MCU logic gate. في دائرة السحب لأسفل، الضغط على المفتاح يوصل الطرف بجهد المصدر، مما يدخل إشارة منطقية 1 وليس 0."
  },
  {
    category: "Lecture 04",
    text: "The commonly used general-purpose NPN transistors mentioned in the lecture for switching and driving applications are ........ and ........ .",
    options: [
      "BC547, 2N2222",
      "TIP120, IRFZ44N",
      "LM317, 7805",
      "NE555, LM358"
    ],
    correctIndex: 0,
    explanation: "The `BC547` (low-power, max 100mA) and the `2N2222` (medium-power, max 800mA) represent prototypical TO-92 packaged NPN silicon epitaxial planar transistors. Their rapid dynamic saturation responses make them textbook choices for general MCU logic interfacing and relay switching grids. الترانزستورات BC547 و 2N2222 هي الأجزاء النمطية المستخدمة عالمياً للمفاتيح الإلكترونية."
  },
  {
    category: "Lecture 04",
    text: "In an optocoupler structure, the internal components consist of an LED optically coupled with a ........ or a ........ inside a single package.",
    options: [
      "Photodiode, Phototransistor",
      "Photodiode, Photoresistor",
      "Phototransistor, Photothyristor",
      "Photodiode, Photothyristor"
    ],
    correctIndex: 0,
    explanation: "To attain absolute optical transmission, internal encapsulations utilize a Gallium Arsenide (GaAs) emitter facing either a silicon PIN Photodiode for extreme high-frequency switching, or an NPN Phototransistor optimized for substantial current transfer ratios (CTR) and standard signal routing. المكونات الداخلية للأوبتوكبلر عبارة عن دايود ضوئي يرسل فوتونات تستقبلها قاعدة لترانزستور ضوئي أو دايود ضوئي حساس للإشعاع."
  },
  {
    category: "Lecture 04",
    text: "True/False: When an optocoupler's LED cathode is connected to an 8051 pin (sink configuration), outputting a logic 1 from the microcontroller turns ON the internal LED.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "In a Current Sink topology, the LED Anode is statically maintained at +Vcc. Outputting a Logic 1 (+Vcc) from the MCU to the LED Cathode eliminates the potential differential (Vcc - Vcc = 0V). No forward current propagates, resulting in a deactivated (OFF) LED state. Logic 0 (Ground) is strictly required to induce forward-bias conduction. عند توصيل الكاثود بالميكروكنترولر، إخراج 1 منطقي يعني 5 فولت، وبما أن الأنود متصل أيضاً بـ 5 فولت، فلن يمر تيار ولن يضيء الدايود."
  },
  {
    category: "Lecture 04",
    text: "To correctly assign the name 'IN' to the first bit of Port 0 and 'OUT' to the last bit of Port 2 in Keil C, one MUST write: ........ .",
    options: [
      "sbit IN=P0^0; sbit OUT=P2^7;",
      "sbit IN=P0^1; sbit OUT=P2^8;",
      "sbit IN=P0.0; sbit OUT=P2.7;",
      "sfr IN=0x80; sfr OUT=0xA0;"
    ],
    correctIndex: 0,
    explanation: "Registers array mathematically from Bit 0 up to Bit 7. The 8051 syntax strictly mandates the circumflex `^` binary operator to delineate bitwise addressing. Thus, `P0^0` addresses the LSB of Port 0, and `P2^7` targets the terminal MSB of Port 2 securely. لتعريف بت معين في بيئة Keil، الترقيم يبدأ من 0 للبت الأول، و 7 للبت الأخير، ويتم استخدام الرمز ^ لتمييزه."
  },
  {
    category: "Lecture 04",
    text: "An optocoupler is extensively used in electronic circuits primarily for ........ in data communication and for high voltage separation.",
    options: [
      "Suppressing interference",
      "Amplifying signals",
      "Generating oscillations",
      "Regulating voltage"
    ],
    correctIndex: 0,
    explanation: "By decoupling disparate ground references via photonic data transfer, optocouplers inherently reject massive Ground Loop noise potentials and transient Electromagnetic Interference (EMI), thereby acting as a pristine logic isolator ensuring microcontroller survival against catastrophic peripheral spikes. الأوبتوكبلر يُستخدم بشكل رئيسي في الدوائر لعزل التشويش الكهربائي ومنع التداخل بين دوائر التحكم الدقيقة ودوائر القدرة العالية."
  },
  {
    category: "Lecture 04",
    text: "True/False: The 'Normally Open' (NO) pin of a relay is physically connected to the 'Normally Closed' (NC) pin when a sufficient magnetic field is generated by the relay coil.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The mechanical contact pins 'NO' and 'NC' act as entirely discrete, mutually exclusive electrical terminals. Magnetic excitation structurally translates the central 'Common' (COM) armature lever from the 'NC' rest position directly to the 'NO' contact. The NO and NC pins themselves NEVER short-circuit together. أطراف الـ NO والـ NC ثابتة ولا تتصل ببعضها أبداً. بل يتحرك الطرف المشترك (COM) ليتصل بالـ NO عند توليد المجال المغناطيسي."
  },
  {
    category: "Lecture 04",
    text: "In the context of a relay module driven by a BJT, placing a ........ in parallel with the relay coil is crucial to protect the transistor from back EMF.",
    options: [
      "Diode",
      "Resistor",
      "Capacitor",
      "Inductor"
    ],
    correctIndex: 0,
    explanation: "An induction coil stores energy dynamically within a pervasive magnetic field. De-energizing abruptly collapses this field, inciting a transient Reverse Electromotive Force (Back EMF) dictated by `-L(di/dt)`. A reverse-biased Freewheeling Diode clamps this lethal reverse voltage spike safely back through the coil, shielding the BJT collector. الدايود العكسي يوضع على التوازي مع الملف الكهرومغناطيسي لامتصاص الجهد العكسي المرتفع الناتج عن تفريغ الطاقة."
  },
  {
    category: "Lecture 04",
    text: "True/False: According to the lecture, the most famous optocoupler (PC817) exclusively comes in a 6-pin Dual-in-line package for maximum isolation.",
    options: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation: "The architectural topology of the `PC817` restricts its silicon footprint strictly to a 4-pin Dual In-line format (Anode, Cathode, Emitter, Collector). Larger 6-pin isolator counterparts (like `4N25`) exist primarily to route the internal transistor's raw Base pin externally for customized biasing networks. عائلة الـ PC817 تُصنع دائماً في حزمة ذات 4 أطراف فقط. الآيسيهات ذات الـ 6 أطراف تنتمي لعائلات أخرى."
  },
  {
    category: "Lecture 04",
    text: "A Bipolar Junction Transistor (BJT) is a semiconductor device that consists of ........ alternating layers of P-type and N-type materials.",
    options: [
      "3",
      "2",
      "4",
      "5"
    ],
    correctIndex: 0,
    explanation: "Fundamental semiconductor physics dictates the BJT comprises exactly three sequentially doped solid-state junctions forming either an `N-P-N` or `P-N-P` layered sandwich. These three regions mechanically correspond to the Emitter, Base, and Collector terminals respectively. البنية الأساسية للترانزستور ثنائي القطب تتكون من 3 طبقات شبه موصلة متتالية، إما NPN أو PNP."
  },
  {
    category: "Lecture 04",
    text: "In a typical Relay structure, when current flows through the insulated coil, the generated magnetic field specifically attracts the metal ........ to mechanically switch the contact point.",
    options: [
      "Armature",
      "Stator",
      "Core",
      "Commutator"
    ],
    correctIndex: 0,
    explanation: "Saturating the induction coil magnetizes the fixed ferrous Core, subsequently generating a high-density magnetic flux. This flux exerts a dynamic pull on the kinetic metallic lever mechanism known as the Armature, overpowering its spring retention to bridge the target contacts. المجال المغناطيسي يجذب القطعة المعدنية المتحركة والتي تُعرف علمياً باسم (Armature) لتغيير مسار التوصيل الكهربائي."
  }
];
