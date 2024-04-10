'use client';
import { useState } from 'react';
import { CommonModal } from '@/entities';

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button type="button" onClick={() => setIsOpen(true)}>
        모달 열기
      </button>
      <CommonModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <h3 className="mb-1 text-lg font-bold">모달창임 ㅇㅇ</h3>
        <p>
          안녕하세요, 모달입니다. 현재 모달창이 잘나오는지 테스트 중 입니다. 확인 이나 취소 버튼
          눌러도 바뀌는 건 없습니다. 기능이 없기 때문이죠.
        </p>
      </CommonModal>
    </main>
  );
}
