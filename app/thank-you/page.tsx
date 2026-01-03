export default function ThankYouPage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "80px 40px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "32px", letterSpacing: "0.25em" }}>
        CONFIRMED
      </h1>

      <p style={{ marginTop: "24px", opacity: 0.8 }}>
        Your X-Night reservation has been received.
      </p>

      <p style={{ marginTop: "16px", opacity: 0.6 }}>
        You’ll receive updates via email.
      </p>

      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "60px",
          color: "#fff",
          textDecoration: "underline",
          letterSpacing: "0.15em"
        }}
      >
        RETURN HOME
      </a>
    </main>
  );
}
