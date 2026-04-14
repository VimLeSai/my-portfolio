import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
// import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

export const metadata: Metadata = {
  title: 'Vimal Desai | Senior Engineer',
  description: 'Crafting Monolithic Digital Experiences',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
