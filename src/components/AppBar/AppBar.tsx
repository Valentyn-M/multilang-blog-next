import s from './AppBar.module.scss';
import Logo from '@/components/Logo/Logo';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import clsx from 'clsx';
import MenuMobileWrapper from '@/components/MenuMobileWrapper/MenuMobileWrapper';
import MenuHeader from '@/components/MenuHeader/MenuHeader';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

export interface AppBarProps {
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function AppBar({ dict, lang }: AppBarProps) {
  return (
    <div className={clsx(s.appBar, 'container')}>
      <Logo lang={lang} />

      {/* Render if screen width is 480px or more */}
      <MenuHeader dict={dict} lang={lang} />

      <LanguageSwitcher dict={dict} lang={lang} />

      {/* Render if screen width is 480px or more */}
      <MenuMobileWrapper dict={dict} lang={lang} />
    </div>
  );
}
