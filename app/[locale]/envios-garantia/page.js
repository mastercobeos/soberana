import { notFound } from 'next/navigation';
import LegalDocument from '@/components/LegalDocument/LegalDocument';
import { shippingSections } from '@/lib/companyPages';
import { isLocale } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Envíos y garantía' : 'Shipping and warranty',
    description: isEs
      ? 'Entrega bajo pedido en todo México, 5 años de garantía EcoFlow y pagos seguros con Stripe.'
      : 'On-order delivery across Mexico, 5-year EcoFlow warranty, and secure payments with Stripe.',
    alternates: pageAlternates(locale, '/envios-garantia')
  };
}

export default async function EnviosGarantiaPage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = shippingSections(locale);
  return (
    <main>
      <LegalDocument {...copy} />
    </main>
  );
}
