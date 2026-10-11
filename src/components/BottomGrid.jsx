import './BottomGrid.css'

/* 在线占位图（黑白漫画风） */
const IMG_LEFT = 'https://placehold.co/600x400/000000/FFFFFF?text=Image'
const IMG_RIGHT = 'https://placehold.co/600x400/000000/FFFFFF?text=Image'

/**
 * 底部三栏图文区 (Bottom Grid)
 * ------------------------------------------------------------------
 * 三栏宽度按参考图实测比例 1.65 : 1 : 1.25 划分，栏与栏之间用竖线分隔。
 *   左栏：小标题 + 细线 + 黑白插图 + 正文
 *   中栏：正文 + 底部倾斜强调句
 *   右栏：正文 + 斜体小标题 + 黑白插图
 * 三栏正文都带首字缩进/段间距，制造报纸特有的"错落感"。
 */
export default function BottomGrid() {
  return (
    <section className="bottom">
      {/* ---------- 左栏 ---------- */}
      <article className="col">
        <h3 className="col__title ink">Alternation of Partners</h3>
        <div className="rule--thin col__rule" />

        <figure className="col__media">
          <img src={IMG_LEFT} alt="左栏配图（占位）" />
        </figure>

        <p className="col__text">
          Frieren has new companions on her new journey, collecting magic and
          moving towards her goal. Fern is a child taken in by Heiter, while
          Stark is Eisen&apos;s apprentice.
        </p>
      </article>

      {/* ---------- 中栏 ---------- */}
      <article className="col">
        <p className="col__text">
          The journey still carries the shadow of her old friends to some
          extent. Every village they pass reminds her of the roads once walked
          together, and of the promises that were never spoken aloud.
        </p>

        <p className="col__quote">
          The ongoing journey....
          <br />
          <span>Let&apos;s look forward to new stories</span>
        </p>
      </article>

      {/* ---------- 右栏 ---------- */}
      <article className="col">
        <p className="col__text">
          It is worth mentioning that Stark and Fern fell in love during their
          journey and eventually confirmed their relationship.
        </p>

        <h3 className="col__title col__title--italic">Love and Courage</h3>

        <figure className="col__media">
          <img src={IMG_RIGHT} alt="右栏配图（占位）" />
        </figure>
      </article>
    </section>
  )
}