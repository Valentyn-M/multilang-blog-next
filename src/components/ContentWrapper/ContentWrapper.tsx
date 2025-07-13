import s from './ContentWrapper.module.scss';
import clsx from 'clsx';

export interface ContentWrapperProps {
  readonly children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <article className={clsx(s.contentWrapper, 'container')}>
      <div className={s.contentBody}>{children}</div>
    </article>
  );
}
