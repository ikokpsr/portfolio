"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  FileCode2,
  Server,
  Palette,
  Database,
  Container,
  GitBranch,
  PenTool,
} from "lucide-react";
import { skills } from "@/lib/data";

const iconMap = {
  code: Code2,
  fileCode: FileCode2,
  server: Server,
  palette: Palette,
  database: Database,
  container: Container,
  gitBranch: GitBranch,
  figma: PenTool,
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
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
            What I Work With
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] card-hover cursor-pointer overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 transition-shadow duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                  {skill.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {skill.description}
                </p>

                {/* Category badge */}
                <div className="mt-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
