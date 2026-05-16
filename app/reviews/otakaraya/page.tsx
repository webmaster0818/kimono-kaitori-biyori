import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "おたからやの着物買取｜フランチャイズ店の実力を検証",
  description:
    "おたからやの着物買取サービスを徹底検証。全国1,300店舗超のフランチャイズ展開、査定の質、買取価格の相場、良い口コミ・悪い口コミを正直にレビュー。振袖・訪問着・帯の買取を検討中の方必見。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/otakaraya/",
  },
  openGraph: {
    title: "おたからやの着物買取｜フランチャイズ店の実力を検証",
    description: "おたからやの着物買取を徹底検証。全国1,300店超のFC展開と口コミを正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/otakaraya/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "おたからやの着物買取｜フランチャイズ店の実力を検証",
  description: "おたからやの着物買取を徹底検証。全国1,300店超のFC展開と口コミを正直にレビュー。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/reviews/otakaraya/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "おたからやで着物は買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、おたからやでは着物の買取に対応しています。ただし、フランチャイズ店のため店舗によって着物の取扱い対応が異なります。事前に最寄り店舗に着物買取が可能か確認することをおすすめします。" } },
    { "@type": "Question", name: "おたからやの着物買取の手数料はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "おたからやでは基本的に査定料・出張料は無料です。ただし、フランチャイズ店のため、店舗によって条件が異なる場合があります。事前に確認することをおすすめします。" } },
    { "@type": "Question", name: "おたからやはフランチャイズですが査定の質は大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "おたからやは本部が研修制度を設けていますが、フランチャイズ展開のため店舗オーナーの経験や知識レベルによって査定の質にばらつきがあるのが実状です。特に着物は専門知識が必要なジャンルのため、着物に詳しいスタッフがいる店舗を選ぶことが重要です。" } },
    { "@type": "Question", name: "おたからやの出張買取は全国どこでも対応していますか？", acceptedAnswer: { "@type": "Answer", text: "おたからやは全国1,300店舗以上を展開しており、多くの地域で出張買取に対応しています。ただし、出張対応は各フランチャイズ店の判断となるため、最寄り店舗に直接問い合わせて確認する必要があります。" } },
    { "@type": "Question", name: "おたからやと買取大吉の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "どちらもフランチャイズ展開の買取チェーンですが、買取大吉は全国1,800店超で店舗数が多く、おたからやは約1,300店舗です。着物買取においては、どちらも総合買取店のため着物専門の査定力では専門店に劣る面があります。複数社で査定を比較することをおすすめします。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://kimonokaitori-biyori.com/reviews/" },
    { "@type": "ListItem", position: 3, name: "おたからや", item: "https://kimonokaitori-biyori.com/reviews/otakaraya/" },
  ],
};

export default function OtakarayaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "業者レビュー", href: "/reviews/" }, { label: "おたからや" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">FC大手チェーン</span>
            <time dateTime="2026-05-17" className="text-xs text-gray-500">2026年5月17日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            おたからやの着物買取<br className="md:hidden" />
            <span className="text-[#6b4c8a]">フランチャイズ店の実力</span>を検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            おたからやは、株式会社いーふらんが運営する買取専門チェーンで、全国1,300店舗以上をフランチャイズ展開しています。貴金属・ブランド品を主力としつつ、着物の買取にも対応。買取大吉と並ぶFC系大手買取チェーンの一つです。本記事では、おたからやの着物買取の実力を口コミや評判をもとに検証します。
          </p>
        </header>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#overview" className="hover:underline">1. おたからやの基本情報・会社概要</a></li>
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
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">おたからやの基本情報・会社概要</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">運営会社</th><td className="px-4 py-3">株式会社いーふらん</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">設立</th><td className="px-4 py-3">2000年</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">本社所在地</th><td className="px-4 py-3">神奈川県横浜市神奈川区鶴屋町3-33-2 横浜鶴屋町ビル7F</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">店舗数</th><td className="px-4 py-3">全国1,300店舗以上（フランチャイズ）</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">買取方法</th><td className="px-4 py-3">店頭買取・出張買取</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">対応エリア</th><td className="px-4 py-3">全国（店舗所在地周辺）</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">手数料</th><td className="px-4 py-3">査定料・出張料無料（店舗による）</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">入金方法</th><td className="px-4 py-3">店頭・出張はその場で現金</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            おたからやは、2000年に設立された株式会社いーふらんが運営する買取専門チェーンです。フランチャイズ方式で全国1,300店舗以上を展開しており、貴金属・ブランド品・時計の買取を主力としています。着物の買取にも対応していますが、着物の取扱いは店舗によって対応が異なります。フランチャイズのため各店舗のオーナーが独立して運営しており、サービスの質は店舗ごとに差があるのが特徴です。
          </p>
        </section>

        <section id="features" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">サービスの特徴</h2>
          <div className="space-y-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">1. 全国1,300店舗超の広いネットワーク</h3>
              <p className="text-sm text-gray-600 leading-relaxed">おたからやは全国に1,300店舗以上を展開しており、自宅や職場の近くに店舗がある可能性が高いです。気軽に持ち込みで査定を依頼できる利便性は大きなメリットです。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">2. 貴金属・ブランド品との同時査定</h3>
              <p className="text-sm text-gray-600 leading-relaxed">おたからやは貴金属やブランド品の買取に特に強みを持っています。着物と一緒に貴金属やブランド品を持ち込めば、まとめて査定してもらえるため、遺品整理や引っ越し時に便利です。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">3. 個人オーナーならではの柔軟な対応</h3>
              <p className="text-sm text-gray-600 leading-relaxed">フランチャイズの個人オーナーが運営する店舗では、大手にはない柔軟な対応が受けられることがあります。価格交渉に応じてくれたり、営業時間外の対応をしてくれたりする店舗もあります。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">4. 予約不要で気軽に持ち込み可能</h3>
              <p className="text-sm text-gray-600 leading-relaxed">多くの店舗では予約不要で着物を持ち込み査定してもらえます。買い物のついでに立ち寄って査定を依頼できる手軽さが魅力です。</p>
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
                <li>作家物（店舗による）</li>
                <li>反物</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">帯・和装小物</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>袋帯・名古屋帯</li>
                <li>帯締め・帯揚げ</li>
                <li>草履・バッグ</li>
                <li>和装小物全般</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            おたからやの着物買取対応は店舗によって異なります。着物に詳しいスタッフがいる店舗であれば幅広い品目に対応できますが、貴金属専門のスタッフのみの店舗では着物の正確な査定が難しい場合があります。事前に電話で着物買取の対応状況を確認することをおすすめします。
          </p>
        </section>

        <section id="market-price" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">買取実績・相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-4 py-3 text-left">着物の種類</th><th className="px-4 py-3 text-left">買取相場（税込）</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">振袖（正絹・状態良好）</td><td className="px-4 py-3">5,000〜60,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">訪問着（正絹）</td><td className="px-4 py-3">3,000〜100,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">大島紬（証紙付き）</td><td className="px-4 py-3">10,000〜180,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">結城紬（証紙付き）</td><td className="px-4 py-3">10,000〜200,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">袋帯（正絹）</td><td className="px-4 py-3">2,000〜40,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">小紋・色無地</td><td className="px-4 py-3">500〜10,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※上記はあくまで参考相場です。実際の買取価格は着物の状態、産地、作家、証紙の有無、市場動向、店舗により大きく変動します。</p>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-800">【景品表示法に基づく表記】当サイトに掲載されている買取相場は、過去の買取実績や業者公表データに基づく参考値であり、実際の買取価格を保証するものではありません。買取価格は査定時点の市場状況や商品状態により変動します。</p>
          </div>
        </section>

        <section id="good-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">良い口コミ・評判</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">50代女性・東京都</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">駅前のおたからやに着物を持ち込みました。予約なしでも対応してもらえ、15分ほどで査定完了。振袖と訪問着で合計4万円でした。気軽に立ち寄れるのが良いですね。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★★</span><span className="text-xs text-gray-500">60代女性・神奈川県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">近所のおたからやのオーナーさんが着物に詳しい方で、母の形見の着物を丁寧に査定してくれました。大島紬に8万円の値段がつき、とても嬉しかったです。フランチャイズでもオーナーさん次第で良い査定が受けられます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">40代女性・愛知県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">着物と一緒に貴金属も持ち込みました。貴金属の査定は非常に高く、着物は相場通りといった感じ。まとめて処分できたので便利でした。出張にも来てもらえるとのことでしたが、今回は持ち込みで十分でした。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★★</span><span className="text-xs text-gray-500">70代女性・埼玉県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">自宅の近くにおたからやがあるので利用しました。オーナーさんが親切で、着物の価値について分かりやすく説明してくれました。「この着物はどういう理由で高いのか」を教えてもらえたのが良かったです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">30代女性・大阪府</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">出張買取をお願いしました。着物10枚と帯3本で合計5万円。その場で現金を受け取れたのが良かったです。</p>
            </div>
          </div>
        </section>

        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">悪い口コミ・評判</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★☆☆☆</span><span className="text-xs text-gray-500">50代女性・千葉県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">近所のおたからやに着物を持ち込みましたが、スタッフの方が着物にあまり詳しくなく、「本部に確認します」と言われて待たされました。結局、査定額も他社より低く、専門性の差を感じました。フランチャイズなので店舗による当たり外れが大きいです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★☆☆☆</span><span className="text-xs text-gray-500">60代女性・北海道</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">A店で5万円の査定だった着物が、別のB店では2万円でした。同じおたからやなのに店舗によって倍以上の差が出るのは不安です。フランチャイズの弱点だと思います。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★☆☆</span><span className="text-xs text-gray-500">40代女性・福岡県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">貴金属の査定は良かったのですが、着物についてはあまり力を入れていない印象でした。着物だけを売りたいなら、着物専門の業者（バイセルや福ちゃん）の方が良いと思います。</p>
            </div>
          </div>
        </section>

        <section id="merit-demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">メリット・デメリットまとめ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6b4c8a] text-white text-sm">○</span>メリット</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>全国1,300店超で近くに店舗がある可能性が高い</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>予約不要で気軽に持ち込み可能</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>貴金属・ブランド品と着物をまとめて査定可能</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>個人オーナーならではの柔軟な対応</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>査定料無料（原則）</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2"><span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm">x</span>デメリット</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>店舗によって査定額や対応の質にばらつきが大きい</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>着物の専門知識がないスタッフの店舗がある</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>着物専門店と比べると査定額がやや低い傾向</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>宅配買取に対応していない店舗が多い</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">こんな人におすすめ</h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">1</span><div><span className="font-bold text-gray-900">近くの店舗で気軽に査定してもらいたい方</span><p className="mt-1 text-gray-600">全国1,300店超で、近所に店舗がある可能性が高いです。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">2</span><div><span className="font-bold text-gray-900">貴金属・ブランド品と着物をまとめて売りたい方</span><p className="mt-1 text-gray-600">特に貴金属の査定に強いので、一緒に持ち込むと便利です。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">3</span><div><span className="font-bold text-gray-900">まずは査定額の目安を知りたい方</span><p className="mt-1 text-gray-600">無料で査定してもらえるので、他社との比較材料にできます。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">4</span><div><span className="font-bold text-gray-900">着物に詳しいオーナーの店舗を知っている方</span><p className="mt-1 text-gray-600">口コミで評判の良い店舗なら、専門性の高い査定が期待できます。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">5</span><div><span className="font-bold text-gray-900">即日で現金化したい方</span><p className="mt-1 text-gray-600">店頭持ち込みならその場で現金を受け取れます。</p></div></li>
            </ul>
          </div>
        </section>

        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">申し込み方法・買取の流れ</h2>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">1</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">店舗持ち込みまたは出張予約</h3><p className="text-sm text-gray-600 leading-relaxed">最寄りの店舗に直接持ち込むか、電話で出張買取を予約。店頭は予約不要です。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">2</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">査定</h3><p className="text-sm text-gray-600 leading-relaxed">スタッフが着物の状態・産地・技法を確認し査定額を算出します。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">3</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">査定額の提示・成約</h3><p className="text-sm text-gray-600 leading-relaxed">査定額に納得すれば本人確認書類を提示して成約。その場で現金を受け取れます。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">4</span></div><div><h3 className="font-bold text-gray-900 mb-2">クーリングオフ</h3><p className="text-sm text-gray-600 leading-relaxed">出張買取の場合は8日間のクーリングオフが適用されます。店頭持ち込みは適用外です。</p></div></div>
          </div>
        </section>

        <section id="comparison" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">他社との比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-3 py-3 text-left">項目</th><th className="px-3 py-3 text-center">おたからや</th><th className="px-3 py-3 text-center">買取大吉</th><th className="px-3 py-3 text-center">バイセル</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">運営形態</td><td className="px-3 py-3 text-center">FC</td><td className="px-3 py-3 text-center">FC</td><td className="px-3 py-3 text-center">直営・上場</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-3 font-medium">店舗数</td><td className="px-3 py-3 text-center">約1,300店</td><td className="px-3 py-3 text-center">約1,800店</td><td className="px-3 py-3 text-center">少数</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">着物専門性</td><td className="px-3 py-3 text-center">低〜中</td><td className="px-3 py-3 text-center">中</td><td className="px-3 py-3 text-center">中〜高</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-3 font-medium">査定品質の安定性</td><td className="px-3 py-3 text-center">店舗による</td><td className="px-3 py-3 text-center">店舗による</td><td className="px-3 py-3 text-center">安定</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">手数料</td><td className="px-3 py-3 text-center">原則無料</td><td className="px-3 py-3 text-center">完全無料</td><td className="px-3 py-3 text-center">完全無料</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. おたからやで着物は買い取ってもらえますか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. はい、対応していますが店舗によって異なります。事前に最寄り店舗に確認することをおすすめします。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. 手数料はかかりますか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 基本的に査定料・出張料は無料ですが、FC店のため店舗によって条件が異なる場合があります。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. フランチャイズでも査定の質は大丈夫ですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 本部研修はありますが、着物の専門知識は店舗オーナーの経験に依存します。口コミで評判の良い店舗を選ぶことが重要です。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. 出張買取は全国対応ですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 出張対応は各FC店の判断となるため、最寄り店舗に直接問い合わせる必要があります。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. 買取大吉との違いは？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. どちらもFC展開の総合買取店です。買取大吉は約1,800店でおたからやより店舗数が多く、着物査定の研修体制も整っている傾向があります。</div></details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">まとめ：おたからやは近所の店舗で気軽に売りたい方向け</h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">おたからやは全国1,300店超のネットワークを持つFC買取チェーンで、近くの店舗で気軽に着物を売れる利便性が魅力です。貴金属やブランド品と一緒にまとめて査定できるのも便利なポイントです。</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">一方で、FC運営のため店舗ごとの査定額や対応の質にばらつきが大きい点は注意が必要です。着物だけを高く売りたい場合は、着物専門の査定力を持つバイセルや福ちゃんとの併用をおすすめします。</p>
            <p className="text-gray-700 text-sm leading-relaxed">着物の相見積もりの一つとして利用するか、貴金属と着物をまとめて売りたい場合に検討するのが賢い使い方です。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">関連ページ</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/reviews/daikichi/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"><span className="text-xs text-[#c9a76c] font-medium">レビュー</span><p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">買取大吉の着物買取｜口コミ・評判</p></Link>
            <Link href="/reviews/buysell/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"><span className="text-xs text-[#c9a76c] font-medium">レビュー</span><p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">バイセルの着物買取｜口コミ・評判</p></Link>
            <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"><span className="text-xs text-[#6b4c8a] font-medium">ランキング</span><p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">着物買取おすすめ業者ランキング</p></Link>
          </div>
        </section>
      </article>
    </>
  );
}
