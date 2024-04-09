import * as Shared from '@/shared';
import { MAX_OPTION_LENGTH, MIN_SELECT_COUNT } from '../constants';

export default function VoteFormSelection({
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
}: {
  optionInputValues: string[];
  addOptionInput: () => void;
  removeOptionInput: (inputIdx: number) => void;
  changeOptionInputValue: (inputValue: string, inputIdx: number) => void;
  selectCount: number;
  upperSelectCount: boolean;
  lowerSelectCount: boolean;
  increaseSelectCount: () => void;
  decreaseSelectCount: () => void;
  allowMultipleSelection: boolean;
  toggleAllowMultipleSelection: () => void;
}) {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-5">
        <Shared.ui.FormLabel>투표 선택지</Shared.ui.FormLabel>
        <div className="mb-2 flex items-center justify-center gap-2">
          {allowMultipleSelection && (
            <div className="flex items-center justify-end rounded border">
              <button
                type="button"
                className="border-r px-3 py-1 disabled:text-gray-500"
                disabled={lowerSelectCount}
                onClick={decreaseSelectCount}
              >
                -
              </button>
              <p className="w-8 whitespace-nowrap text-center text-sm">{selectCount}</p>
              <button
                type="button"
                className="border-l px-3 py-1 disabled:text-gray-500"
                disabled={upperSelectCount}
                onClick={increaseSelectCount}
              >
                +
              </button>
            </div>
          )}
          <button
            type="button"
            className={`
              ${allowMultipleSelection ? 'border-blue-200 bg-blue-100 text-blue-500' : 'bg-gray-000'}
              flex h-[34px] items-center justify-center gap-1 whitespace-nowrap rounded border py-1 pl-2 pr-3 transition-colors disabled:text-gray-500
            `}
            disabled={optionInputValues.length + 1 < MIN_SELECT_COUNT}
            onClick={toggleAllowMultipleSelection}
          >
            <Shared.ui.IconCheck />
            <span className="text-sm">복수 선택</span>
          </button>
        </div>
      </div>
      <ul>
        <li className="peerList relative peer-[List]:mt-2">
          <Shared.ui.FormInput id="option-1" placeholder="선택지1을 입력해주세요" />
        </li>
        <li className="peerList relative peer-[List]:mt-2">
          <Shared.ui.FormInput id="option-2" placeholder="선택지2을 입력해주세요" />
        </li>
        {optionInputValues.map((inputValue, idx) => (
          <li className="peerList relative peer-[List]:mt-2" key={`option-${idx + 3}`}>
            <Shared.ui.FormInput
              id={`option-${idx + 3}`}
              placeholder={`선택지${idx + 3}을 입력해주세요`}
              hasDeleteBtn
              value={inputValue}
              onChange={e => changeOptionInputValue(e.target.value, idx)}
            />
            <button
              type="button"
              title={`선택지${idx + 3} 삭제`}
              className="absolute bottom-0 right-0 top-0 my-auto inline-flex w-10 items-center justify-center rounded text-xl text-gray-600"
              onClick={() => removeOptionInput(idx)}
            >
              <Shared.ui.IconDelete />
              <span className="blind">{`선택지${idx + 3} 삭제`}</span>
            </button>
          </li>
        ))}
      </ul>
      {optionInputValues.length < MAX_OPTION_LENGTH - 2 && (
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
    </>
  );
}
