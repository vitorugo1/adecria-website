import clsx from 'clsx';
import Image from 'next/image';
import { BigButton } from '../Buttons';
import Link from 'next/link';

export function Hero() {
  const p = 'text-white/85 font-normal text-base md:text-xl';
  const h2 = 'font-semibold text-2xl md:text-4xl';
  return (
    <section className='relative w-full min-h-screen h-auto flex flex-col md:flex-row items-center justify-start pt-32 pb-20 md:justify-between md:pt-0 md:pb-0 md:px-20 overflow-x-hidden gap-10'>
      <Image
        src='/images/hero-mobile.png'
        alt='Mão de um adulto segurando a de uma criança'
        fill
        className='object-cover -z-10 md:hidden'
        priority
      />

      <Image
        src='/images/hero-banner-img.png'
        alt='Mão de um adulto segurando a de uma criança'
        fill
        className='object-cover -z-10 hidden md:block'
        priority
      />

      <div className='relative z-10 font-bold text-white px-4 flex flex-col gap-8 items-center text-center md:items-start md:text-left md:max-w-2xl'>
        <div>
          <h1 className='text-3xl md:text-5xl leading-tight font-montserrat'>
            Defendendo os direitos
          </h1>
          <h1 className='text-3xl md:text-5xl leading-tight font-montserrat'>
            de crianças e adolescentes
          </h1>
        </div>

        <p className='text-sm md:text-lg font-normal max-w-md'>
          A ADECRIA atua em processos de família, combatendo a alienação
          parental, promovendo a guarda compartilhada e oferecendo orientação
          jurídica e psicológica gratuita às famílias.
        </p>

        <div className='w-full border-t border-white/50 max-w-[200px] md:max-w-full'></div>

        <div className='w-full flex justify-center md:justify-start gap-4 md:gap-12'>
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-2xl md:text-4xl font-extrabold whitespace-nowrap'>
              5+ anos
            </h2>
            <p className='text-xs md:text-sm font-normal leading-tight'>
              de atuação
            </p>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-2xl md:text-4xl font-extrabold whitespace-nowrap'>
              Centenas
            </h2>
            <p className='text-xs md:text-sm font-normal leading-tight'>
              de famílias atendidas
            </p>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-2xl md:text-4xl font-extrabold whitespace-nowrap'>
              80-90%
            </h2>
            <p className='text-xs md:text-sm font-normal leading-tight'>
              acordos em mediação
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white/95 backdrop-blur-sm flex flex-col gap-4 rounded-[30px] p-8 text-left shadow-2xl w-full max-w-[340px] md:max-w-sm mt-4 md:mt-0'>
        <h2 className='font-bold text-[#162A41] text-xl'>
          Como você pode participar?
        </h2>
        <h3 className='font-normal text-sm text-[#849695]'>
          Apoie nossa causa ou busque orientação
        </h3>

        <button className='w-full bg-[#E59854] text-white font-bold py-3 rounded-full shadow-md hover:brightness-105'>
          Apoiar a ADECRIA
        </button>
        <button className='w-full bg-white border border-gray-200 text-[#162A41] font-bold py-3 rounded-full shadow-sm hover:bg-gray-50'>
          Buscar orientação
        </button>

        <Link
          href='#'
          className='text-center text-sm text-[#32859C] font-medium mt-2 block hover:underline'
        >
          Saiba mais sobre nosso trabalho
        </Link>

        <p className='border-t border-gray-200 text-center text-xs pt-4 text-[#849695] mt-2'>
          Atendimento gratuito e humanizado
        </p>
      </div>
    </section>
  );
}
