import Image from 'next/image';
import Link from 'next/link';
import IconHome from './icon/icon-home';
import IconRefresh from './icon/icon-refresh';
import { ADMIN_EMAIL } from '../constants';

export default function NotFound({ retryFn }: { retryFn?: () => void }) {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-start">
      <Image
        src="/img/not-found.svg"
        width="320"
        height="300"
        alt="404"
        priority={true}
        className="my-8 block max-w-[80%]"
      />
      <h2 className="mb-2 break-keep text-center text-xl font-bold sm:mb-4 sm:text-2xl">
        요청하신 페이지를 찾을 수 없습니다
      </h2>
      <p className="remove-br mb-6 break-keep text-center text-sm text-gray-500 sm:text-base">
        찾으시고자 하는 페이지가 삭제되었거나 이동되었을 수 있습니다. <br />
        주소를 한 번 더 확인해 주시고, 동일한 증상이 지속적으로 나타나는 경우{' '}
        <br className="target" />
        관리자({ADMIN_EMAIL})에게 문의하여 주십시오.
      </p>
      <p className="flex items-center justify-center gap-2">
        {retryFn !== undefined && (
          <button
            type="button"
            className="flex items-center justify-center gap-1 rounded bg-gray-100 py-2 pl-3 pr-4 text-xl xs:pl-4 xs:pr-5 sm:text-2xl"
            onClick={retryFn}
          >
            <IconRefresh />
            <span className="text-base font-normal sm:text-lg">새로고침</span>
          </button>
        )}
        <Link
          href="/"
          className="flex items-center justify-center gap-1 rounded bg-blue-500 py-2 pl-3 pr-4 text-xl text-white xs:pl-4 xs:pr-5 sm:text-2xl"
          title="메인페이지 이동"
        >
          <IconHome />
          <span className="text-base font-normal sm:text-lg">메인으로</span>
        </Link>
      </p>
    </div>
  );
}
