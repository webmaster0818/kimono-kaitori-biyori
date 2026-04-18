import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "小紋・付け下げの買取相場｜江戸小紋の三役は高額査定",
  description:
    "小紋・付け下げの買取相場を種類別に徹底解説。江戸小紋の三役（鮫・角通し・行儀）は5,000円〜5万円の高額査定も。作家物や伝統工芸品の価格差、高く売るためのポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/komon-tsukesage/",
  },
  openGraph: {
    title: "小紋・付け下げの買取相場｜江戸小紋の三役は高額査定",
    description:
      "小紋・付け下げの種類別買取相場と高く売るコツを解説。江戸小紋の三役は特に高額。",
    url: "https://kimonokaitori-biyori.com/articles/komon-tsukesage/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "小紋はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "一般的な小紋の買取相場は2,000円〜5,000円程度です。ただし、江戸小紋の三役（鮫・角通し・行儀）は5,000円〜5万円、有名作家物の江戸小紋は5万円以上の査定がつくこともあります。ブランド品や正絹素材、証紙付きの小紋はさらに高額になります。",
  },
  {
    question: "付け下げと訪問着の見分け方を教えてください。",
    answer:
      "付け下げと訪問着の最も大きな違いは、柄の描き方です。訪問着は仕立てた状態で柄がつながるように描かれ（絵羽模様）、付け下げは反物の状態で柄が上向きになるように描かれています。付け下げは訪問着より控えめな印象で、準フォーマルからカジュアルまで幅広く着用できます。",
  },
  {
    question: "江戸小紋の三役と五役の違いは何ですか？",
    answer:
      "江戸小紋の「三役」は最も格が高い3つの柄で、鮫（さめ）・角通し（かくとおし）・行儀（ぎょうぎ）を指します。「五役」はこれに大小あられ（だいしょうあられ）と万筋（まんすじ）を加えた5つの柄です。三役は紋を付ければ準礼装として使える格の高い柄で、買取価格も五役やその他の柄より高くなる傾向があります。",
  },
  {
    question: "古い小紋や付け下げでも買い取ってもらえますか？",
    answer:
      "はい、古い小紋や付け下げでも買取対象になります。ただし、一般的な小紋は流行の移り変わりが早いため、10年以上前のデザインは査定額が下がる傾向があります。江戸小紋や伝統的な柄の付け下げは、古くても安定した需要があります。カビや大きなシミがある場合は査定額が大幅に下がることがあります。",
  },
  {
    question: "小紋と付け下げはどちらが高く売れますか？",
    answer:
      "一般的には付け下げのほうが小紋より高く売れる傾向があります。付け下げは準フォーマルとして使えるため需要が高く、特にブランド品や有名染元のものは1万円以上の査定がつくことも。ただし、江戸小紋の三役は一般的な付け下げより高い買取価格になることがあります。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "小紋・付け下げの買取相場｜江戸小紋の三役は高額査定",
  description:
    "小紋・付け下げの種類別買取相場と高く売るコツを解説。江戸小紋の三役は特に高額。",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
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
    "@id":
      "https://kimonokaitori-biyori.com/articles/komon-tsukesage/",
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
      name: "小紋・付け下げ",
      item: "https://kimonokaitori-biyori.com/articles/komon-tsukesage/",
    },
  ],
};

export default function KomonTsukesagePage() {
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
          { label: "小紋・付け下げ" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              種類別買取相場
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">小紋・付け下げの買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                江戸小紋の三役は高額査定
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              小紋と付け下げは着物の中でも所有者が多い種類ですが、種類によって買取価格に大きな差があります。特に江戸小紋の三役（鮫・角通し・行儀）は一般の小紋の10倍以上の買取価格がつくことも。種類別の相場と高く売るコツを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年4月16日
            </p>
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
                    1. 小紋と付け下げとは？格の違いを解説
                  </a>
                </li>
                <li>
                  <a
                    href="#komon-price"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】小紋の買取相場一覧
                  </a>
                </li>
                <li>
                  <a
                    href="#tsukesage-price"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 【種類別】付け下げの買取相場一覧
                  </a>
                </li>
                <li>
                  <a
                    href="#edokomon"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 江戸小紋の三役と五役の詳細解説
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 小紋・付け下げを高く売るポイント
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

      {/* 小紋と付け下げとは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            小紋と付け下げとは？格の違いを解説
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              小紋と付け下げは、着物の「格」において訪問着と紬の中間に位置する着物です。どちらも日常のおしゃれ着から準フォーマルまで幅広く着用できますが、格の高さや用途には違いがあります。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                小紋（こもん）とは
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                小紋は、反物全体に同じ模様が繰り返し染められた着物です。カジュアルなおしゃれ着として最も一般的な着物のひとつで、普段着からお出かけ着まで幅広く着用されます。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>反物全体に柄が繰り返されるパターン染め</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>カジュアルな外出着が基本（食事会・観劇など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>江戸小紋の三役は紋付きで準礼装にもなる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                付け下げ（つけさげ）とは
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                付け下げは、反物の状態で柄が上向きになるように染められた着物です。訪問着に近い格を持ちながら、より控えめな印象で、準フォーマルの場面で活躍します。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>柄が肩山に向かって上向きに描かれている</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>訪問着より控えめだが準フォーマルに対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>入学式・お茶会・パーティーなどに適している</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    比較項目
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    小紋
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    付け下げ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    格
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    おしゃれ着（カジュアル〜セミフォーマル）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    準フォーマル
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    柄の付け方
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    全体に同じ柄が繰り返される
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    柄が上向きに描かれる
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    着用シーン
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    食事会・観劇・お出かけ
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    入学式・お茶会・結婚式（ゲスト）
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    買取相場
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    2,000円〜5万円
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    2,000円〜5万円超
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 小紋の相場 */}
      <section id="komon-price" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】小紋の買取相場一覧
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            小紋は種類によって買取相場が大きく異なります。一般的な小紋は数千円程度ですが、江戸小紋や作家物は数万円以上の査定がつくこともあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    小紋の種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    特徴
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    一般的な小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    型染め・プリント染めの小紋
                  </td>
                  <td className="px-4 py-3 font-medium">
                    2,000円〜5,000円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    正絹でも低めの相場
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    江戸小紋（一般柄）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伊勢型紙で染めた細かい柄
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜2万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    柄と状態による
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    江戸小紋（三役・五役）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    鮫・角通し・行儀等の最高格柄
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜5万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    紋付きは更に高額
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    作家物の小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    有名作家や伝統工芸士の手染め
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    落款・証紙ありが前提
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    京小紋・紅型小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    京染めや琉球紅型の小紋
                  </td>
                  <td className="px-4 py-3 font-medium">
                    3,000円〜3万円
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    産地証紙で変動
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は正絹・美品の場合の目安です。化繊の小紋は買取不可の場合もあります。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                一般的な小紋（2,000円〜5,000円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                型染めやプリント染めの一般的な小紋は、正絹であっても買取相場は2,000円〜5,000円程度です。小紋は着物の中で最も流通量が多い種類のため、需要と供給のバランスから買取価格は控えめになります。ただし、人気の柄（古典柄・季節の花柄など）や、ブランド呉服店（千總・竺仙など）の小紋は相場を上回ることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                江戸小紋（5,000円〜5万円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                江戸小紋は伊勢型紙を使って極めて細かい模様を染める伝統的な染色技法です。武士の裃（かみしも）に由来する格式の高い着物で、一般の小紋とは別格の買取価格がつきます。特に「三役」と呼ばれる鮫・角通し・行儀は最も格が高く、紋を付ければ準礼装として使えることから需要が高く、1万円〜5万円の買取相場です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                作家物の小紋（5万円超）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                人間国宝の小宮康孝（こみや やすたか）や、伝統工芸士による江戸小紋の作品は、5万円以上の高額査定が期待できます。落款や証紙があることが前提ですが、精緻な型彫りと染めの技術が評価され、一般品とは大きく異なる買取価格になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 付け下げの相場 */}
      <section id="tsukesage-price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】付け下げの買取相場一覧
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            付け下げは訪問着に近い格を持つため、小紋よりやや高い買取相場になる傾向があります。特にブランド品や作家物は高額査定が期待できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    付け下げの種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    特徴
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    一般的な付け下げ
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    正絹の一般的な付け下げ
                  </td>
                  <td className="px-4 py-3 font-medium">
                    2,000円〜6,000円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    柄と状態による
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    ブランド付け下げ
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    千總・川島織物など有名ブランド
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜5万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    ブランドの知名度で変動
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    作家物の付け下げ
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    有名作家・伝統工芸士の作品
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    落款・証紙必須
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    加賀友禅の付け下げ
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    加賀友禅の技法で染めた付け下げ
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜10万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    作家による
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    付け下げ訪問着
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    付け下げと訪問着の中間的な着物
                  </td>
                  <td className="px-4 py-3 font-medium">
                    3,000円〜8万円
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    柄の豪華さで変動
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は正絹・美品の場合の目安です。シミや汚れがある場合は大幅に下がります。
          </p>
        </div>
      </section>

      {/* 江戸小紋の三役と五役 */}
      <section id="edokomon" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            江戸小紋の三役と五役の詳細解説
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              江戸小紋は、江戸時代に武士の裃（かみしも）に使われた型染めがルーツです。伊勢型紙と呼ばれる精緻な型紙を使い、極めて細かい模様を染め上げます。その中でも最も格が高いとされるのが<strong>「三役」</strong>と呼ばれる3つの柄です。
            </p>
            <p>
              三役は紋を付ければ色無地と同格の準礼装として使えるほど格が高く、買取市場でも一般の小紋とは異なる高い評価を受けます。
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                三役（さんやく） ― 最も格が高い3つの柄
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#c9a76c] pl-4">
                  <h4 className="font-bold text-gray-800 mb-1">
                    1. 鮫（さめ）
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    鮫の皮のような細かい点描で構成される柄です。紀州藩の定め柄として知られ、三役の中でも最も格が高いとされています。点が細かいほど高級品で、「極鮫」と呼ばれる最も細かいものは1寸（約3cm）四方に900個以上の点が打たれます。買取相場は1万円〜5万円程度で、極鮫の人間国宝作品はさらに高額になります。
                  </p>
                </div>
                <div className="border-l-4 border-[#c9a76c] pl-4">
                  <h4 className="font-bold text-gray-800 mb-1">
                    2. 角通し（かくとおし）
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    極めて小さな四角（正方形）が縦横に整然と並んだ柄です。四角が縦にも横にも通っている（筋が通っている）ことから「角通し」と名付けられました。武家の礼装にふさわしい端正な印象で、男性の着物にも使われます。買取相場は1万円〜4万円程度です。
                  </p>
                </div>
                <div className="border-l-4 border-[#c9a76c] pl-4">
                  <h4 className="font-bold text-gray-800 mb-1">
                    3. 行儀（ぎょうぎ）
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    小さな点が斜め45度に規則正しく並んだ柄です。「行儀が良い」の語源ともなったこの柄は、お辞儀をした姿を表すとも言われています。上品で落ち着いた印象があり、幅広い場面で着用できます。買取相場は1万円〜4万円程度です。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                五役（ごやく） ― 三役に次ぐ格の2つの柄
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#e8a0b6] pl-4">
                  <h4 className="font-bold text-gray-800 mb-1">
                    4. 大小あられ（だいしょうあられ）
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    大小2種類の丸い点が不規則に散りばめられた柄です。雪や氷の粒（霰）をモチーフにしており、変化に富んだ表情が魅力です。三役に準じる格があり、買取相場は8,000円〜3万円程度です。
                  </p>
                </div>
                <div className="border-l-4 border-[#e8a0b6] pl-4">
                  <h4 className="font-bold text-gray-800 mb-1">
                    5. 万筋（まんすじ）
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    極めて細い縞模様が無数に並んだ柄です。「万（よろず）の筋」の名のとおり、肉眼では無地に見えるほど細い筋が密集しています。型彫り師の技量が最も問われる柄のひとつで、買取相場は8,000円〜3万円程度です。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    柄の名称
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    分類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    特徴
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    買取相場の目安
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    鮫
                  </td>
                  <td className="px-4 py-3 text-gray-700">三役</td>
                  <td className="px-4 py-3 text-gray-700">
                    鮫皮状の細かい点描
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜5万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    角通し
                  </td>
                  <td className="px-4 py-3 text-gray-700">三役</td>
                  <td className="px-4 py-3 text-gray-700">
                    縦横に並ぶ小さな四角
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜4万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    行儀
                  </td>
                  <td className="px-4 py-3 text-gray-700">三役</td>
                  <td className="px-4 py-3 text-gray-700">
                    斜め45度に並ぶ点
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜4万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    大小あられ
                  </td>
                  <td className="px-4 py-3 text-gray-700">五役</td>
                  <td className="px-4 py-3 text-gray-700">
                    大小の丸い点
                  </td>
                  <td className="px-4 py-3 font-medium">
                    8,000円〜3万円
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    万筋
                  </td>
                  <td className="px-4 py-3 text-gray-700">五役</td>
                  <td className="px-4 py-3 text-gray-700">
                    極めて細い縞模様
                  </td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">
                    8,000円〜3万円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">
                江戸小紋の格と買取価格の関係：
              </strong>
              江戸小紋は、柄が細かいほど格が高く、買取価格も高くなります。三役の中でも特に「極鮫（ごくざめ）」と呼ばれる最も細かい鮫小紋は最高格とされ、人間国宝・小宮康孝の作品は10万円以上の買取価格がつくこともあります。五役以外の柄（菊菱・宝尽くし・松葉など）も人気がありますが、三役・五役と比較すると買取相場はやや低めです。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            小紋・付け下げを高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：江戸小紋は柄の種類を伝える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                江戸小紋をお持ちの場合は、査定時に柄の種類（三役・五役など）を伝えましょう。肉眼では区別しにくい柄もあるため、購入時の説明書や証紙があれば一緒に提示すると正確な査定が受けられます。柄の種類がわからない場合でも、着物専門の査定員であれば見分けられます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：証紙・落款は必ずセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                作家物の江戸小紋や付け下げは、証紙と落款の有無で査定額が大きく変わります。たとう紙の中、購入時の箱の中、着物と一緒に保管している袋の中を探しましょう。特に人間国宝の作品は、証紙なしでは適正評価を受けにくくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：着物専門の買取業者に依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小紋や付け下げはリサイクルショップでは一律数百円で買い叩かれることがあります。江戸小紋の三役と五役の違いや、作家物の価値を正しく評価できる着物専門の買取業者に依頼しましょう。専門業者であれば、柄の希少性や染めの品質まで見極めて適正価格を提示してくれます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：まとめて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小紋や付け下げは1点あたりの買取価格が比較的低い傾向があるため、複数枚をまとめて査定に出すと、全体の買取額がアップすることがあります。帯や和装小物も一緒に出すとさらに効果的です。出張買取を利用すれば、大量の着物でも自宅で簡単に査定を受けられます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント5：季節を考慮して売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小紋は季節柄のものが多いため、着用シーズンの少し前に売ると高額査定になりやすいです。桜柄なら冬〜早春、秋草柄なら夏頃に出すのが理想的です。付け下げは季節を問わず使えるものが多いため、状態が良いうちに早めに売るのがおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 付け下げ小紋という中間的な着物について */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            付け下げ小紋という中間的な着物について
          </h3>
          <div className="bg-white border border-[#e8ddd0] rounded-lg p-5 space-y-3">
            <p className="text-gray-700 leading-relaxed">
              付け下げ小紋は、小紋と付け下げの中間に位置する着物です。買取相場は小紋より高く、付け下げと同等の価格が付く場合もあります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              特に田村哲彦や由水十久の作品は高額査定が期待できます。お手持ちの着物が付け下げ小紋かどうか判断が難しい場合は、着物専門の査定員に見てもらうことをおすすめします。
            </p>
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
                    <span className="text-[#c9a76c] font-bold text-lg">
                      Q.
                    </span>
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
              href="/articles/houmongi-tomesode/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                訪問着・留袖の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                訪問着・留袖の種類別買取価格と高く売るコツを徹底解説。
              </p>
            </Link>
            <Link
              href="/articles/kaga-yuzen/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                加賀友禅の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                加賀友禅の作家別買取価格表。人間国宝・木村雨山の作品は100万円超も。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            小紋・付け下げの正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            小紋・付け下げの買取相場はあくまで目安です。江戸小紋の柄の種類、作家、ブランド、状態によって実際の査定額は大きく変わります。着物専門の査定員がいる信頼できる業者に無料査定を依頼しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
