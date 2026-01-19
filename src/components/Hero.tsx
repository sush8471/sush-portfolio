"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Cpu, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-16 pb-12 sm:pb-16 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 max-w-full">
          <h1 className="leading-none text-foreground tracking-tight">
            <span className="block text-[15vw] sm:text-[11vw] md:text-[9vw] lg:text-[6.5vw] font-semibold">
              <span className="block tracking-tighter">Sushant</span>
              <span className="block tracking-tighter text-muted-foreground/80">Chaudhary</span>
            </span>
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-xl lg:text-2xl leading-relaxed text-muted-foreground tracking-tight max-w-xl">
            Tech Student & Automation Builder; exploring SaaS, AI tools, and modern web products.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <Link 
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-primary-foreground bg-primary hover:bg-primary/90 border border-primary/10 transition-all hover:scale-105"
            >
              <ArrowRight className="w-4 h-4" />
              <span>View Work</span>
            </Link>
            <Link 
              href="mailto:sushantcha00123@gmail.com"
              className="inline-flex items-center justify-center gap-2 hover:bg-muted/20 text-sm font-medium text-foreground tracking-tight bg-muted/10 border-muted/20 border rounded-full px-5 py-3 shadow-sm backdrop-blur transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span className="truncate">sushantcha00123@gmail.com</span>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 border-t border-border pt-4">
              <MapPin className="w-[18px] h-[18px] text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium tracking-tight text-foreground">Based in India</p>
                <p className="text-xs text-muted-foreground mt-0.5">Open to remote work</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-4">
              <Cpu className="w-[18px] h-[18px] text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium tracking-tight text-foreground">AI Systems + Frontend</p>
                <p className="text-xs text-muted-foreground mt-0.5">RAG, agents, benchmarks</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-4">
              <Check className="w-[18px] h-[18px] text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium tracking-tight text-foreground">Currently available</p>
                <p className="text-xs text-muted-foreground mt-0.5">Starting immediately</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 mt-8 lg:mt-0">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[500px] lg:max-h-[600px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-muted rounded-2xl lg:rounded-3xl border border-border">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20251120_015106_576-1763583802486.jpg?width=8000&height=8000&resize=contain"
              alt="Sushant Chaudhary"
              fill
              className="object-cover"
              style={{ filter: 'grayscale(100%) saturate(0.7) contrast(1.1)' }}
              priority 
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Stats Overlay */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl bg-black/20 backdrop-blur-md border border-white/10 p-2 sm:p-3 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400/80 flex-shrink-0" />
                  <div className="text-sm sm:text-lg font-semibold tracking-tight text-white leading-tight">3+ tools built</div>
                </div>
                <p className="text-[9px] sm:text-[11px] text-white/70">personal projects</p>
              </div>
              <div className="rounded-xl bg-black/20 backdrop-blur-md border border-white/10 p-2 sm:p-3 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400/80 flex-shrink-0" />
                  <div className="text-sm sm:text-lg font-semibold tracking-tight text-white leading-tight">n8n automations</div>
                </div>
                <p className="text-[9px] sm:text-[11px] text-white/70">workflow experience</p>
              </div>
              <div className="rounded-xl bg-black/20 backdrop-blur-md border border-white/10 p-2 sm:p-3 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400/80 flex-shrink-0" />
                  <div className="text-sm sm:text-lg font-semibold tracking-tight text-white leading-tight">Web + No Code</div>
                </div>
                <p className="text-[9px] sm:text-[11px] text-white/70">development stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}