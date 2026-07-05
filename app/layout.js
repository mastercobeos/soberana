import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-button',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://soberana.example.com'),
  title: {
    default: 'Soberana Solutions',
    template: '%s · Soberana Solutions'
  },
  description: 'EcoFlow catalog for backup power, portable energy and solar.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
