import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の格付け一覧｜留袖→訪問着→付け下げ→小紋→紬の順位",
  description: "着物の格付け（フォーマル度）を一覧で解説。黒留袖・色留袖・振袖・訪問着・付け下げ・色無地・小紋・紬の順位と、それぞれの特徴・着用シーン・買取相場をまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/kimono-rank/" },
  openGraph: { title: "着物の格付け一覧｜留袖→訪問着→付け下げ→小紋→紬の順位", description: "着物の格付けを一覧で解説。各着物の特徴と買取相場をまとめました。", url: "https://kimonokaitori-biyori.com/articles/kimono-rank/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物の格が高いほど買取額も高いですか？", answer: "必ずしもそうではありません。格の高い黒留袖は買取相場が3,000円〜3万円と意外に低めです。一方、格はカジュアルな紬でも大島紬・結城紬は数万円〜数十万円で買取されます。格よりも素材・産地・作家・状態が買取額に大きく影響します。" },
  { question: "訪問着と付け下げの違いは何ですか？", answer: "訪問着は絵羽模様（えばもよう）で、仕立てたときに柄が繋がるよう計算されたデザインです。付け下げは肩に向かって柄が上向きに配置され、訪問着より控えめな印象。訪問着の方が格が高く、買取相場も一般的に高めです。" },
  { question: "色無地はどんなときに着ますか？", answer: "色無地は紋の数によって格が変わる万能な着物です。五つ紋は黒留袖に次ぐ格式、三つ紋はセミフォーマル、一つ紋はカジュアルな場面にも対応。茶道・華道の稽古着としても重宝されます。" },
  { question: "紬はフォーマルな場面で着られますか？", answer: "紬は基本的にカジュアル着物に分類されるため、結婚式やフォーマルな式典には不向きです。ただし、白大島などは格のある雰囲気があり、おしゃれ着として高級レストランや観劇などに着用できます。" },
  { question: "江戸小紋は他の小紋より格が高いですか？", answer: "はい、江戸小紋は小紋の中で特別な位置にあります。特に「三役」と呼ばれる鮫・角通し・行儀の柄は一つ紋を入れることで準礼装としても着用可能。一般的な小紋がカジュアルなのに対し、江戸小紋はセミフォーマルにも対応できます。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物の格付け一覧｜留袖→訪問着→付け下げ→小紋→紬の順位", description: "着物の格付けを一覧で解説。各着物の特徴と買取相場をまとめました。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/kimono-rank/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の格付け一覧", item: "https://kimonokaitori-biyori.com/articles/kimono-rank/" } ] };

const ranks = [
  { rank: "最礼装", name: "黒留袖", scene: "新郎新婦の母・仲人", features: "黒地に裾模様・五つ紋・比翼仕立て", market: "3,000円〜3万円" },
  { rank: "礼装", name: "色留袖", scene: "親族の結婚式・式典", features: "黒以外の地色に裾模様・五つ紋〜一つ紋", market: "3,000円〜5万円" },
  { rank: "礼装", name: "振袖", scene: "成人式・結婚式（未婚女性）", features: "袖が長く華やかな絵羽模様", market: "1万円〜10万円" },
  { rank: "準礼装", name: "訪問着", scene: "結婚式・パーティー・入学式", features: "絵羽模様で柄が繋がる", market: "5,000円〜5万円" },
  { rank: "準礼装", name: "付け下げ", scene: "お茶会・七五三・入学式", features: "柄が肩に向かって上向き", market: "3,000円〜2万円" },
  { rank: "略礼装", name: "色無地", scene: "茶道・華道・慶弔両用", features: "一色染め・紋の数で格が変わる", market: "1,000円〜1万円" },
  { rank: "おしゃれ着", name: "小紋", scene: "観劇・食事会・街歩き", features: "全体に繰り返し模様", market: "500円〜5,000円" },
  { rank: "おしゃれ着", name: "江戸小紋", scene: "お茶会〜おしゃれ着", features: "精緻な型染め・三役は準礼装", market: "1,000円〜2万円" },
  { rank: "普段着", name: "紬", scene: "カジュアルなお出かけ", features: "紬糸の先染め織物", market: "1,000円〜20万円以上" },
  { rank: "普段着", name: "浴衣", scene: "夏祭り・花火大会", features: "木綿や麻の単衣仕立て", market: "500円〜3万円" },
];

export default function KimonoRankPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の格付け一覧" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物の格付け一覧</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">留袖→訪問着→付け下げ→小紋→紬の順位</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物には「格」と呼ばれるフォーマル度の序列があります。黒留袖・振袖・訪問着・付け下げ・色無地・小紋・紬の順位と特徴、着用シーン、買取相場をわかりやすく解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#chart" className="text-[#6b4c8a] hover:underline">1. 着物の格付け一覧表</a></li>
          <li><a href="#details" className="text-[#6b4c8a] hover:underline">2. 各着物の詳細解説</a></li>
          <li><a href="#market" className="text-[#6b4c8a] hover:underline">3. 格と買取相場の関係</a></li>
          <li><a href="#tips" className="text-[#6b4c8a] hover:underline">4. 格別・高く売るコツ</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">5. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="chart" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の格付け一覧表</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#6b4c8a] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">格</th>
              <th className="px-4 py-3 text-left font-semibold">着物の種類</th>
              <th className="px-4 py-3 text-left font-semibold">着用シーン</th>
              <th className="px-4 py-3 text-left font-semibold">特徴</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
            </tr></thead>
            <tbody>
              {ranks.map((r, i) => (
                <tr key={i} className={`border-b border-[#e8ddd0] ${i % 2 === 0 ? "bg-white" : "bg-[#faf8f5]"} hover:bg-[#faf8f5] transition-colors`}>
                  <td className="px-4 py-3 font-semibold text-[#c9a76c]">{r.rank}</td>
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">{r.name}</td>
                  <td className="px-4 py-3 text-gray-700">{r.scene}</td>
                  <td className="px-4 py-3 text-gray-700">{r.features}</td>
                  <td className="px-4 py-3 font-medium">{r.market}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500">※買取相場は証紙付き・美品の一般的な目安。作家物・伝統工芸品はさらに高額に。</p>
      </div></section>

      <section id="details" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />各着物の詳細解説</h2>
        <div className="space-y-5">
          {ranks.map((r, i) => (
            <div key={i} className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">{r.rank}</span>
                <h3 className="font-bold text-[#6b4c8a] text-base">{r.name}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-xs mt-3">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">着用シーン</p><p className="font-semibold">{r.scene}</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">特徴</p><p className="font-semibold">{r.features}</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">買取相場</p><p className="font-semibold">{r.market}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section id="market" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />格と買取相場の関係</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>意外に思われるかもしれませんが、<strong>着物の格の高さと買取額は必ずしも一致しません</strong>。最も格の高い黒留袖の買取相場は3,000円〜3万円と控えめです。これは黒留袖の着用機会が限られ、中古市場での需要が少ないためです。</p>
          <p>一方、格はカジュアルな紬でも、大島紬（1万円〜15万円）や結城紬（3万円〜20万円以上）は非常に高額。産地・作家・技法による希少性が買取額を左右します。</p>
          <p>訪問着や振袖はフォーマルシーンでの需要が安定しており、比較的高い買取額が期待できます。買取大吉やウリエルなど着物専門の査定員なら、格だけでなく総合的に着物の価値を正しく評価してくれます。</p>
        </div>
      </div></section>

      <section id="tips" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />格別・高く売るコツ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">礼装（留袖・振袖）：帯とセットで出す</h3><p className="text-sm leading-relaxed text-gray-700">礼装は帯とセットで使うことが多いため、袋帯と一緒に出すとセットとしての価値が認められます。和装小物もまとめて出しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">準礼装（訪問着・付け下げ）：作家物かチェック</h3><p className="text-sm leading-relaxed text-gray-700">訪問着・付け下げは手描き友禅の作家物が多いジャンル。落款を確認し、作家物であれば査定員に伝えましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">紬：証紙が最重要</h3><p className="text-sm leading-relaxed text-gray-700">紬は証紙の有無で買取額が数倍変わります。大島紬・結城紬の証紙は特に重要。必ず探して一緒に査定に出しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">すべての着物：複数社で比較</h3><p className="text-sm leading-relaxed text-gray-700">格に関係なく、複数社で査定を比較するのが最も重要。ヒカカクの一括比較を活用して3社以上の見積もりを取りましょう。</p></div>
        </div>
      </div></section>

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
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/tsumugi-types/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">紬の種類と買取相場</h3><p className="text-xs text-gray-600">大島紬・結城紬の買取価格を解説。</p></Link>
          <Link href="/articles/houmongi-tomesode/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">訪問着・留袖の買取相場</h3><p className="text-xs text-gray-600">フォーマル着物の買取価格を解説。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">お手持ちの着物の価値を無料査定で確認</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">格にかかわらず、着物専門の査定員なら適正に評価。まずは無料査定で確認しましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
