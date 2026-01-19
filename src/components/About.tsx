"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden" id="about">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1">

            <div className="aspect-[4/5] max-h-[450px] sm:max-h-[550px] lg:max-h-none relative rounded-2xl overflow-hidden mx-auto lg:mx-0">
               <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20251120_023923_942-1763587651972.jpg?width=8000&height=8000&resize=contain"
                alt="Sushant Chaudhary Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw" />

               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
              More than just <span className="text-primary">code</span>.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a tech student and automation-focused builder who enjoys creating simple, useful digital tools. My journey began with curiosity; trying to understand how everyday apps work, how automations save time, and how lightweight AI tools can simplify real tasks.
              </p>
              <p>
                Over time, that curiosity turned into building. I began creating small but practical tools across web development, n8n automations, and lightweight AI utilities. I enjoy taking an idea, simplifying it, and turning it into something functional, clean, and easy to use. When I'm not experimenting with APIs or refining interfaces, I spend time exploring design and learning how modern web and AI products are built.
              </p>
              <p>
                Right now, I'm focused on expanding the Flydex ecosystem; a growing collection of lightweight tools like Flydexify, FlydexGPT, and Flydex Calories. These projects are helping me grow as a builder while quietly preparing me for future SaaS and automation-based products.
              </p>
            </div>
            
            <div className="pt-4 sm:pt-6 grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                    <h4 className="text-3xl sm:text-4xl font-bold text-foreground">1+</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years of Self-Learning Journey</p>
                </div>
                 <div>
                    <h4 className="text-3xl sm:text-4xl font-bold text-foreground">5+</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Public Tools Launched</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}