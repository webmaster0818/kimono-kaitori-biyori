import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "【2026年最新】着物買取おすすめ5選を徹底比較！口コミ・評判・買取相場まで",
  description:
    "着物買取はどこがいい？買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの5社を6つの基準で徹底比較。口コミ・評判・買取相場・手数料まで詳しく解説。タイプ別おすすめもご紹介。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/ranking/",
  },
  openGraph: {
    title:
      "【2026年最新】着物買取おすすめ5選を徹底比較！口コミ・評判・買取相場まで",
    description:
      "着物買取はどこがいい？買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの5社を6つの基準で徹底比較。",
    url: "https://kimonokaitori-biyori.com/ranking/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の買取相場はどのくらいですか？",
    answer:
      "着物の買取相場は種類や状態によって大きく異なります。一般的な訪問着で3,000円〜30,000円程度、大島紬や結城紬などの有名産地物は10,000円〜100,000円以上になることもあります。人間国宝や有名作家の作品は数十万円の値がつくケースもあります。ただし、シミ・汚れ・カビがある場合は大幅に下がることがあるため、複数業者に査定を依頼して比較することが大切です。",
  },
  {
    question: "古い着物やシミがある着物でも買い取ってもらえますか？",
    answer:
      "はい、多くの買取業者では古い着物やシミ・汚れがある着物でも査定を受け付けています。特に買取大吉やティファナは状態に関わらず幅広く対応しています。ただし、状態が悪い場合は買取額が大幅に下がるか、買取不可になることもあります。まずは無料査定を利用して確認するのがおすすめです。",
  },
  {
    question: "出張買取と宅配買取、どちらがおすすめですか？",
    answer:
      "点数が多い場合や重い着物を運ぶのが難しい場合は出張買取がおすすめです。ウリエルは出張買取に特化しており、丁寧な対応で評判です。一方、自分のペースで進めたい方や対面でのやり取りが苦手な方は宅配買取が便利です。RECLOは宅配買取に特化しており、オンラインで完結できます。",
  },
  {
    question: "着物を高く売るコツはありますか？",
    answer:
      "着物を高く売るポイントは5つあります。①証紙（産地証明書）や落款があれば必ず一緒に出す、②複数の業者に査定を依頼して比較する、③保管状態を良くしておく（畳紙に包み、防湿剤と一緒に保管）、④帯や和装小物もセットで出す、⑤需要が高まる時期（成人式前の秋〜冬、卒業式シーズンの1〜2月）に売る。特にヒカカク！を使えば最大20社に一括査定を依頼でき、効率的に比較できます。",
  },
  {
    question: "査定料やキャンセル料はかかりますか？",
    answer:
      "今回紹介している5社はいずれも査定料・出張料は無料です。キャンセル料も基本的にかかりません。宅配買取の場合、返送料は業者によって対応が異なりますので、事前に確認しておくことをおすすめします。買取大吉とウリエルはキャンセル時の返送料も無料です。",
  },
  {
    question: "着物の買取にはどのくらい時間がかかりますか？",
    answer:
      "買取方法によって異なります。店頭持ち込みなら最短30分〜1時間程度で査定が完了し、その場で現金を受け取れます。出張買取は訪問日の調整を含めて2〜3日、査定自体は30分〜1時間程度です。宅配買取は発送から査定完了まで3〜7日程度が目安です。ティファナは最短即日対応が可能です。",
  },
  {
    question: "帯や和装小物だけでも買い取ってもらえますか？",
    answer:
      "はい、多くの業者で帯や和装小物（帯締め・帯揚げ・草履・バッグなど）だけでも買取対応しています。特に買取大吉は着物・帯・和装小物すべてに対応しており、まとめて査定してもらえます。ティファナも帯単体での買取に対応しています。ただし、和装小物単体だと数百円程度になることが多いため、着物と一緒に出すのがおすすめです。",
  },
  {
    question: "証紙がない着物でも高く売れますか？",
    answer:
      "証紙がなくても買取は可能ですが、証紙があるものと比べると査定額は下がる傾向にあります。証紙は着物の産地や品質を証明する重要な書類で、特に大島紬や結城紬などの有名産地物では査定額に大きな差が出ます。証紙がない場合でも、着物の状態が良ければ相応の価格がつくことがありますので、まずは査定に出してみることをおすすめします。",
  },
  {
    question: "振袖や留袖など、種類によって買取価格は変わりますか？",
    answer:
      "はい、着物の種類によって買取価格は大きく異なります。一般的に、振袖は需要が高く5,000円〜50,000円程度、訪問着は3,000円〜30,000円程度、留袖は2,000円〜20,000円程度が相場です。紬（大島紬・結城紬など）は産地や技法によって10,000円〜100,000円以上になることもあります。小紋や浴衣は比較的安く、数百円〜数千円程度が一般的です。",
  },
  {
    question: "買取業者を選ぶときに最も重要なポイントは何ですか？",
    answer:
      "最も重要なのは「着物に詳しい査定員がいるかどうか」です。着物の価値は素材・技法・産地・作家・状態など多くの要素で決まるため、専門知識がないと適正な査定ができません。買取大吉は着物専門の査定員を配置しており、RECLOは高級品の査定に特化したスタッフがいます。次に重要なのが複数業者での比較です。ヒカカク！を使えば簡単に複数社の査定額を比較できます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】着物買取おすすめ5選を徹底比較！口コミ・評判・買取相場まで",
  description:
    "着物買取はどこがいい？買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの5社を6つの基準で徹底比較。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  author: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
  },
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
    "@id": "https://kimonokaitori-biyori.com/ranking/",
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
      name: "着物買取おすすめランキング",
      item: "https://kimonokaitori-biyori.com/ranking/",
    },
  ],
};

export default function RankingPage() {
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

      <Breadcrumb items={[{ label: "着物買取おすすめランキング" }]} />

      {/* Hero / H1 */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f3eef7] via-[#faf5ee] to-[#fdf2f6]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#6b4c8a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#e8a0b6]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="inline-block text-xs font-semibold text-[#c9a76c] bg-[#faf5ee] px-4 py-1.5 rounded-full mb-4 tracking-wider border border-[#e8ddd0]">
            2026年最新版 - 着物買取おすすめ比較
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            着物買取おすすめ5選を徹底比較
            <span className="text-gradient">【2026年最新】</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            着物買取はどこがいい？失敗しない業者の選び方から、おすすめ5社の比較、口コミ・評判・買取相場まで徹底解説します。大切な着物を納得の価格で手放すために、ぜひ参考にしてください。
          </p>
          <p className="text-xs text-gray-400 mt-3">
            更新日：2026年4月15日
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* 目次 */}
        <nav className="bg-[#faf8f5] border border-[#e8ddd0] rounded-2xl p-6 md:p-8 mb-12">
          <p className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-6 bg-[#6b4c8a] text-white rounded-md text-xs flex items-center justify-center font-bold">目</span>
            目次
          </p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#select-point" className="hover:text-[#6b4c8a] transition-colors">
                1. 着物買取はどこがいい？失敗しない業者選びのポイント
              </a>
            </li>
            <li>
              <a href="#best5" className="hover:text-[#6b4c8a] transition-colors">
                2. 【結論】着物買取おすすめ業者BEST5
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:text-[#6b4c8a] transition-colors">
                3. 5社を6つの基準で徹底比較
              </a>
            </li>
            <li>
              <a href="#type-recommend" className="hover:text-[#6b4c8a] transition-colors">
                4. タイプ別おすすめはコレ！
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:text-[#6b4c8a] transition-colors">
                5. 着物買取の流れ（出張・宅配・持ち込み）
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#6b4c8a] transition-colors">
                6. よくある質問（FAQ）
              </a>
            </li>
            <li>
              <a href="#matome" className="hover:text-[#6b4c8a] transition-colors">
                7. まとめ
              </a>
            </li>
          </ol>
        </nav>

        {/* ========================================== */}
        {/* H2: 失敗しない業者選びのポイント */}
        {/* ========================================== */}
        <section id="select-point" className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#6b4c8a]">
            着物買取はどこがいい？失敗しない業者選びのポイント
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            「着物を売りたいけど、どこに頼めばいいかわからない」という方は少なくありません。着物買取業者は数多くありますが、業者によって買取方法・対応エリア・得意分野が大きく異なります。大切な着物を適正価格で売るためには、以下の3つのポイントを必ず確認しましょう。
          </p>

          {/* H3: 買取方法の違い */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              買取方法の違い（出張/宅配/持ち込み）
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              着物買取の方法は大きく分けて「出張買取」「宅配買取」「店頭持ち込み」の3つがあります。それぞれにメリット・デメリットがあるため、ご自身の状況に合った方法を選ぶことが大切です。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f3eef7]">
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">買取方法</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">メリット</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">デメリット</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">おすすめの人</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#6b4c8a]">出張買取</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">自宅で完結、大量でもOK、その場で現金化</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">日程調整が必要、対応エリアの制限あり</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">大量の着物がある方、高齢の方</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#6b4c8a]">宅配買取</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">全国対応、自分のペースで発送、対面不要</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">梱包の手間、現金化まで数日、返送料に注意</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">忙しい方、対面が苦手な方</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#6b4c8a]">店頭持ち込み</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">即日現金化、査定員と直接交渉可</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">店舗まで運ぶ手間、近くに店舗がない場合も</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">すぐに現金が欲しい方、少量の方</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物は1枚でもかなりの重さがあるため、大量に売りたい場合は出張買取が便利です。一方、数枚程度であれば宅配や店頭持ち込みも十分に検討できます。業者によって対応している買取方法が異なるため、事前に確認しておきましょう。
            </p>
          </div>

          {/* H3: 着物専門の査定員 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              着物専門の査定員がいるか
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              着物の価値は、素材（正絹・木綿・化繊）、技法（手織り・機械織り）、産地（大島紬・結城紬・京友禅など）、作家（人間国宝・伝統工芸士）、状態（シミ・カビ・虫食い）など多くの要素で決まります。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              一般的なリサイクルショップでは着物の知識が乏しいスタッフが査定することがあり、本来の価値より大幅に安い金額を提示されるケースも少なくありません。着物専門の査定員がいる業者を選ぶことで、適正な価格で買い取ってもらえる可能性が高まります。
            </p>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5 mb-4">
              <p className="text-sm font-bold text-[#6b4c8a] mb-2">ポイント</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                今回紹介する5社のうち、特に着物の専門性が高いのは<strong>買取大吉</strong>（着物専門査定員在籍）と<strong>RECLO</strong>（高級品専門のスタッフ在籍）です。「この着物は価値がありそう」と感じたら、これらの業者にまず相談してみましょう。
              </p>
            </div>
          </div>

          {/* H3: 手数料・キャンセル料 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              手数料・キャンセル料は無料か
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              着物買取で注意したいのが手数料です。査定料・出張料・キャンセル料が無料の業者を選ぶことで、余計なコストをかけずに査定を受けられます。「無料査定」と謳っていても、キャンセル時に返送料がかかる場合があるため、宅配買取を利用する際は特に注意が必要です。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              今回紹介する5社は、いずれも査定料・出張料は無料です。宅配買取のキャンセル時の返送料については業者ごとに異なりますので、後ほどの比較で詳しく解説します。
            </p>
            <div className="bg-gradient-to-r from-[#fdf2f6] to-[#f3eef7] border border-[#e8ddd0] rounded-xl p-5">
              <p className="text-sm font-bold text-gray-900 mb-2">失敗しないためのチェックリスト</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  査定料・出張料が無料か
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  キャンセル料が無料か
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  宅配買取の返送料は誰が負担するか
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  クーリングオフに対応しているか
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] mt-0.5 shrink-0">&#10003;</span>
                  古物商許可証を取得しているか
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* H2: おすすめ業者BEST5 */}
        {/* ========================================== */}
        <section id="best5" className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#6b4c8a]">
            【結論】着物買取おすすめ業者BEST5
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            数ある着物買取業者の中から、買取方法・対応エリア・専門性・手数料・口コミ評判・買取実績の6つの基準で厳選した<strong>おすすめ5社</strong>をご紹介します。まずは5社の比較表をご覧ください。
          </p>

          {/* 5社比較表 */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">順位</th>
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">業者名</th>
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">買取方法</th>
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">対応エリア</th>
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">特徴</th>
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">手数料</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#fdf8ed] hover:bg-[#faf5ee]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#c9a76c] text-center">1位</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">買取大吉</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">出張・宅配・店頭</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">全国（1,800店超）</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">店舗数No.1、着物専門査定員</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">すべて無料</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#c9a76c] text-center">2位</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ウリエル</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">出張・宅配</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">関東〜関西・岡山</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">出張買取特化、無店舗で高額査定</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">すべて無料</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#c9a76c] text-center">3位</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">RECLO（リクロ）</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">宅配</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">全国（宅配のみ）</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">高級品特化、オンライン完結</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">査定料無料・返送料は条件あり</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#c9a76c] text-center">4位</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ティファナ</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">出張・宅配・店頭</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">関東中心</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">総合リサイクル、即日対応可</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">すべて無料</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-[#c9a76c] text-center">5位</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ヒカカク！</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">一括査定（比較サイト）</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">全国</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">最大20社一括査定、口コミ豊富</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">利用料無料</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ---- 1位 買取大吉 ---- */}
          <div className="mb-10 border border-[#e8ddd0] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#6b4c8a] to-[#8a6bab] text-white px-6 py-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[#c9a76c] rounded-full text-sm font-bold">1位</span>
              <div>
                <h3 className="text-lg font-bold">買取大吉</h3>
                <p className="text-xs text-white/80">全国1,800店超の圧倒的ネットワーク</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                買取大吉は、全国に1,800店舗以上を展開する業界最大級の買取専門店です。店頭持ち込み・出張買取・宅配買取の3つの方法に対応しており、お住まいのエリアや状況に応じて最適な方法を選べます。着物・帯・和装小物すべてに対応し、着物専門の査定員が在籍しているため、適正な価格での査定が期待できます。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-[#f3eef7] rounded-xl p-4">
                  <p className="text-sm font-bold text-[#6b4c8a] mb-2">特徴</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                      全国1,800店舗以上で業界最大級の店舗数
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                      出張・宅配・店頭の3つの買取方法に対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                      着物専門の査定員が在籍
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                      着物・帯・和装小物すべて対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                      査定料・出張料・キャンセル料すべて無料
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-[#edf7f0] rounded-xl p-4 mb-3">
                    <p className="text-sm font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9675; 店舗数が多く、近くに店舗が見つかりやすい</li>
                      <li>&#9675; 着物の専門知識があるため適正査定が期待できる</li>
                      <li>&#9675; 3つの買取方法から選べる柔軟さ</li>
                      <li>&#9675; 手数料がすべて無料で安心</li>
                    </ul>
                  </div>
                  <div className="bg-[#fdf2f2] rounded-xl p-4">
                    <p className="text-sm font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9651; 店舗によって査定員のスキルに差がある場合がある</li>
                      <li>&#9651; フランチャイズのため店舗により対応にばらつきがある</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-[#c9a76c] mb-1">こんな人におすすめ</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  店舗に直接持ち込んで、査定員と相談しながら売りたい方。全国どこにお住まいでも利用しやすく、初めて着物を売る方にも安心です。出張・宅配にも対応しているので、どの買取方法がいいか迷っている方にもおすすめです。
                </p>
              </div>

              <div className="text-right">
                <Link
                  href="/review/kaitori-daikichi/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6b4c8a] hover:text-[#5a3d75] transition-colors"
                >
                  買取大吉の詳しいレビューを見る
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---- 2位 ウリエル ---- */}
          <div className="mb-10 border border-[#e8ddd0] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#8a7240] to-[#c9a76c] text-white px-6 py-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full text-sm font-bold">2位</span>
              <div>
                <h3 className="text-lg font-bold">ウリエル</h3>
                <p className="text-xs text-white/80">出張買取専門・無店舗でコスト削減、高額査定に還元</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                ウリエルは出張買取を専門とする買取業者です。実店舗を持たないことで運営コストを削減し、その分を買取価格に反映させているのが特徴です。対応エリアは関東から関西、岡山まで幅広くカバーしています。着物をはじめ、骨董品・ブランド品・金・プラチナなど幅広い品目に対応しており、着物以外のものもまとめて査定してもらえます。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-[#faf5ee] rounded-xl p-4">
                  <p className="text-sm font-bold text-[#8a7240] mb-2">特徴</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a76c] shrink-0">&#9679;</span>
                      出張買取に特化した運営体制
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a76c] shrink-0">&#9679;</span>
                      無店舗経営でコスト削減→買取額に還元
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a76c] shrink-0">&#9679;</span>
                      女性査定士の指名が可能
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a76c] shrink-0">&#9679;</span>
                      着物含む幅広い品目に対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a76c] shrink-0">&#9679;</span>
                      関東〜関西・岡山エリア対応
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-[#edf7f0] rounded-xl p-4 mb-3">
                    <p className="text-sm font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9675; 店舗コストがない分、高額査定が期待できる</li>
                      <li>&#9675; 女性査定士を指名でき、一人暮らしの女性も安心</li>
                      <li>&#9675; 着物以外もまとめて売れるので手間が省ける</li>
                      <li>&#9675; 出張料・査定料・キャンセル料すべて無料</li>
                    </ul>
                  </div>
                  <div className="bg-[#fdf2f2] rounded-xl p-4">
                    <p className="text-sm font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9651; 対応エリアが限られる（東北・北海道・九州は非対応）</li>
                      <li>&#9651; 店頭持ち込みには対応していない</li>
                      <li>&#9651; 出張買取が中心のため、日程調整が必要</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-[#c9a76c] mb-1">こんな人におすすめ</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  自宅にいながら着物を売りたい方、特に大量の着物がある方や、着物以外にも売りたいものがある方。女性査定士を指名できるので、一人暮らしの女性にも安心です。関東〜関西・岡山にお住まいの方が対象です。
                </p>
              </div>

              <div className="text-right">
                <Link
                  href="/review/uriel/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6b4c8a] hover:text-[#5a3d75] transition-colors"
                >
                  ウリエルの詳しいレビューを見る
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---- 3位 RECLO ---- */}
          <div className="mb-10 border border-[#e8ddd0] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#c07090] to-[#e8a0b6] text-white px-6 py-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full text-sm font-bold">3位</span>
              <div>
                <h3 className="text-lg font-bold">RECLO（リクロ）</h3>
                <p className="text-xs text-white/80">宅配買取特化・高級着物やブランド品に強み</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                RECLO（リクロ）は、宅配買取に特化した買取サービスです。高級着物・ブランド品・骨董品・ジュエリーなど、比較的価値の高い品物の買取を得意としています。オンラインで完結するため、全国どこからでも利用できるのが魅力です。事前にLINEやメールで簡易査定ができるため、おおよその買取額を把握してから発送できます。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-[#fdf2f6] rounded-xl p-4">
                  <p className="text-sm font-bold text-[#c07090] mb-2">特徴</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e8a0b6] shrink-0">&#9679;</span>
                      宅配買取に完全特化
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e8a0b6] shrink-0">&#9679;</span>
                      高級品・ブランド品の査定に強い
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e8a0b6] shrink-0">&#9679;</span>
                      着物・骨董品・ジュエリーカテゴリ対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e8a0b6] shrink-0">&#9679;</span>
                      LINEやメールで事前に簡易査定可能
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e8a0b6] shrink-0">&#9679;</span>
                      全国対応（宅配のみ）
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-[#edf7f0] rounded-xl p-4 mb-3">
                    <p className="text-sm font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9675; 高級着物・作家物の査定に強く、高額買取が期待できる</li>
                      <li>&#9675; オンライン完結で手軽</li>
                      <li>&#9675; 事前査定で安心して発送できる</li>
                      <li>&#9675; ブランド品と一緒にまとめて査定可能</li>
                    </ul>
                  </div>
                  <div className="bg-[#fdf2f2] rounded-xl p-4">
                    <p className="text-sm font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9651; 宅配のみで出張・店頭持ち込みは不可</li>
                      <li>&#9651; 普段着用の着物や状態の悪い着物は買取不可の場合あり</li>
                      <li>&#9651; キャンセル時の返送料がかかる場合がある</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-[#c9a76c] mb-1">こんな人におすすめ</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  大島紬・加賀友禅・人間国宝の作品など、価値の高い着物を売りたい方。ブランド品や骨董品も一緒に売りたい方にも最適です。宅配のみの対応ですが、全国どこからでも利用できます。
                </p>
              </div>

              <div className="text-right">
                <Link
                  href="/review/reclo/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6b4c8a] hover:text-[#5a3d75] transition-colors"
                >
                  RECLOの詳しいレビューを見る
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---- 4位 ティファナ ---- */}
          <div className="mb-10 border border-[#e8ddd0] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#3d6b4c] to-[#5b8a6b] text-white px-6 py-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full text-sm font-bold">4位</span>
              <div>
                <h3 className="text-lg font-bold">ティファナ</h3>
                <p className="text-xs text-white/80">総合リサイクルショップ・ノーブランドからハイブランドまで</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                ティファナは、東京・神奈川を中心に展開する総合リサイクルショップです。着物・帯はもちろん、家電・家具・ブランド品・古着など幅広いジャンルの買取に対応しています。ノーブランドの着物からハイブランドの着物まで幅広く受け付けているのが特徴で、出張・宅配・店頭の3つの買取方法に対応しています。他社で断られた着物でも査定してもらえる可能性があります。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-[#eef5f0] rounded-xl p-4">
                  <p className="text-sm font-bold text-[#3d6b4c] mb-2">特徴</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b8a6b] shrink-0">&#9679;</span>
                      総合リサイクルショップとして幅広いジャンルに対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b8a6b] shrink-0">&#9679;</span>
                      出張・宅配・店頭の3つの買取方法に対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b8a6b] shrink-0">&#9679;</span>
                      ノーブランドからハイブランドまで対応
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b8a6b] shrink-0">&#9679;</span>
                      着物・帯カテゴリあり
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b8a6b] shrink-0">&#9679;</span>
                      最短即日対応が可能
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-[#edf7f0] rounded-xl p-4 mb-3">
                    <p className="text-sm font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9675; 着物以外のものもまとめて売れる（家電・家具なども）</li>
                      <li>&#9675; ノーブランドでも買取可能</li>
                      <li>&#9675; 即日対応でスピーディーに現金化</li>
                      <li>&#9675; 手数料がすべて無料</li>
                    </ul>
                  </div>
                  <div className="bg-[#fdf2f2] rounded-xl p-4">
                    <p className="text-sm font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9651; 着物専門ではないため、希少価値のある着物の査定に不安</li>
                      <li>&#9651; 対応エリアが関東中心で地方は宅配のみ</li>
                      <li>&#9651; 着物の買取相場は専門店に比べてやや低い傾向</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-[#c9a76c] mb-1">こんな人におすすめ</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  着物だけでなく、家電・家具・洋服・ブランド品など、いろんなものをまとめて売りたい方。引っ越しや遺品整理で大量のものを処分したい場合に特に便利です。ノーブランドの着物も受け付けているので、他社で断られた着物がある方にもおすすめです。
                </p>
              </div>

              <div className="text-right">
                <Link
                  href="/review/tifana/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6b4c8a] hover:text-[#5a3d75] transition-colors"
                >
                  ティファナの詳しいレビューを見る
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ---- 5位 ヒカカク！ ---- */}
          <div className="mb-10 border border-[#e8ddd0] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#3d5a7a] to-[#4c6e8a] text-white px-6 py-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full text-sm font-bold">5位</span>
              <div>
                <h3 className="text-lg font-bold">ヒカカク！</h3>
                <p className="text-xs text-white/80">買取比較サイト・最大20社一括査定</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                ヒカカク！は、複数の買取業者に一括で査定を依頼できる買取比較サイトです。着物・振袖カテゴリがあり、最大20社の買取業者に一括で査定を依頼できます。買取業者そのものではなく、業者とユーザーをマッチングするプラットフォームという位置づけです。口コミ・評判が豊富に掲載されており、業者選びの参考になります。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-[#eef1f5] rounded-xl p-4">
                  <p className="text-sm font-bold text-[#3d5a7a] mb-2">特徴</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4c6e8a] shrink-0">&#9679;</span>
                      最大20社に一括査定を依頼できる
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4c6e8a] shrink-0">&#9679;</span>
                      買取比較サイト（プラットフォーム）
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4c6e8a] shrink-0">&#9679;</span>
                      着物・振袖カテゴリあり
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4c6e8a] shrink-0">&#9679;</span>
                      口コミ・評判が豊富
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4c6e8a] shrink-0">&#9679;</span>
                      利用料完全無料
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-[#edf7f0] rounded-xl p-4 mb-3">
                    <p className="text-sm font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9675; 複数業者の査定額を簡単に比較できる</li>
                      <li>&#9675; 利用者の口コミが豊富で業者選びの参考になる</li>
                      <li>&#9675; 利用料が完全無料</li>
                      <li>&#9675; 全国対応で地方在住でも使いやすい</li>
                    </ul>
                  </div>
                  <div className="bg-[#fdf2f2] rounded-xl p-4">
                    <p className="text-sm font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>&#9651; 自社で買取を行うわけではない（仲介サービス）</li>
                      <li>&#9651; 査定依頼後に複数業者から連絡が来ることがある</li>
                      <li>&#9651; 登録業者の質にばらつきがある可能性</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf8f5] rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-[#c9a76c] mb-1">こんな人におすすめ</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  「とにかく最高値で売りたい」「どの業者がいいか自分で比較したい」という方。複数の業者に一括で査定を依頼できるため、手間をかけずに最も高い査定額を提示してくれる業者を見つけられます。他の業者と併用するのもおすすめです。
                </p>
              </div>

              <div className="text-right">
                <Link
                  href="/review/hikakaku/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6b4c8a] hover:text-[#5a3d75] transition-colors"
                >
                  ヒカカク！の詳しいレビューを見る
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* H2: 5社を6つの基準で徹底比較 */}
        {/* ========================================== */}
        <section id="comparison" className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#6b4c8a]">
            5社を6つの基準で徹底比較
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            ここからは、おすすめ5社を「買取方法・対応エリア」「着物の買取実績・専門性」「手数料・キャンセル料」「口コミ・評判」「買取価格」「対応スピード」の6つの基準で詳しく比較していきます。
          </p>

          {/* ① 買取方法・対応エリア比較 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              ① 買取方法・対応エリア比較
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              買取方法と対応エリアは業者選びの最も基本的なポイントです。お住まいのエリアで利用可能か、希望する買取方法に対応しているかを確認しましょう。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#f3eef7]">
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">業者名</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-center font-bold text-gray-900">出張</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-center font-bold text-gray-900">宅配</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-center font-bold text-gray-900">店頭</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">対応エリア</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">買取大吉</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">全国（1,800店超）</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ウリエル</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-red-400">&times;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">関東〜関西・岡山</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">RECLO</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-red-400">&times;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-red-400">&times;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">全国（宅配のみ）</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ティファナ</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">関東中心（出張）、全国（宅配）</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ヒカカク！</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-gray-400" colSpan={3}>一括査定サービス（業者による）</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">全国</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              3つの買取方法すべてに対応しているのは<strong>買取大吉</strong>と<strong>ティファナ</strong>の2社です。出張買取を重視するなら<strong>ウリエル</strong>、宅配買取のみで良いなら<strong>RECLO</strong>も選択肢に入ります。<strong>ヒカカク！</strong>は比較サイトなので、登録業者の対応方法によって異なります。
            </p>
          </div>

          {/* ② 着物の買取実績・専門性 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              ② 着物の買取実績・専門性
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              着物の価値を正しく見極めるには専門知識が不可欠です。各社の着物に対する専門性と実績を比較してみましょう。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#f3eef7]">
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">業者名</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">着物の専門性</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">対応品目</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">得意分野</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">買取大吉</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">高（専門査定員在籍）</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">着物・帯・和装小物全般</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">産地物・作家物・アンティーク</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ウリエル</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">中〜高</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">着物含む幅広い品目</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">出張買取全般</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">RECLO</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">高（高級品専門）</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">着物・骨董品・ジュエリー</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">高級着物・ブランド品</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ティファナ</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">中（総合リサイクル）</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">着物・帯含む全ジャンル</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">大量買取・即日対応</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ヒカカク！</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">業者による</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">着物・振袖カテゴリあり</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">複数業者の比較</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              着物の専門性が最も高いのは<strong>買取大吉</strong>と<strong>RECLO</strong>です。買取大吉は着物専門の査定員が在籍しており、幅広い種類の着物に対応しています。RECLOは高級品に特化しているため、作家物や産地物の査定に強みがあります。ウリエルも着物の査定に力を入れていますが、総合的な品目を扱うため着物に特化した専門性では一歩譲ります。ティファナは総合リサイクルショップとしての幅広さが強みで、着物の専門性はやや控えめです。
            </p>
          </div>

          {/* ③ 手数料・キャンセル料 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              ③ 手数料・キャンセル料
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              着物買取では「査定料」「出張料」「キャンセル料」「返送料」の4つの手数料が重要です。各社の手数料体系を比較します。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#f3eef7]">
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">業者名</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-center font-bold text-gray-900">査定料</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-center font-bold text-gray-900">出張料</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-center font-bold text-gray-900">キャンセル料</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-center font-bold text-gray-900">返送料（宅配）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">買取大吉</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ウリエル</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">RECLO</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-gray-400">-</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-[#c9a76c] font-bold">条件あり</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ティファナ</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">無料</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ヒカカク！</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold" colSpan={4}>利用料完全無料（業者の手数料は各社による）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              手数料面で最も安心なのは<strong>買取大吉</strong>と<strong>ウリエル</strong>です。査定料・出張料・キャンセル料・返送料のすべてが無料なので、気軽に査定を依頼できます。ティファナも同様にすべて無料です。RECLOは宅配買取の返送料について条件が設けられていますので、利用前に確認が必要です。ヒカカク！はプラットフォームとしての利用料は無料ですが、実際の買取業者の手数料は各社に確認が必要です。
            </p>
          </div>

          {/* ④ 口コミ・評判の傾向 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              ④ 口コミ・評判の傾向
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              実際に利用した方の口コミや評判から、各社の傾向をまとめました。
            </p>
            <div className="space-y-4 mb-4">
              <div className="border border-[#e8ddd0] rounded-xl p-5 hover:bg-[#faf8f5] transition-colors">
                <p className="text-sm font-bold text-gray-900 mb-2">買取大吉の口コミ傾向</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">査定額に満足</span>
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">丁寧な説明</span>
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">店舗が近くにある</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  「近くの店舗で気軽に査定してもらえた」「着物の知識がある査定員で安心できた」「査定額の根拠を丁寧に説明してくれた」という声が多く見られます。一方で「店舗によって対応に差がある」という口コミもあり、フランチャイズならではのばらつきが指摘されることがあります。
                </p>
              </div>
              <div className="border border-[#e8ddd0] rounded-xl p-5 hover:bg-[#faf8f5] transition-colors">
                <p className="text-sm font-bold text-gray-900 mb-2">ウリエルの口コミ傾向</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">高額査定</span>
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">女性査定士が安心</span>
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">まとめ売りが便利</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  「他社より高い査定額を提示してもらえた」「女性の査定士を指名できて安心だった」「着物以外もまとめて売れて助かった」という口コミが目立ちます。「対応エリアがもう少し広ければ」という声もあり、地方在住の方からは利用できないことへの不満も見られます。
                </p>
              </div>
              <div className="border border-[#e8ddd0] rounded-xl p-5 hover:bg-[#faf8f5] transition-colors">
                <p className="text-sm font-bold text-gray-900 mb-2">RECLO（リクロ）の口コミ傾向</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">高級品の査定に満足</span>
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">オンラインで手軽</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  「高級着物を適正価格で買い取ってもらえた」「LINEで事前査定ができて便利」という高評価の口コミが多い一方、「普段着レベルの着物は買取不可だった」「返送料がかかった」という声もあります。高級品に特化しているため、すべての着物が対象というわけではない点に注意が必要です。
                </p>
              </div>
              <div className="border border-[#e8ddd0] rounded-xl p-5 hover:bg-[#faf8f5] transition-colors">
                <p className="text-sm font-bold text-gray-900 mb-2">ティファナの口コミ傾向</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">対応が早い</span>
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">何でも買い取ってくれる</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  「即日対応してくれて助かった」「他では断られた着物も買い取ってくれた」「引っ越し前にまとめて処分できた」という口コミが多いです。ただし「着物専門店ほどの査定額にはならなかった」という声もあり、着物の価値よりもスピードや利便性を重視する方に向いている印象です。
                </p>
              </div>
              <div className="border border-[#e8ddd0] rounded-xl p-5 hover:bg-[#faf8f5] transition-colors">
                <p className="text-sm font-bold text-gray-900 mb-2">ヒカカク！の口コミ傾向</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">比較が簡単</span>
                  <span className="text-xs bg-[#edf7f0] text-green-700 px-2 py-0.5 rounded-full">最高値が見つかる</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  「複数業者を比較できて便利」「一括査定で一番高い業者を見つけられた」という口コミが多い一方、「査定依頼後にたくさんの業者から電話がかかってきた」「対応が遅い業者もあった」という声もあります。比較サイトとしての機能は便利ですが、業者の質はばらつきがある点に注意が必要です。
                </p>
              </div>
            </div>
          </div>

          {/* ⑤ 買取価格の傾向 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              ⑤ 買取価格の傾向
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              着物の買取価格は、種類・状態・業者によって大きく異なります。以下は各社の買取価格の一般的な傾向をまとめたものです。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#f3eef7]">
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">業者名</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">価格傾向</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">高額になりやすい着物</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">買取大吉</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">中〜高</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">産地物・作家物・正絹</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">専門査定で適正価格</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ウリエル</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">中〜高</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">状態の良い着物全般</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">コスト削減分を還元</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">RECLO</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">高（高級品限定）</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">人間国宝・有名作家・ブランド</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">普段着は買取対象外の場合あり</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ティファナ</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">低〜中</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">大量まとめ売り</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">幅広い品物を受け入れ</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ヒカカク！</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">業者による</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">-</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">複数社比較で最高値を狙える</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
              <p className="text-sm font-bold text-[#6b4c8a] mb-2">着物の種類別 買取相場の目安</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#f3eef7]">
                      <th className="border border-[#e8ddd0] px-3 py-2 text-left font-bold text-gray-900">着物の種類</th>
                      <th className="border border-[#e8ddd0] px-3 py-2 text-left font-bold text-gray-900">買取相場</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">振袖</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">5,000円〜50,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">訪問着</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">3,000円〜30,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">留袖（黒留袖・色留袖）</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">2,000円〜20,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">大島紬</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">10,000円〜100,000円以上</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">結城紬</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">10,000円〜80,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">加賀友禅</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">8,000円〜50,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">京友禅</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">5,000円〜30,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">帯（袋帯・名古屋帯）</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">1,000円〜30,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">小紋</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">500円〜5,000円</td></tr>
                    <tr><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">浴衣</td><td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">100円〜3,000円</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">※上記は一般的な相場であり、状態・作家・産地により大きく変動します。</p>
            </div>
          </div>

          {/* ⑥ 対応スピード */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              ⑥ 対応スピード
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              急いで着物を売りたい場合は、対応スピードも重要なポイントです。各社の対応スピードを比較してみましょう。
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#f3eef7]">
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">業者名</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">査定までの目安</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">現金化までの目安</th>
                    <th className="border border-[#e8ddd0] px-4 py-3 text-left font-bold text-gray-900">即日対応</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">買取大吉</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">店頭:即日 / 出張:2〜3日で訪問</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">店頭・出張:即日 / 宅配:3〜5日</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ウリエル</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">出張:最短翌日訪問</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">出張:即日 / 宅配:3〜5日</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-[#c9a76c] font-bold">&#9651;</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">RECLO</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">到着後1〜3日</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">承諾後3〜5営業日で振込</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-red-400">&times;</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ティファナ</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">最短即日対応</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">店頭・出張:即日 / 宅配:2〜4日</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-green-600 font-bold">&#9675;</td>
                  </tr>
                  <tr className="hover:bg-[#faf8f5]">
                    <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ヒカカク！</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">業者による（1〜3日で連絡）</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">業者による</td>
                    <td className="border border-[#e8ddd0] px-4 py-3 text-center text-gray-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              対応スピードが最も速いのは<strong>ティファナ</strong>と<strong>買取大吉</strong>です。特にティファナは最短即日で出張査定から現金化まで対応可能です。買取大吉も店頭持ち込みなら即日で現金化できます。急ぎでない場合は、RECLOの宅配買取やヒカカク！の一括査定でじっくり比較するのがおすすめです。
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* H2: タイプ別おすすめ */}
        {/* ========================================== */}
        <section id="type-recommend" className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#6b4c8a]">
            タイプ別おすすめはコレ！
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            「結局、自分にはどの業者が合っているの？」という方のために、タイプ別のおすすめをまとめました。あなたの状況に合った業者を選んでみてください。
          </p>

          {/* 店舗に持ち込みたい → 買取大吉 */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 pl-4 border-l-4 border-[#c9a76c]">
              店舗に持ち込みたい人 → 買取大吉
            </h3>
            <div className="bg-[#f3eef7] rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「自分の目で見てもらいながら査定してほしい」「その場で現金を受け取りたい」という方には、<strong>買取大吉</strong>がベストです。
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#10003;</span>
                  全国1,800店舗以上で自宅から近い店舗が見つかりやすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#10003;</span>
                  予約不要で飛び込みOKの店舗も多い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#10003;</span>
                  査定員と直接やり取りできるので安心感がある
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#10003;</span>
                  査定額に納得できなければ、その場で断れる
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                少量（1〜5枚程度）の着物であれば、買い物のついでに持ち込むのもおすすめです。
              </p>
            </div>
          </div>

          {/* 自宅で完結したい → ウリエル */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 pl-4 border-l-4 border-[#c9a76c]">
              自宅で完結したい人 → ウリエル
            </h3>
            <div className="bg-[#faf5ee] rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「重い着物を運ぶのが大変」「自宅でゆっくり査定してほしい」という方には、<strong>ウリエル</strong>がぴったりです。
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0">&#10003;</span>
                  出張買取専門で、自宅から一歩も出ずに完結
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0">&#10003;</span>
                  大量の着物でもまとめて査定してもらえる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0">&#10003;</span>
                  女性査定士の指名が可能で一人暮らしでも安心
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] shrink-0">&#10003;</span>
                  無店舗経営のコスト削減分が買取額に反映される
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                対応エリアは関東〜関西・岡山です。事前に対応エリア内かご確認ください。
              </p>
            </div>
          </div>

          {/* 高級着物を売りたい → RECLO */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 pl-4 border-l-4 border-[#c9a76c]">
              高級着物を売りたい人 → RECLO（リクロ）
            </h3>
            <div className="bg-[#fdf2f6] rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「大島紬や人間国宝の作品など、価値の高い着物を適正価格で売りたい」という方には、<strong>RECLO</strong>がおすすめです。
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#e8a0b6] shrink-0">&#10003;</span>
                  高級品の査定に特化した専門スタッフ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8a0b6] shrink-0">&#10003;</span>
                  LINEやメールで事前に簡易査定が可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8a0b6] shrink-0">&#10003;</span>
                  ブランド品やジュエリーも一緒に売れる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8a0b6] shrink-0">&#10003;</span>
                  全国対応の宅配買取でどこからでも利用可能
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                普段着用の着物や状態の悪い着物は買取対象外になる場合があります。事前にLINE査定で確認するのがおすすめです。
              </p>
            </div>
          </div>

          {/* いろんなものをまとめて売りたい → ティファナ */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 pl-4 border-l-4 border-[#c9a76c]">
              いろんなものをまとめて売りたい人 → ティファナ
            </h3>
            <div className="bg-[#eef5f0] rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「着物だけでなく、家電や家具、洋服なども一緒に売りたい」「引っ越しや遺品整理でまとめて処分したい」という方には、<strong>ティファナ</strong>が便利です。
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#5b8a6b] shrink-0">&#10003;</span>
                  着物以外のあらゆるジャンルに対応
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5b8a6b] shrink-0">&#10003;</span>
                  ノーブランドの着物でも買取OK
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5b8a6b] shrink-0">&#10003;</span>
                  最短即日対応でスピーディー
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5b8a6b] shrink-0">&#10003;</span>
                  出張・宅配・店頭の3つの方法に対応
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                着物の価値を重視するなら専門店との併用がおすすめです。まとめ売りの利便性を優先する方に最適です。
              </p>
            </div>
          </div>

          {/* 複数業者で比較したい → ヒカカク！ */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3 pl-4 border-l-4 border-[#c9a76c]">
              複数業者で比較したい人 → ヒカカク！
            </h3>
            <div className="bg-[#eef1f5] rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                「一番高く買い取ってくれる業者を見つけたい」「自分で比較して納得してから売りたい」という方には、<strong>ヒカカク！</strong>が最適です。
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#4c6e8a] shrink-0">&#10003;</span>
                  最大20社に一括査定を依頼可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4c6e8a] shrink-0">&#10003;</span>
                  利用者の口コミ・評判が豊富で参考になる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4c6e8a] shrink-0">&#10003;</span>
                  利用料は完全無料
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4c6e8a] shrink-0">&#10003;</span>
                  全国どこからでも利用可能
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                査定依頼後に複数の業者から連絡が来ることがあります。連絡対応が苦にならない方におすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* H2: 着物買取の流れ */}
        {/* ========================================== */}
        <section id="flow" className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#6b4c8a]">
            着物買取の流れ（出張・宅配・持ち込み）
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
            着物買取が初めての方のために、3つの買取方法それぞれの流れを詳しく解説します。どの方法でも、基本的な流れは「申し込み → 査定 → 金額提示 → 承諾 → 支払い」です。
          </p>

          {/* 出張買取の流れ */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              出張買取の流れ
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#6b4c8a] text-white rounded-full text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">電話またはWebで申し込み</p>
                  <p className="text-sm text-gray-700 leading-relaxed">買取業者の公式サイトまたは電話で出張買取を申し込みます。希望の日時・住所・買取希望品の概要を伝えましょう。ウリエルの場合、この時点で女性査定士の指名も可能です。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#6b4c8a] text-white rounded-full text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">査定員が自宅を訪問</p>
                  <p className="text-sm text-gray-700 leading-relaxed">指定した日時に査定員が自宅に訪問します。着物を1点ずつ丁寧に確認し、種類・状態・産地・作家などを見極めます。所要時間は点数にもよりますが、30分〜1時間程度が目安です。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#6b4c8a] text-white rounded-full text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">査定額の提示・説明</p>
                  <p className="text-sm text-gray-700 leading-relaxed">査定が完了したら、1点ごとまたはまとめて買取金額が提示されます。金額の根拠について質問すれば、丁寧に説明してもらえます。買取大吉は特に査定理由の説明が丁寧と評判です。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#6b4c8a] text-white rounded-full text-sm font-bold shrink-0">4</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">承諾 → その場で現金支払い</p>
                  <p className="text-sm text-gray-700 leading-relaxed">査定額に納得できたら、身分証明書を提示して買取契約を結びます。その場で現金を受け取れます。納得できない場合はキャンセルしても問題ありません。キャンセル料はかかりません。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 宅配買取の流れ */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              宅配買取の流れ
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#c9a76c] text-white rounded-full text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Webまたは電話で申し込み・梱包キット到着</p>
                  <p className="text-sm text-gray-700 leading-relaxed">公式サイトまたは電話で宅配買取を申し込みます。多くの業者では無料の梱包キット（段ボール・緩衝材・伝票など）を送ってくれます。RECLOの場合はLINEで事前に簡易査定を受けることもできます。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#c9a76c] text-white rounded-full text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">着物を梱包して発送</p>
                  <p className="text-sm text-gray-700 leading-relaxed">着物を畳んで梱包し、身分証明書のコピーと一緒に発送します。送料は業者負担が一般的です。証紙や付属品がある場合は必ず一緒に入れましょう。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#c9a76c] text-white rounded-full text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">査定結果の連絡</p>
                  <p className="text-sm text-gray-700 leading-relaxed">着物到着後、1〜3日程度で査定が完了し、メールや電話で査定額が通知されます。1点ごとの内訳を教えてくれる業者もあります。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#c9a76c] text-white rounded-full text-sm font-bold shrink-0">4</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">承諾 → 銀行振込で支払い</p>
                  <p className="text-sm text-gray-700 leading-relaxed">査定額に承諾すると、指定の銀行口座に振り込まれます。振込までの期間は業者によって異なりますが、3〜5営業日程度が一般的です。キャンセルの場合は着物が返送されます（返送料の負担は業者によって異なります）。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 店頭持ち込みの流れ */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#c9a76c]">
              店頭持ち込みの流れ
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#e8a0b6] text-white rounded-full text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">店舗に着物を持参</p>
                  <p className="text-sm text-gray-700 leading-relaxed">買取業者の店舗に着物を持ち込みます。予約不要で受け付けている店舗も多いですが、混雑を避けるために事前に電話で確認しておくとスムーズです。買取大吉は全国1,800店超なので、最寄りの店舗が見つかりやすいです。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#e8a0b6] text-white rounded-full text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">その場で査定</p>
                  <p className="text-sm text-gray-700 leading-relaxed">店頭で査定員が着物を確認します。目の前で査定してもらえるので、気になる点をその場で質問できます。所要時間は30分〜1時間程度です。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#e8a0b6] text-white rounded-full text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">査定額に納得 → 即日現金化</p>
                  <p className="text-sm text-gray-700 leading-relaxed">査定額に納得できたら、身分証明書を提示してその場で現金を受け取れます。最も早く現金化できる方法です。納得できなければ、もちろんキャンセルして持ち帰ることもできます。</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#fdf2f6] to-[#f3eef7] border border-[#e8ddd0] rounded-xl p-5 mt-6">
              <p className="text-sm font-bold text-gray-900 mb-2">買取時に必要なもの</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                  <strong>本人確認書類</strong>（運転免許証、マイナンバーカード、パスポートなど）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                  <strong>着物本体</strong>（畳紙に包んだ状態が理想的）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                  <strong>証紙・落款</strong>（ある場合は必ず添付。査定額が大幅に上がることがあります）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b4c8a] shrink-0">&#9679;</span>
                  <strong>帯・和装小物</strong>（セットで出すと査定額アップの可能性）
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* H3: がっかりしないための注意点 */}
        {/* ========================================== */}
        <section className="mb-16">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-[#e8ddd0]">
            着物買取で「がっかり」しないための3つの注意点
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            着物買取で「思ったより安かった」「値段がつかなかった」という声は少なくありません。実際に、マイベストの調査データによると<strong>着物専門店とリサイクルショップでは買取額に約5倍の差</strong>が生じるケースもあります。がっかりしないために、以下の3点を押さえましょう。
          </p>
          <div className="space-y-4">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">1. 着物専門の買取業者を選ぶ</p>
              <p className="text-sm text-gray-700">
                総合リユースショップでは着物の専門知識を持つ査定士が不在の場合が多く、産地物や作家物の価値を正しく評価できません。着物専門の買取業者なら、証紙や落款から正確な価値を判断でき、査定額が大幅に変わります。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">2. 複数業者で相見積もりを取る</p>
              <p className="text-sm text-gray-700">
                1社だけの査定では適正価格かどうか判断できません。最低でも2〜3社に査定を依頼し、金額を比較しましょう。出張買取なら無料で査定してもらえる業者がほとんどです。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">3. 証紙・付属品を揃えて査定に出す</p>
              <p className="text-sm text-gray-700">
                証紙（産地証明）や落款（作家の印）があるだけで、査定額が数万円単位で変わることがあります。畳紙（たとう紙）や帯、和装小物もセットで出すと評価が上がる傾向があります。
              </p>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* H2: よくある質問（FAQ） */}
        {/* ========================================== */}
        <section id="faq" className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#6b4c8a]">
            よくある質問（FAQ）
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            着物買取に関してよく寄せられる質問と回答をまとめました。不安や疑問を解消してから、安心して査定を依頼しましょう。
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-[#e8ddd0] rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-[#f3eef7] rounded-xl transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#6b4c8a] text-white rounded-full text-xs font-bold shrink-0">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-[#6b4c8a] shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed pl-14">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* H2: まとめ */}
        {/* ========================================== */}
        <section id="matome" className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#6b4c8a]">
            まとめ
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            着物買取おすすめ5社を6つの基準で徹底比較してきました。最後に、各社の特徴をもう一度整理しておきます。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">業者名</th>
                  <th className="border border-[#5a3d75] px-4 py-3 text-left font-bold">こんな人におすすめ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">買取大吉</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">店舗で直接査定してほしい、初めてで安心感がほしい</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ウリエル</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">自宅で完結したい、女性査定士を希望</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">RECLO</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">高級着物・作家物を適正価格で売りたい</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ティファナ</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">着物以外もまとめて売りたい、すぐに現金化したい</td>
                </tr>
                <tr className="hover:bg-[#faf8f5]">
                  <td className="border border-[#e8ddd0] px-4 py-3 font-bold text-gray-900">ヒカカク！</td>
                  <td className="border border-[#e8ddd0] px-4 py-3 text-gray-700">複数業者で比較して最高値を狙いたい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-[#f3eef7] via-[#faf5ee] to-[#fdf2f6] border border-[#e8ddd0] rounded-2xl p-6 md:p-8 mb-6">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              着物買取で最も大切なのは、<strong>複数の業者に査定を依頼して比較すること</strong>です。同じ着物でも業者によって査定額が数千円〜数万円変わることは珍しくありません。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              迷ったら、まずは<strong>買取大吉</strong>で着物専門の査定員に見てもらい、並行して<strong>ヒカカク！</strong>で複数社の査定額を比較するのがおすすめです。高級着物であれば<strong>RECLO</strong>にも査定を依頼してみましょう。
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              いずれの業者も査定は無料です。大切な着物を納得のいく価格で手放すために、ぜひ複数社の査定を活用してください。
            </p>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            ※本記事の情報は2026年4月時点のものです。各社のサービス内容や手数料は変更される場合がありますので、最新情報は各社の公式サイトでご確認ください。<br />
            ※買取価格は着物の種類・状態・市場動向によって変動します。記載の相場はあくまで目安です。
          </p>
        </section>
      </article>

      {/* CTA */}
      <section className="section-primary-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#c9a76c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#6b4c8a]/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            まずは無料査定で
            <br />
            お持ちの着物の価値を確認しませんか？
          </h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            査定は完全無料。納得いかなければキャンセルもOKです。
            <br className="hidden md:block" />
            大切な着物を、信頼できる業者に任せましょう。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/review/kaitori-daikichi/" className="btn-cta text-base">
              1位 買取大吉の詳細を見る
            </Link>
            <Link href="/review/uriel/" className="btn-outline text-base">
              2位 ウリエルの詳細を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
