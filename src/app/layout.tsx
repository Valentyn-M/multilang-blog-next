import { i18n } from '@/lib/i18n-config';
import { Inter } from 'next/font/google';

export const metadata = { title: 'Mini‑Blog' };

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={i18n.defaultLocale} className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
