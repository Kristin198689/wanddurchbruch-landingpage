// Wanddurchbruch & kontrollierter Wandabbruch — DURCH/BRUCH concept.
// German is the source content; en/uk/ar are natural adaptations, not literal translations.

import type { SiteConfig } from "../types";

const config: SiteConfig = {
  clientId: "wanddurchbruch",

  brand: {
    name: "Durch/Bruch Studio",
    logoText: "DURCH/BRUCH",
  },

  theme: {
    accent: "#3157ff",
    accentContrast: "#f7f6f1",
  },

  defaultLocale: "de",
  locales: ["de", "en", "uk", "ar"],

  seo: {
    title: {
      de: "Wanddurchbruch & kontrollierter Wandabbruch",
      en: "Wall Breakthrough & Controlled Wall Demolition",
      uk: "Проріз і контрольований демонтаж стіни",
      ar: "فتح الجدران والهدم المتحكَّم به",
    },
    description: {
      de: "Kontrollierter Wanddurchbruch und Wandabbruch — präzise geöffnet, sauber übergeben. Mehr Raum für Ihre Räume.",
      en: "Controlled wall breakthroughs and wall demolition — precisely opened, cleanly handed over. More space for your rooms.",
      uk: "Контрольований проріз і демонтаж стін — точно відкрито, охайно здано. Більше простору для ваших кімнат.",
      ar: "فتح جدران وهدم متحكَّم به بدقة — يُفتح بدقة ويُسلَّم نظيفًا. مساحة أكبر لغرفكم.",
    },
    schemaType: "LocalBusiness",
  },

  hero: {
    eyebrow: {
      de: "Kontrollierter Wanddurchbruch",
      en: "Controlled Wall Openings",
      uk: "Контрольований демонтаж стін",
      ar: "فتح جدران مُتحكَّم به",
    },
    headline: {
      de: "WAND WEG.",
      en: "WALL GONE.",
      uk: "СТІНУ ГЕТЬ.",
      ar: "الجدار زال.",
    },
    subheadline: {
      de: "Präzise geöffnet. Kontrolliert, Schritt für Schritt.",
      en: "Precisely opened. Controlled, step by step.",
      uk: "Точно відкрито. Контрольовано, крок за кроком.",
      ar: "فُتح بدقة، خطوة بخطوة مدروسة.",
    },
    ctaLabel: {
      de: "Projekt anfragen",
      en: "Request a project",
      uk: "Обговорити проєкт",
      ar: "اطلب مشروعك",
    },
    markLabels: [
      { de: "Prüfen", en: "Check", uk: "Перевірка", ar: "فحص" },
      { de: "Maß nehmen", en: "Measure", uk: "Заміри", ar: "قياس" },
      { de: "Tragwerk", en: "Structure", uk: "Конструкція", ar: "الإنشاء" },
    ],
    finalHeadline: {
      de: "RAUM GEWONNEN.",
      en: "SPACE GAINED.",
      uk: "ПРОСТІР ВІДКРИТО.",
      ar: "مساحة جديدة.",
    },
    finalSubheadline: {
      de: "Präzise geöffnet. Sauber übergeben.",
      en: "Precisely opened. Cleanly handed over.",
      uk: "Точно відкрито. Охайно здано.",
      ar: "فُتح بدقة، وسُلّم نظيفًا.",
    },
    finalCtaLabel: {
      de: "Projekt besprechen",
      en: "Discuss your project",
      uk: "Обговорити деталі",
      ar: "ناقش مشروعك",
    },
    assets: {
      wallTexture: {
        desktop: "/images/wanddurchbruch/hero-wall-bricks-desktop.webp",
        mobile: "/images/wanddurchbruch/hero-wall-bricks-mobile.webp",
      },
      finalInterior: {
        desktop: "/images/wanddurchbruch/hero-reveal-interior-desktop.webp",
        mobile: "/images/wanddurchbruch/hero-reveal-interior-mobile.webp",
      },
    },
  },

  services: [
    {
      title: {
        de: "Wand vollständig entfernen",
        en: "Remove a wall entirely",
        uk: "Повністю прибрати стіну",
        ar: "إزالة الجدار بالكامل",
      },
      description: {
        de: "Eine komplette Trennwand fällt — der Raum dahinter wird sichtbar und nutzbar.",
        en: "A full partition comes down — the space behind it becomes visible and usable.",
        uk: "Перегородка зникає повністю — простір за нею стає видимим і придатним для використання.",
        ar: "تُزال الفاصلة بالكامل، ليصبح المكان خلفها مرئيًا وقابلًا للاستخدام.",
      },
    },
    {
      title: {
        de: "Neuen Durchgang schaffen",
        en: "Create a new passage",
        uk: "Створити новий прохід",
        ar: "إنشاء ممر جديد",
      },
      description: {
        de: "Ein präziser Durchgang verbindet zwei Räume, ohne die Struktur zu gefährden.",
        en: "A precise opening connects two rooms without compromising the structure.",
        uk: "Точний отвір з'єднує два приміщення, не шкодячи конструкції.",
        ar: "فتحة دقيقة تربط بين غرفتين دون المساس بسلامة البنية.",
      },
    },
    {
      title: {
        de: "Türöffnung erweitern",
        en: "Widen a doorway",
        uk: "Розширити дверний отвір",
        ar: "توسيع فتحة الباب",
      },
      description: {
        de: "Eine bestehende Öffnung wird sauber vergrößert — passgenau für neue Türen oder Durchblicke.",
        en: "An existing opening is enlarged cleanly — fitted exactly for new doors or sightlines.",
        uk: "Наявний отвір акуратно збільшується — точно під нові двері чи наскрізний вигляд.",
        ar: "تُوسَّع الفتحة الحالية بدقة لتناسب بابًا جديدًا أو إطلالة مفتوحة.",
      },
    },
    {
      title: {
        de: "Küche und Wohnzimmer verbinden",
        en: "Connect kitchen and living room",
        uk: "Об'єднати кухню і вітальню",
        ar: "دمج المطبخ وغرفة المعيشة",
      },
      description: {
        de: "Zwei getrennte Räume werden zu einem offenen Wohnbereich.",
        en: "Two separate rooms become one open living area.",
        uk: "Два окремі приміщення стають одним відкритим простором.",
        ar: "تتحول غرفتان منفصلتان إلى مساحة معيشة مفتوحة واحدة.",
      },
    },
    {
      title: {
        de: "Raum für eine neue Planung öffnen",
        en: "Open up space for a new layout",
        uk: "Відкрити простір під нове планування",
        ar: "فتح المساحة لتخطيط جديد",
      },
      description: {
        de: "Vor einer Renovierung schaffen wir die räumliche Grundlage für Ihre neue Aufteilung.",
        en: "Before a renovation, we create the spatial foundation for your new floor plan.",
        uk: "Перед ремонтом ми створюємо просторову основу для нового планування.",
        ar: "قبل التجديد، نُهيئ الأساس المكاني لتوزيعكم الجديد.",
      },
    },
  ],

  process: [
    {
      title: {
        de: "Anfrage & Besichtigung",
        en: "Request & Site Visit",
        uk: "Заявка та огляд",
        ar: "الطلب والمعاينة",
      },
      description: {
        de: "Sie schildern Ihr Vorhaben, wir vereinbaren einen Termin vor Ort.",
        en: "You describe your project, we arrange an on-site appointment.",
        uk: "Розповідаєте про задум — домовляємось про огляд на місці.",
        ar: "تصفون مشروعكم، ونحدد موعدًا للمعاينة في الموقع.",
      },
    },
    {
      title: {
        de: "Prüfung & Planung",
        en: "Assessment & Planning",
        uk: "Перевірка та планування",
        ar: "الفحص والتخطيط",
      },
      description: {
        de: "Wand und Statik werden geprüft, der Ablauf wird geplant.",
        en: "The wall and its structure are assessed, the sequence is planned.",
        uk: "Оглядаємо стіну й статику, плануємо послідовність робіт.",
        ar: "يُفحص الجدار وسلامته الإنشائية، ويُخطَّط التسلسل.",
      },
    },
    {
      title: {
        de: "Schutz & Vorbereitung",
        en: "Protection & Preparation",
        uk: "Захист та підготовка",
        ar: "الحماية والتحضير",
      },
      description: {
        de: "Angrenzende Bereiche werden geschützt, Staub- und Lärmschutz eingerichtet.",
        en: "Adjoining areas are protected, dust and noise containment set up.",
        uk: "Захищаємо суміжні зони, налаштовуємо захист від пилу й шуму.",
        ar: "تُحمى المناطق المجاورة، وتُجهَّز الحماية من الغبار والضوضاء.",
      },
    },
    {
      title: {
        de: "Kontrollierter Durchbruch",
        en: "Controlled Breakthrough",
        uk: "Контрольований демонтаж",
        ar: "الفتح المتحكَّم به",
      },
      description: {
        de: "Der Durchbruch erfolgt entlang der Markierung, Schritt für Schritt.",
        en: "The opening is made along the marked line, step by step.",
        uk: "Проріз виконується по розмітці, крок за кроком.",
        ar: "تُنفَّذ الفتحة وفق الخط المحدد، خطوة بخطوة.",
      },
    },
    {
      title: {
        de: "Abtransport & Übergabe",
        en: "Removal & Handover",
        uk: "Вивезення та здача",
        ar: "النقل والتسليم",
      },
      description: {
        de: "Material wird abtransportiert, die Fläche besenrein übergeben.",
        en: "Material is removed, the area handed over broom-clean.",
        uk: "Матеріал вивозиться, поверхню здаємо під мітлу.",
        ar: "يُنقل المخلفات، وتُسلَّم المساحة نظيفة.",
      },
    },
  ],

  about: {
    heading: {
      de: "Über uns",
      en: "About us",
      uk: "Про нас",
      ar: "من نحن",
    },
    body: {
      de: "Wir öffnen Wände dort, wo mehr Raum entstehen soll — kontrolliert, sauber, mit Rücksicht auf die Statik.",
      en: "We open walls where more space is meant to happen — controlled, clean, with structural care.",
      uk: "Ми відкриваємо стіни там, де має з'явитися більше простору — контрольовано, охайно, з увагою до статики.",
      ar: "نفتح الجدران حيث يجب أن تنشأ مساحة أكبر — بتحكم ونظافة ومراعاة للسلامة الإنشائية.",
    },
  },

  statement: {
    headingLines: [
      {
        de: "WIR REISSEN NICHT EINFACH AB.",
        en: "WE DON'T JUST DEMOLISH.",
        uk: "МИ НЕ ПРОСТО ЛАМАЄМО.",
        ar: "نحن لا نهدم فحسب.",
      },
      {
        de: "WIR ÖFFNEN RAUM.",
        en: "WE OPEN SPACE.",
        uk: "МИ ВІДКРИВАЄМО ПРОСТІР.",
        ar: "نحن نفتح المساحة.",
      },
    ],
    body: {
      de: "Kontrolliert ausgeführt, sorgfältig vorbereitet, mit Rücksicht auf das, was bleibt. Das Ergebnis wird sauber übergeben.",
      en: "Carried out under control, carefully prepared, with respect for what stays standing. The result is handed over clean.",
      uk: "Виконано контрольовано, ретельно підготовлено, з увагою до того, що залишається. Результат передається охайним.",
      ar: "يُنفَّذ العمل بتحكم، بعد تحضير دقيق، ومراعاة لما يبقى قائمًا. تُسلَّم النتيجة نظيفة.",
    },
  },

  statikSafety: {
    heading: {
      de: "STATIK. SCHUTZ. PRÄZISION.",
      en: "STRUCTURE. PROTECTION. PRECISION.",
      uk: "СТАТИКА. ЗАХИСТ. ТОЧНІСТЬ.",
      ar: "الإنشاء. الحماية. الدقة.",
    },
    items: [
      {
        title: { de: "Statik", en: "Structure", uk: "Статика", ar: "الإنشاء" },
        body: {
          de: "Vor dem ersten Schnitt prüfen wir die Wand — Aufbau, statisch relevante Merkmale, mögliche Leitungen. Bei tragenden Wänden ist eine statische Prüfung durch eine Fachperson Voraussetzung.",
          en: "We inspect the wall before the first cut — construction, structurally relevant features, possible utility lines. For load-bearing walls, a structural assessment by a qualified engineer is required.",
          uk: "Оглядаємо стіну перед першим різом — конструкцію, важливі для статики особливості, можливі комунікації. Для несучих стін обов'язкова статична перевірка фахівцем.",
          ar: "نفحص الجدار قبل القطع الأول — تركيبته، خصائصه الإنشائية، والتمديدات المحتملة. بالنسبة للجدران الحاملة، يلزم تقييم إنشائي من مهندس مختص.",
        },
      },
      {
        title: { de: "Schutz", en: "Protection", uk: "Захист", ar: "الحماية" },
        body: {
          de: "Angrenzende Räume werden abgedeckt, Staub wird nach Möglichkeit direkt an der Schnittstelle gebunden. Ihre Wohnung bleibt so weit wie möglich unberührt.",
          en: "Adjoining rooms are covered, dust is captured at the cut line wherever possible. Your home stays as untouched as possible.",
          uk: "Суміжні приміщення накриваються, пил, де можливо, вловлюється безпосередньо в місці різу. Ваша квартира залишається максимально незайманою.",
          ar: "تُغطى الغرف المجاورة، ويُلتقط الغبار عند خط القطع حيثما أمكن. يبقى منزلكم بأقل تأثر ممكن.",
        },
      },
      {
        title: { de: "Präzision", en: "Precision", uk: "Точність", ar: "الدقة" },
        body: {
          de: "Der Durchbruch erfolgt entlang der markierten Linie, kontrolliert und in einzelnen Schritten. Material wird sortiert abtransportiert, die Fläche besenrein übergeben.",
          en: "The opening follows the marked line, controlled and in individual steps. Material is sorted and removed, the area handed over broom-clean.",
          uk: "Проріз виконується по розмітці, контрольовано й поетапно. Матеріал сортується і вивозиться, поверхню здаємо під мітлу.",
          ar: "تُنفَّذ الفتحة وفق الخط المحدد، بتحكم وعلى مراحل. يُصنَّف المخلفات وتُنقل، وتُسلَّم المساحة نظيفة.",
        },
      },
    ],
  },

  video: {
    heading: {
      de: "Der Moment des Durchbruchs",
      en: "The Moment of Breakthrough",
      uk: "Момент прорізу",
      ar: "لحظة الفتح",
    },
    assets: {
      mp4: "/images/wanddurchbruch/wall-breakthrough-process.mp4",
      webm: "/images/wanddurchbruch/wall-breakthrough-process.webm",
      poster: "/images/wanddurchbruch/wall-breakthrough-process-poster.webp",
    },
  },

  ergebnis: {
    headingLines: [
      { de: "MEHR LICHT.", en: "MORE LIGHT.", uk: "БІЛЬШЕ СВІТЛА.", ar: "مزيد من الضوء." },
      {
        de: "MEHR VERBINDUNG.",
        en: "MORE CONNECTION.",
        uk: "БІЛЬШЕ ЗВ'ЯЗКУ.",
        ar: "مزيد من الترابط.",
      },
      { de: "MEHR RAUM.", en: "MORE SPACE.", uk: "БІЛЬШЕ ПРОСТОРУ.", ar: "مزيد من المساحة." },
    ],
    body: {
      de: "Aus einer Grenze wird ein Übergang. Der neue Raum verbindet, was vorher getrennt war — hell, offen, sofort nutzbar.",
      en: "A boundary becomes a passage. The new space connects what used to be separate — bright, open, ready to use.",
      uk: "Межа стає переходом. Новий простір з'єднує те, що раніше було розділене — світлий, відкритий, одразу придатний для життя.",
      ar: "تتحول الحدود إلى ممر. المساحة الجديدة تربط ما كان منفصلًا من قبل — مضيئة، مفتوحة، جاهزة للاستخدام فورًا.",
    },
    image: {
      desktop: "/images/wanddurchbruch/hero-reveal-interior-desktop.webp",
      mobile: "/images/wanddurchbruch/hero-reveal-interior-mobile.webp",
    },
  },

  gallery: [
    {
      label: { de: "MATERIAL", en: "MATERIAL", uk: "МАТЕРІАЛ", ar: "المادة" },
      role: "tall",
      image: "/images/wanddurchbruch/gallery-brick-detail.webp",
    },
    {
      label: { de: "PROZESS", en: "PROCESS", uk: "ПРОЦЕС", ar: "العملية" },
      role: "wide",
      image: "/images/wanddurchbruch/gallery-process-01.webp",
    },
    {
      label: { de: "PRÄZISION", en: "PRECISION", uk: "ТОЧНІСТЬ", ar: "الدقة" },
      role: "compact",
      image: "/images/wanddurchbruch/gallery-process-02.webp",
    },
    {
      label: { de: "ERGEBNIS", en: "RESULT", uk: "РЕЗУЛЬТАТ", ar: "النتيجة" },
      role: "compact",
      image: "/images/wanddurchbruch/gallery-light-interior.webp",
    },
  ],

  faq: [
    {
      question: {
        de: "Ist jede Wand für einen Durchbruch geeignet?",
        en: "Is every wall suitable for a breakthrough?",
        uk: "Чи кожна стіна підходить для прорізу?",
        ar: "هل يصلح كل جدار لعملية الفتح؟",
      },
      answer: {
        de: "Nicht jede Wand eignet sich gleichermaßen — Material, Aufbau und ob sie tragend ist, entscheiden über den Aufwand. Das klären wir vor Ort.",
        en: "Not every wall is equally suited — material, construction, and whether it's load-bearing determine the effort involved. We clarify this on site.",
        uk: "Не кожна стіна однаково підходить — матеріал, конструкція і те, чи вона несуча, визначають обсяг робіт. З'ясовуємо це на місці.",
        ar: "لا يصلح كل جدار بالقدر نفسه — المادة والتركيب وما إذا كان حاملًا تحدد حجم العمل. نوضح ذلك في الموقع.",
      },
    },
    {
      question: {
        de: "Was ist bei einer tragenden Wand zu beachten?",
        en: "What should I know about a load-bearing wall?",
        uk: "На що звернути увагу з несучою стіною?",
        ar: "ما الذي يجب مراعاته في الجدار الحامل؟",
      },
      answer: {
        de: "Bei tragenden Wänden ist vor Beginn eine statische Prüfung durch eine Fachperson notwendig, teils auch eine Genehmigung. Wir beraten Sie, ersetzen aber keine bauaufsichtliche Prüfung.",
        en: "For load-bearing walls, a structural assessment by a qualified engineer is required before work begins, and sometimes a permit too. We advise you, but we don't replace an official building review.",
        uk: "Для несучих стін перед початком потрібна статична перевірка фахівцем, іноді й дозвіл. Ми консультуємо, але не замінюємо перевірку будівельного нагляду.",
        ar: "بالنسبة للجدران الحاملة، يلزم تقييم إنشائي من مهندس مختص قبل البدء، وأحيانًا ترخيص أيضًا. نقدّم الاستشارة لكننا لا نغني عن مراجعة الجهات الرسمية.",
      },
    },
    {
      question: {
        de: "Wie viel Staub entsteht?",
        en: "How much dust is created?",
        uk: "Скільки виникає пилу?",
        ar: "كم كمية الغبار الناتجة؟",
      },
      answer: {
        de: "Wir arbeiten mit Absaugung und Abdeckungen, um Staub so gering wie möglich zu halten — vollständig staubfrei ist ein Durchbruch nie.",
        en: "We use extraction and covers to keep dust as low as possible — a breakthrough is never completely dust-free.",
        uk: "Використовуємо витяжку й покриття, щоб звести пил до мінімуму — повністю без пилу проріз не буває.",
        ar: "نستخدم الشفط والأغطية لتقليل الغبار قدر الإمكان — لا تخلو أي فتحة من الغبار تمامًا.",
      },
    },
    {
      question: {
        de: "Wie wird der restliche Raum geschützt?",
        en: "How is the rest of the room protected?",
        uk: "Як захищають решту приміщення?",
        ar: "كيف تُحمى بقية الغرفة؟",
      },
      answer: {
        de: "Angrenzende Bereiche werden vor Beginn abgedeckt, empfindliche Möbel und Böden geschützt.",
        en: "Adjoining areas are covered before work starts, and sensitive furniture and floors are protected.",
        uk: "Суміжні зони накриваються перед початком робіт, чутливі меблі й підлогу захищаємо окремо.",
        ar: "تُغطى المناطق المجاورة قبل بدء العمل، وتُحمى الأثاث والأرضيات الحساسة بشكل منفصل.",
      },
    },
    {
      question: {
        de: "Wie lange dauert ein Wanddurchbruch?",
        en: "How long does a wall breakthrough take?",
        uk: "Скільки триває проріз стіни?",
        ar: "كم يستغرق فتح الجدار؟",
      },
      answer: {
        de: "Das hängt von Wandstärke, Material und Statik ab — die genaue Dauer legen wir nach der Prüfung vor Ort fest.",
        en: "That depends on wall thickness, material, and structure — we confirm the exact duration after the on-site assessment.",
        uk: "Залежить від товщини стіни, матеріалу та статики — точний термін визначаємо після огляду на місці.",
        ar: "يعتمد ذلك على سماكة الجدار والمادة والحالة الإنشائية — نحدد المدة الدقيقة بعد المعاينة في الموقع.",
      },
    },
    {
      question: {
        de: "Wird das Abbruchmaterial abtransportiert?",
        en: "Is the debris removed?",
        uk: "Чи вивозиться будівельне сміття?",
        ar: "هل يُنقل ركام الهدم؟",
      },
      answer: {
        de: "Ja, das Abbruchmaterial wird nach Abschluss der Arbeiten fachgerecht abtransportiert.",
        en: "Yes, the debris is disposed of properly once the work is complete.",
        uk: "Так, будівельне сміття вивозиться належним чином після завершення робіт.",
        ar: "نعم، يُتخلص من مخلفات الهدم بشكل سليم بعد انتهاء العمل.",
      },
    },
    {
      question: {
        de: "Welche Informationen werden für eine Anfrage benötigt?",
        en: "What information is needed for a request?",
        uk: "Яка інформація потрібна для заявки?",
        ar: "ما المعلومات المطلوبة لتقديم الطلب؟",
      },
      answer: {
        de: "Am hilfreichsten sind ein Foto der Wand, ihre ungefähren Maße, der gewünschte Zeitraum und eine kurze Beschreibung des Vorhabens.",
        en: "The most helpful things are a photo of the wall, its approximate dimensions, your preferred timeframe, and a short description of the project.",
        uk: "Найкорисніше — фото стіни, її приблизні розміри, бажаний термін і короткий опис задуму.",
        ar: "الأكثر فائدة هو صورة للجدار، أبعاده التقريبية، الموعد المفضل، ووصف مختصر للمشروع.",
      },
    },
  ],

  contact: {
    heading: {
      de: "WO SOLL NEUER RAUM ENTSTEHEN?",
      en: "WHERE SHOULD NEW SPACE HAPPEN?",
      uk: "ДЕ МАЄ З'ЯВИТИСЯ НОВИЙ ПРОСТІР?",
      ar: "أين تريدون أن تنشأ المساحة الجديدة؟",
    },
    subheading: {
      de: "Beschreiben Sie kurz Ihre Wand — wir melden uns mit den nächsten Schritten.",
      en: "Briefly describe your wall — we'll get back to you with next steps.",
      uk: "Коротко опишіть вашу стіну — ми зв'яжемось із наступними кроками.",
      ar: "صفوا جداركم باختصار — سنعاود التواصل معكم بالخطوات التالية.",
    },
    telegramEnabled: true,
  },

  footer: {
    legalLinks: [
      {
        label: { de: "Impressum", en: "Legal notice", uk: "Реквізити", ar: "بيانات قانونية" },
        href: "/impressum",
      },
      {
        label: {
          de: "Datenschutz",
          en: "Privacy",
          uk: "Конфіденційність",
          ar: "الخصوصية",
        },
        href: "/datenschutz",
      },
    ],
  },
};

export default config;
