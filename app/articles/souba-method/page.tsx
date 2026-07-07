import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "当サイトの相場データ調査方法｜実売（落札）データの集め方と注意点【2026年】",
  description:
    "当サイトが掲載する着物の「実売データ（公開オークションの落札相場）」の集め方・出典・更新方針を公開しています。実売価格と買取価格の違い、査定額を保証しない理由まで、透明性をもって解説します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/souba-method/" },
  openGraph: {
    title: "当サイトの相場データ調査方法｜実売（落札）データの集め方と注意点",
    description:
      "着物の実売データ（公開オークションの落札相場）の集め方・出典・更新方針・注意点を公開。",
    url: "https://kimonokaitori-biyori.com/articles/souba-method/",
    type: "article",
  },
};

const dataPages = [
  { name: "大島紬", href: "/articles/oshima-tsumugi/" },
  { name: "結城紬", href: "/articles/yuki-tsumugi/" },
  { name: "加賀友禅", href: "/articles/kaga-yuzen/" },
  { name: "西陣織（帯）", href: "/articles/nishijin-ori/" },
  { name: "牛首紬", href: "/articles/ushikubi-tsumugi/" },
  { name: "振袖", href: "/articles/furisode/" },
  { name: "京友禅", href: "/articles/kyo-yuzen/" },
  { name: "訪問着", href: "/articles/houmongi/" },
  { name: "袋帯", href: "/articles/fukuro-obi/" },
  { name: "留袖（黒留袖・色留袖）", href: "/articles/tomesode/" },
  { name: "色無地", href: "/articles/iromuji/" },
  { name: "米沢織（置賜紬）", href: "/articles/yonezawa-ori/" },
  { name: "丹後ちりめん", href: "/articles/tango-chirimen/" },
  { name: "越後上布", href: "/articles/echigo-jofu/" },
  { name: "紅型（びんがた）", href: "/articles/bingata/" },
  { name: "伊予絣", href: "/articles/iyo-gasuri/" },
  { name: "宮古上布", href: "/articles/miyako-jofu/" },
  { name: "塩沢紬・本塩沢", href: "/articles/shiozawa-tsumugi/" },
  { name: "江戸小紋", href: "/articles/edo-komon/" },
  { name: "天蚕紬", href: "/articles/tensan-tsumugi/" },
  { name: "黄八丈（本場黄八丈）", href: "/articles/honba-kihachijo/" },
  { name: "阿波藍染", href: "/articles/awa-aizome/" },
  { name: "小千谷縮", href: "/articles/ojiya-chijimi/" },
  { name: "秩父銘仙", href: "/articles/chichibu-meisen/" },
  { name: "首里織", href: "/articles/shuri-ori/" },
  { name: "桐生織（帯）", href: "/articles/kiryu-ori/" },
  { name: "博多織（帯）", href: "/articles/hakata-ori/" },
  { name: "久留米絣", href: "/articles/kurume-gasuri/" },
];

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "相場データの調査方法", item: "https://kimonokaitori-biyori.com/articles/souba-method/" },
  ],
};

export default function SoubaMethodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <Breadcrumb
        items={[
          { label: "買取相場", href: "/articles/" },
          { label: "相場データの調査方法" },
        ]}
      />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
            データの透明性について
          </span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-gradient">当サイトの相場データ調査方法</span>
            <span className="block mt-2 text-lg md:text-2xl text-gray-700">
              実売（落札）データの集め方と注意点
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            当サイトの各織物ページに掲載している「実売データ（公開オークションの落札相場）」について、どこから・どのように集め、どう扱っているかを公開します。
          </p>
          <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        <section id="why" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            なぜ「実売データ」を掲載するのか
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            着物の「買取相場」は、業者や状態・時期によって幅があり、断定が難しい情報です。そこで当サイトでは、買取相場の目安に加えて、<strong>実際に公開オークションで売買された「実売価格（落札相場）」</strong>を、出典つきで掲載しています。実際にいくらで取引が成立しているかという一次情報を示すことで、相場のリアルな水準を把握していただくことを目的としています。
          </p>
        </section>

        <section id="how" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            データの集め方
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            公開オークション（Yahoo!オークションの「落札相場」など、誰でも閲覧できる落札済み情報）から、次の項目のみを記録しています。
          </p>
          <ul className="space-y-2 text-sm md:text-base mb-4">
            <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5">&#9670;</span>品目（織物名・反物／着物／帯などの種別）</li>
            <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5">&#9670;</span>状態の区分（全般・証紙付き・仕立て上がり 等、検索カテゴリ単位）</li>
            <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5">&#9670;</span>落札価格（平均・最高など、各検索ページに表示される集計値）</li>
            <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5">&#9670;</span>出典URL（参照した落札相場ページ）</li>
            <li className="flex items-start gap-2"><span className="text-[#c9a76c] mt-0.5">&#9670;</span>取得日（いつ時点のデータか）</li>
          </ul>
          <div className="rounded-lg border border-[#e8ddd0] bg-[#faf7f2] p-4 md:p-5 text-sm text-gray-700 leading-relaxed">
            画像や商品説明文は転載せず、上記の数値と出典のみを記録しています。第三者サイトの推定値や、出典が確認できない数値は掲載しません。自動収集は各サイトの利用規約・法務上のリスクがあるため行わず、公開情報の手動確認にとどめています。
          </div>
        </section>

        <section id="diff" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            実売価格と買取価格の違い（重要）
          </h2>
          <div className="rounded-lg border border-[#e8b4b4] bg-[#fdf6f6] p-4 md:p-5 text-sm text-gray-700 leading-relaxed">
            <p className="mb-2 font-bold text-[#b5402f]">実売価格 ≠ 買取査定額</p>
            <p>
              実売データは「オークションで実際に売買された価格」です。買取業者の査定額（買取価格）とは異なり、一般に<strong>買取価格は実売価格より低くなります</strong>（業者の仕入れ・再販コストが含まれるため）。また、1円〜の極端な安値は、証紙なし・状態不良・入札不成立に近い例なども含むため、価格帯の「幅」の参考としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・作家により大きく変動し、<strong>査定額を保証するものではありません</strong>。
            </p>
          </div>
        </section>

        <section id="pages" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            実売データを掲載している織物
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            以下の各ページに、品目ごとの実売データ（落札相場）を出典・取得日つきで掲載しています。順次拡大しています。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {dataPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block rounded-lg border border-[#e8ddd0] bg-white p-3 text-center text-sm font-medium text-[#6b4c8a] hover:bg-[#faf8f5] transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>

        <section id="update" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            更新方針と免責
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            相場は変動するため、各ページには取得日を明記し、随時見直します。掲載数値はあくまで参考であり、特定の買取価格・査定額を保証するものではありません。実際の査定額は、複数の買取業者の無料査定でご確認ください。
          </p>
          <div className="text-center">
            <Link href="/ranking/" className="inline-block rounded-lg bg-[#6b4c8a] text-white px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
              証紙・作家物は複数社の相見積もりが確実｜おすすめ買取ランキング
            </Link>
          </div>
        </section>
      </article>
      <SoubaNote />
    </>
  );
}
