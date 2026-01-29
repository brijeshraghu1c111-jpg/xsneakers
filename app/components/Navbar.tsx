"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* --- MAIN HEADER --- */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-[#050505] via-[#050505]/90 to-transparent pointer-events-auto transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-between items-center">
          
          {/* BRAND LOGO */}
          <Link 
            href="/" 
            className="font-display font-bold text-2xl tracking-tighter hover:opacity-70 transition-opacity text-white mix-blend-difference relative z-[110]"
            onClick={closeMenu}
          >
            XSNEAKERS
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-12 font-mono text-xs tracking-[0.2em] items-center">
            <Link href="/x-night" className="text-[#E0E0E0] hover:text-[#FF2A2A] transition-colors">
              X-NIGHT
            </Link>
            <Link href="/about" className="text-[#E0E0E0] hover:text-[#FF2A2A] transition-colors">
              ENGINEERING
            </Link>
            <Link href="/reserve" className="text-[#E0E0E0] hover:text-[#FF2A2A] transition-colors">
              ALLOCATION
            </Link>

            {/* RESELL LINK - NOW LAST */}
            <Link 
              href="/resell" 
              className="text-[#00FFC8] hover:drop-shadow-[0_0_8px_#00FFC8] transition-all flex items-center gap-2 border border-[#00FFC8]/20 px-3 py-1 rounded-sm bg-[#00FFC8]/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFC8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFC8]"></span>
              </span>
              RESELL
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-mono text-xs font-bold text-white bg-[#FF2A2A] px-3 py-1 tracking-widest hover:bg-white hover:text-black transition-colors relative z-[110]"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>

      {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#050505] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              <MobileLink href="/" onClick={closeMenu}>HOME</MobileLink>
              <MobileLink href="/x-night" onClick={closeMenu}>X-NIGHT</MobileLink>
              <MobileLink href="/about" onClick={closeMenu}>ENGINEERING</MobileLink>
              <MobileLink href="/reserve" onClick={closeMenu}>ALLOCATION</MobileLink>
              
              {/* MOBILE RESELL LINK - LAST */}
              <Link 
                href="/resell" 
                onClick={closeMenu}
                className="font-display text-4xl font-bold text-[#00FFC8] hover:scale-110 transition-transform tracking-tighter"
              >
                RESELL
              </Link>
            </div>

            <div className="absolute bottom-10 w-full flex justify-center opacity-30">
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const MobileLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className="font-display text-4xl font-bold text-white hover:text-[#FF2A2A] transition-colors tracking-tighter"
  >
    {children}
  </Link>
);