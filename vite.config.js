import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is deployed to GitHub Pages under /srividyauniversity/.
// `base` makes all built asset URLs resolve correctly on that sub-path.
// If you later deploy at a domain root (e.g. Netlify/Vercel), set base to '/'.
export default defineConfig({
  base: '/srividyauniversity/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  }
})
