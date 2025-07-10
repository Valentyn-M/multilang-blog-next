import Link from 'next/link';
import s from './Menu.module.scss';

export interface MenuProps {}

export default function Menu({}: MenuProps) {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
