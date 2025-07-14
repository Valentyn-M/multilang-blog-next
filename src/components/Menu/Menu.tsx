import Link from 'next/link';
import s from './Menu.module.scss';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

export interface MenuProps {
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function Menu({ dict, lang }: MenuProps) {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href={`/${lang}`} className={s.link}>
            {dict.home}
          </Link>
        </li>
        <li className={s.item}>
          <Link href={`/${lang}/about`} className={s.link}>
            {dict.about}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
