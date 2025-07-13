import { svgIcon } from '@/app/layout';
import s from './Logo.module.scss';
import Link from 'next/link';

export interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <Link href="/" className={s.logo}>
      <svg className={s.logoIcon}>
        <use href={`${svgIcon}#icon-logo`} />
      </svg>
      <span>Mini-Blog</span>
    </Link>
  );
}
