"use client";

// FIX: Import from the correct package
import { ReactLenis } from "@studio-freight/react-lenis";
import PayPalProvider from "./PayPalProvider";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    // FIX: Added options for smoother "Heavy" feel
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <PayPalProvider>
        {children}
      </PayPalProvider>
    </ReactLenis>
  );
}