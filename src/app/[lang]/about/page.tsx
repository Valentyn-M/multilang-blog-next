import AboutContent from '@/components/AboutContent/AboutContent';
import { SITE_TITLE } from '@/constants/site.config';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${SITE_TITLE} | ${dict.about}`,
    description: dict.aboutDescription,
  };
}

export interface AboutProps {
  readonly params: Promise<{ lang: Locale }>;
}

export default async function About({ params }: AboutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboutContent dict={dict} />;
}
