import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の年代別人気柄ガイド｜昭和レトロ・古典柄・モダン柄",
  description: "着物の年代別人気柄を徹底解説。昭和レトロ・古典柄・モダン柄の特徴と買取相場、中古市場で人気のデザインをまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/popular-patterns/" },
  openGraph: { title: "着物の年代別人気柄ガイド｜昭和レトロ・古典柄・モダン柄", description: "着物の年代別人気柄を解説。昭和レトロ・古典柄・モダン柄の特徴と買取相場。", url: "https://kimonokaitori-biyori.com/articles/popular-patterns/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "昭和レトロ柄の着物は人気がありますか？", answer: "はい、昭和レトロ柄の着物は近年非常に人気が高まっています。特に大正〜昭和初期のアンティーク着物は、レトロモダンなデザインが若い世代に支持されており、中古市場でも高値で取引されています。大胆な花柄や幾何学模様が特に人気です。" },
  { question: "古典柄と現代柄ではどちらが高く売れますか？", answer: "一般的に古典柄（御所車・松竹梅・鶴亀・四季の花など）の方が需要が安定しており高く売れる傾向があります。ただし状態や作家、産地によっても大きく異なります。流行の現代柄は一時的に需要が高まることもありますが、定番の古典柄は長期的に安定した人気があります。" },
  { question: "着物の柄に流行はありますか？", answer: "はい、着物の柄にも流行があります。現在は昭和レトロ・大正ロマン風の大胆な柄、幾何学模様、モダンな配色が人気。古典的な吉祥文様（松竹梅・鶴亀など）は流行に左右されず常に需要があります。" },
  { question: "地味な色の着物でも売れますか？", answer: "はい、地味な色の着物でも売れます。特に茶道や華道をされる方は落ち着いた色柄を好むため、渋い色の訪問着や色無地は需要があります。また、紬は地味な色柄が主流のため、紬であれば色が地味でも高額査定が期待できます。" },
  { question: "派手すぎる柄の着物は売れにくいですか？", answer: "派手な柄でも種類によっては高く売れます。振袖は華やかな柄が好まれるため、派手な花柄や金銀の総柄は人気があります。ただし、成人式限定の派手すぎるデザインは需要がやや限定されます。買取大吉やウリエルなら適正に評価してくれます。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物の年代別人気柄ガイド｜昭和レトロ・古典柄・モダン柄", description: "着物の年代別人気柄を解説。昭和レトロ・古典柄・モダン柄の特徴と買取相場。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/popular-patterns/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の年代別人気柄ガイド", item: "https://kimonokaitori-biyori.com/articles/popular-patterns/" } ] };

export default function PopularPatternsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の年代別人気柄ガイド" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4"><div className="text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物の年代別人気柄</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">昭和レトロ・古典柄・モダン柄ガイド</span></h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物の柄にはどんな種類があり、どんな柄が人気で高く売れるのか？年代別の人気柄・古典柄の意味・モダン柄のトレンドを詳しく解説。買取相場への影響も紹介します。</p>
          <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
        </div></div>
      </section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 着物の柄が買取相場に与える影響</a></li>
          <li><a href="#classic" className="text-[#6b4c8a] hover:underline">2. 古典柄（吉祥文様）の種類と人気</a></li>
          <li><a href="#retro" className="text-[#6b4c8a] hover:underline">3. 昭和レトロ・大正ロマン柄の魅力</a></li>
          <li><a href="#modern" className="text-[#6b4c8a] hover:underline">4. モダン柄・現代デザインのトレンド</a></li>
          <li><a href="#by-type" className="text-[#6b4c8a] hover:underline">5. 着物の種類別・人気柄ランキング</a></li>
          <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 柄別・高く売るコツ</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="overview" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の柄が買取相場に与える影響</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>着物の買取相場は素材・産地・作家・状態だけでなく、<strong>柄（デザイン）も査定額に大きく影響</strong>します。人気の柄は中古市場での需要が高いため、同じ素材・状態でも柄の違いで数千円〜数万円の差がつくことがあります。</p>
          <p>一般的に、古典的な吉祥文様（松竹梅・鶴亀・御所車など）は流行に左右されず常に需要が安定しています。一方、昭和レトロ・大正ロマン風の大胆なデザインは近年特に人気が急上昇しており、アンティーク着物として高値で取引されています。</p>
          <p>季節を問わない柄（通年柄）は需要が広いため売りやすく、季節限定の柄（桜・紅葉など）はシーズンに合わせて売ると査定額がアップする傾向があります。</p>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center"><p className="text-2xl font-bold text-[#6b4c8a] mb-1">古典柄</p><p className="text-xs text-gray-600">安定した需要・長く人気</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center"><p className="text-2xl font-bold text-[#c9a76c] mb-1">レトロ柄</p><p className="text-xs text-gray-600">近年人気急上昇</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center"><p className="text-2xl font-bold text-[#e8a0b6] mb-1">モダン柄</p><p className="text-xs text-gray-600">若い世代に人気</p></div>
        </div>
      </div></section>

      <section id="classic" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />古典柄（吉祥文様）の種類と人気</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">松竹梅（しょうちくばい）</h3><p className="text-sm leading-relaxed text-gray-700">おめでたい席にふさわしい代表的な吉祥文様。松は長寿、竹は成長、梅は気品を象徴。留袖・訪問着・振袖など格の高い着物に多く使われ、フォーマルシーンでの需要が高く買取相場も安定しています。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">鶴亀（つるかめ）</h3><p className="text-sm leading-relaxed text-gray-700">「鶴は千年、亀は万年」の長寿の象徴。婚礼衣裳や留袖に多用される格調高い文様。特に金銀の鶴亀文様は黒留袖の定番で、安定した需要があります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">御所車（ごしょぐるま）・花車</h3><p className="text-sm leading-relaxed text-gray-700">平安貴族の牛車をモチーフにした雅な文様。花車は御所車に花を盛り込んだ華やかなデザイン。振袖や訪問着に人気で、豪華な印象が好まれます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">四季の花（桜・菊・牡丹・梅）</h3><p className="text-sm leading-relaxed text-gray-700">季節の花を描いた柄は着物の定番。桜（春）、菊（秋）は特に人気が高く、四季の花を組み合わせた通年柄は季節を問わず着用でき、買取でも需要が高いです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">熨斗（のし）・束ね熨斗</h3><p className="text-sm leading-relaxed text-gray-700">のし紙の元となった縁起物の文様。細長い帯状のリボンが優美に流れるデザインで、振袖や訪問着に多い。華やかでフォーマル感があり、婚礼や成人式で人気。</p></div>
        </div>
      </div></section>

      <section id="retro" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />昭和レトロ・大正ロマン柄の魅力</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>大正〜昭和初期（1910年代〜1940年代）の着物は「アンティーク着物」として近年非常に人気が高まっています。西洋の影響を受けた大胆な構図、鮮やかな色使い、モダンなデザインが現代の若い世代に新鮮に映り、<strong>SNS映えする着物</strong>として注目されています。</p>
          <p>昭和30〜40年代の着物も「昭和レトロ」として人気上昇中。当時のポップなデザインや独特の配色が、レトロブームの追い風を受けて再評価されています。</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">人気の大正ロマン柄</h3><p className="text-sm leading-relaxed text-gray-700">バラ・チューリップなど洋花、幾何学模様、アールデコ風デザイン、ストライプと花の組み合わせ、モダンガール風の大胆な配色。大正〜昭和初期の銘仙（めいせん）は特に人気が高く、5,000円〜5万円で取引されています。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">人気の昭和レトロ柄</h3><p className="text-sm leading-relaxed text-gray-700">ポップな色使いの花柄、幾何学的なパターン、カラフルな縞模様、昭和的なモチーフ（風船・リボン・水玉など）。カジュアルな着物遊びを楽しむ層に人気があります。</p></div>
        </div>
      </div></section>

      <section id="modern" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />モダン柄・現代デザインのトレンド</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">デザイナーズ着物</h3><p className="text-sm leading-relaxed text-gray-700">有名デザイナーやブランドがデザインした現代的な着物。岡重・千總・菱屋カレンブロッソなどのブランド着物は、独特の世界観で若い世代に人気。中古市場でも高値で取引されています。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">無地・ぼかし</h3><p className="text-sm leading-relaxed text-gray-700">シンプルな色無地やぼかし染めは、帯で表情を変えられる汎用性の高さが魅力。フォーマルからカジュアルまで幅広く使え、茶道・華道を楽しむ方に需要が高いです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">北欧風・ミニマルデザイン</h3><p className="text-sm leading-relaxed text-gray-700">近年は北欧風の幾何学パターンやミニマルなデザインの着物も人気。モダンな着こなしを楽しむ若い世代に支持されています。</p></div>
        </div>
      </div></section>

      <section id="by-type" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の種類別・人気柄ランキング</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#c9a76c] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
              <th className="px-4 py-3 text-left font-semibold">人気の柄</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取への影響</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td><td className="px-4 py-3 text-gray-700">御所車・花柄・束ね熨斗・総絞り</td><td className="px-4 py-3 font-medium text-green-600">柄の影響大</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td><td className="px-4 py-3 text-gray-700">四季の花・古典柄・上品なぼかし</td><td className="px-4 py-3 font-medium text-green-600">柄の影響大</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖</td><td className="px-4 py-3 text-gray-700">松竹梅・鶴亀・波に千鳥</td><td className="px-4 py-3 font-medium">柄の影響中</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">小紋</td><td className="px-4 py-3 text-gray-700">江戸小紋・飛び柄・更紗</td><td className="px-4 py-3 font-medium">柄の影響中</td></tr>
              <tr className="bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">紬</td><td className="px-4 py-3 text-gray-700">絣・縞・無地</td><td className="px-4 py-3 font-medium rounded-br-lg">産地の影響が大きい</td></tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <section id="tips" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />柄別・高く売るコツ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：季節柄はシーズン前に売る</h3><p className="text-sm leading-relaxed text-gray-700">桜柄は2〜3月、紅葉柄は8〜9月に売ると需要が高く査定額がアップ。四季の花の組み合わせなど通年柄はいつでもOK。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：アンティーク着物は専門業者へ</h3><p className="text-sm leading-relaxed text-gray-700">大正〜昭和初期の着物は一般のリサイクルショップでは価値を見落とされがち。買取大吉やウリエルなど着物専門の業者に査定を依頼しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：帯と柄のコーディネートでセット売り</h3><p className="text-sm leading-relaxed text-gray-700">着物と帯の柄をコーディネートとしてセットで出すと、セットとしての価値が認められて査定額がアップする可能性があります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：作家物の落款を確認</h3><p className="text-sm leading-relaxed text-gray-700">柄が美しい着物には作家の落款が入っている可能性があります。裾裏やおくみを確認し、落款がある場合は必ず査定員に伝えましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：複数社で比較する</h3><p className="text-sm leading-relaxed text-gray-700">柄の評価は業者によって異なります。ヒカカクの一括比較を活用して3社以上の見積もりを取り、最高額を提示してくれた業者を選びましょう。</p></div>
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
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/antique-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">アンティーク着物の買取</h3><p className="text-xs text-gray-600">大正〜昭和初期の着物の価値を詳しく解説。</p></Link>
          <Link href="/articles/kimono-rank/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の格付け一覧</h3><p className="text-xs text-gray-600">留袖から紬まで着物の格を詳しく解説。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">お手持ちの着物の柄、高く売れるかも？</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">古典柄もレトロ柄も、着物専門の査定員なら適正に評価。まずは無料査定で価値を確認しましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
