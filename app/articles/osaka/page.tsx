import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取 大阪のおすすめ業者5選｜関西エリアの出張買取",
  description:
    "大阪で着物を売るならどこがおすすめ？関西エリアの出張買取・持ち込み買取に対応した大阪府内のおすすめ業者5選を比較。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの特徴と大阪の買取相場を徹底解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/osaka/",
  },
  openGraph: {
    title: "着物買取 大阪のおすすめ業者5選｜関西エリアの出張買取",
    description:
      "大阪府内で着物を高く売るためのおすすめ買取業者5選。関西エリアの出張買取対応状況を比較。",
    url: "https://kimonokaitori-biyori.com/articles/osaka/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "大阪で着物の持ち込み買取ができる場所はどこですか？",
    answer:
      "大阪府内では、買取大吉が梅田・難波・天王寺・心斎橋エリアに店舗を展開しており、予約不要で持ち込み査定が可能です。ティファナも大阪市内に店舗があり着物の持ち込みに対応しています。駅チカの店舗が多いため、仕事帰りやお出かけのついでに立ち寄りやすい環境が整っています。",
  },
  {
    question: "大阪から宅配買取を利用する場合、送料はかかりますか？",
    answer:
      "RECLOやウリエルの宅配買取は、大阪からの送料が無料です。梱包キットも無料で届けてもらえるため、段ボールを用意する必要もありません。着物をキットに詰めて集荷依頼するだけなので、忙しい方でも手軽に利用できます。査定結果に不満な場合の返送料も無料です。",
  },
  {
    question: "大阪は京都に近いので着物の買取相場は高いですか？",
    answer:
      "大阪は東京に次いで着物の需要が高い地域であり、買取相場も全国平均より高い傾向があります。特に京友禅や西陣織など関西ゆかりの着物は、地元での需要が高いため高額査定が期待できます。ただし業者によって差があるので、複数社の見積もりを比較することが重要です。",
  },
  {
    question: "大阪で遺品整理の着物をまとめて買い取ってもらえますか？",
    answer:
      "はい、大阪府内であれば出張買取を利用することで大量の着物をまとめて買い取ってもらえます。買取大吉やウリエルは遺品整理にも対応しており、着物以外の和装小物や帯も含めて一括査定してくれます。点数が多い場合は事前に連絡しておくとスムーズです。",
  },
  {
    question: "大阪の着物買取で悪質な業者を見分けるポイントは？",
    answer:
      "飛び込み営業で着物の買取を持ちかける業者や、電話勧誘で無理に買取を進める業者には注意が必要です。信頼できる業者は、古物商許可証を取得しており、ホームページで買取実績や会社情報を公開しています。また、クーリングオフ制度に対応していることも重要な判断基準です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取 大阪のおすすめ業者5選｜関西エリアの出張買取",
  description:
    "大阪府内で着物を高く売るためのおすすめ買取業者5選。関西エリアの出張買取対応状況を比較。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/osaka/",
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
      name: "大阪の着物買取",
      item: "https://kimonokaitori-biyori.com/articles/osaka/",
    },
  ],
};

export default function OsakaPage() {
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
          { label: "大阪の着物買取" },
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
              <span className="text-gradient">着物買取 大阪</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                おすすめ業者5選｜関西エリアの出張買取
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              大阪府内で着物を売りたい方に向けて、関西エリアの出張買取・持ち込み買取に対応したおすすめ業者5選を徹底比較。各社の特徴、対応エリア、買取相場をまとめました。
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
                    1. 大阪の着物買取事情
                  </a>
                </li>
                <li>
                  <a href="#recommended" className="text-[#6b4c8a] hover:underline">
                    2. 大阪のおすすめ着物買取業者5選
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-[#6b4c8a] hover:underline">
                    3. 5社の買取方法・対応エリア比較
                  </a>
                </li>
                <li>
                  <a href="#kansai-kimono" className="text-[#6b4c8a] hover:underline">
                    4. 関西ゆかりの着物と買取相場
                  </a>
                </li>
                <li>
                  <a href="#area" className="text-[#6b4c8a] hover:underline">
                    5. 大阪の出張買取対応エリア
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 大阪で着物を高く売る5つのコツ
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

      {/* 大阪の着物買取事情 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            大阪の着物買取事情
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              大阪は東京に次ぐ日本第二の経済都市であり、着物文化も深く根付いた地域です。船場の問屋街を中心に呉服商が栄えた歴史があり、現在でも着物の需要が高い市場です。京都や奈良という着物の産地にも隣接しているため、京友禅・西陣織・奈良の伝統的な織物が多く流通しています。
            </p>
            <p>
              大阪では<strong>出張買取の利便性が高い</strong>のが特徴です。大阪市内はもちろん、堺市・豊中市・吹田市・高槻市など衛星都市にも出張対応している業者が多く、自宅にいながら着物を売却できます。
            </p>
            <p>
              また、大阪のお客様は「値段にシビア」な方が多いため、業者側も競争力のある価格を提示する傾向があります。複数社の査定を比較することで、納得のいく価格で着物を手放せるでしょう。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">300店+</p>
              <p className="text-xs text-gray-600">府内の着物関連店舗数</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">京友禅</p>
              <p className="text-xs text-gray-600">関西ゆかりの高額着物</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">即日対応</p>
              <p className="text-xs text-gray-600">大阪市内の出張買取</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            大阪のおすすめ着物買取業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            大阪府内で着物の買取実績が豊富で、口コミ評価の高い5社をご紹介します。いずれも査定料・出張費・キャンセル料が無料です。
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。大阪府内には梅田・難波・天王寺・心斎橋・堺など主要エリアに多数の店舗を構えています。着物専門の査定員が在籍しており、京友禅・西陣織・大島紬など関西で人気の着物の適正査定に定評があります。出張買取は大阪府全域に無料対応。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">府内店舗数</p>
                  <p className="font-semibold">20店舗以上</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張対応</p>
                  <p className="font-semibold">大阪府全域</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者。大阪エリアでは出張買取の対応力が高く、大阪市内であれば最短即日で査定員が訪問します。大量の着物も一括で査定してくれるため、遺品整理やタンスの整理に最適です。女性の査定員を指名できるのも安心ポイント。
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

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                宅配買取に強みを持つRECLOは、大阪からの送料無料で着物を送れます。梱包キットも無料で届けてもらえるため、自宅から一歩も出ずに着物の売却が完了します。海外にも販路を持っているため、希少な着物は高額査定が期待できます。
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

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                東京・大阪を中心に展開するリユース企業。大阪市内に店舗があり、着物の持ち込み買取に対応しています。着物だけでなく和装小物や帯もまとめて買い取ってくれるため、断捨離の際に便利です。出張買取は大阪市内および近郊エリアに対応。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">対応エリア</p>
                  <p className="font-semibold">大阪市内・近郊</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">小物もまとめて可</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                買取価格の一括比較サイト。大阪府内の複数の買取業者から一度に見積もりが取れるため、最も高い査定額を簡単に見つけられます。自分で業者を探す手間が省け、効率的に着物の買取を進められます。
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
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">大阪の対応力</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">府内20店舗以上・即日出張</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">出張買取に強い・大阪全域</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">宅配メイン・海外販路</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-700">大阪市内に店舗あり</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ヒカカク</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">一括比較サービス</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 関西ゆかりの着物 */}
      <section id="kansai-kimono" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関西ゆかりの着物と買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            大阪・京都・奈良を中心とする関西地域は、日本の着物文化の中心地です。関西ゆかりの着物は全国的に人気が高く、特に京友禅や西陣織は高額買取が期待できます。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">産地</th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京友禅</td>
                  <td className="px-4 py-3 text-gray-700">京都</td>
                  <td className="px-4 py-3 text-gray-700">華やかな手描き染め。格調高い</td>
                  <td className="px-4 py-3 font-medium">3万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">西陣織</td>
                  <td className="px-4 py-3 text-gray-700">京都・西陣</td>
                  <td className="px-4 py-3 text-gray-700">豪華な織り帯。格の高い帯</td>
                  <td className="px-4 py-3 font-medium">5,000円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京小紋</td>
                  <td className="px-4 py-3 text-gray-700">京都</td>
                  <td className="px-4 py-3 text-gray-700">型染めによる繊細な文様</td>
                  <td className="px-4 py-3 font-medium">3,000円〜5万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大阪泉州の帯</td>
                  <td className="px-4 py-3 text-gray-700">大阪・泉州</td>
                  <td className="px-4 py-3 text-gray-700">カジュアルな半幅帯が中心</td>
                  <td className="px-4 py-3 font-medium">1,000円〜1万円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">近江上布</td>
                  <td className="px-4 py-3 text-gray-700">滋賀</td>
                  <td className="px-4 py-3 text-gray-700">麻の夏着物。涼やかな風合い</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">5,000円〜10万円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">ポイント：</strong>
              関西ゆかりの着物は地元の買取業者の方が価値を正しく評価できるケースが多いです。特に京友禅や西陣織は、証紙（産地証明）の有無で買取額が大きく変わります。購入時の証紙があれば必ず添えて査定に出しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 出張買取対応エリア */}
      <section id="area" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            大阪の出張買取対応エリア
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">エリア</th>
                  <th className="px-4 py-3 text-left font-semibold">主な地域</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">対応状況</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大阪市内</td>
                  <td className="px-4 py-3 text-gray-700">北区・中央区・天王寺区・浪速区など</td>
                  <td className="px-4 py-3 font-medium text-green-600">全社対応・即日可能</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">北摂エリア</td>
                  <td className="px-4 py-3 text-gray-700">豊中・吹田・高槻・茨木・箕面</td>
                  <td className="px-4 py-3 font-medium text-green-600">全社対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">堺・泉州エリア</td>
                  <td className="px-4 py-3 text-gray-700">堺市・岸和田・泉大津・和泉</td>
                  <td className="px-4 py-3 font-medium text-green-600">ほぼ全社対応</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">東大阪・南河内</td>
                  <td className="px-4 py-3 text-gray-700">東大阪・八尾・松原・富田林</td>
                  <td className="px-4 py-3 font-medium text-green-600 rounded-br-lg">ほぼ全社対応</td>
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
            大阪で着物を高く売る5つのコツ
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：複数業者の査定を比較する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大阪は買取業者の競争が激しい地域なので、複数社の査定額を比較することで最高額を引き出せます。ヒカカクの一括比較サービスを使えば、手軽に相見積もりが取れます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：関西ゆかりの着物は地元業者に強い
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                京友禅・西陣織・近江上布などの関西ゆかりの着物は、関西の業者の方が需要を把握しているため高く買い取ってくれる傾向があります。買取大吉やウリエルの大阪拠点に相談してみましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：証紙と購入証明書を添える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地証明の証紙や購入時のレシート・保証書があれば、正規品であることが証明でき査定額がアップします。特に京友禅の「京友禅証紙」や西陣織の「西陣織工業組合の証紙」は重要です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：帯や小物もセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物と帯・帯締め・草履などのコーディネートをまとめて出すと付加価値が認められやすいです。使わない和装小物も一緒に査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：状態が良いうちに早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大阪は湿度が高い地域のため、着物の保管状態には特に注意が必要です。カビやシミが発生する前に早めに売却することで、最大限の価値を引き出せます。
              </p>
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
                買取大吉・ウリエルなどおすすめ5社を徹底比較。
              </p>
            </Link>
            <Link
              href="/articles/tokyo/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                東京の着物買取業者5選
              </h3>
              <p className="text-xs text-gray-600">
                東京都内の着物買取おすすめ業者を比較。
              </p>
            </Link>
            <Link
              href="/articles/shutcho-kaitori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                出張買取ガイド
              </h3>
              <p className="text-xs text-gray-600">
                出張買取の流れ・メリット・デメリットを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            大阪で着物を売るなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            大阪府内なら出張買取が便利。複数業者の無料査定で、お手持ちの着物の最高額を確認してみましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
