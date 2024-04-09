import * as Shared from '@/shared';
import { MAX_OPTION_LENGTH } from '../constants';

export default function VoteFormSelection({
  optionInputValues,
  addOptionInput,
  removeOptionInput,
  changeOptionInputValue,
}: {
  optionInputValues: string[];
  addOptionInput: () => void;
  removeOptionInput: (inputIdx: number) => void;
  changeOptionInputValue: (inputValue: string, inputIdx: number) => void;
}) {
  return (
    <div>
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
    </div>
  );
}
