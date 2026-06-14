import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title:
    "【2026年最新】小千谷縮の買取相場｜重要無形文化財・ユネスコ無形文化遺産の麻織物と高く売るコツ",
  description:
    "小千谷縮（おぢやちぢみ）の買取相場を徹底解説。新潟・小千谷の苧麻を用いた麻織物で、緯糸の強撚と湯もみで生まれる「シボ」が特徴の夏物。重要無形文化財・ユネスコ無形文化遺産（小千谷縮・越後上布）の証明や、越後上布との違い、高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/ojiya-chijimi/",
  },
  openGraph: {
    title:
      "【2026年最新】小千谷縮の買取相場｜重要無形文化財の麻織物と高く売るコツ",
    description:
      "小千谷縮の買取相場と高く売る方法を解説。新潟・小千谷の苧麻の麻織物、シボが特徴の夏物。",
    url: "https://kimonokaitori-biyori.com/articles/ojiya-chijimi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "小千谷縮はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "小千谷縮の買取相場は、糸の素材（苧麻か機械麻糸か）・織りの精緻さ・証紙や証明の有無・状態によって幅があります。機械織りの量産品は数千円前後、伝統的な手績み苧麻・いざり機による本場の重要無形文化財クラスの作品では数万円〜十万円前後になることもあります。重要無形文化財や伝統的工芸品であることを示す証明があり、状態が良いほど高い査定が期待できます。",
  },
  {
    question: "小千谷縮の特徴である「シボ」とは何ですか？",
    answer:
      "シボとは、布の表面にあらわれる細かな凹凸（しわ）のことです。小千谷縮は、緯糸（よこいと）に強い撚りをかけた強撚糸を用いて織り上げ、その後に「湯もみ」を行うことで撚りが戻ろうとする力を利用してシボを出します。このシボによって肌に布が密着しにくく、さらりとした清涼感のある夏物の麻織物になります。",
  },
  {
    question: "小千谷縮は重要無形文化財やユネスコ無形文化遺産に指定されていますか？",
    answer:
      "はい。小千谷縮は1955年（昭和30年）に国の重要無形文化財に指定されました（当初の指定名称は「越後縮」で、後に「小千谷縮・越後上布」に変更）。指定には、すべて苧麻を手績みした糸を使うこと、絣模様は手くびりによること、いざり機で織ること、しぼとりは湯もみ・足ぶみによること、さらしは雪ざらしによることといった要件があります。さらに2009年には「小千谷縮・越後上布」として越後上布とともにユネスコ無形文化遺産に登録されています。",
  },
  {
    question: "小千谷縮と越後上布はどう違いますか？",
    answer:
      "どちらも新潟県魚沼地方で苧麻（ちょま）から織られる麻織物で、「小千谷縮・越後上布」として一体で重要無形文化財・ユネスコ無形文化遺産に指定・登録されています。違いは織りにあり、越後上布はシボのない平織の最高級麻織物で、主に南魚沼市周辺で織られます。一方の小千谷縮は、緯糸に強撚糸を用い湯もみでシボを出した縮織で、小千谷市周辺が産地です。シボの有無が両者を見分ける大きな手がかりになります。",
  },
  {
    question: "小千谷縮を高く売るにはどうすればよいですか？",
    answer:
      "小千谷縮は、産地証明や重要無形文化財・伝統的工芸品であることを示す証紙・証明とともに査定に出すことが重要です。本場の手績み苧麻・いざり機による作品か、機械織りの量産品かで評価が大きく変わるため、麻織物に詳しい専門業者を選びましょう。複数社の無料査定を比較し、麻はシミ・カビ・ヤケが出やすいため、状態が良いうちに早めに査定へ出すのが有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "小千谷縮の買取相場｜重要無形文化財・ユネスコ無形文化遺産の麻織物",
  description:
    "小千谷縮の買取相場と高く売る方法を解説。新潟・小千谷の苧麻の麻織物、シボが特徴の夏物。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/ojiya-chijimi/",
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
      name: "小千谷縮",
      item: "https://kimonokaitori-biyori.com/articles/ojiya-chijimi/",
    },
  ],
};

export default function OjiyaChijimiPage() {
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
          { label: "小千谷縮" },
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
              <span className="text-gradient">小千谷縮の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                シボが涼を呼ぶ麻織物の見分け方と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              小千谷縮（おぢやちぢみ）は、新潟県小千谷市周辺で苧麻（ちょま）を用いて織られる麻織物です。緯糸に強撚糸を用い、湯もみで生まれる「シボ」が特徴のさらりとした夏物として知られます。重要無形文化財・ユネスコ無形文化遺産（小千谷縮・越後上布）としての価値や、買取価格を左右するポイントを詳しく解説します。
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
                    1. 小千谷縮とは？新潟・小千谷の苧麻の麻織物
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】小千谷縮の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#characteristics" className="text-[#6b4c8a] hover:underline">
                    3. シボ・湯もみ・雪さらしという特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 重要無形文化財・証紙の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 小千谷縮を高く売るポイント
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

      {/* 小千谷縮とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            小千谷縮とは？新潟・小千谷の苧麻の麻織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              小千谷縮（おぢやちぢみ）は、<strong>新潟県小千谷市周辺</strong>で織られる<strong>苧麻（ちょま）</strong>を用いた麻織物です。緯糸（よこいと）に強い撚りをかけた強撚糸を使って織り、湯もみによって布の表面に細かな凹凸「<strong>シボ</strong>」を生み出すのが最大の特徴です。シボによって肌に布が密着しにくく、通気性と清涼感に富んださらりとした夏物として親しまれてきました。
            </p>
            <p>
              小千谷縮は、<strong>1955年（昭和30年）に国の重要無形文化財</strong>に指定されました（当初の指定名称は「越後縮」で、後に「小千谷縮・越後上布」に変更）。さらに<strong>1975年（昭和50年）には国の伝統的工芸品</strong>に指定され、<strong>2009年（平成21年）には「小千谷縮・越後上布」としてユネスコ無形文化遺産</strong>に登録されています。これは染織分野での日本初の登録とされています。
            </p>
            <p>
              同じ魚沼地方の麻織物である<strong>越後上布</strong>とは「小千谷縮・越後上布」として一体で指定・登録されており、深い関係にあります。両者は織りに違いがあり、見分けには専門的な知識が役立ちます（詳しくは特徴の項で解説します）。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">小千谷縮の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>新潟・小千谷で織られる苧麻（ちょま）の麻織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>緯糸の強撚と湯もみで生まれる「シボ」が特徴の夏物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1955年に重要無形文化財、1975年に伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>2009年に「小千谷縮・越後上布」としてユネスコ無形文化遺産に登録</span>
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
            【種類別】小千谷縮の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            小千谷縮の買取価格は、糸の素材（手績み苧麻か機械麻糸か）・織りの精緻さ・絣の有無・証明や証紙の有無・状態によって大きく異なります。以下は一般的な傾向の目安です。
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
                    本場・重要無形文化財クラス
                  </td>
                  <td className="px-4 py-3 text-gray-700">手績み苧麻・いざり機</td>
                  <td className="px-4 py-3 font-medium">数万円〜十万円前後</td>
                  <td className="px-4 py-3 text-gray-700">証明・状態で変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    伝統的工芸品の反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">産地証紙あり</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">柄・状態による</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    仕立て上がりの着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">夏物の単衣</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">サイズ・状態に左右</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    機械織りの量産品
                  </td>
                  <td className="px-4 py-3 text-gray-700">機械麻糸など</td>
                  <td className="px-4 py-3 font-medium">数千円前後</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    一般品扱いになりやすい
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・証明や証紙ありの場合の傾向の目安です。糸の素材、織りの種類、絣の有無、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                糸の素材と証明が価格を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小千谷縮の買取では、手績みの苧麻糸を用いいざり機で織られた本場の重要無形文化財クラスの作品と、機械麻糸を用いた量産品とで評価が大きく分かれます。そのうえで、絣模様の細かさや織りの精緻さ、産地証紙や重要無形文化財・伝統的工芸品であることを示す証明の有無が査定額を左右します。手間のかかる本場の作品ほど高めの査定になりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                麻織物ならではの状態管理に注意
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小千谷縮は麻織物のため、湿気によるシミやカビ、長期保管によるヤケ・変色が出やすい点に注意が必要です。折りジワや汗ジミも査定に影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* シボ・湯もみ・雪さらし */}
      <section id="characteristics" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            シボ・湯もみ・雪さらしという特徴
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            小千谷縮の価値の核心は、独特の風合いを生む手仕事の工程にあります。重要無形文化財の指定要件にも示される、代表的な特徴を整理します。
          </p>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                強撚の緯糸が生む「シボ」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小千谷縮の最大の特徴は、布の表面にあらわれる細かな凹凸「シボ」です。緯糸（よこいと）に強い撚りをかけた強撚糸を用いて織り上げることで、織り終えた後に撚りが戻ろうとする力が働き、独特の縮みが生まれます。このシボのある織りが「縮（ちぢみ）」と呼ばれる所以であり、肌に布が密着しにくいさらりとした着心地につながります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                シボを引き出す「湯もみ・足ぶみ」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                織り上がった布を湯の中でもみ、足で踏む「湯もみ・足ぶみ」によって、緯糸の強い撚りが戻り、シボがはっきりと立ちあらわれます。重要無形文化財の指定要件では、しぼとりは「湯もみ、足ぶみ」によることとされており、機械では再現しにくい手仕事の風合いが評価のポイントになります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                雪国ならではの「雪さらし（雪ざらし）」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                雪さらしは、織り上げた布を雪の上に晒す、雪国・小千谷ならではの仕上げの工程です。重要無形文化財の指定要件でも、さらしは「雪ざらしによること」とされています。雪解けの時季に布を雪原に広げる光景は地域の早春の風物詩としても知られ、本場の小千谷縮を象徴する伝統技術の一つです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                越後上布との違い（シボの有無）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                同じ魚沼地方で苧麻から織られる<strong>越後上布</strong>は、シボのない平織の最高級麻織物で、主に南魚沼市周辺が産地です。これに対し小千谷縮は、緯糸に強撚糸を用い湯もみでシボを出した<strong>縮織</strong>で、小千谷市周辺が産地です。両者は「小千谷縮・越後上布」として一体で指定・登録されていますが、<strong>シボの有無</strong>が見分けの大きな手がかりになります。
              </p>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              姉妹織物の越後上布については
              <Link
                href="/articles/echigo-jofu/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                越後上布の買取相場
              </Link>
              、夏に着る麻や絽・紗などの着物全般については
              <Link
                href="/articles/summer-kimono/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                夏着物の買取相場
              </Link>
              もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            重要無形文化財・証紙の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              小千谷縮の買取では、<strong>本場の作品であることを示す証明や産地証紙</strong>の有無が評価の前提になります。手績み苧麻・いざり機・湯もみ・雪さらしといった要件を満たす重要無形文化財クラスの作品には、それを裏付ける証明が付されていることがあり、査定の大きな手がかりになります。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              査定で確認される主なポイント
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>産地証紙</strong>（小千谷縮・本場の麻織物であることの表示）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>糸の素材</strong>（手績み苧麻か機械麻糸か）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>重要無形文化財・伝統的工芸品であることを示す証明の有無</span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              証紙や証明書は、反物の端や、購入時のたとう紙・箱に保管されていることが多いものです。本場の手仕事による作品であることが確認できるほど、適正な評価につながります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・証明ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>本場の小千谷縮であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>糸の素材や技法が確認でき、適正な評価につながる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・証明なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>本場の小千谷縮であることの証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>手織りか機械織りかの判断が難しく、一般品扱いになりやすい</span>
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
            小千谷縮を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・証明は必ず一緒に査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地証紙や、重要無形文化財・伝統的工芸品であることを示す証明は、本場の小千谷縮であることを裏付ける最も重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して反物・着物と一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：麻織物・小千谷縮に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小千谷縮は、手績み苧麻・いざり機による本場の作品か機械織りの量産品かで価値が大きく変わるため、それを正しく見極められる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは本場の作品でも安く査定されることがあります。着物・麻織物に詳しい専門の買取業者であれば、糸の素材や技法を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小千谷縮は、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                小千谷縮は麻織物のため、湿気によるシミ・カビ、ヤケ・変色が出やすく、これらは価値を下げます。汗ジミや折りジワにも注意が必要です。たとう紙に包んで湿気を避けて保管し、売ると決めたら状態が良いうちに早めに査定に出すのがおすすめです。
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
              href="/articles/echigo-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                越後上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                小千谷縮と一体で指定される姉妹織物。シボのない平織の最高級麻織物を解説。
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
                麻・絽・紗など夏物の着物の買取相場と高く売るコツを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            小千谷縮の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            小千谷縮の買取相場はあくまで目安です。糸の素材・織りの技法・状態・証紙や証明の有無によって実際の査定額は大きく変わります。着物・麻織物に詳しい査定員に無料査定を依頼して、お手持ちの小千谷縮の正確な価値を確認しましょう。
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
