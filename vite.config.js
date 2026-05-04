import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Tự động cập nhật app khi có code mới
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'], // Các file icon
      manifest: {
        name: 'my portfolio', // Tên đầy đủ hiển thị lúc cài
        short_name: 'Developer',     // Tên ngắn nằm dưới cái icon app
        description: 'my profile',
        theme_color: '#0f172a',     // Màu viền của app (ní có thể đổi mã màu tùy thích)
        background_color: '#0f172a',
        display: 'standalone',      // Giúp app mở full màn hình, mất thanh địa chỉ web
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})