import s from './Footer.module.scss';

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className={s.footer}>
      <p>
        © Mini-blog, {new Date().getFullYear()} | Created by Valentyn Mostovyi
      </p>
    </footer>
  );
}
