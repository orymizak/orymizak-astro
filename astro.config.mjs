import { defineConfig } from 'astro/config';
import { CONST_i18n_SETUP, CONST_vite_SETUP } from './src/constants';
import icon from "astro-icon";

export default defineConfig({
  i18n: CONST_i18n_SETUP,
  vite: CONST_vite_SETUP,
  integrations: [icon()]
});
