"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col pt-24 pb-10 px-6">
      
      {/* Background Engineering Grid (Pointer Events None to prevent blocking) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full flex flex-col justify-center items-center">
        
        {/* The Shoe Stage */}
        <div className="relative w-full max-w-6xl aspect-[16/9] flex items-center justify-center">
          
          {/* The Product Image */}
          <motion.div 
            className="relative z-20 w-[95%] md:w-[75%]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             {/* Dynamic Glow Under Shoe */}
            <motion.div 
              animate={{ opacity: isHovered ? 0.8 : 0.2, scale: isHovered ? 1.1 : 1 }}
              className="absolute inset-0 bg-[#00FFC8] blur-[80px] opacity-20 -z-10 transition-all duration-700"
            />
            
            {/* REPLACE WITH YOUR HERO IMAGE */}
            <Image
              src="/hero.jpg" 
              alt="X-Night Carbon"
              width={1400}
              height={900}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Background Typography: The Product Name */}
          <h1 className="absolute z-0 text-[18vw] font-display font-bold text-[#ffffff05] leading-none tracking-tighter select-none pointer-events-none">
            X-NIGHT
          </h1>
        </div>

        {/* The Specs (Bottom UI) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-8 md:mt-12 border-t border-white/10 pt-8">
          
          <div className="font-mono text-xs text-gray-500 space-y-2 order-2 md:order-1">
            <div className="flex items-center gap-2 text-[#E0E0E0]">
              <Crosshair size={14} className="text-[#FF2A2A]" />
              <span>CARBON CHASSIS</span>
            </div>
            <p>High-tensile weave. <br/>Engineered in Dubai.</p>
          </div>

          <div className="flex justify-center order-1 md:order-2">
             <Link href="/x-night" className="group relative overflow-hidden bg-[#E0E0E0] text-black px-12 py-4 font-bold tracking-widest hover:text-white transition-colors duration-300 w-full md:w-auto text-center">
                <span className="relative z-10 flex items-center justify-center gap-4">
                  EXPLORE MODEL <ArrowRight size={18} />
                </span>
                <div className="absolute inset-0 bg-[#FF2A2A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
             </Link>
          </div>

          <div className="font-mono text-xs text-gray-500 space-y-2 text-left md:text-right order-3">
            <div className="flex items-center gap-2 md:justify-end text-[#E0E0E0]">
              <span>LUMINOUS SOLE</span>
              <Zap size={14} className="text-[#D4AF37]" />
            </div>
            <p>Micro-star constellation. <br/>Reactive polymer.</p>
          </div>

        </div>
      </div>
    </div>
  );
}