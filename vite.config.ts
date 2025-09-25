import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: true,
      clientPort: 5173
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
