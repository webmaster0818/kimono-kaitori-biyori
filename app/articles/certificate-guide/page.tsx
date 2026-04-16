import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の証紙とは？見方と査定への影響を徹底解説",
  description:
    "着物の証紙とは何か、証紙の種類（産地証紙・伝統工芸品マーク）、証紙の見方・読み方、主な産地別証紙一覧、証紙が査定額に与える影響を徹底解説します。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/certificate-guide/",
  },
  openGraph: {
    title: "着物の証紙とは？見方と査定への影響を徹底解説",
    description:
      "着物の証紙の種類、見方、主な産地別証紙一覧、査定への影響を徹底解説します。",
    url: "https://kimonokaitori-biyori.com/articles/certificate-guide/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の証紙とは？見方と査定への影響を徹底解説",
  description:
    "着物の証紙とは何か、証紙の種類、見方・読み方、主な産地別証紙一覧、証紙が査定額に与える影響を徹底解説します。",
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
      "https://kimonokaitori-biyori.com/articles/certificate-guide/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "証紙と落款の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "証紙は産地の組合や検査機関が発行する公的な品質証明書で、産地・素材・製法を証明します。落款は作家個人のサイン（印）で、その着物が特定の作家によって作られたことを示します。証紙は産地証明、落款は作家証明と考えるとわかりやすいです。",
      },
    },
    {
      "@type": "Question",
      name: "証紙がない場合でも着物は売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、証紙がなくても着物は売れます。ただし、証紙ありと比べて査定額が30〜50%程度下がる傾向にあります。着物専門の査定員であれば、生地の質感や織りの特徴から産地を推定できるため、証紙なしでも適正な評価を受けられる可能性があります。",
      },
    },
    {
      "@type": "Question",
      name: "伝統工芸品マークとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "伝統工芸品マーク（伝統マーク）は、経済産業大臣が指定する「伝統的工芸品」であることを証明するマークです。日の丸をモチーフにしたデザインで、指定された産地で伝統的な技法を用いて作られた製品に付けられます。このマークがある着物は品質が保証されており、査定額にもプラスに影響します。",
      },
    },
    {
      "@type": "Question",
      name: "証紙の偽物はありますか？見分け方は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "残念ながら、証紙の偽物が出回ることもあります。偽物は印刷の質が粗い、紙質が異なる、登録番号がないなどの特徴があります。正規の証紙は各産地の組合が管理番号を付けて発行しているため、番号の照合で真贋を確認できます。不安な場合は着物専門の買取業者に見てもらいましょう。",
      },
    },
    {
      "@type": "Question",
      name: "証紙はどこに保管しておくのがベストですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "証紙は着物と一緒に保管するのがベストです。たとう紙の中に挟んでおくか、端布と一緒にまとめておくと紛失を防げます。着物と別の場所に保管すると、どの着物の証紙かわからなくなったり、紛失するリスクが高まります。",
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
      name: "証紙ガイド",
      item: "https://kimonokaitori-biyori.com/articles/certificate-guide/",
    },
  ],
};

export default function CertificateGuidePage() {
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
          { label: "証紙ガイド" },
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
            着物の証紙とは？
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">見方と査定への影響</span>
            を徹底解説
          </h1>
          <p className="text-gray-600 leading-relaxed">
            着物の「証紙（しょうし）」は、着物の品質を証明する重要な書類です。
            証紙の有無で買取価格が2倍以上変わることもあるため、
            着物を売る際には非常に重要な存在です。
            本記事では、証紙の種類、見方・読み方、主な産地別の証紙一覧、
            そして証紙が査定額に与える影響まで徹底解説します。
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
              <a href="#types" className="hover:underline">
                2. 証紙の種類
              </a>
            </li>
            <li>
              <a href="#how-to-read" className="hover:underline">
                3. 証紙の見方・読み方
              </a>
            </li>
            <li>
              <a href="#by-region" className="hover:underline">
                4. 主な産地別証紙一覧
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:underline">
                5. 証紙が査定額に与える影響
              </a>
            </li>
            <li>
              <a href="#storage" className="hover:underline">
                6. 証紙の保管方法と注意点
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
            証紙とは、着物の産地・素材・製法を公的に証明する紙です。
            各産地の織物組合や検査機関が、品質検査に合格した製品に対して発行します。
            いわば着物の「身分証明書」であり、その着物が本物であることを保証するものです。
          </p>

          <div className="bg-[#6b4c8a] text-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">証紙がある着物は信頼の証</h3>
            <p className="text-sm leading-relaxed text-purple-100 mb-3">
              証紙は、着物の品質を第三者機関が保証するものです。
              たとえば「本場大島紬」の証紙がある着物は、
              奄美大島で伝統的な技法を用いて作られた正真正銘の大島紬であることが証明されます。
            </p>
            <p className="text-sm leading-relaxed text-purple-100">
              証紙がない場合、たとえ本物の大島紬であっても
              「大島紬風の着物」として評価される可能性があり、査定額が下がります。
            </p>
          </div>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              証紙で証明される情報
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                <div>
                  <span className="font-medium text-gray-900 text-sm">産地</span>
                  <p className="text-xs text-gray-600">どこで作られたかを証明</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                <div>
                  <span className="font-medium text-gray-900 text-sm">素材</span>
                  <p className="text-xs text-gray-600">絹100%であることの証明</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                <div>
                  <span className="font-medium text-gray-900 text-sm">製法</span>
                  <p className="text-xs text-gray-600">手織り・手染めなどの製法を証明</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">&#9632;</span>
                <div>
                  <span className="font-medium text-gray-900 text-sm">品質検査合格</span>
                  <p className="text-xs text-gray-600">組合の品質基準をクリア</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section id="types" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙の種類
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物に付けられる証紙は、大きく分けて3つの種類があります。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-2 border-[#c9a76c] rounded-lg p-5">
              <h3 className="font-bold text-[#c9a76c] text-sm mb-3">
                1. 産地証紙（最重要）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                各産地の織物組合が発行する証紙です。
                着物がその産地で伝統的な技法を用いて作られたことを証明します。
                産地証紙は着物の価値を大きく左右するため、最も重要な証紙です。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                例：本場大島紬の旗印、本場結城紬の検査合格証、加賀友禅協同組合の証紙など
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                2. 伝統工芸品マーク（伝統マーク）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                経済産業大臣が指定する「伝統的工芸品」であることを証明するマークです。
                日の丸をモチーフにした「伝」の文字のデザインが特徴で、
                指定された産地で100年以上続く伝統的な技法を用いて
                作られた製品に付けられます。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                伝統工芸品に指定されている着物は全国に約40品目あり、
                大島紬、結城紬、加賀友禅、西陣織、博多織などが含まれます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                3. 品質表示ラベル
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                素材の組成（絹100%、麻100%など）を示すラベルです。
                家庭用品品質表示法に基づいて付けられるもので、
                着物の素材を確認する際の参考になります。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                産地証紙ほどの証明力はありませんが、
                正絹であることを示すラベルがあれば査定にプラスとなります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section id="how-to-read" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙の見方・読み方
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙にはさまざまな情報が記載されています。
            以下のポイントを確認することで、着物の価値を推測できます。
          </p>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">
              証紙で確認すべき5つのポイント
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">産地名・組合名</p>
                  <p className="text-xs text-gray-600 mt-1">
                    どの産地の組合が発行しているかを確認。「本場」と付いているものは
                    正規の産地で作られた証拠です。
                    例：「本場大島紬」「本場結城紬」「京友禅」
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">素材の表示</p>
                  <p className="text-xs text-gray-600 mt-1">
                    「絹100%」「正絹」の表記があるか確認。
                    正絹の着物は買取価格が高い傾向にあります。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">製法の表示</p>
                  <p className="text-xs text-gray-600 mt-1">
                    「手織り」「手紡ぎ」「手染め」などの表記があるか確認。
                    手作業による製品は機械織りよりも価値が高いです。
                    例：結城紬の「手紡ぎ」「手括り」「地機織り」
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">検査番号・登録番号</p>
                  <p className="text-xs text-gray-600 mt-1">
                    正規の証紙には管理番号が付けられています。
                    番号がない証紙は偽物の可能性があります。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">伝統工芸品マーク</p>
                  <p className="text-xs text-gray-600 mt-1">
                    「伝」の文字が入った日の丸デザインのマークがあるか確認。
                    経済産業大臣指定の伝統的工芸品であることの証明です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section id="by-region" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            主な産地別証紙一覧
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            主な産地の証紙の特徴を一覧でまとめました。
            お手持ちの着物に該当する証紙がないか確認してみてください。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">産地</th>
                  <th className="px-4 py-3 text-left font-medium">証紙の名称・特徴</th>
                  <th className="px-4 py-3 text-left font-medium">発行元</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    本場大島紬（鹿児島）
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    旗印マーク、地球印。「本場大島紬」の文字と検査合格証
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    本場大島紬織物協同組合
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    本場大島紬（奄美）
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    地球印マーク。「本場奄美大島紬」の文字
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    本場奄美大島紬協同組合
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    本場結城紬
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    紬マーク、検査合格証。「手紡ぎ」「手括り」「地機織り」の表記
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    本場結城紬卸商協同組合
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    加賀友禅
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    手描き友禅証紙（色つき）。作家名と作品番号の記載
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    加賀染振興協会
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    京友禅
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    手描友禅証紙。「京友禅」の文字と組合印
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    京友禅協同組合連合会
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    西陣織
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    金色のラベル。西陣織のロゴマークと証紙番号
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    西陣織工業組合
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    博多織
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    金印（金ラベル）が最高級。銀印、緑印の3段階
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    博多織工業組合
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    塩沢紬
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    「本塩沢」の証紙。検査合格印
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    塩沢織物工業協同組合
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">補足：</span>
              上記以外にも、牛首紬、黄八丈、上田紬、小千谷縮、越後上布など
              多くの産地で独自の証紙が発行されています。
              お手持ちの着物に紙片が付いていたら、捨てずに必ず保管しておきましょう。
            </p>
          </div>
        </section>

        {/* セクション5 */}
        <section id="impact" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙が査定額に与える影響
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙の有無は、着物の買取価格に大きな影響を与えます。
            具体的にどの程度の差が出るのか、データをもとに解説します。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">着物</th>
                  <th className="px-4 py-3 text-left font-medium">証紙あり</th>
                  <th className="px-4 py-3 text-left font-medium">証紙なし</th>
                  <th className="px-4 py-3 text-left font-medium">差の倍率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">大島紬（泥染め）</td>
                  <td className="px-4 py-3 text-gray-600">50,000〜150,000円</td>
                  <td className="px-4 py-3 text-gray-600">15,000〜80,000円</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">約2倍</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">結城紬（地機）</td>
                  <td className="px-4 py-3 text-gray-600">100,000〜300,000円</td>
                  <td className="px-4 py-3 text-gray-600">30,000〜100,000円</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">約2〜3倍</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">加賀友禅</td>
                  <td className="px-4 py-3 text-gray-600">30,000〜200,000円</td>
                  <td className="px-4 py-3 text-gray-600">15,000〜80,000円</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">約2倍</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">西陣織（帯）</td>
                  <td className="px-4 py-3 text-gray-600">10,000〜80,000円</td>
                  <td className="px-4 py-3 text-gray-600">5,000〜30,000円</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">約1.5〜2倍</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">重要：</span>
              上記の金額はあくまで目安であり、着物の状態、サイズ、
              市場の需給状況によって変動します。
              証紙があっても状態が悪ければ査定額は下がりますし、
              証紙がなくても状態が非常に良ければ高値がつくこともあります。
            </p>
          </div>

          <div className="border border-[#e8ddd0] rounded-lg p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              証紙が高額査定につながる3つの理由
            </h3>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">1.</span>
                <span>
                  再販時に「証紙付き」とアピールでき、販売価格を高く設定できるため、
                  業者も高く買い取ることができる
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">2.</span>
                <span>
                  産地・素材の真贋が保証されているため、
                  業者のリスクが低く、その分査定額に反映される
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] font-bold">3.</span>
                <span>
                  コレクターや着物愛好家は証紙付きの着物を求めるため、
                  需要が高く市場価値が上がる
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* セクション6 */}
        <section id="storage" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            証紙の保管方法と注意点
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            証紙は着物の価値を証明する重要な書類です。
            紛失しないよう、適切に保管しましょう。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                保管のベストプラクティス
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  着物と一緒にたとう紙の中に挟んで保管する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  端布がある場合は、端布と一緒にまとめて保管する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  証紙の写真をスマホで撮影しておく（紛失時のバックアップ）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  湿気を避け、直射日光が当たらない場所に保管する
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-800 text-sm mb-2">
                やってはいけないこと
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&#10007;</span>
                  証紙を着物から切り離して別の場所に保管する（紛失リスク大）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&#10007;</span>
                  証紙を「ただの紙」と思って捨ててしまう
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&#10007;</span>
                  証紙をセロテープで着物に貼り付ける（着物を傷めるリスク）
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ヒント：</span>
              証紙が見当たらない場合でも諦めないでください。
              たとう紙の中、タンスの引き出しの隅、購入時の箱や袋の中、
              端布と一緒に保管されている可能性があります。
              着物の裏側に直接縫い付けられていることもあります。
            </p>
          </div>
        </section>

        {/* 主な産地別証紙の特徴一覧 */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-[#c9a76c]">
            主な産地別証紙の特徴一覧
          </h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              主要な産地の証紙には、それぞれ特徴的なデザインや色があります。お手持ちの着物に付いている証紙と照らし合わせてみましょう。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#6b4c8a] text-white">
                    <th className="px-4 py-3 text-left font-medium">産地</th>
                    <th className="px-4 py-3 text-left font-medium">証紙名/発行元</th>
                    <th className="px-4 py-3 text-left font-medium">デザインの特徴</th>
                    <th className="px-4 py-3 text-left font-medium">色</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">本場大島紬（奄美）</td>
                    <td className="px-4 py-3 text-gray-600">本場奄美大島紬協同組合</td>
                    <td className="px-4 py-3 text-gray-600">地球印マーク</td>
                    <td className="px-4 py-3 text-gray-600">茶色系</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">本場大島紬（鹿児島）</td>
                    <td className="px-4 py-3 text-gray-600">本場大島紬織物協同組合</td>
                    <td className="px-4 py-3 text-gray-600">旗印マーク</td>
                    <td className="px-4 py-3 text-gray-600">青系</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">結城紬</td>
                    <td className="px-4 py-3 text-gray-600">本場結城紬卸商協同組合</td>
                    <td className="px-4 py-3 text-gray-600">結の文字</td>
                    <td className="px-4 py-3 text-gray-600">紫系</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">西陣織</td>
                    <td className="px-4 py-3 text-gray-600">西陣織工業組合</td>
                    <td className="px-4 py-3 text-gray-600">西陣の文字</td>
                    <td className="px-4 py-3 text-gray-600">金色系</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">博多織</td>
                    <td className="px-4 py-3 text-gray-600">博多織工業組合</td>
                    <td className="px-4 py-3 text-gray-600">四角い証紙</td>
                    <td className="px-4 py-3 text-gray-600">金（絹50%超）/青（絹50%未満）</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">加賀友禅</td>
                    <td className="px-4 py-3 text-gray-600">加賀染振興協会</td>
                    <td className="px-4 py-3 text-gray-600">手描き友禅の証</td>
                    <td className="px-4 py-3 text-gray-600">-</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">京友禅</td>
                    <td className="px-4 py-3 text-gray-600">京友禅協同組合連合会</td>
                    <td className="px-4 py-3 text-gray-600">伝統工芸品マーク</td>
                    <td className="px-4 py-3 text-gray-600">-</td>
                  </tr>
                </tbody>
              </table>
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
                  Q. 証紙と落款の違いは何ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                証紙は産地の組合や検査機関が発行する公的な品質証明書で、
                産地・素材・製法を証明します。
                落款は作家個人のサイン（印）で、
                その着物が特定の作家によって作られたことを示します。
                証紙は「産地証明」、落款は「作家証明」と考えるとわかりやすいです。
                どちらも着物の価値を証明する重要な要素です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 証紙がない場合でも着物は売れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、証紙がなくても着物は売れます。ただし、証紙ありと比べて
                査定額が30〜50%程度下がる傾向にあります。
                着物専門の査定員であれば、生地の質感や織りの特徴から産地を推定できるため、
                証紙なしでも適正な評価を受けられる可能性があります。
                複数業者に査定を依頼して比較するのがおすすめです。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 伝統工芸品マークとは何ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                伝統工芸品マーク（伝統マーク）は、経済産業大臣が指定する
                「伝統的工芸品」であることを証明するマークです。
                日の丸をモチーフにした「伝」の文字のデザインが特徴で、
                指定された産地で伝統的な技法を用いて作られた製品に付けられます。
                このマークがある着物は品質が保証されており、査定額にもプラスに影響します。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 証紙の偽物はありますか？見分け方は？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                残念ながら、証紙の偽物が出回ることもあります。
                偽物は印刷の質が粗い、紙質が異なる、登録番号がないなどの特徴があります。
                正規の証紙は各産地の組合が管理番号を付けて発行しているため、
                番号の照合で真贋を確認できます。
                不安な場合は着物専門の買取業者に見てもらいましょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 証紙はどこに保管しておくのがベストですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                証紙は着物と一緒に保管するのがベストです。
                たとう紙の中に挟んでおくか、端布と一緒にまとめておくと紛失を防げます。
                着物と別の場所に保管すると、どの着物の証紙かわからなくなったり、
                紛失するリスクが高まります。
                万が一に備えてスマホで写真を撮っておくと安心です。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：証紙は着物の価値を証明する重要書類
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              証紙は着物の産地・素材・製法を公的に証明する重要な書類です。
              証紙の有無で買取価格が2倍以上変わることもあるため、
              着物を売る際には必ず証紙を探して一緒に査定に出しましょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              証紙が見当たらない場合でも、たとう紙の中やタンスの引き出しの隅を
              探してみてください。意外な場所から見つかることがあります。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              証紙がなくても着物は売れますが、できる限り証紙を添えて査定に出すことで、
              より高い査定額を得られる可能性が高まります。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            証紙付きの着物を高く売るなら
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            証紙の価値を正しく評価できる着物専門の買取業者に査定を依頼しましょう。<br />
            信頼できる業者をランキングで比較できます。
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
              href="/articles/no-certificate/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                証紙なしの着物は売れる？
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
