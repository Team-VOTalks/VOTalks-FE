'use client';

import { useState } from 'react';
import * as Shared from '@/shared';

export default function CreateVoteForm() {
  const [currentCategory, setCurrentCategory] = useState('');
  const [optionInput, setOptionInput] = useState<string[]>([]);

  return (
    <div className="mx-auto flex w-full flex-grow pt-5">
      <form className="flex flex-grow flex-col items-stretch justify-between">
        <div className="mb-auto flex-grow">
          <Shared.ui.FormFieldset>
            <Shared.ui.FormLabel htmlFor="category">투표 카테고리</Shared.ui.FormLabel>
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
                      type="radio"
                      name="category"
                      className="invisible absolute opacity-0"
                      tabIndex={-1}
                      value={category}
                      checked={currentCategory === category}
                      onChange={() => setCurrentCategory(category)}
                    />
                    <span>{name}</span>
                  </label>
                </li>
              ))}
            </ul>
            <Shared.ui.GuideTxt content="카테고리는 서비스 정책에 따라 이동 또는 변경될 수 있습니다" />
          </Shared.ui.FormFieldset>
          <Shared.ui.FormFieldset>
            <legend className="blind">제목 및 설명</legend>
            <Shared.ui.FormLabel htmlFor="title">투표 제목</Shared.ui.FormLabel>
            <Shared.ui.FormInput id="title" name="title" placeholder="투표 제목을 입력해주세요" />
            <Shared.ui.FormLabel htmlFor="description">투표 설명 (선택)</Shared.ui.FormLabel>
            <textarea
              name="description"
              id="description"
              placeholder="투표 설명을 입력해주세요"
              autoComplete="off"
              className="block min-h-24 w-full resize-none rounded border bg-gray-100 px-3 py-2 text-base text-gray-700 outline-none transition-colors placeholder:text-gray-500 focus:border-blue-500 focus:bg-gray-000"
            ></textarea>
          </Shared.ui.FormFieldset>
          <Shared.ui.FormFieldset>
            <Shared.ui.FormLegend>투표 선택지 설정</Shared.ui.FormLegend>
            <ul>
              <li className="peerList relative peer-[List]:mt-2">
                <Shared.ui.FormInput id="option-1" placeholder="선택지1을 입력해주세요" />
              </li>
              <li className="peerList relative peer-[List]:mt-2">
                <Shared.ui.FormInput id="option-2" placeholder="선택지2을 입력해주세요" />
              </li>
              {optionInput.map((inputValue, idx) => (
                <li className="peerList relative peer-[List]:mt-2">
                  <Shared.ui.FormInput
                    id={`option-${idx + 3}`}
                    placeholder={`선택지${idx + 3}을 입력해주세요`}
                    hasDeleteBtn
                    value={inputValue}
                    onChange={e =>
                      setOptionInput(prev => ((prev[idx] = e.target.value), [...prev]))
                    }
                  />
                  <button
                    type="button"
                    title={`선택지${idx + 3} 삭제`}
                    className="absolute bottom-0 right-0 top-0 my-auto inline-flex w-10 items-center justify-center rounded text-xl text-gray-600"
                    onClick={() => setOptionInput(prev => prev.filter((_, i) => i !== idx))}
                  >
                    <Shared.ui.IconDelete />
                    <span className="blind">{`선택지${idx + 3} 삭제`}</span>
                  </button>
                </li>
              ))}
            </ul>
            {optionInput.length < 4 && (
              <button
                type="button"
                title="선택지 추가"
                className="mt-2 flex w-full items-center justify-center gap-1 rounded bg-blue-100 p-2 text-blue-500"
                onClick={() => setOptionInput(prev => [...prev, ''])}
              >
                <Shared.ui.IconPlus />
                <span>선택지 추가</span>
              </button>
            )}
          </Shared.ui.FormFieldset>
        </div>
        <button
          type="submit"
          title="투표 만들기"
          className="mt-6 block h-auto w-full rounded bg-blue-500 p-3 text-base font-medium text-white disabled:bg-gray-500 sm:text-lg"
        >
          투표 만들기
        </button>
      </form>
    </div>
  );
}
