import clsx from 'clsx';
import { HandHeart } from 'lucide-react';
import Link from 'next/link';

export function NavMenu() {
  const linkClassname = 'px-3 mx-3';
  return (
    <nav
      className={clsx(
        'hidden md:flex justify-between items-center',
        'px-10',
        'text-slate-700',
      )}
    >
      <Link className={clsx(linkClassname, 'font-bold')} href='#heroInicio'>
        Início
      </Link>
      <Link className={linkClassname} href='#infoSection'>
        Saiba mais
      </Link>

      <Link href='#footer' className={clsx(linkClassname)}>
        Contato
      </Link>
      <Link
        href='#doacoes'
        className={clsx(
          'flex justify-between text-white cursor-pointer transition px-4 py-2 mx-3 rounded-2xl',
          'bg-[#E59854]',
          'hover:bg-slate-800',
        )}
        aria-label='Doações'
        title='Doações'
      >
        Doações <HandHeart />
      </Link>
    </nav>
  );
}
