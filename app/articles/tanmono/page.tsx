import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "反物の買取相場｜着物より高く売れるケースも？種類別に解説",
  description:
    "反物の買取相場を種類別に徹底解説。正絹反物は〜4万円、有名産地の大島紬・結城紬・西陣織の反物は数十万円も。着物より反物が高く売れるケースや保管方法、高く売るポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/tanmono/",
  },
  openGraph: {
    title: "反物の買取相場｜着物より高く売れるケースも？種類別に解説",
    description:
      "反物の種類別買取相場と、着物より反物が高く売れるケースを解説。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/tanmono/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "反物はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "反物の買取相場は素材や産地によって大きく異なります。一般的な反物で数千円〜3万円、正絹の反物で1万円〜4万円、有名産地（大島紬・結城紬・西陣織など）の反物は数万円〜数十万円になることもあります。未使用品で証紙付きの場合は高額査定が期待できます。",
  },
  {
    question: "反物と着物ではどちらが高く売れますか？",
    answer:
      "一般的には反物のほうが着物より高く売れる傾向があります。反物はまだ仕立てていないため、購入者が自分のサイズに仕立てることができ、需要が高いからです。特に有名産地の反物や正絹の反物は、同じ品質の仕立て済み着物と比較して1.5倍〜2倍の買取価格がつくこともあります。",
  },
  {
    question: "古い反物でも買い取ってもらえますか？",
    answer:
      "はい、古い反物でも買取対象になります。反物は仕立てていない状態のため、着物と比較して劣化が少ないケースが多いです。ただし、長期保管によるカビ・シミ・日焼けがある場合は査定額が下がります。特に正絹の反物は湿気に弱いため、保管状態が重要です。",
  },
  {
    question: "反物の長さが足りない場合でも買い取ってもらえますか？",
    answer:
      "はい、一般的には買取対象になります。ただし、仕立てに必要な長さ（通常12m前後）に満たない場合は、着物1枚分の仕立てができないため査定額が下がることがあります。短い反物でも帯や小物に仕立て直す需要があるため、まずは査定に出してみることをおすすめします。",
  },
  {
    question: "反物を高く売るためにはどうすればいいですか？",
    answer:
      "反物を高く売るためのポイントは、(1)証紙を一緒に出す、(2)着物専門の買取業者に依頼する、(3)複数業者で相見積もりを取る、(4)良好な保管状態を維持する、(5)早めに売ることです。特に証紙は産地や品質の証明になるため、買取価格に大きく影響します。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "反物の買取相場｜着物より高く売れるケースも？種類別に解説",
  description:
    "反物の種類別買取相場と、着物より反物が高く売れるケースを解説。",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://kimono-kaitori-biyori.pages.dev/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://kimono-kaitori-biyori.pages.dev/articles/tanmono/",
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
      item: "https://kimono-kaitori-biyori.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "買取相場",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "反物",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/tanmono/",
    },
  ],
};

export default function TanmonoPage() {
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
          { label: "反物" },
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
              <span className="text-gradient">反物の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                着物より高く売れるケースも？種類別に解説
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              反物（たんもの）は仕立て前の生地のため、購入者が自由にサイズを決められるメリットがあり、着物よりも高い買取価格がつくケースがあります。大島紬・結城紬・西陣織・博多織など種類別の相場と、高く売るためのポイントを詳しく解説します。
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
                    1. 反物とは？基礎知識
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】反物の買取相場一覧
                  </a>
                </li>
                <li>
                  <a
                    href="#vs-kimono"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 着物より反物が高く売れるケース
                  </a>
                </li>
                <li>
                  <a
                    href="#famous-tanmono"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 有名産地の反物の買取相場
                  </a>
                </li>
                <li>
                  <a href="#storage" className="text-[#6b4c8a] hover:underline">
                    5. 反物の保管方法と注意点
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 反物を高く売るポイント
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    7. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 反物とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            反物とは？基礎知識
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              反物（たんもの）とは、着物に仕立てる前の布地のことです。一般的な着物用の反物は、幅約36〜38cm、長さ約12〜13mの長い布地を巻いた状態で販売されています。着物1着分の生地が1反（いったん）として数えられます。
            </p>
            <p>
              反物は「まだ仕立てていない状態」のため、購入者が自分の体型に合わせて自由に仕立てることができます。この点が着物との大きな違いであり、<strong>買取市場では反物のほうが着物より高い価格がつくケースがある</strong>理由でもあります。
            </p>
            <p>
              特に有名産地の正絹反物（大島紬・結城紬・西陣織・博多織など）は、仕立て済みの着物と比較して需要が高く、買取価格も高めに設定されることが多いです。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                反物の基本情報
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>幅：</strong>約36〜38cm（通常の着物幅）。広幅は約72cm
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>長さ：</strong>約12〜13m（着物1着分）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>素材：</strong>正絹・木綿・麻・ポリエステルなど
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>状態：</strong>仕立て前の未使用品が最も価値が高い
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>証紙：</strong>反物の端に産地・品質の証紙が付いている
                  </span>
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
            【種類別】反物の買取相場一覧
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            反物の買取相場は素材・産地・状態によって大きく異なります。以下に2026年時点の反物の買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    反物の種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    素材
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
                    一般的な反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">正絹・木綿</td>
                  <td className="px-4 py-3 font-medium">
                    1,000円〜3万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    素材と状態による
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    正絹反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">正絹</td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜4万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    産地・ブランドで変動
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    有名産地の反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">正絹</td>
                  <td className="px-4 py-3 font-medium">
                    数万円〜数十万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    証紙必須
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    作家物の反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">正絹</td>
                  <td className="px-4 py-3 font-medium">
                    5万円〜50万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    落款・証紙ありが前提
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    木綿・麻の反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">木綿・麻</td>
                  <td className="px-4 py-3 font-medium">
                    500円〜1万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    有名産地は高め
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    化繊の反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    ポリエステル等
                  </td>
                  <td className="px-4 py-3 font-medium">
                    〜500円
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    買取不可の場合もあり
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は未使用品・証紙ありの場合の目安です。使用歴があるものや証紙なしの場合は下がります。
          </p>
        </div>
      </section>

      {/* 着物vs反物 */}
      <section id="vs-kimono" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物より反物が高く売れるケース
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              「反物は仕立てていないから価値が低いのでは？」と思われがちですが、実は<strong>反物のほうが着物より高く売れるケース</strong>は珍しくありません。その理由を3つのポイントで解説します。
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                理由1：サイズを自由に決められる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                仕立て済みの着物は前の所有者の体型に合わせたサイズになっているため、体型が異なる購入者にはサイズが合わないことがあります。一方、反物であれば購入者が自分の体型に合わせて仕立てることができるため、<strong>サイズの制約がなく需要が広がります</strong>。特に身長の高い方や体格の良い方は、既製品ではサイズが合わないことが多く、反物からの仕立てを求める傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                理由2：未使用品として評価される
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物は基本的に「未使用品」として扱われます。着物は着用による摩擦・汗染み・食べこぼしなどのリスクがありますが、反物はそのリスクがないため<strong>状態の良さが保証されやすい</strong>のです。特に正絹の反物は、仕立て前の状態のほうが生地の張りやツヤが良く、高い評価を受けます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                理由3：仕立て直し需要が高い
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                近年、着物のリメイクやリサイクルが注目されており、反物からオリジナルの着物を仕立てたい方や、洋服やバッグなどにリメイクしたい方の需要が増えています。反物は生地の状態が良いため、<strong>リメイク素材としても高い価値</strong>があります。
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    比較項目
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    反物
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    仕立て済み着物
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    サイズ
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    自由に仕立て可能
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    前の所有者のサイズに依存
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    状態
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    未使用品が多い
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    着用による劣化の可能性あり
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    証紙
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    反物の端に残っていることが多い
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    紛失しているケースも多い
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    需要層
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    呉服店・仕立て屋・リメイク需要
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    中古着物の購入者
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    買取価格の傾向
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    同品質なら高めになりやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    サイズや状態で大きく変動
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">
                ただし注意点もあります：
              </strong>
              すべての反物が着物より高く売れるわけではありません。化繊の反物やノーブランド品は買取価格が低く、仕立て済みの有名産地着物のほうが高くなることもあります。反物の価値を左右するのは「素材」「産地」「証紙の有無」「保管状態」の4つの要素です。
            </p>
          </div>
        </div>
      </section>

      {/* 有名産地の反物 */}
      <section id="famous-tanmono" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            有名産地の反物の買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            有名産地の反物は、一般的な反物とは別格の買取価格がつきます。以下に主要な産地の反物の買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    産地・種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    特徴
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    反物の買取相場
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    着物の買取相場（参考）
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    大島紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    鹿児島県。泥染め・絣模様
                  </td>
                  <td className="px-4 py-3 font-medium">
                    3万円〜20万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    1万円〜15万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    結城紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    茨城県。手紡ぎ・地機織り
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5万円〜30万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    3万円〜20万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    西陣織
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    京都府。金糸銀糸の高級織物
                  </td>
                  <td className="px-4 py-3 font-medium">
                    2万円〜15万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    1万円〜10万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    博多織
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    福岡県。献上柄が代表的
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜8万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    5,000円〜5万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    牛首紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    石川県。二頭の蚕の繭を使用
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜10万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    5,000円〜7万円
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    塩沢紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    新潟県。さらりとした風合い
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜5万円
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    3,000円〜3万円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は未使用品・証紙ありの場合の目安です。作家物はさらに高額になります。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                大島紬の反物（3万円〜20万円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬の反物は、仕立て済みの大島紬と比較して1.5倍〜2倍の買取価格がつくことがあります。特に泥染めの手織り大島紬の反物は、証紙が端に付いた状態で保管されていることが多く、産地・品質の証明が容易なため高額査定が期待できます。12マルキ以上の精緻な絣模様のものは特に高い評価を受けます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                結城紬の反物（5万円〜30万円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                本場結城紬の反物は、着物の中でも最高峰の買取価格が期待できるアイテムです。反物の状態であれば証紙が完全な形で残っているため、亀甲数や地機・高機の違いが正確に証明されます。80亀甲で5万円〜、160亀甲以上で15万円〜30万円の相場です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                西陣織の反物（2万円〜15万円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織は京都の高級織物で、帯地として有名ですが着尺（着物用）の反物もあります。金糸・銀糸を使った豪華な織りが特徴で、有名織元（龍村美術織物・川島織物など）の反物は特に高額です。帯用の反物も需要が高く、袋帯用の反物は2万円〜15万円の買取相場です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                博多織の反物（1万円〜8万円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織は福岡県の伝統的な織物で、特に帯地として人気があります。「献上柄」と呼ばれる独鈷と華皿の連続模様が代表的で、正絹の博多織帯は帯の中でも高い需要があります。反物の状態であれば、証紙付きで1万円〜8万円の買取相場です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 保管方法 */}
      <section id="storage" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            反物の保管方法と注意点
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              反物は未使用品であっても、保管状態が悪いと大幅に価値が下がることがあります。高額査定を受けるためには、日頃から適切な保管を心がけることが重要です。
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                湿気対策を徹底する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                正絹の反物は湿気に非常に弱く、カビの原因になります。桐箪笥やたとう紙に包んで保管し、防湿剤を入れておきましょう。梅雨の時期は特に注意が必要です。除湿剤は定期的に交換し、年に1〜2回は風通しの良い日陰で虫干しを行いましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                直射日光を避ける
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物は日焼けによる褪色が起きやすい素材です。特に正絹は紫外線に弱いため、窓際や日の当たる場所での保管は避けてください。褪色してしまうと元に戻すことは難しく、買取価格が大幅に下がります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                防虫対策を行う
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                正絹は虫食いの被害を受けやすい素材です。ただし、防虫剤の種類によっては生地を傷めることがあるため、ナフタリン系は避け、しょうのう（樟脳）やピレスロイド系の防虫剤を使用しましょう。異なる種類の防虫剤を併用すると化学反応でシミの原因になるため、1種類に統一することが大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                証紙は絶対に外さない
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物の端に付いている証紙は、産地・品質・素材を証明する最も重要な情報です。邪魔に感じて外してしまう方もいますが、<strong>証紙を外すと買取価格が大幅に下がる</strong>ため、絶対に外さないでください。証紙が端に付いた状態のまま保管しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            反物を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙は付いたまま査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物の端に付いている証紙は、産地・品質・製法を証明する最重要アイテムです。証紙の有無で買取価格が2倍以上変わることもあります。証紙が外れている場合は、たとう紙の中や箱の中に保管されていないか確認しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：着物専門の買取業者に依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物は素材・産地・技法の専門知識がないと正当な評価ができません。リサイクルショップでは反物の価値がわからず、一律数百円で買い叩かれてしまうケースがあります。着物専門の買取業者であれば、証紙の読み方や産地の特定ができ、適正価格を提示してくれます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物の買取は業者によって数万円の差が出ることがあります。特に有名産地の反物は、業者の販路や在庫状況によって査定額が大きく変動します。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物は保管期間が長くなるほどカビ・褪色・虫食いのリスクが高まります。使う予定がない反物は、状態が良いうちに早めに売ることで高額査定が期待できます。特に正絹の反物は経年変化が起きやすいため、早めの対応がおすすめです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント5：複数本まとめて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                反物を複数本お持ちの場合は、まとめて査定に出すと全体の買取額がアップすることがあります。呉服店が廃業した際の在庫や、遺品整理で出てきた反物なども、量が多ければ出張買取で効率的に査定を受けられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
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
      <section className="py-10">
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
              href="/articles/oshima-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                大島紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                大島紬の種類別買取相場と高く売るコツ。泥染め・藍大島・白大島の価格比較も。
              </p>
            </Link>
            <Link
              href="/articles/yuki-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                結城紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                重要無形文化財・結城紬の亀甲別買取相場。200亀甲以上は超高額査定。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            反物の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            反物の買取相場はあくまで目安です。素材・産地・状態・証紙の有無によって実際の査定額は大きく変わります。着物専門の査定員がいる信頼できる業者に無料査定を依頼して、お手持ちの反物の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
