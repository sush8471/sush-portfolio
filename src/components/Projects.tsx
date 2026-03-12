import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight, Zap, Target, Brain, BarChart3, LayoutDashboard } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: "resumedex",
    title: "ResumeDEX",
    description: "Job seekers waste hours tweaking resumes for each role. ResumeDEX analyzes job descriptions and optimizes your resume for ATS systems in seconds — turning rejections into interviews.",
    image: "/projects/resumedex.png",
    live: "https://resumedex.vercel.app",
    github: "https://github.com/sush8471/ResumeDEX",
    tag: "New",
    feature: "ATS Scoring Engine",
    tech: "OpenAI + Keyword Analysis",
    icon: Target,
  },
  {
    id: "replydex",
    title: "ReplyDEX",
    description: "Business owners lose customers to negative reviews they never respond to. ReplyDEX auto-generates context-aware, personalized responses — turning frustrated customers into loyal advocates.",
    image: "/projects/replydex.png",
    live: "https://replydex.vercel.app",
    github: "https://github.com/sush8471/flydex-reviews",
    tag: "New",
    feature: "Multi-Platform API",
    tech: "Google Reviews Integration",
    icon: Zap,
  },
  {
    id: "flydexify",
    title: "Flydexify",
    description: "Content creators spend hours searching for the perfect song. Flydexify reads your image's mood and suggests the ideal track — eliminating creative block and speeding up production.",
    image: "/projects/flydexify.png",
    live: "https://flydexify.vercel.app",
    github: "https://github.com/sush8471/flydexify",
    tag: null,
    feature: "AI Image Analysis",
    tech: "Computer Vision + Spotify API",
    icon: Brain,
  },
  {
    id: "flydexgpt",
    title: "FlydexGPT",
    description: "Most AI chatbots are bloated and slow. I built a lightweight, blazing-fast ChatGPT alternative with zero fluff — for people who just want answers without the wait.",
    image: "/projects/flydexgpt.png",
    live: "https://flydexgpt.vercel.app",
    github: "https://github.com/sush8471/flydexgpt",
    tag: null,
    feature: "Streaming Responses",
    tech: "Sub-2s Response Time",
    icon: Target,
  },
  {
    id: "flydex-calories",
    title: "Flydex Calories",
    description: "Tracking calories is tedious and inaccurate. Snap a photo of your meal and get instant calorie + macro breakdowns — making nutrition tracking effortless for busy people.",
    image: "/projects/calories.png",
    live: "https://flydex-nutrients-analyzer.vercel.app",
    github: "https://github.com/sush8471/flydex-nutrients-analyzer",
    tag: null,
    feature: "Visual Recognition",
    tech: "Food Detection AI",
    icon: BarChart3,
  },
  {
    id: "flydon",
    title: "Flydon Dashboard",
    description: "Managing multiple tools creates chaos. Flydon unifies all Flydex products into one clean command center — giving users a single source of truth for their productivity stack.",
    image: "/projects/flydon.png",
    live: "https://flydon-dashboard.vercel.app",
    github: "https://github.com/sush8471/flydon-dashboard",
    tag: null,
    feature: "Unified Control Center",
    tech: "Centralized API Management",
    icon: LayoutDashboard,
  },
];

export default function Projects() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden" id="projects">
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
            Real problems, real solutions. Each tool was built to eliminate a specific pain point I noticed in the wild.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
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
                  <div className="relative aspect-[16/10] overflow-hidden w-full">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    {project.tag && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-semibold rounded-full uppercase tracking-wider">{project.tag}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-lg font-bold text-white font-serif tracking-wide group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                      <div className="flex gap-1.5 flex-shrink-0">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300" aria-label={`View ${project.title} source code`}>
                          <Github className="w-3.5 h-3.5" />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300" aria-label={`Visit ${project.title} live site`}>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">{project.description}</p>
                    <div className="mt-auto space-y-3">
                      <Link 
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        View Case Study
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <div className="flex items-center gap-2 text-[10px] sm:text-xs pt-2 border-t border-white/5">
                        <project.icon className="w-3 h-3 text-primary" />
                        <span className="text-foreground font-medium">{project.feature}</span>
                        <span className="text-muted-foreground">• {project.tech}</span>
                      </div>
                    </div>
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
                <div className="relative aspect-[16/10] overflow-hidden w-full">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  {project.tag && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-semibold rounded-full uppercase tracking-wider">{project.tag}</span>
                    </div>
                  )}
                </div>
                <div className="p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <h3 className="text-lg lg:text-xl font-bold text-white font-serif tracking-wide group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300" aria-label={`View ${project.title} source code`}>
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300" aria-label={`Visit ${project.title} live site`}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="mt-auto space-y-3">
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium group/link"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex items-center gap-2 text-xs pt-3 border-t border-white/5">
                      <project.icon className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{project.feature}</span>
                      <span className="text-muted-foreground">• {project.tech}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
