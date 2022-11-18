import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // 跨域处理时使用
  // server: {
  //   proxy: {
  //     '/api':{
  //       target: 'http://iwenwiki.com',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
