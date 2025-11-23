// importaciones
import tailwindcss from "@tailwindcss/vite";
import pkg from "../package.json";
import es from "./i18n/es";
import en from "./i18n/en";

// exportaciones
// constantes texto
export const i18n_MODE_MANUAL = "manual"; 
export const EMPTY_STRING = "";
export const SPANISH = "es";
export const ENGLISH = "en";
export const SLASH = "/";
export const CARET = "^";
export const STRING_RESIZE = "resize";

// arreglos
export const SUPPORTED_LOCALES = [SPANISH, ENGLISH]; // ["es", "en"]

// constantes numéricas
export const REDIRECT_STATUS = 302;
export const PHONE_RESOLUTION = 768;

// constantes compuestas
export const DEFAULT_LOCALE = SPANISH; // es
export const DEFAULT_PATH = SLASH + DEFAULT_LOCALE; // /es

// configuraciones

// arreglos
export const i18n_LANGUAGES = { es, en };

// types
export type Lang = keyof typeof i18n_LANGUAGES;

export const i18n_SETUP = {
  mode: i18n_MODE_MANUAL, // manual
  defaultLocale: DEFAULT_LOCALE, // es
  locales: SUPPORTED_LOCALES, // ["es", "en"]
}

export const vite_SETUP = {
  plugins: [tailwindcss()]
}

// versionamiento
export const CURRENT_VERSION = pkg.version;
