import { SITE_URL } from '@/lib/seo';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/en/gracias', '/es/gracias']
    },
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
