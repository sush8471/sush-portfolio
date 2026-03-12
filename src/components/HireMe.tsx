import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HireMe() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight"
          >
            Ready to bring your <br className="hidden sm:block" /> <span className="opacity-80">vision to life?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-2xl px-4"
          >
            I'm currently available for freelance projects and open to new opportunities. Let's build something extraordinary together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.4 }} 
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-black text-white hover:bg-zinc-800 rounded-full text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 shadow-2xl hover:shadow-black/20 transition-all hover:scale-105"
            >
              <a href="mailto:sushantcha00123@gmail.com">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Send Email
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="bg-transparent border-black/30 text-black hover:bg-black/10 rounded-full text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 transition-all hover:scale-105"
            >
              <a href="https://cal.com/sushant-chaudhary" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book a Call
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm opacity-70 pt-4"
          >
            sushantcha00123@gmail.com
          </motion.p>
        </div>
      </div>
    </section>
  );
}
