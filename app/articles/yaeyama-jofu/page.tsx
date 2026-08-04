import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】八重山上布の買取相場｜白地の苧麻絣・出品僅少の希少織物を実売データで解説",
  description:
    "八重山上布（沖縄・石垣市／竹富町）の買取相場と高く売る方法を解説。苧麻を手績みし、植物染料と海晒しで仕上げる白地基調の上布で、1989年に国の伝統的工芸品に指定。公開オークションの実売データ（件数・平均・中央値・最高）と、証紙・状態による評価の変わり方をまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/yaeyama-jofu/",
  },
  openGraph: {
    title: "【2026年最新】八重山上布の買取相場｜白地の苧麻絣・出品僅少の希少織物を実売データで解説",
    description:
      "八重山上布（沖縄・石垣市／竹富町）の買取相場と高く売る方法。実売データと証紙・状態による評価の変わり方を解説。",
    url: "https://kimonokaitori-biyori.com/articles/yaeyama-jofu/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "八重山上布はどのくらいで買い取ってもらえますか？",
    answer:
      "八重山上布の買取価格は、証紙の有無・状態・仕立ての別によって大きく変わり、一律の相場を示すことはできません。参考として、公開オークションの実売データでは、2026年2月21日〜2026年7月6日（約180日相当）の単品出品が7件、平均 約25,530円・中央値 10,275円・最高 77,000円でした（2026年7月16日取得）。ただし7件と極端に少なく平均は大きく振れるため、あくまで幅の参考です。買取査定額は実売価格より低くなるのが一般的なので、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "八重山上布はどんな織物ですか？",
    answer:
      "八重山上布は、沖縄県石垣市および八重山郡竹富町で作られる苧麻（ちょま）の上布です。手括りや手摺り込みで絣を染め、クールやフクギなどの植物染料を用い、織り上げた布を海水に晒す「海晒し」で仕上げるのが特徴で、白地基調の涼やかな夏織物として知られます。1989年（平成元年）4月11日に国の伝統的工芸品に指定されています。",
  },
  {
    question: "宮古上布と八重山上布はどう違いますか？",
    answer:
      "どちらも沖縄の苧麻を使った上布ですが、宮古上布（宮古島）は藍で染めた紺地の細かい絣が代表的なのに対し、八重山上布（石垣島など八重山地方）は白地に絣をあしらった明るい風合いが特徴とされています。指定の面でも、宮古上布は国の重要無形文化財（1978年）・伝統的工芸品（1975年）、八重山上布は伝統的工芸品（1989年）と異なります。査定でも別の織物として評価されるため、どちらかを明確にして査定に出すことが大切です。",
  },
  {
    question: "八重山上布は証紙がなくても売れますか？",
    answer:
      "証紙がなくても買取自体は可能ですが、八重山上布かどうかの特定が難しくなるため、査定額は下がりやすくなります。伝統的工芸品として所定の検査に合格した品には伝統マーク付きの証紙が貼られるのが一般的で、証紙がそろっていれば産地と品質の裏付けになります。たとう紙・箱・購入時のしおりなどの付属品も一緒に査定に出しましょう。",
  },
  {
    question: "八重山上布を高く売るにはどうすればよいですか？",
    answer:
      "証紙・付属品をそろえること、沖縄の織物や上布類に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。八重山上布は市場に出回る数が非常に少なく、業者によって評価が分かれやすいため、相見積もりの効果が特に大きい織物です。麻は日焼けや変色で価値が下がりやすいので、状態が良いうちに早めに査定へ出すのがおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "八重山上布の買取相場｜白地の苧麻絣・実売データで解説",
  description:
    "八重山上布（沖縄・石垣市／竹富町）の買取相場と高く売る方法。実売データと証紙・状態による評価の変わり方を解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/yaeyama-jofu/",
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
      name: "八重山上布",
      item: "https://kimonokaitori-biyori.com/articles/yaeyama-jofu/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "八重山上布の実売相場データ（公開オークション落札相場）", "description": "八重山上布について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E5%85%AB%E9%87%8D%E5%B1%B1%E4%B8%8A%E5%B8%83", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-07-16", "url": "https://kimonokaitori-biyori.com/articles/yaeyama-jofu/#auction-data", "isAccessibleForFree": true};

export default function YaeyamaJofuPage() {
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
          { label: "八重山上布" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#b5402f] text-white mb-4 tracking-wide">
              沖縄・伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">八重山上布の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                白地の苧麻絣・出品僅少の希少織物を実売データで解説
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              八重山上布（やえやまじょうふ）は、沖縄県石垣市および八重山郡竹富町で作られる苧麻（ちょま）の上布です。手括り・手摺り込みの絣、クールやフクギなどの植物染料、織り上げた布を海水に晒す「海晒し」による白地基調の風合いが特徴で、1989年に国の伝統的工芸品に指定されています。市場への出品自体が非常に少ない希少な織物のため、本ページでは公開オークションの実売データと、証紙・状態による評価の変わり方を正直に解説します。
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
                    1. 八重山上布とは？海晒しで仕上げる白地の上布
                  </a>
                </li>
                <li>
                  <a href="#jofu" className="text-[#6b4c8a] hover:underline">
                    2. 「上布」の中での八重山上布の位置づけ
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 八重山上布の買取評価の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 八重山上布を高く売るポイント
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

      {/* 八重山上布とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            八重山上布とは？海晒しで仕上げる白地の上布
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              八重山上布（やえやまじょうふ）は、<strong>沖縄県石垣市および八重山郡竹富町</strong>で作られる麻織物（上布）です。素材にはイラクサ科の植物・<strong>苧麻（ちょま）</strong>の糸を用い、絣糸は「手括り」または「手摺り込み」で染め、手投杼（てなげひ）を使った先染めの平織りで織り上げられます。
            </p>
            <p>
              染色にはクール（紅露）・フクギ・相思樹・インド藍などの<strong>植物染料</strong>が使われ、織り上げた布を海水に晒す<strong>「海晒し」</strong>で白地をより白く冴えさせ、絣の色を定着させます。仕上げの杵たたきでつやと肌触りを整えた、白地基調の涼やかな夏の高級織物です。
            </p>
            <p>
              歴史的には、17世紀以降の人頭税の時代に貢納布として織ることが課され、その中で技術が磨かれたと伝えられています。明治末には組合が結成されて産業として栄え、戦争で一時途絶えたのち、戦後に少数の織り手によって復興されました。<strong>1989年（平成元年）4月11日に国（経済産業大臣）の伝統的工芸品に指定</strong>されています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">八重山上布の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>産地は沖縄県石垣市・八重山郡竹富町（石垣島など八重山地方）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>素材は苧麻（ちょま）。絣は手括り・手摺り込みで染める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>クール・フクギ・インド藍などの植物染料を使用</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>海水に晒す「海晒し」と杵たたきで仕上げる白地基調の夏織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1989年（平成元年）に国の伝統的工芸品に指定</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              出典：
              <a
                href="https://kougeihin.jp/craft/0135/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                伝統的工芸品産業振興協会「八重山上布」
              </a>
              （2026年7月確認）
            </p>
            <p>
              沖縄の着物をまとめて売る方法や地元業者の選び方は
              <Link href="/articles/okinawa/" className="text-[#6b4c8a] underline font-medium">
                沖縄の着物買取おすすめ業者
              </Link>
              のページをご覧ください。本ページは「八重山上布という織物の価値と実売データ」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 上布の中での位置づけ */}
      <section id="jofu" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            「上布」の中での八重山上布の位置づけ
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            上布（じょうふ）とは、苧麻などの細い麻糸で織られた薄手で上質な麻織物の総称で、夏物の高級着尺として珍重されてきました。各産地で技法や指定が異なるため、どの上布かによって査定の見方も変わります。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">八重山上布（本ページ）</td>
                  <td className="px-4 py-3 text-gray-700">沖縄県石垣市・竹富町</td>
                  <td className="px-4 py-3 text-gray-700">白地基調・植物染料・海晒し。1989年 伝統的工芸品</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    <Link href="/articles/miyako-jofu/" className="underline">宮古上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">沖縄県宮古島</td>
                  <td className="px-4 py-3 text-gray-700">藍染の紺地に細かい絣。国の重要無形文化財（1978年）・伝統的工芸品（1975年）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    <Link href="/articles/echigo-jofu/" className="underline">越後上布</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">新潟県南魚沼市など</td>
                  <td className="px-4 py-3 text-gray-700">雪晒しで知られる最高級の麻織物。国の重要無形文化財（1955年）・ユネスコ無形文化遺産（2009年）</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    <Link href="/articles/ojiya-chijimi/" className="underline">小千谷縮</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">新潟県小千谷市</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">シボのある麻縮。越後上布とともに国の重要無形文化財</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ このほか石川県の
            <Link href="/articles/noto-jofu/" className="text-[#6b4c8a] underline">能登上布</Link>
            、滋賀県の
            <Link href="/articles/omi-jofu/" className="text-[#6b4c8a] underline">近江上布</Link>
            も代表的な上布・麻織物です。同じ沖縄の織物では
            <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline">首里織</Link>
            のページもご覧ください。
          </p>
        </div>
      </section>

      {/* 買取評価の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            八重山上布の買取評価の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            八重山上布の買取価格は、証紙の有無・仕立ての別・状態によって大きく変わります。以下は一般的な評価傾向であり、実際の金額は需要や業者によって変動します。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                そもそも流通量が非常に少ない希少織物
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                八重山上布は生産量・中古市場での流通量ともに非常に少なく、公開オークションでも単品出品は約180日相当でわずか数件という水準です（後述の実売データ参照）。相場が「安定して形成されている」とは言いがたく、一点ごとの証紙・状態・仕立てによって評価が大きく振れるのが実情です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙ありの本製品と「八重山上布風」で評価が分かれる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                手績みの苧麻・植物染料・海晒しといった伝統的工芸品としての要件を満たす本製品と、機械紡績糸や化学染料を使った「上布風」の品では評価が大きく異なります。証紙や購入時の資料で本製品と確認できるかどうかが査定の分かれ目になります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                夏物需要と沖縄染織のまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                上布は夏の薄物のため、需要が高まる春〜初夏は売りやすい時期とされます。また、
                <Link href="/articles/bingata/" className="text-[#6b4c8a] underline">琉球紅型</Link>
                や
                <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline">首里織</Link>
                など沖縄の染織品と一緒に査定に出すと、まとめて評価されやすくなります。
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
              八重山上布は、<strong>1989年（平成元年）4月11日に国（経済産業大臣）の伝統的工芸品に指定</strong>されています。指定の技術・技法には、苧麻糸の使用、手括り・手摺り込みによる絣糸の染色、手投杼を用いた先染め平織りなどが定められています。
            </p>
            <p>
              伝統的工芸品として所定の検査に合格した品には、伝統マーク付きの証紙が貼られるのが一般的です。証紙は産地と品質の裏付けになるため、査定でも重要な手がかりになります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>八重山上布であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>希少織物として高い評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>他産地の麻織物・上布風の品との区別が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>本製品でも慎重な査定になりがち</span>
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
              、染めと織りの違いや織りの着物の種類については
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
            八重山上布を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・購入時のしおり・箱などは、八重山上布であることを示す最も重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。流通量が少ない織物ほど、裏付け資料の有無で評価が変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：沖縄の織物・上布に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                八重山上布は取扱経験のない査定員には価値の判断が難しい織物です。一般的なリサイクルショップではなく、沖縄の染織や上布類の取扱実績がある着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                流通量が少なく相場が形成されにくい織物は、業者による評価差が特に出やすくなります。最低でも複数社に無料査定を依頼し、金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：白地の変色が進む前に早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                八重山上布は白地基調のため、日焼け・黄変・シミが目立ちやすい織物です。麻は湿気にも注意が必要です。売ると決めたら、状態が良いうちに早めの査定がおすすめです。
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
            【実売データ】公開オークションでの八重山上布のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。八重山上布は公開オークションでの出品自体が非常に少ない品目で、今回の集計期間（2026年2月21日〜2026年7月6日・約180日相当）でも該当する単品出品は<strong>7件</strong>のみでした。
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
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">八重山上布 全体（着物・帯・反物の合算）</td>
                  <td className="px-4 py-3 font-medium">7件</td>
                  <td className="px-4 py-3 font-medium">約25,530円</td>
                  <td className="px-4 py-3 font-medium">10,275円</td>
                  <td className="px-4 py-3 font-medium">77,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">うち着物</td>
                  <td className="px-4 py-3 font-medium">3件</td>
                  <td className="px-4 py-3 font-medium">約15,965円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">35,310円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E5%85%AB%E9%87%8D%E5%B1%B1%E4%B8%8A%E5%B8%83"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「八重山上布」の落札相場
            </a>
            （集計期間：2026年2月21日〜2026年7月6日・約180日相当／2026年7月16日取得）
            <br />
            ※ タイトルに「八重山上布」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外しています。小物・ハギレ等は表から除外しています。
            <br />
            ※ 最高落札の77,000円は九寸名古屋帯の例です（帯は2件のみのため表の区分としては掲載していません）。
          </p>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-6">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              7件は「相場」と呼ぶには少なすぎる——数字の読み方
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              八重山上布は出品自体が非常に少なく、約180日相当でわずか7件です。この件数では、証紙付きの良品が1点あるだけで平均が大きく跳ね、逆に難あり品が続けば平均が沈みます。実際、平均（約25,530円）と中央値（10,275円）が大きく離れているのは、一部の高額落札（帯の77,000円など）が平均を引き上げているためです。<strong>上表の数値は「安定した相場」ではなく、あくまで価格の“幅”の参考</strong>としてご覧ください。お手持ちの品の実際の価値は、現物を見た専門査定でしか分かりません。
            </p>
          </div>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品と、証紙付き・美品の本製品では価格が大きく上下します。金額は取得時点のもので、相場は時期・状態・証紙・仕立てで大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              出品が少なく評価が割れやすい八重山上布は、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・状態・仕立てでどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ八重山上布でも、証紙の有無や状態、仕立てによって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（伝統マーク・検査合格証）", "◎ 大きくプラス", "八重山上布であることの裏付けになり、評価が安定します。希少織物ほど証紙の重みが大きくなります。"],
                  ["証紙なし", "△ 下がりやすい", "他産地の麻織物や上布風の品との判別が難しくなり、慎重な査定になりがち。購入時の資料など他の手がかりが重要になります。"],
                  ["手績み苧麻・植物染料・海晒しの本製品", "◎ 高評価", "伝統的工芸品の要件を満たす手仕事の品は高く評価されやすい要素です。証紙とあわせて確認できると有利です。"],
                  ["機械紡績糸・化学染料の「上布風」", "△ 控えめ", "見た目が似ていても、伝統的工芸品の本製品とは別物として評価は控えめになりやすい傾向があります。"],
                  ["未仕立ての反物", "◎〜○", "仕立ての自由が利く反物は需要があり、状態が良ければ評価されやすい傾向があります。"],
                  ["未使用・しつけ付き・美品", "○ プラス", "夏の薄物は肌に直接近い着方をするため、未使用・美品の評価が相対的に高くなりやすい品目です。"],
                  ["日焼け・黄変・シミあり", "△ マイナス", "白地基調の八重山上布は変色が目立ちやすく、減額対象になります。自己処理はせず現状のまま査定へ。"],
                  ["帯・小物への仕立て替え品", "○ 需要で変動", "名古屋帯などに仕立てられた品も取引されています。状態と絣の見栄えによって評価が変わります。"],
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
              八重山上布を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              八重山上布は証紙・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">流通の少ない八重山上布は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/miyako-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                宮古上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                同じ沖縄の苧麻上布。紺地の絣が特徴の重要無形文化財の織物の相場を解説。
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
                雪晒しで知られる新潟の最高級麻織物。ユネスコ無形文化遺産の上布の相場を解説。
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
            、上布仲間の
            <Link href="/articles/noto-jofu/" className="text-[#6b4c8a] underline">能登上布</Link>
            ・
            <Link href="/articles/omi-jofu/" className="text-[#6b4c8a] underline">近江上布</Link>
            のページもあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            八重山上布の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            八重山上布は流通量が非常に少なく、実売データの平均もあくまで“幅”の参考です。証紙・状態・仕立てによって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの八重山上布の正確な価値を確認しましょう。
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
