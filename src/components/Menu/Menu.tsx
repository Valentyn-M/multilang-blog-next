'use client';

import Link from 'next/link';
import s from './Menu.module.scss';
import { breakpoints } from '@/styles/breakpoints';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export interface MenuProps {}

export default function Menu({}: MenuProps) {
  const isMobileSmall = useMediaQuery(
    `(max-width: ${breakpoints.mobileSmall})`,
  );

  if (isMobileSmall) return null;

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
