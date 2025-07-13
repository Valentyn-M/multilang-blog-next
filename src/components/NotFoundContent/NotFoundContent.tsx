import clsx from 'clsx';
import s from './NotFoundContent.module.scss';
import Link from 'next/link';

export interface NotFoundContentProps {}

export default function NotFoundContent({}: NotFoundContentProps) {
  return (
    <section className={clsx(s.notFoundContent, 'container')}>
      <h1 className={s.title}>Page Not Found</h1>
      <p className={s.message}>Error 404</p>
      <div className={s.body}>
        <p>You probably went on the wrong link or the page has been deleted.</p>
        Return{' '}
        <Link href="/" className={s.link}>
          to the Home Page
        </Link>{' '}
        or use navigation from above.
      </div>
    </section>
  );
}
