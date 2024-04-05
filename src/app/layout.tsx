import type { Metadata } from 'next';
import './index.css';
import { Header } from '@/widgets';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'VOTalks : 익명 투표 커뮤니티 (Vote & Talks)',
  description:
    '익명성을 이용하여 솔직 담백하게 여러분만의 의견을 표출하고 대중들의 의견을 들어보세요!',
  keywords: [
    'VOTalks',
    'votalks',
    'vote & talks',
    '익명 투표',
    '익명 투표 사이트',
    '보톡스',
    '보톡스 커뮤니티',
    'ㅂㅌㅅ',
    '커뮤니티',
    '익명 커뮤니티',
    '익명 커뮤',
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <Header />
        <section id="contents" className="m-auto min-h-full max-w-5xl pb-12 pt-14 sm:pt-16">
          {children}
        </section>
      </body>
    </html>
  );
}

const pretendard = localFont({
  src: [
    {
      path: './font/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});
