import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { MAX_OPTION_LENGTH } from '../constants';
import type { CreateVoteFormValues } from '../types';
import * as Shared from '@/shared';

export default function VoteFormSelection({
  optionInputFields,
  addOptionInput,
  removeOptionInput,
  register,
  errors,
}: {
  optionInputFields: Record<'id', string>[];
  addOptionInput: () => void;
  removeOptionInput: (inputIdx: number) => void;
  register: UseFormRegister<CreateVoteFormValues>;
  errors: FieldErrors<CreateVoteFormValues>;
}) {
  return (
    <div>
      <ul>
        {optionInputFields.map((field, idx) => (
          <li className="peerList relative peer-[List]:mt-2" key={field.id}>
            <Shared.ui.FormInput
              placeholder={`선택지${idx + 1}을 입력해주세요`}
              isError={errors.options?.[idx]?.value}
              {...register(`options.${idx}.value` as const, {
                required: `선택지 ${idx + 1}을 입력해주세요`,
                maxLength: { value: 20, message: '선택지는 20자 이상 입력할 수 없습니다' },
              })}
              hasDeleteBtn={idx >= 2}
            />
            {idx >= 2 && (
              <button
                type="button"
                title={`선택지${idx + 1} 삭제`}
                className="absolute right-0 top-0 my-auto inline-flex h-[42px] w-10 items-center justify-center rounded text-xl text-gray-600"
                onClick={() => removeOptionInput(idx)}
              >
                <Shared.ui.IconDelete />
                <span className="blind">{`선택지${idx + 1} 삭제`}</span>
              </button>
            )}
            {errors.options?.[idx]?.value !== undefined && (
              <Shared.ui.GuideTxt content={errors.options[idx]!.value!.message!} color="red" />
            )}
          </li>
        ))}
      </ul>
      {optionInputFields.length < MAX_OPTION_LENGTH && (
        <button
          type="button"
          title="선택지 추가"
          className="mt-2 flex w-full items-center justify-center gap-1 rounded bg-blue-100 p-2 text-sm text-blue-500 sm:text-base"
          onClick={addOptionInput}
        >
          <Shared.ui.IconPlus />
          <span>선택지 추가</span>
        </button>
      )}
    </div>
  );
}
