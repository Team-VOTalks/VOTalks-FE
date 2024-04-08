import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <h1 className="relative mb-1 block">
      <Link
        href="/"
        className="logo relative block h-6 w-24 sm:h-7 sm:w-28"
        title="메인페이지 이동"
      >
        <span className="blind">VOTalks : Vote & Talks</span>
      </Link>
    </h1>
  );
}
