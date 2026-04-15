import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取トラブル事例5選と回避法｜押し買い・安値買い叩きに注意",
  description:
    "着物買取でよくあるトラブル事例5選（押し買い、安値買い叩き、キャンセル拒否、追加品要求、連絡つかない）と回避法を徹底解説。信頼できる業者の見分け方、クーリングオフ制度についても詳しくガイドします。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/trouble-prevention/",
  },
  openGraph: {
    title: "着物買取トラブル事例5選と回避法｜押し買い・安値買い叩きに注意",
    description:
      "着物買取でよくあるトラブル5選と回避法を解説。押し買い・安値買い叩きから身を守る方法をガイドします。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/trouble-prevention/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取トラブル事例5選と回避法｜押し買い・安値買い叩きに注意",
  description:
    "着物買取でよくあるトラブル事例5選と回避法を徹底解説。信頼できる業者の見分け方、クーリングオフ制度についても詳しくガイドします。",
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
      "https://kimono-kaitori-biyori.pages.dev/articles/trouble-prevention/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "着物買取でクーリングオフは適用されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、出張買取の場合はクーリングオフが適用されます。契約書面を受け取った日から8日以内であれば、無条件で契約を解除し、着物を取り戻すことができます。ただし、店頭買取や自分から送った宅配買取にはクーリングオフは適用されません。",
      },
    },
    {
      "@type": "Question",
      name: "押し買いとは何ですか？どう対処すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "押し買いとは、業者が突然訪問して強引に着物を安値で買い取ろうとする行為です。特定商取引法で規制されており、飛び込み訪問での買取は違法です。対処法は、きっぱり断ること。帰らない場合は警察に連絡しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "査定額に納得できない場合、断っても大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、査定額に納得できない場合はいつでも断ることができます。信頼できる買取業者であれば、キャンセル料は発生しません。査定を断ることに罪悪感を感じる必要はありません。複数業者に査定を依頼し、最も高い金額を提示した業者に売るのは正当な権利です。",
      },
    },
    {
      "@type": "Question",
      name: "悪質な買取業者を見分けるポイントは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "悪質な業者の特徴は、飛び込み訪問をする、査定額の根拠を説明しない、強引に契約を迫る、他の品物も見せるよう執拗に求める、会社情報が不透明などです。古物商許可番号の確認、口コミの調査、キャンセル料の有無を事前にチェックしましょう。",
      },
    },
    {
      "@type": "Question",
      name: "着物買取でトラブルに遭った場合、どこに相談すればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "消費者ホットライン（188）に電話すると、最寄りの消費生活センターにつながります。また、国民生活センターのウェブサイトでも相談を受け付けています。クーリングオフの手続き方法なども教えてもらえます。",
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
      name: "トラブル回避",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/trouble-prevention/",
    },
  ],
};

export default function TroublePreventionPage() {
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
          { label: "トラブル回避" },
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
            着物買取トラブル事例5選と回避法
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">押し買い・安値買い叩き</span>
            に注意
          </h1>
          <p className="text-gray-600 leading-relaxed">
            着物買取は便利なサービスですが、残念ながらトラブルも報告されています。
            「押し買い被害に遭った」「査定額が異常に安かった」「キャンセルできないと言われた」
            など、国民生活センターにも相談が寄せられています。
            本記事では、着物買取でよくあるトラブル5選とその回避法、
            信頼できる業者の見分け方、そしてクーリングオフ制度について徹底解説します。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#trouble1" className="hover:underline">
                1. トラブル事例1：押し買い（突然訪問して強引に買取）
              </a>
            </li>
            <li>
              <a href="#trouble2" className="hover:underline">
                2. トラブル事例2：安値買い叩き
              </a>
            </li>
            <li>
              <a href="#trouble3" className="hover:underline">
                3. トラブル事例3：キャンセル拒否
              </a>
            </li>
            <li>
              <a href="#trouble4" className="hover:underline">
                4. トラブル事例4：追加品の執拗な要求
              </a>
            </li>
            <li>
              <a href="#trouble5" className="hover:underline">
                5. トラブル事例5：連絡がつかなくなる
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:underline">
                6. 信頼できる業者の見分け方
              </a>
            </li>
            <li>
              <a href="#cooling-off" className="hover:underline">
                7. クーリングオフ制度について
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* トラブル1 */}
        <section id="trouble1" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            トラブル事例1：押し買い（突然訪問して強引に買取）
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-red-800 text-sm mb-3">事例の内容</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              「不用品を買い取ります」と突然自宅を訪問してきた業者が、
              「着物はありませんか？」と聞いてきた。断ったが、
              「見るだけでいい」と言って上がり込み、タンスの中を物色。
              結局、数十万円の価値がある着物を数千円で持っていかれた。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              このような「押し買い」は特定商取引法で禁止されている行為です。
              消費者が事前に依頼していない訪問での買取勧誘は違法です。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 text-sm mb-3">回避法</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                飛び込み訪問の業者には絶対に応じない。インターホン越しにきっぱり断る
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                「帰ってください」と明確に伝える。帰らない場合は不退去罪に該当するため警察に通報
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                自分から依頼した業者以外には絶対に着物を見せない
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                万が一売ってしまった場合は、8日以内にクーリングオフで取り戻せる
              </li>
            </ul>
          </div>
        </section>

        {/* トラブル2 */}
        <section id="trouble2" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            トラブル事例2：安値買い叩き
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-red-800 text-sm mb-3">事例の内容</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              出張買取を依頼したところ、査定員が「この着物は古いので価値がない」
              「シミがあるので値段がつかない」と言い、10枚の着物をまとめて3,000円と査定された。
              後日、別の業者に見てもらったところ、中に大島紬が含まれており、
              1枚だけで50,000円の査定額がついた。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物の価値がわからない消費者の弱みにつけ込み、
              不当に安い価格で買い取ろうとする悪質な手口です。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 text-sm mb-3">回避法</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                必ず複数業者（最低2〜3社）に見積もりを取って比較する
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                1点ずつの査定額と、その根拠（素材、産地、状態など）の説明を求める
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                「まとめて○○円」という提示は要注意。内訳を必ず確認する
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                即決せず「検討します」と言って一度持ち帰る勇気を持つ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                着物専門の買取業者を選ぶ。総合リサイクル店は着物の知識が不足している場合が多い
              </li>
            </ul>
          </div>
        </section>

        {/* トラブル3 */}
        <section id="trouble3" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            トラブル事例3：キャンセル拒否
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-red-800 text-sm mb-3">事例の内容</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              出張買取で査定を受けた後、「やっぱり売りたくない」と伝えたところ、
              「査定のために出張費がかかっている」「今日中に決めてもらわないと困る」
              と言われ、断りにくい雰囲気を作られた。
              結局、納得していない金額で売ってしまった。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              信頼できる業者であれば、査定料・出張料・キャンセル料はすべて無料です。
              キャンセルできないと言う業者は信用できません。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 text-sm mb-3">回避法</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                事前に「査定料・出張料・キャンセル料すべて無料」の業者を選ぶ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                電話やWebの申し込み時に「キャンセル可能ですか？」と確認しておく
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                強引に契約を迫られたら「消費者センターに相談します」と伝える
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                売ってしまった場合でも、出張買取なら8日以内はクーリングオフが可能
              </li>
            </ul>
          </div>
        </section>

        {/* トラブル4 */}
        <section id="trouble4" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            トラブル事例4：追加品の執拗な要求
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-red-800 text-sm mb-3">事例の内容</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              着物の出張買取を依頼したが、査定員が「他にも何かありませんか？」
              「貴金属やブランド品も見せてください」と執拗に追加品を求めてきた。
              着物の査定そっちのけで、貴金属を安値で持っていこうとした。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物買取を口実にして、実は貴金属やブランド品を安く買い叩くことが目的の
              悪質な業者も存在します。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 text-sm mb-3">回避法</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                「着物以外は売る予定がない」ときっぱり伝える
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                査定に出す着物はあらかじめ決めておき、それ以外は見せない
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                着物専門の買取業者を選ぶ。総合買取業者は追加品を求めがち
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                しつこい場合は「帰ってください」と明確に伝える
              </li>
            </ul>
          </div>
        </section>

        {/* トラブル5 */}
        <section id="trouble5" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            トラブル事例5：連絡がつかなくなる
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-red-800 text-sm mb-3">事例の内容</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              宅配買取で着物を送ったが、査定結果の連絡が来ない。
              問い合わせの電話をしても出ない、メールを送っても返信がない。
              着物を送ってから1ヶ月以上経っても何の連絡もなく、
              着物が戻ってくるのかも不明。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              宅配買取は手軽ですが、業者選びを間違えると
              大切な着物を失うリスクがあります。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-800 text-sm mb-3">回避法</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                実績のある大手の買取業者を選ぶ。会社情報（所在地、代表者、古物商許可番号）を確認
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                宅配買取より出張買取を優先的に利用する（対面の方がトラブルが少ない）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                送る前に査定の所要日数を確認し、期限を超えたらすぐに連絡する
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                追跡番号付きの配送方法で送り、着荷を確認する
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">&#10003;</span>
                口コミ・評判を事前にチェックし、「連絡が遅い」という評価がある業者は避ける
              </li>
            </ul>
          </div>
        </section>

        {/* 信頼できる業者の見分け方 */}
        <section id="how-to-choose" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            信頼できる業者の見分け方
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            トラブルを避けるためには、信頼できる業者を選ぶことが最も重要です。
            以下のチェックリストで業者を確認しましょう。
          </p>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">
              信頼できる業者チェックリスト
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">古物商許可番号を公表している</p>
                  <p className="text-xs text-gray-600 mt-1">
                    古物営業法に基づく許可を受けている業者か確認しましょう。
                    公式サイトに古物商許可番号が記載されているのが基本です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">会社情報が明確</p>
                  <p className="text-xs text-gray-600 mt-1">
                    会社名、所在地、代表者名、電話番号が公式サイトに明記されていること。
                    所在地がバーチャルオフィスでないかも確認しましょう。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">手数料がすべて無料</p>
                  <p className="text-xs text-gray-600 mt-1">
                    査定料、出張料、キャンセル料がすべて無料であること。
                    これが基本であり、手数料を請求する業者は避けましょう。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">クーリングオフに対応している</p>
                  <p className="text-xs text-gray-600 mt-1">
                    出張買取でのクーリングオフは法律で義務付けられています。
                    これを公式サイトで明言している業者は法令遵守の姿勢があります。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">口コミ・評判が良い</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Google口コミ、SNS、比較サイトなどで評判を確認しましょう。
                    悪い口コミが極端に多い業者は避けた方が無難です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-[#6b4c8a] text-white text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5">6</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">着物専門の査定員が在籍</p>
                  <p className="text-xs text-gray-600 mt-1">
                    着物の価値を正しく判断できる専門査定員が在籍しているか確認しましょう。
                    総合買取の場合、着物に詳しくないスタッフが査定することがあります。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#6b4c8a] text-white rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">
              安心して利用できる着物買取業者を選ぼう
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-purple-100">
              当サイトでは、上記のチェックリストをクリアした信頼できる
              着物買取業者をランキング形式で紹介しています。
              トラブルを避けて安心して着物を売りたい方は、ぜひ参考にしてください。
            </p>
            <Link
              href="/ranking/"
              className="inline-block bg-[#c9a76c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#b8965b] transition-colors text-sm"
            >
              おすすめ着物買取業者ランキングを見る
            </Link>
          </div>
        </section>

        {/* クーリングオフ */}
        <section id="cooling-off" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            クーリングオフ制度について
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            クーリングオフとは、一定期間内であれば無条件で契約を解除できる制度です。
            着物買取においても、一定の条件下でクーリングオフが適用されます。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-medium">買取方法</th>
                  <th className="px-4 py-3 text-left font-medium">クーリングオフ</th>
                  <th className="px-4 py-3 text-left font-medium">期間</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">出張買取</td>
                  <td className="px-4 py-3 text-green-600 font-medium">適用される</td>
                  <td className="px-4 py-3 text-gray-600">契約書面受取日から8日以内</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">店頭買取</td>
                  <td className="px-4 py-3 text-red-600 font-medium">適用されない</td>
                  <td className="px-4 py-3 text-gray-600">-</td>
                </tr>
                <tr className="border-b border-[#e8ddd0]">
                  <td className="px-4 py-3 font-medium text-gray-900 bg-[#faf8f5]">宅配買取（自発的に送付）</td>
                  <td className="px-4 py-3 text-red-600 font-medium">適用されない</td>
                  <td className="px-4 py-3 text-gray-600">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              クーリングオフの手続き方法
            </h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">1.</span>
                <span>
                  契約書面を受け取った日から8日以内に、書面（はがき等）で
                  クーリングオフの意思を通知します。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">2.</span>
                <span>
                  書面には「契約を解除する旨」「契約日」「業者名」「品物」
                  「返金を求める金額」を記載します。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">3.</span>
                <span>
                  特定記録郵便や簡易書留で送り、発送の記録を残しましょう。
                  コピーも手元に保管してください。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b4c8a] font-bold">4.</span>
                <span>
                  業者は着物を返還し、受け取った代金を返金する義務があります。
                  送料は業者負担です。
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">相談先：</span>
              トラブルに遭った場合は、消費者ホットライン「188（いやや）」に電話しましょう。
              最寄りの消費生活センターにつながり、クーリングオフの手続き方法や
              対処法についてアドバイスを受けられます。
            </p>
          </div>
        </section>

        {/* クーリングオフの具体的な手順 */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-[#c9a76c]">
            クーリングオフの具体的な手順
          </h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              出張買取は特定商取引法の「訪問購入」に該当するため、<span className="font-medium text-gray-900">クーリングオフが適用されます（8日間）</span>。
              以下の手順で手続きを行いましょう。
            </p>
            <ol className="space-y-3">
              <li className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
                <p className="text-sm text-gray-600">
                  書面（はがき）に<span className="font-medium text-gray-900">契約解除の旨</span>を記載する
                </p>
              </li>
              <li className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
                <p className="text-sm text-gray-600">
                  契約書に記載の<span className="font-medium text-gray-900">業者住所に送付</span>する
                </p>
              </li>
              <li className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">簡易書留</span>で送る（証拠を残すため）
                </p>
              </li>
              <li className="flex items-start gap-3 bg-white border border-[#e8ddd0] rounded-lg p-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
                <p className="text-sm text-gray-600">
                  はがきの<span className="font-medium text-gray-900">コピーを取っておく</span>
                </p>
              </li>
            </ol>
            <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold">注意：</span>
                店頭持ち込みや宅配買取はクーリングオフの対象外です。
                業者がクーリングオフを拒否した場合は、消費生活センター（<span className="font-medium">188</span>）に相談しましょう。
              </p>
            </div>
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
                  Q. 着物買取でクーリングオフは適用されますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、出張買取の場合はクーリングオフが適用されます。
                契約書面を受け取った日から8日以内であれば、
                無条件で契約を解除し、着物を取り戻すことができます。
                ただし、店頭買取や自分から送った宅配買取には
                クーリングオフは適用されません。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 押し買いとは何ですか？どう対処すべきですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                押し買いとは、業者が突然訪問して強引に着物を安値で買い取ろうとする行為です。
                特定商取引法で規制されており、飛び込み訪問での買取は違法です。
                対処法は、きっぱり断ること。「帰ってください」と明確に伝えましょう。
                帰らない場合は不退去罪に該当するため、警察に連絡してください。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 査定額に納得できない場合、断っても大丈夫ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、査定額に納得できない場合はいつでも断ることができます。
                信頼できる買取業者であれば、キャンセル料は発生しません。
                査定を断ることに罪悪感を感じる必要はありません。
                複数業者に査定を依頼し、最も高い金額を提示した業者に売るのは
                消費者の正当な権利です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 悪質な買取業者を見分けるポイントは何ですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                悪質な業者の特徴は、飛び込み訪問をする、査定額の根拠を説明しない、
                強引に契約を迫る、他の品物も見せるよう執拗に求める、
                会社情報が不透明などです。古物商許可番号の確認、口コミの調査、
                キャンセル料の有無を事前にチェックしましょう。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 着物買取でトラブルに遭った場合、どこに相談すればいいですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                消費者ホットライン（188）に電話すると、最寄りの消費生活センターにつながります。
                また、国民生活センターのウェブサイトでも相談を受け付けています。
                クーリングオフの手続き方法や、業者との交渉のアドバイスなども
                教えてもらえますので、一人で悩まずに相談しましょう。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：トラブルを防いで安心の着物買取を
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              着物買取のトラブルは、業者選びの段階で大部分を防ぐことができます。
              古物商許可番号の確認、口コミのチェック、手数料の確認など、
              基本的なポイントを押さえて信頼できる業者を選びましょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              万が一トラブルに遭ってしまった場合は、クーリングオフ制度を活用したり、
              消費者ホットライン（188）に相談したりして、適切に対処してください。
              泣き寝入りする必要はありません。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              「複数業者に見積もりを取る」「即決しない」「飛び込み訪問は断る」。
              この3つを守るだけでも、トラブルの大半は防げます。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            安心して利用できる着物買取業者を選ぼう
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            当サイトでは、信頼性の高い着物買取業者を厳選して紹介しています。<br />
            トラブルなく着物を売りたい方は、ぜひランキングを参考にしてください。
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
              href="/articles/sell-high-tips/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物を高く売るための7つのコツ
              </p>
            </Link>
            <Link
              href="/articles/appraisal-criteria/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物買取の査定基準を徹底解説
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
