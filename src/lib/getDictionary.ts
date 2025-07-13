import type { Locale } from './i18n-config';

export async function getDictionary(locale: Locale) {
  const dictionaries = {
    en: () => import('@/locales/en.json').then((m) => m.default), // <- m, не module
    uk: () => import('@/locales/uk.json').then((m) => m.default),
  } as const;

  if (!dictionaries[locale]) throw new Error(`Unknown locale "${locale}"`);

  return dictionaries[locale]();
}
