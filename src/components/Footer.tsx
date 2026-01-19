"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <Link href="/" className="text-xl sm:text-2xl font-bold font-serif tracking-tight">
              Sushant<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md">
              AI Engineer & Frontend Developer based in India. Specializing in building exceptional digital experiences and intelligent systems.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Socials</h3>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="mailto:hello@sushant.dev"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sushant Chaudhary. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}