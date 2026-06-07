import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "まんがく屋の着物買取｜口コミ・評判を徹底検証",
  description:
    "まんがく屋の着物買取サービスを徹底検証。大阪発の着物買取業者の特徴、買取対応品目、買取相場、良い口コミ・悪い口コミを正直にレビュー。出張買取・宅配買取の対応状況も解説。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/reviews/mangakuya/",
  },
  openGraph: {
    title: "まんがく屋の着物買取｜口コミ・評判を徹底検証",
    description: "まんがく屋の着物買取サービスを徹底検証。大阪発の買取業者の実力と口コミを正直にレビュー。",
    url: "https://kimonokaitori-biyori.com/reviews/mangakuya/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "まんがく屋の着物買取｜口コミ・評判を徹底検証",
  description: "まんがく屋の着物買取サービスを徹底検証。大阪発の買取業者の実力と口コミを正直にレビュー。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/reviews/mangakuya/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "まんがく屋の着物買取は無料で利用できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、まんがく屋では査定料・出張料・キャンセル料すべて無料です。査定だけの利用も可能で、金額に納得できなければ無料でお断りできます。" } },
    { "@type": "Question", name: "まんがく屋はどの地域で出張買取に対応していますか？", acceptedAnswer: { "@type": "Answer", text: "まんがく屋は全国対応の出張買取サービスを提供しています。大阪に本社を構えていますが、北海道から沖縄まで出張費無料で対応しています。ただし、一部離島や山間部では対応できない場合があります。" } },
    { "@type": "Question", name: "まんがく屋ではどのような着物が買取対象ですか？", acceptedAnswer: { "@type": "Answer", text: "振袖、訪問着、留袖、小紋、紬、色無地、帯、和装小物などの正絹着物が主な買取対象です。ウールやポリエステルの着物は買取対象外となることがあります。シミや汚れがある着物でも査定は可能です。" } },
    { "@type": "Question", name: "まんがく屋の着物買取の相場はどれくらいですか？", acceptedAnswer: { "@type": "Answer", text: "着物の種類や状態によって異なりますが、振袖で5,000〜80,000円、訪問着で5,000〜150,000円、大島紬（証紙付き）で10,000〜200,000円程度が一般的な相場です。作家物や状態の良い着物は高額査定が期待できます。" } },
    { "@type": "Question", name: "まんがく屋と大手業者（バイセル等）の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "まんがく屋は中堅規模の買取業者で、大手と比べると知名度では劣りますが、着物買取に注力しており、丁寧な査定対応が特徴です。大手業者は出張スピードやブランド力に強みがありますが、まんがく屋は個々の着物に対する丁寧な対応が評価されています。" } },
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://kimonokaitori-biyori.com/reviews/" },
    { "@type": "ListItem", position: 3, name: "まんがく屋", item: "https://kimonokaitori-biyori.com/reviews/mangakuya/" },
  ],
};

export default function MangakuyaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "業者レビュー", href: "/reviews/" }, { label: "まんがく屋" }]} />

      <SoubaNote />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/mangakuya.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">着物買取特化</span>
            <time dateTime="2026-05-17" className="text-xs text-gray-500">2026年5月17日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            まんがく屋の着物買取<br className="md:hidden" />
            <span className="text-[#6b4c8a]">口コミ・評判</span>を徹底検証
          </h1>
          <p className="text-gray-600 leading-relaxed">
            まんがく屋は、大阪府吹田市に本社を構える着物買取業者です。着物・帯・和装小物の買取を中心に、骨董品やブランド品の買取にも対応しています。全国対応の出張買取と宅配買取を提供しており、特に関西エリアでの知名度が高いサービスです。本記事では、まんがく屋の着物買取の実力を口コミや評判をもとに検証します。
          </p>
        </header>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#overview" className="hover:underline">1. まんがく屋の基本情報・会社概要</a></li>
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
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">まんがく屋の基本情報・会社概要</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700 w-1/3">運営会社</th><td className="px-4 py-3">株式会社まんがく屋</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">本社所在地</th><td className="px-4 py-3">大阪府吹田市片山町1-18-6 ベルベナー吹田ビル3F</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">買取方法</th><td className="px-4 py-3">出張買取・宅配買取・店頭買取</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">対応エリア</th><td className="px-4 py-3">全国対応（出張買取は一部地域を除く）</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">手数料</th><td className="px-4 py-3">査定料・出張料・キャンセル料すべて無料</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">入金方法</th><td className="px-4 py-3">出張・店頭はその場で現金、宅配は銀行振込</td></tr>
                <tr className="border-b border-[#e8ddd0]"><th className="bg-[#faf8f5] text-left px-4 py-3 font-medium text-gray-700">受付時間</th><td className="px-4 py-3">電話受付 9:00〜20:00</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            まんがく屋は大阪府吹田市に本社を構える着物買取業者です。着物・帯・和装小物の買取を主力事業としており、特に関西エリアでの出張買取に強みを持っています。全国対応の出張買取と宅配買取を提供しており、骨董品やブランド品の買取にも対応しています。「一点からでも出張買取OK」を掲げており、少量の着物でも気軽に出張査定を依頼できるのが特徴です。
          </p>
        </section>

        <section id="features" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">サービスの特徴</h2>
          <div className="space-y-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">1. 着物買取に注力したサービス</h3>
              <p className="text-sm text-gray-600 leading-relaxed">まんがく屋は着物買取を主力事業としており、着物に詳しい査定員が在籍しています。振袖・訪問着・紬・帯など幅広い種類の着物を取り扱っており、産地や作家物の知識を持つ査定員による丁寧な査定が特徴です。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">2. 一点からでも出張買取対応</h3>
              <p className="text-sm text-gray-600 leading-relaxed">大手業者の中には「最低○点以上」という条件がある場合もありますが、まんがく屋は一点からでも出張買取に対応しています。「着物が一枚しかないけど出張に来てもらえるか不安」という方でも安心して利用できます。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">3. 関西エリアに強い出張ネットワーク</h3>
              <p className="text-sm text-gray-600 leading-relaxed">大阪に本社を構えるまんがく屋は、関西エリア（大阪・兵庫・京都・奈良・和歌山・滋賀）での出張買取に特に強みを持っています。関西圏であれば比較的早い日程で出張査定を受けられます。全国対応もしていますが、地方では予約が取りにくい場合があります。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">4. 古い着物やシミのある着物も対応</h3>
              <p className="text-sm text-gray-600 leading-relaxed">まんがく屋では、古い着物やシミ・汚れがある着物でも査定対応しています。「こんな状態でも売れるのか？」と不安な着物でも、まずは査定を依頼してみることをおすすめします。正絹であれば値段がつく可能性があります。</p>
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
                <li>アンティーク着物</li>
                <li>反物</li>
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
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            まんがく屋では正絹の着物を中心に買取を行っています。ウールやポリエステルの着物は基本的に買取対象外ですが、正絹の着物と一緒に出す場合は引き取り可能な場合もあります。着物以外にも骨董品・ブランド品の買取にも対応しています。
          </p>
        </section>

        <section id="market-price" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">買取実績・相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-4 py-3 text-left">着物の種類</th><th className="px-4 py-3 text-left">買取相場（税込）</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">振袖（正絹・状態良好）</td><td className="px-4 py-3">5,000〜80,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">訪問着（正絹・作家物）</td><td className="px-4 py-3">5,000〜150,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">大島紬（証紙付き）</td><td className="px-4 py-3">10,000〜200,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">結城紬（証紙付き）</td><td className="px-4 py-3">15,000〜250,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">袋帯（正絹）</td><td className="px-4 py-3">2,000〜50,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">小紋・色無地</td><td className="px-4 py-3">500〜10,000円</td></tr>
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
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★★</span><span className="text-xs text-gray-500">60代女性・大阪府</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">着物3枚だけでしたが、快く出張に来てくれました。査定員の方が着物に詳しく、私が持っていた紬の着物について産地や織り方を丁寧に説明してくれました。査定額も納得のいくもので、合計5万円になりました。大手ではないですが、対応の丁寧さは大手以上だと感じました。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">50代女性・兵庫県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">関西在住なので、まんがく屋さんに依頼しました。出張日の調整もスムーズで、3日後には来てもらえました。着物20枚と帯5本を査定してもらい、合計12万円でした。一枚一枚丁寧に見てくれるのが好印象でした。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">40代女性・京都府</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">シミがある着物も含めて査定してもらいました。状態が悪いものは値段がつきませんでしたが、状態の良い訪問着と大島紬にしっかりした値段をつけてもらえました。正直に査定してくれる姿勢に好感を持ちました。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★★</span><span className="text-xs text-gray-500">70代女性・奈良県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">終活で着物を整理することにしました。40枚以上の着物を出張で見てもらいましたが、嫌な顔一つせず丁寧に対応してくれました。合計18万円の買取額で、思っていた以上の金額になりました。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★★☆</span><span className="text-xs text-gray-500">30代女性・大阪府</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">祖母の遺品整理で利用しました。着物だけでなく骨董品も一緒に見てもらえたのが助かりました。電話の対応も丁寧で、最初から最後まで気持ちよく取引できました。</p>
            </div>
          </div>
        </section>

        <section id="bad-reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">悪い口コミ・評判</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★☆☆☆</span><span className="text-xs text-gray-500">50代女性・東京都</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">関東在住ですが、出張買取の予約が2週間以上先になりました。関西が拠点なので、関東エリアは対応が遅いようです。急ぎの場合は大手のバイセルの方が早いかもしれません。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★★☆☆</span><span className="text-xs text-gray-500">40代女性・神奈川県</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">査定額はバイセルや福ちゃんと比較するとやや低めでした。知名度や規模の面で大手と比べるとやはり差があるようです。ただし、対応の丁寧さは良かったです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2"><span className="text-[#c9a76c] text-sm">★★☆☆☆</span><span className="text-xs text-gray-500">60代女性・北海道</span></div>
              <p className="text-gray-700 text-sm leading-relaxed">宅配買取を利用しましたが、査定結果の連絡まで2週間近くかかりました。連絡がなかなか来ないので不安になり、こちらから問い合わせました。査定額自体は悪くなかったのですが、対応スピードに改善の余地があると思います。</p>
            </div>
          </div>
        </section>

        <section id="merit-demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">メリット・デメリットまとめ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6b4c8a] text-white text-sm">○</span>メリット</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>着物買取に注力した専門性の高い査定</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>一点からでも出張買取に対応</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>関西エリアでの出張対応が早い</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>丁寧で押しの強くない対応</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>査定料・出張料・キャンセル料すべて無料</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2"><span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm">x</span>デメリット</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>関西以外のエリアでは出張対応が遅い場合がある</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>大手と比べると知名度・規模で劣る</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>宅配買取の査定に時間がかかる場合がある</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">&#10007;</span><span>買取額が大手業者よりやや低い場合がある</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">こんな人におすすめ</h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">1</span><div><span className="font-bold text-gray-900">関西エリアにお住まいの方</span><p className="mt-1 text-gray-600">大阪本社のため、関西エリアでの出張対応が早くスムーズです。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">2</span><div><span className="font-bold text-gray-900">少量の着物を出張で売りたい方</span><p className="mt-1 text-gray-600">一点からでも出張買取に対応。少量でも気軽に依頼できます。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">3</span><div><span className="font-bold text-gray-900">押しの強い営業が苦手な方</span><p className="mt-1 text-gray-600">穏やかで丁寧な接客が特徴。断りやすい雰囲気です。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">4</span><div><span className="font-bold text-gray-900">着物と骨董品をまとめて売りたい方</span><p className="mt-1 text-gray-600">骨董品の買取にも対応しているため、一度に片付けられます。</p></div></li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6b4c8a] text-white text-xs shrink-0 mt-0.5">5</span><div><span className="font-bold text-gray-900">大手以外の選択肢で相見積もりを取りたい方</span><p className="mt-1 text-gray-600">バイセルや福ちゃんとの比較用に査定を依頼するのもおすすめです。</p></div></li>
            </ul>
          </div>
        </section>

        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">申し込み方法・買取の流れ</h2>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">1</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">電話またはWebで申し込み</h3><p className="text-sm text-gray-600 leading-relaxed">電話（9:00〜20:00）またはWebフォームから申し込み。出張買取の訪問日時を予約します。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">2</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">査定</h3><p className="text-sm text-gray-600 leading-relaxed">着物に詳しい査定員が一点一点丁寧に査定。産地・技法・証紙の確認を行います。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">3</span><div className="w-px h-full bg-[#e8ddd0] mt-2" /></div><div className="pb-6"><h3 className="font-bold text-gray-900 mb-2">査定額の提示・成約</h3><p className="text-sm text-gray-600 leading-relaxed">査定額に納得すれば本人確認書類を提示して契約。その場で現金を受け取れます。キャンセル料は無料です。</p></div></div>
            <div className="flex gap-4"><div className="flex flex-col items-center"><span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b4c8a] text-white font-bold text-sm">4</span></div><div><h3 className="font-bold text-gray-900 mb-2">クーリングオフ期間</h3><p className="text-sm text-gray-600 leading-relaxed">出張買取の場合は8日間のクーリングオフが適用されます。</p></div></div>
          </div>
        </section>

        <section id="comparison" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">他社との比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-3 py-3 text-left">項目</th><th className="px-3 py-3 text-center">まんがく屋</th><th className="px-3 py-3 text-center">バイセル</th><th className="px-3 py-3 text-center">福ちゃん</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">規模</td><td className="px-3 py-3 text-center">中堅</td><td className="px-3 py-3 text-center">大手・上場</td><td className="px-3 py-3 text-center">大手</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-3 font-medium">出張エリア</td><td className="px-3 py-3 text-center">全国（関西に強い）</td><td className="px-3 py-3 text-center">全国47都道府県</td><td className="px-3 py-3 text-center">全国</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">最低出張点数</td><td className="px-3 py-3 text-center">1点から</td><td className="px-3 py-3 text-center">1点から</td><td className="px-3 py-3 text-center">1点から</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-3 py-3 font-medium">手数料</td><td className="px-3 py-3 text-center">完全無料</td><td className="px-3 py-3 text-center">完全無料</td><td className="px-3 py-3 text-center">完全無料</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-3 py-3 font-medium">着物専門性</td><td className="px-3 py-3 text-center">高い</td><td className="px-3 py-3 text-center">中〜高</td><td className="px-3 py-3 text-center">高い</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. まんがく屋の着物買取は無料ですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. はい、査定料・出張料・キャンセル料すべて無料です。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. どの地域で出張買取に対応していますか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 全国対応ですが、関西エリアが最もスムーズです。地方では予約に時間がかかる場合があります。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. どのような着物が買取対象ですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 正絹の着物が主な対象です。振袖・訪問着・紬・帯・和装小物など幅広く対応。シミがある着物も査定可能です。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. 買取相場はどれくらいですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. 振袖で5,000〜80,000円、訪問着で5,000〜150,000円、大島紬で10,000〜200,000円程度が一般的な相場です。</div></details>
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors"><span className="font-medium text-gray-900 text-sm pr-4">Q. 大手業者との違いは何ですか？</span><span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span></summary><div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. まんがく屋は中堅規模ですが着物買取に注力しており、丁寧な対応が特徴です。大手は出張スピードやブランド力に強みがあります。</div></details>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">まとめ：まんがく屋は関西エリアや丁寧な対応を求める方に最適</h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">まんがく屋は着物買取に注力した中堅の買取業者で、一点からでも出張買取に対応する柔軟さと丁寧な査定対応が特徴です。特に関西エリアにお住まいの方には出張対応が早く、使い勝手が良いサービスです。</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">一方で、関西以外のエリアでは出張対応に時間がかかる場合があり、買取額も大手業者と比べるとやや低い傾向があります。高額買取を目指す場合は、バイセルや福ちゃんとの相見積もりをおすすめします。</p>
            <p className="text-gray-700 text-sm leading-relaxed">「関西在住」「少量でも出張に来てほしい」「丁寧な対応を重視」という方には、まんがく屋は良い選択肢です。</p>
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
