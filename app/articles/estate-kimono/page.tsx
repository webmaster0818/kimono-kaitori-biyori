import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "遺品整理で着物が出てきた時の対処法｜価値の見極め方と売り方",
  description:
    "遺品整理で大量の着物が出てきたときの対処法を徹底解説。着物の価値の見極め方、処分方法の選択肢（売る・寄付・リメイク）、出張買取が便利な理由、注意点まで網羅的にガイドします。",
  alternates: {
    canonical:
      "https://kimono-kaitori-biyori.pages.dev/articles/estate-kimono/",
  },
  openGraph: {
    title: "遺品整理で着物が出てきた時の対処法｜価値の見極め方と売り方",
    description:
      "遺品整理で着物が出てきたときの対処法を徹底解説。価値の見極め方から売却方法まで網羅的にガイドします。",
    url: "https://kimono-kaitori-biyori.pages.dev/articles/estate-kimono/",
    siteName: "着物の買取びより",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "遺品整理で着物が出てきた時の対処法｜価値の見極め方と売り方",
  description:
    "遺品整理で大量の着物が出てきたときの対処法を徹底解説。着物の価値の見極め方、処分方法の選択肢、出張買取が便利な理由を網羅的にガイドします。",
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
      "https://kimono-kaitori-biyori.pages.dev/articles/estate-kimono/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "遺品の着物はいつ整理するのがベストですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "四十九日法要の後が一般的なタイミングです。ただし、着物は保管状態によっては劣化が進むため、遅くとも半年以内に整理を始めることをおすすめします。形見分けを先に済ませてから売却に進みましょう。",
      },
    },
    {
      "@type": "Question",
      name: "遺品の着物の価値がまったくわかりません。どうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物専門の買取業者に無料査定を依頼するのが最も簡単で確実な方法です。証紙や落款があれば産地や作家を特定でき、価値の判断材料になります。複数業者に査定を依頼して比較検討しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "古くてシミがある遺品の着物でも売れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "シミや汚れがあっても、素材が正絹であったり、有名産地の着物や人間国宝の作品であれば買取可能なケースが多いです。ただし、状態が悪いほど買取価格は下がります。まずは査定に出してみることをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "遺品整理業者と着物買取業者、どちらに依頼すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "着物だけを売りたい場合は着物専門の買取業者がおすすめです。着物の価値を正しく評価できる専門査定員が在籍しているため、適正価格での買取が期待できます。家全体の遺品整理を依頼する場合は遺品整理業者を利用しつつ、着物だけは別途専門業者に査定依頼するのがベストです。",
      },
    },
    {
      "@type": "Question",
      name: "遺品の着物を寄付することはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、着物の寄付を受け付けている団体やNPOがあります。海外支援団体や着物文化の普及活動を行う団体などが受け付けています。ただし、状態が悪い着物は受け付けてもらえない場合があるため、事前に確認しましょう。",
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
      name: "遺品整理の着物",
      item: "https://kimono-kaitori-biyori.pages.dev/articles/estate-kimono/",
    },
  ],
};

export default function EstateKimonoPage() {
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
          { label: "遺品整理の着物" },
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
            遺品整理で着物が出てきた時の対処法
            <br className="md:hidden" />
            <span className="text-[#6b4c8a]">価値の見極め方と売り方</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            遺品整理をしていると、タンスの中から大量の着物が出てくることがあります。
            「この着物に価値はあるのだろうか」「どう処分すればいいのかわからない」
            と悩む方は非常に多いです。本記事では、遺品の着物の価値を見極める方法、
            処分方法の選択肢（売る・寄付・リメイク）、そして出張買取が便利な理由まで
            徹底解説します。故人の大切な着物を適切に扱うためのガイドとしてお役立てください。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">目次</h2>
          <ol className="space-y-2 text-sm text-[#6b4c8a]">
            <li>
              <a href="#first-steps" className="hover:underline">
                1. 遺品の着物が出てきたら最初にすべきこと
              </a>
            </li>
            <li>
              <a href="#value-check" className="hover:underline">
                2. 着物の価値を見極めるポイント
              </a>
            </li>
            <li>
              <a href="#options" className="hover:underline">
                3. 処分方法の選択肢
              </a>
            </li>
            <li>
              <a href="#shutcho" className="hover:underline">
                4. 出張買取が遺品整理に最適な理由
              </a>
            </li>
            <li>
              <a href="#cautions" className="hover:underline">
                5. 遺品の着物を売る際の注意点
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                6. 遺品の着物を売る流れ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問（FAQ）
              </a>
            </li>
          </ol>
        </nav>

        {/* セクション1 */}
        <section id="first-steps" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            遺品の着物が出てきたら最初にすべきこと
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            遺品整理で着物が出てきた場合、慌てて処分する必要はありません。
            まずは以下の手順で落ち着いて対応しましょう。
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">すべての着物を取り出して一覧にする</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  タンスや押入れからすべての着物を取り出し、種類ごとに分けましょう。
                  振袖、訪問着、留袖、小紋、紬、帯、和装小物に分類すると管理しやすくなります。
                  この段階でスマホなどで写真を撮っておくと、後の査定依頼や家族間の相談に役立ちます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">証紙・落款・たとう紙を確認する</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  着物に証紙（産地や素材を証明する紙）が付いているか確認しましょう。
                  たとう紙（着物を包んでいる和紙）に購入店や価格が記載されていることもあります。
                  これらは着物の価値を判断する重要な手がかりです。捨てずに保管しておきましょう。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">状態をチェックする</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  シミ、黄ばみ、カビ、虫食い、色あせなどの状態を確認します。
                  長期保管されていた着物は、見た目は綺麗でもカビ臭がすることがあります。
                  状態の良し悪しは買取価格に大きく影響するため、正直に把握しておくことが大切です。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-5">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                4
              </span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">家族と相談する</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  着物を処分する前に、親族に声をかけて形見として欲しいものがないか確認しましょう。
                  後からトラブルにならないよう、全員の合意を得てから売却・処分に進むことが重要です。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#c9a76c] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">注意：</span>
              遺品整理業者に着物の処分を任せると、価値のある着物も一括で安く処分されてしまう
              ことがあります。着物だけは着物専門の買取業者に別途査定を依頼するのがおすすめです。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section id="value-check" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            着物の価値を見極めるポイント
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            着物に詳しくない方でも、以下のポイントを確認することで
            大まかな価値を判断できます。
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <span className="text-[#c9a76c]">&#9632;</span>
                素材で判断する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                着物の素材は買取価格を大きく左右します。
                最も高値がつくのは正絹（しょうけん）の着物です。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#6b4c8a] text-white">
                      <th className="px-3 py-2 text-left font-medium">素材</th>
                      <th className="px-3 py-2 text-left font-medium">見分け方</th>
                      <th className="px-3 py-2 text-left font-medium">買取価格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium bg-[#faf8f5]">正絹</td>
                      <td className="px-3 py-2 text-gray-600">
                        光沢があり、手触りがしっとりしている
                      </td>
                      <td className="px-3 py-2 text-gray-600">高い</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium bg-[#faf8f5]">麻</td>
                      <td className="px-3 py-2 text-gray-600">
                        シャリ感があり、涼しげな質感
                      </td>
                      <td className="px-3 py-2 text-gray-600">中程度</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium bg-[#faf8f5]">木綿</td>
                      <td className="px-3 py-2 text-gray-600">
                        やわらかく吸水性がある
                      </td>
                      <td className="px-3 py-2 text-gray-600">低〜中程度</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium bg-[#faf8f5]">ポリエステル</td>
                      <td className="px-3 py-2 text-gray-600">
                        シワになりにくく、軽い
                      </td>
                      <td className="px-3 py-2 text-gray-600">ほぼ値がつかない</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <span className="text-[#c9a76c]">&#9632;</span>
                証紙の有無で判断する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                証紙とは、着物の産地・素材・製法を証明する公的な紙です。
                大島紬、結城紬、加賀友禅など有名産地の着物には証紙が付いていることが多く、
                証紙があると買取価格が大幅にアップします。
                たとう紙に挟まっていたり、着物の端に縫い付けられていることがあるので、
                注意深く確認しましょう。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <span className="text-[#c9a76c]">&#9632;</span>
                作家物・ブランド物を見分ける
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                人間国宝（重要無形文化財保持者）の作品や、有名作家の着物は高額買取が期待できます。
                落款（らっかん：作家のサイン）がおくみの裏側や衿先に押されていることが多いです。
                また、千總、龍村美術織物、川島織物などのブランド帯も高値がつきます。
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <span className="text-[#c9a76c]">&#9632;</span>
                着物の種類で判断する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                着物の種類によっても買取価格は異なります。一般的に、
                フォーマル度の高い着物ほど買取需要が高い傾向にあります。
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  <span><span className="font-medium">振袖：</span>需要が高く、状態が良ければ高額買取が期待できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  <span><span className="font-medium">訪問着：</span>汎用性が高く安定した需要がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  <span><span className="font-medium">留袖：</span>着用シーンが限られるため需要はやや低い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  <span><span className="font-medium">紬：</span>大島紬・結城紬など産地物は高額になることも</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a]">&#9656;</span>
                  <span><span className="font-medium">小紋：</span>カジュアルなため買取価格は控えめ</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section id="options" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            処分方法の選択肢
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            遺品の着物の処分方法は「売る」だけではありません。
            着物の状態や故人への思いに応じて、最適な方法を選びましょう。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border-2 border-[#6b4c8a] rounded-lg p-5">
              <h3 className="font-bold text-[#6b4c8a] text-sm mb-3">
                1. 買取業者に売る
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                最も一般的で現実的な選択肢です。着物専門の買取業者であれば
                適正価格で査定してもらえます。大量の着物も一度に対応可能。
              </p>
              <p className="text-xs text-gray-500">
                おすすめ度：★★★★★ / 向いている人：大量に着物がある方
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                2. 寄付する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                着物文化の普及活動を行う団体やNPO、海外支援団体に寄付する方法です。
                故人の着物が社会貢献に役立つと考えると心の整理にもなります。
              </p>
              <p className="text-xs text-gray-500">
                おすすめ度：★★★☆☆ / 向いている人：社会貢献を重視する方
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                3. リメイクする
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                思い入れのある着物をバッグ、額装、クッションカバーなどに
                リメイクして日常的に使えるようにする方法。形見としての価値を残せます。
              </p>
              <p className="text-xs text-gray-500">
                おすすめ度：★★★★☆ / 向いている人：形見として残したい方
              </p>
            </div>

            <div className="border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">
                4. 自治体のルールに従い廃棄する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                状態が著しく悪く、売却も寄付もできない着物は
                自治体のルールに従って廃棄します。古布として回収してくれる自治体もあります。
              </p>
              <p className="text-xs text-gray-500">
                おすすめ度：★★☆☆☆ / 向いている人：状態が悪い着物のみ
              </p>
            </div>
          </div>

          <div className="bg-[#faf8f5] border-l-4 border-[#6b4c8a] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold">おすすめの組み合わせ：</span>
              思い入れの深い1〜2枚はリメイクして手元に残し、
              状態の良い着物は買取業者に売却、状態の悪い着物は処分する。
              この3段階で進めると、感情面でも経済面でも納得のいく整理ができます。
            </p>
          </div>
        </section>

        {/* セクション4 */}
        <section id="shutcho" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            出張買取が遺品整理に最適な理由
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            遺品の着物を売る場合、出張買取が最も便利で効率的です。
            その理由を4つのポイントで解説します。
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                1. 大量の着物を運ぶ必要がない
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                遺品の着物は数十枚に及ぶことも珍しくありません。
                着物は1枚あたり1kg以上の重さがあり、持ち運びは重労働です。
                出張買取なら自宅に来てもらえるため、運搬の手間がかかりません。
                故人の自宅で直接査定してもらうことも可能です。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                2. その場で現金化できる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取では、査定に納得したらその場で現金を受け取れます。
                遺品整理にかかる費用（不用品回収、ハウスクリーニングなど）に
                充てることもできるため、経済的にもメリットがあります。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                3. 1点ずつ相談しながら売れる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                出張買取では、査定員と対面で1点ずつ相談しながら売却を決められます。
                「これは形見に残したい」「これは売りたい」という判断をその場でできるため、
                遺品整理に適しています。
              </p>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-lg p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                4. 帯や小物もまとめて査定してもらえる
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物だけでなく、帯、帯締め、帯揚げ、草履、バッグなどの和装小物も
                まとめて査定してもらえます。遺品整理では着物以外の和装品も
                大量に出てくることが多いため、一括で対応してもらえるのは大きなメリットです。
              </p>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section id="cautions" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            遺品の着物を売る際の注意点
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-800 text-sm mb-2">
                注意1：遺品整理業者に着物の査定を任せない
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                遺品整理業者は着物の専門知識がないことがほとんどです。
                価値のある着物も「古い衣類」として安く見積もられたり、
                処分費用を請求されたりすることがあります。着物だけは別途、
                着物専門の買取業者に査定を依頼しましょう。
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-800 text-sm mb-2">
                注意2：急いで処分しない
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                遺品整理の期限に追われて、着物を一括で安く処分してしまうケースがあります。
                着物の査定は事前に進めておき、余裕を持ったスケジュールで売却しましょう。
                退去期限がある場合でも、着物だけは先に宅配買取で送っておくという方法もあります。
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-800 text-sm mb-2">
                注意3：証紙や付属品を捨てない
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                着物に付属する証紙、たとう紙、購入時の書類などは、
                買取価格に大きく影響します。「ただの紙」に見えても捨てずに保管し、
                着物と一緒に査定に出しましょう。
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-800 text-sm mb-2">
                注意4：複数業者に査定を依頼する
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                1社だけの査定では適正価格かどうか判断できません。
                最低でも2〜3社に見積もりを取って比較しましょう。
                業者によって得意分野が異なるため、同じ着物でも査定額に
                数千円〜数万円の差がつくことがあります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section id="flow" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            遺品の着物を売る流れ
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            遺品の着物を着物専門の買取業者に売る場合の一般的な流れを解説します。
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#6b4c8a] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                1
              </div>
              <div className="border-b border-[#e8ddd0] pb-4 flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  着物の整理・仕分け
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  すべての着物を取り出し、残す・売る・処分に仕分けます。
                  家族の合意を得てから次のステップに進みましょう。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#6b4c8a] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                2
              </div>
              <div className="border-b border-[#e8ddd0] pb-4 flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  買取業者への問い合わせ
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  着物専門の買取業者に電話やWebから問い合わせ、出張買取を申し込みます。
                  着物の枚数や種類を伝えると、スムーズに対応してもらえます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#6b4c8a] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                3
              </div>
              <div className="border-b border-[#e8ddd0] pb-4 flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  出張査定の実施
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定員が自宅を訪問し、1点ずつ着物を査定します。
                  所要時間は10〜30枚で1〜2時間程度が目安です。
                  査定中に質問や相談ができます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#6b4c8a] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                4
              </div>
              <div className="border-b border-[#e8ddd0] pb-4 flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  買取成立・現金受取
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  査定額に納得したら買取成立。その場で現金を受け取れます。
                  納得できない場合はキャンセル可能（信頼できる業者はキャンセル料無料）。
                  本人確認書類が必要なので、事前に用意しておきましょう。
                </p>
              </div>
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
                  Q. 遺品の着物はいつ整理するのがベストですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                四十九日法要の後が一般的なタイミングです。ただし、着物は保管状態によっては
                劣化が進むため、遅くとも半年以内に整理を始めることをおすすめします。
                形見分けを先に済ませてから売却に進みましょう。
                賃貸物件の退去期限がある場合は、着物だけ先に査定・売却を進めるのも一つの方法です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 遺品の着物の価値がまったくわかりません。どうすればいいですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物専門の買取業者に無料査定を依頼するのが最も簡単で確実な方法です。
                証紙や落款があれば産地や作家を特定でき、価値の判断材料になります。
                複数業者に査定を依頼して比較検討しましょう。
                わからないまま処分してしまうと、後から高価な着物だったと判明して後悔することもあります。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 古くてシミがある遺品の着物でも売れますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                シミや汚れがあっても、素材が正絹であったり、有名産地の着物や人間国宝の作品であれば
                買取可能なケースが多いです。ただし、状態が悪いほど買取価格は下がります。
                まずは査定に出してみることをおすすめします。自分で判断して捨ててしまうのが
                最ももったいない選択です。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 遺品整理業者と着物買取業者、どちらに依頼すべきですか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                着物だけを売りたい場合は着物専門の買取業者がおすすめです。
                着物の価値を正しく評価できる専門査定員が在籍しているため、適正価格での買取が期待できます。
                家全体の遺品整理を依頼する場合は遺品整理業者を利用しつつ、
                着物だけは別途専門業者に査定依頼するのがベストです。
              </div>
            </details>

            <details className="group border border-[#e8ddd0] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-[#faf8f5] hover:bg-[#f5f0eb] transition-colors">
                <span className="font-medium text-gray-900 text-sm pr-4">
                  Q. 遺品の着物を寄付することはできますか？
                </span>
                <span className="text-[#6b4c8a] group-open:rotate-180 transition-transform text-lg shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                A.
                はい、着物の寄付を受け付けている団体やNPOがあります。
                海外支援団体や着物文化の普及活動を行う団体などが受け付けています。
                ただし、状態が悪い着物は受け付けてもらえない場合があるため、事前に確認しましょう。
                故人の着物が社会貢献に役立つと考えると、心の整理にもつながります。
              </div>
            </details>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#6b4c8a]">
            まとめ：遺品の着物を大切に扱うために
          </h2>
          <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              遺品整理で出てきた着物は、故人の思いが詰まった大切な品です。
              だからこそ、適当に処分するのではなく、きちんと価値を確認してから
              最適な方法で扱いましょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              着物専門の買取業者に査定を依頼すれば、
              着物の価値を正しく評価してもらえます。出張買取を利用すれば、
              大量の着物も自宅で一度に対応可能。査定料・出張料・キャンセル料が
              無料の業者も多いため、まずは気軽に査定を依頼してみましょう。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              故人の大切な着物が、新しい持ち主のもとで再び袖を通される。
              それは着物にとっても、故人にとっても、最も幸せな結末ではないでしょうか。
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#6b4c8a] to-[#8b6aaa] rounded-lg p-8 mb-12">
          <h3 className="text-white text-xl font-bold mb-3">
            遺品の着物、まずは無料査定を
          </h3>
          <p className="text-purple-100 text-sm mb-6 leading-relaxed">
            着物の価値を知ることが、適切な整理の第一歩です。<br />
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
              href="/articles/mother-kimono/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#c9a76c] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                母親の着物の整理方法
              </p>
            </Link>
            <Link
              href="/articles/sell-high-tips/"
              className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:bg-[#faf8f5] transition-colors group"
            >
              <span className="text-xs text-[#e8a0b6] font-medium">
                お役立ち情報
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#6b4c8a] transition-colors">
                着物を高く売るための7つのコツ
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
