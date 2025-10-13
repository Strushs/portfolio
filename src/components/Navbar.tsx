"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(960px,94%)] flex-col gap-3 rounded-3xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white backdrop-blur-xl sm:top-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-6"
    >
      <div className="flex w-full items-center justify-between gap-3">
        <Link
          href="#home"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="rounded-full bg-white px-2 py-1 text-xs font-bold uppercase text-black">
            DS
          </span>
          Dawid Strużyński
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((state) => !state)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/25 hover:bg-white/10 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
        <div className="hidden items-center gap-3 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3 py-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 scale-75 rounded-full bg-white/10 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col gap-2 overflow-hidden sm:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="group relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
              >
                <span>{item.label}</span>
                <span className="text-xs uppercase tracking-[0.24em] text-white/40">
                  Go
                </span>
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
