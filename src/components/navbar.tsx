"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Vote, BookOpen, PlayCircle, GraduationCap, Brain } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", icon: Vote },
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "Simulate", href: "/simulate", icon: PlayCircle },
  { name: "Quiz", href: "/quiz", icon: GraduationCap },
  { name: "Bias-Mirror", href: "/bias-mirror", icon: Brain },
];

export function Navbar() {
  const pathname = usePathname();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 bg-[#ff9933] text-black px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl z-[60]"
          >
            🙌 Thank you for joining the movement!
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-primary p-1.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Vote className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground">
            ELECTION<span className="text-primary">VERSE</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-widest transition-all rounded-full",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <Icon className="h-3.5 w-3.5" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            size="sm" 
            className="hidden sm:flex bg-primary text-primary-foreground font-black px-6 rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all text-[10px] uppercase tracking-widest"
            onClick={() => setShowToast(true)}
          >
            Join the Movement
          </Button>
          {/* Mobile Menu Trigger (Placeholder) */}
          <Button variant="ghost" size="icon" className="md:hidden rounded-full">
            <PlayCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
