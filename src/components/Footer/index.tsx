import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='w-full bg-white p-10 flex flex-col gap-12'>
      <div className='flex justify-start'>
        <Image
          src='/images/logo-ADECRIA-mobile.png'
          alt='Logo ADECRIA'
          width={345}
          height={120}
          className='object-contain'
        />
      </div>

      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-[#162A41] font-bold'>Fale Conosco</h3>
          <div className='flex flex-col gap-2 text-[#162A41] text-base'>
            <p>(00) 000-000-000</p>
            <p>emailassociação@email.com</p>
            <p>Endereço se vier ao caso</p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-[#162A41] font-bold'>Redes sociais</h3>
          <div className='flex flex-col gap-2 text-[#162A41] text-base'>
            <Link href='#' className='hover:text-[#32859C] transition-colors'>
              Instagram
            </Link>
            <Link href='#' className='hover:text-[#32859C] transition-colors'>
              Facebook
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-8 text-center text-[#162A41] leading-relaxed'>
        <p>© 2025 ADECRIA. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
