"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding relative"
      ref={ref}
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-3">
            Get to Know Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 gradient-bg rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[var(--muted)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Profile photo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 sm:right-4 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="text-2xl font-bold gradient-text">5+</div>
              <div className="text-xs text-[var(--muted-foreground)]">Years Exp</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-4 -left-4 sm:left-4 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-xs text-[var(--muted-foreground)]">Projects</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">
              {siteConfig.bio}
            </p>

            <p className="text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge through
              technical blog posts and community meetups.
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--muted)] text-sm">
                <MapPin size={16} className="text-indigo-500" />
                <span className="text-[var(--muted-foreground)]">{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--muted)] text-sm">
                <Briefcase size={16} className="text-indigo-500" />
                <span className="text-[var(--muted-foreground)]">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--muted)] text-sm">
                <GraduationCap size={16} className="text-indigo-500" />
                <span className="text-[var(--muted-foreground)]">Informatics Engineering</span>
              </div>
            </div>

            {/* Download CV Button */}
            <motion.a
              href={siteConfig.resumeUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-lg mt-4"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
