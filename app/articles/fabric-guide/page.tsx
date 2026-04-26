import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の素材の見分け方｜正絹・化繊・ウール・木綿の特徴と買取価格",
  description:
    "着物の素材（正絹・化繊・ウール・木綿・麻）の見分け方を徹底解説。素材ごとの特徴、手触り、燃焼テスト、買取価格の違いをまとめました。素材によって買取価格が大きく変わる理由もわかります。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/fabric-guide/" },
  openGraph: {
    title: "着物の素材の見分け方｜正絹・化繊・ウール・木綿の特徴と買取価格",
    description: "着物の素材の見分け方と買取価格の関係を解説。正絹・化繊・ウール・木綿の特徴も。",
    url: "https://kimonokaitori-biyori.com/articles/fabric-guide/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "正絹とポリエステルの見分け方を教えてください", answer: "最も確実な方法は手触りです。正絹はしっとりとした柔らかい手触りで、肌に吸い付くような感触があります。ポリエステルはツルツルとした滑りやすい手触りで、静電気が起きやすいのが特徴です。また、正絹は燃やすと毛髪が焦げるような臭いがし、灰はもろく崩れます。ポリエステルは溶けて固まり、黒い塊になります。ただし、最近の高品質ポリエステルは見分けが難しいため、判断に迷ったら専門の査定員に見てもらいましょう。" },
  { question: "化繊（ポリエステル）の着物は買い取ってもらえますか？", answer: "化繊の着物は買取対象外の業者が多いです。買取大吉やウリエルなどの大手業者でも、ポリエステルの着物は値段がつかないか、数百円程度の査定になることがほとんどです。ただし、有名デザイナーのブランド化繊着物や、新品・未使用の化繊着物であれば買い取ってもらえる場合もあります。" },
  { question: "ウールの着物は買取対象になりますか？", answer: "ウールの着物は買取対象になることがありますが、買取価格は一般的に低めです。ウール着物の買取相場は数百円〜2,000円程度が一般的です。ただし、有名産地のウール着物（米沢織など）やデザイン性の高いものは、やや高い査定がつくこともあります。" },
  { question: "着物の素材がわからない場合はどうすればいいですか？", answer: "素材がわからない場合は、そのまま買取業者に査定を依頼しましょう。買取大吉やウリエルなどの専門業者であれば、査定員が素材を正確に判別してくれます。自分で判断して「化繊だから売れない」と思い込むのはもったいないです。実は正絹だったというケースもあります。" },
  { question: "麻の着物の買取相場はどのくらいですか？", answer: "麻の着物は夏着物として需要があり、産地物であれば比較的高い買取価格がつきます。越後上布（新潟）や宮古上布（沖縄）などの伝統的な麻着物は5万円〜30万円以上の買取価格になることもあります。一般的な麻着物でも3,000円〜1万円程度の査定が期待できます。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "着物の素材の見分け方｜正絹・化繊・ウール・木綿の特徴と買取価格",
  description: "着物の素材の見分け方と買取価格の関係を解説。正絹・化繊・ウール・木綿の特徴も。",
  datePublished: "2026-04-26", dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/fabric-guide/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "着物の素材の見分け方", item: "https://kimonokaitori-biyori.com/articles/fabric-guide/" },
] };

export default function FabricGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の素材の見分け方" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物の素材の見分け方</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">正絹・化繊・ウール・木綿の特徴と買取価格</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物の買取価格は素材によって大きく変わります。正絹なら高額査定が期待できますが、化繊では値段がつかないことも。自宅でできる素材の見分け方と、素材別の買取相場を詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li><a href="#importance" className="text-[#6b4c8a] hover:underline">1. 素材が買取価格に与える影響</a></li>
                <li><a href="#types" className="text-[#6b4c8a] hover:underline">2. 着物の主な素材5種類</a></li>
                <li><a href="#how-to" className="text-[#6b4c8a] hover:underline">3. 自宅でできる素材の見分け方</a></li>
                <li><a href="#price" className="text-[#6b4c8a] hover:underline">4. 素材別の買取価格相場</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">5. 素材がわからない場合の対処法</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">6. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section id="importance" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />素材が買取価格に与える影響
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>着物の買取価格を左右する最大の要因の一つが<strong>素材</strong>です。同じデザイン・同じ状態の着物でも、正絹であれば数万円の査定がつくのに対し、ポリエステルであれば数百円〜値段がつかないこともあります。</p>
            <p>これは、正絹の着物は中古市場での需要が高く、再販売価格も高いためです。一方、化繊の着物は新品でも安価なため、中古市場での価値は非常に低くなります。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">正絹</p>
              <p className="text-sm text-gray-600">最も高い買取価格</p>
              <p className="text-xs text-gray-500 mt-1">5,000円〜50万円以上</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-gray-400 mb-1">化繊</p>
              <p className="text-sm text-gray-600">ほとんど値段がつかない</p>
              <p className="text-xs text-gray-500 mt-1">0円〜数百円</p>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の主な素材5種類
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 正絹（しょうけん）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">蚕の繭から作られる天然の絹糸で織られた着物。最も高級な素材であり、着物の中でも最も価値が高いです。しっとりとした手触り、美しい光沢、軽くて暖かいのが特徴です。フォーマルからカジュアルまであらゆる種類の着物に使われます。</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">手触り</p><p className="font-semibold">しっとり柔らか</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">光沢</p><p className="font-semibold">上品な光沢あり</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">買取</p><p className="font-semibold text-[#c9a76c]">高額期待</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 化繊（ポリエステル）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">石油由来の合成繊維で作られた着物。安価で手入れが簡単なため、普段着やお稽古用として広く使われています。近年は正絹に近い質感の高品質ポリエステルも登場しています。</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">手触り</p><p className="font-semibold">ツルツル滑らか</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">光沢</p><p className="font-semibold">均一な光沢</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">買取</p><p className="font-semibold text-gray-400">ほぼつかない</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. ウール</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">羊毛で織られた着物。保温性が高く、秋冬の普段着として使われます。やや厚みがあり、温かみのある手触りが特徴です。正絹に比べると格は低いですが、実用性が高い素材です。</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">手触り</p><p className="font-semibold">ふっくら温かい</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">光沢</p><p className="font-semibold">マットで光沢少なめ</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">買取</p><p className="font-semibold text-gray-500">低め</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. 木綿（もめん）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">綿花から作られた天然繊維の着物。肌触りが良く、吸湿性に優れています。浴衣や普段着に多い素材ですが、久留米絣（くるめがすり）や伊勢木綿など、伝統的な産地物は価値が認められています。</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">手触り</p><p className="font-semibold">さらっと自然</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">光沢</p><p className="font-semibold">光沢なし</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">買取</p><p className="font-semibold text-gray-500">産地物は中〜高</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. 麻</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">植物繊維で作られた着物。通気性が良く涼やかなため、夏着物として人気があります。越後上布（新潟）や宮古上布（沖縄）などの伝統的な麻着物は、非常に高い価値を持ちます。</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">手触り</p><p className="font-semibold">シャリっとした感触</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">光沢</p><p className="font-semibold">自然な光沢</p></div>
                <div className="bg-[#faf8f5] rounded p-2"><p className="text-gray-500">買取</p><p className="font-semibold text-[#c9a76c]">産地物は高額</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />自宅でできる素材の見分け方
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">方法1：手触りで判別する</h3>
              <p className="text-sm leading-relaxed text-gray-700">正絹はしっとりと肌に吸い付くような感触。化繊はツルツルと滑りやすく、静電気が起きやすい。ウールはふっくらと温かい。木綿はさらっとした自然な感触。麻はシャリっとした独特の硬さがあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">方法2：燃焼テスト（糸を1本抜いて燃やす）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">着物の縫い代など目立たない部分から糸を1本だけ抜き、ライターで燃やして判別する方法です。</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs">
                  <thead><tr className="bg-[#c9a76c] text-white">
                    <th className="px-3 py-2 text-left rounded-tl-lg">素材</th><th className="px-3 py-2 text-left">燃え方</th><th className="px-3 py-2 text-left">臭い</th><th className="px-3 py-2 text-left rounded-tr-lg">燃えカス</th>
                  </tr></thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-3 py-2 font-semibold">正絹</td><td className="px-3 py-2">ゆっくり縮む</td><td className="px-3 py-2">毛髪が焦げた臭い</td><td className="px-3 py-2">もろい黒い塊</td></tr>
                    <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-2 font-semibold">化繊</td><td className="px-3 py-2">溶けて縮む</td><td className="px-3 py-2">プラスチック臭</td><td className="px-3 py-2">硬い黒い塊</td></tr>
                    <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-3 py-2 font-semibold">ウール</td><td className="px-3 py-2">ゆっくり燃える</td><td className="px-3 py-2">毛髪が焦げた臭い</td><td className="px-3 py-2">もろい灰</td></tr>
                    <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-2 font-semibold">木綿</td><td className="px-3 py-2">すばやく燃える</td><td className="px-3 py-2">紙が燃えた臭い</td><td className="px-3 py-2">白い灰</td></tr>
                    <tr className="bg-white"><td className="px-3 py-2 font-semibold rounded-bl-lg">麻</td><td className="px-3 py-2">すばやく燃える</td><td className="px-3 py-2">草が燃えた臭い</td><td className="px-3 py-2 rounded-br-lg">白い灰</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">方法3：タグ・ラベルを確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の衿先や裏地に素材表示のタグが縫い付けられていることがあります。「絹100%」「ポリエステル100%」などの表示があれば確実です。ただし、古い着物にはタグがないことも多いです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">方法4：証紙を確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物に付いている証紙（産地証明）には、使用されている素材の情報が記載されています。「絹100%」と書かれた証紙があれば正絹であることが確実です。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />素材別の買取価格相場
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">素材</th>
                <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                <th className="px-4 py-3 text-left font-semibold">ブランド・産地物</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取の可否</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">正絹</td><td className="px-4 py-3">3,000円〜3万円</td><td className="px-4 py-3">3万円〜50万円以上</td><td className="px-4 py-3 text-green-600 font-bold">ほぼ確実に買取可</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">麻</td><td className="px-4 py-3">3,000円〜1万円</td><td className="px-4 py-3">5万円〜30万円以上</td><td className="px-4 py-3 text-green-600 font-bold">買取可</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">木綿</td><td className="px-4 py-3">数百円〜3,000円</td><td className="px-4 py-3">3,000円〜3万円</td><td className="px-4 py-3 text-[#c9a76c] font-bold">産地物は買取可</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウール</td><td className="px-4 py-3">数百円〜2,000円</td><td className="px-4 py-3">1,000円〜5,000円</td><td className="px-4 py-3 text-gray-500 font-bold">業者による</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">化繊</td><td className="px-4 py-3">0円〜数百円</td><td className="px-4 py-3">数百円〜2,000円</td><td className="px-4 py-3 text-red-500 font-bold rounded-br-lg">買取不可が多い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">重要：</strong>素材がわからない着物でも、まずは買取業者に査定を依頼しましょう。買取大吉やウリエルなどの専門業者であれば、素材を正確に判別して適正価格をつけてくれます。自己判断で「化繊だから売れない」と決めつけるのはもったいないです。</p>
          </div>
        </div>
      </section>

      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />素材がわからない場合の対処法
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">対処法1：そのまま査定に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">素材がわからなくても、買取大吉やウリエルなどの専門業者に査定を依頼すれば、プロが素材を判別してくれます。これが最も確実で手間がかからない方法です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">対処法2：LINE査定で聞く</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の写真をLINE査定で送り、「素材がわかりません」と伝えれば、査定員が写真から素材の推定をしてくれます。買取大吉やRECLOのLINE査定を活用しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">対処法3：複数業者に査定を依頼</h3>
              <p className="text-sm leading-relaxed text-gray-700">ヒカカクの一括査定を利用して複数業者に見積もりを依頼すれば、各社の査定額と素材の判断を比較できます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問
          </h2>
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
        </div>
      </section>

      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
            <Link href="/articles/certificate-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">証紙ガイド</h3><p className="text-xs text-gray-600">証紙の見方と買取価格への影響。</p></Link>
            <Link href="/articles/size-and-price/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">サイズと買取価格</h3><p className="text-xs text-gray-600">身丈・裄丈と査定額の関係。</p></Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">素材がわからなくても大丈夫。まずは無料査定へ</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">プロの査定員が素材を判別して適正価格をつけてくれます。完全無料の査定でお手持ちの着物の価値を確認しましょう。</p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
