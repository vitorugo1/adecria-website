type ButtonProps = {
  children: React.ReactNode;
  variant?: 'orange' | 'white';
};
export function BigButton({ children, variant }: ButtonProps) {
  const colorClasses =
    variant === 'orange'
      ? 'bg-[#E59854] text-white font-semibold shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:bg-[#FDD59C]'
      : 'bg-white text-[#162A41] font-semibold shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:bg-gray-100';
  return (
    <>
      <button
        className={`px-12 py-8 ${colorClasses} rounded-2xl text-base  flex justify-center items-center gap-3`}
      >
        {children}
      </button>
    </>
  );
}

export function SmallButton({ children, variant }: ButtonProps) {
  const colorClasses =
    variant === 'orange'
      ? 'bg-[#E59854] text-white font-semibold shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:bg-[#FDD59C]'
      : 'bg-white text-[#162A41] font-semibold shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] hover:bg-gray-100';
  return (
    <>
      <button
        className={`px-12 py-5 ${colorClasses} rounded-2xl text-base flex justify-center items-center gap-2`}
      >
        {children}
      </button>
    </>
  );
}
