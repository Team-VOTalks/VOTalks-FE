import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo({ isDark }: { isDark?: boolean }) {
  return (
    <h1 className="relative mb-1 block">
      <Link href="/" className="relative block h-6 w-24 sm:h-7 sm:w-28">
        <Image
          className="h-full w-auto"
          src={`/img/votalks-logo-${isDark ? 'dark' : 'light'}.svg`}
          priority={true}
          alt="VOTalks LOGO"
          fill
        />
        <span className="blind">VOTalks : Vote & Talks</span>
      </Link>
    </h1>
  );
}
