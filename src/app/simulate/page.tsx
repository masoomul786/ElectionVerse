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
import { Input } from "@/components/ui/input";
import { 
  Info, 
  X, 
  ThumbsUp, 
  Search,
  Zap,
  TrendingUp,
  UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

// Hardcoded data as requested
const candidates = [
  {
    id: "cand-a",
    name: "Ramesh Kumar",
    promises: [
      {
        text: "Free Wi-Fi in all government schools",
        feasibility: 65,
        reason: "requires telecom infrastructure investment",
        meaningsForYou: "Students in government schools will have equal access to digital learning tools and global information."
      },
      {
        text: "2 new district hospitals",
        feasibility: 72,
        reason: "budget dependent but achievable in one term",
        meaningsForYou: "Better healthcare access for the community, reducing the burden on existing city hospitals."
      },
      {
        text: "500 km of roads in 18 months",
        feasibility: 45,
        reason: "timeline is too aggressive for this scale",
        meaningsForYou: "Improved connectivity between rural and urban areas, though the rapid pace might compromise quality."
      }
    ]
  },
  {
    id: "cand-b",
    name: "Sunita Devi",
    promises: [
      {
        text: "Farmer loan waiver for landholdings under 5 acres",
        feasibility: 58,
        reason: "state budget can support partial waiver",
        meaningsForYou: "Financial relief for small-scale farmers, helping them break the cycle of high-interest debt."
      },
      {
        text: "24-hour electricity to all villages",
        feasibility: 70,
        reason: "grid infrastructure mostly exists",
        meaningsForYou: "Uninterrupted power for households and small rural businesses, boosting local productivity."
      },
      {
        text: "10,000 government jobs in 2 years",
        feasibility: 52,
        reason: "recruitment cycles typically take 3 to 5 years",
        meaningsForYou: "Increased employment opportunities in the public sector, though timelines may be optimistic."
      }
    ]
  },
  {
    id: "cand-c",
    name: "Arjun Das",
    promises: [
      {
        text: "Clean river Brahmaputra initiative",
        feasibility: 60,
        reason: "depends on central government cooperation",
        meaningsForYou: "Restoration of the river's ecosystem and cleaner water for millions of people depending on it."
      },
      {
        text: "Women safety helpline active in 2 hours",
        feasibility: 80,
        reason: "technology and staffing are feasible",
        meaningsForYou: "A rapid-response system to ensure the safety and security of women in public and private spaces."
      },
      {
        text: "Free bus passes for students",
        feasibility: 75,
        reason: "state transport budget can absorb this cost",
        meaningsForYou: "Reduced cost of education commute, making higher education more accessible to students from far-off areas."
      }
    ]
  }
];

export default function SimulatePage() {
  const [selectedPromise, setSelectedPromise] = useState<any>(null);
  
  // Track support counts per promise
  const [supportCounts, setSupportCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    candidates.forEach(c => {
      c.promises.forEach((p, i) => {
        counts[`${c.id}-${i}`] = Math.floor(Math.random() * 61) + 20;
      });
    });
    return counts;
  });

  const [supportInput, setSupportInput] = useState<Record<string, string>>({});

  const handleSupport = (candidateId: string, promiseIndex: number) => {
    const key = `${candidateId}-${promiseIndex}`;
    setSupportCounts(prev => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
    setSupportInput(prev => ({ ...prev, [candidateId]: "" }));
  };

  const getFeasibilityColor = (score: number) => {
    if (score < 40) return "bg-red-500";
    if (score < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getFeasibilityText = (score: number) => {
    if (score < 40) return "text-red-500";
    if (score < 70) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white py-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Promise Simulator
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            Simulate <span className="text-orange-500">The Future</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl">
            Analyze candidate promises, check their feasibility, and see how they impact your life.
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {candidates.map((candidate) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-orange-500/30 transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden flex flex-col">
                <CardHeader className="bg-slate-900/60 p-8 border-b border-slate-800 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 opacity-10">
                    <UserCheck className="w-24 h-24 text-orange-500" />
                  </div>
                  <CardTitle className="text-3xl font-black text-white relative z-10">
                    {candidate.name}
                  </CardTitle>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-2">
                    Official Candidate
                  </p>
                </CardHeader>
                
                <CardContent className="p-8 flex-1 flex flex-col space-y-8">
                  <div className="space-y-4 flex-1">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Key Promises</h4>
                    {candidate.promises.map((promise, idx) => {
                      const promiseId = `${candidate.id}-${idx}`;
                      return (
                        <div key={idx} className="group p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all">
                          <p className="text-md font-bold text-slate-200 mb-4 leading-snug">
                            {promise.text}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                              <ThumbsUp className="w-3 h-3 text-orange-500" />
                              {supportCounts[promiseId]} Supporters
                            </div>
                            <Button 
                              variant="link" 
                              className="text-orange-500 hover:text-orange-400 p-0 h-auto text-[10px] font-black uppercase tracking-widest"
                              onClick={() => setSelectedPromise({ ...promise, candidateName: candidate.name, id: promiseId })}
                            >
                              View Analysis <Search className="ml-1 w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Support Section */}
                  <div className="pt-8 border-t border-slate-800 space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-2">
                      <Zap className="w-3 h-3" /> Support This Candidate
                    </h4>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Why do you support them?" 
                        className="bg-slate-950 border-slate-800 focus:ring-1 focus:ring-orange-500/50 h-12 rounded-xl text-sm"
                        value={supportInput[candidate.id] || ""}
                        onChange={(e) => setSupportInput(prev => ({ ...prev, [candidate.id]: e.target.value }))}
                      />
                      <Button 
                        className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-[10px] transition-transform hover:scale-[1.02] active:scale-95"
                        onClick={() => handleSupport(candidate.id, 0)} // Supports first promise by default in this UI
                      >
                        Support {candidate.name.split(" ")[0]}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Analysis Panel */}
        <AnimatePresence>
          {selectedPromise && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPromise(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
              
              {/* Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-[#0a192f] border-l border-slate-800 z-[60] shadow-2xl p-10 overflow-y-auto flex flex-col"
              >
                <div className="flex justify-between items-center mb-12">
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Expert Analysis</Badge>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedPromise(null)} className="rounded-full hover:bg-slate-800">
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="space-y-12">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black tracking-tight leading-tight">
                      {selectedPromise.text}
                    </h2>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      Candidate: {selectedPromise.candidateName}
                    </div>
                  </div>

                  {/* Feasibility Score */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Feasibility Rating</span>
                      <span className={cn("text-5xl font-black", getFeasibilityText(selectedPromise.feasibility))}>
                        {selectedPromise.feasibility}%
                      </span>
                    </div>
                    <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden p-1 border border-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedPromise.feasibility}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={cn("h-full rounded-full", getFeasibilityColor(selectedPromise.feasibility))}
                      />
                    </div>
                    <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/50">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                        <Info className="w-3 h-3" /> Technical Reason
                      </h4>
                      <p className="text-lg text-slate-300 font-medium italic">
                        &ldquo;{selectedPromise.reason}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Meaning Section */}
                  <div className="space-y-6 pt-10 border-t border-slate-800">
                    <h3 className="text-2xl font-black tracking-tight">What This Means For You</h3>
                    <div className="p-8 rounded-3xl bg-orange-500/5 border border-orange-500/20">
                      <p className="text-xl text-slate-200 leading-relaxed">
                        {selectedPromise.meaningsForYou}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-10 flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                        <ThumbsUp className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-black leading-none">{supportCounts[selectedPromise.id]}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Total Support</p>
                      </div>
                    </div>
                    <Button 
                      className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-orange-500/20"
                      onClick={() => {
                        const [cId, pIdx] = selectedPromise.id.split("-");
                        handleSupport(cId, parseInt(pIdx));
                      }}
                    >
                      Support This Promise
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
