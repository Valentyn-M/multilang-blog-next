import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { SITE_AUTHOR_URL, SITE_TITLE } from '@/constants/site.config';
import { getDictionary } from '@/lib/getDictionary';
import { i18n, Locale } from '@/lib/i18n-config';
import '@/styles/index.scss';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: SITE_TITLE,
    description: dict.siteDescription,
    authors: [{ name: dict.autor, url: SITE_AUTHOR_URL }],
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', type: 'image/x-icon' },
      ],
    },
  };
}

export const svgIcon = '/svgSprite.svg';

export interface LayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ lang: Locale }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="wrapper">
      <Header dict={dict} lang={lang} />
      <main className="main">{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
