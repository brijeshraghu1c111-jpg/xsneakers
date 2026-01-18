"use client";

import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Globe, Ruler, AlertCircle, ChevronRight, Lock, Receipt, CheckCircle, Truck } from "lucide-react";

type SizeRow = { eu: number; uk: number; us: number; cm: number; };

const sizeChart: SizeRow[] = [
  { eu: 36, uk: 3.5, us: 4.5, cm: 22.5 },
  { eu: 37, uk: 4,   us: 5,   cm: 23 },
  { eu: 38, uk: 5,   us: 6,   cm: 24 },
  { eu: 39, uk: 6,   us: 7,   cm: 25 },
  { eu: 40, uk: 6.5, us: 7.5, cm: 25.5 },
  { eu: 41, uk: 7.5, us: 8.5, cm: 26.5 },
  { eu: 42, uk: 8,   us: 9,   cm: 27 },
  { eu: 43, uk: 9,   us: 10,  cm: 28 },
  { eu: 44, uk: 9.5, us: 10.5,cm: 28.5 },
  { eu: 45, uk: 10.5,us: 11.5,cm: 29.5 },
  { eu: 46, uk: 11,  us: 12,  cm: 30 },
  { eu: 47, uk: 12,  us: 13,  cm: 31 },
  { eu: 48, uk: 13,  us: 14,  cm: 32 },
  { eu: 49, uk: 14,  us: 15,  cm: 33 },
  { eu: 50, uk: 15,  us: 16,  cm: 34 },
];

// Full Country List
const countries = [
  "United States", "United Kingdom", "United Arab Emirates", "Saudi Arabia", "Canada", "Germany", "France", "Italy", "Spain", "Netherlands", "Australia", "Japan", "South Korea", "China", "Singapore", "India", "Switzerland", "Sweden", "Norway", "Denmark", "Finland", "Belgium", "Austria", "Ireland", "Portugal", "Greece", "Poland", "Czech Republic", "Hungary", "Romania", "Turkey", "Israel", "South Africa", "Egypt", "Morocco", "Qatar", "Kuwait", "Bahrain", "Oman", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "Peru", "Thailand", "Vietnam", "Malaysia", "Indonesia", "Philippines", "New Zealand"
].sort();

function getSizeSystem(country: string): "uk" | "us" | "eu" | "cm" {
  if (["United States", "Canada"].includes(country)) return "us";
  if (["Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Austria"].includes(country)) return "eu";
  if (["Japan", "South Korea", "China"].includes(country)) return "cm";
  return "uk";
}

export default function ReservePage() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "",
    country: "", city: "", address: "", postalCode: "",
    selectedSize: "", euSize: "", customSize: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sizeSystem = getSizeSystem(form.country);
  const visibleSizes = sizeChart.map(row => String(row[sizeSystem]));
  const regionLabel = sizeSystem.toUpperCase();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSizeSelect = (value: string) => {
    if (value === "CUSTOM") {
      setForm({ ...form, selectedSize: "CUSTOM", euSize: "" });
      return;
    }
    const row = sizeChart.find(r => String(r[sizeSystem]) === value);
    setForm({
      ...form,
      selectedSize: value,
      euSize: row ? String(row.eu) : "",
      customSize: "",
    });
  };

  const isValid = form.fullName && form.email && form.country && form.address && (form.euSize || form.customSize);

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] pt-28 pb-20 px-4 md:px-8 font-sans selection:bg-[#FF2A2A] selection:text-white">
      
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-red-900/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* LEFT: INPUT FORM */}
        <div className="lg:col-span-7 space-y-12">
          
          <header>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">SECURE PRE-ORDER</h1>
            <p className="font-mono text-xs text-[#858585] tracking-widest">
              BATCH 01 IS LIMITED. FILL DETAILS TO ALLOCATE YOUR PAIR.
            </p>
          </header>

          {/* 1. IDENTITY - Simplified Labels */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#FF2A2A] font-mono text-xs tracking-widest border-b border-[#333] pb-2">
              <ShieldCheck size={14} /> <span>01 // CONTACT DETAILS</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <InputGroup name="fullName" label="Full Name" placeholder="John Doe" value={form.fullName} onChange={handleChange} setFocus={setFocusedField} />
              <InputGroup name="email" label="Email Address" placeholder="john@example.com" value={form.email} onChange={handleChange} setFocus={setFocusedField} />
              <InputGroup name="phone" label="Phone Number" placeholder="+1 555 000 0000" value={form.phone} onChange={handleChange} setFocus={setFocusedField} />
            </div>
          </section>

          {/* 2. LOGISTICS */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#FF2A2A] font-mono text-xs tracking-widest border-b border-[#333] pb-2">
              <Truck size={14} /> <span>02 // SHIPPING ADDRESS</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-[#858585] tracking-widest">COUNTRY</label>
                <div className="relative">
                  <select 
                    name="country" onChange={handleChange} 
                    className="w-full bg-transparent border-b border-[#333] py-3 text-sm focus:border-[#FF2A2A] focus:outline-none transition-colors appearance-none rounded-none cursor-pointer"
                  >
                    <option value="" className="bg-[#050505] text-gray-500">Select Country</option>
                    {countries.map(c => <option key={c} value={c} className="bg-[#050505]">{c}</option>)}
                  </select>
                  <ChevronRight size={14} className="absolute right-0 top-4 text-gray-600 pointer-events-none rotate-90" />
                </div>
              </div>
              <InputGroup name="city" label="City" placeholder="Dubai" value={form.city} onChange={handleChange} setFocus={setFocusedField} />
              <InputGroup name="address" label="Street Address" placeholder="123 Sheikh Zayed Rd" value={form.address} onChange={handleChange} setFocus={setFocusedField} fullWidth />
              <InputGroup name="postalCode" label="Zip / Postal Code" placeholder="00000" value={form.postalCode} onChange={handleChange} setFocus={setFocusedField} />
            </div>
          </section>

          {/* 3. CALIBRATION */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#FF2A2A] font-mono text-xs tracking-widest border-b border-[#333] pb-2">
              <Ruler size={14} /> <span>03 // SIZE SELECTION</span>
            </div>
            <div className="bg-[#0f0f0f] border border-[#333] p-6">
              {!form.country ? (
                <div className="flex flex-col items-center justify-center py-6 text-[#858585] gap-2">
                  <AlertCircle size={20} />
                  <p className="font-mono text-xs">SELECT COUNTRY FIRST TO SHOW SIZES</p>
                </div>
              ) : (
                <div className="space-y-4">
                   <div className="flex justify-between items-end">
                      <label className="font-mono text-[10px] text-[#858585] tracking-widest">
                        SYSTEM: <span className="text-[#E0E0E0]">{regionLabel}</span>
                      </label>
                      {form.euSize && <span className="font-mono text-xs text-[#00FFC8]">MFG SIZE: EU {form.euSize}</span>}
                   </div>
                   <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                      {visibleSizes.map(size => (
                        <button 
                          key={size} onClick={() => handleSizeSelect(size)}
                          className={`py-3 text-sm font-mono border transition-all duration-300 ${form.selectedSize === size ? "border-[#FF2A2A] bg-[#FF2A2A]/10 text-white" : "border-[#333] text-[#858585] hover:border-white"}`}
                        >
                          {size}
                        </button>
                      ))}
                   </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* RIGHT: MANIFEST + TRUST BADGES */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32 bg-[#0A0A0A] border border-[#333] p-8 space-y-8">
            <div className="flex items-center gap-3 border-b border-[#333] pb-6">
                <Receipt className="text-[#FF2A2A]" size={20}/>
                <h2 className="font-display text-lg tracking-wider">ORDER SUMMARY</h2>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between text-[#858585]">
                <span>PRODUCT:</span>
                <span className="text-[#E0E0E0]">X-NIGHT / BATCH 01</span>
              </div>
              <div className="flex justify-between text-[#858585]">
                <span>SIZE:</span>
                <span className={form.selectedSize ? "text-[#E0E0E0]" : "text-[#FF2A2A] animate-pulse"}>
                  {form.selectedSize ? `${regionLabel} ${form.selectedSize}` : "SELECT SIZE"}
                </span>
              </div>
              <div className="h-px bg-[#333] my-4" />
              <div className="flex justify-between text-lg">
                <span>TOTAL:</span>
                <span className="text-[#D4AF37] font-bold">$699.00 USD</span>
              </div>
              <p className="text-[10px] text-gray-500 text-right">Includes Shipping & Taxes</p>
            </div>

            {/* TRUST BADGES ROW */}
            <div className="grid grid-cols-3 gap-2 border-t border-[#333] pt-4">
              <div className="flex flex-col items-center gap-1 text-center">
                <ShieldCheck size={16} className="text-[#00FFC8]" />
                <span className="text-[8px] text-[#555] font-mono">SECURE<br/>CHECKOUT</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <CheckCircle size={16} className="text-[#00FFC8]" />
                <span className="text-[8px] text-[#555] font-mono">AUTH<br/>GUARANTEE</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <Globe size={16} className="text-[#00FFC8]" />
                <span className="text-[8px] text-[#555] font-mono">GLOBAL<br/>DELIVERY</span>
              </div>
            </div>

            <div className="pt-2">
              <AnimatePresence mode="wait">
                {isValid ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key="paypal" className="relative z-0"
                  >
                    <PayPalButtons
                      style={{ layout: "vertical", color: "black", label: "checkout" }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [{ amount: { currency_code: "USD", value: "699.00" } }],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions!.order!.capture().then(() => alert("Pre-Order Confirmed. Welcome to the Club."));
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="locked"
                    className="h-12 flex items-center justify-center bg-[#111] border border-[#333] text-[#555] font-mono text-xs gap-2 cursor-not-allowed"
                  >
                    <Lock size={14} /> COMPLETE DETAILS TO UNLOCK
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputGroup = ({ name, label, placeholder, value, onChange, setFocus, fullWidth }: any) => (
  <div className={`flex flex-col gap-2 ${fullWidth ? "md:col-span-2" : ""}`}>
    <label className="font-mono text-[10px] text-[#858585] tracking-widest uppercase">{label}</label>
    <input
      name={name} placeholder={placeholder} value={value} onChange={onChange}
      onFocus={() => setFocus(name)} onBlur={() => setFocus(null)}
      className="bg-transparent border-b border-[#333] py-3 text-sm text-[#E0E0E0] placeholder:text-[#333] focus:border-[#FF2A2A] focus:outline-none transition-colors rounded-none"
    />
  </div>
);