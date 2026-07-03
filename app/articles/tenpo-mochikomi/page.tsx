import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物買取 店舗持ち込みおすすめ5選｜その場で現金化できる業者",
  description:
    "着物を店舗に持ち込んでその場で現金化したい方向けに、持ち込み買取対応のおすすめ業者5選を比較。予約不要で持ち込める店舗、持ち込み買取の流れ、メリット・デメリット、高く売るコツを解説。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクを比較。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/tenpo-mochikomi/" },
  openGraph: {
    title: "着物買取 店舗持ち込みおすすめ5選｜その場で現金化できる業者",
    description: "着物の持ち込み買取に対応したおすすめ業者5選。予約不要の店舗や持ち込みの流れも解説。",
    url: "https://kimonokaitori-biyori.com/articles/tenpo-mochikomi/",
    siteName: "着物の買取びより", type: "article", locale: "ja_JP",
  },
};

const faqs = [
  { question: "着物の持ち込み買取は予約なしでも大丈夫ですか？", answer: "買取大吉やティファナは予約不要で持ち込み可能です。ただし、混雑状況によっては待ち時間が発生することがあります。確実に対応してもらいたい場合は事前に電話予約しておくことをおすすめします。ウリエルは基本的に予約制ですが、空きがあれば当日対応も可能です。" },
  { question: "持ち込み買取ではどのくらいの時間で査定が終わりますか？", answer: "着物1〜5点程度であれば30分〜1時間程度で査定が完了します。10点以上の場合は1〜2時間かかることもあります。査定後、金額に同意すればその場で現金を受け取れます。急いでいる場合は事前に点数を伝えておくとスムーズです。" },
  { question: "持ち込み買取と出張買取ではどちらが高く売れますか？", answer: "査定基準は同じなので、持ち込みでも出張でも査定額に差はありません。ただし、出張買取の方が自宅でリラックスした状態で判断できるメリットがあります。一方、持ち込み買取は店舗で査定の様子を直接見られるため安心感があります。どちらを選んでも査定額は変わりません。" },
  { question: "持ち込み時に必要な持ち物はありますか？", answer: "本人確認書類（運転免許証・マイナンバーカード・パスポート・健康保険証等）が必須です。古物営業法で義務付けられています。また、着物の証紙・証明書・たとう紙があれば一緒に持参すると査定額がアップする可能性があります。" },
  { question: "持ち込み買取で断られることはありますか？", answer: "基本的に断られることは少ないですが、著しく状態が悪い（カビが全体に広がっている、破れが激しいなど）場合は買取不可になることがあります。また、化学繊維（ポリエステル）の着物は買取対象外の業者もあります。事前に電話で確認しておくと安心です。" },
];

const articleStructuredData = {
  "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取 店舗持ち込みおすすめ5選｜その場で現金化できる業者",
  description: "着物の持ち込み買取に対応したおすすめ業者5選。予約不要の店舗や持ち込みの流れも解説。",
  datePublished: "2026-05-17", dateModified: "2026-07-04",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/tenpo-mochikomi/" },
};
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
  { "@type": "ListItem", position: 3, name: "店舗持ち込み買取ガイド", item: "https://kimonokaitori-biyori.com/articles/tenpo-mochikomi/" },
] };

export default function TenpoMochikomiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "店舗持ち込み買取ガイド" }]} />

      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/tenpo-mochikomi.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">店舗持ち込みガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取 店舗持ち込み</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">おすすめ5選｜その場で現金化できる業者</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物を店舗に持ち込んで、その場で査定・現金化したい方へ。予約不要で持ち込める店舗、持ち込み買取の流れ、メリット・デメリットを詳しく解説。出張買取や宅配買取との違いも比較します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年7月4日</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#f5f0fa", border: "2px solid #6b4c8a" }}>
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4">先に結論：店舗持ち込みの3つの即答</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-1 font-bold">&#10003;</span><span><strong>どこに持ち込める？</strong> 全国に店舗網を持つ大手着物買取業者なら、最寄り店舗への持ち込み査定に対応しています（<a href="#recommended" className="text-[#6b4c8a] underline">対応業者5選はこちら</a>）。事前に公式サイトで最寄り店舗と持ち込み可否の確認を。</span></li>
              <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-1 font-bold">&#10003;</span><span><strong>予約は必要？</strong> 予約なしで入れる店舗もありますが、待ち時間や査定員の在店を考えると<strong>事前予約がおすすめ</strong>です。</span></li>
              <li className="flex items-start gap-2"><span className="text-[#6b4c8a] mt-1 font-bold">&#10003;</span><span><strong>何を持っていく？</strong> 着物本体に加えて<strong>証紙・付属品・本人確認書類</strong>。その場で査定・現金化まで完結できるのが持ち込みの最大のメリットです（<a href="#prepare" className="text-[#6b4c8a] underline">準備チェックリスト</a>）。</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">持ち込み以外の方法（出張・宅配）との違いは<a href="/articles/mochikomi-kaitori/" className="text-[#6b4c8a] underline">持ち込み買取のやり方・流れガイド</a>で解説しています。</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
            <nav><ol className="space-y-2 text-sm">
              <li><a href="#merit" className="text-[#6b4c8a] hover:underline">1. 持ち込み買取のメリット・デメリット</a></li>
              <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">2. 持ち込み対応のおすすめ業者5選</a></li>
              <li><a href="#comparison" className="text-[#6b4c8a] hover:underline">3. 3つの買取方法の比較</a></li>
              <li><a href="#flow" className="text-[#6b4c8a] hover:underline">4. 持ち込み買取の流れ</a></li>
              <li><a href="#prepare" className="text-[#6b4c8a] hover:underline">5. 持ち込み前の準備チェックリスト</a></li>
              <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 持ち込み買取で高く売る5つのコツ</a></li>
              <li><a href="#caution" className="text-[#6b4c8a] hover:underline">7. 持ち込み買取の注意点</a></li>
              <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
            </ol></nav>
          </div>
        </div>
      </section>

      <section id="merit" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />持ち込み買取のメリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-700 mb-3 text-base">メリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・ その場で査定・現金受け取りが可能</li>
                <li>・ 査定の様子を直接見られるため安心</li>
                <li>・ 自宅に人を上げる必要がない</li>
                <li>・ 予約不要の店舗なら思い立った日に売れる</li>
                <li>・ 買い物ついでに気軽に立ち寄れる</li>
                <li>・ クーリングオフの対象外（即時確定）</li>
              </ul>
            </div>
            <div className="bg-white border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-3 text-base">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・ 着物を運ぶ手間がかかる（重い・かさばる）</li>
                <li>・ 近くに対応店舗がないと利用できない</li>
                <li>・ 交通費がかかる場合がある</li>
                <li>・ 大量の着物は持ち運びが困難</li>
                <li>・ 店舗の営業時間内に来店する必要がある</li>
                <li>・ 対面のプレッシャーで即決しがち</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-sm leading-relaxed">
            <p>持ち込み買取の<Link href="/articles/mochikomi-kaitori/" className="text-[#6b4c8a] hover:underline">方法・流れ・店舗/出張/宅配の選び方はこちら</Link>で詳しく解説しています。本ページは、その中でも「店舗に持ち込めるおすすめ業者」を比較する受け皿です。</p>
          </div>
        </div>
      </section>

      <section id="recommended" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />持ち込み対応のおすすめ業者5選</h2>
          <p className="text-xs text-gray-500 mb-6">※ 当サイトはアフィリエイトプログラムに参加しています。詳しくは<Link href="/content-policy/" className="text-[#6b4c8a] hover:underline">コンテンツ制作ポリシー</Link>をご覧ください。</p>

          <div className="space-y-6">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a76c] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">買取大吉</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">全国700店舗以上を展開し、持ち込み買取に最も強い業者です。予約不要で持ち込みでき、混雑状況にもよりますが最短30分で査定・現金受け取りまで完了します。新宿・池袋・銀座・大阪梅田・名古屋栄・博多など主要エリアの駅近くに店舗があり、アクセスも良好。着物専門の査定員が在籍しており、伝統工芸品や作家物も適正価格で査定してくれます。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">予約</p><p className="font-semibold text-green-600">不要</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">全国店舗数</p><p className="font-semibold">700店舗以上</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定時間</p><p className="font-semibold">最短30分</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定料</p><p className="font-semibold text-green-600">無料</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ウリエル</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">着物買取に特化した専門業者。出張買取がメインですが、事前予約で持ち込み査定にも対応しています。着物専門の査定員が丁寧に一点ずつ査定してくれるため、作家物やブランド品の適正価格での買取に定評があります。持ち込みが難しい方には出張買取もおすすめです。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">予約</p><p className="font-semibold">要予約</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">強み</p><p className="font-semibold">着物専門査定</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">特徴</p><p className="font-semibold">出張買取も対応</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">RECLO（リクロ）</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">宅配買取がメインの業者です。店舗での持ち込み買取には対応していませんが、近くに買取店がない方には宅配買取が便利。梱包キット・送料ともに無料で、自宅にいながら買取が完了します。海外販路を持ち高額査定が期待できます。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">持ち込み</p><p className="font-semibold text-gray-400">非対応</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">強み</p><p className="font-semibold">宅配買取・海外販路</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">送料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">特徴</p><p className="font-semibold">事前査定対応</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ティファナ</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">東京・神奈川を中心に複数の店舗を展開するリユース企業。予約なしで着物の持ち込みが可能です。着物だけでなく和装小物・帯・草履もまとめて持ち込めるため、一度で全て片付きます。店舗での査定はその場で現金化可能です。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">予約</p><p className="font-semibold text-green-600">不要</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">エリア</p><p className="font-semibold">東京・神奈川中心</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">査定料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">特徴</p><p className="font-semibold">和装小物も持込OK</p></div>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6b4c8a] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
                <h3 className="text-lg font-bold text-[#6b4c8a]">ヒカカク</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">買取価格の比較サイト。持ち込みに行く前に、ヒカカクで複数業者の概算査定額を確認しておくと、店舗で提示された金額が妥当かどうか判断できます。「持ち込んだけど安かった」という失敗を防ぐためにも、事前の価格比較がおすすめです。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">サービス種別</p><p className="font-semibold">一括査定比較</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">メリット</p><p className="font-semibold">事前に相場把握</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">利用料</p><p className="font-semibold text-green-600">無料</p></div>
                <div className="bg-[#faf8f5] rounded-lg p-3"><p className="text-gray-500 mb-1">特徴</p><p className="font-semibold">複数社を一括比較</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />3つの買取方法の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">比較項目</th>
                <th className="px-4 py-3 text-left font-semibold">持ち込み</th>
                <th className="px-4 py-3 text-left font-semibold">出張</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">宅配</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">即日現金化</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-gray-400">-</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">自宅完結</td><td className="px-4 py-3 text-gray-400">-</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">大量買取</td><td className="px-4 py-3 text-gray-700">困難</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td><td className="px-4 py-3 text-green-600 font-bold">&#10003;</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">手間</td><td className="px-4 py-3 text-gray-700">持ち運び</td><td className="px-4 py-3 text-gray-700">ほぼなし</td><td className="px-4 py-3 text-gray-700">梱包・発送</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">おすすめの人</td><td className="px-4 py-3 text-gray-700">少量を即日売りたい方</td><td className="px-4 py-3 text-gray-700">大量・重い着物がある方</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">地方在住・忙しい方</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="flow" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />持ち込み買取の流れ</h2>
          <div className="space-y-4">
            {["店舗に着物を持参する（予約不要の店舗もあり）", "受付で着物買取を依頼し、本人確認書類を提示", "査定員が着物を一点ずつ査定（30分〜1時間程度）", "査定額に納得すれば契約書にサインし、現金を受け取る", "納得できなければキャンセルも自由（費用なし）"].map((step, i) => (
              <div key={i} className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center font-bold text-lg">{i + 1}</div>
                <p className="text-sm text-gray-700 flex items-center">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prepare" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />持ち込み前の準備チェックリスト</h2>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>本人確認書類（免許証・マイナンバーカード等）を用意</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>証紙・証明書・たとう紙を着物と一緒にまとめる</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>帯・和装小物も売る場合は一緒に用意</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>着物の数が多い場合は大きめのバッグやキャリーケースを用意</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>ヒカカクやRECLOで事前に相場を確認しておく</li>
              <li className="flex gap-2"><span className="text-[#c9a76c] font-bold">□</span>店舗の営業時間・アクセスを確認</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />持ち込み買取で高く売る5つのコツ</h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：証紙と証明書を持参する</h3>
              <p className="text-sm leading-relaxed text-gray-700">証紙があるだけで査定額が数倍になることも。<Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙ガイド</Link>を確認し、忘れずに持参しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：事前にオンライン査定で相場を把握する</h3>
              <p className="text-sm leading-relaxed text-gray-700">ヒカカクやRECLOのオンライン査定で事前に相場を確認。店舗で提示された金額が妥当か判断できます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：着物専門の査定員がいる店舗を選ぶ</h3>
              <p className="text-sm leading-relaxed text-gray-700">総合リサイクルショップより着物専門店の方が適正価格がつきます。買取大吉には着物専門の査定員がいます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：帯・小物もセットで持ち込む</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物と帯のセットで出すと付加価値が認められます。<Link href="/articles/accessories-price/" className="text-[#6b4c8a] hover:underline">和装小物の買取相場</Link>もチェック。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：複数店舗で見積もりを取る</h3>
              <p className="text-sm leading-relaxed text-gray-700">1店舗だけで即決せず、2〜3店舗で見積もりを取りましょう。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>も参考にしてください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 持ち込み買取のエリア別情報 */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            主要エリアの持ち込み買取スポット
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            着物の持ち込み買取ができる主要エリアの店舗情報をまとめました。お近くの店舗を探す際の参考にしてください。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">関東エリア（東京・神奈川・埼玉・千葉）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                買取大吉は東京都内だけでも30店舗以上を展開。新宿・池袋・銀座・渋谷・上野など主要ターミナル駅の近くに店舗があり、仕事帰りや買い物ついでに立ち寄れます。ティファナも東京・神奈川に複数店舗があります。<Link href="/articles/tokyo/" className="text-[#6b4c8a] hover:underline">東京の着物買取ガイド</Link>・<Link href="/articles/yokohama/" className="text-[#6b4c8a] hover:underline">横浜の着物買取ガイド</Link>も参考にしてください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">関西エリア（大阪・京都・兵庫）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大阪は梅田・難波・天王寺エリアに買取大吉の店舗があり、持ち込み買取が便利です。京都は呉服文化の中心地として着物の需要が高く、専門店も充実しています。<Link href="/articles/osaka/" className="text-[#6b4c8a] hover:underline">大阪の着物買取ガイド</Link>・<Link href="/articles/kyoto/" className="text-[#6b4c8a] hover:underline">京都の着物買取ガイド</Link>もご覧ください。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">中部エリア（名古屋・金沢）</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                名古屋は栄・名古屋駅周辺に買取店が集中しています。金沢は加賀友禅の産地として着物の需要が高く、専門性の高い査定が受けられます。<Link href="/articles/nagoya/" className="text-[#6b4c8a] hover:underline">名古屋の着物買取ガイド</Link>・<Link href="/articles/kanazawa/" className="text-[#6b4c8a] hover:underline">金沢の着物買取ガイド</Link>も参考に。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">九州・東北エリア</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                福岡の博多・天神エリアや仙台駅周辺にも買取大吉の店舗があります。地方都市では店舗数が限られるため、持ち込み買取が難しい場合は出張買取や宅配買取の活用がおすすめです。<Link href="/articles/fukuoka/" className="text-[#6b4c8a] hover:underline">福岡の着物買取ガイド</Link>・<Link href="/articles/sendai/" className="text-[#6b4c8a] hover:underline">仙台の着物買取ガイド</Link>もチェック。
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">近くに店舗がない場合：</strong>
              持ち込み買取ができる店舗が近くにない場合は、出張買取を利用しましょう。買取大吉やウリエルは全国各地で出張買取に対応しており、出張費・査定料は無料です。<Link href="/articles/shutcho-kaitori/" className="text-[#6b4c8a] hover:underline">出張買取ガイド</Link>も参考にしてください。また、RECLOの宅配買取なら全国どこからでも送料無料で利用できます。
            </p>
          </div>
        </div>
      </section>

      {/* 持ち込み買取の買取相場 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            持ち込み買取の着物別買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            持ち込み買取でも出張買取でも査定基準は同じです。以下の相場を参考に、提示された金額が妥当かどうか判断しましょう。
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
                  <td className="px-4 py-3 text-gray-700">2,000円〜1万5千円</td>
                  <td className="px-4 py-3 text-gray-700">1万5千円〜6万円</td>
                  <td className="px-4 py-3 text-gray-700">6万円〜30万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬</td>
                  <td className="px-4 py-3 text-gray-700">3,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700">2万円〜10万円</td>
                  <td className="px-4 py-3 text-gray-700">10万円〜40万円以上</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">留袖</td>
                  <td className="px-4 py-3 text-gray-700">1,000円〜8,000円</td>
                  <td className="px-4 py-3 text-gray-700">8,000円〜4万円</td>
                  <td className="px-4 py-3 text-gray-700">4万円〜15万円以上</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯（袋帯）</td>
                  <td className="px-4 py-3 text-gray-700">500円〜4,000円</td>
                  <td className="px-4 py-3 text-gray-700">4,000円〜2万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">2万円〜15万円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 相場は状態・サイズ・市場動向により変動します。最新の査定額は無料査定でご確認ください。詳しくは<Link href="/articles/kimono-market-price/" className="text-[#6b4c8a] hover:underline">着物買取相場一覧</Link>をご覧ください。
          </p>
        </div>
      </section>

      <section id="caution" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />持ち込み買取の注意点</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">持ち込み買取にはクーリングオフが適用されない</h3>
              <p className="text-sm leading-relaxed text-gray-700">持ち込み買取（店舗買取）は消費者が自らの意思で店舗に赴くため、特定商取引法のクーリングオフ制度の対象外です。一度売却したら原則として取り消しはできません。慎重に判断しましょう。</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">対面のプレッシャーに注意</h3>
              <p className="text-sm leading-relaxed text-gray-700">店舗で対面査定を受けると、断りにくい雰囲気になることがあります。「他の店舗でも見積もりを取りたい」と正直に伝えれば問題ありません。信頼できる業者は快く応じてくれます。</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-700 mb-2 text-base">総合リサイクルショップでの安売りに注意</h3>
              <p className="text-sm leading-relaxed text-gray-700">大手総合リサイクルショップでは着物の専門知識がない場合が多く、一律で低い価格をつけられることがあります。着物は必ず着物専門の査定員がいる業者に持ち込みましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 持ち込み vs 出張 vs 宅配 シーン別比較 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            シーン別・最適な買取方法の選び方
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            着物の量や状況によって最適な買取方法は異なります。以下のシーン別ガイドを参考に、あなたに合った方法を選びましょう。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                着物1〜3枚を手早く売りたい → 持ち込み買取
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                少量であれば持ち込み買取が最もスピーディーです。買取大吉やティファナなら予約不要で、最短30分で現金化できます。お出かけのついでに立ち寄れる手軽さが魅力です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                着物10枚以上をまとめて売りたい → 出張買取
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大量の着物を持ち運ぶのは大変です。出張買取なら自宅で一括査定してもらえるため、体力的な負担がありません。ウリエルや買取大吉は点数制限なく対応してくれます。<Link href="/articles/bulk-selling/" className="text-[#6b4c8a] hover:underline">大量売却ガイド</Link>もチェック。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                近くに買取店がない → 宅配買取
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                地方にお住まいで近くに着物買取店がない場合は、RECLOの宅配買取がおすすめ。梱包キット・送料・査定料すべて無料で全国対応。<Link href="/articles/takuhai-kaitori/" className="text-[#6b4c8a] hover:underline">宅配買取ガイド</Link>で詳しく解説しています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                高額着物の査定を慎重に行いたい → 複数社で比較
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                作家物やブランド着物は業者によって査定額に大きな差が出ます。持ち込み1社 + 出張1社 + オンライン査定で3社以上の見積もりを取ることをおすすめします。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>も参考にしてください。
              </p>
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
            <Link href="/articles/mochikomi-kaitori/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">持ち込み買取の方法・流れ</h3><p className="text-xs text-gray-600">持ち込み買取のやり方・流れと店舗/出張/宅配の選び方。</p></Link>
            <Link href="/articles/shutcho-kaitori/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">出張買取ガイド</h3><p className="text-xs text-gray-600">出張買取のメリットと利用の流れ。</p></Link>
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          </div>
        </div>
      </section>

      {/* 持ち込み買取の体験談的コンテンツ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            持ち込み買取で損しないためのまとめ
          </h2>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                持ち込み買取は「その場で現金化できる」という最大のメリットがありますが、いくつか注意点もあります。最後に、損しないためのポイントをまとめます。
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-[#c9a76c] font-bold flex-shrink-0">1.</span>
                  <span><strong>必ず複数店舗で見積もりを取る：</strong>1店舗で即決せず、2〜3店舗で比較。ヒカカクの事前オンライン査定も活用しましょう。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a76c] font-bold flex-shrink-0">2.</span>
                  <span><strong>証紙・証明書は絶対に持参：</strong>証紙の有無で査定額が数倍変わることもあります。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a76c] font-bold flex-shrink-0">3.</span>
                  <span><strong>着物専門の査定員がいる店舗を選ぶ：</strong>総合リサイクルショップでは適正価格がつきにくいです。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a76c] font-bold flex-shrink-0">4.</span>
                  <span><strong>クーリングオフが適用されないことを理解する：</strong>持ち込み買取は自分の意思で店舗に行くため、クーリングオフの対象外です。慎重に判断しましょう。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a76c] font-bold flex-shrink-0">5.</span>
                  <span><strong>大量の着物は出張買取を検討：</strong>着物10枚以上の場合は持ち運びが大変なので、出張買取の方が効率的です。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">着物を持ち込んで、その場で現金化</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">まずは無料査定で金額を確認。納得できなければキャンセルも自由です。</p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>

      <SoubaNote />
    </>
  );
}
