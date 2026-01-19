"use client";

import { motion } from "framer-motion";
import {
  Cursor,
  Lovable,
  V0,
  Trae,
  N8n,
  Github,
  OpenAI,
} from "@lobehub/icons";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/marquee";

export default function Skills() {
  const iconSize = 56;

  // Official Toolkit (Marquee Display)
  const officialToolkit = [
    { Icon: Cursor, name: "Cursor" },
    { Icon: Lovable, name: "Lovable" },
    { Icon: V0, name: "v0" },
    { Icon: Trae, name: "Trae" },
    { Icon: N8n, name: "n8n" },
    { Icon: Github, name: "GitHub" },
    { Icon: OpenAI, name: "ChatGPT" },
  ];

  // Programming Languages (Grid Display)
  const programmingLanguages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
      alt: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden" id="skills">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-4 text-foreground">
            Skills <span className="text-muted-foreground font-light">&</span> Tools
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            A curated stack of premium AI tools and core technologies.
          </p>
        </motion.div>

        {/* Official Toolkit - Marquee Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-10 opacity-80">
            <div className="h-[1px] w-16 bg-primary/30"></div>
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Official Toolkit
            </span>
            <div className="h-[1px] w-16 bg-primary/30"></div>
          </div>

          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeContent speed={30} pauseOnHover>
              {officialToolkit.map(({ Icon, name }) => (
                <MarqueeItem key={name} className="mx-8">
                  <div className="flex flex-col items-center gap-3 group">
                    <Icon.Avatar
                      size={iconSize}
                      className="w-14 h-14 sm:w-16 sm:h-16 hover:scale-110 transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    />
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {name}
                    </span>
                  </div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
            <MarqueeFade side="right" />
          </Marquee>
        </motion.div>

        {/* Programming Languages - Grid Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-10 opacity-80">
            <div className="h-[1px] w-16 bg-primary/30"></div>
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Programming Languages
            </span>
            <div className="h-[1px] w-16 bg-primary/30"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center max-w-2xl mx-auto">
            {programmingLanguages.map(({ src, alt }) => (
              <div
                key={alt}
                className="flex flex-col items-center gap-3 group"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-14 h-14 sm:w-16 sm:h-16 hover:scale-110 transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {alt}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}