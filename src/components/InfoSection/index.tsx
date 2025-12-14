import clsx from 'clsx';
import { CenterContainer } from '../CenterContainer';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export function InfoSection() {
  return (
    <>
      <CenterContainer>
        <section
          className={clsx(
            'flex-col gap-8 items-center text-center p-8 my-8 text-[#162A41]',
          )}
        >
          <h1 className={clsx('font-medium text-xl mb-4')}>
            Associação em Defesa das Crianças e Adolescentes do Brasil
          </h1>
          <p className={clsx('text-sm mb-4')}>
            A ADECRIA BRASIL defende, com prioridade constitucional, os direitos
            de crianças e adolescentes, especialmente filhos de pais separados.
            Atuamos na prevenção de conflitos, na promoção da guarda
            compartilhada e no combate à alienação parental, oferecendo
            orientação jurídica, psicológica e apoio prático às famílias. Também
            realizamos advocacia social, disseminamos conhecimento sobre leis de
            proteção e facilitamos acordos de guarda, convivência e questões
            financeiras, sempre priorizando o bem-estar infantil. Junte-se a
            essa rede de proteção: seja voluntário, parceiro ou participe de
            nossos eventos para garantir vínculos familiares saudáveis e justiça
            para todas as crianças.
          </p>
        </section>

        <section
          className={clsx(
            'shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] m-4 p-8 flex flex-col gap-4 text-left',
          )}
        >
          <h1 className='text-[#162A41] font-bold text-3xl'>
            Enxergando o invisível
          </h1>
          <div className='w-16 h-1 bg-[#32859C] rounded-full mb-2' />
          <p className='text-[#849695]'>
            Milhões de crianças no Brasil vivem uma realidade que a sociedade
            não enxerga. Filhas de pais separados, enfrentam invisibilidade nas
            políticas públicas, alienação parental e violação de direitos.
          </p>
          <p className='text-[#162A41] text-[15px]'>
            A ADECRIA existe para dar voz a quem não é visto. Por 5 anos,
            atuamos com pioneirismo defendendo crianças de pais separados —
            aquelas que, mesmo vivendo em duas casas, merecem crescer com o
            cuidado e a presença ativa de toda a família.
          </p>
          <div
            className={clsx(
              'bg-[linear-gradient(to_bottom,#CCE7E3,#D4EBE8,#E0F2F0)] border-t-[1.15px] border-[#32859C]/20 shadow-[0_8px_24px_0_rgba(50,133,156,0.15)]',
              'p-4 my-4',
              'flex flex-col text-left gap-4 rounded-[20px]',
            )}
          >
            <h1 className='font-extrabold text-6xl text-[#32859C]'>80%</h1>
            <p className='font-semibold text-[#162A41] text-[15px] md:text-lg'>
              dos filhos de pais separados sofrem algum tipo de violação de
              direitos.
            </p>
            <p className='text-[#849695] text-[15px] md:text-lg'>
              Cada número é uma infância interrompida. Cada história é uma ponte
              que podemos construir.
            </p>
          </div>
          <p className='font-semibold text-brand-dark'>
            Nós transformamos conflitos em oportunidades de convivência
            saudável. Transformamos silêncio em voz. E transformamos dor em
            esperança.
          </p>
          <button className='bg-[#32859C] text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] text-center flex justify-center items-center p-4 my-4 rounded-[30px]'>
            <Link href='#'>Conheça como a ADECRIA muda vidas</Link>
            <MoveRight />
          </button>
          <div className='relative w-[312px] h-[380px] rounded-2xl overflow-hidden mx-auto'>
            <Image
              src='/images/crianca-chorando.png'
              alt='Criança chorando enquanto leva as mãos ao rosto'
              fill
              className='object-cover md:hidden'
              priority
            />
            <Image
              src='/images/crianca-chorando.png'
              alt='Criança chorando enquanto leva as mãos ao rosto'
              fill
              className='object-cover hidden md:block'
              priority
            />
          </div>
        </section>
      </CenterContainer>
    </>
  );
}
