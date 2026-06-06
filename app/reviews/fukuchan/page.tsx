import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "福ちゃんの着物買取｜口コミ・評判・買取実績を徹底検証",
  description:
    "福ちゃんの着物買取サービスを徹底検証。累計買取実績800万点超、着物買取に特化した専門査定員、買取価格の相場、良い口コミ・悪い口コミを正直にレビュー。振袖・訪問着・帯・作家物の買取を検討中の方必見。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/fukuchan/",
  },
  openGraph: {
    title: "福ちゃんの着物買取｜口コミ・評判・買取実績を徹底検証",
    description:
      "福ちゃんの着物買取サービスを徹底検証。着物専門査定員の質と口コミ・評判を正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/fukuchan/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "福ちゃんの着物買取｜口コミ・評判・買取実績を徹底検証",
  description:
    "福ちゃんの着物買取サービスを徹底検証。着物専門査定員の質と口コミ・評判を正直にレビュー。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimonokaitori-biyori.com/reviews/fukuchan/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "福ちゃんの着物買取は無料で利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、福ちゃんでは査定料・出張料・送料・キャンセル料すべて無料です。査定額に納得できなければ無料でお断りでき、費用は一切かかりません。",
      },
    },
    {
      "@type": "Question",
      name: "福ちゃんは着物のシミや汚れがあっても買取してくれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、シミ・汚れ・虫食いがある着物でも査定してもらえます。福ちゃんは独自のクリーニング・修復技術を持っているため、他社で断られた着物でも値段がつく可能性があります。ただし、状態が著しく悪い場合は買取不可となることもあります。",
      },
    },
    {
      "@type": "Question",
      name: "福ちゃんのWEB査定とはどのようなサービスですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "福ちゃんのWEB査定は、着物の写真をスマートフォンで撮影し、LINEまたは専用フォームから送信するだけで概算の査定額がわかるサービスです。自宅にいながら気軽に査定額の目安を確認でき、24時間いつでも申し込み可能です。",
      },
    },
    {
      "@type": "Question",
      name: "福ちゃんの着物買取の対応エリアはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "福ちゃんの出張買取は全国対応しています。北海道から沖縄まで出張費無料で対応しており、地方のお客様も安心して利用できます。宅配買取であれば全国どこからでも送料無料で利用可能です。",
      },
    },
    {
      "@type": "Question",
      name: "福ちゃんで着物を売る際に必要なものは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本人確認書類（運転免許証、マイナンバーカード、パスポートなど）が必要です。着物の証紙や落款がある場合は一緒に提示すると査定額がアップする可能性があります。購入時の箱やたとう紙があればなお良いでしょう。",
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
      name: "福ちゃん",
      item: "https://kimonokaitori-biyori.com/reviews/fukuchan/",
    },
  ],
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "福ちゃん",
  "description": "福ちゃんは累計買取実績800万点超、着物買取に特化した専門査定員が在籍する着物買取サービスです。",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.9",
    "reviewCount": "380",
    "bestRating": "5",
  },
};

export default function FukuchanReviewPage() {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />

      <Breadcrumb
        items={[
          { label: "業者レビュー", href: "/reviews/" },
          { label: "福ちゃん" },
        ]}
      />

      <SoubaNote />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              着物専門力が高い
            </span>
            <time dateTime="2026-05-17" className="text-xs text-gray-500">
              2026年5月17日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            福ちゃんの着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">口コミ・評判・買取実績</span>
            を徹底検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            福ちゃんは、株式会社REGATEが運営する買取サービスで、特に着物買取に強みを持つことで知られています。累計買取実績800万点を超え、着物専門の査定員による丁寧な査定が高く評価されています。本記事では、実際の利用者の口コミや評判をもとに、福ちゃんの着物買取サービスを徹底検証します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. 福ちゃんの基本情報・会社概要
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                2. サービスの特徴
              </a>
            </li>
            <li>
              <a href="#items" className="hover:underline">
                3. 買取対応品目
              </a>
            </li>
            <li>
              <a href="#market-price" className="hover:underline">
                4. 買取実績・相場
              </a>
            </li>
            <li>
              <a href="#good-reviews" className="hover:underline">
                5. 良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:underline">
                6. 悪い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#merit-demerit" className="hover:underline">
                7. メリット・デメリットまとめ
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:underline">
                8. こんな人におすすめ
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                9. 申し込み方法・買取の流れ
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                10. 他社との比較表
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                11. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* 基本情報 */}
        <section id="overview" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            福ちゃんの基本情報・会社概要
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">
                    運営会社
                  </th>
                  <td className="px-4 py-3">株式会社REGATE</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    設立
                  </th>
                  <td className="px-4 py-3">2014年3月</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    本社所在地
                  </th>
                  <td className="px-4 py-3">大阪府大阪市中央区島之内1-21-19 オリエンタル堺筋ビル7F</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    累計買取実績
                  </th>
                  <td className="px-4 py-3">800万点以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    買取方法
                  </th>
                  <td className="px-4 py-3">出張買取・宅配買取・店頭買取</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応エリア
                  </th>
                  <td className="px-4 py-3">全国対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    手数料
                  </th>
                  <td className="px-4 py-3">
                    査定料・出張料・送料・キャンセル料すべて無料
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    入金方法
                  </th>
                  <td className="px-4 py-3">
                    出張・店頭はその場で現金、宅配は銀行振込（1〜5営業日）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            福ちゃんは、2014年に設立された株式会社REGATEが運営する総合買取サービスです。着物・ブランド品・貴金属・切手・古銭などの買取を行っていますが、特に着物買取に注力しており、着物の専門知識を持つ査定員が多数在籍しています。テレビCMでも知られ、タレントの鈴木福さんを起用した広告でも有名です。大阪に本社を構え、東京・名古屋・福岡にも拠点を持っています。
          </p>
        </section>

        {/* サービスの特徴 */}
        <section id="features" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            サービスの特徴
          </h2>
          <div className="space-y-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                1. 着物専門の査定員が多数在籍
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                福ちゃんの最大の特徴は、着物専門の査定員が在籍していることです。着物の産地・技法・作家に精通した査定員が、証紙や落款の確認はもちろん、生地の質感や染色技法まで細かく確認して適正価格を算出します。総合買取店にありがちな「まとめていくら」ではなく、一点一点の価値を見極めた査定が期待できます。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                2. WEB査定・LINE査定で事前に概算がわかる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                福ちゃんでは、着物の写真をスマートフォンで撮影し、LINEまたは専用フォームから送信するだけで概算の査定額がわかるWEB査定サービスを提供しています。出張査定を依頼する前に査定額の目安がわかるため、売るかどうかの判断がしやすくなります。24時間いつでも申し込み可能です。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                3. シミ・汚れがある着物でも買取対応
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                福ちゃんは独自のクリーニング・修復技術を持っているため、シミ・汚れ・虫食いがある着物でも買取対応しています。他社で「値段がつかない」と断られた着物でも、福ちゃんなら値段がつく可能性があります。古い着物や保管状態が良くない着物をお持ちの方にとって心強い存在です。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                4. 作家物・ブランド着物に強い
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                福ちゃんは人間国宝の作品や有名作家物の着物の買取に特に力を入れています。久保田一竹、由水十久、羽田登喜男、木村雨山などの作家物を適正価格で評価できる査定力があり、希少価値の高い着物をお持ちの方におすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* 買取対応品目 */}
        <section id="items" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取対応品目
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">着物</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>振袖（成人式用・未使用品含む）</li>
                <li>訪問着・付け下げ</li>
                <li>留袖（黒留袖・色留袖）</li>
                <li>小紋・紬（大島紬・結城紬等）</li>
                <li>色無地・江戸小紋</li>
                <li>作家物（人間国宝・有名作家）</li>
                <li>アンティーク着物・ヴィンテージ着物</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">帯・和装小物</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>袋帯・名古屋帯・半幅帯</li>
                <li>帯締め・帯揚げ</li>
                <li>草履・バッグ</li>
                <li>かんざし・帯留め</li>
                <li>和装コート・羽織</li>
                <li>反物・仕立て前の着物</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            福ちゃんは正絹の着物を中心に幅広く買取を行っています。ウールやポリエステルの着物は基本的に買取対象外ですが、正絹の着物と合わせて出すことで引き取り可能な場合もあります。着物以外にもブランド品・貴金属・古銭・切手なども買取対象です。
          </p>
        </section>

        {/* 買取実績・相場 */}
        <section id="market-price" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取実績・相場
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left">着物の種類</th>
                  <th className="px-4 py-3 text-left">買取相場（税込）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3">振袖（正絹・状態良好）</td>
                  <td className="px-4 py-3">10,000〜120,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3">訪問着（作家物・証紙付き）</td>
                  <td className="px-4 py-3">15,000〜250,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3">大島紬（証紙付き）</td>
                  <td className="px-4 py-3">20,000〜300,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3">結城紬（証紙付き）</td>
                  <td className="px-4 py-3">25,000〜350,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3">留袖（正絹・黒留袖）</td>
                  <td className="px-4 py-3">5,000〜60,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3">袋帯（正絹・西陣織等）</td>
                  <td className="px-4 py-3">5,000〜100,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3">人間国宝の作品</td>
                  <td className="px-4 py-3">50,000〜1,000,000円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※上記はあくまで参考相場です。実際の買取価格は着物の状態、産地、作家、証紙の有無、市場動向により変動します。
          </p>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-800">
              【景品表示法に基づく表記】当サイトに掲載されている買取相場は、過去の買取実績や業者公表データに基づく参考値であり、実際の買取価格を保証するものではありません。買取価格は査定時点の市場状況や商品状態により変動します。
            </p>
          </div>
        </section>

        {/* 良い口コミ */}
        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            良い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・大阪府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                亡くなった母の着物を50枚以上査定してもらいました。査定員の方が着物にとても詳しく、産地や技法について丁寧に説明してくれました。加賀友禅の訪問着と大島紬に特に高い値段がつき、合計で32万円になりました。他社の査定額より5万円以上高かったです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                LINE査定で事前に概算額を確認してから出張買取を依頼しました。実際の査定額はLINE査定より少し高くなり、嬉しい結果でした。査定員の方が女性だったので、自宅に来てもらうことへの不安もありませんでした。丁寧で安心できるサービスです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・愛知県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                他社で「シミがあるので値段がつかない」と言われた訪問着を福ちゃんに持っていったところ、3万円の値段がつきました。シミがあっても買い取ってもらえるのは本当にありがたいです。着物の価値をしっかり見てくれる業者だと感じました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">70代女性・京都府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                久保田一竹の辻が花染めの着物を査定してもらいました。作家物の知識がある査定員だったので、作品の価値をきちんと理解した上で査定してくれました。提示額は45万円で、専門店ならではの適正な評価だと感じました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">30代女性・福岡県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                祖母から譲り受けた着物20枚を出張買取で売りました。一枚一枚丁寧に見てくれて、どの着物にどれくらいの価値があるか説明してくれたのが良かったです。合計で10万円ほどになり、着物の勉強にもなりました。
              </p>
            </div>
          </div>
        </section>

        {/* 悪い口コミ */}
        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            悪い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">50代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                出張買取の予約が取りにくく、希望日から1週間以上先になりました。人気がある分、予約が混み合っているようです。急ぎで売りたい場合はバイセルの方がスピーディーかもしれません。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">40代女性・北海道</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                宅配買取を利用しましたが、査定結果の連絡まで10日ほどかかりました。丁寧に査定してくれている証拠かもしれませんが、もう少し早く結果が知りたかったです。査定額自体には満足しています。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">60代女性・埼玉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                ポリエステルの着物は買取不可と言われました。正絹のみが対象とのことで、化繊の着物が多かった私には選択肢が限られました。正絹の着物についての査定は丁寧で良かったのですが。
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
                  <span>着物専門の査定員による正確な査定が受けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>LINE・WEB査定で事前に概算額を確認できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>シミ・汚れがある着物でも買取対応してくれる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>作家物・人間国宝の作品の査定力が高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>査定料・出張料・キャンセル料すべて無料</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm">
                  x
                </span>
                デメリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>出張買取の予約が取りにくい時期がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>宅配買取の査定結果通知に時間がかかる場合がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>ウール・ポリエステルの着物は買取対象外</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>店頭買取の拠点が限られている</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* こんな人におすすめ */}
        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            こんな人におすすめ
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <span className="font-bold text-gray-900">作家物や高級着物を適正価格で売りたい方</span>
                  <p className="mt-1 text-gray-600">着物専門の査定員が在籍しているため、作家物の価値を正確に評価してもらえます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <span className="font-bold text-gray-900">事前に査定額の目安を知りたい方</span>
                  <p className="mt-1 text-gray-600">LINE・WEB査定で概算額を確認してから出張査定を依頼できます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <span className="font-bold text-gray-900">シミや汚れがある着物を売りたい方</span>
                  <p className="mt-1 text-gray-600">独自のクリーニング技術があるため、状態の悪い着物でも値段がつく可能性があります。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">4</span>
                <div>
                  <span className="font-bold text-gray-900">一点一点丁寧に査定してほしい方</span>
                  <p className="mt-1 text-gray-600">着物の産地や技法について詳しく説明してくれるため、納得感のある取引ができます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">5</span>
                <div>
                  <span className="font-bold text-gray-900">女性の査定員を希望する方</span>
                  <p className="mt-1 text-gray-600">福ちゃんでは女性の査定員の指名が可能です。一人暮らしの女性でも安心して出張買取を利用できます。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 申し込み方法・流れ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            申し込み方法・買取の流れ
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">1</span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">お問い合わせ・申し込み</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  電話、Webフォーム、LINEのいずれかで申し込み。出張買取の場合は訪問日時を予約します。事前にLINE査定で概算額を確認してからの依頼も可能です。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">2</span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">査定</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  着物専門の査定員が、着物の状態・産地・技法・証紙・落款を確認し、一点一点丁寧に査定します。査定にかかる時間は点数によりますが、10点程度で1時間前後が目安です。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">3</span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">査定額の提示・成約</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に納得すれば、本人確認書類を提示して契約。出張・店頭買取の場合はその場で現金を受け取れます。宅配買取は指定口座に振込されます。キャンセル料は無料です。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">クーリングオフ期間</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  出張買取の場合は特定商取引法に基づき、契約日から8日間のクーリングオフが適用されます。期間内であれば無条件で契約解除が可能です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 他社との比較表 */}
        <section id="comparison" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            他社との比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-3 py-3 text-left">項目</th>
                  <th className="px-3 py-3 text-center">福ちゃん</th>
                  <th className="px-3 py-3 text-center">バイセル</th>
                  <th className="px-3 py-3 text-center">ザ・ゴールド</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">着物専門性</td>
                  <td className="px-3 py-3 text-center">高い</td>
                  <td className="px-3 py-3 text-center">中〜高</td>
                  <td className="px-3 py-3 text-center">高い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">LINE査定</td>
                  <td className="px-3 py-3 text-center">対応</td>
                  <td className="px-3 py-3 text-center">対応</td>
                  <td className="px-3 py-3 text-center">対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">出張スピード</td>
                  <td className="px-3 py-3 text-center">数日〜1週間</td>
                  <td className="px-3 py-3 text-center">最短即日</td>
                  <td className="px-3 py-3 text-center">要予約</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">シミ汚れ品</td>
                  <td className="px-3 py-3 text-center">買取可</td>
                  <td className="px-3 py-3 text-center">査定可</td>
                  <td className="px-3 py-3 text-center">査定可</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">手数料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">女性査定員指名</td>
                  <td className="px-3 py-3 text-center">可能</td>
                  <td className="px-3 py-3 text-center">可能</td>
                  <td className="px-3 py-3 text-center">要相談</td>
                </tr>
              </tbody>
            </table>
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
                <span className="font-medium text-gray-900 text-sm pr-4">Q. 福ちゃんの着物買取は無料で利用できますか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. はい、福ちゃんでは査定料・出張料・送料・キャンセル料すべて無料です。査定額に納得できなければ無料でお断りでき、費用は一切かかりません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. シミや汚れがある着物でも買取してくれますか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. はい、シミ・汚れ・虫食いがある着物でも査定してもらえます。福ちゃんは独自のクリーニング・修復技術を持っているため、他社で断られた着物でも値段がつく可能性があります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. WEB査定・LINE査定とはどのようなサービスですか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. 着物の写真をスマートフォンで撮影し、LINEまたは専用フォームから送信するだけで概算の査定額がわかるサービスです。24時間いつでも申し込み可能で、自宅にいながら気軽に査定額の目安を確認できます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. 福ちゃんの着物買取の対応エリアはどこですか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. 福ちゃんの出張買取は全国対応しています。北海道から沖縄まで出張費無料で対応しており、宅配買取も全国どこからでも送料無料で利用可能です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. 着物を売る際に必要なものは何ですか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. 本人確認書類（運転免許証、マイナンバーカード、パスポートなど）が必要です。着物の証紙や落款がある場合は一緒に提示すると査定額アップの可能性があります。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：福ちゃんは着物専門力の高さが魅力
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              福ちゃんは、着物専門の査定員が在籍し、作家物やブランド着物の査定力に定評がある買取サービスです。LINE・WEB査定による事前確認、シミ・汚れがある着物の買取対応、女性査定員の指名が可能な点など、利用者目線のサービスが充実しています。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              一方で、出張買取の予約が取りにくい時期がある点や、宅配買取の査定に時間がかかる場合がある点は留意が必要です。急ぎの場合はバイセルとの併用も検討しましょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              「作家物や高級着物を適正に評価してほしい」「事前に査定額の目安を知りたい」「シミがある着物も売りたい」という方には、福ちゃんは最適な選択肢の一つです。
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
              href="/reviews/buysell/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">レビュー</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                バイセルの着物買取｜口コミ・評判
              </p>
            </Link>
            <Link
              href="/articles/buysell-vs-fukuchan/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#6b4c8a] font-medium">比較</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                バイセル vs 福ちゃん 徹底比較
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#6b4c8a] font-medium">ランキング</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物買取おすすめ業者ランキング
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
