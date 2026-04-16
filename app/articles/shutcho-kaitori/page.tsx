import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の出張買取おすすめ業者3選｜自宅で完結する売り方ガイド",
  description:
    "着物の出張買取おすすめ業者3選を徹底比較。自宅にいながら査定から現金化まで完結する出張買取のメリット・デメリット、利用の流れ5ステップ、トラブル回避法（クーリングオフ8日間）まで詳しく解説します。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/shutcho-kaitori/",
  },
  openGraph: {
    title: "着物の出張買取おすすめ業者3選｜自宅で完結する売り方ガイド",
    description:
      "着物の出張買取おすすめ3社を比較。自宅で完結する売り方を徹底ガイドします。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/shutcho-kaitori/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の出張買取おすすめ業者3選｜自宅で完結する売り方ガイド",
  description:
    "着物の出張買取おすすめ業者3選を徹底比較。自宅にいながら査定から現金化まで完結する出張買取のメリット・デメリット、利用の流れ、トラブル回避法まで詳しく解説します。",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimono-kaitori-biyori.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://kimono-kaitori-biyori.pages.dev/articles/shutcho-kaitori/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "出張買取は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、本記事で紹介している業者はすべて出張料・査定料・キャンセル料が無料です。査定額に納得できない場合もキャンセル料は発生しません。ただし、一部の業者では地域によって出張対応外となる場合がありますので、事前に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "出張買取で女性の査定員を指名できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くの大手買取業者では女性査定員の指名が可能です。特にウリエルでは女性査定員の在籍を公表しており、予約時に「女性の査定員を希望」と伝えれば対応してもらえます。一人暮らしの女性やご高齢の方でも安心して利用できます。",
      },
    },
    {
      "@type": "Question",
      name: "出張買取にクーリングオフは適用されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、出張買取は特定商取引法の「訪問購入」に該当するため、クーリングオフが適用されます。契約書面を受け取った日から8日以内であれば、無条件で契約を解除し、着物を返してもらうことができます。業者はクーリングオフ期間中、着物を第三者に転売してはならない義務があります。",
      },
    },
    {
      "@type": "Question",
      name: "出張買取は何点から対応してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "多くの業者では1点から出張買取に対応しています。ただし、業者によっては少量の場合は宅配買取を案内されることもあります。大量の着物がある場合は出張買取が特に便利で、一度にまとめて査定してもらえるため効率的です。",
      },
    },
    {
      "@type": "Question",
      name: "出張買取の査定時間はどのくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物の点数にもよりますが、一般的に10点程度であれば30分〜1時間程度です。50点以上など大量の場合は2〜3時間かかることもあります。事前に点数を伝えておくと、査定員がスケジュールを調整してくれます。",
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
      item: "https://kimono-kaitori-biyori.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "お役立ち情報",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "出張買取おすすめ",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/shutcho-kaitori/",
    },
  ],
};

export default function ShutchoKaitoriPage() {
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
          { label: "出張買取おすすめ" },
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
            着物の出張買取
            <span className="text-[#6b4c8a]">おすすめ業者3選</span>
            <br className="md:hidden" />
            自宅で完結する売り方ガイド
          </h1>
          <p className="text-gray-600 leading-relaxed">
            「着物を売りたいけど、重い着物を店舗まで持っていくのは大変...」
            そんな悩みを解決するのが出張買取です。
            自宅にいながら査定から現金化までが完結するため、
            大量の着物がある方やご高齢の方にも人気の買取方法です。
            本記事では、出張買取の仕組みからおすすめ業者3社の詳細比較、
            トラブル回避のポイントまで徹底的に解説します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#what" className="hover:underline">
                1. 出張買取とは？仕組みをわかりやすく解説
              </a>
            </li>
            <li>
              <a href="#merit" className="hover:underline">
                2. 出張買取のメリット5つ
              </a>
            </li>
            <li>
              <a href="#demerit" className="hover:underline">
                3. 出張買取のデメリット3つ
              </a>
            </li>
            <li>
              <a href="#recommend" className="hover:underline">
                4. 出張買取おすすめ業者3選【比較表あり】
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. 出張買取の流れ5ステップ
              </a>
            </li>
            <li>
              <a href="#trouble" className="hover:underline">
                6. トラブル回避法
              </a>
            </li>
            <li>
              <a href="#suitable" className="hover:underline">
                7. 出張買取が向いている人・向いていない人
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* 出張買取とは */}
        <section id="what" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">1.</span> 出張買取とは？仕組みをわかりやすく解説
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <p className="text-[#6b4c8a] font-bold text-sm mb-2">
              出張買取＝査定員が自宅に来てくれる買取方法
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              出張買取とは、買取業者の査定員が依頼者の自宅まで出向き、
              その場で着物を査定・買取する方法です。
              電話やWebで申し込むだけで、自宅にいながら買取が完了します。
              重い着物を運ぶ必要がなく、査定額に納得すればその場で現金を受け取れるのが
              大きな特徴です。
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">出張買取の基本的な仕組み</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  買取業者に電話やWebフォームから出張査定を申し込む
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  指定日時に査定員が自宅を訪問する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  目の前で着物を1点ずつ査定し、金額を提示する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  金額に納得すればその場で契約・現金受け取り
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  納得できなければ無料でキャンセルが可能
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2">出張買取と他の買取方法の違い</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物の買取方法には「出張買取」「宅配買取」「持ち込み買取（店頭買取）」の
                3種類があります。出張買取は、店舗まで足を運ぶ必要がなく、
                また宅配買取のように梱包・発送の手間もかからないため、
                最も手間が少ない買取方法と言えます。
                特に大量の着物を売りたい場合や、高齢の方・体の不自由な方には
                最適な買取方法です。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              出張買取は「訪問購入」に該当するため、
              特定商取引法によりクーリングオフ（8日間）が適用されます。
              法律で消費者が守られているため、安心して利用できる買取方法です。
            </p>
          </div>
        </section>

        {/* メリット */}
        <section id="merit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">2.</span> 出張買取のメリット5つ
          </h2>

          <div className="space-y-4">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット1</span>
                自宅で完結する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取の最大のメリットは、自宅から一歩も出ずに買取が完了する点です。
                重い着物を運ぶ必要がなく、査定員がすべて対応してくれます。
                着物は1枚でも意外と重量があり、特に大量にある場合は
                自分で運搬するのは現実的ではありません。
                出張買取なら、着物をタンスから出してそのまま査定してもらえます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット2</span>
                大量の着物もまとめて売れる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                遺品整理や実家の片付けなどで大量の着物が見つかるケースは少なくありません。
                数十点から100点以上の着物があっても、出張買取なら一度に査定してもらえます。
                宅配買取では大量の着物を梱包・発送する手間がかかりますが、
                出張買取ではそうした手間が一切不要です。
                査定員がまとめて持ち帰ってくれるため、大量の着物を一気に片付けられます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット3</span>
                その場で即現金化できる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取では、査定額に納得すればその場で現金を受け取れます。
                宅配買取の場合は査定から入金まで数日〜1週間かかることがありますが、
                出張買取なら即日現金化が可能です。
                急いでお金が必要な場合や、すぐに処分を終わらせたい場合に最適です。
                業者によっては銀行振込にも対応しています。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット4</span>
                目の前で査定が見られる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取では、査定員が目の前で1点ずつ着物を確認しながら査定を行います。
                「なぜこの金額になるのか」を直接質問できるため、
                納得感のある取引ができます。
                宅配買取のように「裏で適当に査定されているのではないか」という
                不安がありません。査定のプロセスが透明で安心です。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-[#c9a76c] mr-2">メリット5</span>
                出張料・査定料が無料
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                大手の買取業者であれば、出張料・査定料・キャンセル料はすべて無料です。
                査定額に納得できなければ無料でキャンセルできるため、
                「とりあえず査定だけ」という気軽な利用も可能です。
                複数の業者に出張査定を依頼して、金額を比較するのもおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* デメリット */}
        <section id="demerit" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">3.</span> 出張買取のデメリット3つ
          </h2>

          <div className="space-y-4">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット1</span>
                対面でのやり取りが必要
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取では査定員と対面でやり取りする必要があります。
                「知らない人を自宅に上げることに抵抗がある」
                「断るのが苦手で、査定額に納得できなくても承諾してしまいそう」
                という方にはハードルが高い場合があります。
                ただし、大手業者は接客マナーの教育を徹底しており、
                強引な買取はしないよう管理されています。
                また、女性査定員を指名できる業者もありますので、
                不安な方は事前に確認しましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット2</span>
                対応エリアに制限がある
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取は全国対応の業者が多いものの、
                離島や一部の地方エリアでは対応していない場合があります。
                また、業者によっては出張対応エリアが限られており、
                地方では選べる業者が少なくなることもあります。
                申し込み前に自分のエリアが対応範囲内かを確認しましょう。
                対応外の場合は、宅配買取を検討するのがおすすめです。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                <span className="text-red-500 mr-2">デメリット3</span>
                日程調整が必要
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取は、業者の査定員と日程を調整する必要があります。
                人気の業者や繁忙期には、希望の日時に予約が取れないこともあります。
                平日は比較的予約が取りやすい傾向がありますが、
                土日祝日は混み合うことが多いです。
                早めに予約を入れるか、複数の日程候補を用意しておくとスムーズです。
                宅配買取であれば、自分の好きなタイミングで発送できるため、
                日程調整が不要です。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4 mt-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">まとめ：</span>
              デメリットはあるものの、出張料・査定料が無料でキャンセルも自由な業者を選べば、
              リスクはほとんどありません。
              「まずは試してみる」という気持ちで査定を依頼してみましょう。
            </p>
          </div>
        </section>

        {/* おすすめ業者3選 */}
        <section id="recommend" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">4.</span> 出張買取おすすめ業者3選【比較表あり】
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            出張買取に対応している着物買取業者の中から、
            実績・対応エリア・サービス内容を総合的に評価し、
            特におすすめの3社を厳選しました。
            いずれも出張料・査定料・キャンセル料が無料で、安心して利用できる業者です。
          </p>

          {/* 比較表 */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">業者名</th>
                  <th className="px-4 py-3 text-left font-medium">対応エリア</th>
                  <th className="px-4 py-3 text-left font-medium">出張料</th>
                  <th className="px-4 py-3 text-left font-medium">現金化</th>
                  <th className="px-4 py-3 text-left font-medium">女性査定員</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ウリエル</td>
                  <td className="px-4 py-3 text-gray-600">全国</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">即日現金</td>
                  <td className="px-4 py-3 text-gray-600">指名可能</td>
                  <td className="px-4 py-3 text-gray-600">出張買取に特化</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">買取大吉</td>
                  <td className="px-4 py-3 text-gray-600">全国（1,800店以上）</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">即日現金</td>
                  <td className="px-4 py-3 text-gray-600">要相談</td>
                  <td className="px-4 py-3 text-gray-600">業界最多の店舗数</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">ティファナ</td>
                  <td className="px-4 py-3 text-gray-600">関東・関西中心</td>
                  <td className="px-4 py-3 text-gray-600">無料</td>
                  <td className="px-4 py-3 text-gray-600">即日現金</td>
                  <td className="px-4 py-3 text-gray-600">要相談</td>
                  <td className="px-4 py-3 text-gray-600">総合リユース対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ウリエル */}
          <div className="border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ1
              </span>
              <h3 className="text-lg font-bold text-gray-900">ウリエル</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ウリエルは出張買取に特化した買取業者で、
              全国どこでも出張料無料で対応しています。
              着物の買取実績が豊富で、専門の査定員が丁寧に1点ずつ査定してくれます。
              女性査定員の指名が可能な点も、一人暮らしの女性やご高齢の方に
              安心材料となっています。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    出張買取に特化した豊富な実績
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    女性査定員の指名が可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    着物以外の和装小物もまとめて査定OK
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    査定額の根拠をしっかり説明してくれる
                  </li>
                </ul>
              </div>
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">こんな人におすすめ</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    出張買取を初めて利用する方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    女性の査定員に来てほしい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    査定額の説明をきちんと聞きたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    着物と和装小物をまとめて売りたい方
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 買取大吉 */}
          <div className="border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ2
              </span>
              <h3 className="text-lg font-bold text-gray-900">買取大吉</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              買取大吉は全国に1,800店舗以上を展開する大手買取業者です。
              店舗数が業界最多のため、出張買取だけでなく店頭買取にも対応でき、
              地方にお住まいの方でもアクセスしやすいのが強みです。
              着物に限らず、ブランド品・貴金属・時計など幅広いジャンルを取り扱っており、
              着物と一緒に他のアイテムも査定してもらえます。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    全国1,800店舗以上の圧倒的な店舗網
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    着物以外のアイテムもまとめて査定可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    出張・店頭・宅配の3つの方法に対応
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
                    地方にお住まいの方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    着物以外も一緒に売りたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    大手の安心感を重視する方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    店頭買取も検討している方
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ティファナ */}
          <div className="border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
                おすすめ3
              </span>
              <h3 className="text-lg font-bold text-gray-900">ティファナ</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ティファナは総合リユースに対応する買取業者で、
              着物からブランド品、家電、家具まで幅広く取り扱っています。
              特に遺品整理や引っ越しに伴う大量買取に強く、
              着物だけでなく自宅にある不用品をまとめて買い取ってもらえる点が魅力です。
              関東・関西を中心に出張買取を展開しています。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">強み</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    着物以外の不用品もまとめて対応
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    遺品整理・引っ越しの大量買取に強い
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    Web査定で事前に概算がわかる
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                    出張・宅配・店頭の全方法に対応
                  </li>
                </ul>
              </div>
              <div className="bg-[#faf8f5] rounded-lg p-4">
                <h4 className="font-bold text-gray-900 text-xs mb-2">こんな人におすすめ</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    着物以外の不用品もまとめて処分したい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    遺品整理を検討中の方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    引っ越し前に一気に片付けたい方
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    事前に概算を知りたい方
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 出張買取の流れ5ステップ */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">5.</span> 出張買取の流れ5ステップ
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  電話・Webで申し込み
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  まずは買取業者の公式サイトまたは電話で出張買取を申し込みます。
                  この時、着物の種類や枚数、お住まいのエリアを伝えると
                  スムーズに手続きが進みます。
                  多くの業者は24時間Webで受付しており、
                  電話が苦手な方はフォームから申し込みできます。
                  希望の訪問日時を複数候補出すと予約が取りやすくなります。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  訪問日時の確定
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  業者から連絡があり、訪問日時を確定します。
                  最短で翌日対応の業者もありますが、
                  通常は3日〜1週間程度の余裕を持って予約するのがおすすめです。
                  女性査定員を希望する場合は、この段階で必ず伝えましょう。
                  訪問当日に本人確認書類（運転免許証など）が必要になるため、
                  事前に準備しておきましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  査定員が訪問・査定
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  指定日時に査定員が自宅を訪問します。
                  着物を1点ずつ確認し、素材・産地・状態・市場価値などを
                  総合的に判断して査定額を算出します。
                  この時、証紙や購入時の領収書があれば必ず提示しましょう。
                  査定中に疑問があれば遠慮なく質問してください。
                  良い業者であれば、査定額の根拠をきちんと説明してくれます。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  金額提示・契約
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  すべての着物の査定が終わると、合計金額が提示されます。
                  金額に納得できれば、契約書にサインして取引成立です。
                  納得できない場合は、遠慮なくキャンセルして構いません。
                  「一部だけ売って、残りは返してもらう」ということも可能です。
                  契約時には法律で定められた書面の交付を受けます。
                  この書面はクーリングオフの際に必要になるため、
                  必ず保管しておきましょう。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border border-[#e8ddd0] rounded-lg p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  現金受け取り・完了
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  契約成立後、その場で現金を受け取ります。
                  高額の場合は後日銀行振込になることもありますが、
                  通常は即日現金払いが基本です。
                  査定員が着物を持ち帰り、取引は完了です。
                  なお、クーリングオフ期間（8日間）は、
                  気が変わった場合に無条件で契約を解除できますので、
                  その期間中に再検討しても問題ありません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* トラブル回避法 */}
        <section id="trouble" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">6.</span> トラブル回避法
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            出張買取は便利な買取方法ですが、一部の悪質業者によるトラブルも報告されています。
            以下のポイントを押さえておけば、安全に出張買取を利用できます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                クーリングオフ制度を理解しておく
              </h3>
              <div className="bg-[#faf8f5] rounded-lg p-4 mb-3">
                <p className="text-[#6b4c8a] font-bold text-xs mb-1">
                  クーリングオフの基本ルール
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    出張買取は「訪問購入」に該当し、クーリングオフが適用される
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    契約書面を受け取った日から8日以内に申し出る
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    理由を問わず無条件で契約解除が可能
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    業者は8日間、着物を第三者に転売してはならない
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a76c]">&#9656;</span>
                    書面での通知（はがき・内容証明郵便）が確実
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                クーリングオフは消費者を守るための法律上の権利です。
                「クーリングオフはできません」と言う業者は違法ですので、
                絶対に取引しないようにしましょう。
                契約時に交付される書面は必ず保管してください。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                女性査定員を依頼する方法
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                一人暮らしの女性やご高齢の方が出張買取を利用する際、
                見知らぬ男性を自宅に上げることに不安を感じる場合は、
                女性査定員を指名しましょう。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  予約時に「女性の査定員を希望します」と伝える
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  ウリエルなど女性査定員の在籍を公表している業者を選ぶ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  対応可能か確認してから予約を確定する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  不安な場合は家族や友人に同席してもらう
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                押し買い・強引な買取に注意
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                残念ながら、一部の悪質業者による「押し買い」の被害が報告されています。
                以下のような行為があった場合は、即座に取引を中止してください。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  予約なしの突然の訪問
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  「今日中に決めないと値段が下がる」と急かす
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  着物以外のものも見せるよう執拗に要求する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  キャンセルを申し出ても帰らない
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#9656;</span>
                  契約書面を交付しない
                </li>
              </ul>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                トラブルに遭った場合の相談先
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                万が一トラブルに遭った場合は、以下の窓口に相談しましょう。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  消費者ホットライン：188（いやや）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  最寄りの消費生活センター
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  警察相談専用電話：#9110
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">安心のコツ：</span>
              本記事で紹介している業者はいずれも古物商許可を取得した
              信頼性の高い業者です。
              悪質業者を避けるには、事前にWebサイトで会社情報や口コミを確認し、
              古物商許可番号が明記されている業者を選ぶことが重要です。
            </p>
          </div>
        </section>

        {/* 出張買取が向いている人・向いていない人 */}
        <section id="suitable" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            <span className="text-[#c9a76c]">7.</span> 出張買取が向いている人・向いていない人
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-[#6b4c8a] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] text-sm mb-4 text-center">
                出張買取が向いている人
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  大量の着物を一度に売りたい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  重い着物を運ぶのが難しい方（ご高齢の方など）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  その場で現金を受け取りたい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  目の前で査定の過程を確認したい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  遺品整理・実家の片付けで大量処分したい方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  梱包・発送の手間をかけたくない方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  着物以外の和装小物もまとめて売りたい方
                </li>
              </ul>
            </div>

            <div className="border-2 border-red-300 rounded-lg p-5">
              <h3 className="font-bold text-red-500 text-sm mb-4 text-center">
                出張買取が向いていない人
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#10007;</span>
                  自宅に人を上げたくない方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#10007;</span>
                  対面での交渉が苦手な方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#10007;</span>
                  日程調整が難しい方（多忙・不規則な生活）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#10007;</span>
                  出張対応エリア外にお住まいの方
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#10007;</span>
                  着物が1〜2枚だけの方（宅配の方が手軽な場合も）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">&#10007;</span>
                  自分のペースでじっくり検討したい方
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              出張買取が向いていない方は、宅配買取や持ち込み買取を検討しましょう。
              宅配買取なら対面不要で全国対応、持ち込み買取なら
              その場で査定結果がわかります。
              自分に合った方法を選ぶことが、満足のいく買取につながります。
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
                  <th className="px-4 py-3 text-left font-medium">出張買取</th>
                  <th className="px-4 py-3 text-left font-medium">宅配買取</th>
                  <th className="px-4 py-3 text-left font-medium">持ち込み買取</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">手間</td>
                  <td className="px-4 py-3 text-gray-600">少ない</td>
                  <td className="px-4 py-3 text-gray-600">梱包・発送が必要</td>
                  <td className="px-4 py-3 text-gray-600">店舗まで運搬</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">現金化の速さ</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">即日</td>
                  <td className="px-4 py-3 text-gray-600">数日〜1週間</td>
                  <td className="px-4 py-3 text-gray-600">即日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">大量対応</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">得意</td>
                  <td className="px-4 py-3 text-gray-600">やや不向き</td>
                  <td className="px-4 py-3 text-gray-600">不向き</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">対面</td>
                  <td className="px-4 py-3 text-gray-600">あり</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">なし</td>
                  <td className="px-4 py-3 text-gray-600">あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">対応エリア</td>
                  <td className="px-4 py-3 text-gray-600">業者による</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">全国</td>
                  <td className="px-4 py-3 text-gray-600">店舗周辺のみ</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">クーリングオフ</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">適用あり（8日間）</td>
                  <td className="px-4 py-3 text-gray-600">適用なし</td>
                  <td className="px-4 py-3 text-gray-600">適用なし</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4 mt-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              出張買取はクーリングオフが適用される唯一の買取方法です。
              「売ってから後悔したくない」という方には、
              法律で守られている出張買取が最も安心できる方法と言えます。
            </p>
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
                  Q. 出張買取は本当に無料ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、本記事で紹介している業者はすべて出張料・査定料・キャンセル料が無料です。
                査定額に納得できない場合もキャンセル料は発生しません。
                ただし、一部の業者では地域によって出張対応外となる場合がありますので、
                事前に確認しましょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 出張買取で女性の査定員を指名できますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、多くの大手買取業者では女性査定員の指名が可能です。
                特にウリエルでは女性査定員の在籍を公表しており、
                予約時に「女性の査定員を希望」と伝えれば対応してもらえます。
                一人暮らしの女性やご高齢の方でも安心して利用できます。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 出張買取にクーリングオフは適用されますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、出張買取は特定商取引法の「訪問購入」に該当するため、
                クーリングオフが適用されます。
                契約書面を受け取った日から8日以内であれば、
                無条件で契約を解除し、着物を返してもらうことができます。
                業者はクーリングオフ期間中、着物を第三者に転売してはならない義務があります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 出張買取は何点から対応してもらえますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                多くの業者では1点から出張買取に対応しています。
                ただし、業者によっては少量の場合は宅配買取を案内されることもあります。
                大量の着物がある場合は出張買取が特に便利で、
                一度にまとめて査定してもらえるため効率的です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 出張買取の査定時間はどのくらいかかりますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物の点数にもよりますが、一般的に10点程度であれば30分〜1時間程度です。
                50点以上など大量の場合は2〜3時間かかることもあります。
                事前に点数を伝えておくと、査定員がスケジュールを調整してくれます。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：出張買取で自宅にいながら着物を賢く売ろう
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-700 font-medium">この記事のポイント：</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  出張買取は自宅で完結し、大量の着物もまとめて売れる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  即日現金化が可能で、クーリングオフ（8日間）も適用される
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  おすすめはウリエル・買取大吉・ティファナの3社
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  女性査定員の指名も可能で、一人暮らしの方も安心
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                  信頼できる業者を選び、契約書面を保管することが大切
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              出張買取は、自宅にいながら着物を売れる便利な方法です。
              特に大量の着物がある方、重い着物を運ぶのが難しい方にとって、
              最も効率的な買取方法と言えます。
              まずは信頼できる業者に無料の出張査定を依頼してみましょう。
              複数業者に査定を依頼して比較することで、
              最も高い金額で売却できます。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            まずは無料の出張査定を依頼してみましょう
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            出張料・査定料・キャンセル料すべて無料。<br />
            自宅にいながら着物の価値がわかります。
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
              href="/articles/takuhai-kaitori/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物の宅配買取おすすめ業者3選
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
