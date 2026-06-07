import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "バイセルの着物買取｜口コミ・評判・買取実績を徹底検証",
  description:
    "バイセル（BUYSELL）の着物買取サービスを徹底検証。累計買取実績3,700万点超、月間20,000件の出張買取対応、査定員の質、買取価格の相場、良い口コミ・悪い口コミを正直にレビュー。振袖・訪問着・帯・小物の買取を検討中の方必見。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/buysell/",
  },
  openGraph: {
    title: "バイセルの着物買取｜口コミ・評判・買取実績を徹底検証",
    description:
      "バイセルの着物買取サービスを徹底検証。累計買取実績3,700万点超の実力と口コミ・評判を正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/buysell/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "バイセルの着物買取｜口コミ・評判・買取実績を徹底検証",
  description:
    "バイセルの着物買取サービスを徹底検証。累計買取実績3,700万点超の実力と口コミ・評判を正直にレビュー。",
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
    "@id": "https://kimonokaitori-biyori.com/reviews/buysell/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "バイセルの着物買取は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、バイセルでは査定料・出張料・送料・キャンセル料すべて無料です。査定だけの利用も可能で、金額に納得できなければ無料でお断りできます。",
      },
    },
    {
      "@type": "Question",
      name: "バイセルではどのような着物が買取対象ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "振袖、訪問着、留袖、付け下げ、小紋、紬、色無地、帯、和装小物（帯締め・帯揚げ・草履・バッグ等）が買取対象です。シミや汚れがあるものでも査定可能です。ただし、ウールや化学繊維の着物は買取対象外となる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "バイセルの出張買取は最短でいつ来てもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "バイセルの出張買取は最短で当日の対応が可能です。地域や予約状況によりますが、電話申し込みの場合は即日〜翌日の訪問が可能なケースが多いです。",
      },
    },
    {
      "@type": "Question",
      name: "バイセルの査定後にクーリングオフはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、出張買取の場合は特定商取引法に基づき、契約日から8日間のクーリングオフが適用されます。バイセルでは契約後にフォローコールも実施しており、不安があればそこでキャンセルも可能です。",
      },
    },
    {
      "@type": "Question",
      name: "バイセルと福ちゃんはどちらが高く買い取ってくれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "買取額は着物の種類・状態・時期によって異なるため一概には言えません。バイセルは出張買取のスピードと実績、福ちゃんは着物専門の査定力に定評があります。最も高く売るには両社に査定を依頼して比較することをおすすめします。",
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
      name: "バイセル",
      item: "https://kimonokaitori-biyori.com/reviews/buysell/",
    },
  ],
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "バイセル",
  "description": "バイセル（BUYSELL）は累計買取実績3,700万点超、月間20,000件の出張買取に対応する着物買取サービスです。",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.4",
    "reviewCount": "1057",
    "bestRating": "5",
  },
};

export default function BuysellReviewPage() {
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
          { label: "バイセル" },
        ]}
      />

      <SoubaNote />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/buysell.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              出張買取No.1
            </span>
            <time dateTime="2026-05-17" className="text-xs text-gray-500">
              2026年5月17日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            バイセルの着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">口コミ・評判・買取実績</span>
            を徹底検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            バイセル（BUYSELL）は、東証グロース上場企業の株式会社BuySell
            Technologiesが運営する大手買取サービスです。累計買取実績3,700万点を超え、着物買取においても業界トップクラスのシェアを誇ります。本記事では、実際の利用者の口コミや評判をもとに、バイセルの着物買取サービスを徹底検証します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. バイセルの基本情報・会社概要
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                2. バイセルのサービスの特徴
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
                5. バイセルの良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:underline">
                6. バイセルの悪い口コミ・評判
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
            バイセルの基本情報・会社概要
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">
                    運営会社
                  </th>
                  <td className="px-4 py-3">
                    株式会社BuySell Technologies（東証グロース上場・証券コード7685）
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    設立
                  </th>
                  <td className="px-4 py-3">2001年1月</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    本社所在地
                  </th>
                  <td className="px-4 py-3">東京都新宿区四谷4-28-8 PALTビル</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    累計買取実績
                  </th>
                  <td className="px-4 py-3">3,700万点以上</td>
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
                  <td className="px-4 py-3">全国対応（出張買取は47都道府県対応）</td>
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
                    出張・店頭はその場で現金、宅配は銀行振込（最短2営業日）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            バイセルは、2001年に設立された株式会社BuySell
            Technologiesが運営する総合買取サービスです。2019年に東証マザーズ（現グロース）に上場し、現在は着物・ブランド品・貴金属・切手・古銭など幅広いジャンルの買取を行っています。特に出張買取に強みを持ち、月間20,000件以上の出張買取実績を誇ります。上場企業が運営する安心感と、全国47都道府県をカバーする出張買取ネットワークが最大の特徴です。
          </p>
        </section>

        {/* サービスの特徴 */}
        <section id="features" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            バイセルのサービスの特徴
          </h2>
          <div className="space-y-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                1. 出張買取のスピード対応
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                バイセル最大の強みは出張買取のスピードです。電話申し込みから最短即日での訪問が可能で、全国47都道府県に対応。月間20,000件以上の出張買取を行っており、北海道から沖縄まで幅広くカバーしています。予約状況によっては翌日の訪問も可能です。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                2. 上場企業の信頼性とコンプライアンス体制
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                東証グロース上場企業として、コンプライアンス体制が整備されています。査定員の対応品質を管理するため、買取後にコールセンターからフォローコールを実施。決裁についても査定員個人の判断ではなく、本部との連携で適正価格を算出する仕組みを採用しています。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                3. 独自の販路による高価買取
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                バイセルは自社オークションや海外販路など独自の再販ルートを持っており、国内外の需要に合わせた適正価格での買取が可能です。特に海外では日本の着物の需要が高く、国内だけでは値段がつきにくい着物でも買取できるケースがあります。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                4. 手厚いアフターフォロー
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                買取成立後にフォローコールを実施し、査定員の対応に問題がなかったか、説明が十分だったかを確認しています。万が一不満があればその場で対応してもらえるため、安心して利用できます。クーリングオフにも誠実に対応しています。
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
                <li>小紋・紬（大島紬・結城紬・牛首紬等）</li>
                <li>色無地・江戸小紋</li>
                <li>作家物（人間国宝・有名作家）</li>
                <li>アンティーク着物</li>
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
                <li>反物</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            バイセルでは正絹の着物を中心に買取を行っています。ウールや化学繊維（ポリエステル）の着物は、単体では買取対象外となることが多いですが、正絹の着物と一緒であれば引き取ってもらえる場合があります。また、着物以外のブランド品や貴金属もまとめて査定可能なので、遺品整理や引っ越しの際に便利です。
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
                  <td className="px-4 py-3">10,000〜100,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3">訪問着（正絹・作家物）</td>
                  <td className="px-4 py-3">10,000〜200,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3">大島紬（証紙付き）</td>
                  <td className="px-4 py-3">15,000〜250,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3">結城紬（証紙付き）</td>
                  <td className="px-4 py-3">20,000〜300,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3">留袖（正絹）</td>
                  <td className="px-4 py-3">5,000〜50,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3">袋帯（正絹・西陣織等）</td>
                  <td className="px-4 py-3">3,000〜80,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3">小紋・色無地</td>
                  <td className="px-4 py-3">1,000〜20,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※上記はあくまで参考相場です。実際の買取価格は着物の状態、産地、作家、証紙の有無、市場動向により変動します。正確な査定額は実物を見ての判断となります。
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
            バイセルの良い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                母の遺品整理で50枚以上の着物を買い取ってもらいました。電話してから3日後には出張に来てくれて、一点一点丁寧に査定してくれました。大島紬と訪問着数枚に高値がつき、合計で18万円になりました。重い着物を運ぶ必要がなく、自宅で全て完結できたのが本当に助かりました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・大阪府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                テレビCMで知ったバイセルを初めて利用しました。出張査定員の方がとても礼儀正しく、着物の産地や技法について丁寧に説明してくれました。他社より査定額が高かったので即決しました。買取後にフォローの電話もあり、上場企業らしいしっかりした対応だと感じました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・愛知県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                振袖を売りたくてバイセルに依頼しました。Webで申し込んだら翌日には電話が来て、3日後に出張査定。成人式で一度着ただけの振袖に7万円の値がつきました。証紙があったことが高額査定のポイントだったようです。対応も丁寧でスピーディーでした。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">70代女性・北海道</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                北海道の田舎に住んでいますが、問題なく出張買取に来てもらえました。着物30枚と帯10本、和装小物一式を査定していただき、合計15万円。地方でも全国対応は本当にありがたいです。査定員の方も感じが良く、安心して利用できました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">30代女性・福岡県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                祖母から譲り受けた着物をまとめて売りました。着物以外にも貴金属やブランドバッグも一緒に査定してもらえたので、一度の訪問で全て片付きました。着物だけで8万円、全部合わせると25万円になり、想像以上の結果でした。
              </p>
            </div>
          </div>
        </section>

        {/* 悪い口コミ */}
        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            バイセルの悪い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">50代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                着物の査定を依頼しましたが、着物以外のブランド品や貴金属がないか聞かれ、そちらの買取も勧められました。着物だけのつもりだったので少し押しが強いと感じました。最終的には着物だけで対応してもらえましたが、事前にその旨を伝えておくべきでした。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">60代女性・京都府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                京友禅の訪問着を査定してもらいましたが、着物専門店の査定額より2万円ほど低い提示でした。総合買取店なので、着物の専門知識という点では専門店にやや劣る印象です。高額な作家物は専門店にも併せて査定を依頼すべきだと思いました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">40代女性・埼玉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                出張買取の時間が2時間以上かかりました。着物20枚程度でしたが、一枚ずつ写真を撮って本部に確認する方式のため時間がかかるようです。丁寧ではありますが、忙しい方は時間に余裕を持って予約した方が良いでしょう。
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
                    東証グロース上場企業が運営する信頼性の高さ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    出張買取は最短即日・全国47都道府県対応のスピード感
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    累計3,700万点超の圧倒的な買取実績と豊富な販路
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    査定料・出張料・キャンセル料すべて無料
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    買取後のフォローコールによる品質管理体制
                  </span>
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
                  <span>
                    総合買取店のため、着物専門店と比べると希少品の評価がやや低い場合がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    着物以外の買取も提案されることがある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    出張買取は本部確認方式のため、査定に時間がかかる場合がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    ウール・ポリエステルの着物は単体では買取対象外になることが多い
                  </span>
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
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    できるだけ早く出張査定に来てほしい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    最短即日の出張買取対応。急いで着物を現金化したい方に最適です。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    大手・上場企業の安心感を重視する方
                  </span>
                  <p className="mt-1 text-gray-600">
                    東証グロース上場企業が運営し、フォローコール体制も整備。トラブル時の対応も安心です。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    着物以外の品物もまとめて売りたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    遺品整理や引っ越し時に、着物・ブランド品・貴金属などを一度に査定できます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    地方在住で近くに着物買取店がない方
                  </span>
                  <p className="mt-1 text-gray-600">
                    47都道府県対応の出張買取なら、地方や離島でも利用可能です。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">
                  5
                </span>
                <div>
                  <span className="font-bold text-gray-900">
                    初めて着物を売る方
                  </span>
                  <p className="mt-1 text-gray-600">
                    手数料完全無料でリスクなし。フォローコールもあるので初めてでも安心です。
                  </p>
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
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  1
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  お問い合わせ・申し込み
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  電話（24時間対応）またはWebフォームから申し込み。出張買取の場合は訪問日時を予約します。最短で当日の訪問が可能です。宅配買取の場合は無料の宅配キットが送付されます。
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
                  経験豊富な査定員が着物の状態・産地・作家・証紙の有無を確認し、一点一点査定します。査定員は着物を撮影し、本部のデータベースと照合して適正価格を算出します。
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
                  査定額の提示・成約
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に納得すれば、本人確認書類を提示して契約。その場で現金を受け取れます。納得できない場合はキャンセル料無料でお断り可能です。
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
                  フォローコール
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  買取成立後、コールセンターからフォローの電話があります。査定員の対応に問題がなかったか、説明が十分だったかを確認してくれます。
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
                  出張買取の場合は8日間のクーリングオフが適用されます。期間内であれば無条件で契約を解除し、着物を返却してもらえます。
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
                  <th className="px-3 py-3 text-center">バイセル</th>
                  <th className="px-3 py-3 text-center">福ちゃん</th>
                  <th className="px-3 py-3 text-center">買取大吉</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">運営形態</td>
                  <td className="px-3 py-3 text-center">上場企業（直営）</td>
                  <td className="px-3 py-3 text-center">非上場（直営）</td>
                  <td className="px-3 py-3 text-center">FC展開</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">出張買取</td>
                  <td className="px-3 py-3 text-center">全国47都道府県</td>
                  <td className="px-3 py-3 text-center">全国対応</td>
                  <td className="px-3 py-3 text-center">全国対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">出張スピード</td>
                  <td className="px-3 py-3 text-center">最短即日</td>
                  <td className="px-3 py-3 text-center">最短即日</td>
                  <td className="px-3 py-3 text-center">要予約</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">手数料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">着物専門性</td>
                  <td className="px-3 py-3 text-center">中〜高</td>
                  <td className="px-3 py-3 text-center">高</td>
                  <td className="px-3 py-3 text-center">中</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">フォロー体制</td>
                  <td className="px-3 py-3 text-center">フォローコールあり</td>
                  <td className="px-3 py-3 text-center">あり</td>
                  <td className="px-3 py-3 text-center">店舗による</td>
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
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. バイセルの着物買取は本当に無料ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. はい、バイセルでは査定料・出張料・送料・キャンセル料すべて無料です。査定だけの利用も可能で、金額に納得できなければ無料でお断りできます。追加費用が発生することは一切ありません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. バイセルではどのような着物が買取対象ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. 振袖、訪問着、留袖、付け下げ、小紋、紬、色無地、帯、和装小物が買取対象です。シミや汚れがあるものでも査定可能です。ただし、ウールや化学繊維の着物は単体では買取対象外となる場合があります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. バイセルの出張買取は最短でいつ来てもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. バイセルの出張買取は最短で当日の対応が可能です。地域や予約状況によりますが、電話申し込みの場合は即日〜翌日の訪問が可能なケースが多いです。Webフォームからの申し込みの場合は翌営業日以降となります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. バイセルの査定後にクーリングオフはできますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. はい、出張買取の場合は特定商取引法に基づき、契約日から8日間のクーリングオフが適用されます。バイセルでは契約後にフォローコールも実施しており、不安があればその場でキャンセルも可能です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. バイセルと福ちゃんはどちらが高く買い取ってくれますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A. 買取額は着物の種類・状態・時期によって異なるため一概には言えません。バイセルは出張買取のスピードと販路の広さ、福ちゃんは着物専門の査定力に定評があります。最も高く売るには両社に査定を依頼して比較することをおすすめします。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：バイセルは出張買取のスピードと信頼性が魅力
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              バイセルは、東証グロース上場企業が運営する信頼性の高い買取サービスです。最短即日の出張買取対応、全国47都道府県をカバーするネットワーク、累計3,700万点超の買取実績など、業界トップクラスの規模を誇ります。特に出張買取のスピードと手軽さは他社の追随を許しません。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              一方で、総合買取店であるため着物の専門性では着物専門店にやや劣る面もあります。高額な作家物や希少な着物をお持ちの場合は、バイセルに加えて着物専門店にも査定を依頼し、比較検討することをおすすめします。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              「すぐに出張査定に来てほしい」「上場企業の安心感で取引したい」「着物以外もまとめて売りたい」という方には、バイセルは最適な選択肢です。
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
              href="/reviews/fukuchan/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                レビュー
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                福ちゃんの着物買取｜口コミ・評判
              </p>
            </Link>
            <Link
              href="/articles/buysell-vs-fukuchan/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#6b4c8a] font-medium">
                比較
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                バイセル vs 福ちゃん 徹底比較
              </p>
            </Link>
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
          </div>
        </section>
      </article>
    </>
  );
}
