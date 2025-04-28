import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/botanaut-app/', // 👈 ADD THIS exactly (matching your folder name!)
})
