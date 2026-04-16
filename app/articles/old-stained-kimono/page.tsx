import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "古い着物・シミありでも売れる？買取可能な条件と業者選び",
  description:
    "古い着物やシミ・汚れがある着物でも売れるのか徹底解説。買取可能な条件、シミの許容範囲、古くても高額になる着物の例、業者ごとの対応差まで詳しくガイドします。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/old-stained-kimono/",
  },
  openGraph: {
    title: "古い着物・シミありでも売れる？買取可能な条件と業者選び",
    description:
      "古い着物やシミのある着物でも売れるのか徹底解説。買取可能な条件と業者選びのポイントをガイドします。",
    url: "https://kimonokaitori-biyori.com/articles/old-stained-kimono/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "古い着物・シミありでも売れる？買取可能な条件と業者選び",
  description:
    "古い着物やシミ・汚れがある着物でも売れるのか徹底解説。買取可能な条件、シミの許容範囲、古くても高額になる着物の例を詳しくガイドします。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://kimonokaitori-biyori.com/articles/old-stained-kimono/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "30年以上前の着物でも売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、30年以上前の着物でも売れるケースは多いです。特に正絹の着物、有名産地の着物、人間国宝の作品などは古くても高値がつきます。ただし、保管状態が悪くシミやカビが広がっている場合は買取価格が下がります。",
      },
    },
    {
      "@type": "Question",
      name: "シミがある着物は自分でクリーニングしてから売るべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、自分でクリーニングする必要はありません。専門のクリーニングは費用が高く（数千円〜数万円）、クリーニング代を回収できない場合があります。買取業者は自社でクリーニングできるため、シミがあるままの状態で査定に出しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "どの程度のシミなら買取可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "小さなシミや部分的な黄ばみであれば買取可能なケースが多いです。ただし、広範囲にわたるカビ、全体的な変色、生地の劣化がある場合は買取不可となることもあります。判断が難しい場合は、まず査定に出してみることをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "ポリエステルの古い着物は売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ポリエステルの着物は基本的に買取価格が非常に低く、値がつかないケースが多いです。ただし、ブランドものや未使用品であれば少額の買取が可能な場合もあります。正絹の着物と比べると、買取需要は大幅に低くなります。",
      },
    },
    {
      "@type": "Question",
      name: "古い着物を少しでも高く売るコツはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "複数の買取業者に査定を依頼して比較すること、証紙や付属品を一緒に出すこと、着物専門の買取業者を選ぶことが重要です。また、帯や小物をセットで売ると査定額がアップすることがあります。",
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
      item: "https://kimonokaitori-biyori.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "お役立ち情報",
      item: "https://kimonokaitori-biyori.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "古い着物・シミあり",
      item: "https://kimonokaitori-biyori.com/articles/old-stained-kimono/",
    },
  ],
};

export default function OldStainedKimonoPage() {
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
          { label: "古い着物・シミあり" },
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
            古い着物・シミありでも
            <span className="text-[#6b4c8a]">売れる？</span>
            <br className="md:hidden" />
            買取可能な条件と業者選び
          </h1>
          <p className="text-gray-600 leading-relaxed">
            「この古い着物、売れるのかな...」「シミがあるけど買い取ってもらえる？」
            こうした疑問をお持ちの方は多いのではないでしょうか。結論から言えば、
            古い着物やシミのある着物でも買取可能なケースは多数あります。
            本記事では、売れる着物と売れない着物の基準、シミ・汚れの許容範囲、
            古くても高額になる着物の例、そして業者ごとの対応差まで詳しく解説します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#conclusion" className="hover:underline">
                1. 古い着物・シミありでも売れるのか？【結論】
              </a>
            </li>
            <li>
              <a href="#sellable" className="hover:underline">
                2. 売れる着物・売れない着物の基準
              </a>
            </li>
            <li>
              <a href="#stain-range" className="hover:underline">
                3. シミ・汚れの許容範囲
              </a>
            </li>
            <li>
              <a href="#old-expensive" className="hover:underline">
                4. 古くても高額になる着物の例
              </a>
            </li>
            <li>
              <a href="#dealer-diff" className="hover:underline">
                5. 業者ごとの対応差
              </a>
            </li>
            <li>
              <a href="#tips" className="hover:underline">
                6. 古い着物を少しでも高く売るコツ
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
        <section id="conclusion" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            古い着物・シミありでも売れるのか？【結論】
          </h2>
          <div className="bg-[#6b4c8a] text-white rounded-lg p-6 mb-6">
            <p className="text-lg font-bold mb-3">
              結論：古くてもシミがあっても、売れるケースは多い
            </p>
            <p className="text-sm leading-relaxed text-purple-100">
              着物買取業者の多くは、古い着物やシミのある着物でも査定・買取に対応しています。
              特に正絹の着物、有名産地の着物、人間国宝の作品などは、多少の難があっても
              買取需要があります。「どうせ売れないだろう」と諦めて捨ててしまうのが
              最ももったいない選択です。まずは査定に出してみましょう。
            </p>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            ただし、すべての古い着物やシミのある着物が買い取ってもらえるわけではありません。
            素材、産地、作家、状態、サイズなど複数の要素で総合的に判断されます。
            以下のセクションで、具体的な基準を詳しく見ていきましょう。
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-bold text-sm mb-1">売れる可能性が高い</p>
              <ul className="text-xs text-green-700 space-y-1">
                <li>正絹の着物</li>
                <li>有名産地・作家物</li>
                <li>証紙あり</li>
                <li>部分的なシミのみ</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-red-800 font-bold text-sm mb-1">売れない可能性が高い</p>
              <ul className="text-xs text-red-700 space-y-1">
                <li>ポリエステル素材</li>
                <li>全体的なカビ・変色</li>
                <li>生地が破れている</li>
                <li>強い臭い（防虫剤等）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section id="sellable" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            売れる着物・売れない着物の基準
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物が買取可能かどうかは、主に以下の5つのポイントで判断されます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                1. 素材（最重要）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                着物の素材は買取の可否と価格を左右する最も重要な要素です。
                正絹（シルク）の着物は需要が高く、古くても買取対象となります。
                一方、ポリエステルやウールの着物は基本的に買取価格が非常に低いか、
                値がつかないケースが多いです。
              </p>
              <div className="bg-[#faf8f5] rounded p-3">
                <p className="text-xs text-[#6b4c8a] font-bold mb-1">素材の見分け方</p>
                <p className="text-xs text-gray-600">
                  正絹は光沢があり、手触りがしっとりしています。生地の端を少しこすると
                  「キュッキュッ」と音がするのも特徴です。ポリエステルは軽くてシワになりにくく、
                  化学繊維特有の光沢があります。判断が難しい場合は査定員に見てもらいましょう。
                </p>
              </div>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                2. 産地・ブランド
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                有名産地の着物は古くても高値がつきます。大島紬、結城紬、加賀友禅、
                京友禅、西陣織などは、たとえ30年以上前の着物でも買取需要があります。
                証紙があればさらに高額査定が期待できます。
                逆に、産地不明の量産品は古くなるほど価値が下がります。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                3. 作家・人間国宝
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                人間国宝（重要無形文化財保持者）や有名作家の着物は、
                古くてもコレクター需要があるため高額買取が期待できます。
                落款（作家のサインのようなもの）で確認できます。
                久保田一竹、羽田登喜男、志村ふくみ、北村武資などの作品は
                特に人気があります。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                4. 状態
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                当然ながら、状態が良いほど高値がつきます。ただし、多少のシミや
                黄ばみがあっても買取可能なケースは多いです。
                買取不可となりやすいのは、広範囲のカビ、生地の破れ・傷み、
                強い臭い（防虫剤のナフタリン臭など）がある場合です。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                5. サイズ
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                現代の着物市場では、身丈160cm以上、裄丈65cm以上の着物が
                需要が高い傾向にあります。昔の着物は小さいサイズが多いため、
                サイズが小さいと買取価格が下がることがあります。
                ただし、生地に余裕（内揚げ）があれば仕立て直しが可能なため、
                その分プラス査定になることもあります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section id="stain-range" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            シミ・汚れの許容範囲
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            シミや汚れがあっても買取可能かどうかは、その程度や場所によって異なります。
            以下の表で、一般的な許容範囲を確認しましょう。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">シミ・汚れの種類</th>
                  <th className="px-4 py-3 text-left font-medium">許容範囲</th>
                  <th className="px-4 py-3 text-left font-medium">買取への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    小さなシミ（1cm以下）
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    目立たない場所なら問題なし
                  </td>
                  <td className="px-4 py-3 text-green-600 font-medium">軽微な減額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    黄ばみ（部分的）
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    裏側や裾など目立たない部分なら許容
                  </td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">中程度の減額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    カビ（部分的）
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    表面のカビは除去可能な場合あり
                  </td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">中〜大幅な減額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    広範囲のカビ・変色
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    生地全体に広がっていると厳しい
                  </td>
                  <td className="px-4 py-3 text-red-600 font-medium">買取不可の場合あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    虫食い・破れ
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    小さな穴なら修復可能な場合あり
                  </td>
                  <td className="px-4 py-3 text-red-600 font-medium">大幅な減額〜買取不可</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    防虫剤の臭い
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    風通しで取れる程度なら問題なし
                  </td>
                  <td className="px-4 py-3 text-yellow-600 font-medium">軽〜中程度の減額</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">重要なポイント：</span>
              シミや汚れがあっても、素材や産地の価値が高ければ買取してもらえる可能性は十分あります。
              「シミがあるから売れないだろう」と自己判断で捨ててしまわず、
              まずは着物専門の買取業者に査定を依頼しましょう。
            </p>
          </div>

          <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              自分でクリーニングすべき？
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              基本的に、自分でクリーニングしてから売る必要はありません。
              着物の専門クリーニングは1枚あたり3,000円〜15,000円程度かかり、
              クリーニング代を買取価格で回収できないことも多いです。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              買取業者は自社でクリーニングや修復を行えるため、
              シミがあるままの状態で査定に出すのが賢明です。
              ただし、簡単にできる防虫剤の臭い取り（風通し）程度は
              やっておくと印象が良くなります。
            </p>
          </div>
        </section>

        {/* セクション4 */}
        <section id="old-expensive" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            古くても高額になる着物の例
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            古い着物でも、以下のような着物は高額買取が期待できます。
            タンスの中に眠っている着物に、思わぬ価値があるかもしれません。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#c9a76c] rounded-lg p-5 bg-[#faf8f5]">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-2">
                大島紬（おおしまつむぎ）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                鹿児島県奄美大島で生産される高級絹織物。泥染めの独特な風合いが特徴で、
                古いものでも状態が良ければ数万円〜十数万円の買取価格がつくことがあります。
                証紙に「本場大島紬」の表記があれば本物の証です。
              </p>
              <p className="text-xs text-gray-500">買取相場：5,000円〜150,000円</p>
            </div>

            <div className="border border-[#c9a76c] rounded-lg p-5 bg-[#faf8f5]">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-2">
                結城紬（ゆうきつむぎ）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                茨城県結城市を中心に生産される高級絹織物。ユネスコ無形文化遺産にも登録されており、
                手紡ぎ・手織りの本場結城紬は特に高値がつきます。
                使い込むほど風合いが増すため、古い着物でも価値があります。
              </p>
              <p className="text-xs text-gray-500">買取相場：10,000円〜200,000円</p>
            </div>

            <div className="border border-[#c9a76c] rounded-lg p-5 bg-[#faf8f5]">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-2">
                加賀友禅（かがゆうぜん）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                石川県金沢で生産される染め物の着物。写実的な花鳥風月の柄と、
                「加賀五彩」と呼ばれる独特の色使いが特徴です。
                作家物は特に高額になり、人気作家の作品は古くても10万円以上の値がつくことも。
              </p>
              <p className="text-xs text-gray-500">買取相場：5,000円〜200,000円</p>
            </div>

            <div className="border border-[#c9a76c] rounded-lg p-5 bg-[#faf8f5]">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-2">
                人間国宝の作品
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                重要無形文化財保持者（人間国宝）に認定された作家の作品は、
                芸術品としての価値があり、古くても高額で取引されます。
                志村ふくみ、羽田登喜男、久保田一竹、北村武資、森口華弘などの
                作品は数十万円以上の買取価格がつくこともあります。
              </p>
              <p className="text-xs text-gray-500">買取相場：50,000円〜500,000円以上</p>
            </div>

            <div className="border border-[#c9a76c] rounded-lg p-5 bg-[#faf8f5]">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-2">
                アンティーク着物（大正〜昭和初期）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                大正〜昭和初期に作られた着物は「アンティーク着物」として
                コレクター需要があります。モダンな柄やレトロなデザインが
                現代の着物愛好家に人気で、状態が良ければ高値がつくことがあります。
              </p>
              <p className="text-xs text-gray-500">買取相場：3,000円〜100,000円</p>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section id="dealer-diff" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            業者ごとの対応差
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            古い着物やシミのある着物への対応は、買取業者によって大きく異なります。
            業者選びが買取価格を大きく左右するため、慎重に選びましょう。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">業者タイプ</th>
                  <th className="px-4 py-3 text-left font-medium">古い着物への対応</th>
                  <th className="px-4 py-3 text-left font-medium">シミあり着物への対応</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    着物専門買取業者
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    専門知識で適正評価。古くても価値のある着物を見逃さない
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    自社修復可能なため、多少のシミは許容される
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    総合リサイクルショップ
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    専門知識がなく、一律安値の傾向
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    シミがあると買取拒否されることが多い
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    ネットオークション
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    アンティーク着物として需要がある場合も
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    状態を明記すれば売れることがある
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">結論：</span>
              古い着物やシミのある着物を売るなら、着物専門の買取業者を選ぶのが最善です。
              専門知識を持った査定員が在籍しており、着物の本来の価値を正しく評価してくれます。
              複数の専門業者に査定を依頼して、最も高い金額を提示した業者に売るのがおすすめです。
            </p>
          </div>
        </section>

        {/* セクション6 */}
        <section id="tips" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            古い着物を少しでも高く売るコツ
          </h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
              <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">複数業者に見積もりを取る</p>
                <p className="text-xs text-gray-600 mt-1">
                  最低でも2〜3社に査定を依頼し、最も高い金額を提示した業者に売りましょう。
                  同じ着物でも業者によって数千円〜数万円の差がつくことがあります。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
              <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">証紙・付属品を一緒に出す</p>
                <p className="text-xs text-gray-600 mt-1">
                  証紙、たとう紙、購入時の書類などがあれば必ず一緒に査定に出しましょう。
                  証紙の有無で買取価格が2倍以上変わることもあります。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
              <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">帯・小物とセットで売る</p>
                <p className="text-xs text-gray-600 mt-1">
                  着物単品よりも、帯や小物とセットで売ると査定額がアップすることがあります。
                  着物に合わせた帯がある場合はセットで査定に出しましょう。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
              <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">着物専門の買取業者を選ぶ</p>
                <p className="text-xs text-gray-600 mt-1">
                  リサイクルショップではなく、着物専門の買取業者を選びましょう。
                  専門知識がある査定員が、着物の本来の価値を正しく評価してくれます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
              <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">5</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">早めに売る</p>
                <p className="text-xs text-gray-600 mt-1">
                  着物は保管しているだけで劣化が進みます。シミや黄ばみが広がる前に、
                  早めに売却するのが高値で売るためのポイントです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サイズと査定額の関係 */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-[#c9a76c]">
            サイズと査定額の関係
          </h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              着物のサイズは査定額に大きく影響します。特に着丈や裄丈が長いものは需要が高く、高額査定につながりやすい傾向があります。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">着丈160cm以上</span>は需要が高い（仕立て直しやすいため）
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  最近は身長の高い女性が増えているため、<span className="font-medium text-gray-900">長い着物の需要がUP</span>しています
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">裄丈65cm以上</span>も好まれ、査定でプラス評価になりやすい
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                <p className="text-sm text-gray-600">
                  小さいサイズでも<span className="font-medium text-gray-900">海外需要</span>（小柄な体型向け）で値がつく場合もある
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
                  Q. 30年以上前の着物でも売れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、30年以上前の着物でも売れるケースは多いです。特に正絹の着物、
                有名産地の着物（大島紬、結城紬、加賀友禅など）、人間国宝の作品などは
                古くても高値がつきます。ただし、保管状態が悪くシミやカビが広がっている場合は
                買取価格が下がります。まずは査定に出してみることをおすすめします。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. シミがある着物は自分でクリーニングしてから売るべきですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                いいえ、自分でクリーニングする必要はありません。専門のクリーニングは
                費用が高く（1枚あたり3,000円〜15,000円）、クリーニング代を回収できない場合があります。
                買取業者は自社でクリーニングや修復ができるため、
                シミがあるままの状態で査定に出しましょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. どの程度のシミなら買取可能ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                小さなシミや部分的な黄ばみであれば買取可能なケースが多いです。
                ただし、広範囲にわたるカビ、全体的な変色、生地の劣化がある場合は
                買取不可となることもあります。判断が難しい場合は、
                まず査定に出してみることをおすすめします。
                着物の素材や産地によっては、多少のシミがあっても高値がつくことがあります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ポリエステルの古い着物は売れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                ポリエステルの着物は基本的に買取価格が非常に低く、値がつかないケースが多いです。
                ただし、ブランドものや未使用品であれば少額の買取が可能な場合もあります。
                正絹の着物と比べると、買取需要は大幅に低くなります。
                フリマアプリで個人間取引する方が高値になることもあります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 古い着物を少しでも高く売るコツはありますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                複数の買取業者に査定を依頼して比較すること、証紙や付属品を一緒に出すこと、
                着物専門の買取業者を選ぶことが重要です。
                また、帯や小物をセットで売ると査定額がアップすることがあります。
                クリーニングは不要ですが、簡単な臭い取り（風通し）はしておくと印象が良くなります。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：諦めずにまず査定を
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              古い着物やシミのある着物でも、売れるケースは想像以上に多いです。
              特に正絹の着物、有名産地の着物、人間国宝の作品などは、
              多少の難があっても買取需要があります。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              大切なのは「どうせ売れないだろう」と自己判断しないこと。
              着物専門の買取業者に査定を依頼すれば、プロの目で適正に評価してもらえます。
              査定は無料のところがほとんどなので、リスクなく試せます。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              複数業者に見積もりを取って比較検討し、
              最も納得のいく価格で売却しましょう。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            古い着物・シミありでも無料査定OK
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            着物専門の買取業者なら、古い着物やシミのある着物も適正に査定。<br />
            まずは無料査定で価値を確認してみましょう。
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
              href="/articles/no-certificate/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                証紙なしの着物は売れる？
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
