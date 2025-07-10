'use client';

import { breakpoints } from '@/styles/breakpoints';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Menu from '@/components/Menu/Menu';

export interface MenuHeaderProps {}

export default function MenuHeader({}: MenuHeaderProps) {
  // Render condition
  const isMobileSmall = useMediaQuery(
    `(max-width: ${breakpoints.mobileSmall})`,
  );
  if (isMobileSmall) return null;

  return <Menu />;
}
