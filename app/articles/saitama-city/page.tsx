import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "【2026年最新】さいたま市の着物買取おすすめ5選｜無料出張・持込・宅配対応",
  description:
    "さいたま市で着物買取を依頼するならどこがおすすめ？出張・持込・宅配に対応したさいたま市内のおすすめ業者5選を比較。市内の対応エリアや買取相場、高く売るコツを解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/saitama-city/",
  },
  openGraph: {
    title: "【2026年最新】さいたま市の着物買取おすすめ5選｜無料出張・持込・宅配対応",
    description:
      "さいたま市で着物を高く売るためのおすすめ買取業者5選。市内の対応エリアや高く売るコツも解説。",
    url: "https://kimonokaitori-biyori.com/articles/saitama-city/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  { question: "さいたま市で着物の持ち込み買取はできますか？", answer: "はい、さいたま市内には着物の持ち込み買取に対応した店舗があります。買取大吉などは主要エリアに店舗を展開しており、少量の着物なら持ち込みでその場査定が可能です。点数が多い場合は無料の出張買取の方が手間がかからずおすすめです。事前に電話やLINEで対応店舗・予約の要否を確認するとスムーズです。" },
  { question: "さいたま市内は出張買取に無料で対応していますか？", answer: "主要な着物買取業者であれば、さいたま市内全域で出張費・査定料・キャンセル料すべて無料の出張買取に対応しています。買取大吉やウリエルは自宅にいながら査定を受けられ、その場で現金化も可能です。まずは対応エリアと日時を電話・LINEで確認しましょう。" },
  { question: "古い着物やシミのある着物もさいたま市で売れますか？", answer: "はい、状態の良くない着物や古い着物も買取対象です。産地物やアンティークは多少のシミ・傷みがあっても価値が認められることがあります。1点では値がつきにくい場合でも、まとめ買取なら評価されることが多いので、判断に迷う着物もまとめて査定に出すのがおすすめです。" },
  { question: "さいたま市でまとめて大量の着物を売れますか？", answer: "はい、出張買取を利用すれば点数制限なく大量の着物をまとめて売却できます。箪笥や蔵に眠っている着物・帯・和装小物をまとめて査定してもらうことで、1点ずつでは値がつきにくい品もまとめ買取で評価されるケースがあります。遺品整理や引っ越しでまとまった量がある場合は、事前に点数を伝えておくとスムーズです。" },
  { question: "さいたま市の着物買取で注意すべき点はありますか？", answer: "突然訪問してきて着物や貴金属の買取を持ちかける「押し買い」には注意してください。信頼できる業者が自ら飛び込み営業をすることはありません。古物商許可を持ち、口コミや実績が確認できる業者を選び、必ず複数社で相見積もりを取りましょう。出張買取は契約日を含め8日間のクーリングオフ対象です。" },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "さいたま市の着物買取おすすめ5選｜無料出張・持込・宅配対応",
  description:
    "さいたま市で着物を高く売るためのおすすめ買取業者5選。市内の対応エリアや高く売るコツも解説。",
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
    logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimonokaitori-biyori.com/articles/saitama-city/",
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
    { "@type": "ListItem", position: 3, name: "さいたま市の着物買取", item: "https://kimonokaitori-biyori.com/articles/saitama-city/" },
  ],
};

const areas = ["西区", "北区", "大宮区", "見沼区", "中央区", "桜区", "浦和区", "南区", "緑区", "岩槻区"];

export default function SaitamaCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "お役立ち情報", href: "/articles/" }, { label: "さいたま市の着物買取" }]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              地域別ガイド
            </span>
            <time dateTime="2026-06-05" className="text-xs text-gray-500">2026年6月5日</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            さいたま市の着物買取おすすめ<span className="text-[#6b4c8a]">5選</span>
            <br className="md:hidden" />
            無料出張・持込・宅配対応
          </h1>
          <p className="text-gray-600 leading-relaxed">
            さいたま市は埼玉県の県庁所在地で、大宮区・浦和区など10の区からなる政令指定都市です。人口が多く、着物の出張買取・持込買取ともに業者の対応が充実しています。この記事では、さいたま市で着物を高く売るためのおすすめ業者5選と、対応エリア・高く売るコツを解説します。
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-4 mb-12">
          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
            <p>さいたま市で着物を高く売るなら、市内全域で無料出張に対応する全国対応の専門業者へ、証紙を添えて依頼するのが最善です。持込・出張・宅配から選び、必ず2〜3社で相見積もりを取りましょう。</p>
          </div>
        </div>

        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li><a href="#area" className="hover:underline">1. さいたま市の着物買取のポイントと対応エリア</a></li>
            <li><a href="#osusume" className="hover:underline">2. さいたま市の着物買取おすすめ業者5選</a></li>
            <li><a href="#houhou" className="hover:underline">3. 出張・持込・宅配の選び方</a></li>
            <li><a href="#kotsu" className="hover:underline">4. さいたま市で着物を高く売る3つのコツ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        <section id="area" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> さいたま市の着物買取のポイントと対応エリア
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">さいたま市は10の区からなる県庁所在地で、大宮・浦和を中心に着物買取の需要があります。人形のまち岩槻区など歴史ある地域も含み、旧家の着物も多く出ます。点数が多い場合は無料の出張買取が便利です。</p>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-3">さいたま市の主な対応エリア（出張買取・持込）</p>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="inline-block bg-white border border-[#e8ddd0] text-gray-700 text-xs px-3 py-1 rounded-full">{a}</span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            埼玉全体の織物や産地の特徴・買取相場は<Link href="/articles/saitama/" className="text-[#6b4c8a] underline">埼玉の着物買取ガイド</Link>でも詳しく解説しています。あわせてご覧ください。
          </p>
        </section>

        <section id="osusume" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> さいたま市の着物買取おすすめ業者5選
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            さいたま市で着物を売るなら、出張・持込・宅配に対応した全国対応の専門業者を選ぶのがポイントです。
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
              <p className="text-sm text-gray-600 leading-relaxed">点数が多い方に最適。さいたま市は市内全域で無料出張に対応する業者が多く、自宅で査定を受けられます。</p>
            </div>
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">持込買取</h3>
              <p className="text-sm text-gray-600 leading-relaxed">その場で現金化したい方向け。さいたま市は店舗網も比較的充実しており、少量なら手軽です。</p>
            </div>
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">宅配買取</h3>
              <p className="text-sm text-gray-600 leading-relaxed">自分のペースで送れる。梱包キット無料の業者も。忙しい方に便利な方法です。</p>
            </div>
          </div>
        </section>

        <section id="kotsu" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">4.</span> さいたま市で着物を高く売る3つのコツ
          </h2>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">① 証紙・証明書を必ず添える</span><br />正絹の訪問着や紬・帯は証紙・作家物が高評価の決め手。証明書があれば必ず添えましょう。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">② 2〜3社で相見積もりを取る</span><br />さいたま市は業者の選択肢が多いので、複数社で比較を。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] underline">高く売るコツ</Link>も参考に。</li>
            <li className="border border-[#e8ddd0] rounded-lg p-4"><span className="font-bold text-[#6b4c8a]">③ 早めに・まとめて売る</span><br />着物は時間とともに劣化します。帯・小物もセットで出すと評価が上がります。</li>
          </ol>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="border border-[#e8ddd0] rounded-lg p-4 group">
                <summary className="font-bold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center">
                  {f.question}
                  <span className="text-[#6b4c8a] group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-[#6b4c8a] rounded-lg p-6 md:p-8 text-center mb-12">
          <p className="text-white font-bold text-lg mb-2">さいたま市で着物を売るなら、まず無料査定から</p>
          <p className="text-white/90 text-sm mb-5">さいたま市内なら持込・出張・宅配と選択肢が豊富。複数業者の無料査定で最高額を確認しましょう。</p>
          <Link href="/ranking/" className="inline-block bg-white text-[#6b4c8a] font-bold px-6 py-3 rounded-lg hover:bg-[#faf8f5] transition-colors">
            おすすめ着物買取業者ランキングを見る
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">関連ページ</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/articles/saitama/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#6b4c8a] font-medium">地域別ガイド</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">埼玉の着物買取</p>
            </Link>
            <Link href="/articles/mochikomi-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group">
              <span className="text-xs text-[#c9a76c] font-medium">お役立ち情報</span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">持ち込み買取ガイド</p>
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
