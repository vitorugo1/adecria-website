type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='text-slate-900 bg-slate-200 min-h-screen relative z-10'>
      <div className='mx-auto'>{children}</div>
    </div>
  );
}
