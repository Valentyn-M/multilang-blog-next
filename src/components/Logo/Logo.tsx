import { svgIcon } from '@/app/[lang]/layout';
import s from './Logo.module.scss';
import Link from 'next/link';
import { Locale } from '@/lib/i18n-config';

export interface LogoProps {
  readonly lang: Locale;
}

export default function Logo({ lang }: LogoProps) {
  return (
    <Link href={`/${lang}`} className={s.logo}>
      <svg className={s.logoIcon}>
        <use href={`${svgIcon}#icon-logo`} />
      </svg>
      <span>Mini-Blog</span>
    </Link>
  );
}
