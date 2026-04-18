import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "訪問着・留袖の買取相場まとめ｜高く売れる条件とは",
  description:
    "訪問着の買取相場（3,000〜5万円）、色留袖・黒留袖の相場を徹底解説。加賀友禅・京友禅は高額買取。紋の有無の影響や高く売れる条件をまとめました。2026年最新情報。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/houmongi-tomesode/",
  },
  openGraph: {
    title: "訪問着・留袖の買取相場まとめ｜高く売れる条件とは",
    description:
      "訪問着・色留袖・黒留袖の買取相場と、加賀友禅・京友禅など高く売れる条件を解説。",
    url: "https://kimonokaitori-biyori.com/articles/houmongi-tomesode/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "訪問着と留袖ではどちらが高く売れますか？",
    answer:
      "一般的に訪問着の方が高く売れる傾向があります。訪問着はフォーマルからセミフォーマルまで幅広い場面で着用でき、需要が安定しているためです。一方、留袖は主に結婚式の親族が着用するもので、使用場面が限られるため需要がやや限定的です。ただし、加賀友禅や京友禅の高級品であれば、留袖でも高額買取が期待できます。",
  },
  {
    question: "紋が入った訪問着や留袖は買取価格に影響しますか？",
    answer:
      "紋の有無は買取価格に影響します。訪問着の場合、紋なし（しゃれ着として着用可能）の方が汎用性が高く、需要があるため高値がつきやすい傾向があります。留袖の場合は、五つ紋が正式ですが、家紋が入っていると他の方が着用しにくいため、紋を入れ替える費用分が差し引かれることがあります。一つ紋や三つ紋の色留袖は比較的需要があります。",
  },
  {
    question: "加賀友禅の訪問着はいくらで売れますか？",
    answer:
      "加賀友禅の訪問着は、一般的な作品で3万円〜8万円、有名作家（初代・二代目由水十久、木村雨山など人間国宝作品）のものは10万円〜50万円以上の買取価格が期待できます。加賀友禅落款が確認でき、証紙がある場合はさらに高額になります。加賀友禅は色彩の美しさと写実的な花鳥画が特徴で、中古市場でも安定した人気があります。",
  },
  {
    question: "古い留袖でも買い取ってもらえますか？",
    answer:
      "はい、古い留袖でも買取対象になることが多いです。ただし、経年劣化によるシミ・カビ・色あせがある場合は査定額が大幅に下がります。特に黒留袖は黒地のため、色あせや退色が目立ちやすい傾向があります。逆に、状態の良い昭和〜平成初期の高級品は、クラシックな柄として再評価されることもあります。まずは無料査定で確認しましょう。",
  },
  {
    question: "訪問着・留袖を高く売るにはどの業者がいいですか？",
    answer:
      "訪問着・留袖を高く売るには、着物専門の買取業者に依頼することが最も重要です。着物に詳しい査定員がいる業者であれば、友禅の技法や作家を正しく評価してもらえます。また、複数の業者に相見積もりを取ることで、最も高い価格で売ることができます。当サイトのランキングページでおすすめの買取業者を比較していますので、参考にしてください。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "訪問着・留袖の買取相場まとめ｜高く売れる条件とは",
  description:
    "訪問着・色留袖・黒留袖の買取相場と、加賀友禅・京友禅など高く売れる条件を解説。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
    logo: {
      "@type": "ImageObject",
      url: "https://kimonokaitori-biyori.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimonokaitori-biyori.com/articles/houmongi-tomesode/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://kimonokaitori-biyori.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "買取相場",
      item: "https://kimonokaitori-biyori.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "訪問着・留袖",
      item: "https://kimonokaitori-biyori.com/articles/houmongi-tomesode/",
    },
  ],
};

export default function HoumongiTomesodePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Breadcrumb
        items={[
          { label: "買取相場", href: "/articles/" },
          { label: "訪問着・留袖" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              2026年最新版
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">訪問着・留袖の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                高く売れる条件とは
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              訪問着と留袖はフォーマルな着物として根強い需要があります。加賀友禅・京友禅の高級品は特に高額買取が期待できます。種類別の相場や高く売れる条件を詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年4月15日
            </p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />
              この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li>
                  <a href="#houmongi" className="text-[#6b4c8a] hover:underline">
                    1. 訪問着の買取相場
                  </a>
                </li>
                <li>
                  <a href="#tomesode" className="text-[#6b4c8a] hover:underline">
                    2. 留袖の買取相場（色留袖・黒留袖）
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-[#6b4c8a] hover:underline">
                    3. 訪問着と留袖の買取価格比較
                  </a>
                </li>
                <li>
                  <a href="#yuzen" className="text-[#6b4c8a] hover:underline">
                    4. 加賀友禅・京友禅は高額買取
                  </a>
                </li>
                <li>
                  <a href="#mon" className="text-[#6b4c8a] hover:underline">
                    5. 紋の有無が査定額に与える影響
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 高く売るためのポイント
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    7. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 訪問着の相場 */}
      <section id="houmongi" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            訪問着の買取相場
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              訪問着は、結婚式のゲスト、入学式・卒業式、お茶会、パーティーなど幅広い場面で着用できるフォーマル着物です。着物の中でも<strong>需要が安定しており、比較的高い買取価格</strong>が期待できます。
            </p>
            <p>
              一般的な訪問着の買取相場は<strong>3,000円〜5万円</strong>です。ただし、加賀友禅や京友禅の高級品、有名作家物であれば5万円〜30万円以上の買取価格がつくこともあります。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">訪問着の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">買取相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">一般的な正絹訪問着</td>
                  <td className="px-4 py-3">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-600">量産品や呉服店購入品</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京友禅の訪問着</td>
                  <td className="px-4 py-3">1万円〜5万円</td>
                  <td className="px-4 py-3 text-gray-600">手描き友禅は高額に</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">加賀友禅の訪問着</td>
                  <td className="px-4 py-3">3万円〜8万円</td>
                  <td className="px-4 py-3 text-gray-600">加賀五彩の色使いが特徴</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">有名作家の訪問着</td>
                  <td className="px-4 py-3">5万円〜30万円以上</td>
                  <td className="px-4 py-3 text-gray-600">人間国宝作品は最高額</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">総絞り訪問着</td>
                  <td className="px-4 py-3">2万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-600 rounded-br-lg">手作業の絞り技法が高評価</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">訪問着が高く売れる理由</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>結婚式・入学式・お茶会など着用機会が多く、中古需要が安定</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>未婚・既婚を問わず着用でき、年齢層も幅広い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>紋なしでも着用可能で、汎用性が高い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>華やかな柄が多く、レンタル需要も大きい</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 留袖の相場 */}
      <section id="tomesode" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            留袖の買取相場（色留袖・黒留袖）
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              留袖は最もフォーマルな着物のひとつで、主に結婚式で新郎新婦の母親や親族が着用します。色留袖と黒留袖の2種類があり、それぞれ買取相場が異なります。
            </p>
            <p>
              留袖全体の買取相場は<strong>3,000円〜4万円</strong>程度です。色留袖の方が汎用性が高いため、黒留袖よりもやや高い相場になっています。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-lg">色留袖の買取相場</h3>
              <p className="text-2xl font-bold text-[#c9a76c] mb-3">3,000円〜4万円</p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                色留袖は黒以外の色地に裾模様が入った着物です。一つ紋〜五つ紋まであり、紋の数によって格式が変わります。三つ紋以上であればフォーマルな場面に対応でき、一つ紋であれば準礼装として幅広く着用可能です。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#6b4c8a]">
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">種類</th>
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">相場</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">一般品</td>
                      <td className="px-2 py-2">3,000円〜1万円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">友禅・高級品</td>
                      <td className="px-2 py-2">1万円〜4万円</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">作家物</td>
                      <td className="px-2 py-2">4万円〜15万円以上</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-lg">黒留袖の買取相場</h3>
              <p className="text-2xl font-bold text-[#c9a76c] mb-3">1,000円〜3万円</p>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                黒留袖は黒地に裾模様が入った最も格式の高い着物です。既婚女性が結婚式で着用する第一礼装として知られています。五つ紋が基本で、使用場面が限定的なため、色留袖や訪問着と比べると需要がやや少なく、買取相場も低めです。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#6b4c8a]">
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">種類</th>
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">相場</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">一般品</td>
                      <td className="px-2 py-2">1,000円〜5,000円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">友禅・高級品</td>
                      <td className="px-2 py-2">5,000円〜3万円</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">作家物</td>
                      <td className="px-2 py-2">3万円〜10万円以上</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比較 */}
      <section id="comparison" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            訪問着と留袖の買取価格比較
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            訪問着と留袖（色留袖・黒留袖）の買取相場を一覧で比較してみましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">項目</th>
                  <th className="px-4 py-3 text-left font-semibold">訪問着</th>
                  <th className="px-4 py-3 text-left font-semibold">色留袖</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">黒留袖</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">一般品の相場</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">3,000円〜2万円</td>
                  <td className="px-4 py-3">3,000円〜1万円</td>
                  <td className="px-4 py-3">1,000円〜5,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">高級品の相場</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">2万円〜5万円</td>
                  <td className="px-4 py-3">1万円〜4万円</td>
                  <td className="px-4 py-3">5,000円〜3万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">作家物の相場</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">5万円〜30万円以上</td>
                  <td className="px-4 py-3">4万円〜15万円以上</td>
                  <td className="px-4 py-3">3万円〜10万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">着用場面</td>
                  <td className="px-4 py-3">結婚式・入学式・お茶会等</td>
                  <td className="px-4 py-3">結婚式・式典等</td>
                  <td className="px-4 py-3">結婚式（親族）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">需要の高さ</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">高い</td>
                  <td className="px-4 py-3">中程度</td>
                  <td className="px-4 py-3">やや低い</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold rounded-bl-lg">紋の影響</td>
                  <td className="px-4 py-3">紋なしの方が需要あり</td>
                  <td className="px-4 py-3">一つ紋が最も需要あり</td>
                  <td className="px-4 py-3 rounded-br-lg">五つ紋が基本</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 加賀友禅・京友禅 */}
      <section id="yuzen" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            加賀友禅・京友禅は高額買取
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              訪問着や留袖の中でも、<strong>加賀友禅と京友禅</strong>は特に高い買取価格が期待できます。いずれも日本を代表する友禅染めの技法で、手描きの作品は芸術的な価値が認められています。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">加賀友禅</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                石川県金沢市を中心に生産される友禅染め。「加賀五彩」と呼ばれる藍・臙脂（えんじ）・黄土・草・古代紫の5色を基調とした写実的な花鳥画が特徴です。京友禅と異なり刺繍や金箔を使わず、染めだけで表現する点が評価されています。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#c9a76c]">
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">作家</th>
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">買取相場</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">木村雨山（人間国宝）</td>
                      <td className="px-2 py-2">30万円〜100万円以上</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">由水十久</td>
                      <td className="px-2 py-2">10万円〜50万円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">百貫華峰</td>
                      <td className="px-2 py-2">5万円〜20万円</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">一般作家</td>
                      <td className="px-2 py-2">3万円〜10万円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">京友禅</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                京都で生産される友禅染め。華やかで雅な色彩が特徴で、手描き友禅に加えて刺繍・金箔・絞りなど多彩な技法を組み合わせた豪華な作品が多いです。千總・龍村美術織物など老舗ブランドの作品は特に高く評価されています。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#c9a76c]">
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">ブランド・作家</th>
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">買取相場</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">羽田登喜男（人間国宝）</td>
                      <td className="px-2 py-2">20万円〜80万円以上</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">千總</td>
                      <td className="px-2 py-2">5万円〜20万円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">森口華弘（人間国宝）</td>
                      <td className="px-2 py-2">15万円〜50万円以上</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">一般品</td>
                      <td className="px-2 py-2">1万円〜5万円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 紋の影響 */}
      <section id="mon" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            紋の有無が査定額に与える影響
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物に入れる家紋（紋）は、着物の格式を示す重要な要素です。しかし、買取においては紋の有無が必ずしもプラスに働くとは限りません。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">紋あり</th>
                  <th className="px-4 py-3 text-left font-semibold">紋なし</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700">格式は上がるが汎用性が下がる</td>
                  <td className="px-4 py-3 text-gray-700">幅広い場面で着用可能</td>
                  <td className="px-4 py-3 font-medium">紋なしの方がやや有利</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">色留袖</td>
                  <td className="px-4 py-3 text-gray-700">一つ紋〜五つ紋で格式が変わる</td>
                  <td className="px-4 py-3 text-gray-700">紋なしは稀</td>
                  <td className="px-4 py-3 font-medium">一つ紋が最も需要あり</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">黒留袖</td>
                  <td className="px-4 py-3 text-gray-700">五つ紋が基本（必須）</td>
                  <td className="px-4 py-3 text-gray-700">なし（基本的に五つ紋）</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">紋替え費用が考慮される</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">ポイント：</strong>
              家紋が入っている着物は、次の購入者が同じ家紋でない限り紋替えが必要になります。紋替えの費用（5,000円〜1万円程度）が査定額から差し引かれることがあります。ただし、「通紋」（桐紋など一般的な家紋）であれば影響は小さくなります。縫い紋（刺繍の紋）は比較的容易に変更できるため、染め紋よりも影響が少ない傾向です。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            高く売るためのポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：着物専門の買取業者に依頼
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                訪問着・留袖の価値を正しく見極めるには、友禅の技法や作家の知識が不可欠です。リサイクルショップではなく、着物専門の査定員がいる業者に依頼しましょう。加賀友禅や京友禅の落款を識別できる業者であれば、正当な評価が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：証紙・落款を必ず添える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅の「加賀染振興協会」証紙や京友禅の証紙、作家の落款は、査定額を大きく左右します。たとう紙の中や購入時の箱を確認し、必ず着物と一緒に提出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もり
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                業者によって査定基準が異なるため、同じ訪問着でも数万円の差がつくことがあります。3社以上の無料査定を利用して、最も高い金額を提示した業者に売りましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保つ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                シミ・カビ・色あせがあると大幅に減額されます。たとう紙に包み、防湿剤と一緒に通気性の良い場所で保管しましょう。売ると決めたら早めに査定に出すことが大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント5：帯・小物をセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                訪問着・留袖に合わせた袋帯や帯締め・帯揚げ・草履バッグをセットで出すと、トータルの買取額がアップします。特にフォーマル用の袋帯は単体でも数千円〜数万円の価値があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 訪問着が着物の中で最も高く売れやすい理由 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            訪問着が着物の中で最も高く売れやすい理由
          </h3>
          <div className="bg-white border border-[#e8ddd0] rounded-lg p-5 space-y-3">
            <p className="text-gray-700 leading-relaxed">
              訪問着はフォーマルからセミフォーマルまで幅広いシーンで着用できるため、中古需要が最も高い着物の一つです。レンタルや中古販売での回転が速く、買取業者にとっても仕入れたい着物の筆頭格です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              花鳥風月や吉祥文様などの古典柄は、年齢や体型を問わず需要が安定しています。また、季節を問わない柄の訪問着は特に高額査定になる傾向があります。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group"
              >
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <span className="text-[#c9a76c] font-bold text-lg">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>
                  {faq.answer}
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
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/ranking/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取おすすめランキング
              </h3>
              <p className="text-xs text-gray-600">
                買取大吉・ウリエルなどおすすめ5社を徹底比較。口コミ・評判・買取実績まで。
              </p>
            </Link>
            <Link
              href="/articles/furisode/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                振袖の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                成人式後の振袖を高く売る方法と、ブランド別の買取価格を解説。
              </p>
            </Link>
            <Link
              href="/articles/obi-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                帯の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                袋帯・名古屋帯・丸帯の買取価格と、西陣織・博多織の高額買取情報。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            訪問着・留袖の正確な買取価格を知るなら
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            訪問着や留袖の買取相場はあくまで目安です。友禅の技法や作家、状態によって実際の査定額は大きく異なります。着物専門の買取業者に無料査定を依頼して、お手持ちの着物の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
