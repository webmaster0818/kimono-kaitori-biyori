import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "RECLO（リクロ）の着物買取｜宅配買取の評判・口コミを検証",
  description:
    "RECLO（リクロ）の着物買取サービスを徹底検証。宅配買取特化で高級品に強い実力、送料無料・キャンセル返送料無料の安心体制、実際の口コミ・評判を正直にレビューします。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/reclo/",
  },
  openGraph: {
    title: "RECLO（リクロ）の着物買取｜宅配買取の評判・口コミを検証",
    description:
      "RECLO（リクロ）の宅配買取特化の着物買取サービスを徹底検証。口コミ・評判・買取実績を正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/reclo/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RECLO（リクロ）の着物買取｜宅配買取の評判・口コミを検証",
  description:
    "RECLO（リクロ）の着物買取サービスを徹底検証。宅配買取特化で高級品に強い実力を口コミとともにレビュー。",
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
    "@id": "https://kimonokaitori-biyori.com/reviews/reclo/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "RECLOの宅配買取にかかる送料は無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、RECLOでは送料無料で宅配買取を利用できます。専用の宅配キットも無料で届けてもらえます。査定額に納得できずキャンセルする場合の返送料も無料です。",
      },
    },
    {
      "@type": "Question",
      name: "RECLOはどのような着物の買取に強いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RECLOは高級着物やブランド着物の買取に強みがあります。人間国宝や有名作家の作品、大島紬・結城紬などの伝統工芸品、老舗呉服店の仕立て品などは特に高額査定が期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "RECLOで着物以外のものも一緒に送れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、RECLOでは着物のほかにブランドバッグ、ジュエリー、時計、骨董品なども同時に宅配買取で送ることができます。異なるカテゴリの商品をまとめて送れるのがRECLOの特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "RECLOの査定にはどれくらいの日数がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RECLOでは商品到着後、通常3〜7営業日で査定結果がメールまたはマイページで通知されます。繁忙期はやや時間がかかる場合がありますが、10営業日以内に連絡があるのが一般的です。",
      },
    },
    {
      "@type": "Question",
      name: "RECLOでキャンセルした場合、返送料はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、RECLOでは査定額に納得できない場合のキャンセル・返送料は無料です。リスクなく気軽に査定を試せる点がRECLOの大きなメリットです。",
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
      name: "業者レビュー",
      item: "https://kimonokaitori-biyori.com/reviews/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "RECLO",
      item: "https://kimonokaitori-biyori.com/reviews/reclo/",
    },
  ],
};

export default function RecloReviewPage() {
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
          { label: "業者レビュー", href: "/reviews/" },
          { label: "RECLO" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#e8a0b6] text-white text-xs font-bold px-3 py-1 rounded-full">
              高級着物に強い
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            RECLO（リクロ）の着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">宅配買取の評判・口コミ</span>
            を検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            RECLO（リクロ）は宅配買取に特化した買取サービスで、高級品の取り扱いに強みがあります。
            着物・骨董品・ジュエリーなど幅広いカテゴリに対応し、送料無料・キャンセル返送料無料の
            安心体制が整っています。本記事では、RECLOの着物買取サービスを口コミとともに徹底検証します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. RECLO（リクロ）の基本情報
              </a>
            </li>
            <li>
              <a href="#good-reviews" className="hover:underline">
                2. RECLOの良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:underline">
                3. RECLOの悪い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#merit-demerit" className="hover:underline">
                4. メリット・デメリットまとめ
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. RECLOの宅配買取の流れ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* 基本情報 */}
        <section id="overview" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            RECLO（リクロ）の基本情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">
                    運営会社
                  </th>
                  <td className="px-4 py-3">株式会社アクティブソナー</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    買取方法
                  </th>
                  <td className="px-4 py-3">宅配買取（メイン）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応エリア
                  </th>
                  <td className="px-4 py-3">全国対応（宅配のため）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応品目
                  </th>
                  <td className="px-4 py-3">
                    着物、帯、和装小物、ブランド品、ジュエリー、骨董品
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    特徴
                  </th>
                  <td className="px-4 py-3">高級品・ブランド着物に強い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    送料
                  </th>
                  <td className="px-4 py-3">送料無料（宅配キットも無料）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    キャンセル返送料
                  </th>
                  <td className="px-4 py-3">無料</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    入金方法
                  </th>
                  <td className="px-4 py-3">銀行振込</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            RECLO（リクロ）は、宅配買取に特化した買取サービスで、特に高級品の取り扱いに定評があります。
            着物カテゴリでは、人間国宝や有名作家の作品、大島紬・結城紬などの伝統工芸品に強く、
            専門の鑑定士が一点一点丁寧に査定します。オンライン完結のため全国どこからでも利用でき、
            送料・キャンセル返送料が無料なので気軽に試せるのが特徴です。
            ブランド品やジュエリーとの同時査定も可能で、高級品をまとめて売りたい方に人気があります。
          </p>
        </section>

        {/* 良い口コミ */}
        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            RECLOの良い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                人間国宝の作品を含む着物5点を査定してもらいました。他社では一律の評価だった作家物が、
                RECLOでは作家ごとに適正な価格を出してもらえました。特に久保田一竹の辻が花は
                他社の倍以上の査定額で大変満足しています。高級着物を売るならRECLOが一番だと思います。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・北海道</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                地方在住で近くに着物買取の専門店がないため、宅配買取のRECLOを利用しました。
                宅配キットが無料で届き、着物を詰めて送るだけなのでとても手軽でした。
                査定結果も写真付きでメールに届き、なぜその金額になるのかの説明もあって分かりやすかったです。
                結城紬と大島紬の合計で25万円の査定額で、期待以上でした。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・大阪府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                着物と一緒にエルメスのバッグとカルティエのジュエリーも送りました。
                異なるカテゴリのものをまとめて送れるのはRECLOならではの便利さです。
                すべて適正な価格で査定してもらえ、トータルで50万円を超える金額になりました。
                対面でのやり取りがないので気楽に利用できるのも良い点です。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・福岡県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                キャンセル返送料が無料というのが決め手でRECLOを選びました。
                実際に一度、査定額に納得できず返送してもらいましたが、本当に無料で返してもらえました。
                その後、別の着物を改めて送った際は満足のいく金額だったので成約しました。
                リスクなく試せるのは大きな魅力です。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">30代女性・愛知県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                マイページで査定の進捗状況が確認できるのが便利でした。
                「商品受領」「査定中」「査定完了」とステータスが更新されるので、
                今どの段階にあるのかが分かりやすいです。査定完了後はマイページから
                承認ボタンを押すだけで手続き完了。すべてオンラインで完結するスマートさが気に入っています。
              </p>
            </div>
          </div>
        </section>

        {/* 悪い口コミ */}
        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            RECLOの悪い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">50代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                普段着レベルの着物（小紋や色無地）はあまり高い金額にはなりませんでした。
                RECLOは高級品に強いということは分かっていましたが、普通の着物だと
                数百円〜千円程度の査定になるものも多く、期待していた金額とは開きがありました。
                ブランドや作家物でない着物は他のサービスのほうが良いかもしれません。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">60代女性・京都府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                査定に時間がかかったのが気になりました。商品を送ってから査定結果が届くまで
                10日ほどかかりました。急いで売りたい方には向いていないと思います。
                査定自体は丁寧で金額にも満足していますが、スピード重視の方は出張買取のほうが良いでしょう。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">40代女性・千葉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                宅配買取のため、着物の実物を見ながら説明を聞くことができません。
                メールでの査定報告は丁寧でしたが、やはり対面で話を聞きたかったです。
                着物に思い入れがある場合は、出張買取で直接やり取りできるサービスのほうが
                満足感が高いかもしれません。
              </p>
            </div>
          </div>
        </section>

        {/* メリット・デメリット */}
        <section id="merit-demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            メリット・デメリットまとめ
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6b4c8a] text-white text-sm">
                  ○
                </span>
                メリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    高級着物・作家物・伝統工芸品の査定に強く、高額査定が期待できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    送料無料・キャンセル返送料無料でリスクゼロで試せる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    全国対応で地方在住でも利用可能。自宅から一歩も出ずに完結
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    ブランド品・ジュエリー・骨董品なども同時査定できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    マイページで査定進捗を確認でき、すべてオンライン完結
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm">
                  ×
                </span>
                デメリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    普段着レベルの着物（ノーブランド・作家物でないもの）は査定額が低い傾向
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    宅配のため査定に時間がかかる（商品到着後3〜10営業日）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    対面でのやり取りがないため、着物について詳しく相談しにくい
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    即現金化はできない（振込まで数日かかる）
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 宅配買取の流れ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            RECLOの宅配買取の流れ
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8a0b6] text-white font-bold text-sm">
                  1
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  会員登録・申し込み
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  RECLOの公式サイトで会員登録（無料）を行い、宅配買取を申し込みます。
                  売りたい商品のカテゴリや点数を入力すると、数日で無料の宅配キットが届きます。
                  段ボール・緩衝材・着払い伝票がセットになっているので、自分で用意する必要はありません。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8a0b6] text-white font-bold text-sm">
                  2
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  梱包・発送
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  着物を丁寧に畳んで宅配キットに入れ、証紙や落款がある場合は一緒に同封します。
                  着払い伝票を貼って集荷を依頼するか、最寄りのコンビニ・宅配便営業所から発送します。
                  本人確認書類のコピーも同封してください。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8a0b6] text-white font-bold text-sm">
                  3
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  専門鑑定士による査定
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  商品到着後、カテゴリごとの専門鑑定士が一点一点査定します。
                  着物は産地・技法・作家・状態・市場相場を総合的に判断。
                  通常3〜7営業日で査定結果がメールまたはマイページに通知されます。
                  各商品の査定金額と根拠が詳細に記載されます。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8a0b6] text-white font-bold text-sm">
                  4
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  承認またはキャンセル
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に納得したらマイページから承認ボタンを押します。
                  一部の商品だけ売る（部分承認）も可能です。
                  金額に納得できない場合は無料で返送してもらえます。
                  返送料はRECLOが負担するためリスクはありません。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8a0b6] text-white font-bold text-sm">
                  5
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  入金
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  承認後、通常1〜3営業日で指定口座に振込されます。
                  振込手数料はRECLO負担で、利用者の負担はありません。
                  入金が完了するとマイページにも反映されます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 査定実績セクション */}
        <section className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-[#e8ddd0]">
            RECLOの査定実績と信頼性
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            RECLOは業界トップクラスの実績を誇る委託販売・買取サービスです。数字で見るその信頼性をまとめました。
          </p>
          <div className="space-y-3">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">累計査定数 約86万件</p>
              <p className="text-sm text-gray-700">
                圧倒的な査定実績により、幅広いブランド・アイテムの相場データを蓄積。正確な査定が期待できます。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">鑑定士は17年以上の経験者</p>
              <p className="text-sm text-gray-700">
                経験豊富な鑑定士が在籍しており、作家物や産地物の着物も正確に評価できる体制が整っています。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">三越伊勢丹にリアル店舗を出店</p>
              <p className="text-sm text-gray-700">
                新宿・銀座の三越伊勢丹にリアル店舗を構えており、百貨店の信頼性を背景にした安心感があります。
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>注意点：</strong>一部の口コミでは「鑑定レベルが低い」という指摘もあります。高額な着物（作家物・産地物など）を依頼する場合は、事前に他社の買取相場を調べてから査定に出すことをおすすめします。
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
                  Q. RECLOの宅配買取にかかる送料は無料ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、RECLOでは送料無料で宅配買取を利用できます。
                専用の宅配キット（段ボール・緩衝材・着払い伝票）も無料で届けてもらえます。
                査定額に納得できずキャンセルする場合の返送料も無料です。
                利用者の金銭的負担は一切ありません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. RECLOはどのような着物の買取に強いですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                RECLOは高級着物やブランド着物の買取に強みがあります。
                人間国宝や有名作家（久保田一竹、羽田登喜男、志村ふくみなど）の作品、
                大島紬・結城紬・加賀友禅・京友禅などの伝統工芸品、
                老舗呉服店（千總、龍村美術織物など）の仕立て品は特に高額査定が期待できます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. RECLOで着物以外のものも一緒に送れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、RECLOでは着物のほかにブランドバッグ、ジュエリー、時計、骨董品なども
                同時に宅配買取で送ることができます。異なるカテゴリの商品を一つの箱にまとめて送れるため、
                複数の業者に別々に依頼する手間が省けます。
                各カテゴリの専門鑑定士がそれぞれ査定するため、精度の高い査定が受けられます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. RECLOの査定にはどれくらいの日数がかかりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                RECLOでは商品到着後、通常3〜7営業日で査定結果がメールまたはマイページで通知されます。
                繁忙期（年末年始、引っ越しシーズンなど）はやや時間がかかる場合がありますが、
                10営業日以内に連絡があるのが一般的です。
                マイページで査定の進捗状況をリアルタイムに確認することもできます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. RECLOでキャンセルした場合、返送料はかかりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                いいえ、RECLOでは査定額に納得できない場合のキャンセル・返送料は無料です。
                一部の商品だけキャンセル（部分キャンセル）することも可能で、
                その場合もキャンセル分の返送料は無料です。
                リスクなく気軽に査定を試せる点がRECLOの大きなメリットです。
              </div>
            </details>
          </div>
        </section>

        {/* こんな人におすすめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            RECLOはこんな人におすすめ
          </h2>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e8a0b6] text-white text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    人間国宝・有名作家の着物をお持ちの方
                  </span>
                  <p className="mt-1 text-gray-600">
                    RECLOは高級品の取り扱いに強く、作家物の価値を正確に評価できる専門鑑定士が在籍しています。
                    久保田一竹、羽田登喜男、志村ふくみなどの作品は特に高額査定が期待できます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e8a0b6] text-white text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    地方在住で近くに着物買取店がない方
                  </span>
                  <p className="mt-1 text-gray-600">
                    宅配買取で全国対応のため、地方にお住まいでも自宅から利用できます。
                    宅配キットが無料で届くので、準備の手間もかかりません。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e8a0b6] text-white text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    着物とブランド品を一緒に売りたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    着物だけでなくブランドバッグ・ジュエリー・時計なども一つの箱にまとめて送れます。
                    複数の業者に依頼する手間が省け、各カテゴリの専門鑑定士が査定してくれます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e8a0b6] text-white text-xs shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    対面でのやり取りが苦手な方
                  </span>
                  <p className="mt-1 text-gray-600">
                    すべてオンラインで完結するため、対面での交渉が苦手な方でも気軽に利用できます。
                    マイページで査定進捗を確認し、承認ボタンを押すだけで取引完了です。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e8a0b6] text-white text-xs shrink-0 mt-0.5">
                  5
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    リスクなく査定を試してみたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    送料無料・キャンセル返送料無料のため、金銭的リスクなく査定を試せます。
                    「まずは値段を知りたい」という方にも適しています。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：RECLOは高級着物を売りたい方に最適
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              RECLO（リクロ）は、宅配買取に特化し高級品の取り扱いに強みを持つ買取サービスです。
              人間国宝や有名作家の着物、伝統工芸品をお持ちの方にとっては、
              最も高額査定が期待できるサービスの一つと言えるでしょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              送料無料・キャンセル返送料無料でリスクなく試せる点は大きなメリットです。
              一方で、普段着レベルの着物では査定額が低くなる傾向があるため、
              ノーブランドの着物が中心の場合は他のサービスと比較検討することをおすすめします。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              「高級着物の価値をしっかり評価してほしい」「自宅から手軽に売りたい」という方には、
              RECLOは最適な選択肢です。まずは無料の宅配キットを取り寄せてみてはいかがでしょうか。
            </p>
          </div>
        </section>

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
              href="/reviews/daikichi/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                買取大吉の着物買取｜口コミ・評判
              </p>
            </Link>
            <Link
              href="/reviews/hikakaku/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                ヒカカクで着物を売る｜口コミ・評判
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}