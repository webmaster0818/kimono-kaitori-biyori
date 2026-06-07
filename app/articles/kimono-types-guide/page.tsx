import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物の種類一覧｜普段着から礼装まで完全ガイド",
  description:
    "着物の種類を格式順に完全網羅。黒留袖・色留袖・振袖・訪問着・付下げ・色無地・小紋・紬・浴衣まで、それぞれの特徴・着用シーン・買取相場をわかりやすく解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/kimono-types-guide/",
  },
  openGraph: {
    title: "着物の種類一覧｜普段着から礼装まで完全ガイド",
    description:
      "着物の種類を格式順に網羅。特徴・着用シーン・買取相場まで。",
    url: "https://kimonokaitori-biyori.com/articles/kimono-types-guide/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の格式はどのように決まるのですか？",
    answer:
      "着物の格式は主に、紋の数、柄の入り方、素材、染め・織りの技法によって決まります。最も格式が高いのは五つ紋付きの黒留袖や色留袖で、次いで振袖、訪問着、付下げ、色無地、小紋、紬の順になります。紋の数が多いほど格式が高く、絵羽模様（縫い目をまたいで柄がつながる）の着物は柄が飛び飛びの小紋よりも格式が高いとされます。",
  },
  {
    question: "普段着として着られる着物はどの種類ですか？",
    answer:
      "普段着として着られるのは、小紋、紬、木綿の着物、ウールの着物、浴衣などです。これらは格式を問わないカジュアルな場面で着用できます。特に紬は産地によって価値が大きく異なり、大島紬や結城紬などは高級品ですが着用シーンとしてはカジュアルに分類されます。木綿やウールの着物は日常着として気軽に楽しめます。",
  },
  {
    question: "結婚式にはどの種類の着物を着ていけばいいですか？",
    answer:
      "結婚式では立場によって着るべき着物が異なります。新郎新婦の母親は黒留袖（五つ紋）が正式です。親族の女性は色留袖か訪問着を、友人や同僚は訪問着か付下げが一般的です。未婚女性は振袖を着ることもできます。いずれの場合も袋帯を二重太鼓に結ぶのがフォーマルな装いです。",
  },
  {
    question: "着物の買取価格が高い種類はどれですか？",
    answer:
      "一般的に買取価格が高いのは、振袖、訪問着、紬（特に大島紬・結城紬）です。振袖は成人式需要があり安定した買取相場を維持しています。訪問着はフォーマルシーンでの需要が高く、紬は伝統工芸品としての価値があります。逆に、留袖は使用機会が限定的で需要が少ないため、高額な着物でも買取価格は比較的低くなる傾向があります。",
  },
  {
    question: "着物と浴衣の違いは何ですか？",
    answer:
      "着物と浴衣の主な違いは素材、着方、着用シーンです。着物は正絹や化繊で仕立てられ、長襦袢の上に着用しますが、浴衣は木綿や麻で仕立てられ、素肌の上に直接着用します。浴衣はもともと湯上がりに着る略装で、現在は夏祭りや花火大会で広く着られています。浴衣の買取相場は一般的に低く、有名ブランドや有名産地のものを除くと数百円〜数千円程度です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物の種類一覧｜普段着から礼装まで完全ガイド",
  description:
    "着物の種類を格式順に網羅。特徴・着用シーン・買取相場まで。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
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
    "@id": "https://kimonokaitori-biyori.com/articles/kimono-types-guide/",
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
      name: "コラム",
      item: "https://kimonokaitori-biyori.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "着物の種類一覧",
      item: "https://kimonokaitori-biyori.com/articles/kimono-types-guide/",
    },
  ],
};

export default function KimonoTypesGuidePage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "着物の種類一覧" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/kimono-types-guide.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              Know型ガイド
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物の種類一覧</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                普段着から礼装まで完全ガイド
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物には格式の高い礼装から日常で気軽に着られるカジュアル着物まで、多様な種類があります。この記事では、黒留袖から浴衣まで主要な着物の種類を格式順に整理し、それぞれの特徴・着用シーン・買取相場をわかりやすく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年5月17日
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
                  <a href="#rank-overview" className="text-[#6b4c8a] hover:underline">
                    1. 着物の格式（ランク）の全体像
                  </a>
                </li>
                <li>
                  <a href="#formal" className="text-[#6b4c8a] hover:underline">
                    2. 礼装（第一礼装・準礼装）
                  </a>
                </li>
                <li>
                  <a href="#semi-formal" className="text-[#6b4c8a] hover:underline">
                    3. 略礼装・外出着
                  </a>
                </li>
                <li>
                  <a href="#casual" className="text-[#6b4c8a] hover:underline">
                    4. 普段着・カジュアル着物
                  </a>
                </li>
                <li>
                  <a href="#price-table" className="text-[#6b4c8a] hover:underline">
                    5. 種類別の買取相場一覧
                  </a>
                </li>
                <li>
                  <a href="#how-to-judge" className="text-[#6b4c8a] hover:underline">
                    6. 着物の種類を見分けるポイント
                  </a>
                </li>
                <li>
                  <a href="#sell-tips" className="text-[#6b4c8a] hover:underline">
                    7. 着物を売るなら種類の理解が重要
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    8. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* セクション1：格式の全体像 */}
      <section id="rank-overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物の格式（ランク）の全体像
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物には「格」と呼ばれる格式の序列があります。格が高い着物ほどフォーマルな場面で着用し、格が低い着物はカジュアルな日常シーンで楽しみます。この格の概念は、着物を正しく着こなすためだけでなく、<Link href="/articles/appraisal-criteria/" className="text-[#6b4c8a] hover:underline">買取査定</Link>においても重要な判断材料となります。
            </p>
            <p>
              大きく分類すると「第一礼装」「準礼装」「略礼装」「外出着」「普段着」の5段階に分かれます。それぞれに該当する着物の種類を、以下の表で確認しましょう。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">格式</th>
                  <th className="px-4 py-3 text-left font-semibold">該当する着物</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">主な着用シーン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">第一礼装</td>
                  <td className="px-4 py-3 text-gray-700">黒留袖・色留袖（五つ紋）・振袖・打掛</td>
                  <td className="px-4 py-3 text-gray-700">結婚式・成人式・叙勲</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">準礼装</td>
                  <td className="px-4 py-3 text-gray-700">色留袖（三つ紋・一つ紋）・訪問着</td>
                  <td className="px-4 py-3 text-gray-700">披露宴・入学式・卒業式</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">略礼装</td>
                  <td className="px-4 py-3 text-gray-700">付下げ・色無地（紋付き）</td>
                  <td className="px-4 py-3 text-gray-700">パーティー・お茶会・七五三</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">外出着</td>
                  <td className="px-4 py-3 text-gray-700">小紋・御召・更紗</td>
                  <td className="px-4 py-3 text-gray-700">観劇・食事会・街歩き</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">普段着</td>
                  <td className="px-4 py-3 text-gray-700">紬・木綿・ウール・浴衣</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">日常生活・散歩・自宅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション2：礼装 */}
      <section id="formal" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            礼装（第一礼装・準礼装）
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">黒留袖（くろとめそで）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                既婚女性の第一礼装です。黒地に裾だけに絵羽模様が入り、五つ紋が付きます。結婚式で新郎新婦の母親が着用するのが最も一般的な場面です。格式が最も高い着物ですが、着用機会が限定的なため、買取市場での需要はやや低めです。ただし、友禅や刺繍が施された高品質なものは作家物として高額で取引されます。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">第一礼装</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">紋の数</p>
                  <p className="font-semibold">五つ紋</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">1,000円〜15万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">色留袖（いろとめそで）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                黒以外の地色で、裾に絵羽模様が入った着物です。紋の数によって格式が変わり、五つ紋なら第一礼装、三つ紋なら準礼装、一つ紋なら略礼装として着用できます。黒留袖よりも華やかな印象で、親族の結婚式や格式の高いパーティーなどで着用されます。詳しくは<Link href="/articles/houmongi-tomesode/" className="text-[#6b4c8a] hover:underline">訪問着と留袖の違い</Link>も参考にしてください。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">第一礼装〜略礼装</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">紋の数</p>
                  <p className="font-semibold">五・三・一つ紋</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">2,000円〜10万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">振袖（ふりそで）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                未婚女性の第一礼装で、長い袖が特徴です。袖丈によって大振袖（本振袖、袖丈114cm前後）、中振袖（袖丈100cm前後）、小振袖（袖丈85cm前後）に分けられます。成人式で着用されるのは主に大振袖です。買取市場では最も需要が高い着物の一つで、状態の良い正絹の振袖は高額で取引されます。詳しくは<Link href="/articles/furisode/" className="text-[#6b4c8a] hover:underline">振袖の買取相場</Link>をご覧ください。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">第一礼装</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">着用者</p>
                  <p className="font-semibold">未婚女性</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">3,000円〜40万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">訪問着（ほうもんぎ）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                準礼装に位置づけられる着物で、縫い目をまたいで柄がつながる「絵羽模様」が特徴です。既婚・未婚を問わず着用でき、結婚式のゲスト、入学式・卒業式、パーティー、お茶会など幅広いシーンで活躍します。フォーマルからセミフォーマルまで対応できる万能さから、中古市場でも安定した需要があり、買取価格も比較的高めです。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">準礼装</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">着用者</p>
                  <p className="font-semibold">既婚・未婚問わず</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">2,000円〜25万円</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3：略礼装・外出着 */}
      <section id="semi-formal" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            略礼装・外出着
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">付下げ（つけさげ）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                訪問着に次ぐ格式を持つ着物で、柄が肩山や袖山を頂点として上を向くように配置されているのが特徴です。訪問着との違いは、縫い目をまたいで柄がつながっていない点です。訪問着よりも控えめな印象のため、入学式・卒業式、七五三、お茶会などで重宝します。買取相場は訪問着よりやや低めですが、人気作家の手描き付下げは高額で取引されます。詳しくは<Link href="/articles/komon-tsukesage/" className="text-[#6b4c8a] hover:underline">小紋と付下げの違い</Link>をご覧ください。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">略礼装</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">柄の配置</p>
                  <p className="font-semibold">上向き・飛び柄</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">1,000円〜10万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">色無地（いろむじ）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                黒以外の一色で染められた無地の着物です。紋を入れることで格式を変えられる便利な着物で、一つ紋なら略礼装として入学式やお茶会に、紋なしなら外出着としてカジュアルに着用できます。慶事・弔事のどちらにも使えるため、1枚あると重宝します。買取相場は一般品で1,000円〜5,000円程度ですが、人間国宝の作品など高品質なものは数万円〜数十万円になることもあります。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">略礼装〜外出着</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">一色無地・紋で格変化</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">1,000円〜5万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">小紋（こもん）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                全体に繰り返しの小さな柄が入った着物です。外出着に分類され、観劇、食事会、街歩きなどで着用します。型染め・手描き・絞りなど多彩な技法があり、<Link href="/articles/kaga-yuzen/" className="text-[#6b4c8a] hover:underline">加賀友禅</Link>の小紋や江戸小紋（極小の柄を型染めしたもの）は格式が高く、略礼装としても着用できます。一般的な小紋の買取相場は低めですが、江戸小紋や有名染色作家の作品は高額になります。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">外出着</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">柄の特徴</p>
                  <p className="font-semibold">全面に繰り返し柄</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">500円〜8万円</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4：普段着 */}
      <section id="casual" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            普段着・カジュアル着物
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">紬（つむぎ）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                紬糸（繭から引いた糸に撚りをかけたもの）を使って織り上げた着物です。格式としてはカジュアルに分類されますが、<Link href="/articles/oshima-tsumugi/" className="text-[#6b4c8a] hover:underline">大島紬</Link>や<Link href="/articles/yuki-tsumugi/" className="text-[#6b4c8a] hover:underline">結城紬</Link>などの産地物は高級品として知られ、買取市場でも高値で取引されます。独特の風合いと丈夫さが特徴で、着物愛好家に根強い人気があります。<Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] hover:underline">紬の種類と産地</Link>も参考にしてください。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">普段着</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">素材</p>
                  <p className="font-semibold">紬糸（先染め）</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">3,000円〜40万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">木綿・ウールの着物</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                日常着として気軽に着られる着物です。木綿の着物は洗濯機で洗えるものも多く、初心者にも扱いやすいのが特徴です。ウールの着物は秋冬の普段着として重宝され、シワになりにくく丈夫です。買取相場は一般品で数百円〜数千円程度ですが、久留米絣や伊勢木綿などの産地物は数千円〜数万円になることもあります。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">普段着</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">メリット</p>
                  <p className="font-semibold">手入れが簡単</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">100円〜2万円</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">浴衣（ゆかた）</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                夏の普段着として最もカジュアルな和装です。木綿や麻の生地で仕立てられ、長襦袢を着ずに素肌の上に直接着用します。夏祭りや花火大会、温泉旅館などで広く着られています。一般的な浴衣の買取相場は低いですが、有松鳴海絞りや注染（ちゅうせん）など伝統的な技法で作られたものは価値があります。<Link href="/articles/summer-kimono/" className="text-[#6b4c8a] hover:underline">夏着物の種類と特徴</Link>も合わせてご覧ください。
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">格式</p>
                  <p className="font-semibold">普段着（最カジュアル）</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">時期</p>
                  <p className="font-semibold">6月〜9月</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取相場</p>
                  <p className="font-semibold">100円〜5,000円</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション5：買取相場一覧 */}
      <section id="price-table" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            種類別の買取相場一覧
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">種類</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品</th>
                  <th className="px-4 py-3 text-left font-semibold">ブランド品</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">作家物</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万〜8万円</td>
                  <td className="px-4 py-3 text-gray-700">8万〜40万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700">2,000円〜1.5万円</td>
                  <td className="px-4 py-3 text-gray-700">1.5万〜6万円</td>
                  <td className="px-4 py-3 text-gray-700">6万〜25万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">10万〜40万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜8,000円</td>
                  <td className="px-4 py-3 text-gray-700">8,000円〜4万円</td>
                  <td className="px-4 py-3 text-gray-700">4万〜15万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">付下げ</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">3万〜10万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">小紋</td>
                  <td className="px-4 py-3 text-gray-700">500円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万〜8万円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">色無地</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜1.5万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">1.5万〜5万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 相場は状態・サイズ・市場動向により変動します。正確な査定額は<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>でご確認ください。
          </p>
        </div>
      </section>

      {/* セクション6：見分けるポイント */}
      <section id="how-to-judge" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物の種類を見分けるポイント
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">柄の入り方で見分ける</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                縫い目をまたいで柄がつながっているなら訪問着、肩山・袖山から柄が上を向いているなら付下げ、全体に同じ柄が繰り返されているなら小紋です。裾だけに柄が入っていれば留袖です。このように柄の配置パターンが着物の種類を判別する最も重要な手がかりとなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">素材で見分ける</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                正絹（シルク100%）の着物は光沢があり手触りが滑らかです。化繊（ポリエステル）は燃やすと溶けて固まりますが、正絹は燃やすと髪の毛を燃やしたような臭いがします。紬は表面に独特の節（ふし）があり、織りの凹凸を手で感じられます。<Link href="/articles/fabric-guide/" className="text-[#6b4c8a] hover:underline">着物の素材ガイド</Link>で詳しく解説しています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">紋の数で見分ける</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                紋は背中の中央、両袖の後ろ、両胸の5か所に入れることができます。五つ紋は最高格式、三つ紋は準礼装、一つ紋は略礼装です。紋の種類（染め抜き紋・縫い紋・貼り紋）によっても格式が異なり、染め抜き日向紋が最も格が高いです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7：売るなら */}
      <section id="sell-tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物を売るなら種類の理解が重要
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物を売る際、自分が持っている着物の種類を正しく理解しておくことは非常に重要です。種類によって買取相場が大きく異なるだけでなく、一般のリサイクルショップでは着物の種類を正確に判別できず、適正価格で買い取ってもらえないケースがあります。
            </p>
            <p>
              例えば、紬は格式上はカジュアル着物ですが、大島紬や結城紬は非常に高価です。逆に、格式の高い黒留袖でも一般品の買取相場は低めです。このように、格式と買取価格は必ずしも一致しません。
            </p>
            <p>
              着物の価値を正しく評価してもらうためには、着物専門の査定員がいる買取業者に依頼することが大切です。<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">おすすめ買取業者ランキング</Link>では、着物の専門知識を持つ査定員が在籍する業者を紹介しています。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>も合わせて参考にしてください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
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
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/articles/kimono-rank/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物の格・ランクガイド
              </h3>
              <p className="text-xs text-gray-600">
                着物の格式を更に詳しく解説。TPOに合わせた着物選びの参考に。
              </p>
            </Link>
            <Link
              href="/articles/fabric-guide/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物の素材ガイド
              </h3>
              <p className="text-xs text-gray-600">
                正絹・化繊・木綿・麻・ウールなど素材別の特徴と買取相場。
              </p>
            </Link>
            <Link
              href="/articles/kimono-market-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取の相場ガイド
              </h3>
              <p className="text-xs text-gray-600">
                種類・素材・ブランド別の買取相場を徹底解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            お手持ちの着物の価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            着物の種類がわからなくても、専門の査定員が正確に鑑定します。無料査定で、お持ちの着物の価値を確認してみませんか。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>

      <SoubaNote />
    </>
  );
}
