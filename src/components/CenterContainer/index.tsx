import clsx from 'clsx';

export function CenterContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={clsx('max-w-5xl mx-auto')}>{children}</div>;
}
