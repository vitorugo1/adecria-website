import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      id='footer'
      className='scroll-mt-32 w-full bg-white py-12 px-6 flex justify-center'
    >
      {/* Container centralizador para alinhar com o resto do site */}
      <div className='w-full max-w-[1240px] flex flex-col gap-16'>
        {/* CONTEÚDO PRINCIPAL (Logo e Contatos) */}
        {/* No mobile: flex-col (empilhado) | No desktop: flex-row (lado a lado) e justify-between */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
          {/* 1. Logo */}
          <div className='flex justify-start'>
            <Image
              src='/images/logo-ADECRIA-mobile.png'
              alt='Logo ADECRIA'
              width={345}
              height={120}
              // Ajuste no width para garantir que não quebre a tela no mobile
              className='object-contain w-[240px] md:w-[345px]'
            />
          </div>

          {/* 2. Bloco de Informações (Fale Conosco + Redes) */}
          {/* No desktop: flex-row para colocar as duas listas lado a lado */}
          <div className='flex flex-col md:flex-row gap-10 md:gap-32'>
            {/* Fale Conosco */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#162A41] font-bold'>Fale Conosco</h3>
              <div className='flex flex-col gap-2 text-[#162A41] text-base'>
                <p>(+55) 17 98125-7131</p>
                <p>contato@adecria.ong.br</p>
              </div>
            </div>

            {/* Redes sociais */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#162A41] font-bold'>Redes sociais</h3>
              <div className='flex flex-col gap-2 text-[#162A41] text-base'>
                <Link
                  href='https://www.instagram.com/adecriabrasil/'
                  className='hover:text-[#32859C] transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DIREITOS RESERVADOS */}
        <div className='text-center text-[#162A41] text-sm leading-relaxed'>
          <p>© 2025 ADECRIA. Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
