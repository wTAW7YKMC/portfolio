import './HeroSection.css'

/* 在线占位图（黑白漫画风）：后续换成真实插画时只改这两行即可 */
const IMG_HERO = 'https://placehold.co/900x680/000000/FFFFFF?text=Image'
const IMG_RECORDS = 'https://placehold.co/600x560/000000/FFFFFF?text=Image'

/**
 * 头条内容区 (Hero Section)
 * ------------------------------------------------------------------
 * 上半部分：左右分栏 —— 左侧大图（约 63%），右侧新闻正文（约 37%）
 * 下半部分：带深色边框的长方形盒子
 *            · 左侧是两段正文 + 底部倾斜强调句
 *            · 右侧是一张插图
 *            · "PRECIOUS RECORDS" 大字压在盒子底部，横跨文字与插图
 */
export default function HeroSection() {
  return (
    <section className="hero">
      {/* ---------- 左图右文 ---------- */}
      <div className="hero__cols">
        <figure className="hero__media">
          <img src={IMG_HERO} alt="头条配图（占位）" />
        </figure>

        <div className="hero__text">
          <p>
            The great wizard Frieren, after defeating the demon king with her
            companions, went through a long period of time for decades. Now, she
            is embarking on a new journey with her new companions to the far
            north, seeking the legendary magic that can bring the dead back to
            life and communicate with her soul.
          </p>
          <p>
            On this journey, they encountered new difficulties and challenges,
            and embarking on another adventurous journey reminded Frieren of the
            time she had spent adventuring with her companions before.
          </p>
        </div>
      </div>

      {/* ---------- 重点记录盒 ---------- */}
      <div className="records">
        <div className="records__body">
          <p>
            Frieren and Himmel are important partners on the journey. Himmel is
            gentle and patient, allowing Frieren to gradually understand more
            truths during the journey and no longer be an ignorant elf.
          </p>
          <p>
            There are rumors that Himmel likes Frieren, but this speculation has
            not been confirmed, and as a human, Himmel&apos;s lifespan cannot be
            compared to that of the elf Frieren. With the passage of time, he
            uncontrollably reached the end of his lifespan, while Frieren
            remained in her original appearance.
          </p>

          {/* 倾斜强调句：第二行再缩进一层 */}
          <p className="records__quote">
            After you left,
            <br />
            <span>my time began to flow</span>
          </p>
        </div>

        <figure className="records__media">
          <img src={IMG_RECORDS} alt="重点记录配图（占位）" />
        </figure>

        <h3 className="records__title ink">Precious Records</h3>
      </div>
    </section>
  )
}