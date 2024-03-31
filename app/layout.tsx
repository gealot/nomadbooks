import type { Metadata } from 'next';
import { Noto_Sans_KR, Ubuntu } from 'next/font/google';
import '@/styles/global.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from 'next-themes';

const noto = Noto_Sans_KR({ subsets: ['latin'] });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '500', '700'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: {
    template: '%s | NomadBooks',
    default: 'NomadBooks',
  },
  description: '책을 사랑하는 사람들의 공간 NomadBooks, 뉴욕 타임즈 추천 베스트 셀러를 제공합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${ubuntu.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
