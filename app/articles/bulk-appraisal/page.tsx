import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の一括査定おすすめ｜複数業者の見積もりで最高額を狙う方法",
  description:
    "着物の一括査定サービスのおすすめを紹介。複数の買取業者に同時に見積もりを依頼し、最高額で着物を売る方法を解説。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの一括査定対応状況も比較します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/bulk-appraisal/",
  },
  openGraph: {
    title: "着物の一括査定おすすめ｜複数業者の見積もりで最高額を狙う方法",
    description:
      "着物を最高額で売るための一括査定サービスの活用法を解説。複数業者の比較で損をしない売り方。",
    url: "https://kimonokaitori-biyori.com/articles/bulk-appraisal/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の一括査定とは何ですか？",
    answer:
      "着物の一括査定とは、一度の申し込みで複数の買取業者に査定を依頼できるサービスです。自分で1社ずつ問い合わせる手間がなく、各社の査定額を簡単に比較できます。ヒカカクのような一括査定サイトを利用すれば、着物の情報を入力するだけで複数社から見積もりが届きます。",
  },
  {
    question: "一括査定は本当に無料で利用できますか？",
    answer:
      "はい、主要な一括査定サービスはすべて無料で利用できます。ヒカカクなどの一括査定サイトの利用料は無料で、各買取業者の査定料・出張費・キャンセル料も無料です。査定額に納得できなければ断ることもでき、費用は一切かかりません。",
  },
  {
    question: "一括査定で何社くらいに依頼するのがベストですか？",
    answer:
      "最低でも3社、できれば5社程度に依頼するのが理想的です。2社だけでは比較の幅が狭く、適正価格がわかりにくいです。3社以上になると相場感がつかめ、5社程度になると最高額と最低額の差が明確になるため、最も有利な条件で売却できます。",
  },
  {
    question: "一括査定と個別査定はどちらが高く売れますか？",
    answer:
      "一般的には一括査定の方が高く売れる傾向があります。業者側も複数社で比較されていることを知っているため、競争意識から高めの査定額を提示してくれることが多いです。個別査定で1社だけに依頼すると、その業者の提示額が適正かどうか判断できないリスクがあります。",
  },
  {
    question: "一括査定で個人情報が漏れることはありませんか？",
    answer:
      "大手の一括査定サービスはプライバシーポリシーに基づいて個人情報を適切に管理しています。ヒカカクなどの信頼性の高いサービスを利用すれば、個人情報が第三者に不正に流出するリスクは極めて低いです。ただし、査定を依頼した業者からは連絡が来ますので、その点はご了承ください。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の一括査定おすすめ｜複数業者の見積もりで最高額を狙う方法",
  description:
    "着物を最高額で売るための一括査定サービスの活用法を解説。複数業者の比較で損をしない売り方。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
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
    "@id": "https://kimonokaitori-biyori.com/articles/bulk-appraisal/",
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
      name: "着物の一括査定",
      item: "https://kimonokaitori-biyori.com/articles/bulk-appraisal/",
    },
  ],
};

export default function BulkAppraisalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <Breadcrumb
        items={[
          { label: "コラム", href: "/articles/" },
          { label: "着物の一括査定" },
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
              <span className="text-gradient">着物の一括査定おすすめ</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                複数業者の見積もりで最高額を狙う方法
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物を1社だけに査定を依頼するのはもったいない。複数業者に一括で見積もりを依頼し、最高額を提示してくれた業者に売却することで、数万円の差が出ることも。一括査定の活用法を徹底解説します。
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
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />
              この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li><a href="#what-is" className="text-[#6b4c8a] hover:underline">1. 着物の一括査定とは？</a></li>
                <li><a href="#merit" className="text-[#6b4c8a] hover:underline">2. 一括査定のメリット・デメリット</a></li>
                <li><a href="#how-to" className="text-[#6b4c8a] hover:underline">3. 一括査定の利用手順</a></li>
                <li><a href="#services" className="text-[#6b4c8a] hover:underline">4. おすすめの一括査定サービス・業者</a></li>
                <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">5. 一括査定 vs 個別査定の比較</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 一括査定で高く売る5つのコツ</a></li>
                <li><a href="#case" className="text-[#6b4c8a] hover:underline">7. 一括査定の実例と価格差</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 一括査定とは */}
      <section id="what-is" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物の一括査定とは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物の一括査定とは、<strong>一度の申し込みで複数の買取業者に同時に査定を依頼できるサービス</strong>です。通常、着物を売る際は自分で業者を探して1社ずつ問い合わせる必要がありますが、一括査定を利用すれば着物の情報を入力するだけで、複数社から見積もりが届きます。
            </p>
            <p>
              これにより、各社の査定額を簡単に比較でき、最も高い金額を提示した業者に売却することが可能です。着物の買取価格は業者によって大きく異なるため、一括査定を活用することで<strong>数千円〜数万円の差額</strong>を最大限に引き出せます。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-[#6b4c8a] mb-2">1回</p>
              <p className="text-sm text-gray-600">の申し込みで</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-[#c9a76c] mb-2">複数社</p>
              <p className="text-sm text-gray-600">から見積もりが届く</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-[#e8a0b6] mb-2">最高額</p>
              <p className="text-sm text-gray-600">の業者を選んで売却</p>
            </div>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section id="merit" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            一括査定のメリット・デメリット
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-green-600 mb-4 text-base">メリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 font-bold">&#10003;</span>
                  <span><strong>最高額がわかる</strong> - 複数社の査定額を比較して、最も高い業者を選べる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 font-bold">&#10003;</span>
                  <span><strong>手間が省ける</strong> - 1回の入力で複数社に依頼できるため時間を節約</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 font-bold">&#10003;</span>
                  <span><strong>相場がわかる</strong> - 複数社の査定額を見ることで適正価格が把握できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 font-bold">&#10003;</span>
                  <span><strong>競争原理が働く</strong> - 業者が競合を意識して高めの金額を提示する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 font-bold">&#10003;</span>
                  <span><strong>完全無料</strong> - 利用料・査定料・キャンセル料すべて無料</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-4 text-base">デメリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 font-bold">&#10007;</span>
                  <span><strong>連絡が増える</strong> - 複数業者から電話やメールが届く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 font-bold">&#10007;</span>
                  <span><strong>断る手間</strong> - 選ばなかった業者に断りの連絡が必要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 font-bold">&#10007;</span>
                  <span><strong>概算額と実額の差</strong> - ウェブ査定は概算のため実物査定で変わる場合も</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">結論：</strong>
              デメリットはあるものの、メリットの方がはるかに大きいため、着物を売る際は一括査定の活用を強くおすすめします。特に高額な着物（作家物・ブランド品）ほど業者間の査定額の差が大きいため、一括査定のメリットが際立ちます。
            </p>
          </div>
        </div>
      </section>

      {/* 利用手順 */}
      <section id="how-to" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            一括査定の利用手順
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">一括査定サイトにアクセス</h3>
                <p className="text-sm text-gray-700">ヒカカクなどの一括査定サイトにアクセスし、着物のカテゴリを選択します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">着物の情報を入力</h3>
                <p className="text-sm text-gray-700">着物の種類・素材・状態・ブランド・数量などの情報を入力します。写真があれば添付するとより正確な査定額が出ます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">連絡先情報を入力</h3>
                <p className="text-sm text-gray-700">名前・電話番号・メールアドレス・住所を入力し、申し込みを完了します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#c9a76c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">各社から見積もりが届く</h3>
                <p className="text-sm text-gray-700">数時間〜数日で複数の業者から電話やメールで査定額の連絡が届きます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#c9a76c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">最高額の業者に正式査定を依頼</h3>
                <p className="text-sm text-gray-700">概算額を比較し、最も高い業者に出張買取や宅配買取の正式査定を依頼します。実物を見てもらい、最終的な買取額を確定させます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめサービス */}
      <section id="services" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            おすすめの一括査定サービス・業者
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            着物の一括査定に対応したサービスと、個別に査定を依頼すべきおすすめ業者をご紹介します。一括査定サイトと個別業者を組み合わせることで、より多くの見積もりを集められます。
          </p>

          <div className="space-y-6">
            <div className="bg-white border-2 border-[#c9a76c] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">一括比較</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                日本最大級の買取価格比較サイト。着物の情報を入力するだけで、複数の買取業者から一括で見積もりが届きます。提携業者数が多いため、着物専門業者から総合買取店まで幅広い業者の査定額を比較できます。利用料は完全無料。着物の一括査定を始めるなら、まずヒカカクがおすすめです。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">個別査定</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。一括査定サイト経由でも直接でも無料査定に対応。着物専門の査定員がいるため、作家物やブランド品の適正査定に強い。持ち込み・出張・宅配の3つの方法から選べます。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">個別査定</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者。出張買取での丁寧な査定が評判。一括査定の比較対象として、直接ウリエルにも査定を依頼することで、より正確な相場感がつかめます。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">個別査定</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                宅配買取に特化し、海外販路も持つ買取業者。宅配で手軽に査定を受けられるため、一括査定の比較対象に加えやすい。オンラインで事前査定も可能です。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">個別査定</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                都内中心に展開するリユース企業。店舗への持ち込みで即日査定が可能なため、一括査定で概算額を把握した後、店舗に持ち込んで最終確認するという使い方に適しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 一括 vs 個別 */}
      <section id="comparison" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            一括査定 vs 個別査定の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold">一括査定</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">個別査定（1社のみ）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">手間</td>
                  <td className="px-4 py-3 text-green-600 font-medium">少ない（1回の入力）</td>
                  <td className="px-4 py-3 text-gray-700">多い（1社ずつ問い合わせ）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">査定額の比較</td>
                  <td className="px-4 py-3 text-green-600 font-medium">複数社を簡単に比較</td>
                  <td className="px-4 py-3 text-gray-700">比較不可</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取価格</td>
                  <td className="px-4 py-3 text-green-600 font-medium">高くなる傾向</td>
                  <td className="px-4 py-3 text-gray-700">適正かわからない</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">業者からの連絡</td>
                  <td className="px-4 py-3 text-red-500 font-medium">複数社から来る</td>
                  <td className="px-4 py-3 text-green-600">1社のみ</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">おすすめ度</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">非常におすすめ</td>
                  <td className="px-4 py-3 text-gray-500 rounded-br-lg">あまりおすすめしない</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            一括査定で高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：できるだけ多くの業者に依頼する</h3>
              <p className="text-sm leading-relaxed text-gray-700">一括査定サイトだけでなく、直接個別の業者にも査定を依頼しましょう。買取大吉やウリエルに直接連絡し、ヒカカクの一括査定と合わせて5社以上の見積もりを集めるのが理想的です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：着物の情報を正確に伝える</h3>
              <p className="text-sm leading-relaxed text-gray-700">素材（正絹・化繊）、種類（振袖・訪問着など）、状態（シミ・汚れの有無）、証紙の有無を正確に入力しましょう。情報が正確であるほど、概算額と実際の買取額の差が小さくなります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：写真を添付する</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の全体像・証紙・状態がわかる写真を添付すると、より正確な概算額が出ます。自然光のもとで撮影し、色合いが正確に伝わるようにしましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：他社の査定額を伝える</h3>
              <p className="text-sm leading-relaxed text-gray-700">正式査定の際に「他社ではいくらだった」と伝えることで、それを上回る金額を提示してもらえることがあります。これは一括査定ならではの交渉術です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：着物専門業者を必ず含める</h3>
              <p className="text-sm leading-relaxed text-gray-700">総合買取店だけでなく、買取大吉やウリエルのような着物専門の査定員がいる業者を必ず比較対象に含めましょう。専門業者の方が着物の価値を正しく評価できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 実例 */}
      <section id="case" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            一括査定の実例と価格差
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            同じ着物でも業者によって査定額は大きく異なります。以下は一括査定を利用した場合の価格差のイメージです。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">例1：正絹の訪問着（美品・証紙付き）</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#c9a76c] text-white">
                      <th className="px-4 py-2 text-left rounded-tl-lg">業者</th>
                      <th className="px-4 py-2 text-left rounded-tr-lg">査定額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2">A社（着物専門）</td><td className="px-4 py-2 font-bold text-[#c9a76c]">35,000円</td></tr>
                    <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2">B社（着物専門）</td><td className="px-4 py-2">28,000円</td></tr>
                    <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2">C社（総合買取）</td><td className="px-4 py-2">15,000円</td></tr>
                    <tr className="bg-[#faf8f5]"><td className="px-4 py-2">D社（総合買取）</td><td className="px-4 py-2">10,000円</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-600">最高額と最低額の差：<strong className="text-[#6b4c8a]">25,000円</strong></p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">例2：大島紬（証紙なし・小さなシミあり）</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#c9a76c] text-white">
                      <th className="px-4 py-2 text-left rounded-tl-lg">業者</th>
                      <th className="px-4 py-2 text-left rounded-tr-lg">査定額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2">A社（着物専門）</td><td className="px-4 py-2 font-bold text-[#c9a76c]">18,000円</td></tr>
                    <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2">B社（着物専門）</td><td className="px-4 py-2">12,000円</td></tr>
                    <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2">C社（総合買取）</td><td className="px-4 py-2">5,000円</td></tr>
                    <tr className="bg-[#faf8f5]"><td className="px-4 py-2">D社（総合買取）</td><td className="px-4 py-2">3,000円</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-600">最高額と最低額の差：<strong className="text-[#6b4c8a]">15,000円</strong></p>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">重要：</strong>
              このように同じ着物でも、業者によって2倍〜3倍以上の価格差がつくことがあります。1社だけの査定で売却してしまうと、数万円を損する可能性があります。一括査定で必ず複数社を比較しましょう。
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
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/line-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">LINE査定おすすめ業者</h3>
              <p className="text-xs text-gray-600">スマホで簡単に着物の価値がわかるLINE査定を紹介。</p>
            </Link>
            <Link href="/articles/sell-high-tips/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物を高く売るコツ</h3>
              <p className="text-xs text-gray-600">着物を最高額で売るためのテクニックを解説。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            まずは一括査定で最高額を確認しましょう
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            着物の買取は1社だけでは損をする可能性があります。複数業者の無料査定で、お手持ちの着物の最高額を確認してみましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
