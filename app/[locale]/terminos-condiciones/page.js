import LegalDocument from '@/components/LegalDocument/LegalDocument';
import { termsSections } from '@/lib/legal';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Términos y condiciones' : 'Terms and conditions',
    description: isEs
      ? 'Términos y condiciones de uso del catálogo comercial de Soberana Solutions.'
      : 'Terms and conditions of use for the Soberana Solutions commercial catalog.'
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;
  const copy = termsSections(locale);
  return (
    <main>
      <LegalDocument {...copy} />
    </main>
  );
}
