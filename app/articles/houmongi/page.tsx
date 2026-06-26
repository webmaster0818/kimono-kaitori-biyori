import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】訪問着の買取相場｜格・種類と高く売るコツ",
  description:
    "訪問着の買取相場を解説。準礼装としての格・用途、作家物・証紙・正絹かどうか・柄・状態など価値を左右するポイントと、高く売るコツ、公開オークションの実売データまで紹介します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/houmongi/",
  },
  openGraph: {
    title: "【2026年最新】訪問着の買取相場｜格・種類と高く売るコツ",
    description:
      "訪問着の買取相場と価値を左右するポイント、高く売るコツを解説。公開オークションの実売データも掲載。",
    url: "https://kimonokaitori-biyori.com/articles/houmongi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "訪問着はどのくらいの価格で売れますか？",
    answer:
      "訪問着の買取価格は、素材・作家・証紙の有無・状態によって大きく変動するため、一概に「いくら」とは言えません。正絹で状態がよく、有名作家の落款や証紙が揃っているものは高い評価を受けやすく、反対にポリエステルなどの化繊や、シミ・カビ・色あせがあるものは値がつきにくくなります。公開オークションでの実売価格は数百円〜数万円と幅が広く、有名作家・証紙付きの良品はさらに高くなることもあります。正確な金額は複数の買取業者で無料査定を受けて比較するのが確実です。",
  },
  {
    question: "訪問着と付け下げの違いは何ですか？",
    answer:
      "訪問着は、縫い目をまたいで模様がつながる「絵羽（えば）模様」が特徴の準礼装です。一方、付け下げは反物の状態で模様づけされ、絵羽ほど模様がつながらない略式の装いで、訪問着よりやや格が下がるとされます。見た目が似ているため混同されがちですが、絵羽模様で華やかなものほど訪問着として評価されやすい傾向があります。査定の際は、どちらであるかも価格に影響します。",
  },
  {
    question: "証紙や落款がないと買い取ってもらえませんか？",
    answer:
      "証紙や落款がなくても買取自体は可能です。ただし、産地や作家を証明する証紙、作家のサインである落款があると、品質や価値の裏付けとなり査定額が上がりやすくなります。購入時のたとう紙・証紙・箱などが残っている場合は、必ず一緒に査定へ出しましょう。付属品がない場合でも、正絹で状態がよければ評価される可能性があります。",
  },
  {
    question: "古い訪問着でも価値はありますか？",
    answer:
      "古い訪問着でも、正絹で仕立てがよく、古典柄など流行に左右されにくいデザインのものは需要があります。特に有名作家物や上質な手描き友禅は、年代を問わず評価されることがあります。ただし、長期保管によるシミ・カビ・黄ばみ・色あせがあると査定額は大きく下がります。状態が気になる場合でも、まずは無料査定で確認してもらうのがおすすめです。",
  },
  {
    question: "訪問着を高く売るにはどうすればよいですか？",
    answer:
      "高く売るには、(1)着物専門の買取業者を選ぶ、(2)複数業者で査定を比較する、(3)証紙・落款・たとう紙などの付属品を揃える、(4)帯や和装小物もセットで出す、(5)状態が良いうちに早めに売る、の5点が重要です。特に、専門の査定員がいる業者と一般のリサイクル店では評価が大きく異なることがあるため、相見積もりで最も高い業者を選ぶのが確実です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "【2026年最新】訪問着の買取相場｜格・種類と高く売るコツ",
  description:
    "訪問着の買取相場と価値を左右するポイント、高く売るコツを解説。公開オークションの実売データも掲載。",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
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
    "@id": "https://kimonokaitori-biyori.com/articles/houmongi/",
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
      name: "訪問着",
      item: "https://kimonokaitori-biyori.com/articles/houmongi/",
    },
  ],
};

export default function HoumongiPage() {
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
          { label: "訪問着" },
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
              <span className="text-gradient">訪問着の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                格・種類と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              結婚式やお茶会、入学・卒業式などで活躍する訪問着。準礼装として幅広く着られる一方、使う機会が減ってタンスに眠っていませんか？訪問着の格・種類から、価値を左右するポイント、高く売るコツまで解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月26日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
          <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
          <p>
            訪問着の買取価格は、素材（正絹か化繊か）・作家・証紙や落款の有無・柄・状態によって大きく変わります。正絹で状態がよく、有名作家物や証紙付きのものは高く評価されやすい一方、化繊やシミ・カビのあるものは値がつきにくくなります。具体的な金額は変動が大きいため、複数業者の無料査定で比較するのが確実です。
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
                    1. 訪問着の格・用途（準礼装）
                  </a>
                </li>
                <li>
                  <a href="#points" className="text-[#6b4c8a] hover:underline">
                    2. 訪問着の価値が決まるポイント
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    3. 訪問着を高く売る5つのコツ
                  </a>
                </li>
                <li>
                  <a
                    href="#auction-data"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 【実売データ】公開オークションの落札相場
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    5. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 格・用途 */}
      <section id="kaku" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            訪問着の格・用途（準礼装）
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              訪問着は、留袖に次ぐ格を持つ「準礼装（じゅんれいそう）」に位置づけられる着物です。縫い目をまたいで模様がひとつの絵のようにつながる
              <strong>「絵羽（えば）模様」</strong>
              が大きな特徴で、肩・胸・袖・裾にかけて華やかな柄が描かれます。既婚・未婚を問わず着られるため、幅広い世代・場面で活躍する汎用性の高い着物です。
            </p>
            <p>
              着用シーンは、結婚式や披露宴へのゲストとしての参列、入学式・卒業式、お宮参り、お茶会やパーティー、目上の方への挨拶など多岐にわたります。一枚持っておくと重宝するため需要も比較的安定しており、中古市場でも一定のニーズがあります。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    黒留袖・色留袖
                  </td>
                  <td className="px-4 py-3 text-gray-700">第一礼装・準礼装</td>
                  <td className="px-4 py-3 text-gray-700">
                    最も格が高い。裾のみに模様（留袖）
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    訪問着
                  </td>
                  <td className="px-4 py-3 text-gray-700">準礼装</td>
                  <td className="px-4 py-3 text-gray-700">
                    絵羽模様。既婚・未婚問わず幅広く着られる
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    付け下げ
                  </td>
                  <td className="px-4 py-3 text-gray-700">略礼装</td>
                  <td className="px-4 py-3 text-gray-700">
                    訪問着よりやや略式。模様が絵羽ほどつながらない
                  </td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    色無地・小紋
                  </td>
                  <td className="px-4 py-3 text-gray-700">略礼装・普段着</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    シーンにより格が変わる。日常使いも可能
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 留袖・色留袖の相場は
            <Link
              href="/articles/houmongi-tomesode/"
              className="text-[#6b4c8a] underline"
            >
              訪問着・留袖の買取相場
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
            訪問着の価値が決まるポイント
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            訪問着の買取価格は、決まった定価があるわけではなく、以下のような複数の要素を総合して査定されます。同じ「訪問着」でも、これらの条件次第で評価は大きく変わります。
          </p>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ① 作家・ブランド
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                有名作家による手描き友禅や、老舗呉服ブランドの訪問着は、作家性・ブランド力が評価され高くなりやすい傾向があります。落款（作家のサイン）がある場合は、品質を裏付ける要素として査定にプラスに働きます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ② 証紙の有無
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地や品質を証明する証紙が付いていると、価値の裏付けとなり評価が上がりやすくなります。購入時のたとう紙・証紙・箱などが残っている場合は、必ず一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ③ 正絹かどうか（素材）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                正絹（シルク100%）の訪問着は、化学繊維（ポリエステルなど）に比べて高く評価される傾向があります。化繊の訪問着は買取対象外となる業者も多く、値がつきにくいのが実情です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ④ 柄・デザイン
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                古典柄（花丸文、松竹梅、流水文など）は流行に左右されにくく、中古市場でも安定した需要があります。一方、流行性の強い現代柄は、トレンドが過ぎると評価が下がる場合があります。落ち着いた色合いで幅広い年代が着られるものは評価されやすい傾向です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ⑤ 状態（シミ・カビ・色あせ）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                シミ・カビ・黄ばみ・色あせ・虫食いなどがあると、クリーニングや修復の費用が見込まれるため査定額は大きく下がります。逆に未使用・しつけ糸付き・美品であれば、相場の上限に近い評価が期待できます。サイズ（裄や身丈）が大きめのものは着られる人が多く、需要面で有利です。
              </p>
            </div>
          </div>
          <div className="mt-6 bg-[#faf7f3] border-l-4 border-[#c9a76c] p-4 rounded-r-lg text-sm text-gray-700 leading-relaxed">
            これらの要素が組み合わさって査定額が決まるため、訪問着の買取価格は一律の「○円」とは言えません。本ページでは断定的な円価格の一覧は掲載せず、価値を左右する条件と、参考としての公開オークション実売データをご紹介します。
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            訪問着を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：着物専門の買取業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                リサイクルショップや総合買取店では、訪問着の作家性や素材の価値を正しく評価できない場合があります。着物に精通した査定員がいる専門業者に依頼することで、適正な評価が期待できます。
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
                コツ3：証紙・落款・たとう紙を揃える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙や落款、購入時のたとう紙・箱などの付属品があれば必ず添えましょう。品質や作家を証明する材料となり、査定額が上がりやすくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：帯・和装小物もセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                訪問着に合わせて使っていた帯（袋帯）や帯締め・帯揚げなどの和装小物も、まとめて査定に出すとトータルの買取額がアップしやすくなります。コーディネートが揃っていると付加価値が認められることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：状態が良いうちに早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                訪問着は長期保管の間にシミ・カビ・色あせが進むリスクがあります。「もう着ない」と判断したら、状態が良いうちに早めに査定へ出すことで、価値を最大限に引き出せます。
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
            【実売データ】公開オークションでの訪問着のリアルな落札相場
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    訪問着（全般）
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約6,308件
                  </td>
                  <td className="border border-[#e8ddd0] px-3 py-2">
                    約3,747円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E8%A8%AA%E5%95%8F%E7%9D%80/0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b4c8a] underline"
            >
              Yahoo!オークション 訪問着 落札相場
            </a>
            （2026年6月取得）。価格帯は数百円〜数万円と幅広く、有名作家・証紙付き・正絹の良品は高め、ポリエステルや状態不良のものは安値の出品も多く含まれます。
          </p>
          <div className="bg-[#fdf6f6] border border-[#e8b4b4] rounded-lg p-4 mt-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-[#b5402f] mb-1">
              ※実売価格と買取価格の違い
            </p>
            上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。1円〜の極端な安値は証紙なし・状態不良・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。訪問着は正絹か否か・作家・証紙・サイズ・柄の人気で価値が大きく変わります。金額は取得時点のもので、相場は時期・状態により変動し、査定額を保証するものではありません。
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
                おすすめ買取業者を徹底比較。口コミ・評判・買取実績まで。
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
            訪問着の価値を確認したら、無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            使う機会の減った訪問着、タンスに眠っていませんか？着物専門の買取業者なら無料で査定してもらえます。複数業者を比較して、最も高く買い取ってくれる業者を見つけましょう。
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
