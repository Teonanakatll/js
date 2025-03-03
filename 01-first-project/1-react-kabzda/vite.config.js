import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/app',  // Указываем базовый путь для nginx
  plugins: [react()],

    server: {
    port: 3000,  // Здесь укажи порт, который тебе нужен
  },

})
