import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】能登上布の買取相場｜石川県指定無形文化財・本麻手織と絣で価値が変わる",
  description:
    "能登上布（石川県中能登町など）の買取相場と高く売る方法を解説。細かな絣模様と本麻のさらりとした風合いが特徴の麻織物で、1960年に石川県指定無形文化財に指定。公開オークションの実売データ（件数・平均・中央値・最高）と、証紙・状態による評価の変わり方をまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/noto-jofu/",
  },
  openGraph: {
    title: "【2026年最新】能登上布の買取相場｜石川県指定無形文化財・本麻手織と絣で価値が変わる",
    description:
      "能登上布（石川県中能登町など）の買取相場と高く売る方法。実売データと証紙・状態による評価の変わり方を解説。",
    url: "https://kimonokaitori-biyori.com/articles/noto-jofu/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "能登上布はどのくらいで買い取ってもらえますか？",
    answer:
      "能登上布の買取価格は、本麻手織か否か・証紙の有無・絣の細かさ・状態によって大きく変わり、一律の相場を示すことはできません。参考として、公開オークションの実売データでは、2026年1月20日〜2026年7月15日の単品出品が77件、平均 約19,263円・中央値 8,111円・最高 165,000円でした（2026年7月16日取得）。平均と中央値の開きが大きいのは、本麻手織・証紙付きなど一部の品が上限を押し上げているためです。買取査定額は実売価格より低くなるのが一般的なので、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "能登上布はどんな織物ですか？",
    answer:
      "能登上布は、石川県鹿島郡中能登町を中心に受け継がれてきた麻織物です。糸を先に染めてから織る先染めの絣が大きな特徴で、板締・櫛押し・丸型捺染などの技法により細かな絣模様を作ります。しなやかでさらりとした感触があり、通気性が良く軽い夏の着物地として知られます。1960年（昭和35年）に石川県指定無形文化財に指定されています。",
  },
  {
    question: "能登上布は国の伝統的工芸品ですか？",
    answer:
      "いいえ。能登上布は国の伝統的工芸品ではなく、石川県指定無形文化財です（昭和35年5月27日指定・保持団体は能登上布保存会）。国指定ではないから価値が低いということではなく、県指定の無形文化財として技術が保護・継承されている織物です。査定の場でも「石川県指定無形文化財の能登上布」と正確に伝えられると、価値の説明がしやすくなります。",
  },
  {
    question: "能登上布は証紙がなくても売れますか？",
    answer:
      "証紙がなくても買取は可能ですが、能登上布かどうか、本麻手織かどうかの特定が難しくなるため、査定額は下がりやすくなります。証紙や購入時のしおり・たとう紙などの付属品が残っていれば、産地の裏付けになるので必ず一緒に査定に出しましょう。実売データでも、証紙付きや本麻手織と明記された品が価格の上限側に集まる傾向が見られます。",
  },
  {
    question: "能登上布を高く売るにはどうすればよいですか？",
    answer:
      "証紙・付属品をそろえること、上布や麻織物の取扱実績がある着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。能登上布は品物ごとの価格差が大きく、業者によって評価が分かれやすいため、相見積もりが特に有効です。夏物需要が高まる春〜初夏は売りやすい時期とされます。麻は日焼けや変色で価値が下がりやすいので、状態が良いうちに早めの査定がおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "能登上布の買取相場｜石川県指定無形文化財・実売データで解説",
  description:
    "能登上布（石川県中能登町など）の買取相場と高く売る方法。実売データと証紙・状態による評価の変わり方を解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/noto-jofu/",
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
      name: "能登上布",
      item: "https://kimonokaitori-biyori.com/articles/noto-jofu/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "能登上布の実売相場データ（公開オークション落札相場）", "description": "能登上布について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E8%83%BD%E7%99%BB%E4%B8%8A%E5%B8%83", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-07-16", "url": "https://kimonokaitori-biyori.com/articles/noto-jofu/#auction-data", "isAccessibleForFree": true};

export default function NotoJofuPage() {
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
          { label: "能登上布" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#b5402f] text-white mb-4 tracking-wide">
              石川・県指定無形文化財
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">能登上布の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                本麻手織・証紙・絣で価値が変わる
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              能登上布（のとじょうふ）は、石川県鹿島郡中能登町を中心に受け継がれてきた麻織物です。先染めの糸で織り出す細かな絣模様と、しなやかでさらりとした本麻の風合いが特徴で、1960年（昭和35年）に石川県指定無形文化財に指定されています。本ページでは、公開オークションの実売データと、証紙・状態による評価の変わり方を解説します。
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
                    1. 能登上布とは？細かな絣が特徴の麻織物
                  </a>
                </li>
                <li>
                  <a href="#jofu" className="text-[#6b4c8a] hover:underline">
                    2. 「上布」の中での能登上布の位置づけ
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 能登上布の買取評価の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 石川県指定無形文化財と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 能登上布を高く売るポイント
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

      {/* 能登上布とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            能登上布とは？細かな絣が特徴の麻織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              能登上布（のとじょうふ）は、<strong>石川県鹿島郡中能登町（能登部下）を中心に受け継がれてきた麻織物</strong>です。糸を先に染めてから織る<strong>先染めの絣</strong>が大きな特徴で、絣づけには板締・櫛押し・丸型捺染などの技法が用いられます。しなやかでさらりとした感触を持ち、図柄には古さを感じさせない斬新な趣があると評されています。
            </p>
            <p>
              中能登町では約2000年の長い歴史を持つ伝統産業とされ、明治40年には皇太子殿下への上納品にも選ばれました。現在は町の「能登上布会館」で技を受け継いだ職人により作り続けられています。本麻で織られた生地は通気性が良くとても軽く、手織り独特の細かな絣模様が魅力の夏の着物地です。<strong>1960年（昭和35年）5月27日に石川県指定無形文化財に指定</strong>されています（保持団体：能登上布保存会）。
            </p>
            <p>
              なお、江戸時代に近江（現在の滋賀県）から技術が伝わり発展し、昭和初期には麻織物として全国有数の生産高を誇ったとされています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">能登上布の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>産地は石川県鹿島郡中能登町など能登地方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>糸の先染めによる絣づけ（板締・櫛押し・丸型捺染など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>本麻ならではの通気性・軽さと、さらりとした肌触り</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>手織りによる細かな絣模様。糸が細いほど高級とされる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1960年（昭和35年）に石川県指定無形文化財に指定（保持団体：能登上布保存会）</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              出典：
              <a
                href="https://www.pref.ishikawa.lg.jp/kyoiku/bunkazai/mukei/k1.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                石川県「能登上布」（県指定無形文化財）
              </a>
              ・
              <a
                href="https://www.town.nakanoto.ishikawa.jp/soshiki/kikaku/3/2/1/9117.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                中能登町「『織姫の里』能登上布」
              </a>
              （いずれも2026年7月確認）
            </p>
          </div>
        </div>
      </section>

      {/* 上布の中での位置づけ */}
      <section id="jofu" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            「上布」の中での能登上布の位置づけ
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            上布（じょうふ）とは、苧麻などの細い麻糸で織られた薄手で上質な麻織物の総称で、夏物の高級着尺として珍重されてきました。産地ごとに技法や公的な指定が異なるため、どの上布かによって査定の見方も変わります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">主な上布・麻織物</th>
                  <th className="px-4 py-3 text-left font-semibold">産地</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">特徴・指定</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">能登上布（本ページ）</td>
                  <td className="px-4 py-3 text-gray-700">石川県中能登町など</td>
                  <td className="px-4 py-3 text-gray-700">先染めの細かな絣。石川県指定無形文化財（1960年）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    <Link href="/articles/echigo-jofu/" className="underline">越後上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">新潟県南魚沼市など</td>
                  <td className="px-4 py-3 text-gray-700">雪晒しで知られる最高級の麻織物。国の重要無形文化財（1955年）・ユネスコ無形文化遺産（2009年）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    <Link href="/articles/miyako-jofu/" className="underline">宮古上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">沖縄県宮古島</td>
                  <td className="px-4 py-3 text-gray-700">藍染の紺地に細かい絣。国の重要無形文化財（1978年）・伝統的工芸品（1975年）</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    <Link href="/articles/omi-jofu/" className="underline">近江上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">滋賀県湖東地方</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">櫛押捺染・型紙捺染の絣とシボ加工。国の伝統的工芸品（1977年）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ このほか沖縄・八重山地方の
            <Link href="/articles/yaeyama-jofu/" className="text-[#6b4c8a] underline">八重山上布</Link>
            、麻縮の
            <Link href="/articles/ojiya-chijimi/" className="text-[#6b4c8a] underline">小千谷縮</Link>
            も代表的な夏の麻織物です。能登上布は江戸時代に近江から技術が伝わったとされ、近江上布とは歴史的なつながりがあります。
          </p>
        </div>
      </section>

      {/* 買取評価の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            能登上布の買取評価の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            能登上布の買取価格は、本麻手織か否か・証紙の有無・絣の細かさ・状態によって大きく変わります。以下は一般的な評価傾向であり、実際の金額は需要や業者によって変動します。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                本麻手織・証紙付きが上限を押し上げる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                後述の実売データでも、価格の上限側に来るのは「石川県指定無形文化財」「本麻手織」「証紙付き」「亀甲絣」などの記載がある品です。逆に、機械織りや麻混の品、産地の裏付けがない品は控えめな評価にとどまりやすく、一点ごとの価格差が非常に大きい織物です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                絣の細かさ・糸の細さが見どころ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                能登上布は使用する麻糸が細いほど高級とされ、手織りの細かな絣模様が価値の中心です。十字絣や亀甲絣など絣柄の精緻さは査定でも注目されるポイントで、柄がきれいに揃った品ほど評価されやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                夏物としての季節需要
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                上布は夏の薄物のため、着用シーズン前の春〜初夏にかけて需要が高まりやすいとされます。売る時期を選べるなら、シーズン前の査定も選択肢です。ただし状態の劣化リスクを考えると、時期を待つより状態が良いうちに売るほうが優先です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定と証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            石川県指定無形文化財と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              能登上布は、<strong>昭和35年（1960年）5月27日に石川県指定無形文化財に指定</strong>されています。保持団体は<strong>能登上布保存会</strong>です。国の伝統的工芸品や重要無形文化財と混同されがちですが、能登上布は「県指定の無形文化財」であり、この区分を正確に理解しておくと査定の場でも品物の価値を説明しやすくなります。
            </p>
            <p>
              産地の証紙や購入時のしおりが付いた品は、能登上布であること・本麻手織であることの裏付けになり、査定でも評価されやすくなります。証紙の様式は品や時代によって異なるため、産地に関わる紙類はすべて一緒に査定に出すのが安全です。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>能登上布であること・本麻手織であることの裏付けになる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>県指定無形文化財の織物としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>実売でも上限側の価格帯に入りやすい</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>他産地の麻織物との区別がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>本麻か麻混かの判別も慎重になりがち</span>
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
              を、同じ石川県の織物では
              <Link href="/articles/ushikubi-tsumugi/" className="text-[#6b4c8a] underline">
                牛首紬の買取相場
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
            能登上布を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・しおり・たとう紙などは、能登上布であることを示す重要な手がかりです。実売データでも証紙や産地の裏付けがある品が価格の上限側に集まる傾向があるため、必ず探して一緒に査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：上布・麻織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                能登上布は全国区の知名度が高い織物ではないため、上布類の取扱経験がない査定員だと価値が正しく評価されないことがあります。麻織物・上布の実績がある着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                実売データの平均と中央値の開きが示すとおり、能登上布は一点ごとの価格差が大きい織物です。業者によって評価も分かれやすいため、複数社の無料査定で金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                麻織物は日焼け・黄変・折りジワで価値が下がりやすくなります。たとう紙に包んで湿気の少ない場所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
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
            【実売データ】公開オークションでの能登上布のリアルな落札相場
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">能登上布 全体（着物・帯・反物の合算）</td>
                  <td className="px-4 py-3 font-medium">77件</td>
                  <td className="px-4 py-3 font-medium">約19,263円</td>
                  <td className="px-4 py-3 font-medium">8,111円</td>
                  <td className="px-4 py-3 font-medium">165,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">うち着物</td>
                  <td className="px-4 py-3 font-medium">76件</td>
                  <td className="px-4 py-3 font-medium">約19,480円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">165,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E8%83%BD%E7%99%BB%E4%B8%8A%E5%B8%83"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「能登上布」の落札相場
            </a>
            （集計期間：2026年1月20日〜2026年7月15日／2026年7月16日取得）
            <br />
            ※ タイトルに「能登上布」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外しています。小物・ハギレ等は表から除外しています。
            <br />
            ※ 平均（約19,263円）と中央値（8,111円）の開きが大きいのは、「石川県指定無形文化財」「本麻手織」「証紙付き」「亀甲絣」などの記載がある品が上限を押し上げているためです。多くの品は中央値前後で取引されており、上表は“幅”の参考としてご覧ください。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品と、本麻手織・証紙付きの品では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・絣柄で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              価格差の大きい能登上布は、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・素材・絣柄でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ能登上布でも、証紙の有無、本麻手織か否か、絣柄や保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙・産地の裏付けあり", "◎ 大きくプラス", "能登上布であることの証明になり、評価が安定します。実売でも裏付けのある品が上限側に集まる傾向があります。"],
                  ["証紙なし", "△ 下がりやすい", "他産地の麻織物との判別が難しくなり、慎重な査定になりがち。しおり・たとう紙など他の手がかりも一緒に出しましょう。"],
                  ["本麻100%・手織り", "◎ 高評価", "本麻手織の品は能登上布の価値の中心です。麻混や機械織りとは評価が大きく分かれます。"],
                  ["麻混・機械織り", "△ 控えめ", "見た目が似ていても、本麻手織の品とは別物として評価は控えめになりやすい傾向があります。"],
                  ["亀甲絣など細かい絣柄", "◎〜○", "精緻な絣柄は能登上布の見どころで、柄がきれいに揃った品ほど評価されやすい傾向があります。"],
                  ["未仕立ての反物・未使用品", "○ プラス", "仕立ての自由が利く反物や未使用・しつけ付きの品は需要があり、評価されやすいことがあります。"],
                  ["日焼け・黄変・シミあり", "△ マイナス", "麻織物は変色や折りジワで価値が下がりやすく、状態不良は減額対象。自己クリーニングは避け、現状のまま査定へ。"],
                  ["サイズ（裄・身丈）", "○ 需要で変動", "仕立て済みの着物は現代の体型に合う大きめサイズのほうが需要があり、評価に影響することがあります。"],
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
              能登上布を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              能登上布は証紙・素材・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・本麻手織・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い能登上布は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・素材・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/echigo-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                越後上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                雪晒しで知られる新潟の最高級麻織物。ユネスコ無形文化遺産の上布の相場を解説。
              </p>
            </Link>
            <Link
              href="/articles/ojiya-chijimi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                小千谷縮の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                シボのある夏の麻縮。国の重要無形文化財の麻織物の相場を解説。
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
                当サイトの実売データの集め方・出典・更新方針を公開しています。
              </p>
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            上布仲間の
            <Link href="/articles/miyako-jofu/" className="text-[#6b4c8a] underline">宮古上布</Link>
            ・
            <Link href="/articles/yaeyama-jofu/" className="text-[#6b4c8a] underline">八重山上布</Link>
            ・
            <Link href="/articles/omi-jofu/" className="text-[#6b4c8a] underline">近江上布</Link>
            のページもあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            能登上布の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            能登上布は一点ごとの価格差が大きく、実売データの平均はあくまで目安です。証紙・素材・絣柄・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの能登上布の正確な価値を確認しましょう。
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
