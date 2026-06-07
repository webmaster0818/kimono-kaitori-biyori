import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物買取 広島のおすすめ業者5選｜中国地方の出張・宅配対応",
  description:
    "広島で着物を売るならどこがおすすめ？中国地方の着物買取業者5選を徹底比較。出張買取・宅配買取に対応した業者の口コミ・評判・買取実績をまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/hiroshima/",
  },
  openGraph: {
    title: "着物買取 広島のおすすめ業者5選｜中国地方の出張・宅配対応",
    description:
      "広島で着物を売るならどこがおすすめ？中国地方の着物買取業者5選を徹底比較。出張買取・宅配買取に対応した業者の口コミ・評判・買取実績をまとめました。",
    url: "https://kimonokaitori-biyori.com/articles/hiroshima/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "広島市内で着物の出張買取は可能ですか？",
    answer:
      "はい、広島市内であれば複数の業者が出張買取に対応しています。買取大吉は広島市内に店舗を構えており出張買取も無料で対応。ウリエルも広島県全域で出張買取が可能です。中区・南区・西区・東区・安佐南区・安佐北区・佐伯区・安芸区すべて対応しています。査定料・出張費・キャンセル料はいずれも無料です。",
  },
  {
    question: "広島で備後絣（びんごがすり）は高く売れますか？",
    answer:
      "備後絣は広島県福山市を中心に生産される伝統的工芸品で、国の伝統的工芸品にも指定されています。状態が良く証紙付きであれば、一般的な着物よりも高額査定が期待できます。ただし、備後絣の価値を正しく理解できる査定員でなければ適正価格がつかない場合があるため、着物専門の査定員がいる買取大吉やウリエルに依頼するのがおすすめです。",
  },
  {
    question: "広島県の郡部（呉市・尾道市など）でも買取依頼できますか？",
    answer:
      "はい、広島県内の主要都市であれば出張買取が可能です。買取大吉やウリエルは呉市・尾道市・福山市・三原市・東広島市などにも出張対応しています。島嶼部（江田島市・大崎上島町など）については対応が限られる場合がありますが、RECLOの宅配買取であれば全国どこからでも送料無料で利用できます。",
  },
  {
    question: "広島で着物と一緒に帯や和装小物も買い取ってもらえますか？",
    answer:
      "はい、主要な買取業者はいずれも帯・帯締め・帯揚げ・草履・バッグなどの和装小物も買取対象としています。着物とセットで出すと、コーディネートとしての価値が認められ、単品で売るよりも高額になることがあります。特にウリエルや買取大吉は和装小物の査定にも対応しています。",
  },
  {
    question: "広島の着物買取で注意すべきポイントはありますか？",
    answer:
      "広島では訪問営業で着物の買取を持ちかけてくる業者に注意が必要です。信頼できる業者は自ら営業訪問をすることはありません。また、リサイクルショップよりも着物専門の査定員がいる業者を選ぶことで、適正価格での買取が可能です。必ず複数社に査定を依頼し、口コミや評判を確認してから利用しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取 広島のおすすめ業者5選｜中国地方の出張・宅配対応",
  description:
    "広島・中国地方で着物を高く売るためのおすすめ買取業者5選。出張・宅配の対応状況を比較。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/hiroshima/",
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
      name: "広島の着物買取",
      item: "https://kimonokaitori-biyori.com/articles/hiroshima/",
    },
  ],
};

export default function HiroshimaPage() {
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
          { label: "広島の着物買取" },
        ]}
      />

      <SoubaNote />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/hiroshima.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              2026年最新版
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取 広島</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                おすすめ業者5選｜中国地方の出張・宅配対応
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              広島県で着物を売りたい方に向けて、出張買取・宅配買取に対応したおすすめ業者5選を徹底比較。各社の特徴、対応エリア、買取実績をまとめました。備後絣をはじめとする中国地方の伝統工芸品も適正価格で査定してもらうためのポイントを解説します。
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
                <li>
                  <a href="#overview" className="text-[#6b4c8a] hover:underline">
                    1. 広島の着物買取事情
                  </a>
                </li>
                <li>
                  <a href="#recommended" className="text-[#6b4c8a] hover:underline">
                    2. 広島のおすすめ着物買取業者5選
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-[#6b4c8a] hover:underline">
                    3. 5社の買取方法・対応エリア比較
                  </a>
                </li>
                <li>
                  <a href="#area" className="text-[#6b4c8a] hover:underline">
                    4. 広島県内の出張買取対応エリア
                  </a>
                </li>
                <li>
                  <a href="#market" className="text-[#6b4c8a] hover:underline">
                    5. 広島の着物買取相場
                  </a>
                </li>
                <li>
                  <a href="#traditional" className="text-[#6b4c8a] hover:underline">
                    6. 中国地方の伝統工芸品と買取ポイント
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    7. 広島で着物を高く売る5つのコツ
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

      {/* 広島の着物買取事情 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            広島の着物買取事情
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              広島県は中国地方最大の都市・広島市を擁し、約280万人の人口を持つ地域です。世界遺産の厳島神社や原爆ドームなど観光資源も豊富で、外国人観光客による中古着物の需要も高まっています。
            </p>
            <p>
              広島県は<strong>備後絣（びんごがすり）</strong>の産地として知られ、伝統的な着物文化が根付いています。福山市を中心に生産されてきた備後絣は、国の伝統的工芸品に指定されており、コレクターからの需要があります。また、宮島での和装体験も人気で、中古着物の流通市場は活発です。
            </p>
            <p>
              一方で、東京や大阪と比べると専門買取業者の数が限られるため、<strong>出張買取や宅配買取を活用する</strong>ことが広島での着物買取の重要なポイントです。大手買取業者であれば広島県全域に対応しているため、都市部以外にお住まいの方でも安心です。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">280万人</p>
              <p className="text-xs text-gray-600">広島県の人口規模</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">備後絣</p>
              <p className="text-xs text-gray-600">国指定の伝統工芸品</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">無料出張</p>
              <p className="text-xs text-gray-600">広島県全域に対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            広島のおすすめ着物買取業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            広島県で着物の買取実績が豊富で、口コミ評価の高い5社をご紹介します。いずれも査定料・出張費・キャンセル料が無料です。
          </p>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            {/* 買取大吉 */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。広島市内には本通り商店街周辺や紙屋町エリアに店舗があり、持ち込み買取が便利です。着物専門の査定員が在籍しており、備後絣や中国地方の伝統工芸品にも精通しています。出張買取は広島県全域に無料対応。福山市・呉市・東広島市など県内主要都市への出張も可能です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">広島市内店舗</p>
                  <p className="font-semibold">複数店舗</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張対応</p>
                  <p className="font-semibold">広島県全域</p>
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
                着物買取に特化した専門業者で、広島県を含む中国地方全域で出張買取に対応しています。経験豊富な着物専門の査定員が自宅まで訪問し、一点一点丁寧に査定してくれます。広島市内であれば最短翌日の出張も可能。女性査定員の指名もできるため、高齢の方や一人暮らしの方にも安心です。遺品整理・生前整理での大量買取にも柔軟に対応しています。
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
                宅配買取に強みを持つブランド品買取業者です。広島からの宅配買取は送料無料で、梱包キットも無料で届けてもらえます。スマホで写真を撮るだけで概算査定額がわかる事前査定にも対応。海外販路を持っているため、国内相場より高い買取価格が期待できます。島嶼部や山間部など出張買取が難しいエリアの方には特におすすめです。
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
                東京を中心に展開するリユース企業で、広島県への出張買取・宅配買取に対応しています。着物だけでなく和装小物・帯・草履なども幅広く買い取ってくれます。出張買取は広島市内を中心に対応しており、事前予約制です。査定料・出張費は無料で、キャンセルも自由。遺品整理や引っ越し前の大量処分にも対応してくれます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">対応エリア</p>
                  <p className="font-semibold">広島市中心</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">和装小物も対応</p>
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
                買取価格の比較サイトとして知られるヒカカクは、広島エリアの複数の買取業者から一括で見積もりを取ることができます。自分で1社ずつ問い合わせる手間が省け、最も高い査定額を提示した業者を選べます。広島のように専門業者が限られるエリアでは、比較サイトで幅広く見積もりを取ることが高額買取への近道です。
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
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">広島の対応力</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">広島市内店舗あり・県全域出張</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">中国地方全域で出張対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">宅配メイン・全国対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">広島市内出張対応</td>
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

      {/* 出張買取対応エリア */}
      <section id="area" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            広島県内の出張買取対応エリア
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            広島県内での出張買取対応エリアを地域別にまとめました。広島市内はもちろん、県内の主要都市で出張買取が可能です。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">広島市内</td>
                  <td className="px-4 py-3 text-gray-700">中区・南区・西区・東区・安佐南区・安佐北区</td>
                  <td className="px-4 py-3 font-medium text-green-600">全社対応・最短翌日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">県東部</td>
                  <td className="px-4 py-3 text-gray-700">福山市・尾道市・三原市・府中市</td>
                  <td className="px-4 py-3 font-medium text-green-600">主要業者が対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">県西部</td>
                  <td className="px-4 py-3 text-gray-700">呉市・東広島市・竹原市・廿日市市</td>
                  <td className="px-4 py-3 font-medium text-green-600">主要業者が対応</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">島嶼部</td>
                  <td className="px-4 py-3 text-gray-700">江田島市・大崎上島町など</td>
                  <td className="px-4 py-3 font-medium text-gray-500 rounded-br-lg">宅配買取で対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">広島県で出張買取を利用するメリット：</strong>
              広島県は東西に長く、市街地から離れた地域も多いため、出張買取の活用が便利です。買取大吉やウリエルは広島県全域で出張費無料。大量の着物がある場合も自宅で一括査定してもらえます。島嶼部にお住まいの方はRECLOの宅配買取（送料無料）がおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            広島の着物買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            広島県での着物買取相場を種類別にまとめました。大手買取業者は全国統一基準で査定するため、地域差は少なくなっています。
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
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万円〜8万円</td>
                  <td className="px-4 py-3 text-gray-700">8万円〜40万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700">2,000円〜1万5千円</td>
                  <td className="px-4 py-3 text-gray-700">1万5千円〜6万円</td>
                  <td className="px-4 py-3 text-gray-700">6万円〜25万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">備後絣</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">3万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">10万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜8,000円</td>
                  <td className="px-4 py-3 text-gray-700">8,000円〜4万円</td>
                  <td className="px-4 py-3 text-gray-700">4万円〜15万円以上</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯（袋帯）</td>
                  <td className="px-4 py-3 text-gray-700">500円〜4,000円</td>
                  <td className="px-4 py-3 text-gray-700">4,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">2万円〜15万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 相場は状態・サイズ・市場動向により変動します。最新の正確な査定額は各業者への無料査定でご確認ください。
          </p>
        </div>
      </section>

      {/* 中国地方の伝統工芸品 */}
      <section id="traditional" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            中国地方の伝統工芸品と買取ポイント
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            広島県・中国地方には独自の染織技術を持つ伝統工芸品が多く存在します。これらは一般的な着物よりも高額で買取される可能性があります。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">備後絣（びんごがすり）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                広島県福山市を中心に生産される伝統的工芸品で、国の伝統的工芸品に指定されています。綿糸を使った素朴な風合いが特徴で、普段着として愛用されてきました。現在は生産量が減少しており、希少価値が高まっています。証紙付きの備後絣は、一般的な木綿着物よりも高い査定額が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">広島の絞り染め・藍染め</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                広島県では古くから藍染めの技術が伝わっており、独特の深い藍色が特徴の着物や帯が作られています。手作業による絞り染めの着物は、機械染めと比べて希少性が高く、コレクターからの需要もあります。作家名や工房名が分かるものは、より高い査定額が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">近隣の伝統工芸品（弓浜絣・石州和紙等）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                中国地方には広島県だけでなく、鳥取県の弓浜絣・倉吉絣、島根県の石州和紙を使った和装品、山口県の萩焼帯留めなど、多様な伝統工芸品があります。広島にお住まいの方がこれらの着物や帯をお持ちの場合も、着物専門の査定員に依頼すれば価値を正しく評価してもらえます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            広島で着物を高く売る5つのコツ
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：複数の業者に無料査定を依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                広島でも最低3社以上に査定を依頼しましょう。買取大吉（持ち込み）、ウリエル（出張）、RECLO（宅配）と異なる方法で見積もりを取ると効率的です。ヒカカクの一括査定も活用して、最高額の業者を見つけましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：証紙・証明書を必ず添える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地証明の証紙、作家の落款、購入時の証明書があれば必ず一緒に出しましょう。特に備後絣など伝統工芸品は証紙の有無で査定額が大きく変わります。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙・証明書ガイド</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：着物専門の査定員がいる業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                総合リサイクルショップよりも着物専門の査定員がいる業者を選びましょう。買取大吉やウリエルには着物専門の査定員がおり、中国地方の伝統工芸品の価値も正しく評価してくれます。<Link href="/articles/appraisal-criteria/" className="text-[#6b4c8a] hover:underline">査定基準の解説</Link>もチェック。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：帯や小物もまとめて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物と一緒に帯・帯締め・帯揚げ・草履などをセットで出すと付加価値が認められます。<Link href="/articles/accessories-price/" className="text-[#6b4c8a] hover:underline">和装小物の買取相場</Link>も事前にチェックしておくと安心です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：湿気対策をして保管状態を維持する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                広島は瀬戸内海に面した温暖な気候で、夏場の湿度が高い地域です。着物にカビやシミが発生しやすいため、たとう紙で包み除湿剤を使って保管しましょう。ただし長期保管はリスクがあるため、売ると決めたら早めに行動することが大切です。
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
                買取大吉・ウリエルなどおすすめ5社を徹底比較。
              </p>
            </Link>
            <Link
              href="/articles/fukuoka/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                福岡の着物買取業者5選
              </h3>
              <p className="text-xs text-gray-600">
                福岡・九州エリアの着物買取おすすめ業者を比較。
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
                出張買取のメリット・デメリットと利用の流れ。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            広島で着物を売るなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            広島県内なら出張買取・宅配買取で自宅にいながら査定が可能。複数業者の無料査定で最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
