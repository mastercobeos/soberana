import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getCartMessages } from '@/lib/cartMessages';
import ThankYou from '@/components/Checkout/ThankYou';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCartMessages(locale);
  return { title: t.thanksTitle, robots: { index: false } };
}

export default async function GraciasPage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ThankYou locale={locale} />;
}
