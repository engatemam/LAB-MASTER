const lec03Data = [
  {
    category: "Lecture 03",
    text: "........ is the default data type used by 8051 C compilers when no keyword is specified.",
    options: ["unsigned char", "signed char", "signed int", "unsigned int"],
    correctIndex: 1,
    explanation: "In C compilers targeting the 8051 architecture, the default 8-bit integer type is `signed char` when the sign qualifier is omitted. This utilizes Two's Complement representation, allocating 1 bit for the sign and 7 bits for the magnitude. في المترجمات المخصصة للأنظمة المدمجة، يتم افتراض الإشارة (signed) كقيمة افتراضية لمتغيرات الحجم الصغير (8-bit) ما لم يُنص صراحة على `unsigned`."
  },
  {
    category: "Lecture 03",
    text: "True or False: Writing programs in C is generally more time consuming than writing in Assembly, but results in a smaller hex file size.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "High-level languages like C abstract the underlying hardware architecture, significantly accelerating the development cycle (Less time-consuming) due to modularity and standard libraries. However, compiled C code yields a larger memory footprint (Hex file size) compared to manually optimized Assembly code, due to the overhead introduced by compiler branching and variable management. تتميز لغة C بسرعة التطوير على حساب حجم الكود النهائي مقارنة بـ Assembly."
  },
  {
    category: "Lecture 03",
    text: "The ........ data type allows access to single bits of bit-addressable RAM memory spaces, whereas `sbit` is used strictly for SFR registers.",
    options: ["sbit", "bit", "sfr", "char"],
    correctIndex: 1,
    explanation: "The 8051 architecture utilizes a partitioned memory map where the bit-addressable RAM resides in the region `20H - 2FH`. The `bit` data type allocates a single boolean bit in this specific RAM space. Conversely, `sbit` is mapped directly to the Special Function Register (SFR) space, allowing hardware-level pin manipulation. يوفر `bit` مساحة تخزينية في الذاكرة العشوائية للبتات، بينما `sbit` يتعامل مباشرة مع مسجلات النظام."
  },
  {
    category: "Lecture 03",
    text: "For the 8051 microcontroller, the `sfr` data type represents 8-bit RAM addresses strictly in the range of ........",
    options: ["00 - 7FH", "80 - FFH", "20 - 2FH", "00 - FFH"],
    correctIndex: 1,
    explanation: "In the 8051 memory hierarchy, the upper 128 bytes of the internal RAM address space (`80H` to `FFH`) are exclusively reserved for Special Function Registers (SFRs), such as Acc, B, PSW, and I/O port latches. The `sfr` data type acts as an absolute pointer to these hardware registers. مساحات الـ SFR تبدأ من 80H حتى FFH وتستخدم للتحكم المباشر في الطرفيات."
  },
  {
    category: "Lecture 03",
    text: "The size of an `unsigned int` in 8051 C is 16 bits, which allows it to take a value from 0 to ........",
    options: ["65536", "32767", "65535", "32768"],
    correctIndex: 2,
    explanation: "An `unsigned int` allocates 16 contiguous bits (2 bytes) in memory. The maximum absolute scalar value it can store is calculated by the exponential formula 2^n - 1, where n = 16. Thus, 2^16 - 1 = 65,535. This spans the complete 16-bit computational range without dedicating the MSB to a sign flag. بحساب المعادلة الرياضية للقيم غير المؤشرة، القيمة القصوى هي 65535 وليست 65536."
  },
  {
    category: "Lecture 03",
    text: "Which of the following is the correct syntax trap to include the 8051 header file in a C program?",
    options: ["#include <8051.h>", "#include <reg51.h>", "#include <mcu51.h>", "#include <at89c51.h>"],
    correctIndex: 1,
    explanation: "The standard Keil/C51 directive requires `#include <reg51.h>` to link the pre-defined macro definitions of all native 8051 Special Function Registers. This header exposes the address mappings of hardware interfaces like `P0`, `TMOD`, and `SCON` to the C compiler space. هذا الملف ضروري لتعريف العناوين الفيزيائية لمسجلات الميكروكنترولر الأساسية 8051."
  },
  {
    category: "Lecture 03",
    text: "True or False: The `sbit` keyword allows access to the single bits of the bit-addressable RAM memory spaces 20 – 2FH.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The keyword `sbit` is intrinsically bound to the Special Function Registers (SFRs) region (addresses `80H - FFH`), not the internal bit-addressable general-purpose RAM (`20H - 2FH`). To allocate a Boolean flag in the RAM bit-addressable sector, the standard `bit` keyword must be implemented instead. الكلمة المحجوزة `sbit` مصممة حصريًا لمسجلات النظام، في حين تستخدم `bit` للذاكرة العشوائية."
  },
  {
    category: "Lecture 03",
    text: "The MSB ........ is used to represent the sign (- or +) in an 8-bit signed char data type.",
    options: ["D0", "D7", "D8", "D15"],
    correctIndex: 1,
    explanation: "In an 8-bit structural array representing a `signed char`, the bits are indexed from `D0` (Least Significant Bit, LSB) to `D7` (Most Significant Bit, MSB). In Two's Complement architecture, the `D7` bit serves dual functionality: strictly representing the sign (0 for positive, 1 for negative) and contributing to the signed magnitude calculation. البت الأخير (D7) في بنية الـ 8 بت هو المسؤول عن إشارة الرقم."
  },
  {
    category: "Lecture 03",
    text: "In 8051 C, the `signed int` uses exactly ........ bits for the magnitude of the number, excluding the sign bit.",
    options: ["16", "15", "8", "7"],
    correctIndex: 1,
    explanation: "A standard `signed int` in 8051 compiling requires 16 bits. According to Two's Complement logic, the MSB (`D15`) acts as the sign determinant, leaving precisely 15 bits for evaluating the absolute numerical magnitude. This bounds the variable range precisely to [-32768, +32767]. يتم تخصيص 15 بت فقط لتمثيل قيمة الرقم، بينما يُحجز البت الأخير للإشارة."
  },
  {
    category: "Lecture 03",
    text: "True or False: Ports P0 – P3 are bit-accessible but they are never byte-accessible.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The 8051 General Purpose I/O architecture defines Ports P0 through P3 as both bit-addressable AND byte-addressable. By referencing `P0`, one can synchronously write to all 8 hardware latches concurrently. Referencing an independent bit (e.g., `P0^0`) isolates single-pin operations. المسجلات الخاصة بالمنافذ تدعم القراءة والكتابة على مستوى البت (Bit) ومستوى البايت (Byte) معاً."
  },
  {
    category: "Lecture 03",
    text: "When burning code into the 8052 microcontroller, the ........ file must be uploaded to the programmer.",
    options: ["C source code", "Executable image", "HEX file", "Disassembled Code"],
    correctIndex: 2,
    explanation: "Microcontrollers execute machine-level instruction sets. The Intel HEX file is an industry-standard ASCII format containing the absolute hexadecimal machine codes and mapping addresses required by the ROM programmer to burn the binary states into the microcontroller's Non-Volatile Flash memory. المبرمجة تتطلب ملف الـ HEX لأنه يحتوي على تعليمات الآلة مرتبة مع عناوين الذاكرة."
  },
  {
    category: "Lecture 03",
    text: "During the code building process, which tool specifically takes Object files (.o) and a Linker script (.ld) to produce an Executable image file?",
    options: ["gcc compiler", "as (assembler)", "ld (linker)", "objcopy utility"],
    correctIndex: 2,
    explanation: "The linking stage involves the `ld` (linker) resolving internal and external symbol references across multiple compiled Relocatable Object modules (`.o`). Utilizing a linker script (`.ld`), it maps text, data, and bss sections into an absolute Executable Linkable Format (ELF) or image file. الرابط (Linker) هو المسؤول عن دمج ملفات الكائنات وحل العناوين لإنشاء الملف التنفيذي."
  },
  {
    category: "Lecture 03",
    text: "The numerical value range for a `(signed) char` in 8051 C programming is from ........",
    options: ["-128 to +127", "-127 to +128", "0 to 255", "-32768 to +32767"],
    correctIndex: 0,
    explanation: "In an 8-bit Two's Complement numerical space, the absolute span is computed as [-2^(n-1), +2^(n-1) - 1]. For n=8, this definitively maps to the asymmetric range of -128 up to +127. The asymmetry originates because zero is universally registered with a positive sign flag. بسبب وجود الصفر كقيمة موجبة، النطاق يكون غير متماثل وينتهي عند +127."
  },
  {
    category: "Lecture 03",
    text: "To declare a single bit of Port 1 (P1.0) in C, which of the following is the exact syntax used?",
    options: ["sfr MYBIT = 0x90;", "bit MYBIT = P1_0;", "sbit MYBIT = P1^0;", "#define MYBIT P1.0"],
    correctIndex: 2,
    explanation: "The Keil C51 dialect strictly dictates the `sbit` construct coupled with the XOR-like caret symbol (`^`) to mask and reference a distinct pin on an SFR. The declaration `sbit MYBIT = P1^0;` calculates the absolute bit address internally by displacing 0 bits from the base byte address of `P1`. الصيغة القياسية في مترجم Keil تتطلب استخدام `^` للوصول إلى البت المطلوب."
  },
  {
    category: "Lecture 03",
    text: "True or False: The gcc compiler performs ONLY the link stage to output an Executable image file.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The `gcc` (GNU Compiler Collection) driver acts as an orchestration toolchain manager. It sequentially invokes the preprocessor (`cpp`), compiler (`cc1`), assembler (`as`), and finally the linker (`ld`). Therefore, it handles the complete translation pipeline, not solely the final linking stage. المترجم GCC عبارة عن سلسلة أدوات تقوم بجميع مراحل الترجمة والربط."
  },
  {
    category: "Lecture 03",
    text: "In a C program, writing `P0=0xFF;` configures Port 0 to act as a(n) ........ port.",
    options: ["Output", "Input", "Bidirectional", "Analog"],
    correctIndex: 1,
    explanation: "In the pseudo-bidirectional 8051 I/O architecture, driving a logic HIGH (`0xFF`) into the internal D-latch deactivates the strong pull-down MOSFETs. This floating state allows external peripheral signals to cleanly drive the pin, logically configuring it as a high-impedance generic Input. لكتابة 1 (High) على أطراف المنفذ يتم إيقاف ترانزستور الإخراج الداخلي، مما يهيئ المنفذ ليكون مدخلاً."
  },
  {
    category: "Lecture 03",
    text: "To represent the sign in a 16-bit `signed int`, the MSB ........ is utilized.",
    options: ["D7", "D8", "D15", "D16"],
    correctIndex: 2,
    explanation: "A 16-bit variable spans memory elements indexed linearly from `D0` (zeroth bit) up to `D15`. The terminal bit, `D15`, is dedicated as the Most Significant Bit (MSB), dictating the two's complement sign matrix. Index `D16` represents a non-existent 17th bit in this fixed data width. الفهرسة تبدأ من الصفر (D0)، ولذلك يكون البت الأخير في نظام 16-بت هو D15."
  },
  {
    category: "Lecture 03",
    text: "True or False: A major disadvantage of C code is that it is highly non-portable to other microcontrollers.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "A fundamental tenet of standard ANSI C is hardware abstraction. While direct SFR mappings are architecture-dependent, the vast algorithmic logic, control flows, and standard libraries can be seamlessly cross-compiled across radically distinct processor ISAs with minimal porting effort. لغة C تتميز بقابلية النقل العالية (High Portability) بين المعالجات المختلفة مقارنة بلغة التجميع."
  },
  {
    category: "Lecture 03",
    text: "The array declaration `char mynum[]={+1,-1,+2,-2};` implicitly allocates an array of type ........",
    options: ["unsigned char", "signed char", "unsigned int", "signed int"],
    correctIndex: 1,
    explanation: "By ANSI C compiler heuristics for the 8051 architecture, a basic `char` type is implicitly processed as `signed char`. Given the negative integer literals in the initialization list, allocating `signed char` safely encodes the required two's complement payloads in individual 8-bit memory cells. بدون استخدام الكلمة `unsigned`، يفترض المترجم بشكل افتراضي أن المتغير هو `signed char`."
  },
  {
    category: "Lecture 03",
    text: "During the firmware building process, the tool ........ produces the Disassembled Code (.lst) from the Executable image file.",
    options: ["objcopy", "gcc", "objdump", "ld"],
    correctIndex: 2,
    explanation: "The `objdump` utility systematically parses the finalized Executable Linkable Format (ELF) file, decoding the machine-level opcodes back into human-readable mnemonic instructions. This reverse-engineering process yields the `.lst` (Disassembled Code), vital for profiling instruction timings and deep hardware-level debugging. أداة `objdump` تقوم بعملية الهندسة العكسية لتحويل الملف التنفيذي إلى كود مقروء."
  },
  {
    category: "Lecture 03",
    text: "What is the primary function of `objcopy` during the code building process?",
    options: ["It links Object files", "It produces the Binary program file", "It compiles C files", "It assembles ASM files"],
    correctIndex: 1,
    explanation: "The `objcopy` utility translates and extracts the precise raw code execution payloads from a complex ELF image, stripping out extensive debug symbols and linker metadata. It produces the minimalist flat Binary (`.bin`) or Intel HEX `.hex` files necessary for Flash memory programming. الأداة `objcopy` مسؤولة عن استخراج الكود الثنائي (Binary) النقي الذي سيتم حرقه مباشرة على الرقاقة."
  },
  {
    category: "Lecture 03",
    text: "True or False: The `bit` data type can be freely used to access the byte-size SFR registers.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "The `bit` type allocates exactly one binary state within the Internal RAM space (`20H-2FH`). It lacks the pointer magnitude to map byte-wide absolute addresses in the hardware-dependent `80H-FFH` memory domain. Hardware byte-size registers universally mandate the `sfr` keyword for proper compiler addressing. الكلمة المحجوزة `bit` تتعامل مع الذاكرة العشوائية فقط ولا تستطيع قراءة مسجلات الـ SFR."
  },
  {
    category: "Lecture 03",
    text: "In the Keil IDE, when configuring the output for an 8051 project, the exact HEX Format selected to create the hex file is ........",
    options: ["HEX-80", "HEX-86", "HEX-386", "HEX-51"],
    correctIndex: 0,
    explanation: "For standard legacy 8051 derivatives, Keil enforces the 'HEX-80' formatting standard in the Output target configuration. This dictates the 16-bit address offsets and structured checksum validations specific to the Intel Hex-80 layout optimized for 8-bit firmware addressing sizes. الصيغة المحددة في إعدادات Keil لإنشاء ملفات معالجات 8051 هي HEX-80 لضمان توافق العناوين."
  },
  {
    category: "Lecture 03",
    text: "........ is the specific Xtal (MHz) value correctly configured in the Keil project options for the AT89S52 microcontroller example.",
    options: ["11.0592", "12.0000", "16.0000", "8.0000"],
    correctIndex: 0,
    explanation: "The 11.0592 MHz crystal oscillator provides a precise divisor metric essential for generating standard serial UART baud rates (e.g., 9600 bps) without clock skew. 11.0592 divides evenly into standard UART timing multiples, avoiding synchronization errors present when using round numbers like 12.0000 MHz. قيمة 11.0592 ميجاهرتز تُعد مثالية لتقسيم التردد وتوليد معدلات نقل البيانات بدقة."
  },
  {
    category: "Lecture 03",
    text: "True or False: The Hex File is transferred directly from the Text Editor to the Monitor ROM via a Serial Cable.",
    options: ["True", "False"],
    correctIndex: 1,
    explanation: "A raw Text Editor provides only ASCII character manipulation. The translation of human-readable C code into an Intel Hex machine file necessitates the Compiler and Linker toolchain. Furthermore, transferring the HEX file requires specialized burning software interfacing with a Hardware Programmer or Terminal Emulator to flash the target memory. الكود المصدري يمر بعدة مراحل قبل أن يصل إلى مرحلة الحرق باستخدام مبرمجة خارجية."
  }
];
