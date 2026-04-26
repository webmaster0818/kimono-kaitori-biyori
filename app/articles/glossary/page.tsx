import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物を売る前に知っておきたい用語集",
  description: "着物買取でよく使われる専門用語を初心者向けにわかりやすく解説。紬・友禅・証紙・落款・マルキ・絣・先染め・後染めなど、査定時に知っておくと役立つ用語をまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/glossary/" },
  openGraph: { title: "着物を売る前に知っておきたい用語集", description: "着物買取で使われる専門用語を解説。査定時に知っておくと役立つ用語集。", url: "https://kimonokaitori-biyori.com/articles/glossary/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物の専門用語がわからなくても査定してもらえますか？", answer: "はい、専門用語がわからなくても問題ありません。買取大吉やウリエルの査定員が1枚1枚丁寧に鑑定してくれます。ただし用語を知っておくと査定結果の説明が理解しやすくなります。" },
  { question: "証紙と落款の違いは何ですか？", answer: "証紙は産地の組合が発行する品質保証書で、着物に付属する紙片です。落款は作家が着物に直接施すサイン（印）で、裾裏やおくみ下部に入っていることが多いです。どちらも買取額に大きく影響します。" },
  { question: "先染めと後染めの着物ではどちらが高く売れますか？", answer: "一概には言えませんが、先染め（紬）では大島紬・結城紬、後染め（友禅）では加賀友禅・京友禅が高額です。技法や作家、産地の方が買取額への影響は大きいです。" },
  { question: "着物のサイズに関する用語（身丈・裄丈）は査定に影響しますか？", answer: "はい、大きなサイズ（身丈160cm以上、裄丈67cm以上）の着物は仕立て直しがしやすく買取額が高くなります。小さいサイズは需要が限られるため査定額が下がる傾向があります。" },
  { question: "反物と仕立て済みの着物ではどちらが高く売れますか？", answer: "一般的に反物（未仕立て）の方が高く売れます。反物は購入者のサイズに合わせて仕立てられるため、需要が幅広いからです。特に大島紬や結城紬の反物は高額査定が期待できます。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物を売る前に知っておきたい用語集", description: "着物買取で使われる専門用語を解説。査定時に知っておくと役立つ用語集。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/glossary/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物用語集", item: "https://kimonokaitori-biyori.com/articles/glossary/" } ] };

const glossaryCategories = [
  { title: "着物の種類に関する用語", terms: [
    { term: "訪問着（ほうもんぎ）", def: "絵羽模様（縫い目をまたいで柄が繋がる）の準礼装着物。結婚式・パーティー・入学式など幅広いフォーマルシーンで着用。買取相場：5,000円〜5万円。" },
    { term: "付け下げ（つけさげ）", def: "柄が肩に向かって上向きに配置された準礼装着物。訪問着より控えめな印象で、お茶会や七五三に適する。買取相場：3,000円〜2万円。" },
    { term: "色無地（いろむじ）", def: "一色の無地染めの着物。紋の数で格が変わる万能な着物。茶道・華道の稽古着としても重宝される。買取相場：1,000円〜1万円。" },
    { term: "小紋（こもん）", def: "全体に繰り返し模様が染められたカジュアル着物。江戸小紋は格が高い。買取相場：500円〜5,000円。" },
    { term: "紬（つむぎ）", def: "紬糸を使って織られた先染めの絹織物。大島紬・結城紬が代表格。カジュアルだが非常に高価なものもある。買取相場：1,000円〜20万円以上。" },
    { term: "振袖（ふりそで）", def: "未婚女性が着用する袖の長い礼装着物。成人式や結婚式で着用。買取相場：1万円〜10万円。" },
    { term: "留袖（とめそで）", def: "既婚女性の最礼装。黒留袖は新郎新婦の母親が着用。裾に模様がある。買取相場：3,000円〜3万円。" },
  ]},
  { title: "素材・技法に関する用語", terms: [
    { term: "正絹（しょうけん）", def: "天然の絹（シルク）100%の素材。着物の最高級素材で、買取額も高い。光沢・肌触り・発色の良さが特徴。" },
    { term: "先染め（さきぞめ）", def: "糸を染めてから織る技法。紬がこれにあたる。糸の段階で色を付けるため、深みのある色合いが特徴。" },
    { term: "後染め（あとぞめ）", def: "白生地を織ってから染める技法。友禅・小紋・色無地がこれにあたる。自由度の高い色・柄の表現が可能。" },
    { term: "友禅（ゆうぜん）", def: "糊で防染しながら多色の模様を描く染色技法。加賀友禅・京友禅・東京友禅の3大産地がある。買取相場：3,000円〜50万円以上。" },
    { term: "絣（かすり）", def: "糸をあらかじめ括って染め分け、織ることで模様を作る技法。大島紬・久留米絣・久米島紬などに使われる。" },
    { term: "絞り染め（しぼりぞめ）", def: "生地を糸で括ったり板で挟んだりして防染し、染料に浸して模様を作る技法。有松絞り・京鹿の子絞りが代表。" },
    { term: "絽（ろ）", def: "横に等間隔の透け目が入った夏用の織物。フォーマルからカジュアルまで使える夏着物の定番素材。" },
    { term: "紗（しゃ）", def: "全体に均一な透け感がある夏用の織物。絽よりカジュアルな印象。涼しげな見た目が特徴。" },
  ]},
  { title: "査定・買取に関する用語", terms: [
    { term: "証紙（しょうし）", def: "産地の組合が発行する品質保証書。着物の産地・素材・製法を証明する。買取額に最も大きく影響する書類。大島紬の地球印・旗印、西陣織の証紙番号などが代表例。" },
    { term: "落款（らっかん）", def: "作家が着物に施すサイン（印）。裾裏やおくみ下部に朱印のような形で入っていることが多い。人間国宝の落款は特に高額査定の対象。" },
    { term: "マルキ", def: "大島紬の絣の細かさを表す単位。数字が大きいほど絣が細かく高額。5マルキ・7マルキ・9マルキ・12マルキなどがある。12マルキ以上は特に希少。" },
    { term: "反物（たんもの）", def: "着物に仕立てる前の生地の状態。1反（約12m）で着物1枚分。未仕立ての反物は仕立て済みより高額で買取されることが多い。" },
    { term: "たとう紙（たとうし）", def: "着物を包んで保管するための和紙。畳紙とも書く。きれいなたとう紙に入っている着物は保管状態が良いと判断され、プラス評価になることがある。" },
    { term: "身丈（みたけ）", def: "着物の首から裾までの長さ。160cm以上が望ましい。身丈が短いと仕立て直しが難しく、買取額が下がる傾向がある。" },
    { term: "裄丈（ゆきたけ）", def: "着物の背中心から袖口までの長さ。67cm以上が望ましい。裄丈が短いと現代人の体格に合わず、需要が限られる。" },
  ]},
  { title: "伝統・産地に関する用語", terms: [
    { term: "伝統的工芸品", def: "経済産業大臣が指定する伝統工芸品。「伝統マーク」入りの証紙で識別可能。大島紬・結城紬・加賀友禅・西陣織・博多織など多数が指定されている。" },
    { term: "重要無形文化財", def: "文化財保護法に基づき国が指定する無形の文化財。結城紬・久米島紬・越後上布・宮古上布・久留米絣・芭蕉布などが指定されており、極めて高い価値がある。" },
    { term: "人間国宝", def: "重要無形文化財の保持者として認定された個人。友禅では木村雨山、羽田登喜男など。人間国宝の作品は美術品としての価値も高く、数十万円〜100万円以上の買取実績がある。" },
    { term: "西陣織（にしじんおり）", def: "京都西陣地区で織られる高級織物。主に帯に使われる。龍村美術織物・川島織物などの老舗が有名。買取相場：3,000円〜15万円。" },
    { term: "博多織（はかたおり）", def: "福岡県博多で織られる伝統的織物。献上柄の博多帯が代表的。金印・銀印で品質が区分される。買取相場：5,000円〜30万円以上。" },
  ]},
];

export default function GlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物用語集" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物を売る前に知っておきたい</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">用語集</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物の買取でよく使われる専門用語を初心者向けにわかりやすく解説。紬・友禅・証紙・落款・マルキなど、査定時に知っておくと役立つ用語をカテゴリ別にまとめました。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />カテゴリ一覧</h2>
        <nav><ol className="space-y-2 text-sm">
          {glossaryCategories.map((c, i) => (<li key={i}><a href={`#glossary${i}`} className="text-[#6b4c8a] hover:underline">{i + 1}. {c.title}</a></li>))}
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">{glossaryCategories.length + 1}. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      {glossaryCategories.map((cat, ci) => (
        <section key={ci} id={`glossary${ci}`} className={`py-10 ${ci % 2 === 0 ? "section-light" : ""}`}><div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />{cat.title}</h2>
          <div className="space-y-4">
            {cat.terms.map((t, ti) => (
              <div key={ti} className="bg-white border border-[#e8ddd0] rounded-xl p-5">
                <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">{t.term}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{t.def}</p>
              </div>
            ))}
          </div>
        </div></section>
      ))}

      <section id="faq" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div>
            </details>
          ))}
        </div>
      </div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を比較。</p></Link>
          <Link href="/articles/faq-50/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">よくある質問50選</h3><p className="text-xs text-gray-600">着物買取の疑問にすべてお答え。</p></Link>
          <Link href="/articles/certificate-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">証紙の見方ガイド</h3><p className="text-xs text-gray-600">産地証紙の読み方を詳しく解説。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">用語を理解したら、まず無料査定へ</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">着物の専門用語がわからなくても大丈夫。プロの査定員が丁寧に鑑定してくれます。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
