import { defineConfig } from 'astro/config';
import { CONST_i18n_SETUP, CONST_vite_SETUP } from './src/constants';

export default defineConfig({
  i18n: CONST_i18n_SETUP,
  vite: CONST_vite_SETUP
});