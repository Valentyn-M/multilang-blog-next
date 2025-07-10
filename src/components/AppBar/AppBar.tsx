import s from './AppBar.module.scss';
import Logo from '@/components/Logo/Logo';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import clsx from 'clsx';
import MenuMobileWrapper from '@/components/MenuMobileWrapper/MenuMobileWrapper';
import MenuHeader from '@/components/MenuHeader/MenuHeader';

export interface AppBarProps {}

export default function AppBar({}: AppBarProps) {
  return (
    <div className={clsx(s.appBar, 'container')}>
      <Logo />

      {/* Render if screen width is 480px or more */}
      <MenuHeader />

      <LanguageSwitcher />

      {/* Render if screen width is 480px or more */}
      <MenuMobileWrapper />
    </div>
  );
}
