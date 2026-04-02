import clsx from 'clsx';
import { CenterContainer } from '../CenterContainer';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Handshake,
  Heart,
  MoveRight,
  Sprout,
} from 'lucide-react';
import { Cards } from '../Cards';
import { CardsEmoji } from '../CardEmoji/indext';
import { QuoteCard } from '../QuoteCard';

export function InfoSection() {
  return (
    <>
      <CenterContainer>
        <section
          id='infoSection'
          className={clsx(
            'scroll-mt-32 flex-col gap-8 items-center text-center p-8 my-8 text-[#162A41]',
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
        {/*Criança chorando */}
        <section className='w-full py-12 px-6 flex justify-center bg-white'>
          <div
            className='
        w-full max-w-[1200px]
        bg-white
        rounded-[30px]
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        border border-gray-100/50
        p-6 md:p-12
        flex flex-col md:flex-row
        gap-8 md:gap-16
      '
          >
            <div className='flex flex-col gap-6 md:w-1/2'>
              <div className='space-y-2'>
                <h2 className='text-[#162A41] text-3xl md:text-4xl font-bold'>
                  Enxergando o invisível
                </h2>
                <div className='w-16 h-1 bg-[#32859C] rounded-full'></div>
              </div>

              <div className='text-[#849695] text-base leading-relaxed space-y-4'>
                <p>
                  Milhões de crianças no Brasil vivem uma realidade que a
                  sociedade não enxerga. Filhas de pais separados, enfrentam
                  invisibilidade nas políticas públicas, alienação parental e
                  violação de direitos.
                </p>
                <p>
                  A ADECRIA existe para dar voz a quem não é visto. Por 5 anos,
                  atuamos com pioneirismo defendendo crianças de pais separados
                  — aquelas que, mesmo vivendo em duas casas, merecem crescer
                  com o cuidado e a presença ativa de toda a família.
                </p>
              </div>

              <div className='bg-[#E0F2F0] p-6 rounded-2xl border-l-4 border-[#32859C]'>
                <h3 className='text-[#32859C] text-5xl font-bold mb-2'>80%</h3>
                <p className='text-[#162A41] font-bold text-sm md:text-base mb-2'>
                  dos filhos de pais separados sofrem algum tipo de violação de
                  direitos.
                </p>
                <p className='text-[#849695] text-sm'>
                  Cada número é uma infância interrompida. Cada história é uma
                  ponte que podemos construir.
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-6 md:w-1/2'>
              <div className='relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[20px]'>
                <Image
                  src='/images/crianca-chorando.png'
                  alt='Criança sentada cobrindo o rosto'
                  fill
                  className='object-cover'
                />
              </div>

              <p className='text-[#162A41] font-semibold text-sm md:text-base'>
                Nós transformamos conflitos em oportunidades de convivência
                saudável. Transformamos silêncio em voz. E transformamos dor em
                esperança.
              </p>
            </div>
          </div>
        </section>
        <section className='relative py-20 mt-12 mb-12 isolate'>
          {/* --- HACK DO FUNDO INFINITO ---
          Isso cria uma camada cinza que ocupa a tela inteira (w-screen),
          mas fica centralizada atrás do conteúdo, sem esticar os cards.
      */}
          <div
            className='
          absolute top-0 bottom-0
          bg-[#F8FBFB]
          w-screen
          left-1/2 -translate-x-1/2
          -z-10
        '
          />

          {/* --- CONTEÚDO TRAVADO (Max Width 1024px) ---
          Reduzi para 1024px para os cards ficarem mais parecidos com o gabarito (retangulares verticais)
      */}
          <div className='w-full max-w-[1024px] mx-auto px-6 relative'>
            {/* CABEÇALHO */}
            <div className='flex flex-col items-center gap-4 text-center mb-16'>
              <h1 className='text-[#162A41] font-bold text-[28px] md:text-4xl leading-tight'>
                Do conflito ao convívio: como transformamos juntos
              </h1>
              <div className='w-20 h-1 bg-[#32859C] rounded-full' />
            </div>

            {/* ÁREA DOS CARDS */}
            <div className='w-full relative'>
              {/* LINHA CONECTORA AZUL
              top-9 (36px): Ajustado para passar no meio do ícone
              h-[4px]: Mais grossa
          */}
              <div className='hidden md:block absolute top-9 left-10 right-10 h-[4px] bg-[#32859C]/30 -z-0 rounded-full'></div>

              {/* GRID
              gap-8: Mais espaço entre os cards
              items-stretch: Força mesma altura
          */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-stretch relative z-10'>
                <Cards
                  icon={Handshake}
                  span='ETAPA 1'
                  title='ACOLHIMENTO'
                  description='Escutamos sem julgar. Aqui, sua dor encontra acolhimento e sua história é validada por profissionais especializados.'
                />

                <Cards
                  icon={BookOpen}
                  span='ETAPA 2'
                  title='INFORMAÇÃO'
                  description='Orientamos sobre direitos reais. Você descobre que não precisa entrar em guerra para manter contato com seus filhos.'
                />

                <Cards
                  icon={Heart}
                  span='ETAPA 3'
                  title='MEDIAÇÃO'
                  description='Construímos acordos saudáveis. 90% das famílias que chegam a mediação conseguem soluções que priorizam o bem-estar das crianças.'
                />

                <Cards
                  icon={Sprout}
                  span='ETAPA 4'
                  title='MULTIPLICAÇÃO'
                  description='Famílias transformadas inspiram outras. Cada história muda a forma como a sociedade enxerga crianças de pais separados.'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[linear-gradient(to_bottom,#FAFCFC,#FFFFFF)] shadow-[5px_11px_22px_0_rgba(0,0,0,0.12)] mt-24 py-16 flex flex-col justify-center items-center gap-4 px-4'>
          <h1 className='text-[#162A41] font-bold text-[28px] text-center'>
            Junte-se a uma rede que muda infâncias
          </h1>
          <div className='w-20 h-1 bg-[#32859C] rounded-full mb-2' />
          <p className='text-[15px] text-center text-[#849695]'>
            Sozinhos, fazemos pouco. Mas juntos, somos uma força que sustenta
            milhares de crianças. Você não precisa ser especialista — sua
            contribuição, seja qual for, fortalece a rede que protege quem mais
            precisa.
          </p>

          <CardsEmoji
            title='SER A MUDANÇA'
            span='Voluntário'
            description='Sua expertise importa. Psicólogos, advogados, comunicadores — qualquer talento fortalece nossa missão de acolhimento e transformação familiar.'
            icon='🤲'
          />
          <CardsEmoji
            title='dar voz'
            span='Divulgar a Causa'
            description='Compartilhe nossa história. Cada compartilhamento torna visível a criança invisível. Redes sociais são plataformas de transformação.'
            icon='📢'
          />
          <CardsEmoji
            title='CRESCER JUNTO'
            span='Participar de Eventos'
            description='Palestras, workshops, encontros com famílias. Aprenda, conecte-se, inspire-se com quem está na linha de frente dessa mudança.'
            icon='📚'
          />
          <CardsEmoji
            title='SEMEAR FUTURO'
            span='Apoio Financeiro'
            description='Contribuições sustentam atendimento gratuito a famílias vulneráveis. Cada real é uma semente plantada no futuro de uma criança.'
            icon='💚'
          />
          <QuoteCard />
        </section>
      </CenterContainer>
    </>
  );
}
