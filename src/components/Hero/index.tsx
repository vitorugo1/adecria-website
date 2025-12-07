import Image from 'next/image';

export function Hero() {
  const p = 'text-white/85 font-normal text-base md:text-xl';
  const h2 = 'font-semibold <p-top-2></p-top-2> text-2xl md:text-4xl';
  return (
    <>
      <section className='relative w-full flex items-center justify-center'>
        <Image
          src='/images/hero-banner-img.png'
          alt='Mão de um adulto segurando a de uma criança'
          fill
          className='object-cover z-10 '
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

          <div className='w-full h-0 border-t border-white/85 my-6 max-w-xl flex justify-center'>
            <div>
              <h2 className={`${h2}`}>5+ anos</h2>
              <p className={`${p} font-sm`}>de atuação</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
