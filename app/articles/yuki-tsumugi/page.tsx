import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "結城紬の買取相場と高く売るコツ【重要無形文化財の価値】",
  description:
    "結城紬の買取相場を亀甲の細かさ（80・100・160・200亀甲）別に徹底解説。本場結城紬は5万〜10万円、作家物は10万円超も。証紙の「結」マークの見方や高く売るための5つのポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/yuki-tsumugi/",
  },
  openGraph: {
    title: "結城紬の買取相場と高く売るコツ【重要無形文化財の価値】",
    description:
      "結城紬の亀甲別買取相場と高く売るコツを解説。200亀甲以上の希少品は超高額査定も。",
    url: "https://kimonokaitori-biyori.com/articles/yuki-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "結城紬はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "結城紬の買取相場は種類や亀甲の細かさによって大きく異なります。一般的な結城紬で3,000円〜3万円、本場結城紬で5万円〜10万円、有名作家物や200亀甲以上の希少品は10万円〜50万円以上になることもあります。証紙の有無や状態によっても大きく変動します。",
  },
  {
    question: "結城紬の証紙「結」マークとは何ですか？",
    answer:
      "結城紬の証紙に記された「結」マークは、本場結城紬卸商協同組合が発行する品質証明です。このマークがある結城紬は、茨城県結城市およびその周辺地域で伝統的な製法で織られた本場結城紬であることが証明されます。証紙には「結」マークのほか、地機（じばた）か高機（たかばた）かの織り方、絣の種類なども記載されています。",
  },
  {
    question: "亀甲の数が多いほど高く売れるのですか？",
    answer:
      "はい、亀甲の数が多いほど高額査定になる傾向があります。亀甲とは結城紬の絣模様の単位で、反物の幅に入る亀甲模様の数を表します。80亀甲が一般的ですが、100亀甲、160亀甲と細かくなるほど制作に高度な技術と時間が必要になり、希少価値が上がります。200亀甲以上は最高級品として数十万円の買取価格がつくこともあります。",
  },
  {
    question: "古い結城紬でも買い取ってもらえますか？",
    answer:
      "はい、古い結城紬でも買取対象になります。結城紬は「着れば着るほど味が出る」と言われるほど丈夫な素材で、経年による風合いの変化がむしろ魅力とされます。特に昭和期以前の本場結城紬はヴィンテージ品としてコレクター需要があり、状態が良ければ高額査定も期待できます。ただし、カビや大きなシミがある場合は査定額が下がります。",
  },
  {
    question:
      "結城紬を高く売るためにクリーニングに出すべきですか？",
    answer:
      "基本的には、買取前に自費でクリーニングに出す必要はありません。着物専門のクリーニングは数千円〜1万円以上かかりますが、クリーニング代に見合うほど査定額が上がるとは限りません。軽く風通しをして、たとう紙に包んだ状態で査定に出せば十分です。ただし、目立つ汚れがある場合は事前に業者に相談するのがおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "結城紬の買取相場と高く売るコツ【重要無形文化財の価値】",
  description:
    "結城紬の亀甲別買取相場と高く売るコツを解説。200亀甲以上の希少品は超高額査定も。",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
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
    "@id":
      "https://kimonokaitori-biyori.com/articles/yuki-tsumugi/",
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
      name: "結城紬",
      item: "https://kimonokaitori-biyori.com/articles/yuki-tsumugi/",
    },
  ],
};

export default function YukiTsumugiPage() {
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
          { label: "結城紬" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              重要無形文化財
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">結城紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                高く売るコツを徹底解説
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              結城紬は重要無形文化財に指定された日本最高峰の紬織物です。亀甲の細かさ（80・100・160・200亀甲）による価格差や、証紙の「結」マークの見方、本場結城紬を高く売るためのポイントを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年4月16日
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
                    1. 結城紬とは？重要無形文化財の歴史と特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】結城紬の買取相場一覧
                  </a>
                </li>
                <li>
                  <a href="#kikko" className="text-[#6b4c8a] hover:underline">
                    3. 亀甲の細かさと価値の関係
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 証紙の見方と「結」マークの重要性
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 結城紬を高く売る5つのポイント
                  </a>
                </li>
                <li>
                  <a
                    href="#recommended"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    6. 結城紬の買取におすすめの業者3社
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

      {/* 結城紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            結城紬とは？重要無形文化財の歴史と特徴
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              結城紬（ゆうきつむぎ）は、茨城県結城市およびその周辺地域（栃木県小山市など）を主産地とする日本を代表する高級絹織物です。その歴史は約2,000年にも遡り、奈良時代にはすでに「常陸紬（ひたちつむぎ）」として朝廷に献上されていた記録が残っています。
            </p>
            <p>
              結城紬の最大の特徴は、<strong>真綿から手で紡いだ糸</strong>を使用し、<strong>地機（じばた）</strong>と呼ばれる最も原始的な織機で一反ずつ手織りする伝統的な製法にあります。この手間のかかる製法により、軽くて暖かく、独特のふっくらとした風合いが生まれます。
            </p>
            <p>
              1956年（昭和31年）、本場結城紬の「糸つむぎ」「絣くくり」「地機織り」の3工程が<strong>国の重要無形文化財</strong>に指定されました。さらに2010年にはユネスコの<strong>無形文化遺産</strong>にも登録され、世界的にもその価値が認められています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                結城紬の主な特徴
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    真綿から手紡ぎした糸を使用し、軽くて暖かい風合い
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    地機（じばた）による手織りで、独特のふっくらした質感
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    「着れば着るほど味が出る」と言われ、着込むほど体に馴染む
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    国の重要無形文化財・ユネスコ無形文化遺産に登録
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    1反の制作に1年以上かかるものもあり、希少性が極めて高い
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                本場結城紬と一般結城紬の違い
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                「結城紬」には「本場結城紬」と「一般の結城紬（石下結城紬など）」があり、両者の買取価格には大きな差があります。本場結城紬は手紡ぎ・手くくり・地機織りの3工程をすべて手作業で行うのに対し、石下結城紬などは一部の工程で機械を使用しています。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#6b4c8a] text-white">
                      <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                        項目
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        本場結城紬
                      </th>
                      <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                        一般結城紬（石下など）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                        糸の製法
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        真綿から手紡ぎ
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        手紡ぎまたは機械紡績
                      </td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                        絣くくり
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        手くくり
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        型紙捺染など
                      </td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                        織り方
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        地機（じばた）
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        高機（たかばた）
                      </td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                        制作期間
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        半年〜1年以上
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        1〜3ヶ月程度
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                        文化財指定
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        重要無形文化財
                      </td>
                      <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                        なし
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】結城紬の買取相場一覧
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            結城紬は種類によって買取相場が大きく異なります。本場結城紬と一般結城紬では数倍〜10倍以上の価格差がつくことも珍しくありません。以下に2026年時点の買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    本場結城紬（無地・縞）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    手紡ぎ・地機織り。無地や縞柄
                  </td>
                  <td className="px-4 py-3 font-medium">5万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">
                    証紙ありが前提
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    本場結城紬（絣物）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    手紡ぎ・手くくり・地機織り
                  </td>
                  <td className="px-4 py-3 font-medium">8万円〜30万円</td>
                  <td className="px-4 py-3 text-gray-700">
                    亀甲数で大きく変動
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    作家物・人間国宝
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    有名作家や伝統工芸士の作品
                  </td>
                  <td className="px-4 py-3 font-medium">10万円〜50万円超</td>
                  <td className="px-4 py-3 text-gray-700">
                    落款・証紙必須
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    一般結城紬（石下結城紬等）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    高機織り・一部機械製法
                  </td>
                  <td className="px-4 py-3 font-medium">3,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">
                    状態や柄による
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    結城紬（証紙なし）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    証紙がない結城紬
                  </td>
                  <td className="px-4 py-3 font-medium">1,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    本場でも大幅減額
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品・証紙ありの場合の目安です。状態やサイズによっても変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                本場結城紬（5万円〜30万円以上）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                本場結城紬は、真綿手紡ぎ糸を使い、地機（じばた）で織り上げた最高級品です。1反を織り上げるのに半年から1年以上かかることもあり、新品の販売価格は50万円〜100万円以上にもなります。買取相場は種類や状態によりますが、絣物の本場結城紬は特に高額で、80亀甲で8万円前後、160亀甲以上で15万円〜30万円の値がつくことも珍しくありません。無地や縞でも地機織りの本場結城紬は5万円以上の査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                作家物・人間国宝の結城紬（10万円〜50万円超）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                有名な伝統工芸士や人間国宝が手がけた結城紬は、通常の本場結城紬を大きく上回る買取価格がつきます。特に200亀甲以上の超精緻な絣模様を持つ作家物は、数十万円の高額査定になることもあります。落款（作家の署名・印）の有無が重要な判断基準となります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                一般結城紬・石下結城紬（3,000円〜3万円）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                石下結城紬をはじめとする一般的な結城紬は、高機（たかばた）で織られており、本場結城紬ほどの買取価格にはなりません。ただし、正絹素材であること、産地の技法が活かされていることから、一般的な着物と比較すると十分に高い買取価格が期待できます。柄の人気度や状態の良さによっては3万円以上の査定がつくケースもあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 亀甲の細かさと価値 */}
      <section id="kikko" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            亀甲の細かさと価値の関係
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              結城紬の価値を決める最も重要な要素のひとつが<strong>「亀甲（きっこう）」の細かさ</strong>です。亀甲とは、結城紬の絣模様の基本単位で、六角形の亀の甲羅に似た形をしています。反物の幅（約38cm）に入る亀甲模様の数を「○○亀甲」と表し、この数が多いほど絣模様が細かく、制作に高度な技術と膨大な時間が必要になります。
            </p>
            <p>
              亀甲数が多いほど糸を細く紡ぐ技術、絣をくくる精密さ、織りの正確さが求められるため、<strong>亀甲数が多い＝希少価値が高い＝買取価格が高い</strong>という関係が成り立ちます。
            </p>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    亀甲数
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    難易度
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    制作期間の目安
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場の目安
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    希少性
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    80亀甲
                  </td>
                  <td className="px-4 py-3 text-gray-700">標準</td>
                  <td className="px-4 py-3 text-gray-700">6ヶ月〜</td>
                  <td className="px-4 py-3 font-medium">5万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">比較的多い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    100亀甲
                  </td>
                  <td className="px-4 py-3 text-gray-700">高い</td>
                  <td className="px-4 py-3 text-gray-700">8ヶ月〜1年</td>
                  <td className="px-4 py-3 font-medium">10万円〜20万円</td>
                  <td className="px-4 py-3 text-gray-700">やや少ない</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    160亀甲
                  </td>
                  <td className="px-4 py-3 text-gray-700">非常に高い</td>
                  <td className="px-4 py-3 text-gray-700">1年〜1年半</td>
                  <td className="px-4 py-3 font-medium">15万円〜30万円</td>
                  <td className="px-4 py-3 text-gray-700">希少</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    200亀甲以上
                  </td>
                  <td className="px-4 py-3 text-gray-700">最高峰</td>
                  <td className="px-4 py-3 text-gray-700">1年半〜2年以上</td>
                  <td className="px-4 py-3 font-medium">
                    30万円〜50万円超
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    極めて希少
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は本場結城紬（地機織り・証紙あり）の場合の目安です。
          </p>

          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                80亀甲 ― 本場結城紬の基本
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                80亀甲は本場結城紬の中で最も一般的な亀甲数です。反物の幅に80個の亀甲模様が入る細かさで、肉眼でも絣模様の美しさをはっきりと楽しめます。新品で50万円前後、買取では5万円〜10万円程度の相場です。本場結城紬としての品格は十分にあり、証紙がしっかり揃っていれば安定した買取価格が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                100亀甲 ― ワンランク上の逸品
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                100亀甲は80亀甲よりも一段細かい絣模様で、制作にはさらに高度な技術が求められます。糸をより細く紡ぎ、絣のくくりも精密にする必要があるため、制作期間は80亀甲の1.5倍ほどかかります。買取相場は10万円〜20万円で、80亀甲と比較して明確な価格差があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                160亀甲 ― 熟練職人だけが織れる逸品
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                160亀甲になると、糸の細さは極限に近く、くくりの精密さも最高レベルが求められます。織り上がった反物は、まるで精緻なレースのような美しさで、手触りもさらに柔らかくなります。制作できる職人は限られており、生産量も非常に少ないため、15万円〜30万円の高額査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                200亀甲以上 ― 最高峰の芸術品
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                200亀甲以上は結城紬の最高峰で、制作できる職人はごくわずかです。糸の太さは髪の毛ほどの細さになり、1反を織り上げるのに2年以上かかることもあります。新品の販売価格は200万円を超えることもあり、買取でも30万円〜50万円以上の超高額査定になります。現在ではほとんど生産されておらず、市場に出回ること自体が極めて稀です。
              </p>
            </div>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">
                亀甲数の確認方法：
              </strong>
              亀甲数は証紙に記載されているのが最も確実です。証紙がない場合は、反物の幅にいくつの亀甲模様が入っているかを数えることで判断できますが、100亀甲以上になると非常に細かいため、専門の査定員に見てもらうことをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙の見方 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            証紙の見方と「結」マークの重要性
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              結城紬の買取において、<strong>証紙の有無は査定額を大きく左右する最重要ポイント</strong>です。証紙がある場合とない場合では、買取価格が3倍〜5倍以上の差がつくこともあります。
            </p>
            <p>
              本場結城紬の証紙は複数の団体から発行されており、それぞれに異なるマークが使用されています。最も重要なのが<strong>本場結城紬卸商協同組合の「結」マーク</strong>です。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    証紙の種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    発行元
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    マーク
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    記載内容
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    本場結城紬検査合格証
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    本場結城紬卸商協同組合
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    「結」マーク
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    産地・織り方・絣種類
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    重要無形文化財証票
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    本場結城紬織物協同組合
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    紫色の証票
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    手紡ぎ・手くくり・地機の証明
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    伝統的工芸品証紙
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    経済産業大臣指定
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統マーク
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    伝統的工芸品の証明
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    産地証明
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    茨城県結城郡織物協同組合
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    組合マーク
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    産地の証明
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                証紙ありの場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    本場結城紬であることが公的に証明される
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    地機か高機かの織り方が明確になる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    絣の種類と亀甲数が確認できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>
                    買取相場の上限に近い査定が期待できる
                  </span>
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
                  <span>
                    本場結城紬かどうかの証明ができない
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    石下結城紬との区別がつきにくい
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    査定額が30〜70%ほど下がる可能性
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>
                    専門知識のある査定員でないと適正評価が難しい
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">
                「結」マークの確認ポイント：
              </strong>
              本場結城紬の証紙の中で最も重要な「結」マークは、反物の端に貼り付けられた紙のラベルに記載されています。「結」の文字が大きく書かれ、その下に「本場結城紬」と記載されています。証紙は購入時にたとう紙や箱に一緒に入れられていることが多いので、査定前に必ず確認しましょう。見つからない場合は、購入した呉服店に相談するのもひとつの方法です。
            </p>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3">
              証紙に記載される織り方の見分け方
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">
              証紙には織り方が記載されていますが、この表記によって買取価格が大きく変わります。
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>「地機（じばた）」</strong>
                  ：最も原始的で高度な織機。重要無形文化財の要件のひとつ。買取価格が最も高い
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>「高機（たかばた）」</strong>
                  ：一般的な手織り機。地機より生産効率が高いが、風合いがやや異なる。買取価格は地機の半分程度
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            結城紬を高く売る5つのポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・落款は必ずセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                結城紬は証紙の有無で査定額が3倍以上変わることがあります。「結」マークの証紙、重要無形文化財の証票、伝統的工芸品の証紙など、すべての証紙を揃えて査定に出しましょう。また、作家物の場合は落款（作家のサイン・印）が入った反物の端も切り取らないよう注意が必要です。たとう紙の中、購入時の箱、着物と一緒に保管している袋の中を探してみてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：着物専門の買取業者に依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                結城紬は亀甲数や織り方の違いで価値が大きく変わるため、専門知識のある査定員がいる業者に依頼することが不可欠です。リサイクルショップでは80亀甲も160亀甲も同じ価格をつけられてしまう可能性があります。着物専門業者であれば、亀甲数・地機か高機かの違い・作家の特定まで行えるため、結城紬の正当な価値を評価してもらえます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                結城紬の買取は業者によって10万円以上の差が出ることがあります。特に100亀甲以上の高額品は、業者の在庫状況や販売ルートによって査定額が大きく変わります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。出張買取を利用すれば、自宅にいながら複数社の査定を受けることができます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：保管状態を良好に保つ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                結城紬は真綿糸を使用しているため、虫食い・カビには特に注意が必要です。たとう紙に包み、防虫剤（ナフタリンは変色の原因になるので避ける）と一緒に保管しましょう。年に1〜2回の虫干しも効果的です。結城紬は着込むほど風合いが良くなる着物ですが、保管状態が悪いと査定額が大幅に下がります。売ると決めたら早めに査定に出すことをおすすめします。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント5：帯や小物もセットで査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                結城紬に合わせていた帯がある場合は、セットで査定に出すと全体の買取額がアップすることがあります。特に結城紬にマッチする帯（塩瀬の染め帯や西陣織の名古屋帯など）は単体でも価値があります。帯締め・帯揚げ・帯留めなどの和装小物も一緒に出しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者3社 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            結城紬の買取におすすめの業者3社
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            結城紬を高く売るためには、着物の専門知識が豊富で、結城紬の亀甲数や織り方の違いを正しく評価できる買取業者を選ぶことが重要です。以下の3社は、結城紬の買取実績が豊富で信頼性の高い業者です。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  1
                </span>
                <h3 className="font-bold text-[#6b4c8a] text-base">
                  買取大吉
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-2">
                全国に700店舗以上を展開する大手買取チェーン。着物専門の査定員が在籍しており、結城紬の亀甲数や証紙の評価に精通しています。出張買取・宅配買取に対応しており、査定料・キャンセル料が無料です。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    結城紬の買取実績が豊富、高額査定の口コミ多数
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>出張買取・宅配買取・店頭買取に対応</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  2
                </span>
                <h3 className="font-bold text-[#6b4c8a] text-base">
                  ウリエル
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-2">
                着物の出張買取に特化した買取業者。結城紬をはじめとする高級紬の買取に強みがあり、証紙の見方や亀甲数の評価にも対応しています。女性の査定員を指定できるサービスもあり、安心して利用できます。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>着物買取特化で高額査定に期待できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    女性査定員指定可能、査定料・キャンセル料無料
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c9a76c] text-white font-bold text-sm">
                  3
                </span>
                <h3 className="font-bold text-[#6b4c8a] text-base">
                  バイセル
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-2">
                テレビCMでもおなじみの大手買取業者。全国対応の出張買取で、最短即日での査定・買取が可能です。着物の買取実績が豊富で、結城紬の適正価格を提示してくれます。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    最短即日対応、スピーディーな査定が魅力
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    テレビCM放映中の知名度が高い大手業者
                  </span>
                </li>
              </ul>
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
                大島紬の種類別買取相場と高く売るコツ。泥染め・藍大島・白大島の価格比較も。
              </p>
            </Link>
            <Link
              href="/articles/kaga-yuzen/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                加賀友禅の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                加賀友禅の作家別買取価格表。人間国宝・木村雨山の作品は100万円超も。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            結城紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            結城紬の買取相場はあくまで目安です。亀甲数・織り方・作家・証紙の有無・状態によって実際の査定額は大きく変わります。着物専門の査定員がいる信頼できる業者に無料査定を依頼して、お手持ちの結城紬の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
