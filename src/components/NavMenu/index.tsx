import clsx from 'clsx';
import { HandHeart } from 'lucide-react';
import Link from 'next/link';

export function NavMenu() {
  const linkClassname = 'px-7';
  return (
    <nav
      className={clsx(
        'flex justify-between items-center',
        'px-10',
        'text-slate-700 text-xl',
      )}
    >
      <Link className={clsx(linkClassname, 'font-bold')} href={'#'}>
        Início
      </Link>
      <Link className={linkClassname} href={'#'}>
        Saiba mais
      </Link>
      <Link className={linkClassname} href={'#'}>
        Faça parte
      </Link>
      <Link className={clsx(linkClassname)} href={'#'}>
        Contato
      </Link>
      <button
        className={clsx(
          'flex justify-between text-slate-100 cursor-pointer transition px-6 rounded-2xl',
          'bg-slate-600',
          'hover:bg-slate-800',
        )}
        aria-label='Doações'
        title='Doações'
      >
        Doações <HandHeart />
      </button>
    </nav>
  );
}
