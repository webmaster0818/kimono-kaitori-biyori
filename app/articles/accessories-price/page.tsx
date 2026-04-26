import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "和装小物（帯締め・帯揚げ・草履）の買取相場まとめ",
  description: "帯締め・帯揚げ・草履・バッグ・半衿・重ね衿など和装小物の買取相場を徹底解説。小物単体の価格と着物セットで出した場合の査定額の違い、高く売るコツを紹介します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/accessories-price/" },
  openGraph: { title: "和装小物（帯締め・帯揚げ・草履）の買取相場まとめ", description: "和装小物の買取相場を種類別に解説。", url: "https://kimonokaitori-biyori.com/articles/accessories-price/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "帯締め1本だけでも買い取ってもらえますか？", answer: "帯締め1本だけでも買取対象にはなりますが、単体では100円〜1,000円程度と低い査定額になるのが一般的です。ただし、道明（みちあけ）や龍工房などの高級ブランド品であれば1,000円〜5,000円程度の査定がつくこともあります。着物や帯と一緒にまとめて出すことで、コーディネート価値が加算される可能性があります。" },
  { question: "草履やバッグは着物買取業者で売れますか？", answer: "はい、和装用の草履やバッグは着物買取業者で買い取ってもらえます。特に草履とバッグのセット品は需要があり、500円〜5,000円程度の買取相場です。エナメルや佐賀錦など高級素材のものは1万円以上になることもあります。買取大吉やウリエルで査定を依頼しましょう。" },
  { question: "使用済みの和装小物でも買い取ってもらえますか？", answer: "使用済みでも状態が良ければ買取対象です。ただし、汚れやシミが目立つもの、破損しているものは値段がつかない場合があります。足袋など直接肌に触れるものは、未使用品でなければ買取不可の業者もあります。" },
  { question: "和装小物だけでも出張買取に来てもらえますか？", answer: "和装小物だけの場合、出張買取には対応していない業者もあります。小物の買取額が低い場合、出張のコストに見合わないためです。小物だけの場合は宅配買取や持ち込み買取を利用するか、着物や帯と一緒にまとめて出張買取を依頼するのがおすすめです。" },
  { question: "和装小物の中で最も高く売れるものは何ですか？", answer: "和装小物の中で最も高く売れるのは、かんざし（珊瑚・べっ甲・金製のもの）で、素材によっては数万円〜数十万円の価値があります。次いで高いのは帯留め（宝石付き・貴金属製）で、1万円〜10万円以上。帯締めでは道明の高級品が5,000円〜1万円程度です。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "和装小物（帯締め・帯揚げ・草履）の買取相場まとめ", description: "和装小物の買取相場を種類別に解説。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/accessories-price/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "和装小物の買取相場", item: "https://kimonokaitori-biyori.com/articles/accessories-price/" } ] };

export default function AccessoriesPricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "和装小物の買取相場" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">和装小物の買取相場まとめ</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">帯締め・帯揚げ・草履の買取価格を解説</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物と一緒に処分に困りがちな和装小物。帯締め・帯揚げ・草履・バッグなど、種類別の買取相場と高く売るコツをまとめました。単品では安くても、着物とセットなら価値がアップします。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#overview" className="text-[#6b4c8a] hover:underline">1. 和装小物の買取事情</a></li>
          <li><a href="#price" className="text-[#6b4c8a] hover:underline">2. 種類別の買取相場一覧</a></li>
          <li><a href="#high-value" className="text-[#6b4c8a] hover:underline">3. 高く売れる和装小物の特徴</a></li>
          <li><a href="#set" className="text-[#6b4c8a] hover:underline">4. セットで出すと価値がアップ</a></li>
          <li><a href="#tips" className="text-[#6b4c8a] hover:underline">5. 和装小物を高く売るコツ</a></li>
          <li><a href="#recommended" className="text-[#6b4c8a] hover:underline">6. おすすめ買取業者</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="overview" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />和装小物の買取事情</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>和装小物は単品での買取価格は一般的に低い傾向がありますが、<strong>着物や帯と一緒にセットで出す</strong>ことで、コーディネートとしての付加価値が認められ、トータルの買取額がアップします。</p>
          <p>ただし、珊瑚やべっ甲のかんざし、宝石付きの帯留め、道明の帯締めなどの<strong>高級品は単品でも高額査定</strong>が期待できます。「たかが小物」と思って処分せずに、まずは査定に出してみることをおすすめします。</p>
        </div>
      </div></section>

      <section id="price" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />種類別の買取相場一覧</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#6b4c8a] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">小物の種類</th><th className="px-4 py-3 text-left font-semibold">一般品の相場</th><th className="px-4 py-3 text-left font-semibold">高級品の相場</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">帯締め</td><td className="px-4 py-3">100円〜1,000円</td><td className="px-4 py-3">1,000円〜5,000円</td><td className="px-4 py-3 text-gray-600 text-xs">道明・龍工房は高額</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">帯揚げ</td><td className="px-4 py-3">100円〜500円</td><td className="px-4 py-3">500円〜3,000円</td><td className="px-4 py-3 text-gray-600 text-xs">正絹・総絞りは高め</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">草履</td><td className="px-4 py-3">300円〜2,000円</td><td className="px-4 py-3">2,000円〜1万円</td><td className="px-4 py-3 text-gray-600 text-xs">エナメル・佐賀錦は高額</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">草履バッグセット</td><td className="px-4 py-3">500円〜3,000円</td><td className="px-4 py-3">3,000円〜1万5,000円</td><td className="px-4 py-3 text-gray-600 text-xs">セットの方が高値</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">帯留め</td><td className="px-4 py-3">300円〜2,000円</td><td className="px-4 py-3">1万円〜10万円以上</td><td className="px-4 py-3 text-gray-600 text-xs">宝石・貴金属製は高額</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">かんざし</td><td className="px-4 py-3">100円〜1,000円</td><td className="px-4 py-3">1万円〜数十万円</td><td className="px-4 py-3 text-gray-600 text-xs">珊瑚・べっ甲は超高額</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">半衿・重ね衿</td><td className="px-4 py-3">100円〜300円</td><td className="px-4 py-3">300円〜2,000円</td><td className="px-4 py-3 text-gray-600 text-xs">刺繍入りは高め</td></tr>
            <tr className="bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">和装バッグ</td><td className="px-4 py-3">300円〜2,000円</td><td className="px-4 py-3">2,000円〜1万円</td><td className="px-4 py-3 text-gray-600 text-xs rounded-br-lg">西陣織・佐賀錦は高額</td></tr>
          </tbody></table>
        </div>
      </div></section>

      <section id="high-value" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />高く売れる和装小物の特徴</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">珊瑚・べっ甲・象牙のかんざし</h3><p className="text-sm text-gray-700">天然素材のかんざしは骨董的価値があり、1万円〜数十万円の買取価格がつくことがあります。特に血赤珊瑚のかんざしは非常に高額です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">宝石・貴金属の帯留め</h3><p className="text-sm text-gray-700">金やプラチナ製の帯留め、ダイヤモンドやヒスイがあしらわれた帯留めは、宝飾品としての価値が認められます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">道明の帯締め</h3><p className="text-sm text-gray-700">帯締めの最高峰ブランド「道明」の製品は、独特の組み方と上品な色使いで人気が高く、5,000円〜1万円の買取価格がつくことも。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">佐賀錦の草履バッグセット</h3><p className="text-sm text-gray-700">佐賀錦で作られた草履とバッグのセットはフォーマル用として需要が高く、状態が良ければ5,000円〜1万5,000円の買取が期待できます。</p></div>
        </div>
      </div></section>

      <section id="set" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />セットで出すと価値がアップ</h2>
        <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mb-6">
          <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">例：振袖一式の場合</h3>
          <div className="overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="bg-[#c9a76c] text-white"><th className="px-4 py-2 text-left rounded-tl-lg">品目</th><th className="px-4 py-2 text-left">単品の相場</th><th className="px-4 py-2 text-left rounded-tr-lg">セット時の評価</th></tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2 font-semibold">振袖</td><td className="px-4 py-2">10,000円</td><td className="px-4 py-2">-</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2 font-semibold">袋帯</td><td className="px-4 py-2">5,000円</td><td className="px-4 py-2">-</td></tr>
            <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2 font-semibold">帯締め</td><td className="px-4 py-2">300円</td><td className="px-4 py-2">-</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2 font-semibold">帯揚げ</td><td className="px-4 py-2">200円</td><td className="px-4 py-2">-</td></tr>
            <tr className="border-b border-[#e8ddd0]"><td className="px-4 py-2 font-semibold">草履バッグ</td><td className="px-4 py-2">1,500円</td><td className="px-4 py-2">-</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-2 font-bold">単品合計</td><td className="px-4 py-2 font-bold">17,000円</td><td className="px-4 py-2">-</td></tr>
            <tr className="bg-white"><td className="px-4 py-2 font-bold text-[#c9a76c] rounded-bl-lg">セット査定額</td><td className="px-4 py-2">-</td><td className="px-4 py-2 font-bold text-[#c9a76c] rounded-br-lg">20,000円〜22,000円</td></tr>
          </tbody></table></div>
          <p className="mt-3 text-xs text-gray-600">セットで出すと単品合計より2〜3割アップする可能性があります。</p>
        </div>
      </div></section>

      <section id="tips" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />和装小物を高く売るコツ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：着物とセットで出す</h3><p className="text-sm text-gray-700">小物単品より着物とのコーディネートで出した方が高値がつきます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：まとめて出す</h3><p className="text-sm text-gray-700">小物は数をまとめて出すほど、業者にとって取り扱いやすくなり、1点あたりの査定額もアップする傾向があります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：着物専門の業者を選ぶ</h3><p className="text-sm text-gray-700">リサイクルショップでは和装小物の価値がわからず安く買い叩かれがち。買取大吉やウリエルなどの専門業者を選びましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：ブランド品は必ず伝える</h3><p className="text-sm text-gray-700">道明の帯締めや佐賀錦の草履バッグなど、ブランド品であることを査定員に伝えましょう。箱や袋があれば一緒に出すと信頼性アップ。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：珊瑚やべっ甲は貴金属扱い</h3><p className="text-sm text-gray-700">珊瑚やべっ甲のかんざし・帯留めは着物買取業者だけでなく、貴金属・宝石の専門買取業者にも査定を依頼してみましょう。</p></div>
        </div>
      </div></section>

      <section id="recommended" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />おすすめ買取業者</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">買取大吉</h3><p className="text-sm text-gray-700">和装小物も積極的に買取。着物とセットで持ち込めば高額査定。貴金属の帯留め・かんざしにも対応。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ウリエル</h3><p className="text-sm text-gray-700">出張買取で小物も含めてまとめて査定。専門知識で道明や佐賀錦の価値を正しく評価。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">RECLO</h3><p className="text-sm text-gray-700">宅配買取で全国対応。着物と一緒に小物もまとめて送れる。海外需要で高額査定も。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ティファナ</h3><p className="text-sm text-gray-700">持ち込みで気軽に査定。着物と小物をまとめて持ち込み可能。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">ヒカカク</h3><p className="text-sm text-gray-700">一括比較で最高額を見つける。和装小物の相場確認にも便利。</p></div>
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
          <Link href="/articles/obi-price/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">帯の買取相場</h3><p className="text-xs text-gray-600">袋帯・名古屋帯の相場を解説。</p></Link>
          <Link href="/articles/kimono-market-price/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取の相場一覧</h3><p className="text-xs text-gray-600">種類別の買取価格をまとめた総合ガイド。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">和装小物も捨てずに査定へ</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">帯締め・草履・バッグなど、使わない和装小物は着物と一緒にまとめて査定に出しましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
