import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Medium.ttf",
    },
  ],
  variable: "--font-satoshi",
});

const messapia = localFont({
  src: [
    {
      path: "../fonts/Messapia-Bold.otf",
    },
  ],
  variable: "--font-messapia",
});

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
      <body className={`${messapia.variable} ${satoshi.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
