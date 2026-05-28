import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の季節ごとの着分けルール｜袷・単衣・薄物の時期",
  description:
    "着物の季節による着分けルールを徹底解説。袷（10月〜5月）、単衣（6月・9月）、薄物（7月〜8月）の時期と素材の違い、季節に合った帯や小物の選び方、買取相場への影響まで詳しく紹介します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/seasonal-rules/",
  },
  openGraph: {
    title: "着物の季節ごとの着分けルール｜袷・単衣・薄物の時期",
    description:
      "袷・単衣・薄物の着分け時期と素材の違いを徹底解説。季節に合った着物選びの基本。",
    url: "https://kimonokaitori-biyori.com/articles/seasonal-rules/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "袷・単衣・薄物の違いを簡単に教えてください",
    answer:
      "袷（あわせ）は表地と裏地の2枚仕立てで10月〜5月に着用する着物です。単衣（ひとえ）は裏地がなく1枚仕立てで6月と9月に着用します。薄物（うすもの）は絽・紗などの透ける生地で仕立てた着物で7月〜8月の盛夏に着用します。それぞれ季節に合った素材と仕立て方で、快適に着物を楽しめるよう工夫されています。",
  },
  {
    question: "季節の着分けルールは絶対に守らなければなりませんか？",
    answer:
      "伝統的な着分けルールは目安であり、現代では気候変動もあって柔軟に考える方が増えています。特に近年は5月でも夏日になることがあり、早めに単衣に切り替える方も多いです。フォーマルな場面では伝統的なルールに従った方が無難ですが、カジュアルな場面では体感温度に合わせて自由に選んで問題ありません。",
  },
  {
    question: "季節外れの着物でも買取してもらえますか？",
    answer:
      "はい、季節外れの着物でも買取は可能です。大手買取業者は年間を通じてすべての季節の着物を買取しています。ただし、シーズン直前の方が需要が高いため、袷は秋口、単衣や薄物は春先に売ると若干高い査定額が期待できます。とはいえ、保管による劣化リスクを考えると、売りたいときに早めに売る方が結果的にはお得です。",
  },
  {
    question: "単衣の着物はいつからいつまで着られますか？",
    answer:
      "伝統的なルールでは6月と9月の2か月間が単衣の時期です。しかし近年の気候変動により、5月下旬〜6月末、9月〜10月上旬まで着る方が増えています。特に5月の暑い日に袷を着続けるのは体調面でも無理があるため、5月中旬から単衣に切り替える方も少なくありません。お茶会など格式が求められる場面では従来のルール通りが無難です。",
  },
  {
    question: "夏の着物（薄物）にはどんな種類がありますか？",
    answer:
      "夏の薄物には主に、絽（ろ）、紗（しゃ）、麻（上布）があります。絽は等間隔に透ける横筋が入った生地で、フォーマルからカジュアルまで幅広く使えます。紗は全体が透ける生地でカジュアル向きです。麻の着物（上布）は宮古上布や越後上布など高級品が多く、独特のシャリ感と涼しさが特徴です。浴衣も薄物に含まれますが、最もカジュアルな位置づけです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物の季節ごとの着分けルール｜袷・単衣・薄物の時期",
  description:
    "袷・単衣・薄物の着分け時期と素材の違いを徹底解説。季節に合った着物選びの基本。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
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
    "@id": "https://kimonokaitori-biyori.com/articles/seasonal-rules/",
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
      name: "コラム",
      item: "https://kimonokaitori-biyori.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "着物の季節ごとの着分けルール",
      item: "https://kimonokaitori-biyori.com/articles/seasonal-rules/",
    },
  ],
};

export default function SeasonalRulesPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "着物の季節ごとの着分けルール" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              Know型ガイド
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物の季節ごとの着分けルール</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                袷・単衣・薄物の時期と選び方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物には季節に応じた「着分け」のルールがあります。袷（あわせ）は秋冬〜春、単衣（ひとえ）は初夏と初秋、薄物（うすもの）は盛夏に着用するのが基本です。この記事では、それぞれの特徴と着用時期、季節に合った帯や小物の選び方、そして買取相場への影響まで詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年5月17日
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
                <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 着物の着分けルールとは</a></li>
                <li><a href="#awase" className="text-[#6b4c8a] hover:underline">2. 袷（あわせ）の特徴と時期</a></li>
                <li><a href="#hitoe" className="text-[#6b4c8a] hover:underline">3. 単衣（ひとえ）の特徴と時期</a></li>
                <li><a href="#usumono" className="text-[#6b4c8a] hover:underline">4. 薄物（うすもの）の特徴と時期</a></li>
                <li><a href="#calendar" className="text-[#6b4c8a] hover:underline">5. 月別・着分けカレンダー</a></li>
                <li><a href="#obi" className="text-[#6b4c8a] hover:underline">6. 季節に合った帯と小物の選び方</a></li>
                <li><a href="#price-impact" className="text-[#6b4c8a] hover:underline">7. 季節と買取相場の関係</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* セクション1 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物の着分けルールとは
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              日本の着物文化では、四季の移ろいに合わせて着る着物を変える「着分け（きわけ）」の習慣があります。これは単に見た目の季節感だけでなく、気候に合った素材を選ぶことで快適に着物を楽しむための知恵でもあります。
            </p>
            <p>
              着分けの基本は3つの仕立て方に基づいています。<strong>袷（あわせ）</strong>は表地と裏地の2枚で仕立てた着物、<strong>単衣（ひとえ）</strong>は裏地なしの1枚仕立て、<strong>薄物（うすもの）</strong>は透ける素材を使った1枚仕立てです。
            </p>
            <p>
              この着分けルールは買取査定にも影響します。年間を通じて着用期間が最も長い袷は需要が安定しており、買取相場も高めです。一方、着用期間が限られる単衣や薄物は、時期によって買取価格が変動することがあります。
            </p>
          </div>
        </div>
      </section>

      {/* セクション2：袷 */}
      <section id="awase" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            袷（あわせ）の特徴と時期
          </h2>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">袷の基本情報</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>着用時期：</strong>10月〜5月（約8か月間）</li>
                  <li><strong>仕立て：</strong>表地＋裏地の2枚仕立て</li>
                  <li><strong>裏地：</strong>胴裏（白い裏地）＋八掛（裾まわりの裏地）</li>
                  <li><strong>重量感：</strong>単衣・薄物より重い</li>
                  <li><strong>保温性：</strong>高い（秋冬に最適）</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#c9a76c] mb-3 text-base">袷の特徴</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  袷は最もポピュラーな仕立て方で、着物の中で最も着用期間が長い種類です。裏地がつくことで生地にハリが出て、美しいドレープ（垂れ具合）が生まれます。<Link href="/articles/lining-guide/" className="text-[#6b4c8a] hover:underline">裏地（八掛・胴裏）</Link>の色や柄が、見え隠れするおしゃれポイントにもなります。買取市場では需要が最も安定しており、通年で高値がつきやすい仕立てです。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">袷に合わせる季節の柄</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">秋（10月〜11月）</p>
                <p>紅葉、菊、萩、すすき、秋草文様など。秋の風情を感じさせる暖色系の色合いが好まれます。</p>
              </div>
              <div>
                <p className="font-semibold mb-1">冬（12月〜2月）</p>
                <p>松竹梅、雪輪、椿、南天など。お正月には吉祥文様がふさわしいです。</p>
              </div>
              <div>
                <p className="font-semibold mb-1">春（3月〜4月）</p>
                <p>桜、蝶、藤、牡丹など。春らしい明るい色合いで華やかに装います。</p>
              </div>
              <div>
                <p className="font-semibold mb-1">初夏（5月）</p>
                <p>藤、菖蒲（しょうぶ）、青楓など。涼しげな色合いを選ぶと季節感が出ます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3：単衣 */}
      <section id="hitoe" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            単衣（ひとえ）の特徴と時期
          </h2>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">単衣の基本情報</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>着用時期：</strong>6月、9月（伝統的には2か月間）</li>
                  <li><strong>仕立て：</strong>裏地なしの1枚仕立て</li>
                  <li><strong>素材：</strong>袷と同じ生地（裏地をつけないだけ）</li>
                  <li><strong>重量感：</strong>袷より軽い</li>
                  <li><strong>通気性：</strong>袷より高い</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#c9a76c] mb-3 text-base">単衣の特徴</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  単衣は袷と薄物の中間に位置する着物です。素材は袷と同じ正絹やちりめんなどを使いますが、裏地がないため軽く、暑い時期でも比較的快適に着られます。近年の温暖化により、単衣の着用期間は実質的に広がっており、5月中旬〜6月末、9月〜10月上旬まで着る方が増えています。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">単衣を仕立てる際のポイント：</strong>
              単衣は裏地がないため、表地の生地感がそのまま表れます。生地が透けやすい薄い色の場合は、居敷当て（いしきあて）という部分的な裏地を付けることがあります。また、単衣は裏地による補強がないため、袷より生地が傷みやすい傾向があります。<Link href="/articles/storage-guide/" className="text-[#6b4c8a] hover:underline">保管方法</Link>に注意して長持ちさせましょう。
            </p>
          </div>
        </div>
      </section>

      {/* セクション4：薄物 */}
      <section id="usumono" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            薄物（うすもの）の特徴と時期
          </h2>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">薄物の基本情報</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>着用時期：</strong>7月〜8月（盛夏）</li>
                  <li><strong>仕立て：</strong>透ける素材の1枚仕立て</li>
                  <li><strong>主な素材：</strong>絽（ろ）、紗（しゃ）、麻（上布）</li>
                  <li><strong>重量感：</strong>最も軽い</li>
                  <li><strong>通気性：</strong>最も高い</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#c9a76c] mb-3 text-base">薄物の種類</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>絽（ろ）：</strong>経糸をからませて透け目を作った織物。フォーマルからカジュアルまで対応。絽の訪問着や留袖もあります。</p>
                  <p><strong>紗（しゃ）：</strong>全体的に網目状に透ける織物。絽よりカジュアル。羽織やコート地にも使われます。</p>
                  <p><strong>上布（じょうふ）：</strong>麻の最高級品。宮古上布や越後上布は人間国宝の作品もあり、高額で取引されます。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">薄物と買取相場：</strong>
              薄物は着用期間が短いため、袷と比べると買取需要はやや限定的です。しかし、宮古上布や越後上布などの高級品は希少性が高く、数十万円〜百万円以上の買取価格がつくこともあります。<Link href="/articles/summer-kimono/" className="text-[#6b4c8a] hover:underline">夏着物の種類と特徴</Link>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* セクション5：カレンダー */}
      <section id="calendar" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            月別・着分けカレンダー
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">月</th>
                  <th className="px-4 py-3 text-left font-semibold">着物の仕立て</th>
                  <th className="px-4 py-3 text-left font-semibold">帯</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">長襦袢</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">1月〜5月</td>
                  <td className="px-4 py-3 text-gray-700">袷</td>
                  <td className="px-4 py-3 text-gray-700">袷用の帯（袋帯・名古屋帯）</td>
                  <td className="px-4 py-3 text-gray-700">袷の長襦袢</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">6月</td>
                  <td className="px-4 py-3 text-gray-700">単衣</td>
                  <td className="px-4 py-3 text-gray-700">6月上旬は袷用、下旬は夏帯</td>
                  <td className="px-4 py-3 text-gray-700">単衣の長襦袢</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">7月〜8月</td>
                  <td className="px-4 py-3 text-gray-700">薄物（絽・紗・上布）</td>
                  <td className="px-4 py-3 text-gray-700">夏帯（絽・紗・麻）</td>
                  <td className="px-4 py-3 text-gray-700">絽や麻の長襦袢</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">9月</td>
                  <td className="px-4 py-3 text-gray-700">単衣</td>
                  <td className="px-4 py-3 text-gray-700">9月上旬は夏帯、下旬は袷用</td>
                  <td className="px-4 py-3 text-gray-700">単衣の長襦袢</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">10月〜12月</td>
                  <td className="px-4 py-3 text-gray-700">袷</td>
                  <td className="px-4 py-3 text-gray-700">袷用の帯（袋帯・名古屋帯）</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">袷の長襦袢</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション6：帯と小物 */}
      <section id="obi" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            季節に合った帯と小物の選び方
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">帯の季節ルール</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                帯にも季節があります。袷の時期には通常の袋帯や名古屋帯を使い、夏には絽や紗、麻で織られた夏帯を合わせます。6月と9月の単衣の時期は、上旬と下旬で帯を変えるのが理想です。帯は着物と同様に季節感を大切にしますが、通年使える博多帯は便利な存在です。<Link href="/articles/obi-price/" className="text-[#6b4c8a] hover:underline">帯の買取相場</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">帯揚げ・帯締めの季節感</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                帯揚げは夏用に絽や紗素材のものを使います。帯締めも夏はレース組や涼しげな色合いのものを選びます。これらの和装小物も季節に合わせて揃えると、着物姿に統一感が生まれます。<Link href="/articles/accessories-price/" className="text-[#6b4c8a] hover:underline">和装小物の買取相場</Link>もご覧ください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">季節の柄を先取りする</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の柄は実際の季節より少し先取りするのが粋とされています。例えば、桜柄は桜が満開になる前の3月上旬〜中旬に着るのが理想で、満開の時期には桜柄は避けるという考え方があります。ただし、桜は日本の国花として通年着られるとする説もあります。<Link href="/articles/popular-patterns/" className="text-[#6b4c8a] hover:underline">着物の柄と文様</Link>も参考にしてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7：買取への影響 */}
      <section id="price-impact" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            季節と買取相場の関係
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物の季節は買取相場にも影響を与えます。最も需要が高いのは年間で8か月間着用できる袷の着物です。着用期間が長く、買い手も多いため、安定した買取価格が期待できます。
            </p>
            <p>
              単衣と薄物は着用期間が短いぶん、シーズン前に売ると高めの査定額がつく傾向があります。例えば、薄物を5〜6月に売れば、夏に向けた仕入れとして業者が積極的に買い取ってくれます。逆に、秋に薄物を売ると来年まで在庫になるため、やや安い査定になることがあります。
            </p>
            <p>
              ただし、シーズンを待っている間に着物が劣化するリスクもあります。特に<Link href="/articles/mold-removal/" className="text-[#6b4c8a] hover:underline">カビ</Link>やシミが発生すると大幅に査定額が下がるため、状態が良いうちに売ることが最も重要です。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>も参考にしてください。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">袷</p>
              <p className="text-xs text-gray-600">年間通じて安定需要</p>
              <p className="text-sm font-semibold text-green-600 mt-2">相場：安定</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">単衣</p>
              <p className="text-xs text-gray-600">4〜5月・8月の売却が有利</p>
              <p className="text-sm font-semibold text-green-600 mt-2">相場：やや変動</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">薄物</p>
              <p className="text-xs text-gray-600">5〜6月の売却が有利</p>
              <p className="text-sm font-semibold text-green-600 mt-2">相場：季節変動あり</p>
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
            <Link href="/articles/kimono-types-guide/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の種類一覧</h3>
              <p className="text-xs text-gray-600">普段着から礼装まで、着物の種類を完全網羅。</p>
            </Link>
            <Link href="/articles/summer-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">夏着物の種類と特徴</h3>
              <p className="text-xs text-gray-600">絽・紗・上布など夏着物の素材と買取相場。</p>
            </Link>
            <Link href="/articles/storage-guide/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の保管方法</h3>
              <p className="text-xs text-gray-600">大切な着物を長持ちさせる保管のコツを解説。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            季節を問わず着物の無料査定が可能です
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            袷・単衣・薄物、どの季節の着物でも年間を通じて査定に対応。お手持ちの着物の価値を無料で確認してみませんか。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
