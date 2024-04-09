'use client';

import * as Shared from '@/shared';
import useVoteForm from '../lib/use-vote-form';
import VoteFormCategory from './vote-form-category';
import VoteFormSelection from './vote-form-selection';

export default function CreateVoteForm() {
  const {
    currentCategory,
    setCurrentCategory,
    optionInputValues,
    addOptionInput,
    removeOptionInput,
    changeOptionInputValue,
    selectCount,
    upperSelectCount,
    lowerSelectCount,
    increaseSelectCount,
    decreaseSelectCount,
    allowMultipleSelection,
    toggleAllowMultipleSelection,
  } = useVoteForm();

  return (
    <div className="mx-auto flex w-full flex-grow pt-5">
      <form className="flex flex-grow flex-col items-stretch justify-between">
        <div className="mb-auto flex-grow">
          <Shared.ui.FormFieldset>
            <Shared.ui.FormLabel htmlFor="category">투표 카테고리</Shared.ui.FormLabel>
            <VoteFormCategory
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
            <Shared.ui.GuideTxt content="카테고리는 서비스 정책에 따라 이동 또는 변경될 수 있습니다" />
          </Shared.ui.FormFieldset>
          <Shared.ui.FormFieldset>
            <legend className="blind">제목 및 설명</legend>
            <Shared.ui.FormLabel htmlFor="title">투표 제목</Shared.ui.FormLabel>
            <Shared.ui.FormInput id="title" name="title" placeholder="투표 제목을 입력해주세요" />
            <Shared.ui.FormLabel htmlFor="description">투표 설명 (선택)</Shared.ui.FormLabel>
            <Shared.ui.FormTextarea
              name="description"
              id="description"
              placeholder="투표 설명을 입력해주세요"
              autoComplete="off"
            />
          </Shared.ui.FormFieldset>
          <Shared.ui.FormFieldset>
            <VoteFormSelection
              optionInputValues={optionInputValues}
              addOptionInput={addOptionInput}
              removeOptionInput={removeOptionInput}
              changeOptionInputValue={changeOptionInputValue}
              selectCount={selectCount}
              upperSelectCount={upperSelectCount}
              lowerSelectCount={lowerSelectCount}
              increaseSelectCount={increaseSelectCount}
              decreaseSelectCount={decreaseSelectCount}
              allowMultipleSelection={allowMultipleSelection}
              toggleAllowMultipleSelection={toggleAllowMultipleSelection}
            />
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
