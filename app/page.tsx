export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/images/home-hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)"
        }}
      />

      {/* HERO CONTENT */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px"
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "14px" }}>
          X SNEAKERS
        </h1>

        <p style={{ letterSpacing: "0.3em" }}>
          Crafted for the Night
        </p>

        <a href="/x-night/" className="cta">
          ENTER X-NIGHT
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} X Sneakers
      </footer>
    </main>
  );
}
