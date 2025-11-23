import { DEFAULT_LOCALE, ENGLISH, i18n_LANGUAGES, type Lang } from '../constants';

export function getTexts(locale?: string) {
  return i18n_LANGUAGES[(locale && locale in i18n_LANGUAGES ? locale : DEFAULT_LOCALE) as Lang];
}

export function getI18nStaticPaths() {
  return [{ params: { locale: DEFAULT_LOCALE } }, { params: { locale: ENGLISH } }];
}
