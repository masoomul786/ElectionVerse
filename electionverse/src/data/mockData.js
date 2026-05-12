// Mock data for ElectionVerse platform

export const candidates = [
  {
    id: "cand-a",
    name: "Ramesh Kumar",
    party: "Progressive Front",
    promises: [
      {
        text: "Free Wi-Fi in all government schools",
        category: "infrastructure",
        feasibility: 65,
        reason: "requires telecom infrastructure investment",
        whatThisMeans: "Students in government schools will have equal access to digital learning tools and global information."
      },
      {
        text: "2 new district hospitals",
        category: "infrastructure",
        feasibility: 72,
        reason: "budget dependent but achievable in one term",
        whatThisMeans: "Better healthcare access for the community, reducing the burden on existing city hospitals."
      },
      {
        text: "500 km of roads in 18 months",
        category: "infrastructure",
        feasibility: 45,
        reason: "timeline is too aggressive for this scale",
        whatThisMeans: "Improved connectivity between rural and urban areas, though the rapid pace might compromise quality."
      }
    ]
  },
  {
    id: "cand-b",
    name: "Sunita Devi",
    party: "Rural Upliftment Party",
    promises: [
      {
        text: "Farmer loan waiver for landholdings under 5 acres",
        category: "social",
        feasibility: 58,
        reason: "state budget can support partial waiver",
        whatThisMeans: "Financial relief for small-scale farmers, helping them break the cycle of high-interest debt."
      },
      {
        text: "24-hour electricity to all villages",
        category: "social",
        feasibility: 70,
        reason: "grid infrastructure mostly exists",
        whatThisMeans: "Uninterrupted power for households and small rural businesses, boosting local productivity."
      },
      {
        text: "10,000 government jobs in 2 years",
        category: "social",
        feasibility: 52,
        reason: "recruitment cycles typically take 3 to 5 years",
        whatThisMeans: "Increased employment opportunities in the public sector, though timelines may be optimistic."
      }
    ]
  },
  {
    id: "cand-c",
    name: "Arjun Das",
    party: "Green Heritage Alliance",
    promises: [
      {
        text: "Clean river Brahmaputra initiative",
        category: "social",
        feasibility: 60,
        reason: "depends on central government cooperation",
        whatThisMeans: "Restoration of the river's ecosystem and cleaner water for millions of people depending on it."
      },
      {
        text: "Women safety helpline active in 2 hours",
        category: "social",
        feasibility: 80,
        reason: "technology and staffing are feasible",
        whatThisMeans: "A rapid-response system to ensure the safety and security of women in public and private spaces."
      },
      {
        text: "Free bus passes for students",
        category: "social",
        feasibility: 75,
        reason: "state transport budget can absorb this cost",
        whatThisMeans: "Reduced cost of education commute, making higher education more accessible to students from far-off areas."
      }
    ]
  }
];

export const quizQuestions = [
  {
    question: "What is the minimum age required to vote in Indian General Elections?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correctIndex: 1,
    explanation: "The 61st Constitutional Amendment Act, 1988 reduced the voting age from 21 to 18 years."
  },
  {
    question: "Who appoints the Chief Election Commissioner of India?",
    options: ["Prime Minister", "Chief Justice of India", "President of India", "Parliament"],
    correctIndex: 2,
    explanation: "The President of India appoints the CEC and other Election Commissioners based on the advice of the government."
  },
  {
    question: "What does 'NOTA' stand for on an EVM?",
    options: ["None Of The Above", "No Options To Apply", "New Option To All", "National Organization of Trustworthy Agents"],
    correctIndex: 0,
    explanation: "NOTA allows voters to register their disapproval of all candidates in the fray."
  },
  {
    question: "How long is the term of the Lok Sabha unless dissolved earlier?",
    options: ["4 years", "5 years", "6 years", "Indefinite"],
    correctIndex: 1,
    explanation: "The normal term of the Lok Sabha is five years from the date of its first meeting."
  },
  {
    question: "Which article of the Indian Constitution provides for the Election Commission?",
    options: ["Article 324", "Article 370", "Article 14", "Article 21"],
    correctIndex: 0,
    explanation: "Article 324 provides for the power of superintendence, direction, and control of elections to be vested in an Election Commission."
  },
  {
    question: "The Model Code of Conduct comes into force from which date?",
    options: ["Day of voting", "Day of results", "Date of announcement of election schedule", "Day of nomination"],
    correctIndex: 2,
    explanation: "The MCC is a set of guidelines issued by the ECI for parties and candidates to ensure free and fair elections."
  },
  {
    question: "What is the maximum number of candidates an EVM can support with its current design?",
    options: ["16", "32", "64", "256"],
    correctIndex: 2,
    explanation: "A single balloting unit can accommodate 16 candidates; up to 4 units can be connected to one control unit, totaling 64."
  },
  {
    question: "Who was the first Chief Election Commissioner of India?",
    options: ["Sukumar Sen", "T.N. Seshan", "Sunil Arora", "V.S. Ramadevi"],
    correctIndex: 0,
    explanation: "Sukumar Sen served as the first CEC of India from 1950 to 1958, overseeing the first two general elections."
  }
];

export const biasCards = [
  { promise: "Free Wi-Fi in all government schools", category: "infrastructure" },
  { promise: "2 new district hospitals", category: "infrastructure" },
  { promise: "500 km of roads in 18 months", category: "infrastructure" },
  { promise: "Farmer loan waiver for landholdings under 5 acres", category: "social" },
  { promise: "24-hour electricity to all villages", category: "social" },
  { promise: "10,000 government jobs in 2 years", category: "social" }
];

// Compatibility exports for existing components
export const electionData = {
  city: "Nagar Pradesh",
  year: 2026,
  candidates: candidates
};

export const biasProfileData = {
  voterTypes: {
    infrastructure: {
      title: "Infrastructure Biased",
      description: "You prioritize physical growth and modernization over immediate social support.",
      tips: ["Check environmental impacts", "Consider social equity", "Balance with welfare"]
    },
    analytical: {
      title: "Analytical Voter",
      description: "You weigh each promise carefully, looking for balance and feasibility.",
      tips: ["Keep questioning", "Share your logic", "Look for data"]
    },
    impulse: {
      title: "Impulse Voter",
      description: "You are quick to support attractive promises without checking feasibility.",
      tips: ["Check the budget", "Ask 'how?'", "Read critical pieces"]
    },
    confirmation: {
      title: "Confirmation Biased",
      description: "You tend to favor one ideology consistently and reject others.",
      tips: ["Find one good idea in 'the other side'", "Diversify news", "Focus on solutions"]
    }
  }
};

export const electionStages = {
  en: [
    { id: 1, title: "Voter Registration", description: "Getting on the list.", explanation: "Must be 18+.", example: "Like a library card.", icon: "UserPlus" },
    { id: 2, title: "Nomination", description: "Signing up.", explanation: "Candidates register.", example: "Class monitor signup.", icon: "FileSignature" },
    { id: 3, title: "Campaign", description: "Promising.", explanation: "Rallies and posters.", example: "Assembly speeches.", icon: "Megaphone" },
    { id: 4, title: "Voting Day", description: "Choosing.", explanation: "Using EVMs.", example: "Secret paper slips.", icon: "Fingerprint" },
    { id: 5, title: "Counting", description: "Tallying.", explanation: "EVMs opened.", example: "Teacher counting slips.", icon: "Calculator" },
    { id: 6, title: "Result", description: "Announcing.", explanation: "Winner declared.", example: "Principal announcing monitor.", icon: "Trophy" }
  ],
  hi: [
    { id: 1, title: "पंजीकरण", description: "सूची में नाम।", explanation: "18+ उम्र।", example: "लाइब्रेरी कार्ड की तरह।", icon: "UserPlus" }
  ],
  as: [
    { id: 1, title: "পঞ্জীয়ন", description: "তালিকাত নাম।", explanation: "১৮+ বয়স।", example: "লাইব্ৰেৰী কাৰ্ডৰ দৰে।", icon: "UserPlus" }
  ]
};

// Log for verification
console.log("Candidates:", candidates);
console.log("Quiz Questions:", quizQuestions);
console.log("Bias Cards:", biasCards);
