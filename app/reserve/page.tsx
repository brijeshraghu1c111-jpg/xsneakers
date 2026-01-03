export default function ReservePage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "80px 40px",
        maxWidth: "520px",
        margin: "0 auto"
      }}
    >
      <h1 style={{ fontSize: "32px", letterSpacing: "0.2em" }}>
        RESERVE X-NIGHT
      </h1>

      <p style={{ marginTop: "16px", opacity: 0.7 }}>
        Secure your pair. Limited production.
      </p>

      <form style={{ marginTop: "60px", display: "grid", gap: "24px" }}>
        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
        <input placeholder="Country Code + Phone" />
        <input placeholder="Delivery Address" />
        <input type="password" placeholder="Create Password" />

        <button
          type="button"
          onClick={() => (window.location.href = "/payment")}
          style={{
            marginTop: "40px",
            background: "#fff",
            color: "#000",
            padding: "16px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            letterSpacing: "0.15em"
          }}
        >
          CONTINUE TO PAYMENT
        </button>
      </form>
    </main>
  );
}
