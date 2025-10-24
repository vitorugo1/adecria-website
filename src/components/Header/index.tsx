import clsx from 'clsx';
import Link from 'next/link';
import { NavMenu } from '../NavMenu';

export function Header() {
  return (
    <header
      className={clsx(
        'flex justify-between items-center min-w-full',
        'shadow-xl z-15 sticky top-0',
      )}
    >
      <Link
        className={clsx(
          'px-8',
          'text-4xl/normal font-extrabold py-4',
          'sm:text-3xl/normal sm:py-2',
          'md:text-4xl/normal md:py-3',
          'lg:text-5xl/normal lg:py-4',
        )}
        href={{ pathname: '/' }}
      >
        ADECRIA
      </Link>
      <NavMenu />
    </header>
  );
}
