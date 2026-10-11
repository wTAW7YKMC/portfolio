import Header from './components/Header.jsx'
import Headline from './components/Headline.jsx'
import HeroSection from './components/HeroSection.jsx'
import BottomGrid from './components/BottomGrid.jsx'
import './App.css'

/**
 * 页面结构（复古报纸首页 · PC 优先）
 * ------------------------------------------------------------------
 * .page        最外层：撑满视口的泛黄纸张
 * .newspaper   版心：max-width 1700px 居中
 *   · Header      报头：哥特体大标题 + 三格分隔条 + 粗细双线
 *   · Headline    主头条：整行大写的粗标题
 *   · HeroSection 头条区：左图右文 + 底部带边框的"重点记录"盒
 *   · BottomGrid  底部三栏：图文混排 + 竖线分隔
 */
export default function App() {
  return (
    <div className="page">
      <div className="newspaper">
        <Header />
        <Headline />
        <HeroSection />
        <BottomGrid />
      </div>
    </div>
  )
}