import Menu from '@/components/Menu/Menu';
import s from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import clsx from 'clsx';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerWrap, 'container')}>
        <Logo />
        <Menu />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
