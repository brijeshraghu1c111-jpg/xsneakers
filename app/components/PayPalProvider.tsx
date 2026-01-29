"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: "ARkCMVWsX2VzUDZK5l1XG7FiQg3ldxUOYVHZGkKvZQOu27nWl5oRfzdT8fRm2Ps6AZC8AWMgY87qYxAZ",
        currency: "USD",
        intent: "capture",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
