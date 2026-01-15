"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const slides = [
  { type: "image", src: "/x-night/shoe-1.jpg" },
  { type: "image", src: "/x-night/shoe-2.jpg" },
  { type: "image", src: "/x-night/shoe-3.jpg" },
  { type: "image", src: "/x-night/shoe-4.jpg" },
  { type: "image", src: "/x-night/shoe-5.jpg" },
  { type: "image", src: "/x-night/shoe-6.jpg" },
  { type: "video", src: "/x-night/video-360.mp4" },
];

export default function XNight() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="bg-black text-white">

      {/* SECTION 1: FULL SCREEN HERO */}
      <section className="relative h-screen w-full flex items-center justify-center">

        {slides[index].type === "image" ? (
          <Image
            src={slides[index].src}
            alt="X-Night Sneaker"
            fill
            priority
            className="object-contain"
          />
        ) : (
          <video
            key={slides[index].src}
            src={slides[index].src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        )}

        {/* NAVIGATION */}
        <button
          onClick={prev}
          className="absolute left-6 text-4xl text-white/70 hover:text-white transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-6 text-4xl text-white/70 hover:text-white transition"
        >
          ›
        </button>
      </section>

      {/* SECTION 2: PRODUCT IDENTITY */}
      <section className="py-24 text-center">
        <h1 className="text-6xl font-bold text-red-700 border-2 border-yellow-600 inline-block px-10 py-4 tracking-widest">
          X-NIGHT
        </h1>

        <p className="mt-6 text-gray-400 tracking-wide">
         designed in Dubai • Handcrafted • Limited Edition
        </p>
      </section>

      {/* SECTION 3: PRODUCT STORY */}
      <section className="max-w-4xl mx-auto px-8 space-y-10 text-gray-400 text-lg leading-relaxed">
        <p>
          X-Night is Dubai by expert artisans. The upper is made from
          <strong className="text-white"> flexible real carbon fiber</strong> — 
          the only sneaker in the world to achieve true flexibility with this material.
        </p>

        <p>
          The sole features an{" "}
          <strong className="text-white">illuminated border with micro-stars</strong>,
          engineered to glow subtly at night without batteries, maintaining elegance and durability.
        </p>

        <p>
          A <strong className="text-white">premium EVA midsole</strong> is used to deliver
          comfort, shock absorption, and long-term wear comparable to the world’s top brands.
        </p>

        <p>
          X-Night is produced in{" "}
          <strong className="text-white">limited quantities each year</strong>,
          making every pair a collector’s piece rather than a mass-market product.
        </p>
      </section>

      {/* SECTION 4: RESERVE */}
      <section className="py-32 text-center">
        <Link href="/reserve">
          <button className="px-16 py-5 bg-red-700 text-black font-bold text-lg hover:bg-red-900 transition">
            Reserve Now
          </button>
        </Link>
      </section>

    </div>
  );
}
