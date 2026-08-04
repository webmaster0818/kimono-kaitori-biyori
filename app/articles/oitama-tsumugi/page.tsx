import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】置賜紬の買取相場｜白鷹御召・長井紬を含む総称と証紙の見方",
  description:
    "置賜紬（山形県米沢市・長井市・白鷹町）の買取相場を実売データ付きで解説。白鷹御召・長井紬・米沢の草木染紬などを含む織物の総称で、1976年に国の伝統的工芸品に指定。板締小絣の希少性、証紙の見方、公開オークションの落札実績、高く売るポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/oitama-tsumugi/",
  },
  openGraph: {
    title: "【2026年最新】置賜紬の買取相場｜白鷹御召・長井紬を含む総称と証紙の見方",
    description:
      "置賜紬の買取相場と高く売る方法を実売データ付きで解説。白鷹御召・長井紬など地区ごとの織物と証紙の見方を整理します。",
    url: "https://kimonokaitori-biyori.com/articles/oitama-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "置賜紬はどのくらいで買い取ってもらえますか？",
    answer:
      "置賜紬の買取価格は、白鷹御召・長井紬・草木染紬などの種類、証紙の有無、状態によって大きく変わります。参考として、公開オークションでの実売データでは、単品出品25件の平均落札価格は約21,819円、中央値は4,950円、最高落札価格は132,000円でした（2026年7月16日取得・実売価格は買取査定額とは異なります）。件数が少なく、白たか織・白鷹御召の証紙付き高額品が平均を大きく押し上げているため、平均と中央値が大きく乖離しています。買取価格は実売価格より低くなるのが一般的で、具体的な金額は着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "置賜紬とはどんな織物ですか？",
    answer:
      "置賜紬（おいたまつむぎ）は、山形県南部の置賜地方（米沢市・長井市・西置賜郡白鷹町）で織られる先染め・平織の織物の総称です。単一の織り方ではなく、白鷹の米琉板締小絣・白鷹板締小絣、長井の緯総絣・併用絣、米沢の草木染紬（紅花などで染める紬）といった地区ごとの織物を含みます。起源は8世紀初めに遡るとされ、江戸時代初めに米沢藩の上杉景勝が奨励したことで産地としての体制が整いました。1976年（昭和51年）2月26日に国の伝統的工芸品に指定されています。",
  },
  {
    question: "置賜紬と米沢織の違いは何ですか？",
    answer:
      "「米沢織」は米沢市周辺で織られる織物の呼び名として広く使われており、「置賜紬」は伝統的工芸品としての指定名称で、米沢・長井・白鷹の3地区の先染め織物の総称です。米沢の草木染紬・紅花染めの紬は置賜紬に含まれます。米沢織の詳しい種類や相場は当サイトの米沢織のページで解説しているので、米沢の品をお持ちの方はそちらもご覧ください。",
  },
  {
    question: "白鷹御召（しらたかおめし）とはどんな織物ですか？",
    answer:
      "白鷹御召は、山形県白鷹町で織られる御召で、「鬼しぼ」と呼ばれる大きなシボ（生地の凹凸）が特徴です。山形県のふるさと工芸品サイトによると、板締絣（いたじめがすり）という染色技法は1896年（明治29年）に白鷹町へもたらされたもので、現在は白鷹町の2つの織物工房でしかできない大変貴重な技法とされています。一反の幅に200〜250もの文様が織り込まれ、職人でも1日に20〜30cm程度しか織れないとされる希少な織物のため、証紙付きの品は査定でも高く評価されやすい傾向があります。",
  },
  {
    question: "置賜紬を高く売るにはどうすればよいですか？",
    answer:
      "第一に、証紙や購入時の付属品をそろえて査定に出すことです。実売データでも、白たか織・白鷹御召の証紙付きの品が高値になる傾向が見られました。第二に、産地織物に詳しい着物専門の買取業者を選ぶことです。板締小絣のような希少な技法は、知識のない業者では正しく評価されないことがあります。第三に、複数社で相見積もりを取り、日焼けやシミが進む前に早めに査定へ出すことが大切です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "置賜紬の買取相場｜白鷹御召・長井紬を含む総称と証紙の見方",
  description:
    "置賜紬の買取相場と高く売る方法を実売データ付きで解説。白鷹御召・長井紬など地区ごとの織物と証紙の見方を整理します。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/oitama-tsumugi/",
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
      name: "置賜紬",
      item: "https://kimonokaitori-biyori.com/articles/oitama-tsumugi/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "置賜紬の実売相場データ（公開オークション落札相場）", "description": "置賜紬について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E7%BD%AE%E8%B3%9C%E7%B4%AC", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-07-16", "url": "https://kimonokaitori-biyori.com/articles/oitama-tsumugi/#auction-data", "isAccessibleForFree": true};

export default function OitamaTsumugiPage() {
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
          { label: "置賜紬" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              山形・伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">置賜紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                白鷹御召・長井紬を含む総称と証紙の見方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              置賜紬（おいたまつむぎ）は、山形県南部の置賜地方（米沢市・長井市・白鷹町）で織られる先染め織物の総称です。白鷹の板締小絣や白鷹御召、長井の緯総絣・併用絣、米沢の草木染紬などを含み、1976年に国の伝統的工芸品に指定されています。本ページでは、公開オークションの実売データとあわせて、種類の見分け方と高く売るポイントを解説します。
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
                    1. 置賜紬とは？置賜3地区の織物の総称
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 置賜紬に含まれる織物の種類
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 置賜紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 置賜紬を高く売るポイント
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

      {/* 置賜紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            置賜紬とは？置賜3地区の織物の総称
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              置賜紬（おいたまつむぎ）は、<strong>山形県南部の置賜地方——米沢市・長井市・西置賜郡白鷹町——で織られる先染め・平織の織物の総称</strong>です。単一の織り方を指すのではなく、地区ごとに伝統と技法の異なる複数の織物を含む点が特徴です。
            </p>
            <p>
              起源は8世紀初めに遡るとされ、江戸時代初めに米沢藩の<strong>上杉景勝が織物生産を奨励</strong>したことで産地としての体制が整いました。生糸・玉糸・真綿の紡ぎ糸を使い、板締め・手くくり・手摺り込みなどの染色技法を用いた素朴で伝統的な織物で、<strong>1976年（昭和51年）2月26日に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">置賜紬の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>米沢市・長井市・白鷹町の3地区で織られる織物の総称</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>糸を先に染めてから織る「先染めの平織」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>板締め・手くくり・手摺り込みなどの伝統的な染色技法</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>上杉家ゆかりの歴史を持ち、起源は8世紀初めに遡るとされる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1976年（昭和51年）に国の伝統的工芸品に指定</span>
                </li>
              </ul>
            </div>
            <p>
              米沢市周辺の織物全般（米沢織）の種類や相場については
              <Link href="/articles/yonezawa-ori/" className="text-[#6b4c8a] underline font-medium">
                米沢織の買取相場
              </Link>
              のページで詳しく解説しています。本ページは「総称としての置賜紬と、白鷹御召・長井紬など地区ごとの織物の価値」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 織物の種類 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            置賜紬に含まれる織物の種類
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            置賜紬は地区ごとに技法が異なります。どの地区のどの織物かによって希少性や評価が変わるため、代表的なものを知っておくと査定の参考になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    地区・織物
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    白鷹：米琉板締小絣・白鷹板締小絣
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    板締めで染めた絣糸による細かな小絣。板締絣の技法は1896年（明治29年）に白鷹町へ伝わり、現在は町内2つの織物工房でしかできない貴重な技法とされる
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    白鷹：白鷹御召（白たかお召）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    「鬼しぼ」と呼ばれる大きなシボが特徴の御召。一反の幅に200〜250もの文様が織り込まれ、職人でも1日に20〜30cm程度しか織れないとされる希少品
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    長井：緯総絣・併用絣（長井紬）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    緯糸すべてに絣糸を使う緯総絣と、経緯の絣を組み合わせる併用絣。長井地区の絣織物は「長井紬」とも呼ばれる
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    米沢：草木染紬
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    紅花をはじめとする草木で染めた糸で織る紬。米沢の紅花染めの紬はよく知られ、詳細は米沢織のページで解説
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 指定名称・地区別の技法は
            <a
              href="https://kougeihin.jp/craft/0102/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              伝統工芸 青山スクエア（伝統的工芸品産業振興協会）「置賜紬」
            </a>
            、白鷹の板締絣・白たかお召については
            <a
              href="https://yamagata-furusato-kougei.jp/topics/06.html"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              山形県ふるさと工芸品サイト
            </a>
            で確認しています（確認日：2026年7月16日）。
          </p>
        </div>
      </section>

      {/* 相場の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            置賜紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            置賜紬の買取価格は、白鷹御召・長井紬・草木染紬などの種類、証紙の有無、状態によって大きく変わります。以下は一般的な傾向で、実際の金額は需要や業者によって変動します（実売データは後述の
            <a href="#auction-data" className="text-[#6b4c8a] underline">実売データ</a>
            をご覧ください）。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                希少な技法の証紙付きは別格になりやすい
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                白鷹の板締小絣や白鷹御召のように、限られた工房でしか作れない織物は、証紙で裏付けがあると高く評価されやすい傾向があります。実売データでも、白たか織・白鷹御召の証紙付きの品が全体の平均を大きく押し上げていました。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                「置賜紬」全体では価格差が非常に大きい
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                同じ置賜紬でも、希少技法の証紙付き高額品と、産地の裏付けがない普及品では価格の桁が変わることがあります。実売データで平均と中央値が大きく離れているのはこのためで、「平均額＝自分の品の目安」と考えないことが大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                米沢の品は米沢織としての評価も確認
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                米沢の紅花染め・草木染めの紬は、「米沢織」「米沢紬」として流通していることも多い品です。証紙の名称を確認し、
                <Link href="/articles/yonezawa-ori/" className="text-[#6b4c8a] underline">
                  米沢織の買取相場
                </Link>
                のページもあわせて参考にしてください。
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
              置賜紬にまつわる公的な指定を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは公式に確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                1976年に国の伝統的工芸品に指定
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                置賜紬は、<strong>1976年（昭和51年）2月26日に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。産地は山形県米沢市・長井市・西置賜郡白鷹町で、白鷹の米琉板締小絣・白鷹板締小絣、長井の緯総絣・併用絣、米沢の草木染紬という地区ごとの織物を含む総称としての指定です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙で「どの地区のどの織物か」を確認
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                置賜紬の証紙としては、産地組合（置賜紬伝統織物協同組合連合会）によるものが知られています。白たか織・白鷹御召など織元やブランドの証紙・しおりが付く品もあります。総称ゆえに「置賜紬」とだけ聞いても価値は判断できないため、証紙・しおりで地区と技法を確認することが、そのまま価値の裏付けになります。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>産地・地区・技法が証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>板締小絣・白鷹御召など希少技法の価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品としての評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>地区・技法の特定が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>ほかの紬・御召との区別がつきにくくなる</span>
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
              、紬をはじめとする織りの着物の種類については
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
            置賜紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・しおりで地区と技法を示す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                置賜紬は総称のため、「白鷹の板締小絣か」「白鷹御召か」「長井の絣か」「米沢の草木染紬か」で評価が大きく変わります。証紙・織元のしおり・購入時の箱は必ず探して一緒に査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：希少技法の品は産地織物に強い業者へ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                板締小絣や白鷹御召は限られた工房の希少な織物です。一般的なリサイクルショップでは価値が見過ごされることがあるため、産地織物の査定経験がある着物専門業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                実売データが示すとおり、置賜紬は品によって価格の桁が変わる織物です。評価の分かれ幅が大きいぶん、複数社の無料査定で金額と説明を比較する効果も大きくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                絹の織物は、日焼けや湿気、汗染み、虫食いによって価値が下がりやすくなります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めの査定がおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実売データ */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの置賜紬のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。「置賜紬」の名称での出品は少なく、半年で25件と小規模な集計である点にご注意ください。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">置賜紬 全体（着物・帯・反物）</td>
                  <td className="px-4 py-3 font-medium">25件</td>
                  <td className="px-4 py-3 font-medium">約21,819円</td>
                  <td className="px-4 py-3 font-medium">4,950円</td>
                  <td className="px-4 py-3 font-medium">132,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">着物</td>
                  <td className="px-4 py-3 font-medium">24件</td>
                  <td className="px-4 py-3 font-medium">約22,070円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">132,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E7%BD%AE%E8%B3%9C%E7%B4%AC"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「置賜紬」の落札相場
            </a>
            （集計期間：2026年1月18日〜2026年7月14日・2026年7月16日取得）
            <br />
            ※ タイトルに「置賜紬」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外しています。小物・ハギレ等は表から除外しています。帯は1件のみのため行を設けていません。
            <br />
            ※ 25件と件数が少なく、<strong>平均（約21,819円）と中央値（4,950円）が大きく乖離</strong>しています。白たか織・白鷹御召の証紙付き高額品が平均を押し上げているためで、多くの品の落札価格は中央値寄りです。平均額をそのまま目安にせず、“幅”の参考としてご覧ください。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品と、白鷹御召など希少技法の証紙付きの品では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・技法で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・希少技法の置賜紬は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
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
            同じ置賜紬でも、証紙の有無、地区・技法、保存状態によって査定額は大きく変わります。前述の実売データに見られる平均と中央値の乖離も、こうした状態・技法差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（置賜紬伝統織物協同組合連合会など）", "◎ 大きくプラス", "産地・地区・技法の裏付けになり、評価が安定します。伝統的工芸品としての価値が認められやすくなります。"],
                  ["証紙なし", "△ 下がりやすい", "総称の織物ゆえ、どの地区のどの技法かの判別が難しくなり、慎重な査定になりがち。しおり・箱など他の手がかりが重要になります。"],
                  ["白鷹御召・板締小絣（証紙・しおり付き）", "◎ 別格の評価", "現在2工房でしかできないとされる板締絣の希少性から、裏付けのある品は高く評価されやすい傾向。実売データでも平均を押し上げていました。"],
                  ["長井の緯総絣・併用絣", "○〜◎", "絣の細かさ・意匠・状態に応じて評価。産地と技法が確認できると有利です。"],
                  ["米沢の草木染紬・紅花染め", "○〜◎", "紅花などの草木染めの裏付けがある品は評価されやすい傾向。米沢織としての証紙も確認を。"],
                  ["未使用・しつけ糸付き", "◎ プラス", "未使用品や美品は状態評価が高く、同じ種類でも使用感のある品より評価されやすくなります。"],
                  ["反物（未仕立て）", "○ 需要で変動", "未仕立ての反物は用途の自由度が高く、状態が良ければ評価されやすいことがあります。"],
                  ["日焼け・汗染み・難あり", "△ マイナス", "絹の織物は日焼け・汗染み・虫食いで価値が下がりやすく、状態不良は減額対象。自己クリーニングは避け、現状のまま査定へ。"],
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

      {/* 条件別CTA */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              置賜紬を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              置賜紬は証紙・技法・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・白鷹御召など希少技法・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い置賜紬は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/yonezawa-ori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                米沢織の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                米沢市周辺の織物（紅花染め・草木染めの紬など）の種類と相場を詳しく解説。
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
                本サイトの実売データ（落札相場）の集め方・出典・更新方針を公開しています。
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取おすすめランキング
              </h3>
              <p className="text-xs text-gray-600">
                置賜紬の査定に対応した着物専門買取業者を比較。相見積もりで高価買取を狙えます。
              </p>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Link
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と買取相場
              </h3>
              <p className="text-xs text-gray-600">
                結城紬・大島紬をはじめとする紬の種類ごとの特徴と相場の傾向を整理。
              </p>
            </Link>
            <Link
              href="/articles/yamagata/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                山形県の着物買取
              </h3>
              <p className="text-xs text-gray-600">
                山形県で着物を高く売る方法と、出張・持込・宅配に対応した業者の選び方。
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
                証紙の見方と、買取価格への影響をわかりやすく解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            置賜紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            置賜紬の買取相場はあくまで目安です。白鷹御召・長井紬・草木染紬といった技法、証紙・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの置賜紬の正確な価値を確認しましょう。
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
