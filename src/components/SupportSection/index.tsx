'use client';

import { useState } from 'react';

export function SupportSection() {
  const [copied, setCopied] = useState(false);
  const pixKey = '39.991.687/0001-00';

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id='doacoes'
      className='scroll-mt-32 w-full py-16 md:py-24 flex items-center justify-center overflow-hidden'
    >
      {/* Container Centralizador */}
      <div className='w-full max-w-[1240px] px-6 lg:px-8'>
        {/* Card Principal - Mesma estética da seção "Enxergando o Invisível" */}
        <div className='bg-white border border-gray-100 shadow-xl rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Lado Esquerdo: Texto Institucional */}
          <div className='flex flex-col gap-5 md:max-w-xl text-center md:text-left'>
            <h2 className='text-3xl md:text-[40px] leading-tight font-extrabold text-[#162A41]'>
              Apoie a ADECRIA
            </h2>
            <p className='text-base md:text-lg text-[#849695] leading-relaxed'>
              Sua contribuição é fundamental para mantermos nossos atendimentos
              jurídicos e psicológicos gratuitos. Ajude-nos a continuar
              transformando conflitos em convivência saudável e protegendo os
              direitos de milhares de famílias.
            </p>
          </div>

          {/* Lado Direito: Bloco do PIX */}
          <div className='bg-gray-50 border border-gray-100 rounded-[32px] p-6 md:p-8 w-full max-w-[400px] flex flex-col items-center text-center shadow-sm'>
            {/* Ícone Simbólico do PIX (Desenhado em SVG para não precisar importar bibliotecas) */}
            <div className='w-16 h-16 bg-[#32859C]/10 rounded-full flex items-center justify-center mb-4'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.15 9.38318L16 3.5332L21.85 9.38318L16 15.2332L10.15 9.38318Z'
                  fill='#32859C'
                />
                <path
                  d='M10.15 22.6168L16 28.4668L21.85 22.6168L16 16.7668L10.15 22.6168Z'
                  fill='#32859C'
                />
                <path
                  d='M3.5332 16L9.38318 10.15L15.2332 16L9.38318 21.85L3.5332 16Z'
                  fill='#32859C'
                />
                <path
                  d='M28.4668 16L22.6168 10.15L16.7668 16L22.6168 21.85L28.4668 16Z'
                  fill='#32859C'
                />
              </svg>
            </div>

            <div className='flex flex-col gap-1'>
              <h3 className='font-bold text-[#162A41] text-lg'>
                Chave PIX (CNPJ)
              </h3>
              <p className='text-[#849695] text-sm'>
                Associação ADECRIA Brasil
              </p>
            </div>

            {/* Caixa que exibe a chave */}
            <div className='w-full bg-white border border-gray-200 rounded-xl py-4 px-4 mt-6 mb-3'>
              <span className='font-mono font-bold text-[#162A41] text-lg select-all tracking-wider'>
                {pixKey}
              </span>
            </div>

            {/* Botão Interativo de Copiar */}
            <button
              onClick={handleCopy}
              className={`w-full font-bold py-4 rounded-[100px] transition-all duration-300 text-sm md:text-base ${
                copied
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-[#E59854] text-white shadow-md hover:brightness-105'
              }`}
            >
              {copied ? 'Chave Copiada! ✓' : 'Copiar Chave PIX'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
