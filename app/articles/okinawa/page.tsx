import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026年最新】沖縄の着物買取おすすめ5選｜紅型・芭蕉布・宮古上布を高く売る",
  description:
    "沖縄県で着物買取を依頼するならどこがおすすめ？琉球紅型・芭蕉布・宮古上布・久米島紬・首里織・読谷山花織など沖縄が誇る染織品の買取相場と、出張・宅配に対応したおすすめ業者5選を比較。証紙の重要性や高く売るコツも解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/okinawa/",
  },
  openGraph: {
    title: "【2026年最新】沖縄の着物買取おすすめ5選｜紅型・芭蕉布・宮古上布を高く売る",
    description:
      "沖縄県で着物を高く売るためのおすすめ買取業者5選。琉球紅型・芭蕉布・宮古上布など沖縄の染織品の買取相場も解説。",
    url: "https://kimonokaitori-biyori.com/articles/okinawa/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "沖縄の芭蕉布や宮古上布は高く売れますか？",
    answer:
      "はい、芭蕉布・宮古上布・久米島紬は重要無形文化財に指定されている沖縄を代表する織物で、状態と証紙が揃っていれば高価買取が期待できます。特に手績みの糸を用いた本物の宮古上布や、伝統的な技法で織られた芭蕉布は希少で評価が高くなります。産地組合の証紙・反物の証明書は必ず一緒に査定へ出してください。",
  },
  {
    question: "琉球紅型の着物は買取対象ですか？",
    answer:
      "はい、琉球紅型（びんがた）は鮮やかな色彩が特徴の沖縄の代表的な染物で、着物・帯ともに買取対象です。城間家・知念家など有名な紅型工房の作品や、作家物・証紙付きのものは特に評価が高くなります。落款や証明書があれば必ず添えて査定に出しましょう。",
  },
  {
    question: "沖縄県内・離島でも出張買取に来てもらえますか？",
    answer:
      "本島（那覇市・沖縄市・浦添市など）は出張買取に対応している業者が多くあります。離島の場合は出張対応が難しいケースもありますが、宅配買取なら全国どこからでも利用可能です。梱包キットを無料で送ってくれる業者も多いので、まずは対応エリアと方法を電話やLINEで確認するのがおすすめです。",
  },
  {
    question: "首里織や読谷山花織もまとめて売れますか？",
    answer:
      "はい、首里織・読谷山花織・八重山上布・与那国織など沖縄の伝統織物はいずれも買取対象です。宅配や出張のまとめ買取を利用すれば、複数の着物・帯・反物をまとめて査定してもらえます。産地ごとの証紙が価値の決め手になるため、証紙付きのものは特に分けて査定に出すと良いでしょう。",
  },
  {
    question: "沖縄の着物買取で注意すべき点はありますか？",
    answer:
      "突然訪問して買取を持ちかける「押し買い」には注意してください。信頼できる業者が飛び込み営業をすることはありません。古物商許可を持ち、口コミや実績が確認できる業者を選び、必ず複数社で相見積もりを取りましょう。出張買取は契約日を含め8日間のクーリングオフ対象です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "沖縄の着物買取おすすめ5選｜紅型・芭蕉布・宮古上布を高く売る",
  description:
    "沖縄県で着物を高く売るためのおすすめ買取業者5選。琉球紅型・芭蕉布・宮古上布など沖縄の染織品の買取相場も解説。",
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
    logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimonokaitori-biyori.com/articles/okinawa/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "お役立ち情報", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "沖縄の着物買取", item: "https://kimonokaitori-biyori.com/articles/okinawa/" },
  ],
};

const orimono = [
  { name: "宮古上布（みやこじょうふ）", note: "苧麻を手績みした最高級の麻織物。重要無形文化財。希少で非常に高額になりやすい。" },
  { name: "芭蕉布（ばしょうふ）", note: "糸芭蕉から採った繊維で織る沖縄北部・喜如嘉の織物。重要無形文化財。" },
  { name: "久米島紬（くめじまつむぎ）", note: "泥染め・草木染めの素朴な風合いが魅力。重要無形文化財に指定。" },
  { name: "琉球紅型（びんがた）", note: "鮮やかな色彩の型染め。城間家・知念家など有名工房の作品は高評価。" },
  { name: "首里織・読谷山花織ほか", note: "首里織・読谷山花織・八重山上布・与那国織など多彩な伝統織物が買取対象。" },
];

export default function OkinawaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "お役立ち情報", href: "/articles/" }, { label: "沖縄の着物買取" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/okinawa.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              地域別ガイド
            </span>
            <time dateTime="2026-06-02" className="text-xs text-gray-500">2026年6月2日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            沖縄の着物買取おすすめ<span className="text-[#6b4c8a]">5選</span>
            <br className="md:hidden" />
            紅型・芭蕉布・宮古上布を高く売る
          </h1>
          <p className="text-gray-600 leading-relaxed">
            沖縄は、琉球紅型・芭蕉布・宮古上布・久米島紬・首里織など、
            本土とは異なる独自の染織文化を育んできた染織の宝庫です。
            この記事では、沖縄県内で着物・反物を高く売るためのおすすめ買取業者5選と、
            沖縄の染織品の買取相場・高く売るコツを、地域の特性を踏まえて解説します。
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-4 mb-12">
          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
            <p>
              沖縄で着物を高く売るなら、宮古上布・芭蕉布・久米島紬・琉球紅型などの琉球染織に詳しい
              専門業者へ、証紙を添えて宅配または出張で査定を依頼するのが最善です。離島は宅配買取が便利で、
              必ず2〜3社で相見積もりを取ることで査定額が大きく変わります。
            </p>
          </div>
        </div>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#orimono" className="hover:underline">1. 沖縄が誇る染織品と買取のポイント</a></li>
            <li><a href="#osusume" className="hover:underline">2. 沖縄の着物買取おすすめ業者5選</a></li>
            <li><a href="#houhou" className="hover:underline">3. 出張・持込・宅配の選び方</a></li>
            <li><a href="#kotsu" className="hover:underline">4. 沖縄で着物を高く売る3つのコツ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="orimono" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 沖縄が誇る染織品と買取のポイント
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            沖縄は「琉球染織」と総称される多彩な伝統織物の産地で、宮古上布・芭蕉布・久米島紬は
            いずれも国の重要無形文化財に指定されています。これらは買取市場でも非常に評価が高く、
            証紙の有無が査定額を大きく左右します。
          </p>
          <div className="space-y-3 mb-6">
            {orimono.map((o) => (
              <div key={o.name} className="border border-[#e8ddd0] rounded-lg p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{o.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{o.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">琉球染織は「証紙」と「希少性」で価値が決まる</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              宮古上布・芭蕉布・久米島紬などは、産地組合の証紙や反物の証明書が付いているかどうかで
              査定額が大きく変わります。生産量が限られる希少な織物のため、状態が良く証紙の揃ったものは
              特に高評価です。たとう紙の証明書も必ず一緒に査定へ出しましょう。
            </p>
          </div>
        </section>

        <section id="osusume" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 沖縄の着物買取おすすめ業者5選
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            沖縄の着物買取は、琉球染織の知識が豊富な全国対応の専門業者を選ぶのがポイントです。
            離島や遠方でも宅配買取なら利用できます。詳しい比較は
            <Link href="/ranking/" className="text-[#6b4c8a] underline">着物買取おすすめランキング</Link>もご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#e8ddd0] rounded-lg">
              <thead>
                <tr className="bg-[#faf8f5] text-gray-900">
                  <th className="p-3 text-left border-b border-[#e8ddd0]">業者</th>
                  <th className="p-3 text-left border-b border-[#e8ddd0]">特徴</th>
                  <th className="p-3 text-left border-b border-[#e8ddd0]">対応</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr><td className="p-3 border-b border-[#e8ddd0] font-medium">買取大吉</td><td className="p-3 border-b border-[#e8ddd0]">全国展開で実績豊富。本島の持込・出張に対応。</td><td className="p-3 border-b border-[#e8ddd0]">出張・持込・宅配</td></tr>
                <tr><td className="p-3 border-b border-[#e8ddd0] font-medium">ウリエル</td><td className="p-3 border-b border-[#e8ddd0]">無店舗で経費を抑え高額査定を狙える。</td><td className="p-3 border-b border-[#e8ddd0]">出張・宅配</td></tr>
                <tr><td className="p-3 border-b border-[#e8ddd0] font-medium">RECLO</td><td className="p-3 border-b border-[#e8ddd0]">上質な着物・染織品の販路に強み。</td><td className="p-3 border-b border-[#e8ddd0]">宅配・出張</td></tr>
                <tr><td className="p-3 border-b border-[#e8ddd0] font-medium">ティファナ</td><td className="p-3 border-b border-[#e8ddd0]">幅広い品目を扱い、まとめ売りに対応。</td><td className="p-3 border-b border-[#e8ddd0]">出張・持込・宅配</td></tr>
                <tr><td className="p-3 font-medium">ヒカカク！</td><td className="p-3">一括査定で複数社をまとめて比較できる。</td><td className="p-3">一括査定</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="houhou" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">3.</span> 出張・持込・宅配の選び方
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">出張買取</h3>
              <p className="text-sm text-gray-600 leading-relaxed">那覇など本島の都市部で便利。点数が多い方に最適。離島は対応可否を要確認。</p>
            </div>
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">持込買取</h3>
              <p className="text-sm text-gray-600 leading-relaxed">その場で現金化したい方向け。本島の店舗で対応。少量なら手軽。</p>
            </div>
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">宅配買取</h3>
              <p className="text-sm text-gray-600 leading-relaxed">離島・遠方でも全国から利用可能。梱包キット無料の業者も。沖縄では特に便利。</p>
            </div>
          </div>
        </section>

        <section id="kotsu" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">4.</span> 沖縄で着物を高く売る3つのコツ
          </h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">① 証紙・証明書を必ず添える</span><br />宮古上布・芭蕉布・久米島紬は証紙の有無で査定額が大きく変わります。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">② 琉球染織に詳しい業者で相見積もり</span><br />2〜3社を比較。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] underline">高く売るコツ</Link>も参考に。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">③ 反物のまま・帯もセットで</span><br />仕立て前の反物や帯・小物もセットで出すと評価が上がります。</li>
          </ol>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                  <span className="font-medium text-gray-900 text-sm pr-4">Q. {f.question}</span>
                  <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">&#9662;</span>
                </summary>
                <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">A. {f.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">沖縄の染織品、まずは無料査定で価値を確認</h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            宮古上布・芭蕉布・久米島紬・琉球紅型など、沖縄の織物は専門業者の目で正しく評価されます。<br />
            信頼できる着物買取業者をランキングで比較してみましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-[#c9a76c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#b8965b] transition-colors">
            おすすめ着物買取業者ランキングを見る
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">同じ九州・沖縄の着物買取ガイド</h2>
          <p className="text-sm text-gray-600 mb-4">近隣エリアでお探しの方はこちらもご覧ください。地方ごとに地元の織物と買取のポイントをまとめています。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/articles/fukuoka/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">福岡の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">福岡県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/saga/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">佐賀の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">佐賀県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/nagasaki/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">長崎の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">長崎県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/kumamoto/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">熊本の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">熊本県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/oita/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">大分の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">大分県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/miyazaki/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">宮崎の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">宮崎県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/kagoshima/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">鹿児島の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">鹿児島県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">関連ページ</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/articles/tsumugi-types/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#6b4c8a] font-medium">産地・種類</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">紬の種類と買取相場</p>
            </Link>
            <Link href="/articles/certificate-guide/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#c9a76c] font-medium">お役立ち情報</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">証紙・証明書の重要性</p>
            </Link>
            <Link href="/articles/sell-high-tips/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#e8a0b6] font-medium">お役立ち情報</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">着物を高く売る7つのコツ</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
