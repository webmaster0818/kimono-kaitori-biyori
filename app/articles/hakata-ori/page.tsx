import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】博多織の買取相場｜献上柄の帯・証紙の見方と高く売るコツ",
  description:
    "博多織（はかたおり）の買取相場を徹底解説。福岡・博多の絹織物、独鈷と華皿の献上柄、博多織工業組合の証紙の見方、伝統的工芸品としての価値、博多帯を高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/hakata-ori/",
  },
  openGraph: {
    title: "【2026年最新】博多織の買取相場｜献上柄の帯・証紙の見方",
    description:
      "博多織の買取相場と高く売る方法を解説。福岡・博多の献上柄の帯、証紙が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/hakata-ori/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "博多織の帯はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "博多織の帯の買取相場は、織りの精緻さ・状態・証紙の有無によって幅があります。一般的な献上柄の名古屋帯で数千円〜数万円、凝った織りの袋帯や状態の良い作品では数万円前後になることもあります。博多織工業組合の証紙があり、保存状態が良いほど高い査定が期待できます。",
  },
  {
    question: "博多織の献上柄とはどんな模様ですか？",
    answer:
      "献上柄（けんじょうがら）は博多織を代表する伝統的な文様で、仏具の「独鈷（とっこ）」と「華皿（はなざら）」、そして「子持ち縞（こもちじま）」を組み合わせた模様です。江戸時代に幕府へ献上されたことに由来するとされ、博多帯の象徴的な柄として知られています。締めやすく格のある帯として、和装で広く親しまれています。",
  },
  {
    question: "博多織の証紙はどこを見ればわかりますか？",
    answer:
      "博多織の製品には、博多織工業組合が発行する証紙が貼付されています。組合の厳しい検査に合格した伝統的な技法による製品には、経済産業大臣の指定を受けた「伝統的工芸品の証」として、証紙とともに「伝統マーク」が付けられます。証紙は帯の端に縫い付けられていることが多く、購入時のたとう紙や箱に保管されている場合もあります。",
  },
  {
    question: "博多織は伝統的工芸品に指定されていますか？",
    answer:
      "はい。博多織は帯が1976年（昭和51年）6月に国の伝統的工芸品に指定され、その後2011年にきもの地と袴も追加指定を受けました。福岡市の博多地区を中心に伝わる絹織物で、細い経糸を多く用い、太い緯糸を強く打ち込んで主に経糸で柄を織り出す独特の技法が評価されています。",
  },
  {
    question: "博多織を高く売るにはどうすればよいですか？",
    answer:
      "博多織は証紙とともに査定に出すことが最も重要です。証紙と伝統マークがあれば博多織であることが証明され、適正価格での買取につながります。また、織りや産地織物を評価できる着物・帯に詳しい専門業者を選び、複数社の無料査定を比較しましょう。シミやヤケ、締めジワは価値を下げるため、状態が良いうちに早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "博多織の買取相場｜献上柄の帯・証紙の見方",
  description:
    "博多織の買取相場と高く売る方法を解説。福岡・博多の献上柄の帯、証紙が査定の鍵。",
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
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
    "@id": "https://kimonokaitori-biyori.com/articles/hakata-ori/",
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
      name: "博多織",
      item: "https://kimonokaitori-biyori.com/articles/hakata-ori/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "博多織の実売相場データ（公開オークション落札相場）", "description": "博多織について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E5%8D%9A%E5%A4%9A%E7%B9%94%20%E5%B8%AF/0/", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-06-13", "url": "https://kimonokaitori-biyori.com/articles/hakata-ori/#auction-data", "isAccessibleForFree": true};

export default function HakataOriPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetStructuredData) }}
      />

      <Breadcrumb
        items={[
          { label: "買取相場", href: "/articles/" },
          { label: "博多織" },
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
              <span className="text-gradient">博多織の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                献上柄の帯・証紙の見方と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              博多織（はかたおり）は、福岡市の博多地区を中心に伝わる絹織物です。独鈷と華皿をあしらった「献上柄」の帯が広く知られ、太い緯糸を強く打ち込んで織り上げる、締めやすく格のある帯として親しまれてきました。博多織工業組合の証紙の見方や、買取価格を左右するポイントを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月13日</p>
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
                    1. 博多織とは？献上柄と独特の織り
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】博多織の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#kenjo" className="text-[#6b4c8a] hover:underline">
                    3. 献上柄の意味と種類
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 博多織工業組合の証紙と伝統マーク
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 博多織を高く売るポイント
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

      {/* 博多織とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            博多織とは？献上柄と独特の織り
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              博多織（はかたおり）は、<strong>福岡市の主に博多地区</strong>で特産とされてきた絹織物です。帯が<strong>1976年（昭和51年）6月に国の伝統的工芸品</strong>に指定され、その後<strong>2011年にきもの地と袴も追加指定</strong>を受けています。
            </p>
            <p>
              博多織の最大の特徴は、その独特の織り方にあります。<strong>細い経糸（たていと）を多く用い、太い緯糸（よこいと）を筬（おさ）で強く打ち込み、主に経糸を浮かせて柄を織り出す</strong>のが博多織の技法です。この織りによって生まれる厚みと張りのある生地は、締めるとほどけにくく、帯として高い実用性を備えています。
            </p>
            <p>
              代表的な製品は帯で、なかでも<strong>「献上柄」</strong>の博多帯は広く知られています。締め心地のよさと格の高さから、和装の帯として長く愛用されてきました。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">博多織の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>福岡市・博多地区を中心に伝わる絹織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    細い経糸を多く使い、太い緯糸を強く打ち込む独特の織り
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>独鈷と華皿をあしらった「献上柄」が代表的</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    帯は1976年、きもの地・袴は2011年に伝統的工芸品に指定
                  </span>
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
            【種類別】博多織の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            博多織の買取価格は、帯の種類・織りの精緻さ・証紙の有無・状態によって異なります。以下は一般的な傾向の目安です。
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
                    献上柄の名古屋帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">普段着〜おしゃれ着</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">証紙ありが前提</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    凝った織りの袋帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">精緻な紋織</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円前後</td>
                  <td className="px-4 py-3 text-gray-700">織り・状態で変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    博多織のきもの地
                  </td>
                  <td className="px-4 py-3 text-gray-700">織りの着物</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">サイズ・状態に左右</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    半幅帯・小物
                  </td>
                  <td className="px-4 py-3 text-gray-700">カジュアル向け</td>
                  <td className="px-4 py-3 font-medium">数百円〜数千円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    状態による
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・証紙ありの場合の傾向の目安です。織りの種類、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙と織りの精緻さが価格を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織の買取では、博多織工業組合の証紙があることが評価の前提になります。そのうえで、織りの密度や柄の出来栄え、帯の種類などが査定額を左右します。シンプルな献上柄よりも、多色使いの凝った紋織や格の高い作品のほうが高めの査定になりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織は実用的な帯として使われることが多く、締めジワや擦れ、シミ、ヤケがあると価値が下がりやすい点に注意が必要です。たれ先やお太鼓部分の状態は特に査定に影響します。たとう紙に包んで湿気を避けて保管し、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 献上柄 */}
      <section id="kenjo" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            献上柄の意味と種類
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              <strong>献上柄（けんじょうがら）</strong>は、博多織を代表する伝統的な文様です。仏具である<strong>「独鈷（とっこ）」</strong>と<strong>「華皿（はなざら）」</strong>、そして<strong>「子持ち縞（こもちじま）」</strong>を組み合わせた模様で、博多帯の象徴として広く知られています。
            </p>
            <p>
              「献上」の名は、江戸時代に幕府へ献上されたことに由来するとされます。独鈷と華皿の文様、その間に配される縞には縁起の意味が込められているといわれ、格のある帯として礼を尽くす場面でも用いられてきました。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              献上柄を構成する主な要素
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>独鈷（とっこ）</strong>：仏具をかたどった文様
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>華皿（はなざら）</strong>：仏具をかたどった文様
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>子持ち縞（こもちじま）</strong>：太い縞と細い縞を組み合わせた縞模様
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            博多織工業組合の証紙と伝統マーク
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              博多織の製品には、<strong>博多織工業組合が発行する証紙</strong>が貼付されています。組合は博多織の品質を証明する証紙の発行などを取りまとめており、証紙の有無は査定の重要な手がかりになります。
            </p>
            <p>
              さらに、組合の厳しい検査に合格した伝統的な技法による製品には、<strong>経済産業大臣の指定を受けた「伝統的工芸品の証」</strong>として、証紙とともに<strong>「伝統マーク」</strong>が貼付されます。証紙と伝統マークが揃っていれば、博多織であることと品質が公的に裏づけられます。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>博多織であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統マークがあれば伝統的工芸品の証になる</span>
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
                  <span>博多織であることの証明が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>一般的な帯として扱われやすい</span>
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
              証紙の見方については
              <Link
                href="/articles/certificate-guide/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                着物の証紙ガイド
              </Link>
              、福岡県の織物・着物の買取相場については
              <Link
                href="/articles/fukuoka/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                福岡県の着物買取相場
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
            博多織を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・伝統マークは必ず一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織工業組合の証紙と伝統マークは、博多織であることと品質を証明する大切な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して帯と一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：帯・産地織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織は織りの種類や精緻さによって価値が変わるため、それらを評価できる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは安く査定されることがあります。着物・帯専門の買取業者であれば、織りや産地を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織の帯は、業者の販路や在庫状況によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織は実用的な帯として使われることが多く、締めジワや擦れ、シミ、ヤケがあると価値が下がります。たとう紙に包んで湿気を避けて保管し、売ると決めたら早めに査定に出すのがおすすめです。
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
            【実売データ】公開オークションでの博多織のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。博多織は帯が主流のため、帯を中心に品目を分けて集計しています。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">博多織 帯</td>
                  <td className="px-4 py-3 font-medium">3,908件</td>
                  <td className="px-4 py-3 font-medium">約6,944円</td>
                  <td className="px-4 py-3 font-medium">99,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">博多織 名古屋帯</td>
                  <td className="px-4 py-3 font-medium">2,134件</td>
                  <td className="px-4 py-3 font-medium">約7,928円</td>
                  <td className="px-4 py-3 font-medium">99,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">博多織 袋帯</td>
                  <td className="px-4 py-3 font-medium">641件</td>
                  <td className="px-4 py-3 font-medium">約9,359円</td>
                  <td className="px-4 py-3 font-medium">89,650円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">博多献上 帯（献上柄）</td>
                  <td className="px-4 py-3 font-medium">218件</td>
                  <td className="px-4 py-3 font-medium">約4,513円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">110,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E5%8D%9A%E5%A4%9A%E7%B9%94%20%E5%B8%AF/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション（旧ヤフオク!）「博多織 帯」ほか各キーワードの落札相場
            </a>
            （直近180日の集計・2026年7月取得）
            <br />
            ※ 博多織は帯の流通量が比較的多く、集計は数百件〜数千件規模です。それでも証紙の有無・織りの精緻さ・状態で価格に大きな幅があるため、平均はあくまで価格帯の目安としてご覧ください。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品や、逆に多色使いの凝った紋織・状態の良い作品では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・織りで大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・最高落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・伝統マーク付き・凝った紋織の博多織は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・織り・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ博多織でも、証紙や伝統マークの有無、献上柄か凝った紋織か、帯の種類、素材や保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["産地の証紙・伝統マークあり（博多織工業組合）", "◎ 大きくプラス", "博多織工業組合の証紙は博多織であることを示す手がかりになり、伝統的な技法による製品には伝統マークが付く場合があります。証紙・伝統マークがそろっていると産地・品質の確認がしやすく、評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "博多織であることの証明が難しくなり、一般的な帯として扱われやすくなります。たとう紙や箱の表示など、他の手がかりが重要になります。"],
                  ["献上柄（伝統的な文様）", "○ 定番で安定", "独鈷・華皿・子持ち縞を組み合わせた献上柄は博多帯の定番で、需要が安定しています。シンプルな献上柄は価格帯も落ち着きやすい傾向です。"],
                  ["多色使い・凝った紋織", "◎ 高評価", "シンプルな献上柄より、多色使いの華やかな紋織や格の高い作品のほうが評価が上がりやすい傾向。織りの密度や柄の出来栄えが査定を左右します。"],
                  ["正絹（絹）", "◎ 有利", "正絹の博多織は素材面でも評価されやすい状態。化繊（ポリエステル等）の博多織風は評価が大幅に下がる傾向があります。"],
                  ["帯の種類（袋帯／名古屋帯／半幅帯）", "○〜△ 用途で差", "格の高い袋帯や八寸名古屋帯は需要があり評価されやすい一方、半幅帯や小物はカジュアル向けで価格が控えめになりやすい傾向です。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様は最も高くなりやすい状態。保管ジワのみで難がなければ特に有利です。"],
                  ["締めジワ・擦れ・シミ・ヤケ・難あり", "△ マイナス", "博多織は実用的な帯として使われることが多く、締めジワや擦れ、シミ、ヤケは減額対象。たれ先やお太鼓部分の状態は特に影響します。自己クリーニングは避け、現状のまま査定へ。"],
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
              博多織を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              博多織は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い博多織は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/obi-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                帯の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                袋帯・名古屋帯など帯の種類別買取相場と高く売るコツを解説。
              </p>
            </Link>
            <Link
              href="/articles/kurume-gasuri/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                久留米絣の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                同じ福岡の重要無形文化財・久留米絣の買取相場と価値を解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            博多織の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            博多織の買取相場はあくまで目安です。織りの種類・状態・証紙の有無によって実際の査定額は大きく変わります。着物・帯に詳しい査定員に無料査定を依頼して、お手持ちの博多織の正確な価値を確認しましょう。
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
