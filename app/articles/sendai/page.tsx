import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物買取 仙台のおすすめ業者5選｜宮城エリアの出張・宅配対応",
  description:
    "仙台・宮城で着物を売るならどこがおすすめ？出張買取・宅配買取に対応した着物買取業者5選を徹底比較。口コミ・評判・買取実績をまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/sendai/",
  },
  openGraph: {
    title: "着物買取 仙台のおすすめ業者5選｜宮城エリアの出張・宅配対応",
    description:
      "仙台・宮城で着物を売るならどこがおすすめ？出張買取・宅配買取に対応した着物買取業者5選を徹底比較。口コミ・評判・買取実績をまとめました。",
    url: "https://kimonokaitori-biyori.com/articles/sendai/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "仙台市内で着物の出張買取は可能ですか？",
    answer:
      "はい、仙台市内であれば複数の業者が出張買取に対応しています。買取大吉は仙台駅周辺に店舗を構えており出張買取も可能です。ウリエルも宮城県全域で出張買取に対応しており、出張費・査定料・キャンセル料すべて無料です。仙台市青葉区・宮城野区・太白区・泉区・若林区の全区に対応しています。",
  },
  {
    question: "仙台の着物買取相場は東京と比べて低いですか？",
    answer:
      "仙台の着物買取相場は東京と比べるとやや低い傾向がありますが、大手買取業者は全国統一の査定基準を持っているため、極端な差はありません。特に作家物やブランド着物は全国的に需要が高いため、仙台でも適正価格で買取されます。複数社に査定を依頼して比較することで、最高額での売却が可能です。",
  },
  {
    question: "宮城県の郡部からでも着物買取を依頼できますか？",
    answer:
      "はい、宮城県内の郡部からでも買取を依頼できます。ウリエルや買取大吉は宮城県全域で出張買取に対応しています。石巻市・大崎市・登米市・気仙沼市などの地域でも出張可能です。また、RECLOの宅配買取であれば全国どこからでも利用でき、送料も無料です。",
  },
  {
    question: "仙台で着物と一緒に帯や和装小物も買い取ってもらえますか？",
    answer:
      "はい、主要な買取業者はいずれも帯・帯締め・帯揚げ・草履・バッグなどの和装小物も買取対象としています。特に帯は着物と同等以上の価値がつくこともあります。買取大吉やウリエルでは着物専門の査定員が対応するため、和装小物の価値も適正に評価してもらえます。",
  },
  {
    question: "仙台で大量の着物を処分したい場合はどうすればいいですか？",
    answer:
      "大量の着物を処分する場合は、出張買取が最も便利です。ウリエルや買取大吉は点数制限なく出張買取に対応しており、数十枚〜百枚単位の着物でも自宅まで査定に来てくれます。遺品整理や生前整理で大量の着物が出た場合は、事前に電話で点数を伝えておくとスムーズに対応してもらえます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取 仙台のおすすめ業者5選｜宮城エリアの出張・宅配対応",
  description:
    "仙台・宮城エリアで着物を高く売るためのおすすめ買取業者5選。出張・宅配の対応状況を比較。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/sendai/",
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
      name: "仙台の着物買取",
      item: "https://kimonokaitori-biyori.com/articles/sendai/",
    },
  ],
};

export default function SendaiPage() {
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
          { label: "仙台の着物買取" },
        ]}
      />

      <SoubaNote />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/sendai.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              2026年最新版
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取 仙台</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                おすすめ業者5選｜宮城エリアの出張・宅配対応
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              仙台・宮城県で着物を売りたい方に向けて、出張買取・宅配買取に対応したおすすめ業者5選を徹底比較。各社の特徴、対応エリア、買取実績をまとめました。東北地方は伝統工芸品の産地でもあり、適正な価値をつけてくれる業者選びが重要です。
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
                    1. 仙台・宮城県の着物買取事情
                  </a>
                </li>
                <li>
                  <a href="#recommended" className="text-[#6b4c8a] hover:underline">
                    2. 仙台のおすすめ着物買取業者5選
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-[#6b4c8a] hover:underline">
                    3. 5社の買取方法・対応エリア比較
                  </a>
                </li>
                <li>
                  <a href="#area" className="text-[#6b4c8a] hover:underline">
                    4. 仙台・宮城の出張買取対応エリア
                  </a>
                </li>
                <li>
                  <a href="#market" className="text-[#6b4c8a] hover:underline">
                    5. 仙台の着物買取相場
                  </a>
                </li>
                <li>
                  <a href="#tohoku" className="text-[#6b4c8a] hover:underline">
                    6. 東北の伝統工芸品と買取ポイント
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    7. 仙台で着物を高く売る5つのコツ
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

      {/* 仙台・宮城県の着物買取事情 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            仙台・宮城県の着物買取事情
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              仙台市は東北地方最大の都市であり、約110万人の人口を擁する政令指定都市です。杜の都として知られる仙台は、伊達政宗以来の文化的伝統が色濃く残り、着物文化も根強く息づいています。仙台箪笥で知られるように、着物を大切に保管してきた家庭も多い地域です。
            </p>
            <p>
              宮城県全体で見ると、<strong>仙台七夕まつり</strong>や<strong>松島観光</strong>など和装で楽しめるイベントが多く、中古着物の需要も一定数あります。一方で、東京や大阪と比べると買取業者の選択肢が限られるため、<strong>出張買取や宅配買取を上手に活用する</strong>ことが仙台での着物買取のポイントです。
            </p>
            <p>
              特に近年は、仙台でも大手買取業者の進出が進んでおり、都市部と変わらないサービスを受けられるようになっています。買取大吉は仙台市内に複数の店舗を展開し、ウリエルは宮城県全域で出張買取に対応しています。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">110万人</p>
              <p className="text-xs text-gray-600">仙台市の人口規模</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">無料出張</p>
              <p className="text-xs text-gray-600">宮城県全域に対応</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">伝統工芸</p>
              <p className="text-xs text-gray-600">東北の染織品も高価買取</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            仙台のおすすめ着物買取業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            仙台・宮城県で着物の買取実績が豊富で、口コミ評価の高い5社をご紹介します。いずれも査定料・出張費・キャンセル料が無料なので、気軽に見積もりを依頼できます。
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
                全国700店舗以上を展開する大手買取専門店。仙台市内にはクリスロード商店街店・長町南店・泉中央店など複数の店舗を構えており、持ち込み買取が便利です。着物専門の査定員が在籍しており、仙台平や東北地方の伝統工芸品にも精通しています。出張買取は宮城県全域に無料対応で、電話一本で自宅まで来てもらえます。仙台駅からアクセスの良い立地が多く、買い物ついでに気軽に立ち寄れるのも魅力です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">仙台市内店舗</p>
                  <p className="font-semibold">3店舗以上</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張対応</p>
                  <p className="font-semibold">宮城県全域</p>
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
                着物買取に特化した専門業者で、宮城県を含む東北地方全域で出張買取に対応しています。経験豊富な着物専門の査定員が自宅まで訪問し、一点一点丁寧に査定してくれます。仙台市内であれば最短翌日の出張にも対応可能です。女性査定員の指名もできるため、高齢の方や一人暮らしの方にも安心です。着物だけでなく帯・和装小物・反物もまとめて査定してくれるので、遺品整理や生前整理にも適しています。
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
                宅配買取に強みを持つブランド品買取業者です。仙台からの宅配買取は送料無料で、梱包キットも無料で届けてもらえるため手間がかかりません。オンラインでの事前査定にも対応しており、スマホで写真を撮るだけで概算査定額がわかります。海外販路を持っているため、日本国内の相場より高い買取価格が期待できるのが強みです。忙しい方や近くに買取店がない宮城県郡部の方には特におすすめです。
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
                東京を中心に展開するリユース企業で、宮城県への出張買取にも対応しています。着物だけでなく和装小物・帯・草履なども幅広く買い取ってくれるため、まとめて処分したい場合に便利です。出張買取は仙台市内を中心に対応しており、事前予約制です。査定料・出張費は無料で、買取金額に納得できなければキャンセルも自由。遺品整理や引っ越し前の大量処分にも柔軟に対応してくれます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">対応エリア</p>
                  <p className="font-semibold">仙台市中心</p>
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
                買取価格の比較サイトとして知られるヒカカクは、仙台エリアの複数の買取業者から一括で見積もりを取ることができます。自分で1社ずつ問い合わせる手間が省け、最も高い査定額を提示した業者を選べます。仙台のように買取業者の選択肢がやや限られるエリアでは、比較サイトを活用して幅広く見積もりを取ることが高額買取の鍵です。利用料は完全無料です。
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
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">仙台の対応力</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">仙台市内3店舗・宮城全域出張</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">東北全域で出張対応・女性査定員</td>
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
                  <td className="px-4 py-3 text-gray-700">仙台市内出張対応</td>
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
            仙台・宮城の出張買取対応エリア
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            宮城県内での出張買取対応エリアを地域別にまとめました。仙台市内はもちろん、県内の多くの地域で出張買取が可能です。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">仙台市内</td>
                  <td className="px-4 py-3 text-gray-700">青葉区・宮城野区・太白区・泉区・若林区</td>
                  <td className="px-4 py-3 font-medium text-green-600">全社対応・最短翌日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">仙台周辺</td>
                  <td className="px-4 py-3 text-gray-700">名取市・多賀城市・塩竈市・富谷市</td>
                  <td className="px-4 py-3 font-medium text-green-600">ほぼ全社対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">県北部</td>
                  <td className="px-4 py-3 text-gray-700">大崎市・栗原市・登米市・気仙沼市</td>
                  <td className="px-4 py-3 font-medium text-green-600">主要業者が対応</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">県南部</td>
                  <td className="px-4 py-3 text-gray-700">白石市・角田市・岩沼市・柴田町</td>
                  <td className="px-4 py-3 font-medium text-green-600 rounded-br-lg">主要業者が対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">宮城県内で出張買取を利用するメリット：</strong>
              宮城県は南北に広く、仙台市内に店舗が集中しているため、郡部にお住まいの方は出張買取が圧倒的に便利です。買取大吉やウリエルは宮城県全域で出張費無料なので、交通費の心配もありません。大量の着物がある場合も、自宅で一括査定してもらえます。
            </p>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            仙台の着物買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            仙台・宮城県での着物買取相場を種類別にまとめました。大手買取業者は全国統一基準で査定するため、地域差は少なくなっています。ただし、業者によって得意分野が異なるため、複数社で比較することが重要です。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬（大島・結城等）</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">10万円〜40万円以上</td>
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

      {/* 東北の伝統工芸品と買取ポイント */}
      <section id="tohoku" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            東北の伝統工芸品と買取ポイント
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            宮城県・東北地方には独自の染織技術を持つ伝統工芸品が多く存在します。これらは一般的な着物よりも高額で買取される可能性があります。お手持ちの着物の価値を正しく知るためにも、専門知識を持つ査定員に依頼しましょう。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">仙台平（仙台御召）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮城県仙台市を代表する伝統的工芸品で、国の重要無形文化財にも指定されています。精緻な平織で作られた絹織物で、袴地として最高級とされています。現在は生産者が極めて少なく、希少価値が非常に高いため、状態が良ければ数十万円の買取価格がつくこともあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">白石和紙・栗駒正藍染</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮城県白石市の白石和紙を使った和装小物や、栗駒山麓で作られる正藍染の着物も東北独自の伝統工芸品です。特に正藍染は天然藍を使った伝統技法で、独特の風合いが評価されています。これらは一般のリサイクルショップでは価値が分かりにくいため、着物専門の査定員がいる業者に依頼することが重要です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">東北地方の染織品（米沢織・置賜紬等）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                東北地方には宮城県だけでなく、山形県の米沢織・置賜紬、秋田県の秋田八丈、岩手県の南部紫根染など、多様な伝統的染織品があります。これらの着物は証紙があれば高額買取が期待できます。仙台にお住まいで東北各地の染織品をお持ちの方は、伝統工芸品に詳しい査定員がいる買取大吉やウリエルに相談してみましょう。
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
            仙台で着物を高く売る5つのコツ
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：複数の業者に無料査定を依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                仙台は東京ほど業者の選択肢が多くないからこそ、利用できる業者すべてに査定を依頼することが重要です。買取大吉（持ち込み）、ウリエル（出張）、RECLO（宅配）と異なる方法で3社以上に見積もりを取りましょう。ヒカカクの一括査定も活用すると効率的です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：証紙・証明書を必ず添える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地証明の証紙、作家の落款、購入時の証明書があれば必ず一緒に出しましょう。特に仙台平や東北の伝統工芸品は証紙の有無で買取額が大幅に変わります。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙・証明書の詳しい解説</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：着物専門の査定員がいる業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                総合リサイクルショップよりも、着物の専門知識を持つ査定員がいる業者の方が適正価格で買い取ってくれます。仙台では買取大吉やウリエルに着物専門の査定員が在籍しています。特に東北の伝統工芸品は専門知識がなければ価値を見逃されてしまう可能性があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：帯や小物もまとめて出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物と一緒に帯・帯締め・帯揚げ・草履などをセットで出すと、コーディネートとしての付加価値が認められます。使わない和装小物はすべてまとめて査定に出しましょう。<Link href="/articles/accessories-price/" className="text-[#6b4c8a] hover:underline">和装小物の買取相場</Link>も事前にチェックしておくと安心です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：保管状態を維持して早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮城県は夏の湿度が高く、着物にカビやシミが発生しやすい環境です。たとう紙で包み、定期的に虫干しをして保管状態を維持しましょう。ただし、長期保管はリスクが伴うため、売ると決めたらなるべく早く行動することが大切です。<Link href="/articles/storage-guide/" className="text-[#6b4c8a] hover:underline">着物の保管方法ガイド</Link>も参考にしてください。
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
              href="/articles/shutcho-kaitori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                出張買取ガイド
              </h3>
              <p className="text-xs text-gray-600">
                出張買取のメリット・デメリットと利用の流れを徹底解説。
              </p>
            </Link>
            <Link
              href="/articles/takuhai-kaitori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                宅配買取ガイド
              </h3>
              <p className="text-xs text-gray-600">
                宅配買取の手順と注意点。遠方の方でも高額買取を実現。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            仙台で着物を売るなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            宮城県内なら出張買取・宅配買取で自宅にいながら査定が可能。複数業者の無料査定で、お手持ちの着物の最高額を確認してみましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
