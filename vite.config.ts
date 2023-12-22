import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vike/plugin'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '#~': resolve(__dirname, './src'),
    },
  },
  plugins: [react(), ssr({ prerender: true })],
})
