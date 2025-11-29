import { CONST_DEFAULT_LOCALE, CONST_ENGLISH, CONST_i18n_LANGUAGES, type Lang } from '../constants';

/**
 * Función para obtener los textos dinámicos según el idioma.
 * 
 * Esta función carga el conjunto de textos correspondiente al `locale` recibido.
 * Si el locale no es válido o no se envía ninguno, se utiliza el idioma por defecto.
 *
 * @param locale - Código del idioma, por ejemplo: "es" (español), "en" (english).
 * @returns Objeto con los textos del idioma especificado.
 */
export function getTexts(locale?: string) {
  return CONST_i18n_LANGUAGES[(
    locale && locale in CONST_i18n_LANGUAGES 
      ? locale 
      : CONST_DEFAULT_LOCALE) as Lang];
}

/**
 * Función para obtener rutas estáticas (requeridos por Astro).
 * Estos se requieren para generar páginas en todos los idiomas disponibles.
 * 
 * Cada elemento del arreglo representa un idioma a compilar.
 * 
 * @returns Array de objetos `{ params: { locale: string } }`
 *          para cada idioma soportado por la aplicación.
 */
export function getI18nStaticPaths() {
  return [
    { params: { locale: CONST_DEFAULT_LOCALE } }, 
    { params: { locale: CONST_ENGLISH } }
  ];
}
