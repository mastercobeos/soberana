import { LOCALES } from './i18n';
import { localizeProduct } from './products';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Canonical + hreflang alternates for a page. `path` is the locale-less
// route, e.g. '/paneles' or '' for the home page.
export function pageAlternates(locale, path = '') {
  return {
    canonical: `/${locale}${path}`,
    languages: LOCALES.reduce((acc, l) => {
      acc[l] = `/${l}${path}`;
      return acc;
    }, {})
  };
}

export function productListJsonLd({ products, locale, path, name }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: products.map((product, index) => {
      const p = localizeProduct(product, locale);
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: p.title,
          image: `${SITE_URL}${p.image}`,
          description: p.description || undefined,
          url: `${SITE_URL}/${locale}${path}`,
          offers: {
            '@type': 'Offer',
            price: (product.priceCents / 100).toFixed(2),
            priceCurrency: 'MXN',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/${locale}${path}`
          }
        }
      };
    })
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'Soberana Solutions',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    telephone: '+52 984 228 1177',
    areaServed: { '@type': 'Country', name: 'México' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52 984 228 1177',
      contactType: 'sales',
      availableLanguage: ['es', 'en']
    }
  };
}
