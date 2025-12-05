import Image from 'next/image';

export function Hero() {
  return (
    <>
      <section className='relative w-full h-[calc(100vh-12rem)] flex items-center justify-center'>
        <Image
          src='/images/hero-banner-img.png'
          alt='Mão de um adulto segurando a de uma criança'
          fill
          className='object-cover z-10'
          priority
        />
        <div className='z-11 font-700 m-4 text-white sm:p-4 text-3xl text-center '>
          <p>Defendendo os direitos</p>
          <p>de crianças e adolescentes</p>
        </div>
      </section>
    </>
  );
}
