import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const CERTIFICATIONS = [
  {
    id: 4,
    title: "Oracle AI Foundations Associate",
    issuer: "Oracle",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195855-1763612946520.jpg?width=8000&height=8000&resize=contain",
    category: "Cloud AI",
    year: "2025",
    skills: ["Cloud AI", "Infrastructure", "Oracle AI services", "Machine Learning basics"]
  },
  {
    id: 3,
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_195803-1763612944882.jpg?width=8000&height=8000&resize=contain",
    category: "AI Strategy",
    year: "2024",
    skills: ["AI workflow", "Terminology", "Strategy", "Case studies"]
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
    id: 8,
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251119_200104-1763612939263.jpg?width=8000&height=8000&resize=contain",
    category: "Analytics",
    year: "2024",
    skills: ["Analytical thinking", "Problem solving", "Business communication", "Process mapping"]
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden" id="certifications">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif mb-4"
          >
            Certifications <span className="text-primary font-serif">&</span> <span className="text-primary">Credentials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Industry-recognized credentials from leading organizations in AI and analytics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative aspect-[1.41/1] rounded-[24px] overflow-hidden bg-card/30 border border-white/5 group-hover:border-white/20 transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group-hover:-translate-y-2">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="object-cover w-full h-full transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-semibold text-primary uppercase tracking-widest shadow-lg">{cert.category}</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-center text-center">
                  <p className="text-[10px] font-bold text-primary mb-1 tracking-widest uppercase">{cert.issuer}</p>
                  <h3 className="text-lg font-bold text-white leading-tight font-serif">{cert.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-3xl bg-[#0A0A0A] border-white/10 rounded-[32px] p-0 overflow-hidden shadow-2xl">
          <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto scrollbar-hide">
            {selectedCert && (
              <>
                <div className="relative aspect-[16/10] w-full">
                  <img src={selectedCert.image} alt={selectedCert.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
                <div className="p-8 sm:p-10 -mt-20 relative z-10">
                  <DialogHeader className="mb-6 items-start text-left space-y-0">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-4">{selectedCert.category}</span>
                    <DialogTitle className="text-3xl sm:text-4xl font-bold text-white font-serif leading-tight">{selectedCert.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-lg text-muted-foreground mb-8">
                    Issued by <span className="text-primary font-semibold">{selectedCert.issuer}</span>
                  </p>
                  <div className="space-y-6 mb-10">
                    <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Skills Gained</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills?.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 text-muted-foreground border-white/5 px-4 py-1.5 rounded-full text-xs lowercase border">{skill}</Badge>
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
