'use client';

import { type ReactNode, useRef, useState } from 'react';
import { Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react';
import type { Swiper, SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import * as Shared from '@/shared';

import 'swiper/css';

const swiperOption: SwiperOptions = {
  modules: [Autoplay],
  autoplay: { delay: 2400, disableOnInteraction: false },
  loop: true,
};

const slideInfo: Array<[number, string, string]> = [
  [1, '구름톤 트레이닝 모집', 'https://kdt.goorm.io/'],
  [2, 'VOTalks 배너 광고 구함', '/'],
];

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
          <SwiperSlide
            key={i}
            className="!flex !h-[32vw] max-h-80 min-h-40 !w-full items-center justify-center overflow-hidden xs:min-h-48 sm:min-h-60"
          >
            <a href={link} target="_blank" className="block h-full w-full">
              <img
                src={`/img/ad/votalks-ad-${i}.jpg`}
                className="h-full w-full object-cover"
                alt={alt}
              />
            </a>
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <p className="absolute bottom-3 right-3 z-20 flex items-center justify-center gap-1 rounded bg-black/30 p-1 text-white">
        <SwiperBtn label="이전 슬라이드" onClick={() => swiperRef.current?.slidePrev()}>
          <Shared.ui.IconArrowLeft />
        </SwiperBtn>
        <SwiperPauseAndPlayBtn
          play={() => swiperRef.current?.autoplay.resume()}
          pause={() => swiperRef.current?.autoplay.pause()}
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
      label="슬라이드 자동재생 재생"
      onClick={() => {
        play();
        setIsPaused(false);
      }}
    >
      <Shared.ui.IconPlay />
    </SwiperBtn>
  ) : (
    <SwiperBtn
      label="슬라이드 자동재생 멈춤"
      onClick={() => {
        pause();
        setIsPaused(true);
      }}
    >
      <Shared.ui.IconPause />
    </SwiperBtn>
  );
}
