import clsx from 'clsx';
import Image from 'next/image';
import { BigButton } from '../Buttons';

export function Hero() {
  const p = 'text-white/85 font-normal text-base md:text-xl';
  const h2 = 'font-semibold text-2xl md:text-4xl';
  return (
    <>
      <section className='relative w-full min-h-screen h-auto flex flex-col items-center justify-center text-center pb-32 overflow-hidden'>
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
          className='object-cover hidden md:block'
          priority
        />
        <div className='font-bold m-4 text-white p-4 text-3xl md:text-5xl text-center flex flex-col gap-8 font-montserrat'>
          <h1 className='leading-tight'>Defendendo os direitos</h1>

          <h1 className='leading-tight'>de crianças e adolescentes</h1>

          <p className={p}>
            A ADECRIA atua em processos de família, combatendo a alienação
            parental, promovendo a guarda compartilhada e oferecendo orientação
            jurídica e psicológica gratuita às famílias.
          </p>

          <div
            className={clsx('w-full max-w-xs border-t border-white/50')}
          ></div>

          <div className='w-full max-w-xl flex justify-center flex-wrap gap-8'>
            <div>
              <h2 className={`${h2}`}>5+ anos</h2>
              <p className={`${p} font-sm`}>de atuação</p>
            </div>
            <div>
              <h2 className={`${h2}`}>Centenas</h2>
              <p className={`${p} font-sm`}>de famílias atendidas</p>
            </div>
            <div>
              <h2 className={`${h2}`}>80-90%</h2>
              <p className={`${p} font-sm`}>acordos em mediação</p>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'bg-white/90 flex flex-col gap-4 rounded-2xl p-8 text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]',
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
        </div>
      </section>
    </>
  );
}
