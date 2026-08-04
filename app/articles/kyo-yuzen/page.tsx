import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】京友禅の買取相場｜金彩・刺繍の華やかさ｜人間国宝・証紙で価格が変わる",
  description:
    "京友禅の買取相場を解説。友禅染の祖・宮崎友禅斎、金彩・刺繍の華やかさ、分業制の手描友禅と型友禅、京都友禅協同組合の証紙、人間国宝（森口華弘・森口邦彦・羽田登喜男・田畑喜八・上野為二）の作品、高く売るポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/kyo-yuzen/",
  },
  openGraph: {
    title: "【2026年最新】京友禅の買取相場｜金彩・刺繍の華やかさ｜人間国宝・証紙で価格が変わる",
    description:
      "京友禅の買取相場と高く売る方法を解説。証紙・人間国宝作品の有無が査定を左右します。",
    url: "https://kimonokaitori-biyori.com/articles/kyo-yuzen/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "京友禅はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "京友禅の買取相場は、種類・作家・状態・証紙の有無によって幅があります。一般的な京友禅でも証紙があれば一定の評価が期待でき、人間国宝や有名作家の手描友禅、千總などの老舗ブランドの作品はさらに高く評価される傾向があります。一方、証紙がない場合や、機械捺染の量産品、状態の悪いものは評価が下がりやすくなります。具体的な金額は状態によって大きく変わるため、無料査定での確認をおすすめします。",
  },
  {
    question: "京友禅の特徴は何ですか？",
    answer:
      "京友禅は京都で作られる友禅染で、金箔・プラチナ箔・砂子などの金彩や刺繍を仕上げに多用した、華やかで絢爛な仕上がりが特徴です。図案・下絵・糊置き・色挿し・地染・金彩・刺繍などを別々の職人が担当する分業制で作られます。友禅染の祖とされる扇絵師・宮崎友禅斎が大成したもので、本格的な手描友禅では完成まで20以上の工程を踏むとされます。",
  },
  {
    question: "京友禅と加賀友禅はどう違いますか？",
    answer:
      "京友禅は京都の友禅で、金彩・刺繍を多用した華やかさと分業制が特徴です。一方、加賀友禅は石川県金沢市の友禅で、一人の作家が下絵から仕上げまでを手がけ、「加賀五彩」の落ち着いた色使いや「虫食い」の写実表現が特徴です。京友禅は華やかさ、加賀友禅は侘びの趣という違いがあります。詳しくは加賀友禅の買取相場ページもあわせてご覧ください。",
  },
  {
    question: "京友禅の人間国宝にはどんな人がいますか？",
    answer:
      "京友禅・友禅染に関する重要無形文化財「友禅」の保持者（人間国宝）として、上野為二（1953年認定）、田畑喜八（3代、1955年認定）、森口華弘（1967年認定、蒔糊の技法）、羽田登喜男（1988年認定）、森口邦彦（2007年認定）などが確認できます。森口華弘・邦彦は親子で人間国宝に認定されています。これらの作家の作品は中古市場でも高く評価されやすい傾向があります。",
  },
  {
    question: "京友禅の証紙はどこを見ればわかりますか？",
    answer:
      "京友禅には、京都友禅協同組合が発行する「京友禅証紙」が貼付されることがあります。これは友禅染の技法で京都にて染められた商品であることを示すもので、2005年から貼付が始まりました。あわせて、経済産業大臣指定の伝統的工芸品であることを示す伝統証紙（京友禅協同組合連合会が発行・管理）が付くこともあります。証紙はたとう紙や箱に保管されていることが多いので、必ず探して一緒に査定に出しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline:
    "京友禅の買取相場｜金彩・刺繍の華やかさと証紙の見方",
  description:
    "京友禅の買取相場と高く売る方法を解説。証紙・人間国宝作品の有無が査定を左右します。",
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
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
    "@id":
      "https://kimonokaitori-biyori.com/articles/kyo-yuzen/",
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
      name: "京友禅",
      item: "https://kimonokaitori-biyori.com/articles/kyo-yuzen/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "京友禅の実売相場データ（公開オークション落札相場）", "description": "京友禅について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%BA%AC%E5%8F%8B%E7%A6%85%20%E5%8F%8D%E7%89%A9/0/", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-06-13", "url": "https://kimonokaitori-biyori.com/articles/kyo-yuzen/#auction-data", "isAccessibleForFree": true};

export default function KyoYuzenPage() {
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
          { label: "京友禅" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40))", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">京友禅の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                金彩・刺繍の華やかさと証紙の見方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              京友禅（きょうゆうぜん）は、京都で作られる華やかな友禅染です。友禅染の祖・宮崎友禅斎が大成し、金箔や刺繍を多用した絢爛な仕上がりと分業制が特徴。人間国宝の作品や証紙の有無が買取価格を大きく左右します。相場の傾向や高く売るためのポイントを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年6月13日
            </p>
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
                    1. 京友禅とは？友禅染の祖・宮崎友禅斎
                  </a>
                </li>
                <li>
                  <a href="#technique" className="text-[#6b4c8a] hover:underline">
                    2. 金彩・刺繍と分業制の手仕事
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 【種類別】京友禅の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#artist" className="text-[#6b4c8a] hover:underline">
                    4. 人間国宝・有名作家と老舗ブランド
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    5. 京都友禅協同組合の証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 京友禅を高く売るポイント
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    7. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 京友禅とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            京友禅とは？友禅染の祖・宮崎友禅斎
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              京友禅（きょうゆうぜん）は、<strong>京都</strong>で作られる友禅染です。古くからの京都の染色技法を、扇絵師<strong>宮崎友禅斎（みやざきゆうぜんさい）</strong>が大成したものとされ、単に「友禅染」とも呼ばれます。江戸時代の元禄期（1688〜1704年）に、友禅斎の描く扇絵の人気を背景に、その画風を着物の意匠に取り入れたのが友禅染の始まりと伝えられます。
            </p>
            <p>
              友禅斎は、いわば<strong>友禅染の祖</strong>とされる人物です。京友禅は、この友禅染発祥の地・京都で発展した、華やかさを極めた友禅といえます。「京友禅・京小紋」として、1976年（昭和51年）6月に国の伝統的工芸品に指定されています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                京友禅の主な特徴
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    京都で作られる友禅染。友禅染の祖・宮崎友禅斎が大成
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    金箔・プラチナ箔・砂子などの金彩を多用
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    刺繍（縫い）による立体的で華やかな仕上がり
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    工程ごとに職人が分かれる分業制
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    1976年に「京友禅・京小紋」として国の伝統的工芸品に指定
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              ※ 宮崎友禅斎の正確な生没年については資料により諸説があります。
            </p>
          </div>
        </div>
      </section>

      {/* 技法 */}
      <section id="technique" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            金彩・刺繍と分業制の手仕事
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              京友禅の華やかさを支えているのが、<strong>金彩（きんさい）</strong>と<strong>刺繍（縫い）</strong>です。金箔・プラチナ箔・金銀の砂子を施す金彩や、立体的な刺繍を仕上げに多用することで、絢爛で格調高い仕上がりが生まれます。これが、染めのみで表現する加賀友禅との大きな違いです。
            </p>
            <p>
              もうひとつの特徴が<strong>分業制</strong>です。京友禅は、図案・下絵・糊置き・色挿し・地染・蒸し・水元・金彩・刺繍といった多くの工程を、それぞれ専門の職人が分担して作り上げます。本格的な手描友禅では、完成までに20以上の工程を踏むとされます。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-2">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                手描友禅と型友禅
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>手描友禅</strong>：糊で防染しながら筆で色を挿す。工程が多く、作家物・高級品に多い
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>型友禅（型染め）</strong>：型紙を使って効率的に染める。手描より量産しやすい
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    このほか機械捺染・デジタル染めもあり、手描友禅ほどの評価はつきにくい傾向
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5 mt-2">
              <p className="text-sm leading-relaxed text-gray-700">
                <strong className="text-[#6b4c8a]">加賀友禅との違い：</strong>
                京友禅が金彩・刺繍を多用する華やかな分業制であるのに対し、加賀友禅は一人の作家が下絵から仕上げまでを手がけ、加賀五彩の落ち着いた色使いと「虫食い」の写実表現が特徴です。両者の違いは
                <Link href="/articles/kaga-yuzen/" className="text-[#6b4c8a] underline">加賀友禅の買取相場ページ</Link>
                でも詳しく解説しています。友禅全体の分類は
                <Link href="/articles/yuzen-types/" className="text-[#6b4c8a] underline">友禅の種類ガイド</Link>
                をご覧ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】京友禅の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            京友禅の買取価格は、手描か型か、作家・ブランド、証紙の有無、状態によって大きく変わります。以下は一般的な傾向を整理したものです（具体的な金額は状態によって変動します）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    評価の傾向
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    ポイント
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    人間国宝・有名作家
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    非常に高く評価されやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    森口華弘・邦彦・羽田登喜男などの作品
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    老舗ブランド・手描友禅
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    高く評価されやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    千總などの手描き作品
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    証紙付き・一般
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    一定の評価が期待できる
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    京友禅であることの証明が前提
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    機械捺染・証紙なし
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    評価が下がりやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    量産品・産地証明なしは低めの傾向
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は傾向の整理であり、特定の金額を保証するものではありません。状態・需要・取扱業者によって査定額は変動します。
          </p>
        </div>
      </section>

      {/* 人間国宝・作家 */}
      <section id="artist" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            人間国宝・有名作家と老舗ブランド
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              京友禅・友禅染には、重要無形文化財「友禅」の保持者（人間国宝）に認定された作家がいます。これらの作家の作品は、中古市場でも非常に高く評価されやすい傾向があります。以下は実在が確認できる代表的な人物です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    人物
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    認定年（重要無形文化財「友禅」）
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    上野為二
                  </td>
                  <td className="px-4 py-3 text-gray-700">1953年</td>
                  <td className="px-4 py-3 text-gray-700">京都の友禅作家</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    田畑喜八（3代）
                  </td>
                  <td className="px-4 py-3 text-gray-700">1955年</td>
                  <td className="px-4 py-3 text-gray-700">京都の友禅作家</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    森口華弘
                  </td>
                  <td className="px-4 py-3 text-gray-700">1967年</td>
                  <td className="px-4 py-3 text-gray-700">蒔糊（まきのり）の技法</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    羽田登喜男
                  </td>
                  <td className="px-4 py-3 text-gray-700">1988年</td>
                  <td className="px-4 py-3 text-gray-700">花鳥風月の意匠</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    森口邦彦
                  </td>
                  <td className="px-4 py-3 text-gray-700">2007年</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">森口華弘の次男。幾何学的意匠</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 技法区分はいずれも「友禅」です。森口華弘・邦彦は親子で人間国宝に認定されています。
          </p>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              老舗ブランド：千總（ちそう）
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              千總は1555年（弘治元年）創業の京都の老舗で、もとは法衣・装束を扱い、明治期に友禅染へと展開しました。宮内省御用達の実績を持ち、手描き友禅の振袖や訪問着などで知られます。こうした老舗ブランドの手描き作品は、買取でも高く評価されやすい傾向があります。
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            人間国宝の作品全般の評価については
            <Link href="/articles/living-national-treasure/" className="text-[#6b4c8a] underline">人間国宝の着物買取ガイド</Link>
            もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 証紙 */}
      <section id="certificate" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            京都友禅協同組合の証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              京友禅の買取では、<strong>京都産であることの証明</strong>が査定額を左右します。<strong>京都友禅協同組合</strong>が発行する「京友禅証紙」は、友禅染の技法で京都にて染められた商品であることを示すもので、2005年（平成17年）から貼付が始まりました。他産地や外国加工品には貼ることができない、京都産の証しです。
            </p>
            <p>
              あわせて、経済産業大臣指定の伝統的工芸品であることを示す<strong>伝統証紙</strong>が付くこともあります。伝統証紙は、複数の組合からなる<strong>京友禅協同組合連合会</strong>が発行・管理しており、管理番号が入っています。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                証紙ありの場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>京都産の友禅であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>京友禅としての真贋が裏付けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>作家物・手描友禅であればさらに高めの評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">
                証紙なしの場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>京都産の友禅であることの証明が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>機械捺染の量産品と区別がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>評価が下がりやすくなる</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-5 leading-relaxed">
            証紙の見方をより詳しく知りたい方は
            <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">着物の証紙の見方ガイド</Link>
            も参考にしてください。
          </p>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            京友禅を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・作家情報を必ずセットで査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                京友禅証紙や伝統証紙、作家の落款・銘は、京都産であることや作家を証明する重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。人間国宝や有名作家の作品であれば評価が大きく変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：友禅に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                京友禅は分業制で作家物が見分けにくく、手描か型かの判断にも専門知識が必要です。一般的なリサイクルショップでは正しく評価されないことがあります。
                <Link href="/articles/dye-vs-weave/" className="text-[#6b4c8a] underline">染めと織りの違い</Link>
                を踏まえ、友禅に詳しい着物専門の買取業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                京友禅は作家物の有無で査定額が大きく変わり、業者の販路によっても差が出ます。最低でも3社に
                <Link href="/articles/free-appraisal/" className="text-[#6b4c8a] underline">無料査定</Link>
                を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                京友禅は正絹で金彩・刺繍が施されているため、湿気やカビ、日焼け、金彩のはがれに注意が必要です。シミや褪色が進むと価値が下がります。たとう紙に包んで暗所で保管し、売ると決めたら早めに査定に出しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの京友禅（反物）のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed">
            以下は買取相場ではなく、公開オークション（Yahoo!オークション）で実際に売買された「実売価格」の集計です。リアルな取引価格帯の参考としてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">区分</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">平均落札価格</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">最高落札価格</th>
              </tr></thead>
              <tbody>
                  <tr><td className="border border-[#e8ddd0] px-3 py-2">京友禅 反物</td><td className="border border-[#e8ddd0] px-3 py-2">約8,701円</td><td className="border border-[#e8ddd0] px-3 py-2">33,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            出典：<a href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%BA%AC%E5%8F%8B%E7%A6%85%20%E5%8F%8D%E7%89%A9/0/" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">Yahoo!オークション 落札相場</a>（2026年6月取得）。これは反物の例で、新品の小売価格（数十万円〜）とは大きく異なります
          </p>
          <div className="bg-[#fdf6f6] border border-[#e8b4b4] rounded-lg p-4 mt-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-[#b5402f] mb-1">※実売価格と買取価格の違い</p>
            上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。1円〜の極端な安値は証紙なし・状態不良・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。京友禅は手描きか型友禅か・作家・証紙の有無で価値が大きく変わります。金額は取得時点のもので、相場は時期・状態により変動し、査定額を保証するものではありません。
          </div>
          <p className="text-xs text-gray-500 mt-3">
            本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年6月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>
          <div className="mt-5">
            <Link href="/ranking/" className="text-[#6b4c8a] underline font-medium">証紙・作家物がそろうなら、複数社の相見積もり（おすすめランキング）で最も高い1社を選ぶのが確実です →</Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・作家・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ京友禅でも、証紙・落款の有無、手描きか量産型か、正絹か化繊か、保存状態や仕立ての状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした条件差から生まれています。下表は一般的な評価傾向を整理したものです。
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
                  ["証紙あり（京友禅証紙・伝統証紙など）", "◎ 大きくプラス", "京都手描友禅や産地・技法を証明する証紙があると、京友禅であることが裏付けられ評価が安定します。"],
                  ["証紙・落款なし", "△ 下がりやすい", "京都産の友禅か類似品かの判別が難しく、慎重な査定になりがち。たとう紙や箱など他の手がかりが重要になります。"],
                  ["有名作家・落款あり", "◎ 別格", "重要無形文化財保持者（人間国宝）や著名作家の落款・銘があると別格の評価を受けやすい傾向です。証紙・落款で確認できます。"],
                  ["手描友禅", "◎ 高評価", "筆で色を挿す手描きは手間がかかり高く評価されやすい傾向。型友禅やインクジェット等の量産型は評価が下がりやすくなります。"],
                  ["正絹で金彩・刺繍が上質", "◎ 高評価", "正絹地に上質な金彩・刺繍が施された絢爛な仕上がりは、京友禅らしい価値として評価されやすい傾向です。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様は最も高くなりやすい状態。保管ジワのみなら特に有利です。"],
                  ["美品／仕立て上がり（着用あり）", "○／○〜△", "目立つ難がなければ安定した評価が期待できます。仕立て上がりは裄・身丈などサイズで変動し、寸法が小さいと下がる場合も。"],
                  ["シミ・劣化・変色／化繊", "△ マイナス", "シミ・褪色・金彩のはがれは減額対象。またポリエステル等の化繊による「京友禅風」は、正絹の京友禅とは価値が大きく異なります。自己クリーニングは避け、現状のまま査定へ。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「証紙・落款なし」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
          </p>
        </div>
      </section>

      <section id="faq" className="py-10 section-light">
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
                    <span className="text-[#c9a76c] font-bold text-lg">
                      Q.
                    </span>
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
              京友禅を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              京友禅は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い京友禅は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/articles/kaga-yuzen/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                加賀友禅の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                加賀五彩・虫食いが特徴の加賀友禅。作家物の買取相場を解説。
              </p>
            </Link>
            <Link
              href="/articles/yuzen-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                友禅の種類ガイド
              </h3>
              <p className="text-xs text-gray-600">
                京友禅・加賀友禅・東京友禅など友禅の種類と違いを解説。
              </p>
            </Link>
            <Link
              href="/articles/kyoto/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                京都の着物買取
              </h3>
              <p className="text-xs text-gray-600">
                京都で着物を売るなら。おすすめ業者と買取の流れを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            京友禅の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            京友禅の買取相場はあくまで目安です。作家・手描か型か・状態・証紙の有無によって実際の査定額は大きく変わります。友禅に詳しい査定員に無料査定を依頼して、お手持ちの京友禅の正確な価値を確認しましょう。
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
