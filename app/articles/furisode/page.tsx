import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "振袖の買取相場｜成人式後に売る方法と高価買取のコツ",
  description:
    "振袖の買取相場を徹底解説。一般品5,000〜3万円、ブランド品3〜10万円、作家物10万円超の価格目安と、成人式後の売り時・保管状態の影響・帯セットで高額になるコツを紹介します。",
  alternates: {
    canonical: "https://kimono-kaitori-biyori.pages.dev/articles/furisode/",
  },
  openGraph: {
    title: "振袖の買取相場｜成人式後に売る方法と高価買取のコツ",
    description:
      "振袖の買取相場と成人式後に高く売る方法を解説。ブランド品・作家物の価格目安も。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/furisode/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "成人式で1回着ただけの振袖はいくらで売れますか？",
    answer:
      "成人式で1回着用した振袖の買取相場は、一般的なものであれば5,000円〜3万円程度です。ブランド品であれば3万円〜10万円、有名作家物であれば10万円以上になることもあります。1回着用で状態が良ければ「美品」として高い評価を受けやすく、特にしつけ糸が一部残っているような状態であれば相場の上限に近い査定が期待できます。",
  },
  {
    question: "振袖はいつ売るのが一番高く売れますか？",
    answer:
      "振袖は成人式の2〜3ヶ月前、つまり10月〜12月頃に需要が最も高まるため、この時期に売るのがベストです。成人式直後の1〜3月は売りに出す人が多いため供給過多になりやすく、やや価格が下がる傾向があります。ただし、成人式後にすぐ売ることで状態の良さをアピールでき、結果的に高値がつくケースもあります。時期を問わず、早めに売ることが大切です。",
  },
  {
    question: "レンタルではなく購入した振袖は高く売れますか？",
    answer:
      "はい、購入した振袖はレンタル品（レンタル落ち）よりも高く売れる傾向があります。レンタル品は複数回着用されているため状態が良くないことが多いですが、自分で購入したものは着用回数が少なく状態が良いケースが多いためです。ただし、購入品でも状態が悪ければ査定額は下がりますので、保管方法に注意しましょう。",
  },
  {
    question: "振袖の買取で帯や小物もセットにした方がいいですか？",
    answer:
      "はい、振袖用の帯（袋帯）や小物（帯締め・帯揚げ・草履・バッグ・髪飾りなど）をセットで出すと、トータルの買取額がアップする可能性が高いです。特にコーディネートが揃った状態で出せば、セットとしての付加価値が認められます。帯単体でも1,000円〜3万円の値がつくことがあるため、処分するくらいなら一緒に査定に出しましょう。",
  },
  {
    question: "母や祖母の振袖でも買い取ってもらえますか？",
    answer:
      "はい、お母様やお祖母様の振袖でも買取対象になります。特に昭和後期〜平成初期の振袖は、クラシックな柄が再評価されて人気が出ているものもあります。ただし、経年劣化によるシミ・カビ・色あせがある場合は査定額が大幅に下がります。保管状態を確認のうえ、まずは無料査定に出してみることをおすすめします。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "振袖の買取相場｜成人式後に売る方法と高価買取のコツ",
  description:
    "振袖の買取相場と成人式後に高く売る方法を解説。ブランド品・作家物の価格目安も。",
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
    "@id": "https://kimono-kaitori-biyori.pages.dev/articles/furisode/",
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
      name: "振袖",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/furisode/",
    },
  ],
};

export default function FurisodePage() {
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
          { label: "振袖" },
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
              <span className="text-gradient">振袖の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                成人式後に売る方法と高価買取のコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              成人式で着た振袖、そのままタンスに眠っていませんか？振袖は着物の中でも需要が高く、状態が良ければ高額買取が期待できます。種類別の買取相場から高く売るコツまで徹底解説します。
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
                  <a href="#price-overview" className="text-[#6b4c8a] hover:underline">
                    1. 振袖の買取相場【ランク別一覧】
                  </a>
                </li>
                <li>
                  <a href="#brand-price" className="text-[#6b4c8a] hover:underline">
                    2. ブランド・作家別の買取価格
                  </a>
                </li>
                <li>
                  <a href="#timing" className="text-[#6b4c8a] hover:underline">
                    3. 成人式後の売り時はいつ？
                  </a>
                </li>
                <li>
                  <a href="#condition" className="text-[#6b4c8a] hover:underline">
                    4. 保管状態が査定額に与える影響
                  </a>
                </li>
                <li>
                  <a href="#set" className="text-[#6b4c8a] hover:underline">
                    5. 帯・小物セットで高額買取に
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 振袖を高く売る5つのコツ
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

      {/* 買取相場ランク別一覧 */}
      <section id="price-overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            振袖の買取相場【ランク別一覧】
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            振袖の買取相場は、ブランド・素材・状態によって大きく3つのランクに分かれます。以下の一覧表で、お手持ちの振袖がどのランクに該当するか確認してみましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">ランク</th>
                  <th className="px-4 py-3 text-left font-semibold">買取相場</th>
                  <th className="px-4 py-3 text-left font-semibold">該当する振袖</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">高額ランク</td>
                  <td className="px-4 py-3 font-semibold">10万円〜50万円以上</td>
                  <td className="px-4 py-3 text-gray-700">人間国宝・有名作家物</td>
                  <td className="px-4 py-3 text-gray-700">久保田一竹、羽田登喜男、千總の手描き友禅</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-bold text-[#6b4c8a]">中額ランク</td>
                  <td className="px-4 py-3 font-semibold">3万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">有名ブランド品・正絹美品</td>
                  <td className="px-4 py-3 text-gray-700">きもの松葉、一蔵、京友禅の振袖</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-bold text-gray-500 rounded-bl-lg">一般ランク</td>
                  <td className="px-4 py-3 font-semibold">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">一般的な正絹振袖</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">量産品、セット購入品など</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 化繊（ポリエステル）の振袖は買取対象外の業者が多く、値がつかないケースがほとんどです。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">一般品（5,000円〜3万円）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                呉服店やショッピングモールで購入した一般的な正絹の振袖が該当します。購入価格は20万円〜40万円程度のものが多いですが、中古市場では需要と供給のバランスから買取価格は購入時の5〜15%程度になるのが一般的です。ただし、状態が良く、流行りの柄であれば3万円に近い金額が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">ブランド品（3万円〜10万円）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                有名呉服ブランドや老舗の振袖は、ブランド力による付加価値が認められ、一般品より高額で買い取られます。特に京友禅の老舗「千總」「龍村美術織物」の振袖は人気が高く、状態が良ければ10万円に近い査定額がつくこともあります。購入時の価格帯は50万円〜100万円程度のものが中心です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">作家物（10万円〜50万円以上）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                人間国宝や著名な友禅作家が手がけた振袖は、芸術品としての価値が認められ、数十万円以上の買取価格がつきます。落款（作家のサイン）や証紙があれば、さらに高額査定が期待できます。購入時100万円以上の振袖が対象で、特に手描き友禅や総絞りの振袖は高い評価を受けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ブランド・作家別 */}
      <section id="brand-price" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            ブランド・作家別の買取価格
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            振袖はブランドや作家によって買取価格が大きく変わります。以下に代表的なブランド・作家の買取価格の目安をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">ブランド・作家</th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">久保田一竹（辻が花）</td>
                  <td className="px-4 py-3 text-gray-700">人間国宝級。辻が花染めの第一人者</td>
                  <td className="px-4 py-3 font-medium">30万円〜100万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">千總</td>
                  <td className="px-4 py-3 text-gray-700">京友禅の老舗。460年以上の歴史</td>
                  <td className="px-4 py-3 font-medium">5万円〜20万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">羽田登喜男</td>
                  <td className="px-4 py-3 text-gray-700">人間国宝。鴛鴦の柄で知られる友禅作家</td>
                  <td className="px-4 py-3 font-medium">20万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">藤娘きぬたや</td>
                  <td className="px-4 py-3 text-gray-700">総絞りの名門ブランド</td>
                  <td className="px-4 py-3 font-medium">10万円〜30万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京都きもの友禅</td>
                  <td className="px-4 py-3 text-gray-700">全国展開する振袖専門チェーン</td>
                  <td className="px-4 py-3 font-medium">5,000円〜3万円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">一般的な呉服店購入品</td>
                  <td className="px-4 py-3 text-gray-700">量産品やセット販売の振袖</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">3,000円〜2万円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 成人式後の売り時 */}
      <section id="timing" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            成人式後の売り時はいつ？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              成人式が終わった後、「もう着ることはないかも」と思いつつも、なかなか手放せずにタンスに眠らせたままにしている方は多いのではないでしょうか。しかし、振袖は時間が経つほど状態が悪化し、流行も変わるため、<strong>売ると決めたらなるべく早く行動する</strong>ことが大切です。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">時期</th>
                  <th className="px-4 py-3 text-left font-semibold">需要</th>
                  <th className="px-4 py-3 text-left font-semibold">供給</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">おすすめ度</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">10月〜12月</td>
                  <td className="px-4 py-3 text-gray-700">非常に高い（成人式準備期間）</td>
                  <td className="px-4 py-3 text-gray-700">少ない</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">最もおすすめ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">1月〜3月</td>
                  <td className="px-4 py-3 text-gray-700">やや高い（成人式直後・卒業式需要）</td>
                  <td className="px-4 py-3 text-gray-700">多い（売り手が増える）</td>
                  <td className="px-4 py-3 font-bold text-[#6b4c8a]">おすすめ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">4月〜6月</td>
                  <td className="px-4 py-3 text-gray-700">普通</td>
                  <td className="px-4 py-3 text-gray-700">やや多い</td>
                  <td className="px-4 py-3 font-bold text-gray-500">普通</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">7月〜9月</td>
                  <td className="px-4 py-3 text-gray-700">やや低い（夏場は需要減）</td>
                  <td className="px-4 py-3 text-gray-700">少ない</td>
                  <td className="px-4 py-3 font-bold text-gray-500 rounded-br-lg">やや不利</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">重要：</strong>
              需要の高い10月〜12月に売るのがベストですが、最も重要なのは「振袖の状態が良いうちに売る」ことです。何年もタンスに保管している間にシミやカビが発生するリスクがあり、状態が悪化すれば買取価格は大きく下がります。売ると決めたら、時期を問わず早めに査定に出すことをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* 保管状態の影響 */}
      <section id="condition" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            保管状態が査定額に与える影響
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            振袖の買取価格は、保管状態によって大きく変動します。同じ振袖でも、状態次第で数万円の差がつくことがあります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">状態</th>
                  <th className="px-4 py-3 text-left font-semibold">査定への影響</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">想定される減額率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-green-600">未使用・しつけ糸付き</td>
                  <td className="px-4 py-3 text-gray-700">最高評価。相場の上限に近い価格</td>
                  <td className="px-4 py-3 font-medium">減額なし</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-green-600">着用1〜2回・美品</td>
                  <td className="px-4 py-3 text-gray-700">高評価。シミ・汚れなしが条件</td>
                  <td className="px-4 py-3 font-medium">5〜10%減額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#c9a76c]">数回着用・小さなシミあり</td>
                  <td className="px-4 py-3 text-gray-700">中程度の評価。シミの場所と大きさによる</td>
                  <td className="px-4 py-3 font-medium">20〜40%減額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-red-500">目立つシミ・汚れあり</td>
                  <td className="px-4 py-3 text-gray-700">大幅減額。クリーニング費用分が差し引かれる</td>
                  <td className="px-4 py-3 font-medium">40〜70%減額</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-red-500 rounded-bl-lg">カビ・虫食い・色あせ</td>
                  <td className="px-4 py-3 text-gray-700">大幅減額〜買取不可の可能性</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">70〜100%減額</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-green-600 mb-3">良い保管方法</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>たとう紙に包んで桐たんすに保管</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>防湿剤（シリカゲル）を一緒に入れる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>年に1〜2回、風通しの良い日陰で虫干し</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>直射日光を避け、温度・湿度を一定に</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">避けるべき保管方法</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>ビニール袋や密閉容器での長期保管</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>湿度の高い場所（押入れの奥など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>防虫剤の直接接触（変色の原因に）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>畳んだまま何年も放置する</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 帯・小物セット */}
      <section id="set" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            帯・小物セットで高額買取に
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              振袖を購入する際、多くの方が帯・帯締め・帯揚げ・草履・バッグなどをセットで購入しています。これらを<strong>一式まとめて査定に出す</strong>ことで、単品で売るよりも高額買取が期待できます。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">品目</th>
                  <th className="px-4 py-3 text-left font-semibold">単体の買取相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">セットにした場合の効果</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">袋帯</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">振袖とのコーディネートで付加価値UP</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">帯締め</td>
                  <td className="px-4 py-3 text-gray-700">100円〜1,000円</td>
                  <td className="px-4 py-3 text-gray-700">単体では低額だがセットで加算される</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">帯揚げ</td>
                  <td className="px-4 py-3 text-gray-700">100円〜500円</td>
                  <td className="px-4 py-3 text-gray-700">単体では低額だがセットで加算される</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">草履・バッグ</td>
                  <td className="px-4 py-3 text-gray-700">500円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-700">草履バッグセットは需要あり</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold rounded-bl-lg">重ね衿・半衿</td>
                  <td className="px-4 py-3 text-gray-700">100円〜300円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">小物としてまとめて評価される</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">具体例：</strong>
              振袖（一般品）単体で1万円の査定の場合、袋帯（5,000円）＋帯締め（300円）＋帯揚げ（200円）＋草履バッグ（1,500円）をセットにすると合計1万7,000円ですが、セットのコーディネート価値が加算されて2万円前後になるケースがあります。単品合計よりも2〜3割アップする可能性があります。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            振袖を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：着物専門の買取業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                リサイクルショップや総合買取店では、振袖の価値を正しく評価できない場合があります。着物に精通した専門の査定員がいる業者に依頼しましょう。作家物やブランド品の場合、専門業者と一般業者で数万円の差がつくことも珍しくありません。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：複数業者で比較する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                1社だけの査定では適正価格がわかりません。最低でも3社以上に無料査定を依頼し、最も高い金額を提示した業者に売りましょう。出張買取や宅配買取を利用すれば、手間をかけずに複数社の査定を受けることができます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：証紙・たとう紙・箱を揃える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                購入時の証紙、たとう紙、箱、購入証明書（レシート・保証書）があれば必ず添えましょう。特に作家物やブランド品の場合、これらの付属品の有無で査定額が大きく変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：セット品はまとめて出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                振袖と一緒に購入した帯・小物一式をまとめて出しましょう。コーディネートが揃った状態で出すことで、単品合計より高い査定額がつくケースが多いです。使わない和装小物もまとめて査定してもらいましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                振袖は時間が経つほど状態が悪化するリスクがあり、流行の変化によっても価値が下がる可能性があります。「もう着ない」と決めたら、できるだけ早く査定に出すのが高額買取のポイントです。特に成人式で1回着たきりの場合は、状態が良いうちに売ることで最大限の価値を引き出せます。
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
              href="/articles/kimono-market-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取の相場一覧
              </h3>
              <p className="text-xs text-gray-600">
                振袖・訪問着・留袖・紬など種類別の買取価格をまとめた総合ガイド。
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
                訪問着・色留袖・黒留袖の買取価格と高く売れる条件を解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            振袖の買取相場を確認したら、無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            成人式で着た振袖、タンスに眠っていませんか？着物専門の買取業者なら無料で査定してもらえます。複数業者を比較して、最も高く買い取ってくれる業者を見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
