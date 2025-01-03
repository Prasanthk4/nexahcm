import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-vendor';
            }
            return 'vendor';
          }
        }
      }
    },
    // Disable terser for Vercel compatibility
    minify: 'esbuild',
    target: 'esnext'
  },
  // Enable caching
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
