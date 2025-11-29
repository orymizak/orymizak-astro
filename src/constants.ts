// -----------------------------
// Importaciones
// -----------------------------
import tailwindcss from "@tailwindcss/vite";
import pkg from "../package.json";
import es from "./i18n/es";
import en from "./i18n/en";

// -----------------------------
// Constantes generales
// -----------------------------

/* Configuración del sistema i18n */
export const CONST_i18n_MODE_MANUAL = "manual";

/* Cadena vacía reutilizable */
export const CONST_EMPTY_STRING = "";

/* Identificadores de idioma soportados */
export const CONST_SPANISH = "es";
export const CONST_ENGLISH = "en";

/* Caracteres usados para construir rutas o expresiones */
export const CONST_SLASH = "/";
export const CONST_CARET = "^";

// -----------------------------
// Configuración de idiomas
// -----------------------------

/* Lista de idiomas soportados por la aplicación */
export const CONST_SUPPORTED_LOCALES = [CONST_SPANISH, CONST_ENGLISH];

/* Prefijo de ruta válido para locales (p. ej., /es, /en) */
export const LOCALE_PREFIX_REGEX = /^\/(es|en)/;

/* Idioma por defecto */
export const CONST_DEFAULT_LOCALE = CONST_SPANISH;

/* Ruta por defecto asociada al idioma principal (ej: "/es") */
export const CONST_DEFAULT_PATH = CONST_SLASH + CONST_DEFAULT_LOCALE;

/* Objeto que contiene los textos por idioma */
export const CONST_i18n_LANGUAGES = { es, en };

/* Alias para claves válidas del objeto de idiomas */
export type Lang = keyof typeof CONST_i18n_LANGUAGES;

/**
 * Configuración global del sistema i18n.
 * Útil para inicializar o validar la app en modo multilenguaje.
 */
export const CONST_i18n_SETUP = {
  mode: CONST_i18n_MODE_MANUAL,
  defaultLocale: CONST_DEFAULT_LOCALE,
  locales: CONST_SUPPORTED_LOCALES,
};

// -----------------------------
// Configuración de Vite
// -----------------------------

/**
 * Configuración base para la configuración de Vite.
 * 
 * Actualmente solo habilita Tailwind desde @tailwindcss/vite.
 */
export const CONST_vite_SETUP = {
  plugins: [tailwindcss()],
};

// -----------------------------
// Otras constantes
// -----------------------------

/* Código HTTP para redirecciones */
export const CONST_REDIRECT_STATUS = 302;

/* Resolución límite para responsive */
export const CONST_PHONE_RESOLUTION = 768;

/* Versión actual del proyecto (package.json) */
export const CONST_CURRENT_VERSION = pkg.version;
