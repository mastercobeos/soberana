import { notFound } from 'next/navigation';
import Hero from '@/components/Hero/Hero';
import CategoriesSection from '@/components/CategoriesSection/CategoriesSection';
import ModelsSection from '@/components/ModelsSection/ModelsSection';
import Recommendations from '@/components/Recommendations/Recommendations';
import { isLocale } from '@/lib/i18n';
import { getDataForLocale, getMessages } from '@/lib/utils';

export default async function HomePage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const data = getDataForLocale(locale);
  const messages = getMessages(locale);

  return (
    <main>
      <Hero locale={locale} />
      <CategoriesSection locale={locale} data={data} messages={messages} />
      <ModelsSection data={data} messages={messages} />
      <Recommendations data={data} messages={messages} />
    </main>
  );
}
