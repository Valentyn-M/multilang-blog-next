import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import {
  SITE_AUTHOR_NAME,
  SITE_AUTHOR_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from '@/constants/site.config';
import '@/styles/index.scss';
import { Inter } from 'next/font/google';

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: `${SITE_TITLE}`,
  description: `${SITE_DESCRIPTION}`,
  authors: [{ name: `${SITE_AUTHOR_NAME}`, url: `${SITE_AUTHOR_URL}` }],
};

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const svgIcon = '/svgSprite.svg';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head></head>
      <body>
        <div className="wrapper">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
