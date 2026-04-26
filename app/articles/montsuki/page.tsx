import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "紋付き着物の買取相場｜五つ紋・三つ紋・一つ紋の価値の違い",
  description: "紋付き着物の買取相場を紋の数別に解説。五つ紋・三つ紋・一つ紋の格と買取価格の違い、家紋入りでも売れるのか、紋の種類（染め抜き・縫い紋・貼り紋）による評価の違いをまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/montsuki/" },
  openGraph: { title: "紋付き着物の買取相場｜五つ紋・三つ紋・一つ紋の価値の違い", description: "紋付き着物の買取相場を紋の数別に解説。", url: "https://kimonokaitori-biyori.com/articles/montsuki/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "家紋が入った着物でも売れますか？", answer: "はい、家紋が入った着物でも買取対象になります。ただし、特定の家紋が入っている着物は着用できる人が限られるため、紋なしの着物に比べて買取価格はやや下がる傾向があります。一方で、紋を入れ替える「紋替え」が可能な着物であれば、それほど大きな減額にはなりません。" },
  { question: "五つ紋の黒留袖は高く売れますか？", answer: "五つ紋の黒留袖は最も格の高い正礼装ですが、買取市場では需要が限定的です。黒留袖は結婚式で親族の女性が着るものであり、着用機会が少ないためです。一般品で1,000円〜1万円、ブランド品で1万円〜5万円、作家物で5万円〜20万円以上が目安です。" },
  { question: "紋の種類（染め抜き・縫い紋）で買取価格は変わりますか？", answer: "はい、紋の種類によって着物の格が変わるため、買取価格にも影響します。最も格の高い「染め抜き紋（日向紋）」が入った着物は高い評価を受けます。「縫い紋」は染め抜きよりやや格が下がりますが、技術的な価値が認められる場合もあります。「貼り紋」は最も格が低く、買取価格への影響は限定的です。" },
  { question: "紋を消してから売った方が高く売れますか？", answer: "一般的には紋を消す必要はありません。紋消しの費用（5,000円〜1万円程度）をかけても、それ以上に買取価格がアップするケースは稀です。また、紋消しの際に生地が傷むリスクもあります。そのままの状態で査定に出すのがベストです。" },
  { question: "男性の紋付袴は買い取ってもらえますか？", answer: "はい、男性の紋付袴も買取対象です。特に五つ紋の黒紋付き羽織袴は男性の第一礼装として需要があります。買取相場は一般品で3,000円〜2万円、ブランド品で2万円〜5万円程度です。袴とセットで出すとプラス評価されることが多いです。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "紋付き着物の買取相場｜五つ紋・三つ紋・一つ紋の価値の違い", description: "紋付き着物の買取相場を紋の数別に解説。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/montsuki/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "紋付き着物の買取", item: "https://kimonokaitori-biyori.com/articles/montsuki/" } ] };

export default function MontsukiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "紋付き着物の買取" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">紋付き着物の買取相場</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">五つ紋・三つ紋・一つ紋の価値の違い</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">紋付き着物は格の高い正装として知られていますが、買取市場ではどのような評価を受けるのでしょうか。紋の数や種類による格の違い、家紋入り着物の売り方、買取相場を詳しく解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#basics" className="text-[#6b4c8a] hover:underline">1. 紋付き着物の基礎知識</a></li>
          <li><a href="#mon-count" className="text-[#6b4c8a] hover:underline">2. 紋の数と格の違い</a></li>
          <li><a href="#mon-type" className="text-[#6b4c8a] hover:underline">3. 紋の種類と買取評価</a></li>
          <li><a href="#price" className="text-[#6b4c8a] hover:underline">4. 紋付き着物の買取相場</a></li>
          <li><a href="#kamon" className="text-[#6b4c8a] hover:underline">5. 家紋入りでも売れるのか</a></li>
          <li><a href="#tips" className="text-[#6b4c8a] hover:underline">6. 紋付き着物を高く売るコツ</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="basics" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋付き着物の基礎知識</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>紋付き着物とは、<strong>家紋が入れられた着物</strong>のことです。紋は着物の格を示す重要な要素であり、紋の数が多いほど格が高くなります。結婚式、葬儀、茶道の席など、フォーマルな場面で着用されます。</p>
          <p>紋付き着物には黒留袖、色留袖、訪問着、色無地、喪服など様々な種類があります。また、男性用の紋付き羽織袴も代表的な紋付き着物です。</p>
        </div>
      </div></section>

      <section id="mon-count" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋の数と格の違い</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#6b4c8a] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">紋の数</th><th className="px-4 py-3 text-left font-semibold">格</th><th className="px-4 py-3 text-left font-semibold">紋の位置</th><th className="px-4 py-3 text-left font-semibold">着用場面</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">代表的な着物</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-bold text-[#c9a76c]">五つ紋</td><td className="px-4 py-3 font-bold">最高格（正礼装）</td><td className="px-4 py-3 text-gray-700">背中・両袖後・両胸</td><td className="px-4 py-3 text-gray-700">結婚式・公式行事</td><td className="px-4 py-3 text-gray-700">黒留袖・黒紋付</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-bold text-[#6b4c8a]">三つ紋</td><td className="px-4 py-3 font-bold">準礼装</td><td className="px-4 py-3 text-gray-700">背中・両袖後</td><td className="px-4 py-3 text-gray-700">入学式・お茶会</td><td className="px-4 py-3 text-gray-700">色留袖・色無地</td></tr>
            <tr className="bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-bold text-gray-500 rounded-bl-lg">一つ紋</td><td className="px-4 py-3 font-bold">略礼装</td><td className="px-4 py-3 text-gray-700">背中のみ</td><td className="px-4 py-3 text-gray-700">パーティー・食事会</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">訪問着・色無地</td></tr>
          </tbody></table>
        </div>
      </div></section>

      <section id="mon-type" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋の種類と買取評価</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">染め抜き紋（日向紋）- 最高格</h3><p className="text-sm text-gray-700">白く染め抜かれた最も格の高い紋。正礼装に使用されます。技術的に高度であり、買取でも最も高い評価を受けます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">中陰紋 - 準礼装</h3><p className="text-sm text-gray-700">染め抜きと縫い紋の中間的な表現。日向紋より柔らかい印象で、準礼装に使われます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">縫い紋 - 略礼装</h3><p className="text-sm text-gray-700">糸で縫い取った紋。カジュアルな場面でも使え、買取市場では染め抜きよりやや低い評価です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">貼り紋 - 簡易</h3><p className="text-sm text-gray-700">シールのように貼り付けるタイプの紋。着物の格を簡易的に上げるために使われますが、買取価格への影響は限定的です。</p></div>
        </div>
      </div></section>

      <section id="price" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋付き着物の買取相場</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#c9a76c] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">種類</th><th className="px-4 py-3 text-left font-semibold">一般品</th><th className="px-4 py-3 text-left font-semibold">ブランド品</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">作家物</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">黒留袖（五つ紋）</td><td className="px-4 py-3">1,000円〜1万円</td><td className="px-4 py-3">1万円〜5万円</td><td className="px-4 py-3">5万円〜20万円以上</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">色留袖（三つ紋/五つ紋）</td><td className="px-4 py-3">2,000円〜1万5,000円</td><td className="px-4 py-3">1万5,000円〜8万円</td><td className="px-4 py-3">8万円〜30万円以上</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">色無地（一つ紋/三つ紋）</td><td className="px-4 py-3">1,000円〜5,000円</td><td className="px-4 py-3">5,000円〜3万円</td><td className="px-4 py-3">3万円〜10万円</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">男性紋付羽織袴</td><td className="px-4 py-3">3,000円〜2万円</td><td className="px-4 py-3">2万円〜5万円</td><td className="px-4 py-3">5万円〜15万円以上</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">喪服（五つ紋）</td><td className="px-4 py-3">500円〜3,000円</td><td className="px-4 py-3">3,000円〜1万円</td><td className="px-4 py-3 rounded-br-lg">1万円〜5万円</td></tr>
          </tbody></table>
        </div>
      </div></section>

      <section id="kamon" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />家紋入りでも売れるのか</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>家紋入りの着物は<strong>買取対象です</strong>。ただし、家紋は各家固有のものであるため、他の方がそのまま着用するのは難しいとされています。このため、紋なしの着物と比べてやや買取価格が下がる傾向があります。</p>
          <p>しかし、業者側で「紋替え」（既存の紋を消して別の紋を入れる）や「紋消し」を行うことで再販売が可能なため、<strong>家紋入りだからといって売れないわけではありません</strong>。特に高品質な正絹の着物や作家物であれば、家紋があっても高額査定がつくケースは多いです。</p>
        </div>
        <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">ポイント：</strong>家紋入りの着物は紋替え・紋消しの費用（5,000円〜1万円程度）を考慮して査定されることがあるため、紋なしに比べてその分だけ減額される傾向です。自分で紋消しをする必要はなく、そのまま査定に出しましょう。</p>
        </div>
      </div></section>

      <section id="tips" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />紋付き着物を高く売るコツ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：着物専門の業者を選ぶ</h3><p className="text-sm text-gray-700">紋付き着物の格や紋の種類を正しく評価できるのは着物専門の査定員です。買取大吉やウリエルを選びましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：紋消しは不要</h3><p className="text-sm text-gray-700">紋消しの費用をかけても、査定額のアップにはつながりにくいです。そのまま査定に出しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：証紙・証明書を添える</h3><p className="text-sm text-gray-700">作家物やブランド品の証紙があれば、紋の有無に関わらず高額査定が期待できます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：帯や小物とセットで出す</h3><p className="text-sm text-gray-700">留袖と袋帯のセット、紋付袴のフルセットなど、まとめて出すと付加価値がつきます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：複数業者で見積もり比較</h3><p className="text-sm text-gray-700">紋付き着物の評価は業者によって異なります。ヒカカクの一括比較で最高額を見つけましょう。</p></div>
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
          <Link href="/articles/houmongi-tomesode/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">訪問着・留袖の買取相場</h3><p className="text-xs text-gray-600">留袖・訪問着の相場を解説。</p></Link>
          <Link href="/articles/mens-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">男性着物の買取相場</h3><p className="text-xs text-gray-600">紋付袴・羽織の相場を解説。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">家紋入りでも大丈夫。まずは無料査定へ</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">紋付き着物は紋消し不要でそのまま査定OK。プロの査定員が適正価格をつけてくれます。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
