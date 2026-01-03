export default function PaymentPage() {
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
      <h1 style={{ fontSize: "30px", letterSpacing: "0.2em" }}>
        PAYMENT
      </h1>

      <p style={{ marginTop: "16px", opacity: 0.7 }}>
        X-Night — Luxury Performance Sneaker
      </p>

      <div style={{ marginTop: "50px", opacity: 0.85 }}>
        <p>Product: X-Night</p>
        <p>Color: Night Black</p>
        <p>Delivery: Standard</p>
        <p style={{ marginTop: "20px" }}>Total: ₹ — To be confirmed</p>
      </div>

      <button
        onClick={() => (window.location.href = "/thank-you")}
        style={{
          marginTop: "60px",
          background: "#fff",
          color: "#000",
          padding: "16px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          letterSpacing: "0.15em"
        }}
      >
        CONFIRM RESERVATION
      </button>
    </main>
  );
}
