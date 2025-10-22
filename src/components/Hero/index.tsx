import Image from 'next/image';

export function Hero() {
  return (
    <>
      <section className='relative w-full h-[calc(100vh-12rem)]'>
        <Image
          src='/images/hero-banner-img.jpg'
          alt='Mão de um adulto'
          fill
          className='object-cover'
          priority
        />
      </section>
      <section className=' bg-gray-200 pb-12'>
        <div className='relative w-full flex justify-center gap-4 -mt-8'>
          {/* a negative margin '-mt-8' é metade da altura do botão.
            os botões são'h-16' (4rem / 64px de altura).
          */}
          <button className='bg-gray-100 text-gray-800 font-semibold py-4 px-8 rounded-2xl shadow-lg h-16'>
            Apoie
          </button>

          <button className='bg-gray-100 text-gray-800 font-semibold py-4 px-8 rounded-2xl shadow-lg h-16'>
            Precisa de ajuda?
          </button>
        </div>
      </section>
    </>
  );
}
