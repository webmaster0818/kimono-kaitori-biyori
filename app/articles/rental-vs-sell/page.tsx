import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物レンタル vs 売却｜どちらがお得か徹底比較",
  description:
    "着物を手放すか迷っている方へ。レンタルに回す場合と買取で売却する場合の費用対効果を徹底比較。保管コスト・メンテナンス費用・レンタル収入・買取相場をもとに、最適な判断ができるよう詳しく解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/rental-vs-sell/",
  },
  openGraph: {
    title: "着物レンタル vs 売却｜どちらがお得か徹底比較",
    description:
      "着物をレンタルに出すか売却するか、費用対効果で徹底比較。保管コスト・収益シミュレーション付き。",
    url: "https://kimonokaitori-biyori.com/articles/rental-vs-sell/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物をレンタルに出す場合、1回あたりいくらの収入になりますか？",
    answer:
      "着物のレンタル収入は種類や状態によって大きく異なります。振袖であれば1回あたり3万円〜8万円、訪問着で1万円〜3万円、紬で5,000円〜1万5,000円が一般的な相場です。ただし、レンタル業者への委託手数料（30〜50%）やクリーニング費用を差し引くと、実際の手取り額はこの半分程度になることも少なくありません。",
  },
  {
    question: "レンタルに向いている着物はどんな種類ですか？",
    answer:
      "レンタル需要が高いのは、成人式用の振袖、結婚式・入学式・卒業式向けの訪問着や色留袖です。サイズが標準（身丈160cm前後、裄丈67cm前後）で、状態が良く、流行のデザインである着物ほどレンタル回転率が高くなります。逆に、アンティーク着物や特殊なサイズの着物はレンタルよりも売却の方が有利です。",
  },
  {
    question: "着物の保管にかかる年間コストはどれくらいですか？",
    answer:
      "自宅保管の場合、たとう紙の交換（1枚300〜500円、年1回推奨）、防虫剤（年間2,000〜3,000円）、虫干しの手間が発生します。トランクルームなどの外部保管では月額3,000円〜8,000円程度。さらに2〜3年に1度のプロによる点検や悉皆（しっかい）代を含めると、1着あたり年間5,000円〜2万円程度の維持費がかかります。",
  },
  {
    question: "高額な着物なら売却よりレンタルの方が得ですか？",
    answer:
      "一概には言えません。例えば買取価格が30万円の振袖をレンタルに出す場合、手数料やクリーニング費を差し引いた純収入が1回2万円だとすると、元を取るには15回のレンタルが必要です。年2回のレンタルで約7〜8年かかり、その間の保管費用・劣化リスクも加味すると、即時売却の方が有利なケースが多いです。",
  },
  {
    question: "レンタルに出していた着物でも買取してもらえますか？",
    answer:
      "はい、レンタルに出していた着物でも買取は可能です。ただし、レンタル使用による着用感・微細な汚れ・生地の傷みがある場合、未使用品と比べて査定額が下がる可能性があります。レンタル回数が少ないうちに売却に切り替えた方が、より高い買取額が期待できます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物レンタル vs 売却｜どちらがお得か徹底比較",
  description:
    "着物をレンタルに出すか売却するか、費用対効果で徹底比較。保管コスト・収益シミュレーション付き。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/rental-vs-sell/",
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
      name: "着物レンタル vs 売却",
      item: "https://kimonokaitori-biyori.com/articles/rental-vs-sell/",
    },
  ],
};

export default function RentalVsSellPage() {
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
          { label: "着物レンタル vs 売却" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/rental-vs-sell.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              Do型ガイド
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物レンタル vs 売却</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                どちらがお得か徹底比較
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              「この着物、レンタルに出した方が得なのか、それとも売ってしまった方がいいのか」。多くの方が悩むこの問題を、保管コスト・メンテナンス費用・レンタル収入・買取相場の4つの軸から徹底的に比較検証します。結論から言えば、多くのケースで早期売却の方が経済的に有利です。
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
                    1. レンタルと売却、それぞれの選択肢を整理
                  </a>
                </li>
                <li>
                  <a href="#rental-merit" className="text-[#6b4c8a] hover:underline">
                    2. 着物レンタルのメリット・デメリット
                  </a>
                </li>
                <li>
                  <a href="#sell-merit" className="text-[#6b4c8a] hover:underline">
                    3. 着物売却のメリット・デメリット
                  </a>
                </li>
                <li>
                  <a href="#cost-comparison" className="text-[#6b4c8a] hover:underline">
                    4. コスト比較シミュレーション
                  </a>
                </li>
                <li>
                  <a href="#which-type" className="text-[#6b4c8a] hover:underline">
                    5. 種類別のおすすめ判断基準
                  </a>
                </li>
                <li>
                  <a href="#timing" className="text-[#6b4c8a] hover:underline">
                    6. 売却のベストタイミング
                  </a>
                </li>
                <li>
                  <a href="#how-to-sell" className="text-[#6b4c8a] hover:underline">
                    7. 売却を決めたら最初にやること
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

      {/* セクション1：概要 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            レンタルと売却、それぞれの選択肢を整理
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物を手放す方法は大きく分けて「レンタルに出す」「売却する」の2つがあります。レンタルは着物の所有権を維持したまま収益を得る方法であり、売却は所有権を手放す代わりに一括で現金化する方法です。
            </p>
            <p>
              レンタルの場合、着物レンタル業者に委託する方法と、個人間でシェアリングサービスを利用する方法があります。いずれの場合も、クリーニング代や保管費用などのランニングコストが発生するため、単純に「レンタル料金が入るから得」とは限りません。
            </p>
            <p>
              一方、売却の場合は<Link href="/articles/shutcho-kaitori/" className="text-[#6b4c8a] hover:underline">出張買取</Link>、<Link href="/articles/takuhai-kaitori/" className="text-[#6b4c8a] hover:underline">宅配買取</Link>、<Link href="/articles/mochikomi-kaitori/" className="text-[#6b4c8a] hover:underline">持ち込み買取</Link>の3つの方法があり、いずれも査定料・送料・出張費が無料の業者が主流です。即日現金化も可能なため、手元に早く資金が欲しい方には売却が適しています。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">レンタルの特徴</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>所有権を維持したまま収益を得る</li>
                <li>長期的に複数回の収入が期待できる</li>
                <li>保管・メンテナンスのコストが発生</li>
                <li>着用による劣化リスクがある</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-3 text-base">売却の特徴</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>一括で現金化できる</li>
                <li>保管スペースが不要になる</li>
                <li>維持費が一切かからない</li>
                <li>所有権を完全に手放す</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2：レンタルのメリット・デメリット */}
      <section id="rental-merit" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物レンタルのメリット・デメリット
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">レンタルのメリット</h3>
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong>1. 繰り返し収入を得られる</strong>：状態の良い振袖や訪問着は、成人式・卒業式・結婚式シーズンに繰り返しレンタルされる可能性があります。人気のデザインであれば年間3〜5回のレンタルが見込めます。
                </p>
                <p>
                  <strong>2. 思い出の品を手放さずに済む</strong>：母親から譲り受けた着物や成人式の振袖など、思い入れのある着物を所有したまま活用できる点は精神的なメリットです。
                </p>
                <p>
                  <strong>3. 着物の価値が将来上がる可能性</strong>：一部の作家物や伝統工芸品は年々希少性が増し、将来的に価値が上がる可能性もあります。レンタルなら値上がりを待ちつつ収益を得られます。
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-3 text-base">レンタルのデメリット</h3>
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong>1. 保管・メンテナンスコストが継続的に発生</strong>：レンタルに出していない期間も保管が必要です。たとう紙の交換、防虫剤、虫干し、定期的な点検と、年間を通してコストが発生します。1着あたり年間5,000円〜2万円の維持費は決して小さくありません。
                </p>
                <p>
                  <strong>2. レンタル使用による劣化</strong>：他人が着用することで着用シワ、汗ジミ、化粧汚れなどが発生するリスクがあります。クリーニングで落ちない汚れがつけば、着物の価値は大きく下がります。
                </p>
                <p>
                  <strong>3. 需要の不確実性</strong>：レンタル需要はデザインの流行に大きく左右されます。数年前に人気だった柄でも、今は借り手がつかないということは珍しくありません。
                </p>
                <p>
                  <strong>4. 手数料が高い</strong>：レンタル業者への委託手数料は一般的に30〜50%です。さらにレンタル前後のクリーニング費用（1回3,000〜8,000円）を差し引くと、実質の手取りは想像以上に少なくなります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3：売却のメリット・デメリット */}
      <section id="sell-merit" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物売却のメリット・デメリット
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">売却のメリット</h3>
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong>1. 即時に現金化できる</strong>：買取業者の<Link href="/articles/same-day-cash/" className="text-[#6b4c8a] hover:underline">即日現金払い</Link>を利用すれば、査定当日にまとまった現金が手に入ります。出張買取なら自宅にいながら現金化が可能です。
                </p>
                <p>
                  <strong>2. 保管スペースと維持費が不要になる</strong>：着物は1着あたりかなりのスペースを取ります。タンスや桐箱から解放されることで、住空間を有効活用できます。防虫剤や虫干しの手間もなくなります。
                </p>
                <p>
                  <strong>3. 劣化前に最高値で売れる</strong>：着物は時間の経過とともに生地の劣化、色褪せ、シミの発生などが進みます。今が最も状態が良い=最も高く売れるタイミングである可能性が高いです。
                </p>
                <p>
                  <strong>4. 査定・出張費が無料</strong>：大手買取業者は査定料・出張費・キャンセル料すべて無料です。売るかどうか迷っている段階でも、気軽に査定だけ依頼できます。
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-3 text-base">売却のデメリット</h3>
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong>1. 一度売ると取り戻せない</strong>：売却した着物は基本的に買い戻すことができません。思い出の品や家族の形見の場合、後悔する可能性がないか慎重に判断する必要があります。
                </p>
                <p>
                  <strong>2. 買取価格が期待より低い場合がある</strong>：購入時の価格と買取価格には大きな差があります。特に一般的な着物の買取相場は購入価格の10〜20%程度が相場です。<Link href="/articles/kimono-market-price/" className="text-[#6b4c8a] hover:underline">着物の買取相場</Link>を事前に確認しておくことが大切です。
                </p>
                <p>
                  <strong>3. 業者選びを誤ると損をする</strong>：着物の価値を正しく評価できない業者に売ると、本来の価値よりも安く買い叩かれるリスクがあります。必ず複数の業者に査定を依頼し、比較することが重要です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4：コスト比較シミュレーション */}
      <section id="cost-comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            コスト比較シミュレーション
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            振袖（購入時50万円）を例に、レンタルと売却の5年間の収支を比較してみましょう。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">項目</th>
                  <th className="px-4 py-3 text-left font-semibold">レンタル（5年間）</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">売却（即時）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">収入</td>
                  <td className="px-4 py-3 text-gray-700">レンタル料 5万円 x 年2回 x 5年 = 50万円<br />業者手数料 -40% = <strong>手取り30万円</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong>買取額 8万円〜15万円</strong><br />（購入価格の15〜30%）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">コスト</td>
                  <td className="px-4 py-3 text-gray-700">クリーニング 5,000円 x 10回 = 5万円<br />保管費 1万円/年 x 5年 = 5万円<br />修繕費（見込み）= 2万円<br /><strong>合計 12万円</strong></td>
                  <td className="px-4 py-3 text-gray-700"><strong>0円</strong><br />（査定料・出張費すべて無料）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">純利益</td>
                  <td className="px-4 py-3 text-gray-700 font-bold">30万円 - 12万円 = <span className="text-green-600">18万円</span></td>
                  <td className="px-4 py-3 text-gray-700 font-bold"><span className="text-green-600">8万円〜15万円</span></td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">リスク</td>
                  <td className="px-4 py-3 text-gray-700">劣化・需要減少・レンタル未成約<br />5年後の着物価値低下</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">将来の値上がりを逃す可能性<br />（一般品は値上がりしにくい）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">シミュレーションの結論：</strong>
              上記は「年2回確実にレンタルが入る」という楽観的なシナリオです。実際にはレンタル需要が年1回以下になることも多く、その場合は純利益が大幅に下がります。さらに5年間の保管中に劣化が進めば、5年後の売却価格は現在よりも大幅に低くなります。確実に手取り額を得たいなら、早期売却が合理的です。
            </p>
          </div>
        </div>
      </section>

      {/* セクション5：種類別おすすめ判断基準 */}
      <section id="which-type" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            種類別のおすすめ判断基準
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">おすすめ</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">理由</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td>
                  <td className="px-4 py-3 text-gray-700 font-bold">売却がおすすめ</td>
                  <td className="px-4 py-3 text-gray-700">トレンドの変化が早く、レンタル需要は新品・最新デザインに集中するため</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700 font-bold">状態次第</td>
                  <td className="px-4 py-3 text-gray-700">フォーマル需要は安定しているが、レンタル市場の競合も多い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬</td>
                  <td className="px-4 py-3 text-gray-700 font-bold">売却がおすすめ</td>
                  <td className="px-4 py-3 text-gray-700">カジュアル着物のレンタル需要は低い。特に大島紬・結城紬は買取価格が高い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖</td>
                  <td className="px-4 py-3 text-gray-700 font-bold">売却がおすすめ</td>
                  <td className="px-4 py-3 text-gray-700">使用頻度が極めて低く、レンタルでは元が取れない</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">作家物・伝統工芸品</td>
                  <td className="px-4 py-3 text-gray-700 font-bold">売却がおすすめ</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">レンタル中の劣化リスクが致命的。専門買取で高値がつく</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">まとめ：</strong>
              ほとんどの着物において、売却の方が経済的に有利と言えます。特に<Link href="/articles/oshima-tsumugi/" className="text-[#6b4c8a] hover:underline">大島紬</Link>や<Link href="/articles/kaga-yuzen/" className="text-[#6b4c8a] hover:underline">加賀友禅</Link>などの高級品は、レンタルによる劣化リスクを考えると、状態の良いうちに専門業者に売却するのが賢明です。
            </p>
          </div>
        </div>
      </section>

      {/* セクション6：売却のベストタイミング */}
      <section id="timing" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            売却のベストタイミング
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">季節による需要の変動</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の買取市場には季節性があります。振袖は成人式の翌月（1〜2月）に手放す人が増えるため、買取価格がやや下がる傾向があります。逆に、夏前（4〜6月）は成人式に向けた仕入れが始まるため、振袖の買取価格が上がりやすい時期です。訪問着や留袖は結婚式シーズン（春・秋）の前に需要が高まります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">「迷ったら早めに」が鉄則</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物は保管しているだけで劣化が進みます。特に日本の湿度の高い環境では、カビやシミのリスクが常にあります。「もう少し待てば高く売れるかも」と考えているうちに状態が悪化し、結果的に買取価格が下がるケースが非常に多いです。迷っているなら、まず<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>を受けて現在の価値を把握しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">引っ越し・生前整理のタイミング</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                <Link href="/articles/moving-sale/" className="text-[#6b4c8a] hover:underline">引っ越し前</Link>や生前整理のタイミングは売却の好機です。まとめて売ることで業者側も効率が良く、査定額にプラスされることがあります。遺品整理で大量の着物が出た場合は<Link href="/articles/bulk-selling/" className="text-[#6b4c8a] hover:underline">一括買取</Link>が便利です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7：売却を決めたら */}
      <section id="how-to-sell" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            売却を決めたら最初にやること
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ステップ1：証紙・付属品を揃える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙や証明書</Link>は買取価格を大きく左右します。購入時に付いていた箱、たとう紙、証紙、鑑定書などがあれば必ず一緒に出しましょう。帯や和装小物もまとめて査定に出すと、コーディネートとしての付加価値がつく場合があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ステップ2：複数業者に無料査定を依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                最低でも3社以上に査定を依頼しましょう。<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">おすすめ買取業者ランキング</Link>から、出張買取・宅配買取に対応した業者を選ぶと便利です。査定額には業者間で2倍以上の差がつくこともあるため、比較は必須です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ステップ3：査定額を比較して最高値で売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                各社の査定額が出揃ったら、金額だけでなくサービスの質も含めて総合的に判断しましょう。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>を実践することで、査定額がさらにアップする可能性もあります。
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
              href="/articles/kimono-market-price/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取の相場ガイド
              </h3>
              <p className="text-xs text-gray-600">
                種類・素材・ブランド別の買取相場を詳しく解説。
              </p>
            </Link>
            <Link
              href="/articles/sell-high-tips/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物を高く売るコツ
              </h3>
              <p className="text-xs text-gray-600">
                査定額アップの秘訣を徹底解説。証紙・タイミング・業者選びのポイント。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            着物の価値を確認するなら、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            レンタルに出すか売るか迷っているなら、まず現在の買取価格を確認しましょう。査定は完全無料、キャンセルも自由です。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>

      <SoubaNote />
    </>
  );
}
