import './Header.css'

/**
 * 报头 (Masthead)
 * ------------------------------------------------------------------
 * 结构自上而下：
 *   1. 哥特体巨型标题 "Magical World News"
 *   2. 细线
 *   3. 三格分隔条：VOL. 89757 ｜ FRIDAY 11 JULY 2025 ｜ NO. 929
 *   4. 粗线
 * 两条横线把报头与正文隔开，是复古报纸最典型的"报头盒"做法。
 */
export default function Header() {
  return (
    <header className="masthead">
      <h1 className="masthead__title ink">Magical World News</h1>

      <div className="rule--thin" />

      <div className="masthead__meta">
        <span className="masthead__vol">VOL. 89757</span>
        <span className="masthead__date">FRIDAY 11 JULY 2025</span>
        <span className="masthead__no">NO. 929</span>
      </div>

      <div className="rule--thick" />
    </header>
  )
}