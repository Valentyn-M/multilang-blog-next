import Link from 'next/link';
import s from './Header.module.scss';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>EN</div>
    </header>
  );
}
