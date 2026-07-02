import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】塩沢紬・本塩沢の買取相場｜新潟県南魚沼｜蚊絣と証紙の見方",
  description:
    "塩沢紬・本塩沢（新潟県南魚沼市）の買取相場を解説。蚊絣・十字絣・亀甲絣の特徴、塩沢紬と本塩沢の違い、塩沢織物工業協同組合の証紙、越後上布との違い（重要無形文化財）、高く売るポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/shiozawa-tsumugi/",
  },
  openGraph: {
    title: "【2026年最新】塩沢紬・本塩沢の買取相場｜新潟県南魚沼｜蚊絣と証紙の見方",
    description:
      "塩沢紬・本塩沢の買取相場と高く売る方法を解説。証紙の有無が査定を左右します。",
    url: "https://kimonokaitori-biyori.com/articles/shiozawa-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "塩沢紬はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "塩沢紬・本塩沢の買取相場は、証紙の有無や状態によって幅があります。塩沢織物工業協同組合の証紙が揃っていると、本物であることが証明されるため評価されやすい傾向があります。作家物や伝統工芸士の作品はさらに高く評価される傾向があります。一方、証紙がない場合や、色褪せ・ほつれなどの劣化がある場合は評価が下がりやすくなります。具体的な金額は状態によって変動するため、無料査定での確認をおすすめします。",
  },
  {
    question: "塩沢紬と本塩沢の違いは何ですか？",
    answer:
      "塩沢紬は、もともと麻織物（越後上布）の技術を絹に応用して生まれた絹織物です。一方、本塩沢（塩沢お召）は、たて糸・よこ糸ともに生糸を使い、よこ糸に強撚糸を用いて織り上げ、湯もみによってシボ（細かな凹凸）を出すのが特徴です。本塩沢の起源は寛文年間（1661～72年）に堀次郎将俊が考案したと伝えられ、塩沢紬より古いとされます。それぞれ異なる魅力があり、証紙で種類を確認するのが確実です。",
  },
  {
    question: "塩沢紬は重要無形文化財ですか？",
    answer:
      "塩沢紬・本塩沢そのものは重要無形文化財ではなく、国の伝統的工芸品に指定されています（塩沢紬は1975年、本塩沢は1976年指定）。重要無形文化財に指定されているのは、同じ地域で作られる「越後上布・小千谷縮」で、1955年に指定され、2009年にはユネスコ無形文化遺産にも登録されています。越後上布は苧麻を原料とする麻織物で、塩沢紬とは別の織物です。混同されやすいので注意しましょう。",
  },
  {
    question: "塩沢紬の証紙はどこを見ればわかりますか？",
    answer:
      "塩沢紬・本塩沢には、塩沢織物工業協同組合が発行する証紙が付きます。経済産業大臣指定の伝統的工芸品であることを示す伝統証紙のほか、産地を示す証紙などが付くのが一般的です。証紙は反物の端やたとう紙の中、購入時の箱などに保管されていることが多いので、必ず探して一緒に査定に出しましょう。証紙があるかどうかで評価が大きく変わります。",
  },
  {
    question: "塩沢紬を高く売るにはどうすればいいですか？",
    answer:
      "第一に、塩沢織物工業協同組合の証紙を必ずセットで査定に出すことです。第二に、紬や絣の織物に詳しい着物専門の買取業者を選ぶことです。一般的なリサイクルショップでは塩沢紬の価値が正しく評価されないことがあります。第三に、複数業者で相見積もりを取り、色褪せやほつれなどの劣化が進む前に早めに査定に出すことが大切です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline:
    "塩沢紬・本塩沢の買取相場｜蚊絣と証紙の見方",
  description:
    "塩沢紬・本塩沢の買取相場と高く売る方法を解説。証紙の有無が査定を左右します。",
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
      "https://kimonokaitori-biyori.com/articles/shiozawa-tsumugi/",
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
      name: "塩沢紬・本塩沢",
      item: "https://kimonokaitori-biyori.com/articles/shiozawa-tsumugi/",
    },
  ],
};

export default function ShiozawaTsumugiPage() {
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
          { label: "塩沢紬・本塩沢" },
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
              <span className="text-gradient">塩沢紬・本塩沢の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                蚊絣と証紙の見方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              塩沢紬・本塩沢（ほんしおざわ）は、新潟県南魚沼市の塩沢地方で織られる絹織物です。蚊絣・十字絣・亀甲絣の繊細な絣模様が特徴で、塩沢織物工業協同組合の証紙の有無が買取価格を左右します。塩沢紬と本塩沢の違いや、相場の傾向、高く売るためのポイントを詳しく解説します。
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
                    1. 塩沢紬とは？南魚沼の絣織物
                  </a>
                </li>
                <li>
                  <a href="#difference" className="text-[#6b4c8a] hover:underline">
                    2. 塩沢紬と本塩沢の違い
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 【種類別】塩沢紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#echigo" className="text-[#6b4c8a] hover:underline">
                    4. 越後上布との違いと重要無形文化財
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    5. 塩沢織物工業協同組合の証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 塩沢紬を高く売るポイント
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

      {/* 塩沢紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            塩沢紬とは？南魚沼の絣織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              塩沢紬（しおざわつむぎ）は、<strong>新潟県南魚沼市（旧塩沢町）</strong>を中心に織られる絹織物です。この地方は古くからの織物産地で、麻織物（越後上布）の技術を絹に応用して塩沢紬が生まれたと伝えられ、その始まりは明和年間（1764～71年）頃とされています。1975年（昭和50年）に国の伝統的工芸品に指定されました。
            </p>
            <p>
              塩沢紬の最大の特徴は、<strong>蚊絣（かがすり）・十字絣・亀甲絣</strong>といった非常に細かい絣模様です。蚊絣は、たて・よこ各1本の絣糸でつくる微細な十字状の点描柄で、遠目には無地に近く見えるほど繊細です。落ち着いた地色に細かな絣が散る、上品で趣のある風合いが愛好されています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                塩沢紬の主な特徴
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    新潟県南魚沼市の塩沢地方で織られる絹織物
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    蚊絣・十字絣・亀甲絣の繊細な絣模様
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    麻織物（越後上布）の技術を絹に応用して発展
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    1975年に国の伝統的工芸品に指定
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    産地証明は塩沢織物工業協同組合の証紙で確認できる
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 塩沢紬と本塩沢の違い */}
      <section id="difference" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            塩沢紬と本塩沢の違い
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            塩沢地方の織物には「塩沢紬」と「本塩沢（塩沢お召）」があり、混同されがちですが、素材や織りの特徴が異なります。買取でも種類によって評価が変わるため、違いを整理しておきましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    比較項目
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    塩沢紬
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    本塩沢（塩沢お召）
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    素材
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    麻織物の技術を応用した絹織物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    たて糸・よこ糸ともに生糸
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    シボ（凹凸）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    絣模様が特徴
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    よこ糸に強撚糸を使い、湯もみでシボを出す
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    起源
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    明和年間（1764～71年）頃
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    寛文年間（1661～72年）に堀次郎将俊が考案
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    伝統的工芸品指定
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    1975年（昭和50年）
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    1976年（昭和51年）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">ポイント：</strong>
              本塩沢は、よこ糸の強撚糸が織り上げ後の湯もみで戻る力によって、生地表面に細かなシボが生まれます。さらりとした独特の風合いが特徴です。どちらも証紙で種類を確認できるため、査定時には証紙を一緒に提示しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】塩沢紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            塩沢紬・本塩沢の買取価格は、証紙の有無、作家物かどうか、状態によって大きく変わります。以下は一般的な傾向を整理したものです（具体的な金額は状態によって変動します）。
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
                    証紙付き・作家物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    高く評価されやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統工芸士・作家銘があるもの
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    証紙付き・一般
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    一定の評価が期待できる
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    産地証明があることが前提
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    反物（未仕立て）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    仕立て済みより評価されやすい傾向
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    シミ・折れの有無が確認される
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    証紙なし
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    評価が下がりやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    塩沢産であることの証明が難しい
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

      {/* 越後上布との違い */}
      <section id="echigo" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            越後上布との違いと重要無形文化財
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              塩沢紬についてよく誤解されるのが、「重要無形文化財かどうか」という点です。<strong>塩沢紬・本塩沢そのものは重要無形文化財ではなく、国の伝統的工芸品</strong>に指定されています。
            </p>
            <p>
              重要無形文化財に指定されているのは、同じ地域で作られる<strong>「越後上布・小千谷縮」</strong>です。1955年（昭和30年）に重要無形文化財に指定され、2009年にはユネスコ無形文化遺産にも登録されました。越後上布は苧麻（ちょま）を原料とする麻織物で、絹織物の塩沢紬とは別の織物です。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-2">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                混同しやすいポイントの整理
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>塩沢紬・本塩沢</strong>＝絹織物。国の伝統的工芸品
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>越後上布・小千谷縮</strong>＝苧麻の麻織物。重要無形文化財（1955年）・ユネスコ無形文化遺産（2009年）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    いずれも新潟県南魚沼地方を中心に生産され、産地が重なる
                  </span>
                </li>
              </ul>
            </div>
            <p>
              呉服店や買取サイトの一部には「塩沢紬＝重要無形文化財」と記載しているものもありますが、これは正確ではありません。査定や売却の際は、お手持ちの織物が塩沢紬・本塩沢なのか、越後上布なのかを証紙で確認することが大切です。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙 */}
      <section id="certificate" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            塩沢織物工業協同組合の証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              塩沢紬・本塩沢の買取では、<strong>塩沢織物工業協同組合</strong>が発行する証紙が査定額を大きく左右します。経済産業大臣指定の伝統的工芸品であることを示す<strong>伝統証紙</strong>のほか、産地を示す証紙などが付くのが一般的です。
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
                  <span>塩沢産であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>塩沢紬・本塩沢としての真贋が裏付けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>作家物であればさらに高めの評価が期待できる</span>
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
                  <span>塩沢産であることの証明が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>類似の絣織物との区別がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>評価が下がりやすくなる</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-5 leading-relaxed">
            証紙は反物の端、たとう紙の中、購入時の箱などに保管されていることが多いです。証紙の見方をより詳しく知りたい方は
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
            塩沢紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙を必ずセットで査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                塩沢織物工業協同組合の証紙や伝統証紙は、塩沢産であることを証明する最も重要な書類です。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。証紙の有無で評価が大きく変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：絣の織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                塩沢紬は産地や作家の知識がないと正しく評価できません。一般的なリサイクルショップでは安く買い取られてしまうことがあります。
                <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">紬の種類</Link>
                や絣の織物に詳しい着物専門の買取業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                塩沢紬は業者の販路や在庫状況によって査定額が変わります。最低でも3社に
                <Link href="/articles/free-appraisal/" className="text-[#6b4c8a] underline">無料査定</Link>
                を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                塩沢紬は正絹の織物のため、湿気やカビ、日焼けに弱い素材です。色褪せやほつれが進むと価値が下がります。たとう紙に包んで暗所で保管し、売ると決めたら早めに査定に出しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの塩沢紬・本塩沢のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。なお「塩沢紬」「本塩沢」のキーワード集計には、証紙付きの本物から証紙なし・小物・類似品まで幅広い出品が混在するため、価格帯は大きくばらつきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数（180日）</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">塩沢紬（全般）</td>
                  <td className="px-4 py-3">161件</td>
                  <td className="px-4 py-3 font-medium">約7,036円</td>
                  <td className="px-4 py-3 font-medium">38,700円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">塩沢紬 反物</td>
                  <td className="px-4 py-3">27件</td>
                  <td className="px-4 py-3 font-medium">約11,714円</td>
                  <td className="px-4 py-3 font-medium">38,700円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">本塩沢（全般）</td>
                  <td className="px-4 py-3">954件</td>
                  <td className="px-4 py-3 font-medium">約7,004円</td>
                  <td className="px-4 py-3 font-medium">83,500円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">本塩沢 反物</td>
                  <td className="px-4 py-3">17件</td>
                  <td className="px-4 py-3 font-medium">約13,315円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">35,700円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E5%A1%A9%E6%B2%A2%E7%B4%AC/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション 落札相場「塩沢紬」
            </a>
            ／
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%9C%AC%E5%A1%A9%E6%B2%A2/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              同「本塩沢」
            </a>
            （いずれも180日間の集計・2026年7月取得）
            <br />
            参考：
            <a
              href="https://aucfan.com/intro/q-~b1f6c2f4c4dd/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              オークファン（aucfan）
            </a>
            の集計では、直近30日の落札は「塩沢紬」22件・平均約4,274円、「本塩沢」158件・平均約4,156円と、集計期間・対象によって平均値は大きく変わります。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。数十円〜の極端な安値は証紙なし・状態不良・小物・入札不成立に近い例も含む“幅”の参考で、数万円台の高値は証紙付き・状態良好な反物などごく一部です。「塩沢紬」「本塩沢」のキーワード集計は両者や類似品が混在するため、金額は取得時点の目安であり、相場は時期・状態・証紙の有無で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・作家物の塩沢紬・本塩沢は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・本塩沢・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ塩沢紬・本塩沢でも、証紙の有無・作家物かどうか・保存状態・仕立ての状態によって査定額は大きく変わります。前述の実売データの“幅”も、多くはこうした状態差から生まれています。正絹の絣織物は湿気・カビ・色褪せの影響を受けやすく、状態の良し悪しが価値に直結します。
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
                  ["証紙あり（塩沢織物工業協同組合）", "◎ 大きくプラス", "塩沢織物工業協同組合の証紙や伝統証紙は、塩沢産であることを示す最も重要な手がかり。類似の絣織物と区別でき、評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "塩沢産かどうかの証明が難しく、類似の絣織物として慎重な査定になりがち。たとう紙・購入時の箱など他の手がかりが重要に。"],
                  ["本塩沢（塩沢お召・シボあり）", "○〜◎ 種類で評価", "よこ糸の強撚糸と湯もみによるシボが特徴の本塩沢は、さらりとした風合いで単衣の需要も。塩沢紬とは別物のため、証紙でどちらか確認して査定へ。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様は最も高くなりやすい状態。保管ジワのみなら特に有利です。"],
                  ["仕立て上がりか反物か", "○〜△", "未仕立ての反物はシミ・折れがなければ仕立て済みより評価されやすい傾向。仕立て上がりは状態とサイズの確認が中心になります。"],
                  ["シミ・カビ・色褪せ等難あり", "△ マイナス", "正絹は湿気によるカビ・シミ・色褪せ・ほつれが減額対象。難の程度・範囲で幅があります。自己クリーニングは避け、現状のまま査定へ。"],
                  ["作家物・伝統工芸士の作品", "◎ 高評価", "作家銘や伝統工芸士の作品は、証紙・落款とセットで確認できるとさらに高めの評価が期待できます。"],
                  ["サイズ・付属品", "○〜△", "裄・身丈が現代向けの大きめだと有利、小さいと下がる場合も。たとう紙・箱・購入時の書類などの付属品が揃っていると査定がスムーズです。"],
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
              塩沢紬・本塩沢を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              塩沢紬・本塩沢は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い塩沢紬・本塩沢は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と買取相場
              </h3>
              <p className="text-xs text-gray-600">
                大島紬・結城紬・牛首紬など主要な紬の種類と特徴を解説。
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
                重要無形文化財・結城紬の亀甲別買取相場を解説。
              </p>
            </Link>
            <Link
              href="/articles/niigata/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                新潟の着物買取
              </h3>
              <p className="text-xs text-gray-600">
                新潟で着物を売るなら。おすすめ業者と買取の流れを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            塩沢紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            塩沢紬・本塩沢の買取相場はあくまで目安です。証紙・作家・状態によって実際の査定額は大きく変わります。紬や絣の織物に詳しい査定員に無料査定を依頼して、お手持ちの塩沢紬の正確な価値を確認しましょう。
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
