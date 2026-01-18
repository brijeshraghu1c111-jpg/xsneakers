import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar"; // IMPORT THE NEW COMPONENT
import ClientWrapper from "./components/ClientWrapper";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-display" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata = {
  title: "XSNEAKERS | Engineered in Dubai",
  description: "Advanced Carbon Fiber Footwear",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-[#E0E0E0] font-sans antialiased selection:bg-[#FF2A2A] selection:text-white">
        
        {/* USE THE NEW CLIENT NAVBAR */}
        <Navbar />

        <main className="relative z-0">
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </main>
        
      </body>
    </html>
  );
}