import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* BRAND TITLE SECTION */}
      <section className="flex justify-center items-center py-12">
        <h1 className="text-6xl md:text-7xl font-bold text-red-700 border-2 border-yellow-600 px-12 py-4 tracking-widest">
          X-NIGHT
        </h1>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="h-[80vh] w-full bg-black flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="X-Night Sneaker"
          fill
          priority
          className="object-contain transition-transform duration-700 hover:scale-110"
        />
      </section>

      {/* BRAND INFORMATION & CRAFTSMANSHIP */}
      <section className="max-w-5xl mx-auto px-8 py-1 space-y-8">
        <h2 className="text-4xl font-semibold tracking-wide text-center md:text-left">
          Crafted for the Night
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          X-Night is a **Dubai based sneaker brand**. Each sneaker is **handcrafted** by expert artisans with precision and passion.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          We create **only a limited number of sneakers every year**, making each pair a rare collector’s piece. Our designs combine elegance, exclusivity, and unmatched quality.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Every curve, every material, and every stitch is chosen to reflect comfort, and night-inspired aesthetics.
        </p>
      </section>
{/* KNOW MORE CTA */}
<section className="py-32 flex justify-center bg-black">
  <Link href="/x-night">
    <button className="px-16 py-5 border border-red-700 text-red-700 font-bold tracking-widest hover:bg-red-700 hover:text-black transition">
      Know More
    </button>
  </Link>
</section>


    </div>
  );
}
