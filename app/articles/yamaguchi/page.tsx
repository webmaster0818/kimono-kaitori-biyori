import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026年最新】山口の着物買取おすすめ5選｜柳井縞を高く売る",
  description:
    "山口県で着物買取を依頼するならどこがおすすめ？藍の縞が美しい木綿織物「柳井縞（やないじま）」など山口が誇る織物の買取相場と、出張・持込・宅配に対応したおすすめ業者5選を比較。証紙の重要性や高く売るコツも解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/yamaguchi/",
  },
  openGraph: {
    title: "【2026年最新】山口の着物買取おすすめ5選｜柳井縞を高く売る",
    description:
      "山口県で着物を高く売るためのおすすめ買取業者5選。柳井縞など地元織物の買取相場も解説。",
    url: "https://kimonokaitori-biyori.com/articles/yamaguchi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  { question: "山口の柳井縞は高く売れますか？", answer: "柳井縞は山口を代表する織物で、状態と証紙が揃っていれば評価されます。上質な手織りや証紙付き・作家物のものは特に高く、証紙がないと査定額が下がることがあるため、購入時の証紙は必ず一緒に査定へ出しましょう。正絹の紬・訪問着・帯と一緒にまとめて査定に出すと、全体の買取額が上がりやすくなります。" },
  { question: "古い着物やシミのある着物も買取してもらえますか？", answer: "はい、状態の良くない着物や古い着物も買取対象です。産地物やアンティークは多少のシミ・傷みがあっても価値が認められることがあります。1点では値がつきにくい場合でも、まとめ買取なら評価されることが多いので、判断に迷う着物もまとめて査定に出すのがおすすめです。" },
  { question: "山口県内で着物の出張買取は無料で来てもらえますか？", answer: "主要な着物買取業者であれば、下関市・山口市・宇部市・柳井市など県内全域で無料の出張買取に対応しています。買取大吉やウリエルは出張費・査定料・キャンセル料すべて無料で、自宅にいながら査定を受けられます。まずは電話やLINEで対応エリアを確認するとスムーズです。" },
  { question: "山口で大量の着物をまとめて売れますか？", answer: "はい、出張買取を利用すれば点数制限なく大量の着物をまとめて売却できます。蔵や箪笥に眠っている着物・帯・和装小物をまとめて査定してもらうことで、1点ずつでは値がつきにくい品もまとめ買取で評価されるケースがあります。遺品整理や生前整理でまとまった量がある場合は、事前に点数を伝えておくとスムーズです。" },
  { question: "山口の着物買取で注意すべき点はありますか？", answer: "突然訪問してきて着物や貴金属の買取を持ちかける「押し買い」には注意してください。信頼できる業者が自ら飛び込み営業をすることはありません。古物商許可を持ち、口コミや実績が確認できる業者を選び、必ず複数社で相見積もりを取りましょう。出張買取は契約日を含め8日間のクーリングオフ対象です。" },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "山口の着物買取おすすめ5選｜柳井縞を高く売る",
  description:
    "山口県で着物を高く売るためのおすすめ買取業者5選。柳井縞など地元織物の買取相場も解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/yamaguchi/",
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
    { "@type": "ListItem", position: 3, name: "山口の着物買取", item: "https://kimonokaitori-biyori.com/articles/yamaguchi/" },
  ],
};

const orimono = [
  { name: "柳井縞（やないじま）", note: "藍染の縞が映える木綿織物。江戸期に特産として知られ、近年復興された。" },
  { name: "防長の木綿織物", note: "山口（防長）で織られた木綿の縞・格子。状態の良いものは評価される。" },
  { name: "正絹の訪問着・紬", note: "木綿以外の上質な着物も買取対象。証紙付き・作家物は高評価。" },
  { name: "帯・和装小物", note: "袋帯・名古屋帯や帯締め・帯揚げもまとめて査定対象。" },
];

export default function YamaguchiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "お役立ち情報", href: "/articles/" }, { label: "山口の着物買取" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/yamaguchi.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              地域別ガイド
            </span>
            <time dateTime="2026-06-04" className="text-xs text-gray-500">2026年6月4日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            山口の着物買取おすすめ<span className="text-[#6b4c8a]">5選</span>
            <br className="md:hidden" />
            柳井縞を高く売る
          </h1>
          <p className="text-gray-600 leading-relaxed">
            山口は、藍染の縞が映える木綿織物「柳井縞（やないじま）」を伝える織物の地です。古くは「柳井縞」として全国に知られ、近年その素朴で粋な縞が復興され見直されています。この記事では、山口県内で着物を高く売るためのおすすめ業者5選と、買取相場・高く売るコツを解説します。
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-4 mb-12">
          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
            <p>山口で着物を高く売るなら、柳井縞をはじめ上質な織物に詳しい専門業者へ、証紙を添えて出張買取を依頼するのが最善です。県内全域で無料出張に対応する業者が多く、必ず2〜3社で相見積もりを取りましょう。</p>
          </div>
        </div>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#orimono" className="hover:underline">1. 山口が誇る着物・織物と買取のポイント</a></li>
            <li><a href="#osusume" className="hover:underline">2. 山口の着物買取おすすめ業者5選</a></li>
            <li><a href="#houhou" className="hover:underline">3. 出張・持込・宅配の選び方</a></li>
            <li><a href="#kotsu" className="hover:underline">4. 山口で着物を高く売る3つのコツ</a></li>
            <li><a href="#local-support" className="hover:underline">5. 山口県の消費生活相談窓口とクーリング・オフ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="orimono" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 山口が誇る着物・織物と買取のポイント
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">柳井に伝わる「柳井縞」は、藍を中心に先染めした木綿糸で粋な縞を織り出す木綿織物です。江戸期には特産として広く流通し、現在は職人の手で復興されています。手仕事の上質さと作り手の証明・証紙の有無が査定額を左右します。</p>
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
            <p className="text-sm text-gray-700 leading-relaxed">柳井縞などの織物は、証紙や作り手の証明書があると査定額が大きく変わります。たとう紙の証明書や落款のわかる資料も必ず一緒に査定へ出しましょう。</p>
          </div>
        </section>

        <section id="osusume" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 山口の着物買取おすすめ業者5選
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            山口県内の着物買取は、産地織物の知識が豊富な全国対応の専門業者を選ぶのがポイントです。
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
              <p className="text-sm text-gray-600 leading-relaxed">点数が多い方に最適。山口県内は無料対応が一般的で、自宅で査定を受けられます。</p>
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
            <span className="text-[#c9a76c]">4.</span> 山口で着物を高く売る3つのコツ
          </h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">① 証紙・証明書を必ず添える</span><br />柳井縞は藍の縞の粋さと手織りの上質さが決め手。証紙・証明書があれば必ず添えましょう。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">② 2〜3社で相見積もりを取る</span><br />産地物に強い業者を含めて比較。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] underline">高く売るコツ</Link>も参考に。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">③ 早めに・まとめて売る</span><br />着物は時間とともに劣化します。帯・小物もセットで出すと評価が上がります。</li>
          </ol>
        </section>

        <section id="local-support" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> 山口県の消費生活相談窓口とクーリング・オフ
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            出張買取（訪問購入）は特定商取引法の対象で、契約書面を受け取った日を含めて8日間はクーリング・オフ（無条件解約）ができます。このクーリング・オフ期間中は、売却した着物の引き渡し自体を拒むこともできます（引渡しの拒絶権）。
          </p>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">困ったときの相談先（山口県）</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              押し買いや契約トラブルで困ったときは、<a href="https://www.pref.yamaguchi.lg.jp/site/shohi-center-top/" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">山口県消費生活センター</a>に相談できます。局番なしの消費者ホットライン「188（いやや）」に電話すると、最寄りの消費生活相談窓口につながります。
            </p>
            <p className="text-xs text-gray-500 mb-3">※2026年7月に公式サイトで確認</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              悪質業者の手口と対処法は<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] underline">着物買取トラブル事例5選と回避法</Link>で詳しく解説しています。
            </p>
          </div>
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
          <h3 className="text-white text-xl font-bold mb-3">山口の着物、まずは無料査定で価値を確認</h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            柳井縞など、山口の織物は専門業者の目で正しく評価されます。<br />
            信頼できる着物買取業者をランキングで比較してみましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-[#c9a76c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#b8965b] transition-colors">
            おすすめ着物買取業者ランキングを見る
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">同じ中国の着物買取ガイド</h2>
          <p className="text-sm text-gray-600 mb-4">近隣エリアでお探しの方はこちらもご覧ください。地方ごとに地元の織物と買取のポイントをまとめています。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/articles/tottori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">鳥取の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">鳥取県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/shimane/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">島根の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">島根県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/okayama/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">岡山の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">岡山県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/hiroshima/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">広島の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">広島県内の着物買取おすすめ業者と地元の織物を解説</p>
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
