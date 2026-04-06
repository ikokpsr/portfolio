"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: FaXTwitter, href: siteConfig.social.twitter, label: "Twitter/X" },
    { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
  ];

  return (
    <footer className="relative py-12 px-4 border-t border-[var(--border)]">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-2">
              {siteConfig.name.split(" ")[0]}
              <span className="text-[var(--foreground)]">.</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)]">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Built with love */}
          <div className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
            <span>Built with</span>
            <span>using Next.js & Tailwind CSS</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
