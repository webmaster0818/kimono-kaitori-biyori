import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】琉球絣の買取相場｜首里織との違い・証紙と手織りで価値が変わる",
  description:
    "琉球絣（沖縄・南風原町を中心に生産）の買取相場と高く売る方法を解説。琉球王国時代の御絵図帳に由来する図柄を先染めの平織りで表す絣織物で、1983年に国の伝統的工芸品に指定。首里織との違い、証紙・手織りの有無で価値が変わる点を、公開オークションの実売データとあわせてまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/ryukyu-gasuri/",
  },
  openGraph: {
    title: "【2026年最新】琉球絣の買取相場｜首里織との違い・証紙と手織りで価値が変わる",
    description:
      "琉球絣（沖縄・南風原町中心）の買取相場と高く売る方法。首里織との違い、証紙・手織りの有無で価値が変わる点を実売データとあわせて解説。",
    url: "https://kimonokaitori-biyori.com/articles/ryukyu-gasuri/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "琉球絣はどのくらいで買い取ってもらえますか？",
    answer:
      "買取価格は証紙の有無、手織りか否か、夏物（夏琉球）か、状態によって大きく変わるため一概には言えません。参考として、公開オークションの実売データでは、タイトルに「琉球絣」を含む単品出品471件の平均落札価格は約7,817円、中央値は2,860円、最高は69,300円でした（2026年2月25日〜7月15日、2026年7月16日取得）。平均と中央値の開きが大きいのは、証紙のない普及品が多数を占める一方、証紙付きの手織り品が上限を押し上げているためです。これは個人間取引の実売価格であり、買取査定額は一般にこれより低くなります。",
  },
  {
    question: "琉球絣と首里織は同じものですか？",
    answer:
      "別物です。琉球絣は、南風原町を中心に生産される先染め・平織りの絣織物で、1983年に「琉球絣」として国の伝統的工芸品に指定されています。一方の首里織は、那覇市首里に伝わる花倉織・道屯織・首里花織など多彩な紋織・絣の織技法の総称で、同じく1983年に「首里織」として別個に指定されています。産地組合も異なります（琉球絣＝琉球絣事業協同組合、首里織＝那覇伝統織物事業協同組合）。査定の場でも区別して扱われるため、証紙でどちらかを確認しておくと安心です。",
  },
  {
    question: "琉球絣の図柄にはどんな意味がありますか？",
    answer:
      "琉球絣の図柄は、琉球王府時代の意匠集「御絵図帳（みえずちょう）」に由来するとされ、トウイグワァ（つばめ）、ジンダマー（銭玉）、ティズクウン（げんこつ）、コウリグム（雲）など、身の回りの品や動植物を図案化したものが伝えられています。図柄の種類は約500種ともいわれ、この豊富な絣柄が琉球絣の魅力です。",
  },
  {
    question: "証紙がない琉球絣でも売れますか？",
    answer:
      "証紙がなくても買取自体は可能ですが、本場の琉球絣かどうか、手織りかどうかの判別が難しくなるため、査定額は下がりやすくなります。産地組合（琉球絣事業協同組合）の検査を経た証紙は産地と品質の重要な裏付けです。購入時の証紙・たとう紙・箱などが残っていれば、必ず一緒に査定に出しましょう。",
  },
  {
    question: "琉球絣を高く売るにはどうすればよいですか？",
    answer:
      "証紙・付属品をそろえること、沖縄の織物に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。実売データでも、夏物（夏琉球）の証紙付きや純手織の品、著名工房の作品は高額側に分布しており、こうした品ほど業者間の査定差が出やすくなります。日焼けや汗染みが進む前に、状態が良いうちに早めの査定がおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "琉球絣の買取相場｜首里織との違い・証紙と手織りで価値が変わる",
  description:
    "琉球絣（沖縄・南風原町中心）の買取相場と高く売る方法。首里織との違い、証紙・手織りの有無で価値が変わる点を実売データとあわせて解説。",
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
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
    "@id": "https://kimonokaitori-biyori.com/articles/ryukyu-gasuri/",
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
      name: "琉球絣",
      item: "https://kimonokaitori-biyori.com/articles/ryukyu-gasuri/",
    },
  ],
};

export default function RyukyuGasuriPage() {
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
          { label: "琉球絣" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#b5402f] text-white mb-4 tracking-wide">
              沖縄・伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">琉球絣の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                首里織との違い・証紙と手織りで価値が変わる
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              琉球絣（りゅうきゅうかすり）は、沖縄県南風原町を中心に生産されている先染め・平織りの絣織物です。琉球王府時代の意匠集「御絵図帳」に由来する豊富な図柄で知られ、1983年に国の伝統的工芸品に指定されています。同じ沖縄の首里織とは別の織物で、証紙や手織りか否かで買取価値が変わります。公開オークションの実売データとあわせて、見分け方と高く売るポイントを解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年7月16日</p>
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
                    1. 琉球絣とは？御絵図帳に由来する絣織物
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 琉球絣の図柄と技法（首里織との違い）
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 琉球絣の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 琉球絣を高く売るポイント
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

      {/* 琉球絣とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            琉球絣とは？御絵図帳に由来する絣織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              琉球絣（りゅうきゅうかすり）は、沖縄県の<strong>南風原町（はえばるちょう）を中心に、那覇市・八重瀬町などで生産されている絣織物</strong>です。あらかじめ染め分けた糸（先染め）を平織りで織り上げ、絣模様を表します。その源流は琉球王国時代の中国・東南アジアとの交易にさかのぼるとされ、琉球の絣は江戸時代に本土へ伝わり、日本各地の絣織物のルーツになったともいわれています。
            </p>
            <p>
              図柄は、琉球王府時代の意匠集<strong>「御絵図帳（みえずちょう）」</strong>に由来するとされ、身の回りの品や動植物を図案化した絣柄が約500種ともいわれるほど豊富に伝えられています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">琉球絣の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>南風原町を中心に、那覇市・八重瀬町などで生産される絣織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>先染めした糸を手投杼（てなげひ）で平織りにして絣模様を表す</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>図柄は御絵図帳に由来し、約500種ともいわれる豊富な絣柄が伝わる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>夏向けの薄手の品は「夏琉球」と呼ばれ人気がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1983年（昭和58年）に国の伝統的工芸品に指定</span>
                </li>
              </ul>
            </div>
            <p>
              <strong>琉球絣は、那覇市首里に伝わる
              <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline font-medium">
                首里織
              </Link>
              とは別の織物です。</strong>首里織は花倉織・道屯織など多彩な紋織・絣の織技法の総称で、伝統的工芸品としても「琉球絣」と「首里織」は別個に指定されています。お手持ちの品がどちらか分からない場合は、証紙の組合名で確認できます。沖縄県内での買取業者の選び方は
              <Link href="/articles/okinawa/" className="text-[#6b4c8a] underline font-medium">
                沖縄の着物買取おすすめ業者
              </Link>
              をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 図柄と技法 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            琉球絣の図柄と技法（首里織との違い）
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            琉球絣の魅力は、御絵図帳に由来する図柄の豊富さにあります。代表的な絣柄と、査定で混同されやすい織物との違いを知っておくと参考になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    図柄・区分
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    トウイグワァ（つばめ）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    つばめを図案化した琉球絣を代表する絣柄のひとつ
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    ジンダマー（銭玉）・ティズクウン（げんこつ）・コウリグム（雲）など
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    銭玉・げんこつ・雲など、身の回りの品や自然を図案化した図柄。約500種ともいわれる
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    夏琉球（夏物）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    夏向けの薄手に織られた琉球絣。盛夏の着物として人気があり、中古市場でも需要が高い
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    （参考）首里織との違い
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    首里織は那覇市首里に伝わる紋織・絣の織技法の総称で、琉球絣とは別の伝統的工芸品。証紙の組合名（琉球絣事業協同組合か那覇伝統織物事業協同組合か）で見分けられる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            技法面では、先染めの平織りで手投杼を用いること、「絵図式」と呼ばれる方法で効率よく絣模様を合わせられることが特徴とされています。
          </p>
        </div>
      </section>

      {/* 相場の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            琉球絣の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            琉球絣の買取価格は、証紙の有無・手織りか否か・夏物か・状態によって大きく変わります。以下は一般的な傾向であり、実際の金額は需要や業者によって変動します（実際に売買された価格の集計は後述の実売データをご覧ください）。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙付きの純手織・夏物が高評価
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                最も評価されやすいのは、産地組合の証紙がそろった純手織の品や、夏物（夏琉球）の証紙付きです。大城広四郎織物など著名な工房の作品も高額側に分布します。一方、証紙がなく産地や織りを確認できない普及品は流通量が多く、評価は控えめになりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                着物・帯・反物で評価が異なる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                琉球絣は着物（着尺・仕立て済み）としての流通が中心で、帯や反物は比較的少数です。未仕立ての反物や状態の良い帯は需要があり、評価されやすいことがあります。仕立て済みの着物はサイズも評価に影響します。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                沖縄の染織とのまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                琉球絣の品と、
                <Link href="/articles/bingata/" className="text-[#6b4c8a] underline">
                  琉球紅型
                </Link>
                や
                <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline">
                  首里織
                </Link>
                などの沖縄の染織をまとめて査定に出すと、全体として評価されやすくなります。和装小物や帯と合わせて一緒に出すのもおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定と証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品の指定と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              琉球絣にまつわる公的な指定を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                伝統的工芸品の指定（1983年）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                琉球絣は、<strong>1983年（昭和58年）4月に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。産地は那覇市・島尻郡八重瀬町・島尻郡南風原町で、産地組合は<strong>琉球絣事業協同組合</strong>です（
                <a
                  href="https://kougeihin.jp/craft/0130/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#6b4c8a] underline"
                >
                  出典：伝統工芸 青山スクエア「琉球絣」
                </a>
                ）。なお首里織も同年に別個の伝統的工芸品として指定されており、両者は産地組合も異なる別の織物です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙が本場琉球絣の裏付けになる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地組合の検査を経た品に付く証紙は、本場琉球絣であることと品質の裏付けになります。琉球絣は絣柄の意匠が広く親しまれているぶん、他産地の絣や「琉球絣風」の品と混同されやすく、<strong>証紙の有無が査定を大きく左右します</strong>。証紙がそろっているものは評価されやすくなります。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>本場琉球絣であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>手織り・夏物（夏琉球）など特徴に応じた評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>本場か「琉球絣風」かの判別が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>他産地の絣織物との区別がつきにくくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が下がる傾向がある</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              証紙の見方については
              <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">
                着物の証紙ガイド
              </Link>
              、絣・紬など織りの着物全般については
              <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                紬の種類と買取相場
              </Link>
              もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            琉球絣を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・購入時の箱・しおりなどは、本場琉球絣であることを示す重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。付属品の有無で評価が変わることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：沖縄の織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                琉球絣は手織りか否か、夏物か、著名工房の作品かによって価値が大きく変わるため、沖縄の染織に詳しい査定員がいる業者を選ぶことが大切です。一般的なリサイクルショップでは価値が見過ごされることがあるため、着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙付きの手織り品や工房物は、業者によって評価や販路が異なり、査定額に差が出ることがあります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                日焼けや湿気、汗染み、虫食いは価値を下げる要因です。とくに夏物は汗染みが残りやすいため注意が必要です。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
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
            【実売データ】公開オークションでの琉球絣のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mb-6">
            <h3 className="font-bold text-[#6b4c8a] mb-4 text-base">
              琉球絣 全体の集計（着物・帯・反物の合算、小物等除く）
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">落札件数</p>
                <p className="text-lg font-bold text-[#6b4c8a]">471件</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">平均落札価格</p>
                <p className="text-lg font-bold text-[#6b4c8a]">約7,817円</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">中央値</p>
                <p className="text-lg font-bold text-[#6b4c8a]">2,860円</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">最高落札価格</p>
                <p className="text-lg font-bold text-[#6b4c8a]">69,300円</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物</td>
                  <td className="px-4 py-3 font-medium">445件</td>
                  <td className="px-4 py-3 font-medium">約7,893円</td>
                  <td className="px-4 py-3 font-medium">69,300円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">帯</td>
                  <td className="px-4 py-3 font-medium">22件</td>
                  <td className="px-4 py-3 font-medium">約5,811円</td>
                  <td className="px-4 py-3 font-medium">52,250円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">反物・生地</td>
                  <td className="px-4 py-3 font-medium">4件</td>
                  <td className="px-4 py-3 font-medium">約10,369円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">20,002円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E7%90%89%E7%90%83%E7%B5%A3"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「琉球絣」の落札相場
            </a>
            （集計期間：2026年2月25日〜2026年7月15日、2026年7月16日取得）
            <br />
            ※ タイトルに「琉球絣」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外。小物・ハギレ等は表から除外しています。反物・生地は期間内4件と少なく、平均は振れやすい点にご注意ください。
            <br />
            ※ 平均（約7,817円）と中央値（2,860円）の開きが大きいのは、証紙のない普及品が件数の多数を占めるためです。夏物（夏琉球）の証紙付き・純手織の品や、大城広四郎織物など著名工房の作品が上限側を押し上げています。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品や、逆に証紙付きの純手織・夏物・著名工房の作品では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・織りで大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・手織りの琉球絣は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・織り・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ琉球絣でも、証紙の有無、手織りか否か、夏物か、保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”（平均と中央値の乖離）も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（琉球絣事業協同組合の検査済み）", "◎ 大きくプラス", "産地組合の検査を経た証紙は本場琉球絣の裏付けです。証紙がそろっていると産地・品質が証明され、評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "本場の琉球絣か、他産地の絣や「琉球絣風」の品かの判別が難しくなり、慎重な査定になりがち。付属品など他の手がかりが重要になります。"],
                  ["純手織の品", "◎ 高評価", "手投杼による手織りの品は評価が高い傾向。実売データでも純手織・証紙付きの品は高額側に分布しています。"],
                  ["夏物（夏琉球）", "◎〜○ 需要が高い", "盛夏向けの夏琉球は中古市場でも人気があり、証紙付きなら特に評価されやすい傾向があります。"],
                  ["著名工房の作品（大城広四郎織物など）", "◎ 高評価", "著名な工房の作品は評価が高くなりやすい要素です。証紙・付属品とあわせて作り手が確認できると有利です。"],
                  ["帯・反物・仕立て済み着物の別", "○ 需要で変動", "琉球絣は着物としての流通が中心。未仕立ての反物や状態の良い帯は需要があり評価されやすいことがあります。サイズも評価に影響します。"],
                  ["未使用・しつけ付き", "○ プラス", "未使用品やしつけ付きの品は状態面の評価が高くなりやすい傾向があります。"],
                  ["日焼け・汗染み・難あり", "△ マイナス", "日焼け・汗染み・虫食いは減額対象。とくに夏物は汗染みが残りやすい点に注意。自己クリーニングは避け、現状のまま査定へ。"],
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

      {/* この着物を売るなら（条件別CTA） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              琉球絣を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              琉球絣は証紙・織り・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・手織り・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い琉球絣は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・織り・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
            </p>
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
              href="/articles/shuri-ori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                首里織の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                琉球絣とは別の伝統的工芸品。那覇市首里の織技法の総称と証紙を解説。
              </p>
            </Link>
            <Link
              href="/articles/bingata/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                琉球紅型の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                沖縄を代表する型染め、琉球紅型の特徴と買取相場の傾向を解説。
              </p>
            </Link>
            <Link
              href="/articles/miyako-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                宮古上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                重要無形文化財・宮古島の麻織物。実売データと高く売るポイントを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            琉球絣の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            琉球絣の買取相場はあくまで目安です。証紙・織り・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの琉球絣の正確な価値を確認しましょう。
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
