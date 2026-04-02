import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    // Removido o min-h-screen e adicionado py-20 para o desktop
    <section
      id='heroInicio'
      className='scroll-mt-32 relative w-full flex items-center justify-center pt-[140px] pb-20 md:pt-[180px] md:pb-[120px] overflow-hidden'
    >
      {' '}
      {/* IMAGENS DE FUNDO */}
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
      {/* CONTAINER CENTRALIZADOR
          Usando justify-between para empurrar os itens para as pontas.
          Aumentei o max-w para 1280px para dar mais respiro lateral, se necessário.
      */}
      <div className='relative z-10 w-full max-w-[1240px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10'>
        {/* BLOCO DE TEXTO (Esquerda)
            Limite de largura mais rígido (lg:max-w-[500px]) para não invadir o meio.
        */}
        <div className='font-bold text-white flex flex-col gap-6 md:gap-8 items-center text-center md:items-start md:text-left w-full lg:max-w-[500px]'>
          <h1 className='text-3xl md:text-5xl lg:text-[52px] leading-[1.1] font-montserrat tracking-tight'>
            Defendendo os direitos de crianças e adolescentes
          </h1>

          <p className='text-sm md:text-base lg:text-lg font-normal w-full leading-relaxed opacity-90'>
            A ADECRIA atua em processos de família, combatendo a alienação
            parental, promovendo a guarda compartilhada e oferecendo orientação
            jurídica e psicológica gratuita às famílias.
          </p>

          <div className='w-full border-t border-white/40 max-w-[200px] md:max-w-full my-2'></div>

          <div className='w-full flex justify-center md:justify-start gap-8 md:gap-12'>
            <div className='flex flex-col items-center md:items-start gap-1'>
              <h2 className='text-2xl md:text-[32px] font-extrabold whitespace-nowrap leading-none'>
                5+ anos
              </h2>
              <p className='text-[11px] md:text-xs font-medium uppercase tracking-wider opacity-80'>
                de atuação
              </p>
            </div>

            <div className='flex flex-col items-center md:items-start gap-1'>
              <h2 className='text-2xl md:text-[32px] font-extrabold whitespace-nowrap leading-none'>
                Centenas
              </h2>
              <p className='text-[11px] md:text-xs font-medium uppercase tracking-wider opacity-80'>
                de famílias atendidas
              </p>
            </div>

            <div className='flex flex-col items-center md:items-start gap-1'>
              <h2 className='text-2xl md:text-[32px] font-extrabold whitespace-nowrap leading-none'>
                80-90%
              </h2>
              <p className='text-[11px] md:text-xs font-medium uppercase tracking-wider opacity-80'>
                acordos em mediação
              </p>
            </div>
          </div>
        </div>

        {/* CARD BRANCO (Direita) */}
        <div className='bg-white/95 backdrop-blur-sm flex flex-col gap-4 rounded-[32px] p-8 md:p-10 text-left shadow-xl w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px] mt-8 md:mt-0 flex-shrink-0'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-[#162A41] text-xl lg:text-2xl'>
              Como você pode participar?
            </h2>
            <h3 className='font-normal text-[13px] lg:text-sm text-[#849695]'>
              Apoie nossa causa ou busque orientação
            </h3>
          </div>

          <div className='flex flex-col gap-3 mt-4'>
            <Link
              href='#doacoes'
              // Adicionado: flex justify-center items-center text-center
              className='w-full bg-[#E59854] text-white font-bold py-3.5 lg:py-4 rounded-full shadow-md hover:brightness-105 transition-all text-sm lg:text-base flex justify-center items-center text-center'
            >
              Apoiar a ADECRIA
            </Link>

            <Link
              href='#footer'
              // Adicionado: flex justify-center items-center text-center
              className='w-full bg-white border-2 border-[#E5E7EB] text-[#162A41] font-bold py-3.5 lg:py-4 rounded-full hover:bg-gray-50 transition-all text-sm lg:text-base flex justify-center items-center text-center'
            >
              Buscar orientação
            </Link>
          </div>

          <div className='mt-2 flex flex-col gap-4'>
            <Link
              href='#infoSection'
              className='text-center text-[13px] lg:text-sm text-[#32859C] font-semibold hover:underline'
            >
              Saiba mais sobre nosso trabalho
            </Link>

            <div className='w-full border-t border-gray-200 pt-4'>
              <p className='text-center text-[11px] lg:text-xs text-[#849695]'>
                Atendimento gratuito e humanizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
