import type { Locale } from './i18n-config';

export async function getDictionary(locale: Locale) {
  const dictionaries = {
    en: () => import('@/locales/en.json').then((module) => module.default),
    uk: () => import('@/locales/uk.json').then((module) => module.default),
  } as const;

  return dictionaries[locale]();
}
