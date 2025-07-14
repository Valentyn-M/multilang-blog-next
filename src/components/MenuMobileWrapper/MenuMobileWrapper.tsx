'use client';

import MenuMobile from '@/components/MenuMobile/MenuMobile';
import MenuMobileButton from '@/components/MenuMobileButton/MenuMobileButton';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';
import { breakpoints } from '@/styles/breakpoints';
import { useEffect, useRef, useState } from 'react';

export interface MenuMobileWrapperProps {
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function MenuMobileWrapper({
  dict,
  lang,
}: MenuMobileWrapperProps) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleActivateMobileMenu = (): void => {
    setIsMobileMenuActive((prev) => !prev);
  };

  const btnRef = useRef<HTMLButtonElement>(null);
  const menuWrapRef = useRef<HTMLDivElement>(null!);
  const menuRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const clickedButton = btnRef.current?.contains(target);
      const clickedWrap = menuWrapRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);

      const isLink = target.closest('a');

      if (
        isMobileMenuActive &&
        !clickedButton &&
        ((!clickedWrap && !clickedMenu) || (clickedMenu && isLink))
      ) {
        setIsMobileMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuActive]);

  // Component render condition
  const isMobileSmall = useMediaQuery(
    `(max-width: ${breakpoints.mobileSmall})`,
  );
  if (!isMobileSmall) return null;

  return (
    <>
      <MenuMobileButton
        isActive={isMobileMenuActive}
        handleActivate={handleActivateMobileMenu}
        ref={btnRef}
        dict={dict}
      />
      <MenuMobile
        isActive={isMobileMenuActive}
        menuRef={menuRef}
        wrapRef={menuWrapRef}
        dict={dict}
        lang={lang}
      />
    </>
  );
}
