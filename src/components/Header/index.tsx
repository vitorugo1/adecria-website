import clsx from 'clsx';
import Link from 'next/link';
import { NavMenu } from '../NavMenu';
import { MobileMenu } from '../MobileMenu';
import Image from 'next/image';

export function Header() {
  return (
    <header
      className={clsx(
        'flex justify-between items-center min-w-full',
        'shadow-xl z-20 sticky top-0',
      )}
    >
      <Link
        className={clsx(
          'px-8',
          'text-4xl/normal font-extrabold',
          'sm:text-3xl/normal sm:py-2',
          'md:text-4xl/normal md:py-3',
          'lg:text-5xl/normal lg:py-4',
        )}
        href={{ pathname: '/' }}
      >
        <Image
          src='/images/logo-ADECRIA-mobile.png'
          alt='Logo da ADECRIA'
          width={193}
          height={58}
          className='md:hidden object-contain'
          priority
        />
      </Link>
      <MobileMenu />
    </header>
  );
}
