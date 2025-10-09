
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
    name: "Mikroteenused",
    icon: "🧩",
    description: "Mikroteenused on tarkvaraarenduse arhitektuuriline lähenemine, kus suur rakendus jagatakse väikesteks, iseseisvateks teenusteks. Iga teenus täidab kindlat ülesannet ja saab töötada eraldi teistest teenustest. See tähendab, et arendajad saavad teha muudatusi ühes teenuses, ilma et see mõjutaks kogu süsteemi. Samuti on lihtsam lisada uusi funktsioone või teha hooldust. Mikroteenused toetavad ka erinevaid programmeerimiskeeli, andmebaase ja tööriistu teenuse spetsiifiliselt, muutes tarkvara paindlikumaks ja skaleeritavamaks.",
    question: "Milleks mikroteenused head on?",
    answers: ["Kõik funktsioonid töötavad ühes suures programmis", "Lihtsam arendada ja hooldada väikeseid osi", "Tarkvara muutub keerulisemaks"],
    correctAnswer: 1,
    field: "ita"
  },
  {
    id: "cloudservices",
    name: "Pilveteenused",
    icon: "☁️",
    description: "Pilveteenused võimaldavad kasutada arvutisüsteeme, salvestusruumi ja rakendusi üle interneti, ilma et peaks kõik oma arvutisse paigaldama või hallama. Näiteks saab pilves käivitada veebiservereid, andmebaase või tarkvaralahendusi, mida paljud inimesed samaaegselt kasutavad. See vähendab kulusid, sest ei pea ostma suuri servereid ega hooldama riistvara. Samuti saab kiiresti skaleerida – vajadusel lisada või vähendada ressursse vastavalt nõudlusele.",
    question: "Milleks pilveteenuseid kasutatakse?",
    answers: ["Ainult oma arvutisse tarkvara paigaldamiseks", "Internetis IT-ressursside kasutamiseks", "Veebilehtede kujundamiseks"],
    correctAnswer: 1,
    field: "ita"
  },
  {
    id: "operatingsystems",
    name: "operatsioonisüsteemid",
    icon: "💻",
    description: "Operatsioonisüsteem (OS) on arvuti põhialus, mis juhib riistvara ja tarkvara koostööd. See haldab protsesside käivitamist, mälu kasutamist, andmete salvestamist ja seadmete (nt printerid, klaviatuur) tööd. Tänu operatsioonisüsteemile saavad programmid töötada ilma, et need peaksid tundma kogu riistvara detaile. Populaarsed operatsioonisüsteemid on näiteks Windows, Linux ja macOS. OS teeb arvuti kasutajasõbralikuks ja võimaldab programme turvaliselt ning efektiivselt käivitada.",
    question: "Mis on operatsioonisüsteemi ülesanne?",
    answers: ["Kujundada veebilehti", "Haldada arvuti ja programmide tööd ", "Salvestada ainult andmebaasi"],
    correctAnswer: 1,
    field: "ita"
  },
  {
    id: "digitaltech",
    name: "Digitehnoloogia",
    icon: "💾",
    description: "Digitehnoloogia uurib, kuidas informatsiooni saab esitada, töödelda, salvestada ja edastada digitaalsetes seadmetes. See hõlmab arvuteid, mobiilseadmeid, andmesidevõrke ja sensoreid. Digitehnoloogia abil muudetakse analoogandmed (näiteks heli, pildid) digitaalseks kujuks, mis on arvuti jaoks arusaadav ja töödeldav. Samuti uuritakse, kuidas seadmed omavahel suhtlevad ja infot turvaliselt edastavad, võimaldades näiteks internetiühendust, digitaalseid makseid või pilveteenuseid.",
    question: "Mida uurib digitehnoloogia?",
    answers: ["Kuidas arvutid infot töötlevad ja saadavad ", "Kuidas teha ilusat veebilehte", "Kuidas rakendust turustada"],
    correctAnswer: 0,
    field: "ita"
  },
  {
    id: "nosql",
    name: "NoSQL",
    icon: "🗃️",
    description: "NoSQL andmebaasid on loodud selleks, et hoida suuri andmekoguseid paindlikult ja kiiresti. Erinevalt traditsioonilistest SQL-andmebaasidest, kus andmed on rangelt tabelites ja veergudes, lubavad NoSQL andmebaasid kasutada dokumente, võtme-väärtuse paare, graafe või veergude kogumeid. See võimaldab kiiresti lisada uusi andmetüüpe ja hallata suurt andmemahtu, mis on eriti kasulik veebirakendustes, suurandmetes ja pilveteenustes. NoSQL sobib hästi olukordades, kus andmete struktuur võib aja jooksul muutuda.",
    question: "Mille poolest NoSQL andmebaas erineb tavalistest tabelitest?",
    answers: ["Andmeid saab salvestada paindlikult ", "Kasutab ainult SQL-i", "Andmeid saab salvestada ainult tabelina"],
    correctAnswer: 0,
    field: "ita"
  },

  // ITS (IT Systems Specialist)
  {
    id: "ethicalhacking",
    name: "Eetiline Häkkimine",
    icon: "🛡️",
    description: "Eetilise häkkimise kursusel õpitakse tundma küberturvalisuse põhimõtteid ja erinevaid ründeviise, et mõista, kuidas süsteeme kaitsta. Õpitakse kasutama tööriistu haavatavuste tuvastamiseks, teostatakse turvateste ja hinnatakse riskitasemeid vastutustundlikul viisil.",
    question: "Mida tehakse eetilise häkkimise kursusel?",
    answers: ["Õpitakse pahatahtlikult süsteeme ründama ja andmeid varastama", "Õpitakse süsteeme testima, et tuvastada ja parandada turvanõrkusi", "Õpitakse looma viiruseid ja pahavara süsteemide murdmiseks"],
    correctAnswer: 1,
    field: "its"
  },
  {
    id: "networks",
    name: "Arvutivõrgud",
    icon: "🌐",
    description: "Arvutivõrkude kursusel õpitakse, kuidas seadmed omavahel suhtlevad, kuidas luua ja hallata võrke ning kuidas tagada nende turvaline ja tõhus töö. Kursusel seadistatakse ruutereid ja lüliteid, analüüsitakse andmeliiklust ja lahendatakse võrguühenduse probleeme.",
    question: "Mida tehakse arvutivõrkude kursusel?",
    answers: ["Õpitakse looma ja seadistama arvutivõrke ning tagama nende turvaline toimimine", "Õpitakse ainult arvutite riistvara parandama", "Õpitakse kirjutama tarkvaraprogramme veebilehtede jaoks"],
    correctAnswer: 0,
    field: "its"
  },
  {
    id: "progbasics",
    name: "Programmeerimise alused",
    icon: "👨‍💻",
    description: "Programmeerimise aluste kursusel omandatakse teadmised programmeerimise loogikast ja ülesehitusest. Õpitakse kasutama muutujaid, tingimuslauseid ja tsükleid, kirjutama lihtsaid programme ning lahendama praktilisi ülesandeid mõnes programmeerimiskeeles.",
    question: "Mida õpitakse programmeerimise aluste kursusel?",
    answers: ["Õpitakse programme kirjutama ja loogilisi probleeme lahendama", "Õpitakse ainult arvuti hooldust ja riistvara vahetamist", "Õpitakse andmete sisestamist tabelisse ilma koodita"],
    correctAnswer: 0,
    field: "its"
  },
  {
    id: "frameworks",
    name: "IT-raamistikud",
    icon: "🏗️",
    description: "IT-raamistikud aitavad korraldada ettevõtte IT-tööd nii, et kõik toimiks sujuvalt ja turvaliselt. Need annavad juhised, kuidas IT-teenuseid paremini planeerida, hallata ja parandada.",
    question: "Milleks on IT-raamistikud vajalikud?",
    answers: ["Et IT-töö oleks korraldatud ja turvaline", "Et arvutimänge kiiremini mängida", "Et arvuteid kiiremini sisse lülitada"],
    correctAnswer: 0,
    field: "its"
  },
  {
    id: "automation",
    name: "Automatiseerimine",
    icon: "⚙️",
    description: "Automatiseerimise kursusel õpitakse, kuidas luua süsteeme ja skripte, mis täidavad korduvaid ülesandeid automaatselt. Õpitakse kasutama tööriistu ja programmeerimiskeeli töövoogude automatiseerimiseks, protsesside optimeerimiseks ja töö efektiivsuse tõstmiseks.",
    question: "Mida tehakse automatiseerimise abil?",
    answers: ["Kõik töö tuleb käsitsi teha", "Arvuti teeb korduvaid ülesandeid ise", "Arvuti lülitatakse kiiremini sisse"],
    correctAnswer: 1,
    field: "its"
  },

  // DT (Digital & Sustainable Technologies)
  {
  id: "mechanics",
  name: "Mehaanika alused",
  icon: "⚙️",
  description: "Õpid, kuidas masinad töötavad ja millest need koosnevad. Tutvud erinevate masinaelementidega ning õpid neid kasutama vastavalt ülesandele. Teed lihtsamaid praktilisi töid, et mõista mehaanika põhimõtteid.",
  question: "Milleks kasutatakse masinaelemente?",
  answers: [
    "Masina osade ühendamiseks ja liikumise tagamiseks",
    "Masina välimuse ja kujunduse muutmiseks",
    "Elektritarbimise juhtimiseks töö ajal"
  ],
  correctAnswer: 0,
  field: "dt"
},
{
  id: "smarthome",
  name: "Tark maja",
  icon: "🏠",
  description: "Õpid, kuidas hoone automaatikasüsteemid juhivad valgustust, kütet ja turvalisust. Katsetad nutirakendusi ja seadistad süsteeme energiasäästu ja mugavuse parandamiseks.",
  question: "Mis on targa maja süsteemide peamine eesmärk?",
  answers: [
    "Hoone välimuse muutmine kaasaegsemaks",
    "Automatiseerida ja optimeerida hoone funktsioone mugavuse ja energiasäästu nimel",
    "Täielikult asendada inimesed hoone hooldamisel"
  ],
  correctAnswer: 1,
  field: "dt"
},
{
  id: "ai",
  name: "AI tööstuses",
  icon: "🧠",
  description: "Õpid, kuidas tehisintellekt aitab automatiseerida tööstusprotsesse ja teha targemaid otsuseid. Tutvud masinõppe ja andmetöötluse põhimõtetega.",
  question: "Mida tähendab „masinõpe“ tehisintellekti kontekstis?",
  answers: [
    "Inimese õpetamist arvutit parandama",
    "Arvuti õppimist andmete põhjal mustreid ära tundma ja otsuseid tegema",
    "Masinate füüsilist hooldamist tööstuses"
  ],
  correctAnswer: 1,
  field: "dt"
},
{
  id: "datamanagement",
  name: "Digitaalsete andmete haldamine",
  icon: "📂",
  description: "Õpid, kuidas andmeid turvaliselt koguda, säilitada ja töödelda. Katsetad tööriistu nagu PowerBI ja Python ning õpid andmetega vastutustundlikult töötama.",
  question: "Miks on andmete turvaline säilitamine oluline?",
  answers: [
    "Et andmeid oleks lihtne kustutada ja muuta",
    "Et arvuti töötaks kiiremini ja sujuvamalt",
    "Et andmed ei satuks valedesse kätesse ja oleksid kaitstud"
  ],
  correctAnswer: 2,
  field: "dt"
},
{
  id: "soldering",
  name: "Jootmistööd",
  icon: "🔥",
  description: "Õpid metallide ühendamist jootmise teel, kasutades erinevaid joodiseid ja tööriistu. Harjutad ohutuid töövõtteid ja kvaliteetsete jootekohtade tegemist.",
  question: "Mis on jootmise peamine erinevus keevitamisest?",
  answers: [
    "Jootmisel ei sulatata põhimetalli, vaid kasutatakse joodist",
    "Keevitamisel kasutatakse madalamat temperatuuri",
    "Jootmisel kasutatakse plastikut ja keevitamisel metalli"
  ],
  correctAnswer: 0,
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
