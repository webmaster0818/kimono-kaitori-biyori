import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "男性着物の買取相場｜紋付袴・着流し・羽織は売れる？",
  description: "男性着物の買取相場を種類別に徹底解説。紋付袴・羽織・着流し・角帯の買取価格、高く売れる条件、おすすめ買取業者をまとめました。男性着物は需要が少ないものの、良質な紬や紋付は高額査定も。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/mens-kimono/" },
  openGraph: { title: "男性着物の買取相場｜紋付袴・着流し・羽織は売れる？", description: "男性着物の買取相場を種類別に解説。", url: "https://kimonokaitori-biyori.com/articles/mens-kimono/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "男性着物は女性着物より買取価格が安いですか？", answer: "一般的に男性着物は女性着物に比べて中古市場の需要が少ないため、買取価格は低めの傾向があります。ただし、良質な紬（大島紬・結城紬など）やブランド品の紋付袴は、女性着物と同等以上の高額査定がつくこともあります。特に正絹で状態が良いものは十分に買取価値があります。" },
  { question: "父や祖父の着物を売ることはできますか？", answer: "はい、お父様やお祖父様の着物でも買取対象になります。遺品整理で出てきた男性着物をまとめて売りたい場合は、買取大吉やウリエルの出張買取が便利です。紋付袴、羽織、角帯、袴などをまとめて査定してもらえます。" },
  { question: "男性着物の袴だけでも売れますか？", answer: "袴だけでも買取対象になりますが、単品では1,000円〜5,000円程度の査定額が一般的です。紋付き羽織とセットで出すとプラス評価される傾向があります。仙台平（せんだいひら）の袴は高級品として高額査定が期待できます。" },
  { question: "男性着物のサイズは買取に影響しますか？", answer: "はい、サイズは買取価格に影響します。男性着物も大きめのサイズ（身丈145cm以上、裄丈72cm以上）の方が需要が高く、高い査定額がつきます。小さいサイズは需要が限られるため、やや減額される傾向があります。" },
  { question: "ウールやポリエステルの男性着物は買い取ってもらえますか？", answer: "ウールの男性着物は数百円〜2,000円程度で買取可能な業者もありますが、ポリエステルの場合は値段がつかないことが多いです。正絹の着物が最も高い買取価格がつきます。素材がわからない場合は、そのまま査定に出してプロに判断してもらいましょう。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "男性着物の買取相場｜紋付袴・着流し・羽織は売れる？", description: "男性着物の買取相場を種類別に解説。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/mens-kimono/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "男性着物の買取", item: "https://kimonokaitori-biyori.com/articles/mens-kimono/" } ] };

export default function MensKimonoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "男性着物の買取" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">男性着物の買取相場</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">紋付袴・着流し・羽織は売れる？</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">タンスに眠っている父や祖父の着物、自分で購入したけれど着なくなった紋付袴や羽織。男性着物は女性着物に比べて需要が少ないものの、良質な品であれば十分に買取価値があります。種類別の相場を詳しく解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 男性着物の買取事情</a></li>
          <li><a href="#types" className="text-[#6b4c8a] hover:underline">2. 男性着物の種類と特徴</a></li>
          <li><a href="#price" className="text-[#6b4c8a] hover:underline">3. 種類別の買取相場</a></li>
          <li><a href="#high-value" className="text-[#6b4c8a] hover:underline">4. 高く売れる男性着物の条件</a></li>
          <li><a href="#tips" className="text-[#6b4c8a] hover:underline">5. 男性着物を高く売る5つのコツ</a></li>
          <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">6. おすすめ買取業者</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="overview" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />男性着物の買取事情</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>男性着物は女性着物に比べて<strong>中古市場の需要が少ない</strong>ため、全体的に買取価格は低めの傾向があります。これは、男性が着物を着る機会が女性に比べて少なく、中古着物を購入する層も限られているためです。</p>
          <p>しかし、近年は男性の着物人気が少しずつ高まっており、特に<strong>良質な紬（大島紬・結城紬）</strong>や<strong>正絹の紋付袴</strong>は安定した需要があります。また、和装を趣味とする若い男性が増えていることから、カジュアルな着物の需要も増加傾向にあります。</p>
          <p>遺品整理で大量の男性着物が出てきた場合は、まとめて買取業者に査定を依頼するのが効率的です。</p>
        </div>
      </div></section>

      <section id="types" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />男性着物の種類と特徴</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">紋付袴（もんつきはかま）</h3><p className="text-sm text-gray-700">男性の第一礼装。五つ紋の黒紋付に袴を合わせたスタイルで、結婚式や成人式、葬儀で着用されます。最も格が高く、買取でも需要があります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">羽織（はおり）</h3><p className="text-sm text-gray-700">着物の上に着る上着。紋付きの羽織はフォーマルに、紬の羽織はカジュアルに使われます。着物とセットで出すと評価がアップします。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">着流し（きながし）</h3><p className="text-sm text-gray-700">袴を着けず着物だけで着る普段着スタイル。紬や御召で仕立てられたものが多く、近年カジュアル和装として人気が高まっています。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">袴（はかま）</h3><p className="text-sm text-gray-700">腰から下に着ける和装。仙台平（せんだいひら）の袴は最高級品として高い価値を持ちます。紋付きとセットで出すのがおすすめ。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">角帯（かくおび）</h3><p className="text-sm text-gray-700">男性着物用の帯。博多織の角帯は人気が高く、単品でも1,000円〜5,000円程度の買取価格がつくことがあります。</p></div>
        </div>
      </div></section>

      <section id="price" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />種類別の買取相場</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#6b4c8a] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">種類</th><th className="px-4 py-3 text-left font-semibold">一般品</th><th className="px-4 py-3 text-left font-semibold">ブランド品</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">作家物</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">紋付袴セット</td><td className="px-4 py-3">3,000円〜2万円</td><td className="px-4 py-3">2万円〜5万円</td><td className="px-4 py-3">5万円〜15万円以上</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">紬（大島紬・結城紬）</td><td className="px-4 py-3">5,000円〜3万円</td><td className="px-4 py-3">3万円〜10万円</td><td className="px-4 py-3">10万円〜30万円以上</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">御召（おめし）</td><td className="px-4 py-3">2,000円〜1万円</td><td className="px-4 py-3">1万円〜5万円</td><td className="px-4 py-3">5万円〜15万円</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">羽織</td><td className="px-4 py-3">500円〜5,000円</td><td className="px-4 py-3">5,000円〜2万円</td><td className="px-4 py-3">2万円〜8万円</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">袴（仙台平）</td><td className="px-4 py-3">1,000円〜5,000円</td><td className="px-4 py-3">5,000円〜3万円</td><td className="px-4 py-3">3万円〜10万円以上</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">角帯（博多織）</td><td className="px-4 py-3">500円〜2,000円</td><td className="px-4 py-3">2,000円〜1万円</td><td className="px-4 py-3">1万円〜5万円</td></tr>
            <tr className="bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">一般的な正絹着物</td><td className="px-4 py-3">1,000円〜5,000円</td><td className="px-4 py-3">5,000円〜2万円</td><td className="px-4 py-3 rounded-br-lg">2万円〜10万円</td></tr>
          </tbody></table>
        </div>
      </div></section>

      <section id="high-value" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />高く売れる男性着物の条件</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">正絹であること</h3><p className="text-sm text-gray-700">男性着物も素材が最重要。正絹であれば基本的に買取対象。ウールやポリエステルは低額になりがちです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">大島紬・結城紬などの産地物</h3><p className="text-sm text-gray-700">男性着物でも産地物の紬は高い評価を受けます。証紙があればさらに高額査定が期待できます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">大きめのサイズ</h3><p className="text-sm text-gray-700">身丈145cm以上、裄丈72cm以上の大きめサイズは需要が高く、高い査定がつきます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">セット品（紋付袴一式）</h3><p className="text-sm text-gray-700">紋付き着物・袴・羽織のセットはまとめて出すと高評価。角帯や羽織紐も一緒に出しましょう。</p></div>
        </div>
      </div></section>

      <section id="tips" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />男性着物を高く売る5つのコツ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：着物専門の業者を選ぶ</h3><p className="text-sm text-gray-700">男性着物の価値を正しく評価できるのは専門業者だけ。買取大吉やウリエルなら男性着物の査定にも精通しています。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：セットでまとめて出す</h3><p className="text-sm text-gray-700">着物・袴・羽織・角帯・羽織紐をセットで出すと、コーディネートとしての価値が加算されます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：証紙・証明書を必ず添える</h3><p className="text-sm text-gray-700">大島紬・結城紬の証紙があれば査定額が大幅にアップします。購入時のレシートや保証書も有効です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：複数業者で見積もり比較</h3><p className="text-sm text-gray-700">男性着物の評価は業者によって差が大きいです。ヒカカクの一括比較で3社以上に査定を依頼しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：状態が良いうちに早めに売る</h3><p className="text-sm text-gray-700">保管している間にシミやカビが発生するリスクがあります。着ない着物は早めに売却するのが賢明です。</p></div>
        </div>
      </div></section>

      <section id="recommended" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめ買取業者</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3><p className="text-sm text-gray-700">男性着物も積極買取。紋付袴や紬の査定に精通した専門スタッフが対応。全国700店舗で持ち込みも便利。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3><p className="text-sm text-gray-700">出張買取で遺品整理の男性着物もまとめて査定。大量の着物も一括対応。着物専門査定員が丁寧に対応。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO</h3><p className="text-sm text-gray-700">宅配買取で全国対応。海外販路があるため、男性着物も国内より高い価格で買い取れるケースあり。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ティファナ</h3><p className="text-sm text-gray-700">持ち込みで即日査定OK。男性着物と一緒に和装小物もまとめて買取可能。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ヒカカク</h3><p className="text-sm text-gray-700">一括比較で複数業者の査定額を比較。男性着物は業者間の価格差が大きいため特に有効。</p></div>
        </div>
      </div></section>

      <section id="faq" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
        <div className="space-y-3">{faqs.map((faq, index) => (<details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group"><summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between"><span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span><span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span></summary><div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div></details>))}</div>
      </div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/montsuki/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">紋付き着物の買取相場</h3><p className="text-xs text-gray-600">五つ紋・三つ紋の価値の違い。</p></Link>
          <Link href="/articles/estate-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">遺品整理の着物買取</h3><p className="text-xs text-gray-600">遺品の着物をまとめて売る方法。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">男性着物も価値あり。まずは無料査定へ</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">紋付袴や紬など、良質な男性着物は十分に買取価値があります。まずは無料査定で確認しましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
