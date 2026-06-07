import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物買取アプリおすすめ比較｜スマホで完結する売り方ガイド",
  description:
    "着物をスマホアプリで売りたい方向けの完全ガイド。メルカリ・ヤフオク・ラクマなどのフリマアプリと、買取業者のオンライン査定アプリを比較。スマホだけで着物を売る方法、撮影のコツ、手数料比較を解説。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクも紹介。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/app-guide/" },
  openGraph: {
    title: "着物買取アプリおすすめ比較｜スマホで完結する売り方ガイド",
    description: "スマホで着物を売る方法を完全ガイド。フリマアプリと買取業者アプリの比較も。",
    url: "https://kimonokaitori-biyori.com/articles/app-guide/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "着物をスマホアプリだけで売ることは可能ですか？", answer: "はい、可能です。メルカリやラクマなどのフリマアプリを使えば、スマホで写真を撮影・出品・購入者とのやり取り・発送手続きまですべて完結できます。また、RECLOのオンライン査定もスマホで写真を送るだけで概算査定額がわかるため、宅配買取の申し込みまでスマホで完結します。" },
  { question: "着物の出品に最適なフリマアプリはどれですか？", answer: "カジュアルな着物や普段着はメルカリがおすすめです。ユーザー数が多く、若い世代を中心に着物を気軽に楽しみたい方からの需要があります。高級着物や作家物はヤフオクの方が高値がつきやすいです。オークション形式でコレクター同士が競り合うため、価格が上がりやすい傾向にあります。" },
  { question: "フリマアプリで着物を売る際の手数料はいくらですか？", answer: "メルカリは販売価格の10%、ヤフオクは落札価格の10%（Yahoo!プレミアム会員は8.8%）、ラクマは販売価格の6%が手数料として差し引かれます。これに加えて送料（出品者負担の場合）もかかります。着物1枚の場合、送料は700円〜1,200円程度です。" },
  { question: "買取業者のアプリやオンライン査定と、フリマアプリはどちらがお得ですか？", answer: "フリマアプリは買取業者より高く売れる可能性がありますが、手数料・送料・手間を考慮する必要があります。例えば5,000円で売れた着物は、手数料500円+送料1,000円で実質受取額は3,500円。一方、買取業者なら手数料・送料無料で3,000円〜4,000円の査定額がつく場合もあります。高額着物ほどフリマアプリが有利、安価な着物ほど買取業者が効率的です。" },
  { question: "着物買取で使えるLINE査定はどの業者が対応していますか？", answer: "ウリエルや買取大吉がLINE査定に対応しています。LINEで着物の写真を送るだけで概算査定額を教えてもらえるため、出品前の参考価格を知るのに便利です。LINE査定は無料で、査定後に買取を断ることも自由です。詳しくは当サイトのLINE査定ガイドもご覧ください。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取アプリおすすめ比較｜スマホで完結する売り方ガイド",
  description: "スマホで着物を売る方法を完全ガイド。フリマアプリと買取業者アプリの比較も。",
  datePublished: "2026-05-17", dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/app-guide/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "着物買取アプリガイド", item: "https://kimonokaitori-biyori.com/articles/app-guide/" },
] };

export default function AppGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物買取アプリガイド" }]} />

      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/app-guide.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4"><div className="text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">スマホ活用ガイド</span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-gradient">着物買取アプリおすすめ比較</span><br className="md:hidden" />
            <span className="block mt-2 text-lg md:text-2xl text-gray-700">スマホで完結する売り方ガイド</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            「スマホだけで着物を売りたい」という方に向けて、フリマアプリ（メルカリ・ヤフオク・ラクマ）と買取業者のオンライン査定を徹底比較。それぞれのメリット・デメリット、手数料、使い方のコツを解説します。
          </p>
          <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
        </div></div>
      </section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#types" className="text-[#6b4c8a] hover:underline">1. スマホで着物を売る2つの方法</a></li>
          <li><a href="#flea-apps" className="text-[#6b4c8a] hover:underline">2. フリマアプリ3社の比較</a></li>
          <li><a href="#online-appraisal" className="text-[#6b4c8a] hover:underline">3. 買取業者のオンライン査定サービス</a></li>
          <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">4. フリマアプリ vs 買取業者オンライン査定</a></li>
          <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">5. おすすめ着物買取業者5選</a></li>
          <li><a href="#photo-tips" className="text-[#6b4c8a] hover:underline">6. スマホで着物を撮影するコツ</a></li>
          <li><a href="#cost" className="text-[#6b4c8a] hover:underline">7. 手数料・送料の総コスト比較</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="types" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />スマホで着物を売る2つの方法</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">方法1：フリマアプリで個人売買</h3>
              <p className="text-sm text-gray-700 mb-3">メルカリ・ヤフオク・ラクマなどのアプリで、自分で出品して個人に直接売る方法です。</p>
              <div className="space-y-1 text-sm">
                <p className="text-green-600">○ 買取業者より高く売れる可能性あり</p>
                <p className="text-green-600">○ 価格を自分で設定できる</p>
                <p className="text-red-500">× 出品・梱包・発送の手間がかかる</p>
                <p className="text-red-500">× 売れるまでの時間が不確定</p>
                <p className="text-red-500">× 手数料（10%）+ 送料がかかる</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">方法2：買取業者のオンライン査定</h3>
              <p className="text-sm text-gray-700 mb-3">RECLOの写真査定やLINE査定など、スマホで写真を送って概算査定を受け、宅配買取につなげる方法です。</p>
              <div className="space-y-1 text-sm">
                <p className="text-green-600">○ 手間がほとんどかからない</p>
                <p className="text-green-600">○ 手数料・送料が無料</p>
                <p className="text-green-600">○ 大量の着物も一括対応</p>
                <p className="text-red-500">× フリマより売却額が低い場合あり</p>
                <p className="text-red-500">× 価格交渉の余地が少ない</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flea-apps" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />フリマアプリ3社の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                <th className="px-4 py-3 text-left font-semibold">メルカリ</th>
                <th className="px-4 py-3 text-left font-semibold">ヤフオク</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">ラクマ</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">販売形式</td><td className="px-4 py-3 text-gray-700">固定価格</td><td className="px-4 py-3 text-gray-700">オークション/固定</td><td className="px-4 py-3 text-gray-700">固定価格</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">手数料</td><td className="px-4 py-3 text-gray-700">10%</td><td className="px-4 py-3 text-gray-700">10%（会員8.8%）</td><td className="px-4 py-3 text-gray-700">6%</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ユーザー数</td><td className="px-4 py-3 text-gray-700">約2,300万人</td><td className="px-4 py-3 text-gray-700">約1,900万人</td><td className="px-4 py-3 text-gray-700">約1,000万人</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物の売れやすさ</td><td className="px-4 py-3 text-green-600 font-bold">★★★★★</td><td className="px-4 py-3 text-green-600 font-bold">★★★★</td><td className="px-4 py-3 text-gray-700">★★★</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">高額着物</td><td className="px-4 py-3 text-gray-700">やや不向き</td><td className="px-4 py-3 text-green-600 font-bold">向いている</td><td className="px-4 py-3 text-gray-700">普通</td></tr>
                <tr className="bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">出品の手軽さ</td><td className="px-4 py-3 text-green-600 font-bold rounded-br-none">★★★★★</td><td className="px-4 py-3 text-gray-700">★★★</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">★★★★</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">詳しい比較は<Link href="/articles/auction-guide/" className="text-[#6b4c8a] hover:underline">ネットオークション出品ガイド</Link>や<Link href="/articles/flea-vs-dealer/" className="text-[#6b4c8a] hover:underline">フリマ vs 買取業者の比較</Link>もご覧ください。</p>
        </div>
      </section>

      <section id="online-appraisal" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />買取業者のオンライン査定サービス</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO：写真査定（スマホ対応）</h3>
              <p className="text-sm leading-relaxed text-gray-700">スマホで着物の写真を撮って送信するだけで、概算査定額がわかります。24時間受付で、通勤時間やお昼休みにサクッと利用可能。査定結果に納得すればそのまま宅配買取に進めます。送料・手数料すべて無料です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル・買取大吉：LINE査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">LINEの公式アカウントに着物の写真を送ると、査定員が概算査定額を返信してくれます。普段使い慣れたLINEアプリで手軽に利用でき、追加の写真リクエストや質問のやり取りもスムーズです。<Link href="/articles/line-appraisal/" className="text-[#6b4c8a] hover:underline">LINE査定ガイド</Link>も参考に。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ヒカカク：一括Web査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">スマホのブラウザから複数業者に一括で査定依頼ができます。アプリのインストール不要で、Webフォームに情報を入力するだけ。複数社の見積もりを比較して最高額の業者を選べます。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />フリマアプリ vs 買取業者オンライン査定</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#c9a76c] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                <th className="px-4 py-3 text-left font-semibold">フリマアプリ</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">買取業者オンライン査定</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">売却額</td><td className="px-4 py-3 text-gray-700">高い可能性あり</td><td className="px-4 py-3 text-gray-700">安定した適正価格</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">手数料</td><td className="px-4 py-3 text-gray-700">6〜10% + 送料</td><td className="px-4 py-3 text-green-600 font-bold">無料</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">手間</td><td className="px-4 py-3 text-gray-700">多い（出品・対応・梱包・発送）</td><td className="px-4 py-3 text-gray-700">少ない（写真送信のみ）</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">現金化の速さ</td><td className="px-4 py-3 text-gray-700">数日〜数ヶ月</td><td className="px-4 py-3 text-gray-700">宅配：1〜2週間</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">大量処分</td><td className="px-4 py-3 text-gray-700">非常に手間</td><td className="px-4 py-3 text-green-600 font-bold">一括対応</td></tr>
                <tr className="bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">トラブルリスク</td><td className="px-4 py-3 text-gray-700">クレーム・返品あり</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">ほぼなし</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">結論：</strong>高額着物を1〜2点じっくり売りたいならフリマアプリ、手間をかけずに複数枚をまとめて売りたいなら買取業者のオンライン査定がおすすめです。両方を組み合わせるのも有効です。</p>
          </div>
        </div>
      </section>

      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめ着物買取業者5選</h2>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-4">
            {[
              { rank: "第1位", name: "買取大吉", color: "#c9a76c", desc: "LINE査定対応。全国700店舗以上で持ち込み・出張・宅配すべて対応。スマホで相場を確認してから来店もOK。", app: "LINE査定・Web申込" },
              { rank: "第2位", name: "ウリエル", color: "#6b4c8a", desc: "LINE査定対応。着物専門の査定員がLINEで丁寧に査定。出張買取も全国対応で、スマホ査定→出張買取の流れがスムーズ。", app: "LINE査定・Web申込" },
              { rank: "第3位", name: "RECLO（リクロ）", color: "#6b4c8a", desc: "スマホ写真査定に最も力を入れている業者。24時間受付のオンライン査定で、通勤中でもサクッと概算額がわかる。海外販路で高額査定。", app: "写真査定・Web申込（24時間）" },
              { rank: "第4位", name: "ティファナ", color: "#6b4c8a", desc: "Web申込対応。スマホからの出張買取・宅配買取申し込みが可能。着物以外もまとめて対応。", app: "Web申込" },
              { rank: "第5位", name: "ヒカカク", color: "#6b4c8a", desc: "スマホブラウザで一括査定。アプリ不要で複数業者の見積もりを一度に取得可能。相場把握に最適。", app: "Web一括査定（24時間）" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
                <span className="text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}>{item.rank}</span>
                <div>
                  <h3 className="font-bold text-[#6b4c8a] text-base mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-700 mb-1">{item.desc}</p>
                  <p className="text-xs text-[#c9a76c] font-semibold">スマホ対応：{item.app}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="photo-tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />スマホで着物を撮影するコツ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 自然光の下で撮影する</h3>
              <p className="text-sm leading-relaxed text-gray-700">蛍光灯や白熱灯の下では色味が変わってしまいます。窓際や日中の屋外の日陰で撮影すると、実物に近い色合いで撮れます。フラッシュは使わないようにしましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 全体→部分→証紙の順で撮る</h3>
              <p className="text-sm leading-relaxed text-gray-700">まず着物全体を広げた写真、次に柄のアップ写真、最後に証紙・落款の写真を撮ります。LINE査定やフリマアプリへの出品のどちらにも使えます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. シミ・汚れは隠さず撮る</h3>
              <p className="text-sm leading-relaxed text-gray-700">状態を正直に記録することで、トラブルを防ぎ信頼性が増します。査定員にとっても状態の正確な把握は適正査定につながります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. 背景はシンプルに</h3>
              <p className="text-sm leading-relaxed text-gray-700">白い布や畳の上に広げると着物の柄が映えます。ごちゃごちゃした背景は避け、着物に注目が集まるように撮影しましょう。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cost" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />手数料・送料の総コスト比較</h2>
          <p className="text-sm mb-6">着物を5,000円で売った場合の実質受取額を比較します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">売却方法</th>
                <th className="px-4 py-3 text-left font-semibold">手数料</th>
                <th className="px-4 py-3 text-left font-semibold">送料</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">実質受取額</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">メルカリ</td><td className="px-4 py-3 text-gray-700">500円（10%）</td><td className="px-4 py-3 text-gray-700">約1,000円</td><td className="px-4 py-3 font-bold text-gray-700">約3,500円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ヤフオク</td><td className="px-4 py-3 text-gray-700">500円（10%）</td><td className="px-4 py-3 text-gray-700">約1,000円</td><td className="px-4 py-3 font-bold text-gray-700">約3,500円</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ラクマ</td><td className="px-4 py-3 text-gray-700">300円（6%）</td><td className="px-4 py-3 text-gray-700">約1,000円</td><td className="px-4 py-3 font-bold text-gray-700">約3,700円</td></tr>
                <tr className="bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">買取業者（宅配）</td><td className="px-4 py-3 text-green-600">0円</td><td className="px-4 py-3 text-green-600">0円</td><td className="px-4 py-3 font-bold text-green-600 rounded-br-lg">3,000〜5,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ フリマアプリの売却額は出品価格。買取業者の査定額は着物の種類・状態により異なります。高額着物ほどフリマアプリが有利、安価な着物ほど買取業者が効率的です。</p>
        </div>
      </section>

      {/* スマホ活用の実践ガイド */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物の種類別・最適なアプリ活用法
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            着物の種類や状態によって、最適な売り方は変わります。以下の表を参考に、あなたの着物に合った方法を選びましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">おすすめの売り方</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">理由</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">作家物・人間国宝</td>
                  <td className="px-4 py-3 text-gray-700">買取業者 &gt; ヤフオク</td>
                  <td className="px-4 py-3 text-gray-700">専門査定で適正価格。ヤフオクはリスクあり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ブランド振袖</td>
                  <td className="px-4 py-3 text-gray-700">メルカリ &gt; 買取業者</td>
                  <td className="px-4 py-3 text-gray-700">若い世代からの需要が高い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">カジュアル着物</td>
                  <td className="px-4 py-3 text-gray-700">メルカリ・ラクマ</td>
                  <td className="px-4 py-3 text-gray-700">手軽に楽しみたい層に人気</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">大量の着物（10枚以上）</td>
                  <td className="px-4 py-3 text-gray-700">買取業者（出張買取）</td>
                  <td className="px-4 py-3 text-gray-700">1枚ずつ出品する手間が不要</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">帯・和装小物</td>
                  <td className="px-4 py-3 text-gray-700">メルカリ &gt; 買取業者</td>
                  <td className="px-4 py-3 text-gray-700">セット販売で付加価値</td>
                </tr>
                <tr className="bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">古い・シミあり着物</td>
                  <td className="px-4 py-3 text-gray-700">買取業者</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">フリマでは売れにくい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ <Link href="/articles/old-stained-kimono/" className="text-[#6b4c8a] hover:underline">古い着物・シミありの着物の売り方</Link>も参考にしてください。
          </p>
        </div>
      </section>

      {/* スマホで着物を売る際の注意点 */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            スマホで着物を売る際の注意点
          </h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">フリマアプリでの値下げ交渉に注意</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                メルカリでは値下げ交渉が頻繁に行われます。最初から最低売りたい価格ギリギリに設定するのではなく、交渉分を上乗せした価格で出品しましょう。ただし、あまりに高すぎる価格設定は閲覧数が減る原因になります。相場の1.2〜1.3倍程度が目安です。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">偽物と間違われないための対策</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                高額着物（作家物・伝統工芸品）をフリマアプリで出品する際は、証紙・落款の鮮明な写真を必ず載せましょう。購入者から「偽物ではないか」という質問を受けることがありますが、証紙の写真があれば信頼性が増します。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙ガイド</Link>も参考に。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">返品トラブルの防止策</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「実物と色が違う」「シミがあるとは思わなかった」といったトラブルを防ぐために、商品説明には状態を正直に記載し、シミや汚れの写真も載せましょう。サイズ（身丈・裄丈・袖丈・前幅・後幅）の実測値も記載必須です。<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] hover:underline">トラブル防止ガイド</Link>もチェック。
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">個人情報の取り扱い</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                メルカリ便やヤフネコパックなどの匿名配送を利用すれば、購入者に住所・氏名を知られずに取引できます。プライバシーが気になる方は匿名配送に対応したアプリ・配送方法を選びましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 組み合わせ活用術 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            アプリと買取業者の組み合わせ活用術
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              フリマアプリと買取業者のオンライン査定を組み合わせることで、最も効率的かつ高額に着物を売却できます。以下のステップがおすすめです。
            </p>
          </div>
          <div className="mt-4 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">まず買取業者のオンライン査定で相場を把握</h3>
                <p className="text-sm text-gray-700">RECLOの写真査定やヒカカクの一括査定で、お手持ちの着物の概算価値を確認します。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">高額着物はフリマアプリで個別出品</h3>
                <p className="text-sm text-gray-700">買取業者の査定額より高く売れそうな着物は、メルカリやヤフオクで個別に出品。相場を知った上で適正価格を設定できます。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">残りは買取業者にまとめて売却</h3>
                <p className="text-sm text-gray-700">フリマで売れにくい着物や安価な着物は、買取業者にまとめて出張・宅配で売却。手間をかけずに現金化できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/articles/auction-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">ネットオークション出品ガイド</h3><p className="text-xs text-gray-600">ヤフオク・メルカリでの売り方を詳しく解説。</p></Link>
            <Link href="/articles/line-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">LINE査定ガイド</h3><p className="text-xs text-gray-600">LINEで簡単に査定額を確認する方法。</p></Link>
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          </div>
        </div>
      </section>

      {/* 初心者向けステップガイド */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            初心者向け：スマホで着物を売る5ステップ
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            スマホで着物を売るのが初めての方のために、最もシンプルな手順をご紹介します。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">着物の写真をスマホで撮影</h3>
                <p className="text-sm text-gray-700">
                  全体写真・柄のアップ・証紙の写真を撮ります。自然光の下で撮影するのがポイントです。
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">買取業者にオンライン査定を依頼</h3>
                <p className="text-sm text-gray-700">
                  RECLOの写真査定やLINE査定で概算額を確認します。無料で利用でき、1〜2日で結果が届きます。
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">査定額が高ければ買取業者で売却</h3>
                <p className="text-sm text-gray-700">
                  査定額に満足できれば、宅配買取や出張買取で売却。手間がほとんどかかりません。
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">もっと高く売りたければフリマアプリへ</h3>
                <p className="text-sm text-gray-700">
                  買取業者の査定額より高く売れそうな着物は、メルカリやヤフオクに出品。相場を知った上で適正価格を設定できます。
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">5</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">売れない着物は買取業者にまとめて売却</h3>
                <p className="text-sm text-gray-700">
                  フリマで売れ残った着物や出品する手間がない着物は、買取業者にまとめて宅配買取で売却。手間なく全てを現金化できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 着物アプリ活用の注意点まとめ */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            まとめ：あなたに最適な着物の売り方
          </h2>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                スマホを活用した着物の売り方は、大きく分けて「フリマアプリで個人売買」と「買取業者のオンライン査定→宅配・出張買取」の2つがあります。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#f3eef7] rounded-lg p-4">
                  <h4 className="font-bold text-[#6b4c8a] mb-2">フリマアプリが向いている方</h4>
                  <ul className="space-y-1 text-sm">
                    <li>・ 高額着物を1〜2点売りたい</li>
                    <li>・ 出品・対応・梱包の手間を厭わない</li>
                    <li>・ 売れるまで待てる時間的余裕がある</li>
                    <li>・ 買取業者の査定額に納得できなかった</li>
                  </ul>
                </div>
                <div className="bg-[#faf5ee] rounded-lg p-4">
                  <h4 className="font-bold text-[#c9a76c] mb-2">買取業者が向いている方</h4>
                  <ul className="space-y-1 text-sm">
                    <li>・ 手間をかけずに売りたい</li>
                    <li>・ 大量の着物をまとめて処分したい</li>
                    <li>・ すぐに現金化したい</li>
                    <li>・ トラブルのリスクを避けたい</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                どちらか迷ったら、まずは買取業者のオンライン査定で相場を確認するところから始めましょう。無料で使えるため、リスクはゼロです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">スマホで着物の価値を今すぐチェック</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            LINE査定・写真査定で概算額を確認。まずは無料で相場をチェックしてみましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>

      <SoubaNote />
    </>
  );
}
