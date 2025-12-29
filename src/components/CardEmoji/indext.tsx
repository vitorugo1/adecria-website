import { ComponentType } from 'react';
import { Icon, LucideProps, MoveRight } from 'lucide-react';
import Link from 'next/link';

type CardsEmoProps = {
  icon: string;
  span: string;
  title: string;
  description: string;
  link: string;
};

export function CardsEmoji({
  icon: Icon,
  title,
  description,
  span,
  link,
}: CardsEmoProps) {
  return (
    <>
      <div className='m-4 flex flex-col items-start gap-4 bg-white rounded-[28px] p-8 shadow-[0_6px_20px_0_rgba(0,0,0,0.08)]'>
        <div className='w-16 h-16 text-5xl flex items-center justify-center font-normal'>
          {Icon}
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-[#162A41] font-bold text-xl uppercase'>
            {title}
          </h3>

          <span className='text-[#849695] font-medium text-[16px] tracking-wider'>
            {span}
          </span>

          <p className='text-[#849695] text-[15px] leading-relaxed'>
            {description}
          </p>

          <Link
            href='#'
            className='text-[#32859C] text-semibold text-[15px] flex gap-2'
          >
            {link} <MoveRight />
          </Link>
        </div>
      </div>
    </>
  );
}
