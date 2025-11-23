import { CONST_DEFAULT_LOCALE, CONST_SUPPORTED_LOCALES, CONST_SLASH, CONST_REDIRECT_STATUS, CONST_EMPTY_STRING } from "./constants";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ redirect, url }, next) => {
  const maybeLocale = url.pathname.split(CONST_SLASH)[1] ?? CONST_EMPTY_STRING;

  if (CONST_SUPPORTED_LOCALES.includes(maybeLocale)) {
    return next();
  }

  // ruta fuera de mapeo, redirigir
  const newUrl = `${CONST_SLASH}${CONST_DEFAULT_LOCALE}${url.pathname}`;
  return redirect(newUrl, CONST_REDIRECT_STATUS);
});
