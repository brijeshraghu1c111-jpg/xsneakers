"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Crosshair, Zap, ShieldCheck, Lock, Activity, Globe, Hammer } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  // Animation Variants for consistency
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-x-hidden flex flex-col pt-12 pb-20 px-6">
      
      {/* --- 1. TOP NOTIFICATION BAR --- */}
      <div className="fixed top-20 left-0 w-full z-[80] flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/60 backdrop-blur-md border border-white/5 px-4 py-1.5 rounded-full flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-gray-400 uppercase">
            New Model Under Design — Coming Soon
          </span>
        </motion.div>
      </div>

      {/* Background FX */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full flex flex-col">
        
        {/* --- 2. HERO SECTION --- */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center relative">
          <div className="relative w-full aspect-[16/9] flex items-center justify-center">
            <motion.div 
              className="relative z-20 w-[95%] md:w-[75%]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                animate={{ opacity: isHovered ? 0.6 : 0.2, scale: isHovered ? 1.1 : 1 }}
                className="absolute inset-0 bg-[#00FFC8] blur-[100px] -z-10 transition-all duration-700"
              />
              <Image
                src="/hero.jpg" 
                alt="X-Night Carbon"
                width={1400}
                height={900}
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                priority
              />
            </motion.div>
            <h1 className="absolute z-0 text-[18vw] font-display font-bold text-[#ffffff03] leading-none tracking-tighter select-none pointer-events-none">
              X-NIGHT
            </h1>
          </div>

          {/* DUAL CTA BUTTONS */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 w-full md:w-auto px-6">
            <Link href="/x-night" className="group relative overflow-hidden bg-white text-black px-12 py-4 font-bold tracking-widest hover:text-white transition-colors duration-300 text-center">
              <span className="relative z-10 flex items-center justify-center gap-4 uppercase text-sm">
                Explore X-Night <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-[#FF2A2A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>

            <Link href="/resell" className="border border-white/10 bg-white/5 backdrop-blur-sm px-12 py-4 font-bold tracking-widest text-[#00FFC8] hover:bg-[#00FFC8]/10 transition-all text-center uppercase text-sm">
              Resell Marketplace (01/07/2026)
            </Link>
          </div>
        </section>

        {/* --- 3. RESELL ANNOUNCEMENT SECTION --- */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-white/5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="flex items-center gap-2 text-[#00FFC8] font-mono text-xs tracking-widest mb-4">
              <Activity size={14} /> // LIVE LEDGER PROTOCOL
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tighter">
              INTRODUCING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC8] to-blue-500">RESELL X-NIGHT</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
              A controlled resale ecosystem where verified owners can resell their X-Night sneakers securely. 
              No fake products. No uncontrolled scalping. Only authentic circulation.
            </p>
            <Link href="/resell" className="inline-flex items-center gap-2 text-white border-b border-[#00FFC8] pb-1 hover:gap-4 transition-all tracking-widest text-xs font-bold">
              LEARN ABOUT RESELL <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: ShieldCheck, title: "Verified Ownership", desc: "Blockchain-backed authentication." },
              { icon: Lock, title: "Quantity Locked", desc: "Limited to original purchase count." },
              { icon: Zap, title: "Brand Protected", desc: "Price stability algorithms." },
              { icon: Activity, title: "Launch 01/07/2026", desc: "Marketplace activation date." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                <item.icon className="text-[#00FFC8] mb-4" size={20} />
                <h4 className="text-white font-display text-sm mb-2 uppercase tracking-wide">{item.title}</h4>
                <p className="text-[10px] font-mono text-gray-500 uppercase leading-tight">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* --- 4. ROADMAP SECTION --- */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-white tracking-widest">WHAT'S NEXT</h2>
            <div className="w-12 h-[1px] bg-[#FF2A2A] mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { status: "complete", title: "X-Night Limited Drop", date: "Q1 2026", icon: ShieldCheck },
              { status: "active", title: "New Model Under Design", date: "In Progress", icon: Hammer },
              { status: "future", title: "Resell Marketplace Launch", date: "01/07/2026", icon: Lock },
            ].map((step, i) => (
              <div key={i} className={`flex items-center justify-between p-6 border ${step.status === 'active' ? 'border-[#FF2A2A]/40 bg-[#FF2A2A]/5' : 'border-white/5 bg-white/[0.01]'}`}>
                <div className="flex items-center gap-6">
                  <step.icon size={20} className={step.status === 'complete' ? 'text-[#00FFC8]' : step.status === 'active' ? 'text-[#FF2A2A]' : 'text-gray-600'} />
                  <div>
                    <h4 className={`text-sm font-bold tracking-widest ${step.status === 'future' ? 'text-gray-500' : 'text-white'}`}>{step.title}</h4>
                    <p className="text-[10px] font-mono text-gray-600 mt-1 uppercase">{step.status === 'complete' ? 'Verified' : 'Scheduled'}</p>
                  </div>
                </div>
                <span className={`font-mono text-[10px] ${step.status === 'active' ? 'text-[#FF2A2A]' : 'text-gray-500'}`}>{step.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. TRUST STATEMENT --- */}
        <section className="py-20 text-center">
           <p className="font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">
             "Xsneakers builds controlled innovation — not mass production."
           </p>
        </section>

      </div>
    </div>
  );
}