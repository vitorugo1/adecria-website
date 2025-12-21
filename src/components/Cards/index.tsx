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
      <div className='m-4 flex flex-col items-start gap-4 bg-white rounded-[28px] p-8 shadow-[0_6px_20px_0_rgba(0,0,0,0.08)]'>
        <div className='w-16 h-16 bg-[#32859C] rounded-[20px] shadow-[0_4px_12px_0_rgba(50,133,156,0.3)] flex items-center justify-center text-white mb-2'>
          <Icon size={32} />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-[#32859C] font-bold text-sm tracking-wider uppercase'>
            {span}
          </span>

          <h3 className='text-[#162A41] font-bold text-xl uppercase'>
            {title}
          </h3>

          <p className='text-[#849695] text-sm leading-relaxed'>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
