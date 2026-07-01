import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】米沢織の買取相場｜置賜紬の証紙の見方・紅花紬の特徴と高く売るコツ",
  description:
    "米沢織（よねざわおり）の買取相場を徹底解説。山形・米沢の先染め織物で、国の伝統的工芸品「置賜紬」に指定。置賜紬伝統織物協同組合連合会の証紙の見方、紅花染・草木染の特徴、着物・紬を高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/yonezawa-ori/",
  },
  openGraph: {
    title: "【2026年最新】米沢織の買取相場｜置賜紬の証紙の見方と高く売るコツ",
    description:
      "米沢織の買取相場と高く売る方法を解説。山形・米沢の紅花染の先染め織物、証紙が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/yonezawa-ori/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "米沢織の着物はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "米沢織（置賜紬）の着物の買取相場は、織りの種類・状態・証紙の有無によって幅があります。一般的な紬で数千円〜数万円、紅花染など手間のかかる草木染の作品や状態の良いものでは数万円前後になることもあります。置賜紬伝統織物協同組合連合会の証紙があり、織りや染めが良好で保存状態が良いほど高い査定が期待できます。",
  },
  {
    question: "米沢織の証紙はどこを見ればわかりますか？",
    answer:
      "米沢織のうち国の伝統的工芸品に該当する織物には、置賜紬伝統織物協同組合連合会（証紙上の表示は「置賜紬伝統織物組合」と短縮されている場合があります）が発行する証紙が貼付されています。証紙には「置賜紬」「経済産業大臣指定 伝統的工芸品」の表示があり、産地（米沢・長井・白鷹）や染色方法・製織方法がチェックできる仕組みになっています。証紙は反物の端やたとう紙・箱に保管されていることが多いです。",
  },
  {
    question: "米沢織にはどんな種類の織物がありますか？",
    answer:
      "米沢織は山形県の置賜地方で織られる先染め織物の総称で、国の伝統的工芸品「置賜紬」には、米沢の草木染紬（紅花紬など）、長井の長井紬（緯総絣・併用絣）、白鷹の白鷹御召・米琉板締小絣などが含まれます。なかでも紅花で染めた紅花紬は米沢を代表する織物として知られています。",
  },
  {
    question: "米沢織は伝統的工芸品に指定されていますか？",
    answer:
      "はい。米沢・長井・白鷹の3地域で織られる紬は、1976年（昭和51年）に「置賜紬（おいたまつむぎ）」として国の伝統的工芸品に指定されています。先に糸を染める先染めで、紅花・刈安などの植物染料を用いた草木染が特徴です。産地検査に合格した製品には証紙が貼られ、品質の証明となります。",
  },
  {
    question: "米沢織を高く売るにはどうすればよいですか？",
    answer:
      "米沢織は証紙とともに査定に出すことが最も重要です。証紙があれば置賜紬であることと産地・染織方法が証明され、適正価格での買取につながります。また、紬や草木染に詳しい専門業者を選び、複数社の無料査定を比較しましょう。シミやヤケ、変色は価値を下げるため、状態が良いうちに早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "米沢織の買取相場｜置賜紬の証紙の見方と紅花紬の特徴",
  description:
    "米沢織の買取相場と高く売る方法を解説。山形・米沢の紅花染の先染め織物、証紙が査定の鍵。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/yonezawa-ori/",
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
      name: "米沢織",
      item: "https://kimonokaitori-biyori.com/articles/yonezawa-ori/",
    },
  ],
};

export default function YonezawaOriPage() {
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
          { label: "米沢織" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">米沢織の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                置賜紬の証紙の見方・紅花紬の特徴と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              米沢織（よねざわおり）は、山形県米沢市を中心とした置賜地方ではぐくまれてきた先染めの織物です。紅花などの植物染料を用いた草木染が特徴で、米沢・長井・白鷹の紬は国の伝統的工芸品「置賜紬」に指定されています。証紙の見方や、買取価格を左右するポイントを詳しく解説します。
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
                    1. 米沢織とは？山形・置賜の先染め織物
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】米沢織の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#techniques" className="text-[#6b4c8a] hover:underline">
                    3. 置賜紬を構成する織物と紅花染の特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 置賜紬の証紙の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 米沢織を高く売るポイント
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

      {/* 米沢織とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            米沢織とは？山形・置賜の先染め織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              米沢織（よねざわおり）は、<strong>山形県米沢市を中心とした置賜（おきたま）地方</strong>で織られてきた先染めの織物です。米沢藩主・上杉鷹山による国おこしの殖産策をきっかけに発展し、江戸後期には紅花や藍などの植物染料を使った先染織物の産地として全国に知られるようになりました。
            </p>
            <p>
              このうち米沢・長井・白鷹の3地域で織られる手織の紬は、<strong>1976年（昭和51年）に「置賜紬（おいたまつむぎ）」として国の伝統的工芸品</strong>に指定されています。糸を先に染めてから織り上げる<strong>「先染め（さきぞめ）」</strong>と、紅花・刈安などを用いた<strong>草木染</strong>を共通の特徴としています。
            </p>
            <p>
              なかでも紅花で染めた<strong>紅花紬（べにばなつむぎ）</strong>は米沢を代表する織物として知られ、紬の着物地として高く評価されています。買取市場でも、織りと染めの良し悪し、証紙の有無が査定の手がかりになります。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">米沢織の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>山形・置賜地方で織られる先染めの織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>紅花・刈安などを用いた草木染が特徴</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>米沢・長井・白鷹の紬は1976年に「置賜紬」として伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>紅花染の紅花紬が代表的な織物</span>
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
            【種類別】米沢織の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            米沢織の買取価格は、織物の種類・染めや織りの手間・証紙の有無・状態によって大きく異なります。以下は一般的な傾向の目安です。
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
                    紅花紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">紅花染の草木染紬</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円前後</td>
                  <td className="px-4 py-3 text-gray-700">証紙ありが前提</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    白鷹御召・板締小絣
                  </td>
                  <td className="px-4 py-3 text-gray-700">手間のかかる絣織</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">織り・状態で変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    長井紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">緯総絣・併用絣</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">柄・状態による</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    一般的な米沢紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">普段着〜おしゃれ着</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    サイズ・状態に左右
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・証紙ありの場合の傾向の目安です。織物の種類、染めや織りの手間、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙と染め・織りの手間が価格を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                米沢織の買取では、置賜紬の証紙があることが評価の前提になります。そのうえで、紅花染など草木染の手間、絣の精緻さ、文様の出来栄えなどが査定額を左右します。同じ紬でも、手間のかかる草木染や格調高い古典柄の作品は高めの査定になりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                草木染の織物は、ヤケや変色、シミがあると価値が下がりやすい点に注意が必要です。仕立て直しの跡や裏地の汚れも査定に影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 構成織物と紅花染 */}
      <section id="techniques" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            置賜紬を構成する織物と紅花染の特徴
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            置賜紬は、米沢・長井・白鷹の3地域で織られる紬の総称です。それぞれの産地で受け継がれてきた、主な織物は以下のとおりです。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>米沢の草木染紬（紅花紬など）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>長井紬（緯総絣）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>長井紬（併用絣）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>白鷹御召（しらたかおめし）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>米琉板締小絣（よねりゅういたじめこがすり）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>白鷹板締小絣</span>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 mt-5">
            なかでも、紅花で糸を染めた<strong>紅花紬</strong>は米沢を代表する織物です。紅花は米沢の特産品で、紅花・刈安などの植物染料を用いた草木染は、手間のかかる工程ほど評価が高くなる傾向があります。染めや織りの見極めは専門知識を要するため、査定では米沢織や紬に詳しい業者の目が重要になります。
          </p>
        </div>
      </section>

      {/* 証紙の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            置賜紬の証紙の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              米沢織のうち国の伝統的工芸品に該当する織物には、<strong>置賜紬伝統織物協同組合連合会が発行する証紙</strong>が貼付されています。証紙には「置賜紬」「経済産業大臣指定 伝統的工芸品」の表示があり、置賜紬であることを証明する大切な品質の証です（証紙上の発行者表示は「置賜紬伝統織物組合」と短縮されている場合があります）。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              証紙に記載・表示される主な情報
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>「置賜紬」の名称</strong>と「経済産業大臣指定 伝統的工芸品」の表示
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>産地</strong>（米沢・長井・白鷹）の区分
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>染色方法（草木染など）・製織方法の区分</span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              証紙に産地や染色・製織方法を表示することで、どの産地でどのように作られた織物かを確認できる仕組みになっています。証紙は反物の端やたとう紙・箱に保管されていることが多いため、査定の前に探しておきましょう。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>置賜紬であることと産地・染織方法が証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>織りや染めが確認でき、適正な評価につながる</span>
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
                  <span>置賜紬であることの証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地や染織方法が特定できず、一般品扱いになりやすい</span>
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
              、山形県の織物・着物の買取相場については
              <Link
                href="/articles/yamagata/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                山形県の着物買取相場
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
            米沢織を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙は必ず一緒に査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                置賜紬の証紙は、置賜紬であることと産地・染織方法を証明する最も重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して着物・反物と一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：紬・草木染に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                米沢織は産地や染め・織りによって価値が変わるため、それらを正しく評価できる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは手間のかかる紬でも安く査定されることがあります。着物・紬専門の買取業者であれば、紅花染や絣を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                米沢織の着物は、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                草木染の織物は、ヤケや変色、シミがあると価値が下がります。仕立て直しの跡や汚れにも注意が必要です。たとう紙に包んで湿気を避けて保管し、売ると決めたら早めに査定に出すのがおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの米沢織・置賜紬のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">置賜紬</td>
                  <td className="px-4 py-3 font-medium">24件</td>
                  <td className="px-4 py-3 font-medium">約21,978円</td>
                  <td className="px-4 py-3 font-medium">132,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紅花紬</td>
                  <td className="px-4 py-3 font-medium">258件</td>
                  <td className="px-4 py-3 font-medium">約8,555円</td>
                  <td className="px-4 py-3 font-medium">55,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">米沢紬</td>
                  <td className="px-4 py-3 font-medium">55件</td>
                  <td className="px-4 py-3 font-medium">約12,281円</td>
                  <td className="px-4 py-3 font-medium">102,000円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">長井紬</td>
                  <td className="px-4 py-3 font-medium">49件</td>
                  <td className="px-4 py-3 font-medium">約12,495円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">39,800円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：Yahoo!オークション 落札相場（過去180日間の集計）
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E7%BD%AE%E8%B3%9C%E7%B4%AC/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              「置賜紬」
            </a>
            ・
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E7%B4%85%E8%8A%B1%E7%B4%AC/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              「紅花紬」
            </a>
            ・
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E7%B1%B3%E6%B2%A2%E7%B4%AC/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              「米沢紬」
            </a>
            ・
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E9%95%B7%E4%BA%95%E7%B4%AC/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              「長井紬」
            </a>
            （2026年7月取得）
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。数百円台の安値は証紙なし・状態不良・帯や小物・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・染織の手間で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・紅花染など手の込んだ作品は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・染織・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ米沢織（置賜紬）でも、証紙の有無・染織の手間・保存状態・仕立ての状態によって査定額は大きく変わります。種類（紅花紬・長井紬・白鷹御召など）が同じでも、下表のような条件で評価が上下します。前述の実売データの“幅”も、多くはこの状態差によって生まれています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">状態・条件</th>
                  <th className="px-4 py-3 text-left font-semibold">査定への影響</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">解説</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["証紙あり（置賜紬伝統織物協同組合連合会）", "◎ 大きくプラス", "置賜紬であることと産地・染織方法が公的に証明されます。証紙があると評価が安定し、相場の上限に近づきやすくなります。"],
                  ["証紙なし", "△ 下がりやすい", "置賜紬か類似の紬かの判別が難しく、慎重な査定になりがち。たとう紙や落款など他の手がかりが重要になります。"],
                  ["紅花染・草木染など手の込んだ技法", "◎ 高評価", "紅花・刈安などの草木染は手間がかかるほど評価が上がりやすい傾向。染めの発色や深みが良好なほど有利です。"],
                  ["作家物・有名工房（落款あり）", "◎ 別格の評価", "染織家・名門工房の作品は別格の評価になりやすい。証紙・落款で確認できます。実在が確認できる作家であることが前提です。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様は最も高くなりやすい状態。保管ジワのみなら特に有利です。"],
                  ["美品（着用少・難なし）", "○ 良好", "目立つシミ・ヤケ・変色がなければ安定した評価が期待できます。"],
                  ["仕立て上がり（サイズ）", "○〜△", "サイズや着用感で変動。裄・身丈が大きめだと現代向けで有利、寸法が小さいと下がる場合も。反物（未仕立て）は好みのサイズに仕立てられるため需要が広く評価されやすい傾向。"],
                  ["シミ・ヤケ・変色・難あり", "△ マイナス", "草木染はヤケや変色が出やすく、状態不良は減額対象。難の程度・範囲で幅があります。自己クリーニングは避け、現状のまま査定へ。"],
                ].map(([cond, impact, note], i) => (
                  <tr key={cond} className={`border-b border-[#e8ddd0] ${i % 2 ? "bg-[#faf8f5]" : "bg-white"} hover:bg-white transition-colors`}>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{cond}</td>
                    <td className="px-4 py-3 font-medium text-[#6b4c8a] whitespace-nowrap">{impact}</td>
                    <td className="px-4 py-3 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「証紙なし」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
          </p>
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
              米沢織を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              米沢織は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い米沢織は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/yamagata/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                山形県の着物買取相場
              </h3>
              <p className="text-xs text-gray-600">
                山形県の着物・帯の買取相場と、地域の買取事情・高く売るコツを解説。
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
            米沢織の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            米沢織の買取相場はあくまで目安です。織物の種類・染めや織りの手間・状態・証紙の有無によって実際の査定額は大きく変わります。着物・紬に詳しい査定員に無料査定を依頼して、お手持ちの米沢織の正確な価値を確認しましょう。
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
