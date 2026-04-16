import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "加賀友禅の買取相場｜作家物は100万円超も？高く売る方法",
  description:
    "加賀友禅の買取相場を作家別に徹底解説。人間国宝・木村雨山の作品は100万円超、由水十久・矢田博・百貫華峰など有名作家の価格表も掲載。加賀友禅vs京友禅の違いや証紙の見方、高く売るポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/kaga-yuzen/",
  },
  openGraph: {
    title: "加賀友禅の買取相場｜作家物は100万円超も？高く売る方法",
    description:
      "加賀友禅の作家別買取価格表と高く売る方法を解説。人間国宝の作品は超高額査定。",
    url: "https://kimonokaitori-biyori.com/articles/kaga-yuzen/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "加賀友禅はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "加賀友禅の買取相場は作家や種類によって幅があります。一般的な加賀友禅で1,000円〜10万円、有名作家物で5万円〜50万円超、人間国宝・木村雨山の作品は100万円を超えることもあります。証紙・落款の有無、状態、柄の人気度によっても大きく変動します。",
  },
  {
    question: "加賀友禅と京友禅の見分け方を教えてください。",
    answer:
      "加賀友禅と京友禅は染色技法に大きな違いがあります。加賀友禅は「加賀五彩」と呼ばれる藍・臙脂・黄土・草・古代紫の5色を基調とし、「虫食い」表現や「先ぼかし」が特徴です。一方、京友禅は金箔や刺繍を多用した華やかな仕上がりが特徴です。最も確実な見分け方は、証紙で産地を確認することです。加賀友禅には加賀染振興協会が発行する証紙が付きます。",
  },
  {
    question: "作家がわからない加賀友禅でも買い取ってもらえますか？",
    answer:
      "はい、作家がわからなくても買取は可能です。加賀友禅には落款（作家のサイン・印）が入っているのが一般的で、専門の査定員であれば落款から作家を特定できます。落款がない場合でも、加賀友禅の証紙があれば産地が証明されるため、一定の買取価格がつきます。作家不明でも数千円〜数万円の査定になることが多いです。",
  },
  {
    question: "加賀友禅の証紙はどこに付いていますか？",
    answer:
      "加賀友禅の証紙は、反物の端（耳）に貼り付けられている場合と、購入時のたとう紙や箱に一緒に入れられている場合があります。加賀染振興協会が発行する証紙には「加賀友禅」の文字と協会のマークが記載されています。仕立て済みの着物の場合は、証紙が切り取られていることもありますが、たとう紙の中に別途保管されていることが多いです。",
  },
  {
    question: "加賀友禅を高く売るベストなタイミングはありますか？",
    answer:
      "加賀友禅は季節による価格変動は比較的少ないですが、強いて言えば秋〜冬にかけて需要がやや高まる傾向があります。訪問着や留袖は結婚式シーズン（春・秋）の前に需要が高まることもあります。ただし、最も重要なのはタイミングよりも「状態」です。保管状態が良いうちに早めに査定に出すことが、高額買取のカギです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "加賀友禅の買取相場｜作家物は100万円超も？高く売る方法",
  description:
    "加賀友禅の作家別買取価格表と高く売る方法を解説。人間国宝の作品は超高額査定。",
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
      "https://kimonokaitori-biyori.com/articles/kaga-yuzen/",
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
      name: "加賀友禅",
      item: "https://kimonokaitori-biyori.com/articles/kaga-yuzen/",
    },
  ],
};

export default function KagaYuzenPage() {
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
          { label: "加賀友禅" },
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
              <span className="text-gradient">加賀友禅の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                作家物は100万円超も？高く売る方法
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              加賀友禅は石川県金沢市を代表する染色工芸品です。「加賀五彩」の美しい色使いと「虫食い」表現が特徴で、特に人間国宝・木村雨山の作品は100万円を超える買取価格がつくことも。作家別の買取価格表や高く売るためのポイントを詳しく解説します。
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
                    1. 加賀友禅とは？五彩と虫食いの美
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】加賀友禅の買取相場一覧
                  </a>
                </li>
                <li>
                  <a href="#artist" className="text-[#6b4c8a] hover:underline">
                    3. 有名作家別の買取価格表
                  </a>
                </li>
                <li>
                  <a
                    href="#comparison"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 加賀友禅と京友禅の違い
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    5. 加賀染振興協会の証紙と落款
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 加賀友禅を高く売るポイント
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

      {/* 加賀友禅とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            加賀友禅とは？五彩と虫食いの美
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              加賀友禅（かがゆうぜん）は、石川県金沢市を中心に生産される日本を代表する染色工芸品です。江戸時代中期に宮崎友禅斎が確立した友禅染の技法を基盤としつつ、加賀藩独自の美意識が融合して発展しました。1975年に国の伝統的工芸品に指定されています。
            </p>
            <p>
              加賀友禅の最大の特徴は、<strong>「加賀五彩」</strong>と呼ばれる5つの基調色を使った優雅な色使いです。藍（あい）・臙脂（えんじ）・黄土（おうど）・草（くさ）・古代紫（こだいむらさき）の5色を基調とし、写実的な花鳥風月の図案を繊細に描き出します。
            </p>
            <p>
              もうひとつの大きな特徴が<strong>「虫食い」</strong>表現です。葉に虫が食った跡を意図的に描くことで、自然のありのままの姿を表現します。また、「先ぼかし」と呼ばれる技法で葉の先端から色を入れ、外側に向かってグラデーションをつけるのも加賀友禅ならではの技法です。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                加賀友禅の主な特徴
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    「加賀五彩」（藍・臙脂・黄土・草・古代紫）の上品な色使い
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    「虫食い」表現で自然の美を写実的に描く
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    「先ぼかし」で葉先から外側へグラデーションを施す
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    刺繍や金箔はほとんど使わず、染色のみで表現する
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    作家が下絵から仕上げまで一貫して手がける「一人制作」が基本
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
            【種類別】加賀友禅の買取相場一覧
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            加賀友禅の買取相場は、作家の知名度や着物の種類によって大きく異なります。以下に2026年時点の買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    着物の種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    一般的な加賀友禅
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    訪問着・付け下げ
                  </td>
                  <td className="px-4 py-3 font-medium">
                    1,000円〜10万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    証紙・落款ありが前提
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    有名作家物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    訪問着・留袖
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5万円〜50万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    作家の知名度で変動
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    人間国宝の作品
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    訪問着・色留袖
                  </td>
                  <td className="px-4 py-3 font-medium">
                    100万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    木村雨山の作品など
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    加賀友禅の小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">小紋</td>
                  <td className="px-4 py-3 font-medium">
                    3,000円〜5万円
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    柄と作家による
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    加賀友禅の帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    名古屋帯・袋帯
                  </td>
                  <td className="px-4 py-3 font-medium">
                    5,000円〜10万円
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    作家物は高額
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・証紙ありの場合の目安です。状態やサイズ、柄の人気度によっても変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                一般的な加賀友禅（1,000円〜10万円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅の登録作家が手がけた一般的な作品です。訪問着で3万円〜10万円、付け下げで1万円〜5万円程度が相場です。加賀染振興協会の証紙と作家の落款があることが買取の前提となります。柄の人気（季節の花鳥図案は特に人気）や状態によっても価格が変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                有名作家物（5万円〜50万円超）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                由水十久、矢田博、百貫華峰、初代由水十久、柿本市郎といった有名作家の作品は、一般的な加賀友禅を大きく上回る買取価格がつきます。特に訪問着や色留袖は需要が高く、状態が良ければ数十万円の査定も珍しくありません。作家の知名度、作品の出来栄え、保存状態が価格を左右します。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                人間国宝・木村雨山の作品（100万円超）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅で唯一の人間国宝である木村雨山（きむら うざん、1891-1977）の作品は、着物の中でも最高峰の買取価格がつきます。木村雨山は1955年に「友禅」の技法で重要無形文化財保持者（人間国宝）に認定されました。作品数が限られているうえ、国内外のコレクターからの需要が非常に高いため、100万円を超える買取価格になることがあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 作家別価格表 */}
      <section id="artist" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            有名作家別の買取価格表
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              加賀友禅は「一人制作」が基本で、作家が下絵から仕上げまでを一貫して手がけます。そのため、作家の知名度と技量が買取価格に直結します。以下に代表的な作家の買取価格表をまとめました。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    作家名
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    代表作・特徴
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    肩書き
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    買取相場の目安
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    木村雨山
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    写実的な花鳥画、格調高い色彩
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    人間国宝
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    100万円〜300万円超
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    由水十久（初代）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    童子柄で知られる。独特の人物表現
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    加賀友禅の巨匠
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    30万円〜100万円超
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    由水十久（二代目）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    初代の技法を継承、童子柄の名手
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統工芸士
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    15万円〜50万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    矢田博
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    繊細な花の描写、透明感のある色彩
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    加賀友禅作家
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    10万円〜40万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    百貫華峰
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    大胆な構図と鮮やかな色使い
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    加賀友禅作家
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    10万円〜50万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    柿本市郎
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    格調高い古典柄、技法の正統派
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    加賀友禅作家
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    10万円〜30万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    中町博志
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    四季の花々を得意とする繊細な技法
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統工芸士
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    5万円〜20万円
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    二代目 毎田仁郎
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    古典的な花鳥風月、伝統技法の継承者
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統工芸士
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">
                    5万円〜25万円
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    その他登録作家
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    加賀染振興協会に登録された作家
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    登録作家
                  </td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a] rounded-br-lg">
                    1万円〜10万円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は訪問着の場合の目安です。留袖はさらに高額、小紋は低めになる傾向があります。
          </p>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">ポイント：</strong>
              加賀友禅の作家を特定するには、着物の衿先（えりさき）付近にある<strong>「落款」（らっかん）</strong>を確認します。落款は作家独自のサイン・印で、加賀染振興協会に登録されています。落款がわからない場合でも、着物専門の査定員であれば画風や技法から作家を推定できることがあります。
            </p>
          </div>
        </div>
      </section>

      {/* 加賀友禅vs京友禅 */}
      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            加賀友禅と京友禅の違い
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            友禅染には大きく「加賀友禅」「京友禅」「東京友禅」の3種類がありますが、特に混同されやすいのが加賀友禅と京友禅です。買取においても、どちらの友禅かで価格が変わることがあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    比較項目
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    加賀友禅
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    京友禅
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    産地
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    石川県金沢市
                  </td>
                  <td className="px-4 py-3 text-gray-700">京都府</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    色使い
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    加賀五彩（藍・臙脂・黄土・草・古代紫）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    多彩で華やか。金箔・銀箔も使用
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    図案
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    写実的な花鳥風月。自然をありのままに描く
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    図案化・デザイン化された華やかな柄
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    特徴的技法
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    虫食い・先ぼかし
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    金箔・刺繍・たたき染め
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    制作体制
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    一人制作が基本
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    分業制が一般的
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    印象
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    落ち着いた上品さ・侘びの美
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    華やかさ・豪華さ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">
                買取価格への影響：
              </strong>
              一般的に、加賀友禅と京友禅で大きな買取価格の差はありませんが、加賀友禅は「一人制作」のため作家の個性が色濃く反映され、有名作家物の場合は加賀友禅のほうが高額になる傾向があります。京友禅は分業制のため、有名ブランド（千總、龍村美術織物など）の作品が高額査定となります。いずれの場合も、証紙と落款の有無が買取価格に決定的な影響を与えます。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙と落款 */}
      <section id="certificate" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            加賀染振興協会の証紙と落款
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              加賀友禅の買取では、<strong>加賀染振興協会が発行する証紙</strong>と<strong>作家の落款</strong>が査定額を大きく左右します。証紙と落款の両方が揃っていれば、作家名と産地が公的に証明されるため、高額査定の可能性が高まります。
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                加賀染振興協会の証紙
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                加賀友禅の証紙は、加賀染振興協会（石川県金沢市）が発行する品質証明のラベルです。この証紙には以下の情報が記載されています。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>「加賀友禅」の文字</strong>
                    と協会のロゴマーク
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>作家名</strong>（登録作家の氏名）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>作家の落款</strong>の印影
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>証紙番号</strong>
                    （個体識別番号）
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                落款（らっかん）の重要性
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                加賀友禅の最大の特徴のひとつが、作家独自の「落款」です。落款は着物の衿先付近に押される朱印で、加賀染振興協会に登録されています。これは作家の「署名」に相当するもので、作品の真贋や作家の特定に欠かせません。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    落款ありの場合：作家を特定でき、適正価格での買取が可能
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    証紙＋落款の両方あり：最高額での買取が期待できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    落款なし・証紙なし：加賀友禅の証明ができず、大幅な減額になることが多い
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                証紙・落款ありの場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    作家名・産地が公的に証明される
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    加賀友禅の真贋が保証される
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    作家の知名度に応じた高額査定が可能
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    買取相場の上限に近い価格が期待できる
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">
                証紙・落款なしの場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    加賀友禅かどうかの証明ができない
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    作家の特定ができず、一般品扱いになる可能性
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    査定額が50〜80%下がることもある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    専門家でも評価が難しく、低い査定額になりがち
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            加賀友禅を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙と落款は必ずセットで査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅の買取では、加賀染振興協会の証紙と作家の落款が最も重要です。証紙はたとう紙の中、購入時の箱の中などに保管されていることが多いので、必ず探して一緒に査定に出しましょう。落款は着物の衿先にありますが、仕立て替えなどで隠れている場合もあるので注意が必要です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：加賀友禅に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅は作家によって価値が大きく変わるため、落款から作家を特定できる専門知識を持った査定員がいる業者を選ぶことが不可欠です。一般的なリサイクルショップでは、有名作家物でも数千円で買い叩かれてしまうケースがあります。着物専門の買取業者であれば、加賀友禅の画風や技法から作家を推定し、適正価格を提示してくれます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅の作家物は、業者によって数十万円の差が出ることもあります。特に人間国宝・木村雨山の作品や、由水十久・百貫華峰といった人気作家の作品は、業者の販路や在庫状況によって査定額が大きく変動します。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅は正絹の着物のため、湿気やカビ、日焼けに弱い素材です。特に加賀友禅の繊細な色彩は日焼けで褪色しやすく、一度褪色すると価値が大きく下がります。たとう紙に包んで暗所で保管し、売ると決めたら早めに査定に出すことをおすすめします。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント5：購入時の情報を整理しておく
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                購入した呉服店の名前、購入時の金額、購入時期などの情報があると、査定の参考になります。特に高額な作家物の場合、購入時のレシートや保証書が残っていると信頼性が高まり、査定額にプラスに働くことがあります。
              </p>
            </div>
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
              href="/articles/yuki-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                結城紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                重要無形文化財・結城紬の亀甲別買取相場。200亀甲以上は超高額査定。
              </p>
            </Link>
            <Link
              href="/articles/houmongi-tomesode/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                訪問着・留袖の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                訪問着・留袖の種類別買取価格と高く売るコツを徹底解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            加賀友禅の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            加賀友禅の買取相場はあくまで目安です。作家・柄・状態・証紙の有無によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの加賀友禅の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
