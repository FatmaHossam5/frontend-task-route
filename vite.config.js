import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend-task-route/', // تأكد من أن هذا المسار صحيح بناءً على هيكل GitHub Pages الخاص بك
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx'
      }
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5001'
    }
  }
});
