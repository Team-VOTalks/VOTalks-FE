'use client';

import type { UseFormRegister } from 'react-hook-form';
import type { CreateVoteFormValues } from '../types';
import * as Shared from '@/shared';

export default function VoteFormCategory({
  currentCategory,
  register,
}: {
  currentCategory: string;
  register: UseFormRegister<CreateVoteFormValues>;
}) {
  return (
    <ul className="mb-3 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-start sm:justify-start">
      {Object.entries(Shared.constants.COMMUNITY_CATEGORIES).map(([category, name]) => (
        <li key={category} className="relative">
          <label
            tabIndex={0}
            className={`
              ${currentCategory === category ? 'border-blue-200 bg-blue-100 text-blue-500' : 'border-gray-100 bg-gray-100 text-gray-700'}
              block h-auto w-full cursor-pointer rounded border p-2 text-center text-sm font-medium transition-colors sm:min-w-20
            `}
            onKeyDown={e => {
              if (e.key === 'Enter') return e.currentTarget.click();
            }}
          >
            <input
              {...register('category', {
                required: '카테고리를 선택해주세요',
              })}
              type="radio"
              className="invisible absolute opacity-0"
              tabIndex={-1}
              value={category}
              checked={currentCategory === category}
            />
            <span>{name}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
