import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ウリエルの着物買取｜出張買取の評判・口コミを検証",
  description:
    "ウリエルの着物買取サービスを徹底検証。出張買取専門で無店舗のコスト削減を高額査定に還元。関東〜関西・岡山対応エリア、クーリングオフ8日間、即現金払いの実力を口コミとともにレビュー。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/uriel/",
  },
  openGraph: {
    title: "ウリエルの着物買取｜出張買取の評判・口コミを検証",
    description:
      "ウリエルの出張買取専門の着物買取サービスを徹底検証。口コミ・評判・買取実績を正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/uriel/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ウリエルの着物買取｜出張買取の評判・口コミを検証",
  description:
    "ウリエルの着物買取サービスを徹底検証。出張買取専門で無店舗のコスト削減を高額査定に還元。口コミ・評判を正直にレビュー。",
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
    "@id": "https://kimonokaitori-biyori.com/reviews/uriel/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ウリエルの出張買取は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ウリエルの出張買取は査定料・出張料・キャンセル料すべて無料です。査定の結果、金額に納得できなければ無料でお断りできます。",
      },
    },
    {
      "@type": "Question",
      name: "ウリエルの出張買取の対応エリアはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ウリエルは関東（東京・神奈川・千葉・埼玉など）、関西（大阪・京都・兵庫など）、岡山エリアに対応しています。エリアは順次拡大中です。",
      },
    },
    {
      "@type": "Question",
      name: "ウリエルで女性の査定員を指名できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ウリエルでは女性の査定員を指名することが可能です。一人暮らしの女性や高齢の方でも安心して出張買取を利用できます。予約時にお申し出ください。",
      },
    },
    {
      "@type": "Question",
      name: "ウリエルのクーリングオフ制度について教えてください",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ウリエルの出張買取では、特定商取引法に基づくクーリングオフ制度が適用されます。契約日を含めて8日間以内であれば、無条件で契約を解除し、品物を返却してもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "ウリエルでは着物以外のものも一緒に査定してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ウリエルでは着物と一緒にブランド品、貴金属、骨董品、切手、お酒など幅広い品物をまとめて査定してもらえます。まとめ売りで査定額がアップするキャンペーンを行っていることもあります。",
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
      name: "ウリエル",
      item: "https://kimonokaitori-biyori.com/reviews/uriel/",
    },
  ],
};

export default function UrielReviewPage() {
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
          { label: "ウリエル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              出張買取特化
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ウリエルの着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">出張買取の評判・口コミ</span>
            を検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            ウリエルは出張買取に特化した買取サービスです。実店舗を持たないことで運営コストを抑え、
            その分を買取価格に還元するビジネスモデルが特徴。関東〜関西・岡山エリアに対応し、
            即現金払い・クーリングオフ8日間など安心の体制を整えています。
            本記事では、実際の利用者の口コミをもとにウリエルの実力を検証します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. ウリエルの基本情報
              </a>
            </li>
            <li>
              <a href="#good-reviews" className="hover:underline">
                2. ウリエルの良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:underline">
                3. ウリエルの悪い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#merit-demerit" className="hover:underline">
                4. メリット・デメリットまとめ
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. ウリエルの出張買取の流れ
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
            ウリエルの基本情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">
                    運営会社
                  </th>
                  <td className="px-4 py-3">株式会社ウリエル</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    買取方法
                  </th>
                  <td className="px-4 py-3">出張買取（メイン）・宅配買取・店頭買取（一部）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応エリア
                  </th>
                  <td className="px-4 py-3">関東・関西・岡山（順次拡大中）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応品目
                  </th>
                  <td className="px-4 py-3">
                    振袖、訪問着、留袖、小紋、紬、帯、和装小物、反物
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    特徴
                  </th>
                  <td className="px-4 py-3">無店舗でコスト削減→高額査定に還元</td>
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
                  <td className="px-4 py-3">出張時はその場で現金払い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    クーリングオフ
                  </th>
                  <td className="px-4 py-3">8日間対応</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            ウリエルは出張買取に特化した買取サービスで、実店舗を持たないビジネスモデルにより
            店舗運営にかかるコストを大幅に削減しています。その分を買取価格に上乗せすることで、
            他社よりも高額査定を実現しているのが最大の特徴です。着物の査定では、産地・技法・作家・状態を
            総合的に判断し、適正な価格を提示してくれます。女性査定員の指名も可能で、
            一人暮らしの方でも安心して利用できる配慮がなされています。
          </p>
        </section>

        {/* 良い口コミ */}
        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ウリエルの良い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                他社で5万円と査定された振袖が、ウリエルでは8万円の査定額でした。
                「店舗がない分、買取価格に還元しています」との説明に納得。
                査定員の方も着物の知識が豊富で、加賀友禅の特徴を丁寧に説明してくれました。
                出張買取でここまで高い金額を出してもらえるとは思っていなかったので大満足です。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                一人暮らしなので出張買取に少し不安がありましたが、女性の査定員さんを指名できたので
                安心して利用できました。とても丁寧で感じの良い方で、着物の思い出話にも
                耳を傾けてくれました。査定額も満足のいく金額で、その場で現金をいただけたのが良かったです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・大阪府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                母の遺品整理で着物20枚以上と帯10本を査定してもらいました。
                全部で15万円ほどの買取額で、着物をよく知らない私でも丁寧に説明してもらえたので
                安心して売ることができました。クーリングオフが8日間あるのも心強かったです。
                結局クーリングオフは使いませんでしたが、あるだけで安心感が違います。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・京都府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                電話での問い合わせから訪問まで、終始丁寧な対応でした。予約した時間ぴったりに
                来てくれたのも好印象。着物だけでなく、帯締め・帯揚げ・草履などの小物類も
                まとめて買い取ってもらえました。「小物もセットのほうが査定が上がりますよ」と
                アドバイスをくれたのも助かりました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">30代女性・埼玉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                着物以外にブランドバッグや貴金属もまとめて査定してもらいました。
                「まとめて査定で10%アップ」のキャンペーン中だったこともあり、
                トータルで思った以上の金額になりました。一度の訪問で全部済むので手間もかかりません。
              </p>
            </div>
          </div>
        </section>

        {/* 悪い口コミ */}
        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ウリエルの悪い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">40代女性・千葉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                対応エリアが限られているのが残念です。実家のある地方で利用しようとしたところ
                対応エリア外と言われてしまいました。都市部に住んでいる方には良いサービスだと思いますが、
                地方在住の方には使いにくいです。宅配買取もありますが、やはり出張で見てもらいたかったです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">50代女性・兵庫県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                予約が取りにくい時期がありました。土日を希望したところ、2週間先まで埋まっていると言われ、
                平日に変更しました。人気があるのは分かりますが、もう少し査定員の数を増やしてほしいです。
                査定自体は丁寧で金額にも満足しましたが、待たされたのは少し不便でした。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">60代女性・岡山県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                普段着の着物（ウール、化繊）は買取不可と言われてしまいました。
                正絹の着物が中心とのことで、すべての着物を売れるわけではないようです。
                総合リサイクル店なら引き取ってもらえることもあるので、
                着物の素材によっては他のサービスを検討したほうが良いかもしれません。
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
                    無店舗でコスト削減しているため、他社より高額査定になりやすい
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    女性査定員の指名が可能で、一人暮らしの方でも安心
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    出張買取でその場で即現金払い。振込を待つ必要がない
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    クーリングオフ8日間で安心。売った後でも取り消せる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    着物以外の品物もまとめて査定でき、まとめ売りで査定額アップも
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
                    対応エリアが関東・関西・岡山に限られ、地方では利用しにくい
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    土日の予約が取りにくい場合がある（特に繁忙期）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    ウール・化繊など正絹以外の着物は買取不可の場合がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    実店舗がないため、自分の都合で気軽に持ち込むことができない
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 出張買取の流れ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ウリエルの出張買取の流れ
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
                  電話・Webで申し込み
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  電話またはWebフォームから出張買取を申し込みます。売りたい着物の種類や点数、
                  希望の訪問日時を伝えます。この時点で女性査定員の指名も可能です。
                  スタッフが対応エリアを確認し、最短で翌日の訪問予約が取れます。
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
                  査定員が自宅を訪問
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  予約日時に査定員が自宅を訪問します。玄関先での対応も可能です。
                  着物を一点一点確認し、産地・技法・状態・市場相場を総合的に判断して査定します。
                  査定にかかる時間は10〜20点で30分〜1時間が目安です。
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
                  査定額の提示・交渉
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額が提示されます。各着物の査定根拠を詳しく説明してもらえます。
                  金額に納得できない場合は一部だけ売る、または全てキャンセルすることも可能。
                  キャンセル料は一切かかりません。
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
                  契約・即現金払い
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に同意したら、本人確認書類を提示して契約書にサイン。
                  その場で現金を受け取れます。契約書の控えも渡されます。
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
                  クーリングオフ期間（8日間）
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  出張買取では特定商取引法に基づき、契約日を含めて8日間のクーリングオフが適用されます。
                  期間内であれば理由を問わず契約を解除し、着物を返却してもらえます。
                  ウリエルではクーリングオフの説明も丁寧に行ってくれるため安心です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* こんな人におすすめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ウリエルはこんな人におすすめ
          </h2>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#c9a76c] text-white text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    できるだけ高く着物を売りたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    無店舗でコストを抑えている分、買取価格に還元されるため、
                    他社と比べて高額査定になりやすいのがウリエルの最大の強みです。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#c9a76c] text-white text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    自宅まで来てほしい方・重い着物を運べない方
                  </span>
                  <p className="mt-1 text-gray-600">
                    出張買取専門のため、自宅にいながら査定から現金受取まで完結します。
                    大量の着物がある場合や高齢の方に特におすすめです。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#c9a76c] text-white text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    女性査定員に来てほしい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    女性査定員の指名が可能なので、一人暮らしの女性やご高齢の方でも
                    安心して出張買取を利用できます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#c9a76c] text-white text-xs shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    即日で現金を受け取りたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    出張買取ではその場で即現金払い。銀行振込を待つ必要がなく、
                    急ぎで現金化したい場合にも対応できます。
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
                  Q. ウリエルの出張買取は本当に無料ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ウリエルの出張買取は査定料・出張料・キャンセル料すべて無料です。
                査定の結果、金額に納得できなければその場で無料でお断りできます。
                後から追加の費用を請求されることもありません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ウリエルの出張買取の対応エリアはどこですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                ウリエルは関東（東京・神奈川・千葉・埼玉・茨城・栃木・群馬）、
                関西（大阪・京都・兵庫・奈良・滋賀・和歌山）、岡山エリアに対応しています。
                エリアは順次拡大中で、対応エリア外の方は宅配買取を利用することも可能です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ウリエルで女性の査定員を指名できますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ウリエルでは女性の査定員を指名することが可能です。
                予約時に「女性査定員を希望」とお伝えください。一人暮らしの女性や高齢の方でも
                安心して出張買取を利用できるよう配慮されています。
                ただし、エリアや日程によっては対応できない場合もあるため、早めの予約をおすすめします。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ウリエルのクーリングオフ制度について教えてください
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                ウリエルの出張買取では、特定商取引法に基づくクーリングオフ制度が適用されます。
                契約日を含めて8日間以内であれば、理由を問わず無条件で契約を解除し、
                品物を返却してもらえます。返却にかかる送料もウリエルが負担します。
                契約時にクーリングオフに関する書面も交付されます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ウリエルでは着物以外のものも一緒に査定してもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ウリエルでは着物と一緒にブランド品、貴金属、骨董品、切手、お酒など
                幅広い品物をまとめて査定してもらえます。出張買取の際に一度にすべて査定してもらえるため、
                手間が省けます。まとめ売りで査定額がアップするキャンペーンを実施していることもあるので、
                公式サイトで最新情報を確認するのがおすすめです。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：ウリエルは高額査定を求める方におすすめ
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ウリエルは、出張買取に特化し無店舗でコストを削減することで、高額査定を実現している買取サービスです。
              女性査定員の指名が可能で、クーリングオフ8日間、即現金払いなど、利用者に寄り添ったサービス設計が魅力です。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              一方で、対応エリアが関東・関西・岡山に限られている点や、正絹以外の着物は買取不可の場合がある点には
              注意が必要です。対応エリア内にお住まいで、正絹の着物をできるだけ高く売りたい方には
              特におすすめできるサービスです。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              まずは電話やWebで気軽に問い合わせてみてはいかがでしょうか。
              査定料・キャンセル料は無料なので、他社と比較するための一つの選択肢として
              利用する価値は十分にあります。
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
              href="/reviews/tifana/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                ティファナの着物買取｜口コミ・評判
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}