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
    /* 产物直接输出到 docs/：GitHub Pages 就是从 main 分支的 docs/ 目录发布的，
       构建产物即发布产物，省掉"先 build 到 dist 再手工拷到 docs"这一步 */
    outDir: 'docs',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1200,
  },
}))
