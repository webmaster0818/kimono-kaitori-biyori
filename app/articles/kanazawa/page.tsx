import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取 金沢のおすすめ業者5選｜加賀友禅に強い石川県の業者",
  description:
    "金沢・石川県で着物を売るならどこがおすすめ？加賀友禅に強い着物買取業者5選を徹底比較。出張買取・宅配対応の業者を口コミ・評判とともにご紹介します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/kanazawa/",
  },
  openGraph: {
    title: "着物買取 金沢のおすすめ業者5選｜加賀友禅に強い石川県の業者",
    description:
      "金沢・石川県で着物を売るならどこがおすすめ？加賀友禅に強い着物買取業者5選を徹底比較。出張買取・宅配対応の業者を口コミ・評判とともにご紹介します。",
    url: "https://kimonokaitori-biyori.com/articles/kanazawa/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "金沢で加賀友禅を高く売れる業者はどこですか？",
    answer:
      "加賀友禅を高く売るには、着物専門の査定員がいる業者に依頼するのが最善です。買取大吉やウリエルには加賀友禅に精通した査定員が在籍しており、作家名・証紙の有無・状態を総合的に評価して適正価格をつけてくれます。特に人間国宝や有名作家の作品であれば、数十万円〜百万円以上の買取価格がつくこともあります。",
  },
  {
    question: "金沢市内で着物の持ち込み買取はできますか？",
    answer:
      "はい、金沢市内で持ち込み買取が可能です。買取大吉は金沢市内に店舗を構えており、予約不要で持ち込み査定ができます。また、ウリエルも事前予約で持ち込みに対応しています。金沢駅周辺や香林坊エリアなどアクセスの良い場所に店舗があるため、お出かけのついでに立ち寄ることも可能です。",
  },
  {
    question: "石川県の能登地方からでも着物買取を依頼できますか？",
    answer:
      "はい、能登地方からでも買取を依頼できます。ウリエルや買取大吉は石川県全域で出張買取に対応しており、七尾市・輪島市・珠洲市・羽咋市などにも出張可能です。また、RECLOの宅配買取であれば全国どこからでも送料無料で利用できます。能登半島地震の復興支援として出張費を無料にしている業者もあります。",
  },
  {
    question: "加賀友禅の証紙がなくても買い取ってもらえますか？",
    answer:
      "証紙がなくても買取は可能です。ただし、証紙がないと産地・作家の証明が難しくなるため、査定額が下がる傾向があります。加賀友禅の場合、落款（作家のサイン）が着物に直接入っていることも多いため、落款が確認できれば証紙なしでも適正な評価が受けられます。詳しくは当サイトの証紙ガイドをご参照ください。",
  },
  {
    question: "金沢で着物以外に帯や和装小物も売れますか？",
    answer:
      "はい、主要な買取業者はいずれも帯・帯締め・帯揚げ・草履・かんざしなどの和装小物も買取対象です。特に加賀友禅の帯や九谷焼の帯留めなど、石川県の伝統工芸品と組み合わせた和装品は高額査定が期待できます。着物とセットで出すと、コーディネートとしての価値も加算されます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取 金沢のおすすめ業者5選｜加賀友禅に強い石川県の業者",
  description:
    "金沢・石川県で着物を高く売るためのおすすめ買取業者5選。加賀友禅の買取相場も解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/kanazawa/",
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
      name: "金沢の着物買取",
      item: "https://kimonokaitori-biyori.com/articles/kanazawa/",
    },
  ],
};

export default function KanazawaPage() {
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
          { label: "金沢の着物買取" },
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
              <span className="text-gradient">着物買取 金沢</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                おすすめ業者5選｜加賀友禅に強い石川県の業者
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              金沢・石川県で着物を売りたい方に向けて、加賀友禅・牛首紬などの伝統工芸品に強いおすすめ業者5選を徹底比較。石川県は日本有数の着物産地であり、適正な価値を見極められる専門業者選びが高額買取の鍵です。
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
                <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 金沢・石川県の着物買取事情</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">2. 金沢のおすすめ着物買取業者5選</a></li>
                <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">3. 5社の買取方法・対応エリア比較</a></li>
                <li><a href="#kaga-yuzen" className="text-[#6b4c8a] hover:underline">4. 加賀友禅の買取相場と高額査定のポイント</a></li>
                <li><a href="#traditional" className="text-[#6b4c8a] hover:underline">5. 石川県のその他の伝統工芸品と買取</a></li>
                <li><a href="#market" className="text-[#6b4c8a] hover:underline">6. 金沢の着物買取相場一覧</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">7. 金沢で着物を高く売る5つのコツ</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 金沢・石川県の着物買取事情 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            金沢・石川県の着物買取事情
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              金沢は加賀百万石の城下町として栄えた歴史を持ち、日本有数の着物文化の中心地です。<strong>加賀友禅</strong>は石川県を代表する伝統的工芸品であり、京友禅と並ぶ日本三大友禅の一つとして世界的にも高い評価を受けています。
            </p>
            <p>
              石川県には加賀友禅のほかにも、<strong>牛首紬（うしくびつむぎ）</strong>や<strong>加賀繍（かがぬい）</strong>といった伝統工芸品があり、いずれも高額での買取が期待できます。ただし、これらの伝統工芸品の価値を正しく評価できる査定員でなければ、本来の価値に見合った査定額がつかない可能性があります。
            </p>
            <p>
              金沢では大手買取業者の進出が進んでおり、持ち込み買取・出張買取・宅配買取のいずれも利用できます。特に加賀友禅については、作家名・落款・証紙の確認ができる専門査定員のいる業者を選ぶことが重要です。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">加賀友禅</p>
              <p className="text-xs text-gray-600">日本三大友禅の一つ</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">〜100万円+</p>
              <p className="text-xs text-gray-600">人間国宝作品の買取実績</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">専門査定</p>
              <p className="text-xs text-gray-600">伝統工芸品に精通した業者</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            金沢のおすすめ着物買取業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            金沢・石川県で加賀友禅をはじめとする着物の買取実績が豊富な5社をご紹介します。いずれも査定料・出張費・キャンセル料が無料です。
          </p>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。金沢市内に店舗を構え、持ち込み買取が可能です。着物専門の査定員が在籍しており、加賀友禅・牛首紬・加賀繍の価値を正しく評価できます。落款データベースを活用した作家特定も行っており、証紙がない場合でも適正価格での査定が期待できます。出張買取は石川県全域に無料対応しています。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">加賀友禅に精通</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">出張対応</p>
                  <p className="font-semibold">石川県全域</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者で、石川県全域で出張買取に対応しています。加賀友禅の査定実績が豊富で、作家物の高額買取に定評があります。女性査定員の指名も可能。大量の着物をまとめて売りたい場合も、自宅で一括査定してもらえるため便利です。金沢の着物文化に理解のある査定員が丁寧に対応してくれます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">出張・宅配・持込</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">作家物高額買取</p>
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
                宅配買取に強みを持つ買取業者。金沢からの宅配買取は送料無料で、梱包キットも無料提供。海外販路を持っているため、加賀友禅のように海外でも評価の高い着物は国内相場より高い買取価格が期待できます。スマホで写真を撮るだけの事前査定も便利です。能登地方など出張買取が難しいエリアの方には特におすすめ。
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
                東京を中心に展開するリユース企業で、石川県への出張買取・宅配買取にも対応。着物だけでなく和装小物・帯・草履なども幅広く買い取ってくれます。大量処分や遺品整理にも柔軟に対応。査定料・出張費は無料で、キャンセルも自由です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">対応エリア</p>
                  <p className="font-semibold">石川県内</p>
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

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                買取価格の比較サイトで、複数の業者から一括で見積もりを取れます。加賀友禅のような高額着物は業者によって査定額が大きく異なるため、比較サイトで幅広く見積もりを取ることが重要です。利用料は完全無料です。
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
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">金沢の対応力</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">金沢市内店舗・加賀友禅に精通</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">石川全域出張・作家物に強い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">宅配メイン・海外販路で高額査定</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">石川県内出張対応</td>
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

      {/* 加賀友禅の買取相場 */}
      <section id="kaga-yuzen" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            加賀友禅の買取相場と高額査定のポイント
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            加賀友禅は日本三大友禅の一つであり、着物買取市場でも非常に高い人気があります。作家や状態によって買取額が大きく異なるため、以下の相場感を参考にしてください。詳しくは<Link href="/articles/kaga-yuzen/" className="text-[#6b4c8a] hover:underline">加賀友禅の買取相場ガイド</Link>もご覧ください。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">加賀友禅の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">買取相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">人間国宝作品</td>
                  <td className="px-4 py-3 text-gray-700">50万円〜200万円以上</td>
                  <td className="px-4 py-3 text-gray-700">木村雨山、由水十久など</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">有名作家作品</td>
                  <td className="px-4 py-3 text-gray-700">10万円〜80万円</td>
                  <td className="px-4 py-3 text-gray-700">百貫華峰、毎田仁郎など</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">若手作家作品</td>
                  <td className="px-4 py-3 text-gray-700">3万円〜20万円</td>
                  <td className="px-4 py-3 text-gray-700">証紙・落款で評価UP</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">量産品（型友禅）</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">手描きと型染めで大差</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">加賀友禅の高額査定ポイント：</strong>
              加賀友禅の査定では、(1)作家名と落款、(2)加賀友禅の証紙（石川県染色組合発行）、(3)状態（シミ・色あせの有無）、(4)サイズ（身丈160cm以上は需要が高い）が重視されます。これらの情報を事前に確認しておくと、スムーズに査定が進みます。
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 相場は状態・サイズ・市場動向により変動します。最新の正確な査定額は各業者への無料査定でご確認ください。
          </p>
        </div>
      </section>

      {/* 石川県のその他の伝統工芸品 */}
      <section id="traditional" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            石川県のその他の伝統工芸品と買取
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">牛首紬（うしくびつむぎ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                石川県白山市（旧白峰村）で生産される絹織物で、国の伝統的工芸品に指定されています。玉繭（二頭の蚕が一つの繭を作ったもの）から紡がれた太い糸を使い、釘に引っかけても破れないほどの丈夫さから「釘抜き紬」とも呼ばれます。生産量が少なく希少価値が高いため、状態が良ければ5万円〜30万円以上の買取が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">加賀繍（かがぬい）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                金沢で受け継がれてきた伝統的な刺繍技法で、絹糸や金糸を使った立体的な刺繍が特徴です。着物の帯や半衿、和装小物に施されることが多く、繊細な手仕事の技術が高く評価されています。加賀繍が施された帯は、一般的な帯よりも高額での買取が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">能登上布（のとじょうふ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                石川県中能登町で生産される麻織物で、国の重要無形文化財に指定されています。盛夏用の着物として愛用されており、現在は生産者が極めて少なく、非常に希少な織物です。証紙付きの能登上布は、麻の着物としては最高クラスの買取価格が期待できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 買取相場一覧 */}
      <section id="market" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            金沢の着物買取相場一覧
          </h2>
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">加賀友禅（訪問着）</td>
                  <td className="px-4 py-3 text-gray-700">5,000円〜3万円</td>
                  <td className="px-4 py-3 text-gray-700">3万円〜20万円</td>
                  <td className="px-4 py-3 text-gray-700">20万円〜100万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">牛首紬</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">5万円〜15万円</td>
                  <td className="px-4 py-3 text-gray-700">15万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万円〜8万円</td>
                  <td className="px-4 py-3 text-gray-700">8万円〜40万円以上</td>
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
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">2万円〜20万円以上</td>
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
            金沢で着物を高く売る5つのコツ
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：加賀友禅の証紙・落款を確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅には石川県染色組合が発行する証紙と、作家の落款が入っています。これらが揃っていれば真贋の証明になり、査定額が大幅にアップします。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙の見方</Link>を事前に確認しておきましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：着物専門の査定員に依頼する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅や牛首紬の価値を正しく評価できるのは着物専門の査定員だけです。総合リサイクルショップでは伝統工芸品の価値が見逃されることが多いため、買取大吉やウリエルなど専門知識を持つ業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：複数社に見積もりを取る</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅のような高額着物は業者によって査定額に大きな差が出ます。最低3社以上に見積もりを依頼し、ヒカカクの一括査定も活用して最高額を引き出しましょう。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：セットで査定に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                加賀友禅の着物と帯・帯締めなどをセットで出すと、コーディネートとしての価値が加算されます。また、加賀繍の帯や九谷焼の帯留めなど石川の伝統工芸品と合わせると更に評価が高まります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：北陸の湿気対策を徹底する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                石川県は日本海側の気候で湿度が高く、着物にカビやシミが発生しやすい環境です。たとう紙で包み、桐たんすで保管するのが理想的。状態が悪化する前に売却を検討することも重要です。<Link href="/articles/storage-guide/" className="text-[#6b4c8a] hover:underline">保管ガイド</Link>もご確認ください。
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
            <Link href="/articles/kaga-yuzen/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">加賀友禅の買取相場</h3>
              <p className="text-xs text-gray-600">加賀友禅の特徴・作家・買取相場を徹底解説。</p>
            </Link>
            <Link href="/articles/yuzen-types/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">友禅の種類と買取相場</h3>
              <p className="text-xs text-gray-600">京友禅・加賀友禅・東京友禅の違いと相場を比較。</p>
            </Link>
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">おすすめ5社を徹底比較。口コミ・評判・実績まで。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            金沢で着物を売るなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            加賀友禅・牛首紬など石川県の伝統工芸品は専門査定員に見てもらうことが大切。複数業者の無料査定で最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
