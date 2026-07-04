import SubpageHero from '@/components/SubpageHero/SubpageHero';
import ProductCatalog from '@/components/ProductCatalog/ProductCatalog';
import { smartProducts } from '@/lib/products';
import { categoryPagesData } from '@/lib/utils';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Inteligentes' : 'Smart',
    description: isEs
      ? 'Catálogo de equipos inteligentes EcoFlow con descripción, precios y uso recomendado.'
      : 'Catalog of EcoFlow smart equipment with descriptions, pricing, and recommended use.'
  };
}

export default async function InteligentesPage({ params }) {
  const { locale } = await params;
  const copy = categoryPagesData(locale).inteligentes;
  const isEs = locale === 'es';

  return (
    <main>
      <SubpageHero
        locale={locale}
        copy={copy}
        visual="smart"
        featureVariant="smartVariant"
        secondaryHref={`/${locale}/baterias`}
        primaryHref="#products"
      />
      <ProductCatalog
        locale={locale}
        products={smartProducts}
        sectionId="products"
        kicker={isEs ? 'EcoFlow inteligentes' : 'EcoFlow smart lineup'}
        title={isEs ? 'Modelos disponibles' : 'Available models'}
        desc={
          isEs
            ? 'Estos productos son accesorios y equipos especializados: algunos administran energía del hogar, otros cargan desde vehículo o agregan climatización y refrigeración portátil.'
            : 'These products are specialized accessories and equipment: some manage home energy, others charge from a vehicle, and some add portable climate or refrigeration.'
        }
        verMasLabel={isEs ? 'Ver más' : 'See more'}
      />
    </main>
  );
}
