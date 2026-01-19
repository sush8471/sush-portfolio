"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "N8N Automation Course",
    issuer: "LetsUpgrade",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195648-1763612946008.jpg?width=8000&height=8000&resize=contain",
    category: "Automation",
    year: "2024",
    skills: ["n8n workflow automation", "API integrations", "Webhook handling", "Process automation"]
  },
  {
    id: 2,
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195729-1763612937651.jpg?width=8000&height=8000&resize=contain",
    category: "AI Essentials",
    year: "2024",
    skills: ["AI fundamentals", "Prompt engineering", "LLM usage", "Ethical AI"]
  },
  {
    id: 3,
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195803-1763612944882.jpg?width=8000&height=8000&resize=contain",
    category: "AI Essentials",
    year: "2024",
    skills: ["AI workflow", "Terminology", "Strategy", "Case studies"]
  },
  {
    id: 4,
    title: "Oracle AI Foundations Associate",
    issuer: "Oracle",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195855-1763612946520.jpg?width=8000&height=8000&resize=contain",
    category: "AI Essentials",
    year: "2025",
    skills: ["Cloud AI", "Infrastructure", "Oracle AI services", "Machine Learning basics"]
  },
  {
    id: 5,
    title: "Prompt Engineering Bootcamp",
    issuer: "LetsUpgrade",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195916-1763612946526.jpg?width=8000&height=8000&resize=contain",
    category: "AI Essentials",
    year: "2024",
    skills: ["Advanced prompting", "Iterative refinement", "Persona development", "System prompts"]
  },
  {
    id: 6,
    title: "HTML & CSS Bootcamp",
    issuer: "LetsUpgrade",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195943-1763612946335.jpg?width=8000&height=8000&resize=contain",
    category: "Programming",
    year: "2024",
    skills: ["Semantic HTML", "Modern CSS", "Responsive design", "Layout architecture"]
  },
  {
    id: 7,
    title: "Introduction to Data Science",
    issuer: "Cisco",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_200042-1763612941079.jpg?width=8000&height=8000&resize=contain",
    category: "Tools / Platforms",
    year: "2024",
    skills: ["Data analysis", "Statistical basics", "Cisco platform", "Data visualization"]
  },
  {
    id: 8,
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_200104-1763612939263.jpg?width=8000&height=8000&resize=contain",
    category: "Soft Skills",
    year: "2024",
    skills: ["Analytical thinking", "Problem solving", "Business communication", "Process mapping"]
  },
  {
    id: 9,
    title: "Cultural Intelligence",
    issuer: "Employability.life",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195831-1763612942383.jpg?width=8000&height=8000&resize=contain",
    category: "Soft Skills",
    year: "2024",
    skills: ["Global communication", "Empathy", "Collaboration", "Cultural awareness"]
  },
];

const CATEGORIES = ["All", "Programming", "Automation", "Tools / Platforms", "AI Essentials", "Soft Skills"];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredCerts = activeFilter === "All" 
    ? CERTIFICATIONS 
    : CERTIFICATIONS.filter(c => c.category === activeFilter);

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden" id="certifications">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif mb-4"
          >
            Certifications <span className="text-primary font-serif">&</span> <span className="text-primary">Achievements</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Courses and skills I've picked up while learning and growing as a builder.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border",
                activeFilter === cat 
                  ? "text-black border-primary bg-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "text-muted-foreground border-white/5 hover:border-white/20 hover:text-white bg-white/5"
              )}
            >
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 sm:gap-6 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="min-w-[75vw] sm:min-w-[35vw] lg:min-w-[25vw] snap-center cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative aspect-[1.41/1] rounded-[24px] overflow-hidden bg-card/30 border border-white/5 group-hover:border-white/20 transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group-hover:-translate-y-2">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-semibold text-primary uppercase tracking-widest shadow-lg">
                      {cert.category}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col items-center text-center">
                    <p className="text-[10px] sm:text-xs font-bold text-primary mb-2 tracking-widest uppercase">
                      {cert.issuer}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-serif">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Scroll Progress Bar (Visual Hint) */}
        <div className="flex justify-center gap-1 mt-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={cn("h-1 w-2 rounded-full", i === 0 ? "bg-primary w-6" : "bg-white/10")} />
          ))}
        </div>
      </div>

      {/* Certification Detail Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-3xl bg-[#0A0A0A] border-white/10 rounded-[32px] p-0 overflow-hidden shadow-2xl">
          <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto scrollbar-hide">
            {selectedCert && (
              <>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
                <div className="p-8 sm:p-10 -mt-20 relative z-10">
                  <DialogHeader className="mb-6 items-start text-left space-y-0">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                      {selectedCert.category}
                    </span>
                    <DialogTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight">
                      {selectedCert.title}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-lg text-muted-foreground mb-8">
                    Issued by <span className="text-primary font-semibold">{selectedCert.issuer}</span>
                  </p>

                  <div className="space-y-6 mb-10">
                    <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Skills Gained</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills?.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/5 hover:bg-white/10 text-muted-foreground border-white/5 px-4 py-1.5 rounded-full text-xs lowercase border"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 flex justify-between items-center text-xs text-muted-foreground">
                    <span>Completed in <span className="text-white font-medium">{selectedCert.year}</span></span>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}