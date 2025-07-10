import AppBar from '@/components/AppBar/AppBar';
import s from './Header.module.scss';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className={s.header}>
      <AppBar />
    </header>
  );
}
