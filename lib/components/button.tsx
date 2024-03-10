import clsx from 'clsx';
import React from 'react';

type Variant = 'primary' | 'secondary';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: Variant;
};

const theme: Record<Variant, string> = {
  primary: clsx('bg-gray-900 text-white hover:bg-gray-950 dark:bg-gray-800'),
  secondary: clsx('bg-slate-50 dark:bg-slate-50/10'),
};

export function Button({
  className,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const baseClasses = clsx(
    'flex items-center justify-center py-3 px-5 gap-2 rounded-full outline-none hover:scale-105 active:scale-105 transition-all w-fit h-fit disabled:scale-100 disabled:bg-opacity-65',
    theme[variant]
  );

  return <button className={clsx(baseClasses, className)} {...rest} />;
}
