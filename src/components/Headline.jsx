import './Headline.css'

/**
 * 主头条 (Main Headline)
 * ------------------------------------------------------------------
 * 整行撑满的大写粗标题。字号用 vw 控制，保证在 1700 版心附近
 * 正好占满一整行、不换行——这是参考图最强的一处视觉特征。
 */
export default function Headline() {
  return (
    <h2 className="headline ink">The Magician Embarks on Another Adventure</h2>
  )
}