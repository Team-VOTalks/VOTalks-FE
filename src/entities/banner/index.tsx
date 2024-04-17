'use client';

import { type ReactNode, useRef, useState } from 'react';
import { Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react';
import type { Swiper, SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import * as Shared from '@/shared';

import 'swiper/css';

const swiperOption: SwiperOptions = {
  modules: [Autoplay],
  autoplay: { delay: 3600, disableOnInteraction: false },
  loop: true,
};

const slideInfo: Array<[number, string, string]> = [
  [1, '구름톤 트레이닝 모집', 'https://kdt.goorm.io/'],
];

const styleOfSlide =
  '!flex !h-[32vw] max-h-80 min-h-40 !w-full items-center justify-center overflow-hidden xs:min-h-48 sm:min-h-60';

export default function Banner() {
  const swiperRef = useRef<Swiper | null>(null);

  return (
    <div className="relative block">
      <SwiperWrapper
        {...swiperOption}
        className="relative block overflow-hidden rounded-lg border bg-gray-100"
        onSwiper={swiper => (swiperRef.current = swiper)}
      >
        {slideInfo.map(([i, alt, link]) => (
          <SwiperSlide key={i} className={styleOfSlide}>
            <a href={link} target="_blank" className="block h-full w-full">
              <img
                src={`/img/ad/votalks-ad-${i}.jpg`}
                className="h-full w-full object-cover"
                alt={alt}
              />
            </a>
          </SwiperSlide>
        ))}
        <SwiperSlide className={styleOfSlide}>
          <div className="flex h-full w-full select-none flex-col items-center justify-center bg-gray-000 pb-3 text-base lg:pb-6">
            <div className="mb-3 flex items-center justify-center text-3xl text-blue-500 xs:text-4xl sm:mb-4 sm:text-5xl md:mb-6 md:text-6xl lg:mb-8">
              <Shared.ui.CheckLogo />
            </div>
            <h2 className="whitespace-nowrap text-lg font-bold xs:text-xl sm:mb-1 sm:text-2xl md:mb-2 md:text-3xl lg:mb-3 lg:text-4xl">
              이 자리에 배너 걸어드립니다
            </h2>
            <p className="whitespace-nowrap text-sm text-gray-500 sm:text-base md:text-xl lg:text-2xl">
              {`문의: ${Shared.constants.ADMIN_EMAIL}`}
            </p>
          </div>
        </SwiperSlide>
      </SwiperWrapper>
      <p className="absolute bottom-3 right-3 z-20 flex items-center justify-center gap-1 rounded bg-black/30 p-1 text-white">
        <SwiperBtn label="이전 슬라이드" onClick={() => swiperRef.current?.slidePrev()}>
          <Shared.ui.IconArrowLeft />
        </SwiperBtn>
        <SwiperPauseAndPlayBtn
          play={() => swiperRef.current?.autoplay.start()}
          pause={() => swiperRef.current?.autoplay.stop()}
        />
        <SwiperBtn label="다음 슬라이드" onClick={() => swiperRef.current?.slideNext()}>
          <Shared.ui.IconArrowRight />
        </SwiperBtn>
      </p>
    </div>
  );
}

function SwiperBtn({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children?: ReactNode;
}) {
  return (
    <button type="button" title={label} className="relative p-1" onClick={onClick}>
      {children}
      <span className="blind">{label}</span>
    </button>
  );
}

function SwiperPauseAndPlayBtn({ pause, play }: { pause: () => void; play: () => void }) {
  const [isPaused, setIsPaused] = useState(false);

  return isPaused ? (
    <SwiperBtn
      label="슬라이드 자동재생: 재생"
      onClick={() => {
        play();
        setIsPaused(false);
      }}
    >
      <Shared.ui.IconPlay />
    </SwiperBtn>
  ) : (
    <SwiperBtn
      label="슬라이드 자동재생: 멈춤"
      onClick={() => {
        pause();
        setIsPaused(true);
      }}
    >
      <Shared.ui.IconPause />
    </SwiperBtn>
  );
}
