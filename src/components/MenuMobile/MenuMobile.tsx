import s from './MenuMobile.module.scss';
import Menu from '@/components/Menu/Menu';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';
import clsx from 'clsx';

export interface MenuMobileProps {
  readonly isActive?: boolean;
  readonly wrapRef: React.RefObject<HTMLDivElement>;
  readonly menuRef: React.RefObject<HTMLDivElement>;
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function MenuMobile({
  isActive,
  wrapRef,
  menuRef,
  dict,
  lang,
}: MenuMobileProps) {
  return (
    <>
      <div ref={wrapRef} className={clsx(s.menuMobileWrap, isActive && s.open)}>
        <div ref={menuRef} className={s.menuMobile}>
          <Menu dict={dict} lang={lang} />
        </div>
      </div>
      <div className={clsx(s.overlay, isActive && s.active)} />
    </>
  );
}
