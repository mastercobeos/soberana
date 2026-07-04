import './globals.css';

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
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
