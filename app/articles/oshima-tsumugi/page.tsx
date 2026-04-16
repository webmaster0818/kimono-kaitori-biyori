import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "大島紬の買取相場と高く売るコツ【2026年最新】",
  description:
    "大島紬の買取相場を種類別（泥染め・藍大島・白大島・色大島）に徹底解説。作家物は10万円超も。証紙の重要性や高く売るためのポイントを2026年最新情報でまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/oshima-tsumugi/",
  },
  openGraph: {
    title: "大島紬の買取相場と高く売るコツ【2026年最新】",
    description:
      "大島紬の種類別買取相場と高く売るコツを解説。泥染め・藍大島・白大島の価格比較も。",
    url: "https://kimonokaitori-biyori.com/articles/oshima-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "大島紬はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "大島紬の買取相場は種類や状態によって大きく異なります。一般的な泥染め大島紬で3万円〜5万円、藍大島で2万円〜4万円、白大島で3万円〜8万円程度です。有名作家物や希少な柄の場合は10万円〜30万円以上になることもあります。証紙の有無や状態によっても大きく変動します。",
  },
  {
    question: "大島紬の証紙はどこで確認できますか？",
    answer:
      "大島紬の証紙は、購入時にたとう紙や箱に一緒に付けられていることが多いです。本場大島紬の証紙には「本場大島紬」の文字と、鹿児島県本場大島紬織物協同組合の地球印マーク、または奄美大島の旗印マークが記載されています。証紙が見つからない場合は、反物の端（耳）に織り込まれた産地表示を確認することもできます。",
  },
  {
    question: "古い大島紬でも買い取ってもらえますか？",
    answer:
      "はい、古い大島紬でも買取対象になることが多いです。大島紬は丈夫で長持ちする素材のため、多少の経年劣化があっても価値が認められます。特にヴィンテージの大島紬はコレクター需要があり、昭和中期以前の珍しい柄は高額査定が期待できます。ただし、カビや大きなシミがある場合は査定額が大幅に下がることがあります。",
  },
  {
    question: "大島紬と他の紬の見分け方は？",
    answer:
      "大島紬は、独特の光沢としなやかな手触りが特徴です。泥染め大島紬は黒褐色の深い色合いで、絹糸に泥のミネラル分が吸着することで独特の風合いが生まれます。一般的な紬と比べると軽くて柔らかく、着るほどに体に馴染みます。最も確実な見分け方は、証紙で産地を確認することです。",
  },
  {
    question: "大島紬を高く売るために自分でクリーニングに出すべきですか？",
    answer:
      "基本的には、買取前にクリーニングに出す必要はありません。着物専門のクリーニングは数千円〜1万円以上かかりますが、クリーニング代に見合うほど査定額がアップするとは限りません。ただし、目立つシミや汚れがある場合は、査定前に業者に相談することをおすすめします。自宅でできる範囲の風通しや軽い手入れ程度で十分です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "大島紬の買取相場と高く売るコツ【2026年最新】",
  description:
    "大島紬の種類別買取相場と高く売るコツを解説。泥染め・藍大島・白大島の価格比較も。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
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
    "@id": "https://kimonokaitori-biyori.com/articles/oshima-tsumugi/",
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
      name: "大島紬",
      item: "https://kimonokaitori-biyori.com/articles/oshima-tsumugi/",
    },
  ],
};

export default function OshimaTsumugiPage() {
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
          { label: "大島紬" },
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
              <span className="text-gradient">大島紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                高く売るコツを徹底解説
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              大島紬は日本三大紬のひとつで、着物の中でも特に高い買取価格が期待できる種類です。泥染め・藍大島・白大島・色大島の種類別相場や、高く売るためのポイントを詳しく解説します。
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
                  <a href="#about" className="text-[#6b4c8a] hover:underline">
                    1. 大島紬とは？特徴と歴史
                  </a>
                </li>
                <li>
                  <a href="#price-by-type" className="text-[#6b4c8a] hover:underline">
                    2. 【種類別】大島紬の買取相場一覧
                  </a>
                </li>
                <li>
                  <a href="#artist" className="text-[#6b4c8a] hover:underline">
                    3. 作家物の大島紬は10万円超え
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 証紙の重要性と見分け方
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 大島紬を高く売る5つのポイント
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-[#6b4c8a] hover:underline">
                    6. 大島紬と他の紬の買取価格比較
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

      {/* 大島紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            大島紬とは？特徴と歴史
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              大島紬（おおしまつむぎ）は、鹿児島県の奄美大島を主産地とする日本を代表する高級絹織物です。その歴史は1,300年以上にも遡り、「結城紬」「牛首紬」と並んで日本三大紬のひとつに数えられています。
            </p>
            <p>
              大島紬の最大の特徴は、<strong>精緻な絣（かすり）模様</strong>と<strong>独特の光沢・しなやかさ</strong>です。1反の着物を織るのに半年〜1年以上の時間がかかる手織りの本場大島紬は、熟練の職人技が凝縮された芸術品とも言えます。
            </p>
            <p>
              特に「泥染め」で知られる泥大島は、テーチ木（車輪梅）の煮汁と泥田のミネラル分（鉄分）を反応させることで、独特の黒褐色の深い色合いと柔らかな風合いを生み出します。この泥染めの技法は世界でも奄美大島だけの伝統技法です。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">大島紬の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>絹100%で軽くてしなやか、着るほどに体に馴染む</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>精緻な絣模様が美しく、幾何学的なデザインが多い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>泥染めによる独特の黒褐色と光沢が魅力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>丈夫で耐久性が高く、世代を超えて受け継がれる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>国の伝統的工芸品に指定されている</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】大島紬の買取相場一覧
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            大島紬は染め方や色によっていくつかの種類に分かれ、それぞれ買取相場が異なります。以下に2026年時点の買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">種類</th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold">買取相場（一般品）</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場（高級品）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">泥染め大島紬</td>
                  <td className="px-4 py-3 text-gray-700">テーチ木と泥田で染色。黒褐色の深い色合い</td>
                  <td className="px-4 py-3 font-medium">3万円〜5万円</td>
                  <td className="px-4 py-3 font-medium">5万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">藍大島</td>
                  <td className="px-4 py-3 text-gray-700">藍染めで仕上げた大島紬。深い藍色が特徴</td>
                  <td className="px-4 py-3 font-medium">2万円〜4万円</td>
                  <td className="px-4 py-3 font-medium">4万円〜15万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">白大島</td>
                  <td className="px-4 py-3 text-gray-700">白地に絣模様。華やかで上品な印象</td>
                  <td className="px-4 py-3 font-medium">3万円〜8万円</td>
                  <td className="px-4 py-3 font-medium">8万円〜20万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">色大島</td>
                  <td className="px-4 py-3 text-gray-700">化学染料で多彩な色合いを実現</td>
                  <td className="px-4 py-3 font-medium">1万円〜3万円</td>
                  <td className="px-4 py-3 font-medium">3万円〜10万円以上</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">泥藍大島</td>
                  <td className="px-4 py-3 text-gray-700">泥染めと藍染めを組み合わせた希少品</td>
                  <td className="px-4 py-3 font-medium">3万円〜6万円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">6万円〜25万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は手織りの本場大島紬の目安です。機械織りは相場が下がります。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">泥染め大島紬（3万円〜30万円以上）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬の中でも最も知名度が高く、人気のある種類です。テーチ木（車輪梅）の煮汁に糸を浸けて染め、さらに泥田に浸すことで独特の黒褐色を生み出します。この工程を20〜30回繰り返すことで、深みのある色合いとしなやかな風合いが生まれます。絣の細かさ（マルキ数）が高いほど高額になり、12マルキ以上の精緻な作品は特に高い評価を受けます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">藍大島（2万円〜15万円以上）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                藍染めで仕上げた大島紬で、深い藍色が美しい着物です。現在は生産量が少なく、昭和後期以前に織られた藍大島はヴィンテージ品として希少価値が高まっています。状態が良い藍大島は、泥大島と同等かそれ以上の価格で取引されることもあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">白大島（3万円〜20万円以上）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                白地に絣模様が映える華やかな大島紬です。白大島は泥染めではなく、絹糸本来の白さを活かして織り上げます。フォーマルな場面でも着用でき、訪問着のような使い方ができるため需要が安定しています。特に結婚式やパーティーなどでの着用に人気があり、買取相場も高めです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">色大島（1万円〜10万円以上）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                化学染料を用いてさまざまな色合いに仕上げた大島紬です。泥染めや藍染めと比べると買取相場はやや低めですが、柄の美しさや状態次第では高額になることもあります。特に人気の色合い（淡いピンクや紫系）や、珍しい絣模様のものは評価が高くなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 作家物 */}
      <section id="artist" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            作家物の大島紬は10万円超え
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              有名作家が手がけた大島紬は、一般的な大島紬とは別格の買取価格がつきます。特に人間国宝に認定された作家の作品や、受賞歴のある名匠の作品は、10万円〜30万円以上の買取価格が期待できます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">作家・工房名</th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">都喜ヱ門（藤絹織物）</td>
                  <td className="px-4 py-3 text-gray-700">「大島紬の巨匠」と称される。精緻な絣が特徴</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">10万円〜30万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">恵大島紬織物</td>
                  <td className="px-4 py-3 text-gray-700">高品質な泥染め大島紬で知られる名門工房</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">5万円〜20万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">白川貞夫</td>
                  <td className="px-4 py-3 text-gray-700">伝統工芸士。繊細な絣技法の第一人者</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">8万円〜25万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">前田紬工芸</td>
                  <td className="px-4 py-3 text-gray-700">独創的なデザインの大島紬を手がける</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a]">5万円〜15万円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold rounded-bl-lg">南風原綾子</td>
                  <td className="px-4 py-3 text-gray-700">現代的な感性で大島紬をデザイン</td>
                  <td className="px-4 py-3 font-medium text-[#6b4c8a] rounded-br-lg">5万円〜15万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">ポイント：</strong>
              作家物の大島紬を見分けるには、反物の端や証紙に記された落款（作家のサイン・印）を確認しましょう。落款があれば作家物として高い評価を受けられます。落款が不明な場合でも、着物専門の買取業者であれば織りの特徴から作家を特定できることがあります。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙の重要性 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            証紙の重要性と見分け方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              大島紬の買取において、<strong>証紙の有無は査定額に決定的な影響</strong>を与えます。証紙があるかないかで、買取価格が2倍以上変わることも珍しくありません。
            </p>
            <p>
              本場大島紬の証紙は、産地の組合が発行する公的な品質保証書です。この証紙により、手織りか機械織りか、絣の種類、マルキ数（絣の細かさ）などが証明されます。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">証紙の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">発行元</th>
                  <th className="px-4 py-3 text-left font-semibold">マーク</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">鹿児島県本場大島紬</td>
                  <td className="px-4 py-3 text-gray-700">本場大島紬織物協同組合</td>
                  <td className="px-4 py-3 text-gray-700">地球印マーク</td>
                  <td className="px-4 py-3 text-gray-700">鹿児島県産の証明。最も一般的</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">奄美大島産</td>
                  <td className="px-4 py-3 text-gray-700">本場奄美大島紬協同組合</td>
                  <td className="px-4 py-3 text-gray-700">旗印マーク</td>
                  <td className="px-4 py-3 text-gray-700">奄美大島産の証明。伝統的産地</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">都城産</td>
                  <td className="px-4 py-3 text-gray-700">都城大島紬織物事業協同組合</td>
                  <td className="px-4 py-3 text-gray-700">鶴印マーク</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">宮崎県都城市産の証明</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>産地・品質が公的に証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>手織りか機械織りかが明確になる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>マルキ数（絣の細かさ）が確認できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>買取相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地の証明ができない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>類似品と区別がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が20〜50%ほど下がる可能性</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>経験豊富な査定員でないと正当な評価が難しい</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            大島紬を高く売る5つのポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙は必ず一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙があるかないかで買取価格は大きく変わります。たとう紙の中、購入時の箱の中、着物と一緒に保管している袋の中など、心当たりのある場所をすべて探しましょう。証紙だけでなく、購入時のレシートや保証書なども査定時の参考になります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：着物専門の買取業者に依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬は専門知識がないと正当な評価が難しい着物です。リサイクルショップや総合買取店ではなく、着物に精通した専門の買取業者に査定を依頼しましょう。大島紬の種類・マルキ数・作家を見分けられる査定員がいる業者を選ぶことが大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もり
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬の査定は業者によって数万円の差が出ることがあります。最低でも3社以上に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。出張買取を利用すれば、自宅にいながら複数業者の査定を受けることができます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：保管状態を良好に保つ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬は正絹のため、湿気やカビに弱い素材です。たとう紙に包み、防湿剤と一緒に通気性の良い場所で保管しましょう。年に1〜2回は風通しの良い日陰で虫干しを行うと、カビの発生を防げます。売ると決めたら、なるべく早く査定に出すことも大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント5：帯もセットで査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬に合わせていた帯がある場合は、セットで査定に出すと全体の買取額がアップすることがあります。特に西陣織の袋帯や、大島紬に合う名古屋帯は単体でも価値があります。帯締め・帯揚げなどの小物も一緒に出しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 他の紬との比較 */}
      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            大島紬と他の紬の買取価格比較
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            大島紬の買取相場を他の有名な紬と比較してみましょう。産地やブランドによって買取価格は大きく異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">紬の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">産地</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">高級品の相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大島紬</td>
                  <td className="px-4 py-3 text-gray-700">鹿児島県</td>
                  <td className="px-4 py-3">1万円〜5万円</td>
                  <td className="px-4 py-3">5万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">結城紬</td>
                  <td className="px-4 py-3 text-gray-700">茨城県・栃木県</td>
                  <td className="px-4 py-3">1万円〜5万円</td>
                  <td className="px-4 py-3">5万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">牛首紬</td>
                  <td className="px-4 py-3 text-gray-700">石川県</td>
                  <td className="px-4 py-3">5,000円〜3万円</td>
                  <td className="px-4 py-3">3万円〜15万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">塩沢紬</td>
                  <td className="px-4 py-3 text-gray-700">新潟県</td>
                  <td className="px-4 py-3">3,000円〜2万円</td>
                  <td className="px-4 py-3">2万円〜10万円以上</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">久米島紬</td>
                  <td className="px-4 py-3 text-gray-700">沖縄県</td>
                  <td className="px-4 py-3">3,000円〜2万円</td>
                  <td className="px-4 py-3 rounded-br-lg">2万円〜10万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 証紙の見分け方 */}
      <section id="shoshi" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#c9a76c] rounded-full inline-block" />
            大島紬の証紙の見分け方
          </h3>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            大島紬の価値を判断するうえで最も重要なのが「証紙」です。証紙は産地や製法を証明する公的なラベルであり、買取価格に大きく影響します。大島紬には主に3種類の証紙があり、それぞれ発行元・デザイン・品質が異なります。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h4 className="font-bold text-[#6b4c8a] mb-2 text-base">
                地球印（本場奄美大島紬）
              </h4>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-1">
                <li><strong>発行元：</strong>本場奄美大島紬協同組合（鹿児島県奄美大島）</li>
                <li><strong>デザインの特徴：</strong>地球儀のマークが描かれた証紙。最も伝統的な産地の証明</li>
                <li><strong>品質の違い：</strong>泥染め・手織りの最高級品が多く、買取価格も最も高い傾向。テーチ木（車輪梅）と泥を使った伝統的な泥染めが特徴</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h4 className="font-bold text-[#6b4c8a] mb-2 text-base">
                旗印（本場大島紬）
              </h4>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-1">
                <li><strong>発行元：</strong>本場大島紬織物協同組合（鹿児島県本土）</li>
                <li><strong>デザインの特徴：</strong>旗のマークが描かれた証紙</li>
                <li><strong>品質の違い：</strong>鹿児島市周辺で生産。奄美産に次いで高い評価を受ける。機械織りの製品もあるため、証紙の記載内容をよく確認することが重要</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h4 className="font-bold text-[#6b4c8a] mb-2 text-base">
                鶴印（本場大島紬）
              </h4>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-1">
                <li><strong>発行元：</strong>都城織物事業協同組合（宮崎県都城市）</li>
                <li><strong>デザインの特徴：</strong>鶴のマークが描かれた証紙</li>
                <li><strong>品質の違い：</strong>都城で生産される大島紬。生産量は少ないが、手織りの良品も存在する</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">証紙の見方のポイント：</strong>
              証紙に記載されている「<strong>経緯絣（たてよこがすり）</strong>」は縦糸・横糸ともに手作業で絣を合わせた手織りの最高級品で、買取価格も高額になります。一方、「<strong>緯絣（よこがすり）</strong>」は横糸のみに絣を使用したもので、比較的安価な価格帯となります。証紙がない場合でも専門の査定員であれば織りや染めから判断できますが、証紙があることで買取価格が大幅にアップする可能性があります。
            </p>
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
              href="/articles/obi-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                帯の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                袋帯・名古屋帯・丸帯の買取価格と、西陣織・博多織の高額買取情報。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            大島紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            大島紬の買取相場はあくまで目安です。種類・マルキ数・作家・状態によって実際の査定額は大きく変わります。着物専門の査定員がいる信頼できる業者に無料査定を依頼して、お手持ちの大島紬の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
