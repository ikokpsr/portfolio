"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/lib/data";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: FaXTwitter, href: siteConfig.social.twitter, label: "Twitter/X" },
    { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-[var(--muted-foreground)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-[var(--muted-foreground)] font-light mb-6"
        >
          {siteConfig.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(78, 123, 183, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("#contact")}
            className="gradient-bg text-white px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg cursor-pointer"
          >
            Contact Me
            <ExternalLink size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("#projects")}
            className="px-8 py-3.5 rounded-xl font-semibold text-sm glass hover:bg-[var(--muted)] transition-colors flex items-center gap-2 cursor-pointer"
          >
            View Projects
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl glass text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--muted-foreground)] flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full gradient-bg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
