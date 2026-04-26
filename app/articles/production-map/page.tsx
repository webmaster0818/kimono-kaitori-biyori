import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の産地一覧マップ｜全国の有名産地と特徴",
  description: "全国の着物産地を一覧で解説。大島紬・結城紬・西陣織・加賀友禅・博多織など有名産地の特徴と買取相場をまとめました。産地証紙の見方も紹介。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/production-map/" },
  openGraph: { title: "着物の産地一覧マップ｜全国の有名産地と特徴", description: "全国の着物産地を一覧で解説。有名産地の特徴と買取相場をまとめました。", url: "https://kimonokaitori-biyori.com/articles/production-map/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物の産地はどうやって見分けますか？", answer: "最も確実な方法は証紙を確認することです。産地の組合が発行する証紙には産地名・製法・素材が記載されています。証紙がない場合でも、買取大吉やウリエルなど着物専門の査定員なら生地の質感や織り方から産地を判断できることがあります。" },
  { question: "産地によって買取額はどのくらい違いますか？", answer: "産地によって買取額は大きく異なります。例えば同じ紬でも、大島紬（1万円〜15万円）と十日町紬（1,000円〜5,000円）では10倍以上の差があります。重要無形文化財に指定された産地の着物は特に高額になります。" },
  { question: "伝統的工芸品の着物は高く売れますか？", answer: "はい、経済産業大臣が指定する伝統的工芸品の着物は高い価値があります。伝統マーク（伝の字を丸で囲んだマーク）入りの証紙があると、産地と品質が保証され、高額査定が期待できます。" },
  { question: "沖縄の着物は高く売れますか？", answer: "はい、沖縄の着物は非常に高い価値を持つものが多いです。宮古上布・久米島紬は重要無形文化財に指定されており、芭蕉布や琉球紅型も高額買取が期待できます。沖縄の伝統織物は生産量が少ないため希少性が高いです。" },
  { question: "産地証紙がない場合はどうすればよいですか？", answer: "証紙がなくても買取は可能です。ただし証紙がある場合と比べて査定額は2〜5割程度下がる傾向があります。たとう紙の中やタンスの引き出しに証紙が紛れていないか確認しましょう。見つからない場合は、買取大吉やウリエルなど着物専門の業者に査定を依頼しましょう。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物の産地一覧マップ｜全国の有名産地と特徴", description: "全国の着物産地を一覧で解説。有名産地の特徴と買取相場をまとめました。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/production-map/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の産地一覧マップ", item: "https://kimonokaitori-biyori.com/articles/production-map/" } ] };

const regions = [
  { region: "北海道・東北", items: [
    { name: "南部絞り", area: "岩手県", type: "絞り染め", market: "3,000円〜2万円" },
    { name: "置賜紬", area: "山形県", type: "紬", market: "3,000円〜3万円" },
  ]},
  { region: "関東", items: [
    { name: "結城紬", area: "茨城・栃木", type: "紬（重文）", market: "3万円〜20万円以上" },
    { name: "黄八丈", area: "東京都八丈島", type: "紬", market: "5,000円〜8万円" },
    { name: "東京友禅", area: "東京都", type: "友禅染め", market: "3万円〜20万円" },
  ]},
  { region: "甲信越・北陸", items: [
    { name: "塩沢紬", area: "新潟県", type: "紬", market: "5,000円〜5万円" },
    { name: "小千谷縮", area: "新潟県", type: "麻織物", market: "3,000円〜3万円" },
    { name: "越後上布", area: "新潟県", type: "上布（重文）", market: "3万円〜20万円以上" },
    { name: "牛首紬", area: "石川県", type: "紬", market: "1万円〜10万円" },
    { name: "加賀友禅", area: "石川県金沢", type: "友禅染め", market: "5万円〜50万円以上" },
  ]},
  { region: "東海", items: [
    { name: "有松絞り", area: "愛知県名古屋", type: "絞り染め", market: "3,000円〜15万円" },
  ]},
  { region: "近畿", items: [
    { name: "西陣織", area: "京都府", type: "織物", market: "3,000円〜15万円" },
    { name: "京友禅", area: "京都府", type: "友禅染め", market: "3,000円〜30万円以上" },
    { name: "京鹿の子絞り", area: "京都府", type: "絞り染め", market: "3万円〜50万円以上" },
    { name: "近江上布", area: "滋賀県", type: "上布", market: "5,000円〜5万円" },
  ]},
  { region: "九州", items: [
    { name: "博多織", area: "福岡県", type: "織物", market: "5,000円〜30万円以上" },
    { name: "久留米絣", area: "福岡県", type: "絣（重文）", market: "3,000円〜20万円以上" },
    { name: "大島紬", area: "鹿児島県", type: "紬", market: "1万円〜30万円以上" },
  ]},
  { region: "沖縄", items: [
    { name: "宮古上布", area: "沖縄県宮古島", type: "上布（重文）", market: "5万円〜30万円以上" },
    { name: "久米島紬", area: "沖縄県久米島", type: "紬（重文）", market: "1万円〜10万円" },
    { name: "琉球紅型", area: "沖縄県", type: "型染め", market: "1万円〜10万円" },
    { name: "芭蕉布", area: "沖縄県", type: "植物繊維（重文）", market: "3万円〜20万円以上" },
  ]},
];

export default function ProductionMapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の産地一覧マップ" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物の産地一覧マップ</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">全国の有名産地と特徴</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">日本全国の着物産地を地域別に一覧で解説。大島紬・結城紬・西陣織・加賀友禅・博多織など有名産地の特徴と買取相場をまとめました。産地証紙の重要性も紹介します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 着物の産地が買取に与える影響</a></li>
          {regions.map((r, i) => (<li key={i}><a href={`#region${i}`} className="text-[#6b4c8a] hover:underline">{i + 2}. {r.region}の産地</a></li>))}
          <li><a href="#certificate" className="text-[#6b4c8a] hover:underline">9. 産地証紙の重要性</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">10. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="overview" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の産地が買取に与える影響</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>着物の産地は買取額に非常に大きな影響を与えます。同じ紬でも、<strong>大島紬（鹿児島）と一般的な紬では買取額が10倍以上異なる</strong>こともあります。産地ごとの伝統技法・素材・歴史的価値が、着物の価格を左右します。</p>
          <p>特に重要無形文化財に指定された技法で作られた着物（結城紬・久米島紬・越後上布・宮古上布・久留米絣・芭蕉布など）は、希少性が極めて高く高額買取の対象です。</p>
          <p>産地を証明する「産地証紙」は買取額を大きく左右します。証紙があると産地と品質が保証されるため、査定額が2〜5倍変わることも珍しくありません。</p>
        </div>
      </div></section>

      {regions.map((r, i) => (
        <section key={i} id={`region${i}`} className={`py-10 ${i % 2 === 0 ? "" : "section-light"}`}><div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />{r.region}の産地</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#c9a76c] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">産地名</th>
                <th className="px-4 py-3 text-left font-semibold">地域</th>
                <th className="px-4 py-3 text-left font-semibold">種類</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
              </tr></thead>
              <tbody>
                {r.items.map((item, j) => (
                  <tr key={j} className={`border-b border-[#e8ddd0] ${j % 2 === 0 ? "bg-white" : "bg-[#faf8f5]"} hover:bg-[#faf8f5] transition-colors`}>
                    <td className="px-4 py-3 font-semibold text-[#6b4c8a]">{item.name}</td>
                    <td className="px-4 py-3 text-gray-700">{item.area}</td>
                    <td className="px-4 py-3 text-gray-700">{item.type}</td>
                    <td className="px-4 py-3 font-medium">{item.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div></section>
      ))}

      <section id="certificate" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />産地証紙の重要性</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">伝統マーク証紙</h3><p className="text-sm leading-relaxed text-gray-700">経済産業大臣が指定する伝統的工芸品には「伝統マーク」（伝の字を丸で囲んだマーク）入りの証紙が付きます。この証紙がある着物は産地と伝統技法が保証されています。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">産地組合の証紙</h3><p className="text-sm leading-relaxed text-gray-700">各産地の織物組合が発行する独自の証紙もあります。大島紬の地球印（奄美）・旗印（鹿児島）、西陣織の証紙番号、博多織の金印・銀印などが代表例。産地と製法の特定に使われます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">証紙の保管場所</h3><p className="text-sm leading-relaxed text-gray-700">証紙はたとう紙の中に挟まっていることが多いです。タンスの引き出しの底や、着物を購入した際の箱の中に入っていることもあります。査定前に必ず確認しましょう。</p></div>
        </div>
      </div></section>

      <section id="faq" className="py-10"><div className="max-w-4xl mx-auto px-4">
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

      <section className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/tsumugi-types/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">紬の種類と買取相場</h3><p className="text-xs text-gray-600">全国の紬を種類別に解説。</p></Link>
          <Link href="/articles/certificate-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">証紙の見方ガイド</h3><p className="text-xs text-gray-600">産地証紙の読み方を解説。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">産地着物の価値を無料査定で確認</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">大島紬・結城紬・加賀友禅など産地着物は高額買取の可能性大。証紙と一緒に無料査定へ。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
