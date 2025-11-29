import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kayky Vieira - Tech Lead & Front-end Architect',
  description:
    'Tech Lead & Front-end Architect. Lidero times, desenho arquitetura e trago clareza para sistemas que não podem falhar.',
  keywords: [
    'Tech Lead',
    'Front-end Architect',
    'React',
    'Next.js',
    'TypeScript',
    'Software Engineer',
  ],
  authors: [{ name: 'Kayky Vieira' }],
  creator: 'Kayky Vieira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kaykyvieira.com',
    title: 'Kayky Vieira - Tech Lead & Front-end Architect',
    description:
      'Tech Lead & Front-end Architect. Lidero times, desenho arquitetura e trago clareza para sistemas que não podem falhar.',
    siteName: 'Kayky Vieira Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kayky Vieira - Tech Lead & Front-end Architect',
    description:
      'Tech Lead & Front-end Architect. Lidero times, desenho arquitetura e trago clareza para sistemas que não podem falhar.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
