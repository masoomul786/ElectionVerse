"use client";

import { useState, useEffect } from "react";
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
  RotateCcw, 
  Check, 
  X, 
  Loader2, 
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { analyzeVoterBias } from "./actions";

// Hardcoded bias cards as requested
const biasCards = [
  { promise: "Free Wi-Fi in all government schools", category: "infrastructure" },
  { promise: "Loan waiver for farmers under 5 acres", category: "social" },
  { promise: "500 km of new roads in 18 months", category: "infrastructure" },
  { promise: "Free bus passes for women students", category: "social" },
  { promise: "24-hour electricity to all villages", category: "infrastructure" },
  { promise: "New hospital in every district headquarters", category: "social" }
];

export default function BiasMirrorPage() {
  const [viewState, setViewState] = useState<"quiz" | "loading" | "result">("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<{ promise: string, accepted: boolean }[]>([]);
  const [aiResult, setAiResult] = useState<{ name: string, description: string, tips: string[] } | null>(null);

  const handleDecision = (accepted: boolean) => {
    const newResponses = [...responses, { promise: biasCards[currentIndex].promise, accepted }];
    setResponses(newResponses);

    if (currentIndex < biasCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setViewState("loading");
      // Trigger AI Analysis
      analyzeVoterBias(newResponses).then((result) => {
        setAiResult(result);
        setViewState("result");
      });
    }
  };

  // No longer needed as we trigger viewState change inside handleDecision's promise

  const reset = () => {
    setViewState("quiz");
    setCurrentIndex(0);
    setResponses([]);
    setAiResult(null);
  };

  // getResult is now replaced by AI analysis from Server Action

  // Loading State View
  if (viewState === "loading") {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center space-y-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Loader2 className="h-16 w-16 text-orange-500" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-black text-orange-500 uppercase tracking-widest"
        >
          Analyzing your voter profile...
        </motion.p>
      </div>
    );
  }

  // Result State View
  if (viewState === "result" && aiResult) {
    return (
      <div className="min-h-screen bg-[#020617] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4 mb-12">
              <Sparkles className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white">Your Bias Mirror</h1>
            </div>

            <Card className="bg-slate-900/40 border-orange-500/30 shadow-2xl overflow-hidden backdrop-blur-xl rounded-[2.5rem]">
              <div className="h-2 bg-orange-500 w-full" />
              <CardHeader className="text-center pt-16 pb-12">
                <Badge className="bg-orange-500 text-white px-4 py-1.5 rounded-full font-black uppercase text-[10px] tracking-widest mx-auto mb-6">AI Profile Reveal</Badge>
                <CardTitle className="text-5xl font-black text-orange-500 tracking-tight">{aiResult.name}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-16 space-y-12">
                <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 text-center">
                  <p className="text-xl leading-relaxed font-medium text-slate-200">
                    {aiResult.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                    <ShieldCheck className="h-6 w-6 text-orange-500" />
                    3 Tips for Conscious Voting
                  </h3>
                  <div className="space-y-4">
                    {aiResult.tips.map((tip, i) => (
                      <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
                        <span className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 font-black text-xs shrink-0">
                          {i + 1}
                        </span>
                        <p className="text-slate-400 font-medium">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={reset} 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-16 rounded-full border-slate-700 hover:bg-slate-800 text-white font-black uppercase tracking-widest text-[10px]"
                >
                  <RotateCcw className="mr-3 h-4 w-4" /> Retake Assessment
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // Quiz State View (Default)
  return (
    <div className="min-h-screen bg-[#020617] py-20 px-6 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            Card {currentIndex + 1} of 6
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            The Bias <span className="text-orange-500">Mirror</span>
          </h1>
          <div className="h-1.5 w-32 bg-slate-800 mx-auto rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-orange-500"
              animate={{ width: `${((currentIndex + 1) / 6) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-[450px] flex flex-col items-center justify-center p-12 text-center bg-slate-900/60 border-slate-800 shadow-2xl rounded-[3.5rem] relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
              <div className="mb-10 w-20 h-20 rounded-3xl bg-orange-500/5 flex items-center justify-center">
                <Zap className="h-10 w-10 text-orange-500/30" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                &ldquo;{biasCards[currentIndex].promise}&rdquo;
              </h2>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-2 gap-6 mt-12 w-full">
          <Button 
            size="lg"
            className="h-20 rounded-[2rem] bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-emerald-900/20 group"
            onClick={() => handleDecision(true)}
          >
            <Check className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" /> Sounds Good
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="h-20 rounded-[2rem] border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white font-black uppercase tracking-widest text-[10px] group transition-all"
            onClick={() => handleDecision(false)}
          >
            <X className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" /> Seems Unlikely
          </Button>
        </div>
      </div>
    </div>
  );
}
