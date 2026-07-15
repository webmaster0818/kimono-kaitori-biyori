import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】近江上布の買取相場｜国の伝統的工芸品・着物のみの実売データで解説",
  description:
    "近江上布（滋賀県湖東地方）の買取相場と高く売る方法を解説。櫛押捺染・型紙捺染の絣と独特のシボ加工が特徴の麻織物で、1977年に国の伝統的工芸品に指定。現代の生地製品と混同されやすい近江上布を、着物のみに絞った公開オークションの実売データで解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/omi-jofu/",
  },
  openGraph: {
    title: "【2026年最新】近江上布の買取相場｜国の伝統的工芸品・着物のみの実売データで解説",
    description:
      "近江上布（滋賀県湖東地方）の買取相場と高く売る方法。着物のみに絞った実売データと証紙・状態による評価の変わり方を解説。",
    url: "https://kimonokaitori-biyori.com/articles/omi-jofu/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "近江上布の着物はどのくらいで買い取ってもらえますか？",
    answer:
      "近江上布の買取価格は、証紙の有無・手績み糸か否か・絣の技法・状態によって変わり、一律の相場を示すことはできません。参考として、公開オークションの実売データでは、2026年1月21日〜2026年7月14日の着物の単品出品が49件、平均 約6,485円・中央値 5,000円・最高 28,600円でした（2026年7月16日取得）。買取査定額は実売価格より低くなるのが一般的なので、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "近江上布はどんな織物ですか？",
    answer:
      "近江上布は、滋賀県の湖東地方（東近江市・愛知郡愛荘町・犬上郡多賀町など）で作られる麻織物です。絣には「緯糸絣」と「経緯併用絣」があり、絣糸の染色には「櫛押捺染」「型紙捺染」という独特の技法を用います。織り上げた反物に「シボ付け」と呼ばれる近江独特のちぢみ加工を施すのも特徴です。鎌倉時代から麻織物が発展し、江戸時代には彦根藩の振興でさらに栄えたと伝えられ、1977年（昭和52年）3月30日に国の伝統的工芸品に指定されています。",
  },
  {
    question: "「近江上布」と検索すると洋服やシャツの生地も出てきますが、着物と同じ相場ですか？",
    answer:
      "いいえ、分けて考える必要があります。近江の麻織物は現代ではシャツやワンピースなどの洋装・生地製品にも広く使われており、オークションの検索結果にも和装以外の品が多く混ざります。本ページの実売データは、和装以外を除外し、着物のみを集計したものです。着物として売る場合と生地・洋服として売る場合では市場も評価もまったく異なるため、着物の査定は着物専門業者に依頼しましょう。",
  },
  {
    question: "近江上布は証紙がなくても売れますか？",
    answer:
      "証紙がなくても買取は可能ですが、近江上布かどうか、伝統的工芸品の要件を満たす品かどうかの特定が難しくなるため、査定額は下がりやすくなります。証紙や購入時のしおり・たとう紙などが残っていれば、産地と品質の裏付けになるので必ず一緒に査定に出しましょう。",
  },
  {
    question: "近江上布を高く売るにはどうすればよいですか？",
    answer:
      "証紙・付属品をそろえること、上布や麻織物の取扱実績がある着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。近江上布は木綿や量産麻製品と混同されると評価が伸びないため、産地の裏付けを示せるかが重要です。夏物需要が高まる春〜初夏は売りやすい時期とされます。麻は日焼けや変色で価値が下がりやすいので、状態が良いうちに早めの査定がおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "近江上布の買取相場｜国の伝統的工芸品・着物のみの実売データで解説",
  description:
    "近江上布（滋賀県湖東地方）の買取相場と高く売る方法。着物のみに絞った実売データと証紙・状態による評価の変わり方を解説。",
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
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
    "@id": "https://kimonokaitori-biyori.com/articles/omi-jofu/",
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
      name: "近江上布",
      item: "https://kimonokaitori-biyori.com/articles/omi-jofu/",
    },
  ],
};

export default function OmiJofuPage() {
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
          { label: "近江上布" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#b5402f] text-white mb-4 tracking-wide">
              滋賀・伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">近江上布の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                国の伝統的工芸品・着物のみの実売データで解説
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              近江上布（おうみじょうふ）は、琵琶湖の東側・滋賀県湖東地方（東近江市・愛荘町・多賀町など）で作られる麻織物です。櫛押捺染・型紙捺染による絣と、「シボ付け」と呼ばれる独特のちぢみ加工が特徴で、1977年に国の伝統的工芸品に指定されています。現代では洋服の生地としても知られるため、本ページでは和装以外を除外し、着物のみに絞った公開オークションの実売データで相場の実態を解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年7月16日</p>
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
                    1. 近江上布とは？湖東地方の伝統的な麻織物
                  </a>
                </li>
                <li>
                  <a href="#jofu" className="text-[#6b4c8a] hover:underline">
                    2. 「上布」の中での近江上布の位置づけ
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 近江上布の買取評価の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 近江上布を高く売るポイント
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

      {/* 近江上布とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            近江上布とは？湖東地方の伝統的な麻織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              近江上布（おうみじょうふ）は、<strong>滋賀県の湖東地方（東近江市・愛知郡愛荘町・犬上郡多賀町など）で作られる麻織物</strong>です。絣には「緯糸絣（よこいとがすり）」と「経緯併用絣（たてよこへいようがすり）」があり、絣糸の染色には<strong>「櫛押捺染（くしおしなっせん）」「型紙捺染（かたがみなっせん）」</strong>という近江ならではの技法が用いられます。
            </p>
            <p>
              織りは先染めの平織りで、織り上げた反物に<strong>「シボ付け」と呼ばれる独特のちぢみ加工</strong>を施して仕上げるのが大きな特徴です。肌に張り付きにくいシボのある風合いは、夏の着物地として高く評価されてきました。生平（きびら）と呼ばれる、緯糸に大麻の手績み糸を使い地機で織るタイプも伝わっています。
            </p>
            <p>
              歴史的には鎌倉時代から麻織物が発展し、江戸時代には彦根藩の振興によってさらに栄えたと伝えられています。<strong>1977年（昭和52年）3月30日に国（経済産業大臣）の伝統的工芸品に指定</strong>されました。愛荘町の近江上布伝統産業会館（運営：滋賀県麻織物工業協同組合）では、手織りの公開や体験、後継者育成が行われています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">近江上布の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>産地は滋賀県湖東地方（東近江市・愛荘町・多賀町など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>緯糸絣・経緯併用絣を、櫛押捺染・型紙捺染で染める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>「シボ付け」による近江独特のちぢみ加工</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>鎌倉時代からの麻織物の伝統。江戸時代は彦根藩が振興</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1977年（昭和52年）に国の伝統的工芸品に指定</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              出典：
              <a
                href="https://kougeihin.jp/craft/0119/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                伝統的工芸品産業振興協会「近江上布」
              </a>
              ・
              <a
                href="https://omi-jofu.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                近江上布伝統産業会館
              </a>
              （いずれも2026年7月確認）
            </p>
            <p>
              滋賀県で着物をまとめて売る方法や地元業者の選び方は
              <Link href="/articles/shiga/" className="text-[#6b4c8a] underline font-medium">
                滋賀の着物買取おすすめ業者
              </Link>
              のページをご覧ください。本ページは「近江上布という織物の価値と実売データ」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 上布の中での位置づけ */}
      <section id="jofu" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            「上布」の中での近江上布の位置づけ
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            上布（じょうふ）とは、苧麻などの細い麻糸で織られた薄手で上質な麻織物の総称で、夏物の高級着尺として珍重されてきました。産地ごとに技法や公的な指定が異なるため、どの上布かによって査定の見方も変わります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">主な上布・麻織物</th>
                  <th className="px-4 py-3 text-left font-semibold">産地</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">特徴・指定</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">近江上布（本ページ）</td>
                  <td className="px-4 py-3 text-gray-700">滋賀県湖東地方</td>
                  <td className="px-4 py-3 text-gray-700">櫛押捺染・型紙捺染の絣とシボ加工。国の伝統的工芸品（1977年）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    <Link href="/articles/echigo-jofu/" className="underline">越後上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">新潟県南魚沼市など</td>
                  <td className="px-4 py-3 text-gray-700">雪晒しで知られる最高級の麻織物。国の重要無形文化財（1955年）・ユネスコ無形文化遺産（2009年）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    <Link href="/articles/miyako-jofu/" className="underline">宮古上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">沖縄県宮古島</td>
                  <td className="px-4 py-3 text-gray-700">藍染の紺地に細かい絣。国の重要無形文化財（1978年）・伝統的工芸品（1975年）</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    <Link href="/articles/noto-jofu/" className="underline">能登上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">石川県中能登町など</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">先染めの細かな絣。石川県指定無形文化財（1960年）。江戸時代に近江から技術が伝わったとされる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ このほか沖縄・八重山地方の
            <Link href="/articles/yaeyama-jofu/" className="text-[#6b4c8a] underline">八重山上布</Link>
            、麻縮の
            <Link href="/articles/ojiya-chijimi/" className="text-[#6b4c8a] underline">小千谷縮</Link>
            も代表的な夏の麻織物です。
          </p>
        </div>
      </section>

      {/* 買取評価の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            近江上布の買取評価の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            近江上布の買取価格は、証紙の有無・技法・状態によって変わります。以下は一般的な評価傾向であり、実際の金額は需要や業者によって変動します。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                「着物の近江上布」と「生地の近江の麻」を区別して考える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                近江の麻織物は現代ではシャツ・ワンピースなどの洋装生地としても広く流通しており、中古市場でも和装以外の品が多く出回っています。着物として売る場合は、和装市場での評価になります。本ページの実売データは和装以外を除外し、<strong>着物のみを集計</strong>したものです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                伝統技法の品と量産品で評価が分かれる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                櫛押捺染・型紙捺染の絣や手績み糸の生平など、伝統的工芸品の要件を満たす品と、機械化された量産の麻着物では評価が異なります。証紙や購入時の資料で伝統技法の品と確認できるかどうかが査定の分かれ目です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                夏物としての実用需要が下支え
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                近江上布はシボのある涼しい着心地から、夏に実際に着るための普段使い需要があります。派手すぎない絣柄で状態の良い品は、実用品として安定して買い手が付きやすい傾向があります。夏物需要が高まる春〜初夏は売りやすい時期とされます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定と証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品の指定と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              近江上布は、<strong>1977年（昭和52年）3月30日に国（経済産業大臣）の伝統的工芸品に指定</strong>されています。指定の技術・技法には、先染めの平織り、櫛押捺染・型紙捺染による絣糸の染色、シボ付けなどが定められています。産地では、近江上布伝統産業会館を運営する<strong>滋賀県麻織物工業協同組合</strong>が伝統技術の継承と後継者育成に取り組んでいます。
            </p>
            <p>
              伝統的工芸品として所定の検査に合格した品には、伝統マーク付きの証紙が貼られるのが一般的です。証紙は「近江上布の着物」であることの裏付けになるため、査定でも重要な手がかりになります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>近江上布であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>量産の麻着物と区別して評価してもらえる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>他産地・量産の麻着物との区別がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>伝統技法の品でも慎重な査定になりがち</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が下がる傾向がある</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              証紙の見方については
              <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">
                着物の証紙ガイド
              </Link>
              、織りの着物の種類については
              <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                紬の種類と買取相場
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
            近江上布を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・しおり・たとう紙などは、近江上布であることを示す重要な手がかりです。量産の麻着物と区別してもらうためにも、産地に関わる資料は必ず一緒に査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：上布・麻織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                近江上布は洋装生地のイメージも強いため、和装としての価値を正しく評価できる業者選びが大切です。上布類・麻織物の取扱実績がある着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                業者によって麻織物の販路や評価基準は異なります。複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                麻織物は日焼け・黄変・折りジワで価値が下がりやすくなります。シボのある生地は強くプレスせず、たとう紙に包んで湿気の少ない場所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
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
            【実売データ】公開オークションでの近江上布（着物）のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。なお、近江の麻織物は現代のシャツ・洋服・生地としても多く流通しており、検索結果には和装以外の品が混ざります。<strong>本データは和装以外を除外し、着物のみを集計したものです。</strong>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold">中央値</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">近江上布（着物のみ）</td>
                  <td className="px-4 py-3 font-medium">49件</td>
                  <td className="px-4 py-3 font-medium">約6,485円</td>
                  <td className="px-4 py-3 font-medium">5,000円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">28,600円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E8%BF%91%E6%B1%9F%E4%B8%8A%E5%B8%83"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「近江上布」の落札相場
            </a>
            （集計期間：2026年1月21日〜2026年7月14日／2026年7月16日取得）
            <br />
            ※ タイトルに「近江上布」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外しています。小物・ハギレ等は表から除外しています。
            <br />
            ※ 近江上布の生地は現代のシャツ等にも使われており検索結果に和装以外が混ざるため、シャツ・ワンピース・生地などの和装以外の出品を除外し、着物のみを集計しています（集計期間内の該当出品はすべて着物で、帯・反物の単品出品は集計対象にありませんでした）。
            <br />
            ※ 平均と中央値が近く、他の上布に比べて価格のばらつきは小さめです。夏の実用着として中央値前後で安定的に取引されている一方、状態の良い品や絣柄の見栄えが良い品が上限側に来る構図です。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品と、伝統技法の証紙付きの品では価格が上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・技法で変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・状態の良い近江上布は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
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
            同じ近江上布でも、証紙の有無、伝統技法の品か量産品か、保存状態によって査定額は変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（伝統マーク・検査合格証）", "◎ 大きくプラス", "近江上布であることの裏付けになり、量産の麻着物と区別して評価してもらえます。"],
                  ["証紙なし", "△ 下がりやすい", "他産地・量産の麻着物との判別が難しくなり、慎重な査定になりがち。しおり・たとう紙など他の手がかりも一緒に出しましょう。"],
                  ["櫛押捺染・型紙捺染の絣", "◎ 高評価", "近江上布ならではの伝統技法による絣は価値の中心で、柄の見栄えが良い品ほど評価されやすい傾向があります。"],
                  ["手績み糸の生平（きびら）", "◎〜○", "緯糸に大麻の手績み糸を使い地機で織る生平は手仕事の度合いが高く、確認できれば評価されやすい要素です。"],
                  ["量産・機械化された麻着物", "△ 控えめ", "見た目が似ていても、伝統技法の品とは別物として評価は控えめになりやすい傾向があります。"],
                  ["未仕立ての反物・未使用品", "○ プラス", "仕立ての自由が利く反物や未使用・しつけ付きの品は需要があり、評価されやすいことがあります。"],
                  ["日焼け・黄変・シミあり", "△ マイナス", "麻織物は変色で価値が下がりやすく、状態不良は減額対象。自己クリーニングは避け、現状のまま査定へ。"],
                  ["サイズ（裄・身丈）", "○ 需要で変動", "夏の実用着として着られることが多いため、現代の体型に合うサイズのほうが需要があり、評価に影響することがあります。"],
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
              近江上布を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              近江上布は証紙・技法・状態によって評価が変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・伝統技法・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の裏付けがある近江上布は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・技法・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/echigo-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                越後上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                雪晒しで知られる新潟の最高級麻織物。ユネスコ無形文化遺産の上布の相場を解説。
              </p>
            </Link>
            <Link
              href="/articles/miyako-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                宮古上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                藍染の紺地に細かい絣。国の重要無形文化財の上布の相場を解説。
              </p>
            </Link>
            <Link
              href="/articles/souba-method/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                相場データの調査方法
              </h3>
              <p className="text-xs text-gray-600">
                当サイトの実売データの集め方・出典・更新方針を公開しています。
              </p>
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            麻縮の
            <Link href="/articles/ojiya-chijimi/" className="text-[#6b4c8a] underline">小千谷縮</Link>
            、近江から技術が伝わったとされる
            <Link href="/articles/noto-jofu/" className="text-[#6b4c8a] underline">能登上布</Link>
            、沖縄の
            <Link href="/articles/yaeyama-jofu/" className="text-[#6b4c8a] underline">八重山上布</Link>
            のページもあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            近江上布の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            近江上布の実売データはあくまで目安です。証紙・技法・状態によって実際の査定額は変わります。着物専門の査定員に無料査定を依頼して、お手持ちの近江上布の正確な価値を確認しましょう。
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
