import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "紬の種類と買取相場まとめ｜大島紬・結城紬・塩沢紬・牛首紬",
  description:
    "紬の種類と買取相場を徹底解説。大島紬・結城紬・塩沢紬・牛首紬・久米島紬など主要な紬の特徴・産地・買取価格をまとめました。証紙の見分け方も紹介。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/tsumugi-types/" },
  openGraph: {
    title: "紬の種類と買取相場まとめ｜大島紬・結城紬・塩沢紬・牛首紬",
    description: "紬の種類と買取相場を徹底解説。大島紬・結城紬・塩沢紬・牛首紬の特徴と買取価格。",
    url: "https://kimonokaitori-biyori.com/articles/tsumugi-types/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "紬の着物は高く売れますか？", answer: "はい、紬は着物の中でも特に人気が高く、高額買取が期待できるジャンルです。特に大島紬・結城紬は需要が安定しており、証紙付きであれば数万円〜数十万円の買取が可能です。買取大吉やウリエルなど着物専門の査定員に見てもらいましょう。" },
  { question: "大島紬と結城紬、どちらが高く売れますか？", answer: "一般的に、重要無形文化財に指定されている本場結城紬の方が希少性が高く、買取相場も高めです。ただし大島紬でも12マルキ以上の細かい絣模様のものは非常に高額になります。いずれも証紙の有無が査定額を大きく左右します。" },
  { question: "紬の証紙がない場合、査定額は下がりますか？", answer: "はい、証紙がないと産地や製法の証明が難しくなるため、査定額は2〜5割程度下がる傾向があります。ただし、経験豊富な査定員なら生地の質感や織り方から産地を判断できる場合もあります。買取大吉やウリエルなど専門業者に査定を依頼しましょう。" },
  { question: "機械織りの紬でも売れますか？", answer: "はい、機械織りでも売れます。ただし手織りに比べると買取額は低くなります。大島紬の場合、手織りは「手織り」の証紙、機械織りは「織機」の証紙で区別されます。機械織りでも正絹で状態が良ければ数千円〜数万円の値がつきます。" },
  { question: "紬の着物を高く売るコツは？", answer: "証紙を一緒に出す、複数社で査定を比較する、帯とセットで出す、状態が良いうちに売る、の4つが重要です。特に証紙は買取額に数万円の差が出ることがあるため、必ず探して一緒に査定に出しましょう。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "紬の種類と買取相場まとめ｜大島紬・結城紬・塩沢紬・牛首紬",
  description: "紬の種類と買取相場を徹底解説。大島紬・結城紬・塩沢紬・牛首紬の特徴と買取価格。",
  datePublished: "2026-04-26", dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/tsumugi-types/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "紬の種類と買取相場", item: "https://kimonokaitori-biyori.com/articles/tsumugi-types/" },
] };

export default function TsumugiTypesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "紬の種類と買取相場" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">紬の種類と買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">大島紬・結城紬・塩沢紬・牛首紬</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              日本を代表する紬の着物について、種類・産地・特徴・買取相場を徹底解説。大島紬・結城紬・塩沢紬・牛首紬・久米島紬など主要な紬の価値と、高く売るためのポイントをまとめました。
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
              <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 紬とは？</a></li>
              <li><a href="#types" className="text-[#6b4c8a] hover:underline">2. 紬の主要な種類と特徴</a></li>
              <li><a href="#market" className="text-[#6b4c8a] hover:underline">3. 紬の種類別買取相場一覧</a></li>
              <li><a href="#certificate" className="text-[#6b4c8a] hover:underline">4. 紬の証紙の見分け方</a></li>
              <li><a href="#tips" className="text-[#6b4c8a] hover:underline">5. 紬を高く売るコツ</a></li>
              <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">6. 紬の買取におすすめの業者</a></li>
              <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
            </ol></nav>
          </div>
        </div>
      </section>

      {/* 紬とは */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紬とは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>紬（つむぎ）とは、紬糸（つむぎいと）を使って織られた絹織物のことです。真綿や屑繭から手で紡いだ糸を使うため、独特の節（ふし）のある風合いが特徴。<strong>カジュアルな着物の最高峰</strong>として着物愛好家から高い支持を得ています。</p>
            <p>紬は全国各地に産地があり、それぞれの地域の気候・風土・伝統技法によって個性豊かな織物が生まれています。大島紬・結城紬・塩沢紬・牛首紬・久米島紬・黄八丈・十日町紬など、日本の着物文化を代表する銘柄が揃っています。</p>
            <p>着物の格としてはカジュアル（普段着〜おしゃれ着）に分類されますが、生産工程の複雑さや希少性から、<strong>価格は数十万円〜数百万円に達するものも</strong>あり、買取市場でも高値で取引されています。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">紬糸</p>
              <p className="text-xs text-gray-600">手紡ぎ糸の独特な風合い</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">先染め</p>
              <p className="text-xs text-gray-600">糸を染めてから織る技法</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">全国の産地</p>
              <p className="text-xs text-gray-600">各地の風土が生む個性</p>
            </div>
          </div>
        </div>
      </section>

      {/* 紬の種類 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紬の主要な種類と特徴
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">大島紬（鹿児島県・奄美大島）</h3>
              <p className="text-sm leading-relaxed text-gray-700">泥染めと精緻な絣模様が特徴の日本三大紬の一つ。軽くてシワになりにくく、着心地の良さで知られます。マルキ数（絣の細かさ）が高いほど高額。12マルキ以上は特に希少。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">結城紬（茨城県・栃木県）</h3>
              <p className="text-sm leading-relaxed text-gray-700">真綿から手紡ぎした糸を地機で手織りする伝統技法。重要無形文化財に指定。ふんわりとした温かみのある風合いが特徴で、着るほどに体に馴染む「育てる着物」。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">塩沢紬（新潟県南魚沼市）</h3>
              <p className="text-sm leading-relaxed text-gray-700">越後の雪国で生まれた紬。細かい十字絣や亀甲絣が特徴で、シャリ感のある独特の風合いが魅力。本塩沢とも呼ばれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">牛首紬（石川県白山市）</h3>
              <p className="text-sm leading-relaxed text-gray-700">二頭の蚕が作る「玉繭」から紡いだ糸で織る紬。非常に丈夫で「釘が抜ける」ほどの強度があると言われます。生産量が少なく希少価値が高い。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">久米島紬（沖縄県久米島）</h3>
              <p className="text-sm leading-relaxed text-gray-700">沖縄の自然素材（車輪梅・泥・グール）で染めた草木染めの紬。重要無形文化財に指定。温かみのある色合いと素朴な風合いが魅力。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">黄八丈（東京都八丈島）</h3>
              <p className="text-sm leading-relaxed text-gray-700">八丈島の植物染料で染めた黄色・茶色・黒の三色が特徴。鮮やかな黄色は「刈安（かりやす）」という植物で染められます。東京都の伝統工芸品。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 買取相場一覧 */}
      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紬の種類別買取相場一覧
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">紬の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">産地</th>
                  <th className="px-4 py-3 text-left font-semibold">指定</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大島紬（手織り）</td>
                  <td className="px-4 py-3 text-gray-700">鹿児島・奄美</td>
                  <td className="px-4 py-3 text-gray-700">伝統的工芸品</td>
                  <td className="px-4 py-3 font-medium">1万円〜15万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大島紬（12マルキ以上）</td>
                  <td className="px-4 py-3 text-gray-700">鹿児島・奄美</td>
                  <td className="px-4 py-3 text-gray-700">伝統的工芸品</td>
                  <td className="px-4 py-3 font-medium">10万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">結城紬（本場）</td>
                  <td className="px-4 py-3 text-gray-700">茨城・栃木</td>
                  <td className="px-4 py-3 text-gray-700">重要無形文化財</td>
                  <td className="px-4 py-3 font-medium">3万円〜20万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">塩沢紬</td>
                  <td className="px-4 py-3 text-gray-700">新潟県</td>
                  <td className="px-4 py-3 text-gray-700">伝統的工芸品</td>
                  <td className="px-4 py-3 font-medium">5,000円〜5万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">牛首紬</td>
                  <td className="px-4 py-3 text-gray-700">石川県</td>
                  <td className="px-4 py-3 text-gray-700">伝統的工芸品</td>
                  <td className="px-4 py-3 font-medium">1万円〜10万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">久米島紬</td>
                  <td className="px-4 py-3 text-gray-700">沖縄県</td>
                  <td className="px-4 py-3 text-gray-700">重要無形文化財</td>
                  <td className="px-4 py-3 font-medium">1万円〜10万円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">黄八丈</td>
                  <td className="px-4 py-3 text-gray-700">東京都</td>
                  <td className="px-4 py-3 text-gray-700">伝統的工芸品</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">5,000円〜8万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※証紙付き・美品の場合の目安です。状態や市場動向により変動します。</p>
        </div>
      </section>

      {/* 証紙の見分け方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紬の証紙の見分け方
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">大島紬の証紙</h3>
              <p className="text-sm leading-relaxed text-gray-700">「本場奄美大島紬」は地球印の証紙、「本場大島紬」（鹿児島県本土）は旗印の証紙が付いています。手織りか機械織りか、絣の種類（マルキ数）も証紙に記載されています。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">結城紬の証紙</h3>
              <p className="text-sm leading-relaxed text-gray-700">本場結城紬には「本場結城紬卸商協同組合」の証紙が付きます。重要無形文化財に指定されるのは「手紡ぎ・手括り・地機織り」の三条件を満たしたもののみです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">伝統的工芸品の証紙</h3>
              <p className="text-sm leading-relaxed text-gray-700">経済産業大臣指定の伝統的工芸品には「伝統マーク」（伝の字を丸で囲んだマーク）が入った証紙が付きます。この証紙がある紬は産地と品質が保証されています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紬を高く売るコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：証紙は必ず一緒に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">紬の証紙は産地と品質の証明です。証紙の有無で買取額が2〜5倍変わることもあります。たとう紙の中やタンスの引き出しに入っていないか確認しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：着物専門の業者に依頼する</h3>
              <p className="text-sm leading-relaxed text-gray-700">紬は種類によって価値が大きく異なります。買取大吉やウリエルなど着物専門の査定員がいる業者なら、マルキ数や織り方の違いを正確に評価してくれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：複数社で比較する</h3>
              <p className="text-sm leading-relaxed text-gray-700">紬は業者によって得意・不得意があり査定額に差が出やすいジャンルです。ヒカカクの一括比較を活用して3社以上の見積もりを取りましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：帯とセットで出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">紬に合う帯（名古屋帯・半幅帯など）とセットで出すとプラス査定になる可能性があります。和装小物もまとめて出しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：状態が良いうちに売る</h3>
              <p className="text-sm leading-relaxed text-gray-700">紬は丈夫な生地ですが、長期保管によるカビ・虫食い・色褪せは避けられません。着用する予定がなければ早めの売却がおすすめです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紬の買取におすすめの業者
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3>
              <p className="text-sm leading-relaxed text-gray-700">全国700店舗以上。紬の種類・マルキ数・証紙を正確に評価できる着物専門査定員が在籍。持ち込み・出張・宅配すべてに対応。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物専門の出張買取に強い。大島紬・結城紬の高額買取実績が豊富。大量の紬もまとめて査定可能。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO（リクロ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">海外販路を持ち、大島紬・結城紬は海外でも人気が高いため高額査定が期待できる。宅配買取で全国対応。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
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
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/oshima-tsumugi/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">大島紬の買取相場</h3>
              <p className="text-xs text-gray-600">大島紬の種類別買取価格を詳しく解説。</p>
            </Link>
            <Link href="/articles/yuki-tsumugi/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">結城紬の買取相場</h3>
              <p className="text-xs text-gray-600">結城紬の特徴と買取価格を詳しく解説。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">紬の着物を売るなら、まず無料査定から</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            大島紬・結城紬など高額買取が期待できる紬。証紙と一緒に無料査定に出して最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
