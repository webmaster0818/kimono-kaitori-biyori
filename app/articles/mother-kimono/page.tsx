import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "母親の着物の整理方法｜売る？残す？後悔しない選択ガイド",
  description:
    "母親の着物をどうするか悩んでいる方へ。売る・残す・リメイクなど選択肢を徹底解説。形見分けとの兼ね合い、整理の手順、売る場合のおすすめ業者まで後悔しない選択ガイドをお届けします。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/mother-kimono/",
  },
  openGraph: {
    title: "母親の着物の整理方法｜売る？残す？後悔しない選択ガイド",
    description:
      "母親の着物をどうするか悩んでいる方へ。売る・残す・リメイクなど選択肢を徹底解説。後悔しない整理の進め方をガイドします。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/mother-kimono/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "母親の着物の整理方法｜売る？残す？後悔しない選択ガイド",
  description:
    "母親の着物をどうするか悩んでいる方へ。売る・残す・リメイクなど選択肢を徹底解説。形見分けとの兼ね合い、整理の手順、売る場合のおすすめ業者まで後悔しない選択ガイドをお届けします。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
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
      "https://kimono-kaitori-biyori.pages.dev/articles/mother-kimono/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "母親の着物は全部残すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "すべて残す必要はありません。思い出深い1〜2枚を形見として残し、残りは売却やリメイクなど有効活用するのが現実的です。保管スペースや管理の手間も考慮しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "母親の着物を売ることに罪悪感があります。どう考えればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物は着てこそ価値があるものです。タンスに眠らせたまま劣化させるよりも、買取に出して次の方に大切に着てもらう方が、着物にとっても良い選択と言えます。お母様も着物が活用されることを喜ばれるのではないでしょうか。",
      },
    },
    {
      "@type": "Question",
      name: "母親の着物の価値がわかりません。どうすれば調べられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物専門の買取業者に無料査定を依頼するのが最も確実です。証紙や落款があれば産地や作家が特定でき、価値の判断がしやすくなります。複数業者に査定を依頼して比較するのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "着物をリメイクするにはどんな方法がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "バッグ、日傘、クッションカバー、テーブルランナー、額装など多様なリメイク方法があります。専門のリメイク業者に依頼するほか、ハンドメイドが得意な方なら自分で小物に仕立て直すことも可能です。",
      },
    },
    {
      "@type": "Question",
      name: "母親の着物を売る場合、どの買取方法がおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "出張買取が最もおすすめです。大量の着物を持ち運ぶ手間がなく、自宅で査定してもらえます。着物専門の買取業者であれば、適正な価格で査定してくれるので安心です。",
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
      name: "母親の着物の整理",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/mother-kimono/",
    },
  ],
};

export default function MotherKimonoPage() {
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
          { label: "母親の着物の整理" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* ヒーローセクション */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">
              お悩み解決
            </span>
            <time dateTime="2026-04-15" className="text-xs text-gray-500">
              2026年4月15日
            </time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            母親の着物の整理方法
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">売る？残す？後悔しない</span>
            選択ガイド
          </h1>
          <p className="text-gray-600 leading-relaxed">
            「母が遺した着物、どうしよう...」「実家の片づけで大量の着物が出てきた」。
            こうした悩みを抱える方は非常に多いです。母親の着物には思い出が詰まっているだけに、
            安易に処分することに抵抗を感じるのは自然なこと。本記事では、残すべき着物と売るべき着物の判断基準、
            整理の具体的な手順、形見分けとの兼ね合い、そして売る場合のおすすめ業者まで、
            後悔しない選択をするためのガイドを徹底解説します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#why-difficult" className="hover:underline">
                1. 母親の着物の整理が難しい理由
              </a>
            </li>
            <li>
              <a href="#keep-cases" className="hover:underline">
                2. 着物を残すべきケース
              </a>
            </li>
            <li>
              <a href="#sell-cases" className="hover:underline">
                3. 着物を売るべきケース
              </a>
            </li>
            <li>
              <a href="#steps" className="hover:underline">
                4. 整理の具体的な手順
              </a>
            </li>
            <li>
              <a href="#katamiwake" className="hover:underline">
                5. 形見分けとの兼ね合い
              </a>
            </li>
            <li>
              <a href="#sell-options" className="hover:underline">
                6. 売る場合のおすすめ業者と方法
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* セクション1: 母親の着物の整理が難しい理由 */}
        <section id="why-difficult" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            母親の着物の整理が難しい理由
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            母親の着物を整理することは、単なる「モノの片づけ」ではありません。
            着物には母親との思い出、家族の歴史、そして日本の伝統文化が詰まっています。
            だからこそ、多くの方がこの作業に心理的なハードルを感じるのです。
          </p>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              着物整理が難しいと感じる主な理由
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">1</span>
                <div>
                  <span className="font-medium">感情的な価値</span>
                  <p className="text-gray-600 mt-1">
                    母が大切にしていた着物を手放すことへの罪悪感や寂しさを感じる方は多いです。
                    特に母が亡くなった直後は、遺品を処分することに強い抵抗を感じるのは自然なことです。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">2</span>
                <div>
                  <span className="font-medium">価値がわからない</span>
                  <p className="text-gray-600 mt-1">
                    着物の種類や素材、産地を見分ける知識がないと、高価な着物を安く手放してしまうのではないかという不安があります。
                    証紙がなければなおさら判断が難しくなります。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">3</span>
                <div>
                  <span className="font-medium">量が多い</span>
                  <p className="text-gray-600 mt-1">
                    着物愛好家の母親の場合、数十枚以上の着物が残っていることも珍しくありません。
                    帯、帯締め、帯揚げ、長襦袢、草履など小物を含めると膨大な量になります。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold mt-0.5">4</span>
                <div>
                  <span className="font-medium">親族間の意見の違い</span>
                  <p className="text-gray-600 mt-1">
                    兄弟姉妹の間で「残すべき」「売るべき」と意見が分かれることがあり、
                    整理が進まない原因になることがあります。
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            しかし、放置していると着物は湿気やカビ、虫食いによって劣化していきます。
            保管場所の問題もあるため、いずれは何らかの決断が必要です。
            大切なのは「後悔しない選択」をすること。そのためには、まず着物の状態を確認し、
            残すもの・手放すものを冷静に仕分けることが重要です。
          </p>
        </section>

        {/* セクション2: 着物を残すべきケース */}
        <section id="keep-cases" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            着物を残すべきケース
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            すべての着物を残す必要はありませんが、以下のケースに該当する着物は
            残すことを検討してみてください。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</span>
                自分やお子さんが着る予定がある着物
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                お子さんの成人式、結婚式、お宮参り、七五三など、着用する機会が具体的にある着物は残しておく価値があります。
                特に振袖は購入すると数十万円するため、母親のものを仕立て直して着用すると経済的です。
                ただし、サイズが大きく異なる場合は仕立て直しに費用がかかるため、事前に見積もりを取ることをおすすめします。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</span>
                特別な思い出がある着物
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                母親の結婚式の着物、特別なお祝い事で着た着物など、家族にとって象徴的な思い出がある着物は
                1〜2枚残しておくとよいでしょう。すべてを残す必要はありませんが、最も思い入れの深い着物を
                選んで大切に保管することで、後悔のない選択ができます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</span>
                高い芸術的・文化的価値がある着物
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                人間国宝の作品、伝統工芸品に指定された産地の着物、著名な作家の手染め作品など、
                文化的な価値が高い着物は美術品としての側面もあります。売却して現金化することもできますが、
                家宝として残すという選択も十分に価値があります。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                <span className="bg-[#c9a76c] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</span>
                リメイクして活用したい着物
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物としては着ないけれど、生地が美しく状態も良い着物は、
                バッグ、日傘、クッションカバー、額装などにリメイクすることで日常的に楽しめます。
                特に正絹の着物は生地の質が高く、小物に仕立て直しても上品な風合いを保ちます。
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">ポイント：</span>
              残す着物は「具体的な用途や理由がある」ものに絞りましょう。
              「いつか着るかもしれない」という曖昧な理由で残すと、結局タンスの肥やしになり、
              保管中に劣化してしまうリスクがあります。
            </p>
          </div>
        </section>

        {/* セクション3: 着物を売るべきケース */}
        <section id="sell-cases" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            着物を売るべきケース
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            以下のケースに該当する着物は、早めに売却を検討することをおすすめします。
            着物は時間の経過とともに価値が下がるため、決断が早いほど高値がつきやすい傾向にあります。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">ケース</th>
                  <th className="px-4 py-3 text-left font-medium">理由</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    着る予定がまったくない
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    着物は着てこそ価値があります。着る機会がなければ、次の持ち主に届けてあげましょう。
                    保管しているだけで劣化は進みます。
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    保管場所に困っている
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    着物は桐たんすなど適切な環境で保管する必要があります。
                    スペースが確保できない場合、不適切な環境での保管は劣化を早めます。
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    サイズが合わない
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    身丈や裄丈が大きく異なる場合、仕立て直しに5万〜10万円程度かかります。
                    費用対効果を考えると売却が合理的なケースが多いです。
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    同じ種類が複数ある
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    訪問着が5枚、小紋が10枚など同じ種類が大量にある場合、
                    すべて残す必要はありません。特にお気に入りの1〜2枚を残して残りは売却しましょう。
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">
                    すでに劣化が始まっている
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    シミ・黄ばみが出始めている着物は、放置するとさらに悪化して買取価格が下がります。
                    まだ値がつくうちに売るのが賢明です。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">重要：</span>
              「売ること＝母を大切にしていない」ではありません。
              着物を必要としている人のもとへ届けることは、着物文化を守ることにもつながります。
              母親が大切にしていた着物が、新しい持ち主のもとで再び輝くことは素晴らしいことです。
            </p>
          </div>
        </section>

        {/* セクション4: 整理の具体的な手順 */}
        <section id="steps" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            整理の具体的な手順
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物の整理は計画的に進めることが大切です。以下の5ステップで進めると、
            感情的にならずに合理的な判断ができます。
          </p>

          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-[#6b4c8a]">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-[#6b4c8a] text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                全体量を把握する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                まずはすべての着物をたんすから出して、一覧できる状態にしましょう。
                種類ごと（振袖、訪問着、留袖、小紋、紬、帯、小物）に分けて並べると
                全体像が把握しやすくなります。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                この段階で写真を撮っておくと、後で家族と相談するときや、
                買取業者に事前見積もりを依頼するときに役立ちます。
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-[#6b4c8a]">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-[#6b4c8a] text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                状態をチェックする
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                1枚ずつ広げて、以下のポイントをチェックしましょう。
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>・シミ、黄ばみ、カビの有無</li>
                <li>・虫食い、破れの有無</li>
                <li>・生地のハリ（正絹かポリエステルか）</li>
                <li>・証紙や落款の有無</li>
                <li>・サイズ（身丈、裄丈、身幅）</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#6b4c8a]">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-[#6b4c8a] text-white rounded-full flex items-center justify-center text-xs font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                3つに仕分ける
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                着物を「残す」「売る」「処分する」の3つに仕分けます。
                迷ったものは「保留」にして、1〜2週間考える時間をおくとよいでしょう。
              </p>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded p-3 text-center">
                  <span className="block text-[#6b4c8a] font-bold text-sm mb-1">残す</span>
                  <span className="text-xs text-gray-600">思い出・着用予定あり</span>
                </div>
                <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded p-3 text-center">
                  <span className="block text-[#c9a76c] font-bold text-sm mb-1">売る</span>
                  <span className="text-xs text-gray-600">価値あり・着用予定なし</span>
                </div>
                <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded p-3 text-center">
                  <span className="block text-[#e8a0b6] font-bold text-sm mb-1">処分</span>
                  <span className="text-xs text-gray-600">劣化が進んでいるもの</span>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-[#6b4c8a]">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-[#6b4c8a] text-white rounded-full flex items-center justify-center text-xs font-bold">
                4
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                家族と相談する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                仕分けの結果を家族と共有し、意見をすり合わせましょう。
                特に兄弟姉妹がいる場合は、形見として欲しいものがないか確認することが重要です。
                後々のトラブルを防ぐためにも、この段階で全員の合意を得ておくことをおすすめします。
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-[#6b4c8a]">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-[#6b4c8a] text-white rounded-full flex items-center justify-center text-xs font-bold">
                5
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                売却・処分を実行する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                売ると決めた着物は、着物専門の買取業者に査定を依頼しましょう。
                複数の業者に見積もりを取ることで、適正な価格で売却できます。
                処分する着物は、自治体のルールに従って廃棄するか、
                古布として回収してくれるサービスを利用しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* セクション5: 形見分けとの兼ね合い */}
        <section id="katamiwake" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            形見分けとの兼ね合い
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            母親の着物は「形見」としての性格も持っています。
            形見分けと着物整理をスムーズに進めるためのポイントを解説します。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                形見分けの基本ルール
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-1">&#9656;</span>
                  形見分けは一般的に四十九日法要の後に行います。急ぐ必要はありません。
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-1">&#9656;</span>
                  目上の方に形見分けをするのは失礼にあたるとされる場合もあるので、相手の関係性を考慮しましょう。
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-1">&#9656;</span>
                  形見として渡す着物は、クリーニングしてから渡すのがマナーです。
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-1">&#9656;</span>
                  着物をもらう側にも保管スペースが必要です。事前に希望を確認しましょう。
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                形見分け後の着物整理のタイミング
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                形見分けが終わったら、残った着物の売却に進みましょう。
                着物の劣化を防ぐためにも、形見分け後はなるべく早く行動するのがおすすめです。
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                売却にためらいがある場合は、着物をリメイクして日常的に使える小物に
                仕立て直すという選択肢もあります。バッグやストール、額装にリメイクすれば、
                日常的に母の思い出を身近に感じることができます。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                親族間でトラブルを避けるために
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                着物の整理は親族間でトラブルになりやすい問題です。以下の点に注意しましょう。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-1">&#9656;</span>
                  売却する前に全員に声をかけ、欲しいものがないか確認する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-1">&#9656;</span>
                  売却した場合の代金をどうするか事前に話し合っておく
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-1">&#9656;</span>
                  できれば一堂に会して仕分け作業を行い、透明性を保つ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-1">&#9656;</span>
                  高価な着物は専門業者の査定結果を共有し、価値の認識を合わせる
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション6: 売る場合のおすすめ業者と方法 */}
        <section id="sell-options" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            売る場合のおすすめ業者と方法
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            母親の着物を売ると決めたら、どこに売るかが重要です。
            売却先によって買取価格は大きく異なるため、慎重に選びましょう。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                着物専門の買取業者（最もおすすめ）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                着物の価値を正しく判断できる専門査定員がいるため、
                適正価格で買い取ってもらえる可能性が高いです。
                出張買取に対応している業者を選べば、大量の着物を持ち運ぶ必要がありません。
              </p>
              <div className="bg-[#faf8f5] rounded p-3">
                <p className="text-xs text-gray-500 mb-1">メリット</p>
                <p className="text-sm text-gray-700">
                  専門知識による適正査定、出張買取対応、手数料無料の業者が多い
                </p>
              </div>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                リサイクルショップ
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                手軽に持ち込めますが、着物の専門知識がないスタッフが査定することが多く、
                高価な着物でも安値で買い叩かれるリスクがあります。
                カジュアルな着物や小物であれば選択肢の一つとなります。
              </p>
              <div className="bg-[#faf8f5] rounded p-3">
                <p className="text-xs text-gray-500 mb-1">注意点</p>
                <p className="text-sm text-gray-700">
                  専門査定員がいないため、価値の高い着物は低く評価される可能性が高い
                </p>
              </div>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                フリマアプリ・ネットオークション
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                自分で価格を設定できるため、相場を知っていれば高値で売れる可能性があります。
                ただし、出品作業（撮影、説明文作成、梱包、発送）に手間がかかり、
                大量の着物を処分するには不向きです。
              </p>
              <div className="bg-[#faf8f5] rounded p-3">
                <p className="text-xs text-gray-500 mb-1">注意点</p>
                <p className="text-sm text-gray-700">
                  手間がかかる、トラブル対応が必要、売れ残るリスクがある
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#6b4c8a] text-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3">
              母親の着物の整理には出張買取がおすすめ
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-purple-100">
              大量の着物を一度に査定してもらえる出張買取は、母親の着物の整理に最適です。
              自宅に来てもらえるので重い着物を持ち運ぶ必要がなく、
              査定員の説明を聞きながら1点ずつ売るかどうか判断できます。
              信頼できる着物専門の買取業者を選びましょう。
            </p>
            <Link
              href="/ranking/"
              className="inline-block bg-[#c9a76c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#b8965b] transition-colors text-sm"
            >
              おすすめ着物買取業者ランキングを見る
            </Link>
          </div>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              業者選びのポイント
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                着物専門の査定員が在籍しているか
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                出張料・査定料・キャンセル料が無料か
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                クーリングオフに対応しているか
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                口コミ・評判が良いか
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">&#10003;</span>
                複数業者に見積もりを取って比較する
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
                  Q. 母親の着物は全部残すべきですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                すべて残す必要はありません。思い出深い1〜2枚を形見として残し、
                残りは売却やリメイクなど有効活用するのが現実的です。
                保管スペースや管理の手間も考慮しましょう。
                着物は適切に保管しないとカビや虫食いで劣化してしまうため、
                管理できる量に絞ることが大切です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 母親の着物を売ることに罪悪感があります。どう考えればいいですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物は着てこそ価値があるものです。タンスに眠らせたまま劣化させるよりも、
                買取に出して次の方に大切に着てもらう方が、着物にとっても良い選択と言えます。
                お母様も着物が活用されることを喜ばれるのではないでしょうか。
                罪悪感を感じる方は、1〜2枚だけ形見として手元に残し、
                残りを売却するというバランスの取り方がおすすめです。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 母親の着物の価値がわかりません。どうすれば調べられますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物専門の買取業者に無料査定を依頼するのが最も確実です。
                証紙や落款があれば産地や作家が特定でき、価値の判断がしやすくなります。
                複数業者に査定を依頼して比較するのがおすすめです。
                また、たとう紙に記載された情報や、購入時の領収書があれば
                価値の手がかりになります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 着物をリメイクするにはどんな方法がありますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                バッグ、日傘、クッションカバー、テーブルランナー、額装など多様なリメイク方法があります。
                専門のリメイク業者に依頼するほか、ハンドメイドが得意な方なら自分で小物に仕立て直すことも可能です。
                正絹の着物は生地が美しいため、リメイク品も上品な仕上がりになります。
                費用は小物で3,000円〜、バッグなどは1万円〜が相場です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 母親の着物を売る場合、どの買取方法がおすすめですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                出張買取が最もおすすめです。大量の着物を持ち運ぶ手間がなく、自宅で査定してもらえます。
                着物専門の買取業者であれば、適正な価格で査定してくれるので安心です。
                査定料・出張料・キャンセル料が無料の業者を選び、
                複数社に見積もりを依頼して比較検討することをおすすめします。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：後悔しない着物整理のために
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              母親の着物の整理は、感情的にも実務的にも大変な作業です。
              しかし、放置していても着物は劣化するばかり。大切な着物を守るためにも、
              早めに整理を始めることが大切です。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              後悔しないためのポイントは、「残す理由が明確な着物だけを残す」こと。
              そして売ると決めた着物は、着物専門の買取業者に依頼して適正価格で売却しましょう。
              複数業者に見積もりを取ることで、納得のいく価格で手放すことができます。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              お母様が大切にしていた着物が、新しい持ち主のもとで再び輝く。
              それは着物文化を次の世代につなぐ、とても素敵な選択です。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            母親の着物、まずは無料査定から
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            着物の価値を知ることが、整理の第一歩です。<br />
            信頼できる着物買取業者に無料査定を依頼してみましょう。
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
              href="/articles/estate-kimono/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                遺品整理で着物が出てきた時の対処法
              </p>
            </Link>
            <Link
              href="/articles/old-stained-kimono/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                古い着物・シミありでも売れる？
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
