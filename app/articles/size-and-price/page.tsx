import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物のサイズ（身丈・裄丈）と買取価格の関係を解説",
  description: "着物のサイズ（身丈・裄丈・前幅・後幅）が買取価格にどう影響するのかを徹底解説。大きいサイズほど高く売れる理由、サイズの測り方、サイズ別の買取相場をまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/size-and-price/" },
  openGraph: { title: "着物のサイズ（身丈・裄丈）と買取価格の関係を解説", description: "着物のサイズと買取価格の関係を解説。身丈・裄丈の測り方も紹介。", url: "https://kimonokaitori-biyori.com/articles/size-and-price/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "身丈が短い着物は買い取ってもらえますか？", answer: "身丈が150cm未満の着物でも買取自体は可能ですが、買取価格は大幅に下がる傾向があります。現代の平均的な女性の身長に合うサイズ（身丈160cm以上）の方が需要が高いためです。ただし、作家物やブランド品であればサイズに関わらず高額査定がつくケースもあります。" },
  { question: "裄丈が短い着物は高く売れませんか？", answer: "裄丈が64cm未満の着物は現代の女性には短すぎるため、買取価格が下がりやすいです。理想的な裄丈は66cm以上で、68cm以上あればさらに有利です。ただし、お直し（裄出し）が可能な場合もあるため、まずは査定に出してみることをおすすめします。" },
  { question: "男性サイズの着物は買取対象になりますか？", answer: "はい、男性サイズの着物も買取対象です。ただし、男性着物は女性着物に比べて中古市場の需要が少ないため、買取価格は低めの傾向があります。紋付袴や良質な紬など、需要のあるものは適正価格で買い取ってもらえます。" },
  { question: "着物のサイズはどこで測ればいいですか？", answer: "着物のサイズは、着物を平らに広げた状態で測ります。身丈は背中心の衿付け根から裾までの長さ、裄丈は背中心から袖口までの長さです。メジャーがあれば自宅で簡単に測れます。正確なサイズがわからなくても、査定時に業者が測ってくれるので問題ありません。" },
  { question: "サイズ直し（お直し）をしてから売った方が高く売れますか？", answer: "一般的にはサイズ直しをしてから売る必要はありません。お直しの費用（1万円〜3万円）をかけても、その分だけ買取額が上がるとは限らないためです。買取業者は買い取った後に自社でサイズ直しを行うことが多いので、そのままの状態で査定に出すのがベストです。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物のサイズ（身丈・裄丈）と買取価格の関係を解説", description: "着物のサイズと買取価格の関係を解説。身丈・裄丈の測り方も紹介。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/size-and-price/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "サイズと買取価格", item: "https://kimonokaitori-biyori.com/articles/size-and-price/" } ] };

export default function SizeAndPricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "サイズと買取価格" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4"><div className="text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物のサイズと買取価格の関係</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">身丈・裄丈が査定額に与える影響を解説</span></h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物の買取価格は、素材や状態だけでなくサイズによっても大きく変わります。大きいサイズの着物ほど高く売れる傾向があり、身丈・裄丈の違いで数千円〜数万円の差がつくことも。サイズと価格の関係を詳しく解説します。</p>
          <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
        </div></div>
      </section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#why" className="text-[#6b4c8a] hover:underline">1. サイズが買取価格に影響する理由</a></li>
          <li><a href="#measure" className="text-[#6b4c8a] hover:underline">2. 着物のサイズの測り方</a></li>
          <li><a href="#ideal" className="text-[#6b4c8a] hover:underline">3. 高く売れるサイズの目安</a></li>
          <li><a href="#price" className="text-[#6b4c8a] hover:underline">4. サイズ別の買取価格への影響</a></li>
          <li><a href="#tips" className="text-[#6b4c8a] hover:underline">5. サイズが小さい着物を高く売るコツ</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">6. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="why" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />サイズが買取価格に影響する理由</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>着物の買取において、サイズは<strong>素材・状態に次いで重要な査定ポイント</strong>です。着物は洋服と違ってS/M/Lのような規格サイズがなく、1枚ずつ仕立てられるため、サイズにバラつきがあります。</p>
          <p>中古着物市場では<strong>大きいサイズの着物ほど需要が高い</strong>傾向があります。これは、大きい着物はサイズ調整（お直し）で小さくすることが比較的容易ですが、小さい着物を大きくするのは難しい（生地の余裕がなければ不可能）ためです。</p>
          <p>特に身丈160cm以上、裄丈66cm以上の着物は現代の標準的な体型の女性に対応できるため、最も需要が高く、買取価格も高くなります。</p>
        </div>
      </div></section>

      <section id="measure" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物のサイズの測り方</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#6b4c8a] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">部位</th><th className="px-4 py-3 text-left font-semibold">測り方</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">目安（女性用）</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">身丈（みたけ）</td><td className="px-4 py-3 text-gray-700">背中心の衿付け根から裾まで</td><td className="px-4 py-3">155cm〜170cm</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">裄丈（ゆきたけ）</td><td className="px-4 py-3 text-gray-700">背中心から袖口まで</td><td className="px-4 py-3">64cm〜70cm</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">前幅（まえはば）</td><td className="px-4 py-3 text-gray-700">前身頃の幅</td><td className="px-4 py-3">23cm〜26cm</td></tr>
            <tr className="bg-[#faf8f5] hover:bg-white transition-colors"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">後幅（うしろはば）</td><td className="px-4 py-3 text-gray-700">後身頃の幅</td><td className="px-4 py-3 rounded-br-lg">28cm〜32cm</td></tr>
          </tbody></table>
        </div>
      </div></section>

      <section id="ideal" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />高く売れるサイズの目安</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#c9a76c] text-white">
            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">部位</th><th className="px-4 py-3 text-left font-semibold">高く売れるサイズ</th><th className="px-4 py-3 text-left font-semibold">やや不利なサイズ</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">不利なサイズ</th>
          </tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">身丈</td><td className="px-4 py-3 text-green-600 font-medium">160cm以上</td><td className="px-4 py-3 text-[#c9a76c]">155〜160cm</td><td className="px-4 py-3 text-red-500">155cm未満</td></tr>
            <tr className="bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">裄丈</td><td className="px-4 py-3 text-green-600 font-medium">66cm以上</td><td className="px-4 py-3 text-[#c9a76c]">64〜66cm</td><td className="px-4 py-3 text-red-500 rounded-br-lg">64cm未満</td></tr>
          </tbody></table>
        </div>
        <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">ポイント：</strong>身丈160cm以上・裄丈66cm以上の着物は、現代の平均的な女性（身長158cm前後）がそのまま着られるサイズです。この条件を満たす着物は中古市場で最も需要が高く、買取価格も高くなります。</p>
        </div>
      </div></section>

      <section id="price" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />サイズ別の買取価格への影響</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-green-600 mb-2 text-base">大きめサイズ（身丈160cm以上・裄丈66cm以上）</h3>
            <p className="text-sm leading-relaxed text-gray-700">最も需要が高く、買取価格に影響なし（相場通りの査定額がつく）。特に身丈165cm以上・裄丈68cm以上のトールサイズは、背の高い方からの需要が高く、プラス評価されることもあります。</p>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#c9a76c] mb-2 text-base">標準サイズ（身丈155〜160cm・裄丈64〜66cm）</h3>
            <p className="text-sm leading-relaxed text-gray-700">やや小さめですが、まだ多くの方が着用可能なサイズです。買取価格への影響は軽微で、相場の80〜90%程度の査定額が見込めます。</p>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-red-500 mb-2 text-base">小さめサイズ（身丈155cm未満・裄丈64cm未満）</h3>
            <p className="text-sm leading-relaxed text-gray-700">現代の標準的な体型の方には小さすぎるため、需要が限定的です。買取価格は相場の50〜70%程度に減額される傾向があります。ただし、作家物やブランド品であればサイズに関わらず高額査定がつくこともあります。</p>
          </div>
        </div>
      </div></section>

      <section id="tips" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />サイズが小さい着物を高く売るコツ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ1：着物専門の買取業者を選ぶ</h3><p className="text-sm leading-relaxed text-gray-700">総合リサイクルショップではサイズの小さい着物は一律で低い査定になりがちですが、買取大吉やウリエルなどの着物専門業者は、仕立て直しの可能性も考慮して適正な価格をつけてくれます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ2：複数業者で比較する</h3><p className="text-sm leading-relaxed text-gray-700">サイズの評価基準は業者によって異なります。ヒカカクの一括査定で複数社の見積もりを比較しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ3：帯や小物とセットで出す</h3><p className="text-sm leading-relaxed text-gray-700">着物単体のサイズが小さくても、帯や和装小物とセットで出すことで、トータルの買取額を上げることができます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ4：海外販路のある業者を選ぶ</h3><p className="text-sm leading-relaxed text-gray-700">RECLOなど海外販路を持つ業者では、小柄な外国人女性からの需要もあるため、小さいサイズでも比較的高い査定がつく場合があります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">コツ5：証紙や証明書を添える</h3><p className="text-sm leading-relaxed text-gray-700">サイズが小さくても、証紙や作家物の証明があれば、それだけで高い評価を受けます。証紙は必ず一緒に査定に出しましょう。</p></div>
        </div>
      </div></section>

      <section id="faq" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
        <div className="space-y-3">{faqs.map((faq, index) => (
          <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
            <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between"><span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span><span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
            <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div>
          </details>
        ))}</div>
      </div></section>

      <section className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/fabric-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">素材の見分け方</h3><p className="text-xs text-gray-600">正絹・化繊の見分け方と買取価格。</p></Link>
          <Link href="/articles/appraisal-criteria/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">査定基準ガイド</h3><p className="text-xs text-gray-600">着物の査定で見られるポイント。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">サイズに関わらず、まずは無料査定へ</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">サイズが小さくても、素材や作家によっては高額査定の可能性があります。プロに査定してもらいましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
