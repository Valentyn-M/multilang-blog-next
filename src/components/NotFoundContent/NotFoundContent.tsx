import clsx from 'clsx';
import s from './NotFoundContent.module.scss';
import Link from 'next/link';
import MainTitle from '@/components/MainTitle/MainTitle';

export default function NotFoundContent() {
  return (
    <section className={clsx(s.notFoundContent, 'container')}>
      <MainTitle>Page Not Foung</MainTitle>
      <p className={s.message}>Error 404</p>
      <div className={s.body}>
        <p>You probably went on the wrong link or the page has been deleted.</p>
        Return{' '}
        <Link href="/en" className={s.link}>
          to the Home Page
        </Link>{' '}
        or use the menu.
      </div>
    </section>
  );
}
