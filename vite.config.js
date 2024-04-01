import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   hmr: {
  //     // set MIME type for JSX files
  //     mimeTypes: {
  //       'text/jsx': ['jsx'],
  //     },
  //   },
  // },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
