import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物リメイク業者おすすめ｜バッグ・ドレスに生まれ変わる",
  description:
    "着物リメイクのおすすめ業者と活用法を紹介。バッグ・ドレス・ワンピース・日傘など着物の生地を活かしたリメイクアイデアと費用相場、売るかリメイクかの判断基準を解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/remake/",
  },
  openGraph: {
    title: "着物リメイク業者おすすめ｜バッグ・ドレスに生まれ変わる",
    description:
      "着物リメイクのおすすめ業者と活用法。バッグ・ドレスなどリメイクアイデアと費用相場を解説。",
    url: "https://kimonokaitori-biyori.com/articles/remake/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物リメイクの費用はどのくらいですか？",
    answer:
      "リメイクの費用は内容によって大きく異なります。巾着・ポーチなど小物類は3,000円〜1万円、バッグは1万円〜3万円、ワンピース・ドレスは2万円〜10万円程度が相場です。素材の難易度や仕立ての複雑さによっても変動します。",
  },
  {
    question: "売るのとリメイクするの、どちらがお得ですか？",
    answer:
      "買取額が高い着物（証紙付きの大島紬や京友禅など）は売却がお得です。一方、買取額がつかない着物（シミ・汚れが多い、化繊素材など）はリメイクで有効活用するのがおすすめです。まずは無料査定で買取額を確認してから判断しましょう。",
  },
  {
    question: "シミや汚れがある着物でもリメイクできますか？",
    answer:
      "はい、シミや汚れがある部分を避けて使えるため、リメイクに向いています。むしろ「買取では値段がつかないがリメイクなら活用できる」という着物が多いです。リメイク業者に相談してみましょう。",
  },
  {
    question: "着物1枚からどのくらいのアイテムが作れますか？",
    answer:
      "着物1枚（約12m）の生地からは、ワンピース1枚+バッグ1個、または小物類（ポーチ・巾着など）5〜10個程度が作れます。帯からもバッグやクラッチが制作可能です。",
  },
  {
    question: "着物リメイクにはどのくらい時間がかかりますか？",
    answer:
      "一般的に小物類で1〜2週間、ワンピースやドレスで3〜6週間程度です。繁忙期や複雑なデザインの場合はさらに時間がかかることがあります。事前にリメイク業者に納期を確認しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物リメイク業者おすすめ｜バッグ・ドレスに生まれ変わる",
  description: "着物リメイクのおすすめ業者と活用法。バッグ・ドレスなどリメイクアイデアと費用相場を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/remake/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "着物リメイク業者おすすめ", item: "https://kimonokaitori-biyori.com/articles/remake/" },
  ],
};

export default function RemakePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物リメイク業者おすすめ" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">活用ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物リメイク</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">バッグ・ドレスに生まれ変わるおすすめ業者</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              タンスに眠っている着物をバッグやドレスにリメイク。売る以外の活用法として注目される着物リメイクのアイデア・費用相場・おすすめ業者を詳しく紹介します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
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
                <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 着物リメイクとは？</a></li>
                <li><a href="#ideas" className="text-[#6b4c8a] hover:underline">2. 着物リメイクのアイデア一覧</a></li>
                <li><a href="#cost" className="text-[#6b4c8a] hover:underline">3. リメイクの費用相場</a></li>
                <li><a href="#vs-sell" className="text-[#6b4c8a] hover:underline">4. 売る vs リメイク｜判断基準</a></li>
                <li><a href="#how" className="text-[#6b4c8a] hover:underline">5. リメイクの流れ</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. リメイクを成功させるコツ</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 着物リメイクとは */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物リメイクとは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物リメイクとは、着なくなった着物の生地を使ってバッグ・ドレス・ワンピース・日傘・クッションカバーなどの新しいアイテムに仕立て直すことです。
            </p>
            <p>
              着物の正絹生地は発色が美しく独特の光沢があるため、<strong>洋服やアクセサリーに仕立て直すと非常に魅力的な作品</strong>に仕上がります。特に思い出の詰まった着物を形を変えて残したいという方に人気です。
            </p>
            <p>
              ただし、高額な着物（大島紬・京友禅・加賀友禅など）は売却した方が経済的にお得なケースが多いため、まずは無料査定で買取額を確認してからリメイクを検討するのがおすすめです。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">思い出を残す</p>
              <p className="text-xs text-gray-600">形を変えて着物を活用</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">サステナブル</p>
              <p className="text-xs text-gray-600">廃棄せず生地を再利用</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">一点物</p>
              <p className="text-xs text-gray-600">世界に一つだけのアイテム</p>
            </div>
          </div>
        </div>
      </section>

      {/* リメイクアイデア */}
      <section id="ideas" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物リメイクのアイデア一覧
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ワンピース・ドレス</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の生地を使った洋服。振袖からパーティードレス、小紋からカジュアルワンピースなど幅広い活用が可能。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">バッグ・クラッチ</h3>
              <p className="text-sm leading-relaxed text-gray-700">帯地や着物生地でバッグを制作。特に帯からのバッグは生地が厚く丈夫で実用的。日常使いにもフォーマルにも。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">日傘</h3>
              <p className="text-sm leading-relaxed text-gray-700">正絹の着物生地で仕立てた日傘は紫外線カット効果が高く、美しい柄が映える人気のリメイクアイテム。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">クッションカバー・タペストリー</h3>
              <p className="text-sm leading-relaxed text-gray-700">インテリアとして着物生地を活用。帯のタペストリーは和室にも洋室にも映えるインテリアアイテムに。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ポーチ・巾着・がま口</h3>
              <p className="text-sm leading-relaxed text-gray-700">小物類は着物の端切れからも制作可能。プレゼントにも最適な手軽なリメイクアイテム。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">スカーフ・ストール</h3>
              <p className="text-sm leading-relaxed text-gray-700">正絹の着物からスカーフやストールに。軽くて肌触りが良く、四季を通じて使えるアイテム。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 費用相場 */}
      <section id="cost" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            リメイクの費用相場
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">リメイクアイテム</th>
                  <th className="px-4 py-3 text-left font-semibold">制作期間</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">費用の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ポーチ・巾着</td>
                  <td className="px-4 py-3 text-gray-700">1〜2週間</td>
                  <td className="px-4 py-3 font-medium">3,000円〜8,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">バッグ</td>
                  <td className="px-4 py-3 text-gray-700">2〜4週間</td>
                  <td className="px-4 py-3 font-medium">1万円〜3万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">日傘</td>
                  <td className="px-4 py-3 text-gray-700">2〜4週間</td>
                  <td className="px-4 py-3 font-medium">1万5,000円〜3万円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ワンピース</td>
                  <td className="px-4 py-3 text-gray-700">3〜6週間</td>
                  <td className="px-4 py-3 font-medium">2万円〜5万円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ドレス（フォーマル）</td>
                  <td className="px-4 py-3 text-gray-700">4〜8週間</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">5万円〜10万円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 売る vs リメイク */}
      <section id="vs-sell" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            売る vs リメイク｜判断基準
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">売った方がよいケース</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside">
                <li>証紙付きの大島紬・結城紬・加賀友禅・京友禅など高額着物</li>
                <li>作家物・人間国宝の作品</li>
                <li>状態が良好な正絹の訪問着・振袖・留袖</li>
                <li>思い入れが特にない着物</li>
              </ul>
              <p className="mt-3 text-sm text-gray-700">まずは買取大吉やウリエルの無料査定で買取額を確認しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">リメイクした方がよいケース</h3>
              <ul className="text-sm leading-relaxed text-gray-700 space-y-2 list-disc list-inside">
                <li>シミ・汚れ・色褪せで買取額がつかない着物</li>
                <li>思い出の詰まった着物を形を変えて残したい場合</li>
                <li>化繊やウールなど素材的に買取額がつきにくい着物</li>
                <li>サイズが小さくリサイズも難しい着物</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* リメイクの流れ */}
      <section id="how" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            リメイクの流れ
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">まず無料査定で買取額を確認</h3>
                <p className="text-sm leading-relaxed text-gray-700">リメイク前に買取大吉やウリエルの無料査定を利用。高額がつけば売却を、つかなければリメイクを検討。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">リメイク業者に相談</h3>
                <p className="text-sm leading-relaxed text-gray-700">着物の状態・希望のアイテム・予算を伝えて相談。見積もりを取得します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">着物を送付・制作開始</h3>
                <p className="text-sm leading-relaxed text-gray-700">着物をリメイク業者に送り、デザインを確認後に制作スタート。完成まで数週間〜数か月。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">完成・受け取り</h3>
                <p className="text-sm leading-relaxed text-gray-700">完成品が届いたら仕上がりを確認。微調整が必要な場合は業者に相談しましょう。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コツ */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            リメイクを成功させるコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：まず買取査定を受ける</h3>
              <p className="text-sm leading-relaxed text-gray-700">リメイク費用が高額になることもあるため、先に無料査定で着物の買取額を確認。売った方がお得な場合もあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：着物リメイク専門の業者を選ぶ</h3>
              <p className="text-sm leading-relaxed text-gray-700">正絹は扱いが難しい素材です。着物リメイクの実績が豊富な専門業者に依頼しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：完成イメージを明確に伝える</h3>
              <p className="text-sm leading-relaxed text-gray-700">参考画像やイラストを用意して業者に伝えると、仕上がりのギャップが減ります。使用する生地部分の指定も可能です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：生地の状態を正直に伝える</h3>
              <p className="text-sm leading-relaxed text-gray-700">シミ・汚れ・穴の位置を事前に伝えておくと、業者が適切に対応できます。隠さず正直に伝えましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：余った生地の活用も相談する</h3>
              <p className="text-sm leading-relaxed text-gray-700">1枚の着物からメインアイテムを作った後、余った生地でポーチや巾着など小物を追加制作できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
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
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">まずは買取査定でいくらになるか確認。</p>
            </Link>
            <Link href="/articles/donation/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の寄付ができる場所</h3>
              <p className="text-xs text-gray-600">売れない着物の活用法をまとめて紹介。</p>
            </Link>
            <Link href="/articles/old-stained-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">古い着物・シミあり着物の買取</h3>
              <p className="text-xs text-gray-600">状態が悪い着物でも売れる可能性があります。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            リメイクの前に、まず無料査定で買取額を確認
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            高額がつく着物は売却がお得。まずは複数業者の無料査定で着物の価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
