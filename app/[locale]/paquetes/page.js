import SubpageHero from '@/components/SubpageHero/SubpageHero';
import ProductCatalog from '@/components/ProductCatalog/ProductCatalog';
import { bundles } from '@/lib/products';
import { categoryPagesData } from '@/lib/utils';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Paquetes' : 'Bundles',
    description: isEs
      ? 'Paquetes EcoFlow con combinaciones listas para respaldo, carga solar y uso residencial.'
      : 'EcoFlow bundles combining backup, solar charging, and residential use.'
  };
}

export default async function PaquetesPage({ params }) {
  const { locale } = await params;
  const copy = categoryPagesData(locale).paquetes;
  const isEs = locale === 'es';

  return (
    <main>
      <SubpageHero
        locale={locale}
        copy={copy}
        visual="bundles"
        secondaryHref={`/${locale}/paneles`}
        primaryHref="#products"
      />
      <ProductCatalog
        locale={locale}
        products={bundles}
        sectionId="products"
        kicker={isEs ? 'Ejemplos de paquetes' : 'Bundle examples'}
        title={isEs ? 'Combos disponibles' : 'Available combos'}
        desc={
          isEs
            ? 'Paquetes pensados para explicar rápido qué puede resolver cada combinación. La compatibilidad exacta debe validarse antes de cerrar venta.'
            : 'Bundles designed to quickly explain what each combination can solve. Exact compatibility should be validated before closing the sale.'
        }
        verMasLabel={isEs ? 'Ver más' : 'See more'}
      />
    </main>
  );
}
