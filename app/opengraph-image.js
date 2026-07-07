import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Soberana Solutions — Energía de respaldo EcoFlow en México';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(315deg, #1a6b3f 0%, #0a3221 45%, #040906 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            color: '#57e389',
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}
        >
          Soberana Solutions
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: 950
          }}
        >
          Energía de respaldo para tu casa o negocio
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 30,
            fontSize: 32,
            color: 'rgba(255,255,255,0.75)'
          }}
        >
          Estaciones EcoFlow · Paneles solares · Baterías · Entrega en México
        </div>
      </div>
    ),
    size
  );
}
