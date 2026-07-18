import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026年最新】栃木の着物買取おすすめ5選｜足利銘仙・結城紬を高く売る",
  description:
    "栃木県で着物買取を依頼するならどこがおすすめ？足利銘仙・本場結城紬（小山市）・真岡木綿など栃木が誇る織物の買取相場と、出張・持込・宅配に対応したおすすめ業者5選を比較。証紙の重要性や高く売るコツも解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/tochigi/",
  },
  openGraph: {
    title: "【2026年最新】栃木の着物買取おすすめ5選｜足利銘仙・結城紬を高く売る",
    description:
      "栃木県で着物を高く売るためのおすすめ買取業者5選。足利銘仙・結城紬・真岡木綿など地元織物の買取相場も解説。",
    url: "https://kimonokaitori-biyori.com/articles/tochigi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  { question: "栃木の足利銘仙や結城紬は高く売れますか？", answer: "本場結城紬は最高級の紬で、状態と証紙が揃っていれば高価買取が期待できます。足利銘仙は柄が魅力的でアンティーク人気が高く、状態が良ければ思わぬ高値がつくこともあります。結城紬は証紙、銘仙は柄・状態が重視されるため、それぞれに合わせて査定に出すのがおすすめです。" },
  { question: "アンティークの足利銘仙やシミのある着物も買取対象ですか？", answer: "はい、足利銘仙は柄に価値があるため、多少のシミや傷みがあっても買取対象になります。大正ロマン・昭和レトロの大胆な柄は国内外のコレクターに人気で、状態が良ければ高評価です。判断に迷う着物もまとめて査定に出すと良いでしょう。" },
  { question: "栃木県内で着物の出張買取は無料で来てもらえますか？", answer: "主要な着物買取業者であれば、宇都宮市・小山市・足利市・栃木市など県内全域で無料の出張買取に対応しています。買取大吉やウリエルは出張費・査定料・キャンセル料すべて無料で、自宅にいながら査定を受けられます。まずは電話やLINEで対応エリアを確認するとスムーズです。" },
  { question: "栃木で大量の着物をまとめて売れますか？", answer: "はい、出張買取を利用すれば点数制限なく大量の着物をまとめて売却できます。蔵や箪笥に眠っている着物・帯・和装小物をまとめて査定してもらうことで、1点ずつでは値がつきにくい品もまとめ買取で評価されるケースがあります。遺品整理や生前整理でまとまった量がある場合は、事前に点数を伝えておくとスムーズです。" },
  { question: "栃木の着物買取で注意すべき点はありますか？", answer: "突然訪問してきて着物や貴金属の買取を持ちかける「押し買い」には注意してください。信頼できる業者が自ら飛び込み営業をすることはありません。古物商許可を持ち、口コミや実績が確認できる業者を選び、必ず複数社で相見積もりを取りましょう。出張買取は契約日を含め8日間のクーリングオフ対象です。" },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "栃木の着物買取おすすめ5選｜足利銘仙・結城紬を高く売る",
  description:
    "栃木県で着物を高く売るためのおすすめ買取業者5選。足利銘仙・結城紬・真岡木綿など地元織物の買取相場も解説。",
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
    logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimonokaitori-biyori.com/articles/tochigi/",
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
    { "@type": "ListItem", position: 3, name: "栃木の着物買取", item: "https://kimonokaitori-biyori.com/articles/tochigi/" },
  ],
};

const orimono = [
  { name: "足利銘仙（あしかがめいせん）", note: "銘仙五大産地のひとつ。大胆でモダンな柄が魅力で、状態の良いものはアンティーク人気が高い。" },
  { name: "本場結城紬（小山）", note: "小山市は茨城県結城市と並ぶ本場結城紬の産地。証紙付き・亀甲の細かいものは高評価。" },
  { name: "真岡木綿（もおかもめん）", note: "真岡市の丈夫な木綿織物。素朴な味わいで、状態の良い手織りは需要がある。" },
  { name: "正絹の訪問着・帯", note: "都市部に近く上質な着物も多い。証紙付き・作家物は高評価。" },
];

export default function TochigiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "お役立ち情報", href: "/articles/" }, { label: "栃木の着物買取" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/tochigi.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              地域別ガイド
            </span>
            <time dateTime="2026-06-04" className="text-xs text-gray-500">2026年6月4日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            栃木の着物買取おすすめ<span className="text-[#6b4c8a]">5選</span>
            <br className="md:hidden" />
            足利銘仙・結城紬を高く売る
          </h1>
          <p className="text-gray-600 leading-relaxed">
            栃木は、銘仙の五大産地のひとつ「足利銘仙」や、小山市で織られる「本場結城紬」、丈夫な「真岡木綿」など、関東有数の織物文化を育んできた着物の名産地です。この記事では、栃木県内で着物を高く売るためのおすすめ買取業者5選と、地元織物の買取相場・高く売るコツを、地域の特性を踏まえて解説します。
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-4 mb-12">
          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
            <p>栃木で着物を高く売るなら、足利銘仙のアンティーク需要や本場結城紬に詳しい専門業者へ出張買取を依頼するのが最善です。結城紬は証紙、銘仙は柄と状態が査定の決め手。必ず2〜3社で相見積もりを取りましょう。</p>
          </div>
        </div>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#orimono" className="hover:underline">1. 栃木が誇る着物・織物と買取のポイント</a></li>
            <li><a href="#osusume" className="hover:underline">2. 栃木の着物買取おすすめ業者5選</a></li>
            <li><a href="#houhou" className="hover:underline">3. 出張・持込・宅配の選び方</a></li>
            <li><a href="#kotsu" className="hover:underline">4. 栃木で着物を高く売る3つのコツ</a></li>
            <li><a href="#local-support" className="hover:underline">5. 栃木県で着物買取のトラブルにあったら（公的な相談先）</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="orimono" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 栃木が誇る着物・織物と買取のポイント
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">栃木県は、足利市が銘仙の名産地、小山市が茨城県結城市と並ぶ本場結城紬の産地として知られます。真岡市の真岡木綿も江戸時代から続く丈夫な木綿織物。結城紬は証紙の有無、銘仙は柄の魅力が査定額を大きく左右します。茨城・栃木にまたがる産地で織られる結城紬そのものの価値や証紙の見方は<Link href="/articles/yuki-tsumugi/" className="text-[#6b4c8a] underline font-medium">結城紬の買取相場</Link>で詳しく解説しています。</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">結城紬のページでは、公開オークションの落札実績にもとづく実売データも掲載しています。実売データの集め方・出典は<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">実売データの調査方法・一覧</Link>で公開しています。</p>
          <div className="space-y-3 mb-6">
            {orimono.map((o) => (
              <div key={o.name} className="border border-[#e8ddd0] rounded-lg p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{o.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{o.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">産地物は「証紙」で価値が決まる</p>
            <p className="text-sm text-gray-700 leading-relaxed">本場結城紬は証紙（紬マーク・亀甲数の表示）で査定額が大きく変わります。足利銘仙はアンティークとして柄・状態が重視されますが、証紙があれば添えましょう。たとう紙の証明書も一緒に査定へ。</p>
          </div>
        </section>

        <section id="osusume" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 栃木の着物買取おすすめ業者5選
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            栃木県内の着物買取は、産地織物の知識が豊富な全国対応の専門業者を選ぶのがポイントです。
            詳しい比較は<Link href="/ranking/" className="text-[#6b4c8a] underline">着物買取おすすめランキング</Link>もご覧ください。
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
                <tr><td className="p-3 border-b border-[#e8ddd0] font-medium">買取大吉</td><td className="p-3 border-b border-[#e8ddd0]">全国展開で実績豊富。持込・出張の両対応。</td><td className="p-3 border-b border-[#e8ddd0]">出張・持込・宅配</td></tr>
                <tr><td className="p-3 border-b border-[#e8ddd0] font-medium">ウリエル</td><td className="p-3 border-b border-[#e8ddd0]">無店舗で経費を抑え高額査定を狙える出張専門。</td><td className="p-3 border-b border-[#e8ddd0]">出張・宅配</td></tr>
                <tr><td className="p-3 border-b border-[#e8ddd0] font-medium">RECLO</td><td className="p-3 border-b border-[#e8ddd0]">ブランド・上質な着物の販路に強み。</td><td className="p-3 border-b border-[#e8ddd0]">宅配・出張</td></tr>
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
              <p className="text-sm text-gray-600 leading-relaxed">点数が多い方に最適。栃木県内は無料対応が一般的で、自宅で査定を受けられます。</p>
            </div>
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">持込買取</h3>
              <p className="text-sm text-gray-600 leading-relaxed">その場で現金化したい方向け。主要都市の店舗で対応。少量なら手軽です。</p>
            </div>
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">宅配買取</h3>
              <p className="text-sm text-gray-600 leading-relaxed">自分のペースで送れる。梱包キット無料の業者も。遠方でも利用しやすい方法です。</p>
            </div>
          </div>
        </section>

        <section id="kotsu" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">4.</span> 栃木で着物を高く売る3つのコツ
          </h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">① 証紙・証明書を必ず添える</span><br />結城紬は証紙、足利銘仙は柄と状態が決め手。証紙があれば添え、銘仙はシミがあっても諦めず査定に。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">② 2〜3社で相見積もりを取る</span><br />産地物に強い業者を含めて比較。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] underline">高く売るコツ</Link>も参考に。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">③ 早めに・まとめて売る</span><br />着物は時間とともに劣化します。帯・小物もセットで出すと評価が上がります。</li>
          </ol>
        </section>

        <section id="local-support" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> 栃木県で着物買取のトラブルにあったら（公的な相談先）
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            訪問買取（訪問購入）は特定商取引法の規制対象で、契約書面を受け取った日を含む8日間はクーリング・オフ（無条件解約）ができ、その期間中は着物や貴金属などの品物の引き渡しを拒むこともできます。強引な勧誘や査定額への不安など、業者とのトラブルで困ったときは、栃木県が運営する
            <a href="https://www.pref.tochigi.lg.jp/c03/life/shouhi/seikatsu/center-gaiyou.html" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">栃木県消費生活センター</a>
            に相談できます。また、全国共通の消費者ホットライン「<span className="font-bold">188</span>（いやや）」に局番なしでかけると、最寄りの消費生活相談窓口を案内してもらえます。※2026年7月に公式サイトで確認
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            電話で相談する場合は、栃木県消費生活センターの相談専用電話<span className="font-bold">028-625-2227</span>へ（相談は無料。通話料は自己負担）。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            契約前の不安がある場合は、当サイトの<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] underline">着物買取のトラブル回避ガイド</Link>もあわせてご覧ください。
          </p>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">6.</span> よくある質問（FAQ）
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
          <h3 className="text-white text-xl font-bold mb-3">栃木の着物、まずは無料査定で価値を確認</h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            足利銘仙・結城紬・真岡木綿など、栃木の織物は専門業者の目で正しく評価されます。<br />
            信頼できる着物買取業者をランキングで比較してみましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-[#c9a76c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#b8965b] transition-colors">
            おすすめ着物買取業者ランキングを見る
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">同じ関東の着物買取ガイド</h2>
          <p className="text-sm text-gray-600 mb-4">近隣エリアでお探しの方はこちらもご覧ください。地方ごとに地元の織物と買取のポイントをまとめています。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/articles/ibaraki/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">茨城の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">茨城県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/gunma/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">群馬の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">群馬県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/saitama/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">埼玉の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">埼玉県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/chiba/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">千葉の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">千葉県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/tokyo/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">東京の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">東京内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/yokohama/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">神奈川の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">神奈川県内の着物買取おすすめ業者と地元の織物を解説</p>
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
