import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite 配置
 * ------------------------------------------------------------------
 * base : 生产构建时使用 GitHub Pages 的子路径 /portfolio/，
 *        本地开发（npm run dev）保持根路径 / 方便预览。
 * server.open : 启动后自动用默认浏览器打开。
 */
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1200,
  },
}))
