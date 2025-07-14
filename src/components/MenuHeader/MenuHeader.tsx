'use client';

import { breakpoints } from '@/styles/breakpoints';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Menu from '@/components/Menu/Menu';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

export interface MenuHeaderProps {
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function MenuHeader({ dict, lang }: MenuHeaderProps) {
  // Render condition
  const isMobileSmall = useMediaQuery(
    `(max-width: ${breakpoints.mobileSmall})`,
  );
  if (isMobileSmall) return null;

  return <Menu dict={dict} lang={lang} />;
}
