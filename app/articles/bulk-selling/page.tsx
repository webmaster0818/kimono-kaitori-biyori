import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物のまとめ売りガイド｜大量処分のコツとおすすめ業者",
  description:
    "着物を大量にまとめて売りたい方向けガイド。遺品整理・引越し・断捨離で着物をまとめ売りするコツ、高額査定のポイント、おすすめ業者を紹介します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/bulk-selling/",
  },
  openGraph: {
    title: "着物のまとめ売りガイド｜大量処分のコツとおすすめ業者",
    description:
      "着物を大量にまとめて売りたい方向けガイド。高額査定のポイントとおすすめ業者を紹介。",
    url: "https://kimonokaitori-biyori.com/articles/bulk-selling/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物を50枚以上まとめて売ることはできますか？",
    answer:
      "はい、買取大吉やウリエルは枚数制限なくまとめ売りに対応しています。100枚以上の大量買取実績もあります。出張買取なら自宅で査定してもらえるため、大量の着物を運ぶ手間が省けます。",
  },
  {
    question: "まとめ売りすると1枚あたりの査定額は下がりますか？",
    answer:
      "いいえ、まとめ売りだからといって1枚あたりの査定額が下がることはありません。むしろ大量買取の場合、セットとしての価値や査定員の出張コスト効率の観点から、ボーナス査定がつく業者もあります。",
  },
  {
    question: "遺品整理で出てきた着物の価値がわからないのですが？",
    answer:
      "価値がわからなくても問題ありません。着物専門の査定員が1枚1枚鑑定してくれます。買取大吉やウリエルは遺品整理にも対応しており、着物以外の和装小物や帯もまとめて査定可能です。",
  },
  {
    question: "値段がつかない着物が混ざっていても大丈夫ですか？",
    answer:
      "はい、値段がつかない着物が混ざっていても問題ありません。値段がつく着物だけを買い取ってもらい、残りは引き取りをお願いできる業者もあります。まずは全部まとめて査定に出しましょう。",
  },
  {
    question: "着物と一緒に帯や和装小物もまとめて売れますか？",
    answer:
      "はい、帯・帯締め・帯揚げ・草履・バッグ・かんざしなどの和装小物もまとめて売れます。着物と帯をセットで出すと査定額がアップする可能性もあります。使わない和装品はすべてまとめて出しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物のまとめ売りガイド｜大量処分のコツとおすすめ業者",
  description:
    "着物を大量にまとめて売りたい方向けガイド。高額査定のポイントとおすすめ業者を紹介。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/bulk-selling/" },
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
    { "@type": "ListItem", position: 3, name: "着物のまとめ売りガイド", item: "https://kimonokaitori-biyori.com/articles/bulk-selling/" },
  ],
};

export default function BulkSellingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物のまとめ売りガイド" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">実践ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物のまとめ売り</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">大量処分のコツとおすすめ業者</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              遺品整理・引越し・断捨離で大量の着物を処分したい方へ。まとめ売りで高額査定を引き出すコツと、大量買取に対応したおすすめ業者を詳しく紹介します。
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
                <li><a href="#when" className="text-[#6b4c8a] hover:underline">1. まとめ売りが必要になるシーン</a></li>
                <li><a href="#methods" className="text-[#6b4c8a] hover:underline">2. まとめ売りの3つの方法</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">3. 大量買取対応のおすすめ業者</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">4. まとめ売りで高額査定を引き出すコツ</a></li>
                <li><a href="#market" className="text-[#6b4c8a] hover:underline">5. まとめ売りの買取相場目安</a></li>
                <li><a href="#caution" className="text-[#6b4c8a] hover:underline">6. まとめ売りの注意点</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* まとめ売りが必要なシーン */}
      <section id="when" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            まとめ売りが必要になるシーン
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>着物をまとめて売りたいケースは、主に以下のようなシーンで発生します。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">遺品整理</h3>
              <p className="text-sm leading-relaxed text-gray-700">ご家族が残した着物を整理する場合。数十枚〜100枚以上になることも珍しくありません。価値のわからない着物でも専門業者なら1枚ずつ丁寧に査定してくれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">引越し・住み替え</h3>
              <p className="text-sm leading-relaxed text-gray-700">引越しでスペースを確保したい場合。桐たんすに入りきらない着物を処分するケースが多いです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">断捨離・終活</h3>
              <p className="text-sm leading-relaxed text-gray-700">着る機会がなくなった着物を整理。子どもに引き継ぐ予定がない場合、元気なうちに売却を検討する方が増えています。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">施設への入居</h3>
              <p className="text-sm leading-relaxed text-gray-700">老人ホームなどへの入居に伴い、自宅の荷物を整理するケース。着物以外の和装小物もまとめて処分できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ売りの方法 */}
      <section id="methods" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            まとめ売りの3つの方法
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">出張買取（おすすめ度：最高）</h3>
              <p className="text-sm leading-relaxed text-gray-700">まとめ売りには出張買取が最適。大量の着物を運ぶ手間がなく、自宅で査定員が1枚ずつ査定してくれます。買取大吉やウリエルは枚数制限なし・出張費無料で対応。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">宅配買取</h3>
              <p className="text-sm leading-relaxed text-gray-700">RECLOなら梱包キットを複数箱送ってもらえるため、大量の着物も宅配で売却可能。ただし梱包の手間がかかるため、20枚以下の場合に向いています。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">持ち込み買取</h3>
              <p className="text-sm leading-relaxed text-gray-700">買取大吉やティファナの店舗に持ち込み。大量の着物を車で運べる方に向いています。事前に電話で大量持ち込みの旨を伝えておくとスムーズです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者 */}
      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            大量買取対応のおすすめ業者
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">全国700店舗以上。出張・持ち込みともに大量買取OK。枚数制限なし・出張費無料。遺品整理にも多数の実績があり安心です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">大量対応</p><p className="font-semibold text-green-600">制限なし</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">出張費</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">遺品整理</p><p className="font-semibold text-green-600">対応</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">和装小物</p><p className="font-semibold text-green-600">まとめてOK</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">着物専門の出張買取に強み。大量の着物でも1枚1枚丁寧に査定。遺品整理・断捨離・終活での利用実績が豊富です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">大量対応</p><p className="font-semibold text-green-600">制限なし</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">出張費</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定</p><p className="font-semibold">着物専門</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">キャンセル</p><p className="font-semibold text-green-600">無料</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">宅配買取のリーディングカンパニー。梱包キットを複数箱送ってもらえるため、宅配でもまとめ売りが可能。海外販路による高額査定も。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">宅配キット</p><p className="font-semibold text-green-600">複数箱OK</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">送料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">海外販路</p><p className="font-semibold text-green-600">あり</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">返送料</p><p className="font-semibold text-green-600">無料</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">全国に店舗展開。持ち込み買取に強く、大量の着物を車で持ち込める方に便利。予約不要・即日査定で手早く売却可能です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">持ち込み</p><p className="font-semibold text-green-600">大量OK</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">予約</p><p className="font-semibold text-green-600">不要</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">即日査定</p><p className="font-semibold text-green-600">対応</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定料</p><p className="font-semibold text-green-600">無料</p></div>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">複数業者の一括比較サイト。まとめ売りの場合は特に、業者によって査定額の差が大きくなるため一括比較が有効です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">サービス</p><p className="font-semibold">一括比較</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">利用料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">提携業者</p><p className="font-semibold">多数</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">大量売り</p><p className="font-semibold text-green-600">比較に最適</p></div>
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
            まとめ売りで高額査定を引き出すコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：出張買取を選ぶ</h3>
              <p className="text-sm leading-relaxed text-gray-700">大量の着物を売る場合、出張買取が最も効率的です。運搬の手間がなく、自宅でゆっくり査定結果を確認できます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：証紙・付属品を忘れずに</h3>
              <p className="text-sm leading-relaxed text-gray-700">大量の着物の中に証紙やたとう紙が紛れていることがあります。査定前に確認し、対応する着物と一緒にまとめておきましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：セットで出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物と帯のセット、和装小物一式など、コーディネートとしてまとめて出すとプラス査定になる可能性があります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：仕分けは不要</h3>
              <p className="text-sm leading-relaxed text-gray-700">「値段がつくもの」と「つかないもの」の仕分けは不要です。プロの査定員がすべて鑑定してくれるので、全部まとめて出しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：複数社で比較する</h3>
              <p className="text-sm leading-relaxed text-gray-700">大量買取ほど業者間の査定額の差が大きくなります。ヒカカクの一括比較を活用して、3社以上の見積もりを取りましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 買取相場目安 */}
      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            まとめ売りの買取相場目安
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">まとめ売りの内容</th>
                  <th className="px-4 py-3 text-left font-semibold">枚数の目安</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">一般的な着物のまとめ売り</td>
                  <td className="px-4 py-3 text-gray-700">10〜20枚</td>
                  <td className="px-4 py-3 font-medium">5,000円〜5万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">高級着物含むまとめ売り</td>
                  <td className="px-4 py-3 text-gray-700">10〜30枚</td>
                  <td className="px-4 py-3 font-medium">5万円〜30万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">遺品整理の着物一式</td>
                  <td className="px-4 py-3 text-gray-700">30〜100枚以上</td>
                  <td className="px-4 py-3 font-medium">3万円〜50万円以上</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">作家物・伝統工芸品のまとめ売り</td>
                  <td className="px-4 py-3 text-gray-700">5〜20枚</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">10万円〜100万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section id="caution" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            まとめ売りの注意点
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">注意1：「キロ買い」業者には要注意</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物を重量（キロ）で買い取る業者は、1枚あたりの価値を正しく評価していない可能性があります。1枚ずつ査定してくれる業者を選びましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">注意2：出張費・キャンセル料を事前確認</h3>
              <p className="text-sm leading-relaxed text-gray-700">まとめ売りの場合、出張費やキャンセル料を請求する業者もあります。買取大吉・ウリエルはすべて無料なので安心です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">注意3：総額だけでなく明細を確認</h3>
              <p className="text-sm leading-relaxed text-gray-700">まとめ売りの場合、個別の査定額を確認しましょう。総額だけ提示する業者もいますが、内訳を聞いて高額品が適正に評価されているか確認することが大切です。</p>
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
            <Link href="/articles/estate-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">遺品整理の着物買取</h3>
              <p className="text-xs text-gray-600">遺品整理での着物の売り方を詳しく解説。</p>
            </Link>
            <Link href="/articles/free-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の無料査定おすすめ</h3>
              <p className="text-xs text-gray-600">査定だけでもOKな業者を厳選紹介。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            着物のまとめ売りなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            大量の着物も出張買取なら自宅で楽々。複数業者の無料査定で最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
