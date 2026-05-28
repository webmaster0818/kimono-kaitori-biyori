import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の家紋の種類と意味｜紋の有無で価値はどう変わる？",
  description:
    "着物に入れる家紋（紋）の種類と意味を解説。五つ紋・三つ紋・一つ紋の格式の違い、染め抜き紋・縫い紋・貼り紋の技法の違い、紋の有無が買取価格に与える影響まで詳しく紹介します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/family-crest/" },
  openGraph: {
    title: "着物の家紋の種類と意味｜紋の有無で価値はどう変わる？",
    description: "着物の家紋の種類・格式・買取相場への影響を徹底解説。",
    url: "https://kimonokaitori-biyori.com/articles/family-crest/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "紋付きの着物は紋なしより高く売れますか？", answer: "一概には言えません。紋付きは格式が上がるためフォーマル需要がありますが、他家の家紋が入った着物は汎用性が下がるため買取価格が低くなることもあります。通紋（つうもん）や女紋など一般的な紋であれば汎用性が高く、買取にプラスに働きます。紋を入れ替える「紋替え」が可能な場合もあり、その費用は5,000円〜2万円程度です。" },
  { question: "家紋の種類は全部でいくつありますか？", answer: "日本の家紋は約2万種類以上あるとされています。代表的なものとして、桐紋・菊紋・藤紋・梅紋・片喰（かたばみ）紋・橘紋・鷹の羽紋・木瓜（もっこう）紋・沢瀉（おもだか）紋・茗荷紋などがあります。このうち「五大紋」と呼ばれる桐・藤・鷹の羽・木瓜・片喰が最も広く使われています。" },
  { question: "通紋とは何ですか？", answer: "通紋（つうもん）とは、特定の家に限定されず誰でも使える紋のことです。代表的な通紋には「五三桐（ごさんのきり）」「蔦（つた）」「揚羽蝶（あげはちょう）」などがあります。レンタル着物や呉服店の既製品に入っている紋は通紋であることが多いです。通紋入りの着物は汎用性が高いため、買取市場でもプラス評価されやすいです。" },
  { question: "紋の入れ方にはどんな種類がありますか？", answer: "紋の入れ方には主に3種類あります。染め抜き紋（そめぬきもん）は最も格式が高く、生地を白く染め抜いて紋を入れます。縫い紋（ぬいもん）は糸で紋を刺繍する技法で、略式の紋です。貼り紋（はりもん）はシールのように貼り付けるもので、仮の紋として使われます。格式は染め抜き紋＞縫い紋＞貼り紋の順です。" },
  { question: "紋を消したり変えたりすることはできますか？", answer: "はい、可能です。紋替え（もんがえ）は専門の悉皆（しっかい）業者に依頼します。染め抜き紋を別の紋に変える場合は、一度紋を潰してから新しい紋を入れ直すため、費用は1か所あたり5,000円〜2万円、期間は2〜4週間程度です。紋を消すだけの場合は紋消し（もんけし）と呼ばれ、やや安価です。売却前に紋替えをする必要は通常ありませんが、汎用性が上がるため買取価格にプラスになる場合があります。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png", headline: "着物の家紋の種類と意味｜紋の有無で価値はどう変わる？", description: "着物の家紋の種類・格式・買取相場への影響を徹底解説。", datePublished: "2026-05-17", dateModified: "2026-05-17", author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/family-crest/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の家紋の種類と意味", item: "https://kimonokaitori-biyori.com/articles/family-crest/" }] };

export default function FamilyCrestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の家紋の種類と意味" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物の家紋の種類と意味</span>
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">紋の有無で価値はどう変わる？</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物に入れられる家紋（もん）は、その着物の格式を決定する重要な要素です。五つ紋・三つ紋・一つ紋の数による格の違い、染め抜き紋・縫い紋・貼り紋の技法による違い、そして紋の有無が買取価格に与える影響まで、家紋にまつわるすべてを解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav><ol className="space-y-2 text-sm">
              <li><a href="#what-is" className="text-[#6b4c8a] hover:underline">1. 着物の家紋とは</a></li>
              <li><a href="#number" className="text-[#6b4c8a] hover:underline">2. 紋の数と格式の関係</a></li>
              <li><a href="#technique" className="text-[#6b4c8a] hover:underline">3. 紋の入れ方（技法）の種類</a></li>
              <li><a href="#popular" className="text-[#6b4c8a] hover:underline">4. 代表的な家紋の種類</a></li>
              <li><a href="#women" className="text-[#6b4c8a] hover:underline">5. 女紋と通紋</a></li>
              <li><a href="#buy-impact" className="text-[#6b4c8a] hover:underline">6. 紋の有無と買取価格への影響</a></li>
              <li><a href="#change" className="text-[#6b4c8a] hover:underline">7. 紋替え・紋消しの方法と費用</a></li>
              <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
            </ol></nav>
          </div>
        </div>
      </section>

      <section id="what-is" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の家紋とは</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>家紋とは、日本の家々が伝統的に使用してきた紋章（シンボルマーク）です。着物に家紋を入れることで、着物の格式（フォーマル度）が上がります。家紋の歴史は平安時代後期にさかのぼり、貴族が牛車や調度品に自家の目印として紋様を入れたのが始まりとされています。</p>
            <p>着物における家紋の役割は「この着物をフォーマルな場面で着用しますよ」という意思表示です。紋の数が多いほど格式が高く、最高格の五つ紋は結婚式や叙勲などの最も格式の高い場面で着用します。</p>
            <p>現代では、着物に家紋を入れる習慣は減少傾向にありますが、冠婚葬祭用の礼装には依然として紋が必要とされています。着物の<Link href="/articles/kimono-rank/" className="text-[#6b4c8a] hover:underline">格式・ランク</Link>を理解する上で、紋の知識は欠かせません。</p>
          </div>
        </div>
      </section>

      <section id="number" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋の数と格式の関係</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">紋の数</th>
                <th className="px-4 py-3 text-left font-semibold">紋の位置</th>
                <th className="px-4 py-3 text-left font-semibold">格式</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">着用シーン</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">五つ紋</td><td className="px-4 py-3 text-gray-700">背中・両袖後ろ・両胸</td><td className="px-4 py-3 text-gray-700 font-bold">第一礼装</td><td className="px-4 py-3 text-gray-700">結婚式（親族）・叙勲・成人式</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">三つ紋</td><td className="px-4 py-3 text-gray-700">背中・両袖後ろ</td><td className="px-4 py-3 text-gray-700 font-bold">準礼装</td><td className="px-4 py-3 text-gray-700">披露宴・入学式・卒業式</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">一つ紋</td><td className="px-4 py-3 text-gray-700">背中のみ</td><td className="px-4 py-3 text-gray-700 font-bold">略礼装</td><td className="px-4 py-3 text-gray-700">お茶会・パーティー・七五三</td></tr>
                <tr className="bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">紋なし</td><td className="px-4 py-3 text-gray-700">-</td><td className="px-4 py-3 text-gray-700 font-bold">外出着〜普段着</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">観劇・食事会・日常</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">紋の位置について：</strong>背中の紋は「背紋（せもん）」、両袖後ろの紋は「袖紋（そでもん）」、両胸の紋は「抱き紋（だきもん）」と呼ばれます。背紋は先祖を、袖紋は兄弟姉妹を、抱き紋は自分自身を表すとされています。</p>
          </div>
        </div>
      </section>

      <section id="technique" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋の入れ方（技法）の種類</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">染め抜き紋（そめぬきもん）</h3>
              <p className="text-sm leading-relaxed text-gray-700">最も格式の高い紋の入れ方です。生地の一部を白く染め抜いて紋を表現します。「日向紋（ひなたもん）」は紋の輪郭と内部を白く抜いた最も正式な表現で、「陰紋（かげもん）」は輪郭だけを白く抜いたやや控えめな表現です。染め抜き日向紋の五つ紋が最高格式です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">縫い紋（ぬいもん）</h3>
              <p className="text-sm leading-relaxed text-gray-700">糸で紋を刺繍する技法です。染め抜き紋より格式は下がりますが、色無地や小紋など略式の着物に入れることが多いです。芥子縫い（けしぬい）、まつい縫い、すがすが縫いなど刺繍の技法も複数あり、手の込んだ縫い紋は工芸的な価値もあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">貼り紋（はりもん）</h3>
              <p className="text-sm leading-relaxed text-gray-700">シールのように紋を貼り付ける方法で、「切り付け紋」とも呼ばれます。レンタル着物や急な法事など、一時的に紋が必要な場面で使われます。正式な場では染め抜き紋が求められるため、貼り紋は略式の扱いです。買取査定では貼り紋はほとんど評価されません。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="popular" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />代表的な家紋の種類</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#c9a76c] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">紋の名称</th>
                <th className="px-4 py-3 text-left font-semibold">モチーフ</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">特徴・由来</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">桐紋（きりもん）</td><td className="px-4 py-3 text-gray-700">桐の葉と花</td><td className="px-4 py-3 text-gray-700">天皇家の紋章が起源。五三桐は通紋として広く使われる</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">藤紋（ふじもん）</td><td className="px-4 py-3 text-gray-700">藤の花</td><td className="px-4 py-3 text-gray-700">藤原氏にゆかりがあり、上がり藤・下がり藤などのバリエーション</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">鷹の羽紋</td><td className="px-4 py-3 text-gray-700">鷹の羽</td><td className="px-4 py-3 text-gray-700">武家に多い紋。違い鷹の羽・丸に違い鷹の羽が代表的</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">片喰紋（かたばみ）</td><td className="px-4 py-3 text-gray-700">片喰の葉</td><td className="px-4 py-3 text-gray-700">繁殖力の強い植物で子孫繁栄の象徴。酢漿草とも書く</td></tr>
                <tr className="bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">蔦紋（つたもん）</td><td className="px-4 py-3 text-gray-700">蔦の葉</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">通紋として女性に人気。上品で控えめなデザイン</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="women" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />女紋と通紋</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>女紋（おんなもん）とは、女性が代々母から娘へ受け継ぐ家紋のことです。主に関西地方で広まった文化で、婚家の紋ではなく実家の紋を着物に入れます。これに対し、関東では嫁ぎ先の紋を入れるのが一般的です。</p>
            <p>通紋（つうもん）は特定の家に限定されず、誰でも使える紋のことです。呉服店で既製品の紋付き着物に入っている紋は、多くの場合この通紋です。代表的な通紋は五三桐（ごさんのきり）、蔦（つた）、揚羽蝶（あげはちょう）、梅鉢（うめばち）などです。</p>
            <p>買取市場では、通紋が入った着物は汎用性が高いためプラス評価されやすく、珍しい家紋が入った着物は好みが分かれるため買取価格がやや低くなる傾向があります。ただし、<Link href="/articles/montsuki/" className="text-[#6b4c8a] hover:underline">紋付き着物</Link>の需要は冠婚葬祭用として一定数あるため、紋の有無だけで大幅に価格が変わることは少ないです。</p>
          </div>
        </div>
      </section>

      <section id="buy-impact" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋の有無と買取価格への影響</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">紋がプラスに働くケース</h3>
              <p className="text-sm leading-relaxed text-gray-700">黒留袖や色留袖、喪服などの礼装は紋が入っているのが本来の姿であるため、紋付きが正当に評価されます。通紋（五三桐・蔦など）が入った着物も汎用性が高く、誰でも着用できるため買取にプラスです。染め抜き日向紋は品質の高さの証でもあり、査定評価を高めます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">紋がマイナスに働くケース</h3>
              <p className="text-sm leading-relaxed text-gray-700">珍しい家紋や特定の家にしか使われない紋が入っている場合、購入希望者が限られるため買取価格がやや低くなることがあります。ただし、紋替えが可能なため大幅なマイナスにはなりにくいです。また、カジュアル着物（紬・小紋など）に紋が入っていると、使い勝手が限定されるためマイナス評価になることもあります。</p>
            </div>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">重要：</strong>紋の有無よりも、着物全体の状態（シミ・汚れ・生地の劣化）、素材（正絹かどうか）、産地・作家・証紙の方が買取価格への影響は大きいです。紋のことで悩むよりも、状態の良いうちに<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>を受けることをおすすめします。</p>
          </div>
        </div>
      </section>

      <section id="change" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋替え・紋消しの方法と費用</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">作業内容</th>
                <th className="px-4 py-3 text-left font-semibold">費用（1か所あたり）</th>
                <th className="px-4 py-3 text-left font-semibold">期間</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">紋替え（染め抜き）</td><td className="px-4 py-3 text-gray-700">8,000円〜2万円</td><td className="px-4 py-3 text-gray-700">2〜4週間</td><td className="px-4 py-3 text-gray-700">古い紋を潰して新紋を入れる</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">紋消し</td><td className="px-4 py-3 text-gray-700">5,000円〜1万円</td><td className="px-4 py-3 text-gray-700">1〜2週間</td><td className="px-4 py-3 text-gray-700">紋を消すのみ（新紋は入れない）</td></tr>
                <tr className="bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">紋入れ（新規）</td><td className="px-4 py-3 text-gray-700">5,000円〜1.5万円</td><td className="px-4 py-3 text-gray-700">1〜3週間</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">無地の着物に新たに紋を入れる</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4 leading-relaxed text-gray-700">売却前に紋替えや紋消しを行うかどうかは、費用対効果を考えて判断しましょう。紋替えにかかる費用が買取価格アップ分を上回る場合は、そのまま売却した方がお得です。判断に迷う場合は、まず<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">買取業者</Link>に相談してみてください。</p>
        </div>
      </section>

      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/articles/montsuki/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">紋付き着物の買取相場</h3><p className="text-xs text-gray-600">紋付きの着物の種類と買取相場を解説。</p></Link>
            <Link href="/articles/kimono-rank/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の格・ランクガイド</h3><p className="text-xs text-gray-600">着物の格式を体系的に解説。紋と格の関係も。</p></Link>
            <Link href="/articles/kimono-types-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の種類一覧</h3><p className="text-xs text-gray-600">普段着から礼装まで着物の種類を完全網羅。</p></Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">紋付き着物の価値を正しく評価します</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">紋の種類や数を正確に鑑定できる専門査定員が在籍。紋付き着物の適正価格を無料で査定します。</p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
