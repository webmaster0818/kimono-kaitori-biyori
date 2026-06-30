import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】留袖（黒留袖・色留袖）の買取相場｜格と高く売るコツ",
  description:
    "留袖（黒留袖・色留袖）の買取相場を解説。第一礼装としての格、五つ紋、作家・証紙・刺繍金彩・正絹といった価値を決めるポイント、家紋入りの注意点、高く売るコツ、公開オークションの実売データまで紹介します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/tomesode/",
  },
  openGraph: {
    title: "【2026年最新】留袖（黒留袖・色留袖）の買取相場｜格と高く売るコツ",
    description:
      "留袖の買取相場と高く売る方法を解説。黒留袖・色留袖の違い、家紋入りの注意点、実売データも。",
    url: "https://kimonokaitori-biyori.com/articles/tomesode/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "黒留袖と色留袖では、どちらが高く売れますか？",
    answer:
      "一概には言えませんが、一般的には色留袖の方が中古市場で売りやすい傾向があります。黒留袖は既婚女性の第一礼装で、主に結婚式の親族が着用するため用途が限られ、さらに家紋が入っているケースがほとんどで買い手が限られます。一方、色留袖は未婚・既婚を問わず着られ、紋の数によって準礼装としても活用できるため需要の幅が広めです。ただし、最終的には作家・証紙の有無・刺繍や金彩の質・正絹かどうか・状態によって査定額は大きく変わります。",
  },
  {
    question: "家紋が入った留袖でも買い取ってもらえますか？",
    answer:
      "はい、家紋入りの留袖でも買取自体は可能です。ただし、家紋は各家を表すものであるため、別の方が次に着るには紋を入れ替える「紋替え（縫い紋直し・染め替え）」が必要になります。その手間とコストがかかるぶん、家紋入りは無地や貼り紋の留袖と比べて買い手が限られ、査定額が控えめになりやすい点は正直にお伝えしておきます。とはいえ作家物や上質な正絹・総刺繍などであれば、家紋入りでも相応の評価が期待できます。",
  },
  {
    question: "留袖の価値はどこで判断されますか？",
    answer:
      "留袖の価値は主に、作家・工房の有無、証紙や落款の有無、刺繍や金彩・友禅といった加飾の質と量、正絹かどうかの素材、家紋の種類（染め抜き五つ紋など）、そして全体の状態（シミ・カビ・変色・ニオイの有無）で判断されます。特に証紙や落款は産地・作家を裏づける重要な手がかりとなり、有無で評価が変わります。化繊（ポリエステル）の留袖は買取対象外になることも多いため、まずは素材を確認しておくとよいでしょう。",
  },
  {
    question: "母や祖母から譲られた古い留袖でも売れますか？",
    answer:
      "はい、譲り受けた留袖でも買取対象になります。古くても正絹で仕立てがよく、上質な刺繍や金彩が施されたものは一定の需要があります。ただし、長期保管によるシミ・カビ・黄ばみ・たとう紙の劣化がある場合は査定額が下がります。また家紋入りの場合は前述のとおり買い手が限られる点にもご留意ください。状態が気になる場合でも、まずは無料査定で見てもらうことをおすすめします。",
  },
  {
    question: "留袖を高く売るために準備しておくことはありますか？",
    answer:
      "証紙・落款・たとう紙・購入時の箱や保証書などの付属品をできるだけ揃えておくこと、軽くたたみ直してシワや汚れの有無を確認しておくことが大切です。自己流のクリーニングはかえって生地を傷めることがあるため避けましょう。そのうえで、着物に詳しい専門の買取業者を選び、複数社で査定を比較することが、適正な価格で売るための近道です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "【2026年最新】留袖（黒留袖・色留袖）の買取相場｜格と高く売るコツ",
  description:
    "留袖の買取相場と高く売る方法を解説。黒留袖・色留袖の違い、家紋入りの注意点、実売データも。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/tomesode/",
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
      name: "留袖",
      item: "https://kimonokaitori-biyori.com/articles/tomesode/",
    },
  ],
};

export default function TomesodePage() {
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
          { label: "留袖" },
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
              <span className="text-gradient">留袖（黒留袖・色留袖）の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                格と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              結婚式で着た留袖、そのままタンスに眠っていませんか？留袖は第一礼装ならではの格があり、作家物や上質な正絹であれば高い評価が期待できます。黒留袖と色留袖の違いから、価値を決めるポイント、高く売るコツまで解説します。
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
            留袖は既婚女性の第一礼装で格が高い一方、家紋入りが多く買い手が限られるため、買取相場は素材・作家・証紙・加飾の質・状態で大きく変わります。作家物や上質な正絹・総刺繍は評価が期待でき、化繊や状態不良・紋入れ替えが必要なものは控えめになりやすいのが実情です。具体的な円単位の金額は状態次第のため、複数社の無料査定で比較するのが確実です。
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
                  <a href="#what-is" className="text-[#6b4c8a] hover:underline">
                    1. 留袖とは｜第一礼装・黒留袖と色留袖の違い
                  </a>
                </li>
                <li>
                  <a href="#value-points" className="text-[#6b4c8a] hover:underline">
                    2. 留袖の価値を決めるポイント
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    3. 留袖を高く売る5つのコツ
                  </a>
                </li>
                <li>
                  <a href="#auction-data" className="text-[#6b4c8a] hover:underline">
                    4. 【実売データ】公開オークションでの落札相場
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

      {/* 留袖とは */}
      <section id="what-is" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            留袖とは｜第一礼装・黒留袖と色留袖の違い
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            留袖は、女性の和装の中でもっとも格が高い「第一礼装」に位置づけられる着物です。模様が裾まわりにのみ配される「江戸褄（えどづま）」の形式が特徴で、主に結婚式や格式の高い式典で着用されます。大きく「黒留袖」と「色留袖」に分けられます。
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">黒留袖</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                地色が黒の留袖で、既婚女性の第一礼装です。主に結婚式で新郎新婦の母親や親族が着用します。背中・両胸・両袖の5か所に染め抜きの「五つ紋（家紋）」を入れるのが正式で、裾には松竹梅や鶴などのおめでたい絵羽模様が描かれます。家紋が入っているため、用途と着る人が限られやすいのが特徴です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">色留袖</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                地色が黒以外の留袖で、未婚・既婚を問わず着用できます。五つ紋を入れれば黒留袖と同格の第一礼装になり、三つ紋・一つ紋にすれば準礼装として披露宴や式典など幅広い場面で着られます。紋の数を抑えたものは用途が広く、中古市場でも比較的需要があります。
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">五つ紋（家紋）について</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              留袖の格を支えるのが「染め抜き日向紋」の五つ紋です。背紋・抱き紋（両胸）・袖紋（両袖）の5か所に各家を表す家紋が入ります。格式を高める要素である一方、家紋は各家固有のものであるため、別の方が着るには紋を入れ替える必要があり、これが中古市場での評価に影響します。詳しくは
              <Link href="/articles/family-crest/" className="text-[#6b4c8a] underline">家紋入り着物の買取</Link>
              のページでも解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* 価値を決めるポイント */}
      <section id="value-points" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            留袖の価値を決めるポイント
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            留袖の買取価格は、以下のような要素を総合して判断されます。同じ「留袖」でも、これらの条件によって評価は大きく変わります。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">作家・工房</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                有名な友禅作家や老舗工房が手がけた留袖は、芸術的・ブランド的な付加価値が認められやすく、高い評価につながります。落款（作家のサイン）があれば、作り手を裏づける手がかりとなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">証紙・落款</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地や織元・染元を示す証紙、作家の落款が残っていると、品質や来歴を確認しやすくなり、査定の信頼性が高まります。付属のたとう紙や証明書も合わせて保管しておきましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">刺繍・金彩・友禅などの加飾</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                裾模様に施された手刺繍、金彩、手描き友禅といった加飾は、その質と量が価値を大きく左右します。手の込んだ総刺繍や繊細な友禅は高く評価されやすく、機械的・簡素な加工のものは控えめになる傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">正絹かどうか（素材）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                留袖の価値の前提となるのが素材です。正絹（シルク）であることが基本で、化繊（ポリエステル）の留袖は買取対象外になる業者も多く、値がつきにくいのが実情です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">家紋（※正直な注意点）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                留袖は染め抜きの家紋が入っているものがほとんどです。家紋は各家固有のものなので、別の方が着る際には紋を入れ替える「紋替え（縫い紋直し・染め替え）」が必要になり、その手間とコストがかかります。そのため<strong>家紋入りは買い手が限られ、無地や貼り紋に比べて評価が控えめになりやすい</strong>点は正直にお伝えしておきます。一方で、作家物や上質な正絹であれば家紋入りでも相応に評価されることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">状態</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                シミ・カビ・黄ばみ・変色・ニオイの有無は査定額に直結します。長期保管によるトラブルがあると大幅な減額や買取不可になることもあります。たとう紙に包んで桐たんすで保管し、定期的に虫干しをするなど、状態を保つことが高評価の前提です。
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
            留袖を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：着物専門の買取業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                留袖は格や加飾の質を正しく見極められる査定員でなければ適正な評価が難しい着物です。リサイクルショップではなく、着物に精通した専門業者に依頼しましょう。作家物や上質な正絹の場合、専門業者と一般業者で評価が大きく分かれることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：複数業者で査定を比較する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                1社だけでは適正価格がわかりません。最低でも3社以上に無料査定を依頼し、もっとも高い金額を提示した業者に売りましょう。出張買取や宅配買取を使えば、手間をかけずに複数社の査定を受けられます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：証紙・落款・付属品を揃える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・落款・たとう紙・購入時の箱や保証書がそろっていると、品質や来歴を裏づけやすく、査定額が上がりやすくなります。特に作家物の場合は付属品の有無で評価が変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：帯・小物もまとめて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                留袖と一緒に使う袋帯や帯締め・帯揚げなどの小物も、まとめて査定に出すとトータルの買取額がアップしやすくなります。礼装用の格のある袋帯は単体でも需要があるため、処分する前に一緒に見てもらいましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：状態が良いうちに早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                留袖は出番が限られるため、長くタンスに眠らせがちですが、その間にシミやカビ・黄ばみが進むと評価が下がります。自己流のクリーニングは生地を傷めるおそれがあるため避け、「もう着ない」と決めたら状態が良いうちに早めに査定へ出すのが得策です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実売データ */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの留袖のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed">
            以下は買取相場ではなく、公開オークション（Yahoo!オークション）で実際に売買された「実売価格」の集計です。リアルな取引価格帯の参考としてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">区分</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">平均落札価格</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">最高落札価格</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">最安落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">黒留袖（直近180日・約140件）</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">約3,938円</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">43,544円</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">310円</td>
                </tr>
                <tr>
                  <td className="border border-[#e8ddd0] px-3 py-2">黒留袖（未使用）</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">約3,854円</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">－</td>
                  <td className="border border-[#e8ddd0] px-3 py-2">－</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E9%BB%92%E7%95%99%E8%A2%96/2084005462/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b4c8a] underline"
            >
              Yahoo!オークション「黒留袖」落札相場
            </a>
            （2026年6月取得）。平均は証紙なし・状態不良の安価な出品も多く含み、未使用品でも平均が低いのは家紋入りで買い手が限られるためと考えられます。
          </p>
          <div className="bg-[#fdf6f6] border border-[#e8b4b4] rounded-lg p-4 mt-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-[#b5402f] mb-1">※実売価格と買取価格の違い</p>
            上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。留袖は<strong>家紋入りのものが多く、別の方が着るには紋の入れ替えが必要になるため、買い手が限られて安くなりやすい</strong>のが特徴です。一方で正絹・作家物・上質な総刺繍などはこの平均より高く取引されることもあります。金額は取得時点のもので、相場は時期・状態により変動し、査定額を保証するものではありません。
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
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（紋・作家・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ留袖でも、紋の格・作家や証紙の有無・加飾の質・保存状態によって査定額は大きく変わります。黒留袖は既婚女性の第一礼装、色留袖は紋数次第で第一礼装〜準礼装として着られますが、いずれも下表のような条件で評価が上下します。前述の実売データの“幅”も、多くはこの状態差によって生まれています。
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
                  ["五つ紋・染め抜き日向紋（正式な格）", "◎ 評価されやすい", "背・両胸・両袖の5か所に正式な染め抜き日向紋が入ったものは最礼装としての格が明確で、評価が安定しやすい状態です。"],
                  ["作家物・落款あり", "◎ 別格", "有名な友禅作家や老舗工房が手がけた留袖は別格の評価。落款（作家のサイン・印）があると作り手を裏づけられ、家紋入りでも相応に評価されることがあります。"],
                  ["金彩・刺繍・絵羽が上質／比翼仕立て", "◎ 加飾の質が左右", "手の込んだ総刺繍や繊細な金彩・絵羽模様、格を示す比翼仕立てなど、加飾の質と量が価値を大きく左右します。上質なものほど高評価につながります。"],
                  ["産地・染めの証紙あり", "○〜◎", "産地や織元・染元を示す証紙が残っていると品質や来歴を確認しやすく、査定の信頼性が高まります。たとう紙や証明書も合わせて保管を。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "しつけ糸が付いた未使用品は最も高くなりやすい状態。保管ジワのみで難がなければ特に有利です。"],
                  ["美品（着用少・難なし）", "○ 良好", "目立つシミ・カビ・変色がなく着用が少ないものは安定した評価が期待できます。"],
                  ["仕立て上がり（裄・身丈などサイズ）", "○〜△", "サイズや着用感で変動します。裄・身丈が現代向けの寸法だと有利、寸法が小さいものは下がりやすい傾向です。"],
                  ["シミ・金彩や刺繍の劣化・変色・古い柄", "△ マイナス", "黒留袖は流行に左右されにくい一方、シミ・カビ・変色や金彩・刺繍の劣化があると減額対象に。難の程度・範囲で幅が出ます。自己クリーニングは避け現状のまま査定へ。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「証紙・落款なし」「難あり」「紋の入れ替えが必要な家紋入り」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
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
                おすすめ買取業者を徹底比較。口コミ・評判・買取実績・選定基準まで。
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
              href="/articles/family-crest/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                家紋入り着物の買取
              </h3>
              <p className="text-xs text-gray-600">
                家紋入りの留袖・着物がなぜ売りにくいのか、評価の考え方を解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            留袖の価値を確認したら、無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            結婚式で着た留袖、タンスに眠っていませんか？着物専門の買取業者なら無料で査定してもらえます。複数業者を比較して、最も高く買い取ってくれる業者を見つけましょう。
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
