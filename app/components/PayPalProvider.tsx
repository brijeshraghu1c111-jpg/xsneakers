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
        clientId: "AWLNgy6I5kj_NFYJZ5rmz-szQJB3zCgl9NRI7aYkCHJVLC4ONTWdD_ENALnNjhzP_UFxYLwc-v5LHt4R",
        currency: "USD",
        intent: "capture",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
