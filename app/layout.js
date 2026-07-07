import { Space_Grotesk, Archivo } from 'next/font/google';
import Analytics from '@/components/Analytics/Analytics';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-button',
  display: 'swap'
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-numbers',
  display: 'swap'
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Soberana Solutions',
    template: '%s · Soberana Solutions'
  },
  description: 'EcoFlow catalog for backup power, portable energy and solar.',
  openGraph: {
    siteName: 'Soberana Solutions',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export const viewport = {
  themeColor: '#06100c'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
