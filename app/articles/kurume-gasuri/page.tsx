import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】久留米絣の買取相場｜重要無形文化財・藍染の木綿絣と高く売るコツ",
  description:
    "久留米絣（くるめがすり）の買取相場を徹底解説。福岡・久留米の木綿絣、手括り・天然藍染・手織りの重要無形文化財、井上伝の創案、証紙の見方、高く売るポイントを買取の視点でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/kurume-gasuri/",
  },
  openGraph: {
    title: "【2026年最新】久留米絣の買取相場｜重要無形文化財・藍染の木綿絣",
    description:
      "久留米絣の買取相場と高く売る方法を解説。福岡・久留米の藍染木綿絣、証紙が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/kurume-gasuri/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "久留米絣はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "久留米絣の買取相場は、機械織りか手織りか、重要無形文化財の要件を満たすか、状態によって幅があります。一般的な機械織りの木綿の久留米絣で数百円〜数千円、手括り・天然藍染・手織りの重要無形文化財の証紙が付く作品では数万円前後になることもあります。木綿の絣のため絹織物より相場は控えめですが、手仕事の品は希少性が評価されます。",
  },
  {
    question: "久留米絣は重要無形文化財なのですか？",
    answer:
      "はい。久留米絣の伝統的な技法は1957年に国の重要無形文化財に指定されており、木綿織物として指定を受けた点が知られています。指定の要件は「手括りによる絣糸を使うこと」「純正天然藍で染めること」「なげひの手織り織機で織ること」の3つです。これらを満たし検査に合格した製品にのみ、重要無形文化財の証紙が付きます。",
  },
  {
    question: "久留米絣は誰がつくり始めたのですか？",
    answer:
      "久留米絣は、江戸時代後期の1800年頃、久留米藩の城下に生まれた井上伝（いのうえ でん、1788〜1869年）という少女によって考案されたと伝えられています。着古した藍染の着物の色が一部抜けて斑点模様になっていたことをヒントに、白く残したい部分を糸で括って藍で染め、紺と白のまだらの糸で織る技法を生み出したとされます。",
  },
  {
    question: "久留米絣の証紙はどこを見ればわかりますか？",
    answer:
      "久留米絣には、久留米絣協同組合が関わる証紙が付きます。手括り・天然藍染・手織りの3要件を満たし検査に合格した品には「重要無形文化財」の証紙が貼られます。組合の手織り製品の認定では、組合員による製造や綿糸の使用、手投杼または踏み木による飛杼を用いることなども要件とされます。証紙は反物の端やたとう紙の中などに保管されていることが多いです。",
  },
  {
    question: "久留米絣を高く売るにはどうすればよいですか？",
    answer:
      "久留米絣は証紙とともに査定に出すことが重要です。特に手括り・天然藍染・手織りの重要無形文化財の証紙があれば希少性が証明され、適正価格での買取につながります。木綿絣や産地織物を評価できる着物専門の業者を選び、複数社の無料査定を比較しましょう。色あせやシミ、虫食いは価値を下げるため、状態が良いうちに早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "久留米絣の買取相場｜重要無形文化財・藍染の木綿絣",
  description:
    "久留米絣の買取相場と高く売る方法を解説。福岡・久留米の藍染木綿絣、証紙が査定の鍵。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/kurume-gasuri/",
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
      name: "久留米絣",
      item: "https://kimonokaitori-biyori.com/articles/kurume-gasuri/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "久留米絣の実売相場データ（公開オークション落札相場）", "description": "久留米絣について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%B9%85%E7%95%99%E7%B1%B3%E7%B5%A3%20%E5%8F%8D%E7%89%A9/0/", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-06-13", "url": "https://kimonokaitori-biyori.com/articles/kurume-gasuri/#auction-data", "isAccessibleForFree": true};

export default function KurumeGasuriPage() {
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
          { label: "久留米絣" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              重要無形文化財
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">久留米絣の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                重要無形文化財・藍染の木綿絣と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              久留米絣（くるめがすり）は、福岡県久留米を中心に伝わる藍染の木綿絣です。手括り・天然藍染・手織りの技法は1957年に重要無形文化財に指定され、日本の木綿絣を代表する織物として知られます。証紙の見方や、買取価格を左右するポイントを詳しく解説します。
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
                    1. 久留米絣とは？藍染の木綿絣
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】久留米絣の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#culture" className="text-[#6b4c8a] hover:underline">
                    3. 重要無形文化財の3要件と歴史
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 久留米絣の証紙の見方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 久留米絣を高く売るポイント
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

      {/* 久留米絣とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            久留米絣とは？藍染の木綿絣
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              久留米絣（くるめがすり）は、<strong>福岡県久留米</strong>を中心に伝わる<strong>藍染の木綿絣（もめんがすり）</strong>です。糸を括って染め分け、紺と白のまだらの糸で文様を織り出す「絣（かすり）」の技法による織物で、日本の木綿絣のなかでも高い評価を受けてきました。
            </p>
            <p>
              久留米絣の手仕事の技術は<strong>1957年に国の重要無形文化財に指定</strong>されています。絹織物とは異なり、木綿ならではの素朴で丈夫な風合いが特徴で、普段着の着物やもんぺなどに用いられ、生活に根ざした織物として親しまれてきました。
            </p>
            <p>
              なお、現在は手織りのほかに機械織りの久留米絣も広く生産されています。重要無形文化財の要件を満たす手仕事の品と、機械織りの普及品とでは価値が大きく異なる点が、買取を考えるうえでの重要なポイントです。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">久留米絣の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>福岡県久留米を中心に伝わる藍染の木綿絣</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>糸を括って染め分ける「絣」の技法で文様を織り出す</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>手仕事の技術は1957年に重要無形文化財に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>木綿ならではの素朴で丈夫な風合い</span>
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
            【種類別】久留米絣の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            久留米絣の買取価格は、手織りか機械織りか、重要無形文化財の証紙の有無、状態によって大きく異なります。木綿の絣のため絹織物より相場は控えめですが、手仕事の品は希少性が評価されます。以下は一般的な傾向の目安です。
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
                    機械織りの久留米絣
                  </td>
                  <td className="px-4 py-3 text-gray-700">木綿の普及品</td>
                  <td className="px-4 py-3 font-medium">数百円〜数千円</td>
                  <td className="px-4 py-3 text-gray-700">状態による</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    手織りの久留米絣
                  </td>
                  <td className="px-4 py-3 text-gray-700">手仕事の品</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">証紙・状態で変動</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    重要無形文化財の証紙付き
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    手括り・天然藍染・手織り
                  </td>
                  <td className="px-4 py-3 font-medium">数万円前後</td>
                  <td className="px-4 py-3 text-gray-700">希少性が高い</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    反物（未仕立て）
                  </td>
                  <td className="px-4 py-3 text-gray-700">仕立て前の品</td>
                  <td className="px-4 py-3 font-medium">種類により変動</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    手織り・証紙ありは高め
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品の場合の傾向の目安です。手織りか機械織りか、証紙の有無、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                手織りか機械織りかで価値が大きく変わる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久留米絣は、手括り・天然藍染・手織りの手仕事による品と、量産される機械織りの品とで価値が大きく異なります。重要無形文化財の要件を満たす手仕事の品は、完成までに長い工程と高度な技術を要するため希少で、相応の評価につながります。一方、機械織りの普及品は普段着の木綿として控えめな相場になりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久留米絣は木綿の織物のため、色あせ・シミ・カビ・虫食いがあると価値が下がりやすい点に注意が必要です。藍染の色合いは久留米絣の魅力のひとつであり、退色が進むと評価に影響します。風通しのよい場所で乾燥を保ち、状態が良いうちに早めに査定へ出すことが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 重要無形文化財 */}
      <section id="culture" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            重要無形文化財の3要件と歴史
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              久留米絣の伝統的な技法は、<strong>1957年に国の重要無形文化財に指定</strong>されています。指定にあたっては、次の<strong>3つの要件</strong>を満たすことが求められます。これらをすべて満たし検査に合格した品にのみ、重要無形文化財の証紙が付きます。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              重要無形文化財「久留米絣」の3要件
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>手括りによる絣糸</strong>を使うこと
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>純正天然藍</strong>で染めること
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>なげひ（投杼）の手織り織機</strong>で織ること
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              久留米絣の歴史は江戸時代後期にさかのぼります。1800年頃、久留米藩の城下に生まれた<strong>井上伝（いのうえ でん、1788〜1869年）</strong>という少女が、着古した藍染の着物の色が一部抜けて斑点模様になっていたことに着目しました。白く残したい部分を糸で括って藍で染め、紺と白のまだらの糸で織ることで、絣の文様を生み出したと伝えられています。
            </p>
            <p>
              その後、久留米絣は久留米を中心とした地域の織物として広まり、図案・括り・染め・織りまで多くの緻密な工程を経て、高度な技術を持つ職人たちの手で受け継がれてきました。完成までに長い時間と手間を要する点も、手仕事の品の価値を支えています。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            久留米絣の証紙の見方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              久留米絣の査定では、<strong>証紙の有無と種類</strong>が重要な手がかりになります。手括り・天然藍染・手織りの3要件を満たし検査に合格した品には、<strong>「重要無形文化財」の証紙</strong>が貼られます。この証紙があるかどうかで、評価は大きく変わります。
            </p>
            <p>
              また、<strong>久留米絣協同組合</strong>が行う手織り製品の認定では、組合員による製造、綿糸の使用、手投杼または踏み木による飛杼を用いることなどが要件とされます。証紙は反物の端やたとう紙の中などに保管されていることが多いため、必ず確認しましょう。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>久留米絣であることと技法が証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>重要無形文化財の証紙は希少性の裏づけになる</span>
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
                  <span>手織りか機械織りかの判断が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>一般的な木綿の織物として扱われやすい</span>
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
            久留米絣を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙は必ず一緒に査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                重要無形文化財の証紙や組合の証紙は、久留米絣の技法と希少性を証明する大切な手がかりです。反物の端やたとう紙、箱の中に保管されていることが多いので、必ず探して一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：木綿絣・産地織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久留米絣は手織りか機械織りかで価値が大きく変わるため、それを見極められる査定員がいる業者を選ぶことが重要です。一般的なリサイクルショップでは手仕事の品でも安く査定されることがあります。木綿絣や産地織物に詳しい着物専門の買取業者であれば、技法を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久留米絣のような産地織物は、業者の知識や販路によって査定額に差が出やすいものです。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久留米絣は木綿のため、湿気によるカビや虫食い、藍の退色に注意が必要です。色あせやシミは価値を下げるため、風通しのよい場所で保管し、売ると決めたら早めに査定に出すのがおすすめです。
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
            【実売データ】公開オークションでの久留米絣のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。久留米絣は木綿の絣のため、絹織物と比べると相場は控えめで、数千円〜1万円台が中心です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">品目</th>
                  <th className="px-4 py-3 text-left font-semibold">直近180日の落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">平均落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">久留米絣 着物</td>
                  <td className="px-4 py-3 font-medium">574件</td>
                  <td className="px-4 py-3 font-medium">約6,612円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">久留米絣 反物</td>
                  <td className="px-4 py-3 font-medium">201件</td>
                  <td className="px-4 py-3 font-medium">約9,268円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">久留米絣 ワンピース</td>
                  <td className="px-4 py-3 font-medium">34件</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">約10,905円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%B9%85%E7%95%99%E7%B1%B3%E7%B5%A3%20%E5%8F%8D%E7%89%A9/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「久留米絣 反物」ほか各品目の落札相場
            </a>
            （直近180日の集計・2026年7月取得）
            <br />
            ※ 久留米絣は木綿絣のため出品・落札価格は絹織物より控えめで、最安値は数百円〜数十円台の例も含まれます。件数が少ない品目は、数点の高額・安値で平均が動きやすい点にご留意ください。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・機械織り・状態不良の品や、逆に重要無形文化財の証紙付き・作家物では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・技法（手織りか機械織りか）で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              重要無形文化財の証紙付き・手織りの久留米絣は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・技法・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ久留米絣でも、証紙の有無、手織りか機械織りか、天然藍染か化学染料か、絣柄の精緻さや保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["重要無形文化財の指定基準に合致（手括り・純正天然藍・手織り）", "◎ 大きくプラス", "1957年に指定された重要無形文化財は、手括りによる絣糸・純正天然藍での染め・投杼（なげひ）の手織りの3要件をすべて満たし検査に合格した品のみです。この基準に合致し証紙が付くと、希少性が明確になり評価が安定します。"],
                  ["久留米絣協同組合の証紙", "◎ プラス", "組合の手織り製品の認定などの証紙は、産地・技法の裏づけになります。反物の端やたとう紙の中に保管されていることが多く、証紙がそろっていると査定がスムーズです。"],
                  ["純正天然藍染か化学染料か", "◎ 天然藍は有利", "純正天然藍で染めた品は重要無形文化財の要件でもあり、評価されやすい状態です。化学染料による藍風の染めは、意匠が似ていても評価は控えめになりやすい傾向があります。"],
                  ["手織りか機械織りか", "◎／△ 差が大きい", "投杼の手織りは手仕事の品として評価され、機械織りの普及品は普段着の木綿として控えめな相場になりやすい状態です。久留米絣は現在も機械織りが広く生産されており、この差が査定額を大きく分けます。"],
                  ["名工・作家の手による品", "○〜◎ 評価されやすい", "手仕事に長けた作り手による精緻な作品は評価が上がりやすい傾向です。落款や証紙で作り手が確認できると有利になります（作り手の特定は現物と証紙での確認が前提です）。"],
                  ["絣柄の精緻さ（細かな絣・複雑な絵絣）", "○ プラス", "括り・染め・織りに手間がかかる細かい絣や複雑な絵絣は、技術の高さが評価につながりやすい状態です。単純な縞・格子より手間がかかる分、評価されやすい傾向があります。"],
                  ["反物（未仕立て）か仕立て上がりか", "○ 反物・美品は有利", "未仕立ての反物や未使用に近い美品は需要が見込みやすく有利です。仕立て上がりでも、サイズや状態によって評価が変わります。"],
                  ["傷み・色あせ・虫食い", "△ マイナス", "木綿の織物は湿気によるカビ・虫食い、藍の退色が起きやすく、状態不良は減額対象です。自己クリーニングは避け、現状のまま早めに査定へ出すのがおすすめです。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「証紙なし」「機械織り」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
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
              久留米絣を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              久留米絣は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い久留米絣は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と見分け方
              </h3>
              <p className="text-xs text-gray-600">
                大島紬・結城紬など、産地別の織物の特徴と買取相場をまとめて解説。
              </p>
            </Link>
            <Link
              href="/articles/hakata-ori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                博多織の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                同じ福岡の伝統的工芸品・博多織の献上柄の帯の買取相場を解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            久留米絣の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            久留米絣の買取相場はあくまで目安です。手織りか機械織りか、証紙の有無・状態によって実際の査定額は大きく変わります。木綿絣・産地織物に詳しい査定員に無料査定を依頼して、お手持ちの久留米絣の正確な価値を確認しましょう。
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
