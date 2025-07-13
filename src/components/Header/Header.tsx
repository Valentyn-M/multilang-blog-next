import AppBar from '@/components/AppBar/AppBar';
import s from './Header.module.scss';
import { Locale } from '@/lib/i18n-config';
import { Dictionary } from '@/lib/getDictionary';

export interface HeaderProps {
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function Header({ dict, lang }: HeaderProps) {
  return (
    <header className={s.header}>
      <AppBar dict={dict} lang={lang} />
    </header>
  );
}
