import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "着物の持ち込み買取おすすめ業者2選｜店舗に持っていくメリットと注意点",
  description:
    "着物の持ち込み買取（店頭買取）おすすめ業者2選を徹底比較。店舗に持っていくメリット・デメリット、持ち込み前の準備、出張・宅配買取との比較まで詳しく解説します。近くの買取店舗を探している方必見です。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/mochikomi-kaitori/",
  },
  openGraph: {
    title:
      "着物の持ち込み買取おすすめ業者2選｜店舗に持っていくメリットと注意点",
    description:
      "着物の持ち込み買取おすすめ2社を比較。店舗買取のメリットと注意点を徹底ガイドします。",
    url: "https://kimonokaitori-biyori.com/articles/mochikomi-kaitori/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "着物の持ち込み買取おすすめ業者2選｜店舗に持っていくメリットと注意点",
  description:
    "着物の持ち込み買取おすすめ業者2選を徹底比較。店舗に持っていくメリット・デメリット、持ち込み前の準備、出張・宅配買取との比較まで詳しく解説します。",
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
      "https://kimonokaitori-biyori.com/articles/mochikomi-kaitori/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "持ち込み買取は予約なしでも利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業者によります。予約不要で飛び込みOKの店舗もありますが、予約が必要な店舗もあります。特に着物の査定は専門の査定員が必要なため、事前に電話で「着物の査定をお願いしたい」と伝えて予約しておくのがおすすめです。予約すれば待ち時間も短縮できます。",
      },
    },
    {
      "@type": "Question",
      name: "持ち込み買取にクーリングオフは適用されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、持ち込み買取（店頭買取）にはクーリングオフは適用されません。自分から店舗に行って売却する形式は、特定商取引法の「訪問購入」に該当しないためです。店舗で査定額が提示されたら、その場で慎重に判断しましょう。納得できない場合は断って構いません。",
      },
    },
    {
      "@type": "Question",
      name: "持ち込み買取で必要な持ち物は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物と一緒に、本人確認書類（運転免許証・パスポート・マイナンバーカードなど）が必要です。古物営業法で、買取時の本人確認が義務付けられています。また、証紙・帯・和装小物など着物に関連するものがあれば一緒に持参すると査定額がアップする可能性があります。",
      },
    },
    {
      "@type": "Question",
      name: "着物が大量にある場合、持ち込み買取は利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "持ち込み買取は可能ですが、大量の着物を店舗まで運ぶのは大変です。車がない場合は特に困難です。10枚以上の着物がある場合は、出張買取の方が効率的でおすすめです。出張買取なら自宅で査定してもらえるため、運搬の手間がかかりません。",
      },
    },
    {
      "@type": "Question",
      name: "持ち込み買取で査定額に納得できない場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "査定額に納得できない場合は、その場でキャンセルして構いません。持ち込み買取はキャンセル料がかからないのが一般的です。着物をそのまま持ち帰り、他の業者にも査定を依頼して比較検討しましょう。即決を迫る業者は避けた方が無難です。",
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
      name: "持ち込み買取おすすめ",
      item: "https://kimonokaitori-biyori.com/articles/mochikomi-kaitori/",
    },
  ],
};

export default function MochikomiKaitoriPage() {
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
          { label: "持ち込み買取おすすめ" },
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
            着物の持ち込み買取
            <span className="text-[#6b4c8a]">おすすめ業者2選</span>
            <br className="md:hidden" />
            店舗に持っていくメリットと注意点
          </h1>
          <p className="text-gray-600 leading-relaxed">
            「直接お店に行って、目の前で査定してほしい」
            「対面で査定額の根拠を聞いてから売りたい」
            そんな方に適しているのが持ち込み買取（店頭買取）です。
            自分で店舗に着物を持っていき、その場で査定・現金化ができます。
            本記事では、持ち込み買取の仕組みからおすすめ業者2社の比較、
            持っていく前の準備、他の買取方法との違いまで詳しく解説します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#what" className="hover:underline">
                1. 持ち込み買取（店頭買取）とは？
              </a>
            </li>
            <li>
              <a href="#merit" className="hover:underline">
                2. 持ち込み買取のメリット4つ
              </a>
            </li>
            <li>
              <a href="#demerit" className="hover:underline">
                3. 持ち込み買取のデメリット3つ
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:underline">
                4. 持ち込み買取おすすめ業者2選【比較表あり】
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. 持ち込み買取の流れ
              </a>
            </li>
            <li>
              <a href="#preparation" className="hover:underline">
                6. 持っていく前の準備
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                7. 出張・宅配・持ち込みの比較表
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* 持ち込み買取とは */}
        <section id="what" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 持ち込み買取（店頭買取）とは？
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              持ち込み買取＝自分で店舗に持参して査定してもらう方法
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              持ち込み買取（店頭買取）とは、売りたい着物を自分で
              買取業者の店舗に持っていき、その場で査定・買取してもらう方法です。
              「店頭買取」とも呼ばれ、最も伝統的な買取方法です。
              査定員と対面でやり取りし、納得すればその場で現金を受け取れます。
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">持ち込み買取の基本的な流れ</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  売りたい着物を店舗に持参する（予約推奨）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  受付で着物の買取を依頼する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  査定員が目の前で着物を1点ずつ査定する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  査定額が提示され、納得すれば契約・現金受け取り
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  納得できなければそのまま持ち帰りOK
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">持ち込み買取はどんな人に選ばれている？</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                持ち込み買取は、「自分の目の前で査定を見たい」
                「対面で値段の根拠を聞きたい」
                「その場ですぐ現金が欲しい」という方に選ばれています。
                また、店舗で直接やり取りすることで
                安心感を得られるという声も多いです。
                出張買取のように自宅に人を上げる必要がなく、
                宅配買取のように着物を発送する手間もかかりません。
                ただし、店舗まで着物を運ぶ必要があるため、
                車での来店が前提になることが多いです。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">注意：</span>
              持ち込み買取にはクーリングオフが適用されません。
              自分から店舗に行って売却する形式は、
              特定商取引法の「訪問購入」に該当しないためです。
              そのため、店舗で査定額が提示されたら、
              慎重に判断してから承諾しましょう。
            </p>
          </div>
        </section>

        {/* メリット */}
        <section id="merit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 持ち込み買取のメリット4つ
          </h2>

          <div className="space-y-4">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット1</span>
                その場で即現金化できる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                持ち込み買取の最大のメリットは、査定から現金化までが
                その場で完結する点です。
                宅配買取のように査定結果を待つ必要がなく、
                店舗に着物を持っていけばその日のうちに現金を受け取れます。
                急いでお金が必要な方や、すぐに処分を終わらせたい方に最適です。
                出張買取でも即日現金化は可能ですが、
                日程調整が必要な分、持ち込み買取の方がスピーディーです。
                予約不要の店舗であれば、思い立ったその日に売りに行けます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット2</span>
                対面で査定額の根拠を確認できる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                持ち込み買取では、査定員が目の前で着物を確認し、
                金額の根拠を説明してくれます。
                「なぜこの着物は高い（安い）のか」を直接聞けるため、
                納得感のある取引ができます。
                宅配買取ではメールや電話で査定結果が通知されるだけですが、
                持ち込み買取なら疑問があればその場で質問できます。
                特に着物に詳しくない方は、プロの説明を聞くことで
                着物の価値を理解する良い機会にもなります。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット3</span>
                その場で価格交渉ができる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                持ち込み買取では、提示された査定額に対して
                交渉できる場合があります。
                「他の業者ではもう少し高かった」
                「思い入れのある着物なので少し上乗せしてほしい」
                といった交渉が、対面だからこそやりやすいです。
                もちろん、すべての交渉が成功するわけではありませんが、
                宅配買取では難しい「リアルタイムの駆け引き」が可能です。
                交渉の際は、他社の査定額を事前に取っておくと
                説得力が増します。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット4</span>
                店舗の実在を確認できる安心感
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                実際に店舗を訪れることで、業者の実在や信頼性を
                自分の目で確認できます。
                ネット上だけで完結する宅配買取では、
                「本当に信頼できる業者なのか」という不安を感じる方もいます。
                持ち込み買取なら、店舗の雰囲気やスタッフの対応を
                直接見て判断できるため、安心感があります。
                古物商許可証が店舗に掲示されているかも確認できます。
              </p>
            </div>
          </div>
        </section>

        {/* デメリット */}
        <section id="demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">3.</span> 持ち込み買取のデメリット3つ
          </h2>

          <div className="space-y-4">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット1</span>
                店舗まで着物を運ぶのが大変
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                持ち込み買取最大のデメリットは、
                着物を自分で店舗まで運ぶ必要がある点です。
                着物は1枚でも意外と重く、帯や小物を含めると
                かなりの荷物になります。
                特に大量の着物がある場合は、車がないと現実的に困難です。
                電車やバスでの移動では、
                大きな荷物を持っての移動がストレスになることもあります。
                大量の着物を売りたい場合は、
                出張買取の方が圧倒的に便利です。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット2</span>
                近くに対応店舗がない場合がある
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物の買取に対応している店舗は、
                都市部に集中している傾向があります。
                地方にお住まいの方は、最寄りの店舗まで
                片道1時間以上かかることも珍しくありません。
                交通費や移動時間を考えると、
                宅配買取や出張買取の方が効率的な場合があります。
                ただし、買取大吉のように全国1,800店舗以上を展開する
                大手であれば、比較的近くに店舗がある可能性が高いです。
                事前に最寄り店舗を確認してから検討しましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット3</span>
                店舗の営業時間内に行く必要がある
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                持ち込み買取は、店舗の営業時間内に来店する必要があります。
                平日の日中しか営業していない店舗もあり、
                仕事をしている方には時間的なハードルが高い場合があります。
                土日祝日に対応している店舗もありますが、
                混雑していて待ち時間が長くなることも。
                事前に営業時間と混雑状況を確認し、
                できれば予約してから来店するのがおすすめです。
                宅配買取なら時間を気にせず、好きなタイミングで
                梱包・発送できます。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4 mt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">まとめ：</span>
              持ち込み買取は「その場で現金化」「対面で安心」という
              メリットがある一方、運搬の手間や店舗へのアクセスが課題です。
              少量の着物を手早く売りたい方に向いている方法です。
            </p>
          </div>
        </section>

        {/* おすすめ業者2選 */}
        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">4.</span> 持ち込み買取おすすめ業者2選【比較表あり】
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            持ち込み買取に対応している着物買取業者の中から、
            店舗数・対応品目・サービス内容を総合的に評価し、
            特におすすめの2社を厳選しました。
            いずれも査定料・キャンセル料が無料で、安心して利用できます。
          </p>

          {/* 比較表 */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">業者名</th>
                  <th className="px-4 py-3 text-left font-medium">店舗数</th>
                  <th className="px-4 py-3 text-left font-medium">対応エリア</th>
                  <th className="px-4 py-3 text-left font-medium">査定料</th>
                  <th className="px-4 py-3 text-left font-medium">現金化</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">買取大吉</td>
                  <td className="px-4 py-3 text-gray-600">1,800店以上</td>
                  <td className="px-4 py-3 text-gray-600">全国</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">即日現金</td>
                  <td className="px-4 py-3 text-gray-600">業界最多の店舗数</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ティファナ</td>
                  <td className="px-4 py-3 text-gray-600">複数店舗</td>
                  <td className="px-4 py-3 text-gray-600">都市部中心</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">即日現金</td>
                  <td className="px-4 py-3 text-gray-600">総合リユース対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 買取大吉 */}
          <div className="border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ1
              </span>
              <h3 className="text-lg font-bold text-gray-900">買取大吉</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              買取大吉は全国に1,800店舗以上を展開する業界最大級の買取業者です。
              持ち込み買取においては、「店舗の近さ」が最も重要な選定基準のため、
              全国どこにいても最寄りの店舗が見つかりやすい買取大吉は
              持ち込み買取の第一候補と言えます。
              着物だけでなく、ブランド品・貴金属・時計・骨董品など
              幅広いジャンルに対応しているため、
              着物と一緒に他の不用品も持ち込めるのが便利です。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    全国1,800店以上で最寄り店舗が見つかりやすい
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    着物以外のアイテムもまとめて持ち込み可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    査定料・キャンセル料が完全無料
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    出張買取への切り替えも可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    大手ならではの安心感と信頼性
                  </li>
                </ul>
              </div>
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">こんな人におすすめ</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    近くの店舗でサクッと売りたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    着物以外もまとめて持ち込みたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    大手の安心感を重視する方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    地方にお住まいの方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    出張買取と迷っている方（切り替え可能）
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
              ティファナは都市部を中心に店舗を展開する総合リユース業者です。
              着物からブランド品、家電、家具まで幅広い品目を取り扱っており、
              引っ越しや遺品整理の際に、着物と一緒に
              さまざまな不用品をまとめて持ち込めるのが強みです。
              店頭買取だけでなく、出張買取・宅配買取にも対応しているため、
              状況に応じて最適な方法を選べます。
              事前にWeb査定で概算を確認してから来店することもできるため、
              効率的に利用できます。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    着物以外の不用品もまとめて対応可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    Web査定で事前に概算がわかる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    出張・宅配への切り替えも柔軟
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    査定料・キャンセル料が無料
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    スタッフの接客教育が行き届いている
                  </li>
                </ul>
              </div>
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">こんな人におすすめ</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    都市部にお住まいの方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    着物と一緒に他の不用品も処分したい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    事前にWebで概算を確認したい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    引っ越しや遺品整理中の方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    他の買取方法も検討中の方
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 持ち込み買取の流れ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> 持ち込み買取の流れ
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  事前に電話・Webで来店予約（推奨）
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  予約不要の店舗もありますが、着物の査定は
                  専門の査定員が対応するため、事前に予約しておくのが確実です。
                  「着物の買取をお願いしたい」「着物が〇枚ある」と
                  伝えておくと、スムーズに対応してもらえます。
                  予約すれば待ち時間も短縮できます。
                  Webで最寄り店舗の営業時間や定休日も確認しておきましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  着物と必要書類を持って来店
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  売りたい着物と、本人確認書類（運転免許証など）を持って
                  店舗に向かいます。
                  証紙・帯・和装小物があれば一緒に持参しましょう。
                  着物は風呂敷やバッグに入れて持ち運びます。
                  大量の場合は車で来店するのがおすすめです。
                  駐車場の有無も事前に確認しておきましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  受付・査定
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  受付で着物の買取を依頼すると、
                  査定員が1点ずつ着物を確認して査定を行います。
                  素材・産地・状態・市場での需要など、
                  総合的に判断して金額が決まります。
                  査定中に疑問があれば遠慮なく質問しましょう。
                  査定にかかる時間は、着物の枚数によりますが、
                  数枚なら15〜30分程度が目安です。
                  混雑状況によっては待ち時間が発生することもあります。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  金額提示・承諾または持ち帰り
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定が完了すると、合計金額が提示されます。
                  金額に納得すれば、契約書にサインして現金を受け取ります。
                  納得できない場合は、遠慮なく断って持ち帰りましょう。
                  キャンセル料はかかりません。
                  「この着物だけ売って、残りは持ち帰る」ということも可能です。
                  他の業者にも査定を依頼して比較検討したい場合は、
                  「検討します」と伝えて一度持ち帰るのも良い方法です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 持っていく前の準備 */}
        <section id="preparation" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">6.</span> 持っていく前の準備
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            持ち込み買取でより高い査定額を得るために、
            来店前に以下の準備をしておきましょう。
            少しの手間で査定額が変わることがあります。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                証紙を探して一緒に持参する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                証紙は着物の産地や品質を証明する公的な書類です。
                証紙の有無で査定額が大きく変わることがあるため、
                必ず探して一緒に持参しましょう。
                たとう紙の中、端布と一緒、タンスの引き出しの隅などに
                保管されていることが多いです。
                購入時の領収書や保証書があれば、それも一緒に持参しましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                帯・和装小物をまとめておく
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物だけでなく、帯・帯締め・帯揚げ・草履・バッグなどの
                和装小物もまとめて持参しましょう。
                セットで売ることで査定額がアップする場合があります。
                特に着物と合わせた帯は、セットの方が再販時の価値が高くなります。
                使わない和装小物が他にもあれば、まとめて持っていくと良いでしょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                本人確認書類を準備する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                古物営業法により、買取時には本人確認が義務付けられています。
                以下のいずれかの書類を必ず持参してください。
              </p>
              <ul className="space-y-1 text-sm text-gray-600 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  運転免許証
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  パスポート
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  マイナンバーカード（通知カードは不可）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  健康保険証（住所記載のもの）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  住民基本台帳カード
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                事前にWebや電話で概算査定を聞いておく
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                店舗に行く前に、WebサイトのLINE査定や電話で
                概算の査定額を聞いておくのがおすすめです。
                着物の写真を送るだけで概算を教えてくれる業者もあります。
                概算がわかっていれば、
                実際の査定額との差を確認でき、
                交渉の材料にもなります。
                また、概算が極端に低い場合は、
                わざわざ店舗に行く手間を省けます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                複数業者の査定額を比較する準備
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                持ち込み買取で最も高い金額を得るには、
                複数業者に査定を依頼して比較することが重要です。
                1社だけの査定では適正価格かどうか判断できません。
                時間に余裕があれば2〜3社に持ち込むか、
                先に出張買取や宅配買取で他社の査定額を取っておいてから
                店舗に持ち込むと、交渉の際に有利です。
                「他社では〇〇円でした」と伝えると、
                競争してくれることがあります。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">持ち運びのコツ：</span>
              着物を持ち運ぶ際は、たとう紙に包んだまま大きめの風呂敷や
              ショッピングバッグに入れましょう。
              ビニール袋は蒸れの原因になるため避けてください。
              車で来店する場合は、トランクに平置きして
              シワがつかないよう注意しましょう。
            </p>
          </div>
        </section>

        {/* 3つの買取方法比較表 */}
        <section id="comparison" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">7.</span> 出張・宅配・持ち込みの比較表
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            3つの買取方法を比較して、あなたに最適な方法を見つけましょう。
            それぞれにメリット・デメリットがあるため、
            自分の状況に合わせて選ぶことが大切です。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">比較項目</th>
                  <th className="px-4 py-3 text-left font-medium">持ち込み買取</th>
                  <th className="px-4 py-3 text-left font-medium">出張買取</th>
                  <th className="px-4 py-3 text-left font-medium">宅配買取</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">手間</td>
                  <td className="px-4 py-3 text-gray-600">店舗まで運搬</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">少ない</td>
                  <td className="px-4 py-3 text-gray-600">梱包・発送が必要</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">現金化の速さ</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">即日</td>
                  <td className="px-4 py-3 text-gray-600">即日</td>
                  <td className="px-4 py-3 text-gray-600">数日〜1週間</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">対面</td>
                  <td className="px-4 py-3 text-gray-600">あり（店舗で）</td>
                  <td className="px-4 py-3 text-gray-600">あり（自宅で）</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">不要</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">対応エリア</td>
                  <td className="px-4 py-3 text-gray-600">店舗周辺のみ</td>
                  <td className="px-4 py-3 text-gray-600">業者による</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">全国</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">大量対応</td>
                  <td className="px-4 py-3 text-gray-600">不向き（運搬が大変）</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">得意</td>
                  <td className="px-4 py-3 text-gray-600">梱包が大変</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">価格交渉</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">しやすい</td>
                  <td className="px-4 py-3 text-gray-600">可能</td>
                  <td className="px-4 py-3 text-gray-600">難しい</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">クーリングオフ</td>
                  <td className="px-4 py-3 text-gray-600">適用なし</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">適用あり（8日間）</td>
                  <td className="px-4 py-3 text-gray-600">適用なし</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">自宅訪問</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">なし</td>
                  <td className="px-4 py-3 text-gray-600">あり</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">なし</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <h4 className="font-bold text-[#6b4c8a] text-sm mb-2 text-center">
                持ち込み買取がおすすめの方
              </h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  少量（1〜5枚程度）の着物を売りたい
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  近くに買取店舗がある
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  今すぐ現金が欲しい
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  対面で交渉したい
                </li>
              </ul>
            </div>

            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <h4 className="font-bold text-[#6b4c8a] text-sm mb-2 text-center">
                出張買取がおすすめの方
              </h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  大量の着物がある
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  運搬が難しい（高齢など）
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  自宅で完結させたい
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  クーリングオフが欲しい
                </li>
              </ul>
            </div>

            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <h4 className="font-bold text-[#6b4c8a] text-sm mb-2 text-center">
                宅配買取がおすすめの方
              </h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  対面が苦手
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  近くに店舗がない
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  自分のペースで進めたい
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#c9a76c]">&#9656;</span>
                  忙しくて時間が取れない
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">結論：</span>
              「近くに店舗があり、少量の着物をすぐ売りたい」なら持ち込み買取。
              「大量の着物がある」「運べない」なら出張買取。
              「対面が苦手」「近くに店舗がない」なら宅配買取がおすすめです。
              迷ったら、まずは複数の方法で査定を受けて比較してみましょう。
            </p>
          </div>
        </section>

        {/* 持ち込み買取で高く売るための事前準備 */}
        <section className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            持ち込み買取で高く売るための事前準備
          </h3>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5 space-y-3">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>事前にWeb査定や電話査定で概算を聞いておく</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>着物だけでなく帯・小物もセットで持っていく（セット査定で高額になりやすい）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>証紙・箱・たとう紙があれば必ず持参する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">●</span>
                <span>複数店舗を回って相見積もりを取るのが理想</span>
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
                  Q. 持ち込み買取は予約なしでも利用できますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                業者によります。予約不要で飛び込みOKの店舗もありますが、
                予約が必要な店舗もあります。
                特に着物の査定は専門の査定員が必要なため、
                事前に電話で「着物の査定をお願いしたい」と伝えて
                予約しておくのがおすすめです。
                予約すれば待ち時間も短縮できます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 持ち込み買取にクーリングオフは適用されますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                いいえ、持ち込み買取（店頭買取）にはクーリングオフは適用されません。
                自分から店舗に行って売却する形式は、
                特定商取引法の「訪問購入」に該当しないためです。
                店舗で査定額が提示されたら、その場で慎重に判断しましょう。
                納得できない場合は断って構いません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 持ち込み買取で必要な持ち物は何ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物と一緒に、本人確認書類（運転免許証・パスポート・マイナンバーカードなど）が
                必要です。古物営業法で、買取時の本人確認が義務付けられています。
                また、証紙・帯・和装小物など着物に関連するものがあれば
                一緒に持参すると査定額がアップする可能性があります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 着物が大量にある場合、持ち込み買取は利用できますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                持ち込み買取は可能ですが、大量の着物を店舗まで運ぶのは大変です。
                車がない場合は特に困難です。
                10枚以上の着物がある場合は、出張買取の方が効率的でおすすめです。
                出張買取なら自宅で査定してもらえるため、運搬の手間がかかりません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 持ち込み買取で査定額に納得できない場合はどうすればいいですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                査定額に納得できない場合は、その場でキャンセルして構いません。
                持ち込み買取はキャンセル料がかからないのが一般的です。
                着物をそのまま持ち帰り、他の業者にも査定を依頼して
                比較検討しましょう。即決を迫る業者は避けた方が無難です。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：持ち込み買取で安心の対面取引を
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-700 font-medium">この記事のポイント：</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  持ち込み買取はその場で即現金化、対面で安心の取引
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  おすすめは買取大吉（全国1,800店）とティファナ（都市部）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  来店前に証紙・帯・小物をまとめ、本人確認書類を準備
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  大量の着物がある場合は出張買取の方が効率的
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  クーリングオフは適用されないため、慎重に判断
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              持ち込み買取は、少量の着物をすぐに現金化したい方や、
              対面で安心して取引したい方に最適な方法です。
              来店前に証紙や小物をまとめ、複数業者の査定額を比較すれば、
              より満足度の高い取引ができるでしょう。
              近くに店舗がない方は、出張買取や宅配買取も検討してみてください。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            最寄りの買取店舗を探してみましょう
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            査定料・キャンセル料は無料。<br />
            まずは信頼できる業者をランキングで比較してみましょう。
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
              href="/articles/takuhai-kaitori/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物の宅配買取おすすめ業者3選
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
