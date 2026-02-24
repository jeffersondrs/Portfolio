import './globals.css';
import { Metadata } from 'next';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/Footer';

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
      <body className="min-h-screen flex flex-col w-full">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}