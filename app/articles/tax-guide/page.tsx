import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取の確定申告・税金ガイド｜30万円以上は申告が必要？",
  description: "着物を売ったときの税金について解説。30万円以上の買取で確定申告は必要？譲渡所得の計算方法、生活用動産の非課税ルール、確定申告が必要なケースをわかりやすく説明します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/tax-guide/" },
  openGraph: { title: "着物買取の確定申告・税金ガイド｜30万円以上は申告が必要？", description: "着物を売った時の税金・確定申告について解説。", url: "https://kimonokaitori-biyori.com/articles/tax-guide/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物を売って得たお金に税金はかかりますか？", answer: "日常生活で使用していた着物（生活用動産）を売った場合、原則として税金はかかりません。所得税法では、生活用動産の譲渡による所得は非課税とされています。ただし、1点あたりの売却額が30万円を超える場合は「生活に通常必要でない資産」として課税対象になる可能性があります。" },
  { question: "30万円以上で着物が売れた場合、確定申告は必要ですか？", answer: "1点あたり30万円を超える価格で着物が売れた場合、確定申告が必要になる可能性があります。この場合は「譲渡所得」として、売却額から取得費（購入価格）と譲渡費用を差し引いた利益に対して課税されます。ただし、譲渡所得には年間50万円の特別控除があるため、利益が50万円以内であれば実質的に税金はかかりません。" },
  { question: "複数の着物をまとめて売った場合の税金はどうなりますか？", answer: "複数の着物をまとめて売った場合でも、1点あたりの売却額が30万円以下であれば原則として非課税です。ただし、合計額ではなく1点ごとの金額で判断されます。例えば10枚の着物をまとめて50万円で売った場合、1枚あたり5万円であれば非課税です。" },
  { question: "事業として着物を売買している場合の税金は？", answer: "個人的な着物の売却ではなく、事業として着物の売買を行っている場合は「事業所得」として課税対象になります。この場合は金額に関わらず確定申告が必要です。ただし、個人が自分の着物を売る行為は通常「事業」には該当しません。" },
  { question: "遺品の着物を売った場合の税金はどうなりますか？", answer: "遺品の着物を売った場合も、基本的なルールは同じです。1点あたり30万円以下であれば非課税です。30万円を超える場合は譲渡所得として確定申告が必要になる可能性があります。なお、相続した着物の取得費は、故人が購入した価格を引き継ぎます。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物買取の確定申告・税金ガイド｜30万円以上は申告が必要？", description: "着物を売った時の税金・確定申告について解説。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/tax-guide/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "税金ガイド", item: "https://kimonokaitori-biyori.com/articles/tax-guide/" } ] };

export default function TaxGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "税金ガイド" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物買取の確定申告・税金ガイド</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">30万円以上は申告が必要？</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物を売ったお金に税金はかかるのか？確定申告は必要？生活用動産の非課税ルールや30万円の境界線など、着物買取の税金事情をわかりやすく解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#basic" className="text-[#6b4c8a] hover:underline">1. 着物売却と税金の基本ルール</a></li>
          <li><a href="#30man" className="text-[#6b4c8a] hover:underline">2. 30万円の境界線とは？</a></li>
          <li><a href="#calculation" className="text-[#6b4c8a] hover:underline">3. 譲渡所得の計算方法</a></li>
          <li><a href="#cases" className="text-[#6b4c8a] hover:underline">4. 確定申告が必要なケース・不要なケース</a></li>
          <li><a href="#estate" className="text-[#6b4c8a] hover:underline">5. 遺品の着物を売った場合</a></li>
          <li><a href="#note" className="text-[#6b4c8a] hover:underline">6. 注意点とアドバイス</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="basic" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物売却と税金の基本ルール</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>着物を売却した際の税金について、最も重要なポイントは<strong>「生活用動産の譲渡は原則非課税」</strong>というルールです。所得税法第9条第1項第9号により、日常生活で使用していた衣類・家具・家電などの生活用動産を売却して得た所得は、原則として非課税です。</p>
          <p>着物は衣類に該当するため、<strong>日常的に着用していた着物の売却益は基本的に非課税</strong>です。つまり、多くの方にとって着物を売っても税金の心配は不要です。</p>
          <p>ただし、<strong>1点あたり30万円を超える</strong>高額な着物については例外があります。</p>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center"><p className="text-2xl font-bold text-green-600 mb-1">非課税</p><p className="text-sm text-gray-600">1点30万円以下の着物の売却</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center"><p className="text-2xl font-bold text-red-500 mb-1">課税の可能性</p><p className="text-sm text-gray-600">1点30万円超の高額着物の売却</p></div>
        </div>
      </div></section>

      <section id="30man" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />30万円の境界線とは？</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>所得税法施行令第25条では、<strong>1個または1組の価額が30万円を超える</strong>貴金属、美術品、骨董品などは「生活に通常必要でない資産」として、生活用動産の非課税規定の適用外とされています。</p>
          <p>着物の場合、人間国宝の作品や希少な産地物など、<strong>1点あたりの買取額が30万円を超える</strong>高額着物は、この規定に該当する可能性があります。</p>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#6b4c8a] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">売却額（1点あたり）</th><th className="px-4 py-3 text-left font-semibold">税金</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">確定申告</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">30万円以下</td><td className="px-4 py-3 text-green-600 font-bold">非課税</td><td className="px-4 py-3 text-green-600">不要</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">30万円超（利益50万円以内）</td><td className="px-4 py-3 text-[#c9a76c] font-bold">実質非課税</td><td className="px-4 py-3 text-[#c9a76c]">必要だが税額0円</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">30万円超（利益50万円超）</td><td className="px-4 py-3 text-red-500 font-bold">課税</td><td className="px-4 py-3 text-red-500 rounded-br-lg">必要</td></tr>
          </tbody></table>
        </div>
      </div></section>

      <section id="calculation" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />譲渡所得の計算方法</h2>
        <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mb-6">
          <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">計算式</h3>
          <p className="text-sm bg-[#faf8f5] p-4 rounded-lg font-mono">譲渡所得 = 売却額 - 取得費（購入価格） - 譲渡費用 - 特別控除（50万円）</p>
        </div>
        <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
          <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">計算例：50万円で購入した着物が35万円で売れた場合</h3>
          <ul className="space-y-2 text-sm">
            <li>売却額：35万円</li>
            <li>取得費：50万円（購入時の価格）</li>
            <li>譲渡費用：0円</li>
            <li>利益：35万円 - 50万円 = -15万円（損失）</li>
            <li className="font-bold text-green-600">結果：損失のため税金はかからない</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">※ 着物の売却の場合、購入価格より高く売れることはほとんどないため、実際に税金がかかるケースは稀です。</p>
        </div>
      </div></section>

      <section id="cases" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />確定申告が必要なケース・不要なケース</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-green-600 mb-3 text-base">確定申告が不要なケース</h3>
            <ul className="space-y-2 text-sm"><li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>1点あたり30万円以下で売却した場合</span></li><li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>複数枚をまとめて売っても1枚あたり30万円以下の場合</span></li><li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>日常着用していた着物の売却の場合</span></li></ul>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-red-600 mb-3 text-base">確定申告が必要になる可能性があるケース</h3>
            <ul className="space-y-2 text-sm"><li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>1点あたり30万円超で売却した場合</span></li><li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>投資目的で着物を購入・売却した場合</span></li><li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>事業として着物の売買をしている場合</span></li></ul>
          </div>
        </div>
      </div></section>

      <section id="estate" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />遺品の着物を売った場合</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>故人の着物を相続して売却する場合も、基本的なルールは同じです。1点あたり30万円以下であれば非課税です。</p>
          <p>なお、相続した着物の取得費は<strong>故人が購入した価格</strong>を引き継ぎます。購入価格が不明な場合は、売却価格の5%を取得費とする概算取得費を適用することもできます。</p>
          <p>遺品整理で大量の着物を売却する際は、買取大吉やウリエルなどの出張買取を利用すると便利です。自宅から着物を運ぶ手間がなく、その場で査定・現金化できます。</p>
        </div>
      </div></section>

      <section id="note" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />注意点とアドバイス</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">売却の記録を残しておく</h3><p className="text-sm leading-relaxed text-gray-700">万が一のために、売却した着物の内容、売却額、業者名、日付などの記録を残しておきましょう。確定申告が必要になった場合に役立ちます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">不安な場合は税理士に相談</h3><p className="text-sm leading-relaxed text-gray-700">高額な着物を売却する場合や、税金について不安がある場合は、税理士に相談することをおすすめします。初回無料相談を受け付けている税理士事務所も多いです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">本記事は一般的な情報提供です</h3><p className="text-sm leading-relaxed text-gray-700">本記事の内容は一般的な税務情報の提供を目的としたものであり、個別の税務アドバイスではありません。具体的な税務判断については、税理士または最寄りの税務署にご相談ください。</p></div>
        </div>
      </div></section>

      <section id="faq" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
        <div className="space-y-3">{faqs.map((faq, index) => (
          <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group"><summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between"><span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span><span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span></summary><div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div></details>
        ))}</div>
      </div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/sell-high-tips/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物を高く売るコツ</h3><p className="text-xs text-gray-600">高額買取のテクニック。</p></Link>
          <Link href="/articles/estate-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">遺品整理の着物買取</h3><p className="text-xs text-gray-600">遺品の着物を売る方法。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">税金の心配は不要。まずは無料査定へ</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">ほとんどの着物は非課税で売却できます。まずは無料査定でお手持ちの着物の価値を確認してみましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
