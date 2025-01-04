import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Check if we're building for GitHub Pages or Vercel
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/nexahcm/' : '/',
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
