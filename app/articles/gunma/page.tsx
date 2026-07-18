import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026年最新】群馬の着物買取おすすめ5選｜桐生織・伊勢崎絣を高く売る",
  description:
    "群馬県で着物買取を依頼するならどこがおすすめ？桐生織・伊勢崎絣（伊勢崎銘仙）など群馬が誇る織物の買取相場と、出張・持込・宅配に対応したおすすめ業者5選を比較。証紙の重要性や高く売るコツも解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/gunma/",
  },
  openGraph: {
    title: "【2026年最新】群馬の着物買取おすすめ5選｜桐生織・伊勢崎絣を高く売る",
    description:
      "群馬県で着物を高く売るためのおすすめ買取業者5選。桐生織・伊勢崎絣など地元織物の買取相場も解説。",
    url: "https://kimonokaitori-biyori.com/articles/gunma/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  { question: "群馬の桐生織や伊勢崎絣は高く売れますか？", answer: "はい、桐生織・伊勢崎絣はいずれも国の伝統的工芸品で、状態と証紙が揃っていれば高価買取が期待できます。特に桐生のお召や帯地、証紙付きの上質品は評価が高くなります。証紙がないと正絹であっても査定額が下がるため、購入時の証紙は必ず一緒に査定へ出しましょう。" },
  { question: "アンティークの伊勢崎銘仙も買取対象ですか？", answer: "はい、大正〜昭和に流行した伊勢崎銘仙は、レトロな柄に人気があり買取対象です。状態の良いもの、柄が魅力的なものはアンティーク着物としてコレクター需要があり、思わぬ値がつくこともあります。シミや傷みがあっても査定可能なので、まとめて査定に出すのがおすすめです。" },
  { question: "群馬県内で着物の出張買取は無料で来てもらえますか？", answer: "主要な着物買取業者であれば、前橋市・高崎市・桐生市・伊勢崎市など県内全域で無料の出張買取に対応しています。買取大吉やウリエルは出張費・査定料・キャンセル料すべて無料で、自宅にいながら査定を受けられます。まずは電話やLINEで対応エリアを確認するとスムーズです。" },
  { question: "群馬で大量の着物をまとめて売れますか？", answer: "はい、出張買取を利用すれば点数制限なく大量の着物をまとめて売却できます。蔵や箪笥に眠っている着物・帯・和装小物をまとめて査定してもらうことで、1点ずつでは値がつきにくい品もまとめ買取で評価されるケースがあります。遺品整理や生前整理でまとまった量がある場合は、事前に点数を伝えておくと当日の査定がスムーズです。" },
  { question: "群馬の着物買取で注意すべき点はありますか？", answer: "突然訪問してきて着物や貴金属の買取を持ちかける「押し買い」には注意してください。信頼できる業者が自ら飛び込み営業をすることはありません。古物商許可を持ち、口コミや実績が確認できる業者を選び、必ず複数社で相見積もりを取りましょう。出張買取は契約日を含め8日間のクーリングオフ対象です。" },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "群馬の着物買取おすすめ5選｜桐生織・伊勢崎絣を高く売る",
  description:
    "群馬県で着物を高く売るためのおすすめ買取業者5選。桐生織・伊勢崎絣など地元織物の買取相場も解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/gunma/",
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
    { "@type": "ListItem", position: 3, name: "群馬の着物買取", item: "https://kimonokaitori-biyori.com/articles/gunma/" },
  ],
};

const orimono = [
  { name: "桐生織（きりゅうおり）", note: "「西の西陣、東の桐生」と称される国の伝統的工芸品。お召・帯地・紋織など格の高い織物。" },
  { name: "伊勢崎絣・伊勢崎銘仙", note: "伊勢崎市の絣織物で国の伝統的工芸品。大正〜昭和に流行した銘仙はアンティーク人気も。" },
  { name: "お召・帯地", note: "桐生の高い技術で織られたお召や袋帯・名古屋帯は、証紙付きの上質品が高評価。" },
  { name: "アンティーク銘仙", note: "状態の良い大正ロマン・昭和レトロの銘仙はコレクター需要があり買取対象。" },
];

export default function GunmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "お役立ち情報", href: "/articles/" }, { label: "群馬の着物買取" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12 rounded-2xl p-6 md:p-10 border border-[#e8ddd0]" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/gunma.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              地域別ガイド
            </span>
            <time dateTime="2026-06-02" className="text-xs text-gray-500">2026年6月2日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            群馬の着物買取おすすめ<span className="text-[#6b4c8a]">5選</span>
            <br className="md:hidden" />
            桐生織・伊勢崎絣を高く売る
          </h1>
          <p className="text-gray-600 leading-relaxed">
            群馬は、「西の西陣、東の桐生」と称される織物の街・桐生をはじめ、伊勢崎絣（伊勢崎銘仙）など、養蚕と織物で栄えた歴史を持つ着物の名産地です。この記事では、群馬県内で着物を高く売るためのおすすめ買取業者5選と、地元織物の買取相場・高く売るコツを、地域の特性を踏まえて解説します。
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-4 mb-12">
          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
            <p>群馬で着物を高く売るなら、桐生織や伊勢崎絣に詳しい専門業者へ、証紙を添えて出張買取を依頼するのが最善です。県内全域で無料出張に対応する業者が多く、必ず2〜3社で相見積もりを取ることで査定額が大きく変わります。</p>
          </div>
        </div>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#orimono" className="hover:underline">1. 群馬が誇る着物・織物と買取のポイント</a></li>
            <li><a href="#osusume" className="hover:underline">2. 群馬の着物買取おすすめ業者5選</a></li>
            <li><a href="#houhou" className="hover:underline">3. 出張・持込・宅配の選び方</a></li>
            <li><a href="#kotsu" className="hover:underline">4. 群馬で着物を高く売る3つのコツ</a></li>
            <li><a href="#local-support" className="hover:underline">5. 群馬県で着物買取のトラブルにあったら（公的な相談先）</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="orimono" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 群馬が誇る着物・織物と買取のポイント
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">群馬県は古くから養蚕と織物が盛んな土地で、桐生市の「桐生織」は国の伝統的工芸品に指定され、お召や帯地など格の高い織物で知られます。伊勢崎市の伊勢崎絣（伊勢崎銘仙）も伝統的工芸品で、買取市場でも証紙付きの上質品が評価されます。桐生織そのものの価値や証紙の見方は<Link href="/articles/kiryu-ori/" className="text-[#6b4c8a] underline font-medium">桐生織の買取相場</Link>で詳しく解説しています。</p>
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
            <p className="text-sm text-gray-700 leading-relaxed">桐生織・伊勢崎絣は、産地組合の証紙や伝統的工芸品マークが付いているかどうかで査定額が大きく変わります。帯地・お召の証紙、たとう紙の証明書も必ず一緒に査定へ出しましょう。</p>
          </div>
        </section>

        <section id="osusume" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 群馬の着物買取おすすめ業者5選
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            群馬県内の着物買取は、産地織物の知識が豊富な全国対応の専門業者を選ぶのがポイントです。
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
              <p className="text-sm text-gray-600 leading-relaxed">点数が多い方に最適。群馬県内は無料対応が一般的で、自宅で査定を受けられます。</p>
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
            <span className="text-[#c9a76c]">4.</span> 群馬で着物を高く売る3つのコツ
          </h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">① 証紙・証明書を必ず添える</span><br />桐生織・伊勢崎絣は証紙の有無で査定額が大きく変わります。帯地・お召の証明書もあれば添えましょう。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">② 2〜3社で相見積もりを取る</span><br />産地物に強い業者を含めて比較。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] underline">高く売るコツ</Link>も参考に。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">③ 早めに・まとめて売る</span><br />着物は時間とともに劣化します。帯・小物もセットで出すと評価が上がります。</li>
          </ol>
        </section>

        <section id="orimono-data" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            群馬ゆかりの織物と実売データ
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            群馬を代表する織物「桐生織」「伊勢崎銘仙（伊勢崎絣）」については、当サイトが公開オークション（ヤフオク!の落札相場）で実際の取引価格を調査し、専門ページに実売データを掲載しています。売却前の相場感の目安にご覧ください。
          </p>
          <div className="space-y-3 mb-4">
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                <Link href="/articles/kiryu-ori/" className="text-[#6b4c8a] underline">桐生織の買取相場と実売データ</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">公開オークションの落札実績では、桐生織全般（52件）は平均 約7,157円・最高 47,740円でした（取得日・出典は専門ページに記載）。証紙付きの帯・お召は評価が上がります。</p>
            </div>
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                <Link href="/articles/isesaki-meisen/" className="text-[#6b4c8a] underline">伊勢崎銘仙の買取相場と実売データ</Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">公開オークションの落札実績では、伊勢崎銘仙は平均 約4,524円・最高 25,000円でした（対象件数が少なく平均は振れやすい点に注意。詳細は専門ページに記載）。アンティークの着尺が上位に入る傾向です。</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            ※実売価格は個人間取引（オークション）の成立価格で、買取査定額はこれより低くなるのが一般的です。数値の集め方は<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>
        </section>

        <section id="oshigai" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            群馬で訪問買取（押し買い）トラブルに遭わないために
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
            不安を感じたら、<a href="https://www.pref.gunma.jp/page/8392.html" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">群馬県消費生活センター</a>（相談電話 027-223-3001）または全国共通の消費者ホットライン「<span className="font-bold">188</span>」に相談してください。※連絡先は2026年7月に公式サイトで確認
          </p>
        </section>

        <section id="local-support" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> 群馬県で着物買取のトラブルにあったら（公的な相談先）
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            訪問買取（訪問購入）は特定商取引法の規制対象で、契約書面を受け取った日を含む8日間はクーリング・オフ（無条件解約）ができ、その期間中は着物や貴金属などの品物の引き渡しを拒むこともできます。強引な勧誘や査定額への不安など、業者とのトラブルで困ったときは、群馬県が運営する
            <a href="https://www.pref.gunma.jp/page/8392.html" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">群馬県消費生活センター</a>
            に相談できます。また、全国共通の消費者ホットライン「<span className="font-bold">188</span>（いやや）」に局番なしでかけると、最寄りの消費生活相談窓口を案内してもらえます。※2026年7月に公式サイトで確認
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
          <h3 className="text-white text-xl font-bold mb-3">群馬の着物、まずは無料査定で価値を確認</h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            桐生織・伊勢崎絣など、群馬の織物は専門業者の目で正しく評価されます。<br />
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
            <Link href="/articles/tochigi/" className="block bg-white border border-[#e8ddd0] rounded-lg p-4 hover:bg-[#faf8f5] transition-colors group">
              <p className="text-sm font-bold text-gray-900 group-hover:text-[#6b4c8a] transition-colors">栃木の着物買取</p>
              <p className="text-xs text-gray-500 mt-1">栃木県内の着物買取おすすめ業者と地元の織物を解説</p>
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
