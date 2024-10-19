import { Navegation, Footer } from '@/components/index';
import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jefferson Santos',
  description: 'Web Site Pessoal, desenvolvido com Nextjs ❤️',
  creator: 'Jefferson Santos',
  keywords: [
    'Nextjs',
    'React',
    'Tailwindcss',
    'TypeScript',
    'SEO',
    'Jefferson Santos',
    'Web Site Pessoal',
    'Web Site',
    'Pessoal',
  ],
  icons: [
    {
      href: '/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      href: '/favicon.ico',
      rel: 'shortcut icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
  ],
  robots: {
    googleBot: 'index, follow',
    'max-snippet': 50,
    'max-image-preview': 'large',
  },
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
      <body
        className={`${poppins.className} flex flex-col justify-center items-center`}
      >
        <ThemeProvider>
          <Navegation>{children}</Navegation>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
