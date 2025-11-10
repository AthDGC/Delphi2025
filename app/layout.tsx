import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Diachrony Workshop 2025 | Delphi',
  description: 'An invitation-only workshop on Corpus-Based Approaches to Text Types and Language Change in Delphi, November 27-29, 2025, Greece. Funded by HFRI.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
  openGraph: {
    title: 'Digital Diachrony Workshop 2025 | Delphi',
    description: 'An invitation-only workshop bringing together specialists in diachronic linguistics',
    url: 'https://athdiacorpus.github.io/delphi2025',
    siteName: 'Digital Diachrony Workshop 2025',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
