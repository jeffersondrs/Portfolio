import Navegation from '@/components/Navegation';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeProvider';
import Head from 'next/head';

export const metadata = {
  title: 'Jefferson Santos',
  description: 'Web Site Pessoal, desenvolvido com Nextjs ❤️',
};

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
      </Head>
      <body className={`${poppins.className}`}>
        <ThemeProvider>
          <Navegation>{children}</Navegation>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
