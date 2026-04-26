import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "夏着物（絽・紗・麻）の買取相場｜シーズンと売り時",
  description:
    "夏着物（絽・紗・麻・上布）の種類と買取相場を徹底解説。宮古上布・越後上布など高級夏着物の価値、売り時のベストシーズン、高く売るコツをまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/summer-kimono/" },
  openGraph: {
    title: "夏着物（絽・紗・麻）の買取相場｜シーズンと売り時",
    description: "夏着物の種類と買取相場を解説。絽・紗・麻の特徴と売り時のベストシーズンを紹介。",
    url: "https://kimonokaitori-biyori.com/articles/summer-kimono/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "夏着物の売り時はいつですか？", answer: "夏着物の売り時は春先（3〜5月）がベストです。買取業者は夏に向けて在庫を確保するため、春先に査定額が高くなる傾向があります。シーズンオフ（秋〜冬）に売ると査定額が下がる可能性がありますが、買取大吉やウリエルは年間を通じて適正価格で買取しています。" },
  { question: "絽と紗の違いは何ですか？", answer: "絽（ろ）は等間隔に横に透け目が入った織物で、フォーマルからカジュアルまで幅広く使えます。紗（しゃ）はより透け感が強い織物で、主にカジュアル〜セミフォーマルに使います。絽の方がフォーマル度が高く、買取相場もやや高めです。" },
  { question: "宮古上布はどのくらいで売れますか？", answer: "宮古上布は重要無形文化財に指定されている沖縄の最高級麻織物です。証紙付きの宮古上布であれば5万円〜30万円以上の買取が期待できます。非常に希少な織物のため、買取大吉やウリエルなど着物専門の査定員に見てもらうことをおすすめします。" },
  { question: "麻の着物は買取してもらえますか？", answer: "はい、麻の着物も買取対象です。一般的な麻着物で1,000円〜5,000円、越後上布・宮古上布などの高級麻着物は数万円〜数十万円の買取が可能です。素材と産地によって買取額が大きく異なります。" },
  { question: "浴衣は買取してもらえますか？", answer: "はい、浴衣も買取対象です。一般的な浴衣は数百円〜3,000円程度ですが、有松絞りや注染（ちゅうせん）の浴衣は3,000円〜3万円の買取が期待できます。ブランド浴衣やデザイナーズ浴衣も需要があります。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "夏着物（絽・紗・麻）の買取相場｜シーズンと売り時",
  description: "夏着物の種類と買取相場を解説。絽・紗・麻の特徴と売り時のベストシーズンを紹介。",
  datePublished: "2026-04-26", dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/summer-kimono/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "夏着物の買取相場", item: "https://kimonokaitori-biyori.com/articles/summer-kimono/" },
] };

export default function SummerKimonoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "夏着物の買取相場" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">夏着物の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">絽・紗・麻｜シーズンと売り時</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              夏着物（絽・紗・麻・上布）の種類・特徴・買取相場を徹底解説。宮古上布・越後上布など高級夏着物の価値や、売り時のベストシーズン、高く売るためのコツをまとめました。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav><ol className="space-y-2 text-sm">
              <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 夏着物とは？</a></li>
              <li><a href="#types" className="text-[#6b4c8a] hover:underline">2. 夏着物の種類と特徴</a></li>
              <li><a href="#market" className="text-[#6b4c8a] hover:underline">3. 夏着物の種類別買取相場</a></li>
              <li><a href="#season" className="text-[#6b4c8a] hover:underline">4. 夏着物の売り時ベストシーズン</a></li>
              <li><a href="#jofu" className="text-[#6b4c8a] hover:underline">5. 高級上布の種類と価値</a></li>
              <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 夏着物を高く売るコツ</a></li>
              <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">7. おすすめの買取業者</a></li>
              <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
            </ol></nav>
          </div>
        </div>
      </section>

      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />夏着物とは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>夏着物とは、6月〜9月頃に着用する薄手の着物の総称です。生地に透け感があり、通気性に優れた織り方が特徴。主に「絽（ろ）」「紗（しゃ）」「麻」「上布（じょうふ）」の4つの素材が使われます。</p>
            <p>夏着物は着用期間が短いため中古市場での流通量が少なく、<strong>状態の良い夏着物は希少価値が高い</strong>です。特に宮古上布や越後上布などの高級上布は、新品価格が数百万円に達するものもあり、買取市場でも非常に高額で取引されます。</p>
            <p>一方で、夏着物には「旬」があり、売り時によって査定額が変動します。<strong>春先（3〜5月）に売るのがベスト</strong>で、シーズンオフに比べて査定額が1〜3割高くなる傾向があります。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-xl font-bold text-[#6b4c8a] mb-1">絽</p>
              <p className="text-xs text-gray-600">横に透け目が入った織物</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-xl font-bold text-[#c9a76c] mb-1">紗</p>
              <p className="text-xs text-gray-600">全体に透け感のある織物</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-xl font-bold text-[#e8a0b6] mb-1">麻</p>
              <p className="text-xs text-gray-600">涼感あるシャリッとした風合い</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-xl font-bold text-[#6b4c8a] mb-1">上布</p>
              <p className="text-xs text-gray-600">最高級の麻織物</p>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />夏着物の種類と特徴
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">絽（ろ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">等間隔に横に透け目（絽目）が入った織物。フォーマル（絽の訪問着・絽の留袖）からカジュアルまで幅広く使えます。正絹の絽は上品な光沢と透明感があり、夏のフォーマル着物として最も格の高い素材です。絽縮緬（ろちりめん）は絽にちりめんの風合いを加えたもので、独特のシボがあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">紗（しゃ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">全体に均一な透け感がある織物。絽よりも透明感が強く、涼しげな印象。主にカジュアル〜セミフォーマルに使われます。紗合わせ（紗と別の生地を重ねたもの）は6月・9月の単衣の季節に着用します。紗は織り目が繊細なため、保管中の引っかけや虫食いに注意が必要です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">麻（あさ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">麻素材の着物は吸水性・速乾性に優れ、シャリッとした肌触りが特徴。カジュアルな夏着物の定番です。小千谷縮（おぢやちぢみ）は新潟県の伝統的工芸品で、独特のシボ感があり蒸し暑い日本の夏に最適。麻は洗濯もしやすく実用性が高い素材です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">上布（じょうふ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">最高級の麻織物の総称。宮古上布・越後上布・近江上布・能登上布などがあります。手績み（てうみ）の苧麻（ちょま）糸を使い、手織りで仕上げる非常に手間のかかる織物。重要無形文化財に指定されているものもあり、新品価格は数十万円〜数百万円に達します。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />夏着物の種類別買取相場
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">夏着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">素材</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">宮古上布</td>
                  <td className="px-4 py-3 text-gray-700">苧麻・手織り</td>
                  <td className="px-4 py-3 font-medium">5万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">越後上布</td>
                  <td className="px-4 py-3 text-gray-700">苧麻・手織り</td>
                  <td className="px-4 py-3 font-medium">3万円〜20万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">絽の訪問着（正絹）</td>
                  <td className="px-4 py-3 text-gray-700">正絹・絽織り</td>
                  <td className="px-4 py-3 font-medium">5,000円〜5万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紗の着物（正絹）</td>
                  <td className="px-4 py-3 text-gray-700">正絹・紗織り</td>
                  <td className="px-4 py-3 font-medium">3,000円〜3万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">小千谷縮</td>
                  <td className="px-4 py-3 text-gray-700">麻・伝統工芸品</td>
                  <td className="px-4 py-3 font-medium">3,000円〜3万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">麻の着物（一般品）</td>
                  <td className="px-4 py-3 text-gray-700">麻</td>
                  <td className="px-4 py-3 font-medium">1,000円〜5,000円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">夏帯（絽・紗・麻）</td>
                  <td className="px-4 py-3 text-gray-700">各素材</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">1,000円〜3万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※春先（3〜5月）の売却が最も高額。証紙付き・美品の場合の目安。</p>
        </div>
      </section>

      <section id="season" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />夏着物の売り時ベストシーズン
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">時期</th>
                  <th className="px-4 py-3 text-left font-semibold">おすすめ度</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">理由</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">3月〜5月（春）</td>
                  <td className="px-4 py-3 text-green-600 font-bold">ベスト</td>
                  <td className="px-4 py-3 text-gray-700">業者が夏に向けて仕入れを強化。査定額が最も高い時期。</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">6月〜8月（夏）</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">良い</td>
                  <td className="px-4 py-3 text-gray-700">着用シーズン中で需要あり。ただし在庫過多になると下落傾向。</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">9月〜11月（秋）</td>
                  <td className="px-4 py-3 text-gray-500 font-bold">普通</td>
                  <td className="px-4 py-3 text-gray-700">シーズンオフに入り需要が低下。来年に向けた仕入れとしての需要は残る。</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">12月〜2月（冬）</td>
                  <td className="px-4 py-3 text-gray-400 font-bold">低め</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">需要が最も低い時期。ただし高級上布は年間通じて需要あり。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="jofu" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />高級上布の種類と価値
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">宮古上布（沖縄県宮古島）</h3>
              <p className="text-sm leading-relaxed text-gray-700">沖縄県宮古島で織られる最高級の麻織物。苧麻を手績みした極細の糸で織られ、「東の越後、南の宮古」と称される。重要無形文化財に指定。藍染めの精緻な絣模様が特徴で、年間生産量はわずか数十反。新品は100万円〜300万円以上。買取相場は5万円〜30万円以上。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">越後上布（新潟県南魚沼市）</h3>
              <p className="text-sm leading-relaxed text-gray-700">新潟県南魚沼地方で織られる高級麻織物。雪晒しによる漂白が特徴で、ユネスコ無形文化遺産にも登録。重要無形文化財に指定。しなやかで軽い着心地が魅力。買取相場は3万円〜20万円以上。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">近江上布（滋賀県）</h3>
              <p className="text-sm leading-relaxed text-gray-700">滋賀県で織られる麻織物。大麻や苧麻を使い、絣模様が特徴。国の伝統的工芸品に指定。宮古上布や越後上布に比べると生産量が多く、比較的手頃な価格帯。買取相場は5,000円〜5万円。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">能登上布（石川県）</h3>
              <p className="text-sm leading-relaxed text-gray-700">石川県で織られる麻織物。すっきりとした縞や格子柄が特徴で、能登の風土を反映した素朴な味わいがあります。生産量が減少しており希少性が高まっています。買取相場は3,000円〜3万円。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />夏着物を高く売るコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：春先に売る</h3>
              <p className="text-sm leading-relaxed text-gray-700">夏着物の査定額が最も高くなるのは3〜5月の春先です。業者が夏に向けて在庫を確保する時期に合わせて売却しましょう。ただし買取大吉やウリエルは年間通じて適正価格で買取しています。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：証紙を確認して一緒に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">上布や小千谷縮などの伝統工芸品は証紙の有無で買取額が大きく変わります。たとう紙の中に証紙が挟まっていないか確認しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：着物専門の業者に依頼する</h3>
              <p className="text-sm leading-relaxed text-gray-700">夏着物は種類が多く、素材の判別が難しい分野です。買取大吉やウリエルなど着物専門の査定員に見てもらいましょう。総合リサイクルショップでは上布の価値を見落とされるリスクがあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：夏帯も一緒に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">絽や紗の夏帯も需要があります。夏着物と夏帯をセットで出すとコーディネートとしての価値が認められ、査定額がアップする可能性があります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：複数社で比較する</h3>
              <p className="text-sm leading-relaxed text-gray-700">夏着物は業者によって得意・不得意があります。ヒカカクの一括比較を活用して3社以上の見積もりを取りましょう。RECLOの海外販路も高額査定のチャンスです。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめの買取業者
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3>
              <p className="text-sm leading-relaxed text-gray-700">全国700店舗以上。宮古上布・越後上布などの高級上布の査定実績が豊富。夏着物の種類・素材を正確に判別できる着物専門査定員が在籍。出張・持ち込み・宅配すべてに対応。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物専門の出張買取に強い。夏着物の季節性を考慮した適正な査定を行ってくれます。大量の夏着物もまとめて査定可能です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO（リクロ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">海外販路を持つRECLOは、日本の夏着物の芸術性を海外で評価できるため高額査定が期待できます。宅配買取で全国対応。梱包キットも無料。</p>
            </div>
          </div>
        </div>
      </section>

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
            <Link href="/articles/fabric-guide/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の素材ガイド</h3>
              <p className="text-xs text-gray-600">正絹・麻・ウール・化繊の違いを解説。</p>
            </Link>
            <Link href="/articles/tsumugi-types/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">紬の種類と買取相場</h3>
              <p className="text-xs text-gray-600">大島紬・結城紬など紬の買取価格を解説。</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">夏着物を売るなら、春先の無料査定がベスト</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            宮古上布・越後上布など高額買取が期待できる夏着物。春先の無料査定で最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
