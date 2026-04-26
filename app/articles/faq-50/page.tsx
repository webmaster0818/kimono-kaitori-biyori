import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取のよくある質問50選｜総合FAQ",
  description: "着物買取に関するよくある質問50選を総合FAQ形式でまとめました。買取相場・査定方法・業者選び・着物の種類別の疑問にすべてお答えします。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/faq-50/" },
  openGraph: { title: "着物買取のよくある質問50選｜総合FAQ", description: "着物買取に関するよくある質問50選。買取相場・査定方法・業者選びの疑問にお答え。", url: "https://kimonokaitori-biyori.com/articles/faq-50/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqCategories = [
  { category: "買取相場について", faqs: [
    { q: "着物の買取相場はどのくらいですか？", a: "着物の買取相場は種類・産地・作家・状態によって大きく異なります。訪問着で5,000円〜5万円、振袖で1万円〜10万円、大島紬で1万円〜15万円、加賀友禅で5万円〜50万円以上が目安です。" },
    { q: "古い着物でも値段はつきますか？", a: "はい、古い着物でも値段がつくことがあります。大正〜昭和初期のアンティーク着物はレトロモダンなデザインが人気で高額査定されることも。まずは買取大吉やウリエルの無料査定で確認しましょう。" },
    { q: "シミや汚れがある着物でも売れますか？", a: "はい、シミ・汚れ・色褪せがある着物でも査定してもらえます。素材や産地によっては多少の難があっても値段がつく場合があります。まずは無料査定に出してみましょう。" },
    { q: "帯の買取相場はどのくらいですか？", a: "帯の買取相場は種類によって異なります。袋帯（西陣織）で3,000円〜5万円、名古屋帯で500円〜3,000円、博多帯で5,000円〜5万円、作家物の帯は10万円以上になることもあります。" },
    { q: "証紙がないと査定額は下がりますか？", a: "はい、証紙がないと2〜5割程度下がる傾向があります。ただし経験豊富な査定員なら生地から産地を判断できる場合もあります。" },
  ]},
  { category: "査定・買取方法について", faqs: [
    { q: "査定だけでも大丈夫ですか？", a: "はい、買取大吉・ウリエル・RECLOなど主要業者はすべて「査定だけでもOK」です。キャンセル料もかかりません。" },
    { q: "出張買取はどのように行われますか？", a: "電話やWebで予約後、査定員が自宅に訪問。着物を1枚ずつ査定し、査定額を提示します。納得できればその場で買取成立、現金を受け取れます。出張費・査定料は無料です。" },
    { q: "宅配買取の流れを教えてください", a: "申し込み→梱包キットが届く→着物を梱包して発送→業者が査定→査定額に同意すれば入金→不同意なら無料返送、という流れです。RECLOが特に宅配に強いです。" },
    { q: "着物は何枚から買取してもらえますか？", a: "1枚からでも買取可能です。ただし出張買取の場合は、コスト効率の観点から3〜5枚以上をまとめて出すのがおすすめです。" },
    { q: "買取にかかる費用はありますか？", a: "買取大吉・ウリエルなど主要業者は、査定料・出張費・送料・キャンセル料すべて無料です。着物の売却に費用がかかることはありません。" },
  ]},
  { category: "業者選びについて", faqs: [
    { q: "おすすめの着物買取業者はどこですか？", a: "買取大吉（全国700店舗以上）、ウリエル（着物専門の出張買取に強い）、RECLO（海外販路による高額査定）、ティファナ（持ち込み買取に便利）、ヒカカク（一括比較）がおすすめです。" },
    { q: "リサイクルショップと着物買取専門店の違いは？", a: "着物買取専門店は着物に精通した査定員が在籍しており、大島紬や加賀友禅など高級着物の価値を正確に評価できます。リサイクルショップでは見落とされがちな価値も適正に査定されます。" },
    { q: "悪質な買取業者の見分け方は？", a: "出張費やキャンセル料を請求する、買取額を明示せずにまとめて引き取ろうとする、強引に買取を迫るなどの業者は要注意です。買取大吉・ウリエルなど大手業者は透明性の高い査定を行っています。" },
    { q: "複数の業者に査定を依頼すべきですか？", a: "はい、3社以上に査定を依頼して比較するのがおすすめです。業者によって得意ジャンルが異なり、査定額に数倍の差がつくこともあります。ヒカカクの一括比較が便利です。" },
    { q: "ネットの買取業者は安全ですか？", a: "買取大吉・ウリエル・RECLOなど大手業者は安全です。古物商許可番号を持ち、透明性の高い査定を行っています。口コミや実績を確認してから利用しましょう。" },
  ]},
  { category: "着物の種類について", faqs: [
    { q: "紬と小紋の違いは何ですか？", a: "紬は先染め（糸を染めてから織る）の織物で、小紋は後染め（白生地を織ってから染める）の染め物です。紬はカジュアルな普段着、小紋はカジュアルなおしゃれ着に分類されます。" },
    { q: "訪問着と付け下げの見分け方は？", a: "訪問着は縫い目をまたいで柄が繋がっています（絵羽模様）。付け下げは縫い目で柄が途切れ、肩に向かって上向きに配置されています。" },
    { q: "大島紬のマルキとは何ですか？", a: "マルキとは大島紬の絣の細かさを表す単位です。数字が大きいほど絣が細かく、制作に時間がかかるため高額になります。5マルキ・7マルキ・9マルキ・12マルキなどがあります。" },
    { q: "友禅の手描きと型友禅はどう違いますか？", a: "手描き友禅は筆で1筆ずつ描くため制作に数か月〜1年以上。型友禅は型紙を使う量産品です。買取額は手描きが型友禅の5〜10倍以上になります。" },
    { q: "化繊の着物でも売れますか？", a: "化繊（ポリエステルなど）の着物は一般的に買取額がつきにくいですが、新品同様の美品やブランド品であれば数百円〜数千円の値がつくこともあります。" },
  ]},
  { category: "高く売るコツ", faqs: [
    { q: "着物を高く売るための最も重要なポイントは？", a: "最も重要なのは「証紙を一緒に出す」「着物専門の業者を選ぶ」「複数社で比較する」の3つです。この3つを実践するだけで、査定額が数倍変わることがあります。" },
    { q: "クリーニングに出してから売るべきですか？", a: "いいえ、クリーニングは不要です。着物のクリーニング代は高額（数千円〜1万円以上）で、買取額を上回るリスクがあります。軽く陰干しする程度で十分です。" },
    { q: "着物の売り時はいつですか？", a: "夏着物は春先（3〜5月）、袷の着物は秋（9〜10月）がベスト。ただし高級着物（大島紬・結城紬・加賀友禅など）は年間通じて需要が安定しています。状態が劣化する前に早めに売るのが大切です。" },
    { q: "帯と着物はセットで出すべきですか？", a: "はい、セットで出すとコーディネートとしての付加価値が認められ、査定額がアップする可能性があります。和装小物もまとめて出しましょう。" },
    { q: "たとう紙はつけたまま査定に出すべきですか？", a: "はい、たとう紙（畳紙）は着物を保護している証拠でもあります。きれいなたとう紙に入っている着物は保管状態が良いと判断され、プラス評価になることがあります。" },
  ]},
  { category: "その他の疑問", faqs: [
    { q: "遺品整理で出てきた着物はどうすればよいですか？", a: "まずは買取大吉やウリエルの無料査定に出しましょう。価値のわからない着物でも、着物専門の査定員が1枚1枚丁寧に鑑定してくれます。枚数が多い場合は出張買取が便利です。" },
    { q: "男性の着物も買取してもらえますか？", a: "はい、男性の着物も買取対象です。特に大島紬や結城紬のアンサンブル（着物と羽織のセット）は需要があります。" },
    { q: "着物を寄付する方法はありますか？", a: "はい、NPO法人や着付け教室、国際支援団体などに着物を寄付できます。ただし寄付の前に無料査定で買取額を確認するのがおすすめです。" },
    { q: "着物リメイクと買取、どちらがお得ですか？", a: "高額な着物（大島紬・加賀友禅など）は売却がお得です。値段がつかない着物（シミあり・化繊など）はリメイクで活用するのがおすすめです。まず無料査定で確認しましょう。" },
    { q: "着物の買取額は現金でもらえますか？", a: "出張買取・持ち込み買取の場合はその場で現金払いが一般的です。宅配買取の場合は銀行振込での支払いとなります。" },
    { q: "買取をキャンセルした場合、着物は返してもらえますか？", a: "はい、買取大吉・ウリエル・RECLOなど主要業者はキャンセル無料で、宅配買取の場合も無料で返送してくれます。" },
    { q: "着物以外に和装品で売れるものはありますか？", a: "帯・帯締め・帯揚げ・草履・バッグ・かんざし・扇子・着付け小物なども買取対象です。着物と一緒にまとめて出すのがおすすめです。" },
    { q: "着物の買取に身分証明書は必要ですか？", a: "はい、古物営業法により買取時には身分証明書（運転免許証・マイナンバーカード・パスポートなど）の提示が必要です。" },
    { q: "買取価格に納得できない場合はどうすればよいですか？", a: "買取大吉・ウリエルなどはキャンセル無料なので、納得できなければ売らなくて大丈夫です。他の業者にも査定を依頼して比較しましょう。" },
    { q: "着物の買取は何時間くらいかかりますか？", a: "持ち込み買取は30分〜1時間程度、出張買取は着物の枚数にもよりますが30分〜2時間程度です。宅配買取は発送から査定結果の連絡まで3〜7日程度かかります。" },
  ]},
];

const allFaqs = faqCategories.flatMap(c => c.faqs);
const schemaFaqs = allFaqs.slice(0, 5);

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物買取のよくある質問50選｜総合FAQ", description: "着物買取に関するよくある質問50選。買取相場・査定方法・業者選びの疑問にお答え。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/faq-50/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: schemaFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "よくある質問50選", item: "https://kimonokaitori-biyori.com/articles/faq-50/" } ] };

export default function Faq50Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "よくある質問50選" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">総合FAQ</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物買取のよくある質問50選</span><br className="md:hidden" /><span className="block mt-2 text-lg md:text-2xl text-gray-700">総合FAQ</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物買取に関するよくある質問を50問厳選。買取相場・査定方法・業者選び・着物の種類・高く売るコツなど、カテゴリ別にすべてお答えします。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />カテゴリ一覧</h2>
        <nav><ol className="space-y-2 text-sm">
          {faqCategories.map((c, i) => (<li key={i}><a href={`#cat${i}`} className="text-[#6b4c8a] hover:underline">{i + 1}. {c.category}</a></li>))}
        </ol></nav>
      </div></div></section>

      {faqCategories.map((cat, ci) => (
        <section key={ci} id={`cat${ci}`} className={`py-10 ${ci % 2 === 0 ? "section-light" : ""}`}><div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />{cat.category}</h2>
          <div className="space-y-3">
            {cat.faqs.map((faq, fi) => (
              <details key={fi} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.q}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.a}</div>
              </details>
            ))}
          </div>
        </div></section>
      ))}

      <section className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3><p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を比較。</p></Link>
          <Link href="/articles/avoid-loss/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">損しないための10の知識</h3><p className="text-xs text-gray-600">着物買取で失敗しないポイントを解説。</p></Link>
          <Link href="/articles/glossary/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物用語集</h3><p className="text-xs text-gray-600">着物を売る前に知っておきたい用語集。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">疑問が解消されたら、まず無料査定から</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">着物の価値は無料査定で簡単に確認できます。複数業者の査定で最高額を見つけましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
