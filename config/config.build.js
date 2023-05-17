import { defineConfig } from 'vite';
import common from './config.common';

// https://vitejs.dev/config/
const build = {
   mode: 'production',
   logLevel: 'error',
   define: {
      'process.env': {
         NODE_ENV: '"production"',
      },
   },
   css: {
      ...common.css,
      devSourcemap: false,
   },
};
export default defineConfig({
   ...common,
   ...build,
});
