import * as Shared from '@/shared';

export default function Footer() {
  return (
    <footer>
      <ul className="mx-auto mt-6 h-auto w-full max-w-5xl border-t px-2 pb-9 pt-6 text-sm text-gray-500">
        <li className="break-keep text-center sm:text-left">
          &copy; 2024. Team-VOTalks all rights reserved.
        </li>
        <li className="break-keep text-center sm:text-left">
          관리자 : {Shared.constants.ADMIN_EMAIL}
        </li>
      </ul>
    </footer>
  );
}
