import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取の相場一覧【2026年最新】種類別の買取価格まとめ",
  description:
    "着物買取の相場を種類別に徹底解説。振袖・訪問着・留袖・小紋・付け下げ・紬・帯・和装小物の買取価格一覧表と、高額買取になる条件・高く売るコツをまとめました。2026年最新の相場情報です。",
  alternates: {
    canonical: "https://kimono-kaitori-biyori.pages.dev/articles/kimono-market-price/",
  },
  openGraph: {
    title: "着物買取の相場一覧【2026年最新】種類別の買取価格まとめ",
    description:
      "着物買取の相場を種類別に徹底解説。振袖・訪問着・留袖・小紋・紬・帯の買取価格一覧と高く売るコツ。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/kimono-market-price/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の買取相場は平均いくらくらいですか？",
    answer:
      "着物の買取相場は種類や状態によって大きく異なります。一般的な着物で数百円〜数千円程度ですが、有名作家物や産地物（大島紬・結城紬など）は数万円〜数十万円になることもあります。振袖は5,000円〜10万円、訪問着は3,000円〜5万円が目安です。正絹で状態が良く、証紙付きであれば相場の上限に近づきます。",
  },
  {
    question: "古い着物でも買い取ってもらえますか？",
    answer:
      "はい、古い着物でも買取対象になることが多いです。ただし、経年劣化によるシミ・カビ・色あせがある場合は査定額が大幅に下がります。逆にアンティーク着物として価値が認められるケースもあり、大正〜昭和初期の状態の良い着物は高額になることもあります。まずは無料査定で確認することをおすすめします。",
  },
  {
    question: "証紙がないと買取価格は下がりますか？",
    answer:
      "証紙がない場合、買取価格は2〜5割ほど下がる傾向があります。証紙は着物の産地や品質を公的に証明するもので、特に大島紬・結城紬・加賀友禅などの高級着物では査定額に大きな差が出ます。証紙がなくても買取自体は可能ですが、できるだけ探して一緒に出すことをおすすめします。",
  },
  {
    question: "着物を高く売るベストなタイミングはいつですか？",
    answer:
      "着物の需要が高まる時期の1〜2ヶ月前が売り時です。具体的には、成人式前の10月〜12月（振袖）、卒業式前の1月〜2月（袴・訪問着）、七五三前の8月〜9月が狙い目です。また、着物市場全体の傾向として、早めに売るほど状態が良いため高値がつきやすくなります。",
  },
  {
    question: "着物と帯はセットで売った方が高くなりますか？",
    answer:
      "はい、着物と帯、さらに帯締め・帯揚げなどの和装小物をセットで査定に出すと、単品よりも高額になるケースが多いです。特にコーディネートが揃っている場合や、同じ作家・ブランドで統一されている場合は、セットとしての付加価値が認められやすくなります。不要な着物関連品はまとめて査定に出しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取の相場一覧【2026年最新】種類別の買取価格まとめ",
  description:
    "着物買取の相場を種類別に徹底解説。振袖・訪問着・留袖・小紋・紬・帯の買取価格一覧と高く売るコツ。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://kimono-kaitori-biyori.pages.dev/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kimono-kaitori-biyori.pages.dev/articles/kimono-market-price/",
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
      item: "https://kimono-kaitori-biyori.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "買取相場",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "相場一覧",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/kimono-market-price/",
    },
  ],
};

export default function KimonoMarketPricePage() {
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
          { label: "相場一覧" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              2026年最新版
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取の相場一覧</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                種類別の買取価格まとめ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              振袖・訪問着・留袖・小紋・紬・帯など、着物の種類ごとに買取相場を一覧表でわかりやすくまとめました。高額買取になる条件や高く売るコツも詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年4月15日
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
                  <a href="#overview" className="text-[#6b4c8a] hover:underline">
                    1. 着物買取の相場はどのくらい？全体像を把握
                  </a>
                </li>
                <li>
                  <a href="#price-table" className="text-[#6b4c8a] hover:underline">
                    2. 【種類別】着物の買取相場一覧表
                  </a>
                </li>
                <li>
                  <a href="#high-price-conditions" className="text-[#6b4c8a] hover:underline">
                    3. 高額買取になる条件
                  </a>
                </li>
                <li>
                  <a href="#low-price-conditions" className="text-[#6b4c8a] hover:underline">
                    4. 相場が下がる条件
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 着物を高く売る5つのコツ
                  </a>
                </li>
                <li>
                  <a href="#obi-komono" className="text-[#6b4c8a] hover:underline">
                    6. 帯・和装小物の買取相場
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

      {/* 全体像 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物買取の相場はどのくらい？全体像を把握
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物の買取相場は、種類・素材・状態・作家・産地によって大きく異なります。一般的な着物の場合、数百円〜数千円程度が中心ですが、有名作家の作品や人気産地の紬などは数万円〜数十万円の値がつくこともあります。
            </p>
            <p>
              特に重要なのは<strong>素材</strong>と<strong>状態</strong>です。正絹（しょうけん）の着物は化繊やウールと比べて圧倒的に高値がつきやすく、シミ・カビ・色あせがなく、保管状態が良好であれば相場の上限に近い価格が期待できます。
            </p>
            <p>
              また、<strong>証紙</strong>（産地証明書）の有無も査定額に大きく影響します。大島紬や結城紬、加賀友禅などの高級着物では、証紙があるかないかで買取価格が2倍以上変わることもあります。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">着物買取の相場を左右する主な要素</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>種類</strong>：振袖・訪問着は需要が高く、小紋・浴衣は低め</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>素材</strong>：正絹が最も高く、化繊・ウールは値がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>状態</strong>：未使用・美品は高額、シミ・汚れがあると大幅減額</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>作家・ブランド</strong>：人間国宝や有名作家の作品は数十万円以上も</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>産地</strong>：大島紬・結城紬・加賀友禅などは高い評価</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>証紙の有無</strong>：あれば産地・品質の証明になり査定額UP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場一覧表 */}
      <section id="price-table" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】着物の買取相場一覧表
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            以下は2026年時点での主な着物の種類別買取相場です。状態や素材、作家物かどうかによって大きく変動しますので、あくまで目安としてご参考ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold">高級品・作家物の相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td>
                  <td className="px-4 py-3">5,000円〜3万円</td>
                  <td className="px-4 py-3">3万円〜10万円以上</td>
                  <td className="px-4 py-3 text-gray-600">成人式用が中心。需要が安定</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3">3,000円〜3万円</td>
                  <td className="px-4 py-3">3万円〜5万円以上</td>
                  <td className="px-4 py-3 text-gray-600">フォーマルで汎用性が高い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">色留袖</td>
                  <td className="px-4 py-3">3,000円〜2万円</td>
                  <td className="px-4 py-3">2万円〜4万円以上</td>
                  <td className="px-4 py-3 text-gray-600">紋の数で格式が変わる</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">黒留袖</td>
                  <td className="px-4 py-3">1,000円〜1万円</td>
                  <td className="px-4 py-3">1万円〜3万円以上</td>
                  <td className="px-4 py-3 text-gray-600">需要が限定的でやや低め</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">小紋</td>
                  <td className="px-4 py-3">500円〜5,000円</td>
                  <td className="px-4 py-3">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-600">カジュアル着。作家物は高額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">付け下げ</td>
                  <td className="px-4 py-3">1,000円〜1万円</td>
                  <td className="px-4 py-3">1万円〜3万円</td>
                  <td className="px-4 py-3 text-gray-600">訪問着に次ぐフォーマル着</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大島紬</td>
                  <td className="px-4 py-3">1万円〜5万円</td>
                  <td className="px-4 py-3">5万円〜30万円以上</td>
                  <td className="px-4 py-3 text-gray-600">泥染め・都城が特に高額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">結城紬</td>
                  <td className="px-4 py-3">1万円〜5万円</td>
                  <td className="px-4 py-3">5万円〜50万円以上</td>
                  <td className="px-4 py-3 text-gray-600">本場結城紬は特に高い評価</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬（その他）</td>
                  <td className="px-4 py-3">1,000円〜1万円</td>
                  <td className="px-4 py-3">1万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-600">牛首紬・塩沢紬なども人気</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">色無地</td>
                  <td className="px-4 py-3">500円〜3,000円</td>
                  <td className="px-4 py-3">3,000円〜1万円</td>
                  <td className="px-4 py-3 text-gray-600">紋入りは需要が限られる</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">浴衣</td>
                  <td className="px-4 py-3">100円〜1,000円</td>
                  <td className="px-4 py-3">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-600 rounded-br-lg">有松絞りなどは高め</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は正絹素材の場合の目安です。化繊・ウール素材は大幅に安くなります。
          </p>
        </div>
      </section>

      {/* 高額買取になる条件 */}
      <section id="high-price-conditions" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            高額買取になる条件
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            同じ種類の着物でも、以下の条件に当てはまると買取価格が大きく上がります。特に「作家物」「証紙あり」「正絹」「状態良好」の4つが揃うと、相場の上限を超える高額査定が期待できます。
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                人間国宝・有名作家の作品
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久保田一竹（辻が花染め）、羽田登喜男（友禅）、志村ふくみ（紬織）などの人間国宝や、北村武資、森口華弘といった有名作家の作品は、数十万円〜百万円以上の買取価格がつくことがあります。落款（作家のサイン）が確認できれば査定額は大幅にアップします。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙（産地証明書）あり
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬の「本場大島紬」証紙、結城紬の「本場結城紬」証紙、加賀友禅の「加賀染振興協会」証紙など、公的な証紙があると産地と品質が保証されるため、査定額が大幅に上がります。証紙がないと同じ着物でも半額以下になることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                正絹（しょうけん）素材
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の素材として最も高く評価されるのが正絹（シルク100%）です。化繊やウール、木綿の着物は買取対象外の業者もありますが、正絹であれば幅広い業者で買取してもらえます。正絹かどうかは手触りや燃やした際の匂いで判別できますが、証紙で確認するのが確実です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が良好（未使用・美品）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着用回数が少なく、シミ・汚れ・カビ・色あせ・虫食いなどがない美品は高額査定が期待できます。特に「しつけ糸付き」の未使用品は新品同様と評価され、相場の上限に近い価格がつきやすくなります。たとう紙に入った状態で保管されていると好印象です。
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              そのほか高額になりやすい条件
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#6b4c8a]">
                    <th className="px-3 py-2 text-left font-semibold text-[#6b4c8a]">条件</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#6b4c8a]">詳細</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#6b4c8a]">影響度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">有名産地物</td>
                    <td className="px-3 py-2 text-gray-700">大島紬・結城紬・加賀友禅・京友禅など</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">非常に大きい</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">有名ブランド</td>
                    <td className="px-3 py-2 text-gray-700">千總・龍村美術織物・川島織物など</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">大きい</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">丈が長い</td>
                    <td className="px-3 py-2 text-gray-700">身丈160cm以上・裄丈67cm以上</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">中程度</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">流行の色柄</td>
                    <td className="px-3 py-2 text-gray-700">落ち着いた色味、上品な柄が人気</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">中程度</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">セット品</td>
                    <td className="px-3 py-2 text-gray-700">帯・帯締め・帯揚げとコーディネート一式</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">中程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 相場が下がる条件 */}
      <section id="low-price-conditions" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            相場が下がる条件
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            逆に、以下の条件に該当すると買取価格は相場より低くなります。場合によっては買取不可になることもありますので、事前に確認しましょう。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-red-300">
                      <th className="px-3 py-2 text-left font-semibold text-red-600">マイナス条件</th>
                      <th className="px-3 py-2 text-left font-semibold text-red-600">影響</th>
                      <th className="px-3 py-2 text-left font-semibold text-red-600">対策</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">シミ・汚れ</td>
                      <td className="px-3 py-2 text-gray-700">30〜70%減額</td>
                      <td className="px-3 py-2 text-gray-700">クリーニングは費用対効果を要検討</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">カビ・虫食い</td>
                      <td className="px-3 py-2 text-gray-700">50〜90%減額</td>
                      <td className="px-3 py-2 text-gray-700">防湿剤と定期的な風通しで予防</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">色あせ・退色</td>
                      <td className="px-3 py-2 text-gray-700">30〜50%減額</td>
                      <td className="px-3 py-2 text-gray-700">直射日光を避けて保管</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">化繊・ウール素材</td>
                      <td className="px-3 py-2 text-gray-700">大幅減額〜買取不可</td>
                      <td className="px-3 py-2 text-gray-700">正絹以外でも対応する業者を選ぶ</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">証紙なし</td>
                      <td className="px-3 py-2 text-gray-700">20〜50%減額</td>
                      <td className="px-3 py-2 text-gray-700">購入時の証紙を必ず保管しておく</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">サイズが小さい</td>
                      <td className="px-3 py-2 text-gray-700">10〜30%減額</td>
                      <td className="px-3 py-2 text-gray-700">仕立て直しの余地があれば評価される</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">流行遅れの柄</td>
                      <td className="px-3 py-2 text-gray-700">10〜30%減額</td>
                      <td className="px-3 py-2 text-gray-700">古典柄は影響が少ない</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
              <p className="text-sm leading-relaxed">
                <strong className="text-[#6b4c8a]">ポイント：</strong>
                状態が悪い着物でも、無料査定を行っている業者に依頼すれば費用はかかりません。「値段がつかないかも」と思っても、まずは複数業者に相談してみることが大切です。思わぬ価値が見つかることもあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：複数の業者に査定を依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の査定基準は業者によって異なります。同じ着物でも業者Aでは5,000円、業者Bでは2万円ということも珍しくありません。最低でも3社以上に無料査定を依頼し、最も高い金額を提示した業者に売ることが高額買取への近道です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：証紙・落款を必ず添える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙（産地証明書）や落款（作家のサイン）は、着物の価値を証明する最も重要な要素です。購入時のたとう紙の中や箱の中に入っていることが多いので、査定前に必ず探して一緒に提出しましょう。証紙があるだけで査定額が2倍以上になることもあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：帯・小物もセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物単体よりも、帯・帯締め・帯揚げ・草履・バッグなどのセットで出すと、コーディネートとしての付加価値が認められて査定額がアップします。使わない着物関連品があれば、まとめて査定に出すのがおすすめです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：保管状態に気を配る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                査定前に、着物の状態をできるだけ良くしておきましょう。たとう紙に包み、防湿剤と一緒に桐たんすで保管するのが理想です。売ると決めたら早めに査定に出すことも大切です。時間が経つほど状態が悪化するリスクがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：需要が高まる時期に売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の需要は季節によって変動します。振袖は成人式の2〜3ヶ月前（10月〜12月）、訪問着は結婚式シーズンの春・秋、袴は卒業式前の1月〜2月に需要が高まります。需要期の少し前に売ることで、通常より高い査定額が期待できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 帯・和装小物の相場 */}
      <section id="obi-komono" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            帯・和装小物の買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            着物だけでなく、帯や和装小物にも買取価値があります。特に袋帯や名古屋帯は単体でも数千円〜数万円の値がつくことがあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">品目</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold">高級品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">袋帯</td>
                  <td className="px-4 py-3">1,000円〜1万円</td>
                  <td className="px-4 py-3">1万円〜3万円以上</td>
                  <td className="px-4 py-3 text-gray-600">西陣織・川島織物は高額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">名古屋帯</td>
                  <td className="px-4 py-3">500円〜5,000円</td>
                  <td className="px-4 py-3">5,000円〜1万円以上</td>
                  <td className="px-4 py-3 text-gray-600">博多織が人気</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">丸帯</td>
                  <td className="px-4 py-3">5,000円〜2万円</td>
                  <td className="px-4 py-3">2万円〜5万円以上</td>
                  <td className="px-4 py-3 text-gray-600">アンティーク品に需要あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">帯締め・帯揚げ</td>
                  <td className="px-4 py-3">100円〜500円</td>
                  <td className="px-4 py-3">500円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-600">単体だと低額が多い</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold rounded-bl-lg">草履・バッグ</td>
                  <td className="px-4 py-3">100円〜1,000円</td>
                  <td className="px-4 py-3">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-600 rounded-br-lg">ブランド品は高め</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 帯や小物は着物とセットで出すことで、全体の査定額がアップする傾向があります。
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
                泥染め・藍大島・白大島など種類別の買取価格と高く売るコツを解説。
              </p>
            </Link>
            <Link
              href="/articles/furisode/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                振袖の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                成人式後に振袖を売る方法と、高価買取のコツをまとめました。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            着物の買取相場を調べたら、まずは無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            相場はあくまで目安です。実際の買取価格はお手持ちの着物の状態・作家・産地によって大きく変わります。まずは信頼できる業者に無料査定を依頼して、正確な買取価格を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
