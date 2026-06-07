import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "人間国宝の着物一覧｜作家別の買取相場と見分け方",
  description:
    "人間国宝（重要無形文化財保持者）の着物作家一覧と買取相場を徹底解説。友禅・紬・型染め・織りなど分野別に代表的な人間国宝を紹介。作品の見分け方、証紙・落款の確認方法、高額買取のポイントまで詳しく解説します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/living-national-treasure/" },
  openGraph: { title: "人間国宝の着物一覧｜作家別の買取相場と見分け方", description: "人間国宝の着物作家一覧と買取相場。作品の見分け方も解説。", url: "https://kimonokaitori-biyori.com/articles/living-national-treasure/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "人間国宝の着物はどのくらいの買取価格がつきますか？", answer: "人間国宝の着物の買取価格は、作家・作品の種類・状態・サイズによって大きく異なりますが、数十万円〜数百万円の買取価格がつくことがあります。例えば、志村ふくみの紬織は状態が良ければ50万〜150万円、羽田登喜男の友禅は30万〜100万円以上の相場です。ただし、状態が悪かったり証紙がない場合は相場より大幅に下がることもあります。" },
  { question: "人間国宝の作品かどうかはどうやって見分けますか？", answer: "人間国宝の作品を見分けるポイントは3つあります。1つ目は落款（らっかん）です。作家が作品に押す印章で、作家ごとに固有のデザインがあります。2つ目は証紙（しょうし）です。産地や技法を証明する紙で、人間国宝認定の記載がある場合もあります。3つ目は共布（ともぬの）です。反物の端に付いている証明布で、作家名や技法が記されています。これらが揃っていると正確な鑑定が可能です。" },
  { question: "人間国宝が亡くなった後、作品の価値は上がりますか？", answer: "一般的に、人間国宝が亡くなると作品の希少性が増し、市場価値が上がる傾向があります。新たな作品が生まれないため、既存の作品への需要が集中するためです。特に晩年の円熟期の作品や代表的な技法が際立つ作品は、没後に価格が大きく上昇することがあります。ただし、すべての作品が値上がりするわけではなく、作家の知名度や作品の質によります。" },
  { question: "人間国宝の弟子（後継者）の作品にも価値はありますか？", answer: "はい、人間国宝の弟子や後継者の作品にも相応の価値があります。特に、師匠の技法を正統に受け継いでいる作家や、自身も伝統工芸士の認定を受けている作家の作品は、数万円〜数十万円の買取価格がつくことがあります。ただし、人間国宝本人の作品と比べると価格差は大きいのが一般的です。" },
  { question: "証紙や落款がない場合でも人間国宝の作品として評価されますか？", answer: "証紙や落款がない場合、正確な鑑定が困難になるため、買取価格は大幅に下がる可能性があります。ただし、経験豊富な査定員であれば、技法や生地の特徴、時代的な特徴から作家を推定できることがあります。証紙がない場合でも諦めずに、着物の専門知識を持つ複数の買取業者に査定を依頼することをおすすめします。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png", headline: "人間国宝の着物一覧｜作家別の買取相場と見分け方", description: "人間国宝の着物作家一覧と買取相場。作品の見分け方も解説。", datePublished: "2026-05-17", dateModified: "2026-05-17", author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/living-national-treasure/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "人間国宝の着物一覧", item: "https://kimonokaitori-biyori.com/articles/living-national-treasure/" }] };

export default function LivingNationalTreasurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "人間国宝の着物一覧" }]} />

      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/living-national-treasure.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">人間国宝の着物一覧</span><span className="block mt-2 text-lg md:text-2xl text-gray-700">作家別の買取相場と見分け方</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">人間国宝（重要無形文化財保持者）の手がけた着物は、芸術品としての価値と実用品としての価値を兼ね備えた最高峰の和装品です。この記事では、染め・織りの分野別に代表的な人間国宝を紹介し、作品の買取相場、見分け方、高額買取のポイントを解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#what-is" className="text-[#6b4c8a] hover:underline">1. 人間国宝とは</a></li>
          <li><a href="#dye-artists" className="text-[#6b4c8a] hover:underline">2. 染めの分野の人間国宝</a></li>
          <li><a href="#weave-artists" className="text-[#6b4c8a] hover:underline">3. 織りの分野の人間国宝</a></li>
          <li><a href="#price-table" className="text-[#6b4c8a] hover:underline">4. 作家別の買取相場一覧</a></li>
          <li><a href="#identify" className="text-[#6b4c8a] hover:underline">5. 人間国宝の作品の見分け方</a></li>
          <li><a href="#sell-tips" className="text-[#6b4c8a] hover:underline">6. 高額買取のポイント</a></li>
          <li><a href="#caution" className="text-[#6b4c8a] hover:underline">7. 注意点と偽物の見分け方</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="what-is" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />人間国宝とは</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>人間国宝とは、「重要無形文化財保持者」の通称です。文化財保護法に基づき、日本の伝統的な技術・技能のうち、重要なものの保持者として文部科学大臣が認定します。着物関連の分野では、友禅、型染め、紬織り、精好仙台平、芭蕉布など多岐にわたる技法の保持者が認定されています。</p>
          <p>人間国宝の作品は、卓越した技法と長年の経験が凝縮された芸術品であり、着物の中でも最高の評価を受けます。買取市場でも別格の扱いで、一般的な着物の数倍〜数十倍の買取価格がつくことがあります。</p>
          <p>着物分野の人間国宝は代々受け継がれるものではなく、個人の技能に対して認定されるため、認定者が亡くなると後継者が自動的に人間国宝になるわけではありません。そのため、故人の作品は年々希少性が増していきます。</p>
        </div>
      </div></section>

      <section id="dye-artists" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />染めの分野の人間国宝</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">羽田登喜男（はた ときお）- 友禅</h3><p className="text-sm leading-relaxed text-gray-700">京友禅と加賀友禅の両方を極めた稀有な友禅作家です。1988年に「友禅」の技法で人間国宝に認定されました。鴛鴦（おしどり）や四季の花々を描いた華やかな作品が特徴で、皇室に献上した実績もあります。買取相場は30万〜100万円以上。<Link href="/articles/yuzen-types/" className="text-[#6b4c8a] hover:underline">友禅の種類</Link>も参考にしてください。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">木村雨山（きむら うざん）- 加賀友禅</h3><p className="text-sm leading-relaxed text-gray-700">加賀友禅の第一人者で、1955年に「友禅」の技法で人間国宝に認定されました。写実的な花鳥風月の描写と独特の色彩感覚が高く評価されています。故人のため作品の希少性は年々増しており、買取相場は50万〜200万円以上です。<Link href="/articles/kaga-yuzen/" className="text-[#6b4c8a] hover:underline">加賀友禅の詳細</Link>もご覧ください。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">芹沢けい介（せりざわ けいすけ）- 型絵染</h3><p className="text-sm leading-relaxed text-gray-700">型絵染の人間国宝で、1956年に認定されました。沖縄の紅型の技法を独自に発展させた「型絵染」を確立し、大胆な構図と鮮やかな色彩が特徴です。着物だけでなく屏風や暖簾などの作品も高い評価を受けています。着物作品の買取相場は20万〜80万円以上。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">小宮康孝（こみや やすたか）- 江戸小紋</h3><p className="text-sm leading-relaxed text-gray-700">江戸小紋の人間国宝で、1978年に認定されました。極めて微細な型紙彫刻と精密な染めの技術を持ち、「鮫」「行儀」「通し」などの伝統的な江戸小紋の技を極めています。作品の買取相場は15万〜50万円程度です。</p></div>
        </div>
      </div></section>

      <section id="weave-artists" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />織りの分野の人間国宝</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">志村ふくみ（しむら ふくみ）- 紬織</h3><p className="text-sm leading-relaxed text-gray-700">草木染めの紬織で1990年に人間国宝に認定されました。植物から抽出した天然の色素だけで糸を染め、その糸で織り上げる独自の技法が評価されています。自然の色彩と深い精神性が作品に宿り、文学的な評価も高い作家です。買取相場は50万〜150万円以上。<Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] hover:underline">紬の種類</Link>も参考にしてください。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">宮平初子（みやひら はつこ）- 首里の織物</h3><p className="text-sm leading-relaxed text-gray-700">首里の伝統的な織物技法の人間国宝で、1998年に認定されました。琉球王朝時代から伝わる首里花織、道屯織（ロートン織）、花倉織などの高度な技法を継承しています。沖縄の織物作品は希少性が高く、買取相場は20万〜60万円以上です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">平良敏子（たいら としこ）- 芭蕉布</h3><p className="text-sm leading-relaxed text-gray-700">芭蕉布の人間国宝で、2000年に認定されました。沖縄の糸芭蕉の繊維から糸を紡ぎ、織り上げる芭蕉布の技術を戦後の衰退から復興させた功績が評価されています。芭蕉布は夏の最高級織物として知られ、買取相場は30万〜100万円以上です。</p></div>
        </div>
      </div></section>

      <section id="price-table" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />作家別の買取相場一覧</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#6b4c8a] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">作家名</th>
              <th className="px-4 py-3 text-left font-semibold">分野</th>
              <th className="px-4 py-3 text-left font-semibold">買取相場</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">木村雨山</td><td className="px-4 py-3 text-gray-700">友禅</td><td className="px-4 py-3 text-gray-700">50万〜200万円</td><td className="px-4 py-3 text-gray-700">故人・最高級</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">志村ふくみ</td><td className="px-4 py-3 text-gray-700">紬織</td><td className="px-4 py-3 text-gray-700">50万〜150万円</td><td className="px-4 py-3 text-gray-700">草木染めの第一人者</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">羽田登喜男</td><td className="px-4 py-3 text-gray-700">友禅</td><td className="px-4 py-3 text-gray-700">30万〜100万円</td><td className="px-4 py-3 text-gray-700">京友禅と加賀友禅の融合</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">平良敏子</td><td className="px-4 py-3 text-gray-700">芭蕉布</td><td className="px-4 py-3 text-gray-700">30万〜100万円</td><td className="px-4 py-3 text-gray-700">夏の最高級織物</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">芹沢けい介</td><td className="px-4 py-3 text-gray-700">型絵染</td><td className="px-4 py-3 text-gray-700">20万〜80万円</td><td className="px-4 py-3 text-gray-700">大胆な構図が特徴</td></tr>
              <tr className="bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">小宮康孝</td><td className="px-4 py-3 text-gray-700">江戸小紋</td><td className="px-4 py-3 text-gray-700">15万〜50万円</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">極微細な型染め</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">※ 相場は作品の状態・サイズ・希少性・証紙の有無により大きく変動します。</p>
      </div></section>

      <section id="identify" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />人間国宝の作品の見分け方</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">落款（らっかん）を確認する</h3><p className="text-sm leading-relaxed text-gray-700">人間国宝の作家は、作品に自分の落款（印章）を入れるのが一般的です。落款の位置は作家によって異なりますが、多くの場合、おくみや衿先などに朱色の印が押されています。作家ごとの落款のデザインは書籍やインターネットで確認できます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">証紙を確認する</h3><p className="text-sm leading-relaxed text-gray-700"><Link href="/articles/certificate-guide/" className="text-[#6b4c8a] hover:underline">証紙</Link>は産地や技法を証明する重要な書類です。人間国宝の作品には、作家名と「重要無形文化財保持者」の記載がある証紙が付属することがあります。証紙の有無で買取価格に数倍の差がつくこともあるため、必ず確認しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">共布（ともぬの）を確認する</h3><p className="text-sm leading-relaxed text-gray-700">共布とは、反物の端に付いている証明用の布です。作家名、技法名、産地名などが記されていることがあります。仕立て後に切り離されることもありますが、保管されていれば買取時に大きなプラス評価になります。</p></div>
        </div>
      </div></section>

      <section id="sell-tips" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />高額買取のポイント</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 証紙・落款・共布を揃える</h3><p className="text-sm leading-relaxed text-gray-700">人間国宝の作品は証紙の有無で買取価格に大きな差がつきます。購入時の箱や包み紙に証紙が入っていないか、たとう紙の中に共布がないか、徹底的に探しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 着物専門の査定員に依頼する</h3><p className="text-sm leading-relaxed text-gray-700">人間国宝の作品を適正に評価するには、高度な専門知識が必要です。総合リサイクルショップではなく、着物の専門知識を持つ査定員が在籍する<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">おすすめ買取業者</Link>に依頼しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 必ず複数社に査定を依頼する</h3><p className="text-sm leading-relaxed text-gray-700">人間国宝の作品は高額なため、業者間の査定額の差も大きくなります。最低でも3社以上に<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>を依頼し、最も高い金額を提示した業者に売却しましょう。</p></div>
        </div>
      </div></section>

      <section id="caution" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />注意点と偽物の見分け方</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>人間国宝の作品は高額であるため、残念ながら偽物や模倣品が市場に出回ることもあります。特に注意すべきポイントは以下の通りです。</p>
        </div>
        <div className="mt-4 space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#c9a76c] mb-2 text-base">偽物に注意すべきケース</h3><p className="text-sm leading-relaxed text-gray-700">フリマアプリやネットオークションで「人間国宝の作品」として出品されているものの中には、弟子の作品を師匠の作品として偽って販売しているケースや、全くの偽物が混ざっていることがあります。証紙や落款が本物かどうかの判別は素人には困難なため、信頼できる買取業者の査定を受けることが重要です。<Link href="/articles/trouble-prevention/" className="text-[#6b4c8a] hover:underline">トラブル防止</Link>も参考にしてください。</p></div>
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
          <Link href="/articles/certificate-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">証紙・証明書ガイド</h3><p className="text-xs text-gray-600">証紙の種類と見方を徹底解説。買取価格への影響も。</p></Link>
          <Link href="/articles/appraisal-criteria/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">査定基準ガイド</h3><p className="text-xs text-gray-600">着物の査定で見られるポイントを詳しく解説。</p></Link>
          <Link href="/articles/production-map/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の産地マップ</h3><p className="text-xs text-gray-600">全国の着物産地を地図で紹介。産地ごとの特徴と相場。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">人間国宝の作品は専門査定で最高値を</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">人間国宝の作品は一般の着物とは異なる査定が必要です。専門知識を持つ査定員が、作品の価値を最大限に評価します。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>

      <SoubaNote />
    </>
  );
}
