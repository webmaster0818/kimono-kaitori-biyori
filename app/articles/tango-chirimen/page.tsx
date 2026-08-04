import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】丹後ちりめんの買取相場｜後染め白生地の特徴・証紙と高く売るコツ",
  description:
    "丹後ちりめん（たんごちりめん）の買取相場を徹底解説。京都府北部・丹後地方の後染め用白生地、シボと強撚糸の特徴、丹後織物工業組合の検査・証紙の見方、買取で価値を左右するポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/tango-chirimen/",
  },
  openGraph: {
    title: "【2026年最新】丹後ちりめんの買取相場｜後染め白生地の特徴と高く売るコツ",
    description:
      "丹後ちりめんの買取相場と高く売る方法を解説。京都・丹後の後染め用白生地、染め・仕立てが価値の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/tango-chirimen/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "丹後ちりめんの着物はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "丹後ちりめんは染めの土台となる白生地であることが多いため、買取価格は施された染め（友禅・無地染めなど）や仕立て、状態に大きく左右されます。一般的な無地・小紋で数千円〜数万円、有名作家の友禅染めや訪問着など格の高い染めが施された美品では数万円以上になることもあります。生地そのものよりも、何にどう染められ仕立てられているかが査定の中心になります。",
  },
  {
    question: "丹後ちりめんとはどんな織物ですか？",
    answer:
      "丹後ちりめんは、京都府北部の丹後地方（京丹後市・与謝野町など）で織られる絹織物です。緯糸（よこいと）に1メートルあたり3,000回前後の強い撚りをかけた強撚糸を用い、織り上げたあとに精練すると撚りが戻ろうとする力で生地表面に細かな凹凸＝「シボ」が生まれます。多くは染める前の白生地として生産され、友禅染めや無地染めなど後染めの土台となる代表的なちりめんです。",
  },
  {
    question: "丹後ちりめんに証紙はありますか？",
    answer:
      "丹後地方では古くから丹後織物工業組合などによる白生地の検査・押印（証紙）の体制が整えられてきました。白生地や反物には産地・品質を示す証紙が付されることがあり、たとう紙や反物の端に残っている場合があります。ただし最終的に染め・仕立てを経た着物では、染め元や作家の落款・証紙が査定の主な手がかりになることも多いため、付属するすべての証紙・たとう紙を一緒に査定へ出すことが大切です。",
  },
  {
    question: "丹後ちりめんの着物を売るときに注意すべき点は？",
    answer:
      "丹後ちりめんは後染め用の白生地としての性格が強いため、「丹後ちりめんだから高い」と一概には言えません。実際の価値は、施された染めの種類・作家・柄行き、そして着物としての状態（シミ・ヤケ・カビ・サイズ）によって決まります。シボのある生地はシワになりにくい反面、湿気でカビが出やすい面もあるため、たとう紙に包み湿気を避けて保管し、状態が良いうちに査定へ出すのがおすすめです。",
  },
  {
    question: "丹後ちりめんを高く売るにはどうすればよいですか？",
    answer:
      "まず、染め元や作家の証紙・落款、丹後ちりめんの白生地証紙、たとう紙など付属品をすべてそろえて査定に出しましょう。そのうえで、友禅や染め物・産地ものに詳しい着物専門の買取業者を選ぶことが重要です。生地と染めの両面を正しく評価できる査定員でなければ、価値を見落とされ安く買い取られることがあります。複数社の無料査定を比較し、状態が良いうちに早めに売るのが有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "丹後ちりめんの買取相場｜後染め白生地の特徴と高く売るコツ",
  description:
    "丹後ちりめんの買取相場と高く売る方法を解説。京都・丹後の後染め用白生地、染め・仕立てが価値の鍵。",
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
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
    "@id": "https://kimonokaitori-biyori.com/articles/tango-chirimen/",
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
      name: "丹後ちりめん",
      item: "https://kimonokaitori-biyori.com/articles/tango-chirimen/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "丹後ちりめんの実売相場データ（公開オークション落札相場）", "description": "丹後ちりめんについて、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%B8%B9%E5%BE%8C%E3%81%A1%E3%82%8A%E3%82%81%E3%82%93%20%E5%8F%8D%E7%89%A9/0/", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-06-14", "url": "https://kimonokaitori-biyori.com/articles/tango-chirimen/#auction-data", "isAccessibleForFree": true};

export default function TangoChirimenPage() {
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
          { label: "丹後ちりめん" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              後染め用の白生地
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">丹後ちりめんの買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                後染め白生地の特徴・証紙と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              丹後ちりめん（たんごちりめん）は、京都府北部・丹後地方で織られる絹織物で、表面に「シボ」と呼ばれる細かな凹凸があるのが特徴です。多くは友禅などの染めの土台となる白生地として生産されるため、買取価値は施された染めや仕立てに大きく左右されます。その特徴や証紙の考え方、査定のポイントを買取の視点で解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月14日</p>
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
                    1. 丹後ちりめんとは？京都・丹後の後染め白生地
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】丹後ちりめんの買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#characteristics" className="text-[#6b4c8a] hover:underline">
                    3. シボと強撚糸｜丹後ちりめんの特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 証紙・検査と「後染め白生地」の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 丹後ちりめんを高く売るポイント
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

      {/* 丹後ちりめんとは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            丹後ちりめんとは？京都・丹後の後染め白生地
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              丹後ちりめん（たんごちりめん）は、<strong>京都府北部の丹後地方（京丹後市・与謝野町など）</strong>で織られる絹織物です。緯糸に強い撚りをかけた糸を用い、織り上げたあとに精練することで生地表面に細かな凹凸＝<strong>「シボ」</strong>が生まれるのが大きな特徴です。
            </p>
            <p>
              丹後ちりめんは、その多くが<strong>染める前の「白生地」</strong>として生産されてきました。友禅染めや無地染めなど、<strong>後染め（あとぞめ）の土台となる代表的なちりめん</strong>であり、丹後は和装用白生地の主要産地として知られています。歴史的には、<strong>1720年代（享保期）</strong>に京都・西陣のちりめん技術を丹後に持ち帰って広めたことが起こりとされています。
            </p>
            <p>
              この「白生地である」という性質は、買取を考えるうえでとても重要です。丹後ちりめんそのものは染め上げる前の生地であるため、最終的な着物の価値は、その上に<strong>どのような染め・柄・仕立てが施されたか</strong>によって大きく変わります。生地名だけで価格が決まるわけではない点をおさえておきましょう。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">丹後ちりめんの主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>京都府北部・丹後地方で織られる絹織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>強撚糸と精練で生まれる「シボ」が特徴</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>多くは友禅などの後染め用の白生地として生産</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1720年代（享保期）に西陣の技術から発展したとされる</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】丹後ちりめんの買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            丹後ちりめんは白生地であるため、買取価格は「どんな染め・仕立ての着物になっているか」が中心になります。以下は施された染めの格を軸にした一般的な傾向の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場の傾向
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    友禅染め・訪問着など
                  </td>
                  <td className="px-4 py-3 text-gray-700">格の高い後染め</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円以上</td>
                  <td className="px-4 py-3 text-gray-700">作家・柄で変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    無地染め（色無地）
                  </td>
                  <td className="px-4 py-3 text-gray-700">一色染めの礼装向け</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">紋・状態による</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    小紋・普段着
                  </td>
                  <td className="px-4 py-3 text-gray-700">おしゃれ着</td>
                  <td className="px-4 py-3 font-medium">数千円前後</td>
                  <td className="px-4 py-3 text-gray-700">柄・状態による</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    白生地・反物（未仕立て）
                  </td>
                  <td className="px-4 py-3 text-gray-700">染め前の生地</td>
                  <td className="px-4 py-3 font-medium">数千円〜</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    証紙・地色で左右
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品の場合の傾向の目安です。施された染めの種類・作家、柄行き、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                価値を決めるのは「生地」より「染め」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                丹後ちりめんは後染め用の白生地であるため、買取査定では「丹後ちりめんかどうか」よりも、その上に施された<strong>染めの種類・作家・柄行き</strong>が価格を大きく左右します。有名作家の友禅や格の高い訪問着・色留袖などに仕立てられていれば、相応の評価が期待できます。逆に量産の小紋などでは、生地の良し悪しが価格に反映されにくいこともあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                シボのある縮緬地はシワになりにくい一方、水分や湿気には弱く、シミやカビ、ヤケが出ると価値が下がりやすい点に注意が必要です。とくに保管中のカビや変色は査定に大きく影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section id="characteristics" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            シボと強撚糸｜丹後ちりめんの特徴
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            丹後ちりめんならではの風合いは、糸づかいと精練の工程から生まれます。代表的な特徴を整理します。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>強撚糸（きょうねんし）の緯糸</strong>
                  ：緯糸に1メートルあたり3,000回前後の強い撚りをかけた糸を用いるのが基本です。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>精練で生まれる「シボ」</strong>
                  ：織り上げたあとに精練すると糸が収縮し、撚りが戻ろうとする力で生地表面に細かな凹凸＝シボが生じます。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>染め映えの良さ</strong>
                  ：シボの凹凸が光を乱反射し、染めたときに深みのある色合いが出やすいとされます。後染めの土台として重宝される理由のひとつです。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>しなやかでシワになりにくい</strong>
                  ：シボがあることで生地に柔軟性が生まれ、シワが目立ちにくいといわれます。
                </span>
              </li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 mt-5">
            丹後ちりめんには、シボの大きさや織り方によってさまざまな種類があります。生地そのものの良し悪しを正確に見極めるには専門知識が必要なため、査定では染め物・産地ものに詳しい業者の目が重要になります。
          </p>
        </div>
      </section>

      {/* 証紙の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            証紙・検査と「後染め白生地」の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              丹後地方では古くから<strong>丹後織物工業組合</strong>などによる白生地の<strong>検査・押印（証紙）</strong>の体制が整えられ、産地・品質を示す証紙が付されることがあります。白生地や反物の状態であれば、こうした証紙が反物の端やたとう紙に残っている場合があります。
            </p>
            <p>
              ただし、丹後ちりめんは<strong>後染め用の白生地</strong>であるため、最終的に染め・仕立てを経た着物では、<strong>染め元や作家の落款・証紙</strong>が査定の主な手がかりになることも多くあります。生地の証紙と染めの証紙、その両方を確認できると、より正確な評価につながります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・落款がある場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>産地（丹後ちりめん）の白生地であることが確認しやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>染め元・作家が特定でき、適正な評価につながる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・落款がない場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地や染め元の証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>作家や格が特定できず、一般品扱いになりやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が下がる可能性がある</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              証紙の見方や種類については
              <Link
                href="/articles/certificate-guide/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                着物の証紙ガイド
              </Link>
              、丹後ちりめんのような染めの土台と織物の違いについては
              <Link
                href="/articles/dye-vs-weave/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                染めの着物と織りの着物の違い
              </Link>
              、京都の織物・着物の買取相場については
              <Link
                href="/articles/kyoto/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                京都府の着物買取相場
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
            丹後ちりめんを高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・落款・たとう紙を必ず一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                丹後ちりめんの白生地証紙だけでなく、染め元や作家の落款・証紙も価値の手がかりになります。たとう紙や箱に保管されていることが多いので、付属品はすべて探して着物と一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：染め物・産地ものに詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                丹後ちりめんは生地と染めの両面を評価する必要があります。友禅や染め物、産地ものに詳しい着物専門の買取業者でなければ、価値を見落とされ安く査定されることがあります。一般的なリサイクルショップでは格の高い友禅でも安く扱われることがあるため注意しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                丹後ちりめんの着物は、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                シボのある縮緬地は湿気に弱く、シミやカビ、ヤケがあると価値が下がります。たとう紙に包んで湿気を避けて保管し、売ると決めたら状態が良いうちに早めに査定に出すのがおすすめです。
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
            【実売データ】公開オークションでの丹後ちりめんのリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。丹後ちりめんは後染め用の白生地としての出品が多く、施された染めの有無や状態で価格差が大きい点にご注意ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">丹後ちりめん 反物</td>
                  <td className="px-4 py-3 font-medium">約7,012円</td>
                  <td className="px-4 py-3 font-medium">89,650円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">丹後ちりめん 着物</td>
                  <td className="px-4 py-3 font-medium">約6,611円</td>
                  <td className="px-4 py-3 font-medium">188,000円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">丹後ちりめん 正絹 白生地 反物</td>
                  <td className="px-4 py-3 font-medium">約7,497円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">－</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%B8%B9%E5%BE%8C%E3%81%A1%E3%82%8A%E3%82%81%E3%82%93%20%E5%8F%8D%E7%89%A9/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション 落札相場「丹後ちりめん 反物」
            </a>
            （2026年7月取得）
            <br />
            参考：
            <a
              href="https://aucfan.com/intro/q-~c3b0b8e5a4c1a4eaa4e1a4f320c8bfcaaa/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              オークファン（aucfan）
            </a>
            の集計では、直近90日の「丹後ちりめん 反物」は約289件が落札され、平均落札価格は約5,817円となっています。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。丹後ちりめんは後染め用の白生地であるため、染め前の白生地・反物と、友禅などの染めが施された着物とでは価格帯が大きく異なります。1円〜の極端な安値は状態不良・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。金額は取得時点のもので、相場は時期・状態・染め・仕立てで大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              上質な友禅・訪問着に仕立てられた丹後ちりめんは査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・染め・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            丹後ちりめんは後染め用の白生地としての性格が強く、価値は「何にどう染められ、仕立てられているか」と状態で大きく変わります。証紙の有無・染めの質・保存状態によって評価が上下します。前述の実売データの“幅”も、多くはこうした条件差から生まれています。
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
                  ["証紙あり（丹後織物工業組合の証紙）", "◎ 大きくプラス", "産地・品質を示す白生地の証紙。丹後ちりめんであることが明確になり、評価が安定しやすくなります。たとう紙や反物の端に残っていないか確認を。"],
                  ["証紙なし", "△ 下がりやすい", "産地の証明が難しく、一般的な縮緬地として扱われがち。染め元・作家の落款など他の手がかりが重要になります。"],
                  ["友禅・染め加工が上質な染め上がり品", "◎ 大きくプラス", "有名作家の友禅や格の高い染めが施されていれば別格の評価。白生地の価値より“何に染められたか”が価格を大きく左右します。"],
                  ["白生地（未加工）", "○ 染め次第", "染め前の白生地・反物は好みに染め・仕立てできるため一定の需要があります。ただし価値は今後の染め次第で、それ自体が高額になりにくい面もあります。"],
                  ["正絹（絹100%）", "◎ 評価されやすい", "丹後ちりめんは正絹が基本。化繊のちりめん（洋装・小物用）は大幅に評価が下がるため、素材の見極めが重要です。"],
                  ["未使用の反物・しつけ糸付き", "◎ 高評価", "染め・仕立て済みで未着用、しつけ糸付きは高くなりやすい状態。保管ジワのみなら特に有利です。"],
                  ["仕立て上がり（サイズ・着用あり）", "○〜△", "サイズや着用感で変動。裄・身丈が大きめだと現代向けで有利、寸法が小さい・着用感があると下がる場合も。"],
                  ["シミ・変色・カビ・難あり", "△ マイナス", "シボのある縮緬地は湿気に弱く、シミ・ヤケ・カビが出やすい素材。状態不良は減額対象で、難の程度・範囲によって幅があります。自己クリーニングは避け、現状のまま査定へ。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・染めの内容・需要・各業者の基準により異なります。とくに「証紙なし」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
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
              丹後ちりめんを売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              丹後ちりめんは証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い丹後ちりめんは業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・作家・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/ranking/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取おすすめランキング
              </h3>
              <p className="text-xs text-gray-600">
                買取大吉・ウリエルなどおすすめ5社を徹底比較。口コミ・評判・買取実績まで。
              </p>
            </Link>
            <Link
              href="/articles/dye-vs-weave/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                染めと織りの着物の違い
              </h3>
              <p className="text-xs text-gray-600">
                丹後ちりめんは染めの土台。染めの着物と織りの着物の違いと価値を解説。
              </p>
            </Link>
            <Link
              href="/articles/certificate-guide/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物の証紙ガイド
              </h3>
              <p className="text-xs text-gray-600">
                証紙の見方と査定への影響を解説。証紙の有無で価格が大きく変わります。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            丹後ちりめんの正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            丹後ちりめんの買取相場はあくまで目安です。施された染めの種類・作家・状態、証紙の有無によって実際の査定額は大きく変わります。生地と染めの両面を評価できる査定員に無料査定を依頼して、お手持ちの丹後ちりめんの正確な価値を確認しましょう。
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
