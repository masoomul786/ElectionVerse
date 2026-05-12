"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Globe, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LearnPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [language, setLanguage] = useState<"English" | "Hindi" | "Assamese">("English");

  const translations = {
    English: {
      badge: "Educational Guide",
      title: "Journey of a",
      titleHighlight: "Vote",
      subtitle: "Understand every step of the democratic process.",
      toggleLabel: "Language Toggle",
      previewLabel: "Feature preview",
      stageLabel: "Stage",
      explanationLabel: "Explanation",
      exampleLabel: "Real-Life Example",
      footer: "Learn more about each stage to become a responsible voter.",
      stages: [
        {
          id: 1,
          title: "Voter Registration",
          emoji: "🗳️",
          shortDescription: "Getting on the Electoral Roll.",
          fullExplanation: "Every citizen above 18 must register on the Electoral Roll before they can vote. This ensures that only eligible people participate in the democratic process.",
          example: "Think of it like signing up for an exam. You cannot walk in on exam day without registering first."
        },
        {
          id: 2,
          title: "Nomination of Candidates",
          emoji: "✍️",
          shortDescription: "Applying to run for office.",
          fullExplanation: "Any eligible citizen can file a nomination form with the Election Commission to stand as a candidate. The commission checks their background and qualifications.",
          example: "Like applying for a job. You submit your application and the commission checks if you qualify."
        },
        {
          id: 3,
          title: "Campaign Period",
          emoji: "📢",
          shortDescription: "Sharing promises with the public.",
          fullExplanation: "This is the period where candidates travel around and explain their promises to voters to gain support before the voting day.",
          example: "Like a school election where candidates give speeches and put up posters to convince their classmates."
        },
        {
          id: 4,
          title: "Voting Day",
          emoji: "🔴",
          shortDescription: "The day of the big decision.",
          fullExplanation: "On this day, voters visit their assigned polling booth and press the EVM (Electronic Voting Machine) button for their chosen candidate.",
          example: "Like pressing a buzzer in a quiz show — one press, one answer, no going back."
        },
        {
          id: 5,
          title: "Vote Counting",
          emoji: "🧮",
          shortDescription: "Tallying the results.",
          fullExplanation: "After the polls close, all EVMs are transported to secure counting centers where every vote is tallied carefully under supervision.",
          example: "Like a teacher correcting answer sheets and adding up marks to see who scored the highest."
        },
        {
          id: 6,
          title: "Result and Oath",
          emoji: "🏆",
          shortDescription: "Declaring the winner.",
          fullExplanation: "The winner is declared and takes a formal oath of office before assuming their position and starting their service to the people.",
          example: "Like a sports trophy ceremony — the winner is announced and accepts the responsibility of being the leader."
        }
      ]
    },
    Hindi: {
      badge: "शैक्षिक मार्गदर्शिका",
      title: "एक वोट की",
      titleHighlight: "यात्रा",
      subtitle: "लोकतांत्रिक प्रक्रिया के हर कदम को समझें।",
      toggleLabel: "भाषा बदलें",
      previewLabel: "पूर्वावलोकन",
      stageLabel: "चरण",
      explanationLabel: "स्पष्टीकरण",
      exampleLabel: "वास्तविक उदाहरण",
      footer: "एक जिम्मेदार मतदाता बनने के लिए प्रत्येक चरण के बारे में और जानें।",
      stages: [
        {
          id: 1,
          title: "मतदाता पंजीकरण",
          emoji: "🗳️",
          shortDescription: "मतदाता सूची में नाम जुड़वाना।",
          fullExplanation: "18 वर्ष से ऊपर के प्रत्येक नागरिक को मतदान करने से पहले मतदाता सूची में पंजीकरण करना होगा। यह सुनिश्चित करता है कि केवल योग्य लोग ही लोकतांत्रिक प्रक्रिया में भाग लें।",
          example: "इसे किसी परीक्षा के लिए पंजीकरण करने जैसा समझें। आप पंजीकरण किए बिना परीक्षा के दिन अंदर नहीं जा सकते।"
        },
        {
          id: 2,
          title: "उम्मीदवारों का नामांकन",
          emoji: "✍️",
          shortDescription: "चुनाव लड़ने के लिए आवेदन करना।",
          fullExplanation: "कोई भी पात्र नागरिक उम्मीदवार के रूप में खड़े होने के लिए चुनाव आयोग के पास नामांकन फॉर्म भर सकता है। आयोग उनकी पृष्ठभूमि और योग्यता की जाँच करता है।",
          example: "जैसे नौकरी के लिए आवेदन करना। आप अपना आवेदन जमा करते हैं और आयोग जांचता है कि आप योग्य हैं या नहीं।"
        },
        {
          id: 3,
          title: "चुनाव प्रचार",
          emoji: "📢",
          shortDescription: "जनता के साथ वादे साझा करना।",
          fullExplanation: "यह वह अवधि है जहां उम्मीदवार मतदान के दिन से पहले समर्थन पाने के लिए मतदाताओं को अपने वादों के बारे में बताते हैं।",
          example: "स्कूल चुनाव की तरह जहां उम्मीदवार अपने सहपाठियों को समझाने के लिए भाषण देते हैं और पोस्टर लगाते हैं।"
        },
        {
          id: 4,
          title: "मतदान दिवस",
          emoji: "🔴",
          shortDescription: "बड़े फैसले का दिन।",
          fullExplanation: "इस दिन, मतदाता अपने आवंटित मतदान केंद्र पर जाते हैं और अपने पसंदीदा उम्मीदवार के लिए ईवीएम (इलेक्ट्रॉनिक वोटिंग मशीन) का बटन दबाते हैं।",
          example: "क्विज़ शो में बजर दबाने की तरह — एक प्रेस, एक उत्तर, कोई पीछे हटना नहीं।"
        },
        {
          id: 5,
          title: "मतगणना",
          emoji: "🧮",
          shortDescription: "परिणामों की गिनती।",
          fullExplanation: "मतदान समाप्त होने के बाद, सभी ईवीएम को सुरक्षित केंद्रों पर ले जाया जाता है जहां पर्यवेक्षण के तहत हर वोट की सावधानीपूर्वक गिनती की जाती है।",
          example: "जैसे शिक्षक उत्तर पुस्तिकाओं की जाँच करते हैं और यह देखने के लिए अंक जोड़ते हैं कि किसने सबसे अधिक अंक प्राप्त किए।"
        },
        {
          id: 6,
          title: "परिणाम और शपथ",
          emoji: "🏆",
          shortDescription: "विजेता की घोषणा।",
          fullExplanation: "विजेता की घोषणा की जाती है और वे अपना पद संभालने और लोगों की सेवा शुरू करने से पहले औपचारिक शपथ लेते हैं।",
          example: "खेल ट्रॉफी समारोह की तरह — विजेता की घोषणा की जाती है और वह नेता होने की जिम्मेदारी स्वीकार करता है।"
        }
      ]
    },
    Assamese: {
      badge: "শৈক্ষিক নিৰ্দেশিকা",
      title: "এটা ভোটৰ",
      titleHighlight: "যাত্ৰা",
      subtitle: "গণতান্ত্ৰিক প্ৰক্ৰিয়াৰ প্ৰতিটো খোজ বুজি লওক।",
      toggleLabel: "ভাষা পৰিৱৰ্তন",
      previewLabel: "বৈশিষ্ট্যৰ পূৰ্ববীক্ষণ",
      stageLabel: "স্তৰ",
      explanationLabel: "ব্যাখ্যা",
      exampleLabel: "বাস্তৱ জীৱনৰ উদাহৰণ",
      footer: "দায়িত্বশীল ভোটাৰ হ'বলৈ প্ৰতিটো স্তৰৰ বিষয়ে অধিক জানক।",
      stages: [
        {
          id: 1,
          title: "ভোটাৰ পঞ্জীয়ন",
          emoji: "🗳️",
          shortDescription: "ভোটাৰ তালিকাত নাম অন্তৰ্ভুক্তি।",
          fullExplanation: "১৮ বছৰৰ ওপৰৰ প্ৰতিগৰাকী নাগৰিকে ভোটদানৰ আগতে ভোটাৰ তালিকাত নাম পঞ্জীয়ন কৰিব লাগিব। ই কেৱল যোগ্য লোকসকলে গণতান্ত্ৰিক প্ৰক্ৰিয়াত অংশগ্ৰহণ কৰাটো নিশ্চিত কৰে।",
          example: "ইয়াক পৰীক্ষাৰ বাবে পঞ্জীয়ন কৰাৰ দৰে ভাবক। আপুনি পঞ্জীয়ন নকৰাকৈ পৰীক্ষাৰ দিনা ভিতৰত সোমাব নোৱাৰে।"
        },
        {
          id: 2,
          title: "প্ৰাৰ্থীৰ মনোনয়ন",
          emoji: "✍️",
          shortDescription: "নিৰ্বাচনত থিয় দিবলৈ আবেদন।",
          fullExplanation: "যিকোনো যোগ্য নাগৰিকে প্ৰাৰ্থী হিচাপে থিয় দিবলৈ নিৰ্বাচন আয়োগৰ ওচৰত মনোনয়ন পত্ৰ দাখিল কৰিব পাৰে। আয়োগে তেওঁলোকৰ পটভূমি আৰু অৰ্হতা পৰীক্ষা কৰে।",
          example: "এটা চাকৰিৰ বাবে আবেদন কৰাৰ দৰে। আপুনি আপোনাৰ আবেদন দাখিল কৰে আৰু আয়োগে আপুনি যোগ্য নেকি পৰীক্ষা কৰে।"
        },
        {
          id: 3,
          title: "নিৰ্বাচনী প্ৰচাৰ",
          emoji: "📢",
          shortDescription: "ৰাইজৰ আগত প্ৰতিশ্ৰুতি বিনিময়।",
          fullExplanation: "এই সময়ছোৱাত প্ৰাৰ্থীসকলে ভোটদানৰ দিনাৰ আগতে ৰাইজৰ সমৰ্থন লাভৰ বাবে ভোটাৰসকলৰ আগত তেওঁলোকৰ প্ৰতিশ্ৰুতিসমূহ ব্যাখ্যা কৰে।",
          example: "বিদ্যালয়ৰ নিৰ্বাচনৰ দৰে য’ত প্ৰাৰ্থীসকলে তেওঁলোকৰ সহপাঠীক পতিয়ন নিয়াবলৈ ভাষণ দিয়ে আৰু পোষ্টাৰ লগায়।"
        },
        {
          id: 4,
          title: "ভোটদানৰ দিন",
          emoji: "🔴",
          shortDescription: "ডাঙৰ সিদ্ধান্তৰ দিন।",
          fullExplanation: "এই দিনটোত, ভোটাৰসকলে নিজৰ নিৰ্ধাৰিত ভোটদান কেন্দ্ৰলৈ যায় আৰু পছন্দৰ প্ৰাৰ্থীৰ বাবে ইভিএম (ইলেক্ট্ৰনিক ভোটিং মেচিন) বুটাম টিপে।",
          example: "কুইজ শ্ব’ত বাজাৰ টিপাৰ দৰে — এবাৰ টিপা, এটা উত্তৰ, আৰু উভতি অহাৰ উপায় নাই।"
        },
        {
          id: 5,
          title: "ভোট গণনা",
          emoji: "🧮",
          shortDescription: "ফলাফলৰ হিচাপ।",
          fullExplanation: "ভোটদান সমাপ্ত হোৱাৰ পিছত, সকলো ইভিএম সুৰক্ষিত গণনা কেন্দ্ৰলৈ নিয়া হয় য’ত প্ৰতিটো ভোট পৰ্যবেক্ষণৰ অধীনত সাৱধানে গণনা কৰা হয়।",
          example: "শিক্ষকে উত্তৰ বহী চাই কোনে সৰ্বাধিক নম্বৰ লাভ কৰিলে সেয়া চাবলৈ নম্বৰ যোগ কৰাৰ দৰে।"
        },
        {
          id: 6,
          title: "ফলাফল আৰু শপত গ্ৰহণ",
          emoji: "🏆",
          shortDescription: "বিজয়ী ঘোষণা।",
          fullExplanation: "বিজয়ীক ঘোষণা কৰা হয় আৰু তেওঁলোকে কাৰ্যভাৰ গ্ৰহণ কৰি ৰাইজৰ সেৱা আৰম্ভ কৰাৰ আগতে আনুষ্ঠানিক শপত লয়।",
          example: "খেলৰ ট্ৰফী বিতৰণ অনুষ্ঠানৰ দৰে — বিজয়ীক ঘোষণা কৰা হয় আৰু তেওঁ নেতা হোৱাৰ দায়িত্ব স্বীকাৰ কৰে।"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#020617] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle and Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="space-y-4">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {t.badge}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
              {t.title} <span className="text-orange-500">{t.titleHighlight}</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
              <Globe className="w-4 h-4" /> {t.toggleLabel}
            </div>
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              {(["English", "Hindi", "Assamese"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                    language === lang 
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {lang === "English" ? "EN" : lang === "Hindi" ? "HI" : "AS"}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-orange-400/80 font-bold italic text-right">
              {t.previewLabel}: {language}
            </p>
          </div>
        </div>

        {/* Stages Grid */}
        <div className="space-y-4">
          {t.stages.map((stage) => {
            const isExpanded = expandedId === stage.id;
            return (
              <motion.div 
                key={stage.id} 
                layout
                className="overflow-hidden"
              >
                <Card 
                  className={cn(
                    "cursor-pointer border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/40",
                    isExpanded && "border-orange-500/60 ring-1 ring-orange-500/20 bg-slate-900"
                  )}
                  onClick={() => setExpandedId(isExpanded ? null : stage.id)}
                >
                  <CardHeader className="flex flex-row items-center gap-4 p-6">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center text-3xl transition-transform",
                      isExpanded ? "bg-orange-500 scale-110 rotate-3" : "bg-slate-800"
                    )}>
                      {stage.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-0.5">
                        {t.stageLabel} {stage.id}
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-white">
                        {stage.title}
                      </CardTitle>
                    </div>
                    <div className="text-slate-500">
                      {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="px-6 pb-8 pt-0 md:pl-24 space-y-6">
                          <div className="h-px bg-slate-800 w-full" />
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h4 className="text-xs font-black uppercase tracking-widest text-orange-500 flex items-center gap-2">
                                <Info className="w-4 h-4" /> {t.explanationLabel}
                              </h4>
                              <p className="text-lg leading-relaxed text-slate-200">
                                {stage.fullExplanation}
                              </p>
                            </div>
                            
                            <div className="bg-orange-500/5 p-6 rounded-2xl border-l-2 border-orange-500/50">
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-2">
                                {t.exampleLabel}
                              </h4>
                              <p className="text-md text-slate-300 italic">
                                &ldquo;{stage.example}&rdquo;
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center py-10 border-t border-slate-800">
          <p className="text-slate-500 text-sm italic font-medium">
            {t.footer}
          </p>
        </div>
      </div>
    </div>
  );
}

