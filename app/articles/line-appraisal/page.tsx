import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物のLINE査定おすすめ業者3選｜スマホで簡単に価値がわかる",
  description:
    "着物のLINE査定に対応したおすすめ業者3選を紹介。スマホで着物の写真を送るだけで概算の買取額がわかるLINE査定の使い方、メリット・デメリット、精度を上げるコツを解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/line-appraisal/",
  },
  openGraph: {
    title: "着物のLINE査定おすすめ業者3選｜スマホで簡単に価値がわかる",
    description: "スマホで着物の写真を送るだけで買取額がわかるLINE査定。おすすめ業者と活用法を解説。",
    url: "https://kimonokaitori-biyori.com/articles/line-appraisal/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "LINE査定の結果と実際の買取額は同じですか？",
    answer: "LINE査定はあくまで概算額であり、実際の買取額とは異なる場合があります。写真では判断しにくい素材の質感、シミや汚れの程度、裏地の状態などを実物査定で確認した結果、金額が上下することがあります。ただし、大手業者であればLINE査定と実際の買取額の差は10〜20%以内に収まるケースがほとんどです。",
  },
  {
    question: "LINE査定は何枚の着物でも依頼できますか？",
    answer: "はい、多くの業者では枚数制限なくLINE査定を受け付けています。ただし、一度に大量の着物を送ると返信に時間がかかることがあります。10枚以上の場合は、まず代表的な数枚を査定に出し、概算額に納得したら残りも含めて正式査定を依頼するのが効率的です。",
  },
  {
    question: "LINE査定は24時間いつでも送れますか？",
    answer: "はい、LINEで写真を送ること自体は24時間いつでも可能です。ただし、査定員による返信は営業時間内（通常9:00〜18:00頃）になります。夜間や休日に送った場合は、翌営業日に返信が届くのが一般的です。買取大吉やウリエルであれば、通常1〜2営業日以内に返信があります。",
  },
  {
    question: "LINE査定後に断っても大丈夫ですか？",
    answer: "はい、LINE査定後に買取を断っても全く問題ありません。LINE査定はあくまで事前の概算確認であり、売却の義務は一切ありません。査定額に納得できなければ、「今回は見送ります」と一言返信するだけでOKです。しつこい営業をされることもありません。",
  },
  {
    question: "LINEの友だち登録をした後に迷惑メッセージが届きますか？",
    answer: "大手の買取業者であれば、査定に関係のない迷惑メッセージが大量に届くことはありません。キャンペーン情報などのお知らせが届くことはありますが、頻度は月1〜2回程度です。不要な場合はLINEの設定で通知をオフにするか、ブロックすることもできます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物のLINE査定おすすめ業者3選｜スマホで簡単に価値がわかる",
  description: "スマホで着物の写真を送るだけで買取額がわかるLINE査定。おすすめ業者と活用法を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/line-appraisal/" },
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
    { "@type": "ListItem", position: 3, name: "LINE査定", item: "https://kimonokaitori-biyori.com/articles/line-appraisal/" },
  ],
};

export default function LineAppraisalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "LINE査定" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物のLINE査定おすすめ業者3選</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">スマホで簡単に価値がわかる</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              「この着物、いくらで売れるんだろう？」そんな疑問をスマホ1つで解決できるのがLINE査定です。着物の写真をLINEで送るだけで、専門の査定員が概算の買取額を教えてくれます。おすすめ業者と活用法を紹介します。
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
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li><a href="#what-is" className="text-[#6b4c8a] hover:underline">1. LINE査定とは？</a></li>
                <li><a href="#merit" className="text-[#6b4c8a] hover:underline">2. LINE査定のメリット・デメリット</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">3. LINE査定おすすめ業者3選</a></li>
                <li><a href="#how-to" className="text-[#6b4c8a] hover:underline">4. LINE査定の使い方ガイド</a></li>
                <li><a href="#photo-tips" className="text-[#6b4c8a] hover:underline">5. 査定精度を上げる撮影のコツ</a></li>
                <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">6. LINE査定・写真査定・出張査定の比較</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* LINE査定とは */}
      <section id="what-is" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />LINE査定とは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>LINE査定とは、LINEアプリを使って着物の写真を買取業者に送り、<strong>概算の買取額を教えてもらえるサービス</strong>です。業者の公式LINEアカウントを友だち追加し、着物の写真と簡単な情報をメッセージで送るだけで利用できます。</p>
            <p>電話や店舗に行く必要がなく、<strong>自宅にいながらスマホ1つで着物の価値がわかる</strong>手軽さが魅力です。概算額に納得したら、出張買取や宅配買取の正式査定に進むことができます。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">無料</p>
              <p className="text-xs text-gray-600">利用料・査定料すべて0円</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">最短数時間</p>
              <p className="text-xs text-gray-600">で概算額がわかる</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">自宅から</p>
              <p className="text-xs text-gray-600">外出不要で完結</p>
            </div>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section id="merit" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />LINE査定のメリット・デメリット
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-green-600 mb-4 text-base">メリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>手軽</strong> - スマホから写真を送るだけ</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>無料</strong> - 利用料・査定料が一切かからない</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>匿名性</strong> - 住所を伝えずに概算がわかる</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>比較しやすい</strong> - 複数業者に同時に送って比較できる</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5 font-bold">&#10003;</span><span><strong>断りやすい</strong> - 対面でないため気軽に断れる</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-4 text-base">デメリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>概算額のみ</strong> - 実物査定で金額が変わることがある</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>写真の質に依存</strong> - 暗い写真だと正確な査定が難しい</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span><strong>返信待ち</strong> - 即座に結果が出ない（数時間〜翌日）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ業者 */}
      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />LINE査定おすすめ業者3選
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                公式LINEアカウントで着物のLINE査定に対応。着物専門の査定員が写真をもとに概算額を算出してくれます。返信は通常1営業日以内と迅速。LINE査定後、出張買取・持ち込み買取・宅配買取のいずれかで正式査定に進めます。全国700店舗以上のネットワークが安心感の根拠です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">返信速度</p><p className="font-semibold">最短数時間</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定精度</p><p className="font-semibold">高い</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">正式査定方法</p><p className="font-semibold">持込・出張・宅配</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                着物買取に特化した専門業者のLINE査定。着物の知識が豊富な査定員が対応するため、作家物やブランド品の価値を見逃しません。写真のアドバイスも丁寧にしてくれるので、LINE査定が初めての方でも安心です。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">返信速度</p><p className="font-semibold">1〜2営業日</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定精度</p><p className="font-semibold">高い</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">正式査定方法</p><p className="font-semibold">出張・宅配</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                ブランド品買取で実績のあるRECLOもLINE査定に対応。着物だけでなく帯や和装小物もまとめてLINEで査定依頼できます。海外販路を持っているため、希少な着物は思わぬ高額査定になることも。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">返信速度</p><p className="font-semibold">1〜2営業日</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定精度</p><p className="font-semibold">中〜高</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">正式査定方法</p><p className="font-semibold">宅配・出張</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使い方ガイド */}
      <section id="how-to" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />LINE査定の使い方ガイド
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">公式LINEを友だち追加</h3>
                <p className="text-sm text-gray-700">業者のウェブサイトからQRコードを読み取るか、LINE ID検索で友だち追加します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">着物の写真を撮影</h3>
                <p className="text-sm text-gray-700">着物の全体像、証紙、落款、シミ・汚れがある場合はその部分も撮影します。自然光のもとで撮るのがベスト。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">写真と情報をLINEで送信</h3>
                <p className="text-sm text-gray-700">写真とともに、着物の種類・素材・サイズ・購入時期などの情報をメッセージで送ります。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#c9a76c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">概算額の回答を受け取る</h3>
                <p className="text-sm text-gray-700">数時間〜1〜2営業日で査定員から概算の買取額が返信されます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#c9a76c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1">正式査定に進む or 断る</h3>
                <p className="text-sm text-gray-700">概算額に納得したら出張買取や宅配買取に進みます。納得できなければ気軽に断れます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 撮影のコツ */}
      <section id="photo-tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />査定精度を上げる撮影のコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">自然光で撮影する</h3>
              <p className="text-sm leading-relaxed text-gray-700">蛍光灯の下では着物の色が正確に映らないことがあります。窓際の自然光のもとで撮影すると、実際の色に近い写真になり、査定精度が上がります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">全体と部分の両方を撮る</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物を広げた全体像に加えて、柄のアップ、証紙、落款、タグなどの部分写真も撮りましょう。合計4〜6枚の写真を送ると正確な査定ができます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">シミ・汚れがあれば正直に撮る</h3>
              <p className="text-sm leading-relaxed text-gray-700">シミや汚れを隠して撮影すると、実物査定時にギャップが生まれます。正直に写した方が概算額と実際の買取額の差が少なくなり、スムーズです。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">証紙は必ず撮影する</h3>
              <p className="text-sm leading-relaxed text-gray-700">証紙があるかないかで査定額が大きく変わります。証紙が見つかったら、文字が読めるようにアップで撮影して送りましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">着物の情報をテキストで補足</h3>
              <p className="text-sm leading-relaxed text-gray-700">素材（正絹・化繊）、購入時期、購入場所、着用回数などを写真と一緒にテキストで伝えると、より正確な査定額が出ます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />LINE査定・写真査定・出張査定の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold">LINE査定</th>
                  <th className="px-4 py-3 text-left font-semibold">写真査定（メール）</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">出張査定</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">手軽さ</td>
                  <td className="px-4 py-3 text-green-600 font-medium">非常に手軽</td>
                  <td className="px-4 py-3 text-gray-700">やや手軽</td>
                  <td className="px-4 py-3 text-gray-700">予約が必要</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">査定精度</td>
                  <td className="px-4 py-3 text-gray-700">概算（中程度）</td>
                  <td className="px-4 py-3 text-gray-700">概算（中程度）</td>
                  <td className="px-4 py-3 text-green-600 font-medium">正確（高い）</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">結果までの時間</td>
                  <td className="px-4 py-3 text-green-600 font-medium">数時間〜1日</td>
                  <td className="px-4 py-3 text-gray-700">1〜3日</td>
                  <td className="px-4 py-3 text-gray-700">訪問当日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">匿名性</td>
                  <td className="px-4 py-3 text-green-600 font-medium">高い</td>
                  <td className="px-4 py-3 text-gray-700">メールアドレスが必要</td>
                  <td className="px-4 py-3 text-gray-700">住所が必要</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">おすすめ場面</td>
                  <td className="px-4 py-3 text-gray-700">まず値段を知りたい時</td>
                  <td className="px-4 py-3 text-gray-700">LINEを使わない方</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">確実に売りたい時</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">おすすめの流れ：</strong>
              まずLINE査定で概算額を確認し、複数業者を比較。最も高い業者に出張買取や宅配買取の正式査定を依頼する、という2段階方式が最も効率的です。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
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

      {/* 関連ページ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/photo-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">写真査定のやり方ガイド</h3>
              <p className="text-xs text-gray-600">撮影のコツと査定精度を上げる方法を解説。</p>
            </Link>
            <Link href="/articles/bulk-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">一括査定おすすめ</h3>
              <p className="text-xs text-gray-600">複数業者の見積もりで最高額を狙う方法。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">まずはLINE査定で着物の価値を確認しましょう</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            スマホで写真を送るだけで概算額がわかります。複数業者のLINE査定を比較して、最高額の業者を見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
