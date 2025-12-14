import clsx from 'clsx';
import { CenterContainer } from '../CenterContainer';

export function InfoSection() {
  return (
    <>
      <CenterContainer>
        <section
          className={clsx(
            'flex-col gap-8 items-center text-center p-8 text-[#162A41]',
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
      </CenterContainer>
    </>
  );
}
