import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の染めと織りの違い｜価値が高いのはどっち？",
  description:
    "着物の「染め」と「織り」の違いを基礎から解説。後染め（友禅・型染め等）と先染め（紬・御召等）の製造工程、格式の違い、買取相場の比較まで。どちらが価値が高いかを具体例とともに詳しく紹介します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/dye-vs-weave/",
  },
  openGraph: {
    title: "着物の染めと織りの違い｜価値が高いのはどっち？",
    description:
      "染めの着物と織りの着物の違いを解説。格式・買取相場の比較も。",
    url: "https://kimonokaitori-biyori.com/articles/dye-vs-weave/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "染めの着物と織りの着物、格式が高いのはどちらですか？",
    answer:
      "一般的に、染めの着物の方が格式が高いとされています。訪問着・留袖・振袖などのフォーマル着物は染めの技法で作られます。織りの着物（紬など）はカジュアルに分類されるのが通常です。ただし、例外もあり、御召（おめし）は織りの着物でありながら略礼装として着用できます。格式だけでなく素材や技法、産地によって価値は大きく異なります。",
  },
  {
    question: "染めと織りでは買取価格にどのくらい差がありますか？",
    answer:
      "格式の高さと買取価格は必ずしも一致しません。例えば、染めの着物である一般的な訪問着の買取相場は2,000円〜6万円程度ですが、織りの着物である結城紬（本場結城紬）は10万〜40万円以上の買取価格がつくこともあります。加賀友禅や京友禅の手描き作品も高額です。結局、買取価格を決めるのは格式よりも産地・作家・状態・希少性です。",
  },
  {
    question: "染めの着物にはどんな種類がありますか？",
    answer:
      "染めの着物の代表的な技法には、友禅染め（京友禅・加賀友禅・東京友禅）、型染め（江戸小紋・紅型など）、絞り染め（有松鳴海絞り・京鹿の子絞りなど）、ろうけつ染め、草木染めなどがあります。友禅は筆で直接柄を描く手描き友禅と、型紙を使う型友禅に分かれ、手描き友禅の方が高価です。",
  },
  {
    question: "織りの着物にはどんな種類がありますか？",
    answer:
      "織りの着物の代表例には、大島紬（鹿児島県）、結城紬（茨城県・栃木県）、牛首紬（石川県）、塩沢紬（新潟県）、黄八丈（東京都八丈島）などの紬類のほか、御召（西陣御召など）、上布（宮古上布・越後上布）があります。紬は先染め（糸を先に染めてから織る）の代表で、独特の風合いと丈夫さが特徴です。",
  },
  {
    question: "染めか織りかを見分ける方法はありますか？",
    answer:
      "最も簡単な見分け方は、生地の表面を触ることです。織りの着物（紬など）は糸の節（ふし）が感じられ、表面に凹凸があります。染めの着物は滑らかで光沢のある生地が多いです。また、柄の入り方で見分けることもできます。染めは白生地に後から柄を付けるため鮮やかで繊細、織りは糸の色で柄を出すため素朴な風合いになります。証紙があれば最も確実に判別できます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の染めと織りの違い｜価値が高いのはどっち？",
  description:
    "染めの着物と織りの着物の違いを解説。格式・買取相場の比較も。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
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
    "@id": "https://kimonokaitori-biyori.com/articles/dye-vs-weave/",
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
      name: "着物の染めと織りの違い",
      item: "https://kimonokaitori-biyori.com/articles/dye-vs-weave/",
    },
  ],
};

export default function DyeVsWeavePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の染めと織りの違い" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物の染めと織りの違い</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">価値が高いのはどっち？</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物は大きく「染めの着物」と「織りの着物」に分類されます。染めは白生地に後から色や柄を付ける技法、織りは糸を先に染めてから織り上げる技法です。格式は染めの方が上ですが、買取価格では織りの着物が上回ることも珍しくありません。この記事では、両者の違いを徹底比較します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
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
                <li><a href="#basic" className="text-[#6b4c8a] hover:underline">1. 染めと織りの基本的な違い</a></li>
                <li><a href="#dye-types" className="text-[#6b4c8a] hover:underline">2. 染めの着物の種類と技法</a></li>
                <li><a href="#weave-types" className="text-[#6b4c8a] hover:underline">3. 織りの着物の種類と技法</a></li>
                <li><a href="#rank" className="text-[#6b4c8a] hover:underline">4. 格式の比較</a></li>
                <li><a href="#price" className="text-[#6b4c8a] hover:underline">5. 買取相場の比較</a></li>
                <li><a href="#identify" className="text-[#6b4c8a] hover:underline">6. 染めか織りかの見分け方</a></li>
                <li><a href="#sell-point" className="text-[#6b4c8a] hover:underline">7. 売却時のポイント</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* セクション1 */}
      <section id="basic" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            染めと織りの基本的な違い
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物の製造工程は「染め」と「織り」に大別されます。この違いは単なる技法の差ではなく、着物の格式、着用シーン、価値、そして買取価格にまで影響する重要な要素です。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">染めの着物（後染め）</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>工程：</strong>白い生地を織り上げた後に、色や柄を染める</li>
                <li><strong>別名：</strong>後染め（あとぞめ）</li>
                <li><strong>生地：</strong>滑らかで光沢がある</li>
                <li><strong>柄：</strong>鮮やかで繊細な表現が可能</li>
                <li><strong>代表例：</strong>友禅、型染め、絞り染め</li>
                <li><strong>格式：</strong>フォーマル寄り</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-3 text-base">織りの着物（先染め）</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>工程：</strong>糸の段階で先に染色し、織りで柄を出す</li>
                <li><strong>別名：</strong>先染め（さきぞめ）</li>
                <li><strong>生地：</strong>独特の風合い、節がある</li>
                <li><strong>柄：</strong>素朴で味わい深い</li>
                <li><strong>代表例：</strong>大島紬、結城紬、黄八丈</li>
                <li><strong>格式：</strong>カジュアル寄り</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2：染めの種類 */}
      <section id="dye-types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            染めの着物の種類と技法
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">友禅染め（ゆうぜんぞめ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                日本を代表する染色技法で、糊を使って防染し、多彩な色で絵画的な柄を染める技法です。産地によって<Link href="/articles/kaga-yuzen/" className="text-[#6b4c8a] hover:underline">加賀友禅</Link>（石川県）、京友禅（京都府）、東京友禅（東京都）に分かれます。手描き友禅は職人が一筆一筆手で描くため、1枚仕上げるのに数か月〜1年以上かかることも。型友禅は型紙を使って効率的に染めますが、手描きに比べると買取価格は低くなります。<Link href="/articles/yuzen-types/" className="text-[#6b4c8a] hover:underline">友禅の種類</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">型染め（かたぞめ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                型紙を使って柄を染める技法です。江戸小紋は極めて細かい柄を彫った型紙を使い、一色で染め上げる技法で、遠目には無地に見えるほど精緻です。紅型（びんがた）は沖縄の伝統的な型染めで、鮮やかな色彩と大胆な柄が特徴。いずれも伝統工芸品として高い価値を持ちます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">絞り染め（しぼりぞめ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                生地を糸で括ったり、板で挟んだりして防染し、染め上がった後に独特の凹凸（しぼ）が残る技法です。<Link href="/articles/shibori/" className="text-[#6b4c8a] hover:underline">有松鳴海絞り</Link>（愛知県）や京鹿の子絞り（京都府）が代表的です。総絞りの振袖は非常に手間がかかるため高価で、買取相場も高めです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3：織りの種類 */}
      <section id="weave-types" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            織りの着物の種類と技法
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">紬（つむぎ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                織りの着物の代表格です。紬糸を使い、先染めで柄を織り出します。<Link href="/articles/oshima-tsumugi/" className="text-[#6b4c8a] hover:underline">大島紬</Link>は泥染めと締機（しめばた）による精緻な絣模様が特徴。<Link href="/articles/yuki-tsumugi/" className="text-[#6b4c8a] hover:underline">結城紬</Link>は手紡ぎ・手括り・地機織りの3工程がユネスコ無形文化遺産に登録されています。これらの最高級紬は、染めの着物と比較しても遜色ない、あるいはそれ以上の買取価格がつきます。<Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] hover:underline">紬の種類と産地</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">御召（おめし）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                織りの着物でありながら、略礼装としても着用できる例外的な存在です。強く撚りをかけた「御召緯（おめしぬき）」を使い、独特のシャリ感と上品な光沢があります。徳川将軍がお召しになったことからこの名前がつきました。西陣御召が代表的で、格の高い織りの着物として買取市場でも評価されます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">上布（じょうふ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                麻の最高級織物です。宮古上布（沖縄県）や越後上布（新潟県）は国の重要無形文化財に指定されており、人間国宝の作品もあります。夏の着物として着用され、独特のシャリ感と涼しさが特徴。希少性が極めて高く、状態の良いものは数十万円〜百万円以上の買取価格がつくこともあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4：格式比較 */}
      <section id="rank" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            格式の比較
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物の格式においては、「染めの着物はフォーマル、織りの着物はカジュアル」という大原則があります。結婚式や成人式などの正式な場面には染めの着物（留袖・振袖・訪問着など）を着用し、日常の外出や趣味の場面には織りの着物（紬など）を着用するのが一般的です。
            </p>
            <p>
              ただし、この原則には例外もあります。御召は織りの着物でありながら略礼装として認められています。また、江戸小紋は染めの着物ですが格式はそれほど高くなく、カジュアルな場面でも着用されます。<Link href="/articles/kimono-rank/" className="text-[#6b4c8a] hover:underline">着物の格・ランクガイド</Link>で詳しく解説しています。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">分類</th>
                  <th className="px-4 py-3 text-left font-semibold">格式</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">主な着用シーン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖・振袖</td>
                  <td className="px-4 py-3 text-gray-700">染め</td>
                  <td className="px-4 py-3 text-gray-700">第一礼装</td>
                  <td className="px-4 py-3 text-gray-700">結婚式・成人式</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700">染め</td>
                  <td className="px-4 py-3 text-gray-700">準礼装</td>
                  <td className="px-4 py-3 text-gray-700">披露宴・入学式</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">御召</td>
                  <td className="px-4 py-3 text-gray-700">織り</td>
                  <td className="px-4 py-3 text-gray-700">略礼装</td>
                  <td className="px-4 py-3 text-gray-700">パーティー・お茶会</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">小紋</td>
                  <td className="px-4 py-3 text-gray-700">染め</td>
                  <td className="px-4 py-3 text-gray-700">外出着</td>
                  <td className="px-4 py-3 text-gray-700">観劇・食事会</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">紬</td>
                  <td className="px-4 py-3 text-gray-700">織り</td>
                  <td className="px-4 py-3 text-gray-700">普段着</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">日常の外出</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション5：買取相場比較 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            買取相場の比較
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">分類</th>
                  <th className="px-4 py-3 text-left font-semibold">代表的な着物</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">高級品の相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">染め</td>
                  <td className="px-4 py-3 text-gray-700">友禅訪問着</td>
                  <td className="px-4 py-3 text-gray-700">2,000円〜1.5万円</td>
                  <td className="px-4 py-3 text-gray-700">10万〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">染め</td>
                  <td className="px-4 py-3 text-gray-700">総絞り振袖</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">10万〜40万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">織り</td>
                  <td className="px-4 py-3 text-gray-700">大島紬</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">10万〜40万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">織り</td>
                  <td className="px-4 py-3 text-gray-700">結城紬（本場）</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">15万〜60万円以上</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">織り</td>
                  <td className="px-4 py-3 text-gray-700">越後上布</td>
                  <td className="px-4 py-3 text-gray-700">5万〜15万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">30万〜100万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 相場は状態・サイズ・市場動向により変動します。</p>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">結論：</strong>
              格式は染めが上ですが、買取価格は一概にどちらが高いとは言えません。結城紬や越後上布のような最高級の織り着物は、染めの着物の多くを上回る買取価格がつきます。一方、一般品同士を比較すると、需要の安定している訪問着や振袖（染め）の方が高いケースが多いです。<Link href="/articles/kimono-market-price/" className="text-[#6b4c8a] hover:underline">着物の買取相場</Link>も参考にしてください。
            </p>
          </div>
        </div>
      </section>

      {/* セクション6：見分け方 */}
      <section id="identify" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            染めか織りかの見分け方
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手触りで判断する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                最も簡単な方法は手で触ることです。染めの着物は生地が滑らかで均一な手触りです。織りの着物（特に紬）は生地に節（ふし）があり、表面に凹凸を感じます。ただし、御召のように滑らかな織りの着物もあるため、手触りだけでは確実に判別できない場合もあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">裏面を確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                染めの着物は表と裏の柄が同じように見えます（染料が生地に浸透するため）。織りの着物は糸の色で柄を出すため、裏面は表面と異なる模様になることがあります。ただし、袷の場合は裏地がついているため、仕立て前の反物でないと確認が難しいです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">証紙で確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                最も確実な方法は<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙</Link>を確認することです。大島紬には「本場大島紬」の証紙、結城紬には「本場結城紬」の証紙が付きます。友禅には作家の落款が入ります。証紙があれば染めか織りかの判別だけでなく、産地や品質も正確にわかります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7：売却ポイント */}
      <section id="sell-point" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            売却時のポイント
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              染めの着物も織りの着物も、売却時に最も重要なのは「着物の価値を正しく理解できる査定員に見てもらうこと」です。一般のリサイクルショップでは染めと織りの違いを正確に判別できないことも多く、高価な紬を安価で買い取られてしまうケースがあります。
            </p>
            <p>
              特に、織りの着物は見た目がカジュアルなため、専門知識のない業者に「普段着だから安い」と判断されがちです。しかし、結城紬や大島紬、上布などは非常に高価な着物であり、正しい評価には専門知識が不可欠です。
            </p>
            <p>
              着物専門の査定員が在籍する<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">おすすめの買取業者</Link>に依頼し、必ず複数社で比較することが、染めの着物も織りの着物も高額で売るための鍵です。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>も参考にしてください。
            </p>
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
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <span className="text-[#c9a76c] font-bold text-lg">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
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
            <Link href="/articles/tsumugi-types/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">紬の種類と産地</h3>
              <p className="text-xs text-gray-600">大島紬・結城紬など主要な紬を産地別に紹介。</p>
            </Link>
            <Link href="/articles/yuzen-types/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">友禅の種類</h3>
              <p className="text-xs text-gray-600">加賀友禅・京友禅・東京友禅の特徴と買取相場。</p>
            </Link>
            <Link href="/articles/production-map/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の産地マップ</h3>
              <p className="text-xs text-gray-600">全国の着物産地を地図で紹介。産地ごとの特徴と相場。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">染めも織りも、専門査定で正しい価値を</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            着物の染めと織りを正確に見分けられる専門査定員が、お持ちの着物を適正価格で評価します。無料査定でまずは価値を確認してみませんか。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
