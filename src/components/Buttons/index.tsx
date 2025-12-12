type ButtonProps = {
  children: React.ReactNode;
  color: 'bg-brand-orange' | 'bg-white';
  textcolor: 'white' | 'brand-dark';
};
export function BigButton({ children, color, textcolor }: ButtonProps) {
  return (
    <>
      <button
        className={`py-12 px-8 ${color} rounded-2xl text-base text-${textcolor}`}
      >
        {children}
      </button>
    </>
  );
}
