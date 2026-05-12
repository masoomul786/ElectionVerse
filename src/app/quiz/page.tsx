"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Share2, 
  Trophy,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

// Hardcoded quiz questions as requested
const quizQuestions = [
  {
    question: "What is the minimum age to vote in India?",
    options: ["16", "18", "21", "25"],
    correctIndex: 1,
    explanation: "The Constitution of India sets 18 as the minimum voting age since the 61st Amendment in 1989."
  },
  {
    question: "What does NOTA stand for?",
    options: ["None Of The Above", "National Option To Abstain", "No Other Than Approved", "National Voter Option"],
    correctIndex: 0,
    explanation: "NOTA lets you reject all candidates on the ballot. Think of it like rejecting every dish on a restaurant menu."
  },
  {
    question: "What is an EVM?",
    options: ["Electronic Voter Machine", "Electronic Voting Machine", "Election Verification Method", "Electoral Vote Marker"],
    correctIndex: 1,
    explanation: "EVM stands for Electronic Voting Machine, used since 1999 to record votes electronically."
  },
  {
    question: "Who conducts elections in India?",
    options: ["President of India", "Supreme Court", "Election Commission of India", "Parliament"],
    correctIndex: 2,
    explanation: "The Election Commission of India is an independent constitutional body that conducts all elections."
  },
  {
    question: "What is a Model Code of Conduct?",
    options: ["A rule book for voters", "Guidelines candidates and parties must follow during elections", "A law passed by Parliament", "Rules for counting votes"],
    correctIndex: 1,
    explanation: "The MCC kicks in when elections are announced and restricts what parties and candidates can promise or do."
  },
  {
    question: "How long is a Lok Sabha term?",
    options: ["3 years", "4 years", "5 years", "6 years"],
    correctIndex: 2,
    explanation: "Lok Sabha members serve a 5-year term unless the house is dissolved earlier."
  },
  {
    question: "What is a constituency?",
    options: ["A political party headquarters", "A geographic area that elects one representative", "The office of the Election Commission", "A type of ballot paper"],
    correctIndex: 1,
    explanation: "India is divided into constituencies. Voters in each constituency elect one MP or MLA."
  },
  {
    question: "What ink is used on voters fingers?",
    options: ["Blue ink", "Black ink", "Indelible ink", "Invisible ink"],
    correctIndex: 2,
    explanation: "Indelible ink that cannot be washed off is applied to prevent people from voting twice."
  }
];

export default function QuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    if (optionIndex === quizQuestions[currentIdx].correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  const shareScore = () => {
    const text = `I scored ${score}/8 on the ElectionVerse Democracy Quiz! Can you beat my score?`;
    navigator.clipboard.writeText(text);
    alert("Score copied to clipboard!");
  };

  if (isFinished) {
    const getResultTitle = () => {
      if (score >= 7) return "Informed Voter";
      if (score >= 4) return "Learning Voter";
      return "Needs More Practice";
    };

    return (
      <div className="min-h-screen bg-[#020617] py-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <Card className="bg-slate-900/40 border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl text-center rounded-[3rem]">
              <div className="h-2 bg-orange-500 w-full" />
              <CardHeader className="pt-16">
                <div className="w-20 h-20 rounded-3xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-orange-500" />
                </div>
                <CardTitle className="text-5xl font-black mb-2 text-white tracking-tight">
                  {getResultTitle()}
                </CardTitle>
                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">Final Score Summary</p>
              </CardHeader>
              <CardContent className="px-10 pb-16 space-y-10">
                <div className="flex gap-4 justify-center">
                  <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Score</p>
                    <p className="text-4xl font-black text-white">{score} / 8</p>
                  </div>
                  <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Accuracy</p>
                    <p className="text-4xl font-black text-white">{Math.round((score / 8) * 100)}%</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={restartQuiz} variant="outline" size="lg" className="flex-1 h-16 rounded-2xl border-slate-700 text-white font-bold">
                    <RotateCcw className="mr-2 h-4 w-4" /> Try Again
                  </Button>
                  <Button onClick={shareScore} size="lg" className="flex-1 h-16 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold">
                    <Share2 className="mr-2 h-4 w-4" /> Share Score
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex justify-between items-end">
          <div className="space-y-4">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-3 py-1 rounded-full uppercase tracking-widest font-bold text-xs">
              Question {currentIdx + 1} of 8
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">Democracy <span className="text-orange-500">Quiz</span></h1>
          </div>
          <div className="hidden md:block bg-slate-900 px-6 py-3 rounded-2xl border border-slate-800 text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Current Score</p>
            <p className="text-2xl font-black text-orange-500">{score}</p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-slate-900/40 border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl rounded-[2.5rem]">
              <CardHeader className="bg-slate-900/60 p-8 md:p-12 border-b border-slate-800">
                <CardTitle className="text-2xl md:text-3xl font-bold leading-tight text-white">
                  {quizQuestions[currentIdx].question}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="grid grid-cols-1 gap-3">
                  {quizQuestions[currentIdx].options.map((option, i) => {
                    const isSelected = selectedOption === i;
                    const isCorrect = isAnswered && i === quizQuestions[currentIdx].correctIndex;
                    const isWrong = isAnswered && isSelected && i !== quizQuestions[currentIdx].correctIndex;

                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        disabled={isAnswered}
                        className={cn(
                          "flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left font-bold",
                          !isAnswered && "hover:border-orange-500/50 hover:bg-orange-500/5 border-slate-800 bg-slate-950 text-slate-300",
                          isCorrect && "border-green-500 bg-green-500/10 text-green-400",
                          isWrong && "border-red-500 bg-red-500/10 text-red-400",
                          isAnswered && !isCorrect && !isWrong && "opacity-40 border-slate-800"
                        )}
                      >
                        <span>{option}</span>
                        {isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                        {isWrong && <XCircle className="h-5 w-5 text-red-500" />}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-6 pt-4"
                    >
                      <div className="bg-orange-500/5 p-6 rounded-2xl border-l-4 border-orange-500">
                        <div className="flex items-center gap-2 text-orange-500 mb-2">
                          <Lightbulb className="h-4 w-4" />
                          <h4 className="font-black text-[10px] uppercase tracking-widest">Did you know?</h4>
                        </div>
                        <p className="text-slate-300 text-md leading-relaxed">
                          {quizQuestions[currentIdx].explanation}
                        </p>
                      </div>

                      <Button onClick={nextQuestion} size="lg" className="w-full h-14 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all">
                        {currentIdx < quizQuestions.length - 1 ? "Next Question" : "See Final Score"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
