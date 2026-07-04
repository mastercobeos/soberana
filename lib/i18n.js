export const LOCALES = ['en', 'es'];
export const DEFAULT_LOCALE = 'en';

export function isLocale(value) {
  return LOCALES.includes(value);
}

export function otherLocale(locale) {
  return locale === 'es' ? 'en' : 'es';
}

// Localized paths (kept identical for both locales for now,
// the [locale] segment handles routing).
export const SUBPAGES = [
  'paneles',
  'baterias',
  'paquetes',
  'inteligentes',
  'aviso-privacidad',
  'terminos-condiciones'
];
