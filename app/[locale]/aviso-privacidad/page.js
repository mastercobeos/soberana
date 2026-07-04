import LegalDocument from '@/components/LegalDocument/LegalDocument';
import { privacySections } from '@/lib/legal';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Aviso de privacidad' : 'Privacy notice',
    description: isEs
      ? 'Aviso de privacidad de Soberana Solutions conforme a obligaciones generales de protección de datos personales en México.'
      : 'Soberana Solutions privacy notice in line with general personal data protection obligations in Mexico.'
  };
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const copy = privacySections(locale);
  return (
    <main>
      <LegalDocument {...copy} />
    </main>
  );
}
