import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "買取大吉の着物買取｜口コミ・評判・買取実績を徹底検証",
  description:
    "買取大吉の着物買取サービスを徹底検証。全国1,800店超の実績、査定員の質、買取価格の相場、良い口コミ・悪い口コミを正直にレビュー。振袖・訪問着・帯・小物の買取を検討中の方必見。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/daikichi/",
  },
  openGraph: {
    title: "買取大吉の着物買取｜口コミ・評判・買取実績を徹底検証",
    description:
      "買取大吉の着物買取サービスを徹底検証。全国1,800店超の実績、査定員の質、買取価格の相場を正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/daikichi/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "買取大吉の着物買取｜口コミ・評判・買取実績を徹底検証",
  description:
    "買取大吉の着物買取サービスを徹底検証。全国1,800店超の実績、査定員の質、買取価格の相場、良い口コミ・悪い口コミを正直にレビュー。",
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
    "@id": "https://kimonokaitori-biyori.com/reviews/daikichi/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "買取大吉で着物を売る場合、査定料はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、買取大吉では査定料・出張料・キャンセル料はすべて無料です。査定だけでも気軽に利用できます。",
      },
    },
    {
      "@type": "Question",
      name: "買取大吉ではどのような着物が買取対象ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "振袖、訪問着、留袖、小紋、紬、付け下げ、色無地、帯、和装小物など幅広い着物が買取対象です。シミや汚れがあるものでも査定してもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "買取大吉の出張買取はどの地域に対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "買取大吉は全国1,800店舗以上を展開しており、ほぼ全国で出張買取に対応しています。お近くの店舗に問い合わせることで対応エリアを確認できます。",
      },
    },
    {
      "@type": "Question",
      name: "買取大吉で着物を売る場合、事前に準備するものはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本人確認書類（運転免許証、マイナンバーカードなど）が必要です。着物の証紙や落款がある場合は一緒に提示すると査定額がアップする可能性があります。",
      },
    },
    {
      "@type": "Question",
      name: "買取大吉の査定から入金までどれくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "店頭買取・出張買取の場合は、査定後にその場で現金を受け取れます。宅配買取の場合は査定完了後、通常1〜3営業日で振込されます。",
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
      name: "買取大吉",
      item: "https://kimonokaitori-biyori.com/reviews/daikichi/",
    },
  ],
};

export default function DaikichiReviewPage() {
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
          { label: "買取大吉" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              総合力No.1
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            買取大吉の着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">口コミ・評判・買取実績</span>
            を徹底検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            全国1,800店舗以上を展開する買取大吉。着物買取においても専門査定員が在籍し、振袖・訪問着・帯・和装小物まで幅広く対応しています。
            本記事では、実際の利用者の口コミ・評判をもとに、買取大吉の着物買取サービスを徹底検証します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. 買取大吉の基本情報
              </a>
            </li>
            <li>
              <a href="#good-reviews" className="hover:underline">
                2. 買取大吉の良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:underline">
                3. 買取大吉の悪い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#merit-demerit" className="hover:underline">
                4. メリット・デメリットまとめ
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. 買取大吉で着物を売る流れ
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:underline">
                6. 買取大吉はこんな人におすすめ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* 基本情報 */}
        <section id="overview" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取大吉の基本情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">
                    運営会社
                  </th>
                  <td className="px-4 py-3">株式会社エンパワー</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    店舗数
                  </th>
                  <td className="px-4 py-3">全国1,800店舗以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    買取方法
                  </th>
                  <td className="px-4 py-3">出張買取・店頭買取・宅配買取</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応品目
                  </th>
                  <td className="px-4 py-3">
                    振袖、訪問着、留袖、小紋、紬、付け下げ、色無地、帯、和装小物
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    査定員
                  </th>
                  <td className="px-4 py-3">着物専門の査定員が在籍</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    手数料
                  </th>
                  <td className="px-4 py-3">
                    査定料・出張料・キャンセル料すべて無料
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    入金方法
                  </th>
                  <td className="px-4 py-3">
                    店頭・出張はその場で現金、宅配は銀行振込
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応エリア
                  </th>
                  <td className="px-4 py-3">全国対応</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            買取大吉は、株式会社エンパワーが運営する大手買取チェーンです。フランチャイズ展開により全国1,800店舗以上を有し、
            着物をはじめ、ブランド品・貴金属・切手・骨董品など幅広いジャンルの買取を行っています。
            着物買取では専門の査定員が在籍しており、証紙や落款の確認、生地の状態チェックなど
            専門的な視点で適正な査定を行ってくれる点が特徴です。
          </p>
        </section>

        {/* 良い口コミ */}
        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取大吉の良い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                母から譲り受けた訪問着と振袖を査定してもらいました。他社では「値段がつかない」と言われたものも、
                買取大吉では一点一点丁寧に見てくださり、証紙付きの大島紬には想像以上の金額を提示していただけました。
                査定員の方の知識が豊富で、着物の産地や技法について詳しく説明してくれたのが印象的でした。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・大阪府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                自宅にある着物を整理したくて出張買取をお願いしました。電話での対応も丁寧で、
                予約もスムーズに取れました。当日は若い男性の査定員さんが来てくれましたが、
                着物に関する知識がしっかりしていて安心できました。
                30点ほどまとめて買い取っていただき、合計で12万円ほどになりました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・愛知県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                駅前の店舗に持ち込みで利用しました。予約なしでも対応してもらえ、
                待ち時間も15分ほどでした。結城紬と博多帯を査定してもらい、
                どちらも相場通りの金額を提示してもらえたと思います。
                スタッフの方の接客も感じが良く、また利用したいと思いました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">70代女性・福岡県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                終活の一環で着物を処分することにしました。出張買取で自宅まで来ていただき、
                50枚以上の着物と帯を一気に査定してもらいました。丸一日かけて丁寧に見てくださり、
                合計で28万円の買取額でした。大量の着物にも嫌な顔一つせず対応してくださったことに感謝しています。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">30代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                祖母の遺品整理で利用しました。着物だけでなく、帯留めやかんざしなどの和装小物も
                まとめて査定してもらえたのが助かりました。小物類は一点あたりの金額は小さいですが、
                数がまとまると結構な金額になりました。
                査定の根拠もしっかり説明してくれるので納得感がありました。
              </p>
            </div>
          </div>
        </section>

        {/* 悪い口コミ */}
        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取大吉の悪い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">40代女性・埼玉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                フランチャイズ店なので、店舗によって査定額にばらつきがある印象です。
                以前A店で査定してもらった着物を別の機会にB店に持ち込んだところ、
                金額が1万円以上違いました。統一された基準がないのは不安に感じます。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">50代女性・北海道</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                宅配買取を利用しましたが、査定結果の連絡が遅く、送ってから1週間以上待ちました。
                問い合わせたところ「混み合っている」とのことでしたが、もう少し迅速に対応してほしかったです。
                査定額自体は妥当だったと思いますが、スピード感に不満が残りました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">60代女性・京都府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                着物の専門店と比べると、やはり査定員によって知識レベルに差があると感じました。
                私が持ち込んだ京友禅の作家物について、査定員の方があまり詳しくなかったようで、
                最終的に「本部に確認します」と電話をされていました。
                結果的には適正な金額になりましたが、専門性という点では物足りなさを感じました。
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
                    全国1,800店舗以上の圧倒的なネットワークで、どこに住んでいても利用しやすい
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    出張・店頭・宅配の3つの買取方法から選べる柔軟性
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    査定料・出張料・キャンセル料がすべて無料で、気軽に査定を依頼できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    着物以外の品物（貴金属・ブランド品など）もまとめて査定可能
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    店頭・出張買取ではその場で現金を受け取れるスピード感
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
                    フランチャイズ運営のため、店舗によって査定額や対応の質にばらつきがある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    着物専門店ではないため、査定員の着物に関する知識レベルに差がある場合がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    宅配買取の査定に時間がかかる場合がある（繁忙期は1週間以上）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    総合買取店のため、着物専門店と比べると希少品の評価が低くなる可能性がある
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 買取の流れ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取大吉で着物を売る流れ
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  1
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  お問い合わせ・予約
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  電話、Web、LINEのいずれかで問い合わせ。出張買取の場合は訪問日時を予約、
                  店頭買取の場合は予約不要で直接来店も可能です。宅配買取の場合は申し込み後に
                  無料の宅配キットが届きます。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  2
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  査定
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  専門の査定員が着物の状態、産地、技法、証紙の有無などを確認し、
                  一点一点丁寧に査定します。査定にかかる時間は点数にもよりますが、
                  5〜10点で30分〜1時間程度が目安です。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  3
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  査定額の提示
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額が提示されます。金額の内訳や査定根拠について質問すれば丁寧に説明してもらえます。
                  金額に納得できない場合は、キャンセル料無料でお断りできます。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  4
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  成約・お支払い
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に同意したら、本人確認書類を提示して契約書にサイン。
                  店頭・出張買取の場合はその場で現金を受け取れます。
                  宅配買取の場合は指定口座に振込されます。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  5
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  クーリングオフ期間
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  出張買取の場合は法律によりクーリングオフ（8日間）が適用されます。
                  期間内であれば無条件で契約を解除し、着物を返却してもらえます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* こんな人におすすめ */}
        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取大吉はこんな人におすすめ
          </h2>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    近くの店舗で気軽に査定してほしい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    全国1,800店舗以上あるため、自宅や職場の近くに店舗がある可能性が高いです。
                    予約なしでも対応可能な店舗が多く、買い物のついでに立ち寄れます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    着物以外の品物もまとめて売りたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    着物と一緒にブランドバッグ、貴金属、時計なども査定してもらえます。
                    引っ越しや遺品整理などで大量の不用品がある場合に便利です。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    大量の着物を一度に売りたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    出張買取では大量の着物にも対応。50枚以上でも自宅まで来て査定してくれるため、
                    重い着物を持ち運ぶ必要がありません。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    初めて着物を売る方
                  </span>
                  <p className="mt-1 text-gray-600">
                    大手ならではの安心感があり、査定料・キャンセル料無料でリスクなく利用できます。
                    まずは査定額を知りたいという方にもおすすめです。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  5
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    即日で現金が必要な方
                  </span>
                  <p className="mt-1 text-gray-600">
                    店頭・出張買取ではその場で現金を受け取れます。
                    急ぎで現金化したい場合に便利です。
                  </p>
                </div>
              </li>
            </ul>
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
                  Q. 買取大吉で着物を売る場合、査定料はかかりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                いいえ、買取大吉では査定料・出張料・キャンセル料はすべて無料です。
                査定だけでも気軽に利用でき、金額に納得できなければ無料でお断りできます。
                宅配買取の送料も無料です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 買取大吉ではどのような着物が買取対象ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                振袖、訪問着、留袖、小紋、紬、付け下げ、色無地、帯、和装小物など幅広い着物が買取対象です。
                シミや汚れがあるものでも査定してもらえます。ただし、状態が著しく悪い場合は
                買取不可となる場合もあります。証紙や落款がある場合は必ず一緒に提示しましょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 買取大吉の出張買取はどの地域に対応していますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                買取大吉は全国1,800店舗以上を展開しており、ほぼ全国で出張買取に対応しています。
                ただし、一部離島や山間部では対応できない場合があります。
                お近くの店舗に電話で問い合わせるか、公式サイトから対応エリアを確認できます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 買取大吉で着物を売る場合、事前に準備するものはありますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                本人確認書類（運転免許証、マイナンバーカード、パスポートなど）が必要です。
                着物の証紙や落款がある場合は一緒に提示すると、産地や作家の証明になるため
                査定額がアップする可能性があります。また、購入時の領収書やたとう紙があれば
                なお良いでしょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 買取大吉の査定から入金までどれくらいかかりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                店頭買取・出張買取の場合は、査定後にその場で現金を受け取れます。
                所要時間は点数によりますが、5〜10点であれば30分〜1時間程度です。
                宅配買取の場合は着物到着後2〜5営業日で査定結果が通知され、
                同意後1〜3営業日で指定口座に振込されます。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：買取大吉の着物買取は総合力の高さが魅力
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              買取大吉は、全国1,800店舗以上の圧倒的なネットワークと、出張・店頭・宅配の3つの買取方法に対応する
              総合力の高い買取業者です。着物専門の査定員が在籍しており、振袖・訪問着・帯・和装小物まで幅広く対応。
              手数料がすべて無料なので、初めて着物を売る方でも安心して利用できます。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              一方で、フランチャイズ運営のため店舗によって査定額や対応にばらつきがある点は注意が必要です。
              高額な作家物や希少な着物をお持ちの場合は、着物専門の買取店と併せて査定を依頼し、
              比較検討することをおすすめします。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              「まずは気軽に査定額を知りたい」「近所で手軽に着物を売りたい」という方には、
              買取大吉は最適な選択肢の一つと言えるでしょう。
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
              href="/reviews/uriel/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                ウリエルの着物買取｜口コミ・評判
              </p>
            </Link>
            <Link
              href="/reviews/reclo/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                RECLO（リクロ）の着物買取｜口コミ・評判
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}