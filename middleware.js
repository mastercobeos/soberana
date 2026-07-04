import { NextResponse } from 'next/server';

const LOCALES = ['en', 'es'];
const DEFAULT_LOCALE = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

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
    // Aplica a todo excepto assets estáticos, _next, api, y archivos con extensión.
    '/((?!_next/static|_next/image|assets|favicon.ico|.*\\..*).*)'
  ]
};
