type ButtonProps = {
  children: React.ReactNode;
  variant?: 'orange' | 'white';
};
export function BigButton({ children, variant }: ButtonProps) {
  const colorClasses =
    variant === 'orange'
      ? 'bg-brand-orange text-white hover:bg-[#FDD59C]'
      : 'bg-white text-brand-dark hover:bg-gray-100';
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

export function SmallButton({ children, color, textcolor }: ButtonProps) {
  return (
    <>
      <button
        className={`px-12 py-5 ${color} rounded-2xl text-base text-${textcolor} flex justify-center items-center gap-2`}
      >
        {children}
      </button>
    </>
  );
}
