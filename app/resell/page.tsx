"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  TrendingUp, 
  Activity, 
  QrCode, 
  ArrowRight, 
  Fingerprint, 
  Wallet,
  AlertTriangle,
  Clock
} from "lucide-react";

export default function ResellPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] font-sans selection:bg-[#00FFC8] selection:text-black">
      
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00FFC8]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 pt-32 pb-20">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-32">
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="flex items-center gap-3 mb-6 px-4 py-1 border border-[#00FFC8]/20 bg-[#00FFC8]/5 rounded-full"
          >
             <Activity size={14} className="text-[#00FFC8]" />
             <span className="font-mono text-[10px] text-[#00FFC8] tracking-widest uppercase">Verified Resale Ecosystem</span>
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-6"
          >
            RESELL <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">MARKETPLACE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="max-w-2xl text-gray-400 text-sm md:text-lg leading-relaxed mb-10"
          >
            A closed-loop economy exclusively for original <span className="text-white font-bold">X-Night</span> owners. 
            Automated verification, instant payouts, and zero fake listings.
          </motion.p>

          {/* MAIN CTA AREA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <button className="group relative px-10 py-4 bg-transparent border border-[#00FFC8] text-[#00FFC8] font-bold tracking-widest hover:bg-[#00FFC8] hover:text-black transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  LOGIN TO RESELL <Fingerprint size={18} />
                </span>
                <div className="absolute inset-0 bg-[#00FFC8] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity" />
              </button>

              <Link href="#protocol" className="px-10 py-4 border border-white/10 text-gray-400 hover:text-white hover:border-white transition-colors tracking-widest text-sm flex items-center justify-center uppercase">
                View Protocol
              </Link>
            </div>

            {/* STATUS TAG */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 rounded-sm">
                <Clock size={12} className="text-[#FF2A2A] animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-[#FF2A2A] tracking-[0.2em] uppercase">
                  Available on 01 / JULY / 2026
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- 2. COMMAND CENTER (DASHBOARD PREVIEW) --- */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4 uppercase tracking-tighter">Command Center</h2>
            <p className="text-gray-500 font-mono text-xs tracking-[0.3em]">REAL-TIME ASSET MANAGEMENT</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative w-full rounded-sm border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl"
          >
            <div className="border-b border-white/10 p-6 flex justify-between items-center bg-[#0f0f0f]">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00FFC8]/20 border border-[#00FFC8]" />
              </div>
              <div className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Node_Status: Locked_Until_Launch</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5">
              {[
                { label: "My Inventory", value: "2", unit: "PAIRS", icon: ShieldCheck, color: "text-[#00FFC8]", meta: "● Verified Batch 01" },
                { label: "Market Value", value: "$4,250", unit: "EST", icon: TrendingUp, color: "text-[#D4AF37]", meta: "+12.5% vs Retail" },
                { label: "Active Listings", value: "0", unit: "LIVE", icon: Activity, color: "text-[#FF2A2A]", meta: "Terminal Offline" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-colors">
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</span>
                    <stat.icon size={18} className={stat.color} />
                  </div>
                  <div className="text-4xl font-display text-white mb-2">{stat.value} <span className="text-sm text-gray-500">{stat.unit}</span></div>
                  <div className={`text-[9px] font-mono tracking-widest uppercase ${stat.color}`}>{stat.meta}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- 3. TRUST PROTOCOLS --- */}
        <section className="max-w-7xl mx-auto px-6 mb-32" id="protocol">
          <div className="flex items-center gap-3 mb-12">
            <QrCode className="text-gray-600" size={20} />
            <h3 className="font-mono text-xs text-gray-600 tracking-[0.4em] uppercase">Trust Protocols</h3>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: ShieldCheck, color: "text-[#00FFC8]", title: "Verified Only", desc: "Access limited to original blockchain-verified purchasers." },
              { icon: Lock, color: "text-[#FF2A2A]", title: "Quantity Lock", desc: "Prevents bulk scalping. Sell only what you own." },
              { icon: Fingerprint, color: "text-[#D4AF37]", title: "Auto-Auth", desc: "Digital fingerprints ensure 100% product authenticity." },
              { icon: Wallet, color: "text-white", title: "Instant Payout", desc: "Funds move instantly via our secure escrow terminal." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp}
                className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all group"
              >
                <item.icon size={24} className={`${item.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h4 className="font-display text-lg text-white mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- 4. BRAND FOOTER --- */}
        <section className="py-20 text-center border-t border-white/5 mx-6">
           <p className="font-mono text-[10px] tracking-[0.5em] text-gray-700 uppercase">
             XSNEAKERS // SECONDARY MARKET TERMINAL // DUBAI
           </p>
        </section>
      </div>
    </div>
  );
}