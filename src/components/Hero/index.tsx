import Image from 'next/image';

export function Hero() {
  return (
    <>
      <section className='relative w-full h-[500px] md:h-[600px] lg:h-[700px]'>
        {/* 2. A IMAGEM DE FUNDO */}
        {/* Usando Next/Image: 'fill' faz a imagem preencher o pai 'relative'.
        'object-cover' garante que ela cubra o espaço sem distorcer.
        'z-0' a coloca no fundo.
      */}
        <Image
          src='/images/hero-banner-img.jpg' // Troque pelo caminho da sua imagem
          alt='Mão de um adulto'
          fill
          className='object-cover'
        />

        {/* 3. O CONTAINER DOS BOTÕES */}
        {/* Aqui está a mágica:
        - 'absolute': Retira o elemento do fluxo normal.
        - 'z-10': Coloca ele na frente da imagem (z-0).
        - 'bottom-12': Posiciona a 12 unidades (48px) da borda inferior. Ajuste a gosto.
        - 'left-1/2': Move a borda ESQUERDA do container para o meio da tela.
        - '-translate-x-1/2': Move o container para a ESQUERDA em 50% da SUA PRÓPRIA largura.
           (O resultado de left-1/2 + -translate-x-1/2 é a centralização perfeita).
        - 'flex gap-4': Alinha os botões lado a lado com um espaço.
      */}
        <div className='absolute z-10 bottom-0 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6'>
          {/* Seus botões com o estilo que você já criou */}
          <button className='bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg'>
            Apoie
          </button>

          <button className='bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg'>
            Precisa de ajuda?
          </button>
        </div>
      </section>

      <div className='container mx-auto text-center py-12'>
        <h2 className='text-2xl font-semibold'>
          Associação em Defesa das Crianças e Adolescentes do Brasil
        </h2>
      </div>
    </>
  );
}
