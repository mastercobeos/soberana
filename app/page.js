import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/lib/i18n';

export default async function RootPage() {
  const headerList = await headers();
  const accept = headerList.get('accept-language') || '';
  const preferred = accept.toLowerCase().startsWith('es') ? 'es' : DEFAULT_LOCALE;
  redirect(`/${preferred}`);
}
