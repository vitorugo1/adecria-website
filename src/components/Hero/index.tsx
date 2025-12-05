import Image from 'next/image';

export function Hero() {
  return (
    <>
      <section className='relative w-full h-[calc(100vh-12rem)]'>
        <Image
          src='/images/hero-banner-img.png'
          alt='Mão de um adulto segurando a de uma criança'
          fill
          className='object-cover'
          priority
        />
      </section>
      <section className='pb-12'>
        <div className='font-'></div>
      </section>
    </>
  );
}
