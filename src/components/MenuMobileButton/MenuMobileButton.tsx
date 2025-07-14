'use client';

import { ComponentProps, forwardRef, useEffect } from 'react';
import clsx from 'clsx';
import s from './MenuMobileButton.module.scss';
import { Dictionary } from '@/lib/getDictionary';

export interface MenuMobileButtonProps extends ComponentProps<'button'> {
  isActive: boolean;
  handleActivate: () => void;
  readonly dict: Dictionary;
}

const MenuMobileButton = forwardRef<HTMLButtonElement, MenuMobileButtonProps>(
  ({ isActive, handleActivate, dict, ...rest }, ref) => {
    useEffect(() => {
      const body = document.body;

      if (isActive) {
        body.classList.add('lock');
      } else {
        body.classList.remove('lock');
      }

      return () => {
        body.classList.remove('lock');
      };
    }, [isActive]);

    return (
      <button
        ref={ref}
        className={clsx(s.btnBurger, isActive && s.active)}
        type="button"
        aria-label={dict.menuMobileButtonLabel}
        onClick={handleActivate}
        {...rest}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  },
);

MenuMobileButton.displayName = 'MenuMobileButton';
export default MenuMobileButton;
