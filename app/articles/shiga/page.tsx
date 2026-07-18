import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026年最新】滋賀の着物買取おすすめ5選｜近江上布・秦荘紬を高く売る",
  description:
    "滋賀県で着物買取を依頼するならどこがおすすめ？近江上布（伝統的工芸品の麻織物）・秦荘紬など滋賀が誇る織物の買取相場と、出張・持込・宅配に対応したおすすめ業者5選を比較。証紙の重要性や高く売るコツも解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/shiga/",
  },
  openGraph: {
    title: "【2026年最新】滋賀の着物買取おすすめ5選｜近江上布・秦荘紬を高く売る",
    description:
      "滋賀県で着物を高く売るためのおすすめ買取業者5選。近江上布・秦荘紬など地元織物の買取相場も解説。",
    url: "https://kimonokaitori-biyori.com/articles/shiga/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  { question: "滋賀の近江上布や秦荘紬は高く売れますか？", answer: "はい、近江上布・秦荘紬はいずれも価値ある織物で、状態と証紙が揃っていれば高価買取が期待できます。特に国の伝統的工芸品である近江上布の上質な麻織物や、証紙付きの秦荘紬は評価が高くなります。証紙がないと査定額が下がるため、購入時の証紙は必ず一緒に査定へ出しましょう。" },
  { question: "麻の夏着物（近江上布など）も買取対象ですか？", answer: "はい、近江上布などの麻織物・夏着物も買取対象です。涼やかな上質の麻は夏物として需要があり、証紙付き・状態の良いものは評価されます。単衣・夏帯などと一緒に季節を問わずまとめて査定に出すのがおすすめです。" },
  { question: "滋賀県内で着物の出張買取は無料で来てもらえますか？", answer: "主要な着物買取業者であれば、大津市・草津市・彦根市・東近江市など県内全域で無料の出張買取に対応しています。買取大吉やウリエルは出張費・査定料・キャンセル料すべて無料で、自宅にいながら査定を受けられます。京都に近く対応も手厚いエリアです。" },
  { question: "滋賀で大量の着物をまとめて売れますか？", answer: "はい、出張買取を利用すれば点数制限なく大量の着物をまとめて売却できます。蔵や箪笥に眠っている着物・帯・和装小物をまとめて査定してもらうことで、1点ずつでは値がつきにくい品もまとめ買取で評価されるケースがあります。遺品整理や生前整理でまとまった量がある場合は、事前に点数を伝えておくとスムーズです。" },
  { question: "滋賀の着物買取で注意すべき点はありますか？", answer: "突然訪問してきて着物や貴金属の買取を持ちかける「押し買い」には注意してください。信頼できる業者が自ら飛び込み営業をすることはありません。古物商許可を持ち、口コミや実績が確認できる業者を選び、必ず複数社で相見積もりを取りましょう。出張買取は契約日を含め8日間のクーリングオフ対象です。" },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "滋賀の着物買取おすすめ5選｜近江上布・秦荘紬を高く売る",
  description:
    "滋賀県で着物を高く売るためのおすすめ買取業者5選。近江上布・秦荘紬など地元織物の買取相場も解説。",
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
    logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimonokaitori-biyori.com/articles/shiga/",
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
    { "@type": "ListItem", position: 3, name: "滋賀の着物買取", item: "https://kimonokaitori-biyori.com/articles/shiga/" },
  ],
};

const orimono = [
  { name: "近江上布（おうみじょうふ）", note: "湖東地方の上質な麻織物で国の伝統的工芸品。涼やかな風合いの夏着物として人気。" },
  { name: "秦荘紬（はたしょうつむぎ）", note: "愛荘町秦荘の絣紬。真綿紬の温かみと絣の美しさが魅力。証紙付きは安定した評価。" },
  { name: "生平（きびら）・麻織物", note: "近江の麻織物は夏物として需要があり、上質品は評価される。" },
  { name: "正絹の紬・訪問着・帯", note: "京都に近く上質な着物も多い。証紙付き・作家物は高評価。" },
];

export default function ShigaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "お役立ち情報", href: "/articles/" }, { label: "滋賀の着物買取" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/shiga.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              地域別ガイド
            </span>
            <time dateTime="2026-06-03" className="text-xs text-gray-500">2026年6月3日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            滋賀の着物買取おすすめ<span className="text-[#6b4c8a]">5選</span>
            <br className="md:hidden" />
            近江上布・秦荘紬を高く売る
          </h1>
          <p className="text-gray-600 leading-relaxed">
            滋賀は、上質な麻織物「近江上布（おうみじょうふ）」や絣紬「秦荘紬（はたしょうつむぎ）」を生んできた、湖東地方を中心とする着物の名産地です。涼やかな麻の風合いが魅力の近江上布は伝統的工芸品に指定されています。この記事では、滋賀県内で着物を高く売るためのおすすめ業者5選と買取相場・高く売るコツを解説します。
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-4 mb-12">
          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
            <p>滋賀で着物を高く売るなら、近江上布・秦荘紬などの産地物に詳しい専門業者へ、証紙を添えて出張買取を依頼するのが最善です。県内全域で無料出張に対応する業者が多く、必ず2〜3社で相見積もりを取ることで査定額が大きく変わります。</p>
          </div>
        </div>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#orimono" className="hover:underline">1. 滋賀が誇る着物・織物と買取のポイント</a></li>
            <li><a href="#osusume" className="hover:underline">2. 滋賀の着物買取おすすめ業者5選</a></li>
            <li><a href="#houhou" className="hover:underline">3. 出張・持込・宅配の選び方</a></li>
            <li><a href="#kotsu" className="hover:underline">4. 滋賀で着物を高く売る3つのコツ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="orimono" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 滋賀が誇る着物・織物と買取のポイント
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">滋賀県の湖東地方（愛荘町・東近江市など）は古くから麻織物・絣紬が盛んな土地で、「近江上布」は国の伝統的工芸品に指定された上質な麻織物です。生平（きびら）や絣の技法による涼やかな風合いが特徴。秦荘紬とともに、証紙の有無が査定額を大きく左右します。</p>
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
            <p className="text-sm text-gray-700 leading-relaxed">近江上布・秦荘紬は、産地組合の証紙や伝統的工芸品マークが付いているかどうかで査定額が大きく変わります。麻織物は特に証紙が重要なので、たとう紙の証明書も必ず一緒に査定へ出しましょう。</p>
          </div>
        </section>

        <section id="osusume" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 滋賀の着物買取おすすめ業者5選
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            滋賀県内の着物買取は、産地織物の知識が豊富な全国対応の専門業者を選ぶのがポイントです。
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
              <p className="text-sm text-gray-600 leading-relaxed">点数が多い方に最適。滋賀県内は無料対応が一般的で、自宅で査定を受けられます。</p>
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
            <span className="text-[#c9a76c]">4.</span> 滋賀で着物を高く売る3つのコツ
          </h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">① 証紙・証明書を必ず添える</span><br />近江上布・秦荘紬は証紙の有無で査定額が大きく変わります。麻織物の証明書は必ず添えましょう。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">② 2〜3社で相見積もりを取る</span><br />産地物に強い業者を含めて比較。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] underline">高く売るコツ</Link>も参考に。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">③ 早めに・まとめて売る</span><br />着物は時間とともに劣化します。帯・小物もセットで出すと評価が上がります。</li>
          </ol>
        </section>

        <section id="orimono-data" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            滋賀ゆかりの織物と実売データ
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            滋賀を代表する織物「近江上布」については、当サイトが公開オークション（ヤフオク!の落札相場）で実際の取引価格を調査し、専門ページに実売データを掲載しています。売却前の相場感の目安にご覧ください。
          </p>
          <div className="border border-[#e8ddd0] rounded-lg p-4 mb-4">
            <h3 className="font-bold text-gray-900 text-sm mb-1">
              <Link href="/articles/omi-jofu/" className="text-[#6b4c8a] underline">近江上布の買取相場と実売データ</Link>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">公開オークションの落札実績では、近江上布は平均 約6,485円・最高 28,600円でした（件数・取得日・出典は専門ページに記載）。伝統的工芸品の証紙の有無や状態で評価は大きく変わります。</p>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            ※実売価格は個人間取引（オークション）の成立価格で、買取査定額はこれより低くなるのが一般的です。数値の集め方は<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>
        </section>

        <section id="oshigai" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            滋賀で訪問買取（押し買い）トラブルに遭わないために
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            「不用品を何でも買い取ります」と突然自宅を訪ね、着物や貴金属を強引に安値で買い取っていく、いわゆる「押し買い」は、特定商取引法の「訪問購入」として規制されています。消費者が頼んでいないのに自宅に来て勧誘する行為（不招請勧誘）自体が禁止されているため、約束のない飛び込みの買取業者はその場で断るのが最も安全です。
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            <li className="border border-[#e8ddd0] rounded-lg p-3">約束のない訪問買取は、玄関を開けずに断る。応対する場合も会社名・古物商許可を確認する</li>
            <li className="border border-[#e8ddd0] rounded-lg p-3">「着物を見せるだけのつもりが貴金属も査定させてほしいと言われた」が典型的な流れ。売る気のない品は見せない・渡さない</li>
            <li className="border border-[#e8ddd0] rounded-lg p-3">万一契約しても、契約書面を受け取った日を含め8日間はクーリング・オフ（無条件解約）ができ、期間中は品物の引き渡しを拒むことができます</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            不安を感じたら、<a href="https://www.pref.shiga.lg.jp/shohi/sodan/" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">滋賀県消費生活センター</a>（相談専用電話 0749-23-0999）または全国共通の消費者ホットライン「<span className="font-bold">188</span>」に相談してください。※連絡先は2026年7月に公式サイトで確認
          </p>
        </section>

        <section id="local-support" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            滋賀県で着物買取のトラブルにあったら（公的な相談先）
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            訪問買取（訪問購入）は特定商取引法の規制対象で、契約書面を受け取った日を含む8日間はクーリング・オフ（無条件解約）ができ、その期間中は着物や貴金属などの品物の引き渡しを拒むこともできます。強引な勧誘や査定額への不安など、業者とのトラブルで困ったときは、滋賀県が運営する
            <a href="https://www.pref.shiga.lg.jp/shohi/index.html" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">滋賀県消費生活センター</a>
            （彦根市）に相談できます。また、全国共通の消費者ホットライン「<span className="font-bold">188</span>（いやや）」に局番なしでかけると、最寄りの消費生活相談窓口を案内してもらえます。※2026年7月に公式サイトで確認
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            契約前の不安がある場合は、当サイトの<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] underline">着物買取のトラブル回避ガイド</Link>もあわせてご覧ください。
          </p>
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
          <h3 className="text-white text-xl font-bold mb-3">滋賀の着物、まずは無料査定で価値を確認</h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            近江上布・秦荘紬など、滋賀の織物は専門業者の目で正しく評価されます。<br />
            信頼できる着物買取業者をランキングで比較してみましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-[#c9a76c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#b8965b] transition-colors">
            おすすめ着物買取業者ランキングを見る
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">同じ近畿の着物買取ガイド</h2>
          <p className="text-sm text-gray-600 mb-4">近隣エリアでお探しの方はこちらもご覧ください。地方ごとに地元の織物と買取のポイントをまとめています。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/articles/mie/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">三重の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">三重県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/kyoto/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">京都の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">京都内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/osaka/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">大阪の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">大阪内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/hyogo/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">兵庫の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">兵庫県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/nara/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">奈良の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">奈良県内の着物買取おすすめ業者と地元の織物を解説</p>
            </Link>
            <Link href="/articles/wakayama/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">和歌山の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">和歌山県内の着物買取おすすめ業者と地元の織物を解説</p>
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
