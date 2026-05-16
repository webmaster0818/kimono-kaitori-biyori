import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取 即日現金化｜最短当日入金のおすすめ業者比較",
  description:
    "着物を即日で現金化したい方向けに、最短当日入金に対応した着物買取業者5選を比較。出張買取なら最短30分で査定・現金受け取りが可能。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの即日対応状況を徹底解説。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/same-day-cash/",
  },
  openGraph: {
    title: "着物買取 即日現金化｜最短当日入金のおすすめ業者比較",
    description:
      "最短当日に着物を現金化できるおすすめ業者5選。出張・持ち込み・宅配の即日対応状況を比較。",
    url: "https://kimonokaitori-biyori.com/articles/same-day-cash/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の出張買取で当日中に現金を受け取れますか？",
    answer:
      "はい、出張買取であれば当日中に現金を受け取ることが可能です。買取大吉やウリエルは出張査定後、その場で現金を支払ってくれます。予約状況によっては当日予約・当日出張も可能ですが、確実に当日対応を希望する場合は前日までに予約しておくことをおすすめします。",
  },
  {
    question: "持ち込み買取なら何分くらいで現金化できますか？",
    answer:
      "持ち込み買取であれば、早ければ来店から30分〜1時間程度で査定・現金受け取りまで完了します。買取大吉は予約不要で持ち込みでき、混雑状況によりますが通常1時間以内に査定が終わります。着物の点数が多い場合はもう少し時間がかかる場合があります。",
  },
  {
    question: "宅配買取でも即日入金は可能ですか？",
    answer:
      "宅配買取は着物の発送・到着・査定のプロセスがあるため、即日入金は基本的にできません。最短でも2〜3営業日、通常は1週間程度かかります。即日現金化を希望する場合は、出張買取か持ち込み買取をおすすめします。",
  },
  {
    question: "即日買取でも査定額は下がりませんか？",
    answer:
      "信頼できる買取業者であれば、即日対応でも査定額が下がることはありません。査定基準は着物の状態・種類・ブランド・市場動向に基づいて決まるため、スピードによって変わることはありません。ただし、急いでいるからと1社だけで決めてしまうと、他社の方が高い可能性もあるため注意が必要です。",
  },
  {
    question: "大量の着物でも即日で買い取ってもらえますか？",
    answer:
      "数点〜十数点程度であれば、出張買取で即日対応が可能です。ただし、数十枚以上の大量買取の場合は査定に時間がかかるため、当日中に完了しない場合もあります。大量の着物を即日で売りたい場合は、事前に点数を伝えて時間の確保をお願いしましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取 即日現金化｜最短当日入金のおすすめ業者比較",
  description:
    "最短当日に着物を現金化できるおすすめ業者5選。出張・持ち込み・宅配の即日対応状況を比較。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/same-day-cash/" },
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
    { "@type": "ListItem", position: 3, name: "即日現金化ガイド", item: "https://kimonokaitori-biyori.com/articles/same-day-cash/" },
  ],
};

export default function SameDayCashPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "即日現金化ガイド" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              即日対応ガイド
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取 即日現金化</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                最短当日入金のおすすめ業者比較
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              「今すぐ着物を現金に変えたい」という方に向けて、最短当日に入金可能な着物買取業者5選を比較。出張買取・持ち込み買取の即日対応状況と、急ぎで売る際の注意点をまとめました。
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
                <li><a href="#methods" className="text-[#6b4c8a] hover:underline">1. 即日現金化できる3つの買取方法</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">2. 即日対応のおすすめ着物買取業者5選</a></li>
                <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">3. 即日対応の比較表</a></li>
                <li><a href="#flow" className="text-[#6b4c8a] hover:underline">4. 即日買取の流れ（出張・持ち込み別）</a></li>
                <li><a href="#speed-up" className="text-[#6b4c8a] hover:underline">5. 即日買取をスムーズにする5つの準備</a></li>
                <li><a href="#caution" className="text-[#6b4c8a] hover:underline">6. 急ぎで売る際の注意点</a></li>
                <li><a href="#market" className="text-[#6b4c8a] hover:underline">7. 即日買取でも高額査定を狙うコツ</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 即日現金化できる3つの買取方法 */}
      <section id="methods" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            即日現金化できる3つの買取方法
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>着物を即日で現金化する方法は大きく3つあります。それぞれの特徴とスピード感を比較しましょう。</p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">出張買取</h3>
              <p className="text-2xl font-bold text-[#c9a76c] mb-2">最短30分〜</p>
              <p className="text-sm text-gray-700">
                査定員が自宅に訪問し、その場で査定・現金支払い。重い着物を運ぶ必要がなく、大量の着物にも対応。当日予約が可能な業者もあり、最もスピーディーに現金化できる方法です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">持ち込み買取</h3>
              <p className="text-2xl font-bold text-[#c9a76c] mb-2">最短30分〜</p>
              <p className="text-sm text-gray-700">
                店舗に直接持ち込んで、その場で査定・現金受け取り。予約不要の店舗であれば、思い立った日にすぐ売れます。ただし、着物を持ち運ぶ手間と近くに店舗がある必要があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">宅配買取</h3>
              <p className="text-2xl font-bold text-[#e8a0b6] mb-2">2〜7日</p>
              <p className="text-sm text-gray-700">
                梱包・発送・査定のプロセスがあるため即日対応は不可。最短でも2〜3営業日かかります。急ぎでない場合や、出張・持ち込みが利用できない地域の方向けです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            即日対応のおすすめ着物買取業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            即日で着物を現金化したい場合に利用できる、大手買取業者5社の即日対応状況をまとめました。
          </p>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手。持ち込み買取は予約不要で、最短30分で査定・現金支払いが完了します。出張買取も当日予約に対応しているエリアがあり、電話一本でスピーディーに手配可能。即日現金化を最も確実に実現できる業者です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">持ち込み即日</p>
                  <p className="font-semibold text-green-600">対応（予約不要）</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張即日</p>
                  <p className="font-semibold text-green-600">対応可能</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">支払い方法</p>
                  <p className="font-semibold">現金（その場）</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定時間</p>
                  <p className="font-semibold">最短30分</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者。出張買取でその場で現金支払いに対応しており、当日予約も受け付けています。着物専門の査定員が丁寧に査定するため、急いでいても適正価格での買取が期待できます。大量の着物でも即日対応可能です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張即日</p>
                  <p className="font-semibold text-green-600">対応可能</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">支払い方法</p>
                  <p className="font-semibold">現金（その場）</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
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
                宅配買取がメインのため即日現金化には不向きですが、事前にオンライン査定で概算額を確認できるのが強みです。急ぎではないが高額査定を重視したい方や、近くに買取店がない方におすすめ。海外販路を持ち高額買取が期待できます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">即日対応</p>
                  <p className="font-semibold text-gray-400">不可（宅配のみ）</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">入金目安</p>
                  <p className="font-semibold">2〜5営業日</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">送料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">高額査定重視</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                東京を中心に店舗を展開するリユース企業。持ち込み買取であればその場で現金支払いが可能です。出張買取も対応エリアであれば即日予約可能。着物だけでなく和装小物もまとめて買い取ってくれるので効率的です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">持ち込み即日</p>
                  <p className="font-semibold text-green-600">対応</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張即日</p>
                  <p className="font-semibold text-green-600">エリア限定</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">支払い</p>
                  <p className="font-semibold">現金（その場）</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                一括査定比較サイト。複数業者の見積もりを一度に取れるため、即日対応可能な業者を効率的に探せます。「すぐに売りたいけど安く買い叩かれたくない」という方は、ヒカカクで概算査定を確認してから即日対応の業者に持ち込むのが賢い方法です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">サービス種別</p>
                  <p className="font-semibold">一括査定比較</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">メリット</p>
                  <p className="font-semibold">即日業者を比較可</p>
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

      {/* 即日対応の比較表 */}
      <section id="comparison" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            即日対応の比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">業者名</th>
                  <th className="px-4 py-3 text-left font-semibold">持ち込み即日</th>
                  <th className="px-4 py-3 text-left font-semibold">出張即日</th>
                  <th className="px-4 py-3 text-left font-semibold">支払い方法</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最短時間</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">現金</td>
                  <td className="px-4 py-3 text-gray-700">約30分</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">現金</td>
                  <td className="px-4 py-3 text-gray-700">約30分〜1時間</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-700">銀行振込</td>
                  <td className="px-4 py-3 text-gray-700">2〜5営業日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">現金</td>
                  <td className="px-4 py-3 text-gray-700">約30分〜1時間</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ヒカカク</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-700">-</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">比較サービス</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 即日買取の流れ */}
      <section id="flow" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            即日買取の流れ（出張・持ち込み別）
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-4 text-base">出張買取の流れ</h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">1.</span>電話で出張買取を申し込む（当日予約可）</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">2.</span>査定員が自宅に訪問（最短即日）</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">3.</span>着物を一点ずつ査定（約30分〜1時間）</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">4.</span>査定額に同意すればその場で現金受け取り</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">5.</span>クーリングオフの書面を受け取り完了</li>
              </ol>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-4 text-base">持ち込み買取の流れ</h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">1.</span>買取店舗に着物を持ち込む（予約不要の店舗あり）</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">2.</span>本人確認書類を提示</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">3.</span>査定員がその場で査定（約30分〜）</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">4.</span>査定額に同意すれば現金受け取り</li>
                <li className="flex gap-2"><span className="font-bold text-[#c9a76c]">5.</span>来店から最短30分で完了</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 即日買取をスムーズにする準備 */}
      <section id="speed-up" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            即日買取をスムーズにする5つの準備
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 本人確認書類を用意する</h3>
              <p className="text-sm leading-relaxed text-gray-700">運転免許証・マイナンバーカード・パスポートなど、有効期限内の本人確認書類を用意しましょう。古物営業法で必須です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 証紙・証明書をまとめておく</h3>
              <p className="text-sm leading-relaxed text-gray-700">産地証紙・作家の落款・購入証明書があれば、査定がスムーズに進みます。事前に探して着物と一緒にまとめておきましょう。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙ガイド</Link>も参考に。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 売りたい着物の点数を把握する</h3>
              <p className="text-sm leading-relaxed text-gray-700">電話予約時に点数を伝えておくと、査定員が十分な時間を確保してくれます。点数が多い場合は、即日で終わらない可能性もあるため事前確認が大切です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. 午前中に予約・来店する</h3>
              <p className="text-sm leading-relaxed text-gray-700">午前中に動き始めれば、当日中の現金化がほぼ確実です。午後遅くになると予約が埋まっていたり、営業時間内に完了しないリスクがあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. 事前にオンライン査定で相場を確認</h3>
              <p className="text-sm leading-relaxed text-gray-700">RECLOやヒカカクのオンライン査定で概算額を把握しておくと、店頭で提示された金額が妥当かどうか判断しやすくなります。<Link href="/articles/kimono-market-price/" className="text-[#6b4c8a] hover:underline">買取相場一覧</Link>も参考にしてください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 急ぎで売る際の注意点 */}
      <section id="caution" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            急ぎで売る際の注意点
          </h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">1社だけで即決しない</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                急いでいるとつい最初の業者で決めてしまいがちですが、業者によって査定額は数万円〜数十万円の差がつくことがあります。可能であれば2〜3社に見積もりを取ってから決めましょう。ヒカカクの一括査定なら短時間で複数社の相場感がわかります。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">「急かされて即決」は危険信号</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「今日中に売ってくれたら○○円上乗せ」「明日だと相場が下がる」と急かす業者は要注意。信頼できる業者は即決を迫りません。<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] hover:underline">トラブル防止ガイド</Link>もチェックしてください。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">クーリングオフの書面を必ず受け取る</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                出張買取の場合、クーリングオフの書面交付は法律で義務付けられています。書面を受け取り、8日以内であれば契約を取り消せることを覚えておきましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 高額査定を狙うコツ */}
      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            即日買取でも高額査定を狙うコツ
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>急いでいても高額査定をあきらめる必要はありません。以下のポイントを押さえれば、即日でも適正価格での売却が可能です。</p>
            <ul className="space-y-3">
              <li className="bg-white border border-[#e8ddd0] rounded-xl p-4">
                <strong className="text-[#6b4c8a]">証紙・証明書を添える：</strong>これだけで査定額が数倍になることもあります。<Link href="/articles/no-certificate/" className="text-[#6b4c8a] hover:underline">証紙なしの場合の対処法</Link>も参考にしてください。
              </li>
              <li className="bg-white border border-[#e8ddd0] rounded-xl p-4">
                <strong className="text-[#6b4c8a]">帯・小物もまとめて出す：</strong>セットで出すと付加価値が認められます。<Link href="/articles/accessories-price/" className="text-[#6b4c8a] hover:underline">和装小物の買取相場</Link>をチェック。
              </li>
              <li className="bg-white border border-[#e8ddd0] rounded-xl p-4">
                <strong className="text-[#6b4c8a]">着物専門の査定員がいる業者を選ぶ：</strong>総合リサイクルショップよりも適正価格がつきます。
              </li>
              <li className="bg-white border border-[#e8ddd0] rounded-xl p-4">
                <strong className="text-[#6b4c8a]">オンライン査定で相場を事前把握：</strong>適正価格を知った上で交渉に臨めます。
              </li>
            </ul>
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
            <Link href="/articles/shutcho-kaitori/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">出張買取ガイド</h3>
              <p className="text-xs text-gray-600">出張買取のメリット・デメリットと利用の流れ。</p>
            </Link>
            <Link href="/articles/mochikomi-kaitori/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">持ち込み買取ガイド</h3>
              <p className="text-xs text-gray-600">持ち込み買取のメリットと高く売るコツ。</p>
            </Link>
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">今すぐ着物を現金化するなら</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            出張買取・持ち込み買取なら最短30分で現金受け取り。まずは無料査定で金額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
