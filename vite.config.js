// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served in production
  base: '/',
  
  // Configure server options
  server: {
    port: 3000,
    open: false,
  },
  
  // Build options
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
  },
  
  // Resolve options
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});