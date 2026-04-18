import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "アンティーク着物の買取相場｜大正・昭和の着物に価値はある？",
  description:
    "アンティーク着物の買取相場を時代別に徹底解説。大正ロマン柄や銘仙の幾何学模様は数万円の高額査定も。明治後期〜昭和初期の着物の特徴と人気柄、コレクター需要、高く売るためのポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/antique-kimono/",
  },
  openGraph: {
    title:
      "アンティーク着物の買取相場｜大正・昭和の着物に価値はある？",
    description:
      "アンティーク着物の時代別買取相場と高く売るコツを解説。銘仙や大正ロマン柄は高額査定も。",
    url: "https://kimonokaitori-biyori.com/articles/antique-kimono/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question:
      "アンティーク着物とリサイクル着物の違いは何ですか？",
    answer:
      "アンティーク着物は一般的に戦前（明治後期〜昭和初期、おおむね1920年代〜1940年代）に作られた着物を指し、製造から約80年以上経過したものが該当します。一方、リサイクル着物は年代を問わず中古の着物全般を指します。アンティーク着物はその時代特有のデザインや製法に芸術的・歴史的価値があり、コレクターアイテムとしての需要があります。",
  },
  {
    question:
      "古い着物にカビやシミがあっても買い取ってもらえますか？",
    answer:
      "アンティーク着物の場合、多少のカビやシミがあっても買取対象になることが多いです。80年以上前の着物に完璧な状態を求めるのは難しいため、多少の劣化は許容されます。ただし、カビが広範囲に広がっている場合や、大きなシミ・破れがある場合は査定額が下がります。希少な柄や有名産地のものは、多少の状態不良でも高額査定になることがあります。",
  },
  {
    question: "銘仙の着物は高く売れますか？",
    answer:
      "はい、銘仙（めいせん）はアンティーク着物の中でも特に人気が高く、高額査定が期待できます。特に大正〜昭和初期の銘仙は、大胆な幾何学模様やアール・デコ調のモダンなデザインが若い世代やファッション愛好家に人気があります。状態が良い銘仙は1万円〜5万円、特に希少な柄のものは10万円以上の買取価格がつくこともあります。",
  },
  {
    question:
      "祖母から受け継いだ古い着物を売りたいのですが、どうすればいいですか？",
    answer:
      "まず着物専門の買取業者に無料査定を依頼しましょう。出張買取を利用すれば、自宅にいながら査定を受けられます。祖母から受け継いだ着物は思わぬ高額品が眠っていることがあり、特に戦前の着物や有名産地の着物は高額査定の可能性があります。証紙やたとう紙が残っていれば一緒に出しましょう。複数業者で相見積もりを取ることもおすすめです。",
  },
  {
    question:
      "アンティーク着物の買取で注意すべきことはありますか？",
    answer:
      "最も重要なのは、着物の価値がわかる専門業者に査定を依頼することです。アンティーク着物は時代やデザインの知識がないと正当な評価ができません。リサイクルショップでは「古いから価値がない」と判断されてしまうこともあります。また、自分でクリーニングや補修をしないことも大切です。アンティーク着物の生地は繊細で、不適切な処理で傷めてしまう可能性があります。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "アンティーク着物の買取相場｜大正・昭和の着物に価値はある？",
  description:
    "アンティーク着物の時代別買取相場と高く売るコツを解説。銘仙や大正ロマン柄は高額査定も。",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
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
    "@id":
      "https://kimonokaitori-biyori.com/articles/antique-kimono/",
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
      name: "アンティーク着物",
      item: "https://kimonokaitori-biyori.com/articles/antique-kimono/",
    },
  ],
};

export default function AntiqueKimonoPage() {
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
          { label: "アンティーク着物" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              大正・昭和の名品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">
                アンティーク着物の買取相場
              </span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                大正・昭和の着物に価値はある？
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              「古い着物だから価値がない」と思っていませんか？実はアンティーク着物（戦前の着物）は、コレクターやファッション愛好家からの需要が高く、数千円〜数十万円の買取価格がつくことがあります。大正ロマン柄や銘仙の幾何学模様など、時代別の特徴と買取相場を詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年4月16日
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
                    1. アンティーク着物の定義と歴史
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-era"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【時代別】アンティーク着物の買取相場
                  </a>
                </li>
                <li>
                  <a
                    href="#popular-design"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 時代別の特徴と人気デザイン
                  </a>
                </li>
                <li>
                  <a
                    href="#high-value"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 高額になるアンティーク着物の種類
                  </a>
                </li>
                <li>
                  <a
                    href="#condition"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    5. 状態による価格差
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. アンティーク着物を高く売るポイント
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

      {/* アンティーク着物の定義 */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            アンティーク着物の定義と歴史
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              アンティーク着物とは、一般的に<strong>戦前（明治後期〜昭和初期、おおむね1920年代〜1940年代）</strong>に作られた着物を指します。製造から約80年〜100年以上が経過しており、その時代特有のデザインや製法に芸術的・歴史的な価値が認められるものです。
            </p>
            <p>
              一般的な中古着物（リサイクル着物）とは異なり、アンティーク着物はファッションアイテムとしてだけでなく、<strong>コレクターズアイテム</strong>や<strong>美術工芸品</strong>としての側面を持っています。近年は若い世代を中心に「レトロ着物」として大正ロマン風の着こなしが人気を集めており、アンティーク着物の需要はますます高まっています。
            </p>
            <p>
              また、海外でも日本のアンティーク着物は「Kimono Art」「Japanese Vintage Textile」として高い評価を受けており、海外のコレクターやファッションデザイナーからの需要もあります。
            </p>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                アンティーク着物の時代区分
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>明治後期（1890年代〜1912年）：</strong>
                    西洋文化の影響が始まり、洋風の図案が着物に取り入れられ始めた時期
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>大正時代（1912年〜1926年）：</strong>
                    「大正ロマン」の華やかで自由なデザインが花開いた黄金期
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>昭和初期（1926年〜1945年）：</strong>
                    モダンなデザインと伝統の融合。銘仙の最盛期
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>昭和中期以降（1945年〜）：</strong>
                    一般的にはリサイクル着物に分類。ただし昭和30年代以前は希少価値あり
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 時代別相場 */}
      <section id="price-by-era" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【時代別】アンティーク着物の買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            アンティーク着物の買取相場は、時代・種類・状態によって幅があります。以下に2026年時点の買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    時代・種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    代表的なデザイン
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場（一般品）
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    買取相場（希少品）
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    明治後期の着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    古典的な花鳥柄・西洋柄の融合
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜3万円
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5万円〜20万円超
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    大正時代の着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    大正ロマン柄・アール・ヌーヴォー
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜5万円
                  </td>
                  <td className="px-4 py-3 font-medium">
                    10万円〜30万円超
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    昭和初期の着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    昭和モダン柄・アール・デコ
                  </td>
                  <td className="px-4 py-3 font-medium">
                    3,000円〜3万円
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5万円〜20万円超
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    銘仙（大正〜昭和初期）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    大胆な幾何学模様・モダン柄
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜5万円
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5万円〜10万円超
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    昭和中期以降
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統柄・シンプルなデザイン
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1,000円〜1万円
                  </td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">
                    1万円〜5万円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は正絹・状態良好の場合の目安です。産地や作家によってはさらに高額になります。
          </p>
        </div>
      </section>

      {/* 時代別デザイン特徴 */}
      <section id="popular-design" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            時代別の特徴と人気デザイン
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              アンティーク着物の魅力は、各時代の文化・芸術の潮流が反映されたデザインにあります。時代ごとの特徴と、現在の買取市場で人気のデザインを詳しく解説します。
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                大正ロマン柄（大正時代・1912年〜1926年）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                大正時代は日本のファッション史において最も華やかで自由な時代でした。西洋文化（アール・ヌーヴォー）の影響を受けつつ、日本の伝統美と融合した独特のデザインが生まれました。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>特徴：</strong>
                    鮮やかな色使い、大胆な花柄、洋花（バラ・チューリップ）のモチーフ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>人気柄：</strong>
                    バラと蝶、幾何学文様と花の組み合わせ、矢絣（やがすり）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>買取需要：</strong>
                    大正ロマンブームにより若い世代に人気。卒業式の袴コーデにも使われる
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                昭和モダン柄（昭和初期・1926年〜1940年代）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                昭和初期はアール・デコの影響を受けた直線的でモダンなデザインが主流になりました。大正ロマンの華やかさに比べ、より洗練されたスタイリッシュな印象が特徴です。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>特徴：</strong>
                    直線的なデザイン、幾何学模様、コントラストの強い配色
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>人気柄：</strong>
                    ストライプと花の組み合わせ、市松模様のアレンジ、抽象的な図案
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>買取需要：</strong>
                    ファッション感度の高い層やデザイナーに人気。リメイク素材としても注目
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                銘仙（めいせん）― アンティーク着物の花形
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                銘仙は大正〜昭和初期に大流行した平織りの絹織物で、アンティーク着物の中でも最も人気が高い種類のひとつです。「経糸（たていと）の解し織り」という独特の技法で、大胆で鮮やかな模様を表現しました。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>主な産地：</strong>
                    秩父（埼玉県）、伊勢崎（群馬県）、足利（栃木県）、八王子（東京都）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>特徴的なデザイン：</strong>
                    幾何学模様、抽象柄、大胆な色の組み合わせ（赤×緑、紫×黄など）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>人気の理由：</strong>
                    「大正モダン」の象徴として若者に人気。SNSでの着こなし投稿も増加
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>買取相場：</strong>
                    一般品5,000円〜5万円、希少柄は10万円以上の査定も
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 高額になる種類 */}
      <section id="high-value" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            高額になるアンティーク着物の種類
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            すべてのアンティーク着物が高額になるわけではありませんが、以下の種類は特に高い買取価格が期待できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    特徴
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場の目安
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    高額になる理由
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    銘仙
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    幾何学模様の絹織物
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜10万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    レトロブームで需要増
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    アンティーク大島紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    戦前の泥染め大島紬
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜20万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    希少な古い柄にコレクター需要
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    アンティーク結城紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    戦前の手紡ぎ結城紬
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜30万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    現在では再現困難な技法
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    アンティーク西陣織
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    戦前の高級西陣織
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜15万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    芸術的価値と希少性
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    大正〜昭和の振袖
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    総絞りや手描友禅の振袖
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1万円〜20万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    成人式・結婚式での需要
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    戦前の型染め小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    型紙を使った伝統的な染色
                  </td>
                  <td className="px-4 py-3 font-medium">
                    3,000円〜5万円
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    現在では失われた型紙の柄
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">
                コレクター需要について：
              </strong>
              アンティーク着物は、着用目的だけでなく「コレクション」「インテリア」「テキスタイルアート」としての需要もあります。特に海外のコレクターは日本のアンティーク着物を「ウェアラブルアート（着る芸術）」として評価しており、状態が多少悪くても希少なデザインであれば高額で取引されることがあります。そのため、古いからと言って安易に処分せず、まず専門業者に査定を依頼することをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* 状態による価格差 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態による価格差
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              アンティーク着物は製造から80年以上が経過しているため、完璧な状態を保っているものは稀です。とはいえ、<strong>状態によって買取価格には大きな差</strong>があります。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    状態
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    具体的な状態
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    買取価格への影響
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-green-600">
                    良好
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    シミ・カビなし、色褪せなし、破れなし
                  </td>
                  <td className="px-4 py-3 font-medium">
                    相場の上限価格
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#c9a76c]">
                    やや難あり
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    小さなシミ、軽い色褪せ、裏地の黄変
                  </td>
                  <td className="px-4 py-3 font-medium">
                    相場の50〜80%
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-orange-500">
                    難あり
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    目立つシミ・カビ、部分的な色褪せ、小さな破れ
                  </td>
                  <td className="px-4 py-3 font-medium">
                    相場の20〜50%
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-red-500 rounded-bl-lg">
                    大きな難あり
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    広範囲のカビ、大きなシミ・破れ、虫食い多数
                  </td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">
                    買取不可〜相場の10%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">重要なポイント：</strong>
              アンティーク着物の場合、一般的な中古着物よりも<strong>状態の悪さに対する許容度が高い</strong>傾向があります。80年以上前の着物に完璧な状態を求めるのは現実的ではないため、多少のシミや色褪せがあっても「希少なデザイン」「有名産地」「歴史的価値」があれば高額査定になることがあります。自己判断で「状態が悪いから売れない」と決めつけず、まず専門業者に査定を依頼しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            アンティーク着物を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：アンティーク着物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                アンティーク着物は時代やデザインの専門知識がないと正当な評価ができません。リサイクルショップでは「古い＝価値がない」と判断されてしまうことも。アンティーク着物の買取実績がある専門業者に依頼することで、時代考証やデザインの希少性を踏まえた適正価格で買い取ってもらえます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：自分でクリーニング・補修をしない
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                アンティーク着物の生地は経年により非常に繊細になっています。自分でクリーニングや補修をすると、生地を傷めたり色落ちを起こしたりして価値を下げてしまう可能性があります。シミや汚れがあっても、そのままの状態で査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                アンティーク着物は業者によって評価基準が大きく異なります。海外向けの販路を持つ業者は海外コレクターへの需要を見込んで高額査定を出すことがありますし、アンティーク専門店は独自のコレクター顧客を持っていることがあります。最低でも3社に査定を依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：付属品や関連品も一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                アンティーク着物に合わせていた帯や帯留め、半衿、帯締めなどの和装小物も一緒に査定に出しましょう。アンティークの和装小物にもコレクター需要があり、セットで出すことで全体の買取額がアップします。特にアンティークの帯留めや帯締めは単品でも高額になることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント5：来歴や背景がわかれば伝える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                アンティーク着物の場合、「祖母が大正時代に購入した」「○○呉服店で仕立てた」「花嫁衣装として使われた」などの来歴（プロヴェナンス）がわかると、査定の参考になることがあります。古い写真や購入記録が残っていれば、一緒に提示すると良いでしょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アンティーク着物のコレクター需要と売り先の選び方 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            アンティーク着物のコレクター需要と売り先の選び方
          </h3>
          <div className="bg-white border border-[#e8ddd0] rounded-lg p-5 space-y-3">
            <p className="text-gray-700 leading-relaxed">
              アンティーク着物は、通常の買取業者よりもアンティーク専門店やコレクターに直接売った方が高額になるケースがあります。特に銘仙はコレクター人気が非常に高い着物です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              メルカリやヤフオクなどのフリマアプリも選択肢の一つですが、出品・発送の手間がかかる点は注意が必要です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              おすすめの流れとしては、まず買取業者で査定を受け、提示された価格に納得できなければフリマアプリでの出品を検討するという方法です。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* 関連ページ */}
      <section className="py-10">
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
              href="/articles/oshima-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                大島紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                大島紬の種類別買取相場と高く売るコツ。泥染め・藍大島・白大島の価格比較も。
              </p>
            </Link>
            <Link
              href="/articles/old-stained-kimono/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                古い・シミあり着物の買取
              </h3>
              <p className="text-xs text-gray-600">
                古い着物やシミのある着物でも買い取ってもらえる？状態別の査定ポイントを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            アンティーク着物の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            「古い着物だから」と処分してしまうのはもったいないかもしれません。アンティーク着物は時代・デザイン・産地・状態によって、思わぬ高額査定がつくことがあります。着物専門の査定員に無料査定を依頼して、お手持ちの着物の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
