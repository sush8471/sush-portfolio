"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Project Manager",
    quote: "PeakPath delivered outstanding results with great professionalism and timely execution. Their guides' dedication and safety-first approach made our company offsite a complete success from start to finish.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    detail: "Route: Vernal Fall • Group of 10"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Lead",
    quote: "The attention to detail in the AI integration was phenomenal. We saw a 40% increase in user engagement within the first month of launch.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    detail: "Project: AI Dashboard • Duration: 3 months"
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Creative Director",
    quote: "A masterclass in modern web development. The cinematic feel of the portfolio perfectly captured our brand's essence while maintaining incredible performance.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    detail: "Service: Web Design • Year: 2024"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden" id="testimonials">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
             <span className="px-2.5 sm:px-3 py-1 rounded-full border border-border text-[10px] sm:text-xs text-muted-foreground bg-secondary/50">
                ● Testimonials
             </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
             <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4 sm:mb-6">
                    What clients are saying
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                    Stories from teams and founders who trusted me with their most critical technical challenges.
                </p>
             </div>
             
             <div className="flex items-end gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm font-mono text-muted-foreground mb-2">
                    0{current + 1} <span className="text-muted-foreground/40">/ 0{testimonials.length}</span>
                </span>
                <div className="flex gap-2">
                    <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={prev}
                        className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:bg-primary hover:text-primary-foreground"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={next}
                        className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:bg-primary hover:text-primary-foreground"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
             </div>
        </div>

        <div className="relative bg-card/30 rounded-2xl sm:rounded-3xl p-2 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8"
                >
                    <div className="relative aspect-[4/3] max-h-[300px] sm:max-h-[400px] lg:max-h-none lg:aspect-square rounded-2xl overflow-hidden">
                        <Image
                            src={testimonials[current].image}
                            alt={testimonials[current].name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    
                    <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
                        <div className="mb-6 sm:mb-8">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 sm:mb-6">
                                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <span className="text-xs sm:text-sm text-primary font-medium block mb-2">
                                {testimonials[current].role}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-serif">
                                {testimonials[current].name}
                            </h3>
                            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed italic">
                                "{testimonials[current].quote}"
                            </p>
                        </div>
                        
                        <div className="mt-auto pt-4 sm:pt-6 border-t border-border">
                             <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 text-xs text-muted-foreground border border-border/50">
                                ● {testimonials[current].detail}
                             </span>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}