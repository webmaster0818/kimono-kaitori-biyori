import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "友禅の種類と買取相場｜加賀友禅・京友禅・東京友禅の違い",
  description:
    "友禅染めの種類と買取相場を徹底解説。加賀友禅・京友禅・東京友禅の違い、手描き友禅と型友禅の見分け方、高く売るコツをまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/yuzen-types/" },
  openGraph: {
    title: "友禅の種類と買取相場｜加賀友禅・京友禅・東京友禅の違い",
    description: "友禅染めの種類と買取相場を解説。加賀友禅・京友禅・東京友禅の特徴と買取価格。",
    url: "https://kimonokaitori-biyori.com/articles/yuzen-types/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "友禅の着物はどのくらいで売れますか？", answer: "友禅の買取相場は種類と品質で大きく異なります。手描き友禅で3万円〜50万円以上、型友禅で3,000円〜3万円が一般的です。人間国宝や著名作家の作品はさらに高額になります。証紙や落款の有無が査定額に大きく影響します。" },
  { question: "加賀友禅と京友禅の違いは何ですか？", answer: "加賀友禅は「加賀五彩」と呼ばれる藍・臙脂・草・黄土・古代紫の5色を基調とし、写実的な草花模様と「虫食い」表現が特徴です。京友禅は華やかで多彩な色使いと金銀箔・刺繍を組み合わせた豪華な仕上がりが特徴。加賀友禅は「ぼかし」、京友禅は「はんなり」と表現されます。" },
  { question: "手描き友禅と型友禅はどう見分けますか？", answer: "手描き友禅は裏面にも色が染みており、線が微妙に不均一で温かみがあります。型友禅は裏面の色が薄く、柄のリピート（繰り返し）が見られます。また、手描きには作家の落款（サイン）が入っていることが多いです。" },
  { question: "友禅の落款はどこにありますか？", answer: "友禅の落款（作家のサイン）は一般的に着物の裾裏（おくみ下部）や衿裏に入っています。小さな朱印のような形状が多いです。落款があると作家が特定でき、高額査定につながります。" },
  { question: "友禅の着物を高く売るコツは？", answer: "証紙・落款を必ず確認して一緒に査定に出す、手描きか型友禅かを把握する、買取大吉やウリエルなど着物専門の業者に依頼する、複数社で比較する、の4つが重要です。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "友禅の種類と買取相場｜加賀友禅・京友禅・東京友禅の違い",
  description: "友禅染めの種類と買取相場を解説。加賀友禅・京友禅・東京友禅の特徴と買取価格。",
  datePublished: "2026-04-26", dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/yuzen-types/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "友禅の種類と買取相場", item: "https://kimonokaitori-biyori.com/articles/yuzen-types/" },
] };

export default function YuzenTypesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "友禅の種類と買取相場" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">友禅の種類と買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">加賀友禅・京友禅・東京友禅の違い</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              日本を代表する染色技法「友禅」の種類・産地・特徴を徹底解説。加賀友禅・京友禅・東京友禅の違いや買取相場、手描きと型友禅の見分け方、高く売るコツをまとめました。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav><ol className="space-y-2 text-sm">
              <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 友禅とは？</a></li>
              <li><a href="#types" className="text-[#6b4c8a] hover:underline">2. 友禅の3大産地と特徴</a></li>
              <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">3. 加賀友禅・京友禅・東京友禅の比較</a></li>
              <li><a href="#hand-vs-stencil" className="text-[#6b4c8a] hover:underline">4. 手描き友禅と型友禅の違い</a></li>
              <li><a href="#market" className="text-[#6b4c8a] hover:underline">5. 友禅の種類別買取相場</a></li>
              <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 友禅を高く売るコツ</a></li>
              <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">7. おすすめの買取業者</a></li>
              <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
            </ol></nav>
          </div>
        </div>
      </section>

      {/* 友禅とは */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />友禅とは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>友禅（ゆうぜん）とは、江戸時代の扇絵師・宮崎友禅斎が考案したとされる日本を代表する染色技法です。糊で防染しながら多色の染料で模様を描く技法で、<strong>絵画のような繊細で華やかな模様</strong>を着物に表現できるのが特徴です。</p>
            <p>友禅は産地によって「加賀友禅」「京友禅」「東京友禅」の3つに大別されます。それぞれ独自の色使い・技法・美意識を持ち、着物の中でも最も芸術性の高いジャンルとして評価されています。</p>
            <p>買取市場では友禅の着物は非常に人気が高く、特に<strong>手描き友禅・人間国宝の作品・落款付きの作品</strong>は高額査定が期待できます。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">加賀友禅</p>
              <p className="text-xs text-gray-600">写実的な草花と加賀五彩</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">京友禅</p>
              <p className="text-xs text-gray-600">華やかで多彩な色使い</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">東京友禅</p>
              <p className="text-xs text-gray-600">粋で洗練された色合い</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3大産地 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />友禅の3大産地と特徴
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">加賀友禅（石川県金沢市）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">加賀友禅は石川県金沢市で発展した友禅染め。「加賀五彩」と呼ばれる藍・臙脂（えんじ）・草（緑）・黄土・古代紫の5色を基調とした深みのある色使いが特徴です。</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>特徴1：写実的な草花模様</strong> - 四季の草花を写実的に描くのが加賀友禅の真骨頂。花や葉の一枚一枚まで丁寧に描きます。</p>
                <p><strong>特徴2：「虫食い」表現</strong> - 葉に虫が食った跡を描くことで、自然の儚さやリアリティを表現する独特の技法。</p>
                <p><strong>特徴3：先ぼかし</strong> - 花びらや葉の外側から中心に向かって色をぼかす技法。京友禅の後ぼかしとは逆方向。</p>
                <p><strong>特徴4：金銀箔を使わない</strong> - 京友禅と異なり、金銀箔や刺繍をほとんど使わず、染めの技術のみで表現します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">京友禅（京都府）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">京友禅は京都で発展した友禅染め。華やかで多彩な色使い、金銀箔・刺繍・絞りなどの加飾技法を組み合わせた豪華な仕上がりが特徴です。</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>特徴1：華やかな色使い</strong> - 明るく多彩な色使いで「はんなり」とした京都らしい美しさを表現。</p>
                <p><strong>特徴2：金銀箔・刺繍の使用</strong> - 金彩・銀彩・刺繍を組み合わせて立体感と豪華さを演出。</p>
                <p><strong>特徴3：後ぼかし</strong> - 花びらや葉の中心から外側に向かって色をぼかす技法。加賀友禅とは逆方向。</p>
                <p><strong>特徴4：分業制</strong> - 下絵・糊置き・染色・金彩・刺繍など20以上の工程を専門の職人が分業で仕上げます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">東京友禅（東京都）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">東京友禅は江戸の粋（いき）を反映した友禅染め。落ち着いた色合いと洗練されたデザインが特徴で、都会的でモダンな印象の着物が多いです。</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>特徴1：粋な色使い</strong> - 藍・茶・灰・黒などの渋い色を基調とした「粋」な色使い。</p>
                <p><strong>特徴2：一人で全工程</strong> - 京友禅が分業制なのに対し、東京友禅は一人の作家がすべての工程を担当するのが特徴。</p>
                <p><strong>特徴3：都会的なデザイン</strong> - 風景画や幾何学模様など、モダンで洗練されたデザインが多い。</p>
                <p><strong>特徴4：少量生産</strong> - 一人の作家が全工程を行うため生産量が少なく、希少性が高い。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section id="comparison" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />加賀友禅・京友禅・東京友禅の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">項目</th>
                  <th className="px-4 py-3 text-left font-semibold">加賀友禅</th>
                  <th className="px-4 py-3 text-left font-semibold">京友禅</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">東京友禅</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">産地</td>
                  <td className="px-4 py-3 text-gray-700">石川県金沢市</td>
                  <td className="px-4 py-3 text-gray-700">京都府</td>
                  <td className="px-4 py-3 text-gray-700">東京都</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">色使い</td>
                  <td className="px-4 py-3 text-gray-700">加賀五彩（深い色合い）</td>
                  <td className="px-4 py-3 text-gray-700">華やか・多彩</td>
                  <td className="px-4 py-3 text-gray-700">粋・渋い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">柄の特徴</td>
                  <td className="px-4 py-3 text-gray-700">写実的な草花・虫食い</td>
                  <td className="px-4 py-3 text-gray-700">華やかな古典柄</td>
                  <td className="px-4 py-3 text-gray-700">都会的・モダン</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">金銀箔</td>
                  <td className="px-4 py-3 text-gray-700">使わない</td>
                  <td className="px-4 py-3 text-gray-700">多用する</td>
                  <td className="px-4 py-3 text-gray-700">控えめ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">制作体制</td>
                  <td className="px-4 py-3 text-gray-700">一貫制作</td>
                  <td className="px-4 py-3 text-gray-700">分業制</td>
                  <td className="px-4 py-3 text-gray-700">一貫制作</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ぼかし技法</td>
                  <td className="px-4 py-3 text-gray-700">先ぼかし（外→内）</td>
                  <td className="px-4 py-3 text-gray-700">後ぼかし（内→外）</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">両方あり</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 手描きvs型 */}
      <section id="hand-vs-stencil" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />手描き友禅と型友禅の違い
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">手描き友禅</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside">
                <li>職人が筆で一筆一筆手描きで模様を描く</li>
                <li>1枚の制作に数か月〜1年以上かかる</li>
                <li>裏面にも色が染みている</li>
                <li>線が微妙に不均一で温かみがある</li>
                <li>作家の落款（サイン）が入っている</li>
                <li>買取相場：3万円〜50万円以上</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">型友禅</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside">
                <li>型紙を使って模様を染める量産技法</li>
                <li>手描きに比べて短期間で制作できる</li>
                <li>裏面の色が薄い</li>
                <li>柄のリピート（繰り返し）が見られる</li>
                <li>落款が入っていないことが多い</li>
                <li>買取相場：3,000円〜3万円</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />友禅の種類別買取相場
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">友禅の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">技法</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">加賀友禅（手描き）</td>
                  <td className="px-4 py-3 text-gray-700">手描き・落款付き</td>
                  <td className="px-4 py-3 font-medium">5万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">加賀友禅（人間国宝）</td>
                  <td className="px-4 py-3 text-gray-700">木村雨山など</td>
                  <td className="px-4 py-3 font-medium">30万円〜100万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京友禅（手描き）</td>
                  <td className="px-4 py-3 text-gray-700">手描き・落款付き</td>
                  <td className="px-4 py-3 font-medium">5万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京友禅（型友禅）</td>
                  <td className="px-4 py-3 text-gray-700">型紙使用</td>
                  <td className="px-4 py-3 font-medium">3,000円〜3万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">東京友禅（手描き）</td>
                  <td className="px-4 py-3 text-gray-700">手描き・落款付き</td>
                  <td className="px-4 py-3 font-medium">3万円〜20万円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">友禅（量産品）</td>
                  <td className="px-4 py-3 text-gray-700">インクジェット印刷</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">500円〜3,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※証紙・落款付き・美品の場合の目安です。状態や市場動向により変動します。</p>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />友禅を高く売るコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：落款を確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">手描き友禅には作家の落款（サイン）が入っています。裾裏やおくみ下部を確認し、落款があれば必ず査定員に伝えましょう。人間国宝の落款は特に高額査定につながります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：証紙を一緒に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">加賀友禅には加賀染振興協会の証紙、京友禅には京友禅協同組合連合会の証紙が付いています。証紙があると産地と品質が保証され、査定額が大きくアップします。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：着物専門の業者に依頼する</h3>
              <p className="text-sm leading-relaxed text-gray-700">友禅は種類によって価値が大きく異なります。買取大吉やウリエルなど着物専門の査定員がいる業者なら、手描きか型友禅かの判別も正確に行ってくれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：複数社で見積もりを比較</h3>
              <p className="text-sm leading-relaxed text-gray-700">友禅は高額品ほど業者間の査定額の差が大きくなります。ヒカカクの一括比較を活用して3社以上の見積もりを取りましょう。RECLOの海外販路も高額査定のチャンスです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：保存状態を保つ</h3>
              <p className="text-sm leading-relaxed text-gray-700">友禅は染料の色あせやシミが査定額に大きく影響します。直射日光を避け、桐たんすで保管。売却を決めたら早めに査定に出しましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者 */}
      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめの買取業者
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3>
              <p className="text-sm leading-relaxed text-gray-700">全国700店舗以上展開。友禅の種類・作家・落款を正確に評価できる着物専門査定員が在籍。出張・持ち込み・宅配のすべてに対応。査定料・出張費・キャンセル料すべて無料。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物専門の出張買取に強い。加賀友禅・京友禅の高額買取実績が豊富。1枚1枚丁寧に査定し、落款の特定まで行ってくれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO（リクロ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">海外販路を活かした高額査定が期待できる。友禅の着物は海外でも人気が高く、特に手描き友禅は高値で取引される傾向があります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/kaga-yuzen/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">加賀友禅の買取相場</h3>
              <p className="text-xs text-gray-600">加賀友禅の特徴と買取価格を詳しく解説。</p>
            </Link>
            <Link href="/articles/kyoto/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">京都の着物買取業者5選</h3>
              <p className="text-xs text-gray-600">京友禅の本場・京都のおすすめ業者を紹介。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">友禅の着物を売るなら、まず無料査定から</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            加賀友禅・京友禅など高額買取が期待できる友禅。落款・証紙と一緒に無料査定に出して最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
