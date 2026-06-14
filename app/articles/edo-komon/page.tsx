import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title:
    "【2026年最新】江戸小紋の買取相場｜三役・五役の柄と格・高く売るコツ",
  description:
    "江戸小紋（えどこもん）の買取相場を徹底解説。東京の型染め（伊勢型紙を用いた極細密な染め）、三役（鮫・行儀・角通し）と五役、一つ紋で略礼装になる格、人間国宝の作品を高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/edo-komon/",
  },
  openGraph: {
    title: "【2026年最新】江戸小紋の買取相場｜三役・五役の柄と格・高く売るコツ",
    description:
      "江戸小紋の買取相場と高く売る方法を解説。東京の極細密な型染め、柄の格と作家が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/edo-komon/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "江戸小紋はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "江戸小紋の買取相場は、柄の格・染めの精緻さ・作家・状態によって幅があります。一般的な江戸小紋で数千円〜数万円、三役・五役などの格の高い柄や有名作家・人間国宝の作品、状態の良い品では数万円〜十万円以上になることもあります。極細密な型染めで保存状態が良く、証紙や落款がそろっているほど高い査定が期待できます。",
  },
  {
    question: "江戸小紋の「三役」「五役」とは何ですか？",
    answer:
      "江戸小紋のなかでも特に格が高いとされる柄が「三役」で、鮫（さめ）・行儀（ぎょうぎ）・角通し（かくとおし）の3つを指します。これに大小あられ（大小霰）と万筋（まんすじ）を加えた5つを「五役」と呼びます。これらの極細密で由緒ある柄は格が高く、一つ紋を付けて格のある帯を合わせると略礼装として用いられます。",
  },
  {
    question: "江戸小紋はどんな格の着物ですか？礼装に使えますか？",
    answer:
      "江戸小紋は遠目には無地に見える細かな型染めの着物で、本来は「小紋」としておしゃれ着の位置づけですが、三役・五役など格の高い柄に一つ紋を付けると略礼装（色無地に一つ紋を付けた場合に相当する格）として、入学式・卒業式やお茶席などのあらたまった場にも着用できます。柄や紋の有無で着用シーンが変わる点が特徴です。",
  },
  {
    question: "江戸小紋と東京染小紋、伊勢型紙はどう違いますか？",
    answer:
      "江戸小紋は江戸（東京）で発展した型染めの技法・着物を指します。東京で染められる小紋は国の伝統的工芸品「東京染小紋」として指定されています。一方、江戸小紋を染めるのに不可欠な型紙は三重県鈴鹿市周辺で作られる「伊勢型紙」で、こちらは別の伝統的工芸品です。染め（東京）と型紙（三重）は別の産地・技術である点に注意が必要です。",
  },
  {
    question: "江戸小紋を高く売るにはどうすればよいですか？",
    answer:
      "江戸小紋は、証紙・落款・作家名がわかる資料を一緒に査定に出すことが重要です。三役・五役など格の高い柄や、人間国宝・有名作家の作品は高評価につながります。着物に詳しい専門業者を選び、複数社の無料査定を比較しましょう。シミ・ヤケ・カビは価値を下げるため、たとう紙で湿気を避けて保管し、状態が良いうちに早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "江戸小紋の買取相場｜三役・五役の柄と格・高く売るコツ",
  description:
    "江戸小紋の買取相場と高く売る方法を解説。東京の極細密な型染め、柄の格と作家が査定の鍵。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/edo-komon/",
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
      name: "江戸小紋",
      item: "https://kimonokaitori-biyori.com/articles/edo-komon/",
    },
  ],
};

export default function EdoKomonPage() {
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
          { label: "買取相場", href: "/articles/" },
          { label: "江戸小紋" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              東京の型染め
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">江戸小紋の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                三役・五役の柄と格・高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              江戸小紋（えどこもん）は、江戸（東京）で発展した極細密な型染めの着物です。伊勢型紙を用いて染められ、遠目には無地に見えるほど細かな柄が特徴。三役・五役など格の高い柄に一つ紋を付ければ略礼装として用いられます。柄の格や作家が買取価格を左右するポイントを詳しく解説します。
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
                    1. 江戸小紋とは？東京の極細密な型染め
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】江戸小紋の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a
                    href="#characteristics"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 三役・五役の柄と格
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 証紙・落款と作家の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 江戸小紋を高く売るポイント
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

      {/* 江戸小紋とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            江戸小紋とは？東京の極細密な型染め
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              江戸小紋（えどこもん）は、<strong>江戸（現在の東京）で発展した型染め</strong>の着物です。<strong>伊勢型紙（いせかたがみ）</strong>と呼ばれる極めて細かい型紙を用いて一色で染め上げ、遠目には無地に見えるほど緻密な柄を表現するのが最大の特徴です。もとは武士の裃（かみしも）の柄として競うように細かさを追求したことから発展したと伝えられます。
            </p>
            <p>
              「江戸小紋」という名称は、<strong>1955年（昭和30年）に小宮康助が重要無形文化財「江戸小紋」の保持者（人間国宝）に認定された際、京小紋と区別するために用いられた</strong>とされます。東京で染められる小紋は、国の伝統的工芸品<strong>「東京染小紋」</strong>として指定されています。
            </p>
            <p>
              なお、江戸小紋を染めるのに不可欠な型紙は三重県鈴鹿市周辺で作られる<strong>伊勢型紙</strong>で、こちらは染め（東京）とは別の産地・伝統的工芸品です。染めと型紙、それぞれの技術が合わさって一枚の江戸小紋が生まれます。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">江戸小紋の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>伊勢型紙を用いた東京の極細密な一色染め</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>遠目には無地に見えるほど細かな柄</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>東京で染められる小紋は伝統的工芸品「東京染小紋」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>三役・五役の柄に一つ紋を付ければ略礼装になる</span>
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
            【種類別】江戸小紋の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            江戸小紋の買取価格は、柄の格・染めの精緻さ・作家・紋の有無・状態によって大きく異なります。以下は一般的な傾向の目安です。
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
                    一般的な江戸小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">おしゃれ着向け</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">柄・状態による</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    三役・五役の柄
                  </td>
                  <td className="px-4 py-3 text-gray-700">格の高い古典柄</td>
                  <td className="px-4 py-3 font-medium">数万円〜十万円前後</td>
                  <td className="px-4 py-3 text-gray-700">紋付・状態で変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    有名作家・人間国宝
                  </td>
                  <td className="px-4 py-3 text-gray-700">落款・証紙あり</td>
                  <td className="px-4 py-3 font-medium">十万円以上のことも</td>
                  <td className="px-4 py-3 text-gray-700">真贋・状態が前提</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    紋なしの江戸小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">普段着・おしゃれ着</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    サイズ・状態に左右
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・付属品ありの場合の傾向の目安です。柄の格、作家、紋の有無、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                柄の格と作家が価格を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                江戸小紋の買取では、三役・五役といった格の高い柄や、極細密で難度の高い染め、有名作家・人間国宝の作品ほど評価が高くなる傾向があります。同じ江戸小紋でも、一つ紋が入って略礼装として使える品や、落款・証紙がそろった作品は高めの査定になりやすい点が特徴です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                江戸小紋は淡い地色のものも多く、シミ・ヤケ・カビがあると価値が下がりやすい点に注意が必要です。畳ジワや裏地の汚れも査定に影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 三役・五役の柄と格 */}
      <section id="characteristics" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            三役・五役の柄と格
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            江戸小紋には数えきれないほどの柄がありますが、なかでも格が高いとされるのが「三役」と、それに2柄を加えた「五役」です。これらの極細密で由緒ある柄は、紋を付けることであらたまった場にも用いられます。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              江戸小紋三役
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>鮫（さめ）— 鮫肌のような細点を扇状に並べた柄</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>行儀（ぎょうぎ）— 細点を斜め45度に整然と並べた柄</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>角通し（かくとおし）— 細かな正方形を縦横に通した柄</span>
              </div>
            </div>
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base mt-5">
              五役（三役に加わる2柄）
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>大小あられ（大小霰）— 大小の点を散らした柄</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>万筋（まんすじ）— 無数の細い縞を引いた柄</span>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              江戸小紋の格と着用シーン
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              江戸小紋は本来「小紋」としておしゃれ着の位置づけですが、<strong>三役・五役など格の高い柄に一つ紋を付けると、色無地に一つ紋を付けた場合に相当する略礼装の格</strong>になります。格のある帯を合わせれば、入学式・卒業式やお茶席といったあらたまった場にも着用できます。柄や紋の有無で着用シーンが変わる点が、査定でも重視されます。
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mt-3">
              紋に関する基礎は
              <Link
                href="/articles/family-crest/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                家紋（家紋入り着物）の解説
              </Link>
              、小紋・付け下げ全般との違いは
              <Link
                href="/articles/komon-tsukesage/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                小紋・付け下げの買取相場
              </Link>
              もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙・落款・作家の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            証紙・落款と作家の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              江戸小紋は無地に近い見た目のため、<strong>柄の格や作り手を裏付ける証紙・落款（らっかん）が査定の手がかり</strong>になります。東京で染められた品には伝統的工芸品「東京染小紋」の証紙が付くことがあり、作家ものでは反物の端などに落款や作家名が記されている場合があります。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              査定で手がかりになる主な情報
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>証紙</strong>（東京染小紋などの産地・組合の表示）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>落款・作家名</strong>（作り手を示す印や署名）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>柄の格（三役・五役など）と紋の有無</span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              江戸小紋（染め）の重要無形文化財保持者（人間国宝）には小宮康助・小宮康孝らがおり、こうした作家の作品は高く評価されます。なお、伊勢型紙の彫りでは中村勇二郎が伊勢型紙（道具彫）の人間国宝に認定されています。<strong>染めの作家と型紙の彫師は別の分野</strong>である点を踏まえ、真贋や評価は専門業者の目で判断してもらうのが確実です。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・落款ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>産地や作家が裏付けられ、適正な評価につながる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>柄の格や難度が確認しやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・落款なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地や作家の証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>作家ものでも一般品扱いになりやすい</span>
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
              、東京の着物の買取相場については
              <Link
                href="/articles/tokyo/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                東京都の着物買取相場
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
            江戸小紋を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・落款・作家の資料を一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙や落款、作家名がわかる資料は、産地や作り手を裏付ける重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して着物と一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：着物・染めに詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                江戸小紋は柄の格や染めの難度、作家によって価値が変わるため、それらを正しく評価できる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは無地に近い見た目から安く査定されることがあります。着物専門の買取業者であれば、三役・五役や作家を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                江戸小紋は、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                江戸小紋は淡い地色のものも多く、シミ・ヤケ・カビがあると価値が下がります。畳ジワや汚れにも注意が必要です。たとう紙に包んで湿気を避けて保管し、売ると決めたら早めに査定に出すのがおすすめです。
              </p>
            </div>
          </div>
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
              href="/articles/komon-tsukesage/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                小紋・付け下げの買取相場
              </h3>
              <p className="text-xs text-gray-600">
                小紋・付け下げの種類別買取相場と格・着用シーンの違いを解説。
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
            江戸小紋の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            江戸小紋の買取相場はあくまで目安です。柄の格・作家・紋の有無・状態によって実際の査定額は大きく変わります。着物に詳しい査定員に無料査定を依頼して、お手持ちの江戸小紋の正確な価値を確認しましょう。
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
