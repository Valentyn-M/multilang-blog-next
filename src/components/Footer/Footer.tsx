import clsx from 'clsx';
import s from './Footer.module.scss';
import { SITE_AUTHOR_URL, SITE_TITLE } from '@/constants/site.config';
import { Dictionary } from '@/lib/getDictionary';

export interface FooterProps {
  readonly dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.footerWrap)}>
        <p className={s.copy}>
          © {SITE_TITLE}, {new Date().getFullYear()} | {dict.createdBy}{' '}
          <a className={s.link} href={SITE_AUTHOR_URL} target="_blank">
            {dict.autorBy}
          </a>
        </p>
      </div>
    </footer>
  );
}
