import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取 東京のおすすめ業者5選｜持ち込み・出張対応を比較",
  description:
    "東京で着物買取を依頼するならどこがおすすめ？持ち込み買取・出張買取に対応した東京都内のおすすめ業者5選を比較。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの特徴や口コミ、東京エリアの買取相場を徹底解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/tokyo/",
  },
  openGraph: {
    title: "着物買取 東京のおすすめ業者5選｜持ち込み・出張対応を比較",
    description:
      "東京都内で着物を高く売るためのおすすめ買取業者5選。持ち込み・出張・宅配の対応状況を比較。",
    url: "https://kimonokaitori-biyori.com/articles/tokyo/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "東京都内で着物の持ち込み買取ができる店舗はありますか？",
    answer:
      "はい、東京都内には着物の持ち込み買取に対応した店舗が多数あります。買取大吉は新宿・池袋・銀座など主要エリアに店舗を展開しており、予約不要で持ち込み査定が可能です。ティファナも都内に複数店舗があり、着物を直接持ち込めます。ウリエルは出張買取がメインですが、事前予約で持ち込みにも対応しています。",
  },
  {
    question: "東京で出張買取を依頼する場合、出張費はかかりますか？",
    answer:
      "主要な着物買取業者であれば、東京都内への出張費は無料です。買取大吉・ウリエル・ティファナはいずれも東京23区はもちろん、多摩地域や島嶼部を除く東京都全域で無料出張買取に対応しています。査定料・キャンセル料も無料なので、気軽に依頼できます。",
  },
  {
    question: "東京の着物買取相場は地方より高いですか？",
    answer:
      "一般的に東京は着物の需要が高いため、地方よりも買取相場がやや高い傾向があります。特にブランド着物や作家物は、東京の方が買い手が多いため高額になりやすいです。ただし、業者によって査定基準は異なるため、複数社に見積もりを依頼して比較することが重要です。",
  },
  {
    question: "東京で大量の着物をまとめて売ることはできますか？",
    answer:
      "はい、東京であれば出張買取を利用することで大量の着物をまとめて売ることができます。買取大吉やウリエルは点数制限なく出張買取に対応しており、数十枚〜百枚単位の着物でも自宅まで査定に来てくれます。大量買取の場合は事前に電話で点数を伝えておくとスムーズです。",
  },
  {
    question: "東京の着物買取で注意すべきポイントはありますか？",
    answer:
      "東京では着物買取業者の選択肢が多いため、必ず複数社に査定を依頼して比較しましょう。また、訪問営業で着物の買取を持ちかけてくる業者には注意が必要です。信頼できる業者は自ら営業訪問をすることはありません。口コミや評判を確認し、古物商許可証を持った業者に依頼することが大切です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取 東京のおすすめ業者5選｜持ち込み・出張対応を比較",
  description:
    "東京都内で着物を高く売るためのおすすめ買取業者5選。持ち込み・出張・宅配の対応状況を比較。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/tokyo/",
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
      name: "東京の着物買取",
      item: "https://kimonokaitori-biyori.com/articles/tokyo/",
    },
  ],
};

export default function TokyoPage() {
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
          { label: "東京の着物買取" },
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
              <span className="text-gradient">着物買取 東京</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                おすすめ業者5選｜持ち込み・出張対応を比較
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              東京都内で着物を売りたい方に向けて、持ち込み買取・出張買取に対応したおすすめ業者5選を徹底比較。各社の特徴、対応エリア、買取実績をまとめました。複数業者を比較して最高額での売却を目指しましょう。
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
                <li>
                  <a href="#overview" className="text-[#6b4c8a] hover:underline">
                    1. 東京の着物買取事情
                  </a>
                </li>
                <li>
                  <a href="#recommended" className="text-[#6b4c8a] hover:underline">
                    2. 東京のおすすめ着物買取業者5選
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-[#6b4c8a] hover:underline">
                    3. 5社の買取方法・対応エリア比較
                  </a>
                </li>
                <li>
                  <a href="#mochikomi" className="text-[#6b4c8a] hover:underline">
                    4. 東京の持ち込み買取スポット
                  </a>
                </li>
                <li>
                  <a href="#shutcho" className="text-[#6b4c8a] hover:underline">
                    5. 東京の出張買取対応エリア
                  </a>
                </li>
                <li>
                  <a href="#market" className="text-[#6b4c8a] hover:underline">
                    6. 東京の着物買取相場
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    7. 東京で着物を高く売る5つのコツ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    8. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 東京の着物買取事情 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            東京の着物買取事情
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              東京都は日本最大の消費市場であり、着物の需要も全国トップクラスです。銀座・日本橋をはじめとする老舗呉服店エリアだけでなく、浅草・上野などの観光地では外国人観光客による中古着物の需要も高まっています。
            </p>
            <p>
              そのため東京では着物買取業者の選択肢が非常に豊富で、<strong>持ち込み買取・出張買取・宅配買取</strong>のすべてに対応した業者が揃っています。競合が多い分、買取価格も地方に比べて高めに設定される傾向があり、売り手にとっては有利な環境と言えます。
            </p>
            <p>
              一方で、業者数が多いため悪質な業者も存在します。特に電話や訪問での営業を行う業者には注意が必要です。本記事では、実績と信頼性の高い大手買取業者5社に厳選してご紹介します。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">500店+</p>
              <p className="text-xs text-gray-600">都内の着物関連店舗数</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">10〜30%</p>
              <p className="text-xs text-gray-600">地方比で高い買取相場</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">即日対応</p>
              <p className="text-xs text-gray-600">出張買取の最短対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            東京のおすすめ着物買取業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            東京都内で着物の買取実績が豊富で、口コミ評価の高い5社をご紹介します。いずれも査定料・出張費・キャンセル料が無料なので、気軽に見積もりを依頼できます。
          </p>

          <div className="space-y-6">
            {/* 買取大吉 */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。東京都内には新宿・池袋・銀座・渋谷・上野など主要エリアに多数の店舗を構えており、持ち込み買取が非常に便利です。着物専門の査定員が在籍しており、作家物やブランド着物の適正価格での買取に定評があります。出張買取は東京都全域に無料で対応しています。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">都内店舗数</p>
                  <p className="font-semibold">30店舗以上</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張対応</p>
                  <p className="font-semibold">東京都全域</p>
                </div>
              </div>
            </div>

            {/* ウリエル */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者で、出張買取の対応力が東京エリアでトップクラスです。経験豊富な着物専門の査定員が自宅まで訪問し、一点一点丁寧に査定してくれます。特に大量の着物をまとめて売りたい場合に便利です。女性査定員の指名も可能で、一人暮らしの方でも安心です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">出張・宅配・持込</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">着物専門査定</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">女性査定員対応</p>
                </div>
              </div>
            </div>

            {/* RECLO */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                ブランド品買取で知られるRECLOは、着物の宅配買取に強みを持っています。東京からの宅配買取は送料無料で、梱包キットも無料で届けてもらえます。オンラインでの事前査定にも対応しており、忙しい東京の方でもスキマ時間に着物の買取を進められます。海外販路を持っているため、高額買取が期待できます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">宅配・出張</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">海外販路あり</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">送料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">事前査定対応</p>
                </div>
              </div>
            </div>

            {/* ティファナ */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                東京都内を中心に展開するリユース企業で、着物の持ち込み買取・出張買取に対応しています。東京・神奈川に複数の店舗があり、予約なしでの持ち込みも可能です。着物だけでなく和装小物や帯もまとめて買い取ってくれるため、遺品整理や断捨離の際にも便利です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">対応エリア</p>
                  <p className="font-semibold">東京・神奈川</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">予約不要で持込可</p>
                </div>
              </div>
            </div>

            {/* ヒカカク */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                買取価格の比較サイトとして知られるヒカカクは、東京都内の複数の買取業者から一括で見積もりを取ることができます。自分で1社ずつ問い合わせる手間が省け、最も高い査定額を提示した業者を選べます。東京のように選択肢が多いエリアでは、比較サイトを活用するのが効率的です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">サービス種別</p>
                  <p className="font-semibold">一括査定比較</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">提携業者数</p>
                  <p className="font-semibold">多数</p>
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

      {/* 5社比較表 */}
      <section id="comparison" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            5社の買取方法・対応エリア比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">業者名</th>
                  <th className="px-4 py-3 text-left font-semibold">持ち込み</th>
                  <th className="px-4 py-3 text-left font-semibold">出張</th>
                  <th className="px-4 py-3 text-left font-semibold">宅配</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">東京の対応力</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">都内30店舗以上・即日出張</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">出張買取に強い・女性査定員</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">宅配メイン・海外販路あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-700">都内複数店舗・予約不要</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ヒカカク</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">一括見積もり比較サービス</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 持ち込み買取スポット */}
      <section id="mochikomi" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            東京の持ち込み買取スポット
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            東京都内で着物を持ち込み買取できる主要エリアをご紹介します。アクセスの良い場所に店舗があるため、お出かけのついでに立ち寄ることも可能です。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">新宿エリア</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                新宿駅周辺には買取大吉をはじめ複数の買取店が集中しています。JR・私鉄・地下鉄のアクセスが良く、仕事帰りや買い物ついでに気軽に立ち寄れます。新宿三丁目から歌舞伎町方面にかけて、着物を取り扱う店舗が点在しています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">銀座・日本橋エリア</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                老舗呉服店が並ぶ銀座・日本橋エリアは、高級着物の買取に強い店舗が多いのが特徴です。買取大吉の銀座店やティファナの店舗があり、作家物やブランド着物の査定に定評があります。百貨店で購入した高級品を持ち込む方も多いエリアです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">池袋・上野エリア</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                池袋・上野エリアも買取店が充実しています。池袋には買取大吉の店舗があり、上野・御徒町エリアはもともとリサイクルショップが多い地域のため、着物買取にも対応した店舗が見つかります。浅草方面では和装関連の需要も高いエリアです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">渋谷・自由が丘エリア</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                渋谷や自由が丘にも買取対応店舗があります。特に世田谷・目黒区エリアの高所得世帯からの買取依頼が多く、高級着物の取り扱いが豊富です。買取大吉は渋谷にも店舗を構えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 出張買取対応エリア */}
      <section id="shutcho" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            東京の出張買取対応エリア
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            東京都内での出張買取は、大半の業者が23区全域に対応しています。多摩地域（八王子・立川・町田など）についても対応している業者がほとんどです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">エリア</th>
                  <th className="px-4 py-3 text-left font-semibold">主な地域</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">出張買取の対応状況</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">23区（都心部）</td>
                  <td className="px-4 py-3 text-gray-700">千代田・中央・港・新宿・渋谷区など</td>
                  <td className="px-4 py-3 font-medium text-green-600">全社対応・即日可能</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">23区（周辺部）</td>
                  <td className="px-4 py-3 text-gray-700">足立・葛飾・江戸川・練馬・板橋区など</td>
                  <td className="px-4 py-3 font-medium text-green-600">全社対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">多摩地域</td>
                  <td className="px-4 py-3 text-gray-700">八王子・立川・町田・府中・調布など</td>
                  <td className="px-4 py-3 font-medium text-green-600">ほぼ全社対応</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">島嶼部</td>
                  <td className="px-4 py-3 text-gray-700">大島・八丈島・小笠原など</td>
                  <td className="px-4 py-3 font-medium text-gray-500 rounded-br-lg">宅配買取で対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">出張買取のメリット：</strong>
              着物は1枚でもかさばるため、複数枚をまとめて売りたい場合は出張買取がおすすめです。特に東京は交通費もかかるため、自宅で査定してもらえる出張買取は時間・費用の両面でお得です。買取大吉やウリエルであれば、当日予約で即日出張にも対応してくれます。
            </p>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section id="market" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            東京の着物買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            東京都内での着物買取相場を種類別にまとめました。東京は全国的に見ても買取相場が高い地域です。ただし、業者によって査定額には差があるため、複数社で比較することが重要です。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold">ブランド品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">作家物の相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">3万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">10万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万円〜8万円</td>
                  <td className="px-4 py-3 text-gray-700">8万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大島紬</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">3万円〜15万円</td>
                  <td className="px-4 py-3 text-gray-700">15万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜1万円</td>
                  <td className="px-4 py-3 text-gray-700">1万円〜5万円</td>
                  <td className="px-4 py-3 text-gray-700">5万円〜20万円以上</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯（袋帯）</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">3万円〜20万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 相場は状態・サイズ・市場動向により変動します。最新の正確な査定額は各業者への無料査定でご確認ください。
          </p>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            東京で着物を高く売る5つのコツ
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：複数の業者に無料査定を依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                東京は買取業者の選択肢が多いため、最低でも3社以上に査定を依頼しましょう。同じ着物でも業者によって数万円の差がつくことがあります。ヒカカクのような一括査定サービスを使えば、手間をかけずに複数社の見積もりが取れます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：着物専門の査定員がいる業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                総合リサイクルショップよりも、着物の専門知識を持つ査定員がいる業者の方が適正価格で買い取ってくれます。買取大吉やウリエルは着物専門の査定員が対応するため、作家物やブランド品の価値を見逃しません。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：証紙・証明書を一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地証明の証紙、作家の落款、購入時の証明書（保証書・レシート）があれば必ず添えましょう。特に東京の百貨店で購入した高級着物は、購入証明書があることで信頼性が増し、査定額アップにつながります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：帯や小物もまとめて出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物と一緒に帯・帯締め・帯揚げ・草履などをセットで出すと、コーディネートとしての付加価値が認められ、個別に売るより高額になります。使わない和装小物はすべてまとめて査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：需要の高い時期に売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の需要が高まる9〜12月や1月に売ると、通常より高い査定額がつく傾向があります。ただし、状態の良さが最も重要なので、長期保管でシミやカビが出るリスクを考えると「売ると決めたらすぐ」が最善です。
              </p>
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
              href="/articles/osaka/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                大阪の着物買取業者5選
              </h3>
              <p className="text-xs text-gray-600">
                大阪・関西エリアの着物買取おすすめ業者を比較。出張買取の対応状況も。
              </p>
            </Link>
            <Link
              href="/articles/mochikomi-kaitori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                持ち込み買取ガイド
              </h3>
              <p className="text-xs text-gray-600">
                着物の持ち込み買取のメリット・デメリットと高く売るコツ。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            東京で着物を売るなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            東京都内なら持ち込み・出張・宅配と選択肢が豊富。複数業者の無料査定で、お手持ちの着物の最高額を確認してみましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
