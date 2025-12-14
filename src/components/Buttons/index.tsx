type ButtonProps = {
  children: React.ReactNode;
  variant?: 'orange' | 'white';
};
export function BigButton({ children, variant }: ButtonProps) {
  const colorClasses =
    variant === 'orange'
      ? 'bg-[#E59854] text-white hover:bg-[#FDD59C]'
      : 'bg-white text-[#162A41] hover:bg-gray-100';
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
      ? 'bg-[#E59854] text-white hover:bg-[#FDD59C]'
      : 'bg-white text-[#162A41] hover:bg-gray-100';
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
