import "./globals.css";
import Link from "next/link";
import PayPalProvider from "./components/PayPalProvider";

export const metadata = {
  title: "X-Night | Sneakers",
  description: "Engineered for the night",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
          <nav className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">

            {/* LOGO */}
            <div className="text-white font-bold italic tracking-widest text-lg cursor-pointer">
              X-NIGHT
            </div>

            {/* NAV LINKS */}
            <div className="flex gap-8 items-center">
              <Link
                href="/"
                className="hover:text-red-600 transition-colors duration-300"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="hover:text-red-600 transition-colors duration-300"
              >
                About
              </Link>

              <Link
                href="/x-night"
                className="hover:text-red-600 font-bold transition-colors duration-300"
              >
                X-Night
              </Link>

              <Link
                href="/contact"
                className="hover:text-red-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>

          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-28">
          <PayPalProvider>
            {children}
          </PayPalProvider>
        </main>

      </body>
    </html>
  );
}
