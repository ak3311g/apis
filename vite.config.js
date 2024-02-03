import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    '/users': {
      target: 'https://api.notion.com/v1/',
    },
  },
})
