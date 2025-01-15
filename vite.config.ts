import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdownPlugin, Mode } from 'vite-plugin-markdown'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdownPlugin({
    mode: [Mode.HTML]
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
