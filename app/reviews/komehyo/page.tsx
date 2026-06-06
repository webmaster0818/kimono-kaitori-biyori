import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "コメ兵の着物買取｜ブランド買取大手の実力を検証",
  description:
    "コメ兵（KOMEHYO）の着物買取サービスを徹底検証。創業75年超の老舗ブランド買取企業の着物買取の実力、査定基準、買取相場、口コミ・評判を正直にレビュー。名古屋発の大手リユース企業の着物買取を検討中の方必見。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/komehyo/",
  },
  openGraph: {
    title: "コメ兵の着物買取｜ブランド買取大手の実力を検証",
    description:
      "コメ兵の着物買取を徹底検証。創業75年超の老舗リユース企業の着物買取の実力と口コミを正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/komehyo/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "コメ兵の着物買取｜ブランド買取大手の実力を検証",
  description:
    "コメ兵の着物買取を徹底検証。創業75年超の老舗リユース企業の着物買取の実力と口コミを正直にレビュー。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/reviews/komehyo/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "コメ兵で着物の買取は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、コメ兵では着物の買取に対応しています。正絹の着物・帯・和装小物が主な買取対象です。ただし、着物の取扱いは一部店舗に限られるため、事前に対応店舗を確認することをおすすめします。" } },
    { "@type": "Question", name: "コメ兵の着物買取の手数料はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "コメ兵では査定料は無料です。店頭買取の場合は費用はかかりません。宅配買取（KOMEHYOオンラインストア経由）の場合も送料は無料ですが、買取不成立時の返送料は自己負担となる場合があります。" } },
    { "@type": "Question", name: "コメ兵の着物買取はどの店舗で対応していますか？", acceptedAnswer: { "@type": "Answer", text: "コメ兵の着物買取は全店舗で対応しているわけではなく、主に名古屋本店（KOMEHYO名古屋本店きもの館）をはじめとする一部の大型店舗で取り扱っています。事前に電話で対応可否を確認することをおすすめします。" } },
    { "@type": "Question", name: "コメ兵はブランド品買取と着物買取、どちらが得意ですか？", acceptedAnswer: { "@type": "Answer", text: "コメ兵はブランド品・時計・宝石の買取に特に強みを持つ企業です。着物買取も行っていますが、着物専門の買取業者（福ちゃん・バイセル等）と比べると、着物に特化した査定力ではやや劣る面があります。ブランド品と着物をまとめて売りたい場合に便利です。" } },
    { "@type": "Question", name: "コメ兵の宅配買取で着物を売ることはできますか？", acceptedAnswer: { "@type": "Answer", text: "はい、KOMEHYOオンラインストアを通じて宅配買取で着物を売ることが可能です。ただし、宅配買取の場合は実物を見るまで正確な査定ができないため、店頭持ち込みの方がスムーズに取引できます。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://kimonokaitori-biyori.com/reviews/" },
    { "@type": "ListItem", position: 3, name: "コメ兵", item: "https://kimonokaitori-biyori.com/reviews/komehyo/" },
  ],
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "コメ兵",
  "description": "コメ兵（KOMEHYO）は創業75年超の老舗ブランド買取企業で、名古屋本店を中心に着物買取にも対応するリユースサービスです。",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.5",
    "reviewCount": "850",
    "bestRating": "5",
  },
};

export default function KomehyoReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }} />

      <Breadcrumb items={[{ label: "業者レビュー", href: "/reviews/" }, { label: "コメ兵" }]} />

      <SoubaNote />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              ブランド買取大手
            </span>
            <time dateTime="2026-05-17" className="text-xs text-gray-500">2026年5月17日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            コメ兵の着物買取
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">ブランド買取大手の実力</span>
            を検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            コメ兵（KOMEHYO）は、1947年創業の名古屋発の老舗リユース企業です。東証スタンダード上場企業として、ブランド品・時計・宝石の買取で圧倒的な知名度を誇ります。着物買取にも対応しており、名古屋本店には「きもの館」を併設。本記事では、ブランド買取大手であるコメ兵の着物買取の実力を検証します。
          </p>
        </header>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#overview" className="hover:underline">1. コメ兵の基本情報・会社概要</a></li>
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
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">コメ兵の基本情報・会社概要</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">運営会社</th><td className="px-4 py-3">株式会社コメ兵ホールディングス（東証スタンダード上場・証券コード2780）</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">創業</th><td className="px-4 py-3">1947年（昭和22年）</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">本社所在地</th><td className="px-4 py-3">愛知県名古屋市中区大須3-25-31</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">店舗数</th><td className="px-4 py-3">全国約30店舗以上（着物対応は一部店舗）</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">買取方法</th><td className="px-4 py-3">店頭買取・宅配買取</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">対応エリア</th><td className="px-4 py-3">店頭は店舗所在地、宅配は全国対応</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">手数料</th><td className="px-4 py-3">査定料無料</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">入金方法</th><td className="px-4 py-3">店頭は現金またはコメ兵ポイント、宅配は銀行振込</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            コメ兵は1947年に名古屋で創業した老舗リユース企業です。ブランドバッグ・時計・宝石・衣料品の買取販売で知られ、東証スタンダードに上場しています。着物買取については、名古屋本店の「KOMEHYO名古屋本店きもの館」を筆頭に一部大型店舗で取り扱っています。75年以上の歴史で培った鑑定力と、自社販売チャネルによる適正な査定が特徴です。
          </p>
        </section>

        <section id="features" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">サービスの特徴</h2>
          <div className="space-y-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">1. 75年以上の鑑定実績と上場企業の信頼性</h3>
              <p className="text-sm text-gray-600 leading-relaxed">コメ兵は創業から75年以上にわたってリユース品の鑑定・販売を行ってきた老舗企業です。東証スタンダード上場企業としてのガバナンス体制も整っており、取引の透明性と信頼性が高いのが特徴です。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">2. 名古屋本店「きもの館」の専門性</h3>
              <p className="text-sm text-gray-600 leading-relaxed">名古屋本店には着物専門の「きもの館」があり、着物に精通した査定員が在籍しています。着物の販売も行っているため、市場価格を熟知した適正な査定が受けられます。品揃えも豊富で、買取だけでなく購入も可能な点が他の買取専門店との違いです。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">3. 自社販売チャネルによる高価買取の可能性</h3>
              <p className="text-sm text-gray-600 leading-relaxed">コメ兵は買い取った着物を自社店舗やオンラインストアで直接販売しています。中間業者を挟まないため、市場価格に近い買取額を提示できる可能性があります。特に需要の高い正絹の振袖や訪問着、有名作家物の着物は高額査定が期待できます。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">4. ブランド品との同時査定が可能</h3>
              <p className="text-sm text-gray-600 leading-relaxed">コメ兵はブランドバッグ・時計・宝石の買取に強みを持つため、着物と一緒にブランド品を査定に出すことができます。遺品整理や引っ越しで着物とブランド品の両方を処分したい場合に便利です。</p>
            </div>
          </div>
        </section>

        <section id="items" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">買取対応品目</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">着物</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>振袖・訪問着・付け下げ</li>
                <li>留袖（黒留袖・色留袖）</li>
                <li>小紋・紬・色無地</li>
                <li>作家物・人間国宝作品</li>
                <li>反物</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">帯・和装小物</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>袋帯・名古屋帯</li>
                <li>帯締め・帯揚げ</li>
                <li>草履・バッグ</li>
                <li>和装コート・羽織</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            コメ兵の着物買取は正絹の着物が中心です。ウールやポリエステルの着物は基本的に買取対象外です。また、着物の取扱いは一部店舗に限られるため、事前に対応店舗を確認する必要があります。名古屋本店のきもの館が最も品揃えが豊富です。
          </p>
        </section>

        <section id="market-price" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">買取実績・相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left">着物の種類</th>
                  <th className="px-4 py-3 text-left">買取相場（税込）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">振袖（正絹・状態良好）</td><td className="px-4 py-3">10,000〜80,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">訪問着（正絹・作家物）</td><td className="px-4 py-3">10,000〜150,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">大島紬（証紙付き）</td><td className="px-4 py-3">15,000〜200,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">結城紬（証紙付き）</td><td className="px-4 py-3">20,000〜250,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">袋帯（正絹・西陣織等）</td><td className="px-4 py-3">3,000〜60,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">小紋・色無地</td><td className="px-4 py-3">1,000〜15,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※上記はあくまで参考相場です。実際の買取価格は着物の状態、産地、作家、証紙の有無、市場動向により変動します。</p>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-800">【景品表示法に基づく表記】当サイトに掲載されている買取相場は、過去の買取実績や業者公表データに基づく参考値であり、実際の買取価格を保証するものではありません。買取価格は査定時点の市場状況や商品状態により変動します。</p>
          </div>
        </section>

        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">良い口コミ・評判</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★★</span><span className="text-xs text-gray-500">60代女性・愛知県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">名古屋本店のきもの館に持ち込みました。着物の販売も行っている店舗なので、市場価格をよく知っている査定員さんが対応してくれました。大島紬と結城紬に高い値段がつき、合計25万円で買い取ってもらえました。さすが老舗の鑑定力だと感じました。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">50代女性・東京都</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">ブランドバッグと着物を一緒に査定してもらいました。どちらも適正な価格を提示してもらえ、まとめて売れるのが便利でした。上場企業なので安心感があります。着物は振袖と訪問着で合計8万円でした。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">40代女性・大阪府</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">宅配買取で利用しました。梱包キットが送られてきて、着物を詰めて送るだけだったので手軽でした。査定結果は5日ほどで連絡があり、提示額に納得して売却。コメ兵のオンラインストアで販売されるとのことで、大切な着物が次の方に渡ると思うと嬉しいです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★★</span><span className="text-xs text-gray-500">70代女性・愛知県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">名古屋在住なのでコメ兵本店をよく利用しています。きもの館のスタッフさんは着物に詳しく、産地や作家について教えてくれます。今回は母の形見の加賀友禅を売りましたが、12万円の値がつき満足しています。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">30代女性・神奈川県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">銀座店で着物を売りました。ブランド品のイメージが強いコメ兵ですが、着物についても知識のあるスタッフがいて安心しました。査定に20分ほどかかりましたが、丁寧に見てくれている感じがしました。</p>
            </div>
          </div>
        </section>

        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">悪い口コミ・評判</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★☆☆☆</span><span className="text-xs text-gray-500">50代女性・福岡県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">最寄りのコメ兵の店舗では着物の取扱いがありませんでした。出張買取もないため、着物を売るには名古屋や東京の店舗まで行くか宅配買取を利用する必要があります。着物買取に関しては全国対応とは言いにくいです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★☆☆</span><span className="text-xs text-gray-500">60代女性・北海道</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">出張買取がないのが不便です。着物は重いので、大量に売りたい場合は持ち運びが大変。宅配買取を利用しましたが、梱包も手間がかかりました。バイセルやウリエルのように出張買取があれば利用しやすいのですが。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★☆☆☆</span><span className="text-xs text-gray-500">40代女性・東京都</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">ブランド品の査定は丁寧でしたが、着物に関してはやや専門性が低い印象でした。着物専門の買取店で査定してもらったところ、コメ兵より3万円高い査定額が出ました。着物だけを売るなら専門店の方が良いかもしれません。</p>
            </div>
          </div>
        </section>

        <section id="merit-demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">メリット・デメリットまとめ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6b4c8a] text-white text-sm">○</span>メリット</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>創業75年超の鑑定実績と上場企業の信頼性</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>自社販売チャネルによる適正な買取価格</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>ブランド品と着物をまとめて査定可能</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>名古屋本店きもの館の着物専門査定</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>査定料無料</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2"><span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm">x</span>デメリット</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>着物取扱い店舗が限定的（全店舗対応ではない）</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>出張買取に対応していない</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>着物専門店と比べると着物の専門性がやや劣る</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>宅配買取不成立時の返送料が自己負担の場合がある</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">こんな人におすすめ</h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">1</span><div><span className="font-bold text-gray-900">名古屋近郊にお住まいの方</span><p className="mt-1 text-gray-600">名古屋本店きもの館で着物専門の査定が受けられます。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">2</span><div><span className="font-bold text-gray-900">ブランド品と着物をまとめて売りたい方</span><p className="mt-1 text-gray-600">ブランド品・時計・宝石と着物を一度に査定可能です。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">3</span><div><span className="font-bold text-gray-900">上場企業の安心感で取引したい方</span><p className="mt-1 text-gray-600">東証スタンダード上場企業としての信頼性があります。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">4</span><div><span className="font-bold text-gray-900">着物を大切に次の方に渡してほしい方</span><p className="mt-1 text-gray-600">コメ兵は自社店舗で着物を販売するため、着物好きの方に渡る可能性が高いです。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">5</span><div><span className="font-bold text-gray-900">店舗で直接査定員と話しながら売りたい方</span><p className="mt-1 text-gray-600">対面での査定は安心感があり、質問もしやすいです。</p></div></li>
            </ul>
          </div>
        </section>

        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">申し込み方法・買取の流れ</h2>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">1</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">店舗持ち込みまたは宅配申し込み</h3><p className="text-sm text-gray-600 leading-relaxed">店頭買取の場合は、着物取扱い店舗に直接持ち込み。宅配買取はWebサイトから申し込み後、梱包キットが届きます。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">2</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">査定</h3><p className="text-sm text-gray-600 leading-relaxed">査定員が着物の状態・産地・技法・証紙を確認し、市場価格をもとに査定額を算出します。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">3</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">査定額の提示・成約</h3><p className="text-sm text-gray-600 leading-relaxed">査定額に納得すれば成約。店頭の場合はその場で現金またはコメ兵ポイントで受け取れます。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">4</span></div><div><h3 className="font-bold text-gray-900 mb-2">受け取り</h3><p className="text-sm text-gray-600 leading-relaxed">宅配買取の場合は同意後、指定口座に振込されます。店頭買取は店舗での直接買取となるため、特定商取引法上のクーリングオフは適用されません。</p></div></div>
          </div>
        </section>

        <section id="comparison" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">他社との比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-3 py-3 text-left">項目</th><th className="px-3 py-3 text-center">コメ兵</th><th className="px-3 py-3 text-center">バイセル</th><th className="px-3 py-3 text-center">福ちゃん</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">運営形態</td><td className="px-3 py-3 text-center">上場企業</td><td className="px-3 py-3 text-center">上場企業</td><td className="px-3 py-3 text-center">非上場</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-3 font-medium">出張買取</td><td className="px-3 py-3 text-center">なし</td><td className="px-3 py-3 text-center">全国対応</td><td className="px-3 py-3 text-center">全国対応</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">着物専門性</td><td className="px-3 py-3 text-center">中（店舗による）</td><td className="px-3 py-3 text-center">中〜高</td><td className="px-3 py-3 text-center">高</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-3 font-medium">ブランド品同時査定</td><td className="px-3 py-3 text-center">得意</td><td className="px-3 py-3 text-center">対応</td><td className="px-3 py-3 text-center">対応</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">手数料</td><td className="px-3 py-3 text-center">査定無料</td><td className="px-3 py-3 text-center">完全無料</td><td className="px-3 py-3 text-center">完全無料</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. コメ兵で着物の買取は可能ですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. はい、正絹の着物・帯・和装小物が主な買取対象です。ただし、着物の取扱いは一部店舗に限られます。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. 手数料はかかりますか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 査定料は無料です。宅配買取の送料も無料ですが、買取不成立時の返送料は自己負担となる場合があります。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. どの店舗で着物買取に対応していますか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 名古屋本店（きもの館）をはじめとする一部大型店舗で取り扱っています。事前に電話で確認することをおすすめします。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. ブランド品と着物、どちらが得意ですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. コメ兵はブランド品・時計・宝石の買取が本業です。着物も買取可能ですが、着物専門店と比較すると専門性ではやや劣る面があります。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. 宅配買取で着物を売れますか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. はい、KOMEHYOオンラインストアを通じて宅配買取が可能です。店頭持ち込みの方がスムーズですが、遠方の方には便利です。</div></details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">まとめ：コメ兵は名古屋近郊やブランド品も売りたい方に最適</h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">コメ兵は75年以上の歴史を持つ老舗リユース企業で、上場企業の信頼性と自社販売チャネルによる適正な査定が魅力です。特に名古屋本店のきもの館は着物専門の査定を受けられる貴重な拠点です。</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">一方で、出張買取に対応していない点や着物取扱い店舗が限定的な点は、利便性の面でマイナスです。着物だけを売りたい場合は、出張買取に対応しているバイセルや福ちゃんとの併用を検討しましょう。</p>
            <p className="text-gray-700 text-sm leading-relaxed">「名古屋近郊にお住まいの方」「ブランド品と着物をまとめて売りたい方」「上場企業の安心感を求める方」にはコメ兵がおすすめです。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">関連ページ</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/reviews/buysell/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"><span className="text-xs text-[#c9a76c] font-medium">レビュー</span><p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">バイセルの着物買取｜口コミ・評判</p></Link>
            <Link href="/reviews/fukuchan/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"><span className="text-xs text-[#c9a76c] font-medium">レビュー</span><p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">福ちゃんの着物買取｜口コミ・評判</p></Link>
            <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"><span className="text-xs text-[#6b4c8a] font-medium">ランキング</span><p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">着物買取おすすめ業者ランキング</p></Link>
          </div>
        </section>
      </article>
    </>
  );
}
