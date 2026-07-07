import SubpageHero from '@/components/SubpageHero/SubpageHero';
import ProductCatalog from '@/components/ProductCatalog/ProductCatalog';
import { batteries } from '@/lib/products';
import { categoryPagesData } from '@/lib/utils';
import JsonLd from '@/components/Seo/JsonLd';
import { pageAlternates, productListJsonLd } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Baterías' : 'Batteries',
    description: isEs
      ? 'Catálogo de baterías EcoFlow con precios.'
      : 'Catalog of EcoFlow batteries with pricing.',
    alternates: pageAlternates(locale, '/baterias')
  };
}

export default async function BateriasPage({ params }) {
  const { locale } = await params;
  const copy = categoryPagesData(locale).baterias;
  const isEs = locale === 'es';

  return (
    <main>
      <JsonLd
        data={productListJsonLd({
          products: batteries,
          locale,
          path: '/baterias',
          name: isEs ? 'Baterías' : 'Batteries'
        })}
      />
      <SubpageHero
        locale={locale}
        copy={copy}
        visual="batteries"
        featureVariant="batteryVariant"
        secondaryHref={`/${locale}/paneles`}
        primaryHref="#products"
      />
      <ProductCatalog
        locale={locale}
        products={batteries}
        sectionId="products"
        kicker={isEs ? 'Baterías EcoFlow' : 'EcoFlow batteries'}
        title={isEs ? 'Modelos disponibles' : 'Available models'}
        desc={
          isEs
            ? 'Baterías de expansión y respaldo con precio. Revisa compatibilidad antes de recomendar cada modelo.'
            : 'Expansion and backup batteries with pricing. Verify compatibility before recommending each model.'
        }
      />
    </main>
  );
}
