import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取の査定基準を徹底解説｜査定員は何を見ている？",
  description:
    "着物買取の査定で査定員が見ているポイントを徹底解説。素材、産地、作家、状態、証紙、サイズ、需要の7つの査定基準と、素材別の評価、サイズの影響、季節性まで詳しくガイドします。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/appraisal-criteria/",
  },
  openGraph: {
    title: "着物買取の査定基準を徹底解説｜査定員は何を見ている？",
    description:
      "着物買取の査定基準を徹底解説。査定員が見る7つのポイントと高額査定のコツをガイドします。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/appraisal-criteria/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取の査定基準を徹底解説｜査定員は何を見ている？",
  description:
    "着物買取の査定で査定員が見ているポイントを徹底解説。素材、産地、作家、状態、証紙、サイズ、需要の7つの査定基準を詳しくガイドします。",
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
      "https://kimono-kaitori-biyori.pages.dev/articles/appraisal-criteria/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "着物の査定で最も重視されるポイントは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "素材と産地（作家）が最も重視されます。正絹の着物は高値がつきやすく、有名産地（大島紬、結城紬、加賀友禅など）や人間国宝の作品はさらに高額になります。証紙の有無も大きく影響します。",
      },
    },
    {
      "@type": "Question",
      name: "着物のサイズが小さいと査定額は下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、現代の着物市場では身丈160cm以上、裄丈65cm以上の着物が需要が高い傾向にあります。サイズが小さい着物は着用できる人が限られるため、査定額が下がることがあります。ただし、生地に余裕（内揚げ）があれば仕立て直しが可能なため、プラス査定になることもあります。",
      },
    },
    {
      "@type": "Question",
      name: "ポリエステルの着物でも査定してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "査定自体は可能ですが、ポリエステルの着物は基本的に買取価格が非常に低いか、値がつかないケースが多いです。正絹の着物と比べると需要が大幅に低いためです。ブランドものや未使用品であれば少額の買取が可能な場合もあります。",
      },
    },
    {
      "@type": "Question",
      name: "着物の査定にかかる時間はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物の枚数にもよりますが、5〜10枚であれば30分〜1時間程度が目安です。20枚以上の場合は1〜2時間かかることがあります。出張買取の場合は、事前に枚数を伝えておくとスムーズです。",
      },
    },
    {
      "@type": "Question",
      name: "査定額を上げるために事前にできることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "証紙や付属品（たとう紙、端布、購入時の書類）を探して一緒に出すこと、帯や小物をセットで査定に出すこと、複数業者に見積もりを取ることが効果的です。クリーニングは不要ですが、防虫剤の臭いがきつい場合は風通しをしておくと印象が良くなります。",
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
      name: "査定基準",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/appraisal-criteria/",
    },
  ],
};

export default function AppraisalCriteriaPage() {
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
          { label: "査定基準" },
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
            着物買取の査定基準を徹底解説
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">査定員は何を見ている？</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            着物買取で査定員はどこを見て価格を決めているのか、気になりませんか？
            査定基準を知っておくことで、手持ちの着物の価値を事前に把握し、
            納得のいく取引ができるようになります。
            本記事では、着物買取の査定で重視される7つのポイントを徹底解説。
            素材別の評価、サイズの影響、季節性についても詳しくお伝えします。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. 査定基準の全体像
              </a>
            </li>
            <li>
              <a href="#material" className="hover:underline">
                2. 素材（最重要ポイント）
              </a>
            </li>
            <li>
              <a href="#origin" className="hover:underline">
                3. 産地・作家
              </a>
            </li>
            <li>
              <a href="#condition" className="hover:underline">
                4. 状態
              </a>
            </li>
            <li>
              <a href="#certificate" className="hover:underline">
                5. 証紙
              </a>
            </li>
            <li>
              <a href="#size" className="hover:underline">
                6. サイズ
              </a>
            </li>
            <li>
              <a href="#demand" className="hover:underline">
                7. 需要・季節性
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* セクション1 */}
        <section id="overview" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            査定基準の全体像
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物の査定では、以下の7つのポイントが総合的に評価されます。
            どれか1つが突出していても、他が劣っていれば査定額は下がります。
            逆に、すべてのポイントが平均以上であれば、高額査定が期待できます。
          </p>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">
              査定で見られる7つのポイント
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-white border border-[#e8ddd0] rounded p-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">素材</p>
                  <p className="text-xs text-gray-500">重要度：★★★★★</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#e8ddd0] rounded p-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">産地・作家</p>
                  <p className="text-xs text-gray-500">重要度：★★★★★</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#e8ddd0] rounded p-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">状態</p>
                  <p className="text-xs text-gray-500">重要度：★★★★☆</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#e8ddd0] rounded p-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold">4</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">証紙</p>
                  <p className="text-xs text-gray-500">重要度：★★★★☆</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#e8ddd0] rounded p-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold">5</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">サイズ</p>
                  <p className="text-xs text-gray-500">重要度：★★★☆☆</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#e8ddd0] rounded p-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold">6</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">需要・季節性</p>
                  <p className="text-xs text-gray-500">重要度：★★★☆☆</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#e8ddd0] rounded p-3 md:col-span-2">
                <span className="bg-[#6b4c8a] text-white text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold">7</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">着物の種類（フォーマル度）</p>
                  <p className="text-xs text-gray-500">重要度：★★★☆☆</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              査定基準を事前に知っておくことで、「なぜこの金額なのか」が理解でき、
              業者との交渉もスムーズになります。不当に安い金額を提示された場合に
              「おかしい」と気づくこともできます。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section id="material" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            素材（最重要ポイント）
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物の素材は、査定額を左右する最も重要な要素です。
            素材によって買取価格の上限が決まるといっても過言ではありません。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">素材</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                  <th className="px-4 py-3 text-left font-medium">査定評価</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">正絹（シルク）</td>
                  <td className="px-4 py-3 text-gray-600">光沢があり高級感がある</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">最高評価</td>
                  <td className="px-4 py-3 text-gray-600">1,000〜500,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">麻</td>
                  <td className="px-4 py-3 text-gray-600">夏物に多く、涼しげ</td>
                  <td className="px-4 py-3 text-gray-600 font-medium">中〜高評価</td>
                  <td className="px-4 py-3 text-gray-600">500〜100,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">木綿</td>
                  <td className="px-4 py-3 text-gray-600">カジュアルな普段着</td>
                  <td className="px-4 py-3 text-gray-600 font-medium">低〜中評価</td>
                  <td className="px-4 py-3 text-gray-600">100〜10,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ウール</td>
                  <td className="px-4 py-3 text-gray-600">冬の普段着</td>
                  <td className="px-4 py-3 text-gray-600 font-medium">低評価</td>
                  <td className="px-4 py-3 text-gray-600">ほぼ値がつかない</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ポリエステル</td>
                  <td className="px-4 py-3 text-gray-600">安価で手入れが楽</td>
                  <td className="px-4 py-3 text-red-600 font-medium">ほぼ値がつかない</td>
                  <td className="px-4 py-3 text-gray-600">0〜500円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-[#e8ddd0] rounded-lg p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              素材の見分け方
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                <span><span className="font-medium">正絹：</span>光沢があり、手触りがしっとりしている。生地をこすると「キュッキュッ」と音がする</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                <span><span className="font-medium">ポリエステル：</span>軽くてシワになりにくい。化学繊維特有のツルツルした手触り</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                <span><span className="font-medium">麻：</span>シャリ感があり、涼しげな質感。透け感がある場合も</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c]">&#9656;</span>
                <span><span className="font-medium">木綿：</span>やわらかく、吸水性がある。カジュアルな印象</span>
              </li>
            </ul>
          </div>
        </section>

        {/* セクション3 */}
        <section id="origin" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            産地・作家
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            有名産地の着物や人間国宝の作品は、高額査定が期待できます。
            産地と作家は素材と並んで最も重視されるポイントです。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#c9a76c] rounded-lg p-5 bg-[#faf8f5]">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-3">
                高額査定が期待できる産地
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  大島紬（鹿児島・奄美）
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  結城紬（茨城・栃木）
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  加賀友禅（石川）
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  京友禅（京都）
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  西陣織（京都）
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  博多織（福岡）
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  牛首紬（石川）
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#6b4c8a]">&#9632;</span>
                  黄八丈（東京・八丈島）
                </div>
              </div>
            </div>

            <div className="border border-[#c9a76c] rounded-lg p-5 bg-[#faf8f5]">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-3">
                高額査定が期待できる作家・ブランド
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium">人間国宝：</span>
                  志村ふくみ（紬織）、羽田登喜男（友禅）、久保田一竹（辻が花）、
                  北村武資（羅・経錦）、森口華弘（友禅）、小宮康孝（江戸小紋）など
                </p>
                <p>
                  <span className="font-medium">有名ブランド帯：</span>
                  龍村美術織物、川島織物、千總、山口美術織物など
                </p>
                <p>
                  <span className="font-medium">有名染織作家：</span>
                  由水十久、百貫華峰、木村雨山、上野為二など
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">確認方法：</span>
              産地は証紙で確認できます。作家物は落款（おくみの裏側や衿先の小さな印）で
              確認できます。証紙も落款もない場合でも、着物専門の査定員であれば
              生地や染めの特徴から産地や作家を推定できることがあります。
            </p>
          </div>
        </section>

        {/* セクション4 */}
        <section id="condition" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            状態
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物の状態は査定額に直接影響します。
            査定員がチェックするポイントを把握しておきましょう。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">状態ランク</th>
                  <th className="px-4 py-3 text-left font-medium">具体的な状態</th>
                  <th className="px-4 py-3 text-left font-medium">査定への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">S（新品同様）</td>
                  <td className="px-4 py-3 text-gray-600">しつけ糸付き、未着用</td>
                  <td className="px-4 py-3 text-green-600 font-medium">最高額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">A（美品）</td>
                  <td className="px-4 py-3 text-gray-600">使用感少、目立つシミなし</td>
                  <td className="px-4 py-3 text-green-600 font-medium">高額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">B（良好）</td>
                  <td className="px-4 py-3 text-gray-600">多少の使用感、小さなシミ</td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">中程度</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">C（やや難あり）</td>
                  <td className="px-4 py-3 text-gray-600">複数のシミ、黄ばみ、臭い</td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">低め</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">D（難あり）</td>
                  <td className="px-4 py-3 text-gray-600">広範囲のシミ、カビ、破れ</td>
                  <td className="px-4 py-3 text-red-600 font-medium">大幅減額〜買取不可</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-[#e8ddd0] rounded-lg p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              査定員がチェックするポイント
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                シミ・黄ばみの有無と場所（目立つ場所かどうか）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                カビの有無（白カビ・黒カビ）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                虫食い・破れの有無
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                色あせ・日焼けの有無
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                臭い（防虫剤のナフタリン臭、カビ臭など）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a]">&#9656;</span>
                生地のハリ・しなやかさ（経年劣化の程度）
              </li>
            </ul>
          </div>
        </section>

        {/* セクション5 */}
        <section id="certificate" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙は着物の産地・素材・製法を公的に証明する書類です。
            証紙の有無で査定額が2倍以上変わることもあるため、
            非常に重要な査定ポイントです。
          </p>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              証紙が査定に与える影響
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                証紙があると、産地・素材の真贋が保証され、査定額がアップ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                証紙がないと、「本場」であることを証明できず、30〜50%の減額に
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                伝統工芸品マークがあれば、さらにプラス査定
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                落款（作家のサイン）があれば、作家物として高額評価
              </li>
            </ul>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">アドバイス：</span>
              着物を売る前に、たとう紙の中やタンスの引き出しの隅を確認して、
              証紙がないか探してみましょう。証紙1枚で査定額が数万円変わることもあります。
              端布に縫い付けられていたり、購入時の箱に入っている場合もあります。
            </p>
          </div>
        </section>

        {/* セクション6 */}
        <section id="size" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            サイズ
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物のサイズは、再販のしやすさに直結するため、
            査定額に影響する重要な要素です。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">サイズ項目</th>
                  <th className="px-4 py-3 text-left font-medium">需要が高いサイズ</th>
                  <th className="px-4 py-3 text-left font-medium">需要が低いサイズ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">身丈</td>
                  <td className="px-4 py-3 text-gray-600">160cm以上</td>
                  <td className="px-4 py-3 text-gray-600">155cm未満</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">裄丈</td>
                  <td className="px-4 py-3 text-gray-600">65cm以上</td>
                  <td className="px-4 py-3 text-gray-600">63cm未満</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">身幅</td>
                  <td className="px-4 py-3 text-gray-600">前幅24cm以上</td>
                  <td className="px-4 py-3 text-gray-600">前幅22cm未満</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">なぜサイズが重要なのか？</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                現代の女性は昔に比べて身長が高くなっています。
                昔の着物はサイズが小さいものが多く、そのままでは着用できないことがあります。
                サイズが大きい着物は多くの方が着用できるため、需要が高く査定額もアップします。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">内揚げ（うちあげ）があるとプラス</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物の内側に縫い込まれた余り生地（内揚げ）があると、
                仕立て直しでサイズアップが可能です。
                内揚げがある着物は、現状のサイズが小さくてもプラス査定になることがあります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション7 */}
        <section id="demand" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            需要・季節性
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物の需要は季節やイベントによって変動します。
            需要が高まるタイミングに合わせて売ると、査定額がアップする可能性があります。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                着物の種類別・需要が高まるシーズン
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  <span><span className="font-medium">振袖：</span>成人式前の10月〜12月に需要がピーク</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  <span><span className="font-medium">訪問着：</span>お宮参り・七五三のある秋に需要が高まる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  <span><span className="font-medium">夏物（絽・紗）：</span>4月〜6月に仕入れ需要が高まる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  <span><span className="font-medium">袷（あわせ）：</span>秋冬に向けて8月〜10月に需要が高まる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  <span><span className="font-medium">袴：</span>卒業シーズン前の12月〜2月に需要がピーク</span>
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                着物の種類別・フォーマル度と需要
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                一般的に、フォーマル度の高い着物ほど買取需要が高い傾向にあります。
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#6b4c8a] text-white text-xs px-2 py-0.5 rounded">高需要</span>
                  <span className="text-sm text-gray-700">振袖、訪問着、付け下げ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#c9a76c] text-white text-xs px-2 py-0.5 rounded">中需要</span>
                  <span className="text-sm text-gray-700">色無地、留袖（黒留袖は低め）、紬（産地物は高需要）</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-gray-400 text-white text-xs px-2 py-0.5 rounded">低需要</span>
                  <span className="text-sm text-gray-700">小紋、ウール着物、ポリエステル着物</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">重要：</span>
              季節を考慮することは大切ですが、待っている間に着物が劣化するリスクもあります。
              シミが広がったりカビが生えたりすると、季節に合わせて売っても査定額が下がります。
              迷ったら「早めに売る」方が結果的に高値になることが多いです。
            </p>
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
                  Q. 着物の査定で最も重視されるポイントは何ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                素材と産地（作家）が最も重視されます。正絹の着物は高値がつきやすく、
                有名産地（大島紬、結城紬、加賀友禅など）や人間国宝の作品はさらに高額になります。
                証紙の有無も大きく影響します。
                これらの要素が揃っている着物は、多少の難があっても高額査定が期待できます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 着物のサイズが小さいと査定額は下がりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、現代の着物市場では身丈160cm以上、裄丈65cm以上の着物が
                需要が高い傾向にあります。サイズが小さい着物は着用できる人が限られるため、
                査定額が下がることがあります。ただし、生地に余裕（内揚げ）があれば
                仕立て直しが可能なため、プラス査定になることもあります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ポリエステルの着物でも査定してもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                査定自体は可能ですが、ポリエステルの着物は基本的に
                買取価格が非常に低いか、値がつかないケースが多いです。
                正絹の着物と比べると需要が大幅に低いためです。
                ブランドものや未使用品であれば少額の買取が可能な場合もあります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 着物の査定にかかる時間はどれくらいですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物の枚数にもよりますが、5〜10枚であれば30分〜1時間程度が目安です。
                20枚以上の場合は1〜2時間かかることがあります。
                出張買取の場合は、事前に枚数を伝えておくとスムーズです。
                複雑な着物（作家物、産地物）が多い場合はやや時間がかかります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 査定額を上げるために事前にできることはありますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                証紙や付属品（たとう紙、端布、購入時の書類）を探して一緒に出すこと、
                帯や小物をセットで査定に出すこと、複数業者に見積もりを取ることが効果的です。
                クリーニングは不要ですが、防虫剤の臭いがきつい場合は
                風通しをしておくと印象が良くなります。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：査定基準を知って賢く着物を売ろう
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              着物買取の査定基準は、素材、産地・作家、状態、証紙、サイズ、需要の
              6つの要素で総合的に判断されます。
              これらの基準を知っておくことで、査定額の妥当性を判断でき、
              不当に安い金額で売ってしまうリスクを減らせます。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              高額査定のためのポイントは、証紙を探して一緒に出すこと、
              複数業者に見積もりを取って比較すること、
              そして着物専門の買取業者を選ぶことです。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              まずはプロの査定員に見てもらうことで、
              手持ちの着物の正確な価値を知ることができます。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            プロの査定で着物の正確な価値を知る
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            着物専門の査定員が、7つの基準で丁寧に査定してくれます。<br />
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
              href="/articles/sell-high-tips/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物を高く売るための7つのコツ
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
