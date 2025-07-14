'use client';

import { Dictionary } from '@/lib/getDictionary';
import s from './LanguageSwitcher.module.scss';
import { i18n, Locale } from '@/lib/i18n-config';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface LanguageSwitcherProps {
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function LanguageSwitcher({
  dict,
  lang,
}: LanguageSwitcherProps) {
  // Get url
  const pathname = usePathname();

  // Replace the first segment of the path with nextLang
  const makePath = (nextLang: Locale) => {
    const segments = pathname.split('/');
    segments[1] = nextLang;
    return segments.join('/') || '/';
  };

  // Get first other language
  const targetLang = i18n.locales.find((lacale) => lacale !== lang)!;

  // Make label for aria-label
  const labelKey = targetLang === 'en' ? 'switchToEn' : 'switchToUk';

  return (
    <nav className={s.languageSwitcher} aria-label={dict.langSwitcher}>
      <Link
        href={makePath(targetLang)}
        className={s.link}
        aria-label={dict[labelKey]}
        lang={targetLang}
        prefetch={false}
      >
        {targetLang.toUpperCase()}
      </Link>
    </nav>
  );
}
