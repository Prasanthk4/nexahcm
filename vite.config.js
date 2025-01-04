import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Check if we're building for GitHub Pages or Vercel
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/nexahcm/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three']
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/javascript'
    }
  }
});
