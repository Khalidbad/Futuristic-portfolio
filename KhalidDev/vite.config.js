import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ou bien supprime complètement la ligne base
  plugins: [react()],
})

