import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物買取 夜間・土日対応の業者まとめ｜平日忙しい方向け",
  description:
    "平日忙しい方のために、土日・夜間に着物買取対応できる業者をまとめました。土日の出張買取・持ち込み買取、夜間対応のオンライン査定など、仕事が忙しい方でも利用できる着物買取サービスを徹底比較。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの対応状況を解説。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/weekend-night/" },
  openGraph: {
    title: "着物買取 夜間・土日対応の業者まとめ｜平日忙しい方向け",
    description: "土日・夜間に着物買取を利用したい方向け。各社の営業時間・休日対応を比較。",
    url: "https://kimonokaitori-biyori.com/articles/weekend-night/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "土日に出張買取を依頼できる業者はありますか？", answer: "はい、買取大吉やウリエルは土日の出張買取に対応しています。土日は平日と比べて予約が埋まりやすいため、早めに予約することをおすすめします。特に連休の週末は混雑するため、1週間前には予約を入れておくと安心です。" },
  { question: "夜間（19時以降）に出張買取を依頼できますか？", answer: "業者によりますが、買取大吉の一部店舗は19時〜20時頃まで営業しています。ウリエルは出張買取の時間について相談に応じてくれる場合があります。夜間対応は確約ではないため、事前に電話で確認してみてください。夜間対応が難しい場合は、RECLOの宅配買取やヒカカクのオンライン一括査定が24時間利用可能です。" },
  { question: "土日の持ち込み買取は混雑しますか？", answer: "土日は平日に比べて来店数が多く、待ち時間が発生することがあります。買取大吉は予約不要で持ち込み可能ですが、土日は事前に電話予約しておくと待ち時間を短縮できます。午前中や開店直後は比較的空いている傾向があります。" },
  { question: "仕事が忙しくてどの方法も使えない場合はどうすれば？", answer: "最も時間効率が良いのは宅配買取です。RECLOなら梱包キットが自宅に届き、好きなタイミングで着物を梱包して集荷を依頼するだけ。24時間集荷手配が可能で、仕事から帰宅後の深夜に梱包して翌朝集荷という使い方もできます。査定結果はメールで届きます。" },
  { question: "祝日に着物買取を利用できますか？", answer: "はい、祝日に対応している業者は多いです。買取大吉・ティファナの店舗は祝日も通常営業していることが多いです。ウリエルの出張買取も祝日に対応しています。ただし、年末年始やゴールデンウィークなど大型連休は営業時間が変更になる場合があるため、事前に確認してください。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取 夜間・土日対応の業者まとめ｜平日忙しい方向け",
  description: "土日・夜間に着物買取を利用したい方向け。各社の営業時間・休日対応を比較。",
  datePublished: "2026-05-17", dateModified: "2026-05-17",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/weekend-night/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "夜間・土日対応ガイド", item: "https://kimonokaitori-biyori.com/articles/weekend-night/" },
] };

export default function WeekendNightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "夜間・土日対応ガイド" }]} />

      <SoubaNote />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4"><div className="text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">平日忙しい方向け</span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-gradient">着物買取 夜間・土日対応</span><br className="md:hidden" />
            <span className="block mt-2 text-lg md:text-2xl text-gray-700">平日忙しい方向け業者まとめ</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            「平日は仕事で着物買取を利用できない」という方に向けて、土日・祝日・夜間に対応した着物買取業者をまとめました。ライフスタイルに合わせた最適な売却方法をご提案します。
          </p>
          <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
        </div></div>
      </section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#situation" className="text-[#6b4c8a] hover:underline">1. 平日忙しい方の着物売却の悩み</a></li>
          <li><a href="#schedule" className="text-[#6b4c8a] hover:underline">2. 曜日・時間帯別おすすめ方法</a></li>
          <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">3. 土日・夜間対応のおすすめ業者5選</a></li>
          <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">4. 5社の営業時間・休日対応比較</a></li>
          <li><a href="#takuhai" className="text-[#6b4c8a] hover:underline">5. 忙しい人に最適な宅配買取の活用法</a></li>
          <li><a href="#online" className="text-[#6b4c8a] hover:underline">6. 24時間利用可能なオンライン査定</a></li>
          <li><a href="#tips" className="text-[#6b4c8a] hover:underline">7. 限られた時間で高く売る3つのコツ</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="situation" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />平日忙しい方の着物売却の悩み</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>フルタイムで働いている方にとって、平日の営業時間内に着物買取を利用するのは困難です。多くの買取店は10時〜18時頃の営業で、出張買取も平日日中が基本。こうした時間的制約が、着物を売りたくても売れないという状況を生んでいます。</p>
            <p>しかし近年は、<strong>土日・祝日対応</strong>の業者や、<strong>夜間の出張買取</strong>に柔軟に対応してくれる業者が増えています。また、<strong>宅配買取</strong>を活用すれば、好きな時間に梱包・発送ができるため、時間の制約を受けません。</p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-1">土日対応</p>
              <p className="text-xs text-gray-600">出張・持ち込みとも対応</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">夜間相談</p>
              <p className="text-xs text-gray-600">一部業者で19時〜対応</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-1">24時間OK</p>
              <p className="text-xs text-gray-600">宅配買取・オンライン査定</p>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />曜日・時間帯別おすすめ方法</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">利用可能な時間</th>
                <th className="px-4 py-3 text-left font-semibold">おすすめ方法</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">おすすめ業者</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">土日の日中</td><td className="px-4 py-3 text-gray-700">持ち込み買取・出張買取</td><td className="px-4 py-3 text-gray-700">買取大吉・ウリエル・ティファナ</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">平日夜（18時〜）</td><td className="px-4 py-3 text-gray-700">オンライン査定・宅配買取申込</td><td className="px-4 py-3 text-gray-700">RECLO・ヒカカク</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">平日夜（19時〜）</td><td className="px-4 py-3 text-gray-700">持ち込み買取（一部店舗）</td><td className="px-4 py-3 text-gray-700">買取大吉（一部20時まで）</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">深夜・早朝</td><td className="px-4 py-3 text-gray-700">宅配買取の梱包・オンライン査定</td><td className="px-4 py-3 text-gray-700">RECLO・ヒカカク</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">まとまった時間が取れない</td><td className="px-4 py-3 text-gray-700">宅配買取（スキマ時間で完結）</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">RECLO</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="recommended" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />土日・夜間対応のおすすめ業者5選</h2>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            {[
              { rank: "第1位", name: "買取大吉", color: "#c9a76c", desc: "全国700店舗以上。多くの店舗が土日・祝日も営業。一部店舗は19時〜20時まで営業しており、仕事帰りの持ち込みが可能。出張買取も土日対応。予約不要で持ち込めるため、思い立った週末にすぐ利用できます。", tags: [{ label: "土日営業", value: "対応" }, { label: "夜間", value: "一部20時まで" }, { label: "出張土日", value: "対応" }, { label: "査定料", value: "無料" }] },
              { rank: "第2位", name: "ウリエル", color: "#6b4c8a", desc: "着物専門の出張買取に強い業者。土日・祝日の出張買取に対応しており、週末に自宅でゆっくり査定を受けられます。出張時間は相談に応じてくれるため、午前・午後の希望時間を指定可能。女性査定員も指名できます。", tags: [{ label: "土日出張", value: "対応" }, { label: "時間指定", value: "可能" }, { label: "女性査定員", value: "指名可" }, { label: "査定料", value: "無料" }] },
              { rank: "第3位", name: "RECLO（リクロ）", color: "#6b4c8a", desc: "宅配買取がメイン。Webからの申し込みは24時間受付で、深夜でも早朝でも好きなタイミングで手続きが可能。梱包も好きな時間にでき、集荷も時間帯を指定可能。時間に縛られたくない方に最適です。", tags: [{ label: "Web申込", value: "24時間" }, { label: "集荷時間", value: "指定可" }, { label: "送料", value: "無料" }, { label: "事前査定", value: "24時間可" }] },
              { rank: "第4位", name: "ティファナ", color: "#6b4c8a", desc: "東京・神奈川を中心に店舗展開。多くの店舗が土日・祝日も営業。持ち込みは予約不要で、週末のお出かけついでに立ち寄れます。出張買取も土日対応可能です。", tags: [{ label: "土日営業", value: "対応" }, { label: "予約", value: "不要" }, { label: "出張土日", value: "対応" }, { label: "査定料", value: "無料" }] },
              { rank: "第5位", name: "ヒカカク", color: "#6b4c8a", desc: "一括査定比較サイト。24時間オンラインで複数業者の見積もりを一括取得可能。平日夜や深夜にスマホでサクッと査定依頼し、週末に最高額の業者を利用する、という使い方が効率的です。", tags: [{ label: "オンライン", value: "24時間" }, { label: "見積もり", value: "一括取得" }, { label: "利用料", value: "無料" }, { label: "使い方", value: "夜に申込→週末に売却" }] },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#e8ddd0] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: item.color }}>{item.rank}</span>
                  <h3 className="text-lg font-bold text-[#6b4c8a]">{item.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700 mb-4">{item.desc}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  {item.tags.map((tag, j) => (
                    <div key={j} className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">{tag.label}</p><p className="font-semibold">{tag.value}</p></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />5社の営業時間・休日対応比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">業者名</th>
                <th className="px-4 py-3 text-left font-semibold">土日対応</th>
                <th className="px-4 py-3 text-left font-semibold">夜間対応</th>
                <th className="px-4 py-3 text-left font-semibold">Web申込</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">忙しい人向き度</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-gray-700">一部20時まで</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★★</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-gray-700">相談可</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-green-600 font-bold">24時間</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★★</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-gray-700">店舗による</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-[#c9a76c] font-bold">★★★★</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ヒカカク</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-green-600 font-bold">24時間</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-[#c9a76c] font-bold rounded-br-lg">★★★★★</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="takuhai" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />忙しい人に最適な宅配買取の活用法</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>宅配買取は時間の制約がほとんどなく、忙しい方に最もおすすめの方法です。以下のように活用すれば、スキマ時間だけで着物買取が完了します。</p>
          </div>
          <div className="mt-4 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a76c] text-white flex items-center justify-center font-bold text-lg">月</div>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1 text-base">月曜夜：Webで申し込み</h3><p className="text-sm text-gray-700">帰宅後にRECLOのWebサイトから宅配買取を申し込み。梱包キットの送付先を入力するだけ。所要時間5分。</p></div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a76c] text-white flex items-center justify-center font-bold text-lg">水</div>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1 text-base">水曜：梱包キットが届く</h3><p className="text-sm text-gray-700">梱包キット（段ボール・着払い伝票・説明書）が届きます。</p></div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a76c] text-white flex items-center justify-center font-bold text-lg">木</div>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1 text-base">木曜夜：帰宅後に梱包</h3><p className="text-sm text-gray-700">着物を段ボールに入れるだけ。証紙や証明書も一緒に入れましょう。所要時間15分。</p></div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a76c] text-white flex items-center justify-center font-bold text-lg">金</div>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1 text-base">金曜朝：集荷依頼</h3><p className="text-sm text-gray-700">Webまたは電話で集荷を依頼。出勤前に玄関に置いておけば、宅配業者が回収してくれます。</p></div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a76c] text-white flex items-center justify-center font-bold text-lg">翌週</div>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1 text-base">翌週：査定結果がメールで届く</h3><p className="text-sm text-gray-700">査定結果をメールで確認し、同意すれば銀行振込で入金。納得できなければ無料返送。</p></div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">詳しくは<Link href="/articles/takuhai-kaitori/" className="text-[#6b4c8a] hover:underline">宅配買取ガイド</Link>をご覧ください。</p>
        </div>
      </section>

      <section id="online" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />24時間利用可能なオンライン査定</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLOのオンライン事前査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">スマホで着物の写真を撮って送るだけで、概算の査定額が分かります。深夜でも利用可能で、通勤電車の中やお昼休みにサクッと利用できます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ヒカカクの一括査定</h3>
              <p className="text-sm leading-relaxed text-gray-700">Webフォームに情報を入力するだけで、複数業者から見積もりが届きます。24時間受付で、夜間に申し込んでおけば翌日には結果が届きます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">LINE査定（一部業者）</h3>
              <p className="text-sm leading-relaxed text-gray-700">ウリエルや買取大吉は、LINEで写真を送るだけの事前査定にも対応しています。<Link href="/articles/line-appraisal/" className="text-[#6b4c8a] hover:underline">LINE査定の詳しいガイド</Link>も参考にしてください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 土日出張買取のポイント */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            土日に出張買取を利用するポイント
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">早めの予約がカギ</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                土日の出張買取は人気が高く、直前だと希望の時間帯が取れないことがあります。特に連休の週末は混雑するため、1週間前には予約を入れておきましょう。買取大吉やウリエルは電話・Webの両方で予約を受け付けています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">午前と午後で2社を比較</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                土日をフルに活用するなら、午前中に1社、午後にもう1社の出張査定を入れる方法があります。例えば午前に買取大吉、午後にウリエルの出張査定を受ければ、1日で2社の見積もりを比較できます。複数社の比較は高額売却の基本です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">事前準備は平日夜に済ませる</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                土日の査定日を有効活用するため、着物の整理・証紙の確認・本人確認書類の準備は平日夜のうちに済ませておきましょう。当日スムーズに査定が進み、短時間で完了します。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙ガイド</Link>で事前に確認しておくと安心です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">家族も同席できる利点</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                土日であればご家族が同席しやすいのもメリットです。特にご高齢の方の着物を買い取ってもらう場合、ご家族と一緒に査定を受けることで安心感が増します。<Link href="/articles/elderly-guide/" className="text-[#6b4c8a] hover:underline">高齢者向け着物買取ガイド</Link>も参考にしてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 働き方別おすすめプラン */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            働き方別おすすめプラン
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">フルタイム勤務（土日休み）の方</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                <strong>おすすめ：</strong>土曜午前に出張買取 + 平日夜にオンライン査定で相場確認<br />
                平日夜にヒカカクやRECLOのオンライン査定で概算額を確認。土曜午前に買取大吉またはウリエルの出張買取を予約し、相場を知った上で査定を受けましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">シフト勤務・不定休の方</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                <strong>おすすめ：</strong>宅配買取をメインに活用<br />
                RECLOの宅配買取なら、空いた時間に梱包して集荷依頼するだけ。出勤前の朝や帰宅後の夜など、好きなタイミングで作業できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">子育て中で時間が取れない方</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                <strong>おすすめ：</strong>出張買取（自宅査定）+ LINE査定で事前確認<br />
                子どもがいても自宅で査定を受けられる出張買取が便利。事前にLINE査定で相場を確認しておけば、出張時の査定がスムーズに進みます。ウリエルの女性査定員なら、お子さんがいても安心です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">残業が多く帰宅が遅い方</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                <strong>おすすめ：</strong>宅配買取 + 隔週の土日を査定日に<br />
                宅配買取で手間を最小限にしつつ、高額着物は2週間に1回の休日に出張査定を受ける方法が効率的です。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>も事前にチェック。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />限られた時間で高く売る3つのコツ</h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：平日夜にオンライン査定で相場を確認</h3>
              <p className="text-sm leading-relaxed text-gray-700">ヒカカクやRECLOのオンライン査定は24時間利用可能。平日夜のうちに相場を把握しておけば、週末の査定で安く買い叩かれるリスクを防げます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：証紙と証明書は事前にまとめておく</h3>
              <p className="text-sm leading-relaxed text-gray-700">週末の査定日までに、証紙・証明書・たとう紙を着物と一緒にまとめておきましょう。当日バタバタして探す手間を省けます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：出張買取は土曜午前を狙う</h3>
              <p className="text-sm leading-relaxed text-gray-700">土日の出張買取は人気が高いため、できるだけ早めに予約しましょう。土曜午前は比較的予約が取りやすく、午後には別の業者の査定を入れて比較することも可能です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 夜間の店舗持ち込み情報 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            夜間に持ち込み買取できる店舗情報
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            仕事帰りに着物を持ち込みたい方のために、夜間営業の買取店舗情報をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">業者名</th>
                  <th className="px-4 py-3 text-left font-semibold">一般的な営業時間</th>
                  <th className="px-4 py-3 text-left font-semibold">夜間対応</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-gray-700">10:00〜19:00</td>
                  <td className="px-4 py-3 text-gray-700">一部店舗20:00まで</td>
                  <td className="px-4 py-3 text-gray-700">商業施設内店舗は施設の営業時間に準ずる</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-gray-700">10:00〜18:00</td>
                  <td className="px-4 py-3 text-gray-700">出張は相談可</td>
                  <td className="px-4 py-3 text-gray-700">出張買取の時間は柔軟に対応</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-gray-700">10:00〜19:00</td>
                  <td className="px-4 py-3 text-gray-700">店舗による</td>
                  <td className="px-4 py-3 text-gray-700">ショッピングモール内は遅めまで営業</td>
                </tr>
                <tr className="bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">RECLO</td>
                  <td className="px-4 py-3 text-gray-700">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">24時間Web受付</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">宅配買取のため店舗なし</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 営業時間は店舗により異なります。事前に公式サイトまたは電話で確認してください。
          </p>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">夜間持ち込みのポイント：</strong>
              夜間に店舗持ち込みを利用する場合は、事前に電話で「本日○時頃に持ち込みたい」と連絡しておくとスムーズです。閉店間際の来店は査定が翌日に持ち越しになることもあるため、閉店の1時間前までには来店しましょう。詳しくは<Link href="/articles/tenpo-mochikomi/" className="text-[#6b4c8a] hover:underline">店舗持ち込みガイド</Link>もご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 着物買取相場のクイック参照 */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物の種類別買取相場（参考）
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            土日の査定に臨む前に、大まかな相場を把握しておきましょう。提示された金額が妥当かどうかの判断材料になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">着物の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品</th>
                  <th className="px-4 py-3 text-left font-semibold">ブランド品</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">作家物</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">振袖</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万円〜8万円</td>
                  <td className="px-4 py-3 text-gray-700">8万円〜50万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">訪問着</td>
                  <td className="px-4 py-3 text-gray-700">2,000円〜1.5万円</td>
                  <td className="px-4 py-3 text-gray-700">1.5万円〜6万円</td>
                  <td className="px-4 py-3 text-gray-700">6万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">10万円〜40万円以上</td>
                </tr>
                <tr className="bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯（袋帯）</td>
                  <td className="px-4 py-3 text-gray-700">500円〜4,000円</td>
                  <td className="px-4 py-3 text-gray-700">4,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">2万円〜15万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 相場は状態・サイズにより変動します。詳しくは<Link href="/articles/kimono-market-price/" className="text-[#6b4c8a] hover:underline">着物買取相場一覧</Link>をご覧ください。
          </p>
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
            <Link href="/articles/takuhai-kaitori/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">宅配買取ガイド</h3><p className="text-xs text-gray-600">自宅で完結する宅配買取の手順。</p></Link>
            <Link href="/articles/line-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">LINE査定ガイド</h3><p className="text-xs text-gray-600">スマホで簡単に査定額がわかる。</p></Link>
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          </div>
        </div>
      </section>

      {/* 着物買取の手順まとめ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            忙しい方のための着物買取3ステップ
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">平日夜：オンラインで相場確認（5分）</h3>
                <p className="text-sm text-gray-700">
                  帰宅後のスキマ時間に、ヒカカクの一括査定やRECLOの写真査定で概算額を確認しましょう。スマホで写真を送るだけなので5分もかかりません。相場を知っておくことで、週末の査定で安く買い叩かれるリスクを防げます。
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">平日夜：証紙・着物の準備（15分）</h3>
                <p className="text-sm text-gray-700">
                  売りたい着物を選び、証紙・証明書・たとう紙をまとめておきます。本人確認書類も用意しておきましょう。この準備が週末の査定をスムーズにします。
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">土日：出張買取 or 持ち込みで売却</h3>
                <p className="text-sm text-gray-700">
                  事前に予約しておいた出張買取を受けるか、買取大吉の店舗に持ち込みましょう。相場を把握済みなので、提示額が妥当か即判断でき、短時間で売却完了。その場で現金を受け取れます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">忙しくても着物は売れる</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            土日の出張買取・24時間対応の宅配買取で、ライフスタイルに合わせた売却が可能です。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
