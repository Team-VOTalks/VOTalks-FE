import type { Metadata } from 'next';
import { Footer, Header } from '@/widgets';
import initMSW from '@/__mocks__';

import './static/style/index.css';
import './static/style/font.css';

if (process.env.NODE_ENV !== 'production') {
  initMSW();
}

export const metadata: Metadata = {
  title: 'VOTalks : 익명 투표 커뮤니티 (Vote & Talks)',
  description:
    '밖에서는 말하지 못했던 여러분만의 의견을 익명성을 이용하여 솔직 담백하게 표출하고 대중들의 생각을 들어보세요!',
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
    '익명 커뮤니티 추천',
    '익명 커뮤',
    '익명 커뮤 추천',
  ],
  openGraph: {
    type: 'website',
    siteName: 'VOTalks',
    locale: 'ko_KR',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <script src="/script/theme.js"></script>
        <Header />
        <section id="contents" className="mx-auto mb-auto h-auto w-full max-w-5xl pt-14 sm:pt-16">
          {children}
          <div id="modal-root"></div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
