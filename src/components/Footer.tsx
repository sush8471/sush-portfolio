import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <a href="/" className="text-xl sm:text-2xl font-bold font-serif tracking-tight">Sushant<span className="text-primary">.</span></a>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md">Full-Stack AI Developer based in India. Building intelligent tools that solve real problems and turn ideas into working products.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#certifications" className="text-sm text-muted-foreground hover:text-primary transition-colors">Certifications</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Connect</h3>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://github.com/sush8471" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1" aria-label="GitHub"><Github className="w-4 h-4 sm:w-5 sm:h-5" /></a>
              <a href="https://linkedin.com/in/sushantchaudhary" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1" aria-label="LinkedIn"><Linkedin className="w-4 h-4 sm:w-5 sm:h-5" /></a>
              <a href="https://twitter.com/sushantcodes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1" aria-label="Twitter"><Twitter className="w-4 h-4 sm:w-5 sm:h-5" /></a>
              <a href="mailto:sushantcha00123@gmail.com" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1" aria-label="Email"><Mail className="w-4 h-4 sm:w-5 sm:h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sushant Chaudhary. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
