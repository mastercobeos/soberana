import { notFound } from 'next/navigation';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';
import { LOCALES, isLocale } from '@/lib/i18n';
import { getMessages } from '@/lib/utils';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);
  return {
    title: { default: t.title, template: `%s · Soberana Solutions` },
    description: t.meta,
    alternates: {
      languages: LOCALES.reduce((acc, l) => {
        acc[l] = `/${l}`;
        return acc;
      }, {})
    }
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <Nav locale={locale} />
      {children}
      <Footer locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
