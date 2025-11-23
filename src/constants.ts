// importaciones
import tailwindcss from "@tailwindcss/vite";
import pkg from "../package.json";
import es from "./i18n/es";
import en from "./i18n/en";

// exportaciones
// constantes texto
export const CONST_i18n_MODE_MANUAL = "manual"; 
export const CONST_EMPTY_STRING = "";
export const CONST_SPANISH = "es";
export const CONST_ENGLISH = "en";
export const CONST_SLASH = "/";
export const CONST_CARET = "^";
export const CONST_STRING_RESIZE = "resize";

// arreglos
export const CONST_SUPPORTED_LOCALES = [CONST_SPANISH, CONST_ENGLISH]; // ["es", "en"]

// regex
export const LOCALE_PREFIX_REGEX = /^\/(es|en)/;

// constantes numéricas
export const CONST_REDIRECT_STATUS = 302;
export const CONST_PHONE_RESOLUTION = 768;

// constantes compuestas
export const CONST_DEFAULT_LOCALE = CONST_SPANISH; // es
export const CONST_DEFAULT_PATH = CONST_SLASH + CONST_DEFAULT_LOCALE; // /es

// configuraciones

// arreglos
export const CONST_i18n_LANGUAGES = { es, en };

// types
export type Lang = keyof typeof CONST_i18n_LANGUAGES;

export const CONST_i18n_SETUP = {
  mode: CONST_i18n_MODE_MANUAL, // manual
  defaultLocale: CONST_DEFAULT_LOCALE, // es
  locales: CONST_SUPPORTED_LOCALES, // ["es", "en"]
}

export const CONST_vite_SETUP = {
  plugins: [tailwindcss()]
}

// versionamiento
export const CONST_CURRENT_VERSION = pkg.version;
