import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Disable native modules
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'],
      output: {
        format: 'es',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false,
    // Reduce chunk size
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'three'
    ],
    exclude: ['@rollup/rollup-linux-x64-gnu'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  // Enable fast refresh
  server: {
    hmr: {
      overlay: true
    }
  }
});
