import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の無料査定おすすめ5選｜査定だけでもOKな業者",
  description:
    "着物の無料査定ができるおすすめ業者5選を比較。査定だけでもOK・キャンセル無料の業者を厳選。出張査定・宅配査定・LINE査定など査定方法も詳しく解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/free-appraisal/",
  },
  openGraph: {
    title: "着物の無料査定おすすめ5選｜査定だけでもOKな業者",
    description:
      "着物の無料査定ができるおすすめ業者5選。査定だけでもOK・キャンセル無料の業者を厳選。",
    url: "https://kimonokaitori-biyori.com/articles/free-appraisal/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の査定だけしてもらって売らなくても大丈夫ですか？",
    answer:
      "はい、買取大吉・ウリエル・RECLOなど主要業者はすべて「査定だけでもOK」です。査定額に納得できなければキャンセルしても費用は一切かかりません。複数社に査定を依頼して比較するのがおすすめです。",
  },
  {
    question: "無料査定にはどのような方法がありますか？",
    answer:
      "主な無料査定の方法は、出張査定（自宅に査定員が訪問）、宅配査定（着物を送って査定）、持ち込み査定（店舗に持ち込み）、LINE査定（写真を送って概算査定）の4種類です。最も正確なのは実物を見てもらう出張査定や持ち込み査定です。",
  },
  {
    question: "LINE査定の精度はどのくらいですか？",
    answer:
      "LINE査定は写真から概算価格を出すため、実物査定と比べると精度は低くなります。あくまで目安として利用し、正式な査定は出張や持ち込みで行いましょう。ただし「値段がつくかどうか」の判断には十分役立ちます。",
  },
  {
    question: "出張査定ではどのくらい時間がかかりますか？",
    answer:
      "着物の点数にもよりますが、一般的に10〜20枚程度であれば30分〜1時間程度です。50枚以上の大量査定の場合は1〜2時間かかることがあります。査定中は立ち合わなくても問題ありません。",
  },
  {
    question: "査定前に着物をクリーニングに出す必要はありますか？",
    answer:
      "いいえ、クリーニングに出す必要はありません。着物のクリーニング代は高額（数千円〜1万円以上）なため、クリーニング代が買取額を上回ってしまうリスクがあります。軽くシワを伸ばして畳んでおく程度で十分です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の無料査定おすすめ5選｜査定だけでもOKな業者",
  description:
    "着物の無料査定ができるおすすめ業者5選。査定だけでもOK・キャンセル無料の業者を厳選。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/free-appraisal/",
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
      name: "着物の無料査定おすすめ",
      item: "https://kimonokaitori-biyori.com/articles/free-appraisal/",
    },
  ],
};

export default function FreeAppraisalPage() {
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
          { label: "着物の無料査定おすすめ" },
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
              <span className="text-gradient">着物の無料査定</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                おすすめ5選｜査定だけでもOKな業者
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              「まずは値段だけ知りたい」「売るかどうかは査定後に決めたい」という方のために、査定だけでもOK・キャンセル無料の着物買取業者5選を紹介。出張査定・宅配査定・LINE査定の違いも解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年4月26日
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
                <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 着物の無料査定とは？</a></li>
                <li><a href="#methods" className="text-[#6b4c8a] hover:underline">2. 無料査定の4つの方法</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">3. 無料査定おすすめ業者5選</a></li>
                <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">4. 5社の査定方法比較表</a></li>
                <li><a href="#flow" className="text-[#6b4c8a] hover:underline">5. 無料査定の流れ</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 査定額をアップさせるコツ</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 無料査定とは */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物の無料査定とは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物の無料査定とは、査定料・出張費・送料・キャンセル料がすべて無料で着物の価値を鑑定してもらえるサービスです。売る前に「いくらになるか」を確認でき、<strong>査定額に納得できなければ売らなくてもOK</strong>です。
            </p>
            <p>
              近年は多くの買取業者が無料査定に対応しており、複数社に査定を依頼して最高額を比較するのが賢い売り方です。まずは気軽に無料査定を利用してみましょう。
            </p>
            <p>
              ただし「無料」と謳いながら出張費やキャンセル料を請求する悪質な業者も存在します。この記事では、実際にすべて無料で利用できる信頼性の高い業者のみを厳選しています。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">査定料 0円</p>
              <p className="text-xs text-gray-600">着物の鑑定・査定は完全無料</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">出張費 0円</p>
              <p className="text-xs text-gray-600">自宅への訪問も無料</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">キャンセル 0円</p>
              <p className="text-xs text-gray-600">売らなくても費用なし</p>
            </div>
          </div>
        </div>
      </section>

      {/* 査定方法 */}
      <section id="methods" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            無料査定の4つの方法
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 出張査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">査定員が自宅に訪問して実物を鑑定。最も正確な査定が受けられ、大量の着物もまとめて査定可能。買取大吉・ウリエルが特に強い。</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">精度：高</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">手軽さ：高</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">大量査定：可</span>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 宅配査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物を梱包して業者に送って査定。梱包キットが無料で届くケースが多い。RECLOが特に充実。全国どこからでも利用可能。</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">精度：高</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">対面不要</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">全国対応</span>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 持ち込み査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">買取店舗に着物を持ち込んで査定。その場で結果がわかり即日買取も可能。買取大吉・ティファナが全国に店舗を展開。</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">精度：高</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">即日対応</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">予約不要</span>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. LINE・写真査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の写真をLINEやメールで送って概算価格を確認。最も手軽だが精度はやや低め。「値段がつくかどうか」の確認に便利。</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">精度：中</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">最も手軽</span>
                <span className="text-xs bg-[#faf8f5] border border-[#e8ddd0] rounded-full px-3 py-1">概算価格</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            無料査定おすすめ業者5選
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開。出張査定・持ち込み査定・宅配査定のすべてに対応し、すべて完全無料。査定だけでもOKで、キャンセル料もかかりません。着物専門の査定員が正確な価値を鑑定します。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定方法</p>
                  <p className="font-semibold">出張・持込・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定のみ</p>
                  <p className="font-semibold text-green-600">OK</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">キャンセル料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">全国店舗数</p>
                  <p className="font-semibold">700店舗以上</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物専門の出張査定に特に強い業者。経験豊富な査定員が自宅まで訪問し、1枚1枚丁寧に査定。査定だけの利用もOKで、無理な営業は一切ありません。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定方法</p>
                  <p className="font-semibold">出張・宅配・持込</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定のみ</p>
                  <p className="font-semibold text-green-600">OK</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">キャンセル料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">着物専門査定</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                宅配査定に特化。無料の梱包キットを取り寄せて着物を送るだけ。査定額に納得できなければ無料で返送。事前にオンラインで概算査定も可能です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定方法</p>
                  <p className="font-semibold">宅配・出張</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定のみ</p>
                  <p className="font-semibold text-green-600">OK</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">返送料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">事前査定</p>
                  <p className="font-semibold">オンライン対応</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国に店舗を持つリユース企業。予約不要で持ち込み査定が可能。和装小物もまとめて査定でき、その場で査定額がわかるスピーディーさが魅力です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定方法</p>
                  <p className="font-semibold">持込・出張</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定のみ</p>
                  <p className="font-semibold text-green-600">OK</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">キャンセル料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">即日査定可能</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                一括で複数業者の査定額を比較できるサービス。1回の申し込みで複数社の概算査定が届くため、最も効率的に最高額を見つけられます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定方法</p>
                  <p className="font-semibold">一括比較</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定のみ</p>
                  <p className="font-semibold text-green-600">OK</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">利用料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">複数社を一括比較</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            5社の査定方法比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">業者名</th>
                  <th className="px-4 py-3 text-left font-semibold">出張</th>
                  <th className="px-4 py-3 text-left font-semibold">宅配</th>
                  <th className="px-4 py-3 text-left font-semibold">持込</th>
                  <th className="px-4 py-3 text-left font-semibold">LINE</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">査定のみ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">OK</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">OK</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">OK</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">OK</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ヒカカク</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold rounded-br-lg">OK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 無料査定の流れ */}
      <section id="flow" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            無料査定の流れ
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">申し込み</h3>
                <p className="text-sm leading-relaxed text-gray-700">電話・Web・LINEから申し込み。出張査定の場合は訪問日時を予約します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">査定</h3>
                <p className="text-sm leading-relaxed text-gray-700">査定員が着物を1枚1枚丁寧に鑑定。素材・産地・作家・状態を確認して査定額を提示します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">結果確認・判断</h3>
                <p className="text-sm leading-relaxed text-gray-700">査定額に納得できればその場で買取成立。納得できなければキャンセルOK。費用は一切かかりません。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コツ */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            査定額をアップさせるコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：複数社に査定を依頼する</h3>
              <p className="text-sm leading-relaxed text-gray-700">業者によって得意ジャンルや査定基準が異なるため、3社以上に査定を依頼して比較しましょう。ヒカカクの一括比較を活用すると効率的です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：証紙・たとう紙を一緒に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">産地の証紙や作家の落款があると査定額が大幅にアップします。たとう紙（畳紙）も着物と一緒に出しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：着物と帯をセットで出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物と帯をコーディネートとしてセットで出すと、単体よりも高額査定になる可能性があります。和装小物もまとめて出しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：着物専門の業者を選ぶ</h3>
              <p className="text-sm leading-relaxed text-gray-700">総合リサイクルショップでは着物の価値を見落とされがちです。買取大吉やウリエルなど着物に精通した査定員のいる業者を選びましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：クリーニングは不要</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物のクリーニング代は高額なため、査定前にクリーニングに出す必要はありません。軽く陰干しして風を通す程度で十分です。</p>
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
      <section className="py-10">
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
            <Link href="/articles/photo-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">写真査定のコツ</h3>
              <p className="text-xs text-gray-600">LINE・メールで着物を査定してもらう方法。</p>
            </Link>
            <Link href="/articles/sell-high-tips/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物を高く売るコツ</h3>
              <p className="text-xs text-gray-600">査定額アップのための実践テクニック。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            まずは無料査定で着物の価値を確認
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            査定だけでもOK・キャンセル無料。複数業者の無料査定で着物の最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
