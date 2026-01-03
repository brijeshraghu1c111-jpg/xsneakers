export default function XNightProductPage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "80px 40px"
      }}
    >
      {/* INTRO */}
      <section style={{ maxWidth: "520px" }}>
        <h1 style={{ fontSize: "40px", letterSpacing: "0.25em" }}>
          X-NIGHT
        </h1>

        <p style={{ marginTop: "16px", opacity: 0.7 }}>
          Engineered for movement after dark.
        </p>

        <p style={{ marginTop: "28px", lineHeight: "1.8", opacity: 0.85 }}>
          X-Night is a precision-built luxury sneaker designed for night environments —
          low light, long movement, and urban terrain.
          <br /><br />
          Every line, material, and angle is intentional.
          No excess. No noise.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section style={{ marginTop: "60px" }}>
        <img
          src="/images/x-night/01.jpg"
          alt="X-Night sneaker hero view"
          style={{
            width: "100%",
            maxWidth: "520px",
            display: "block"
          }}
        />
      </section>

      {/* PRODUCT STORY */}
      <section style={{ marginTop: "70px", maxWidth: "520px" }}>
        <p>
          Built with premium engineered mesh for breathability and control,
          reinforced with a sculpted structure that holds form without bulk.
        </p>

        <p style={{ marginTop: "20px" }}>
          The outsole is tuned for confident grip on night streets,
          while the cushioned midsole absorbs impact without sacrificing response.
        </p>
      </section>

      {/* GALLERY */}
      <section
        style={{
          marginTop: "70px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "40px",
          maxWidth: "520px"
        }}
      >
        <img src="/images/x-night/02.jpg" alt="X-Night side view" />
        <img src="/images/x-night/03.jpg" alt="X-Night back view" />
        <img src="/images/x-night/04.jpg" alt="X-Night top view" />
        <img src="/images/x-night/05.jpg" alt="X-Night sole detail" />
      </section>

      {/* 360 VIDEO */}
      <section style={{ marginTop: "80px", maxWidth: "520px" }}>
        <video
          src="/videos/x-night-360.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%" }}
        />
      </section>

      {/* KEY SPECIFICATIONS */}
      <section style={{ marginTop: "80px", maxWidth: "520px" }}>
        <ul style={{ listStyle: "none", padding: 0, opacity: 0.85 }}>
          <li>• Premium engineered mesh upper</li>
          <li>• Sculpted structural support</li>
          <li>• High-traction night-tuned outsole</li>
          <li>• Lightweight responsive cushioning</li>
          <li>• Minimal branding, maximum intent</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "90px" }}>
        <a href="/reserve/" className="cta">
          RESERVE X-NIGHT
        </a>
      </section>
    </main>
  );
}
