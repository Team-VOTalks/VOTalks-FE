'use client';

import * as Shared from '@/shared';
import useVoteForm from '../lib/use-vote-form';
import VoteFormCategory from './vote-form-category';
import VoteFormSelection from './vote-form-selection';

export default function CreateVoteForm() {
  const {
    optionInputFields,
    addOptionInput,
    removeOptionInput,
    register,
    watch,
    handleFormSubmit,
    errors,
  } = useVoteForm();

  return (
    <div className="mx-auto flex w-full flex-grow pt-5">
      <form
        className="flex flex-grow flex-col items-stretch justify-between"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-auto flex-grow">
          <Shared.ui.FormFieldset>
            <Shared.ui.FormLabel htmlFor="category">투표 카테고리</Shared.ui.FormLabel>
            <VoteFormCategory currentCategory={watch('category')} register={register} />
            {errors.category && (
              <Shared.ui.GuideTxt content={errors.category.message!} color="red" />
            )}
            <Shared.ui.GuideTxt content="카테고리는 서비스 정책에 따라 이동 또는 변경될 수 있습니다" />
          </Shared.ui.FormFieldset>
          <Shared.ui.FormFieldset>
            <Shared.ui.FormLabel htmlFor="title">투표 제목</Shared.ui.FormLabel>
            <Shared.ui.FormInput
              type="text"
              placeholder="투표 제목을 입력해주세요"
              isError={errors.title}
              {...register('title', {
                required: '투표 제목을 입력해주세요',
                maxLength: { value: 100, message: '제목은 100자 이상 입력할 수 없습니다' },
              })}
            />
            {errors.title && <Shared.ui.GuideTxt content={errors.title.message!} color="red" />}
          </Shared.ui.FormFieldset>
          <div className="md:flex md:justify-between md:gap-8">
            <div className="w-full md:w-1/2">
              <Shared.ui.FormFieldset>
                <Shared.ui.FormLabel htmlFor="description">투표 설명 (선택)</Shared.ui.FormLabel>
                <Shared.ui.FormTextarea
                  placeholder="투표 설명을 입력해주세요"
                  className="md:min-h-48"
                  {...register('description', {
                    maxLength: { value: 300, message: '설명은 300자 이상 입력할 수 없습니다' },
                  })}
                />
                {errors.description && (
                  <Shared.ui.GuideTxt content={errors.description.message!} color="red" />
                )}
              </Shared.ui.FormFieldset>
            </div>
            <div className="w-full md:w-1/2">
              <Shared.ui.FormFieldset>
                <Shared.ui.FormLabel>투표 선택지</Shared.ui.FormLabel>
                <VoteFormSelection
                  optionInputFields={optionInputFields}
                  addOptionInput={addOptionInput}
                  removeOptionInput={removeOptionInput}
                  register={register}
                  errors={errors}
                />
              </Shared.ui.FormFieldset>
            </div>
          </div>
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
