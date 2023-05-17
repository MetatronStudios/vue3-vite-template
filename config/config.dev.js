import { defineConfig } from 'vite';
import common from './config.common';

// https://vitejs.dev/config/
const dev = {
   mode: 'development',
   logLevel: 'info',
   define: {
      'process.env': {
         NODE_ENV: '"development"',
      },
   },
   css: {
      ...common.css,
      devSourcemap: true,
   },
};
export default defineConfig({
   ...common,
   ...dev,
});
