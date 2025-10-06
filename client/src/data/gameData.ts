
export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  question: string;
  answers: string[];
  correctAnswer: number;
  field: string;
}

export const fields = [
  { id: "vs", name: "VS", fullName: "Noorem tarkvaraarendaja" },
  { id: "uxui", name: "UX/UI", fullName: "UX/UI disaini nooremspetsialist" },
  { id: "ita", name: "ITA", fullName: "IT Developer" },
  { id: "its", name: "ITS", fullName: "IT-süsteemide nooremspetsialist" },
  { id: "dt", name: "DT", fullName: "Kestlikud tehnoloogiad" },
];

export const subjects: Subject[] = [
  // VS (Web Specialist)
  {
    id: "java",
    name: "Java",
    icon: "☕",
    description: "Learn object-oriented programming with Java, one of the most popular programming languages worldwide.",
    question: "What does JVM stand for in Java? ",
    answers: ["Java Virtual Machine", "Java Variable Manager", "Java Version Module"],
    correctAnswer: 0,
    field: "vs"
  },
  {
    id: "htmlcss",
    name: "HTML/CSS",
    icon: "🌐",
    description: "Master the fundamental building blocks of web development - HTML for structure and CSS for styling.",
    question: "Which HTML tag is used to define an internal stylesheet?",
    answers: ["<script>", "<style>", "<css>"],
    correctAnswer: 1,
    field: "vs"
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    description: "Make websites interactive and dynamic with JavaScript, the language of the web.",
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: ["var", "let", "const"],
    correctAnswer: 2,
    field: "vs"
  },
  {
    id: "databases",
    name: "Databases",
    icon: "🗄️",
    description: "Understand how to store, retrieve, and manage data using database systems.",
    question: "What does SQL stand for?",
    answers: ["Structured Query Language", "Simple Question Logic", "System Quality Level"],
    correctAnswer: 0,
    field: "vs"
  },
  {
    id: "mobileapp",
    name: "Mobile App",
    icon: "📱",
    description: "Build mobile applications for iOS and Android platforms.",
    question: "Which framework is used for cross-platform mobile development?",
    answers: ["React Native", "Only Java", "Only Swift"],
    correctAnswer: 0,
    field: "vs"
  },

  // UX/UI
  {
    id: "userresearch",
    name: "Kasutajakogemuse analüüs",
    icon: "🔍",
    description: " Kasutajakogemuse analüüsis uuritakse, kuidas inimesed toodet, teenust või veebikeskkonda tegelikult kasutavad. Selle käigus tehakse intervjuusid, vaatlust ja testimist, et mõista kasutajate vajadusi ning parandada lahenduste kasutatavust.",
    question: " Milline meetod aitab kõige paremini mõista, kuidas kasutajad reaalselt toodet kasutavad?",
    answers: ["Küsimustiku saatmine e-posti teel", "Kasutajate vaatlus toote kasutamise ajal", "Fookusgrupi arutelu tulemuste kokkuvõte"],
    correctAnswer: 1,
    field: "uxui"
  },
  {
    id: "wireframing",
    name: "Graafilise disaini alused",
    icon: "📐",
    description: "Graafilise disaini alused hõlmavad värvimudeleid, kompositsiooni, tüpograafiat ja disainimustreid. Disainer kasutab neid põhimõtteid, et edastada sõnumeid visuaalselt selgelt, loovalt ja harmooniliselt.",
    question: "Milline põhimõte aitab kujunduses olulisemat infot kiiremini esile tuua?",
    answers: ["Kõik elemendid on sarnase suuruse ja värvitooniga", "Visuaalse hierarhia loomine kontrasti ja paigutusega", "Teksti paigutamine juhuslikesse kohtadesse"],
    correctAnswer: 1,
    field: "uxui"
  },
  {
    id: "prototyping",
    name: "Kasutajaliidese disain",
    icon: "🧩",
    description: " Kasutajaliidese disain keskendub sellele, kuidas kasutaja toodet tajub ja sellega suhtleb. Eesmärk on luua selge, loogiline ja visuaalselt arusaadav liides, mis vastab standarditele ja kasutaja ootustele.",
    question: " Mis näitab, et kasutajaliidese navigatsioon on hästi kujundatud?",
    answers: ["Kõik nupud on erineva kujuga", "Navigatsioonis on palju peamenüü tasemeid", "Kasutaja leiab soovitud info ilma juhendita"],
    correctAnswer: 2,
    field: "uxui"
  },
  {
    id: "testing",
    name: "Veebikujundus",
    icon: "🎨",
    description: "Veebikujundus ühendab visuaalse disaini ja tehnilise teostuse. See põhineb semantilisel HTML-il ja struktureeritud CSS-il, järgides W3C standardeid. Eesmärk on luua funktsionaalne ja kõigis seadmetes hästi toimiv veebileht.",
    question: "Miks on semantilise HTML-i kasutamine veebikujunduses oluline?",
    answers: ["See aitab parandada lehe loetavust ja juurdepääsetavust", "See muudab lehe laadimise kiiremaks", "See lisab automaatselt animatsioone"],
    correctAnswer: 0,
    field: "uxui"
  },
  {
    id: "design",
    name: "Psühholoogia ja suhtlemine",
    icon: "👥",
    description: "Psühholoogia ja suhtlemine aitavad disaineril mõista kasutajate käitumist ning luua usalduslikku ja selget kommunikatsiooni. Mõjutuspsühholoogia võtteid kasutatakse näiteks selleks, et suunata kasutajat tegema soovitud valikut.",
    question: "Miks on disaineril kasulik mõista kasutaja psühholoogiat?",
    answers: ["See võimaldab kasutada rohkem värve ja fonte", "See aitab kujundada lahendusi, mis vastavad kasutaja ootustele", "See muudab tööprotsessi kiiremaks"],
    correctAnswer: 1,
    field: "uxui"
  },

  // ITA (IT Developer)
  {
    id: "microservices",
    name: "Microservices",
    icon: "🧩",
    description: "Learn to build scalable applications using microservices architecture.",
    question: "What is a microservice?",
    answers: ["A small independent service", "A tiny computer", "A mini website"],
    correctAnswer: 0,
    field: "ita"
  },
  {
    id: "cloudservices",
    name: "Cloud Services",
    icon: "☁️",
    description: "Master cloud computing platforms like AWS, Azure, and Google Cloud.",
    question: "What does 'cloud computing' mean?",
    answers: ["Weather forecasting", "Remote server storage and computing", "Air quality monitoring"],
    correctAnswer: 1,
    field: "ita"
  },
  {
    id: "operatingsystems",
    name: "Operating Systems",
    icon: "💻",
    description: "Understand how operating systems manage hardware and software resources.",
    question: "Which is NOT an operating system?",
    answers: ["Linux", "Windows", "Chrome"],
    correctAnswer: 2,
    field: "ita"
  },
  {
    id: "digitaltech",
    name: "Digital Technology",
    icon: "💾",
    description: "Explore the latest digital technologies and their applications.",
    question: "What is IoT?",
    answers: ["Internet of Things", "Institute of Technology", "Index of Terms"],
    correctAnswer: 0,
    field: "ita"
  },
  {
    id: "nosql",
    name: "NoSQL",
    icon: "🗃️",
    description: "Learn non-relational database systems for modern applications.",
    question: "Which is a NoSQL database?",
    answers: ["MySQL", "MongoDB", "PostgreSQL"],
    correctAnswer: 1,
    field: "ita"
  },

  // ITS (IT Systems Specialist)
  {
    id: "ethicalhacking",
    name: "Ethical Hacking",
    icon: "🛡️",
    description: "Learn cybersecurity and ethical hacking to protect systems from threats.",
    question: "What is penetration testing?",
    answers: ["Breaking things randomly", "Authorized security testing", "Installing software"],
    correctAnswer: 1,
    field: "its"
  },
  {
    id: "networks",
    name: "Computer Networks",
    icon: "🌐",
    description: "Master network protocols, architecture, and administration.",
    question: "What does IP stand for in networking?",
    answers: ["Internet Protocol", "Internal Program", "Input Process"],
    correctAnswer: 0,
    field: "its"
  },
  {
    id: "progbasics",
    name: "Programming Basics",
    icon: "👨‍💻",
    description: "Build a strong foundation in programming fundamentals.",
    question: "What is a variable in programming?",
    answers: ["A storage container for data", "A type of virus", "A network device"],
    correctAnswer: 0,
    field: "its"
  },
  {
    id: "frameworks",
    name: "IT Frameworks",
    icon: "🏗️",
    description: "Learn industry-standard IT frameworks and best practices.",
    question: "What is ITIL?",
    answers: ["IT Infrastructure Library", "Internet Technology Link", "Italian Language"],
    correctAnswer: 0,
    field: "its"
  },
  {
    id: "automation",
    name: "Automation",
    icon: "⚙️",
    description: "Automate repetitive tasks using scripting and automation tools.",
    question: "What is the benefit of automation?",
    answers: ["Makes work slower", "Increases efficiency", "Adds complexity"],
    correctAnswer: 1,
    field: "its"
  },

  // DT (Digital & Sustainable Technologies)
  {
    id: "mechanics",
    name: "Mechanics",
    icon: "⚙️",
    description: "Understand mechanical systems and their integration with digital technology.",
    question: "What field combines mechanics with electronics?",
    answers: ["Mechatronics", "Biology", "Chemistry"],
    correctAnswer: 0,
    field: "dt"
  },
  {
    id: "robotics",
    name: "Robotics",
    icon: "🤖",
    description: "Build and program robots for various applications.",
    question: "What is a robot?",
    answers: ["A programmable machine", "A computer game", "A mobile app"],
    correctAnswer: 0,
    field: "dt"
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: "🧠",
    description: "Explore machine learning and AI technologies.",
    question: "What is machine learning?",
    answers: ["Teaching humans", "AI learning from data", "Computer hardware"],
    correctAnswer: 1,
    field: "dt"
  },
  {
    id: "datamanagement",
    name: "Data Management",
    icon: "📂",
    description: "Learn to organize, store, and analyze large datasets.",
    question: "What is Big Data?",
    answers: ["Large files only", "Extremely large datasets", "Big computers"],
    correctAnswer: 1,
    field: "dt"
  },
  {
    id: "soldering",
    name: "Soldering",
    icon: "🔥",
    description: "Master electronic circuit assembly and repair techniques.",
    question: "What is soldering used for?",
    answers: ["Cooking", "Joining electronic components", "Cutting metal"],
    correctAnswer: 1,
    field: "dt"
  },
];


export interface Quest {
  id: string;
  title: string;
  description: string;
  checkComplete: (gameState: GameState) => boolean;
}

export interface GameState {
  answeredSubjects: Set<string>;
  correctAnswers: Set<string>;
  wrongAnswers: Set<string>;
  completedFields: Set<string>;
  easterEggFound: boolean;
}

export const quests: Quest[] = [
  {
    id: "explore",
    title: "Avasta",
    description: "Ava igast erialast vähemalt 1 aine",
    checkComplete: (state) => {
      const fieldsWithAnswers = new Set<string>();
      state.answeredSubjects.forEach(subjectId => {
        const subject = subjects.find(s => s.id === subjectId);
        if (subject) fieldsWithAnswers.add(subject.field);
      });
      return fieldsWithAnswers.size >= 5;
    }
  },
  {
    id: "bingo",
    title: "BINGO!",
    description: "Saavuta bingo",
    checkComplete: (state) => state.completedFields.size >= 1
  },
  {
    id: "easter",
    title: "Easter Egg",
    description: "Avasta üllatus külaline",
    checkComplete: (state) => state.easterEggFound
  },
  {
    id: "guru",
    title: "IT Guru",
    description: "Vasta 15 küsimust korrektselt",
    checkComplete: (state) => state.correctAnswers.size >= 15
  },
];
