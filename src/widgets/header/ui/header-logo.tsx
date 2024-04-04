import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo({ isDark }: { isDark?: boolean }) {
  return (
    <h1 className="relative mb-1 block">
      <Link href="/">
        <Image
          src={`/img/votalks-logo-${isDark ? 'dark' : 'light'}.svg`}
          width="120"
          height="28"
          priority={true}
          alt="VOTalks LOGO"
        />
        <span className="blind">VOTalks : Vote & Talks</span>
      </Link>
    </h1>
  );
}
