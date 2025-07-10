import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/index.scss';

export const metadata = {
  icons: {
    icon: '/favicon.svg', // TODO fix icon display
  },
  title: 'Mini-Blog',
  description: 'A small multilingual blog built with Next.js (App Router)',
  authors: [
    { name: 'Valentyn Mostovyi', url: 'https://github.com/Valentyn-M' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="wrapper">
          <Header />
          {/* TODO Is it necerssery "React.lazy() + Suspense" for pages */}
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
