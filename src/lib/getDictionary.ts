import { i18n, Locale } from '@/lib/i18n-config';

export async function getDictionary(locale: Locale) {
  const dictionaries = {
    en: () => import('@/locales/en.json').then((m) => m.default),
    uk: () => import('@/locales/uk.json').then((m) => m.default),
  } as const;

  if (!(locale in dictionaries)) {
    return dictionaries[i18n.defaultLocale]();
  }

  return dictionaries[locale](); //  <-  Promise<Dict>
}

// Type of the entire dictionary
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
