import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物を高く売るための7つのコツ｜査定額アップの秘訣",
  description:
    "着物を高く売るための7つのコツを徹底解説。複数業者の見積もり比較、証紙の活用、セット売り、季節の考慮、クリーニング不要の理由、早めの売却、専門業者の選び方まで、査定額アップの秘訣をお伝えします。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/sell-high-tips/",
  },
  openGraph: {
    title: "着物を高く売るための7つのコツ｜査定額アップの秘訣",
    description:
      "着物を高く売るための7つのコツを徹底解説。査定額アップの秘訣をお伝えします。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/sell-high-tips/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物を高く売るための7つのコツ｜査定額アップの秘訣",
  description:
    "着物を高く売るための7つのコツを徹底解説。複数業者の見積もり比較、証紙の活用、セット売りなど、査定額アップの秘訣をお伝えします。",
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
      "https://kimono-kaitori-biyori.pages.dev/articles/sell-high-tips/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "着物を売る前にクリーニングに出すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、クリーニングは不要です。着物のクリーニングは1枚あたり3,000円〜15,000円と高額で、クリーニング代を買取価格で回収できないことが多いです。買取業者は自社でクリーニングできるため、そのままの状態で査定に出しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "着物を高く売るのに最適な時期はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物の需要は季節によって変動します。一般的に、成人式前（10月〜12月）は振袖の需要が高まり、卒業シーズン前は袴の需要が高まります。ただし、着物は時間とともに劣化するため、最適な時期を待つよりも早めに売る方が結果的に高値になることが多いです。",
      },
    },
    {
      "@type": "Question",
      name: "何社くらいに査定を依頼するのがベストですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最低でも2〜3社に査定を依頼するのがおすすめです。同じ着物でも業者によって査定額が大きく異なることがあり、比較することで最も高い金額で売却できます。多すぎても手間がかかるため、3社程度が理想的です。",
      },
    },
    {
      "@type": "Question",
      name: "帯だけでも買取してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、帯だけでも買取可能です。特に西陣織、龍村美術織物、川島織物などの有名ブランドの帯は高額買取が期待できます。着物とセットで売ると査定額がアップすることもありますが、帯単品でも十分に値がつきます。",
      },
    },
    {
      "@type": "Question",
      name: "着物買取の査定額に納得できない場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "査定額に納得できない場合はキャンセルして構いません。信頼できる業者であればキャンセル料は無料です。他の業者にも査定を依頼し、比較検討しましょう。即決を迫る業者は避けた方が無難です。",
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
      name: "高く売るコツ",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/sell-high-tips/",
    },
  ],
};

export default function SellHighTipsPage() {
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
          { label: "高く売るコツ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              知識・ノウハウ
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            着物を高く売るための
            <span className="text-[#6b4c8a]">7つのコツ</span>
            <br className="md:hidden" />
            査定額アップの秘訣
          </h1>
          <p className="text-gray-600 leading-relaxed">
            着物を売るなら、少しでも高く売りたいもの。
            実は、ちょっとした工夫で査定額が大きく変わることがあります。
            本記事では、着物買取のプロが教える「高く売るための7つのコツ」を
            徹底解説します。これから着物を売ろうと考えている方は、
            ぜひ実践してみてください。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#tip1" className="hover:underline">
                1. 複数業者に見積もりを取る
              </a>
            </li>
            <li>
              <a href="#tip2" className="hover:underline">
                2. 証紙を添える
              </a>
            </li>
            <li>
              <a href="#tip3" className="hover:underline">
                3. セットで売る
              </a>
            </li>
            <li>
              <a href="#tip4" className="hover:underline">
                4. 季節を考慮する
              </a>
            </li>
            <li>
              <a href="#tip5" className="hover:underline">
                5. クリーニングは不要
              </a>
            </li>
            <li>
              <a href="#tip6" className="hover:underline">
                6. 早めに売る
              </a>
            </li>
            <li>
              <a href="#tip7" className="hover:underline">
                7. 着物専門の買取業者を選ぶ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* コツ1 */}
        <section id="tip1" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">コツ1.</span> 複数業者に見積もりを取る
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              査定額アップ効果：★★★★★（最重要）
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物を高く売るための最も重要なコツは、複数の買取業者に査定を依頼して
              比較することです。同じ着物でも、業者によって査定額が数千円〜数万円
              異なることがあります。
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">なぜ業者によって査定額が違うのか？</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  業者ごとに得意な着物の種類が異なる（振袖に強い、紬に強い等）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  販路の違い（自社店舗、ネット販売、海外販売等）で再販価格が異なる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  査定員の経験や知識のレベルが異なる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  在庫状況によって需要が変動する
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">理想的な見積もり数は？</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                最低2〜3社、理想的には3社に見積もりを取るのがおすすめです。
                1社だけでは適正価格かどうか判断できません。
                多すぎると手間がかかるため、3社程度がバランスの良い数です。
                出張買取なら自宅で査定してもらえるため、時間効率も良いでしょう。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">実践のコツ：</span>
              先に査定を受けた業者の金額を次の業者に伝えると、
              「うちはもう少し高く出せます」と競争してくれることがあります。
              ただし、最初の業者には「他社にも見積もりを取る予定です」と
              正直に伝えておきましょう。
            </p>
          </div>
        </section>

        {/* コツ2 */}
        <section id="tip2" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">コツ2.</span> 証紙を添える
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              査定額アップ効果：★★★★★（非常に大きい）
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              証紙は着物の産地・素材・製法を証明する公的な書類です。
              証紙の有無で買取価格が2倍以上変わることもあるため、
              必ず探して一緒に査定に出しましょう。
            </p>
          </div>

          <div className="border border-[#e8ddd0] rounded-lg p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              証紙が見つかりやすい場所
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                たとう紙（着物を包んでいる和紙）の中に挟まっている
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                端布（仕立て時の余り布）と一緒に保管されている
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                タンスの引き出しの隅に落ちている
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                購入時の箱や袋の中
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                着物の裏側に直接縫い付けられている場合も
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            証紙以外にも、購入時の領収書、保証書、端布なども査定額に
            プラスの影響を与えます。着物に関連するものはすべて一緒に査定に出しましょう。
          </p>
        </section>

        {/* コツ3 */}
        <section id="tip3" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">コツ3.</span> セットで売る
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              査定額アップ効果：★★★★☆（効果大）
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物と帯、和装小物をセットで売ると、個別に売るよりも
              査定額が高くなるケースがあります。着物と相性の良い帯を
              セットにすることで、再販時の価値が上がるためです。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                セット売りで査定額がアップするもの
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  着物 + 合わせた帯
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  帯 + 帯締め + 帯揚げ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  振袖 + 帯 + 草履 + バッグ（フルセット）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  着物 + 長襦袢（サイズが合っているもの）
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                まとめ売りのメリット
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  セット販売できるため業者の利益が増える
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  一度に大量に買い取れるため業者の効率が良い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  単品では値がつきにくい小物も買い取ってもらえる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  まとめ売りボーナスを設定している業者もある
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* コツ4 */}
        <section id="tip4" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">コツ4.</span> 季節を考慮する
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              査定額アップ効果：★★★☆☆（やや効果あり）
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物の需要は季節によって変動します。需要が高まる時期に売れば、
              査定額がアップする可能性があります。
            </p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">着物の種類</th>
                  <th className="px-4 py-3 text-left font-medium">需要が高まる時期</th>
                  <th className="px-4 py-3 text-left font-medium">売るのにベストな時期</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">振袖</td>
                  <td className="px-4 py-3 text-gray-600">成人式前（1月）</td>
                  <td className="px-4 py-3 text-gray-600">10月〜12月</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">袴</td>
                  <td className="px-4 py-3 text-gray-600">卒業シーズン（3月）</td>
                  <td className="px-4 py-3 text-gray-600">12月〜2月</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">夏物（絽・紗）</td>
                  <td className="px-4 py-3 text-gray-600">夏（6月〜8月）</td>
                  <td className="px-4 py-3 text-gray-600">4月〜6月</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">袷（あわせ）</td>
                  <td className="px-4 py-3 text-gray-600">秋冬（10月〜5月）</td>
                  <td className="px-4 py-3 text-gray-600">8月〜10月</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">訪問着</td>
                  <td className="px-4 py-3 text-gray-600">お宮参り・七五三（秋）</td>
                  <td className="px-4 py-3 text-gray-600">7月〜9月</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ただし注意：</span>
              季節を待っている間に着物が劣化するリスクもあります。
              シミが広がったりカビが生えたりすると、季節に合わせて売っても
              却って査定額が下がることも。「今すぐ売る」か「ベストシーズンを待つ」かは、
              着物の状態を見て判断しましょう。迷ったら早めに売る方が安全です。
            </p>
          </div>
        </section>

        {/* コツ5 */}
        <section id="tip5" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">コツ5.</span> クリーニングは不要
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              査定額アップ効果：★★★☆☆（コスト削減の観点）
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              「売る前にクリーニングに出した方がいいのでは？」と思う方も多いですが、
              実はクリーニングは不要です。むしろ、クリーニング代が無駄になる
              可能性が高いです。
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                クリーニング不要の理由
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  着物のクリーニングは1枚あたり3,000円〜15,000円と高額
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  買取業者は自社でクリーニングや修復を行える
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  クリーニングしても買取価格がクリーニング代以上に上がるとは限らない
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  不適切なクリーニングで着物を傷めるリスクがある
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                ただし、やっておくと良いこと
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  防虫剤の臭いがきつい場合は、風通しの良い場所で陰干しする
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  ほこりが目立つ場合は、やわらかいブラシで軽く払う
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  たたみジワがひどい場合は、当て布をしてアイロンを軽くかける
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* コツ6 */}
        <section id="tip6" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">コツ6.</span> 早めに売る
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              査定額アップ効果：★★★★☆（非常に重要）
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物は時間が経つほど価値が下がります。
              「いつか売ろう」と思っているうちに劣化が進み、
              本来なら高値がついた着物が値崩れしてしまうケースは非常に多いです。
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                時間とともに価値が下がる理由
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  保管中にシミ、黄ばみ、カビが発生・拡大する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  防虫剤の臭いが生地に染みつく
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  生地が経年劣化して風合いが変わる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  流行の変化により需要が下がる可能性がある
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">結論：</span>
              売ると決めたら、できるだけ早く行動しましょう。
              特に既にシミや黄ばみが出始めている着物は、
              放置するとさらに悪化して買取価格が急落します。
              「今が一番状態が良い＝今が一番高く売れる」と考えてください。
            </p>
          </div>
        </section>

        {/* コツ7 */}
        <section id="tip7" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">コツ7.</span> 着物専門の買取業者を選ぶ
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              査定額アップ効果：★★★★★（最重要）
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物をどこに売るかで、買取価格は大きく変わります。
              リサイクルショップやフリマアプリよりも、
              着物専門の買取業者を選ぶことが高額査定への最短ルートです。
            </p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">売却先</th>
                  <th className="px-4 py-3 text-left font-medium">メリット</th>
                  <th className="px-4 py-3 text-left font-medium">デメリット</th>
                  <th className="px-4 py-3 text-left font-medium">おすすめ度</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">着物専門買取業者</td>
                  <td className="px-4 py-3 text-gray-600">適正査定、出張対応</td>
                  <td className="px-4 py-3 text-gray-600">特になし</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★★</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">リサイクルショップ</td>
                  <td className="px-4 py-3 text-gray-600">手軽に売れる</td>
                  <td className="px-4 py-3 text-gray-600">安値になりがち</td>
                  <td className="px-4 py-3 text-gray-400 font-bold">★★☆☆☆</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">フリマアプリ</td>
                  <td className="px-4 py-3 text-gray-600">自分で価格設定可能</td>
                  <td className="px-4 py-3 text-gray-600">手間がかかる</td>
                  <td className="px-4 py-3 text-gray-400 font-bold">★★★☆☆</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ネットオークション</td>
                  <td className="px-4 py-3 text-gray-600">競り合いで高値も</td>
                  <td className="px-4 py-3 text-gray-600">手間・リスクあり</td>
                  <td className="px-4 py-3 text-gray-400 font-bold">★★★☆☆</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              着物専門の買取業者が高額査定になる理由
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                専門査定員が着物の価値を正しく評価できる
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                着物の再販ルートを持っているため、高く買い取れる
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                自社でクリーニング・修復ができるため、多少の難があっても査定可能
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                証紙なしでも、経験から産地や品質を見極められる
              </li>
            </ul>
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
                  Q. 着物を売る前にクリーニングに出すべきですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                いいえ、クリーニングは不要です。着物のクリーニングは1枚あたり
                3,000円〜15,000円と高額で、クリーニング代を買取価格で回収できないことが多いです。
                買取業者は自社でクリーニングできるため、そのままの状態で査定に出しましょう。
                ただし、防虫剤の臭いがきつい場合は風通しの良い場所で陰干しすると良いでしょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 着物を高く売るのに最適な時期はありますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物の需要は季節によって変動します。一般的に、成人式前（10月〜12月）は
                振袖の需要が高まり、卒業シーズン前は袴の需要が高まります。
                ただし、着物は時間とともに劣化するため、
                最適な時期を待つよりも早めに売る方が結果的に高値になることが多いです。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 何社くらいに査定を依頼するのがベストですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                最低でも2〜3社に査定を依頼するのがおすすめです。
                同じ着物でも業者によって査定額が大きく異なることがあり、
                比較することで最も高い金額で売却できます。
                多すぎると手間がかかるため、3社程度が理想的です。
                出張買取なら自宅で査定してもらえるため、時間的な負担も少ないです。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 帯だけでも買取してもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、帯だけでも買取可能です。特に西陣織、龍村美術織物、
                川島織物などの有名ブランドの帯は高額買取が期待できます。
                着物とセットで売ると査定額がアップすることもありますが、
                帯単品でも十分に値がつきます。帯締めや帯揚げも一緒に出すとさらに良いでしょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 着物買取の査定額に納得できない場合はどうすればいいですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                査定額に納得できない場合はキャンセルして構いません。
                信頼できる業者であればキャンセル料は無料です。
                他の業者にも査定を依頼し、比較検討しましょう。
                即決を迫る業者は避けた方が無難です。
                「検討します」と言って一度保留にするのも良い方法です。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：7つのコツを実践して高額売却を
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-700 font-medium">7つのコツのおさらい：</p>
              <ol className="space-y-1 text-sm text-gray-600 ml-4">
                <li>1. 複数業者に見積もりを取る（最重要）</li>
                <li>2. 証紙を添える</li>
                <li>3. 帯・小物とセットで売る</li>
                <li>4. 季節を考慮する</li>
                <li>5. クリーニングは不要（コスト削減）</li>
                <li>6. 早めに売る（劣化防止）</li>
                <li>7. 着物専門の買取業者を選ぶ（最重要）</li>
              </ol>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              特に重要なのは「複数業者に見積もりを取る」と「着物専門の買取業者を選ぶ」の2つ。
              この2つを実践するだけでも、査定額は大きく変わります。
              まずは信頼できる着物買取業者に無料査定を依頼してみましょう。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            まずは無料査定で着物の価値を確認
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            着物を高く売るための第一歩は、プロに査定してもらうこと。<br />
            信頼できる着物買取業者をランキングで比較してみましょう。
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
              href="/articles/appraisal-criteria/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物買取の査定基準を徹底解説
              </p>
            </Link>
            <Link
              href="/articles/trouble-prevention/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物買取トラブル事例と回避法
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
