import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'ADECRIA',
  description: 'ADECRIA Brasil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <Container>{children}</Container>
    </html>
  );
}
