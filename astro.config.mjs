import { defineConfig } from 'astro/config';
import { i18n_SETUP, vite_SETUP } from './src/constants';

export default defineConfig({
  i18n: i18n_SETUP,
  vite: vite_SETUP
});