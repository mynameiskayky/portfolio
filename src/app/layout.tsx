import type { Metadata } from "next";
import ClashDisplay from "next/font/local";
import "./globals.css";

const font = ClashDisplay({ src: "../fonts/ClashDisplay-Regular.woff2" });

export const metadata: Metadata = {
  title: "portfolio",
  description: "welcome to my part of the internet universe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
