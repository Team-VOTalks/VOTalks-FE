import * as Shared from '@/shared';

export default function Loading() {
  return (
    <div className="relative flex items-center justify-center px-4 py-32 text-4xl text-gray-500">
      <Shared.ui.SpinnerBar />
      <span className="blind">로딩 중 입니다. 잠시만 기다려주세요</span>
    </div>
  );
}
