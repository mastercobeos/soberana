import { LOCALES } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';

const PAGES = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/paneles', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/baterias', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/paquetes', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/inteligentes', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/nosotros', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/envios-garantia', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/aviso-privacidad', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terminos-condiciones', priority: 0.3, changeFrequency: 'yearly' }
];

export default function sitemap() {
  return PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: LOCALES.reduce((acc, l) => {
          acc[l] = `${SITE_URL}/${l}${page.path}`;
          return acc;
        }, {})
      }
    }))
  );
}
