import clsx from 'clsx';
import s from './ContentBody.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

export interface ContentBodyProps extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

export default function ContentBody({
  children,
  className,
  ...rest
}: ContentBodyProps) {
  return (
    <div className={clsx(s.body, className)} {...rest}>
      {children}
    </div>
  );
}
