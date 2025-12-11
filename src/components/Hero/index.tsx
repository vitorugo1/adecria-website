import clsx from 'clsx';
import Image from 'next/image';

export function Hero() {
  const p = 'text-white/85 font-normal text-base md:text-xl';
  const h2 = 'font-semibold text-2xl md:text-4xl';
  return (
    <>
      <section className='relative w-full min-h-screen h-auto flex flex-col items-center justify-center text-center pb-32'>
        <Image
          src='/images/hero-mobile.png'
          alt='Mão de um adulto segurando a de uma criança'
          fill
          className='object-cover z-10 md:hidden'
          priority
        />
        <Image
          src='/images/hero-banner-img.png'
          alt='Mão de um adulto segurando a de uma criança'
          fill
          className='object-cover z-10 hidden md:block'
          priority
        />
        <div className='z-10 font-bold m-4 text-white p-4 text-3xl md:text-5xl text-center flex flex-col gap-8 font-montserrat'>
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

          <div className='w-full h-0 max-w-xl flex justify-center flex-wrap gap-8'>
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
      </section>
    </>
  );
}
