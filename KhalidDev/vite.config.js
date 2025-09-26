import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Futuristic-portfolio/', // nom exact de ton repo GitHub
  plugins: [react()],
})
