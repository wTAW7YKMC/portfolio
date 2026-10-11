/**
 * 一键发布脚本 · npm run deploy
 * ------------------------------------------------------------------
 * 发布链路：构建产物 → docs/ → 提交推送到 main → GitHub Pages 自动生效
 *
 * 为什么需要这个脚本（而不是 package.json 里写一长串命令）：
 *   · 构建结果没有变化时 git commit 会返回非 0 退出码，
 *     直接写 "&& git commit && git push" 会让整条命令中途断掉、推送不出去；
 *     这里用 try/catch 把这种情况当成"无需提交"正常跳过。
 *   · 顺便打印清晰的中文进度，出问题能一眼看出卡在哪一步。
 *
 * 注意：本脚本只负责发布"构建产物"（docs/）。
 *       源码的改动请自己用 git commit 提交，避免把没写完的代码误发上去。
 */
import { execSync } from 'node:child_process'

/** 执行一条命令并把输出直接透传到当前终端，方便看构建/推送日志 */
const run = (cmd) => execSync(cmd, { stdio: 'inherit' })

console.log('\n▶ [1/3] 构建生产包 → docs/')
run('npx vite build')

console.log('\n▶ [2/3] 提交 docs/ 的变更')
run('git add docs')
try {
  run('git commit -m "Publish site build to docs"')
} catch {
  console.log('  docs/ 内容与上次一致，跳过提交')
}

console.log('\n▶ [3/3] 推送到 main')
run('git push origin main')

console.log('\n✔ 发布完成，GitHub Pages 通常需要几十秒完成部署')
console.log('  线上地址：https://wtaw7ykmc.github.io/portfolio/\n')