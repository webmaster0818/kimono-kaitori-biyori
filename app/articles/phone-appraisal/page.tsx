import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取 電話査定対応の業者3選｜電話で概算がわかる",
  description:
    "着物の買取で電話査定に対応している業者を厳選して3社ご紹介。電話1本で概算査定額がわかるので、出張や宅配を依頼する前に目安を知りたい方に最適。電話査定の流れや準備するもの、注意点も詳しく解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/phone-appraisal/",
  },
  openGraph: {
    title: "着物買取 電話査定対応の業者3選｜電話で概算がわかる",
    description:
      "電話1本で着物の概算買取額がわかる。電話査定対応業者3社と利用の流れを解説。",
    url: "https://kimonokaitori-biyori.com/articles/phone-appraisal/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "電話査定で正確な買取金額はわかりますか？",
    answer:
      "電話査定で提示されるのはあくまで概算金額です。着物の正確な状態（シミ・汚れ・生地の劣化具合など）は実物を見なければ判断できないため、最終的な買取金額は出張査定や宅配査定で実物を確認した後に確定します。ただし、概算金額が大幅に下がることは少なく、目安として十分に参考になります。",
  },
  {
    question: "電話査定ではどんな情報を聞かれますか？",
    answer:
      "一般的に聞かれるのは、着物の種類（振袖・訪問着・紬など）、素材（正絹・化繊など）、状態（シミ・汚れの有無）、サイズ（身丈・裄丈の概算）、作家物かどうか、証紙の有無、購入時期・購入場所などです。これらの情報をあらかじめ確認しておくと、スムーズに概算額を教えてもらえます。",
  },
  {
    question: "電話査定は何時まで対応していますか？",
    answer:
      "業者によって受付時間は異なりますが、多くの大手買取業者は朝9時〜夜8時まで電話受付しています。買取大吉は10:00〜19:00、ウリエルは9:00〜18:00が一般的な受付時間です。土日祝日も対応している業者が多いので、平日は忙しい方でも利用しやすいです。",
  },
  {
    question: "電話査定の後、必ず売らなければなりませんか？",
    answer:
      "いいえ、電話査定の後に必ず売る必要はありません。概算金額を聞いた上で、出張査定や宅配査定に進むかどうかは自由に判断できます。もちろんキャンセルも無料です。複数の業者に電話査定を依頼して、最も高い概算額を提示した業者に正式査定を依頼するのが賢い方法です。",
  },
  {
    question: "電話査定とLINE査定はどちらがおすすめですか？",
    answer:
      "それぞれにメリットがあります。電話査定は口頭でのやりとりなので、細かいニュアンスを伝えやすく、その場で質問への回答も得られます。LINE査定は写真を送信できるため、より正確な概算額が期待できます。スマホ操作に慣れている方はLINE査定、口頭で相談したい方は電話査定がおすすめです。LINE査定については別記事で詳しく解説しています。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取 電話査定対応の業者3選｜電話で概算がわかる",
  description:
    "電話1本で着物の概算買取額がわかる。電話査定対応業者3社と利用の流れを解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/phone-appraisal/",
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
      name: "着物買取 電話査定",
      item: "https://kimonokaitori-biyori.com/articles/phone-appraisal/",
    },
  ],
};

export default function PhoneAppraisalPage() {
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
          { label: "着物買取 電話査定" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              Do型ガイド
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取 電話査定</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                対応の業者3選｜電話で概算がわかる
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              「出張や宅配を依頼する前に、まず電話で大まかな金額を知りたい」という方のために、電話査定に対応した着物買取業者3社をご紹介します。電話1本で概算査定額を教えてもらえるので、効率よく業者を比較検討できます。
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
                  <a href="#what-is" className="text-[#6b4c8a] hover:underline">
                    1. 電話査定とは？メリットと活用法
                  </a>
                </li>
                <li>
                  <a href="#recommended" className="text-[#6b4c8a] hover:underline">
                    2. 電話査定対応のおすすめ業者3選
                  </a>
                </li>
                <li>
                  <a href="#flow" className="text-[#6b4c8a] hover:underline">
                    3. 電話査定の流れと準備するもの
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-[#6b4c8a] hover:underline">
                    4. 電話査定・LINE査定・写真査定の比較
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 電話査定で高い概算額を引き出すコツ
                  </a>
                </li>
                <li>
                  <a href="#caution" className="text-[#6b4c8a] hover:underline">
                    6. 電話査定の注意点
                  </a>
                </li>
                <li>
                  <a href="#next-step" className="text-[#6b4c8a] hover:underline">
                    7. 電話査定の後のステップ
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

      {/* セクション1：電話査定とは */}
      <section id="what-is" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            電話査定とは？メリットと活用法
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              電話査定とは、着物の種類・素材・状態・証紙の有無などの情報を電話口で伝えることで、概算の買取金額を教えてもらえるサービスです。実物を見せる前に大まかな相場感を把握できるため、出張査定や宅配査定を依頼する前の事前確認として非常に便利です。
            </p>
            <p>
              特にスマートフォンの操作に慣れていない方や、写真を撮るのが面倒という方にとっては、電話1本で済む手軽さが大きなメリットです。高齢の方が一人で着物の処分を検討されている場合にも、電話査定は心強い味方となります。
            </p>
            <p>
              また、電話では査定員と直接会話できるため、着物の詳細な説明や質問がその場でできます。「祖母から譲り受けた着物で詳細がわからない」といった場合でも、査定員が丁寧にヒアリングしてくれるので安心です。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">通話無料</p>
              <p className="text-xs text-gray-600">フリーダイヤル対応が主流</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">約10分</p>
              <p className="text-xs text-gray-600">電話査定の所要時間目安</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">キャンセル無料</p>
              <p className="text-xs text-gray-600">査定後のキャンセルも自由</p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2：おすすめ3社 */}
      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            電話査定対応のおすすめ業者3選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            電話査定に対応している着物買取業者の中から、対応品質・査定精度・総合評価の高い3社を厳選しました。
          </p>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            {/* 買取大吉 */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                全国700店舗以上を展開する大手買取専門店。電話での概算査定に対応しており、着物の種類・状態・証紙の有無を伝えるだけで大まかな買取金額を教えてもらえます。着物専門の査定員が電話対応するため、伝統工芸品や作家物についても的確な回答が期待できます。電話査定後に出張買取を依頼する場合、最短当日の訪問も可能です。電話受付時間は10:00〜19:00で、土日祝日も対応しています。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">電話査定</p>
                  <p className="font-semibold text-green-600">対応</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">受付時間</p>
                  <p className="font-semibold">10:00〜19:00</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">通話料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">買取方法</p>
                  <p className="font-semibold">持込・出張・宅配</p>
                </div>
              </div>
            </div>

            {/* ウリエル */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者で、電話での概算査定にも丁寧に対応してくれます。特に高齢のお客様への対応に定評があり、ゆっくりとわかりやすく説明してくれると口コミでも好評です。電話で概算額を確認した後、出張買取を依頼すると、経験豊富な着物専門の査定員が自宅まで訪問してくれます。女性査定員の指名も可能なので、一人暮らしの方でも安心して利用できます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">電話査定</p>
                  <p className="font-semibold text-green-600">対応</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">受付時間</p>
                  <p className="font-semibold">9:00〜18:00</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">通話料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">女性査定員対応</p>
                </div>
              </div>
            </div>

            {/* RECLO */}
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                宅配買取に強みを持つブランド品買取業者で、電話での概算査定にも対応しています。海外販路を持っているため、国内相場よりも高い概算額が提示されることもあります。電話査定の後は宅配キットを無料で送ってもらえるため、着物をキットに詰めて送るだけで正式査定が完了します。遠方にお住まいで出張買取が利用しにくい方には特におすすめです。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">電話査定</p>
                  <p className="font-semibold text-green-600">対応</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">受付時間</p>
                  <p className="font-semibold">10:00〜19:00</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">送料</p>
                  <p className="font-semibold text-green-600">無料</p>
                </div>
                <div className="bg-[#faf8f5] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">特徴</p>
                  <p className="font-semibold">海外販路あり</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3：電話査定の流れ */}
      <section id="flow" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            電話査定の流れと準備するもの
          </h2>

          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                STEP 1：手元に着物と証紙を用意する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                電話をかける前に、査定したい着物を手元に用意しましょう。可能であれば<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙や証明書</Link>も準備します。着物のたとう紙に記載されている情報（作家名・産地名など）もメモしておくと、スムーズに伝えられます。サイズ（身丈・裄丈）を測っておくとより正確な概算が出ます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                STEP 2：フリーダイヤルに電話する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                各業者のフリーダイヤルに電話します。通話料は無料です。「着物の電話査定をお願いしたい」と伝えれば、査定担当に取り次いでもらえます。混雑している場合は折り返し連絡になることもありますが、通常は即時対応してくれます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                STEP 3：着物の情報を伝える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                査定員から以下の項目を聞かれるので、順番に答えていきます。着物の種類（振袖・訪問着・紬など）、素材（正絹かどうか）、状態（シミ・汚れ・虫食いの有無）、サイズの概算、証紙の有無、購入時期、作家物かどうか、枚数。わからない項目があっても「わかりません」と伝えれば、査定員が判断材料から概算を出してくれます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                STEP 4：概算金額を確認する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                査定員から概算金額が提示されます。「振袖1点で概算○万円〜○万円程度」というように、幅を持った金額で提示されることが一般的です。この段階で納得できれば出張買取や宅配買取の予約を入れ、もう少し検討したい場合は「検討します」と伝えてそのまま電話を切って問題ありません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4：査定方法比較 */}
      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            電話査定・LINE査定・写真査定の比較
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold">電話査定</th>
                  <th className="px-4 py-3 text-left font-semibold">LINE査定</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">写真査定</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">手軽さ</td>
                  <td className="px-4 py-3 text-gray-700">電話1本で完結</td>
                  <td className="px-4 py-3 text-gray-700">写真撮影が必要</td>
                  <td className="px-4 py-3 text-gray-700">写真撮影・送信が必要</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">概算精度</td>
                  <td className="px-4 py-3 text-gray-700">やや低い（口頭のみ）</td>
                  <td className="px-4 py-3 text-gray-700">中程度（写真あり）</td>
                  <td className="px-4 py-3 text-gray-700">中程度（写真あり）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">回答速度</td>
                  <td className="px-4 py-3 text-gray-700 font-bold text-green-600">即時（通話中に回答）</td>
                  <td className="px-4 py-3 text-gray-700">数時間〜翌日</td>
                  <td className="px-4 py-3 text-gray-700">1〜3日程度</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">相談のしやすさ</td>
                  <td className="px-4 py-3 text-gray-700 font-bold text-green-600">双方向で即時相談可</td>
                  <td className="px-4 py-3 text-gray-700">テキストベースの相談</td>
                  <td className="px-4 py-3 text-gray-700">メールベースの相談</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">こんな方に</td>
                  <td className="px-4 py-3 text-gray-700">すぐに概算を知りたい方<br />高齢者・スマホ不慣れな方</td>
                  <td className="px-4 py-3 text-gray-700">より正確な概算が欲しい方</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">じっくり検討したい方</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">おすすめの活用法：</strong>
              まず電話査定で概算金額を確認し、有望な業者には<Link href="/articles/line-appraisal/" className="text-[#6b4c8a] hover:underline">LINE査定</Link>や<Link href="/articles/photo-appraisal/" className="text-[#6b4c8a] hover:underline">写真査定</Link>でより詳細な見積もりを依頼するのが効率的です。最終的には出張買取で実物を見てもらい、正式な査定額を確定させましょう。
            </p>
          </div>
        </div>
      </section>

      {/* セクション5：高い概算額を引き出すコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            電話査定で高い概算額を引き出すコツ
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                1. 証紙・証明書の情報を正確に伝える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙の有無は査定額に大きく影響します。「証紙あり」と伝えるだけでなく、証紙に記載されている産地名・製造者名なども読み上げましょう。証紙がない場合でも、購入時のレシートや品質表示があれば伝えてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                2. 着物の状態を正直に、でも細かく伝える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「状態は良い方です」だけでなく、「シミはなく、たとう紙に包んで桐箪笥で保管していました」のように具体的に伝えると、査定員は高い概算額を出しやすくなります。ただし、実物確認で嘘がバレると信用を失うので、状態は正直に伝えましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                3. 複数枚あることを伝える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物が複数枚ある場合は、最初にその旨を伝えましょう。まとめて査定に出すことで、1点あたりの査定額がアップする場合があります。帯や和装小物もある場合は一緒に伝えてください。<Link href="/articles/bulk-appraisal/" className="text-[#6b4c8a] hover:underline">一括査定のメリット</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                4. 他社にも査定を依頼していることを伝える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「他の業者にも電話査定をお願いしています」と伝えることで、業者間の競争意識が働き、より良い概算額を提示してもらえる可能性があります。実際に3社程度に電話査定を依頼して比較するのがおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション6：注意点 */}
      <section id="caution" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            電話査定の注意点
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">
                注意1：概算金額と実際の買取金額に差が出ることがある
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                電話査定はあくまで口頭での情報に基づく概算です。実物を確認した際に、伝えた内容と実際の状態に差がある場合、正式な査定額が概算より低くなることがあります。逆に、口頭では伝えきれなかった価値（珍しい柄や技法など）が実物で認められ、金額が上がることもあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">
                注意2：電話口での即断を迫る業者には注意
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                概算金額を伝えた直後に「今すぐ出張しますので決めてください」と強引に迫る業者には注意が必要です。信頼できる業者は「じっくりご検討ください」と余裕を持たせてくれます。<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] hover:underline">トラブル防止ガイド</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">
                注意3：電話査定だけで売却を決めない
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                電話査定はあくまで事前確認です。概算金額に納得できても、必ず出張査定や宅配査定で実物を見てもらった上で最終判断をしましょう。実物査定では、電話では伝えにくい細部の価値も正確に評価してもらえます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7：電話査定後のステップ */}
      <section id="next-step" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            電話査定の後のステップ
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">概算額に納得できた場合</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                最も概算額が高かった業者に、<Link href="/articles/shutcho-kaitori/" className="text-[#6b4c8a] hover:underline">出張買取</Link>または<Link href="/articles/takuhai-kaitori/" className="text-[#6b4c8a] hover:underline">宅配買取</Link>を依頼しましょう。出張買取なら査定員が自宅に来てその場で現金払い、宅配買取なら着物を送るだけで指定口座に振込されます。どちらも査定料・送料・出張費は無料です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">概算額に納得できない場合</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                概算額が期待より低い場合は、別の業者にも電話査定を依頼してみましょう。業者ごとに得意分野が異なるため、ある業者で低い査定額でも、別の業者では高い金額がつくことがあります。また、<Link href="/articles/flea-vs-dealer/" className="text-[#6b4c8a] hover:underline">フリマアプリでの個人売買</Link>も選択肢として検討できます。
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
              href="/articles/line-appraisal/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                LINE査定ガイド
              </h3>
              <p className="text-xs text-gray-600">
                LINEで写真を送るだけで概算額がわかる。LINE査定の流れと対応業者。
              </p>
            </Link>
            <Link
              href="/articles/photo-appraisal/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                写真査定ガイド
              </h3>
              <p className="text-xs text-gray-600">
                写真を送信して概算額を確認。写真の撮り方のコツも解説。
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取おすすめランキング
              </h3>
              <p className="text-xs text-gray-600">
                買取大吉・ウリエルなどおすすめ5社を徹底比較。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            まずは電話1本で概算額を確認しよう
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            通話料無料のフリーダイヤルで、自宅にいながら着物の概算買取額がわかります。複数社に電話して、最も高い業者を見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
