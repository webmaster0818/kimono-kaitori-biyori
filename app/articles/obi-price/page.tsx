import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "帯の買取相場｜袋帯・名古屋帯・丸帯の値段と高く売る方法",
  description:
    "帯の買取相場を種類別に解説。袋帯1,000〜3万円、名古屋帯500〜1万円、丸帯5,000〜5万円の価格目安。西陣織・博多織は高額に。帯単体vs着物セットの比較や保管方法も紹介。",
  alternates: {
    canonical: "https://kimono-kaitori-biyori.pages.dev/articles/obi-price/",
  },
  openGraph: {
    title: "帯の買取相場｜袋帯・名古屋帯・丸帯の値段と高く売る方法",
    description:
      "袋帯・名古屋帯・丸帯の買取相場と高く売る方法を解説。西陣織・博多織の高額買取情報も。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/obi-price/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "帯だけでも買い取ってもらえますか？",
    answer:
      "はい、帯だけでも買取対応している業者がほとんどです。特に袋帯や丸帯は単体でも数千円〜数万円の値がつくことがあります。名古屋帯や半幅帯は比較的低額になりやすいですが、西陣織や博多織のブランド品であれば高額査定が期待できます。ただし、着物とセットで出した方がトータルの買取額が上がるケースが多いです。",
  },
  {
    question: "西陣織の帯はいくらで売れますか？",
    answer:
      "西陣織の袋帯の場合、一般品で3,000円〜1万円、龍村美術織物や川島織物など有名ブランドの作品で1万円〜5万円以上の買取相場です。人間国宝や有名作家の作品はさらに高額になり、10万円以上の買取実績もあります。証紙や落款の有無が査定額に大きく影響しますので、必ず確認しましょう。",
  },
  {
    question: "博多織の帯の買取相場はどのくらいですか？",
    answer:
      "博多織の帯は、名古屋帯で1,000円〜5,000円、袋帯で3,000円〜1万5,000円程度が一般的な相場です。「献上柄」の博多帯は定番人気があり、状態が良ければ相場の上限に近い価格が期待できます。本場筑前博多織の証紙（博多織工業組合の金ラベル）があればさらに高評価です。",
  },
  {
    question: "帯の状態が悪くても買い取ってもらえますか？",
    answer:
      "帯の状態によります。軽いシワや経年による多少の色あせ程度であれば買取対象になることが多いです。しかし、大きなシミ・カビ・虫食い・ほつれがある場合は大幅な減額か買取不可になることがあります。特にカビは帯の素材を傷めるため、早めに査定に出すことが大切です。状態が気になる場合は、まず無料査定で確認してみましょう。",
  },
  {
    question: "帯と着物はセットで売った方がいいですか？",
    answer:
      "はい、帯と着物をセットで査定に出すと、コーディネートとしての付加価値が認められ、単品合計より高い買取額になるケースが多いです。特に同じブランドや作家の着物と帯の組み合わせは高く評価されます。着物を手放す際は、合わせていた帯や帯締め・帯揚げなどの小物もまとめて出すことをおすすめします。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "帯の買取相場｜袋帯・名古屋帯・丸帯の値段と高く売る方法",
  description:
    "袋帯・名古屋帯・丸帯の買取相場と高く売る方法を解説。西陣織・博多織の高額買取情報も。",
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
    "@id": "https://kimono-kaitori-biyori.pages.dev/articles/obi-price/",
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
      name: "帯の買取相場",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/obi-price/",
    },
  ],
};

export default function ObiPricePage() {
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
          { label: "帯の買取相場" },
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
              <span className="text-gradient">帯の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                袋帯・名古屋帯・丸帯の値段と高く売る方法
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              帯は着物と並んで買取価値の高い和装品です。袋帯・名古屋帯・丸帯の種類別相場から、西陣織・博多織の高額買取情報、帯を高く売るための方法まで詳しく解説します。
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
                  <a href="#price-table" className="text-[#6b4c8a] hover:underline">
                    1. 【種類別】帯の買取相場一覧
                  </a>
                </li>
                <li>
                  <a href="#fukuro-obi" className="text-[#6b4c8a] hover:underline">
                    2. 袋帯の買取相場と特徴
                  </a>
                </li>
                <li>
                  <a href="#nagoya-obi" className="text-[#6b4c8a] hover:underline">
                    3. 名古屋帯の買取相場と特徴
                  </a>
                </li>
                <li>
                  <a href="#maru-obi" className="text-[#6b4c8a] hover:underline">
                    4. 丸帯の買取相場と特徴
                  </a>
                </li>
                <li>
                  <a href="#brand" className="text-[#6b4c8a] hover:underline">
                    5. 西陣織・博多織は高額買取
                  </a>
                </li>
                <li>
                  <a href="#set-vs-single" className="text-[#6b4c8a] hover:underline">
                    6. 帯単体 vs 着物セットの買取比較
                  </a>
                </li>
                <li>
                  <a href="#storage" className="text-[#6b4c8a] hover:underline">
                    7. 帯の正しい保管方法
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    8. 帯を高く売る5つのコツ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    9. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 種類別一覧 */}
      <section id="price-table" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】帯の買取相場一覧
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            帯にはさまざまな種類があり、それぞれ買取相場が異なります。以下に2026年時点の主な帯の種類別買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">帯の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold">高級品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold">用途</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">需要</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">袋帯</td>
                  <td className="px-4 py-3">1,000円〜1万円</td>
                  <td className="px-4 py-3">1万円〜3万円以上</td>
                  <td className="px-4 py-3 text-gray-600">フォーマル〜セミフォーマル</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">高い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">名古屋帯</td>
                  <td className="px-4 py-3">500円〜5,000円</td>
                  <td className="px-4 py-3">5,000円〜1万円以上</td>
                  <td className="px-4 py-3 text-gray-600">カジュアル〜セミフォーマル</td>
                  <td className="px-4 py-3 font-bold text-[#6b4c8a]">中程度</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">丸帯</td>
                  <td className="px-4 py-3">5,000円〜2万円</td>
                  <td className="px-4 py-3">2万円〜5万円以上</td>
                  <td className="px-4 py-3 text-gray-600">最高格のフォーマル</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">高い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">半幅帯</td>
                  <td className="px-4 py-3">100円〜1,000円</td>
                  <td className="px-4 py-3">1,000円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-600">カジュアル・浴衣用</td>
                  <td className="px-4 py-3 font-bold text-gray-500">低い</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">角帯</td>
                  <td className="px-4 py-3">100円〜500円</td>
                  <td className="px-4 py-3">500円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-600">男性用</td>
                  <td className="px-4 py-3 font-bold text-gray-500 rounded-br-lg">低い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は正絹素材の場合の目安です。化繊素材は大幅に安くなります。
          </p>
        </div>
      </section>

      {/* 袋帯 */}
      <section id="fukuro-obi" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            袋帯の買取相場と特徴
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              袋帯は、結婚式・入学式・お茶会などフォーマルな場面で使われる帯です。表と裏が別々の生地で仕立てられており、二重太鼓に結ぶのが一般的です。帯の中でも<strong>最も需要が高く、買取価格も高め</strong>です。
            </p>
            <p>
              一般的な袋帯の買取相場は<strong>1,000円〜3万円</strong>ですが、西陣織の名門ブランドや人間国宝の作品は<strong>3万円〜10万円以上</strong>の値がつくこともあります。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">袋帯の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">買取相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">一般的な正絹袋帯</td>
                  <td className="px-4 py-3">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-700">量産品、呉服店のセット品など</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">西陣織の袋帯</td>
                  <td className="px-4 py-3">3,000円〜1万円</td>
                  <td className="px-4 py-3 text-gray-700">西陣織証紙付き。品質保証あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">龍村美術織物</td>
                  <td className="px-4 py-3">1万円〜5万円</td>
                  <td className="px-4 py-3 text-gray-700">最高級ブランド。美術品クラス</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">川島織物</td>
                  <td className="px-4 py-3">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">老舗の名門ブランド</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">人間国宝・作家物</td>
                  <td className="px-4 py-3">3万円〜10万円以上</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">北村武資、喜多川平朗など</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 名古屋帯 */}
      <section id="nagoya-obi" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            名古屋帯の買取相場と特徴
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              名古屋帯は、カジュアルからセミフォーマルまで幅広く使える帯です。袋帯より幅が狭く、一重太鼓に結ぶのが基本です。日常的に着物を着る方に人気があり、<strong>買取相場は500円〜1万円</strong>程度です。
            </p>
            <p>
              袋帯と比べると相場はやや低めですが、博多織や西陣織のブランド品、作家物の手描き名古屋帯は高額査定が期待できます。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">名古屋帯の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">買取相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">一般的な正絹名古屋帯</td>
                  <td className="px-4 py-3">500円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-700">量産品、カジュアル向け</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">博多織名古屋帯</td>
                  <td className="px-4 py-3">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-700">献上柄が定番人気</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">西陣織名古屋帯</td>
                  <td className="px-4 py-3">2,000円〜8,000円</td>
                  <td className="px-4 py-3 text-gray-700">織りの技術が高く評価される</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">手描き友禅名古屋帯</td>
                  <td className="px-4 py-3">3,000円〜1万円</td>
                  <td className="px-4 py-3 text-gray-700">一点物の手描き作品</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">作家物名古屋帯</td>
                  <td className="px-4 py-3">5,000円〜3万円以上</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">有名作家の落款付き</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 丸帯 */}
      <section id="maru-obi" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            丸帯の買取相場と特徴
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              丸帯は帯の中でも最も格式が高く、かつては花嫁衣装や最高礼装に使われていた帯です。現在は生産量が少なく、アンティーク品として<strong>コレクター需要が高い</strong>のが特徴です。
            </p>
            <p>
              丸帯の買取相場は<strong>5,000円〜5万円</strong>で、帯の中では最も高額です。特に大正〜昭和初期の状態の良い丸帯は、アンティーク品として高い評価を受けます。
            </p>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">丸帯が高く売れる理由</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span><strong>希少性</strong>：現在はほとんど生産されておらず、流通量が限られている</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span><strong>技術の高さ</strong>：表裏両面に柄が織り込まれており、非常に手間がかかる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span><strong>コレクター需要</strong>：アンティーク和装のコレクターに人気</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span><strong>素材の良さ</strong>：重厚な正絹で織られており、素材自体の価値が高い</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">丸帯の状態</th>
                  <th className="px-4 py-3 text-left font-semibold">買取相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-green-600">美品・状態良好</td>
                  <td className="px-4 py-3">2万円〜5万円以上</td>
                  <td className="px-4 py-3 text-gray-700">シミ・色あせなし。高額期待</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#c9a76c]">並品・多少の経年劣化</td>
                  <td className="px-4 py-3">5,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">軽いシミ・色あせあり</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-red-500 rounded-bl-lg">状態が悪い</td>
                  <td className="px-4 py-3">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">大きなシミ・虫食いあり</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 西陣織・博多織 */}
      <section id="brand" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            西陣織・博多織は高額買取
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              帯の産地ブランドとして最も知名度が高いのが<strong>西陣織</strong>（京都）と<strong>博多織</strong>（福岡）です。いずれも数百年の歴史を持つ伝統的な織物で、証紙付きの本物であれば高額買取が期待できます。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-lg">西陣織</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                京都の西陣地区で生産される高級織物。金糸・銀糸を使った豪華な柄が特徴で、フォーマルな袋帯の多くが西陣織です。「西陣織工業組合」発行の証紙が品質保証の証です。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#c9a76c]">
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">ブランド</th>
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">買取相場</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">龍村美術織物</td>
                      <td className="px-2 py-2">1万円〜5万円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">川島織物</td>
                      <td className="px-2 py-2">5,000円〜3万円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">となみ織物</td>
                      <td className="px-2 py-2">3,000円〜1万5,000円</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">一般的な西陣織</td>
                      <td className="px-2 py-2">1,000円〜8,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-lg">博多織</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                福岡県博多で生産される織物。しっかりとした締め心地が特徴で、「献上柄」（独鈷と華皿の柄）が定番です。「本場筑前博多織」の証紙（金・銀・紫ラベル）が品質の証です。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#c9a76c]">
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">種類</th>
                      <th className="px-2 py-2 text-left font-semibold text-[#6b4c8a]">買取相場</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">金ラベル（最高級）</td>
                      <td className="px-2 py-2">3,000円〜1万5,000円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">銀ラベル</td>
                      <td className="px-2 py-2">1,000円〜8,000円</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-2 py-2">紫ラベル</td>
                      <td className="px-2 py-2">500円〜3,000円</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">一般品</td>
                      <td className="px-2 py-2">300円〜2,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 単体vsセット */}
      <section id="set-vs-single" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            帯単体 vs 着物セットの買取比較
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            帯は単体でも買取可能ですが、着物とセットで出した方がトータルの買取額が高くなるケースが多いです。以下に具体的な比較をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">売り方</th>
                  <th className="px-4 py-3 text-left font-semibold">メリット</th>
                  <th className="px-4 py-3 text-left font-semibold">デメリット</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">期待できる買取額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">帯単体で売る</td>
                  <td className="px-4 py-3 text-gray-700">手軽。不要な帯だけ処分できる</td>
                  <td className="px-4 py-3 text-gray-700">セットより総額が低くなりがち</td>
                  <td className="px-4 py-3">帯の相場通り</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物とセットで売る</td>
                  <td className="px-4 py-3 text-gray-700">コーディネート付加価値で増額</td>
                  <td className="px-4 py-3 text-gray-700">着物も手放す必要がある</td>
                  <td className="px-4 py-3 font-medium text-[#c9a76c]">単品合計より2〜3割UP</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯＋小物セット</td>
                  <td className="px-4 py-3 text-gray-700">小物にも値段がつく</td>
                  <td className="px-4 py-3 text-gray-700">小物単体は低額</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">小物分がプラスされる</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">具体例：</strong>
              訪問着（単体査定1万5,000円）＋袋帯（単体査定5,000円）＝単品合計2万円のところ、セットで出すと2万5,000円〜2万8,000円になるケースがあります。コーディネートの統一感があるほどセット価値が高く評価されます。
            </p>
          </div>
        </div>
      </section>

      {/* 保管方法 */}
      <section id="storage" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            帯の正しい保管方法
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            帯の買取価格は保管状態に大きく左右されます。少しでも良い状態で査定に出すために、正しい保管方法を押さえておきましょう。
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-green-600 mb-3">正しい保管方法</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span><strong>たとう紙に包む</strong>：湿気を吸収し、帯を保護する。1〜2年ごとに交換</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span><strong>桐たんすに保管</strong>：桐の調湿効果でカビ・虫食いを防止</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span><strong>防湿剤を入れる</strong>：シリカゲルなど吸湿剤を一緒に保管</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span><strong>定期的に風通し</strong>：年に1〜2回、日陰で虫干しを行う</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span><strong>折りジワに注意</strong>：帯板を入れて平らに保管する</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">避けるべきこと</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span><strong>ビニール袋での保管</strong>：通気性がなく、カビの原因に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span><strong>直射日光</strong>：色あせ・退色の原因になる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span><strong>湿度の高い場所</strong>：押入れの奥や地下室は避ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span><strong>防虫剤の直接接触</strong>：変色や生地の傷みの原因に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span><strong>長期間の放置</strong>：定期的な状態確認が大切</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            帯を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：証紙を必ず添える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織の証紙、博多織のラベル（金・銀・紫）、その他産地証紙は帯の価値を証明する重要な書類です。たとう紙の中や購入時の箱を確認し、必ず帯と一緒に査定に出しましょう。証紙があるだけで買取価格が2倍以上になることもあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：着物専門の買取業者に依頼
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                帯の価値を正しく評価するには、西陣織や博多織のブランドを見分ける知識が必要です。リサイクルショップでは一律数百円の査定になることもありますが、着物専門の業者であれば数千円〜数万円の適正価格で評価してもらえます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：着物とセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物と帯をコーディネートで揃えてセットで出すと、単品合計よりも2〜3割高い買取額が期待できます。特にフォーマルな着物（訪問着・留袖・振袖）と合わせた袋帯はセット価値が高いです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：複数業者で相見積もり
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                帯の査定基準は業者によって異なります。特に高級ブランドの帯は、業者間で数千円〜数万円の差がつくことがあります。3社以上の無料査定を利用して、最も高い金額を提示した業者に売りましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                帯は時間が経つほどシミ・カビ・色あせのリスクが高まります。特に正絹の帯は湿気に弱いため、使わないと決めたら早めに査定に出すことが高額買取のポイントです。保管状態が悪化してからでは、数千円〜数万円の損失になることもあります。
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            帯の買取相場を確認したら、無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            帯の買取相場はあくまで目安です。ブランド・作家・状態によって実際の査定額は大きく異なります。着物専門の買取業者に無料査定を依頼して、お手持ちの帯の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
