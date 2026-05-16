import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取 高齢者向けガイド｜80代の祖母でも安心な業者の選び方",
  description:
    "高齢者が安心して着物買取を利用するための完全ガイド。80代の祖母でも安心できる出張買取業者の選び方、トラブル防止策、女性査定員対応、クーリングオフ制度まで詳しく解説。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクを比較。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/elderly-guide/",
  },
  openGraph: {
    title: "着物買取 高齢者向けガイド｜80代の祖母でも安心な業者の選び方",
    description:
      "高齢者が安心して着物買取を利用するための業者選びと注意点。出張買取・女性査定員対応も解説。",
    url: "https://kimonokaitori-biyori.com/articles/elderly-guide/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "80代の祖母一人でも出張買取を依頼して大丈夫ですか？",
    answer:
      "大手買取業者であれば安心して依頼できます。ウリエルや買取大吉は女性査定員の指名が可能で、丁寧な対応に定評があります。ただし、ご心配であればご家族が同席されることをおすすめします。電話での事前相談も可能なので、不安な点は事前に確認しておきましょう。クーリングオフ制度（8日間）も適用されるため、万が一のときも安心です。",
  },
  {
    question: "認知症の家族の着物を代わりに売ることはできますか？",
    answer:
      "ご家族の着物を代理で売ることは可能ですが、いくつか注意点があります。まず、所有者本人の同意が必要です。認知症の程度によっては成年後見人を通じた手続きが必要になる場合もあります。買取業者に事前に相談すれば、必要な書類や手続きについて案内してもらえます。トラブルを避けるため、親族間で事前に話し合いをしておくことが大切です。",
  },
  {
    question: "高齢者を狙った悪質な訪問買取業者の見分け方は？",
    answer:
      "悪質な業者の特徴として、(1)突然の電話や訪問で買取を持ちかけてくる、(2)「今すぐ売らないと損をする」と急かす、(3)古物商許可証を提示しない、(4)着物以外の貴金属も見せるよう要求する、(5)クーリングオフの説明をしない、などがあります。信頼できる業者は自ら営業訪問をすることはなく、必ず依頼者側からの申し込みで訪問します。",
  },
  {
    question: "足が不自由で店舗に行けない場合はどうすればいいですか？",
    answer:
      "出張買取を利用すれば、自宅にいながら査定を受けられます。買取大吉やウリエルは全国各地で出張買取に対応しており、出張費・査定料は無料です。また、宅配買取であれば、梱包キットが自宅に届き、集荷も自宅で行えるため外出の必要がありません。RECLOの宅配買取は梱包キット・送料ともに無料で利用できます。",
  },
  {
    question: "生前整理として着物を買取してもらう場合の注意点は？",
    answer:
      "生前整理で着物を買取に出す場合は、(1)家族に相談してから進める、(2)思い出の品は残す・売る・譲るを分けておく、(3)証紙や購入証明書を探しておく、(4)複数の業者に見積もりを依頼する、(5)急がされても即決しない、の5点に注意しましょう。また、クーリングオフ制度を知っておくと安心です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取 高齢者向けガイド｜80代の祖母でも安心な業者の選び方",
  description:
    "高齢者が安心して着物買取を利用するための業者選びと注意点。出張買取・女性査定員対応も解説。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
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
    "@id": "https://kimonokaitori-biyori.com/articles/elderly-guide/",
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
      name: "高齢者向け着物買取ガイド",
      item: "https://kimonokaitori-biyori.com/articles/elderly-guide/",
    },
  ],
};

export default function ElderlyGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <Breadcrumb
        items={[
          { label: "コラム", href: "/articles/" },
          { label: "高齢者向け着物買取ガイド" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              高齢者・ご家族向け
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取 高齢者向けガイド</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                80代の祖母でも安心な業者の選び方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              高齢のご家族が着物を売りたいとお考えの方へ。安心して利用できる買取業者の選び方、悪質業者の見分け方、女性査定員対応、クーリングオフ制度まで、高齢者ならではの注意点を網羅した完全ガイドです。
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
                <li><a href="#why" className="text-[#6b4c8a] hover:underline">1. 高齢者の着物買取が増えている背景</a></li>
                <li><a href="#risks" className="text-[#6b4c8a] hover:underline">2. 高齢者が注意すべき悪質業者の手口</a></li>
                <li><a href="#safe-choice" className="text-[#6b4c8a] hover:underline">3. 安心できる業者を選ぶ5つのチェックポイント</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">4. 高齢者におすすめの着物買取業者5選</a></li>
                <li><a href="#flow" className="text-[#6b4c8a] hover:underline">5. 出張買取の利用の流れ（高齢者向け）</a></li>
                <li><a href="#cooling-off" className="text-[#6b4c8a] hover:underline">6. クーリングオフ制度について</a></li>
                <li><a href="#family" className="text-[#6b4c8a] hover:underline">7. ご家族がサポートできること</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 高齢者の着物買取が増えている背景 */}
      <section id="why" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            高齢者の着物買取が増えている背景
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              近年、高齢者が着物を手放すケースが増えています。その主な理由は以下の通りです。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
                <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">生前整理・終活</h3>
                <p className="text-sm text-gray-700">
                  元気なうちに身の回りを整理したいという方が増えています。着物は特にかさばるため、生前整理の対象になりやすい品目です。お子さんやお孫さんが着物を着ない場合、保管し続けるよりも適正価格で売却する方が合理的です。
                </p>
              </div>
              <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
                <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">施設入居・引っ越し</h3>
                <p className="text-sm text-gray-700">
                  介護施設への入居や高齢者向けマンションへの引っ越しを機に、着物を手放す方も多くいます。スペースの制約から大量の着物を持ち込めないため、信頼できる業者に買い取ってもらうニーズが高まっています。
                </p>
              </div>
              <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
                <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">保管の負担軽減</h3>
                <p className="text-sm text-gray-700">
                  着物の適切な保管には虫干しやたとう紙の交換など定期的なメンテナンスが必要です。体力的に負担を感じるようになった方が、カビやシミが発生する前に売却を決断するケースが増えています。
                </p>
              </div>
              <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
                <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">遺品整理の回避</h3>
                <p className="text-sm text-gray-700">
                  「子どもに遺品整理の負担をかけたくない」というお気持ちから、生前に着物を整理する方もいらっしゃいます。大切な着物を自分の意思で適切に処分できるうちに、信頼できる業者に託したいというご要望です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 悪質業者の手口 */}
      <section id="risks" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            高齢者が注意すべき悪質業者の手口
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            国民生活センターには毎年、高齢者からの「訪問購入」に関する相談が多数寄せられています。以下のような手口に注意しましょう。詳しくは<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] hover:underline">着物買取トラブル防止ガイド</Link>もご覧ください。
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2 text-base">手口1：突然の電話勧誘・訪問営業</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「不用品を買い取ります」「お宅に眠っている古い着物はありませんか？」と電話や訪問で接触してくる業者は要注意です。信頼できる買取業者は、消費者側からの依頼がなければ訪問しません。突然の勧誘は断ってください。
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2 text-base">手口2：着物を口実にした貴金属の押し買い</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「着物を見せてほしい」と言って訪問し、着物は安値で査定しながら「他に金やプラチナのアクセサリーはないか」と強引に貴金属も買い取ろうとする手口です。着物以外の品物を見せるよう要求する業者は悪質業者の可能性が高いです。
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2 text-base">手口3：「今だけ」「今日だけ」と急かす</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「今日中に決めてもらえれば高く買える」「明日になると相場が下がる」など、即決を迫る業者は危険です。信頼できる業者は「他社との比較も検討してください」と余裕を持った対応をしてくれます。
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2 text-base">手口4：クーリングオフの説明がない</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                出張買取（訪問購入）にはクーリングオフ制度が適用されます。契約時にクーリングオフの説明を行わない業者は法律違反です。また、「クーリングオフはできません」と虚偽の説明をする業者も存在するので注意してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 安心できる業者を選ぶチェックポイント */}
      <section id="safe-choice" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            安心できる業者を選ぶ5つのチェックポイント
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 古物商許可証を持っている</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                中古品の売買には古物商許可証が必須です。Webサイトや名刺に許可番号が記載されているか確認しましょう。買取大吉やウリエルなど大手業者は、公式サイトに許可番号を明記しています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 女性査定員を指名できる</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                一人暮らしの高齢女性にとって、見知らぬ男性を自宅に上げることに不安を感じる方は多いです。ウリエルや買取大吉は女性査定員の指名が可能で、安心して出張買取を利用できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. クーリングオフの説明がある</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                出張買取（訪問購入）ではクーリングオフ制度が適用されます。契約時に書面でクーリングオフについて説明してくれる業者は信頼できます。不明点があれば査定員に遠慮なく質問しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. キャンセルが自由にできる</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                査定額に納得できない場合、無理な営業をせずにキャンセルを受け入れてくれる業者を選びましょう。買取大吉・ウリエル・RECLOはいずれもキャンセル料無料で、断っても費用は一切かかりません。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. 口コミ・評判が良い</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Googleの口コミやSNSでの評判を確認しましょう。特に「対応が丁寧だった」「高齢の母でも安心できた」といった口コミがある業者は信頼性が高いです。<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">おすすめランキング</Link>も参考にしてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ5選 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            高齢者におすすめの着物買取業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            高齢者の方でも安心して利用できる、信頼性の高い買取業者5社をご紹介します。いずれも出張費・査定料・キャンセル料が無料で、丁寧な対応に定評があります。
          </p>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。店舗が多いため「近くの店舗に息子・娘に連れて行ってもらう」という利用法も可能。出張買取は全国対応で、事前に電話で相談できます。査定員の対応が丁寧で、高齢者にも分かりやすく説明してくれると口コミで評判です。クーリングオフの説明も書面で行ってくれます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">女性査定員</p>
                  <p className="font-semibold text-green-600">指名可能</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">安心ポイント</p>
                  <p className="font-semibold">丁寧な説明・書面交付</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者で、高齢者への対応力が特に高い業者です。女性査定員の指名が可能で、一人暮らしの方にも安心。出張買取では玄関先での査定にも対応しており、居室に上がることなく査定を受けられます。大量の着物がある場合も点数制限なく対応。遺品整理・生前整理のサポート経験も豊富です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">出張・宅配・持込</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">女性査定員</p>
                  <p className="font-semibold text-green-600">指名可能</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">安心ポイント</p>
                  <p className="font-semibold">玄関先査定OK</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                宅配買取に強みを持つ買取業者。対面でのやり取りに不安がある方には宅配買取がおすすめです。梱包キットが自宅に届き、着物を入れて集荷を依頼するだけ。ご家族が代わりに梱包・発送をサポートすることもできます。送料・査定料は無料で、査定額に納得できなければ着物は無料返送されます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">宅配・出張</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">対面不要の宅配</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">送料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">安心ポイント</p>
                  <p className="font-semibold">返送料も無料</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                東京を中心に展開するリユース企業。着物だけでなく和装小物・帯・草履なども幅広く買い取ってくれるため、まとめて整理したい場合に便利です。出張買取では丁寧な対応を心がけており、強引な営業はしないことを明言しています。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">出張・宅配・持込</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">強み</p>
                  <p className="font-semibold">まとめて整理に便利</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">査定料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">安心ポイント</p>
                  <p className="font-semibold">強引な営業なし</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                買取価格の比較サイト。ご家族がお祖母様に代わって複数の業者から一括で見積もりを取れます。最も高い査定額を提示した業者を選べるため、「知らないうちに安く買い叩かれた」というリスクを防げます。ご家族と一緒に見積もり結果を確認して業者を選ぶのがおすすめです。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">サービス種別</p>
                  <p className="font-semibold">一括査定比較</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">メリット</p>
                  <p className="font-semibold">家族が代理で利用可</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">利用料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">安心ポイント</p>
                  <p className="font-semibold">複数社で比較可能</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 出張買取の利用の流れ */}
      <section id="flow" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            出張買取の利用の流れ（高齢者向け）
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            出張買取は自宅にいながら利用できるため、高齢者の方に最もおすすめの方法です。以下の流れで安心して利用できます。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">電話またはWebで申し込み</h3>
                <p className="text-sm text-gray-700">買取業者の電話番号に連絡し、出張買取を依頼します。ご家族が代わりに申し込むことも可能です。電話が苦手な方はWebフォームからの申し込みもできます。「高齢者なので丁寧に対応してほしい」と伝えておくと安心です。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">訪問日時の調整</h3>
                <p className="text-sm text-gray-700">都合の良い日時を指定します。可能であればご家族が同席できる日を選びましょう。女性査定員を希望する場合はこの時点で伝えます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">査定員が訪問・査定</h3>
                <p className="text-sm text-gray-700">約束の日時に査定員が訪問します。本人確認書類（運転免許証・健康保険証・マイナンバーカード等）を用意しておきましょう。査定は1時間程度で終わることが多いです。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">査定額の提示・検討</h3>
                <p className="text-sm text-gray-700">各着物の査定額が提示されます。<strong>その場で即決する必要はありません。</strong>「家族と相談してから返事します」と伝えて問題ありません。他社との比較も検討しましょう。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">5</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">買取成立・現金受け取り</h3>
                <p className="text-sm text-gray-700">査定額に納得できたら買取成立です。その場で現金を受け取れます。クーリングオフの書面を受け取り、8日間は返品が可能です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* クーリングオフ制度 */}
      <section id="cooling-off" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            クーリングオフ制度について
          </h2>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                出張買取（訪問購入）には<strong>特定商取引法</strong>に基づく<strong>クーリングオフ制度</strong>が適用されます。契約書面を受け取った日から<strong>8日以内</strong>であれば、無条件で契約を解除できます。
              </p>
              <div className="bg-[#f3eef7] rounded-lg p-4">
                <h3 className="font-bold text-[#6b4c8a] mb-2">クーリングオフのポイント</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>・ 書面を受け取った日から8日以内が対象期間</li>
                  <li>・ 理由を問わず無条件で契約解除が可能</li>
                  <li>・ 業者は8日間、物品の引き渡しを拒まれた場合はそれに従う義務がある</li>
                  <li>・ クーリングオフの通知は書面（はがき等）で行う</li>
                  <li>・ 分からない場合は消費者ホットライン（188番）に相談</li>
                </ul>
              </div>
              <p>
                <strong>重要：</strong>「クーリングオフはできない」「この商品は対象外」と説明する業者は法律違反です。そのような業者とは取引しないでください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ご家族がサポートできること */}
      <section id="family" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            ご家族がサポートできること
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">業者選び・見積もり依頼を代行する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                インターネットでの業者比較や、ヒカカクでの一括見積もり依頼はご家族が代行できます。複数社の見積もり結果をまとめて、一緒に最適な業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">出張査定に同席する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                出張買取の当日にご家族が同席することで、高齢のご本人の安心感が格段に増します。査定額の妥当性を一緒に判断でき、不当に安い価格で買い叩かれるリスクも防げます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">証紙・証明書を事前に確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の付属品（証紙・落款・購入証明書・たとう紙）を事前に探しておきましょう。これらの有無で査定額が大きく変わります。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙の見方ガイド</Link>を参考に確認してください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">思い出の整理を手伝う</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物には思い出が詰まっています。「これは結婚式のとき」「これはお茶の先生からもらった」など、思い出話を聞きながら、残すもの・売るもの・譲るものを一緒に整理しましょう。記念写真を撮っておくのも良い方法です。
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
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/articles/trouble-prevention/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取トラブル防止ガイド</h3>
              <p className="text-xs text-gray-600">悪質業者の手口と対策を徹底解説。</p>
            </Link>
            <Link href="/articles/estate-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">遺品整理の着物買取ガイド</h3>
              <p className="text-xs text-gray-600">故人の着物を整理・買取するための手順。</p>
            </Link>
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">おすすめ5社を徹底比較。口コミ・評判・実績まで。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            大切な着物を安心して手放すために
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            信頼できる業者の無料査定で、お手持ちの着物の価値を確認してみませんか。出張買取なら自宅にいながら利用できます。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
