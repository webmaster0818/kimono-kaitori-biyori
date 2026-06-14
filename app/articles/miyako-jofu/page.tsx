import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】宮古上布の買取相場｜証紙の見方・苧麻と絣の特徴と高く売るコツ",
  description:
    "宮古上布（みやこじょうふ）の買取相場を徹底解説。沖縄・宮古島の苧麻を用いた最高級の麻織物、重要無形文化財・伝統的工芸品の指定、宮古上布保持団体や証紙の見方、手績み苧麻・藍染の細かい絣・砧打ちの特徴、高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/miyako-jofu/",
  },
  openGraph: {
    title: "【2026年最新】宮古上布の買取相場｜苧麻と絣の特徴と高く売るコツ",
    description:
      "宮古上布の買取相場と高く売る方法を解説。沖縄・宮古島の最高級麻織物、証紙と状態が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/miyako-jofu/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "宮古上布の反物や着物はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "宮古上布の買取相場は、反物か仕立て上がりか・証紙の有無・状態によって大きく幅があります。最高級の麻織物として知られ、状態が良く証紙のそろった反物では高い査定が期待できますが、シミ・ヤケや仕立て直しの履歴があると評価は下がります。手績み苧麻による精緻な絣や砧打ちの艶が確認できるほど、評価が高くなる傾向があります。",
  },
  {
    question: "宮古上布の証紙はどこを見ればわかりますか？",
    answer:
      "宮古上布には、産地の組合などが発行する証紙が付されているのが一般的です。重要無形文化財や伝統的工芸品としての表示、産地・製作者を示す情報などが記載され、宮古上布であることを裏づける手がかりになります。証紙は反物に付属していたり、購入時のたとう紙や箱に保管されている場合があるため、査定の際は必ず一緒に出しましょう。",
  },
  {
    question: "宮古上布はどんな特徴のある織物ですか？",
    answer:
      "宮古上布は、沖縄・宮古島で育つ苧麻（ちょま）の繊維を手績みして極細の糸を作り、藍などで染めて細かな絣模様を織り出す麻織物です。織り上げたあとに「砧打ち（きぬた打ち）」と呼ばれる木槌で布を叩く仕上げを行い、独特の艶となめらかな風合いを生み出します。軽やかで通気性に優れ、夏の最高級の着物として珍重されます。",
  },
  {
    question: "宮古上布は重要無形文化財や伝統的工芸品に指定されていますか？",
    answer:
      "はい。宮古上布は1978年（昭和53年）4月26日に国の重要無形文化財に指定され、「宮古上布保持団体」がその保持団体として認定されています。また、1975年（昭和50年）には国の伝統的工芸品にも指定されています。さらに、原料となる苧麻糸の製造技術「苧麻糸手績み」は2003年に国の選定保存技術に選定されています。",
  },
  {
    question: "宮古上布を高く売るにはどうすればよいですか？",
    answer:
      "宮古上布は証紙とともに査定に出すことが最も重要です。証紙があれば産地や品質の裏づけとなり、適正価格での買取につながります。麻織物や上布に詳しい専門業者を選び、複数社の無料査定を比較しましょう。シミ・ヤケ・カビは価値を大きく下げるため、湿気を避けて保管し、状態が良いうちに早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "宮古上布の買取相場｜苧麻と絣の特徴・証紙の見方",
  description:
    "宮古上布の買取相場と高く売る方法を解説。沖縄・宮古島の最高級麻織物、証紙と状態が査定の鍵。",
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  author: {
    "@type": "Person",
    name: "着物の買取びより 編集部",
    url: "https://kimonokaitori-biyori.com/author/",
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
    "@id": "https://kimonokaitori-biyori.com/articles/miyako-jofu/",
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
      name: "宮古上布",
      item: "https://kimonokaitori-biyori.com/articles/miyako-jofu/",
    },
  ],
};

export default function MiyakoJofuPage() {
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
          { label: "宮古上布" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              重要無形文化財・伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">宮古上布の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                証紙の見方・苧麻と絣の特徴と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              宮古上布（みやこじょうふ）は、沖縄・宮古島で育つ苧麻（ちょま）を用いた最高級の麻織物です。手績みの極細糸による藍染の細かい絣、砧打ち（きぬた打ち）が生む独特の艶が特徴で、「東の越後、西の宮古」と並び称されてきました。証紙の見方や、買取価格を左右するポイントを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月14日</p>
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
                  <a href="#about" className="text-[#6b4c8a] hover:underline">
                    1. 宮古上布とは？沖縄・宮古島の最高級麻織物
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】宮古上布の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#characteristics" className="text-[#6b4c8a] hover:underline">
                    3. 苧麻の手績み・絣・砧打ちの特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 重要無形文化財・伝統的工芸品の指定と証紙の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 宮古上布を高く売るポイント
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    6. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 宮古上布とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            宮古上布とは？沖縄・宮古島の最高級麻織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              宮古上布（みやこじょうふ）は、<strong>沖縄県・宮古島</strong>で生産される苧麻（ちょま／カラムシ）を原料とした高級麻織物です。「上布」と呼ばれる薄手の上等な麻織物のなかでも最高級品とされ、<strong>「東の越後、西の宮古」</strong>と並び称される日本を代表する上布として知られます。
            </p>
            <p>
              宮古上布の特徴は、島で育つ苧麻の繊維を<strong>手績み（てうみ）</strong>して極細の糸を作り、藍などで染めて<strong>細かな絣模様</strong>を織り出す点にあります。織り上げたあとには<strong>「砧打ち（きぬた打ち）」</strong>と呼ばれる、木槌で布を叩く仕上げ工程を経て、独特の艶となめらかな風合いを生み出します。
            </p>
            <p>
              一反を織り上げるまでに長い期間と多くの手間を要し、軽やかで通気性に優れることから、夏の最高級の着物として珍重されてきました。買取市場でも、状態と証紙のそろった宮古上布は高く評価されています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">宮古上布の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>沖縄・宮古島で織られる苧麻の最高級麻織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>手績みの極細糸による藍染の細かい絣模様</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>砧打ち仕上げによる独特の艶となめらかさ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>「東の越後、西の宮古」と並び称される夏の名品</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】宮古上布の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            宮古上布の買取価格は、反物か仕立て上がりか・絣の精緻さ・証紙の有無・状態によって大きく異なります。以下は一般的な傾向の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場の傾向
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    反物（未仕立て）
                  </td>
                  <td className="px-4 py-3 text-gray-700">証紙ありの良品</td>
                  <td className="px-4 py-3 font-medium">高めの査定が期待</td>
                  <td className="px-4 py-3 text-gray-700">状態・絣の精緻さで変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    仕立て上がりの着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">夏物・絣の着尺</td>
                  <td className="px-4 py-3 font-medium">状態・サイズで幅</td>
                  <td className="px-4 py-3 text-gray-700">シミ・ヤケで減額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">麻の夏帯など</td>
                  <td className="px-4 py-3 font-medium">柄・状態による</td>
                  <td className="px-4 py-3 text-gray-700">証紙の有無が影響</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    証紙なし・難あり
                  </td>
                  <td className="px-4 py-3 text-gray-700">証明不可・状態難</td>
                  <td className="px-4 py-3 font-medium">評価が下がりやすい</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    一般品扱いになる場合も
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・証紙ありの場合の傾向の目安です。反物か仕立て上がりか、絣の精緻さ、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙と絣の精緻さが価格を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮古上布の買取では、産地を裏づける証紙があることが評価の前提になります。そのうえで、手績み苧麻の細さや絣模様の精緻さ、砧打ちによる艶の良さ、染めの深さなどが査定額を左右します。最高級の麻織物として希少性が高く、状態のそろった反物は高めの査定になりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                麻織物は湿気に弱く、シミ・ヤケ・カビがあると価値が下がりやすい点に注意が必要です。藍染のスレや色ヤケ、仕立て直しによる縮みなども査定に影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section id="characteristics" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            苧麻の手績み・絣・砧打ちの特徴
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            宮古上布は、原料づくりから仕上げまで多くの手仕事を重ねて作られます。なかでも次の3つの工程が、宮古上布ならではの風合いを生み出しています。
          </p>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                苧麻の手績み（てうみ）による極細糸
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                島で育つ苧麻（ちょま）の繊維を細く裂き、手で績み（つむぎ）合わせて糸にします。機械を使わない手績みによって、宮古上布特有の極細でしなやかな糸が生まれます。この苧麻糸を作る技術「苧麻糸手績み」は、2003年に国の選定保存技術に選定されています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                藍染の細かい絣（かすり）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                糸を括って防染し、藍などで染め分けることで、織り上げたときに緻密な絣模様が現れます。極細の糸に施される細かな絣は高度な技術を要し、模様の精緻さと深い藍の発色が宮古上布の美しさを際立たせます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                砧打ち（きぬた打ち）による艶
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                織り上がった布を木槌で叩く「砧打ち」を行うことで、麻織物でありながら独特の艶となめらかな手触りが生まれます。この仕上げが、宮古上布をほかの麻織物と一線を画す存在にしています。
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 mt-5">
            これらの工程はそれぞれ専門の技術者による分業で受け継がれており、手仕事の精度が品質と評価を大きく左右します。工程の見極めには専門知識を要するため、査定では上布や麻織物に詳しい業者の目が重要になります。
          </p>
        </div>
      </section>

      {/* 指定と証紙の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            重要無形文化財・伝統的工芸品の指定と証紙の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              宮古上布は、<strong>1978年（昭和53年）4月26日に国の重要無形文化財</strong>に指定され、<strong>「宮古上布保持団体」</strong>がその保持団体として認定されています。また、<strong>1975年（昭和50年）には国の伝統的工芸品</strong>にも指定されており、二重に高い評価を受けた織物です。証紙は、これらの裏づけと産地を証明する大切な手がかりになります。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              証紙で確認できる主な情報
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>産地の表示</strong>（宮古上布であること）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>重要無形文化財・伝統的工芸品</strong>に関する表示
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>製作者・組合など品質を裏づける情報</span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              証紙によって宮古上布であることと品質の裏づけが示されるため、査定では大きな手がかりになります。証紙は反物に付属していたり、購入時のたとう紙や箱に保管されている場合があります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>宮古上布であることと品質が裏づけられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>産地・製作背景が確認でき、適正な評価につながる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>宮古上布であることの証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地や品質が特定できず、一般品扱いになりやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が下がる可能性がある</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              証紙の見方や種類については
              <Link
                href="/articles/certificate-guide/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                着物の証紙ガイド
              </Link>
              、沖縄の織物・着物の買取相場については
              <Link
                href="/articles/okinawa/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                沖縄県の着物買取相場
              </Link>
              もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            宮古上布を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙は必ず一緒に査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮古上布の証紙は、産地と品質を裏づける最も重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して反物・着物と一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：上布・麻織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮古上布は苧麻の手績みや絣・砧打ちの良し悪しで価値が変わるため、それらを正しく評価できる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは最高級の上布でも安く査定されることがあります。着物・上布専門の買取業者であれば、産地や工程を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮古上布は希少性が高く、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                麻織物は湿気に弱く、シミ・ヤケ・カビがあると価値が下がります。藍のスレや色ヤケにも注意が必要です。たとう紙に包んで湿気を避けて保管し、売ると決めたら早めに査定に出すのがおすすめです。
              </p>
            </div>
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
              href="/articles/echigo-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                越後上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                「東の越後、西の宮古」と並び称される上布。越後上布の特徴と相場を解説。
              </p>
            </Link>
            <Link
              href="/articles/summer-kimono/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                夏着物の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                絽・紗・上布など夏着物の種類別買取相場と高く売るコツを解説。
              </p>
            </Link>
            <Link
              href="/articles/certificate-guide/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物の証紙ガイド
              </h3>
              <p className="text-xs text-gray-600">
                証紙の見方と査定への影響を解説。証紙の有無で価格が大きく変わります。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            宮古上布の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            宮古上布の買取相場はあくまで目安です。反物か仕立て上がりか・絣の精緻さ・状態・証紙の有無によって実際の査定額は大きく変わります。上布・麻織物に詳しい査定員に無料査定を依頼して、お手持ちの宮古上布の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>

      <SoubaNote />
    </>
  );
}
