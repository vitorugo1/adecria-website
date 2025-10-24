import clsx from 'clsx';

export function CenterContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={clsx('max-w-4xl mx-auto')}>{children}</div>;
}
