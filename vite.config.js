import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["swiper"],
  },
  plugins: [react()],
  build:{
    outDir: "build"
  },
  server: {
    host: '127.0.0.1'
  }
})
