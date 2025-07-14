import clsx from 'clsx';
import s from './MainTitle.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

export interface MainTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  readonly children: ReactNode;
}

export default function MainTitle({
  children,
  className,
  ...rest
}: MainTitleProps) {
  return (
    <h1 className={clsx(s.title, className)} {...rest}>
      {children}
    </h1>
  );
}
