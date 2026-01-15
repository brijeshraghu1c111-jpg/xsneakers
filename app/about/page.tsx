export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="h-[60vh] flex flex-col justify-center items-center text-center px-6 border-b border-zinc-800">
        <h1 className="text-6xl font-bold tracking-widest text-red-700">
          ABOUT X-NIGHT
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          A sneaker brand engineered for the night. Designed in Dubai. Crafted for those who move differently.
        </p>
      </section>

      {/* BRAND STORY */}
      <section className="max-w-5xl mx-auto px-8 py-24 space-y-12">

        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            X-Night was created to redefine what  footwear means in the modern era.
            We believe a sneaker should not only look powerful, but also represent innovation,
            exclusivity, and engineering excellence.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Crafted in Dubai</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Our design philosophy is influenced by Dubai’s precision, ambition, and architectural excellence.
            Every pair is handcrafted by skilled artisans, combining technology with craftsmanship.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Material Innovation</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            X-Night features flexible real carbon fiber uppers, premium EVA midsoles for comfort,
            and illuminated sole borders with micro-luminous elements designed to glow subtly at night.
            This combination delivers performance, beauty, and durability in a single silhouette.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Limited Production</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We intentionally produce limited quantities each year. This ensures quality control,
            exclusivity, and long-term collectibility. X-Night is not mass-produced — it is curated.
          </p>
        </div>

      </section>

      {/* BRAND STATEMENT */}
      <section className="py-24 border-t border-zinc-800 text-center">
        <p className="text-xl tracking-wide text-gray-300">
          X-Night represents confidence, precision, and the future of footwear.
        </p>
      </section>

    </div>
  );
}
