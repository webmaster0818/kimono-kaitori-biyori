import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "バイセル vs 福ちゃん 徹底比較｜業界2強の違い",
  description:
    "バイセルと福ちゃんの着物買取を徹底比較。出張スピード、査定の専門性、買取価格、口コミ・評判の違いを詳しく解説。業界2強の特徴を把握して、あなたの着物に最適な業者を選びましょう。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/buysell-vs-fukuchan/",
  },
  openGraph: {
    title: "バイセル vs 福ちゃん 徹底比較｜業界2強の違い",
    description: "バイセルと福ちゃんの着物買取を徹底比較。業界2強の違いとあなたに合う選び方を解説。",
    url: "https://kimonokaitori-biyori.com/articles/buysell-vs-fukuchan/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const faqs = [
  { question: "バイセルと福ちゃん、着物を高く売れるのはどちらですか？", answer: "着物の種類や状態によって異なります。バイセルは海外販路を含む豊富な販路で幅広い着物に対応。福ちゃんは着物専門の査定力で作家物の評価が高い傾向があります。最も高く売るには両社に査定を依頼して比較するのが確実です。" },
  { question: "バイセルと福ちゃんに同時に査定を依頼しても問題ありませんか？", answer: "はい、まったく問題ありません。複数社に査定を依頼して比較することは、高く売るための基本です。どちらも査定料・キャンセル料無料なので気軽に利用できます。" },
  { question: "出張買取のスピードはどちらが早いですか？", answer: "バイセルの方がスピーディーです。バイセルは最短即日の出張対応が可能で、月間20,000件以上の出張実績があります。福ちゃんも出張買取に対応していますが、予約が混み合う時期は数日〜1週間程度かかる場合があります。" },
  { question: "シミや汚れがある着物を売る場合、どちらがおすすめですか？", answer: "シミや汚れがある着物を売る場合は、福ちゃんがおすすめです。福ちゃんは独自のクリーニング・修復技術を持っているため、他社で断られた着物でも値段がつく可能性があります。バイセルでも査定は可能ですが、状態の悪い着物への対応力では福ちゃんに分があります。" },
  { question: "女性の査定員を希望する場合、どちらが対応してくれますか？", answer: "バイセルと福ちゃんのどちらでも女性査定員の指名が可能です。一人暮らしの女性の方でも安心して出張買取を利用できます。予約時に「女性査定員希望」と伝えてください。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "バイセル vs 福ちゃん 徹底比較｜業界2強の違い",
  description: "バイセルと福ちゃんの着物買取を徹底比較。業界2強の違いとあなたに合う選び方を解説。",
  datePublished: "2026-05-17", dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/buysell-vs-fukuchan/" },
};

const faqStructuredData = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "お役立ち記事", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "バイセル vs 福ちゃん", item: "https://kimonokaitori-biyori.com/articles/buysell-vs-fukuchan/" },
  ],
};

export default function BuysellVsFukuchanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "お役立ち記事", href: "/articles/" }, { label: "バイセル vs 福ちゃん" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/buysell-vs-fukuchan.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">業界2強比較</span>
            <time dateTime="2026-05-17" className="text-xs text-gray-500">2026年5月17日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            バイセル vs 福ちゃん<br className="md:hidden" />
            <span className="text-[#6b4c8a]">徹底比較</span>｜業界2強の違い
          </h1>
          <p className="text-gray-600 leading-relaxed">
            着物買取業界で「2強」と称されるバイセルと福ちゃん。どちらも全国対応の出張買取サービスを提供し、テレビCMでも知名度が高い大手業者です。しかし、サービスの特徴は大きく異なります。バイセルは出張スピードと規模の大きさ、福ちゃんは着物の専門性とシミ品対応に強みがあります。本記事では、両社を7つの視点で徹底比較し、あなたの着物にはどちらが最適かを解説します。
          </p>
        </header>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#overview" className="hover:underline">1. 基本情報の比較</a></li>
            <li><a href="#speed" className="hover:underline">2. 出張スピード・対応力の比較</a></li>
            <li><a href="#quality" className="hover:underline">3. 査定の専門性の比較</a></li>
            <li><a href="#price" className="hover:underline">4. 買取価格の比較</a></li>
            <li><a href="#service" className="hover:underline">5. サービス・サポートの比較</a></li>
            <li><a href="#reviews" className="hover:underline">6. 口コミ・評判の比較</a></li>
            <li><a href="#recommend" className="hover:underline">7. タイプ別おすすめ</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="overview" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">基本情報の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-4 py-3 text-left">項目</th><th className="px-4 py-3 text-center">バイセル</th><th className="px-4 py-3 text-center">福ちゃん</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">運営会社</td><td className="px-4 py-3 text-center">株式会社BuySell Technologies</td><td className="px-4 py-3 text-center">株式会社REGATE</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-medium">上場</td><td className="px-4 py-3 text-center">東証グロース（7685）</td><td className="px-4 py-3 text-center">非上場</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">設立</td><td className="px-4 py-3 text-center">2001年</td><td className="px-4 py-3 text-center">2014年</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-medium">累計実績</td><td className="px-4 py-3 text-center">3,700万点超</td><td className="px-4 py-3 text-center">800万点超</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">買取方法</td><td className="px-4 py-3 text-center">出張・宅配・店頭</td><td className="px-4 py-3 text-center">出張・宅配・店頭</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-medium">対応エリア</td><td className="px-4 py-3 text-center">全国47都道府県</td><td className="px-4 py-3 text-center">全国対応</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3 text-center">完全無料</td><td className="px-4 py-3 text-center">完全無料</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-medium">出張スピード</td><td className="px-4 py-3 text-center">最短即日</td><td className="px-4 py-3 text-center">数日〜1週間</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">着物専門性</td><td className="px-4 py-3 text-center">中〜高</td><td className="px-4 py-3 text-center">高い</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="speed" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">出張スピード・対応力の比較</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">バイセル - スピード重視</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">バイセル最大の強みは出張スピードです。電話申し込みから最短即日の訪問が可能で、月間20,000件以上の出張買取実績を誇ります。全国47都道府県をカバーする出張ネットワークは業界最大級。「今すぐ売りたい」「急ぎで現金化したい」という方にはバイセルが最適です。</p>
              <p className="text-sm text-gray-700 leading-relaxed">24時間対応のコールセンターがあり、夜間でも予約が可能。Webフォームからの申し込みは翌営業日以降の対応となりますが、電話なら即日予約ができます。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">福ちゃん - 丁寧さ重視</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">福ちゃんの出張買取は全国対応ですが、バイセルと比べると予約から訪問までに数日〜1週間程度かかることがあります。これは人気が高く予約が混み合っていることが理由です。</p>
              <p className="text-sm text-gray-700 leading-relaxed">ただし、事前にLINE査定やWEB査定で概算額を確認してから出張を依頼できるため、「査定額が思ったより低くてがっかり」というリスクを事前に回避できます。スピードより確実性を重視する方には福ちゃんが向いています。</p>
            </div>
          </div>
          <div className="mt-4 bg-white border border-[#e8ddd0] rounded-lg p-4">
            <p className="text-sm text-gray-700"><strong>結論：</strong>スピード重視ならバイセル、事前に査定額を確認してから依頼したいなら福ちゃん。</p>
          </div>
        </section>

        <section id="quality" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">査定の専門性の比較</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">バイセルの査定</h3>
              <p className="text-sm text-gray-700 leading-relaxed">バイセルは査定員が着物を撮影し、本部のデータベースと照合して価格を算出する方式を採用しています。査定員個人の知識に依存しにくく、安定した査定が受けられる一方、現場での即断ができないため時間がかかることがあります。着物の専門性は中〜高レベルで、一般的な着物の査定には十分対応できます。</p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">福ちゃんの査定</h3>
              <p className="text-sm text-gray-700 leading-relaxed">福ちゃんは着物専門の査定員が在籍しており、産地・技法・作家に精通した査定が特徴です。一点一点の価値を見極める丁寧な査定が好評で、特に作家物や人間国宝の作品の評価に強みがあります。また、シミ・汚れがある着物でも独自のクリーニング技術により買取対応できるのは福ちゃんならではの強みです。</p>
            </div>
          </div>
          <div className="mt-4 bg-white border border-[#e8ddd0] rounded-lg p-4">
            <p className="text-sm text-gray-700"><strong>結論：</strong>一般的な着物ならどちらも遜色なし。作家物や希少品は福ちゃんの専門性が有利。シミ品も福ちゃんが強い。</p>
          </div>
        </section>

        <section id="price" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">買取価格の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-4 py-3 text-left">着物の種類</th><th className="px-4 py-3 text-center">バイセルの相場</th><th className="px-4 py-3 text-center">福ちゃんの相場</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">振袖（正絹・良好）</td><td className="px-4 py-3 text-center">10,000〜100,000円</td><td className="px-4 py-3 text-center">10,000〜120,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">訪問着（作家物）</td><td className="px-4 py-3 text-center">10,000〜200,000円</td><td className="px-4 py-3 text-center">15,000〜250,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">大島紬（証紙付き）</td><td className="px-4 py-3 text-center">15,000〜250,000円</td><td className="px-4 py-3 text-center">20,000〜300,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">結城紬（証紙付き）</td><td className="px-4 py-3 text-center">20,000〜300,000円</td><td className="px-4 py-3 text-center">25,000〜350,000円</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3">袋帯（西陣織等）</td><td className="px-4 py-3 text-center">3,000〜80,000円</td><td className="px-4 py-3 text-center">5,000〜100,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3">人間国宝の作品</td><td className="px-4 py-3 text-center">30,000〜500,000円</td><td className="px-4 py-3 text-center">50,000〜1,000,000円以上</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※上記は参考相場です。実際の買取価格は着物の状態、産地、市場動向により変動します。</p>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-800">【景品表示法に基づく表記】当サイトに掲載されている買取相場は、過去の買取実績や業者公表データに基づく参考値であり、実際の買取価格を保証するものではありません。</p>
          </div>
          <div className="mt-4 bg-white border border-[#e8ddd0] rounded-lg p-4">
            <p className="text-sm text-gray-700"><strong>結論：</strong>相場的には福ちゃんがやや高い傾向がありますが、着物の種類や状態によって逆転することもあります。必ず両社で査定を比較しましょう。</p>
          </div>
        </section>

        <section id="service" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">サービス・サポートの比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white"><th className="px-4 py-3 text-left">サービス内容</th><th className="px-4 py-3 text-center">バイセル</th><th className="px-4 py-3 text-center">福ちゃん</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">LINE査定</td><td className="px-4 py-3 text-center">対応</td><td className="px-4 py-3 text-center">対応</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-medium">フォローコール</td><td className="px-4 py-3 text-center">あり</td><td className="px-4 py-3 text-center">あり</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">女性査定員指名</td><td className="px-4 py-3 text-center">可能</td><td className="px-4 py-3 text-center">可能</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-medium">シミ品対応</td><td className="px-4 py-3 text-center">査定可能</td><td className="px-4 py-3 text-center">積極的に買取</td></tr>
                <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-3 font-medium">24時間受付</td><td className="px-4 py-3 text-center">電話24時間</td><td className="px-4 py-3 text-center">Web/LINE 24時間</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-medium">クーリングオフ</td><td className="px-4 py-3 text-center">8日間</td><td className="px-4 py-3 text-center">8日間</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="reviews" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">口コミ・評判の比較</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">バイセルの口コミ傾向</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-[#faf8f5] rounded p-3">
                  <p className="font-medium text-gray-900 mb-1">好評ポイント</p>
                  <ul className="space-y-1"><li>出張スピードが早い（最短即日）</li><li>上場企業で安心感がある</li><li>着物以外もまとめて売れる</li><li>フォローコールが丁寧</li></ul>
                </div>
                <div className="bg-red-50 rounded p-3">
                  <p className="font-medium text-gray-900 mb-1">不評ポイント</p>
                  <ul className="space-y-1"><li>着物以外の買取も勧められる</li><li>着物専門店より査定額が低い場合がある</li><li>本部確認で査定に時間がかかる</li></ul>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">福ちゃんの口コミ傾向</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-[#faf8f5] rounded p-3">
                  <p className="font-medium text-gray-900 mb-1">好評ポイント</p>
                  <ul className="space-y-1"><li>着物専門の査定員が詳しい</li><li>シミがある着物でも値段がつく</li><li>LINE査定で事前に概算がわかる</li><li>作家物の評価が高い</li></ul>
                </div>
                <div className="bg-red-50 rounded p-3">
                  <p className="font-medium text-gray-900 mb-1">不評ポイント</p>
                  <ul className="space-y-1"><li>出張予約が取りにくい時期がある</li><li>宅配査定に時間がかかる</li><li>ポリエステル着物は対象外</li></ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">タイプ別おすすめ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] border-2 border-[#6b4c8a] rounded-lg p-6">
              <h3 className="font-bold text-[#6b4c8a] text-lg mb-4">バイセルが向いている方</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>すぐに出張査定に来てほしい方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>上場企業の安心感を重視する方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>着物以外の品物もまとめて売りたい方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>地方在住で出張買取を利用したい方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span><span>初めて着物を売る方（手厚いフォロー）</span></li>
              </ul>
            </div>
            <div className="bg-[#faf8f5] border-2 border-[#c9a76c] rounded-lg p-6">
              <h3 className="font-bold text-[#c9a76c] text-lg mb-4">福ちゃんが向いている方</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span><span>作家物や高級着物を正しく評価してほしい方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span><span>事前にLINE査定で概算を知りたい方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span><span>シミ・汚れがある着物を売りたい方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span><span>一点一点丁寧に査定してほしい方</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span><span>着物に最も高い値段をつけてくれる業者を探している方</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">最も賢い選び方</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">最もおすすめの方法は、バイセルと福ちゃんの両方に査定を依頼して比較することです。どちらも査定料・キャンセル料は完全無料なので、リスクなく相見積もりが取れます。</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">効率的な方法としては、まず福ちゃんのLINE査定で概算額を確認し、その後バイセルの出張買取（最短即日）で実物査定を受けると、短期間で2社の査定額を比較できます。</p>
            <p className="text-sm text-gray-700 leading-relaxed">高額な作家物の場合は、さらに着物専門の買取店（ザ・ゴールドなど）にも査定を依頼すると、より正確な相場が把握できます。</p>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">よくある質問（FAQ）</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                  <span className="font-medium text-gray-900 text-sm pr-4">Q. {faq.question}</span>
                  <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
                </summary>
                <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. {faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">まとめ：業界2強は「どちらか」ではなく「両方」に査定を</h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">バイセルは出張スピードと上場企業の信頼性、福ちゃんは着物の専門性とシミ品対応力が強みです。どちらも業界をリードする実力派ですが、得意とする領域が異なります。</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">着物を最も高く売るためには、「どちらか一方を選ぶ」のではなく「両方に査定を依頼して比較する」のが正解です。どちらも完全無料で査定が受けられるので、手間と時間以外のコストはかかりません。</p>
            <p className="text-gray-700 text-sm leading-relaxed">大切な着物を納得のいく価格で手放すために、まずは気軽に両社に査定を依頼してみましょう。</p>
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

      <SoubaNote />
    </>
  );
}
