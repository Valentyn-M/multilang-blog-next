import s from './AppBar.module.scss';
import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Menu/Menu';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import clsx from 'clsx';

export interface AppBarProps {}

export default function AppBar({}: AppBarProps) {
  return (
    <div className={clsx(s.appBar, 'container')}>
      <Logo />

      {/* Render if scfreen width is 480px or more */}
      <Menu />

      <LanguageSwitcher />
    </div>
  );
}
