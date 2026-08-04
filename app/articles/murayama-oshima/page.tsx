import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】村山大島紬の買取相場｜本場大島紬との違いと実売データで見る正直な価値",
  description:
    "村山大島紬（東京都武蔵村山市周辺）の買取相場を実売データで正直に解説。板締め染色による絣が特徴の国の伝統的工芸品ですが、本場大島紬とは製法も市場価格も異なります。公開オークションの落札データ（275件・平均 約2,018円）と、証紙・状態別の査定ポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/murayama-oshima/",
  },
  openGraph: {
    title: "【2026年最新】村山大島紬の買取相場｜本場大島紬との違いと実売データで見る正直な価値",
    description:
      "村山大島紬の買取相場と高く売る方法。板締め染色の伝統的工芸品。本場大島紬との違いと実売データを正直に解説。",
    url: "https://kimonokaitori-biyori.com/articles/murayama-oshima/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "村山大島紬はどのくらいで買い取ってもらえますか？",
    answer:
      "村山大島紬は、本場大島紬と比べると市場での流通価格が控えめな織物です。公開オークションの実売データ（2026年7月16日取得・約180日相当の集計）では、単品出品275件で平均 約2,018円・中央値 1,500円・最高 19,596円でした。これは個人間取引の実売価格であり、買取業者の査定額は一般にこれより低くなります。実際の金額は状態・証紙・仕立てによって変わるため、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "村山大島紬と本場大島紬の違いは何ですか？",
    answer:
      "産地も製法も異なる別の織物です。村山大島紬は東京都武蔵村山市周辺で織られ、文様を彫刻した絣板に糸をはさんで染める「板締め染色」で絣糸を作ります。一方、本場大島紬は鹿児島県（奄美大島など）の織物で、泥染めなどの技法で知られます。村山大島紬はもともと、大島紬に似た風合いをより手頃な価格で提供する織物として発展した歴史があり、市場価格も本場大島紬とは大きく異なります。「大島紬」という名前だけで高額査定を期待せず、村山大島紬としての価値を正しく把握することが大切です。",
  },
  {
    question: "村山大島紬は伝統的工芸品に指定されていますか？",
    answer:
      "はい。村山大島紬は1975年（昭和50年）2月17日に国（経済産業大臣）の伝統的工芸品に指定されています。産地は東京都の武蔵村山市・立川市・青梅市・昭島市・東大和市ほか、埼玉県飯能市などにまたがります。板締め染色による絣と、経糸・緯糸を手作業で柄合わせして織る精緻な絣模様が特徴です。",
  },
  {
    question: "証紙がない村山大島紬でも売れますか？",
    answer:
      "証紙がなくても買取自体は可能ですが、村山大島紬であることの裏付けが弱くなるため、査定は慎重になりがちです。逆に、証紙やたとう紙・購入時の付属品がそろっていると産地の裏付けになり、評価が安定します。また、証紙がないと本場大島紬や他産地の紬との区別が難しくなるため、見つかる範囲で付属品を探して一緒に査定に出しましょう。",
  },
  {
    question: "村山大島紬を高く売るにはどうすればよいですか？",
    answer:
      "証紙・付属品をそろえること、シミ・ヤケが進む前に早めに査定へ出すこと、単品ではなくほかの着物や帯とまとめて査定に出すこと、そして複数社で相見積もりを取ることが基本です。村山大島紬は単品では高額になりにくい織物のため、まとめ売りで全体の評価を上げる売り方や、出張買取でまとめて見てもらう方法が現実的です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "村山大島紬の買取相場｜本場大島紬との違いと実売データ",
  description:
    "村山大島紬の買取相場と高く売る方法。板締め染色の伝統的工芸品。本場大島紬との違いと実売データを正直に解説。",
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  author: {
    "@type": "Person",
    name: "着物の買取びより 編集部",
    url: "https://kimonokaitori-biyori.com/author/",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
    logo: {
      "@type": "ImageObject",
      url: "https://kimonokaitori-biyori.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimonokaitori-biyori.com/articles/murayama-oshima/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
      name: "買取相場",
      item: "https://kimonokaitori-biyori.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "村山大島紬",
      item: "https://kimonokaitori-biyori.com/articles/murayama-oshima/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "村山大島紬の実売相場データ（公開オークション落札相場）", "description": "村山大島紬について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E6%9D%91%E5%B1%B1%E5%A4%A7%E5%B3%B6%E7%B4%AC", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-07-16", "url": "https://kimonokaitori-biyori.com/articles/murayama-oshima/#auction-data", "isAccessibleForFree": true};

export default function MurayamaOshimaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetStructuredData) }}
      />

      <Breadcrumb
        items={[
          { label: "買取相場", href: "/articles/" },
          { label: "村山大島紬" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              東京・伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">村山大島紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                本場大島紬との違いと実売データで見る正直な価値
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              村山大島紬（むらやまおおしまつむぎ）は、東京都武蔵村山市周辺で織られてきた絹織物で、1975年に国の伝統的工芸品に指定されています。文様を彫刻した絣板で糸を染める「板締め染色」による精緻な絣が特徴です。名前に「大島紬」とありますが、本場大島紬とは産地も製法も市場価格も異なる別の織物です。本ページでは公開オークションの実売データをもとに、期待させすぎない正直な相場感と高く売るポイントを解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年7月16日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />
              この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-[#6b4c8a] hover:underline">
                    1. 村山大島紬とは？板締め染色が生む精緻な絣
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 村山大島紬の技法と本場大島紬との違い
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 村山大島紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 村山大島紬を高く売るポイント
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    6. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 村山大島紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            村山大島紬とは？板締め染色が生む精緻な絣
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              村山大島紬（むらやまおおしまつむぎ）は、<strong>東京都武蔵村山市を中心とする村山地域</strong>（武蔵村山市・立川市・青梅市・昭島市・東大和市ほか、埼玉県飯能市など）で織られてきた絹織物です。生糸を用い、<strong>板締め染色</strong>という独自の技法で染めた絣糸を、経糸・緯糸で手作業により柄合わせして織り上げます。精緻な幾何学模様と、軽く着心地の良い風合いが持ち味です。
            </p>
            <p>
              起源は江戸時代後期にさかのぼり、1920年頃に藍染めの絣「村山紺絣」と絹織物「砂川太織」が合流して、現在の村山大島紬の形になったとされています。戦後の高度経済成長期には、大島紬に似た趣きの織物をより手頃な価格で楽しめる普段着・街着として広く親しまれました。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">村山大島紬の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>東京都武蔵村山市周辺で織られる絹織物（着物地が中心）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>文様を彫刻した絣板に糸をはさんで染める「板締め染色」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>経糸・緯糸の絣を手作業で柄合わせした精緻な幾何学模様</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>軽くて着心地が良く、普段着・街着として普及</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1975年（昭和50年）2月17日に国の伝統的工芸品に指定</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              参考：
              <a
                href="https://kougeihin.jp/craft/0108/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                伝統的工芸品産業振興協会「村山大島紬」
              </a>
              ・
              <a
                href="https://www.dento-tokyo.metro.tokyo.lg.jp/items/01.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                東京都産業労働局「東京の伝統工芸品 村山大島紬」
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 技法と本場大島紬との違い */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            村山大島紬の技法と本場大島紬との違い
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            村山大島紬の価値を正しく理解するうえで欠かせないのが、<strong>本場大島紬とは別の織物である</strong>という点です。名前は似ていますが、産地・製法が異なり、市場での評価・価格帯も異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    項目
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">村山大島紬</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    本場大島紬
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">産地</td>
                  <td className="px-4 py-3 text-gray-700">
                    東京都武蔵村山市周辺（村山地域）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    鹿児島県（奄美大島など）
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">絣糸の染色</td>
                  <td className="px-4 py-3 text-gray-700">
                    板締め染色（文様を彫った絣板に糸をはさみ、締め付けて染料を注ぐ）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    泥染めなどの技法で知られる
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">位置づけ</td>
                  <td className="px-4 py-3 text-gray-700">
                    大島紬に似た趣きを手頃な価格で提供する織物として発展
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    高級紬の代名詞として知られる
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    市場価格
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    控えめな価格帯で取引されることが多い
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    村山大島紬とは異なる（高い）価格帯で取引されることが多い
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            「大島紬」という名前だけで本場大島紬と同等の査定を期待すると、実際の査定額とのギャップが生まれやすくなります。お手持ちの品がどちらなのかは、証紙や絣の風合いで見分けるのが確実です。
          </p>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              本場大島紬の相場や証紙の見分け方は
              <Link href="/articles/oshima-tsumugi/" className="text-[#6b4c8a] underline">
                本場大島紬の買取相場
              </Link>
              で詳しく解説しています。技法についてはこのほか、経糸・緯糸を柄合わせして織る絣織りや、竹製のへらで複数の色を染め分ける「すり込み捺染」も村山大島紬の特徴です。
            </p>
          </div>
        </div>
      </section>

      {/* 相場 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            村山大島紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            村山大島紬の買取価格は、証紙の有無・状態・仕立てによって変わります。ここでは金額ではなく、査定で評価が分かれる「傾向」を正直に整理します。具体的な実売価格は後述の
            <a href="#auction-data" className="text-[#6b4c8a] underline">実売データ</a>
            をご覧ください。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                高額になりにくい織物であることを前提に
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                村山大島紬は、もともと大島紬の趣きを手頃な価格で楽しむための普段着・街着として普及した織物です。生産量が多かったこともあり、中古市場では流通量に対して需要が限られ、買取では高額になりにくいのが実情です。この前提を踏まえたうえで、証紙・状態の良いものを適切な業者に売ることが大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙・未使用・状態の良さで評価が変わる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                同じ村山大島紬でも、証紙付き・未使用（しつけ糸付き）・シミやヤケのない良品は評価されやすくなります。逆に、証紙がなく状態に難のあるものは、査定が控えめになりがちです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                まとめ売りで全体の評価を上げる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                村山大島紬単品では金額がつきにくい場合でも、ほかの着物・帯・和装小物とまとめて査定に出すことで、全体として評価されやすくなります。実際の中古市場でも、村山大島紬はまとめ売り（複数点ロット）での出品が多く見られます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 伝統的工芸品の指定と証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品の指定と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              村山大島紬にまつわる公的な指定を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                国の伝統的工芸品（1975年指定）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                村山大島紬は、<strong>1975年（昭和50年）2月17日に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。指定産地は東京都の武蔵村山市・立川市・青梅市・昭島市・東大和市ほか、埼玉県飯能市などです。図案をもとに水目桜の絣板に溝を彫り、板の間に糸をはさんで締め付け、染料を注いで染める板締め染色が、技法の中核とされています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙・付属品は査定の裏付けに
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                伝統的工芸品としての基準を満たした品には、伝統マークや産地の証紙が貼られていることがあります。証紙がそろっていると、村山大島紬であることの裏付けになり、本場大島紬との混同も防げるため、査定がスムーズになります。たとう紙・購入時のしおり・箱なども一緒に査定へ出しましょう。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>村山大島紬であることが証明しやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>本場大島紬との混同による査定トラブルを防げる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地の特定が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>ほかの紬との区別がつきにくくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が下がる傾向がある</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              証紙の見方については
              <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">
                着物の証紙ガイド
              </Link>
              、紬をはじめとする織りの着物の種類については
              <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                紬の種類と買取相場
              </Link>
              もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            村山大島紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・たとう紙・購入時のしおりなどは、村山大島紬であることを示す重要な手がかりです。本場大島紬との混同を防ぎ、正しい前提で査定してもらうためにも、付属品は必ず探して一緒に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：単品にこだわらず、まとめて査定してもらう
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                村山大島紬は単品では高額になりにくい織物です。手放す予定のほかの着物・帯・和装小物と一緒にまとめて査定に出すと、全体としての評価が上がりやすく、売却の手間も一度で済みます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：着物専門の買取業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                一般的なリサイクルショップでは、村山大島紬と本場大島紬の区別がつかず、一律に安く扱われることがあります。産地織物の知識がある着物専門の査定員に見てもらうことで、証紙や状態を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                絹の織物は、日焼けや湿気、汗染み、虫食いによって価値が下がりやすくなります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの村山大島紬のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold">中央値</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">全体（着物・帯・反物合算）</td>
                  <td className="px-4 py-3 font-medium">275件</td>
                  <td className="px-4 py-3 font-medium">約2,018円</td>
                  <td className="px-4 py-3 font-medium">1,500円</td>
                  <td className="px-4 py-3 font-medium">19,596円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物</td>
                  <td className="px-4 py-3 font-medium">272件</td>
                  <td className="px-4 py-3 font-medium">約1,976円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium">19,596円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯</td>
                  <td className="px-4 py-3 font-medium">3件</td>
                  <td className="px-4 py-3 font-medium">約5,800円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">9,600円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E6%9D%91%E5%B1%B1%E5%A4%A7%E5%B3%B6%E7%B4%AC"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「村山大島紬」の落札相場
            </a>
            （集計期間：2026年1月17日〜2026年7月15日［約180日相当］・2026年7月16日取得）
            <br />
            ※ タイトルに「村山大島紬」を含む単品出品のみを集計し、まとめ売り・複数点ロット（95件）は除外しています。小物・ハギレ等は表から除外しています。
            <br />
            ※ 全体の平均が着物単体より高いのは、件数は少ないものの帯の落札価格が相対的に高いためです。中央値 1,500円が示すとおり、実売の多くは控えめな価格帯に集中しており、状態の良い良品が上限を押し上げる構図です。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。村山大島紬は本場大島紬とは別の織物で、実売価格の水準も大きく異なります。「大島紬」の名前から本場大島紬の相場を想像すると実態とかけ離れるため、上表はあくまで村山大島紬としての価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙の有無で変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・状態の良い村山大島紬は業者によって査定額に差が出ることがあります。複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・状態・仕立てでどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ村山大島紬でも、証紙の有無や保存状態、仕立てによって査定額は変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">状態・条件</th>
                  <th className="px-4 py-3 text-left font-semibold">査定への影響</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">解説</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["証紙・伝統マークあり", "◎ プラス", "村山大島紬であることの裏付けになり、伝統的工芸品としての価値が認められやすくなります。査定もスムーズです。"],
                  ["証紙なし", "△ 下がりやすい", "産地の特定が難しくなり、他産地の紬や量産品との区別がつきにくくなります。たとう紙・しおりなど他の手がかりも一緒に出しましょう。"],
                  ["未使用・しつけ糸付き", "◎ プラス", "未使用の良品は中古品より評価されやすい条件です。保管ジワ程度なら大きな減額になりにくい傾向があります。"],
                  ["シミ・ヤケ・虫食いなど難あり", "△ マイナス", "状態不良は減額対象です。難の程度・範囲で幅があります。自己流のクリーニングはかえって傷めることがあるため、現状のまま査定へ。"],
                  ["仕立て済み着物のサイズ", "○ 需要で変動", "現代の体格に合う大きめサイズは再利用しやすく、評価されやすい傾向があります。小さいサイズは用途が限られがちです。"],
                  ["帯・反物", "○ 需要で変動", "実売データでは件数こそ少ないものの、帯が相対的に高めに落札される例が見られました。未仕立ての反物も状態次第で評価されます。"],
                  ["本場大島紬との混同", "—", "「大島紬」とだけ書かれた品は、村山か本場かの確認が査定の出発点になります。板締め染色による絣か、証紙はどちらの産地かを確認しましょう。"],
                  ["まとめ売り（他の着物・帯と一緒）", "○ 現実的な選択肢", "単品で金額がつきにくい場合も、まとめて出すことで全体として評価されやすくなります。実際の中古市場でもまとめ売りが多い品目です。"],
                ].map(([cond, impact, note], i) => (
                  <tr key={cond} className={`border-b border-[#e8ddd0] ${i % 2 ? "bg-[#faf8f5]" : "bg-white"} hover:bg-white transition-colors`}>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{cond}</td>
                    <td className="px-4 py-3 font-medium text-[#6b4c8a] whitespace-nowrap">{impact}</td>
                    <td className="px-4 py-3 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「証紙なし」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group"
              >
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <span className="text-[#c9a76c] font-bold text-lg">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* この着物を売るなら（条件別CTA） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              村山大島紬を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              村山大島紬は証紙・状態によって評価が変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・未使用・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで比較する</h3>
                <p className="text-xs text-gray-600">状態の良い村山大島紬は業者で査定額の差が出ることがあります。おすすめ買取業者ランキングで複数社を比較しましょう。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">単品で金額がつきにくい村山大島紬は、他の着物とまとめて自宅で査定してもらう出張買取が現実的です。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/articles/oshima-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                本場大島紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                村山大島紬とは別物の本場大島紬。証紙・実売データ・状態別の査定ポイントを解説。
              </p>
            </Link>
            <Link
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と買取相場
              </h3>
              <p className="text-xs text-gray-600">
                大島紬・結城紬をはじめとする紬の種類ごとの特徴と買取傾向を整理。
              </p>
            </Link>
            <Link
              href="/articles/souba-method/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                相場データの調査方法
              </h3>
              <p className="text-xs text-gray-600">
                当サイトの実売データ（落札相場）の集め方・出典・更新方針を公開しています。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            村山大島紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            村山大島紬の実売データはあくまで目安です。証紙・状態・仕立てによって実際の査定額は変わります。着物専門の査定員に無料査定を依頼して、お手持ちの村山大島紬の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>

      <SoubaNote />
    </>
  );
}
