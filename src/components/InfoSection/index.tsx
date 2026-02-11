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
import { PartnersGrid } from '../PartnersGrid';
import { NewsletterSection } from '../NewsletterSection';

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

        <section className='w-full py-12 px-6 flex justify-center bg-white'>
          {/* CARD BRANCO GERAL (Container) */}
          <div
            className='
        w-full max-w-[1200px]
        bg-white
        rounded-[30px]
        /* Sombra suave igual do Figma Desktop */
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        border border-gray-100/50
        p-6 md:p-12
        flex flex-col md:flex-row /* Mobile: Coluna | Desktop: Linha */
        gap-8 md:gap-16
        items-stretch /* Garante que imagem e texto tenham alturas compatíveis */
      '
          >
            {/* --- COLUNA 1: CONTEÚDO DE TEXTO --- */}
            <div className='flex flex-col gap-6 md:w-1/2 justify-center'>
              {/* Título com detalhe da linha */}
              <div className='space-y-2'>
                <h2 className='text-[#162A41] text-3xl md:text-4xl font-bold'>
                  Enxergando o invisível
                </h2>
                <div className='w-16 h-1 bg-[#32859C] rounded-full'></div>
              </div>

              {/* Parágrafos */}
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

              {/* Card Verde (Estatística) */}
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

              {/* Texto final */}
              <p className='text-[#162A41] font-semibold text-sm md:text-base'>
                Nós transformamos conflitos em oportunidades de convivência
                saudável. Transformamos silêncio em voz. E transformamos dor em
                esperança.
              </p>

              {/* Botão */}
              <button className='w-full bg-[#32859C] text-white font-bold py-4 rounded-full shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2'>
                Conheça como a ADECRIA muda vidas
                <ArrowRight size={20} />
              </button>
            </div>
            <div className='relative md:w-1/2 min-h-[300px] md:min-h-[500px]'>
              <div className='relative w-full h-full overflow-hidden rounded-[20px]'>
                <Image
                  src='/images/crianca-chorando.png'
                  alt='Criança sentada cobrindo o rosto'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#F8FBFB] mt-24 py-16 flex flex-col justify-center items-center gap-4 px-4'>
          <h1 className='text-[#162A41] font-bold text-[28px] text-center'>
            Do conflito ao convívio: como transformamos juntos
          </h1>
          <div className='w-20 h-1 bg-[#32859C] rounded-full mb-2' />
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
            link='Quero contribuir'
            icon='🤲'
          />
          <CardsEmoji
            title='dar voz'
            span='Divulgar a Causa'
            description='Compartilhe nossa história. Cada compartilhamento torna visível a criança invisível. Redes sociais são plataformas de transformação.'
            link='Compartilhar conteúdo'
            icon='📢'
          />
          <CardsEmoji
            title='CRESCER JUNTO'
            span='Participar de Eventos'
            description='Palestras, workshops, encontros com famílias. Aprenda, conecte-se, inspire-se com quem está na linha de frente dessa mudança.'
            link='Ver agenda'
            icon='📚'
          />
          <CardsEmoji
            title='SEMEAR FUTURO'
            span='Apoio Financeiro'
            description='Contribuições sustentam atendimento gratuito a famílias vulneráveis. Cada real é uma semente plantada no futuro de uma criança.'
            link='Contribuir'
            icon='💚'
          />
          <QuoteCard />
        </section>

        <PartnersGrid />

        <NewsletterSection />
      </CenterContainer>
    </>
  );
}
