"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "ResumeDEX",
    description:
      "AI-powered resume optimization tool. Optimize your resume for ATS systems in seconds and 10x your interview chances.",
    image: "/projects/resumedex.png",
    live: "https://resumedex.vercel.app",
    github: "https://github.com/sush8471/ResumeDEX",
    tag: "New",
  },
  {
    title: "ReplyDEX",
    description:
      "Professional AI engine for review management. Automate customer interactions with context-aware, personalized responses.",
    image: "/projects/replydex.png",
    live: "https://replydex.vercel.app",
    github: "https://github.com/sush8471/flydex-reviews",
    tag: null,
  },
  {
    title: "Flydexify",
    description: "Image-to-song recommendation tool for social media content.",
    image: "/projects/flydexify.png",
    live: "https://flydexify.vercel.app",
    github: "https://github.com/sush8471/flydexify",
    tag: null,
  },
  {
    title: "FlydexGPT",
    description: "Lightweight ChatGPT-style web chatbot with a clean UI.",
    image: "/projects/flydexgpt.png",
    live: "https://flydexgpt.vercel.app",
    github: "https://github.com/sush8471/flydexgpt",
    tag: null,
  },
  {
    title: "Flydex Calories",
    description: "Food image → instant calorie and nutrient breakdown.",
    image: "/projects/calories.png",
    live: "https://flydex-nutrients-analyzer.vercel.app",
    github: "https://github.com/sush8471/flydex-nutrients-analyzer",
    tag: null,
  },
  {
    title: "Flydon Automations",
    description: "Unified dashboard for managing all tools.",
    image: "/projects/flydon.png",
    live: "https://flydon-dashboard.vercel.app",
    github: "https://github.com/sush8471/flydon-dashboard",
    tag: null,
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      id="projects"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none" />

      <div className="container px-5 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-serif tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            A collection of tools I've built while exploring automations, web
            apps, and lightweight AI utilities.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="md:hidden -mx-5 sm:-mx-6">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 sm:px-6 pb-2 scrollbar-hide">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-center flex-shrink-0 w-[75vw] sm:w-[65vw]"
              >
                <Card className="group relative overflow-hidden bg-card/30 border-white/5 rounded-[20px] hover:bg-card/50 hover:border-white/10 transition-all duration-500 shadow-2xl hover:shadow-primary/5 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="75vw"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Tag */}
                    {project.tag && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-semibold rounded-full uppercase tracking-wider">
                          {project.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-lg font-bold text-white font-serif tracking-wide group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <div className="flex gap-1.5 flex-shrink-0">
                        <Link
                          href={project.github}
                          target="_blank"
                          className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-card/30 border-white/5 rounded-[24px] hover:bg-card/50 hover:border-white/10 transition-all duration-500 shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Tag */}
                  {project.tag && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-semibold rounded-full uppercase tracking-wider">
                        {project.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <h3 className="text-lg lg:text-xl font-bold text-white font-serif tracking-wide group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex gap-2 flex-shrink-0">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
