import { notFound } from 'next/navigation';
import LegalDocument from '@/components/LegalDocument/LegalDocument';
import { aboutSections } from '@/lib/companyPages';
import { isLocale } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Nosotros' : 'About us',
    description: isEs
      ? 'Soberana Solutions: venta y asesoría de equipos de energía EcoFlow en México, con entrega en todo el país y 5 años de garantía.'
      : 'Soberana Solutions: EcoFlow energy equipment sales and advice in Mexico, with nationwide delivery and a 5-year warranty.',
    alternates: pageAlternates(locale, '/nosotros')
  };
}

export default async function NosotrosPage({ params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = aboutSections(locale);
  return (
    <main>
      <LegalDocument {...copy} />
    </main>
  );
}
