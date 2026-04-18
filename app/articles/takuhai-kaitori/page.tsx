import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の宅配買取おすすめ業者3選｜自宅から送るだけの簡単買取",
  description:
    "着物の宅配買取おすすめ業者3選を徹底比較。自宅から送るだけで買取が完了する宅配買取のメリット・デメリット、利用の流れ6ステップ、梱包のコツ、トラブル回避法まで詳しく解説します。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/takuhai-kaitori/",
  },
  openGraph: {
    title: "着物の宅配買取おすすめ業者3選｜自宅から送るだけの簡単買取",
    description:
      "着物の宅配買取おすすめ3社を比較。送るだけで完了する簡単買取を徹底ガイドします。",
    url: "https://kimonokaitori-biyori.com/articles/takuhai-kaitori/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の宅配買取おすすめ業者3選｜自宅から送るだけの簡単買取",
  description:
    "着物の宅配買取おすすめ業者3選を徹底比較。自宅から送るだけで買取が完了する宅配買取のメリット・デメリット、利用の流れ、梱包のコツまで詳しく解説します。",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://kimonokaitori-biyori.com/articles/takuhai-kaitori/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "宅配買取の送料は誰が負担しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大手の買取業者であれば、送料は業者が負担します（着払い）。ただし、査定額に納得できずキャンセルした場合の返送料は自己負担になる業者もありますので、事前に確認しましょう。本記事で紹介している業者はいずれも送料無料です。",
      },
    },
    {
      "@type": "Question",
      name: "宅配買取の梱包キットは無料でもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くの業者では無料で梱包キット（ダンボール・緩衝材・着払い伝票など）を送ってもらえます。申し込み時に「梱包キット希望」と伝えるか、Webフォームで選択すれば、数日以内に届きます。自分でダンボールを用意しても問題ありません。",
      },
    },
    {
      "@type": "Question",
      name: "宅配買取にクーリングオフは適用されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、宅配買取にはクーリングオフは適用されません。宅配買取は消費者が自ら申し込んで品物を送る形式のため、特定商取引法の「訪問購入」には該当しません。そのため、査定額に納得してからの承諾が重要です。キャンセル可能な期間を設けている業者もありますので、事前に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "宅配買取で着物が査定中に破損した場合はどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "信頼できる業者であれば、輸送中・査定中の事故に対する保険や補償制度を設けています。ただし、すべての業者が対応しているわけではありません。高価な着物を送る場合は、事前に補償内容を確認し、保険付きの配送方法を選ぶと安心です。",
      },
    },
    {
      "@type": "Question",
      name: "宅配買取で査定額に納得できない場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "査定額に納得できない場合はキャンセルして着物を返送してもらえます。ただし、返送料が自己負担になる業者もあります。返送料無料の業者を選ぶか、事前にキャンセル時の条件を確認しておくことが大切です。一部の着物だけ売って残りを返送してもらうことも可能な業者があります。",
      },
    },
  ],
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
      name: "お役立ち情報",
      item: "https://kimonokaitori-biyori.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "宅配買取おすすめ",
      item: "https://kimonokaitori-biyori.com/articles/takuhai-kaitori/",
    },
  ],
};

export default function TakuhaiKaitoriPage() {
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
          { label: "お役立ち情報", href: "/articles/" },
          { label: "宅配買取おすすめ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">
              買取方法ガイド
            </span>
            <time dateTime="2026-04-16" className="text-xs text-gray-500">
              2026年4月16日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            着物の宅配買取
            <span className="text-[#6b4c8a]">おすすめ業者3選</span>
            <br className="md:hidden" />
            自宅から送るだけの簡単買取
          </h1>
          <p className="text-gray-600 leading-relaxed">
            「着物を売りたいけど、対面でのやり取りは避けたい」
            「近くに買取店舗がない」「忙しくて時間が取れない」
            そんな方にぴったりなのが宅配買取です。
            ダンボールに着物を詰めて送るだけで、
            自宅にいながら全国どこからでも買取が完了します。
            本記事では、宅配買取の仕組みからおすすめ業者3社の比較、
            梱包のコツ、トラブル回避法まで徹底的に解説します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#what" className="hover:underline">
                1. 宅配買取とは？仕組みをわかりやすく解説
              </a>
            </li>
            <li>
              <a href="#merit" className="hover:underline">
                2. 宅配買取のメリット5つ
              </a>
            </li>
            <li>
              <a href="#demerit" className="hover:underline">
                3. 宅配買取のデメリット3つ
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:underline">
                4. 宅配買取おすすめ業者3選【比較表あり】
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. 宅配買取の流れ6ステップ
              </a>
            </li>
            <li>
              <a href="#packing" className="hover:underline">
                6. 着物の梱包のコツ
              </a>
            </li>
            <li>
              <a href="#trouble" className="hover:underline">
                7. トラブル回避法と注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* 宅配買取とは */}
        <section id="what" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 宅配買取とは？仕組みをわかりやすく解説
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              宅配買取＝着物を送るだけで買取が完了する方法
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              宅配買取とは、売りたい着物をダンボールに詰めて業者に送り、
              業者側で査定を行い、査定額に納得すれば入金される買取方法です。
              対面のやり取りが一切不要で、全国どこからでも利用できるのが
              最大の特徴です。忙しい方や対面が苦手な方に選ばれています。
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">宅配買取の基本的な仕組み</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  業者のWebサイトや電話から宅配買取を申し込む
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  無料の梱包キット（ダンボール・緩衝材・伝票）が届く
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  着物を梱包して着払いで発送する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  業者が着物を受け取り、査定を行う
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  査定結果に納得すれば指定口座に入金される
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  納得できない場合は着物を返送してもらえる
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">宅配買取と出張買取・持ち込み買取の違い</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取は「対面不要」「全国対応」が最大の強みです。
                出張買取は査定員が自宅に来る方法で、持ち込み買取は自分で店舗に行く方法。
                宅配買取はこの両方の「移動の手間」と「対面のストレス」を
                解消した方法と言えます。
                一方で、現金化までに時間がかかる点は注意が必要です。
                自分のライフスタイルや着物の枚数に合わせて、
                最適な方法を選びましょう。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              宅配買取には出張買取と異なりクーリングオフが適用されません。
              そのため、査定額に納得してから承諾することが非常に重要です。
              「自動承諾」の設定がないか、事前に確認しておきましょう。
            </p>
          </div>
        </section>

        {/* メリット */}
        <section id="merit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 宅配買取のメリット5つ
          </h2>

          <div className="space-y-4">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット1</span>
                対面不要で気軽に利用できる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取の最大のメリットは、査定員と対面する必要がない点です。
                「自宅に知らない人を上げるのは不安」
                「断るのが苦手で、つい承諾してしまいそう」
                という方でも、宅配買取なら安心です。
                査定結果はメールや電話で通知されるため、
                じっくり検討してから承諾するかどうかを決められます。
                対面のプレッシャーがないため、冷静に判断できるのが強みです。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット2</span>
                全国どこからでも利用できる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取は配送さえできれば全国どこからでも利用可能です。
                出張買取ではエリア制限がある場合がありますが、
                宅配買取ならそうした制限はありません。
                離島や地方にお住まいの方でも、
                都市部と同じクオリティの査定を受けられます。
                買取店舗が近くにない方にとって、唯一の選択肢となることも多いです。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット3</span>
                好きな時間に梱包・発送できる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取は自分のペースで進められるのが魅力です。
                出張買取のように日程調整をする必要がなく、
                忙しい方でも空き時間に梱包して発送するだけ。
                仕事帰りにコンビニから発送することも可能です。
                「平日は忙しくて時間が取れない」
                「休日にまとめて準備したい」という方にぴったりの方法です。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット4</span>
                送料無料（着払い）の業者が多い
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                大手の買取業者であれば、送料は業者負担（着払い）です。
                梱包キット（ダンボール・緩衝材・着払い伝票）も
                無料で送ってもらえる業者がほとんどです。
                自分で段ボールを用意する手間も省けます。
                コストをかけずに着物を売れるため、
                「まずは査定額を知りたい」という方にも気軽に利用できます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット5</span>
                複数業者への相見積もりがしやすい
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取なら、複数の業者に同時に着物を送って査定を依頼できます。
                出張買取のように査定員の訪問スケジュールを調整する手間がなく、
                効率的に相見積もりが取れます。
                一括査定サイトを利用すれば、1回の申し込みで
                複数の業者に査定依頼を出すことも可能です。
                比較検討して最も高い金額を提示した業者に売ることで、
                買取額を最大化できます。
              </p>
            </div>
          </div>
        </section>

        {/* デメリット */}
        <section id="demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">3.</span> 宅配買取のデメリット3つ
          </h2>

          <div className="space-y-4">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット1</span>
                現金化までに時間がかかる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取は、着物を発送してから査定結果が出るまでに
                通常3日〜1週間程度かかります。
                さらに、入金までにもう数日かかる場合があります。
                出張買取や持ち込み買取のように「その場で即現金化」はできないため、
                急いでお金が必要な方には向いていません。
                「時間に余裕がある」「急がない」という方に適した方法です。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット2</span>
                キャンセル時の返送料リスク
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                査定額に納得できずキャンセルした場合、
                返送料が自己負担になる業者があります。
                着物は重量があるため、返送料も1,000円〜2,000円程度かかることがあります。
                特に複数の着物を送った場合は返送料もかさみます。
                事前に返送料の負担条件を確認しておくことが重要です。
                返送料無料の業者を選ぶのがベストですが、
                送る前に電話やメールで概算査定を聞いておくのも有効です。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット3</span>
                梱包・発送の手間がかかる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取では、着物をダンボールに梱包して発送する手間がかかります。
                着物はデリケートな素材のため、シワや汚れがつかないよう
                丁寧に梱包する必要があります。
                特に大量の着物がある場合は、梱包作業だけで
                かなりの時間と労力がかかります。
                大量の着物を売りたい場合は、
                出張買取の方が効率的かもしれません。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4 mt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">まとめ：</span>
              デメリットはあるものの、対面不要で全国対応という利点は大きいです。
              「忙しくて時間が取れない」「対面が苦手」という方は、
              宅配買取を検討してみましょう。
            </p>
          </div>
        </section>

        {/* おすすめ業者3選 */}
        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">4.</span> 宅配買取おすすめ業者3選【比較表あり】
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            宅配買取に対応している着物買取業者の中から、
            送料・梱包キット・査定スピード・返送料などを総合的に評価し、
            特におすすめの3社を厳選しました。
            いずれも送料無料で、安心して利用できる業者です。
          </p>

          {/* 比較表 */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">業者名</th>
                  <th className="px-4 py-3 text-left font-medium">送料</th>
                  <th className="px-4 py-3 text-left font-medium">梱包キット</th>
                  <th className="px-4 py-3 text-left font-medium">査定期間</th>
                  <th className="px-4 py-3 text-left font-medium">返送料</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">RECLO</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">無料提供</td>
                  <td className="px-4 py-3 text-gray-600">到着後2〜3日</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">高級品に強い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ティファナ</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">無料提供</td>
                  <td className="px-4 py-3 text-gray-600">到着後3〜5日</td>
                  <td className="px-4 py-3 text-gray-600">要確認</td>
                  <td className="px-4 py-3 text-gray-600">幅広い品目対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ヒカカク</td>
                  <td className="px-4 py-3 text-gray-600">業者による</td>
                  <td className="px-4 py-3 text-gray-600">業者による</td>
                  <td className="px-4 py-3 text-gray-600">業者による</td>
                  <td className="px-4 py-3 text-gray-600">業者による</td>
                  <td className="px-4 py-3 text-gray-600">一括比較で最高値</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RECLO */}
          <div className="border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ1
              </span>
              <h3 className="text-lg font-bold text-gray-900">RECLO（リクロ）</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              RECLOは高級ブランド品のリユースに特化した買取業者で、
              着物においても高級品の査定に定評があります。
              大島紬・結城紬・加賀友禅など、ブランド着物の買取に強く、
              証紙付きの高級着物であれば他社よりも高値がつく可能性があります。
              宅配買取専門のため、査定の精度も高く、
              送料・返送料ともに無料で安心して利用できます。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    高級着物の査定に強い（ブランド着物に精通）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    送料・返送料ともに完全無料
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    査定スピードが早い（到着後2〜3日）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    Webで査定状況を確認できる
                  </li>
                </ul>
              </div>
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">こんな人におすすめ</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    ブランド着物・高級着物を売りたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    証紙付きの着物をお持ちの方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    返送料も無料で安心したい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    早めに査定結果を知りたい方
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ティファナ */}
          <div className="border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ2
              </span>
              <h3 className="text-lg font-bold text-gray-900">ティファナ</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ティファナは着物からブランド品、家電、家具まで幅広く取り扱う
              総合リユース業者です。
              宅配買取では無料の梱包キットを提供しており、
              初めて宅配買取を利用する方でも安心して利用できます。
              着物だけでなく、帯・和装小物・草履・バッグなど
              和装関連の品物もまとめて送れるのが魅力です。
              出張買取や店頭買取にも対応しているため、
              宅配買取以外の方法に切り替えることも可能です。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    幅広い品目に対応（着物以外も送れる）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    無料梱包キットで初心者にも親切
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    出張・店頭への切り替えも可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    和装小物もまとめて査定対応
                  </li>
                </ul>
              </div>
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">こんな人におすすめ</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    着物と一緒に他の不用品も送りたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    宅配買取が初めての方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    状況に応じて出張・店頭に切り替えたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    帯や小物もまとめて処分したい方
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ヒカカク */}
          <div className="border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ3
              </span>
              <h3 className="text-lg font-bold text-gray-900">ヒカカク</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ヒカカクは複数の買取業者に一括で査定依頼ができる
              比較サイトです。1回の申し込みで複数業者から査定額が届くため、
              自分で1社ずつ申し込む手間が省けます。
              「どの業者が一番高く買い取ってくれるか」を
              効率的に比較できるのが最大の強みです。
              着物に特化した業者から総合リユース業者まで、
              幅広い選択肢の中から最高値を見つけられます。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    複数業者に一括査定依頼が可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    最高値の業者を簡単に比較できる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    業者ごとの口コミ・評判が確認できる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    利用料完全無料
                  </li>
                </ul>
              </div>
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">こんな人におすすめ</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    複数業者の査定額を比較したい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    どの業者を選べばいいかわからない方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    1社ずつ申し込む手間を省きたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    最高値で売りたい方
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 宅配買取の流れ6ステップ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> 宅配買取の流れ6ステップ
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  Webまたは電話で申し込み
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  買取業者の公式サイトまたは電話から宅配買取を申し込みます。
                  この時、着物の種類や枚数を伝えるとスムーズです。
                  梱包キットが必要な場合はこの段階で依頼します。
                  多くの業者は24時間Webで受付しているため、
                  深夜でも申し込みが可能です。
                  本人確認書類（運転免許証のコピーなど）が必要になるため、
                  事前に準備しておきましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  梱包キットの受け取り・梱包
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  申し込みから2〜3日で無料の梱包キットが届きます。
                  ダンボール・緩衝材・着払い伝票がセットになっています。
                  着物をたとう紙に包んだまま、丁寧にダンボールに入れます。
                  証紙や帯、和装小物も一緒に入れましょう。
                  自分でダンボールを用意する場合は、
                  着物が入る大きさのものを選び、
                  緩衝材でしっかりと隙間を埋めてください。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  着払いで発送
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  梱包が完了したら、同封の着払い伝票を貼って発送します。
                  集荷依頼をすれば自宅まで取りに来てもらえます。
                  コンビニからの発送に対応している場合もあります。
                  発送前に中身の写真を撮っておくと、
                  万が一のトラブル時に証拠になります。
                  追跡番号は控えておき、配達状況を確認できるようにしましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  業者が着物を受け取り・査定
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  業者が着物を受け取ったら、専門の査定員が1点ずつ査定を行います。
                  査定期間は業者によって異なりますが、通常は到着後2〜5日程度です。
                  査定が完了すると、メールや電話で査定結果と金額が通知されます。
                  Webで査定状況を確認できる業者もあります。
                  査定の進捗が気になる場合は、業者に問い合わせてみましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  査定額の承諾・入金
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に納得したら、承諾の旨を伝えます。
                  承諾後、指定の銀行口座に買取金額が振り込まれます。
                  入金は通常、承諾後1〜3営業日以内です。
                  一部の着物だけ売りたい場合は、
                  個別に承諾・キャンセルができる業者もあります。
                  査定額に納得できない場合は、次のステップに進みます。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                6
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  キャンセルの場合は返送
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に納得できない場合は、キャンセルして着物を返送してもらえます。
                  返送料は業者によって異なります。
                  返送料無料の業者（例：RECLO）であれば、
                  リスクなくキャンセルできます。
                  返送は通常1〜3日程度で届きます。
                  「とりあえず査定額を知りたい」という方は、
                  返送料無料の業者を選んで気軽に査定に出してみましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 梱包のコツ */}
        <section id="packing" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">6.</span> 着物の梱包のコツ
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            着物はデリケートな素材のため、梱包の仕方によって
            状態が変わり、査定額に影響する可能性があります。
            以下のポイントを押さえて、丁寧に梱包しましょう。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                たとう紙に包んだまま梱包する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物を包んでいるたとう紙（和紙）は、
                着物を湿気や汚れから守る大切な役割を果たしています。
                たとう紙に包まれた状態であれば、
                そのままダンボールに入れるのがベストです。
                たとう紙がない場合は、白い布やタオルで着物を包み、
                直接ダンボールに触れないようにしましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                折りシワに注意する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物を小さく折りたたみすぎると、折りシワがつく原因になります。
                できるだけ大きなダンボールを使い、
                着物を本だたみの状態のまま入れるのが理想的です。
                やむを得ず折り返す場合は、
                折り目の部分にタオルや緩衝材を挟むことで
                シワを軽減できます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                証紙・帯・小物も一緒に入れる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物と一緒に証紙（産地証明）、帯、帯締め、帯揚げなどの
                和装小物も入れましょう。
                証紙があると査定額が大幅にアップする可能性があります。
                帯もセットで売ることで査定額が上がるケースがあります。
                小さな小物は紛失しないよう、
                袋やポーチにまとめて入れておくと安心です。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                ダンボールの隙間を埋める
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ダンボールの中に隙間があると、
                輸送中に着物がずれたり、型崩れの原因になります。
                緩衝材（プチプチ）や新聞紙で隙間を埋め、
                着物が動かないようにしましょう。
                ただし、新聞紙が直接着物に触れるとインクが移る可能性があるため、
                タオルなどで着物を保護してから隙間を埋めるのがおすすめです。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                発送前に中身の写真を撮っておく
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                梱包が完了したら、ダンボールを閉じる前に
                中身の写真を撮影しておきましょう。
                万が一「入れたはずの着物がない」「状態が違う」などの
                トラブルが発生した場合に、証拠として役立ちます。
                着物1点ずつの写真を撮っておくとさらに安心です。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              梱包が不安な方は、業者の無料梱包キットを利用しましょう。
              梱包キットには最適な大きさのダンボールと緩衝材が入っているため、
              自分で用意する手間が省けます。
            </p>
          </div>
        </section>

        {/* トラブル回避法 */}
        <section id="trouble" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">7.</span> トラブル回避法と注意点
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            宅配買取は便利な方法ですが、対面でのやり取りがない分、
            トラブルが発生した場合の対応が難しくなります。
            以下の注意点を事前に確認しておくことで、トラブルを回避できます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                返送料の条件を事前に確認する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取で最もよくあるトラブルは、
                キャンセル時の返送料に関するものです。
                「送料無料」と書いてあっても、
                返送料は自己負担の業者があります。
                事前に「査定額に納得できなかった場合の返送料はかかりますか？」と
                確認しておくことが重要です。
                返送料無料の業者を選べば、リスクなく査定に出せます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                「自動承諾」の有無を確認する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                一部の業者では、「一定期間内に返答がない場合は
                自動的に承諾とみなす」というルールがあります。
                この場合、査定結果に納得していなくても、
                放置するとそのまま売却が確定してしまいます。
                申し込み時に自動承諾の有無を確認し、
                査定結果が届いたら速やかに対応しましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                宅配買取にはクーリングオフが適用されない
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                宅配買取は消費者が自ら品物を送る形式のため、
                特定商取引法の「訪問購入」には該当しません。
                そのため、クーリングオフは適用されません。
                承諾した後のキャンセルは原則できないため、
                査定額に十分納得してから承諾することが重要です。
                迷った場合は、承諾せずにまず返送してもらい、
                他の業者にも査定を依頼して比較しましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                輸送中の破損・紛失に備える
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物の輸送中に破損や紛失が起こる可能性はゼロではありません。
                特に高価な着物を送る場合は、保険付きの配送方法を選びましょう。
                事前に中身の写真を撮影しておくことも大切です。
                業者の補償制度を確認し、万が一の場合の対応を把握しておきましょう。
                追跡番号は必ず控えておき、配達状況を定期的にチェックしてください。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">安心のコツ：</span>
              トラブルを防ぐには、事前のリサーチが何より重要です。
              業者の公式サイトで返送料・自動承諾・補償制度を確認し、
              口コミや評判もチェックしてから申し込みましょう。
            </p>
          </div>
        </section>

        {/* 買取方法比較表 */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-[#c9a76c]">
            3つの買取方法を比較
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">比較項目</th>
                  <th className="px-4 py-3 text-left font-medium">宅配買取</th>
                  <th className="px-4 py-3 text-left font-medium">出張買取</th>
                  <th className="px-4 py-3 text-left font-medium">持ち込み買取</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">対面</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">不要</td>
                  <td className="px-4 py-3 text-gray-600">あり</td>
                  <td className="px-4 py-3 text-gray-600">あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">対応エリア</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">全国</td>
                  <td className="px-4 py-3 text-gray-600">業者による</td>
                  <td className="px-4 py-3 text-gray-600">店舗周辺のみ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">現金化の速さ</td>
                  <td className="px-4 py-3 text-gray-600">数日〜1週間</td>
                  <td className="px-4 py-3 text-gray-600">即日</td>
                  <td className="px-4 py-3 text-gray-600">即日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">時間の自由度</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">高い</td>
                  <td className="px-4 py-3 text-gray-600">日程調整が必要</td>
                  <td className="px-4 py-3 text-gray-600">営業時間内</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">大量対応</td>
                  <td className="px-4 py-3 text-gray-600">梱包が大変</td>
                  <td className="px-4 py-3 text-gray-600">得意</td>
                  <td className="px-4 py-3 text-gray-600">不向き</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">クーリングオフ</td>
                  <td className="px-4 py-3 text-gray-600">適用なし</td>
                  <td className="px-4 py-3 text-gray-600">適用あり（8日間）</td>
                  <td className="px-4 py-3 text-gray-600">適用なし</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4 mt-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              宅配買取は「対面不要」「全国対応」「時間の自由度が高い」という
              3つの強みがあります。一方で、クーリングオフが適用されないため、
              慎重に査定額を検討してから承諾することが大切です。
            </p>
          </div>
        </section>

        {/* 宅配買取で失敗しないための梱包のコツ */}
        <section className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            宅配買取で失敗しないための梱包のコツ
          </h3>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5 space-y-3">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>たとう紙ごと平らに折りたたんで梱包する（折りジワを防ぐ）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>帯・小物は別の袋に入れてセットで送る</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>証紙は着物と一緒に必ず同梱する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>ダンボールは業者から無料で送ってもらえる（RECLO等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>高額着物の場合は事前に写真査定を利用して概算を確認しておくと安心</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 宅配買取の送料は誰が負担しますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                大手の買取業者であれば、送料は業者が負担します（着払い）。
                ただし、査定額に納得できずキャンセルした場合の返送料は
                自己負担になる業者もありますので、事前に確認しましょう。
                本記事で紹介している業者はいずれも送料無料です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 宅配買取の梱包キットは無料でもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、多くの業者では無料で梱包キット（ダンボール・緩衝材・着払い伝票など）を
                送ってもらえます。申し込み時に「梱包キット希望」と伝えるか、
                Webフォームで選択すれば、数日以内に届きます。
                自分でダンボールを用意しても問題ありません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 宅配買取にクーリングオフは適用されますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                いいえ、宅配買取にはクーリングオフは適用されません。
                宅配買取は消費者が自ら申し込んで品物を送る形式のため、
                特定商取引法の「訪問購入」には該当しません。
                そのため、査定額に納得してからの承諾が重要です。
                キャンセル可能な期間を設けている業者もありますので、事前に確認しましょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 宅配買取で着物が査定中に破損した場合はどうなりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                信頼できる業者であれば、輸送中・査定中の事故に対する
                保険や補償制度を設けています。ただし、
                すべての業者が対応しているわけではありません。
                高価な着物を送る場合は、事前に補償内容を確認し、
                保険付きの配送方法を選ぶと安心です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 宅配買取で査定額に納得できない場合はどうすればいいですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                査定額に納得できない場合はキャンセルして着物を返送してもらえます。
                ただし、返送料が自己負担になる業者もあります。
                返送料無料の業者を選ぶか、事前にキャンセル時の条件を確認しておくことが大切です。
                一部の着物だけ売って残りを返送してもらうことも可能な業者があります。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：宅配買取で手軽に着物を売ろう
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-700 font-medium">この記事のポイント：</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  宅配買取は対面不要で全国どこからでも利用可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  おすすめはRECLO・ティファナ・ヒカカクの3社
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  たとう紙のまま梱包し、折りシワに注意する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  返送料・自動承諾の条件を事前に確認する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  クーリングオフは適用されないため慎重に承諾する
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              宅配買取は、対面が苦手な方や近くに買取店舗がない方に最適な方法です。
              送料無料・梱包キット無料の業者を選べば、コストをかけずに
              着物の価値を知ることができます。
              まずは気軽に査定を依頼して、お手持ちの着物の価値を確認してみましょう。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            まずは無料で着物の価値を確認してみましょう
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            送料・査定料すべて無料。ダンボールに詰めて送るだけ。<br />
            信頼できる業者をランキングで比較できます。
          </p>
          <Link
            href="/ranking/"
            className="inline-block bg-[#c9a76c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#b8965b] transition-colors"
          >
            おすすめ着物買取業者ランキングを見る
          </Link>
        </div>

        {/* 関連ページ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            関連ページ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/ranking/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#6b4c8a] font-medium">
                ランキング
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物買取おすすめ業者ランキング
              </p>
            </Link>
            <Link
              href="/articles/shutcho-kaitori/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物の出張買取おすすめ業者3選
              </p>
            </Link>
            <Link
              href="/articles/mochikomi-kaitori/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物の持ち込み買取おすすめ業者2選
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
