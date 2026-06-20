import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】越後上布の買取相場｜重要無形文化財・証紙の見方と高く売るコツ",
  description:
    "越後上布（えちごじょうふ）の買取相場を徹底解説。新潟県魚沼地方の苧麻を用いた最高級の麻織物で、重要無形文化財・ユネスコ無形文化遺産に指定。雪さらしや手績み糸の特徴、証紙の見方、高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/echigo-jofu/",
  },
  openGraph: {
    title: "【2026年最新】越後上布の買取相場｜重要無形文化財・証紙の見方と高く売るコツ",
    description:
      "越後上布の買取相場と高く売る方法を解説。新潟・魚沼の最高級麻織物、証紙と状態が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/echigo-jofu/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "越後上布はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "越後上布の買取相場は、本製（重要無形文化財の技術による本物）か一般的な機械織りの麻織物か、証紙の有無、状態によって大きく異なります。証紙のない一般的な麻のきものは数千円〜数万円が目安ですが、雪さらしや手績み糸による本製の越後上布で証紙があり状態が良い反物・きものは、数万円〜それ以上の高い査定が期待できる場合もあります。希少な品ほど専門業者による見極めが重要です。",
  },
  {
    question: "越後上布の証紙はどこを見ればわかりますか？",
    answer:
      "越後上布には、産地組合などが発行する証紙が付されているものがあります。重要無形文化財の技術による本製品には、その旨を示す証票や保証が伴う場合があります。証紙は反物の端やたとう紙、購入時の証書に保管されていることが多いので、きものや反物と一緒に探しておきましょう。証紙があると本製の越後上布であることや産地が確認しやすくなり、査定の精度が上がります。",
  },
  {
    question: "越後上布はどんな織物ですか？普通の麻と何が違いますか？",
    answer:
      "越後上布は、新潟県魚沼地方で苧麻（ちょま・からむし）を原料に織られる最高級の麻織物です。重要無形文化財の指定要件では、苧麻を手で績（う）んだ糸を使い、絣は手くびり、いざり機（地機）で織り、仕上げに雪上で漂白する「雪さらし」を行うことなどが定められています。手間のかかる古来の技法で作られる点が、一般的な機械織りの麻とは大きく異なります。平織のものを越後上布、しぼのある縮を小千谷縮と呼びます。",
  },
  {
    question: "越後上布は重要無形文化財・ユネスコ無形文化遺産なのですか？",
    answer:
      "はい。「小千谷縮・越後上布」は1955年（昭和30年）に国の重要無形文化財（工芸技術・染織）に指定されました。染織分野では日本で最初の指定とされます。さらに2009年（平成21年）には、ユネスコの無形文化遺産代表一覧表に「小千谷縮・越後上布」として登録されています。ただし、指定要件を満たす本製品はごく一部で、市場には一般的な麻織物も多く流通しているため、本物かどうかの確認が大切です。",
  },
  {
    question: "越後上布を高く売るにはどうすればよいですか？",
    answer:
      "越後上布は証紙や証書とともに査定に出すことが重要です。本製であることや産地が証明できれば、適正な価格につながります。また、麻織物や産地織物に詳しい専門業者を選び、複数社の無料査定を比較しましょう。麻はシミ・黄ばみ・カビ・折りジワが付きやすく、価値を下げやすいため、湿気を避けて保管し、状態が良いうちに早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "越後上布の買取相場｜重要無形文化財・証紙の見方と高く売るコツ",
  description:
    "越後上布の買取相場と高く売る方法を解説。新潟・魚沼の最高級麻織物、証紙と状態が査定の鍵。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/echigo-jofu/",
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
      name: "越後上布",
      item: "https://kimonokaitori-biyori.com/articles/echigo-jofu/",
    },
  ],
};

export default function EchigoJofuPage() {
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
          { label: "越後上布" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              重要無形文化財・ユネスコ無形文化遺産
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">越後上布の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                重要無形文化財・証紙の見方と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              越後上布（えちごじょうふ）は、新潟県魚沼地方で苧麻（ちょま・からむし）を原料に織られる最高級の麻織物です。手績みの糸といざり機、雪さらしによる古来の技法が「小千谷縮・越後上布」として重要無形文化財・ユネスコ無形文化遺産に指定されています。本製品と一般的な麻織物の違い、証紙の見方や買取価格を左右するポイントを詳しく解説します。
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
                    1. 越後上布とは？新潟・魚沼の最高級麻織物
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】越後上布の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#characteristics" className="text-[#6b4c8a] hover:underline">
                    3. 苧麻の手績み・いざり機・雪さらしの特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 越後上布の証紙・証書の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 越後上布を高く売るポイント
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

      {/* 越後上布とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            越後上布とは？新潟・魚沼の最高級麻織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              越後上布（えちごじょうふ）は、<strong>新潟県魚沼地方（塩沢・小千谷地区など）</strong>で織られてきた最高級の<strong>麻織物</strong>です。原料には<strong>苧麻（ちょま・からむし）</strong>を用い、雪国の自然と風土のなかで古来の技法によって織り上げられます。江戸時代には幕府への献上品にもなった、夏の薄物を代表する織物です。
            </p>
            <p>
              「小千谷縮・越後上布」は、<strong>1955年（昭和30年）に国の重要無形文化財（工芸技術・染織）</strong>に指定されました。染織分野では日本で最初の指定とされています。さらに<strong>2009年（平成21年）にはユネスコの無形文化遺産代表一覧表に「小千谷縮・越後上布」として登録</strong>されました。
            </p>
            <p>
              同じ技術系統のなかで、<strong>平織のものを「越後上布」、しぼ（細かな凹凸）のあるものを「小千谷縮」</strong>と呼び分けます。いずれも夏に涼やかに着られる薄物として珍重されてきました。ただし、重要無形文化財の指定要件を満たす本製品はごくわずかで、市場には一般的な機械織りの麻織物も多く流通しているため、本物かどうかの見極めが大切です。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">越後上布の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>新潟県魚沼地方で苧麻を用いて織られる最高級の麻織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>手績みの糸・いざり機・雪さらしによる古来の技法</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1955年に重要無形文化財、2009年にユネスコ無形文化遺産</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>平織が越後上布、しぼのあるものが小千谷縮（夏の薄物）</span>
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
            【種類別】越後上布の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            越後上布の買取価格は、本製（重要無形文化財の技術による本物）か一般的な麻織物か、証紙・証書の有無、状態によって大きく異なります。以下は一般的な傾向の目安です。
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
                    本製の越後上布（反物）
                  </td>
                  <td className="px-4 py-3 text-gray-700">手績み糸・雪さらし</td>
                  <td className="px-4 py-3 font-medium">数万円〜それ以上</td>
                  <td className="px-4 py-3 text-gray-700">証紙・状態次第</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    本製の越後上布（きもの）
                  </td>
                  <td className="px-4 py-3 text-gray-700">仕立て上がりの夏物</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">サイズ・状態に左右</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    一般的な麻織物
                  </td>
                  <td className="px-4 py-3 text-gray-700">機械織りの夏きもの</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">柄・状態による</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    証紙なし・状態難あり
                  </td>
                  <td className="px-4 py-3 text-gray-700">シミ・黄ばみ等</td>
                  <td className="px-4 py-3 font-medium">数千円前後〜</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    一般品扱いになりやすい
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は傾向の目安です。本製か一般品か、証紙・証書の有無、サイズ、状態によって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                「本製」かどうかが価格を大きく左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                越後上布の買取では、重要無形文化財の指定要件を満たす本製品か、一般的な機械織りの麻織物かによって評価が大きく変わります。手績みの糸や雪さらしによる本製の越後上布は希少で、証紙・証書があり状態が良いほど高い査定が期待できます。一方で、市場には一般的な麻のきものも多く、外見が似ていても価値は異なります。見極めには専門知識が欠かせません。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                麻は状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                麻織物はシミ・黄ばみ・カビ・折りジワが付きやすく、これらがあると価値が下がりやすい点に注意が必要です。長期保管で生じる経年のヤケや汗ジミも査定に影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴（手績み・いざり機・雪さらし） */}
      <section id="characteristics" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            苧麻の手績み・いざり機・雪さらしの特徴
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            「小千谷縮・越後上布」の重要無形文化財としての価値は、原料から仕上げまで古来の技法を純粋に伝えている点にあります。指定要件には、次のような条件が定められています。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              重要無形文化財「小千谷縮・越後上布」の主な指定要件
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  すべて<strong>苧麻（ちょま）を手績（う）みした糸</strong>を使用すること
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  絣模様をつける場合は<strong>手くびり</strong>によること
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>いざり機（地機）</strong>で織ること
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  しぼとりをする場合は<strong>湯もみ・足ぶみ</strong>によること
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  さらしは<strong>雪ざらし（雪さらし）</strong>によること
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-sm">
                苧麻の手績み
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                苧麻の繊維を口と爪先で細く裂き、つなぎ合わせて一本の糸にしていく工程です。気の遠くなるような手作業で、繊細で軽やかな糸が生まれます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-sm">
                いざり機（地機）
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                床に座り、腰で経糸の張りを調整しながら織る古い形式の機です。繊細な麻糸を傷めずに織れる一方、手間と熟練を要します。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-sm">
                雪さらし
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                早春、織り上げた布を雪上に広げて漂白する工程です。雪が溶けて生じるオゾンの働きで布が白く冴え、色も鮮やかになるとされます。
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 mt-5">
            これらの技術は、雪国としてのこの地方の文化の特質を示すとともに、原料から加工技術まで純粋に古法を伝える貴重なものとして評価されています。保持団体は<strong>越後上布・小千谷縮布技術保存協会</strong>で、技術の伝承を担っています。手間のかかる本製品ほど希少で、査定では麻織物に詳しい業者の目が重要になります。
          </p>
        </div>
      </section>

      {/* 証紙の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            越後上布の証紙・証書の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              越後上布には、<strong>産地組合などが発行する証紙</strong>が付されているものがあります。重要無形文化財の技術による本製品には、その旨を示す証票や保証が伴う場合があり、本物の越後上布であることや産地を確認する大切な手がかりになります。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              証紙・証書で確認できる主な情報
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>産地</strong>（越後・魚沼地方であること）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>本製かどうか</strong>（重要無形文化財の技術による旨の表示）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>製造者や産地組合の表示</span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              証紙は反物の端やたとう紙、購入時の証書とともに保管されていることが多いので、きものや反物と一緒に探しておきましょう。証紙・証書があると本製の越後上布であることが確認しやすくなり、査定の精度が上がります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・証書ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>本製の越後上布であることや産地が証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>一般的な麻織物と区別でき、適正な評価につながる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・証書なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>本製の越後上布であることの証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>一般的な麻織物として扱われやすい</span>
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
              、新潟県の織物・着物の買取相場については
              <Link
                href="/articles/niigata/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                新潟県の着物買取相場
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
            越後上布を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・証書は必ず一緒に査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙や購入時の証書は、本製の越後上布であることや産地を証明する最も重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して反物・きものと一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：麻織物・産地織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                越後上布は本製か一般品かで価値が大きく変わるため、それを正しく見極められる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは本製の越後上布でも安く査定されることがあります。着物・産地織物専門の買取業者であれば、技法や産地を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                越後上布は、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                麻はシミ・黄ばみ・カビ・折りジワが付きやすく、価値が下がりやすい素材です。経年のヤケや汗ジミにも注意が必要です。たとう紙に包んで湿気を避けて保管し、売ると決めたら早めに査定に出すのがおすすめです。
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

      {/* この着物を売るなら（条件別CTA） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              越後上布を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              越後上布は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い越後上布は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・作家・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
            </p>
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
              href="/articles/ojiya-chijimi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                小千谷縮の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                越後上布と同じ技術系統の麻織物・小千谷縮の買取相場と特徴を解説。
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
                薄物・絽・紗・麻など夏着物の買取相場と高く売るコツを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            越後上布の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            越後上布の買取相場はあくまで目安です。本製か一般品か、証紙・証書の有無、状態によって実際の査定額は大きく変わります。着物・産地織物に詳しい査定員に無料査定を依頼して、お手持ちの越後上布の正確な価値を確認しましょう。
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
