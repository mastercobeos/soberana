import { notFound } from 'next/navigation';
import Link from 'next/link';
import PackageCard from '@/components/PackageCard/PackageCard';
import ProductCard from '@/components/ProductCard/ProductCard';
import JsonLd from '@/components/Seo/JsonLd';
import {
  allProducts,
  findProductBySlug,
  localizeProduct,
  productCategory
} from '@/lib/products';
import { LOCALES } from '@/lib/i18n';
import { SITE_URL, productJsonLd, breadcrumbJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allProducts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) return {};
  const p = localizeProduct(product, locale);
  const isEs = locale === 'es';
  const price = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(product.priceCents / 100);
  const description =
    p.description ||
    (typeof p.intro === 'object' ? p.intro[locale] : p.intro) ||
    (isEs
      ? `${p.title} disponible en Soberana Solutions. Precio ${price} MXN, envío a todo México.`
      : `${p.title} available at Soberana Solutions. Price ${price} MXN, shipping across Mexico.`);
  const path = `/producto/${slug}`;
  return {
    title: p.title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: LOCALES.reduce((acc, l) => {
        acc[l] = `/${l}${path}`;
        return acc;
      }, {})
    },
    openGraph: {
      title: `${p.title} | Soberana Solutions`,
      description,
      url: `${SITE_URL}/${locale}${path}`,
      images: [{ url: `${SITE_URL}${p.image}` }],
      type: 'website'
    }
  };
}

export default async function ProductPage({ params }) {
  const { locale, slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) notFound();

  const isEs = locale === 'es';
  const cat = productCategory(slug);
  const p = localizeProduct(product, locale);
  const path = `/producto/${slug}`;
  const catName = isEs ? cat.es : cat.en;

  const trail = [
    { name: 'Soberana Solutions', path: '' },
    ...(cat.path ? [{ name: catName, path: cat.path }] : []),
    { name: p.title, path }
  ];

  return (
    <main>
      <JsonLd data={productJsonLd({ product, locale, path })} />
      <JsonLd data={breadcrumbJsonLd({ locale, trail })} />
      <section className="section">
        <div className="container">
          <nav aria-label="Breadcrumb" className="kicker" style={{ marginBottom: '18px' }}>
            {cat.path ? (
              <Link href={`/${locale}${cat.path}`}>{catName}</Link>
            ) : (
              <Link href={`/${locale}`}>Soberana Solutions</Link>
            )}
            <span aria-hidden="true"> / </span>
            <span>{p.title}</span>
          </nav>
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            {cat.isBundle ? (
              <PackageCard product={product} locale={locale} />
            ) : (
              <ProductCard product={product} locale={locale} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
