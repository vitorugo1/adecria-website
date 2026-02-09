import clsx from 'clsx';
import Image from 'next/image';
import { BigButton } from '../Buttons';
import Link from 'next/link';

export function Hero() {
  const p = 'text-white/85 font-normal text-base md:text-xl';
  const h2 = 'font-semibold text-2xl md:text-4xl';
  return (
    <>
      <section className='relative w-full min-h-screen h-auto flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left pb-12 overflow-hidden px-4 md:px-20 gap-10'>
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
        <div className='font-bold text-white p-4 text-3xl md:text-5xl flex flex-col gap-8 font-montserrat md:max-w-2xl items-center md:items-start'>
          <div>
            <h1 className='leading-tight'>Defendendo os direitos</h1>
            <h1 className='leading-tight'>de crianças e adolescentes</h1>
          </div>

          <p className={`${p}`}>
            A ADECRIA atua em processos de família, combatendo a alienação
            parental, promovendo a guarda compartilhada e oferecendo orientação
            jurídica e psicológica gratuita às famílias.
          </p>

          <div
            className={clsx(
              'w-full border-t border-white/50 mx-auto md:mx-0',
              'max-w-[200px] md:max-w-2xl',
            )}
          ></div>

          <div className='w-full max-w-2xl flex justify-center md:justify-start items-start gap-8 md:gap-12'>
            <div className='whitespace-nowrap'>
              {' '}
              <h2 className={`${h2}`}>5+ anos</h2>
              <p className={`${p} font-sm`}>de atuação</p>
            </div>

            <div className='whitespace-nowrap'>
              <h2 className={`${h2}`}>Centenas</h2>
              <p className={`${p} font-sm`}>de famílias atendidas</p>
            </div>

            <div className='whitespace-nowrap'>
              <h2 className={`${h2}`}>80-90%</h2>
              <p className={`${p} font-sm`}>acordos em mediação</p>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'bg-white/90 flex flex-col gap-4 rounded-2xl p-8 text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] w-full max-w-md',
          )}
        >
          <h2 className={clsx('font-semibold text-brand-dark')}>
            Como você pode participar?
          </h2>
          <h3 className={clsx('font-regular text-sm text-[#849695]')}>
            Apoie nosssa causa busque orientação
          </h3>
          <BigButton variant='orange'>Apoiar a ADECRIA</BigButton>
          <BigButton variant='white'>Buscar orientação</BigButton>
          <Link href='#' className='text-center text-sm text-[#32859C]'>
            Saiba mais sobre nosso trabalho
          </Link>
          <p className='border-t border-[#162A411A] text-center text-sm align-baseline pt-4 text-[#849695]'>
            Atendimento gratuito e humanizado
          </p>
        </div>
      </section>
    </>
  );
}
