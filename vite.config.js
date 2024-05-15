import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/DeltaKyselyFront/', 
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default output directory
  },
})
