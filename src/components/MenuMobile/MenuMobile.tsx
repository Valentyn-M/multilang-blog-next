import s from './MenuMobile.module.scss';
import Menu from '@/components/Menu/Menu';
import clsx from 'clsx';

export interface MenuMobileProps {
  isActive?: boolean;
  wrapRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
}

export default function MenuMobile({
  isActive,
  wrapRef,
  menuRef,
}: MenuMobileProps) {
  return (
    <>
      <div ref={wrapRef} className={clsx(s.menuMobileWrap, isActive && s.open)}>
        <div ref={menuRef} className={s.menuMobile}>
          <Menu />
        </div>
      </div>
      <div className={clsx(s.overlay, isActive && s.active)} />
    </>
  );
}
