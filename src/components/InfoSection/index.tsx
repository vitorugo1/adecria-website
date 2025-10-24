import clsx from 'clsx';
import { CenterContainer } from '../CenterContainer';

export function InfoSection() {
  return (
    <>
      <CenterContainer>
        <section className={clsx('flex-col gap-8 items-center text-center')}>
          <h1 className={clsx('text-2xl font-extrabold mb-4')}>
            Associação em Defesa das Crianças e Adolescentes do Brasil
          </h1>
          <p className={clsx('text-l mb-4')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum bibendum massa, scelerisque maximus orci rutrum vel. Nullam
            iaculis iaculis ornare. Phasellus venenatis turpis tortor, at tempor
            elit porttitor quis. Proin eget tempus justo, a cursus quam. Integer
            sit amet laoreet ligula. In hac habitasse platea dictumst. Vivamus
            tempor elit ac elit vulputate finibus. Cras sollicitudin porttitor
            facilisis. Morbi eu sagittis quam. Praesent porttitor turpis eget
            est sodales condimentum. Sed dictum nulla ante, eu ornare enim
            porttitor sit amet. Quisque rhoncus neque in sapien ultricies, id
            luctus ante interdum.
          </p>
        </section>
      </CenterContainer>
    </>
  );
}
