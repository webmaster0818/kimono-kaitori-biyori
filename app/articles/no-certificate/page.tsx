import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "証紙なしの着物は売れる？買取価格への影響と対策",
  description:
    "証紙なしの着物は買取してもらえるのか徹底解説。証紙とは何か、証紙がないと査定額がどう変わるか、証紙の代わりになるもの、証紙なしでも高額になるケースまで詳しくガイドします。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/no-certificate/",
  },
  openGraph: {
    title: "証紙なしの着物は売れる？買取価格への影響と対策",
    description:
      "証紙なしの着物は売れるのか徹底解説。査定額への影響と対策をガイドします。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/no-certificate/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "証紙なしの着物は売れる？買取価格への影響と対策",
  description:
    "証紙なしの着物は買取してもらえるのか徹底解説。証紙とは何か、証紙がないと査定額がどう変わるか、証紙の代わりになるもの、証紙なしでも高額になるケースまで詳しくガイドします。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://kimono-kaitori-biyori.pages.dev/articles/no-certificate/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "証紙がなくても着物は売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、証紙がなくても着物は売れます。ただし、証紙がある場合と比べると査定額が下がる傾向にあります。着物専門の査定員であれば、生地の質感や織りの特徴から産地を推定できるため、証紙なしでも適正な評価を受けられる可能性があります。",
      },
    },
    {
      "@type": "Question",
      name: "証紙をなくしてしまった場合、再発行できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "残念ながら、証紙の再発行は基本的にできません。証紙は着物の製造時に付けられるもので、一度紛失すると再取得はほぼ不可能です。購入店に問い合わせて購入記録が残っていれば、間接的な証明にはなりますが、証紙そのものの代わりにはなりません。",
      },
    },
    {
      "@type": "Question",
      name: "証紙なしだと買取価格はどのくらい下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的に、証紙なしの場合は証紙ありと比べて30〜50%程度査定額が下がるとされています。ただし、着物の種類や状態、業者の査定基準によっても異なります。有名産地の着物ほど証紙の有無による差が大きくなる傾向があります。",
      },
    },
    {
      "@type": "Question",
      name: "証紙はどこに保管されていることが多いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "証紙は一般的に、たとう紙（着物を包む和紙）に挟まれていたり、着物の端布と一緒に保管されていることが多いです。また、購入時の箱や袋の中に入っていることもあります。着物を売る前に、たとう紙の中やタンスの引き出しの隅を確認してみましょう。",
      },
    },
    {
      "@type": "Question",
      name: "落款があれば証紙がなくても高く売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "落款（作家のサイン）があれば、作家物として評価されるため、証紙がなくても高額査定が期待できます。特に人間国宝や有名作家の落款があれば、証紙なしでも数万円〜数十万円の値がつくことがあります。",
      },
    },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://kimono-kaitori-biyori.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "お役立ち情報",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "証紙なしの着物",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/no-certificate/",
    },
  ],
};

export default function NoCertificatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Breadcrumb
        items={[
          { label: "お役立ち情報", href: "/articles/" },
          { label: "証紙なしの着物" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              お悩み解決
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            証紙なしの着物は
            <span className="text-[#6b4c8a]">売れる？</span>
            <br className="md:hidden" />
            買取価格への影響と対策
          </h1>
          <p className="text-gray-600 leading-relaxed">
            「証紙がない着物は売れないのでは？」と不安に思っている方は多いです。
            確かに証紙は着物の価値を証明する重要な書類ですが、
            証紙がなくても着物は売れます。本記事では、証紙とは何か、
            証紙なしで査定額がどう変わるか、証紙の代わりになるもの、
            そして証紙なしでも高額になるケースまで徹底解説します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#what-is" className="hover:underline">
                1. 証紙とは何か
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:underline">
                2. 証紙なしで査定額がどう変わるか
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                3. 証紙の代わりになるもの
              </a>
            </li>
            <li>
              <a href="#high-cases" className="hover:underline">
                4. 証紙なしでも高額になるケース
              </a>
            </li>
            <li>
              <a href="#where-to-find" className="hover:underline">
                5. 証紙が見つかる場所を再確認
              </a>
            </li>
            <li>
              <a href="#dealer-choice" className="hover:underline">
                6. 証紙なし着物の買取に強い業者の選び方
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* セクション1 */}
        <section id="what-is" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙とは何か
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙（しょうし）とは、着物の産地・素材・製法などを公的に証明する紙のことです。
            いわば着物の「身分証明書」のようなもので、産地の組合や検査機関が発行します。
          </p>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">
              証紙に記載されている主な情報
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <span><span className="font-medium">産地名：</span>大島紬、結城紬、加賀友禅など、どこで作られたかを示す</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <span><span className="font-medium">素材：</span>正絹（絹100%）であることの証明</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <span><span className="font-medium">製法：</span>手織り、手染めなど伝統的な製法で作られたことの証明</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <span><span className="font-medium">検査合格：</span>品質検査に合格したことの証明</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <span><span className="font-medium">伝統工芸品マーク：</span>経済産業大臣指定の伝統的工芸品であることの証明</span>
              </li>
            </ul>
          </div>

          <div className="border border-[#e8ddd0] rounded-lg p-5 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              主な産地の証紙の種類
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#6b4c8a] text-white">
                    <th className="px-3 py-2 text-left font-medium">産地</th>
                    <th className="px-3 py-2 text-left font-medium">証紙の特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium bg-[#faf8f5]">大島紬</td>
                    <td className="px-3 py-2 text-gray-600">
                      「本場大島紬」の旗印マーク、地球印など
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium bg-[#faf8f5]">結城紬</td>
                    <td className="px-3 py-2 text-gray-600">
                      「本場結城紬」の検査合格証、紬マーク
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium bg-[#faf8f5]">加賀友禅</td>
                    <td className="px-3 py-2 text-gray-600">
                      加賀友禅協同組合の証紙、作家の落款
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium bg-[#faf8f5]">西陣織</td>
                    <td className="px-3 py-2 text-gray-600">
                      西陣織工業組合の証紙（金色のラベル）
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium bg-[#faf8f5]">京友禅</td>
                    <td className="px-3 py-2 text-gray-600">
                      京友禅協同組合連合会の証紙
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              証紙は着物の「真贋」を証明するものです。同じ「大島紬」でも、
              本場大島紬の証紙がある着物と証紙がない着物では、
              買取価格に大きな差がつくことがあります。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section id="impact" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙なしで査定額がどう変わるか
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙の有無は査定額に大きく影響します。
            一般的に、証紙がない場合は証紙ありと比べて30〜50%程度
            査定額が下がるとされています。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">着物の種類</th>
                  <th className="px-4 py-3 text-left font-medium">証紙あり（目安）</th>
                  <th className="px-4 py-3 text-left font-medium">証紙なし（目安）</th>
                  <th className="px-4 py-3 text-left font-medium">差額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">大島紬</td>
                  <td className="px-4 py-3 text-gray-600">30,000〜150,000円</td>
                  <td className="px-4 py-3 text-gray-600">10,000〜80,000円</td>
                  <td className="px-4 py-3 text-red-600 font-medium">約50%減</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">結城紬</td>
                  <td className="px-4 py-3 text-gray-600">50,000〜200,000円</td>
                  <td className="px-4 py-3 text-gray-600">20,000〜100,000円</td>
                  <td className="px-4 py-3 text-red-600 font-medium">約50%減</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">加賀友禅</td>
                  <td className="px-4 py-3 text-gray-600">30,000〜200,000円</td>
                  <td className="px-4 py-3 text-gray-600">15,000〜100,000円</td>
                  <td className="px-4 py-3 text-red-600 font-medium">約40%減</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">西陣織（帯）</td>
                  <td className="px-4 py-3 text-gray-600">10,000〜80,000円</td>
                  <td className="px-4 py-3 text-gray-600">5,000〜40,000円</td>
                  <td className="px-4 py-3 text-red-600 font-medium">約40%減</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">一般的な訪問着</td>
                  <td className="px-4 py-3 text-gray-600">5,000〜30,000円</td>
                  <td className="px-4 py-3 text-gray-600">3,000〜20,000円</td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">約30%減</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              なぜ証紙がないと査定額が下がるのか？
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                産地の真贋が証明できないため、「本場」であることを保証できない
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                再販時に「証紙付き」とアピールできないため、販売価格が下がる
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                素材（正絹100%かどうか）の証明ができないため、リスクを考慮した査定になる
              </li>
            </ul>
          </div>
        </section>

        {/* セクション3 */}
        <section id="alternatives" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙の代わりになるもの
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙がなくても、以下のものがあれば査定額の低下をある程度防ぐことができます。
            売却前に確認してみましょう。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</span>
                落款（らっかん）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                作家物の着物には、作家のサインである「落款」が押されています。
                おくみの裏側や衿先に小さな印が押されていることが多いです。
                落款があれば作家を特定でき、証紙がなくても作家物として評価されます。
                特に人間国宝や有名作家の落款は高額査定に直結します。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</span>
                たとう紙の記載情報
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物を包んでいるたとう紙（和紙）に、購入店や産地、
                品質表示などが記載されていることがあります。
                証紙ほどの証明力はありませんが、査定の参考になります。
                たとう紙は捨てずに一緒に査定に出しましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</span>
                購入時の領収書・保証書
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                購入時の領収書や保証書が残っていれば、購入価格や購入先を証明できます。
                高級呉服店での購入であることがわかれば、品質の裏付けになります。
                特に百貨店や老舗呉服店の領収書は信頼性が高いです。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</span>
                端布（はぎれ）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                仕立て時に余った端布が残っていることがあります。
                端布に証紙が縫い付けられていたり、品質表示が付いていることがあるので、
                端布も捨てずに保管しておきましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</span>
                専門査定員の目利き
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                経験豊富な着物専門の査定員は、生地の質感、織りの特徴、
                染めの技法などから産地や品質を見極めることができます。
                証紙がなくても、プロの目で適正な評価を受けられる可能性があるため、
                着物専門の買取業者を選ぶことが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section id="high-cases" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙なしでも高額になるケース
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙がなくても、以下のようなケースでは高額買取が期待できます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                1. 人間国宝・有名作家の落款がある
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                証紙がなくても落款で作家が特定できれば、作家物として高額査定されます。
                久保田一竹の辻が花、羽田登喜男の友禅、志村ふくみの紬など、
                人間国宝の作品は落款だけでも数万円〜数十万円の値がつきます。
              </p>
            </div>

            <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                2. 明らかに高品質な正絹の着物
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                高品質な正絹の着物は、経験豊富な査定員であれば
                生地の質感や光沢から品質を見極められます。
                特に、手織りの紬や手染めの友禅は、独特の風合いで判別可能です。
              </p>
            </div>

            <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                3. 状態が非常に良い
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                未使用に近い状態の着物は、証紙の有無に関わらず高値がつきやすいです。
                特に、しつけ糸が付いたままの新品同様の着物は、
                証紙なしでも高額査定が期待できます。
              </p>
            </div>

            <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                4. 有名ブランドの帯
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                龍村美術織物、川島織物、千總などの有名ブランドの帯は、
                ブランド名が織り込まれていたり、落款があったりするため、
                証紙がなくてもブランドを特定でき、高額査定を受けられます。
              </p>
            </div>

            <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                5. 希少な柄や技法の着物
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                辻が花絞り、江戸小紋の極型、総絞りなど、
                希少な技法で作られた着物は、証紙がなくても
                技法自体の価値で高額になることがあります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section id="where-to-find" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙が見つかる場所を再確認
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            「証紙がない」と思っていても、意外な場所から見つかることがあります。
            売却前に、以下の場所を改めて確認してみましょう。
          </p>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#6b4c8a] font-bold text-lg">1</span>
                <div>
                  <span className="font-medium">たとう紙の中</span>
                  <p className="text-gray-600 text-xs mt-1">
                    着物を包んでいるたとう紙の中に挟まっていることが多いです。
                    たとう紙を開いて裏面もチェックしましょう。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6b4c8a] font-bold text-lg">2</span>
                <div>
                  <span className="font-medium">端布と一緒に</span>
                  <p className="text-gray-600 text-xs mt-1">
                    仕立て時の端布（余り布）と一緒に保管されていることがあります。
                    端布が別の場所に保管されていないか確認しましょう。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6b4c8a] font-bold text-lg">3</span>
                <div>
                  <span className="font-medium">タンスの引き出しの隅</span>
                  <p className="text-gray-600 text-xs mt-1">
                    証紙が着物から外れて、引き出しの隅に落ちていることがあります。
                    引き出しの奥や底もしっかり確認しましょう。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6b4c8a] font-bold text-lg">4</span>
                <div>
                  <span className="font-medium">購入時の箱・袋の中</span>
                  <p className="text-gray-600 text-xs mt-1">
                    着物を購入した際の箱や袋が残っていれば、その中に証紙や保証書が
                    入っている可能性があります。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6b4c8a] font-bold text-lg">5</span>
                <div>
                  <span className="font-medium">着物に縫い付けられている</span>
                  <p className="text-gray-600 text-xs mt-1">
                    一部の着物では、証紙が着物の裏側に直接縫い付けられていることがあります。
                    衿裏や裾裏を確認してみましょう。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* セクション6 */}
        <section id="dealer-choice" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙なし着物の買取に強い業者の選び方
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙がない着物を売る場合、業者選びが特に重要です。
            以下のポイントを押さえた業者を選びましょう。
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 border border-[#e8ddd0] rounded-lg p-4">
              <span className="text-[#6b4c8a] font-bold text-lg shrink-0">&#10003;</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">着物専門の査定員が在籍している</p>
                <p className="text-xs text-gray-600 mt-1">
                  証紙がなくても、経験豊富な専門査定員なら生地や織りの特徴から
                  産地や品質を見極められます。総合リサイクルショップではなく、
                  着物に特化した買取業者を選びましょう。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-[#e8ddd0] rounded-lg p-4">
              <span className="text-[#6b4c8a] font-bold text-lg shrink-0">&#10003;</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">証紙なしでも査定OKと明言している</p>
                <p className="text-xs text-gray-600 mt-1">
                  公式サイトで「証紙なしでも査定可能」と明記している業者は安心です。
                  証紙がない着物の査定実績が豊富な証拠と言えます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-[#e8ddd0] rounded-lg p-4">
              <span className="text-[#6b4c8a] font-bold text-lg shrink-0">&#10003;</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">査定料・キャンセル料が無料</p>
                <p className="text-xs text-gray-600 mt-1">
                  証紙がない場合、査定額に納得できないこともあります。
                  キャンセル料無料の業者であれば、気軽に複数社に査定を依頼して比較できます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-[#e8ddd0] rounded-lg p-4">
              <span className="text-[#6b4c8a] font-bold text-lg shrink-0">&#10003;</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">複数の販路を持っている</p>
                <p className="text-xs text-gray-600 mt-1">
                  自社の店舗販売だけでなく、ネット販売、海外販売など
                  複数の販路を持つ業者は、証紙なしの着物でも
                  販売先を見つけやすく、その分高値で買い取ってくれます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#6b4c8a] text-white rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">
              証紙なしでも適正査定を受けるために
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-purple-100">
              証紙がない着物こそ、着物専門の買取業者に査定を依頼することが大切です。
              複数業者に見積もりを取って比較し、最も高い評価をしてくれる業者に売りましょう。
            </p>
            <Link
              href="/ranking/"
              className="inline-block bg-[#c9a76c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#b8965b] transition-colors text-sm"
            >
              おすすめ着物買取業者ランキングを見る
            </Link>
          </div>
        </section>

        {/* 落款とは */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-[#c9a76c]">
            落款（らっかん）とは？証紙との違い
          </h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              落款は作家が着物に直接押す印鑑のようなもので、通常は衿先やおくみなどに捺されます。
              証紙が産地の証明であるのに対し、落款は作家個人の署名にあたります。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">証紙</span>＝産地・品質の証明（組合が発行）
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">落款</span>＝作家の署名（着物に直接押印）
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  証紙＋落款の<span className="font-medium text-gray-900">両方が揃うと買取価格が3〜5倍</span>になることもある
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  落款のみでも<span className="font-medium text-gray-900">作家を特定できれば高額査定</span>の可能性あり
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 証紙がなくても着物は売れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、証紙がなくても着物は売れます。ただし、証紙がある場合と比べると
                査定額が下がる傾向にあります。着物専門の査定員であれば、
                生地の質感や織りの特徴から産地を推定できるため、
                証紙なしでも適正な評価を受けられる可能性があります。
                まずは着物専門の買取業者に相談してみましょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 証紙をなくしてしまった場合、再発行できますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                残念ながら、証紙の再発行は基本的にできません。
                証紙は着物の製造時に付けられるもので、一度紛失すると再取得はほぼ不可能です。
                購入店に問い合わせて購入記録が残っていれば、間接的な証明にはなりますが、
                証紙そのものの代わりにはなりません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 証紙なしだと買取価格はどのくらい下がりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                一般的に、証紙なしの場合は証紙ありと比べて30〜50%程度
                査定額が下がるとされています。ただし、着物の種類や状態、
                業者の査定基準によっても異なります。
                有名産地の着物ほど証紙の有無による差が大きくなる傾向があります。
                複数業者に査定を依頼して比較するのが最善策です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 証紙はどこに保管されていることが多いですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                証紙は一般的に、たとう紙（着物を包む和紙）に挟まれていたり、
                着物の端布と一緒に保管されていることが多いです。
                また、購入時の箱や袋の中に入っていることもあります。
                着物を売る前に、たとう紙の中やタンスの引き出しの隅を確認してみましょう。
                着物の裏側に直接縫い付けられている場合もあります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 落款があれば証紙がなくても高く売れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                落款（作家のサイン）があれば、作家物として評価されるため、
                証紙がなくても高額査定が期待できます。
                特に人間国宝や有名作家の落款があれば、証紙なしでも
                数万円〜数十万円の値がつくことがあります。
                落款はおくみの裏側や衿先に押されていることが多いので確認してみましょう。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：証紙がなくても諦めないで
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              証紙がない着物でも売れるケースは多く、諦める必要はありません。
              確かに証紙がある場合と比べると査定額は下がりますが、
              素材、産地、作家、状態などの要素で総合的に評価されるため、
              証紙なしでも高額になるケースは十分にあります。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              大切なのは、着物専門の買取業者に査定を依頼すること。
              経験豊富な査定員であれば、証紙がなくても着物の本来の価値を
              見極めてくれます。複数業者に見積もりを取って比較し、
              最も高い評価をしてくれた業者に売りましょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              また、売却前にたとう紙やタンスの隅を確認して、
              証紙が見つからないか改めてチェックしてみてください。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            証紙なしでも無料査定OK
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            着物専門の買取業者なら、証紙がなくても適正に査定してくれます。<br />
            まずは無料査定で着物の価値を確認してみましょう。
          </p>
          <Link
            href="/ranking/"
            className="inline-block bg-[#c9a76c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#b8965b] transition-colors"
          >
            おすすめ着物買取業者ランキングを見る
          </Link>
        </div>

        {/* 関連ページ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            関連ページ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/ranking/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#6b4c8a] font-medium">
                ランキング
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物買取おすすめ業者ランキング
              </p>
            </Link>
            <Link
              href="/articles/certificate-guide/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物の証紙とは？見方と査定への影響
              </p>
            </Link>
            <Link
              href="/articles/old-stained-kimono/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                古い着物・シミありでも売れる？
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
