import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】西陣織の買取相場｜帯の証紙の見方・12種の技法と高く売るコツ",
  description:
    "西陣織（にしじんおり）の買取相場を徹底解説。京都・西陣の先染め紋織物、西陣織工業組合のメガネ型証紙の見方、伝統的工芸品に指定された12種の技法、帯を高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/nishijin-ori/",
  },
  openGraph: {
    title: "【2026年最新】西陣織の買取相場｜帯の証紙の見方と高く売るコツ",
    description:
      "西陣織の買取相場と高く売る方法を解説。京都・西陣の先染め紋織物、証紙が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/nishijin-ori/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "西陣織の帯はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "西陣織の帯の買取相場は、織りの種類・状態・証紙の有無によって幅があります。一般的な袋帯で数千円〜数万円、有名機屋（織元）の凝った袋帯や状態の良い作品では数万円〜十万円前後になることもあります。西陣織工業組合の証紙があり、織りが精緻で保存状態が良いほど高い査定が期待できます。",
  },
  {
    question: "西陣織の証紙はどこを見ればわかりますか？",
    answer:
      "西陣織の帯には、西陣織工業組合が発行する「メガネ型」と呼ばれる証紙が貼付されています。この証紙には生産者番号や帯地の種類が表示され、生産者の責任を明確にするとともに、西陣製品であることを証明しています。証紙は帯の端（たれ先など）に縫い付けられていることが多く、購入時のたとう紙や箱に保管されている場合もあります。",
  },
  {
    question: "西陣織にはどんな種類の織り技法がありますか？",
    answer:
      "西陣織は多品種少量生産を基盤とした先染めの紋織物で、伝統的工芸品としては「綴（つづれ）」「経錦（たてにしき）」「緯錦（よこにしき）」「緞子（どんす）」「朱珍（しゅちん）」「紹巴（しょうは）」「風通（ふうつう）」「綟り織（もじりおり）」「本しぼ織」「ビロード」「絣織」「紬」の12種の技法が指定を受けています。技法や織りの密度によって価値も変わります。",
  },
  {
    question: "西陣織は伝統的工芸品に指定されていますか？",
    answer:
      "はい。西陣織は1976年（昭和51年）に国の伝統的工芸品に指定されています。京都・西陣の地で平安期以来はぐくまれてきた高級絹織物で、先染めの紋織物としての高い技術が評価されています。組合の検査に合格した製品には証紙が貼られ、品質の証明となります。",
  },
  {
    question: "西陣織を高く売るにはどうすればよいですか？",
    answer:
      "西陣織は証紙とともに査定に出すことが最も重要です。証紙があれば西陣製品であることと生産者が証明され、適正価格での買取につながります。また、織りの種類や機屋を評価できる着物・帯に詳しい専門業者を選び、複数社の無料査定を比較しましょう。シミや金糸の変色、ヤケは価値を下げるため、状態が良いうちに早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "西陣織の買取相場｜帯の証紙の見方と12種の技法",
  description:
    "西陣織の買取相場と高く売る方法を解説。京都・西陣の先染め紋織物、証紙が査定の鍵。",
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
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
    "@id": "https://kimonokaitori-biyori.com/articles/nishijin-ori/",
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
      name: "西陣織",
      item: "https://kimonokaitori-biyori.com/articles/nishijin-ori/",
    },
  ],
};

export default function NishijinOriPage() {
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
          { label: "西陣織" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">西陣織の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                帯の証紙の見方・12種の技法と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              西陣織（にしじんおり）は、京都・西陣の地ではぐくまれてきた先染めの高級紋織物です。多品種少量生産による精緻な織りが特徴で、特に帯は和装の格を支える名品として知られます。西陣織工業組合のメガネ型証紙の見方や、買取価格を左右するポイントを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月13日</p>
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
                    1. 西陣織とは？京都・西陣の先染め紋織物
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】西陣織の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#techniques" className="text-[#6b4c8a] hover:underline">
                    3. 伝統的工芸品に指定された12種の技法
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 西陣織工業組合の証紙の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 西陣織を高く売るポイント
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

      {/* 西陣織とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            西陣織とは？京都・西陣の先染め紋織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              西陣織（にしじんおり）は、<strong>京都・西陣の地</strong>ではぐくまれてきた高級絹織物です。「西陣」の名は、応仁の乱の際に西軍が本陣を置いた地に由来するとされ、織物の町として長い歴史を重ねてきました。<strong>1976年（昭和51年）に国の伝統的工芸品</strong>に指定されています。
            </p>
            <p>
              西陣織の最大の特徴は、糸を先に染めてから織り上げる<strong>「先染め（さきぞめ）」</strong>の<strong>紋織物</strong>である点です。多品種少量生産を基盤とし、用途やデザインに応じてさまざまな織り技法を使い分けることで、緻密で立体感のある文様を表現します。
            </p>
            <p>
              用途としては帯が代表的で、袋帯・名古屋帯・丸帯などが織られています。和装の格を左右する帯として高く評価され、買取市場でも需要があります。きもの地として織られた西陣織もあります。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">西陣織の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>京都・西陣で織られる先染めの高級紋織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>多品種少量生産による精緻で立体感のある文様</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1976年に国の伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>帯（袋帯・名古屋帯・丸帯）が代表的な製品</span>
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
            【種類別】西陣織の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            西陣織の買取価格は、帯の種類・織りの精緻さ・証紙の有無・状態によって大きく異なります。以下は一般的な傾向の目安です。
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
                    一般的な袋帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">礼装・準礼装向け</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">証紙ありが前提</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    凝った織りの袋帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">精緻な紋織・有名機屋</td>
                  <td className="px-4 py-3 font-medium">数万円〜十万円前後</td>
                  <td className="px-4 py-3 text-gray-700">織元・状態で変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    名古屋帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">普段着〜おしゃれ着</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">柄・状態による</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    西陣織のきもの地
                  </td>
                  <td className="px-4 py-3 text-gray-700">織りの着物</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    サイズ・状態に左右
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・証紙ありの場合の傾向の目安です。織りの種類、機屋、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙と織りの精緻さが価格を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織の買取では、西陣織工業組合の証紙があることが評価の前提になります。そのうえで、織りの密度や技法の難度、文様の出来栄え、織元（機屋）の評価などが査定額を左右します。同じ袋帯でも、凝った紋織や格調高い古典柄の作品は高めの査定になりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織は金糸・銀糸を使った帯も多く、金銀糸の変色やヤケ、シミがあると価値が下がりやすい点に注意が必要です。締めジワや裏地の汚れも査定に影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12種の技法 */}
      <section id="techniques" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品に指定された12種の技法
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            西陣織は多品種少量生産を基盤とし、用途やデザインに応じてさまざまな織り技法を使い分けます。伝統的工芸品としては、以下の12種の技法が指定を受けています。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>綴（つづれ）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>経錦（たてにしき）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>緯錦（よこにしき）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>緞子（どんす）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>朱珍（しゅちん）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>紹巴（しょうは）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>風通（ふうつう）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>綟り織（もじりおり）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>本しぼ織（ほんしぼおり）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>ビロード</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>絣織（かすりおり）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>紬（つむぎ）</span>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 mt-5">
            なかでも「綴」は爪先で緯糸を掻き寄せて文様を表す高度な技法として知られ、手間のかかる織り技法ほど評価が高くなる傾向があります。技法の見極めは専門知識を要するため、査定では西陣織に詳しい業者の目が重要になります。
          </p>
        </div>
      </section>

      {/* 証紙の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            西陣織工業組合の証紙の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              西陣織の帯には、<strong>西陣織工業組合が発行する「メガネ型」の証紙</strong>が貼付されています。2つの円が並んだ形からこう呼ばれ、この証紙は西陣製品であることを証明する大切な品質の証です。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              メガネ型証紙に記載される主な情報
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>生産者番号</strong>（織元を識別する番号）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>帯地の種類</strong>（織り技法など）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>西陣製品であることを示す組合の表示</span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              証紙に生産者番号と帯地の種類を表示することで、生産者の責任を明確にし、西陣製品であることを証明しています。証紙は帯の端（たれ先など）に縫い付けられていることが多く、購入時のたとう紙や箱に保管されている場合もあります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>西陣製品であることと生産者が証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>織り技法が確認でき、適正な評価につながる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>西陣織であることの証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>織元や技法が特定できず、一般品扱いになりやすい</span>
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
            西陣織を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙は必ず一緒に査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織工業組合のメガネ型証紙は、西陣製品であることと生産者を証明する最も重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して帯と一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：帯・西陣織に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織は織り技法や機屋によって価値が変わるため、それらを正しく評価できる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは精緻な袋帯でも安く査定されることがあります。着物・帯専門の買取業者であれば、技法や織元を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織の帯は、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織は金糸・銀糸を使った帯も多く、変色やヤケ、シミがあると価値が下がります。締めジワや汚れにも注意が必要です。たとう紙に包んで湿気を避けて保管し、売ると決めたら早めに査定に出すのがおすすめです。
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
              href="/articles/obi-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                帯の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                袋帯・名古屋帯など帯の種類別買取相場と高く売るコツを解説。
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
            西陣織の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            西陣織の買取相場はあくまで目安です。織りの技法・機屋・状態・証紙の有無によって実際の査定額は大きく変わります。着物・帯に詳しい査定員に無料査定を依頼して、お手持ちの西陣織の正確な価値を確認しましょう。
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
