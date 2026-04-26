import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取 名古屋のおすすめ業者5選｜愛知県の持ち込み・出張対応",
  description:
    "名古屋・愛知県で着物を売るならどこがおすすめ？持ち込み買取・出張買取に対応した名古屋エリアのおすすめ業者5選を比較。有松絞り・名古屋帯など地元ゆかりの着物の買取相場も解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/nagoya/",
  },
  openGraph: {
    title: "着物買取 名古屋のおすすめ業者5選｜愛知県の持ち込み・出張対応",
    description:
      "名古屋・愛知県で着物を高く売るためのおすすめ買取業者5選。有松絞り・名古屋帯の買取相場も。",
    url: "https://kimonokaitori-biyori.com/articles/nagoya/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "名古屋で着物の持ち込み買取ができる店舗はありますか？",
    answer:
      "はい、名古屋市内には着物の持ち込み買取に対応した店舗が複数あります。買取大吉は名古屋駅周辺・栄・金山などに店舗を展開しており、予約不要で着物を持ち込めます。ティファナも名古屋市内に店舗があります。地下鉄やJRの主要駅から徒歩圏内の店舗が多いため、アクセスも便利です。",
  },
  {
    question: "有松絞りの着物は名古屋で高く売れますか？",
    answer:
      "有松絞り（有松鳴海絞り）は名古屋の伝統工芸品であり、地元の買取業者は価値をよく理解しています。本藍染めの有松絞りであれば3万円〜15万円程度の買取相場が見込めます。証紙（伝統工芸品証紙）があればさらに高額査定が期待できます。買取大吉やウリエルなど着物専門の査定員がいる業者に依頼しましょう。",
  },
  {
    question: "名古屋帯の買取相場はどのくらいですか？",
    answer:
      "名古屋帯の買取相場は、一般品で500円〜3,000円、ブランド品（西陣織など）で3,000円〜2万円、作家物で2万円〜10万円程度です。名古屋帯はカジュアルからセミフォーマルまで幅広く使われるため、需要が安定しています。単体では低額でも、着物とセットで出すとプラス評価されます。",
  },
  {
    question: "愛知県の郊外でも出張買取に来てもらえますか？",
    answer:
      "はい、買取大吉やウリエルは愛知県全域で出張買取に対応しています。名古屋市内はもちろん、豊田・豊橋・岡崎・一宮・春日井・安城・刈谷などの郊外エリアにも無料で出張してくれます。出張費・査定料・キャンセル料はすべて無料です。",
  },
  {
    question: "名古屋で着物と一緒に帯や和装小物も売れますか？",
    answer:
      "はい、ほとんどの買取業者は着物と一緒に帯・帯締め・帯揚げ・草履・バッグなどの和装小物も買い取ってくれます。名古屋帯と着物をセットで出すと、コーディネートとしての付加価値が認められて査定額がアップする可能性があります。使わない小物はすべてまとめて査定に出しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取 名古屋のおすすめ業者5選｜愛知県の持ち込み・出張対応",
  description:
    "名古屋・愛知県で着物を高く売るためのおすすめ買取業者5選。有松絞り・名古屋帯の買取相場も。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/nagoya/",
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
      name: "名古屋の着物買取",
      item: "https://kimonokaitori-biyori.com/articles/nagoya/",
    },
  ],
};

export default function NagoyaPage() {
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
          { label: "名古屋の着物買取" },
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
              <span className="text-gradient">着物買取 名古屋</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                おすすめ業者5選｜愛知県の持ち込み・出張対応
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              名古屋・愛知県で着物を売りたい方に向けて、持ち込み買取・出張買取に対応したおすすめ業者5選を徹底比較。有松絞りや名古屋帯など、地元ゆかりの着物の買取相場もまとめました。
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
                <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 名古屋の着物買取事情</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">2. 名古屋のおすすめ着物買取業者5選</a></li>
                <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">3. 5社の買取方法・対応エリア比較</a></li>
                <li><a href="#local-kimono" className="text-[#6b4c8a] hover:underline">4. 名古屋・愛知ゆかりの着物と買取相場</a></li>
                <li><a href="#area" className="text-[#6b4c8a] hover:underline">5. 愛知県の出張買取対応エリア</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 名古屋で着物を高く売るコツ</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 名古屋の着物買取事情 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            名古屋の着物買取事情
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              名古屋は「名古屋嫁入り」に代表される豪華な婚礼文化が根付いた地域です。そのため嫁入り道具として高級着物を持つ家庭が多く、タンスに眠っている着物の数も全国的に見て多い地域と言えます。
            </p>
            <p>
              また、有松絞り（有松鳴海絞り）や名古屋帯など、名古屋・愛知県ゆかりの着物文化も豊かです。これらの伝統工芸品は全国的に需要があり、<strong>地元の買取業者は価値を正確に評価できる</strong>ため、適正価格での買取が期待できます。
            </p>
            <p>
              名古屋では持ち込み買取・出張買取の両方が充実しています。名古屋駅・栄・金山周辺には買取店が集中しており、郊外エリアへの出張買取も活発に行われています。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">有松絞り</p>
              <p className="text-xs text-gray-600">名古屋の伝統的染色技法</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">名古屋帯</p>
              <p className="text-xs text-gray-600">実用性の高い帯の代表格</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">嫁入り道具</p>
              <p className="text-xs text-gray-600">名古屋の豪華な婚礼文化</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            名古屋のおすすめ着物買取業者5選
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。名古屋市内には名駅・栄・金山・大須などに多数の店舗があり、持ち込み買取が非常に便利です。有松絞りや名古屋帯の査定にも精通した専門スタッフが対応。愛知県全域への無料出張買取にも対応しています。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">市内店舗数</p>
                  <p className="font-semibold">10店舗以上</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張対応</p>
                  <p className="font-semibold">愛知県全域</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取専門の出張買取に強い業者。名古屋エリアでも出張買取の評判が高く、経験豊富な査定員が自宅まで訪問します。嫁入り道具としてまとめて保管していた着物を一括で査定・買取してくれるため、遺品整理にも適しています。
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
                  <p className="font-semibold">大量買取に対応</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                宅配買取に強みを持つRECLOは、名古屋からでも送料無料で着物を送れます。梱包キットも無料。仕事で忙しい方でもスキマ時間に宅配買取を申し込めるのが魅力です。海外販路による高額査定も期待できます。
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
                名古屋市内に店舗を持つリユース企業。持ち込み買取に対応しており、着物のほか和装小物や帯もまとめて買取可能。予約不要で気軽に立ち寄れるのがポイントです。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">対応エリア</p>
                  <p className="font-semibold">名古屋市内・近郊</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">予約不要</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                複数の買取業者から一括で見積もりが取れる比較サイト。名古屋エリアの業者を含む多数の提携先から最高額を提示してくれた業者を選べます。自分で業者を探す手間が省けるので便利です。
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

      {/* 比較表 */}
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
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">名古屋の対応力</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">市内10店舗以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">愛知全域出張対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">宅配メイン</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-700">名古屋市内に店舗</td>
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

      {/* 地元ゆかりの着物 */}
      <section id="local-kimono" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            名古屋・愛知ゆかりの着物と買取相場
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物・帯</th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">有松絞り（浴衣）</td>
                  <td className="px-4 py-3 text-gray-700">伝統的な絞り染め浴衣</td>
                  <td className="px-4 py-3 font-medium">3,000円〜3万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">有松絞り（着物）</td>
                  <td className="px-4 py-3 text-gray-700">本藍染めの正絹着物</td>
                  <td className="px-4 py-3 font-medium">3万円〜15万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">名古屋帯（一般品）</td>
                  <td className="px-4 py-3 text-gray-700">カジュアル〜セミフォーマル用</td>
                  <td className="px-4 py-3 font-medium">500円〜3,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">名古屋帯（作家物）</td>
                  <td className="px-4 py-3 text-gray-700">西陣織・手織りの逸品</td>
                  <td className="px-4 py-3 font-medium">2万円〜10万円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">嫁入り道具の一式</td>
                  <td className="px-4 py-3 text-gray-700">振袖・留袖・訪問着のセット</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">5万円〜30万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 出張買取対応エリア */}
      <section id="area" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            愛知県の出張買取対応エリア
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">名古屋市内</td>
                  <td className="px-4 py-3 text-gray-700">中区・中村区・東区・千種区・名東区など</td>
                  <td className="px-4 py-3 font-medium text-green-600">全社対応・即日可能</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">尾張エリア</td>
                  <td className="px-4 py-3 text-gray-700">一宮・春日井・小牧・瀬戸・尾張旭</td>
                  <td className="px-4 py-3 font-medium text-green-600">ほぼ全社対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">西三河エリア</td>
                  <td className="px-4 py-3 text-gray-700">豊田・岡崎・安城・刈谷・知立</td>
                  <td className="px-4 py-3 font-medium text-green-600">ほぼ全社対応</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">東三河エリア</td>
                  <td className="px-4 py-3 text-gray-700">豊橋・豊川・蒲郡</td>
                  <td className="px-4 py-3 font-medium text-green-600 rounded-br-lg">主要業者対応</td>
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
            名古屋で着物を高く売るコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：嫁入り道具はセットで出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">名古屋の嫁入り道具として揃えた着物一式（振袖・留袖・訪問着・帯）をまとめて出すと、セットとしての価値が評価され高額買取が期待できます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：有松絞りは証紙付きで査定に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">有松絞りの着物や浴衣は、伝統工芸品の証紙（経済産業大臣指定）があると買取価格が大幅にアップします。証紙がない場合でも、本藍染めであれば高評価を得られます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：着物専門の業者を選ぶ</h3>
              <p className="text-sm leading-relaxed text-gray-700">総合リサイクルショップでは有松絞りや名古屋帯の価値を見落とされることがあります。買取大吉やウリエルなど、着物専門の査定員がいる業者を選びましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：複数社で見積もりを比較</h3>
              <p className="text-sm leading-relaxed text-gray-700">3社以上に査定を依頼して比較しましょう。ヒカカクの一括比較を使えば効率的です。名古屋は業者の選択肢が多い地域なので、比較するほど有利です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：湿気対策を万全にして保管</h3>
              <p className="text-sm leading-relaxed text-gray-700">名古屋は夏の高温多湿が厳しい地域です。着物にカビやシミが発生する前に売却するのがベスト。売ると決めたらすぐに査定に出しましょう。</p>
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
            <Link href="/articles/tokyo/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">東京の着物買取業者5選</h3>
              <p className="text-xs text-gray-600">東京都内の着物買取おすすめ業者を比較。</p>
            </Link>
            <Link href="/articles/obi-price/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">帯の買取相場</h3>
              <p className="text-xs text-gray-600">名古屋帯・袋帯・半幅帯の買取価格を徹底解説。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            名古屋で着物を売るなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            有松絞りや嫁入り道具など、名古屋ならではの着物も適正価格で買取。複数業者の無料査定で最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
