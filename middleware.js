import { NextResponse } from 'next/server';

const LOCALES = ['en', 'es'];
const DEFAULT_LOCALE = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // No tocar archivos estáticos servidos desde public/ (llevan extensión).
  if (pathname.includes('.')) return NextResponse.next();

  // Las rutas de API no llevan locale (checkout, webhooks de Stripe).
  if (pathname.startsWith('/api')) return NextResponse.next();

  // Rutas de metadata generadas por Next (imagen OG) tampoco llevan locale.
  if (pathname.startsWith('/opengraph-image')) return NextResponse.next();

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const accept = request.headers.get('accept-language') || '';
  const preferred = accept.toLowerCase().startsWith('es') ? 'es' : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets/).*)'
  ]
};
