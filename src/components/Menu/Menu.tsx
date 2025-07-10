import Link from 'next/link';
import s from './Menu.module.scss';

export interface MenuProps {}

export default function Menu({}: MenuProps) {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href="/" className={s.link}>
            Home
          </Link>
        </li>
        <li className={s.item}>
          <Link href="/about" className={s.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
