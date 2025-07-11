import clsx from 'clsx';
import s from './Footer.module.scss';
import {
  SITE_AUTHOR_NAME,
  SITE_AUTHOR_URL,
  SITE_TITLE,
} from '@/constants/site.config';

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.footerWrap)}>
        <p className={s.copy}>
          © {SITE_TITLE}, {new Date().getFullYear()} | Created by{' '}
          <a className={s.link} href={SITE_AUTHOR_URL} target="_blank">
            {SITE_AUTHOR_NAME}
          </a>
        </p>
      </div>
    </footer>
  );
}
