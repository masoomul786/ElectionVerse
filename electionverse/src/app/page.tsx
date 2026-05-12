"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calculator, PenTool, Sparkles } from "lucide-react";

export default function Home() {
  const features = [
    { 
      id: "learn",
      emoji: "📘", 
      icon: <BookOpen className="w-8 h-8 text-orange-400" />,
      title: "Learn", 
      description: "A comprehensive, step-by-step guide to understanding the Indian election process.", 
      href: "/learn" 
    },
    { 
      id: "simulate",
      emoji: "🎮", 
      icon: <Calculator className="w-8 h-8 text-orange-400" />,
      title: "Simulate", 
      description: "Analyze candidate promises with real-world feasibility metrics and historical data.", 
      href: "/simulate" 
    },
    { 
      id: "quiz",
      emoji: "📝", 
      icon: <PenTool className="w-8 h-8 text-orange-400" />,
      title: "Quiz", 
      description: "Test your knowledge of democratic processes and become a more aware citizen.", 
      href: "/quiz" 
    },
    { 
      id: "bias",
      emoji: "🪞", 
      icon: <Sparkles className="w-8 h-8 text-orange-400" />,
      title: "Bias Mirror", 
      description: "Discover hidden cognitive biases in your voting patterns and decision making.", 
      href: "/bias-mirror" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-orange-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-sm font-semibold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            ElectionVerse 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Don&apos;t just vote.<br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Vote informed.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 font-medium"
          >
            Understand elections, analyze promises, and discover your voter bias — all in one place.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/learn">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold rounded-xl border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white backdrop-blur-sm transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/bias-mirror">
                Take the Bias Mirror
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={feature.href}>
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-orange-500/50 hover:bg-slate-900/60 transition-all duration-300 group cursor-pointer overflow-hidden relative">
                  <div className="absolute -right-4 -top-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                    {feature.emoji}
                  </div>
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      {feature.title}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative Footer Shape */}
      <div className="h-32 bg-gradient-to-t from-slate-900/50 to-transparent" />
    </div>
  );
}
