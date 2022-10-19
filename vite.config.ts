import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  VitePWA({
    mode: "development",
    base: "/",
    srcDir: "src",
    filename: "sw.ts",
    includeAssets: ["/favicon.png"],
    strategies: "injectManifest",
    manifest: {
      name: "Home System",
      short_name: "Home System",
      theme_color: "#000",
      start_url: "/",
      display: "standalone",
      background_color: "#fff",
      icons: [
        {
          src: "public/img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "public/img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "public/img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
