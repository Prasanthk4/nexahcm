import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/nexahcm/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['three-stdlib'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['three-stdlib']
  }
});
