type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='text-slate-900 bg-slate-200 min-h-screen'>
      <div className='mx-auto'>{children}</div>
    </div>
  );
}
