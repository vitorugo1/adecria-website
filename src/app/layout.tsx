import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'ADECRIA',
  description: 'ADECRIA Brasil',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap', // Garante que a fonte seja carregada de forma otimizada
  variable: '--font-montserrat', // Define uma variável CSS para o Tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
