import { notFound } from 'next/navigation';
import Hero from '@/components/Hero/Hero';
import CategoriesSection from '@/components/CategoriesSection/CategoriesSection';
import ModelsSection from '@/components/ModelsSection/ModelsSection';
import Recommendations from '@/components/Recommendations/Recommendations';
import { isLocale } from '@/lib/i18n';
import { getDataForLocale, getMessages } from '@/lib/utils';
import { stations } from '@/lib/products';
import JsonLd from '@/components/Seo/JsonLd';
import { organizationJsonLd, pageAlternates, productListJsonLd } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { alternates: pageAlternates(locale, '') };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const data = getDataForLocale(locale);
  const messages = getMessages(locale);

  return (
    <main>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={productListJsonLd({
          products: stations,
          locale,
          path: '',
          name: locale === 'es' ? 'Estaciones de energía EcoFlow' : 'EcoFlow power stations'
        })}
      />
      <Hero locale={locale} />
      <CategoriesSection locale={locale} data={data} messages={messages} />
      <ModelsSection locale={locale} data={data} messages={messages} />
      <Recommendations data={data} messages={messages} />
    </main>
  );
}
