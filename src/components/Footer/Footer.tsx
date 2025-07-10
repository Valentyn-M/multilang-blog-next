import clsx from 'clsx';
import s from './Footer.module.scss';

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.footerWrap)}>
        <p className={s.copy}>
          © Mini-Blog, {new Date().getFullYear()} | Created by Valentyn
          Mostovyi
        </p>
      </div>
    </footer>
  );
}
