import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ティファナの着物買取｜総合リサイクル店の実力を検証",
  description:
    "ティファナの着物買取サービスを徹底検証。総合リサイクルショップならではの幅広い対応力、出張・宅配・店頭の3つの買取方法、ノーブランドからハイブランドまで対応する実力を口コミとともにレビュー。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/tifana/",
  },
  openGraph: {
    title: "ティファナの着物買取｜総合リサイクル店の実力を検証",
    description:
      "ティファナの着物買取サービスを徹底検証。総合リサイクルショップの着物買取を口コミ・評判とともにレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/tifana/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ティファナの着物買取｜総合リサイクル店の実力を検証",
  description:
    "ティファナの着物買取サービスを徹底検証。総合リサイクルショップの実力を口コミとともにレビュー。",
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
    "@id": "https://kimonokaitori-biyori.com/reviews/tifana/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ティファナでは一点からでも着物を買い取ってもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ティファナでは一点からでも着物の買取に対応しています。大量買取はもちろん、帯一本だけ、和装小物一つだけでも査定してもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "ティファナではノーブランドの着物でも買い取ってもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ティファナは総合リサイクルショップのため、ノーブランドの着物でも買取対象です。ただし、状態が著しく悪い場合や需要が低い場合は査定額が低くなるか、買取不可となる場合もあります。",
      },
    },
    {
      "@type": "Question",
      name: "ティファナの出張買取は無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ティファナの出張買取は査定料・出張料ともに無料です。東京都内を中心に近郊エリアに対応しています。出張対応エリアは店舗によって異なるため、事前に確認することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "ティファナの店頭買取は予約が必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "予約なしでも店頭買取は利用可能ですが、混雑時は待ち時間が発生する場合があります。スムーズに査定を受けたい場合は、事前に電話で来店予約をすることをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "ティファナでは着物以外のものも一緒に売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ティファナは総合リサイクルショップのため、着物以外にも洋服、バッグ、靴、アクセサリー、家電、家具など幅広い品物を一緒に売ることができます。引っ越しや大掃除の際にまとめて利用すると便利です。",
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
      name: "ティファナ",
      item: "https://kimonokaitori-biyori.com/reviews/tifana/",
    },
  ],
};

export default function TifanaReviewPage() {
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
          { label: "ティファナ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              総合リサイクル
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ティファナの着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">総合リサイクル店の実力</span>
            を検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            ティファナは東京を中心に展開する総合リサイクルショップです。着物・帯はもちろん、
            洋服からブランド品、家電まで幅広いジャンルの買取に対応。ノーブランドからハイブランドまで
            一点からでも査定してくれる間口の広さが魅力です。
            本記事では、ティファナの着物買取サービスを口コミとともに徹底検証します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#overview" className="hover:underline">
                1. ティファナの基本情報
              </a>
            </li>
            <li>
              <a href="#good-reviews" className="hover:underline">
                2. ティファナの良い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#bad-reviews" className="hover:underline">
                3. ティファナの悪い口コミ・評判
              </a>
            </li>
            <li>
              <a href="#merit-demerit" className="hover:underline">
                4. メリット・デメリットまとめ
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. ティファナで着物を売る流れ
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
            ティファナの基本情報
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">
                    運営会社
                  </th>
                  <td className="px-4 py-3">株式会社ティファナ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    業態
                  </th>
                  <td className="px-4 py-3">総合リサイクルショップ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    買取方法
                  </th>
                  <td className="px-4 py-3">出張買取・宅配買取・店頭買取</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応品目
                  </th>
                  <td className="px-4 py-3">
                    着物、帯、和装小物、洋服、ブランド品、家電、家具など
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    着物の対応範囲
                  </th>
                  <td className="px-4 py-3">ノーブランドからハイブランドまで</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    最小買取点数
                  </th>
                  <td className="px-4 py-3">一点から対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    手数料
                  </th>
                  <td className="px-4 py-3">
                    査定料無料・出張料無料（対応エリア内）
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">
                    対応エリア
                  </th>
                  <td className="px-4 py-3">東京都内中心、近郊エリア</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            ティファナは東京を中心に複数店舗を展開する総合リサイクルショップです。
            着物専門店ではありませんが、着物・帯・和装小物の買取にも対応しています。
            最大の特徴は、ノーブランドの普段着からハイブランドの高級着物まで、
            幅広い着物を一点からでも買い取ってくれる間口の広さです。
            着物以外の不用品もまとめて処分できるため、引っ越しや遺品整理の際に特に便利なサービスです。
          </p>
        </section>

        {/* 良い口コミ */}
        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ティファナの良い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                引っ越しに伴い、着物だけでなく洋服やバッグ、家電もまとめて売りたかったので
                ティファナを利用しました。着物10枚、帯5本に加えて洋服やバッグも合わせて
                段ボール8箱分を一気に買い取ってもらえました。
                一つの業者ですべて済むのは本当に助かります。着物の査定額は正直そこまで高くありませんでしたが、
                トータルで考えると満足です。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                他社で「ノーブランドの着物は買取できません」と断られた経験がありますが、
                ティファナでは普段着の紬やウールの着物も引き取ってくれました。
                金額は高くはありませんが、処分に困っていたのでありがたかったです。
                「捨てるくらいなら少しでもお金になるほうがいい」と考える方にはおすすめです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">30代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                店頭に直接持ち込みで利用しました。予約なしで行きましたが、
                30分ほど待っただけで査定してもらえました。帯3本を売って合計4,000円ほどでしたが、
                その場で現金がもらえてスピーディーでした。
                スタッフの方も明るく対応してくれて、気持ちの良い取引でした。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・埼玉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                出張買取で自宅まで来てもらいました。着物30枚以上と帯、小物類を
                丸ごと引き取ってもらい、合計で8万円になりました。
                大量の着物を運ぶ手間がなく、高齢の私にとっては出張買取が本当に助かります。
                査定員の方も親切で、一枚一枚丁寧に見てくれました。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・千葉県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                宅配買取を利用しました。ネットで申し込むと段ボールと着払い伝票が届き、
                着物を詰めて送るだけで簡単でした。査定結果は5日後にメールで届き、
                金額に同意すると翌営業日に振込がありました。
                忙しくて店舗に行く時間がない方にはとても便利なサービスだと思います。
              </p>
            </div>
          </div>
        </section>

        {/* 悪い口コミ */}
        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ティファナの悪い口コミ・評判
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">50代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                着物専門の買取店と比べると、やはり査定額は低めです。証紙付きの大島紬を持ち込みましたが、
                着物専門店で8万円だったものがティファナでは4万円の査定でした。
                総合リサイクルショップなので仕方ない部分はありますが、
                高級着物は専門店のほうが良い価格が出ると思います。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">60代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                査定員の方が着物に詳しくなく、証紙を見ても「これが何かよく分からない」と言われました。
                結局、店長に確認を取っていたようですが、専門知識がないスタッフに当たると
                正当な評価をしてもらえない可能性があります。
                総合リサイクル店の限界を感じた瞬間でした。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">40代女性・神奈川県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                出張買取の対応エリアが限られていて、横浜市の自宅は対応エリア外でした。
                東京都内が中心のようで、近郊でも対応してもらえないケースがあります。
                店頭まで持って行くか宅配にするしかなく、大量の着物を抱えて電車に乗るのは大変でした。
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
                    ノーブランドの着物や普段着でも買い取ってくれる間口の広さ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    着物以外の不用品（洋服・家電・家具など）もまとめて売れる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    一点からでも対応してくれるので気軽に利用できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    出張・宅配・店頭の3つの買取方法から選べる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    店頭買取は予約不要で、思い立った時にすぐ売れる
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
                    着物専門店と比べると査定額が低い傾向（特に高級着物）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    査定員の着物に関する専門知識にばらつきがある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    出張買取の対応エリアが東京都内中心で、地方は対象外
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>
                    作家物や伝統工芸品の価値を正確に評価できない場合がある
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 買取の流れ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ティファナで着物を売る流れ
          </h2>

          <h3 className="text-lg font-bold text-gray-900 mb-4 mt-6">
            店頭買取の場合
          </h3>
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  1
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  店舗に持ち込み
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  売りたい着物を持って最寄りのティファナ店舗に来店します。
                  予約不要で営業時間内ならいつでも受付可能です。
                  本人確認書類（運転免許証など）を忘れずにお持ちください。
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
                <h4 className="font-bold text-gray-900 mb-2">
                  査定
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  スタッフが着物の素材・状態・ブランド・需要を確認して査定します。
                  点数が少なければ15〜30分程度で査定が完了します。
                  混雑時は待ち時間が発生する場合があります。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">
                  3
                </span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  成約・現金受取
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に同意したら、本人確認書類を提示して成約。
                  その場で現金を受け取れます。一部だけ売ることも可能です。
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">
            出張買取の場合
          </h3>
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  1
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  電話・Webで予約
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  電話またはWebフォームから出張買取を申し込みます。
                  対応エリア（主に東京都内と近郊）を確認し、訪問日時を予約します。
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
                <h4 className="font-bold text-gray-900 mb-2">
                  自宅で査定
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定員が自宅を訪問し、着物や他の不用品をまとめて査定します。
                  着物以外のものも一緒に売れるので、引っ越し前の大量処分にも便利です。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  3
                </span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  成約・現金受取
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  金額に同意したらその場で現金を受け取り。品物は査定員が持ち帰ります。
                  出張買取ではクーリングオフ（8日間）が適用されます。
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">
            宅配買取の場合
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8a0b6] text-white font-bold text-sm">
                  1
                </span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Webで申し込み
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  公式サイトから宅配買取を申し込むと、段ボールと着払い伝票が届きます。
                  自分の段ボールを使って発送することも可能です。
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
                <h4 className="font-bold text-gray-900 mb-2">
                  梱包・発送
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  着物を詰めて着払いで発送します。本人確認書類のコピーを同封してください。
                  集荷サービスを利用すれば自宅から発送できます。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8a0b6] text-white font-bold text-sm">
                  3
                </span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  査定・振込
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  商品到着後3〜5営業日で査定結果がメールで届きます。
                  金額に同意すると、翌営業日に指定口座に振込されます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 着物買取の注意点セクション */}
        <section className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-[#e8ddd0]">
            ティファナの着物買取の注意点
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            競合調査で判明した、ティファナに着物買取を依頼する前に知っておくべき重要なポイントをまとめました。
          </p>
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">ウール・化繊の着物は買取対象外</p>
              <p className="text-sm text-gray-700">
                ティファナでは<strong>ウールや化学繊維（ポリエステル等）の着物は買取対象外</strong>です。正絹（シルク）の着物であれば買取可能ですので、素材を事前に確認しましょう。
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">袋帯以外の帯は受付不可の場合あり</p>
              <p className="text-sm text-gray-700">
                名古屋帯や半幅帯など、袋帯以外の帯は買取を受け付けてもらえない場合があります。帯の種類を確認してから依頼しましょう。
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">着物の専門査定士がいない可能性</p>
              <p className="text-sm text-gray-700">
                ティファナは総合リサイクルショップのため、着物に特化した専門査定士が在籍していない場合があります。作家物や産地物など高額な着物の場合は、着物専門の買取業者（ウリエルや買取大吉など）に依頼することをおすすめします。
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
                  Q. ティファナでは一点からでも着物を買い取ってもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ティファナでは一点からでも着物の買取に対応しています。
                大量買取はもちろん、帯一本だけ、和装小物一つだけでも査定してもらえます。
                「少量だけど売りたい」という方でも気軽に利用できるのがティファナの魅力です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ティファナではノーブランドの着物でも買い取ってもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ティファナは総合リサイクルショップのため、ノーブランドの着物でも買取対象です。
                ウールや化繊の着物、産地証明のない着物でも査定してもらえます。
                ただし、状態が著しく悪い場合（重度のシミ・カビ・虫食い）や需要が極端に低い場合は
                査定額が低くなるか、買取不可となる場合もあります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ティファナの出張買取は無料ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ティファナの出張買取は査定料・出張料ともに無料です。
                ただし、出張対応エリアは東京都内を中心とした近郊エリアに限られます。
                具体的な対応エリアは店舗によって異なるため、事前に電話で確認することをおすすめします。
                対応エリア外の場合は宅配買取を利用することもできます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ティファナの店頭買取は予約が必要ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                予約なしでも店頭買取は利用可能です。営業時間内であればいつでも受付しています。
                ただし、土日や祝日は混雑することが多く、待ち時間が発生する場合があります。
                スムーズに査定を受けたい場合は、事前に電話で来店予約をすることをおすすめします。
                大量の着物を持ち込む場合は特に予約がおすすめです。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. ティファナでは着物以外のものも一緒に売れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、ティファナは総合リサイクルショップのため、着物以外にも洋服、バッグ、靴、
                アクセサリー、家電、家具など幅広い品物を一緒に売ることができます。
                引っ越しや大掃除の際にまとめて利用すると、一度の取引ですべて処分できるため非常に便利です。
                不用品が多い方にとっては、専門店よりもティファナのような総合リサイクル店が
                使いやすい場合があります。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：ティファナは「まとめて処分したい方」に最適
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ティファナは総合リサイクルショップとして、着物を含む幅広い不用品をまとめて買い取ってくれる
              便利なサービスです。ノーブランドの着物でも一点から対応してくれる間口の広さは、
              着物専門店にはない大きな魅力です。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              一方で、着物の専門知識を持つ査定員が少ない場合があり、高級着物や作家物の適正評価という点では
              着物専門の買取店に劣る面があります。高価な着物をお持ちの場合は、ティファナと並行して
              着物専門の買取店にも査定を依頼し、比較検討することをおすすめします。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              「着物以外の不用品もまとめて処分したい」「ノーブランドの着物でも引き取ってほしい」
              という方には、ティファナは最適な選択肢と言えるでしょう。
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