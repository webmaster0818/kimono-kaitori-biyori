import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】伊勢崎銘仙の買取相場｜アンティーク銘仙の需要と実売データ",
  description:
    "伊勢崎銘仙（群馬県伊勢崎市）の買取相場を実売データで解説。明治から昭和に全国で親しまれた絹織物で、現在は「伊勢崎絣」として国の伝統的工芸品に指定。公開オークションの落札データと、アンティーク着尺の需要、高く売るポイントを正直にまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/isesaki-meisen/",
  },
  openGraph: {
    title: "【2026年最新】伊勢崎銘仙の買取相場｜アンティーク銘仙の需要と実売データ",
    description:
      "伊勢崎銘仙の買取相場と高く売る方法。「伊勢崎絣」として国の伝統的工芸品。アンティーク需要と実売データを解説。",
    url: "https://kimonokaitori-biyori.com/articles/isesaki-meisen/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "伊勢崎銘仙はどのくらいで買い取ってもらえますか？",
    answer:
      "伊勢崎銘仙は普段着・おしゃれ着として大量に流通した絹織物で、買取では一般に高額になりにくい傾向があります。公開オークションの実売データ（2026年7月16日取得）では、着物の単品出品8件で平均 約4,524円・中央値 2,322円・最高 25,000円でした。ただし件数が極端に少ないため平均は大きく振れます。実売価格は個人間取引の成立価格であり、買取業者の査定額は一般にこれより低くなります。正確な金額は着物専門業者の無料査定で確認しましょう。",
  },
  {
    question: "伊勢崎銘仙と伊勢崎絣はどう違うのですか？",
    answer:
      "基本的には同じ産地の織物を指しています。群馬県伊勢崎市を中心とする産地の絹織物は、明治から昭和にかけて「伊勢崎銘仙」の名で全国的に知られました。現在、国の伝統的工芸品としては「伊勢崎絣」の名称で1975年（昭和50年）5月10日に指定されています。アンティーク着物の世界では「銘仙」、公的な指定では「伊勢崎絣」と呼び分けられることが多い、と理解しておくとよいでしょう。",
  },
  {
    question: "伊勢崎銘仙はアンティーク着物として人気がありますか？",
    answer:
      "はい。銘仙は大正から昭和初期に女性の普段着・おしゃれ着として流行した織物で、大胆でモダンな柄ゆきがアンティーク着物ファンやリメイク愛好家に人気があります。実売データでも、上位の落札はアンティークの着尺（未仕立ての反物状の生地）が中心でした。状態が良く柄の魅力的なアンティーク品は、銘仙としては評価が高くなることがあります。",
  },
  {
    question: "未仕立ての着尺や反物でも売れますか？",
    answer:
      "売れます。むしろ伊勢崎銘仙の実売データでは、アンティークの着尺（未仕立て）が上位に入る傾向が見られました。未仕立ての生地は仕立てる楽しみやリメイク素材としての自由度があり、需要があります。保管状態が良ければ、仕立て済みの中古着物より評価されるケースもあるため、反物・着尺の状態でも遠慮なく査定に出しましょう。",
  },
  {
    question: "伊勢崎銘仙を高く売るにはどうすればよいですか？",
    answer:
      "シミ・ヤケ・虫食いが進む前に早めに査定へ出すこと、アンティーク着物や銘仙の扱いに詳しい業者を選ぶこと、複数社で相見積もりを取ることが基本です。銘仙は流通量の多い織物のため、一般的なリサイクルショップでは一律に安く扱われがちです。大柄でモダンな柄・状態の良いものはアンティーク需要で評価が分かれやすいため、相見積もりの効果が出やすい品目です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "伊勢崎銘仙の買取相場｜アンティーク銘仙の需要と実売データ",
  description:
    "伊勢崎銘仙の買取相場と高く売る方法。「伊勢崎絣」として国の伝統的工芸品。アンティーク需要と実売データを解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/isesaki-meisen/",
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
      name: "伊勢崎銘仙",
      item: "https://kimonokaitori-biyori.com/articles/isesaki-meisen/",
    },
  ],
};

export default function IsesakiMeisenPage() {
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
          { label: "伊勢崎銘仙" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              群馬・伝統的工芸品（伊勢崎絣）
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">伊勢崎銘仙の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                アンティーク銘仙の需要と実売データ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              伊勢崎銘仙（いせさきめいせん）は、群馬県伊勢崎市を中心とする産地で織られ、明治から昭和にかけて全国で親しまれた絹織物です。現在は「伊勢崎絣」の名称で国の伝統的工芸品に指定されています。買取では高額になりにくい織物ですが、大胆な柄のアンティーク品には根強い需要があります。公開オークションの実売データをもとに、正直な相場感と高く売るポイントを解説します。
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
                    1. 伊勢崎銘仙とは？全国に広まった大衆絹織物
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 伊勢崎絣の多彩な絣技法
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 伊勢崎銘仙の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と見分けの手がかり
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 伊勢崎銘仙を高く売るポイント
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

      {/* 伊勢崎銘仙とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伊勢崎銘仙とは？全国に広まった大衆絹織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              伊勢崎銘仙（いせさきめいせん）は、<strong>群馬県伊勢崎市を中心とする産地</strong>で織られてきた先染めの絹織物です。産地としての歴史は古く、17世紀後半には織物産地が形づくられていたとされます。<strong>明治から昭和にかけて「伊勢崎銘仙」の名で全国的な知名度</strong>を獲得し、女性の普段着・おしゃれ着として大量に生産・愛用されました。
            </p>
            <p>
              現在、国の伝統的工芸品としては<strong>「伊勢崎絣（いせさきがすり）」</strong>の名称で指定されています（1975年・昭和50年5月10日、指定産地は群馬県伊勢崎市・太田市および埼玉県本庄市）。素材は生糸・玉糸・真綿のつむぎ糸などの絹糸で、手作業を中心とした多くの工程を経て作られるため、同じ柄でも職人によって仕上がりが微妙に異なるのが持ち味です。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">伊勢崎銘仙の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>群馬県伊勢崎市を中心とする産地の先染め絹織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>明治〜昭和に「伊勢崎銘仙」として全国で流行した大衆着物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>括り絣・併用絣など多彩な絣技法による大胆で華やかな柄ゆき</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>「伊勢崎絣」として1975年（昭和50年）5月10日に国の伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>アンティーク着物・リメイク素材としての需要がある</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              参考：
              <a
                href="https://kougeihin.jp/craft/0105/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                伝統的工芸品産業振興協会「伊勢崎絣」
              </a>
              ・
              <a
                href="https://www.pref.gunma.jp/site/kougei/690262.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                群馬県「伝統工芸産業振興 伊勢崎絣」
              </a>
            </p>
            <p>
              同じ「銘仙」の産地としては埼玉県の秩父も有名です。銘仙全体の買取傾向は
              <Link href="/articles/chichibu-meisen/" className="text-[#6b4c8a] underline font-medium">
                秩父銘仙の買取相場
              </Link>
              もあわせてご覧ください。本ページは「伊勢崎銘仙という織物の価値と実売データ」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 絣技法 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伊勢崎絣の多彩な絣技法
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            伊勢崎の織物は、複数の絣（かすり）技法を持つことで知られます。どの技法かによって柄の表情が変わり、アンティーク品としての魅力にもつながっています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    絣技法
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    括り絣（くくりがすり）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    染色の前に糸を縛って防染し、染め分ける基本的な絣技法
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    板締絣（いたじめがすり）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    文様を彫った板に糸をはさんで締め、染料の浸透を防いで柄を染める技法
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    解模様絣（ほぐしもようがすり）・緯総絣（よこそうがすり）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    型紙を使って経糸（解模様絣）または緯糸（緯総絣）に柄を染める技法
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    併用絣（へいようがすり）
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    経糸・緯糸の両方に型紙で柄を染めて織り合わせる技法。色が重なり合った絵画のような鮮やかな柄が生まれる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            技法の名称・分類は伝統的工芸品「伊勢崎絣」の指定内容に基づきます。緻密な併用絣など手の込んだ柄は、アンティーク品としても見応えがあります。
          </p>
        </div>
      </section>

      {/* 相場 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伊勢崎銘仙の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            伊勢崎銘仙の買取価格は、状態・柄ゆき・仕立ての有無によって変わります。ここでは金額ではなく、査定で評価が分かれる「傾向」を正直に整理します。具体的な実売価格は後述の
            <a href="#auction-data" className="text-[#6b4c8a] underline">実売データ</a>
            をご覧ください。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                銘仙は高額になりにくい、が前提
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                銘仙は大正〜昭和に大量生産された大衆向けの普段着です。作家物の工芸品とは評価軸が異なり、買取では一般に高額になりにくい織物です。まずはこの前提を踏まえたうえで、アンティークとしての魅力を評価してくれる売り先を選ぶことが大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                アンティーク着尺（未仕立て）が上位に入りやすい
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                公開オークションの実売データでは、アンティークの着尺（未仕立ての生地）が上位の落札に入る傾向が見られました。仕立てる楽しみやリメイク素材としての自由度から、未仕立て品には固有の需要があります。大胆でモダンな柄ゆきほどアンティークファンの人気を集めやすい傾向です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                評価が分かれやすく、売り先で差が出る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                銘仙のアンティーク価値は、業者の販路（アンティーク着物・リメイク需要への販路があるか）によって評価が大きく分かれます。一般的なリサイクルショップでは古い普段着として一律に扱われがちなため、着物専門・アンティークに強い業者への相見積もりが有効です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定と見分け */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品の指定と見分けの手がかり
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              伊勢崎銘仙にまつわる公的な指定や名称の関係を整理しておくと、査定の場で品物を説明しやすくなります。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                「伊勢崎絣」として国の伝統的工芸品に指定
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                伊勢崎産地の絹織物は、<strong>「伊勢崎絣」の名称で1975年（昭和50年）5月10日に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。指定産地は群馬県伊勢崎市・太田市および埼玉県本庄市です。括り絣・板締絣・解模様絣・緯総絣・併用絣といった絣技法が指定の技術・技法に挙げられています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                アンティーク銘仙には証紙がないことが多い
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大正〜昭和のアンティーク銘仙は、現代の伝統的工芸品の証紙制度が整う前の品が中心のため、証紙がないのが普通です。査定では証紙の有無よりも、<strong>状態（シミ・ヤケ・虫食い）と柄ゆきの魅力</strong>が評価の中心になります。産地の判別が難しい場合は「銘仙」として評価されることも多く、その場合も柄と状態が鍵になります。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">評価されやすい銘仙</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>大柄・モダンな配色などアンティークとして魅力的な柄</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>シミ・ヤケ・虫食いの少ない良好な状態</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>未仕立ての着尺・保存状態の良い反物</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">評価が控えめになりやすい銘仙</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>シミ・ヤケ・虫食い・スレなど経年劣化が目立つもの</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>裏地の劣化・匂いなどリメイク素材としても使いにくい状態</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>柄が地味で、アンティーク需要に乗りにくいもの</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              アンティーク着物全般の買取については
              <Link href="/articles/antique-kimono/" className="text-[#6b4c8a] underline">
                アンティーク着物の買取相場
              </Link>
              、証紙の見方については
              <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">
                着物の証紙ガイド
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
            伊勢崎銘仙を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：アンティークに強い業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                銘仙の価値はアンティーク着物・リメイク需要への販路を持つ業者ほど正当に評価できます。着物専門で、アンティーク・銘仙の扱い実績がある業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：状態が良いうちに早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                アンティーク銘仙は製造から年月が経っており、シミ・ヤケ・虫食いは今後も進行します。絹は経年で裂けやすくなることもあるため、売ると決めたら状態が良いうちに早めの査定がおすすめです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：未仕立ての着尺・反物はそのまま出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                未仕立ての着尺は銘仙の中でも需要のある形態です。仕立てずにそのままの状態で査定に出しましょう。たとう紙・ラベルなど購入時の付属品があれば一緒に出すと産地の手がかりになります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                銘仙は業者によって評価が大きく分かれる品目です。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
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
            【実売データ】公開オークションでの伊勢崎銘仙のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。伊勢崎銘仙は「伊勢崎銘仙」の名を明記した単品出品自体が非常に少ない品目です。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">全体</td>
                  <td className="px-4 py-3 font-medium">8件</td>
                  <td className="px-4 py-3 font-medium">約4,524円</td>
                  <td className="px-4 py-3 font-medium">2,322円</td>
                  <td className="px-4 py-3 font-medium">25,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">着物</td>
                  <td className="px-4 py-3 font-medium">8件</td>
                  <td className="px-4 py-3 font-medium">約4,524円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">25,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E4%BC%8A%E5%8B%A2%E5%B4%8E%E9%8A%98%E4%BB%99"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「伊勢崎銘仙」の落札相場
            </a>
            （集計期間：2026年2月10日〜2026年7月14日・2026年7月16日取得）
            <br />
            ※ タイトルに「伊勢崎銘仙」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外しています。また、検索結果には織物資料・広告紙などの紙資料も混ざるため、着物のみを集計しています。
            <br />
            ※ <strong>集計対象が8件と極端に少ないため、平均値はわずかな高額落札で大きく振れます。</strong>実際、中央値 2,322円と平均 約4,524円の開きは、アンティーク着尺など一部の良品が平均を押し上げていることを示しています。上表は統計的な相場ではなく、「実際に成立した取引例の幅」としてご覧ください。傾向としては、アンティークの着尺（未仕立て）が上位に入っていました。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。伊勢崎銘仙は件数が非常に少なく、柄・状態・仕立ての有無によって価格が大きく上下するため、上表の平均はあくまで“参考の幅”です。金額は取得時点のもので、相場は時期・状態・需要で変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              アンティーク銘仙は業者によって評価が分かれやすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（柄・状態・仕立てでどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ伊勢崎銘仙でも、柄ゆき・保存状態・仕立ての有無によって査定額は変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["アンティークの着尺（未仕立て）", "◎ 評価されやすい", "実売データでも上位に入る傾向が見られた形態です。仕立ての自由度とリメイク需要があり、保存状態が良ければ有利です。"],
                  ["大柄・モダンな配色の柄", "◎ 評価されやすい", "銘仙らしい大胆で華やかな柄はアンティークファンの人気が高く、評価の中心になります。"],
                  ["併用絣など手の込んだ絣柄", "○ プラス要素", "経糸・緯糸の両方に柄を染める併用絣など、技法的に見応えのある柄はプラスに働くことがあります。"],
                  ["状態良好（シミ・ヤケ・虫食いなし）", "◎ プラス", "アンティーク品は状態が命です。経年品としてきれいな状態を保っているものは評価が安定します。"],
                  ["シミ・ヤケ・虫食い・裏地劣化", "△ マイナス", "状態不良は減額対象です。ただしリメイク素材として部分利用できる場合もあるため、あきらめずに査定へ。"],
                  ["柄が地味・需要に乗りにくい", "△ 控えめ", "アンティーク需要は柄ゆき次第の面があり、地味な柄は評価が控えめになりがちです。"],
                  ["産地が判別できない「銘仙」", "○〜△", "伊勢崎か秩父かなど産地不明でも「銘仙」として評価されます。その場合も柄と状態が評価の中心です。"],
                  ["まとめ売り（他の着物と一緒）", "○ 現実的な選択肢", "単品で金額がつきにくい場合も、他の着物・帯とまとめて出すことで全体として評価されやすくなります。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくにアンティーク銘仙は業者の販路による差が出やすいため、複数社で相見積もりを取ると安心です。
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
              伊勢崎銘仙を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              伊勢崎銘仙は柄・状態・仕立てによって評価が変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">柄が魅力的・状態が良い・未仕立ての着尺</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで比較する</h3>
                <p className="text-xs text-gray-600">アンティーク需要のある銘仙は業者で評価が分かれます。おすすめ買取業者ランキングで複数社を比較しましょう。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は柄・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/chichibu-meisen/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                秩父銘仙の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                同じ銘仙の産地・秩父。ほぐし捺染と玉虫効果が特徴の銘仙の買取傾向を解説。
              </p>
            </Link>
            <Link
              href="/articles/antique-kimono/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                アンティーク着物の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                銘仙を含むアンティーク着物全般の価値の見方と、高く売るポイントを解説。
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
                当サイトの実売データ（落札相場）の集め方・出典・更新方針を公開しています。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            伊勢崎銘仙の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            伊勢崎銘仙の実売データは件数が少なく、あくまで参考の幅です。柄・状態・仕立てによって実際の査定額は変わります。着物専門の査定員に無料査定を依頼して、お手持ちの銘仙の正確な価値を確認しましょう。
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
