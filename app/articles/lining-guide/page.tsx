import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物の裏地（八掛・胴裏）の素材と査定への影響",
  description:
    "着物の裏地である八掛（はっかけ）と胴裏（どううら）の役割・素材・色選びを解説。裏地の状態が買取査定にどう影響するか、裏地交換の費用相場、購入・売却時のチェックポイントまで詳しく紹介します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/lining-guide/" },
  openGraph: { title: "着物の裏地（八掛・胴裏）の素材と査定への影響", description: "着物の裏地の種類と素材、買取査定への影響を解説。", url: "https://kimonokaitori-biyori.com/articles/lining-guide/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "八掛と胴裏はそれぞれどの位置の裏地ですか？", answer: "八掛（はっかけ）は着物の裾周り（裾から約30cm程度）の裏地で、歩く時や座る時にチラリと見える部分です。色や柄を選ぶおしゃれのポイントでもあります。胴裏（どううら）は着物の上半身の裏地で、通常は白い正絹が使われます。胴裏は外からは見えませんが、着心地や保温性に影響します。" },
  { question: "八掛の色は買取価格に影響しますか？", answer: "はい、八掛の色は買取価格に影響することがあります。着物の表地に合った上品な配色の八掛は好まれますが、個性的すぎる色や現代の好みに合わない色は若干マイナス評価になることがあります。ただし、八掛だけで大幅に査定額が変わることは少なく、表地の種類・素材・状態の方がはるかに重要です。" },
  { question: "裏地が傷んでいる着物でも買取してもらえますか？", answer: "はい、裏地が傷んでいても買取は可能です。表地の状態が良ければ、裏地を交換して再利用できるためです。ただし、裏地交換の費用分が査定額から差し引かれることがあります。八掛のスレ（毛羽立ち）や胴裏の黄変は、着用頻度や保管状態の目安にもなるため、査定ポイントの一つとして確認されます。" },
  { question: "裏地が正絹でない着物は査定に影響しますか？", answer: "裏地が化繊の着物は、裏地が正絹の着物と比べて若干査定が低くなる傾向があります。正絹の裏地は通気性や保湿性に優れ、着心地が良いため、中古市場での人気が高いです。ただし、表地が正絹であれば裏地が化繊でも問題なく買取されます。最も重要なのは表地の素材と状態です。" },
  { question: "裏地の交換（八掛替え）はいくらかかりますか？", answer: "八掛の交換費用は、素材によって異なります。正絹の八掛で仕立て代込み2万〜4万円程度、化繊の八掛で1万〜2万円程度が一般的です。胴裏の交換も同様に2万〜4万円程度です。売却前に裏地交換をすべきかどうかは、交換費用と買取価格アップ分を比較して判断しましょう。多くの場合、裏地交換はせずにそのまま売却する方が得策です。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png", headline: "着物の裏地（八掛・胴裏）の素材と査定への影響", description: "着物の裏地の種類と素材、買取査定への影響を解説。", datePublished: "2026-05-17", dateModified: "2026-05-17", author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/lining-guide/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の裏地（八掛・胴裏）", item: "https://kimonokaitori-biyori.com/articles/lining-guide/" }] };

export default function LiningGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の裏地（八掛・胴裏）" }]} />

      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/lining-guide.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物の裏地（八掛・胴裏）</span><span className="block mt-2 text-lg md:text-2xl text-gray-700">素材と査定への影響</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">袷（あわせ）の着物には裏地が付いています。裾周りの「八掛（はっかけ）」と上半身の「胴裏（どううら）」は、着物の着心地や見た目、そして買取査定にも影響する重要な要素です。この記事では、裏地の役割と素材、色選びのルール、査定への影響まで詳しく解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#role" className="text-[#6b4c8a] hover:underline">1. 裏地の役割</a></li>
          <li><a href="#hakkake" className="text-[#6b4c8a] hover:underline">2. 八掛（はっかけ）の詳細</a></li>
          <li><a href="#doura" className="text-[#6b4c8a] hover:underline">3. 胴裏（どううら）の詳細</a></li>
          <li><a href="#material" className="text-[#6b4c8a] hover:underline">4. 裏地の素材と品質</a></li>
          <li><a href="#check" className="text-[#6b4c8a] hover:underline">5. 裏地のチェックポイント</a></li>
          <li><a href="#impact" className="text-[#6b4c8a] hover:underline">6. 裏地が査定に与える影響</a></li>
          <li><a href="#replace" className="text-[#6b4c8a] hover:underline">7. 裏地の交換費用と判断基準</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="role" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />裏地の役割</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>袷（あわせ）の着物に付く裏地には、複数の重要な役割があります。まず、表地を保護する役割です。裏地があることで表地への摩擦や汗の影響が軽減され、着物が長持ちします。</p>
          <p>次に、着心地の向上です。正絹の裏地は肌触りが良く、着物が体に沿うように滑りやすくなります。特に胴裏は直接肌に近い部分のため、素材の良し悪しが着心地に直結します。</p>
          <p>そして、見た目の美しさです。八掛は歩く時や階段を上る時にチラリと見える部分であり、表地との配色を楽しむおしゃれのポイントでもあります。<Link href="/articles/seasonal-rules/" className="text-[#6b4c8a] hover:underline">季節の着分け</Link>でも、裏地の有無が袷と単衣を区別する基準になっています。</p>
        </div>
      </div></section>

      <section id="hakkake" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />八掛（はっかけ）の詳細</h2>
        <div className="bg-white border border-[#e8ddd0] rounded-xl p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div><h3 className="font-bold text-[#6b4c8a] mb-3 text-base">八掛の基本</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>位置：</strong>着物の裾周り（裾から約25〜30cm）</li>
                <li><strong>名前の由来：</strong>前身頃2枚＋後身頃2枚＋衽2枚＋衿先2枚の計8枚に使われるため</li>
                <li><strong>特徴：</strong>歩行時にチラリと見えるおしゃれポイント</li>
                <li><strong>素材：</strong>正絹が一般的、化繊もある</li>
              </ul>
            </div>
            <div><h3 className="font-bold text-[#c9a76c] mb-3 text-base">八掛の色選び</h3>
              <p className="text-sm leading-relaxed text-gray-700">八掛の色は表地に合わせて選びます。一般的には表地と同系色の濃い色か、補色を使います。例えば、薄いピンクの訪問着には濃いピンクやえんじ色の八掛、青い小紋にはネイビーや紺色の八掛を合わせます。ぼかし染めの八掛は上品な印象を与え、人気があります。</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
          <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">八掛のスレ（劣化）について</h3>
          <p className="text-sm leading-relaxed text-gray-700">八掛は歩行時に最も摩擦を受ける部分であるため、着用回数が増えると「スレ」（毛羽立ち・擦り切れ）が発生します。スレは着物の着用頻度を示す指標でもあり、スレが激しい着物は「よく着られた着物」として買取査定でマイナス評価になることがあります。八掛のスレが目立つ場合は八掛替え（交換）も検討できますが、費用との兼ね合いが重要です。</p>
        </div>
      </div></section>

      <section id="doura" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />胴裏（どううら）の詳細</h2>
        <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div><h3 className="font-bold text-[#6b4c8a] mb-3 text-base">胴裏の基本</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>位置：</strong>着物の上半身の裏地（袖・身頃の裏側）</li>
                <li><strong>色：</strong>通常は白（フォーマルは白が必須）</li>
                <li><strong>素材：</strong>正絹が一般的、羽二重や精華などの種類がある</li>
                <li><strong>見え方：</strong>外からはほぼ見えない</li>
              </ul>
            </div>
            <div><h3 className="font-bold text-[#c9a76c] mb-3 text-base">胴裏の劣化</h3>
              <p className="text-sm leading-relaxed text-gray-700">胴裏は外からは見えませんが、長期保管していると黄変（おうへん）が起こることがあります。特に正絹の胴裏は湿気や酸化により黄色く変色しやすいです。黄変した胴裏は見た目の問題だけでなく、表地にも黄変が移ることがあるため注意が必要です。定期的な<Link href="/articles/airing-guide/" className="text-[#6b4c8a] hover:underline">虫干し</Link>で予防できます。</p>
            </div>
          </div>
        </div>
      </div></section>

      <section id="material" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />裏地の素材と品質</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#6b4c8a] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">素材</th>
              <th className="px-4 py-3 text-left font-semibold">特徴</th>
              <th className="px-4 py-3 text-left font-semibold">価格帯</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">査定への影響</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">正絹（羽二重）</td><td className="px-4 py-3 text-gray-700">滑らかで光沢がある、最高級</td><td className="px-4 py-3 text-gray-700">高</td><td className="px-4 py-3 text-gray-700 text-green-600 font-bold">プラス</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">正絹（精華）</td><td className="px-4 py-3 text-gray-700">羽二重より厚みがある</td><td className="px-4 py-3 text-gray-700">中〜高</td><td className="px-4 py-3 text-gray-700 text-green-600 font-bold">プラス</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">化繊（ポリエステル）</td><td className="px-4 py-3 text-gray-700">軽くて丈夫、洗いやすい</td><td className="px-4 py-3 text-gray-700">低</td><td className="px-4 py-3 text-gray-700">影響小</td></tr>
              <tr className="bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">キュプラ</td><td className="px-4 py-3 text-gray-700">正絹に近い風合い、手頃</td><td className="px-4 py-3 text-gray-700">低〜中</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">影響小</td></tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <section id="check" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />裏地のチェックポイント</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">八掛のスレ（摩擦による劣化）</h3><p className="text-sm leading-relaxed text-gray-700">八掛の裾部分を触って、毛羽立ちやざらつきがないか確認します。スレが進行していると生地が薄くなり、破れやすくなります。スレが目立つ着物は着用頻度が高かった証拠で、査定ではマイナスポイントになります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">胴裏の黄変・シミ</h3><p className="text-sm leading-relaxed text-gray-700">胴裏を広げて、黄色く変色していないか、シミやカビがないか確認します。胴裏の黄変は表地にも影響を及ぼす可能性があるため、発見したら早めの対処が必要です。<Link href="/articles/storage-guide/" className="text-[#6b4c8a] hover:underline">正しい保管方法</Link>で予防できます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">縫い目のほつれ</h3><p className="text-sm leading-relaxed text-gray-700">裏地と表地の縫い合わせ部分にほつれがないか確認します。特に袖口、裾、衿のくけ（かがり縫い）の部分はほつれやすい箇所です。ほつれが軽微であれば自分で補修できますが、広範囲にわたるほつれは<Link href="/articles/alteration-cost/" className="text-[#6b4c8a] hover:underline">仕立て直し</Link>が必要です。</p></div>
        </div>
      </div></section>

      <section id="impact" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />裏地が査定に与える影響</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>裏地の状態は買取査定において確認されるポイントの一つです。査定員は裏地をめくって以下の点を確認します。</p>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">プラス評価になるポイント</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>正絹の裏地（特に高品質な羽二重）</li>
              <li>八掛・胴裏ともに白く清潔な状態</li>
              <li>スレや劣化がほとんどない</li>
              <li>表地と調和した上品な八掛の色</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#c9a76c] mb-2 text-base">マイナス評価になるポイント</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>八掛のスレが激しい</li>
              <li>胴裏の黄変やカビ</li>
              <li>裏地の破れやほつれ</li>
              <li>裏地にシミや汚れが付着</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">ただし：</strong>裏地の状態だけで買取不可になることは稀です。表地の種類・素材・状態、証紙の有無、サイズの方がはるかに重要な査定要素です。裏地に多少の劣化があっても、表地が良品であれば十分に値段がつきます。<Link href="/articles/appraisal-criteria/" className="text-[#6b4c8a] hover:underline">査定基準の詳細</Link>も参考にしてください。</p>
        </div>
      </div></section>

      <section id="replace" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />裏地の交換費用と判断基準</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#c9a76c] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">作業内容</th>
              <th className="px-4 py-3 text-left font-semibold">素材</th>
              <th className="px-4 py-3 text-left font-semibold">費用目安</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">期間</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">八掛替え</td><td className="px-4 py-3 text-gray-700">正絹</td><td className="px-4 py-3 text-gray-700">2万〜4万円</td><td className="px-4 py-3 text-gray-700">2〜4週間</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">八掛替え</td><td className="px-4 py-3 text-gray-700">化繊</td><td className="px-4 py-3 text-gray-700">1万〜2万円</td><td className="px-4 py-3 text-gray-700">1〜3週間</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">胴裏替え</td><td className="px-4 py-3 text-gray-700">正絹</td><td className="px-4 py-3 text-gray-700">2万〜4万円</td><td className="px-4 py-3 text-gray-700">2〜4週間</td></tr>
              <tr className="bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">八掛＋胴裏全交換</td><td className="px-4 py-3 text-gray-700">正絹</td><td className="px-4 py-3 text-gray-700">4万〜8万円</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">3〜6週間</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-4 leading-relaxed text-gray-700">売却前に裏地交換をすべきかどうかは、着物の価値によって判断します。高額な作家物や伝統工芸品であれば、裏地交換で査定額が大幅にアップする可能性がありますが、一般的な着物では交換費用が査定アップ分を上回ることが多いです。迷った場合は、まず<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>で現状の評価を確認してから判断しましょう。</p>
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
          <Link href="/articles/fabric-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の素材ガイド</h3><p className="text-xs text-gray-600">正絹・化繊・木綿など素材別の特徴と買取相場。</p></Link>
          <Link href="/articles/seasonal-rules/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">季節の着分けルール</h3><p className="text-xs text-gray-600">袷・単衣・薄物の時期と仕立ての違い。</p></Link>
          <Link href="/articles/alteration-cost/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">仕立て直し費用と期間</h3><p className="text-xs text-gray-600">サイズ直し・裏地交換などの費用相場を解説。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">裏地の状態も含めて適正に評価します</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">裏地のスレや黄変があっても、表地の価値を正しく評価できる専門査定員が対応。無料査定でまずは価値を確認してみましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>

      <SoubaNote />
    </>
  );
}
