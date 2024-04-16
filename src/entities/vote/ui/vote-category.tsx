'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import * as Shared from '@/shared';

import 'swiper/css';

const swiperOption: SwiperOptions = {
  spaceBetween: 12,
  slidesPerView: 'auto',
  grabCursor: true,
  freeMode: true,
};

const categoryMap = [['all', '전체'], ...Object.entries(Shared.constants.COMMUNITY_CATEGORIES)];

export default function VoteCategory({
  currentCategory,
  setCategory,
}: {
  currentCategory: string;
  setCategory: (category: string) => void;
}) {
  return (
    <Swiper {...swiperOption}>
      {categoryMap.map(([category, name]) => (
        <SwiperSlide key={category} className="!w-auto">
          <VoteCategoryBtn
            category={category}
            name={name}
            isActive={currentCategory === category}
            setCategory={setCategory}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function VoteCategoryBtn({
  name,
  category,
  isActive,
  setCategory,
}: {
  name: string;
  category: string;
  isActive?: boolean;
  setCategory: (category: string) => void;
}) {
  return (
    <button
      type="button"
      className={`
        ${isActive ? 'border-blue-200 bg-blue-100 text-blue-500' : 'border-gray-100 bg-gray-100'}
        rounded-lg border px-5 py-2 text-sm sm:text-base
      `}
      title={`카테고리 변경 : ${name}`}
      onClick={() => setCategory(category)}
    >
      {name}
    </button>
  );
}
