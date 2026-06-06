import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "ザ・ゴールドの着物買取｜口コミ・評判を徹底検証",
  description:
    "ザ・ゴールドの着物買取サービスを徹底検証。全国約70店舗の直営店展開、着物専門査定員の質、買取価格の相場、良い口コミ・悪い口コミを正直にレビュー。振袖・訪問着・帯・作家物の買取を検討中の方必見。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/the-gold/",
  },
  openGraph: {
    title: "ザ・ゴールドの着物買取｜口コミ・評判を徹底検証",
    description:
      "ザ・ゴールドの着物買取サービスを徹底検証。直営店展開と着物専門査定の実力を正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/the-gold/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "ザ・ゴールドの着物買取｜口コミ・評判を徹底検証",
  description:
    "ザ・ゴールドの着物買取サービスを徹底検証。直営店展開と着物専門査定の実力を正直にレビュー。",
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
    "@id": "https://kimonokaitori-biyori.com/reviews/the-gold/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ザ・ゴールドの着物買取は無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ザ・ゴールドでは査定料・出張料・キャンセル料すべて無料です。査定だけの利用も可能で、買取額に納得できなければ無料でお断りできます。",
      },
    },
    {
      "@type": "Question",
      name: "ザ・ゴールドは全国どこでも出張買取に来てもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ザ・ゴールドの出張買取は全国対応ですが、一部離島や山間部では対応できない場合があります。お近くに店舗がない地域でも、宅配買取であれば全国どこからでも利用可能です。事前に電話で対応エリアを確認することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "ザ・ゴールドで着物以外のものも一緒に売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ザ・ゴールドでは着物以外にも貴金属・ブランド品・時計・骨董品・切手などの買取に対応しています。着物と一緒にまとめて査定できるため、遺品整理や引っ越しの際に便利です。",
      },
    },
    {
      "@type": "Question",
      name: "ザ・ゴールドの店舗買取と出張買取、どちらがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "少量の着物であれば店舗買取がスピーディーです。店舗が近くにあれば予約不要で持ち込めます。大量の着物がある場合や持ち運びが困難な場合は出張買取がおすすめです。査定額に差はありません。",
      },
    },
    {
      "@type": "Question",
      name: "ザ・ゴールドはフランチャイズですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、ザ・ゴールドは全店舗が直営店です。フランチャイズ展開ではないため、全店舗で統一された査定基準とサービス品質が保たれています。これにより、どの店舗を利用しても同等の査定が受けられます。",
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
      name: "ザ・ゴールド",
      item: "https://kimonokaitori-biyori.com/reviews/the-gold/",
    },
  ],
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ザ・ゴールド",
  "description": "ザ・ゴールドは全国約70店舗の直営店を展開し、着物専門査定員が在籍する着物買取サービスです。",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.7",
    "reviewCount": "290",
    "bestRating": "5",
  },
};

export default function TheGoldReviewPage() {
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
          { label: "ザ・ゴールド" },
        ]}
      />

      <SoubaNote />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              全店直営の安心感
            </span>
            <time dateTime="2026-05-17" className="text-xs text-gray-500">
              2026年5月17日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ザ・ゴールドの着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">口コミ・評判</span>
            を徹底検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            ザ・ゴールドは、株式会社マックスガイが運営する買取専門店で、全国約70店舗をすべて直営で展開しています。着物買取にも力を入れており、着物の知識を持つ査定員が在籍。テレビCMでも知名度が高く、着物買取業界で確固たるポジションを築いています。本記事では、実際の口コミや評判をもとにザ・ゴールドの実力を検証します。
          </p>
        </header>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#overview" className="hover:underline">1. ザ・ゴールドの基本情報・会社概要</a></li>
            <li><a href="#features" className="hover:underline">2. サービスの特徴</a></li>
            <li><a href="#items" className="hover:underline">3. 買取対応品目</a></li>
            <li><a href="#market-price" className="hover:underline">4. 買取実績・相場</a></li>
            <li><a href="#good-reviews" className="hover:underline">5. 良い口コミ・評判</a></li>
            <li><a href="#bad-reviews" className="hover:underline">6. 悪い口コミ・評判</a></li>
            <li><a href="#merit-demerit" className="hover:underline">7. メリット・デメリットまとめ</a></li>
            <li><a href="#recommend" className="hover:underline">8. こんな人におすすめ</a></li>
            <li><a href="#flow" className="hover:underline">9. 申し込み方法・買取の流れ</a></li>
            <li><a href="#comparison" className="hover:underline">10. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">11. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="overview" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            ザ・ゴールドの基本情報・会社概要
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">運営会社</th>
                  <td className="px-4 py-3">株式会社マックスガイ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">設立</th>
                  <td className="px-4 py-3">1962年（昭和37年）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">本社所在地</th>
                  <td className="px-4 py-3">東京都中央区日本橋茅場町2-6-1</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">店舗数</th>
                  <td className="px-4 py-3">全国約70店舗（すべて直営）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">買取方法</th>
                  <td className="px-4 py-3">出張買取・店頭買取・宅配買取</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">対応エリア</th>
                  <td className="px-4 py-3">全国対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">手数料</th>
                  <td className="px-4 py-3">査定料・出張料・キャンセル料すべて無料</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">入金方法</th>
                  <td className="px-4 py-3">出張・店頭はその場で現金、宅配は銀行振込</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            ザ・ゴールドは、1962年創業の老舗企業・株式会社マックスガイが運営する買取専門店です。60年以上の歴史を持ち、全国約70店舗をすべて直営で展開しているのが最大の特徴です。フランチャイズ展開ではないため、全店舗で統一されたサービス品質と査定基準を維持しています。着物買取にも注力しており、着物の知識を持つ専門査定員が各店舗に配置されています。
          </p>
        </section>

        <section id="features" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            サービスの特徴
          </h2>
          <div className="space-y-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">1. 全店舗直営による統一された品質</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ザ・ゴールドはフランチャイズ展開をせず、全約70店舗をすべて直営で運営しています。そのため、どの店舗を利用しても統一された査定基準と接客品質でサービスを受けられます。フランチャイズ店にありがちな「店舗ごとの査定額のばらつき」が起きにくいのが大きなメリットです。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">2. 着物専門の査定力</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ザ・ゴールドは着物買取にも力を入れており、着物の産地・技法・作家に精通した査定員が在籍しています。証紙や落款の確認はもちろん、仕立ての状態や生地の質まで細かく確認する丁寧な査定が特徴です。特に正絹の着物や作家物の評価に定評があります。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">3. 地域密着の店舗展開</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                全国約70店舗は主に東日本を中心に展開されており、地域に密着したサービスを提供しています。店舗スタッフは地元に根付いた対応を心がけており、特に高齢の方からの信頼が厚いのが特徴です。店舗では予約不要で気軽に査定を依頼できます。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">4. 値段がつかない着物の無料引き取り</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ザ・ゴールドでは、買取価格がつかない着物でも無料で引き取りしてくれるサービスがあります。引き取った着物は、リサイクル素材として活用されたり、海外への寄付に回されたりと、社会貢献活動にもつなげています。処分に困っている着物がある方にも嬉しいサービスです。
              </p>
            </div>
          </div>
        </section>

        <section id="items" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            買取対応品目
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">着物</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>振袖・訪問着・付け下げ</li>
                <li>留袖（黒留袖・色留袖）</li>
                <li>小紋・紬・色無地</li>
                <li>作家物・人間国宝作品</li>
                <li>アンティーク着物</li>
                <li>ウール着物・喪服（引き取り対応）</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">帯・和装小物</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>袋帯・名古屋帯・半幅帯</li>
                <li>帯締め・帯揚げ</li>
                <li>草履・バッグ</li>
                <li>反物・仕立て前の着物</li>
                <li>和装コート・羽織</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            ザ・ゴールドでは正絹の着物を中心に買取を行っていますが、ウールやポリエステルの着物、喪服など一般的に買取が難しい品物についても無料引き取りに対応しています。着物以外にも、貴金属・ブランド品・時計・骨董品など幅広いジャンルの買取が可能です。
          </p>
        </section>

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
                  <td className="px-4 py-3">8,000〜80,000円</td>
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
                  <td className="px-4 py-3">袋帯（正絹・西陣織等）</td>
                  <td className="px-4 py-3">3,000〜80,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3">小紋・色無地</td>
                  <td className="px-4 py-3">1,000〜15,000円</td>
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

        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            良い口コミ・評判
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・宮城県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                近所にザ・ゴールドの店舗があったので、気軽に持ち込みで査定してもらいました。スタッフの方がとても親切で、着物一枚一枚についてどこの産地か、どのような技法で作られているかを丁寧に説明してくれました。大島紬と加賀友禅の訪問着に高値がつき、合計22万円になりました。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">50代女性・新潟県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                値段がつかなかった着物も無料で引き取ってくれたのがありがたかったです。処分するにもお金がかかると思っていたので、引き取りサービスは本当に助かりました。買取がついた着物も適正な価格で、合計8万円でした。直営店なので安心感がありました。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">70代女性・北海道</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                出張買取をお願いしましたが、予約から3日後に来てくれました。査定員の方が着物に詳しく、私が持っていた紬の着物について産地や織り方を教えてくれました。押しつけがましい営業もなく、とても気持ちの良い対応でした。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★☆</span>
                <span className="text-xs text-gray-500">40代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                母の遺品整理で40枚以上の着物を持ち込みました。直営店なのでどの店舗でも同じ基準で査定してもらえるのが安心です。ウール着物や化繊の着物も無料で引き取ってもらえたので、一度に全部片付きました。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">60代女性・福島県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                テレビCMで見て知りました。地元に店舗があったので直接持ち込みました。スタッフの方が地元の方で、話しやすくて安心できました。結城紬と訪問着を中心に15万円の買取額でした。地域密着型のサービスが良いですね。
              </p>
            </div>
          </div>
        </section>

        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            悪い口コミ・評判
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">40代女性・大阪府</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                関西には店舗が少なく、最寄りの店舗まで車で1時間以上かかりました。出張買取を依頼しましたが、予約が1週間以上先になりました。東日本に店舗が集中しているため、西日本の方はやや不便に感じるかもしれません。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★★☆☆</span>
                <span className="text-xs text-gray-500">50代女性・東京都</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                買取額自体は適正だと思いますが、バイセルと比較するとやや低めの提示でした。ザ・ゴールドは堅実な査定という印象で、高額を期待する方は複数社で比較した方が良いかもしれません。対応の丁寧さは間違いなくトップクラスです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#c9a76c] text-sm">★★☆☆☆</span>
                <span className="text-xs text-gray-500">30代女性・愛知県</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                宅配買取の対応がやや遅く感じました。着物を送ってから査定結果の連絡まで2週間近くかかりました。ただ、査定額の説明は丁寧で、なぜその価格になったかを書面で教えてもらえました。
              </p>
            </div>
          </div>
        </section>

        <section id="merit-demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            メリット・デメリットまとめ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6b4c8a] text-white text-sm">○</span>
                メリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>全店舗直営で統一された査定基準と品質</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>60年以上の歴史と実績による信頼感</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>値段がつかない着物の無料引き取りサービス</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>地域密着の丁寧な接客対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  <span>査定料・出張料・キャンセル料すべて無料</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm">x</span>
                デメリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>店舗が東日本に偏っており、西日本では利用しにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>買取額が他社と比べてやや控えめな場合がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>宅配買取の査定に時間がかかる場合がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">&#10007;</span>
                  <span>即日出張対応が難しい場合がある</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            こんな人におすすめ
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <span className="font-bold text-gray-900">直営店の安心感を重視する方</span>
                  <p className="mt-1 text-gray-600">全店舗直営なので、どの店舗でも統一された査定基準でサービスを受けられます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <span className="font-bold text-gray-900">値段がつかない着物も処分したい方</span>
                  <p className="mt-1 text-gray-600">無料引き取りサービスがあるため、買取対象外の着物も一緒に片付けられます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <span className="font-bold text-gray-900">東日本にお住まいで店舗持ち込みしたい方</span>
                  <p className="mt-1 text-gray-600">東日本を中心に約70店舗あり、予約不要で気軽に持ち込めます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">4</span>
                <div>
                  <span className="font-bold text-gray-900">押しの強い営業が苦手な方</span>
                  <p className="mt-1 text-gray-600">ザ・ゴールドは穏やかな接客が特徴で、無理な勧誘はありません。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">5</span>
                <div>
                  <span className="font-bold text-gray-900">遺品整理で大量の着物を片付けたい方</span>
                  <p className="mt-1 text-gray-600">買取可能なものは買い取り、不可のものは引き取りで全て処分できます。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

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
                <p className="text-sm text-gray-600 leading-relaxed">電話またはWebフォームから申し込み。店頭買取の場合は予約不要で直接来店も可能です。出張買取は訪問日時を予約します。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">2</span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">査定</h3>
                <p className="text-sm text-gray-600 leading-relaxed">着物に詳しい査定員が一点一点丁寧に査定。産地・技法・証紙の確認、生地の状態チェックを行います。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">3</span>
                <div className="w-px h-full bg-[#e8ddd0] mt-2" />
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-gray-900 mb-2">査定額の提示・成約</h3>
                <p className="text-sm text-gray-600 leading-relaxed">査定額に納得すれば契約。その場で現金を受け取れます。キャンセル料は無料です。値段がつかない着物は希望すれば無料で引き取ってもらえます。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">クーリングオフ期間</h3>
                <p className="text-sm text-gray-600 leading-relaxed">出張買取の場合は8日間のクーリングオフが適用されます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            他社との比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-3 py-3 text-left">項目</th>
                  <th className="px-3 py-3 text-center">ザ・ゴールド</th>
                  <th className="px-3 py-3 text-center">バイセル</th>
                  <th className="px-3 py-3 text-center">福ちゃん</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">運営形態</td>
                  <td className="px-3 py-3 text-center">全店直営</td>
                  <td className="px-3 py-3 text-center">上場企業直営</td>
                  <td className="px-3 py-3 text-center">直営</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">店舗数</td>
                  <td className="px-3 py-3 text-center">約70店</td>
                  <td className="px-3 py-3 text-center">少数</td>
                  <td className="px-3 py-3 text-center">少数</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">無料引き取り</td>
                  <td className="px-3 py-3 text-center">あり</td>
                  <td className="px-3 py-3 text-center">なし</td>
                  <td className="px-3 py-3 text-center">なし</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-3 py-3 font-medium">出張スピード</td>
                  <td className="px-3 py-3 text-center">要予約</td>
                  <td className="px-3 py-3 text-center">最短即日</td>
                  <td className="px-3 py-3 text-center">数日〜</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-3 py-3 font-medium">手数料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                  <td className="px-3 py-3 text-center">完全無料</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. ザ・ゴールドの着物買取は無料ですか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. はい、査定料・出張料・キャンセル料すべて無料です。</div>
            </details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. 全国どこでも出張買取に来てもらえますか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 出張買取は全国対応ですが、一部離島や山間部では対応できない場合があります。宅配買取なら全国どこからでも利用可能です。</div>
            </details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. 着物以外のものも一緒に売れますか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. はい、貴金属・ブランド品・時計・骨董品・切手なども買取対応しています。着物と一緒にまとめて査定できます。</div>
            </details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. 店舗買取と出張買取、どちらがおすすめですか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 少量なら店舗持ち込みがスピーディー。大量の場合や持ち運びが困難な場合は出張買取がおすすめです。査定額に差はありません。</div>
            </details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">Q. ザ・ゴールドはフランチャイズですか？</span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. いいえ、全約70店舗がすべて直営です。統一された査定基準とサービス品質が保たれています。</div>
            </details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：ザ・ゴールドは直営店の安心感と引き取りサービスが魅力
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ザ・ゴールドは、60年以上の歴史を持つ老舗企業が運営する、全店直営の買取専門店です。統一された査定基準による安定した品質、値段がつかない着物の無料引き取りサービス、地域密着の丁寧な接客は他社にない大きな強みです。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              一方で、店舗が東日本に偏っている点や、買取額がやや控えめな場合がある点は留意が必要です。高額買取を重視する場合は、バイセルや福ちゃんとの比較検討をおすすめします。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              「直営店の安心感」「着物の処分も含めて一度に片付けたい」「丁寧な接客を重視する」という方には、ザ・ゴールドは最適な選択肢です。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">関連ページ</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/reviews/buysell/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#c9a76c] font-medium">レビュー</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">バイセルの着物買取｜口コミ・評判</p>
            </Link>
            <Link href="/reviews/fukuchan/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#c9a76c] font-medium">レビュー</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">福ちゃんの着物買取｜口コミ・評判</p>
            </Link>
            <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#6b4c8a] font-medium">ランキング</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">着物買取おすすめ業者ランキング</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
