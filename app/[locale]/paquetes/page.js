import SubpageHero from '@/components/SubpageHero/SubpageHero';
import PackageCard from '@/components/PackageCard/PackageCard';
import { bundles } from '@/lib/products';
import { categoryPagesData } from '@/lib/utils';
import JsonLd from '@/components/Seo/JsonLd';
import { pageAlternates, productListJsonLd } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Paquetes' : 'Bundles',
    description: isEs
      ? 'Paquetes EcoFlow con combinaciones listas para respaldo, carga solar y uso residencial.'
      : 'EcoFlow bundles combining backup, solar charging, and residential use.',
    alternates: pageAlternates(locale, '/paquetes')
  };
}

export default async function PaquetesPage({ params }) {
  const { locale } = await params;
  const copy = categoryPagesData(locale).paquetes;
  const isEs = locale === 'es';

  return (
    <main>
      <JsonLd
        data={productListJsonLd({
          products: bundles,
          locale,
          path: '/paquetes',
          name: isEs ? 'Paquetes' : 'Bundles'
        })}
      />
      <SubpageHero
        locale={locale}
        copy={copy}
        visual="bundlesReal"
        secondaryHref={`/${locale}/paneles`}
        primaryHref="#products"
      />
      <section className="section" id="products">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="kicker">{isEs ? 'Combos solares' : 'Solar combos'}</div>
              <h2>{isEs ? 'Combos disponibles' : 'Available combos'}</h2>
            </div>
            <p className="sectionDesc">
              {isEs
                ? 'Equipo EcoFlow más su panel correspondiente, con precio combinado, tiempo de carga solar y autonomía estimada según los dispositivos conectados.'
                : 'EcoFlow equipment plus its matching panel, with combined price, solar charge time, and estimated runtime based on the connected devices.'}
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
              gap: '18px'
            }}
          >
            {bundles.map((p) => (
              <PackageCard key={p.slug} product={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
