import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/

const common = {
   plugins: [vue()],
   root: fileURLToPath(new URL('../', import.meta.url)),
   base: '/', // where to load the app from for example '/celestial/'
   publicDir: 'public',
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('../src', import.meta.url)),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `
            @import "../src/assets/styles/variables.scss";`,
         },
      },
   },
};

export default common;
