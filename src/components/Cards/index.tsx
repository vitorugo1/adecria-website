import { ComponentType } from 'react';
import { LucideProps } from 'lucide-react';

type CardsProps = {
  icon: ComponentType<LucideProps>;
  span: string;
  title: string;
  description: string;
};

export function Cards({ icon: Icon, title, description, span }: CardsProps) {
  return (
    <>
      <div
        className='
        h-full
        flex flex-col items-start
        bg-white rounded-[20px]
        p-6
        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        relative z-10
      '
      >
        {/* ÍCONE */}
        <div
          className='
        w-14 h-14
        bg-[#32859C]
        rounded-[16px]
        shadow-[0_4px_12px_0_rgba(50,133,156,0.3)]
        flex items-center justify-center
        text-white
        mb-4
      '
        >
          <Icon size={28} />
        </div>

        {/* ETAPA */}
        <span className='text-[#32859C] font-bold text-xs tracking-wider uppercase mb-2 block'>
          {span}
        </span>

        {/* TÍTULO */}
        <h3 className='text-[#162A41] font-bold text-lg uppercase mb-3 leading-tight'>
          {title}
        </h3>

        {/* DESCRIÇÃO */}
        <p className='text-[#849695] text-sm leading-relaxed'>{description}</p>
      </div>
    </>
  );
}
