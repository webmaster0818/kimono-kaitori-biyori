import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヒカカクで着物を売る｜一括査定の使い方と口コミ・評判",
  description:
    "ヒカカク！を使った着物の一括査定を徹底検証。最大20社に一括で見積もりが取れる仕組み、実際の口コミ・評判、メリット・デメリット、使い方の流れを詳しく解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/hikakaku/",
  },
  openGraph: {
    title: "ヒカカクで着物を売る｜一括査定の使い方と口コミ・評判",
    description:
      "ヒカカク！を使った着物の一括査定を徹底検証。最大20社一括査定の口コミ・評判を正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/hikakaku/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ヒカカクで着物を売る｜一括査定の使い方と口コミ・評判",
  description:
    "ヒカカク！を使った着物の一括査定を徹底検証。最大20社に一括査定できる仕組みと口コミ・評判を正直にレビュー。",
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
    "@id": "https://kimonokaitori-biyori.com/reviews/hikakaku/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ヒカカクの利用は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ヒカカクの利用は完全無料です。一括査定の申し込みから買取業者の比較まで、利用者に費用が発生することはありません。ヒカカクは買取業者からの広告収入で運営されています。",
      },
    },
    {
      "@type": "Question",
      name: "ヒカカクで着物の一括査定をすると、最大何社から見積もりが届きますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ヒカカクでは最大20社から見積もりが届きます。着物のカテゴリや地域によって対応業者数は異なりますが、通常5〜15社程度の見積もりが届くことが多いです。",
      },
    },
    {
      "@type": "Question",
      name: "ヒカカクで一括査定を申し込むと、すぐに業者から連絡が来ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一括査定を申し込むと、通常24時間以内に複数の業者からメールや電話で連絡が届きます。電話での連絡を希望しない場合は、申し込み時に「メールのみ希望」と記載することで電話連絡を避けられる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "ヒカカクで査定を申し込んだ後、必ず売らなければいけませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、査定を受けた後に必ず売る必要はありません。複数社の見積もりを比較した上で、最も条件の良い業者を選ぶことも、すべてお断りすることも自由です。",
      },
    },
    {
      "@type": "Question",
      name: "ヒカカクには着物専門の買取業者も登録されていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ヒカカクには着物専門の買取業者も含め、さまざまなタイプの買取業者が登録されています。総合買取店、着物専門店、リサイクルショップなど多様な業者から見積もりを受け取れるため、幅広い選択肢の中から最適な業者を選べます。",
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
      name: "ヒカカク！",
      item: "https://kimonokaitori-biyori.com/reviews/hikakaku/",
    },
  ],
};

export default function HikakakuReviewPage() {
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
          { label: "ヒカカク！" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              一括比較
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ヒカカクで着物を売る
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">一括査定の使い方と口コミ・評判</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            ヒカカク！は、複数の買取業者に一括で査定依頼ができる買取比較サイトです。
            着物・振袖カテゴリも用意されており、最大20社から無料で見積もりを取ることができます。
            「どの業者に売ればいいか分からない」という方にとって、効率的に最高値の業者を見つけられる
            便利なサービスです。本記事では、ヒカカクの使い方と口コミ・評判を徹底検証します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. ヒカカク！の基本情報
              </a>
            </li>
            <li>
              <a href="#good-reviews" className="hover:underline">
                2. ヒカカクの良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:underline">
                3. ヒカカクの悪い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#merit-demerit" className="hover:underline">
                4. メリット・デメリットまとめ
              </a>
            </li>
            <li>
              <a href="#how-to-use" className="hover:underline">
                5. ヒカカクの一括査定の使い方
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
            ヒカカク！の基本情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">
                    サービス名
                  </th>
                  <td className="px-4 py-3">ヒカカク！</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    運営会社
                  </th>
                  <td className="px-4 py-3">株式会社ジラフ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    サービス種別
                  </th>
                  <td className="px-4 py-3">買取比較・一括査定サイト</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    一括査定業者数
                  </th>
                  <td className="px-4 py-3">最大20社</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    着物関連カテゴリ
                  </th>
                  <td className="px-4 py-3">着物・振袖・帯・和装小物</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    利用料
                  </th>
                  <td className="px-4 py-3">完全無料</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    口コミ機能
                  </th>
                  <td className="px-4 py-3">あり（業者ごとの口コミ・評価を掲載）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応エリア
                  </th>
                  <td className="px-4 py-3">全国（業者による）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            ヒカカク！は、株式会社ジラフが運営する買取比較・一括査定プラットフォームです。
            ヒカカク自体が買取を行うわけではなく、登録された複数の買取業者に一括で査定依頼を出し、
            各社の見積もりを比較できるサービスです。着物・振袖カテゴリも充実しており、
            着物専門店から総合買取店まで幅広い業者が登録されています。
            各業者の口コミ・評価も掲載されているため、利用者の声を参考にしながら
            最適な業者を選ぶことができます。利用料は完全無料です。
          </p>
        </section>

        {/* 良い口コミ */}
        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ヒカカクの良い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                母の着物を売るにあたり、どの業者が良いか全く分からなかったのでヒカカクを利用しました。
                一度の申し込みで8社から見積もりが届き、最高値と最安値で3万円以上の差がありました。
                結局、最高値を出してくれた着物専門店に売りましたが、自分で8社に問い合わせるのは
                到底無理だったので、ヒカカクを使って本当に良かったです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・大阪府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                フォームに商品の情報を入力するだけで簡単に申し込めました。操作も直感的で、
                着物のカテゴリを選んで状態や枚数を入力するだけ。5分もかかりませんでした。
                翌日には複数の業者から見積もりメールが届き、スピーディーでした。
                各業者の口コミも掲載されているので、金額だけでなく対応の良さも参考にして選べます。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・愛知県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                以前、一社だけに査定を依頼して売ってしまい、後から「もっと高く売れたのでは」と
                後悔した経験があります。今回はヒカカクで複数社の見積もりを比較してから決めたので、
                納得感のある取引ができました。相場感も掴めるので、着物の買取が初めての方にもおすすめです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">30代女性・福岡県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                地方に住んでいると近くに着物買取店がないのですが、ヒカカクを使えば
                全国対応の宅配買取業者も含めて比較できます。結局、東京の着物専門店の
                宅配買取サービスが最高値だったので、そこに送りました。
                地方在住者にとってはヒカカクのようなプラットフォームは本当にありがたいです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                完全無料で利用できるのが嬉しいです。査定を依頼した後に「やっぱりやめた」と
                なっても費用は一切かかりません。見積もりを見た上ですべてお断りすることも可能です。
                リスクゼロで業者を比較できるのは、消費者にとって大きなメリットだと思います。
              </p>
            </div>
          </div>
        </section>

        {/* 悪い口コミ */}
        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ヒカカクの悪い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">40代女性・埼玉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                一括査定を申し込んだ直後から、複数の業者から電話が一斉にかかってきて困りました。
                仕事中にも何度も電話が鳴り、正直うんざりしました。
                メールだけで対応してくれる業者もありましたが、しつこく電話してくる業者もあり、
                その点はストレスでした。電話不要の設定ができるとありがたいです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">50代女性・京都府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                見積もりの金額は「概算」であり、実際に品物を見てもらうと金額が変わることがあります。
                ヒカカクで最高値を出していた業者に実際に査定してもらったところ、
                最初の概算から2割ほど下がりました。概算と実査定の差が大きい業者もあるので、
                最初の金額を鵜呑みにしないほうが良いです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">60代女性・広島県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                着物カテゴリで申し込んだものの、地方ということもあり、
                着物専門の業者からの見積もりは2社だけで、残りは総合買取店でした。
                地域によっては対応業者が少なく、比較の意味があまりない場合もあります。
                都市部にお住まいの方のほうが恩恵を受けやすいサービスだと感じました。
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
                    一度の申し込みで最大20社の見積もりが届く。自分で業者を探す手間が省ける
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    完全無料で利用でき、すべてお断りしても費用は一切かからない
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    各業者の口コミ・評価が掲載されており、金額以外の判断材料も豊富
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    着物の相場感がつかめるので、適正価格で売れているか判断できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    着物専門店から総合買取店まで幅広い業者タイプから選べる
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
                    一括査定後に複数業者から電話が一斉にかかってくることがある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    概算見積もりと実査定の金額に差が出る場合がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    地方では対応業者が少なく、比較の恩恵が薄い場合がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    ヒカカク自体が買取を行うわけではないため、最終的な取引は業者と直接行う必要がある
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 一括査定の使い方 */}
        <section id="how-to-use" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ヒカカクの一括査定の使い方
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  1
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  ヒカカクにアクセスしてカテゴリを選択
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ヒカカク！の公式サイトにアクセスし、「着物」または「振袖」のカテゴリを選択します。
                  トップページの検索窓に「着物」と入力するか、カテゴリ一覧から選ぶことができます。
                  会員登録は不要で、そのまま一括査定に進めます。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  2
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  商品情報を入力
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  着物の種類（振袖・訪問着・紬など）、点数、状態（新品同様・美品・やや使用感ありなど）を
                  入力します。写真のアップロードも可能で、写真があるとより正確な概算見積もりが届きやすくなります。
                  証紙や落款の有無、ブランド・作家名も分かる範囲で入力しましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  3
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  連絡先を入力して申し込み
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  氏名・電話番号・メールアドレス・住所（都道府県）を入力して一括査定を申し込みます。
                  電話での連絡を避けたい場合は、備考欄に「メールのみ希望」と記載しておくと良いでしょう。
                  申し込みは通常3〜5分で完了します。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  4
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  複数業者からの見積もりを比較
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  申し込み後、通常24時間以内に複数の業者からメールや電話で概算見積もりが届きます。
                  金額だけでなく、業者の口コミ・評価、対応の丁寧さ、買取方法（出張・宅配・店頭）なども
                  総合的に比較して、最も条件の良い業者を選びましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  5
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  選んだ業者に正式依頼
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  最も条件の良い業者が決まったら、その業者に直接連絡して正式に買取を依頼します。
                  出張買取・宅配買取・店頭買取のいずれかで実際の査定を受け、正式な査定額を確認。
                  概算との差があまりにも大きい場合はお断りすることも可能です。
                  他の業者への断りの連絡も忘れずに行いましょう。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">
              一括査定を上手に使うコツ
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5 shrink-0">&#9679;</span>
                <span>
                  着物の写真を複数枚撮っておくと、より正確な概算が届きやすくなります
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5 shrink-0">&#9679;</span>
                <span>
                  証紙・落款がある場合はその写真も添付すると査定額アップにつながります
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5 shrink-0">&#9679;</span>
                <span>
                  電話が苦手な方は備考欄に「メール連絡のみ希望」と記載しましょう
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5 shrink-0">&#9679;</span>
                <span>
                  概算見積もりの最高値だけでなく、口コミ評価も参考にして業者を選びましょう
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5 shrink-0">&#9679;</span>
                <span>
                  概算と実査定に差が出る可能性があるため、2〜3社に絞って実査定を受けるのがおすすめです
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 一括査定の使い方セクション */}
        <section className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-[#e8ddd0]">
            ヒカカク一括査定の使い方と注意点
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            ヒカカクの一括査定サービスの具体的な使い方と、利用前に知っておきたい注意点をまとめました。
          </p>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4 mb-4">
            <p className="text-sm font-bold text-gray-900 mb-2">使い方</p>
            <p className="text-sm text-gray-700">
              商品情報（カテゴリ・ブランド・状態など）と個人情報（氏名・連絡先）を入力して送信すると、対応可能な複数業者から連絡が届きます。届いた見積もりを比較して、最も条件の良い業者を選べます。
            </p>
          </div>

          <p className="text-sm font-bold text-gray-900 mb-2">メリット</p>
          <div className="space-y-2 mb-4">
            <div className="bg-[#f3eef7] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>完全無料</strong>で利用可能。手数料は一切かかりません。
              </p>
            </div>
            <div className="bg-[#f3eef7] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                大手買取業者よりも高い査定額を提示する<strong>中小の専門業者</strong>が見つかることもあります。
              </p>
            </div>
          </div>

          <p className="text-sm font-bold text-gray-900 mb-2">注意点</p>
          <div className="space-y-2">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>1. 複数業者から電話が来る：</strong>一括査定の性質上、複数の業者から連絡が入ります。対応が面倒な場合はメール希望と記載しましょう。
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>2. 買い手が見つからないケースもある：</strong>商品によっては対応できる業者がいない場合があります。
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>3. 着物カテゴリの登録業者数は少なめ：</strong>家電やブランド品と比べると、着物に対応している登録業者数は限られています。着物専門業者への直接依頼も併用するのがおすすめです。
              </p>
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
                  Q. ヒカカクの利用は本当に無料ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ヒカカクの利用は完全無料です。一括査定の申し込みから買取業者の比較まで、
                利用者に費用が発生することはありません。見積もりを受け取った後にすべてお断りしても
                費用は一切かかりません。ヒカカクは買取業者からの広告収入で運営されているため、
                利用者には無料でサービスを提供しています。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ヒカカクで着物の一括査定をすると、最大何社から見積もりが届きますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                ヒカカクでは最大20社から見積もりが届きます。ただし、着物のカテゴリや
                お住まいの地域によって対応業者数は異なります。
                都市部では10社以上から見積もりが届くことが多いですが、
                地方では5社前後になることもあります。業者数が少ない場合でも、
                複数社の見積もりを比較できる点は大きなメリットです。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ヒカカクで一括査定を申し込むと、すぐに業者から連絡が来ますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                一括査定を申し込むと、通常24時間以内に複数の業者からメールや電話で連絡が届きます。
                早い業者では申し込みから数時間以内に連絡が来ることもあります。
                電話での連絡を希望しない場合は、申し込み時の備考欄に「メールのみ希望」と
                記載することで電話連絡を避けられる場合があります。
                ただし、すべての業者がメール対応に応じるとは限りません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ヒカカクで査定を申し込んだ後、必ず売らなければいけませんか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                いいえ、査定を受けた後に必ず売る必要はありません。
                複数社の見積もりを比較した上で、最も条件の良い業者を選ぶことも、
                すべてお断りすることも自由です。「まずは相場を知りたい」という目的で
                一括査定を利用する方も多くいます。
                ただし、断りの連絡は各業者に直接行う必要があります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ヒカカクには着物専門の買取業者も登録されていますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ヒカカクには着物専門の買取業者も含め、さまざまなタイプの買取業者が登録されています。
                着物専門店、総合買取店、リサイクルショップ、ネット買取店など多様な業者から
                見積もりを受け取れるため、幅広い選択肢の中から最適な業者を選べます。
                業者ごとの口コミ・評価も掲載されているので、金額だけでなく対応の質も
                参考にしながら業者を選ぶことができます。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：ヒカカクは「最高値で売りたい方」の強い味方
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ヒカカク！は、一度の申し込みで最大20社の見積もりが届く買取比較サイトです。
              「どの業者に売ればいいか分からない」「最高値で着物を売りたい」という方にとって、
              効率的に業者を比較できる非常に便利なサービスです。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              完全無料で利用でき、すべてお断りしても費用がかからないため、リスクゼロで相場感を
              掴むことができます。各業者の口コミ・評価も掲載されているため、金額だけでなく
              対応の質も含めて総合的に判断できるのも大きな強みです。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              一方で、一括査定後に複数業者から電話がかかってくる点や、概算と実査定の差が出る点には
              注意が必要です。電話が苦手な方は備考欄にメール希望と記載し、
              概算見積もりはあくまで参考程度に捉えましょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              着物を少しでも高く売りたい方は、ヒカカクでまず相場を確認してから、
              気になる業者に正式な査定を依頼するという流れがおすすめです。
            </p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ヒカカクを利用する際の注意点
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">
                概算と実査定の差に注意
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ヒカカクで届く見積もりはあくまで概算です。実際に着物を見てもらうと金額が上下することがあります。
                概算が高い業者が必ずしも実査定でも高いとは限らないため、概算上位2〜3社に実査定を依頼して
                比較することをおすすめします。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">
                電話営業への対処法
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                一括査定後に複数業者から電話がかかってくることがあります。対処法としては、
                申し込み時の備考欄に「メール連絡のみ希望」と記載すること、不要な業者には早めに
                お断りの連絡を入れることが効果的です。断る際は「他社に決めました」と
                はっきり伝えれば、それ以上の連絡は通常ありません。
              </p>
            </div>
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
              href="/reviews/reclo/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                RECLO（リクロ）の着物買取｜口コミ・評判
              </p>
            </Link>
            <Link
              href="/reviews/daikichi/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                買取大吉の着物買取｜口コミ・評判
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}