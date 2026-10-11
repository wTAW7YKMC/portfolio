import './SplashScreen.css'

/**
 * 开屏进入页 (Splash Screen)
 * ------------------------------------------------------------------
 * 定位：报纸首页之前的一层"神秘封面"，占满整屏（100vh），
 *       深色羊皮纸底 + 微弱星光 + 魔法阵圆环，点击按钮后淡出，露出报纸首页。
 *
 * 结构自上而下（整体垂直居中）：
 *   · emblem  魔法阵圆环：外圈实线 + 虚线内圈 + 旋转的锥形刻度，中心一枚符文
 *   · title   哥特体主标题 "Magical World News"（与报头同一字体，保持统一）
 *   · sub     副标题 "A Portfoliographer's Journey"
 *   · btn     盖章样式矩形按钮："揭开命运的篇章 / Open the Journal"
 *
 * 动画全部由 CSS 负责（见 SplashScreen.css）：
 *   · 入场：各元素依次 riseIn（淡入 + 自下而上浮起）
 *   · 退场：父层加 .splash--leaving 后整体淡出并轻微放大模糊，营造"墨水晕开"感
 */

/**
 * 星光坐标表。
 * 用固定值（而非随机数）是为了保证每次刷新星位一致、便于微调；
 * 每颗星通过 CSS 变量控制大小、闪烁周期与延时，形成错落的呼吸感。
 */
const STARS = [
  { top: '12%', left: '18%', size: 3, dur: 3.2, delay: 0.0 },
  { top: '18%', left: '72%', size: 2, dur: 4.1, delay: 0.6 },
  { top: '8%',  left: '46%', size: 2, dur: 3.6, delay: 1.2 },
  { top: '26%', left: '9%',  size: 2, dur: 4.4, delay: 0.3 },
  { top: '30%', left: '88%', size: 3, dur: 3.0, delay: 1.8 },
  { top: '42%', left: '4%',  size: 2, dur: 3.8, delay: 0.9 },
  { top: '46%', left: '95%', size: 2, dur: 4.6, delay: 0.2 },
  { top: '58%', left: '12%', size: 3, dur: 3.4, delay: 1.5 },
  { top: '62%', left: '84%', size: 2, dur: 4.0, delay: 0.7 },
  { top: '72%', left: '22%', size: 2, dur: 3.3, delay: 2.1 },
  { top: '78%', left: '66%', size: 3, dur: 4.2, delay: 1.1 },
  { top: '86%', left: '38%', size: 2, dur: 3.7, delay: 0.4 },
  { top: '90%', left: '80%', size: 2, dur: 4.5, delay: 1.6 },
  { top: '16%', left: '32%', size: 1, dur: 3.1, delay: 2.4 },
  { top: '22%', left: '58%', size: 1, dur: 4.3, delay: 1.4 },
  { top: '36%', left: '26%', size: 1, dur: 3.9, delay: 0.5 },
  { top: '40%', left: '68%', size: 1, dur: 3.5, delay: 2.0 },
  { top: '54%', left: '34%', size: 1, dur: 4.1, delay: 1.0 },
  { top: '56%', left: '76%', size: 1, dur: 3.2, delay: 0.8 },
  { top: '68%', left: '48%', size: 1, dur: 4.4, delay: 1.9 },
  { top: '74%', left: '90%', size: 1, dur: 3.6, delay: 2.3 },
  { top: '82%', left: '14%', size: 1, dur: 4.0, delay: 1.3 },
  { top: '88%', left: '58%', size: 1, dur: 3.3, delay: 0.1 },
  { top: '6%',  left: '62%', size: 1, dur: 4.2, delay: 2.2 },
  { top: '94%', left: '26%', size: 1, dur: 3.8, delay: 0.6 },
  { top: '34%', left: '50%', size: 1, dur: 3.0, delay: 2.5 },
]

/**
 * @param {() => void} onEnter   点击"进入"时触发，由 App 负责状态切换与退场延时
 * @param {boolean}    isLeaving 是否正在退场；为 true 时挂上退场类并屏蔽再次点击
 */
export default function SplashScreen({ onEnter, isLeaving }) {
  return (
    <div
      className={`splash${isLeaving ? ' splash--leaving' : ''}`}
      aria-hidden={isLeaving}
    >
      {/* 背景星光层：纯装饰，对读屏软件隐藏 */}
      <div className="splash__stars" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="splash__star"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              '--dur': `${s.dur}s`,
              '--delay': `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 内容层：居中一列 */}
      <div className="splash__center">
        {/* 魔法阵圆环：外层负责入场浮起，内层负责自转，两者分离避免动画冲突 */}
        <div className="splash__emblem" aria-hidden="true">
          <div className="splash__ring">
            <div className="splash__ring-ticks" />
            <div className="splash__sigil">✦</div>
          </div>
        </div>

        <h1 className="splash__title">Magical World News</h1>
        <p className="splash__subtitle">A Portfoliographer&rsquo;s Journey</p>

        <button
          type="button"
          className="splash__btn"
          onClick={onEnter}
          disabled={isLeaving}
        >
          <span className="splash__btn-cn">揭开命运的篇章</span>
          <span className="splash__btn-en">Open the Journal</span>
        </button>
      </div>
    </div>
  )
}