import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "引っ越し前の着物処分ガイド｜急ぎで売りたい時のベスト方法",
  description:
    "引っ越し前に着物を処分したい方向けの完全ガイド。急ぎで着物を売りたい時の最適な方法を比較。出張買取・宅配買取・持ち込み買取のメリット・デメリット、引っ越しまでの日数別おすすめ方法を解説。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクを比較。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/moving-sale/",
  },
  openGraph: {
    title: "引っ越し前の着物処分ガイド｜急ぎで売りたい時のベスト方法",
    description: "引っ越し前に着物を急いで処分するための方法と業者比較。日数別のおすすめ方法も解説。",
    url: "https://kimonokaitori-biyori.com/articles/moving-sale/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "引っ越しまで1週間しかありません。着物を売れますか？",
    answer: "はい、1週間あれば十分に着物を売ることができます。最も早い方法は出張買取で、当日〜翌日に査定員が訪問し、その場で現金化できます。買取大吉やウリエルは当日予約にも対応しています。持ち込み買取も即日対応が可能です。複数社に見積もりを取る時間もありますので、焦らず比較して売りましょう。",
  },
  {
    question: "引っ越し業者に着物の処分を頼んでもいいですか？",
    answer: "引っ越し業者の不用品回収サービスでも着物を処分できますが、買取ではなく「処分」になるため費用がかかることが多いです。着物は買取業者に売れば現金になるため、引っ越し業者への依頼はおすすめしません。特にブランド着物や作家物は数万円〜数十万円の価値がつくこともあります。",
  },
  {
    question: "引っ越しの荷造りと同時に着物の買取をしてもらえますか？",
    answer: "出張買取であれば、荷造りの合間に査定を受けることが可能です。査定員が訪問して着物を一点ずつ見てくれるので、お客様は他の荷造り作業を進めていても問題ありません。事前に売りたい着物をまとめておくとスムーズです。",
  },
  {
    question: "引っ越し先に持っていくか売るか迷っています。判断基準は？",
    answer: "判断基準として、(1)今後着る予定があるか、(2)保管スペースを確保できるか、(3)思い入れのある着物か、の3点で考えましょう。今後着る予定がなく、保管スペースも限られる場合は売却がおすすめです。迷うものは写真を撮って記録に残し、着物自体は売却するという方法もあります。",
  },
  {
    question: "引っ越しで大量の着物を一度に売りたいのですが可能ですか？",
    answer: "はい、出張買取であれば大量の着物も一度に売ることができます。買取大吉やウリエルは点数制限なく対応しています。数十枚以上の場合は事前に点数を伝えておくと、査定員が十分な時間を確保してくれます。大量買取の場合は査定に2〜3時間かかることもあるため、余裕を持ったスケジュールで依頼しましょう。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "引っ越し前の着物処分ガイド｜急ぎで売りたい時のベスト方法",
  description: "引っ越し前に着物を急いで処分するための方法と業者比較。日数別のおすすめ方法も解説。",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/moving-sale/" },
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
    { "@type": "ListItem", position: 3, name: "引っ越し前の着物処分", item: "https://kimonokaitori-biyori.com/articles/moving-sale/" },
  ],
};

export default function MovingSalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "引っ越し前の着物処分" }]} />

      <SoubaNote />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">引っ越し・断捨離向け</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">引っ越し前の着物処分ガイド</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">急ぎで売りたい時のベスト方法</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              引っ越しが決まって着物をどうするか困っている方へ。残り日数に合わせた最適な処分方法と、急ぎでも損しない売り方をご紹介します。捨てるのはもったいない着物を、適正価格で売却しましょう。
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
                <li><a href="#options" className="text-[#6b4c8a] hover:underline">1. 引っ越し時の着物処分方法5つ</a></li>
                <li><a href="#timeline" className="text-[#6b4c8a] hover:underline">2. 残り日数別おすすめ方法</a></li>
                <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">3. 引っ越し前におすすめの着物買取業者5選</a></li>
                <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">4. 5社の即日・スピード対応比較</a></li>
                <li><a href="#checklist" className="text-[#6b4c8a] hover:underline">5. 引っ越し前の着物整理チェックリスト</a></li>
                <li><a href="#mistakes" className="text-[#6b4c8a] hover:underline">6. やってはいけない処分方法</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">7. 急ぎでも高く売る3つのコツ</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section id="options" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />引っ越し時の着物処分方法5つ
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">おすすめ</span>
                <h3 className="font-bold text-[#6b4c8a] text-base">1. 買取業者に売る（出張・持ち込み・宅配）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">最もおすすめの方法です。専門業者に買い取ってもらえば現金が手に入り、着物も適切にリユースされます。出張買取なら最短当日で現金化が可能。<Link href="/articles/same-day-cash/" className="text-[#6b4c8a] hover:underline">即日現金化ガイド</Link>も参考にしてください。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. フリマアプリ・ネットオークションで売る</h3>
              <p className="text-sm leading-relaxed text-gray-700">メルカリやヤフオクで個人販売する方法。買取業者より高く売れる可能性がありますが、出品・発送の手間と売れるまでの時間がかかるため、引っ越しまでの日数に余裕がある場合に向いています。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 知人・親族に譲る</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物を着る方が身近にいれば、譲ることもひとつの選択肢です。思い入れのある着物を大切にしてくれる方に渡せるメリットがあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. リメイク・リサイクルに出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物をバッグや洋服にリメイクしたり、リサイクルショップに持ち込んだりする方法。ただし、リサイクルショップでは着物の専門知識がないため適正価格がつかないことが多いです。<Link href="/articles/remake/" className="text-[#6b4c8a] hover:underline">リメイクガイド</Link>も参考に。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. 寄付・NPOに提供する</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物を必要としているNPOや団体に寄付する方法もあります。社会貢献になりますが、送料は自己負担になることが多いです。<Link href="/articles/donation/" className="text-[#6b4c8a] hover:underline">着物の寄付ガイド</Link>をご覧ください。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />残り日数別おすすめ方法
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">残り日数</th>
                  <th className="px-4 py-3 text-left font-semibold">おすすめ方法</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">当日〜3日</td>
                  <td className="px-4 py-3 text-gray-700">出張買取・持ち込み買取</td>
                  <td className="px-4 py-3 text-gray-700">買取大吉・ウリエルの当日出張を活用</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">4日〜1週間</td>
                  <td className="px-4 py-3 text-gray-700">出張買取（複数社比較）</td>
                  <td className="px-4 py-3 text-gray-700">2〜3社に見積もりを取って比較する余裕あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">1〜2週間</td>
                  <td className="px-4 py-3 text-gray-700">出張 + 宅配を併用</td>
                  <td className="px-4 py-3 text-gray-700">RECLOの宅配買取も並行して利用</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">2週間以上</td>
                  <td className="px-4 py-3 text-gray-700">全方法を検討可能</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">フリマアプリも含めて最適な方法を選択</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />引っ越し前におすすめの着物買取業者5選
          </h2>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">全国700店舗以上展開。持ち込み買取は予約不要で即日対応、出張買取も当日予約可能。引っ越し前の急ぎのケースに最も頼りになる業者です。着物だけでなく和装小物・帯もまとめて買い取ってくれるので、一度で片付きます。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">即日対応</p><p className="font-semibold text-green-600">持込・出張OK</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">大量買取</p><p className="font-semibold text-green-600">点数制限なし</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">支払い</p><p className="font-semibold">その場で現金</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">着物専門の出張買取に強い業者。引っ越しで大量の着物を処分したい場合も、自宅で一括査定してくれます。荷造りの合間に査定を受けることも可能。女性査定員の指名もできるので安心です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">即日対応</p><p className="font-semibold text-green-600">出張OK</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">大量買取</p><p className="font-semibold text-green-600">点数制限なし</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">特徴</p><p className="font-semibold">着物専門査定</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">宅配買取に強みを持つ業者。引っ越しまでに1〜2週間の余裕がある場合におすすめ。梱包キット無料・送料無料で、荷造りのついでに着物を梱包して発送できます。海外販路があるため高額査定が期待できます。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">即日対応</p><p className="font-semibold text-gray-400">不可</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">入金目安</p><p className="font-semibold">2〜5営業日</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">送料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">強み</p><p className="font-semibold">高額査定重視</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">東京を中心に展開するリユース企業。着物以外の不用品もまとめて買い取ってくれるため、引っ越しの断捨離で様々な品物を一度に処分したい場合に便利。出張・持ち込みとも即日対応可能です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">即日対応</p><p className="font-semibold text-green-600">出張・持込OK</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">強み</p><p className="font-semibold">着物以外も対応</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">対応エリア</p><p className="font-semibold">東京近郊中心</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">一括査定比較サイト。引っ越し前の忙しいときでも、スマホで簡単に複数業者の見積もりが取れます。「急いでいるけど安く売りたくない」という方は、ヒカカクで相場を確認してから即日対応の業者に依頼するのがベストです。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">サービス種別</p><p className="font-semibold">一括査定比較</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">メリット</p><p className="font-semibold">短時間で相場把握</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">利用料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">特徴</p><p className="font-semibold">スマホで簡単</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />5社の即日・スピード対応比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">業者名</th>
                  <th className="px-4 py-3 text-left font-semibold">即日出張</th>
                  <th className="px-4 py-3 text-left font-semibold">即日持込</th>
                  <th className="px-4 py-3 text-left font-semibold">大量買取</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">引っ越し向き度</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★★</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★★</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">★★★</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ヒカカク</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-[#c9a76c] font-bold rounded-br-lg">★★★</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="checklist" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />引っ越し前の着物整理チェックリスト
          </h2>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>着物を「残す」「売る」「譲る」「処分する」に分類する</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>証紙・証明書・たとう紙など付属品を着物と一緒にまとめる</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>帯・和装小物も売りたい場合はまとめて用意する</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>思い出の着物は写真を撮って記録に残す</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>買取業者に電話・Webで予約を入れる（2〜3社以上）</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>本人確認書類を用意する</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>引っ越し日から逆算して査定日を設定する</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>買取金額に納得してから契約する（即決しない）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 引っ越し先での着物の保管 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            持っていく着物の引っ越し後の保管方法
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            引っ越し後も手元に残す着物は、新居での保管環境を整えることが大切です。保管状態が悪いとシミやカビが発生し、将来売る際にも価値が下がってしまいます。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">引っ越し後すぐにやること</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                引っ越し後は段ボールから出して、風通しの良い場所で陰干しをしましょう。段ボールに入れたまま放置すると湿気がこもり、カビの原因になります。梱包材のにおいが付くこともあるため、早めに出すことが大切です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">新居での保管場所</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                理想は桐たんすですが、スペースが限られる場合はクローゼットの上段（湿気が少ない場所）にたとう紙で包んで保管しましょう。除湿剤や防虫剤も忘れずに。<Link href="/articles/storage-guide/" className="text-[#6b4c8a] hover:underline">着物の保管方法ガイド</Link>で詳しく解説しています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">定期的なメンテナンス</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                年に2回（春と秋）は虫干しをして、着物の状態をチェックしましょう。シミやカビが見つかった場合は早めに対処することで、買取価格の低下を防げます。メンテナンスが難しいと感じたら、状態が良いうちに売却を検討することも一つの選択肢です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 引っ越し時の着物買取相場 */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            引っ越し時に売れる着物の買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            「どのくらいの金額になるのか分からないと売る気にならない」という方のために、代表的な着物の買取相場をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品</th>
                  <th className="px-4 py-3 text-left font-semibold">ブランド・作家物</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">引っ越し時のポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td>
                  <td className="px-4 py-3 text-gray-700">3,000〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2〜50万円</td>
                  <td className="px-4 py-3 text-gray-700">成人式後に手放す方が多い</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700">2,000〜1.5万円</td>
                  <td className="px-4 py-3 text-gray-700">1.5〜30万円</td>
                  <td className="px-4 py-3 text-gray-700">需要が高く売りやすい</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬</td>
                  <td className="px-4 py-3 text-gray-700">3,000〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2〜40万円</td>
                  <td className="px-4 py-3 text-gray-700">大島紬・結城紬は高額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖</td>
                  <td className="px-4 py-3 text-gray-700">1,000〜8,000円</td>
                  <td className="px-4 py-3 text-gray-700">8,000〜15万円</td>
                  <td className="px-4 py-3 text-gray-700">着る機会が少なく処分対象に</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯・小物</td>
                  <td className="px-4 py-3 text-gray-700">500〜4,000円</td>
                  <td className="px-4 py-3 text-gray-700">4,000〜15万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">着物とセットで出すと高額に</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 相場は状態・サイズ・市場動向により変動します。詳しくは<Link href="/articles/kimono-market-price/" className="text-[#6b4c8a] hover:underline">着物買取相場一覧</Link>をご覧ください。
          </p>
        </div>
      </section>

      <section id="mistakes" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />やってはいけない処分方法
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2 text-base">ゴミとして捨てる</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物は正絹であれば数千円〜数十万円の価値があります。特に作家物や伝統工芸品は高額買取の対象です。捨てる前に必ず査定を受けましょう。査定は無料です。</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2 text-base">引っ越し業者の「不用品回収」に任せる</h3>
              <p className="text-sm leading-relaxed text-gray-700">引っ越し業者の不用品回収は「処分」であり「買取」ではありません。処分費用がかかる上、着物の価値は全く考慮されません。別途買取業者に依頼した方が確実にお得です。</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2 text-base">焦って1社だけで即決する</h3>
              <p className="text-sm leading-relaxed text-gray-700">引っ越しが迫っていると焦りがちですが、1社の査定額だけで決めてしまうのは損する可能性が高いです。最低2社、できれば3社に見積もりを取りましょう。<Link href="/articles/avoid-loss/" className="text-[#6b4c8a] hover:underline">損しないためのガイド</Link>もチェック。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />急ぎでも高く売る3つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：証紙と証明書を必ず添える</h3>
              <p className="text-sm leading-relaxed text-gray-700">時間がなくても、証紙と購入証明書だけは探してから査定に臨みましょう。これだけで査定額が数倍になることもあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：ヒカカクで事前に相場を把握</h3>
              <p className="text-sm leading-relaxed text-gray-700">ヒカカクの一括査定で概算額を把握しておけば、提示された金額が妥当かどうか判断できます。相場を知らないと安く買い叩かれるリスクがあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：帯・小物もまとめて出す</h3>
              <p className="text-sm leading-relaxed text-gray-700">引っ越しの機会に和装関連品すべてをまとめて査定に出しましょう。セットで出すと付加価値が認められ、個別に売るより高額になります。</p>
            </div>
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
            <Link href="/articles/same-day-cash/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">即日現金化ガイド</h3>
              <p className="text-xs text-gray-600">最短当日に着物を現金化する方法。</p>
            </Link>
            <Link href="/articles/bulk-selling/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">大量売却ガイド</h3>
              <p className="text-xs text-gray-600">大量の着物をまとめて売る方法。</p>
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">引っ越し前に着物を賢く売却</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            捨てるのはもったいない着物を、適正価格で買い取ってもらいましょう。まずは無料査定から。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
