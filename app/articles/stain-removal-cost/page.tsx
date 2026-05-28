import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の染み抜き費用と方法｜売る前にやるべき？",
  description:
    "着物の染み抜き費用を種類別に徹底解説。汗ジミ・飲食シミ・カビジミなど汚れの種類ごとの費用相場と対処法、自宅でできる応急処置、そして売却前に染み抜きすべきかの判断基準まで詳しく紹介します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/stain-removal-cost/" },
  openGraph: { title: "着物の染み抜き費用と方法｜売る前にやるべき？", description: "着物の染み抜き費用相場と売却前にやるべきかの判断基準を解説。", url: "https://kimonokaitori-biyori.com/articles/stain-removal-cost/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物の染み抜きは自宅でもできますか？", answer: "軽微な汚れであれば応急処置は可能です。水溶性の汚れ（お茶・ジュースなど）は、汚れの下に白い布を敷き、湿らせた布で軽く叩くようにして汚れを下の布に移します。ただし、正絹の着物に素人が本格的な染み抜きを行うのは非常にリスクが高く、生地を傷めたり色落ちを起こしたりする可能性があります。高価な着物は専門店に任せることを強くおすすめします。" },
  { question: "古いシミでも染み抜きで落とせますか？", answer: "シミの種類と経過時間によります。付着から数日以内であれば多くのシミは専門店で落とせます。しかし、数か月〜数年経過した古いシミは酸化して生地の繊維と一体化しており、完全に落とすのは困難な場合があります。特に黄変した汗ジミやカビジミは漂白処理が必要になり、費用も高額になります。専門店に相談して見積もりを取ってから判断しましょう。" },
  { question: "染み抜きの費用は着物の種類によって変わりますか？", answer: "着物の種類よりも、シミの種類・大きさ・経過時間・位置によって費用が変わります。ただし、金彩加工や刺繍がある着物は染み抜き作業が複雑になるため、追加費用がかかることがあります。また、正絹と化繊では使える薬品が異なるため、事前に素材を確認しておくことが重要です。" },
  { question: "売る前に染み抜きをした方が高く売れますか？", answer: "必ずしもそうとは限りません。染み抜き費用が5,000円で、それにより買取価格が1万円アップするなら得ですが、2万円の染み抜き費用で買取価格が5,000円しかアップしないなら損です。一般的な着物の場合、大きなシミでなければそのまま売る方が得策なケースが多いです。高額な作家物や伝統工芸品であれば、染み抜きで大幅な査定アップが見込めるため、費用対効果が高くなります。" },
  { question: "染み抜きの費用が高すぎる場合はどうすればいいですか？", answer: "染み抜き費用が着物の買取価格を上回るような場合は、シミがある状態のまま買取に出すのが合理的です。大手の買取業者は自社でクリーニング工房を持っているか、提携先の悉皆店に安価で依頼できるため、シミありの着物でも買取してくれます。まずは複数の業者に無料査定を依頼し、シミがある状態での査定額を確認してから判断しましょう。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png", headline: "着物の染み抜き費用と方法｜売る前にやるべき？", description: "着物の染み抜き費用相場と売却前にやるべきかの判断基準を解説。", datePublished: "2026-05-17", dateModified: "2026-05-17", author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/stain-removal-cost/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の染み抜き費用と方法", item: "https://kimonokaitori-biyori.com/articles/stain-removal-cost/" }] };

export default function StainRemovalCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の染み抜き費用と方法" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物の染み抜き費用と方法</span><span className="block mt-2 text-lg md:text-2xl text-gray-700">売る前にやるべき？</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物にシミがついてしまった場合、自分で落とすべきか専門店に依頼すべきか、そして売却前に染み抜きをすべきかどうか。この記事では、シミの種類別の対処法と専門店の費用相場、売る前の染み抜きの損得判断まで詳しく解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#types" className="text-[#6b4c8a] hover:underline">1. シミの種類と特徴</a></li>
          <li><a href="#cost" className="text-[#6b4c8a] hover:underline">2. 染み抜きの費用相場</a></li>
          <li><a href="#home-care" className="text-[#6b4c8a] hover:underline">3. 自宅でできる応急処置</a></li>
          <li><a href="#pro-flow" className="text-[#6b4c8a] hover:underline">4. 専門店での染み抜きの流れ</a></li>
          <li><a href="#before-sell" className="text-[#6b4c8a] hover:underline">5. 売る前に染み抜きすべきかの判断基準</a></li>
          <li><a href="#prevention" className="text-[#6b4c8a] hover:underline">6. シミを防ぐためのお手入れ</a></li>
          <li><a href="#stained-sell" className="text-[#6b4c8a] hover:underline">7. シミがある着物の買取事情</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="types" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />シミの種類と特徴</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">水溶性のシミ</h3><p className="text-sm leading-relaxed text-gray-700">お茶、ジュース、醤油、ワインなどの水溶性の汚れです。付着直後であれば比較的落としやすく、応急処置も効果的です。ただし、時間が経つと酸化して黄変し、除去が困難になります。着用後すぐに対処することが重要です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">油性のシミ</h3><p className="text-sm leading-relaxed text-gray-700">化粧品（ファンデーション、口紅）、食用油、皮脂などの油性の汚れです。水では落ちず、専用の溶剤が必要になります。衿（えり）周りのファンデーション汚れは最も多い油性シミの一つで、着用するたびに蓄積します。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">汗ジミ（黄変）</h3><p className="text-sm leading-relaxed text-gray-700">汗が生地に染み込み、時間の経過とともに黄色く変色したものです。脇、背中、衿元に発生しやすく、着物のシミの中で最も多い種類です。新しいうちは目立ちませんが、数か月〜数年後に突然黄変として現れることがあります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">カビジミ</h3><p className="text-sm leading-relaxed text-gray-700">カビが繁殖した痕跡です。白カビは比較的対処しやすいですが、黄カビ・黒カビは生地の繊維まで侵食していることが多く、完全除去は困難です。<Link href="/articles/mold-removal/" className="text-[#6b4c8a] hover:underline">カビ取りの詳細</Link>は別記事で解説しています。</p></div>
        </div>
      </div></section>

      <section id="cost" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />染み抜きの費用相場</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#6b4c8a] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">シミの種類</th>
              <th className="px-4 py-3 text-left font-semibold">難易度</th>
              <th className="px-4 py-3 text-left font-semibold">費用目安（1か所）</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">期間</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">軽度の水溶性シミ</td><td className="px-4 py-3 text-gray-700">低</td><td className="px-4 py-3 text-gray-700">2,000円〜5,000円</td><td className="px-4 py-3 text-gray-700">1〜2週間</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">ファンデーション・口紅</td><td className="px-4 py-3 text-gray-700">中</td><td className="px-4 py-3 text-gray-700">3,000円〜8,000円</td><td className="px-4 py-3 text-gray-700">1〜2週間</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">汗ジミ（黄変）</td><td className="px-4 py-3 text-gray-700">高</td><td className="px-4 py-3 text-gray-700">5,000円〜1.5万円</td><td className="px-4 py-3 text-gray-700">2〜4週間</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">カビジミ</td><td className="px-4 py-3 text-gray-700">高</td><td className="px-4 py-3 text-gray-700">5,000円〜2万円</td><td className="px-4 py-3 text-gray-700">2〜4週間</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">古いシミ（酸化変色）</td><td className="px-4 py-3 text-gray-700">最高</td><td className="px-4 py-3 text-gray-700">1万〜3万円</td><td className="px-4 py-3 text-gray-700">3〜6週間</td></tr>
              <tr className="bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">丸洗い（全体洗い）</td><td className="px-4 py-3 text-gray-700">-</td><td className="px-4 py-3 text-gray-700">5,000円〜1.5万円</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">1〜3週間</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">※ 費用はシミの大きさ・数・着物の素材により変動します。事前に見積もりを取ってから依頼しましょう。</p>
      </div></section>

      <section id="home-care" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />自宅でできる応急処置</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">水溶性シミの応急処置</h3><p className="text-sm leading-relaxed text-gray-700">シミの裏側に白い布（ガーゼなど）を当て、水を少量含ませた別の布で表面から軽く叩きます。こすらずに叩くことがポイントです。汚れを下の布に移すイメージで行います。処置後は乾いたタオルで水分を吸い取り、自然乾燥させます。ただし、正絹の着物は水でシミが広がるリスクがあるため、高価な着物は応急処置せずに専門店に持ち込みましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#c9a76c] mb-2 text-base">絶対にやってはいけないこと</h3>
            <ul className="space-y-2 text-sm text-gray-700 mt-2">
              <li>シミをこする（繊維を傷め、シミを広げる原因）</li>
              <li>市販の染み抜き剤を使う（着物用でない溶剤は色落ちの原因）</li>
              <li>ドライヤーで乾かす（熱でシミが定着する可能性）</li>
              <li>漂白剤を使う（脱色・生地の劣化を引き起こす）</li>
            </ul>
          </div>
        </div>
      </div></section>

      <section id="pro-flow" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />専門店での染み抜きの流れ</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 持ち込み・見積もり</h3><p className="text-sm leading-relaxed text-gray-700">着物を専門店（悉皆店・和装クリーニング店）に持ち込み、シミの状態を見てもらいます。シミの種類・大きさ・経過時間から、落とせるかどうかの判断と費用の見積もりが出されます。見積もりは無料の店が多いです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 染み抜き処理</h3><p className="text-sm leading-relaxed text-gray-700">職人がシミの種類に合った溶剤や技法を使い、手作業で染み抜きを行います。水溶性のシミには水性の薬品、油性のシミには揮発性の溶剤を使います。古いシミや黄変には漂白処理が行われることもあります。金彩や刺繍がある部分は特に慎重な処理が必要です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 仕上げ・引き取り</h3><p className="text-sm leading-relaxed text-gray-700">染み抜き後、必要に応じてプレス（仕上げ）が行われます。完了したら連絡が来るので引き取りに行きます。処理期間は通常1〜4週間程度です。仕上がりに納得できない場合は再処理を依頼できる店もあります。</p></div>
        </div>
      </div></section>

      <section id="before-sell" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />売る前に染み抜きすべきかの判断基準</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">染み抜きした方がよいケース</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>高額な着物（作家物・伝統工芸品・ブランド品）</li>
              <li>軽度のシミで費用が数千円程度で済む場合</li>
              <li>シミが目立つ位置（胸元・裾の正面）にある場合</li>
              <li>染み抜き費用より査定アップ額の方が大きい場合</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#c9a76c] mb-2 text-base">そのまま売った方がよいケース</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>一般的な着物で買取相場が数千円程度の場合</li>
              <li>染み抜き費用が1万円以上かかる場合</li>
              <li>シミが小さく目立たない位置にある場合</li>
              <li>古いシミで完全除去が見込めない場合</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">迷ったらまず無料査定を：</strong>染み抜きすべきかどうか判断できない場合は、シミがある状態のまま<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>に出してみましょう。査定員から「このシミを取ればもっと高くなります」とアドバイスをもらえることもあります。<Link href="/articles/cleaning-before-selling/" className="text-[#6b4c8a] hover:underline">売る前のクリーニング</Link>についても参考にしてください。</p>
        </div>
      </div></section>

      <section id="prevention" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />シミを防ぐためのお手入れ</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">着用後はすぐにお手入れを</h3><p className="text-sm leading-relaxed text-gray-700">着物を脱いだ後は、衣紋掛けに掛けて1〜2日陰干しして汗の湿気を飛ばします。汚れがないか点検し、衿元のファンデーション汚れなどがあれば早めに対処します。着用後すぐのお手入れが、シミの定着を防ぐ最大のポイントです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">汗をかきやすい場面では汗除け対策を</h3><p className="text-sm leading-relaxed text-gray-700">夏場や暖房の効いた室内で着物を着る場合は、汗除けの補正パッドや肌着を活用しましょう。特に脇や背中は汗をかきやすいため、汗取りパッド付きの肌襦袢がおすすめです。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">定期的な虫干しで早期発見</h3><p className="text-sm leading-relaxed text-gray-700"><Link href="/articles/airing-guide/" className="text-[#6b4c8a] hover:underline">定期的な虫干し</Link>を行い、シミの早期発見に努めましょう。早く見つけるほど染み抜きの成功率が上がり、費用も安く済みます。</p></div>
        </div>
      </div></section>

      <section id="stained-sell" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />シミがある着物の買取事情</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>シミがある着物でも買取してもらえるかどうかは、多くの方が気にするポイントです。結論から言えば、シミがあっても買取は可能です。<Link href="/articles/old-stained-kimono/" className="text-[#6b4c8a] hover:underline">古くてシミのある着物の買取</Link>にも対応している大手業者は多数あります。</p>
          <p>ただし、シミの程度によって査定額は変わります。小さなシミが1〜2か所ある程度なら大幅な減額にはなりませんが、大きなシミが複数ある場合や、全体的に変色している場合は査定額が大きく下がることがあります。</p>
          <p>重要なのは、シミがあるからと言って諦めずに、まず<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">複数の業者に査定を依頼する</Link>ことです。業者によってシミの評価基準は異なるため、A社では値段がつかなかった着物がB社では数万円の値段がつくこともあります。</p>
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
          <Link href="/articles/mold-removal/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物のカビ取り方法</h3><p className="text-xs text-gray-600">カビの種類別の対処法と専門店の費用。</p></Link>
          <Link href="/articles/cleaning-before-selling/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">売る前のクリーニング</h3><p className="text-xs text-gray-600">クリーニングの費用対効果を検証。</p></Link>
          <Link href="/articles/old-stained-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">シミ・汚れのある着物の買取</h3><p className="text-xs text-gray-600">状態が悪い着物でも買取可能な業者を紹介。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">シミがあっても無料査定は可能です</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">シミの状態も含めて適正に評価する専門査定員が対応。まずは無料査定で現在の買取価格を確認してみましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
