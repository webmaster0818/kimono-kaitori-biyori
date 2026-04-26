import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物はフリマと買取業者どっちが高く売れる？メリット・デメリット比較",
  description:
    "着物を売るならフリマアプリ（メルカリ等）と買取業者どちらが高く売れるのか徹底比較。それぞれのメリット・デメリット、手数料、手間、トラブル事例を解説し、着物の種類別におすすめの売り方を提案します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/flea-vs-dealer/",
  },
  openGraph: {
    title: "着物はフリマと買取業者どっちが高く売れる？メリット・デメリット比較",
    description: "フリマアプリと買取業者の着物売却方法を徹底比較。手数料、手間、売れやすさの違いを解説。",
    url: "https://kimonokaitori-biyori.com/articles/flea-vs-dealer/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "メルカリで着物は売れますか？",
    answer: "はい、メルカリで着物は売れます。ただし、一般的な着物の場合は1,000円〜5,000円程度の出品が多く、高額な取引は限定的です。振袖や作家物など価値の高い着物は10万円以上で売れることもありますが、正しい説明ができないと安く買い叩かれたり、クレームにつながるリスクがあります。",
  },
  {
    question: "フリマアプリで着物を売る際の手数料はいくらですか？",
    answer: "メルカリの場合、販売手数料は売上の10%です。例えば1万円で売れた場合、手数料1,000円と送料（着物1枚で800〜1,200円程度）が引かれ、手元に残るのは約7,800〜8,200円です。買取業者の場合は手数料なしの買取額がそのまま受け取れます。",
  },
  {
    question: "買取業者に売るメリットは何ですか？",
    answer: "買取業者のメリットは3つあります。1つ目は手間がかからないこと。出張買取なら自宅で待つだけで完了します。2つ目は即日現金化できること。3つ目は着物の専門知識を持った査定員が適正価格を付けてくれること。特に作家物やブランド品は専門業者の方が高く売れることが多いです。",
  },
  {
    question: "フリマアプリで着物を売る際のトラブルにはどんなものがありますか？",
    answer: "よくあるトラブルとしては、「思ったより状態が悪い」というクレーム、「正絹と書いてあったが化繊だった」という素材の相違、配送時のシワ・汚れによるトラブルなどがあります。着物は素材の判別が難しく、写真と実物の色味の違いによるトラブルも多いです。返品対応になると送料負担も発生します。",
  },
  {
    question: "着物の種類によって売り方を変えた方がいいですか？",
    answer: "はい、着物の種類や価値によって最適な売り方は異なります。作家物やブランド品（5万円以上の価値があるもの）は買取業者に売る方が高額になることが多いです。一般的な着物（1万円未満の価値のもの）はフリマアプリで自分で値付けした方が手取りが多くなる場合があります。大量にまとめて売りたい場合は買取業者一択です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物はフリマと買取業者どっちが高く売れる？メリット・デメリット比較",
  description: "フリマアプリと買取業者の着物売却方法を徹底比較。手数料、手間、売れやすさの違いを解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/flea-vs-dealer/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "フリマ vs 買取業者", item: "https://kimonokaitori-biyori.com/articles/flea-vs-dealer/" },
  ],
};

export default function FleaVsDealerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "フリマ vs 買取業者" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物はフリマと買取業者</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">どっちが高く売れる？メリット・デメリット比較</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物を売る方法として「メルカリなどのフリマアプリ」と「買取業者」のどちらを選ぶべきか。それぞれのメリット・デメリット、手数料、手間、トラブルリスクを比較し、最適な売り方を提案します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. フリマ vs 買取業者の全体比較</a></li>
                <li><a href="#flea-merit" className="text-[#6b4c8a] hover:underline">2. フリマアプリのメリット・デメリット</a></li>
                <li><a href="#dealer-merit" className="text-[#6b4c8a] hover:underline">3. 買取業者のメリット・デメリット</a></li>
                <li><a href="#cost" className="text-[#6b4c8a] hover:underline">4. 手数料・コスト比較</a></li>
                <li><a href="#case" className="text-[#6b4c8a] hover:underline">5. 着物の種類別おすすめ売り方</a></li>
                <li><a href="#trouble" className="text-[#6b4c8a] hover:underline">6. フリマアプリのトラブル事例と対策</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">7. おすすめ買取業者</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 全体比較 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />フリマ vs 買取業者の全体比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold">フリマアプリ</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取業者</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">売却価格</td>
                  <td className="px-4 py-3 text-gray-700">自分で値段を決められる</td>
                  <td className="px-4 py-3 text-gray-700">業者の査定額で決まる</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">手数料</td>
                  <td className="px-4 py-3 text-red-500">売上の10%＋送料</td>
                  <td className="px-4 py-3 text-green-600">なし（全額受け取り）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">手間</td>
                  <td className="px-4 py-3 text-red-500">撮影・出品・やり取り・発送</td>
                  <td className="px-4 py-3 text-green-600">査定を待つだけ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">売れるまでの期間</td>
                  <td className="px-4 py-3 text-gray-700">数日〜数ヶ月（売れない場合も）</td>
                  <td className="px-4 py-3 text-green-600">即日〜数日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">トラブルリスク</td>
                  <td className="px-4 py-3 text-red-500">クレーム・返品リスクあり</td>
                  <td className="px-4 py-3 text-green-600">低い（プロが対応）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大量売却</td>
                  <td className="px-4 py-3 text-red-500">1枚ずつ出品が必要</td>
                  <td className="px-4 py-3 text-green-600">一括で売れる</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">着物の知識</td>
                  <td className="px-4 py-3 text-red-500">自分で調べる必要あり</td>
                  <td className="px-4 py-3 text-green-600 rounded-br-lg">プロが査定</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* フリマのメリデメ */}
      <section id="flea-merit" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />フリマアプリのメリット・デメリット
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-green-600 mb-4 text-base">メリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>自分で値段を決められる</strong> - 相場より高い価格で出品可能</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>直接販売のため利益率が高い可能性</strong> - 中間マージンが少ない</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>安価な着物でも売れる</strong> - 数百円の着物でも需要がある</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-4 text-base">デメリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>手間が非常にかかる</strong> - 撮影、説明文作成、値下げ交渉、梱包、発送</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>手数料＋送料がかかる</strong> - 実質15%前後のコスト</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>トラブルリスク</strong> - クレーム、返品対応のストレス</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>着物の知識が必要</strong> - 素材・種類を正しく説明する必要</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>売れるまで保管が必要</strong> - 数ヶ月売れないことも</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 買取業者のメリデメ */}
      <section id="dealer-merit" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />買取業者のメリット・デメリット
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-green-600 mb-4 text-base">メリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>手間がかからない</strong> - 出張買取なら自宅で完結</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>即日現金化</strong> - その場で現金受け取り</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>専門家の適正査定</strong> - 作家物やブランド品の価値を見逃さない</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>大量売却OK</strong> - 何十枚でもまとめて売れる</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>トラブルなし</strong> - クレーム対応の心配不要</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-4 text-base">デメリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>買取額が安い場合がある</strong> - 業者の利益分が差し引かれる</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>安価な着物は値段がつかないことも</strong> - 化繊やノーブランドは不可の場合</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>業者選びが重要</strong> - 悪質業者に注意が必要</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 手数料比較 */}
      <section id="cost" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />手数料・コスト比較
          </h2>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mb-6">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">例：1万円の着物を売る場合</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#c9a76c] text-white">
                    <th className="px-4 py-2 text-left rounded-tl-lg">項目</th>
                    <th className="px-4 py-2 text-left">フリマアプリ</th>
                    <th className="px-4 py-2 text-left rounded-tr-lg">買取業者</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2 font-semibold">売却額</td><td className="px-4 py-2">10,000円</td><td className="px-4 py-2">7,000円（査定額）</td></tr>
                  <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2 font-semibold">販売手数料</td><td className="px-4 py-2 text-red-500">-1,000円（10%）</td><td className="px-4 py-2 text-green-600">0円</td></tr>
                  <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2 font-semibold">送料</td><td className="px-4 py-2 text-red-500">-1,000円</td><td className="px-4 py-2 text-green-600">0円</td></tr>
                  <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2 font-semibold">梱包材費</td><td className="px-4 py-2 text-red-500">-200円</td><td className="px-4 py-2 text-green-600">0円</td></tr>
                  <tr className="bg-white"><td className="px-4 py-2 font-bold text-[#6b4c8a] rounded-bl-lg">手取り額</td><td className="px-4 py-2 font-bold">7,800円</td><td className="px-4 py-2 font-bold text-[#c9a76c] rounded-br-lg">7,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-600">※ フリマアプリの方が800円多いが、撮影・出品・やり取り・梱包・発送に2〜3時間の手間がかかる</p>
          </div>

          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">例：5万円の作家物を売る場合</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#c9a76c] text-white">
                    <th className="px-4 py-2 text-left rounded-tl-lg">項目</th>
                    <th className="px-4 py-2 text-left">フリマアプリ</th>
                    <th className="px-4 py-2 text-left rounded-tr-lg">買取業者</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2 font-semibold">売却額</td><td className="px-4 py-2">50,000円（適正に値付けできれば）</td><td className="px-4 py-2">45,000円（査定額）</td></tr>
                  <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2 font-semibold">販売手数料</td><td className="px-4 py-2 text-red-500">-5,000円</td><td className="px-4 py-2 text-green-600">0円</td></tr>
                  <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2 font-semibold">送料</td><td className="px-4 py-2 text-red-500">-1,200円</td><td className="px-4 py-2 text-green-600">0円</td></tr>
                  <tr className="bg-white"><td className="px-4 py-2 font-bold text-[#6b4c8a] rounded-bl-lg">手取り額</td><td className="px-4 py-2 font-bold">43,800円</td><td className="px-4 py-2 font-bold text-[#c9a76c] rounded-br-lg">45,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-600">※ 高額な着物は買取業者の方が手取りが多くなるケースが多い。フリマでは適正価格がわからず安売りするリスクも。</p>
          </div>
        </div>
      </section>

      {/* 種類別おすすめ */}
      <section id="case" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の種類別おすすめ売り方
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">おすすめの売り方</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">理由</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">作家物・人間国宝</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">買取業者</td>
                  <td className="px-4 py-3 text-gray-700">専門知識がないと適正価格で売れない</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ブランド着物</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">買取業者</td>
                  <td className="px-4 py-3 text-gray-700">ブランドの価値を正しく評価してもらえる</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大量の着物</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">買取業者</td>
                  <td className="px-4 py-3 text-gray-700">1枚ずつ出品する手間が省ける</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">一般的な正絹着物</td>
                  <td className="px-4 py-3 font-bold text-gray-600">どちらでもOK</td>
                  <td className="px-4 py-3 text-gray-700">手間を惜しまなければフリマの方が高い場合も</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">化繊・ポリエステル</td>
                  <td className="px-4 py-3 font-bold text-[#e8a0b6]">フリマアプリ</td>
                  <td className="px-4 py-3 text-gray-700">買取業者では値段がつかないことが多い</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">浴衣・カジュアル着物</td>
                  <td className="px-4 py-3 font-bold text-[#e8a0b6]">フリマアプリ</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">フリマでは需要があり数千円で売れる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* トラブル事例 */}
      <section id="trouble" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />フリマアプリのトラブル事例と対策
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-2 text-base">事例1：「正絹と書いてあったが化繊だった」</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-2">着物の素材を「正絹」と記載して出品したが、購入者から「化繊ではないか」とクレームが入り返品対応になったケース。</p>
              <p className="text-sm leading-relaxed text-gray-700"><strong className="text-[#6b4c8a]">対策：</strong>素材が不明な場合は「素材不明」と正直に記載しましょう。また、証紙の写真を掲載することで信頼性が高まります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-2 text-base">事例2：「写真と色が違う」</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-2">蛍光灯の下で撮影した写真と実物の色味が異なり、購入者から不満のコメントが入ったケース。</p>
              <p className="text-sm leading-relaxed text-gray-700"><strong className="text-[#6b4c8a]">対策：</strong>自然光で撮影し、「モニターによって色味が異なる場合があります」と注意書きを入れましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-2 text-base">事例3：「シミがあるのに記載がなかった」</h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-2">気づかなかった小さなシミについてクレームが入り、返品＋往復送料を負担することになったケース。</p>
              <p className="text-sm leading-relaxed text-gray-700"><strong className="text-[#6b4c8a]">対策：</strong>出品前に着物全体を入念にチェックし、小さなシミでも写真を撮って商品説明に記載しましょう。</p>
            </div>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">結論：</strong>
              フリマアプリでのトラブルを避けたい方、着物の知識に自信がない方、大量の着物をまとめて売りたい方は、<strong>買取業者に依頼するのが安心</strong>です。プロの査定員が適正価格を付けてくれるため、トラブルの心配がありません。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ業者 */}
      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめ買取業者
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            フリマアプリの手間やリスクを避けたい方におすすめの買取業者をご紹介します。いずれも無料査定に対応しているので、まずは査定額を確認してからフリマとの比較判断ができます。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3>
              <p className="text-sm text-gray-700">全国700店舗以上。持ち込み・出張・宅配に対応。着物専門の査定員が適正価格を提示。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3>
              <p className="text-sm text-gray-700">出張買取に強い着物専門業者。大量の着物も一括査定OK。女性査定員の指名可能。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO（リクロ）</h3>
              <p className="text-sm text-gray-700">宅配買取に特化。送料無料で梱包キットも無料。海外販路で高額査定も。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ティファナ</h3>
              <p className="text-sm text-gray-700">都内中心に店舗展開。持ち込みで即日査定可能。和装小物もまとめて買取。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ヒカカク</h3>
              <p className="text-sm text-gray-700">一括比較サービス。複数業者の査定額を比較して最高額の業者を選べる。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}
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
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/sell-high-tips/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物を高く売るコツ</h3>
              <p className="text-xs text-gray-600">最高額で売るためのテクニック。</p>
            </Link>
            <Link href="/articles/trouble-prevention/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">トラブル防止ガイド</h3>
              <p className="text-xs text-gray-600">着物買取のトラブルを防ぐ方法。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">フリマの手間が面倒なら、買取業者に無料査定を</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            撮影・出品・やり取り・発送の手間なく着物を売却。プロの査定員が適正価格を提示します。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
