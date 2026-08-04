import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】琉球紅型の買取相場｜人間国宝・城間家の作品と証紙で価値が変わる",
  description:
    "琉球紅型（沖縄・びんがた）の買取相場と高く売る方法を解説。型染め・顔料・隈取りが特徴の伝統的工芸品で、人間国宝・玉那覇有公や城間家・知念家など三宗家の作家物は高評価。証紙・落款の見方と査定のポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/bingata/",
  },
  openGraph: {
    title: "【2026年最新】琉球紅型の買取相場｜人間国宝・城間家の作品と証紙で価値が変わる",
    description:
      "琉球紅型（沖縄・びんがた）の買取相場と高く売る方法。作家物・証紙の有無で価値が変わる点を解説。",
    url: "https://kimonokaitori-biyori.com/articles/bingata/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "琉球紅型はどのくらいで買い取ってもらえますか？",
    answer:
      "琉球紅型の買取価格は、作家物かどうか、証紙や落款の有無、種類（着物・帯・反物）、状態によって大きく変わります。人間国宝・玉那覇有公や城間家・知念家など著名な作家・工房の作品は高く評価される傾向があります。一方、作家不明で証紙のないものは評価が控えめになりがちです。具体的な金額は需要や取扱業者によっても変動するため、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "琉球紅型に人間国宝はいますか？",
    answer:
      "はい。玉那覇有公（たまなは ゆうこう）氏が、1996年に国の重要無形文化財「紅型」の保持者（各個認定＝人間国宝）に認定されています。紅型分野で最初の人間国宝です。なお、戦後の復興に尽力した城間栄喜は沖縄県の無形文化財に認定された人物で、国の人間国宝とは制度が異なります。混同しないように注意しましょう。",
  },
  {
    question: "琉球紅型は伝統的工芸品ですか？",
    answer:
      "はい。「琉球びんがた」は1984年（昭和59年）5月31日に国（経済産業大臣）の伝統的工芸品に指定されています。製造地域は那覇市・宜野湾市・浦添市・糸満市・豊見城市です。伝統的工芸品には伝統マークの証紙が付き、これがそろっていると産地と品質の裏付けになります。",
  },
  {
    question: "紅型に証紙や落款がない場合でも売れますか？",
    answer:
      "証紙や落款がなくても買取は可能ですが、作家や産地の特定が難しくなるため査定額は下がりやすくなります。購入時の証紙・落款・たとう紙・箱などの付属品が残っていれば、一緒に査定に出すことで評価が上がる可能性があります。まずは付属品をすべて探してから査定に出しましょう。",
  },
  {
    question: "琉球紅型を高く売るにはどうすればよいですか？",
    answer:
      "証紙や落款・付属品をそろえること、紅型や沖縄の染織に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。作家物は業者によって評価が分かれやすいため、相見積もりが特に重要です。顔料を用いた紅型は日焼けや擦れに弱いので、状態が良いうちに早めの査定がおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "琉球紅型の買取相場｜作家物・証紙で価値が変わる",
  description:
    "琉球紅型（沖縄・びんがた）の買取相場と高く売る方法。作家物・証紙の有無で価値が変わる点を解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/bingata/",
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
      name: "琉球紅型",
      item: "https://kimonokaitori-biyori.com/articles/bingata/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "琉球紅型の実売相場データ（公開オークション落札相場）", "description": "琉球紅型について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-06-13", "url": "https://kimonokaitori-biyori.com/articles/bingata/#auction-data", "isAccessibleForFree": true};

export default function BingataPage() {
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
          { label: "琉球紅型" },
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
              <span className="text-gradient">琉球紅型の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                作家物・証紙で価値が変わる
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              琉球紅型（りゅうきゅうびんがた）は、琉球王国時代から首里を中心に発達した沖縄を代表する型染めです。鮮やかな顔料と隈取り（ぼかし）による色彩が特徴で、1984年に国の伝統的工芸品「琉球びんがた」に指定されています。人間国宝・玉那覇有公や城間家・知念家など三宗家の作品は高く評価されます。証紙や作家物の見分け方と高く売るポイントを解説します。
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
                    1. 琉球紅型とは？王府が育てた型染め
                  </a>
                </li>
                <li>
                  <a href="#price-by-type" className="text-[#6b4c8a] hover:underline">
                    2. 琉球紅型の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#artist" className="text-[#6b4c8a] hover:underline">
                    3. 人間国宝・三宗家と作家物の価値
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙・落款
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 琉球紅型を高く売るポイント
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

      {/* 琉球紅型とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            琉球紅型とは？王府が育てた型染め
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              琉球紅型（りゅうきゅうびんがた）は、沖縄を代表する染色技法です。その起源は14〜15世紀頃とされ、琉球王国の海外交易を通じてインドやジャワの更紗、中国の型紙染めなどの技術を取り入れながら、<strong>首里を中心に発達</strong>しました。紅型は王族・士族の衣装として<strong>王府の保護</strong>を受け、職人は首里に集められて高い地位を与えられていました。
            </p>
            <p>
              19世紀後期の琉球処分や第二次大戦による被災で多くの型紙・資料が失われましたが、戦後に城間家・知念家の生き残りが復興に尽力し、今日へと受け継がれています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">琉球紅型の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>型紙を用いる「型染め（型附け）」が基本技法</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>もち粉と糠を用いた糊で防染する「糊置き」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>顔料を主体に染料を併用した鮮やかな発色</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>「隈取り（くまどり）」と呼ぶぼかしで立体感を出す</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>生地の表裏を染める「両面型」など多彩な技法</span>
                </li>
              </ul>
            </div>
            <p>
              沖縄全体での着物買取の方法や地元業者の選び方については
              <Link href="/articles/okinawa/" className="text-[#6b4c8a] underline font-medium">
                沖縄の着物買取おすすめ業者
              </Link>
              のページもあわせてご覧ください。本ページは「琉球紅型という染めの価値や見分け方」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            琉球紅型の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            琉球紅型の買取価格は、作家物か否か、証紙・落款の有無、種類、状態によって大きく変わります。以下は一般的な傾向であり、実際の金額は需要や業者によって変動します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    価値が上がる条件
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    著名作家・工房の作品
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    人間国宝・三宗家など
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    落款・証紙・付属品あり
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    紅型の着物・反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統的工芸品の証紙付き
                  </td>
                  <td className="px-4 py-3 text-gray-700">美品・証紙あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    紅型の帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">名古屋帯・袋帯</td>
                  <td className="px-4 py-3 text-gray-700">作家物・状態が良い</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    作家不明・証紙なし
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    産地・作家が確認できない
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    評価は控えめになりやすい
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            上記は一般的な傾向です。作家の知名度・状態・需要によって査定額は大きく変わります。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                作家物・証紙ありが高評価
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                紅型で最も評価されやすいのは、人間国宝や著名工房の作家物で、落款や証紙がそろっているものです。とくに手描き・手染めの一点物は、機械染めの量産品とは評価が大きく異なります。逆に、作家や産地が確認できないものは評価が控えめになりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                沖縄の織物とのまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                紅型の品と、
                <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline">
                  首里織
                </Link>
                などの沖縄の織物をまとめて査定に出すと、全体として評価されやすくなります。和装小物や帯と合わせて一緒に出すのもおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 作家物の価値 */}
      <section id="artist" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            人間国宝・三宗家と作家物の価値
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              紅型は作家・工房によって価値が大きく変わります。確認できる代表的な作り手を正確に整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                人間国宝・玉那覇有公
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                玉那覇有公（たまなは ゆうこう、1936年生）氏は、1996年に国の重要無形文化財「紅型」の保持者（各個認定）に認定された<strong>紅型分野で最初の人間国宝</strong>です。城間栄喜に師事しました。人間国宝の作品は、紅型のなかでも最高峰の評価を受ける傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                三宗家（城間家・知念家・沢岻家）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                紅型には「三宗家」と呼ばれる<strong>城間家・知念家・沢岻（たくし）家</strong>の系譜があります。なかでも城間家の<strong>城間栄喜（しろま えいき、1908〜1992）</strong>は戦後復興の中心人物で、沖縄県の無形文化財に認定された人物です（国の人間国宝とは制度が異なります）。その流れをくむ城間びんがた工房は、城間栄順（しろま えいじゅん）氏らによって現代まで継承されています。こうした著名工房の作品は高く評価される傾向があります。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
              <p className="text-sm leading-relaxed text-gray-700">
                <strong className="text-[#6b4c8a]">注意：</strong>
                「人間国宝（国の重要無形文化財保持者）」と「県の無形文化財」は別の制度です。紅型の人間国宝は玉那覇有公氏であり、城間栄喜は県の無形文化財に認定された人物です。査定の場で作家を伝える際は、肩書きを正確に伝えると評価がスムーズになります。
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
            伝統的工芸品の指定と証紙・落款
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              「琉球びんがた」は、<strong>1984年（昭和59年）5月31日に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。製造地域は那覇市・宜野湾市・浦添市・糸満市・豊見城市です。伝統的工芸品には伝統マークの証紙が付き、産地と品質の裏付けになります。
            </p>
            <p>
              また、紅型の振興にあたっては<strong>琉球びんがた事業協同組合</strong>（那覇市首里）が活動しています。作家物には落款（作り手の印・署名）が入ることがあり、証紙とあわせて作家・産地の証明になります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・落款ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>作家名・産地が証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>作家の知名度に応じた評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・落款なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>作家・産地の特定が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>量産品との区別が難しくなる</span>
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
              、染めの着物と織りの着物の評価の違いについては
              <Link href="/articles/dye-vs-weave/" className="text-[#6b4c8a] underline">
                染めと織りの違い
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
            琉球紅型を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・落款・付属品をそろえる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・落款・購入時の箱・しおりなどは、作家や産地を示す重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：紅型・沖縄の染織に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                紅型は作家や工房によって価値が大きく変わるため、落款や作風から作り手を見極められる査定員がいる業者を選ぶことが大切です。一般的なリサイクルショップでは作家物でも安く扱われることがあるため、着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                作家物は業者によって評価や販路が異なり、査定額に差が出ることがあります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                顔料を用いた紅型は、日焼けや擦れ、湿気によって色合いが変化することがあります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
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
            【実売データ】公開オークションでの琉球紅型のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">直近30日の落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">平均落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">琉球紅型</td>
                  <td className="px-4 py-3 font-medium">53件</td>
                  <td className="px-4 py-3 font-medium">約13,778円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紅型（琉球）</td>
                  <td className="px-4 py-3 font-medium">86件</td>
                  <td className="px-4 py-3 font-medium">約17,333円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紅型 着物</td>
                  <td className="px-4 py-3 font-medium">66件</td>
                  <td className="px-4 py-3 font-medium">約14,588円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紅型 帯</td>
                  <td className="px-4 py-3 font-medium">63件</td>
                  <td className="px-4 py-3 font-medium">約20,336円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">紅型 名古屋帯</td>
                  <td className="px-4 py-3 font-medium">37件</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">約23,841円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://aucfan.com/intro/q-~ceb0b5e5b9c8b7bf/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              オークファン（aucfan）「琉球紅型」ほか各キーワードの落札相場
            </a>
            （直近30日の集計・2026年7月取得）
            <br />
            ※ 紅型は着物全体のなかでも出品数が限られる品目のため、集計は数十件規模です。件数が少ない品目は、数点の高額・安値で平均が動きやすい点にご留意ください。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。作家不明・証紙なし・状態不良の品や、逆に人間国宝・著名工房の作家物では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・作家で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・作家物の琉球紅型は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・作家・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ琉球紅型でも、証紙・落款の有無、作家物か否か、素材や保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（琉球びんがた事業協同組合など）", "◎ 大きくプラス", "産地・品質の裏付けになり、伝統的工芸品としての価値が認められやすくなります。証紙がそろっていると評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "本場の琉球紅型か、本土の紅型風・量産品かの判別が難しくなり、慎重な査定になりがち。落款やたとう紙など他の手がかりが重要に。"],
                  ["伝統的な型染め・手挿しの手仕事", "◎ 高評価", "型紙・糊置き・手挿しの手仕事による一点物は、機械染めの量産品とは評価が大きく異なります。隈取りなど手わざの見どころが評価につながります。"],
                  ["作家物・著名工房の作品", "◎ 別格の評価", "人間国宝・玉那覇有公や城間家・知念家など三宗家の系譜の作品は別格の評価。落款・証紙で確認できると有利です。"],
                  ["琉球紅型（本場）か本土の紅型風か", "○〜△", "沖縄で作られた本場の琉球紅型は評価が高い傾向。本土で作られた「紅型風」の染めは、意匠が似ていても評価は控えめになりやすい。産地の裏付けが鍵。"],
                  ["正絹（絹）", "◎ 有利", "正絹の紅型は素材面でも評価されやすい状態。化繊（ポリエステル等）の紅型風は評価が大幅に下がる傾向があります。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様は最も高くなりやすい状態。保管ジワのみで難がなければ特に有利です。"],
                  ["シミ・退色・難あり", "△ マイナス", "顔料を用いる紅型は日焼け・擦れ・退色が起きやすく、状態不良は減額対象。難の程度・範囲で幅があります。自己クリーニングは避け、現状のまま査定へ。"],
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
              琉球紅型を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              琉球紅型は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い琉球紅型は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/okinawa/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                沖縄の着物買取おすすめ
              </h3>
              <p className="text-xs text-gray-600">
                沖縄県で着物を高く売る方法と、出張・持込・宅配に対応したおすすめ業者を比較。
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
                沖縄・首里の伝統織物、首里織の特徴と買取相場の傾向を解説。
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
            琉球紅型の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            琉球紅型の買取相場はあくまで目安です。作家・証紙・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの紅型の正確な価値を確認しましょう。
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
