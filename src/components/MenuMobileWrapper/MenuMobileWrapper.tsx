'use client';

import MenuMobile from '@/components/MenuMobile/MenuMobile';
import MenuMobileButton from '@/components/MenuMobileButton/MenuMobileButton';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { breakpoints } from '@/styles/breakpoints';
import { useEffect, useRef, useState } from 'react';

export interface MenuMobileWrapperProps {}

export default function MenuMobileWrapper({}: MenuMobileWrapperProps) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleActivateMobileMenu = (): void => {
    setIsMobileMenuActive((prev) => !prev);
  };

  const btnRef = useRef<HTMLButtonElement>(null);
  const menuWrapRef = useRef<HTMLDivElement>(null!);
  const menuRef = useRef<HTMLDivElement>(null!);

  // Закриття мобільного меню по кліку за його межами
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const clickedButton = btnRef.current?.contains(target);
      const clickedWrap = menuWrapRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);

      const isLink = target.closest('a'); // шукаємо <a>

      if (
        isMobileMenuActive &&
        !clickedButton &&
        ((!clickedWrap && !clickedMenu) || // клік поза меню і поза обгорткою
          (clickedMenu && isLink)) // або клік по <a> всередині меню
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
      />
      <MenuMobile
        isActive={isMobileMenuActive}
        menuRef={menuRef}
        wrapRef={menuWrapRef}
      />
    </>
  );
}
