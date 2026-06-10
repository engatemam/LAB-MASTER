const lec01Data = [
  {
    category: "Lecture 01",
    text: "A ........ signal can only take on one value from a finite set of possible values at a given time.",
    options: ["digital", "analog", "continuous", "hybrid"],
    correctIndex: 0,
    explanation: "In digital electronics, a digital signal is quantized in both amplitude and time, relying on discrete voltage levels to represent logical states (0 and 1). This quantization provides immense noise immunity and straightforward signal regeneration compared to continuous analog signals. <br>الإشارة الرقمية تعتمد على مستويات جهد محددة (Discrete) بدلاً من القيم المتصلة، مما يوفر مناعة عالية ضد الضوضاء (Noise Immunity)."
  },
  {
    category: "Lecture 01",
    text: "The 7400 TTL logic family was powered off of a ........ supply.",
    options: ["+ 5v", "+ 12v", "+ 3.3v", "- 5v"],
    correctIndex: 0,
    explanation: "The 7400 Transistor-Transistor Logic (TTL) family utilizes Bipolar Junction Transistors (BJTs) and mandates a strictly regulated +5V supply. Operating below 4.75V or above 5.25V disrupts the saturation and cut-off regions of the BJTs, corrupting logic margins. <br>عائلة الـ TTL تعتمد على جهد تشغيل قياسي 5 فولت، وأي حيود عن هذا الجهد يؤدي إلى خروج الترانزستورات عن منطقة التشغيل الصحيحة."
  },
  {
    category: "Lecture 01",
    text: "The original circuits came in either plastic or ceramic ........ packages.",
    options: ["Dual-In-Line", "Quad-Flat-Pack", "Pin-Grid-Array", "Surface-Mount"],
    correctIndex: 0,
    explanation: "The Dual-In-Line Package (DIP) features two parallel rows of pins (usually 0.1-inch pitch) facilitating robust through-hole PCB mounting. Ceramic DIPs offer superior hermetic sealing and thermal dissipation for harsh environments, while plastic DIPs provide cost-effective bulk manufacturing. <br>الغلاف ثنائي الصفوف (DIP) يوفر استقراراً ميكانيكياً وحرارياً، ويأتي في نسختين: السيراميك للتطبيقات العسكرية، والبلاستيك للتطبيقات التجارية."
  },
  {
    category: "Lecture 01",
    text: "Connection between layers is accomplished with ........ holes.",
    options: ["via", "pad", "trace", "trench"],
    correctIndex: 0,
    explanation: "A Vertical Interconnect Access (VIA) is an electroplated hole bridging electrical traces across different strata of a multi-layer PCB. From an electromagnetic perspective, a via introduces parasitic inductance and capacitance, parameters which are critical in high-speed transmission lines. <br>ثقوب الـ Vias تستخدم للربط الكهربائي بين طبقات الدائرة المطبوعة وتلعب دوراً هاماً في تقليل مقاومة وحثية المسارات (Parasitic Elements)."
  },
  {
    category: "Lecture 01",
    text: "........ mounting is a space-saving alternative to through-hole mounting.",
    options: ["Surface", "Point-to-point", "Wire-wrap", "Chassis"],
    correctIndex: 0,
    explanation: "Surface Mount Technology (SMT) mitigates stray capacitance and lead inductance inherent in through-hole components by affixing SMD components directly onto PCB surface pads. This drastic reduction in parasitic elements profoundly enhances high-frequency signal integrity. <br>تقنية التثبيت السطحي (SMT) تلغي الحاجة لثقب اللوحة وتوفر مساحة كبيرة، كما تحسن الأداء عند الترددات العالية عبر تقليل الحث السعوي والطفيلي."
  },
  {
    category: "Lecture 01",
    text: "........ layer deposited on top and bottom layers protects outer layers from oxidation.",
    options: ["Thin polymer", "Copper oxide", "Aluminum foil", "Dielectric ceramic"],
    correctIndex: 0,
    explanation: "The solder mask is a chemically stable, thin polymer layer applied over copper traces. It functions as a dielectric insulator, mitigating electrochemical migration, preventing oxidation, and inhibiting the formation of solder bridges between densely packed adjacent pads during reflow. <br>طبقة البوليمر الرقيقة (Solder Mask) تعزل النحاس لمنع الأكسدة ولتجنب تكون جسور اللحام (Solder Bridges) بين الأطراف المتقاربة."
  },
  {
    category: "Lecture 01",
    text: "........ measure both AC and DC voltage and current as well as resistance.",
    options: ["Multimeters", "Oscilloscopes", "Signal generators", "Spectrum analyzers"],
    correctIndex: 0,
    explanation: "Modern digital multimeters incorporate highly accurate Dual-Slope or Sigma-Delta Analog-to-Digital Converters (ADCs). They integrate a voltmeter, ammeter, and ohmmeter, often deploying operational amplifiers and precision shunts to extrapolate precise measurements of complex waveforms. <br>أجهزة الملتيميتر تعتمد على محولات (ADCs) دقيقة لقياس الجهد والتيار والمقاومة بكفاءة، مما يجعلها أداة لا غنى عنها في هندسة القياسات."
  },
  {
    category: "Lecture 01",
    text: "Oscilloscopes display signals in a graphical format on a pair of axes, generally with ........ as the time.",
    options: ["Y as the voltage and X", "X as the voltage and Y", "Y as the frequency and X", "X as the phase and Y"],
    correctIndex: 0,
    explanation: "Oscilloscopes operate by graphically displaying transient electronic phenomena, mapping voltage amplitude to the Y-axis via high-bandwidth vertical amplifiers, and time to the X-axis utilizing a highly linear ramp generator (timebase circuit). <br>راسم الإشارة يعرض الجهد على المحور الصادي (Y) والزمن على المحور السيني (X)، ليتيح تحليل خصائص الإشارة الزمنية مثل التردد وسعة الموجة."
  },
  {
    category: "Lecture 01",
    text: "It cannot be programmed to create additional waveforms - an ........ is required for this.",
    options: ["arbitrary waveform generator, AWG", "oscilloscope, OSC", "spectrum analyzer, SA", "logic analyzer, LA"],
    correctIndex: 0,
    explanation: "An Arbitrary Waveform Generator (AWG) leverages Direct Digital Synthesis (DDS) architectures, utilizing a phase accumulator and high-speed Digital-to-Analog Converters (DAC) to programmatically formulate complex deterministic or stochastic waveforms mapping beyond basic oscillatory outputs. <br>مولد الإشارات الاعتباطية (AWG) يستخدم تقنية الـ DDS والـ DAC لتوليد إشارات معقدة ومبرمجة لا يمكن لراسم الإشارة التقليدي توليدها."
  },
  {
    category: "Lecture 01",
    text: "Soldering station consists of one or more soldering tools connected to the main unit, which includes the controls (........), means of indication.",
    options: ["temperature adjustment", "voltage regulation", "current limitation", "frequency modulation"],
    correctIndex: 0,
    explanation: "Advanced soldering stations govern thermal dynamics using closed-loop PID controllers with embedded K-type thermocouples. The temperature adjustment system modulates power output via PWM, sustaining a critical thermal equilibrium during the dissipation event of soldering. <br>محطة اللحام تستخدم أنظمة تحكم دقيقة (PID) لضبط درجة الحرارة بشكل آلي وتعويض الفقد الحراري أثناء التلامس مع اللوحة."
  },
  {
    category: "Lecture 01",
    text: "It supplies heat to melt ........ so that it can flow into the joint between two workpieces.",
    options: ["solder", "flux", "rosin", "copper"],
    correctIndex: 0,
    explanation: "Solder refers to eutectic or near-eutectic alloys (such as SAC305 or Sn63Pb37) designed to exceed their liquidus threshold upon heating, forging highly conductive intermetallic metallurgical bonds at the junction of copper pads and component leads. <br>سبيكة اللحام (Solder) تنصهر لتشكل رابطة معدنية قوية توفر توصيلاً كهربائياً ممتازاً وتثبيتاً ميكانيكياً متيناً بين المكونات والمسارات."
  },
  {
    category: "Lecture 01",
    text: "Static electricity is the result of something called ........ effect charging which happens whenever the atoms of the surface layers of two materials rub against each other.",
    options: ["triboelectric", "piezoelectric", "photoelectric", "thermoelectric"],
    correctIndex: 0,
    explanation: "The triboelectric effect describes contact electrification triggered by frictional atomic interaction between differing dielectric surfaces. This mechanism generates extreme static potential differentials, often ascending to kilovolts, posing catastrophic dielectric breakdown risks to highly sensitive CMOS gates. <br>التأثير الاحتكاكي (Triboelectric effect) يتسبب في تراكم شحنات ساكنة بجهد عالٍ قد يدمر طبقة العزل الرقيقة في بوابات الترانزستورات (CMOS)."
  },
  {
    category: "Lecture 01",
    text: "Electrostatic discharge (ESD) is defined as the rapid, ........ transfer of electrostatic charge induced by a high electrostatic field.",
    options: ["spontaneous", "continuous", "gradual", "oscillating"],
    correctIndex: 0,
    explanation: "Electrostatic Discharge (ESD) is a spontaneous and highly energetic transient current flow resulting from the rapid equalization of an electrostatic field. In microelectronics, it triggers thermal runaway or oxide punch-through, rendering the IC completely irreparably compromised. <br>التفريغ الكهروستاتيكي (ESD) هو انتقال فجائي للشحنات يؤدي لمرور تيار عالٍ جداً لفترة وجيزة، مما يسبب انهياراً حرارياً للدوائر المتكاملة."
  },
  {
    category: "Lecture 01",
    text: "........ failures are temporary failures due to the corruption of data or some other recoverable mechanism.",
    options: ["Soft", "Hard", "Latent", "Catastrophic"],
    correctIndex: 0,
    explanation: "Soft errors are Single Event Upsets (SEUs) generally induced by alpha particles or electromagnetic transients causing localized bit-flips in memory (SRAM/DRAM) architectures. They entail no physical silicon degradation and are resolvable via reset vectors or Error-Correcting Codes (ECC). <br>الأعطال المرنة (Soft errors) هي أخطاء منطقية مؤقتة ناتجة عن التداخلات، وتُعالج برمجياً دون الحاجة لاستبدال القطع المادية."
  },
  {
    category: "Lecture 01",
    text: "did you know that you can prevent ESD by controlling ........ humidity.",
    options: ["relative", "absolute", "specific", "volumetric"],
    correctIndex: 0,
    explanation: "Controlling the relative humidity (optimally at 40-60%) yields a microscopic electrolytic layer of moisture on insulating surfaces. This conductive film facilitates gradual static dissipation, averting the buildup of acute triboelectric potentials intrinsic to overly arid dielectric environments. <br>الرطوبة النسبية (Relative humidity) تلعب دوراً محورياً في تشتيت الشحنات الساكنة؛ فالرطوبة المعتدلة تخلق طبقة موصلة تمنع تراكم الشحنات المهلكة للدوائر."
  },
  {
    category: "Lecture 01",
    text: "ESD safety mats are also referred to as static control ........ mats.",
    options: ["grounding", "insulating", "conducting", "dissipative"],
    correctIndex: 0,
    explanation: "Static control grounding mats utilize specialized semi-conductive composite elastomers (typically exhibiting a sheet resistance of 10^6 to 10^9 Ohms). These layers enact controlled, low-current dissipation pathways, eliminating lethal current spikes intrinsic to instant static neutralization. <br>حصائر التأريض (Grounding mats) تتميز بمقاومة مشتتة عالية تسمح بتسريب الشحنات إلى الأرض ببطء، مما يمنع حدوث تيارات تفريغ لحظية ضارة."
  },
  {
    category: "Lecture 01",
    text: "SMT disadvantages include ........ heat tolerance.",
    options: ["Lower", "Higher", "Absolute", "Variable"],
    correctIndex: 0,
    explanation: "A critical trade-off with Surface Mount Technology (SMT) is its lower inherent heat tolerance. Since SMT components possess drastically lower thermal mass and rely entirely on PCB copper pour areas for thermal dissipation, they are extraordinarily susceptible to thermal runaway. <br>من عيوب الـ SMT هو تحملها المنخفض للحرارة (Lower heat tolerance) نظراً لصغر حجمها واعتمادها الكلي على سطح اللوحة لتشتيت الحرارة."
  },
  {
    category: "Lecture 01",
    text: "SMT advantages include ........ and cheaper assembly.",
    options: ["Faster", "Slower", "Heavier", "Larger"],
    correctIndex: 0,
    explanation: "SMT architectures facilitate markedly faster and fully automated pick-and-place assembly. The omission of leaded components eliminates manual through-hole insertion logic and enables rapid, simultaneous infra-red (IR) or vapor phase reflow mass-soldering. <br>تقنية التثبيت السطحي تتيح سرعة هائلة (Faster) في التجميع بفضل آلات الـ Pick-and-Place وتقنيات اللحام الآلي كأفران إعادة الصهر (Reflow ovens)."
  },
  {
    category: "Lecture 01",
    text: "........ is used to provide fixed position for solder paste printing.",
    options: ["Stencil", "Solder mask", "Silk screen", "Copper trace"],
    correctIndex: 0,
    explanation: "A Stencil is a precision laser-cut foil (often stainless steel) employed to deposit volumetrically accurate solder paste onto distinct PCB SMD pads. Precise control over the paste volume prevents tombstones, voids, and shorts during the thermal reflow excursion. <br>الاستنسل (Stencil) هو شريحة معدنية دقيقة تُستخدم لطباعة معجون اللحام بكميات محددة جداً لتجنب أخطاء اللحام كقصر الدائرة الكهربائية."
  },
  {
    category: "Lecture 01",
    text: "It’s applied to PCB with the stencil using a squeegee on an angle range from ........",
    options: ["45°-60°", "10°-20°", "75°-90°", "30°-40°"],
    correctIndex: 0,
    explanation: "The fluid dynamics of solder paste deposition rely strictly on squeegee angle and pressure. Operating within a tightly constrained 45°-60° angle modulates the shear thinning characteristic of the paste's flux-binder, ensuring optimal aperture filling and volumetric repeatability. <br>زاوية ميل شفرة الطباعة (45°-60°) تحدد ديناميكا تدفق معجون اللحام (Fluid dynamics) لضمان ملء الفتحات بشكل مثالي دون تشوهات."
  },
  {
    category: "Lecture 01",
    text: "the correct ........ profile is key to ensure acceptable solder joints without damaging the parts or assembly due to excessive heat.",
    options: ["reflow", "wave soldering", "cooling", "curing"],
    correctIndex: 0,
    explanation: "A precisely calibrated reflow profile entails specific pre-heat, thermal soak, reflow (liquidus), and cooling gradients. It fundamentally dictates the thermodynamic activation of fluxes, off-gassing of volatiles, and the crystalline formation of the final intermetallic bond without inciting thermal shock in discrete components. <br>ملف الانصهار (Reflow profile) يمثل المنحنى الحراري المثالي لضمان تنشيط مساعد اللحام (Flux) وذوبان السبيكة دون تعريض المكونات لصدمة حرارية."
  },
  {
    category: "Lecture 01",
    text: "For a circuit with the same number of pins, a surface-mounted package is much ........ than a dual in-line package.",
    options: ["smaller", "larger", "heavier", "thicker"],
    correctIndex: 0,
    explanation: "By eliminating through-hole leads, surface-mounted architectures drastically curtail physical volume and parasitic lead inductance. This significantly smaller form factor escalates device density on multi-layer interposers and empowers dense VLSI implementations. <br>الغلاف السطحي (Surface-mounted) أصغر حجماً بكثير، مما يقلل المسارات الكهربائية ويحسن الأداء الترددي ويضاعف من كثافة المكونات على اللوحة."
  },
  {
    category: "Lecture 01",
    text: "The Logic Function code for a 4-Input NAND Gate(s) is ........",
    options: ["20", "00", "02", "10"],
    correctIndex: 0,
    explanation: "In specific TTL or CMOS digital logic family nomenclatures, numeric designators encode the internal gate configurations. The designation '20' definitively correlates to dual 4-Input NAND logic gates, dictating the combinatorial logic threshold topologies inside the silicon die. <br>في ترميز عائلات المنطق الرقمي، يشير الكود (20) إلى بوابات NAND ذات الأربعة مداخل، وهو يعكس التركيب الداخلي للترانزستورات بالدائرة المتكاملة."
  },
  {
    category: "Lecture 01",
    text: "The 1% resistor code 4701 has a resistance value of ........",
    options: ["4.7 kΩ", "47 kΩ", "470 Ω", "470 kΩ"],
    correctIndex: 0,
    explanation: "The four-digit SMD resistor code 4701 is mathematically decoded using standard EIA standards: the first three digits '470' represent the significant base value, while the trailing '1' dictates a multiplier of 10^1. Thus, 470 x 10 = 4700 Ohms, precisely yielding 4.7 kΩ with a 1% tolerance margin. <br>قراءة المقاومة السطحية (4701) تتم بضرب أول 3 أرقام (470) في المعامل المتمثل في الرقم الرابع (10^1)، لينتج 4700 أوم أو 4.7 كيلو أوم بدقة 1%."
  },
  {
    category: "Lecture 01",
    text: "True or False: The leads of the PLCC (plastic-leaded chip carrier) are turned under the package in a gull-wing shape.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "A fundamental mechanical distinction in IC packaging lies in lead morphology: the Plastic-Leaded Chip Carrier (PLCC) deploys internal-facing 'J-leads' for robust socketing and space-saving, whereas Small Outline Packages (like SOIC/SSOP) utilize outward-facing 'gull-wing' leads facilitating easier post-reflow optical inspection. <br>أطراف الغلاف من نوع (PLCC) تنطوي للداخل على شكل حرف J (J-lead) لتوفير المساحة وتسهيل التركيب في المقابس، وليس على شكل جناح النورس (Gull-wing)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lec01Data;
} else if (typeof window !== 'undefined') {
  window.lec01Data = lec01Data;
}

