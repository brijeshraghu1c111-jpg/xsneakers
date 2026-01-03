import "./globals.css";

export const metadata = {
  title: "X SNEAKERS",
  description: "Crafted for the Night"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
