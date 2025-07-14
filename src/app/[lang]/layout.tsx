import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { SITE_AUTHOR_URL, SITE_TITLE } from '@/constants/site.config';
import { getDictionary } from '@/lib/getDictionary';
import { i18n, Locale } from '@/lib/i18n-config';
import '@/styles/index.scss';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

// 1. SSG for root routes /en, /uk
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

// 2. SEO-Metadata, localized
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

// 3. Root Layout
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const svgIcon = '/svgSprite.svg';

export interface RootLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ lang: Locale }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={inter.className}>
      <body>
        <div className="wrapper">
          <Header dict={dict} lang={lang} />
          <main className="main">{children}</main>
          <Footer dict={dict} />
        </div>
      </body>
    </html>
  );
}
