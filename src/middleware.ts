import { DEFAULT_LOCALE, SUPPORTED_LOCALES, SLASH, REDIRECT_STATUS, EMPTY_STRING } from "./constants";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ redirect, url }, next) => {
  const maybeLocale = url.pathname.split(SLASH)[1] ?? EMPTY_STRING;

  if (SUPPORTED_LOCALES.includes(maybeLocale)) {
    return next();
  }

  // ruta fuera de mapeo, redirigir
  const newUrl = `${SLASH}${DEFAULT_LOCALE}${url.pathname}`;
  return redirect(newUrl, REDIRECT_STATUS);
});
