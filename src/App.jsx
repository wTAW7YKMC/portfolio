import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Headline from './components/Headline.jsx'
import HeroSection from './components/HeroSection.jsx'
import BottomGrid from './components/BottomGrid.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import './App.css'

/** 开屏页退场动画时长（毫秒），必须与 SplashScreen.css 中的 .splash transition 保持一致 */
const SPLASH_EXIT_MS = 800

/**
 * 页面结构（复古报纸首页 · PC 优先）
 * ------------------------------------------------------------------
 * 两层结构：
 *   1. SplashScreen  开屏进入页：固定覆盖全屏，点击按钮后淡出（0.8s）
 *   2. .page         报纸首页：始终渲染在下方，开屏页淡出后自然显露，无缝衔接
 *
 *  .page        最外层：撑满视口的泛黄纸张
 *  .newspaper   版心：max-width 1700px 居中
 *    · Header      报头：哥特体大标题 + 三格分隔条 + 粗细双线
 *    · Headline    主头条：整行大写的粗标题
 *    · HeroSection 头条区：左图右文 + 底部带边框的"重点记录"盒
 *    · BottomGrid  底部三栏：图文混排 + 竖线分隔
 *
 * 状态说明：
 *   isEntered  是否已正式进入主页（true 时解除滚动锁）
 *   isLeaving  开屏页是否正在播放退场动画（用于防止重复点击）
 *   showSplash 开屏页是否仍挂载在 DOM 中（退场动画结束后卸载，释放节点与动画）
 */
export default function App() {
  const [isEntered, setIsEntered] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  /** 点击"进入"：先播退场动画，0.8s 后再卸载开屏页并标记已进入 */
  const handleEnter = useCallback(() => {
    // 已进入或退场动画进行中则忽略，避免连点导致定时器叠加
    if (isEntered || isLeaving) return

    setIsLeaving(true)
    window.setTimeout(() => {
      setIsEntered(true)
      setShowSplash(false)
    }, SPLASH_EXIT_MS)
  }, [isEntered, isLeaving])

  /** 开屏页存在期间锁定页面滚动，避免在"封面"上滚动到底下的报纸首页 */
  useEffect(() => {
    document.body.style.overflow = isEntered ? '' : 'hidden'
    // 组件卸载时恢复，防止影响其他页面
    return () => {
      document.body.style.overflow = ''
    }
  }, [isEntered])

  return (
    <>
      <div className="page">
        <div className="newspaper">
          <Header />
          <Headline />
          <HeroSection />
          <BottomGrid />
        </div>
      </div>

      {showSplash && <SplashScreen onEnter={handleEnter} isLeaving={isLeaving} />}
    </>
  )
}