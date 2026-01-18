"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, Moon, Shield, Users, FileText, X, Maximize2, Activity } from "lucide-react";
import { useState, useEffect } from "react";

// DATA SOURCE
const galleryItems = [
  { src: "/x-night/shoe-1.jpg", type: "image", title: "Lateral Profile", desc: "Aerodynamic carbon weave." },
  { src: "/x-night/shoe-2.jpg", type: "image", title: "Carbon Chassis", desc: "Real 3K Twill Carbon Fiber." },
  { src: "/x-night/shoe-3.jpg", type: "image", title: "Night Mode", desc: "Luminous polymer sole activation." },
  { src: "/x-night/shoe-4.jpg", type: "image", title: "Sole Tread", desc: "High-density rubber grip." },
  { src: "/x-night/shoe-5.jpg", type: "image", title: "Heel Detail", desc: "Reinforced structure." },
    { src: "/x-night/shoe-6.jpg", type: "image", title: "Down Side", desc: "Bottom view." },
  { src: "/x-night/video-360.mp4", type: "video", title: "360° Analysis", desc: "Complete structural review." },
];

export default function XNightPage() {
  // STATE MANAGEMENT
  const [viewers, setViewers] = useState(1240);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 1. INCREMENT VIEWERS LOGIC
  useEffect(() => {
    const storedViews = localStorage.getItem("x-night-views");
    let currentViews = storedViews ? parseInt(storedViews) : 1240;
    const newViews = currentViews + 1 + Math.floor(Math.random() * 3);
    
    localStorage.setItem("x-night-views", newViews.toString());
    setViewers(newViews);

    const interval = setInterval(() => {
      setViewers(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#E0E0E0] font-sans">
      
      {/* --- LIGHTBOX (FULL SCREEN ZOOM) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative w-full h-full max-w-7xl max-h-screen flex items-center justify-center"
            >
              <Image src={selectedImage} alt="Zoomed Detail" fill className="object-contain" priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO HEADER */}
      <div className="pt-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A2A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2A2A]"></span>
            </span>
            <p className="font-mono text-[10px] text-[#FF2A2A] tracking-[0.2em]">
              {viewers.toLocaleString()} LIVE VIEWERS
            </p>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
          X-NIGHT
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-sm leading-relaxed mt-2">
          The first sneaker <span className="text-white font-bold">Designed & Engineered in Dubai</span>. 
          Flexible carbon fiber chassis meets reactive luminous technology.
        </p>
      </div>

      {/* 2. CLICKABLE SLIDER */}
      <div className="mt-8 w-full overflow-x-scroll pb-4 no-scrollbar snap-x snap-mandatory">
        <div className="flex gap-2 px-4 md:px-0 md:max-w-[1600px] md:mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group shrink-0 snap-center overflow-hidden bg-[#0f0f0f] w-[85vw] md:w-[45vw] aspect-[4/3] cursor-pointer`}
              onClick={() => item.type === 'image' && setSelectedImage(item.src)}
            >
              {item.type === "video" ? (
                <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
              ) : (
                <>
                  <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-4 rounded-full backdrop-blur-sm pointer-events-none">
                     <Maximize2 className="text-white" size={24} />
                  </div>
                </>
              )}
              
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="font-mono text-[10px] bg-black/50 backdrop-blur-md px-2 py-1 border border-white/10 text-[#D4AF37]">
                  FIG 0{index + 1}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                <p className="font-display text-xl text-white">{item.title}</p>
                <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. DESIGN LAB (UPDATED: No Photos Needed) */}
      <section className="py-12 border-y border-white/5 bg-[#0a0a0a] mt-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT: Text Claim */}
          <div>
            <div className="flex items-center gap-2 text-[#FF2A2A] mb-4 font-mono text-xs tracking-widest">
              <FileText size={14} /> <span>ENGINEERING PROTOCOL</span>
            </div>
            <h2 className="font-display text-3xl text-white mb-4">Designed in Dubai.</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              X-Night is an engineering feat. Conceptualized in our Dubai headquarters, every curve is tested for aerodynamic efficiency. We spent 2,000+ hours on 3D prototyping to perfect the carbon fiber flex-ratio.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-black border border-[#333]">
                 <p className="text-[#D4AF37] font-display text-2xl">2,000+</p>
                 <p className="text-[10px] text-gray-500 font-mono">HOURS R&D</p>
               </div>
               <div className="p-4 bg-black border border-[#333]">
                 <p className="text-[#D4AF37] font-display text-2xl">54</p>
                 <p className="text-[10px] text-gray-500 font-mono">PROTOTYPES</p>
               </div>
            </div>
          </div>

          {/* RIGHT: DIGITAL MONITOR (CSS Generated - No Image Needed) */}
          <div className="relative h-full min-h-[300px] bg-[#050505] border border-[#333] p-6 flex flex-col justify-between overflow-hidden">
             
             {/* Background Grid Pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
             </div>

             {/* Header */}
             <div className="flex justify-between items-center z-10">
                <span className="font-mono text-[10px] text-[#FF2A2A] tracking-widest animate-pulse">● SYSTEM_ACTIVE</span>
                <span className="font-mono text-[10px] text-gray-600">DUBAI_LAB_01</span>
             </div>

             {/* Center Graphic: Digital Pulse */}
             <div className="relative z-10 flex-1 flex items-center justify-center my-4">
                <div className="relative w-40 h-40 border border-[#222] rounded-full flex items-center justify-center">
                   <div className="absolute w-full h-full border border-[#D4AF37]/20 rounded-full animate-ping"></div>
                   <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#D4AF37]/50">
                      <Activity size={24} className="text-[#D4AF37]" />
                   </div>
                </div>
                <div className="absolute bottom-10 font-mono text-[10px] text-[#E0E0E0] tracking-widest bg-black px-2">
                   ANALYZING GEOMETRY
                </div>
             </div>

             {/* Footer Data List */}
             <div className="space-y-2 z-10 font-mono text-[10px] text-gray-500 border-t border-[#222] pt-4">
                <div className="flex justify-between">
                   <span>AERODYNAMICS</span>
                   <span className="text-[#00FFC8]">OPTIMAL</span>
                </div>
                <div className="flex justify-between">
                   <span>FIBER TENSION</span>
                   <span className="text-[#E0E0E0]">3400 MPa</span>
                </div>
                <div className="flex justify-between">
                   <span>WEIGHT DIST.</span>
                   <span className="text-[#E0E0E0]">PERFECTLY BALANCED</span>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* 4. SPECS & SCARCITY */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#FF2A2A] mb-1">
              <Shield size={18} />
              <h3 className="font-mono text-xs tracking-widest">MATERIAL INNOVATION</h3>
            </div>
            <h2 className="font-display text-2xl md:text-3xl">Flexible Carbon Fiber.</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              The upper is crafted from real carbon fiber, engineered to be flexible. This provides the tensile strength of a supercar chassis with the comfort of a luxury sock liner.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#D4AF37] mb-1">
              <Moon size={18} />
              <h3 className="font-mono text-xs tracking-widest">NOCTURNAL OPTICS</h3>
            </div>
            <h2 className="font-display text-2xl md:text-3xl">Luminous Sole.</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Illuminated border with embedded micro-stars. Engineered to glow subtly at night without batteries, maintaining elegance and durability.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white mb-1">
              <Cpu size={18} />
              <h3 className="font-mono text-xs tracking-widest">PERFORMANCE CORE</h3>
            </div>
            <h2 className="font-display text-2xl md:text-3xl">EVA Architecture.</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              A premium EVA midsole is concealed within the chassis to deliver shock absorption comparable to performance athletic gear.
            </p>
          </div>

          {/* SCARCITY CTA BOX */}
          <div className="flex flex-col justify-between p-6 border border-[#FF2A2A]/30 bg-[#FF2A2A]/5 relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                 <h3 className="font-mono text-[10px] text-[#FF2A2A] tracking-widest mb-1">BATCH 01 STATUS</h3>
                 <p className="text-2xl font-display text-white">Selling Fast</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#00FFC8] bg-[#00FFC8]/10 px-2 py-1 rounded">
                <Users size={12} /> {viewers.toLocaleString()} ACTIVE
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>CLAIMED: 412/500</span>
                <span className="text-[#FF2A2A]">88 REMAINING</span>
              </div>
              <div className="h-1 w-full bg-[#333]">
                <div className="h-full bg-[#FF2A2A] w-[82%] animate-pulse"></div>
              </div>
            </div>

            <Link href="/reserve" className="w-full relative z-10">
              <button className="w-full py-4 bg-[#FF2A2A] hover:bg-red-700 text-white font-bold tracking-widest transition-colors flex items-center justify-center gap-2 group text-sm">
                PRE-ORDER BATCH 01 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </Link>
          </div>

        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}