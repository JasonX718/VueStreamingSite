import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
      input:{
        main:fileURLToPath(new URL('./index.html', import.meta.url)),
        manager:fileURLToPath(new URL('./manager.html', import.meta.url)),
        video:fileURLToPath(new URL('./video.html', import.meta.url)),
        login:fileURLToPath(new URL('./login.html', import.meta.url)),
        intro:fileURLToPath(new URL('./intropage.html', import.meta.url)),
        register:fileURLToPath(new URL('./register.html', import.meta.url)),
      },
    },
  },
  plugins: [vue()],
  server:{
    host:'0.0.0.0',
    port:3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
