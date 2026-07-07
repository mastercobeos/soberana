import SubpageHero from '@/components/SubpageHero/SubpageHero';
import ProductCatalog from '@/components/ProductCatalog/ProductCatalog';
import { solarPanels } from '@/lib/products';
import { categoryPagesData } from '@/lib/utils';
import JsonLd from '@/components/Seo/JsonLd';
import { pageAlternates, productListJsonLd } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Paneles solares' : 'Solar panels',
    description: isEs
      ? 'Catálogo de paneles solares EcoFlow con precios, precios de distribuidor y opciones por potencia.'
      : 'Catalog of EcoFlow solar panels with pricing, dealer pricing, and power options.',
    alternates: pageAlternates(locale, '/paneles')
  };
}

export default async function PanelesPage({ params }) {
  const { locale } = await params;
  const copy = categoryPagesData(locale).paneles;
  const isEs = locale === 'es';

  return (
    <main>
      <JsonLd
        data={productListJsonLd({
          products: solarPanels,
          locale,
          path: '/paneles',
          name: isEs ? 'Paneles solares' : 'Solar panels'
        })}
      />
      <SubpageHero
        locale={locale}
        copy={copy}
        visual="panels"
        secondaryHref={`/${locale}/#modelos`}
        primaryHref="#products"
      />
      <ProductCatalog
        locale={locale}
        products={solarPanels}
        sectionId="products"
        kicker={isEs ? 'Paneles solares' : 'Solar panels'}
        title={isEs ? 'Modelos disponibles' : 'Available models'}
        desc={
          isEs
            ? 'Lista preparada con precio. Los importes están basados en la referencia compartida y pueden actualizarse desde esta misma página.'
            : 'List with pricing. Amounts are based on shared reference values and can be updated from this same page.'
        }
      />
    </main>
  );
}
