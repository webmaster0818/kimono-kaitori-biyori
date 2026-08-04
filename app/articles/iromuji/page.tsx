import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】色無地の買取相場｜紋の格・価値と高く売るコツ",
  description:
    "色無地（いろむじ）の買取相場を解説。一つ紋・三つ紋・紋なしで変わる格、地紋・染め・白生地の作家性・証紙・状態など価値を左右するポイントと、慶弔両用・茶道での需要、高く売るコツ、公開オークションの実売データまで紹介します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/iromuji/",
  },
  openGraph: {
    title: "【2026年最新】色無地の買取相場｜紋の格・価値と高く売るコツ",
    description:
      "色無地の買取相場と価値を左右するポイント、高く売るコツを解説。公開オークションの実売データも掲載。",
    url: "https://kimonokaitori-biyori.com/articles/iromuji/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "色無地はどのくらいの価格で売れますか？",
    answer:
      "色無地の買取価格は、正絹か化繊か・地紋の有無・染めの質・紋の有無・白生地の作家性や産地・状態によって大きく変動するため、一概に「いくら」とは言えません。正絹で状態がよく、地紋のある上質な生地や有名産地の白生地に染められたものは評価されやすく、反対にポリエステルなどの化繊や、シミ・カビ・色あせがあるものは値がつきにくくなります。公開オークションでの実売価格は数百円〜数万円と幅が広く、上質な正絹の良品はさらに高くなることもあります。正確な金額は複数の買取業者で無料査定を受けて比較するのが確実です。",
  },
  {
    question: "紋が入っていると高く売れますか？",
    answer:
      "紋は色無地の「格」を決める要素で、紋なし→一つ紋→三つ紋の順に格が上がります。三つ紋は準礼装として格が高い一方で、家紋が入っているぶん着る人が限られ、中古市場では買い手がつきにくい側面もあります。実用面では、一つ紋の色無地が慶弔両用で使い回しやすく需要が安定する傾向です。家紋を消したり入れ替えたりする「紋入れ替え」「紋消し」には費用がかかるため、紋の数や入れ方が必ずしも査定額の高さに直結するわけではありません。",
  },
  {
    question: "地紋がない色無地でも価値はありますか？",
    answer:
      "地紋（生地に織り出された模様）がない無地の生地でも買取は可能ですが、地紋のある生地（紋意匠・綸子・緞子など）のほうが上質とされ、評価が上がりやすい傾向があります。地紋には吉祥文様や慶弔どちらにも使える有職文様などがあり、用途の広さも価値に影響します。地紋がない場合でも、正絹で状態がよく、染めの色や質が良ければ評価される可能性があります。",
  },
  {
    question: "証紙や落款がないと買い取ってもらえませんか？",
    answer:
      "証紙や落款がなくても買取自体は可能です。ただし、白生地の産地や品質を証明する証紙、染め作家のサインである落款があると、品質や価値の裏付けとなり査定額が上がりやすくなります。購入時のたとう紙・証紙・箱などが残っている場合は、必ず一緒に査定へ出しましょう。付属品がない場合でも、正絹で状態がよければ評価される可能性があります。",
  },
  {
    question: "色無地を高く売るにはどうすればよいですか？",
    answer:
      "高く売るには、(1)着物専門の買取業者を選ぶ、(2)複数業者で査定を比較する、(3)証紙・落款・たとう紙などの付属品を揃える、(4)帯や和装小物もセットで出す、(5)状態が良いうちに早めに売る、の5点が重要です。特に、専門の査定員がいる業者と一般のリサイクル店では評価が大きく異なることがあるため、相見積もりで最も高い業者を選ぶのが確実です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "【2026年最新】色無地の買取相場｜紋の格・価値と高く売るコツ",
  description:
    "色無地の買取相場と価値を左右するポイント、高く売るコツを解説。公開オークションの実売データも掲載。",
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
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
    "@id": "https://kimonokaitori-biyori.com/articles/iromuji/",
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
      name: "色無地",
      item: "https://kimonokaitori-biyori.com/articles/iromuji/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "色無地の実売相場データ（公開オークション落札相場）", "description": "色無地について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E7%9D%80%E7%89%A9%20%E8%89%B2%E7%84%A1%E5%9C%B0/0/", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-06-27", "url": "https://kimonokaitori-biyori.com/articles/iromuji/#auction-data", "isAccessibleForFree": true};

export default function IromujiPage() {
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
          { label: "色無地" },
        ]}
      />

      {/* Hero */}
      <section
        className="py-12 md:py-16 section-primary-light"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.4)), url('/images/heroes/houmongi-tomesode.jpg')",
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
              <span className="text-gradient">色無地の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                紋の格・価値と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              一色で染められた色無地（いろむじ）は、紋の入れ方で格が変わり、慶弔両用やお茶会で重宝する万能の一枚。使う機会が減ってタンスに眠っていませんか？色無地の格・価値を左右するポイントから、高く売るコツまで解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月27日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
          <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
          <p>
            色無地の買取価格は、素材（正絹か化繊か）・地紋の有無や種類・染めの色や質・紋の有無・白生地の産地や作家性・状態によって大きく変わります。正絹で状態がよく、上質な地紋や有名産地の白生地に染められたものは高く評価されやすい一方、化繊やシミ・カビのあるものは値がつきにくくなります。具体的な金額は変動が大きいため、複数業者の無料査定で比較するのが確実です。
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
                  <a href="#kaku" className="text-[#6b4c8a] hover:underline">
                    1. 色無地とは・格（紋で変わる）
                  </a>
                </li>
                <li>
                  <a href="#points" className="text-[#6b4c8a] hover:underline">
                    2. 色無地の価値が決まるポイント
                  </a>
                </li>
                <li>
                  <a href="#use" className="text-[#6b4c8a] hover:underline">
                    3. 慶弔両用・茶道での需要
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    4. 色無地を高く売る5つのコツ
                  </a>
                </li>
                <li>
                  <a
                    href="#auction-data"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    5. 【実売データ】公開オークションの落札相場
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

      {/* 色無地とは・格 */}
      <section id="kaku" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            色無地とは・格（紋で変わる）
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              色無地（いろむじ）とは、黒以外の<strong>一色で染められた、柄のない無地の着物</strong>です。生地そのものに織り出された
              <strong>地紋（じもん）</strong>
              を持つものも多く、無地でありながら上品な表情を生みます。柄がないぶん帯や小物で表情を変えられ、慶弔どちらにも合わせやすい汎用性の高さが特徴です。
            </p>
            <p>
              色無地の格は<strong>「紋（家紋）」の数と入れ方</strong>で変わります。紋を入れない「紋なし」は普段着〜おしゃれ着として、「一つ紋」は略礼装として慶弔両用に、「三つ紋」はさらに格が上がり準礼装として扱われます。紋が多いほど格は上がりますが、家紋が入るぶん着る人が限られるため、中古市場では一つ紋や紋なしのほうが買い手がつきやすい面もあります。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    紋の数
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    主な用途
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    三つ紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">準礼装</td>
                  <td className="px-4 py-3 text-gray-700">
                    格が高く、改まった式典・茶席など
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    一つ紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">略礼装</td>
                  <td className="px-4 py-3 text-gray-700">
                    慶弔両用。最も使い回しやすい
                  </td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    紋なし
                  </td>
                  <td className="px-4 py-3 text-gray-700">おしゃれ着</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    普段のお出かけ・観劇・食事会など
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 訪問着・付け下げなど他の種類との格の比較は
            <Link
              href="/articles/houmongi/"
              className="text-[#6b4c8a] underline"
            >
              訪問着の買取相場
            </Link>
            もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 価値が決まるポイント */}
      <section id="points" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            色無地の価値が決まるポイント
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            色無地の買取価格は、決まった定価があるわけではなく、以下のような複数の要素を総合して査定されます。柄がないぶん、生地そのものの質や染め、付属品の有無が評価を大きく左右します。
          </p>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ① 地紋の有無と種類
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                生地に織り出された地紋（綸子・緞子・紋意匠など）があるものは、無地ながら上質とされ評価が上がりやすい傾向です。吉祥文様や、慶弔どちらにも使える有職文様などは用途が広く、需要面でも有利に働くことがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ② 染めの色・質
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                色無地は染めがすべてと言ってよく、発色のよさ・染めムラのなさ・落ち着いた上品な色合いは評価につながります。流行に左右されにくい定番色（薄ピンク・藤色・灰みの中間色など）は幅広い年代が着られ、需要が安定しやすい傾向です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ③ 白生地の産地・作家性
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                色無地は白生地に色を染めて仕立てます。元の白生地が有名産地のものや、染め作家の手によるもの（落款があるもの）は、生地・染めの質の裏付けとなり評価が上がりやすくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ④ 紋の有無・正絹かどうか
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                正絹（シルク100%）の色無地は、化学繊維（ポリエステルなど）に比べて高く評価される傾向があります。紋は格を左右する一方、家紋入りは着る人を選ぶため、中古市場では一つ紋・紋なしのほうが買い手がつきやすい面もあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ⑤ 証紙・落款・染め替えの可否
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                白生地の産地や品質を示す証紙、染め作家の落款があると査定にプラスです。また、色無地は地色を染め直す「染め替え」がしやすい着物でもあり、状態が良く生地がしっかりしているものは、染め替え前提の需要も見込めます。購入時のたとう紙・証紙・箱が残っている場合は必ず添えましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ⑥ 状態（シミ・カビ・色あせ）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                色無地は無地ゆえにシミ・カビ・黄ばみ・色あせが目立ちやすく、状態が査定額に直結します。シミがあると修復やクリーニングの費用が見込まれるため評価は下がります。逆に未使用・しつけ糸付き・美品であれば、相場の上限に近い評価が期待できます。サイズ（裄や身丈）が大きめのものは着られる人が多く有利です。
              </p>
            </div>
          </div>
          <div className="mt-6 bg-[#faf7f3] border-l-4 border-[#c9a76c] p-4 rounded-r-lg text-sm text-gray-700 leading-relaxed">
            これらの要素が組み合わさって査定額が決まるため、色無地の買取価格は一律の「○円」とは言えません。本ページでは断定的な円価格の一覧は掲載せず、価値を左右する条件と、参考としての公開オークション実売データをご紹介します。
          </div>
        </div>
      </section>

      {/* 慶弔両用・茶道での需要 */}
      <section id="use" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            慶弔両用で使い回せる実用性・茶道での需要
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              色無地の大きな魅力は、<strong>一枚で慶弔両用に使える実用性</strong>です。一つ紋の色無地は、帯や小物を替えるだけで、お祝いの席にも弔事にも対応できます。慶事には金銀の入った華やかな帯、弔事には黒や寒色系の地味な帯と、コーディネートで雰囲気を切り替えられるため、和装をひと通り揃えたい人に重宝されます。
            </p>
            <p>
              また、色無地は<strong>茶道（お茶席）での需要</strong>が安定しているのも特徴です。茶席では華美すぎない落ち着いた装いが好まれるため、柄のない色無地は格好の一枚とされ、稽古から茶会まで幅広く着られます。こうした実需があることから、上質な正絹の色無地は中古市場でも一定のニーズが続いています。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            色無地を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：着物専門の買取業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                リサイクルショップや総合買取店では、色無地の地紋・染め・白生地の質といった価値を正しく評価できない場合があります。着物に精通した査定員がいる専門業者に依頼することで、適正な評価が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：複数業者で査定を比較する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                1社だけの査定では適正価格がわかりません。最低でも3社以上に無料査定を依頼し、最も高い金額を提示した業者に売りましょう。出張買取や宅配買取を使えば、手間をかけずに複数社の査定を受けられます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：証紙・落款・たとう紙・購入時の証明を揃える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                白生地の証紙や染め作家の落款、購入時のたとう紙・箱・証明書などの付属品があれば必ず添えましょう。色無地は柄での判断材料が少ないぶん、こうした証明が品質の裏付けとなり、査定額が上がりやすくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：帯・和装小物もセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                色無地に合わせて使っていた帯（袋帯・名古屋帯）や帯締め・帯揚げなどの和装小物も、まとめて査定に出すとトータルの買取額がアップしやすくなります。コーディネートが揃っていると付加価値が認められることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：状態が良いうちに早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                色無地は無地ゆえにシミ・カビ・色あせが目立ちやすく、長期保管の間に状態が悪化しやすい着物です。「もう着ない」と判断したら、状態が良いうちに早めに査定へ出すことで、価値を最大限に引き出せます。
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
            【実売データ】公開オークションでの色無地のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed">
            以下は買取相場ではなく、公開オークション（Yahoo!オークション）で実際に売買された「実売価格」の集計です。リアルな取引価格帯の参考としてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">
                    区分
                  </th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">
                    直近の落札件数
                  </th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">
                    平均落札価格
                  </th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">
                    最高落札価格
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    色無地（全般）
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約10,374件
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約3,913円
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    165,000円
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    正絹 色無地
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約10,017件
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約4,118円
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    143,000円
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    色無地 反物
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約661件
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約6,019円
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    43,786円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E7%9D%80%E7%89%A9%20%E8%89%B2%E7%84%A1%E5%9C%B0/0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b4c8a] underline"
            >
              Yahoo!オークション 着物 色無地 落札相場
            </a>
            ・
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%AD%A3%E7%B5%B9%20%E8%89%B2%E7%84%A1%E5%9C%B0/0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b4c8a] underline"
            >
              正絹 色無地 落札相場
            </a>
            ・
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E7%9D%80%E7%89%A9%20%E8%89%B2%E7%84%A1%E5%9C%B0%20%E5%8F%8D%E7%89%A9/0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b4c8a] underline"
            >
              着物 色無地 反物 落札相場
            </a>
            （いずれも2026年6月取得）。価格帯は数百円〜数万円と幅広く、上質な正絹・地紋付き・証紙付きの良品は高め、ポリエステルや状態不良のものは安値の出品も多く含まれます。
          </p>
          <div className="bg-[#fdf6f6] border border-[#e8b4b4] rounded-lg p-4 mt-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-[#b5402f] mb-1">
              ※実売価格と買取価格の違い
            </p>
            上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。1円〜の極端な安値は証紙なし・状態不良・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。色無地は正絹か否か・地紋・染めの質・白生地の産地・紋・サイズで価値が大きく変わります。金額は取得時点のもので、相場は時期・状態により変動し、査定額を保証するものではありません。
          </div>
          <p className="text-xs text-gray-500 mt-3">
            本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年6月）。詳しくは
            <Link
              href="/articles/souba-method/"
              className="text-[#6b4c8a] underline"
            >
              相場データの調査方法
            </Link>
            をご覧ください。
          </p>
          <div className="mt-5">
            <Link
              href="/ranking/"
              className="text-[#6b4c8a] underline font-medium"
            >
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
            状態別の買取価値（紋・素材・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ色無地でも、紋の有無や入れ方・素材（正絹か化繊か）・白生地の質・保存状態によって査定額は大きく変わります。色無地は黒以外の一色で染めた着物で、紋を入れると略礼装〜礼装として格が上がり、紋なしはおしゃれ着寄りになります。前述の実売データの“幅”も、多くはこうした条件の差から生まれています。
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
                  ["一つ紋・三つ紋入り", "◎〜○ プラス", "紋が入ると格が上がり、慶弔両用や式典で着られるため需要があります。紋の数と入れ方（染め抜き紋か縫い紋か）で格が変わり、評価も上下します。"],
                  ["紋なし", "○〜△", "略礼装〜普段寄りの扱いで、紋入りに比べると評価は控えめになりがち。ただし帯次第で幅広く着られる汎用性は残ります。"],
                  ["証紙付き・作家物の白生地", "○〜◎ プラス", "有名産地の白生地や染め作家の落款・証紙があると、生地と染めの質の裏付けとなり評価が上がりやすくなります。"],
                  ["凝った地紋・良質な染めの色", "○ 加点", "綸子・緞子・紋意匠などの上質な地紋や、発色のよい上品な染めは加点要素。無地ゆえに生地と染めの質がそのまま評価に出ます。"],
                  ["正絹であること", "◎", "正絹（シルク100%）は評価の前提。ポリエステルなどの化繊は大幅に評価が下がり、値がつきにくくなります。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様は最も高くなりやすい状態。保管ジワのみで難がなければ特に有利です。"],
                  ["美品／仕立て上がり", "○／○〜△", "美品は安定した評価。仕立て上がりはサイズや染め替えの可否で変動し、無地は地色を染め直す「染め替え」需要があるぶん、状態が良ければ評価されやすい傾向です。"],
                  ["シミ・変色あり", "△ マイナス", "無地は難が目立ちやすく、シミ・カビ・黄ばみ・色あせは減額対象。難の程度・範囲で幅があります。自己クリーニングは避け、現状のまま査定へ。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「紋なし」「化繊」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
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

      {/* 関連ページ */}
      <section className="py-10 section-light">
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
                おすすめ買取業者を徹底比較。口コミ・評判・買取実績まで。
              </p>
            </Link>
            <Link
              href="/articles/houmongi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                訪問着の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                準礼装・訪問着の買取価格と高く売れる条件を解説。
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            色無地の価値を確認したら、無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            使う機会の減った色無地、タンスに眠っていませんか？着物専門の買取業者なら無料で査定してもらえます。複数業者を比較して、最も高く買い取ってくれる業者を見つけましょう。
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
