import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      '1a939dc1890a.ngrok-free.app',
      '.ngrok-free.app',
      '.ngrok.io',
    ],
  },
})

