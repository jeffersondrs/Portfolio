import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeProvider';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Jefferson Santos - Portfólio',
  description: 'Portfólio profissional desenvolvido com Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
