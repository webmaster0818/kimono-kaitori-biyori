import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物のクリーニングは売る前にすべき？査定額への影響を解説",
  description: "着物を売る前にクリーニングすべきかどうかを徹底解説。クリーニング費用と査定額アップの関係、クリーニングが逆効果になるケース、売る前にすべき簡単なお手入れ方法を紹介します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/cleaning-before-selling/" },
  openGraph: { title: "着物のクリーニングは売る前にすべき？査定額への影響を解説", description: "着物を売る前のクリーニングは必要？費用と査定額の関係を解説。", url: "https://kimonokaitori-biyori.com/articles/cleaning-before-selling/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物を売る前にクリーニングに出すべきですか？", answer: "一般的には、売る前のクリーニングは不要です。クリーニング費用（5,000円〜1万円以上）に見合うだけ査定額がアップするケースは稀で、結果的に手取りが減ってしまうことが多いです。買取業者は自社でクリーニングや染み抜きを行う体制を持っているため、そのままの状態で査定に出すのがベストです。" },
  { question: "シミがある着物はクリーニングしてから売った方がいいですか？", answer: "シミがある場合でも、基本的にはクリーニングせずそのまま査定に出すことをおすすめします。シミの種類や程度によっては、専門業者のクリーニングでも完全に落ちないことがあり、その場合はクリーニング費用が無駄になります。買取業者にそのまま見せて、査定額を確認した方が合理的です。" },
  { question: "クリーニングに出すと着物が傷むことはありますか？", answer: "はい、着物のクリーニングはリスクがゼロではありません。特に古い着物や繊細な染めの着物は、クリーニングによって色落ち・色あせ・縮みが発生する可能性があります。また、金糸銀糸を使った帯や着物は、クリーニングで光沢が失われることもあります。売却前のクリーニングはリスクに見合わないことが多いです。" },
  { question: "売る前にできる簡単なお手入れはありますか？", answer: "はい、いくつかの簡単なお手入れで着物の見た目を改善できます。陰干しで風を通す、柔らかいブラシでホコリを払う、たとう紙を新しいものに替えるなどです。これらの作業は着物を傷める心配がなく、査定時の第一印象が良くなります。" },
  { question: "カビが生えた着物はクリーニングしてから売るべきですか？", answer: "カビが生えた着物のクリーニングは費用が高額（1万円〜3万円以上）になることが多く、完全にカビを除去できない場合もあります。まずはそのまま買取業者に査定を依頼し、買取可能か確認しましょう。買取大吉やウリエルなどの大手業者であれば、カビのある着物でも買い取ってくれるケースがあります。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物のクリーニングは売る前にすべき？査定額への影響を解説", description: "着物を売る前のクリーニングは必要？費用と査定額の関係を解説。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/cleaning-before-selling/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "クリーニングと査定額", item: "https://kimonokaitori-biyori.com/articles/cleaning-before-selling/" } ] };

export default function CleaningBeforeSellingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "クリーニングと査定額" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物のクリーニングは売る前にすべき？</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">査定額への影響を解説</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物を売る前にクリーニングに出すべきか悩む方は多いです。結論から言うと、ほとんどのケースでクリーニングは不要です。その理由と、売る前にすべき簡単なお手入れ方法を解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#conclusion" className="text-[#6b4c8a] hover:underline">1. 結論：クリーニングは基本不要</a></li>
          <li><a href="#cost" className="text-[#6b4c8a] hover:underline">2. クリーニング費用と査定額アップの比較</a></li>
          <li><a href="#risk" className="text-[#6b4c8a] hover:underline">3. クリーニングが逆効果になるケース</a></li>
          <li><a href="#care" className="text-[#6b4c8a] hover:underline">4. 売る前にすべき簡単なお手入れ</a></li>
          <li><a href="#stain" className="text-[#6b4c8a] hover:underline">5. シミ・汚れがある場合の対処法</a></li>
          <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">6. おすすめ買取業者</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="conclusion" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />結論：クリーニングは基本不要</h2>
        <div className="bg-white border-2 border-[#c9a76c] rounded-xl p-6 mb-6">
          <p className="text-base font-bold text-[#6b4c8a] mb-3">着物を売る前のクリーニングは、ほとんどのケースで不要です。</p>
          <p className="text-sm leading-relaxed text-gray-700">その理由は3つあります。1つ目は、クリーニング費用に見合うだけ査定額がアップするケースが稀であること。2つ目は、買取業者は自社でクリーニングを行う体制を持っていること。3つ目は、クリーニングによる着物の損傷リスクがあること。そのままの状態で査定に出し、プロに任せましょう。</p>
        </div>
      </div></section>

      <section id="cost" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />クリーニング費用と査定額アップの比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#6b4c8a] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">クリーニングの種類</th><th className="px-4 py-3 text-left font-semibold">費用の目安</th><th className="px-4 py-3 text-left font-semibold">査定額アップの目安</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">費用対効果</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">丸洗い（全体洗い）</td><td className="px-4 py-3">5,000円〜8,000円</td><td className="px-4 py-3">0円〜2,000円程度</td><td className="px-4 py-3 text-red-500 font-bold">赤字の可能性大</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">シミ抜き（部分）</td><td className="px-4 py-3">3,000円〜1万円</td><td className="px-4 py-3">1,000円〜5,000円程度</td><td className="px-4 py-3 text-red-500 font-bold">赤字の可能性あり</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">カビ除去</td><td className="px-4 py-3">1万円〜3万円</td><td className="px-4 py-3">3,000円〜1万円程度</td><td className="px-4 py-3 text-red-500 font-bold">大幅赤字</td></tr>
            <tr className="bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">洗い張り（解き洗い）</td><td className="px-4 py-3">2万円〜5万円</td><td className="px-4 py-3">5,000円〜2万円程度</td><td className="px-4 py-3 text-red-500 font-bold rounded-br-lg">大幅赤字</td></tr>
          </tbody></table>
        </div>
        <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">結論：</strong>ほぼすべてのケースで、クリーニング費用が査定額のアップ分を上回ります。つまり、クリーニングすることで手取りが減ってしまいます。そのままの状態で査定に出す方が賢明です。</p>
        </div>
      </div></section>

      <section id="risk" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />クリーニングが逆効果になるケース</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">色落ち・色あせ</h3><p className="text-sm leading-relaxed text-gray-700">古い着物や手染めの着物は、クリーニングの溶剤によって色が落ちたり変色したりするリスクがあります。特に友禅染めや絞り染めの着物は要注意です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">生地の損傷</h3><p className="text-sm leading-relaxed text-gray-700">古い正絹は繊維が劣化しているため、クリーニングの過程で生地が破れたり、糸がほつれたりすることがあります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">金糸銀糸の変色</h3><p className="text-sm leading-relaxed text-gray-700">金糸や銀糸が使われた帯や着物は、クリーニングによって金属部分が酸化・変色し、光沢が失われることがあります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">風合いの変化</h3><p className="text-sm leading-relaxed text-gray-700">正絹特有のしっとりとした風合いが、クリーニングによって硬くなったり、カサカサになったりすることがあります。</p></div>
        </div>
      </div></section>

      <section id="care" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />売る前にすべき簡単なお手入れ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 陰干しで風を通す</h3><p className="text-sm leading-relaxed text-gray-700">査定前に着物を風通しの良い日陰で1〜2時間干しましょう。保管臭やタンスの匂いを軽減できます。直射日光は色あせの原因になるので避けてください。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. ホコリを払う</h3><p className="text-sm leading-relaxed text-gray-700">柔らかい洋服ブラシで、着物の表面のホコリをやさしく払いましょう。力を入れすぎると生地を傷めるので注意。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. たとう紙を新しくする</h3><p className="text-sm leading-relaxed text-gray-700">古くなったたとう紙は交換しましょう。新しいたとう紙に包まれた着物は見た目の印象が良くなり、査定員への第一印象もアップします。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. 証紙・証明書を探しておく</h3><p className="text-sm leading-relaxed text-gray-700">証紙や購入証明書があれば必ず一緒に出しましょう。クリーニングよりも、証紙を添えることの方が査定額アップに直結します。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. 帯・小物をまとめておく</h3><p className="text-sm leading-relaxed text-gray-700">着物と一緒に帯や和装小物もまとめて査定に出すと、コーディネート価値が加算されて買取額がアップする可能性があります。</p></div>
        </div>
      </div></section>

      <section id="stain" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />シミ・汚れがある場合の対処法</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>シミや汚れがある着物でも、<strong>そのまま査定に出すのがベスト</strong>です。買取大吉やウリエルなどの大手業者はシミのある着物でも買い取ってくれます。</p>
          <p>自分でシミ抜きを試みると、かえって範囲が広がったり、生地を傷めたりするリスクがあります。特に以下の行為は避けてください。</p>
        </div>
        <div className="mt-4 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <h3 className="font-bold text-red-600 mb-3 text-base">やってはいけないこと</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span>水で濡らしてこする（シミが広がる・輪ジミの原因）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span>市販の衣類用シミ抜きを使う（化学反応で変色のリスク）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span>アイロンで無理にシワを伸ばす（テカリ・焦げの原因）</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 font-bold">&#10007;</span><span>洗濯機で洗う（縮み・色落ちの原因）</span></li>
          </ul>
        </div>
      </div></section>

      <section id="recommended" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめ買取業者</h2>
        <p className="text-sm md:text-base mb-6 leading-relaxed">シミや汚れのある着物でも買い取ってくれるおすすめ業者をご紹介します。クリーニング不要でそのまま査定OK。</p>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3><p className="text-sm text-gray-700">シミ・汚れのある着物でも買取実績多数。自社クリーニング体制あり。全国700店舗で持ち込み・出張対応。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3><p className="text-sm text-gray-700">状態に関わらず丁寧に査定。出張買取で自宅から楽々売却。着物専門の査定員対応。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO</h3><p className="text-sm text-gray-700">宅配買取で全国対応。送料無料。ブランド着物・作家物は特に高額査定。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ティファナ</h3><p className="text-sm text-gray-700">持ち込み買取で即日査定。まとめ売り対応。和装小物も一緒にOK。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ヒカカク</h3><p className="text-sm text-gray-700">一括比較で複数業者の査定額を比較。シミ着物でも最高額の業者が見つかる。</p></div>
        </div>
      </div></section>

      <section id="faq" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
        <div className="space-y-3">{faqs.map((faq, index) => (
          <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group"><summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between"><span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span><span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span></summary><div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div></details>
        ))}</div>
      </div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/storage-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の保管方法ガイド</h3><p className="text-xs text-gray-600">正しい保管で価値を守る方法。</p></Link>
          <Link href="/articles/old-stained-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">シミ・汚れのある着物の買取</h3><p className="text-xs text-gray-600">状態が悪い着物でも売れる？</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">クリーニング不要。そのまま無料査定へ</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">クリーニングにお金をかけるより、そのまま査定に出す方がお得。プロがそのままの状態で適正価格をつけてくれます。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
