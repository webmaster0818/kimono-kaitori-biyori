import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物のネットオークション出品ガイド｜ヤフオク・メルカリの相場と売り方",
  description:
    "着物をヤフオクやメルカリで売りたい方向けの完全ガイド。フリマアプリ・ネットオークションでの着物の相場、出品のコツ、写真の撮り方、発送方法を解説。買取業者との比較も含め、最適な売り方を提案します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/auction-guide/",
  },
  openGraph: {
    title: "着物のネットオークション出品ガイド｜ヤフオク・メルカリの相場と売り方",
    description: "ヤフオク・メルカリでの着物の売り方と相場。買取業者との比較も解説。",
    url: "https://kimonokaitori-biyori.com/articles/auction-guide/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物はメルカリとヤフオクのどちらで売る方が高くなりますか？",
    answer: "一般的に、高級着物（作家物・伝統工芸品）はヤフオクの方が高値がつきやすい傾向があります。ヤフオクはオークション形式で競り上がるため、コレクター間の競争で価格が上がることがあるからです。一方、カジュアルな着物や普段着はメルカリの方が売れやすいです。メルカリはユーザー数が多く、着物を気軽に楽しみたい若い世代からの需要があります。",
  },
  {
    question: "着物の出品写真はどのように撮ればいいですか？",
    answer: "着物の出品写真は、(1)全体を広げた状態の写真、(2)柄のアップ、(3)証紙・落款のアップ、(4)シミ・汚れがある場合はその部分のアップ、最低4枚は用意しましょう。自然光の下で撮影し、色味が実物と異なりすぎないよう注意してください。ハンガーにかけた状態よりも、畳の上に広げた写真の方が着物の柄が見やすいです。",
  },
  {
    question: "着物の発送方法はどうすればいいですか？",
    answer: "着物の発送は、たとう紙で包んだ上からビニール袋で防水し、段ボール箱に入れるのが基本です。メルカリならメルカリ便（ゆうパック）、ヤフオクならヤフネコパックが便利です。着物1枚であれば100サイズ程度の段ボールに収まります。送料は出品者負担の方が売れやすいです。",
  },
  {
    question: "フリマアプリと買取業者はどちらがお得ですか？",
    answer: "手間と時間を考慮すると一概には言えません。フリマアプリは買取業者より高く売れる可能性がありますが、出品・問い合わせ対応・梱包・発送の手間がかかり、売れるまでの時間も不確定です。買取業者は即日現金化でき、手間もほとんどかかりません。高級着物1〜2点を時間をかけて売るならフリマアプリ、大量の着物を一度に処分するなら買取業者がおすすめです。",
  },
  {
    question: "着物の出品で注意すべきトラブルはありますか？",
    answer: "よくあるトラブルとして、(1)色味が写真と違うというクレーム、(2)シミや汚れの記載漏れ、(3)サイズが合わないという返品要求、があります。これらを防ぐには、商品説明に状態を正直に記載し、サイズ（身丈・裄丈・袖丈・前幅・後幅）を実測値で記載することが重要です。「ノークレーム・ノーリターン」の記載はメルカリのルール上認められていないので注意してください。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物のネットオークション出品ガイド｜ヤフオク・メルカリの相場と売り方",
  description: "ヤフオク・メルカリでの着物の売り方と相場。買取業者との比較も解説。",
  datePublished: "2026-05-17", dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/auction-guide/" },
};

const faqStructuredData = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "ネットオークション出品ガイド", item: "https://kimonokaitori-biyori.com/articles/auction-guide/" },
  ],
};

export default function AuctionGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "ネットオークション出品ガイド" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">フリマ・オークション</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物のネットオークション出品ガイド</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">ヤフオク・メルカリの相場と売り方</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物をヤフオクやメルカリで売りたい方向けの完全ガイド。出品のコツ、写真の撮り方、適正価格の設定方法から発送方法まで。買取業者との比較も含めて、あなたに最適な売り方を解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li><a href="#platforms" className="text-[#6b4c8a] hover:underline">1. ヤフオクとメルカリの違い</a></li>
                <li><a href="#market-price" className="text-[#6b4c8a] hover:underline">2. フリマ・オークションでの着物相場</a></li>
                <li><a href="#listing-tips" className="text-[#6b4c8a] hover:underline">3. 売れる出品のコツ7選</a></li>
                <li><a href="#photo" className="text-[#6b4c8a] hover:underline">4. 着物の写真撮影テクニック</a></li>
                <li><a href="#shipping" className="text-[#6b4c8a] hover:underline">5. 着物の梱包・発送方法</a></li>
                <li><a href="#vs-dealer" className="text-[#6b4c8a] hover:underline">6. フリマ vs 買取業者の比較</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">7. 手間をかけたくない方向け業者5選</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section id="platforms" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />ヤフオクとメルカリの違い
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold">ヤフオク</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">メルカリ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">販売形式</td><td className="px-4 py-3 text-gray-700">オークション（競り上がり）</td><td className="px-4 py-3 text-gray-700">固定価格（値下げ交渉あり）</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">手数料</td><td className="px-4 py-3 text-gray-700">落札価格の10%</td><td className="px-4 py-3 text-gray-700">販売価格の10%</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ユーザー層</td><td className="px-4 py-3 text-gray-700">コレクター・目利き多い</td><td className="px-4 py-3 text-gray-700">若年層・カジュアル層多い</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">高額着物</td><td className="px-4 py-3 text-green-600 font-bold">向いている</td><td className="px-4 py-3 text-gray-700">やや不向き</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">カジュアル着物</td><td className="px-4 py-3 text-gray-700">普通</td><td className="px-4 py-3 text-green-600 font-bold">向いている</td></tr>
                <tr className="bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">出品の手軽さ</td><td className="px-4 py-3 text-gray-700">やや複雑</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">簡単</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm leading-relaxed text-gray-700">
            <p>詳しい比較は<Link href="/articles/flea-vs-dealer/" className="text-[#6b4c8a] hover:underline">フリマ vs 買取業者の比較記事</Link>もご覧ください。</p>
          </div>
        </div>
      </section>

      <section id="market-price" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />フリマ・オークションでの着物相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">フリマアプリ・オークションでの着物の落札・販売相場をまとめました。買取業者の査定額と比較する際の参考にしてください。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">メルカリ相場</th>
                  <th className="px-4 py-3 text-left font-semibold">ヤフオク相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取業者相場</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">一般的な着物</td><td className="px-4 py-3 text-gray-700">1,000円〜5,000円</td><td className="px-4 py-3 text-gray-700">500円〜3,000円</td><td className="px-4 py-3 text-gray-700">500円〜3,000円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ブランド振袖</td><td className="px-4 py-3 text-gray-700">5,000円〜5万円</td><td className="px-4 py-3 text-gray-700">3,000円〜8万円</td><td className="px-4 py-3 text-gray-700">2,000円〜5万円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">作家物（有名作家）</td><td className="px-4 py-3 text-gray-700">1万円〜15万円</td><td className="px-4 py-3 text-gray-700">3万円〜30万円</td><td className="px-4 py-3 text-gray-700">5万円〜50万円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">大島紬</td><td className="px-4 py-3 text-gray-700">3,000円〜3万円</td><td className="px-4 py-3 text-gray-700">5,000円〜10万円</td><td className="px-4 py-3 text-gray-700">5,000円〜15万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯（袋帯）</td><td className="px-4 py-3 text-gray-700">1,000円〜1万円</td><td className="px-4 py-3 text-gray-700">500円〜5万円</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">500円〜3万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 相場は状態・出品時期・競合状況により変動します。手数料・送料を差し引いた実質受取額は表示価格より低くなります。</p>
        </div>
      </section>

      <section id="listing-tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />売れる出品のコツ7選
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. タイトルにキーワードを入れる</h3>
              <p className="text-sm leading-relaxed text-gray-700">「正絹 訪問着 加賀友禅 由水十久 証紙付き」のように、素材・種類・ブランド・作家名・付属品を含めましょう。検索で見つけてもらうために重要です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. サイズを正確に記載する</h3>
              <p className="text-sm leading-relaxed text-gray-700">身丈・裄丈・袖丈・前幅・後幅を実測値で記載しましょう。着物のサイズは規格が統一されていないため、購入者はサイズを重視します。<Link href="/articles/size-and-price/" className="text-[#6b4c8a] hover:underline">サイズと価格の関係</Link>も参考にしてください。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 状態を正直に記載する</h3>
              <p className="text-sm leading-relaxed text-gray-700">シミ・汚れ・色あせ・裾の傷みなどは正直に記載し、写真も添えましょう。クレームやトラブルの防止になります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. 証紙・落款の写真を載せる</h3>
              <p className="text-sm leading-relaxed text-gray-700">証紙や落款は着物の真贋と価値を証明する重要な要素です。鮮明な写真を載せることで、購入者の安心感が増し、高値で売れやすくなります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. 送料込みで出品する</h3>
              <p className="text-sm leading-relaxed text-gray-700">メルカリでは送料込みの方が圧倒的に売れやすいです。送料を含めた価格設定にしましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">6. 需要が高まる時期に出品する</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の需要が高まるのは秋（9〜11月）と年末年始。成人式前の振袖は10〜12月が売り時です。逆に夏は需要が低い傾向にあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">7. セット販売で付加価値をつける</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物と帯・帯締め・帯揚げのコーディネートセットとして出品すると、個別に売るより高く売れることがあります。初心者の購入者に喜ばれます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="photo" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の写真撮影テクニック
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">必須の4枚</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. 全体写真（広げた状態）</li>
                <li>2. 柄・模様のアップ写真</li>
                <li>3. 証紙・落款の写真</li>
                <li>4. シミ・汚れがある場合はその箇所</li>
              </ol>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">撮影のポイント</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・ 自然光の下で撮影（蛍光灯だと色味が変わる）</li>
                <li>・ 背景はシンプルに（白い布や畳の上）</li>
                <li>・ フラッシュは使わない</li>
                <li>・ 複数角度から撮影する</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="shipping" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の梱包・発送方法
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">たとう紙で着物を包む</h3>
                <p className="text-sm text-gray-700">たとう紙がない場合は、清潔な白い紙や不織布で代用できます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">ビニール袋で防水する</h3>
                <p className="text-sm text-gray-700">配送中の水濡れを防ぐため、大きなビニール袋で包みます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">段ボール箱に入れる</h3>
                <p className="text-sm text-gray-700">100サイズ程度の段ボールに入れます。隙間にはプチプチや紙を詰めて動かないようにします。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">発送サービスを選ぶ</h3>
                <p className="text-sm text-gray-700">メルカリ便（ゆうパック100サイズ：1,070円）やヤフネコパックが匿名配送で便利です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* トラブル防止策 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            フリマアプリ・オークションでのトラブル防止策
          </h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">「色が違う」クレームの防止</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の色味は照明によって大きく変わります。必ず自然光の下で撮影し、「実物はやや○○色寄りです」など、色味の補足説明を記載しましょう。蛍光灯下の写真と自然光の写真を両方載せるのも効果的です。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">サイズに関する返品要求の防止</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物のサイズは個体差が大きいため、身丈・裄丈・袖丈・前幅・後幅の実測値を必ず記載しましょう。「○○cm前後」のような曖昧な表記ではなく、正確な数値を記載することが重要です。<Link href="/articles/size-and-price/" className="text-[#6b4c8a] hover:underline">サイズと価格の関係</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">偽物疑惑への対策</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                高額着物を出品する際は、証紙・落款の鮮明な写真を必ず載せましょう。「購入時の百貨店レシートあり」「○○染色組合の証紙付き」など、真贋を証明できる情報をすべて記載します。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙の見方ガイド</Link>も確認しておくと安心です。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">配送中の破損防止</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物は繊細な織物のため、配送中の水濡れや折りじわに注意が必要です。たとう紙→ビニール袋→段ボールの三重梱包で、防水と衝撃対策を徹底しましょう。配送保険付きの発送方法を選ぶことも重要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 出品テンプレート */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物出品の商品説明テンプレート
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            以下のテンプレートを参考に、商品説明を記載しましょう。情報が充実しているほど、購入者の安心感が増し、高値で売れやすくなります。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
            <div className="text-sm text-gray-700 space-y-2 font-mono">
              <p className="font-bold text-[#6b4c8a]">【商品名の例】</p>
              <p>正絹 訪問着 加賀友禅 証紙付き 未使用に近い</p>
              <p className="mt-4 font-bold text-[#6b4c8a]">【商品説明の例】</p>
              <p>■ 種類：訪問着</p>
              <p>■ 素材：正絹</p>
              <p>■ 技法：加賀友禅（手描き）</p>
              <p>■ 証紙：石川県染色組合の証紙あり</p>
              <p>■ 落款：あり（写真参照）</p>
              <p>■ 状態：未使用に近い（保管時の軽い畳みじわあり）</p>
              <p className="mt-2">■ サイズ（実測値）：</p>
              <p>　身丈：163cm</p>
              <p>　裄丈：67cm</p>
              <p>　袖丈：49cm</p>
              <p>　前幅：25cm</p>
              <p>　後幅：30cm</p>
              <p className="mt-2">■ 購入場所：百貨店（購入証明書あり）</p>
              <p>■ 備考：自宅保管品のため、多少の保管臭はご了承ください。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="vs-dealer" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />フリマ vs 買取業者の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold">フリマアプリ</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取業者</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">売却価格</td><td className="px-4 py-3 text-gray-700">高くなる可能性あり</td><td className="px-4 py-3 text-gray-700">安定した査定額</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">手間</td><td className="px-4 py-3 text-gray-700">出品・対応・梱包・発送</td><td className="px-4 py-3 text-gray-700">ほぼなし</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">現金化までの時間</td><td className="px-4 py-3 text-gray-700">数日〜数ヶ月</td><td className="px-4 py-3 text-gray-700">最短30分</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">手数料</td><td className="px-4 py-3 text-gray-700">10% + 送料</td><td className="px-4 py-3 text-gray-700">無料（多くの業者）</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">大量処分</td><td className="px-4 py-3 text-gray-700">非常に手間がかかる</td><td className="px-4 py-3 text-gray-700">一括対応可能</td></tr>
                <tr className="bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">トラブルリスク</td><td className="px-4 py-3 text-gray-700">クレーム・返品あり</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">ほぼなし</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">結論：</strong>高級着物1〜2点を時間をかけて売りたいならフリマアプリ、大量の着物を手間なく処分したいなら買取業者がおすすめです。両方を組み合わせる方法もあります。高額品はフリマアプリで、値段がつきにくい普段着は買取業者でまとめて売るのが効率的です。
            </p>
          </div>
        </div>
      </section>

      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />手間をかけたくない方向け業者5選
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            フリマアプリの出品が面倒な方や、大量の着物をまとめて処分したい方には、買取業者の利用がおすすめです。
          </p>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-4">
            {[
              { rank: "第1位", name: "買取大吉", color: "#c9a76c", desc: "全国700店舗以上。持ち込み・出張・宅配すべて対応。即日現金化が可能。", merit: "手間なく即日現金化" },
              { rank: "第2位", name: "ウリエル", color: "#6b4c8a", desc: "着物専門の出張買取に強い。大量買取にも対応。女性査定員の指名可能。", merit: "着物専門の適正査定" },
              { rank: "第3位", name: "RECLO（リクロ）", color: "#6b4c8a", desc: "宅配買取に強み。海外販路で高額査定が期待。送料・梱包キット無料。", merit: "高額査定重視" },
              { rank: "第4位", name: "ティファナ", color: "#6b4c8a", desc: "着物以外もまとめて買取。出張・持ち込み即日対応。", merit: "まとめて処分に便利" },
              { rank: "第5位", name: "ヒカカク", color: "#6b4c8a", desc: "一括査定比較サイト。複数業者の見積もりを一度に取れる。", merit: "最高額の業者が見つかる" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
                <span className={`text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0`} style={{ backgroundColor: item.color }}>{item.rank}</span>
                <div>
                  <h3 className="font-bold text-[#6b4c8a] text-base mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-700 mb-1">{item.desc}</p>
                  <p className="text-xs text-[#c9a76c] font-semibold">{item.merit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コストシミュレーション */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            売却コストシミュレーション
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            フリマアプリで着物を売った場合の実質受取額をシミュレーションしてみましょう。手数料・送料を差し引いた実際の手取り額を把握することが大切です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">項目</th>
                  <th className="px-4 py-3 text-left font-semibold">3,000円で売却</th>
                  <th className="px-4 py-3 text-left font-semibold">1万円で売却</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">5万円で売却</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">販売価格</td>
                  <td className="px-4 py-3 text-gray-700">3,000円</td>
                  <td className="px-4 py-3 text-gray-700">10,000円</td>
                  <td className="px-4 py-3 text-gray-700">50,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">手数料（10%）</td>
                  <td className="px-4 py-3 text-red-500">-300円</td>
                  <td className="px-4 py-3 text-red-500">-1,000円</td>
                  <td className="px-4 py-3 text-red-500">-5,000円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">送料（目安）</td>
                  <td className="px-4 py-3 text-red-500">-1,000円</td>
                  <td className="px-4 py-3 text-red-500">-1,000円</td>
                  <td className="px-4 py-3 text-red-500">-1,000円</td>
                </tr>
                <tr className="bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">実質受取額</td>
                  <td className="px-4 py-3 font-bold text-[#6b4c8a]">1,700円</td>
                  <td className="px-4 py-3 font-bold text-[#6b4c8a]">8,000円</td>
                  <td className="px-4 py-3 font-bold text-[#6b4c8a] rounded-br-lg">44,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">分析：</strong>
              3,000円の着物をフリマで売ると実質1,700円。買取業者なら手数料・送料無料で1,000〜3,000円の査定がつく場合もあるため、手間を考えると買取業者の方が効率的です。一方、5万円の高額着物は手数料を引いても44,000円が残るため、フリマアプリの方がお得。<strong>目安として売却額1万円以上ならフリマ、1万円以下なら買取業者が効率的</strong>です。
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/articles/flea-vs-dealer/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">フリマ vs 買取業者</h3>
              <p className="text-xs text-gray-600">どちらがお得？詳しい比較ガイド。</p>
            </Link>
            <Link href="/articles/kimono-market-price/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取相場一覧</h3>
              <p className="text-xs text-gray-600">種類別の最新買取相場をチェック。</p>
            </Link>
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">おすすめランキング</h3>
              <p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">着物の売り方で迷ったら</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            まずは買取業者の無料査定で相場を確認。フリマアプリとの比較材料にもなります。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
