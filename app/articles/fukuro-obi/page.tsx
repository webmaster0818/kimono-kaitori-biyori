import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】袋帯の買取相場｜種類・織りと高く売るコツ",
  description:
    "袋帯（ふくろおび）の買取相場を解説。フォーマル帯としての位置づけ、西陣織・佐賀錦・綴れなど織りの種類、織元・証紙・作家・素材・状態で決まる価値のポイント、Yahoo!オークションの実売落札データ、高く売るコツとFAQまで。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/fukuro-obi/",
  },
  openGraph: {
    title: "【2026年最新】袋帯の買取相場｜種類・織りと高く売るコツ",
    description:
      "袋帯の買取相場と高く売るコツを解説。織りの種類・証紙・作家など価値を決めるポイント、公開オークションの実売データも。",
    url: "https://kimonokaitori-biyori.com/articles/fukuro-obi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "袋帯と名古屋帯の違いは何ですか？",
    answer:
      "袋帯は長さが約4m20cm前後と長く、二重太鼓を結べるフォーマル向けの帯です。一方、名古屋帯は長さが約3m60cm前後と短く、一重太鼓で結ぶカジュアル〜セミフォーマル向けの帯です。袋帯は留袖・訪問着・色無地などの礼装に合わせるため格が高く、金銀糸を使った華やかなものが多いのが特徴です。買取市場でも一般に袋帯のほうが名古屋帯より高く評価される傾向があります。",
  },
  {
    question: "袋帯はどのくらいの値段で売れますか？",
    answer:
      "袋帯の買取価格は、織元・証紙・作家・素材・状態によって大きく変動するため一概には言えません。量産品や状態が良くないものは数百円〜数千円にとどまることがある一方、西陣織の有名織元・人間国宝や著名作家の作品・佐賀錦など手間のかかる織りで証紙が揃っているものは高く評価される傾向があります。正確な金額は実物を見てもらう無料査定で確認するのが確実です。",
  },
  {
    question: "証紙がない袋帯でも買い取ってもらえますか？",
    answer:
      "証紙がなくても買取自体は可能なことが多いですが、織元や産地を証明できないため、証紙がある場合に比べて評価が下がりやすくなります。とくに西陣織の「証紙番号」や博多織の金ラベルなどは織元・品質の裏付けになるため、見つかった場合は必ず一緒に査定に出しましょう。たとう紙・購入時の箱・落款（作家のサイン）なども価値の判断材料になります。",
  },
  {
    question: "袋帯を高く売るにはどうすればよいですか？",
    answer:
      "着物に詳しい専門の買取業者を選ぶこと、証紙・たとう紙・箱などの付属品を揃えること、複数業者で査定を比較すること、合わせていた着物や帯締め・帯揚げなどの小物とセットで出すことがポイントです。また、シミやカビが進行する前の状態が良いうちに査定に出すことも大切です。",
  },
  {
    question: "古い袋帯やアンティークの袋帯にも価値はありますか？",
    answer:
      "あります。古典柄の袋帯や、丸帯から仕立て直したような古いもの、希少な織りのアンティーク帯は、着物愛好家から一定の需要があります。ただし、経年によるシミ・金銀糸の変色・ヤケがあると評価は下がりやすくなります。価値の有無は状態や織りによって変わるため、処分する前にまず無料査定で確認することをおすすめします。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "【2026年最新】袋帯の買取相場｜種類・織りと高く売るコツ",
  description:
    "袋帯の買取相場と高く売るコツを解説。織りの種類・証紙・作家など価値を決めるポイント、公開オークションの実売データも。",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
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
    "@id": "https://kimonokaitori-biyori.com/articles/fukuro-obi/",
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
      name: "袋帯",
      item: "https://kimonokaitori-biyori.com/articles/fukuro-obi/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "袋帯の実売相場データ（公開オークション落札相場）", "description": "袋帯について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/2084005476/", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-08-24", "url": "https://kimonokaitori-biyori.com/articles/fukuro-obi/#auction-data", "isAccessibleForFree": true};

export default function FukuroObiPage() {
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
          { label: "袋帯" },
        ]}
      />

      {/* Hero */}
      <section
        className="py-12 md:py-16 section-primary-light"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.4)), url('/images/heroes/obi-price.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              2026年最新版
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">袋帯の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                種類・織りと高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              袋帯（ふくろおび）はフォーマルな装いに欠かせない格の高い帯です。西陣織や佐賀錦、綴れなど織りの種類は多彩で、織元・証紙・作家・素材・状態によって価値が大きく変わります。種類の見分け方から高く売るコツ、公開オークションの実売データまで解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年6月26日
            </p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
          <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
          <p>
            袋帯はフォーマル向けの格の高い帯で、名古屋帯より高く評価される傾向があります。買取価値は「織元・証紙・作家・素材・状態」で大きく変わり、西陣織の有名織元・佐賀錦・綴れ・人間国宝や著名作家の作品で証紙が揃ったものほど高評価です。具体的な金額は一律ではないため、証紙・付属品を揃えて複数業者の無料査定を比較するのが確実です。
          </p>
        </div>
      </div>

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
                    1. 袋帯とは？名古屋帯・フォーマル帯との違い
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 袋帯の種類（織りの種類）
                  </a>
                </li>
                <li>
                  <a href="#value" className="text-[#6b4c8a] hover:underline">
                    3. 袋帯の価値が決まる5つのポイント
                  </a>
                </li>
                <li>
                  <a href="#auction-data" className="text-[#6b4c8a] hover:underline">
                    4. 【実売データ】公開オークションの落札相場
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 袋帯を高く売る5つのコツ
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

      {/* 袋帯とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            袋帯とは？名古屋帯・フォーマル帯との違い
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              袋帯（ふくろおび）は、長さ約4m20cm前後・幅約31cm前後の格の高い帯で、<strong>二重太鼓</strong>を結べるのが特徴です。留袖・訪問着・色無地・付下げといったフォーマル〜セミフォーマルの着物に合わせる礼装用の帯として広く使われています。表地と裏地を縫い合わせて袋状に仕立てることが名前の由来です。
            </p>
            <p>
              かつて礼装の最高格には<strong>丸帯</strong>（表裏とも同じ柄に織られた重く豪華な帯）が使われていましたが、重く扱いにくいため、現在では軽量で実用的な袋帯が礼装の主流になっています。金銀糸を用いた華やかな柄行きのものが多く、フォーマルの場で映える帯です。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">帯の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">長さの目安</th>
                  <th className="px-4 py-3 text-left font-semibold">主な結び方</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">格・用途</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">袋帯</td>
                  <td className="px-4 py-3 text-gray-700">約4m20cm前後</td>
                  <td className="px-4 py-3 text-gray-700">二重太鼓</td>
                  <td className="px-4 py-3 text-gray-700">フォーマル（留袖・訪問着など）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">名古屋帯</td>
                  <td className="px-4 py-3 text-gray-700">約3m60cm前後</td>
                  <td className="px-4 py-3 text-gray-700">一重太鼓</td>
                  <td className="px-4 py-3 text-gray-700">カジュアル〜セミフォーマル</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">丸帯</td>
                  <td className="px-4 py-3 text-gray-700">約4m前後</td>
                  <td className="px-4 py-3 text-gray-700">二重太鼓など</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">最礼装（花嫁衣装・舞妓など）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 長さ・幅は一般的な目安です。仕立てや時代によって異なります。帯全般の相場は
            <Link href="/articles/obi-price/" className="text-[#6b4c8a] underline">帯の買取相場（袋帯・名古屋帯・丸帯）</Link>
            もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 種類（織りの種類） */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            袋帯の種類（織りの種類）
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            袋帯はどんな技法で織られているかによって雰囲気も評価も変わります。代表的な織りの種類を知っておくと、お手持ちの帯の特徴を把握しやすくなります。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">西陣織（にしじんおり）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                京都・西陣で織られる先染めの紋織物の総称で、袋帯の代表的な産地です。多彩な技法と精緻な柄行きが特徴で、有名織元の作品や証紙（西陣織工業組合の証紙番号）が揃っているものは高く評価される傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">佐賀錦（さがにしき）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                金銀箔を貼った和紙を細く裁断した経糸に、絹糸を緯糸として手織りする豪華な織物です。非常に手間がかかるため格が高く、礼装用の袋帯として珍重されます。手織りの良品は希少性から評価が高くなりやすい織りです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">綴れ織（つづれおり）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                爪先で緯糸を掻き寄せて模様を織り出す「爪掻本綴れ」に代表される高度な技法です。柄を一本一本織り込むため手間と技術を要し、フォーマルにも使える格の高い帯として知られます。本綴れの良品や有名作家の作品は高評価につながりやすい織りです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">博多織・その他の織り</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                博多織は福岡県を代表する絹織物で、独特の張りと締めやすさで知られます。献上柄の袋帯などフォーマルに使えるものもあります。このほか、唐織・佐波理綴・引箔など技法は多岐にわたり、織りの種類と織元・作家によって価値が変わります。
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ 各織りの相場は産地・織元・状態で変動します。西陣織の帯について詳しくは
            <Link href="/articles/nishijin-ori/" className="text-[#6b4c8a] underline">西陣織の買取相場</Link>
            、博多織については
            <Link href="/articles/hakata-ori/" className="text-[#6b4c8a] underline">博多織の買取相場</Link>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* 価値が決まるポイント */}
      <section id="value" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            袋帯の価値が決まる5つのポイント
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            袋帯の買取価格は一律ではなく、以下の要素の組み合わせで決まります。同じ「袋帯」でも、これらの条件によって評価は大きく変わります。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 織元・ブランド</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                どの織元・機屋で織られたかは評価の大きな要素です。西陣の有名織元など、品質に定評のある作り手のものは需要があり、高く評価されやすくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 証紙・落款の有無</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙は産地・織元・品質を裏付ける重要な証明です。西陣織の証紙番号や博多織の金ラベルなどが揃っていると、評価が上がりやすくなります。作家物の場合は落款（サイン）の有無も判断材料になります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 作家・伝統工芸</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                人間国宝や著名作家が手がけた帯、伝統的工芸品として認められた織りの帯は、芸術的・希少的価値が認められ高評価につながりやすくなります。作家名や工芸品の表示がわかる資料は一緒に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. 素材（正絹かどうか）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                正絹（絹100%）の帯は需要があり評価の対象になりやすい一方、ポリエステルなどの化繊の帯は買取対象外となる業者も多く、値がつきにくい傾向があります。金銀糸の質や箔の状態も評価に影響します。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. 状態</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                シミ・カビ・ヤケ・金銀糸の変色・ほつれなどがあると評価は下がります。とくに帯はカビや金銀糸の変色が起こりやすいため、状態が良いうちに査定に出すことが大切です。たとう紙や箱などの付属品が揃っていることもプラスに働きます。
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            証紙の見方について詳しくは
            <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">着物・帯の証紙ガイド</Link>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの袋帯のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed">
            以下は買取相場ではなく、公開オークション（Yahoo!オークション）で実際に売買された「実売価格」の集計です。リアルな取引価格帯の参考としてご覧ください。
          </p>
          <div className="bg-white border-2 border-[#6b4c8a] rounded-xl p-5 mb-6">
            <p className="font-bold text-[#6b4c8a] mb-2">2026年8月の最新集計（8月24日取得）</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div><span className="text-gray-500">落札件数（直近30日）</span><br /><span className="text-lg font-bold">8,293件</span></div>
              <div><span className="text-gray-500">平均落札価格</span><br /><span className="text-lg font-bold">約5,622円</span></div>
              <div><span className="text-gray-500">最高落札価格（過去約180日・単品）</span><br /><span className="text-lg font-bold">694,000円</span><br /><span className="text-xs text-gray-500">明綴れ手織 袋帯(未使用・単品)</span></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">出典: オークファン（aucfan.com）の袋帯落札相場ページ・Yahoo!オークション落札相場（2026年8月24日取得）。まとめ売りロットを除外した単品実測値です。以下の区分別テーブルは前回集計（取得日記載）です。</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">区分</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">平均落札価格</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">袋帯（全般）</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">約5,480円</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">798,800円</td>
                </tr>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">正絹 逸品</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">約4,217円</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">－</td>
                </tr>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">仕立て上がり</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">約5,053円</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">－</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/2084005476/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b4c8a] underline"
            >
              Yahoo!オークション「袋帯」落札相場
            </a>
            （2026年6月取得）。最高額は有名織元・作家物などの例で、平均は中古の安価な出品も多く含みます。
          </p>
          <div className="bg-[#fdf6f6] border border-[#e8b4b4] rounded-lg p-4 mt-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-[#b5402f] mb-1">※実売価格と買取価格の違い</p>
            上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。1円〜の極端な安値は証紙なし・状態不良・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。袋帯は正絹か否か・織元・作家・証紙・織りの種類・状態で価値が大きく変わります（西陣の有名織元・佐賀錦・本綴れ・作家物は高く、化繊や状態不良は安値も多い）。金額は取得時点のもので、相場は時期・状態により変動し、査定額を保証するものではありません。
          </div>
          <p className="text-xs text-gray-500 mt-3">
            本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年6月）。詳しくは
            <Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>
            をご覧ください。
          </p>
          <div className="mt-5">
            <Link href="/ranking/" className="text-[#6b4c8a] underline font-medium">
              証紙・作家物がそろうなら、複数社の相見積もり（おすすめランキング）で最も高い1社を選ぶのが確実です →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（織元・素材・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ袋帯でも、織元の証紙の有無・素材・格・保存状態によって査定額は大きく変わります。前述の実売データの“幅”の多くも、こうした条件の差から生まれています。下表のような条件で評価が上下します。
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
                  ["有名織元の証紙あり", "◎ 大きくプラス", "西陣織工業組合の証紙・織屋番号など、織元を裏付ける証紙があると品質・産地が明確になり評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "織元の特定や真贋の判別が難しくなり、慎重な査定になりがちです。たとう紙・箱・落款など他の手がかりが重要になります。"],
                  ["名門織元（川島織物・龍村美術織物など）", "◎ 別格", "実在の著名な織元の作品は別格の評価につながりやすい傾向です。証紙・落款で確認できると有利です。"],
                  ["全通柄（柄が全体に通る）", "○ 加点", "柄が帯全体に織り出された全通柄は、六通柄より手間がかかるぶん評価されやすい傾向があります。"],
                  ["金銀箔・佐賀錦など格の高い帯", "◎ 高評価", "礼装用として格の高いものは需要が安定しており、評価されやすい傾向です。"],
                  ["未使用・美品", "◎〜○ 高評価", "新品同様・着用の少ない美品は高くなりやすい状態です。保管ジワ程度なら特に有利です。"],
                  ["金銀箔のスレ・劣化・シミ・折りジワ", "△ マイナス", "箔のスレや変色、シミ、目立つ折りジワは減額対象になりやすい点です。自己クリーニングは避け、現状のまま査定へ。"],
                  ["正絹であること", "◎ 評価対象", "正絹（絹）の帯は評価の対象になりやすい一方、化繊・ポリエステルは正絹より大幅に評価が下がる傾向があります。"],
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

      {/* 高く売るコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            袋帯を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：着物・帯に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                リサイクルショップや総合買取店では、織元や織りの種類による価値を正しく評価できないことがあります。着物・帯に精通した査定員がいる専門業者に依頼することで、適正な評価が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：証紙・落款・付属品を揃える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                西陣織の証紙番号、博多織の金ラベル、作家の落款、たとう紙・箱・購入時の資料などが揃っていると、織元・作家・品質の裏付けになり評価が上がりやすくなります。見つかるものは必ず一緒に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：複数業者で査定を比較する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                帯の評価は業者によって差が出やすいため、1社だけでは適正価格がわかりません。最低でも3社以上に無料査定を依頼し、最も高い金額を提示した業者を選びましょう。出張買取や宅配買取を使えば手間を抑えて比較できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：合わせていた着物・小物とセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                袋帯だけでなく、合わせていた着物や帯締め・帯揚げなどの小物もまとめて出すと、コーディネートとしての付加価値が認められ、単品合計より高い評価につながるケースがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：状態が良いうちに早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                帯は保管中にカビ・シミ・金銀糸の変色が進みやすく、状態が悪化すると評価が下がります。「もう使わない」と決めたら、状態が良いうちに早めに査定に出すことが高評価のポイントです。
              </p>
            </div>
          </div>
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

      {/* 関連ページ */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/articles/obi-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                帯の買取相場（袋帯・名古屋帯・丸帯）
              </h3>
              <p className="text-xs text-gray-600">
                袋帯・名古屋帯・丸帯の種類別の買取相場と高く売る方法を総合解説。
              </p>
            </Link>
            <Link
              href="/articles/nishijin-ori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                西陣織の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                袋帯の代表的産地・西陣織の特徴と価値、証紙の見方を解説。
              </p>
            </Link>
            <Link
              href="/articles/certificate-guide/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物・帯の証紙ガイド
              </h3>
              <p className="text-xs text-gray-600">
                証紙の種類と見方を解説。証紙の有無で査定額が変わる理由とは。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            袋帯の価値を確認したら、無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            織元・証紙・作家・状態によって袋帯の価値は大きく変わります。着物・帯に詳しい専門業者なら無料で査定してもらえます。複数業者を比較して、最も高く買い取ってくれる業者を見つけましょう。
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
