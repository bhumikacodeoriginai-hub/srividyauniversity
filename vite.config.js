import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is configurable so the SAME code works on any host:
//   • Vercel / Netlify / custom domain (served at root)  -> base "/" (default)
//   • GitHub Pages project site (served at /srividyauniversity/) -> set VITE_BASE
// The GitHub Pages workflow sets VITE_BASE=/srividyauniversity/ during build.
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  }
})
