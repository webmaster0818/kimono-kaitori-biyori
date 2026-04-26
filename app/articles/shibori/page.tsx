import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "絞り染め着物の買取相場｜有松絞り・京鹿の子絞りの価値",
  description:
    "絞り染め着物の種類と買取相場を徹底解説。有松絞り・京鹿の子絞り・辻が花など主要な絞り染めの特徴・産地・買取価格をまとめました。総絞りの振袖の価値も紹介。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/shibori/" },
  openGraph: {
    title: "絞り染め着物の買取相場｜有松絞り・京鹿の子絞りの価値",
    description: "絞り染め着物の種類と買取相場を解説。有松絞り・京鹿の子絞り・辻が花の特徴と買取価格。",
    url: "https://kimonokaitori-biyori.com/articles/shibori/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "総絞りの振袖はどのくらいで売れますか？", answer: "総絞りの振袖は制作に年単位の時間がかかる非常に高価な着物です。証紙付きの本絞り（京鹿の子絞り）であれば10万円〜50万円以上の買取が期待できます。ただし、プリント絞り風のものは数千円程度になります。買取大吉やウリエルなど専門業者に査定を依頼しましょう。" },
  { question: "有松絞りの浴衣は買取してもらえますか？", answer: "はい、有松絞りの浴衣は伝統的工芸品として需要があり、証紙付きであれば3,000円〜3万円程度の買取が期待できます。本藍染めの有松絞りは特に高く評価されます。" },
  { question: "絞り染めとプリント絞り風はどう見分けますか？", answer: "本物の絞り染めは生地に凹凸（しぼ）があり、裏面にも柄が出ています。プリント絞り風は生地が平らで裏面は白いままです。また、本絞りは1粒1粒手で括っているため微妙な個体差があります。" },
  { question: "辻が花の着物は高く売れますか？", answer: "辻が花は室町〜桃山時代に流行した幻の染色技法で、現代作家による辻が花の作品は非常に高額です。久保田一竹の辻が花は10万円〜100万円以上の買取実績があります。" },
  { question: "絞り染めの着物を高く売るコツは？", answer: "証紙を一緒に出す、本絞りかプリント風かを確認する、総絞りは特に複数社で比較する、着物専門の業者に依頼する、の4つが重要です。特に総絞りは業者間で査定額の差が大きいため、ヒカカクの一括比較を活用しましょう。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "絞り染め着物の買取相場｜有松絞り・京鹿の子絞りの価値",
  description: "絞り染め着物の種類と買取相場を解説。有松絞り・京鹿の子絞り・辻が花の特徴と買取価格。",
  datePublished: "2026-04-26", dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/shibori/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "絞り染め着物の買取相場", item: "https://kimonokaitori-biyori.com/articles/shibori/" },
] };

export default function ShiboriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "絞り染め着物の買取相場" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">知識ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">絞り染め着物の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">有松絞り・京鹿の子絞りの価値</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              日本の伝統的な染色技法「絞り染め」の種類・産地・特徴と買取相場を徹底解説。有松絞り・京鹿の子絞り・辻が花の価値や、総絞りの振袖の買取価格もまとめました。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav><ol className="space-y-2 text-sm">
              <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 絞り染めとは？</a></li>
              <li><a href="#types" className="text-[#6b4c8a] hover:underline">2. 絞り染めの主要な種類</a></li>
              <li><a href="#market" className="text-[#6b4c8a] hover:underline">3. 絞り染めの種類別買取相場</a></li>
              <li><a href="#real-vs-fake" className="text-[#6b4c8a] hover:underline">4. 本絞りとプリント絞り風の見分け方</a></li>
              <li><a href="#tips" className="text-[#6b4c8a] hover:underline">5. 絞り染めを高く売るコツ</a></li>
              <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">6. おすすめの買取業者</a></li>
              <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
            </ol></nav>
          </div>
        </div>
      </section>

      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />絞り染めとは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>絞り染め（しぼりぞめ）とは、生地を糸で括ったり、板で挟んだりして防染し、染料に浸して模様を作る日本の伝統的な染色技法です。世界各地に類似の技法がありますが、日本の絞り染めは<strong>精緻さと種類の豊富さで群を抜いています</strong>。</p>
            <p>絞り染めの中でも特に「総絞り」は、着物全体を絞りで染める技法で、1反に10万粒以上の絞りを施すため、制作に1年以上かかることもあります。そのため新品価格は数十万円〜数百万円に達し、買取市場でも高額で取引されています。</p>
            <p>ただし近年はプリントで絞り風の模様を再現した安価な着物も出回っており、<strong>本物の絞り染めとプリント絞り風では買取額に10倍以上の差</strong>が出ることがあります。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">有松絞り</p>
              <p className="text-xs text-gray-600">名古屋の伝統的絞り染め</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">京鹿の子</p>
              <p className="text-xs text-gray-600">京都の精緻な絞り技法</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">辻が花</p>
              <p className="text-xs text-gray-600">幻の染色技法の復元</p>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />絞り染めの主要な種類
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">有松絞り（有松鳴海絞り）- 愛知県名古屋市</h3>
              <p className="text-sm leading-relaxed text-gray-700">400年以上の歴史を持つ名古屋の伝統的絞り染め。100種類以上の技法があり、浴衣から着物まで幅広く使われます。国の伝統的工芸品に指定。本藍染めの有松絞りは特に高い価値があります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">京鹿の子絞り - 京都府</h3>
              <p className="text-sm leading-relaxed text-gray-700">京都で発展した精緻な絞り染め。鹿の子の斑点のような小さな粒を一つ一つ手で括って染める「疋田絞り」が代表的。総絞りの着物は非常に高額で、新品価格は100万円以上になることも。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">辻が花 - 各地</h3>
              <p className="text-sm leading-relaxed text-gray-700">室町〜桃山時代に流行した絞り染めと墨描きを組み合わせた幻の技法。一度途絶えましたが、久保田一竹など現代作家によって復元されました。久保田一竹の辻が花は美術品としても高い評価を受けています。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">大原絞り - 京都府</h3>
              <p className="text-sm leading-relaxed text-gray-700">京都大原地区で発展した絞り染め。雪花絞りや板締め絞りなど幾何学的な模様が特徴です。浴衣やカジュアル着物に多く使われます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">南部絞り - 岩手県</h3>
              <p className="text-sm leading-relaxed text-gray-700">岩手県で発展した藍染めの絞り染め。素朴で力強い模様が特徴です。生産量が少なく、手仕事の温かみある風合いが魅力。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />絞り染めの種類別買取相場
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">絞り染めの種類</th>
                  <th className="px-4 py-3 text-left font-semibold">アイテム</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京鹿の子（総絞り振袖）</td>
                  <td className="px-4 py-3 text-gray-700">振袖</td>
                  <td className="px-4 py-3 font-medium">10万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">京鹿の子（部分絞り）</td>
                  <td className="px-4 py-3 text-gray-700">訪問着・付け下げ</td>
                  <td className="px-4 py-3 font-medium">3万円〜15万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">辻が花（久保田一竹）</td>
                  <td className="px-4 py-3 text-gray-700">着物</td>
                  <td className="px-4 py-3 font-medium">10万円〜100万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">辻が花（現代作家）</td>
                  <td className="px-4 py-3 text-gray-700">着物</td>
                  <td className="px-4 py-3 font-medium">3万円〜20万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">有松絞り（着物）</td>
                  <td className="px-4 py-3 text-gray-700">着物</td>
                  <td className="px-4 py-3 font-medium">3万円〜15万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">有松絞り（浴衣）</td>
                  <td className="px-4 py-3 text-gray-700">浴衣</td>
                  <td className="px-4 py-3 font-medium">3,000円〜3万円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">プリント絞り風</td>
                  <td className="px-4 py-3 text-gray-700">着物・浴衣</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">500円〜3,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※証紙付き・美品の場合の目安です。状態や市場動向により変動します。</p>
        </div>
      </section>

      <section id="real-vs-fake" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />本絞りとプリント絞り風の見分け方
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">本絞り（手絞り）</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside">
                <li>生地に凹凸（しぼ）がある</li>
                <li>裏面にも柄が出ている</li>
                <li>粒の大きさに微妙な個体差がある</li>
                <li>括った跡の芯が白く残る</li>
                <li>手触りにふっくらとした弾力がある</li>
                <li>証紙が付いている</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">プリント絞り風</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside">
                <li>生地が平ら（凹凸がない）</li>
                <li>裏面が白いまま</li>
                <li>粒が均一で機械的</li>
                <li>柄のリピートが見られる</li>
                <li>手触りが平面的</li>
                <li>証紙がない</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />絞り染めを高く売るコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：証紙を確認して一緒に出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">有松絞りの伝統工芸品証紙、京鹿の子絞りの産地証紙など、証紙があると買取額が大きくアップします。たとう紙の中に挟まっていないか確認しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：本絞りかプリント風かを把握する</h3>
              <p className="text-sm leading-relaxed text-gray-700">生地の凹凸や裏面の色を確認して、本絞りかプリント風かを把握しておきましょう。本絞りであることがわかると査定がスムーズです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：着物専門の業者に依頼する</h3>
              <p className="text-sm leading-relaxed text-gray-700">総絞りや辻が花は非常に高価な着物ですが、専門知識のない業者では適正な評価が難しくなります。買取大吉やウリエルなど着物専門の査定員に依頼しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：複数社で比較する</h3>
              <p className="text-sm leading-relaxed text-gray-700">絞り染めは業者によって査定額の差が特に大きいジャンルです。ヒカカクの一括比較を活用して3社以上の見積もりを取りましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：アイロンをかけない</h3>
              <p className="text-sm leading-relaxed text-gray-700">絞り染めの凹凸（しぼ）はアイロンで伸ばしてしまうと元に戻りません。絞りの風合いが失われると査定額が下がるため、絶対にアイロンをかけないでください。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめの買取業者
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3>
              <p className="text-sm leading-relaxed text-gray-700">全国700店舗以上。絞り染めの種類・技法を正確に評価できる着物専門査定員が在籍。総絞りの振袖や辻が花の高額買取実績も豊富。出張・持ち込み・宅配すべてに対応。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物専門の出張買取に強い。京鹿の子絞りや辻が花など高額な絞り染めの査定実績が豊富。1枚1枚丁寧に査定してくれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO（リクロ）</h3>
              <p className="text-sm leading-relaxed text-gray-700">海外販路を持つRECLOは、総絞りや辻が花など芸術性の高い絞り染めを海外コレクターに販売できるため高額査定が期待できます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/nagoya/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">名古屋の着物買取業者5選</h3>
              <p className="text-xs text-gray-600">有松絞りの本場・名古屋のおすすめ業者を紹介。</p>
            </Link>
            <Link href="/articles/furisode/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">振袖の買取相場</h3>
              <p className="text-xs text-gray-600">総絞り振袖を含む振袖の買取価格を解説。</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">絞り染めの着物を売るなら、まず無料査定から</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            総絞りや辻が花など高額買取が期待できる絞り染め。証紙と一緒に無料査定に出して最高額を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
