import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物のたたみ方・保管方法ガイド｜正しい保管で価値を守る",
  description: "着物の正しいたたみ方と保管方法を解説。たとう紙・桐たんす・防湿剤の使い方、虫干しのタイミング、カビやシミを防ぐコツを紹介。正しい保管が買取価格を大きく左右します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/storage-guide/" },
  openGraph: { title: "着物のたたみ方・保管方法ガイド｜正しい保管で価値を守る", description: "着物の正しい保管方法とたたみ方を解説。", url: "https://kimonokaitori-biyori.com/articles/storage-guide/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物を保管する際に最も注意すべきことは何ですか？", answer: "最も注意すべきは「湿気」です。着物は湿気に非常に弱く、カビやシミの最大の原因になります。防湿剤（シリカゲル）をたとう紙の中に入れ、桐たんすや通気性の良い場所で保管しましょう。また、年に1〜2回の虫干しで湿気を飛ばすことも重要です。" },
  { question: "たとう紙はどのくらいの頻度で交換すべきですか？", answer: "たとう紙は1〜2年に1回を目安に交換することをおすすめします。たとう紙自体が湿気を吸って劣化するため、古くなると防湿効果が低下します。黄ばみやカビの跡が見られたら、すぐに新しいものに交換しましょう。" },
  { question: "桐たんす以外で着物を保管する方法はありますか？", answer: "桐たんすがない場合は、プラスチック製の衣装ケースでも保管できます。ただし、プラスチックは通気性がないため、防湿剤を必ず入れ、定期的にフタを開けて風を通すようにしましょう。また、たとう紙に包んだ状態で保管することが重要です。" },
  { question: "防虫剤と着物を一緒に入れても大丈夫ですか？", answer: "防虫剤は着物に直接触れないように注意してください。防虫剤の成分が着物に直接触れると変色やシミの原因になります。たとう紙の外側に置くか、防虫剤専用のケースに入れて使用しましょう。また、異なる種類の防虫剤を混ぜて使用しないでください。" },
  { question: "着物を長期間保管する場合、売った方がいいですか？", answer: "着物を長期間着る予定がないのであれば、早めに売却することをおすすめします。保管期間が長くなるほど、シミ・カビ・色あせ・虫食いのリスクが高まり、買取価格が下がる可能性があります。状態が良いうちに売った方が高く売れます。買取大吉やウリエルなどの無料査定で価値を確認してみましょう。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物のたたみ方・保管方法ガイド｜正しい保管で価値を守る", description: "着物の正しい保管方法とたたみ方を解説。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/storage-guide/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "保管方法ガイド", item: "https://kimonokaitori-biyori.com/articles/storage-guide/" } ] };

export default function StorageGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "保管方法ガイド" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物のたたみ方・保管方法ガイド</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">正しい保管で価値を守る</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物の価値を守るために最も重要なのが「正しい保管」です。たたみ方、たとう紙の使い方、防湿対策、虫干しの方法など、着物を長く美しく保つための知識を解説します。売却を考えている方にも必読の内容です。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#tatami" className="text-[#6b4c8a] hover:underline">1. 着物の正しいたたみ方</a></li>
          <li><a href="#tatou" className="text-[#6b4c8a] hover:underline">2. たとう紙の選び方と交換時期</a></li>
          <li><a href="#storage" className="text-[#6b4c8a] hover:underline">3. 保管場所の選び方</a></li>
          <li><a href="#moisture" className="text-[#6b4c8a] hover:underline">4. 防湿・防虫対策</a></li>
          <li><a href="#mushib" className="text-[#6b4c8a] hover:underline">5. 虫干しの方法とタイミング</a></li>
          <li><a href="#ng" className="text-[#6b4c8a] hover:underline">6. やってはいけない保管方法</a></li>
          <li><a href="#sell" className="text-[#6b4c8a] hover:underline">7. 保管が面倒なら売却も選択肢</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="tatami" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />着物の正しいたたみ方</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>着物のたたみ方には「本だたみ」と呼ばれる基本的な方法があります。正しくたたむことで、シワを防ぎ、着物を美しい状態で保管できます。</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4"><span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span><div><h3 className="font-bold text-[#6b4c8a] mb-1">着物を広げる</h3><p className="text-sm text-gray-700">清潔な場所に着物を表を上にして広げます。畳の上や清潔なシーツの上がおすすめです。</p></div></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4"><span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span><div><h3 className="font-bold text-[#6b4c8a] mb-1">下前（右側）を脇縫いに沿ってたたむ</h3><p className="text-sm text-gray-700">右側の衿を手前に返し、脇縫いで折り返します。おくみ線で折り返して衿を整えます。</p></div></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4"><span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span><div><h3 className="font-bold text-[#6b4c8a] mb-1">上前（左側）を重ねる</h3><p className="text-sm text-gray-700">左側の衿を下前の衿に重ね、脇縫い同士を合わせます。背縫いが一番上にくるようにします。</p></div></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4"><span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span><div><h3 className="font-bold text-[#6b4c8a] mb-1">袖を折り返す</h3><p className="text-sm text-gray-700">上になっている袖を身頃の上に折り返し、下の袖は下に折り返します。</p></div></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4"><span className="bg-[#c9a76c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span><div><h3 className="font-bold text-[#6b4c8a] mb-1">身丈を半分に折る</h3><p className="text-sm text-gray-700">裾を衿のところまで持ち上げて半分に折ります。たとう紙のサイズに合わせてたたみましょう。</p></div></div>
        </div>
      </div></section>

      <section id="tatou" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />たとう紙の選び方と交換時期</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">和紙のたとう紙がベスト</h3><p className="text-sm leading-relaxed text-gray-700">着物の保管には和紙製のたとう紙が最適です。和紙は吸湿性に優れ、着物の湿気を吸収してくれます。安価な紙製のたとう紙よりも和紙製の方が長持ちし、防湿効果も高いです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">交換時期は1〜2年に1回</h3><p className="text-sm leading-relaxed text-gray-700">たとう紙は湿気を吸って劣化するため、1〜2年に1回は新しいものに交換しましょう。黄ばみ・カビ・シミが見られたらすぐに交換です。</p></div>
        </div>
      </div></section>

      <section id="storage" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />保管場所の選び方</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-green-600 mb-3 text-base">適した保管場所</h3>
            <ul className="space-y-2 text-sm"><li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>桐たんす（通気性・防湿性に優れる）</span></li><li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>風通しの良い部屋のクローゼット</span></li><li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>2階以上の部屋（1階は湿気が多い）</span></li><li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>直射日光の当たらない場所</span></li></ul>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-red-600 mb-3 text-base">避けるべき保管場所</h3>
            <ul className="space-y-2 text-sm"><li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>押入れの奥（湿気がこもりやすい）</span></li><li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>地下室・倉庫（湿度が高い）</span></li><li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>日光が直接当たる場所（色あせ）</span></li><li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>台所・浴室の近く（蒸気で湿る）</span></li></ul>
          </div>
        </div>
      </div></section>

      <section id="moisture" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />防湿・防虫対策</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">防湿剤（シリカゲル）を入れる</h3><p className="text-sm leading-relaxed text-gray-700">たとう紙の中にシリカゲルを入れると湿気を効果的に吸収してくれます。3〜6ヶ月ごとに交換しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">防虫剤は直接触れないように</h3><p className="text-sm leading-relaxed text-gray-700">防虫剤は着物に直接触れないよう、たとう紙の外側に置きましょう。また、異なる種類の防虫剤を混ぜるとシミの原因になるため、1種類だけを使用してください。</p></div>
        </div>
      </div></section>

      <section id="mushib" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />虫干しの方法とタイミング</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>虫干し（風通し）は着物の保管に欠かせない作業です。年に1〜2回行うことで、湿気やカビを防ぎ、着物を良い状態に保てます。</p>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm"><thead><tr className="bg-[#c9a76c] text-white"><th className="px-4 py-3 text-left font-semibold rounded-tl-lg">時期</th><th className="px-4 py-3 text-left font-semibold">おすすめ度</th><th className="px-4 py-3 text-left font-semibold rounded-tr-lg">ポイント</th></tr></thead><tbody>
            <tr className="border-b border-[#e8ddd0] bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">10月〜11月</td><td className="px-4 py-3 text-[#c9a76c] font-bold">最もおすすめ</td><td className="px-4 py-3 text-gray-700">秋晴れの乾燥した日が最適</td></tr>
            <tr className="border-b border-[#e8ddd0] bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">2月〜3月</td><td className="px-4 py-3 text-[#6b4c8a] font-bold">おすすめ</td><td className="px-4 py-3 text-gray-700">冬の乾燥した日に</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">7月〜8月</td><td className="px-4 py-3 text-gray-500 font-bold">避けた方がよい</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">高温多湿で逆効果の場合も</td></tr>
          </tbody></table>
        </div>
      </div></section>

      <section id="ng" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />やってはいけない保管方法</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">ビニール袋での保管</h3><p className="text-sm text-gray-700">ビニール袋は通気性がないため、湿気がこもってカビの原因になります。必ずたとう紙で包んでから保管しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">重ねすぎ</h3><p className="text-sm text-gray-700">着物を何枚も重ねて保管すると、下の着物にシワがついたり、重みで生地が痛んだりします。桐たんすの引き出しには2〜3枚が限度です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">ハンガーにかけたまま保管</h3><p className="text-sm text-gray-700">着物は洋服と違い、ハンガーにかけたまま長期保管すると、肩の部分が伸びたり型崩れしたりします。必ずたたんで保管しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-red-600 mb-2 text-base">何年も放置する</h3><p className="text-sm text-gray-700">着物を何年もチェックせずに放置すると、気づかないうちにカビやシミが発生していることがあります。定期的な確認が重要です。</p></div>
        </div>
      </div></section>

      <section id="sell" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />保管が面倒なら売却も選択肢</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>正しい保管には手間とコストがかかります。たとう紙の交換、防湿剤の補充、年に1〜2回の虫干し。これらが面倒と感じるなら、<strong>状態が良いうちに売却する</strong>のも賢い選択です。</p>
          <p>買取大吉やウリエルなら出張買取で自宅まで来てくれるため、着物を運ぶ手間もかかりません。まずは無料査定で価値を確認してみましょう。</p>
        </div>
      </div></section>

      <section id="faq" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
        <div className="space-y-3">{faqs.map((faq, index) => (
          <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group"><summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between"><span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span><span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span></summary><div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div></details>
        ))}</div>
      </div></section>

      <section className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p></Link>
          <Link href="/articles/cleaning-before-selling/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">クリーニングと査定額</h3><p className="text-xs text-gray-600">売る前のクリーニングは必要？</p></Link>
          <Link href="/articles/sell-high-tips/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物を高く売るコツ</h3><p className="text-xs text-gray-600">高額買取のテクニック。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">保管に悩むなら、まず無料査定で価値を確認</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">着る予定のない着物は、状態が良いうちに売る方が高く売れます。まずは無料査定で価値を確認しましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
