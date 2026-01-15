"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";

export default function ReservePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-2xl mb-6">Reserve X-Night ($1999)</h1>

      <div className="w-[320px]">
        <PayPalButtons
          style={{ layout: "vertical" }}

          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: "1999.00",
                  },
                },
              ],
            });
          }}

          onApprove={(data, actions) => {
            return actions!.order!.capture().then(() => {
              alert("Payment Successful!");
            });
          }}
        />
      </div>
    </main>
  );
}
