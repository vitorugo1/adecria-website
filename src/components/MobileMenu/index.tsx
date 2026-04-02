'use client';

import { useState } from 'react';
import { Menu, X, HandHeart } from 'lucide-react';
import Link from 'next/link';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <button
        onClick={() => setIsOpen(true)}
        className='py-6 px-8 text-[#162A41]'
      >
        <Menu size={24} />
      </button>

      {/*Overlay*/}
      <div
        className={`
          fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300
          ${
            isOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }
        `}
        onClick={() => setIsOpen(false)}
      />

      {/*Drawer*/}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-[85%] max-w-[300px] bg-white shadow-[-10px_10px_20px_0_rgba(0,0,0,0.1)]
          flex flex-col p-6
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/*Close*/}
        <div className='flex justify-end mb-4'>
          <button
            onClick={() => setIsOpen(false)}
            className='text-[#162A41] hover:bg-gray-100 p-2 rounded-full transition-colors'
          >
            <X size={24} />
          </button>
        </div>

        {/*Links*/}
        <nav className='flex flex-col gap-6'>
          {/* Active Item example*/}
          <Link
            href='#heroInicio'
            className='bg-[#D4EBF7] text-[#162A41] font-semibold text-base p-4 rounded-[10px] block'
          >
            Início
          </Link>

          <Link
            href='#infoSection'
            className='text-[#4a4a4a] font-medium text-base p-4 hover:bg-gray-50 rounded-[10px] block transition-colors'
          >
            Saiba mais
          </Link>

          <Link
            href='#footer'
            className='text-[#849695] font-medium text-base p-4 hover:bg-gray-50 rounded-[10px] block transition-colors'
          >
            Contato
          </Link>
        </nav>

        <Link href='#doacoes' className='mt-auto pt-8 border-t border-gray-100'>
          <button
            className='
    flex items-center gap-2
    bg-[#E59854]
    text-white

    text-sm
    py-[10px]
    px-[24px]

    rounded-[30px]

    shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]'
          >
            Doações
            <HandHeart size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
}
