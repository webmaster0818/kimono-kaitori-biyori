import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】芭蕉布の買取相場｜喜如嘉の芭蕉布・人間国宝 平良敏子の作品は別格",
  description:
    "芭蕉布（沖縄・大宜味村喜如嘉など）の買取相場と高く売る方法を解説。糸芭蕉の繊維から織る布で、「喜如嘉の芭蕉布」は1974年に国の重要無形文化財、1988年に伝統的工芸品に指定。人間国宝・平良敏子に関わる作品は別格の評価です。公開オークションの実売データとあわせてまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/bashofu/",
  },
  openGraph: {
    title: "【2026年最新】芭蕉布の買取相場｜喜如嘉の芭蕉布・人間国宝 平良敏子の作品は別格",
    description:
      "芭蕉布（沖縄・大宜味村喜如嘉など）の買取相場と高く売る方法。喜如嘉の芭蕉布・人間国宝 平良敏子に関わる作品で価値が変わる点を実売データとあわせて解説。",
    url: "https://kimonokaitori-biyori.com/articles/bashofu/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "芭蕉布はどのくらいで買い取ってもらえますか？",
    answer:
      "買取価格は、喜如嘉の芭蕉布かどうか、平良敏子・喜如嘉の工房に関わる作品か、状態によって大きく変わるため一概には言えません。参考として、公開オークションの実売データでは、タイトルに「芭蕉布」を含む単品出品103件の平均落札価格は約51,457円、中央値は18,990円、最高は528,000円でした（2026年1月17日〜7月14日、2026年7月16日取得）。これは個人間取引の実売価格であり、買取査定額は一般にこれより低くなります。正確な価値は着物専門業者の無料査定で確認しましょう。",
  },
  {
    question: "芭蕉布とはどんな布ですか？",
    answer:
      "芭蕉布は、バショウ科の植物「糸芭蕉」の茎から取った繊維を糸にして織り上げる布です。張りのある軽やかな風合いで、高温多湿の沖縄で夏の衣料として愛用されてきました。かつては沖縄や奄美の各地で織られていましたが、現在まとまった生産が続く産地としては沖縄県大宜味村の喜如嘉が知られ、「芭蕉布の里」と呼ばれます。1反分の糸を取るのに約200本もの糸芭蕉が必要とされ、3年ほど育てた芭蕉から繊維を取り、糸績みから織りまで膨大な手仕事を経て作られます。",
  },
  {
    question: "喜如嘉の芭蕉布はなぜ特別なのですか？",
    answer:
      "大宜味村喜如嘉に伝わる芭蕉布の製作技術は、1974年（昭和49年）に国の重要無形文化財に指定され、保持団体として喜如嘉芭蕉布保存会が認定されています。さらに1988年（昭和63年）には「喜如嘉の芭蕉布」として国の伝統的工芸品にも指定されました。また、戦後に途絶えかけた芭蕉布を復興させた平良敏子（たいら としこ）氏は、2000年に重要無形文化財「芭蕉布」の保持者（人間国宝）に認定されています（2022年逝去）。こうした公的な裏付けのある喜如嘉の芭蕉布や平良敏子に関わる作品は、買取市場でも別格の評価を受けます。",
  },
  {
    question: "証紙や落款がない芭蕉布でも売れますか？",
    answer:
      "買取自体は可能ですが、喜如嘉の芭蕉布か、他産地・後年の品かの判別が難しくなるため、査定額は下がりやすくなります。証紙・工房のしおり・購入時の箱などは産地と作り手を示す重要な手がかりなので、残っていれば必ず一緒に査定に出しましょう。産地の特定が難しい場合でも、芭蕉布自体が希少なため、まずは沖縄の染織に詳しい専門業者に見てもらうのがおすすめです。",
  },
  {
    question: "芭蕉布を高く売るにはどうすればよいですか？",
    answer:
      "証紙・付属品をそろえること、沖縄の染織に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。実売データでも、喜如嘉の芭蕉布や人間国宝・平良敏子に関わる作品が最上位帯を占めており、こうした品ほど業者間の査定差が大きくなります。また芭蕉布は乾燥で繊維が傷みやすいデリケートな布なので、無理な手入れはせず、状態が良いうちに早めに査定へ出しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "芭蕉布の買取相場｜喜如嘉の芭蕉布・人間国宝 平良敏子の作品は別格",
  description:
    "芭蕉布（沖縄・大宜味村喜如嘉など）の買取相場と高く売る方法。喜如嘉の芭蕉布・人間国宝 平良敏子に関わる作品で価値が変わる点を実売データとあわせて解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/bashofu/",
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
      name: "芭蕉布",
      item: "https://kimonokaitori-biyori.com/articles/bashofu/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "芭蕉布の実売相場データ（公開オークション落札相場）", "description": "芭蕉布について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E8%8A%AD%E8%95%89%E5%B8%83", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-07-16", "url": "https://kimonokaitori-biyori.com/articles/bashofu/#auction-data", "isAccessibleForFree": true};

export default function BashofuPage() {
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
          { label: "芭蕉布" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#b5402f] text-white mb-4 tracking-wide">
              沖縄・重要無形文化財／伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">芭蕉布の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                喜如嘉の芭蕉布・人間国宝 平良敏子の作品は別格
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              芭蕉布（ばしょうふ）は、糸芭蕉の繊維から織り上げる沖縄の布です。現在の主産地・大宜味村喜如嘉の芭蕉布は、1974年に製作技術が国の重要無形文化財に、1988年に国の伝統的工芸品に指定されています。戦後の復興に尽力した平良敏子氏は人間国宝に認定されており、喜如嘉の芭蕉布や平良敏子に関わる作品は買取市場でも別格の評価です。公開オークションの実売データとあわせて、見分け方と高く売るポイントを解説します。
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
                    1. 芭蕉布とは？糸芭蕉から生まれる沖縄の布
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 芭蕉布の種類と見どころ
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 芭蕉布の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 人間国宝・重要無形文化財の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 芭蕉布を高く売るポイント
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

      {/* 芭蕉布とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            芭蕉布とは？糸芭蕉から生まれる沖縄の布
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              芭蕉布（ばしょうふ）は、バショウ科の植物<strong>「糸芭蕉（いとばしょう）」の茎から取った繊維を糸にして織り上げる布</strong>です。張りのある軽やかな風合いは風をよく通し、高温多湿の沖縄で夏の衣として古くから愛用されてきました。かつては沖縄各地や奄美でも織られていましたが、現在までまとまった生産が続く産地としては<strong>沖縄県国頭郡大宜味村の喜如嘉（きじょか）</strong>が知られ、「芭蕉布の里」と呼ばれています。
            </p>
            <p>
              その制作は気の遠くなるような手仕事の積み重ねです。<strong>1反分の糸を取るのに約200本もの糸芭蕉が必要</strong>とされ、3年ほど育てた芭蕉から繊維を取り、1本ずつ糸を績（う）んでいきます。「織りは全体の100分の1」といわれるほど準備工程が長く、この希少性が芭蕉布の価値の背景にあります。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">芭蕉布の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>糸芭蕉の繊維から作る、張りのある軽やかな夏の布</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>現在の主産地は沖縄県大宜味村喜如嘉（「芭蕉布の里」）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1反分の糸に約200本の糸芭蕉が必要とされ、準備工程が制作の大半を占める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>喜如嘉の芭蕉布は1974年（昭和49年）に国の重要無形文化財に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1988年（昭和63年）に「喜如嘉の芭蕉布」として国の伝統的工芸品に指定</span>
                </li>
              </ul>
            </div>
            <p>
              同じ沖縄の織物でも、絹織物の
              <Link href="/articles/kumejima-tsumugi/" className="text-[#6b4c8a] underline font-medium">
                久米島紬
              </Link>
              や
              <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline font-medium">
                首里織
              </Link>
              、麻（苧麻）の
              <Link href="/articles/miyako-jofu/" className="text-[#6b4c8a] underline font-medium">
                宮古上布
              </Link>
              とは素材も技法も異なります。沖縄県内での買取業者の選び方は
              <Link href="/articles/okinawa/" className="text-[#6b4c8a] underline font-medium">
                沖縄の着物買取おすすめ業者
              </Link>
              をご覧ください。本ページは「芭蕉布という布の価値と見分け方」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 種類と見どころ */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            芭蕉布の種類と見どころ
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            芭蕉布は着物（着尺）と帯を中心に流通しています。どの区分・出どころかによって評価が変わるため、代表的なものを知っておくと査定の参考になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    区分
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    喜如嘉の芭蕉布
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    大宜味村喜如嘉で織られる芭蕉布。重要無形文化財・伝統的工芸品の二重の裏付けがあり、芭蕉布のなかでも最上位の評価
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    着物（着尺・仕立て済み）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    盛夏の着物として着用される。流通の中心だが、絹織物に比べれば出回る数自体が少ない
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    帯（名古屋帯・八寸帯など）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    夏帯として人気が高く、良品は着物以上に評価されることもある（後述の実売データでも帯の平均が着物を上回る）
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    古い芭蕉布・産地不明の品
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    戦前の品や他産地・後年の品も市場に混在する。産地・年代の裏付けの有無で評価の幅が大きい
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            なお、首里織のなかには煮綛芭蕉布（にーがしばしょうふ）と呼ばれる技法も伝わっています。喜如嘉の芭蕉布とは系統が異なるため、証紙・出どころで区別されます。
          </p>
        </div>
      </section>

      {/* 相場の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            芭蕉布の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            芭蕉布の買取価格は、喜如嘉の芭蕉布かどうか・作り手の裏付け・状態によって大きく変わります。以下は一般的な傾向であり、実際の金額は需要や業者によって変動します（実際に売買された価格の集計は後述の実売データをご覧ください）。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                喜如嘉の芭蕉布・人間国宝に関わる作品が最上位
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                最も評価されるのは、喜如嘉の芭蕉布であることが証紙などで裏付けられた品、なかでも人間国宝・平良敏子に関わる作品です。実売データでも最上位帯はこうした品が占めています。芭蕉布はそもそも生産量が少なく市場に出る数が限られるため、確かな裏付けのある品は希少価値が際立ちます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                帯は着物以上に評価されることも
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                芭蕉布は夏帯としての人気が高く、良品の帯は着物以上の価格で取引されることがあります。後述の実売データでも、帯の平均落札価格が着物を上回っているのが芭蕉布の特徴です。帯だからと過小評価せず、専門業者にきちんと査定してもらいましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                沖縄の染織とのまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                芭蕉布の品と、
                <Link href="/articles/bingata/" className="text-[#6b4c8a] underline">
                  琉球紅型
                </Link>
                や
                <Link href="/articles/kumejima-tsumugi/" className="text-[#6b4c8a] underline">
                  久米島紬
                </Link>
                などの沖縄の染織をまとめて査定に出すと、全体として評価されやすくなります。和装小物や帯と合わせて一緒に出すのもおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 人間国宝・指定と証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            人間国宝・重要無形文化財の指定と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              芭蕉布にまつわる公的な指定や作り手を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                人間国宝・平良敏子
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                平良敏子（たいら としこ）氏は、戦後に途絶えかけた喜如嘉の芭蕉布を復興させ、技術の継承と後継者育成に生涯を捧げた作り手です。<strong>2000年に重要無形文化財「芭蕉布」の保持者（各個認定＝人間国宝）に認定</strong>され、2022年に逝去されました。平良敏子や喜如嘉の工房に関わる作品は、買取市場でも別格の評価を受けます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                重要無形文化財・伝統的工芸品の指定
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                喜如嘉の芭蕉布の製作技術は、<strong>1974年（昭和49年）に国の重要無形文化財に指定</strong>され、保持団体として<strong>喜如嘉芭蕉布保存会</strong>が認定されています。さらに<strong>1988年（昭和63年）6月には「喜如嘉の芭蕉布」として国（経済産業大臣）の伝統的工芸品</strong>にも指定されました。産地組合は喜如嘉芭蕉布事業協同組合です（
                <a
                  href="https://kougeihin.jp/craft/0133/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#6b4c8a] underline"
                >
                  出典：伝統工芸 青山スクエア「喜如嘉の芭蕉布」
                </a>
                ・
                <a
                  href="https://bashofu.jp/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#6b4c8a] underline"
                >
                  喜如嘉の芭蕉布 公式サイト
                </a>
                ）。証紙や工房のしおりなどの裏付けがそろった品は、査定でも評価されやすくなります。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>喜如嘉の芭蕉布であることが裏付けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>重要無形文化財・伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>平良敏子・工房に関わる作品なら別格の評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>喜如嘉の芭蕉布か、他産地・後年の品かの判別が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>作り手・年代の特定が難しくなる</span>
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
              、人間国宝の着物全般については
              <Link href="/articles/living-national-treasure/" className="text-[#6b4c8a] underline">
                人間国宝の着物の買取
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
            芭蕉布を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・工房のしおり・購入時の箱などは、喜如嘉の芭蕉布であることや作り手を示す重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。裏付けの有無で評価が大きく変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：沖縄の染織に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                芭蕉布は市場に出る数が少なく、価値の判断には専門知識が必要です。一般的なリサイクルショップでは希少性が見過ごされることがあるため、沖縄の染織に詳しい査定員がいる着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                喜如嘉の芭蕉布や平良敏子に関わる作品は、業者によって評価や販路が大きく異なります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。希少品ほど相見積もりの効果が大きくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：無理な手入れをせず、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                芭蕉布は乾燥すると繊維が傷みやすいデリケートな布です。自己判断での洗濯やクリーニングは避け、現状のまま査定に出しましょう。日焼けや折り跡が進む前に、状態が良いうちに早めの査定がおすすめです。
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
            【実売データ】公開オークションでの芭蕉布のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。芭蕉布は生産量が少なく、公開オークションでの出品自体が少ない品目です。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mb-6">
            <h3 className="font-bold text-[#6b4c8a] mb-4 text-base">
              芭蕉布 全体の集計（着物・帯・反物の合算、小物等除く）
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">落札件数</p>
                <p className="text-lg font-bold text-[#6b4c8a]">103件</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">平均落札価格</p>
                <p className="text-lg font-bold text-[#6b4c8a]">約51,457円</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">中央値</p>
                <p className="text-lg font-bold text-[#6b4c8a]">18,990円</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">最高落札価格</p>
                <p className="text-lg font-bold text-[#6b4c8a]">528,000円</p>
              </div>
            </div>
          </div>
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物</td>
                  <td className="px-4 py-3 font-medium">86件</td>
                  <td className="px-4 py-3 font-medium">約44,044円</td>
                  <td className="px-4 py-3 font-medium">528,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯</td>
                  <td className="px-4 py-3 font-medium">17件</td>
                  <td className="px-4 py-3 font-medium">約88,959円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">330,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E8%8A%AD%E8%95%89%E5%B8%83"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「芭蕉布」の落札相場
            </a>
            （集計期間：2026年1月17日〜2026年7月14日、2026年7月16日取得）
            <br />
            ※ タイトルに「芭蕉布」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外。小物・ハギレ等は表から除外しています。
            <br />
            ※ 帯の平均（約88,959円）が着物（約44,044円）を上回っているのが芭蕉布の特徴です。また平均（約51,457円）と中央値（18,990円）の開きが大きいのは、喜如嘉の芭蕉布や人間国宝・平良敏子に関わる作品が最上位帯を押し上げているためで、産地・作り手の裏付けの有無で価格差が大きいのが実情です。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。産地不明・状態不良の品や、逆に喜如嘉の芭蕉布・人間国宝に関わる作品では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・裏付けの有無で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              喜如嘉の芭蕉布・作り手の裏付けがある品は査定額の差が特に出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（産地・作り手・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ芭蕉布でも、喜如嘉の芭蕉布かどうか、作り手の裏付け、保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["喜如嘉の芭蕉布と裏付けできる（証紙・しおり等）", "◎ 大きくプラス", "重要無形文化財・伝統的工芸品の二重の裏付けがある喜如嘉の芭蕉布は最上位の評価。証紙や工房のしおりがそろっていると評価が安定します。"],
                  ["人間国宝・平良敏子に関わる作品", "◎ 別格の評価", "重要無形文化財「芭蕉布」保持者・平良敏子に関わる作品は別格。確かな裏付けがあれば特に高く評価されます。"],
                  ["産地・作り手が不明", "△ 下がりやすい", "喜如嘉の芭蕉布か、他産地・後年の品かの判別が難しくなり、慎重な査定になりがち。付属品など他の手がかりが重要になります。"],
                  ["帯（夏帯）", "◎〜○ 需要が高い", "芭蕉布の帯は夏帯として人気が高く、良品は着物以上に評価されることも。実売データでも帯の平均が着物を上回っています。"],
                  ["未仕立ての反物・未使用品", "○ プラス", "未仕立ての反物やしつけ付きの未使用品は需要があり、評価されやすいことがあります。"],
                  ["古い芭蕉布（戦前の品など）", "○／△ 品による", "年代物は資料的価値が評価されることもありますが、状態や裏付け次第で幅が大きく、業者による差も出やすい区分です。"],
                  ["乾燥による繊維の傷み・折れ", "△ マイナス", "芭蕉布は乾燥で繊維が硬く脆くなりやすいデリケートな布。傷み・折れは減額対象ですが、自己判断の手入れはかえって傷めるため現状のまま査定へ。"],
                  ["日焼け・シミ・難あり", "△ マイナス", "日焼け・シミ・虫食いは減額対象。難の程度・範囲で幅があります。希少品は難ありでも値が付くことがあるため、諦めずに査定を。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「産地不明」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
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
              芭蕉布を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              芭蕉布は産地・作り手の裏付けと状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">喜如嘉の芭蕉布・裏付けあり・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い芭蕉布は業者で査定額の差が特に出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">産地不明・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は裏付け・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
                同じく重要無形文化財の沖縄の織物。苧麻の上布の実売データと売り方を解説。
              </p>
            </Link>
            <Link
              href="/articles/shuri-ori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                首里織の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                那覇市首里に伝わる織技法の総称。人間国宝・宮平初子の作品と証紙を解説。
              </p>
            </Link>
            <Link
              href="/articles/bingata/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                琉球紅型の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                沖縄を代表する型染め、琉球紅型の特徴と買取相場の傾向を解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            芭蕉布の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            芭蕉布の買取相場はあくまで目安です。喜如嘉の芭蕉布かどうか・作り手の裏付け・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの芭蕉布の正確な価値を確認しましょう。
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
