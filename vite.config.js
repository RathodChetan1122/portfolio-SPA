import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 🚀 CHANGE THIS FROM '/' TO './' TO FIX THE 404 ASSET LINKS
  base: './', 
  build: {
    target: 'esnext',
    minify: true, 
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            return 'vendor-utils';
          }
        }
      }
    }
  }
});