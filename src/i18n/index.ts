import { CONST_DEFAULT_LOCALE, CONST_ENGLISH, CONST_i18n_LANGUAGES, type Lang } from '../constants';

export function getTexts(locale?: string) {
  return CONST_i18n_LANGUAGES[(locale && locale in CONST_i18n_LANGUAGES ? locale : CONST_DEFAULT_LOCALE) as Lang];
}

export function getI18nStaticPaths() {
  return [{ params: { locale: CONST_DEFAULT_LOCALE } }, { params: { locale: CONST_ENGLISH } }];
}
