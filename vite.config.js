import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: /frontend-task-route/,
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
