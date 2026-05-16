import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の虫干しの方法と時期｜正しいお手入れで価値を保つ",
  description:
    "着物の虫干し（陰干し）の正しいやり方と最適な時期を解説。年に何回行うべきか、湿度や天候の条件、虫干しに必要な道具、注意点まで詳しく紹介。虫干しをすることで着物の価値を保ち、高額買取につなげましょう。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/airing-guide/" },
  openGraph: { title: "着物の虫干しの方法と時期｜正しいお手入れで価値を保つ", description: "着物の虫干し方法と最適な時期を解説。カビ・虫食い予防のポイント。", url: "https://kimonokaitori-biyori.com/articles/airing-guide/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "虫干しは年に何回行えばいいですか？", answer: "理想的には年に3回、季節の変わり目に行うのがベストです。伝統的には「土用干し（7月下旬〜8月上旬）」「虫干し（10月〜11月）」「寒干し（1月〜2月）」の3回が推奨されます。最低でも年に1回は行いましょう。忙しい場合は、箪笥の引き出しを開けて風を通すだけでも効果があります。" },
  { question: "虫干しに適した天候の条件は？", answer: "晴天が2〜3日続いた後の、湿度の低い日が最適です。理想的な条件は湿度50%以下、気温15〜25度程度です。前日に雨が降った日は地面からの湿気が上がるため避けましょう。風通しは大切ですが、強風の日は着物が飛ばされるリスクがあるため注意が必要です。時間帯は午前10時〜午後3時頃が最適です。" },
  { question: "虫干しの際に直射日光に当てても大丈夫ですか？", answer: "いいえ、着物は直射日光に当ててはいけません。紫外線により色褪せが起こるためです。必ず日陰で陰干ししてください。室内で行う場合は、カーテンを閉めた部屋で窓を開けて風通しをよくします。衣紋掛けに掛けて吊るすか、畳紙から出して広げるだけでも効果があります。" },
  { question: "虫干しをしていない着物は買取価格が下がりますか？", answer: "虫干しをしていないこと自体が直接の減額理由にはなりませんが、虫干しを怠った結果としてカビ・虫食い・シミが発生した場合は大幅に査定額が下がります。定期的な虫干しをしている着物は状態が良好に保たれるため、結果として高い買取価格がつきやすいです。" },
  { question: "虫干しの代わりにクリーニングに出した方がいいですか？", answer: "虫干しとクリーニングは目的が異なります。虫干しは湿気を飛ばしてカビや虫害を予防するための日常的なお手入れです。クリーニングは汚れを落とすためのもので、頻繁に行うと生地を傷める可能性があります。日常のお手入れは虫干しで十分で、クリーニングは着用後の汚れがひどい場合や長期保管前に行うのが適切です。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", headline: "着物の虫干しの方法と時期｜正しいお手入れで価値を保つ", description: "着物の虫干し方法と最適な時期を解説。カビ・虫食い予防のポイント。", datePublished: "2026-05-17", dateModified: "2026-05-17", author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/airing-guide/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の虫干しの方法と時期", item: "https://kimonokaitori-biyori.com/articles/airing-guide/" }] };

export default function AiringGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の虫干しの方法と時期" }]} />

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物の虫干しの方法と時期</span><span className="block mt-2 text-lg md:text-2xl text-gray-700">正しいお手入れで価値を保つ</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物を長く美しい状態で保つために欠かせないのが「虫干し（むしぼし）」です。定期的に着物を風に当てることで、カビの発生や虫食いを防ぎ、着物の価値を維持できます。この記事では、虫干しの正しい方法、最適な時期と条件、必要な道具、注意点を詳しく解説します。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#why" className="text-[#6b4c8a] hover:underline">1. なぜ虫干しが必要なのか</a></li>
          <li><a href="#when" className="text-[#6b4c8a] hover:underline">2. 虫干しの最適な時期</a></li>
          <li><a href="#how" className="text-[#6b4c8a] hover:underline">3. 虫干しの正しい手順</a></li>
          <li><a href="#tools" className="text-[#6b4c8a] hover:underline">4. 虫干しに必要な道具</a></li>
          <li><a href="#indoor" className="text-[#6b4c8a] hover:underline">5. 室内でできる簡易虫干し</a></li>
          <li><a href="#check" className="text-[#6b4c8a] hover:underline">6. 虫干し時のチェックポイント</a></li>
          <li><a href="#value" className="text-[#6b4c8a] hover:underline">7. 虫干しと買取価格の関係</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="why" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />なぜ虫干しが必要なのか</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>着物は正絹（シルク）をはじめとする天然繊維で作られているため、湿気と虫害に弱い素材です。日本の高温多湿な気候は、カビや害虫にとって格好の環境です。箪笥の中に長期間しまったままにしておくと、知らないうちにカビが発生したり、虫食いの穴が開いたりすることがあります。</p>
          <p>虫干しとは、着物を箪笥から出して風を通すことで、溜まった湿気を飛ばし、カビの発生や虫害を予防するお手入れ方法です。同時に、着物の状態を点検する機会にもなります。シミや変色の早期発見にもつながるため、着物の資産価値を守る上で欠かせない習慣です。</p>
          <p>虫干しを怠ると、<Link href="/articles/mold-removal/" className="text-[#6b4c8a] hover:underline">カビの発生</Link>や虫食いにより着物の価値が大きく下がります。特に正絹の着物は一度カビが生えると完全な除去が困難で、買取価格にも大きく影響します。</p>
        </div>
      </div></section>

      <section id="when" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />虫干しの最適な時期</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#6b4c8a] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">時期</th>
              <th className="px-4 py-3 text-left font-semibold">名称</th>
              <th className="px-4 py-3 text-left font-semibold">目的</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">ポイント</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">7月下旬〜8月上旬</td><td className="px-4 py-3 text-gray-700">土用干し</td><td className="px-4 py-3 text-gray-700">梅雨で吸った湿気を飛ばす</td><td className="px-4 py-3 text-gray-700">梅雨明け後の晴天が2日続いた後</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">10月〜11月</td><td className="px-4 py-3 text-gray-700">虫干し</td><td className="px-4 py-3 text-gray-700">害虫の活動が収まる時期の点検</td><td className="px-4 py-3 text-gray-700">秋晴れの乾燥した日を選ぶ</td></tr>
              <tr className="bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">1月〜2月</td><td className="px-4 py-3 text-gray-700">寒干し</td><td className="px-4 py-3 text-gray-700">冬の乾燥を利用した湿気除去</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">空気が最も乾燥する時期</td></tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <section id="how" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />虫干しの正しい手順</h2>
        <div className="space-y-5">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順1：天気と湿度を確認する</h3><p className="text-sm leading-relaxed text-gray-700">虫干しは晴天が2〜3日続いた後の乾燥した日に行います。湿度計があれば50%以下を目安にします。天気予報で午後から雨の予報が出ている日は避けましょう。時間帯は午前10時〜午後3時が最適です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順2：着物を箪笥から出す</h3><p className="text-sm leading-relaxed text-gray-700">たとう紙ごと着物を箪笥から出します。この時、箪笥の引き出しも開けて内部の湿気を飛ばしましょう。たとう紙は着物と別に広げて乾燥させます。湿気を吸って変色しているたとう紙は新しいものに交換しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順3：衣紋掛けに掛けて陰干しする</h3><p className="text-sm leading-relaxed text-gray-700">着物用の衣紋掛け（着物ハンガー）に着物を掛け、日陰の風通しの良い場所で2〜4時間干します。直射日光は絶対に避けてください。色褪せの原因になります。室内で行う場合は、カーテン越しの窓際で窓を開けて風を通します。帯も同様に干しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順4：状態をチェックする</h3><p className="text-sm leading-relaxed text-gray-700">干している間に着物の状態を丁寧にチェックします。シミ・汚れ・カビ・虫食い・色褪せがないか確認しましょう。裏地（八掛）の状態も忘れずに。問題を発見した場合は<Link href="/articles/stain-removal-cost/" className="text-[#6b4c8a] hover:underline">染み抜き</Link>や<Link href="/articles/mold-removal/" className="text-[#6b4c8a] hover:underline">カビ取り</Link>の対処を検討します。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順5：新しいたとう紙で包んで収納する</h3><p className="text-sm leading-relaxed text-gray-700">十分に乾燥させたら、新しいたとう紙（または状態の良いたとう紙）に包んで箪笥に戻します。防虫剤や防湿剤も一緒に入れ直しましょう。防虫剤は直接着物に触れない位置に置くこと。異なる種類の防虫剤を混ぜると化学反応を起こすことがあるため、1種類に統一します。</p></div>
        </div>
      </div></section>

      <section id="tools" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />虫干しに必要な道具</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">必須の道具</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>衣紋掛け（着物ハンガー）：</strong>着物の幅に合った専用ハンガー。1,000円〜3,000円程度</li>
              <li><strong>たとう紙：</strong>着物を包む和紙。1枚300円〜500円</li>
              <li><strong>防虫剤：</strong>着物用の防虫剤。無臭タイプが主流</li>
              <li><strong>防湿剤：</strong>シリカゲルなどの除湿剤</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#c9a76c] mb-3 text-base">あると便利な道具</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>着物用ブラシ：</strong>ホコリや汚れを払う柔らかいブラシ</li>
              <li><strong>湿度計：</strong>保管場所や干す日の湿度確認用</li>
              <li><strong>着物用スプレー：</strong>防カビ・防虫効果のある着物用スプレー</li>
              <li><strong>白手袋：</strong>着物に手の皮脂を付けないため</li>
            </ul>
          </div>
        </div>
      </div></section>

      <section id="indoor" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />室内でできる簡易虫干し</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>マンション住まいや天候に恵まれない場合は、室内でも簡易的な虫干しが可能です。方法は以下の通りです。</p>
        </div>
        <div className="mt-4 space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">方法1：箪笥の引き出しを開ける</h3><p className="text-sm leading-relaxed text-gray-700">最も手軽な方法です。晴れた日にエアコンの除湿モードを使いながら、箪笥の引き出しを数時間開けておくだけでも湿気を逃がす効果があります。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">方法2：たとう紙を開いて風を通す</h3><p className="text-sm leading-relaxed text-gray-700">着物をたとう紙ごと取り出し、たとう紙を開いた状態で畳の上やベッドの上に広げます。窓を開けて換気しながら2〜3時間置くだけでも効果的です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">方法3：除湿機を活用する</h3><p className="text-sm leading-relaxed text-gray-700">着物を広げた部屋で除湿機を運転させると、効果的に湿気を除去できます。エアコンのドライモードでも代用可能です。2〜3時間程度運転すれば十分です。</p></div>
        </div>
      </div></section>

      <section id="check" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />虫干し時のチェックポイント</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">カビのチェック</h3><p className="text-sm leading-relaxed text-gray-700">白い粉状のもの、黄色や茶色の斑点がないか確認します。特に衿（えり）周り、脇、裾は湿気がこもりやすくカビが発生しやすい部位です。カビの臭いがする場合も要注意です。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">虫食いのチェック</h3><p className="text-sm leading-relaxed text-gray-700">小さな穴が開いていないか、特に正絹の着物は念入りに確認します。虫の糞（小さな黒い粒）が見つかった場合は、虫食いが進行している可能性があります。防虫剤の効果が切れていないかも確認しましょう。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">シミ・変色のチェック</h3><p className="text-sm leading-relaxed text-gray-700">以前はなかったシミや変色がないか確認します。汗ジミや飲食物のシミは、時間が経つと酸化して黄色く変色することがあります。早めの<Link href="/articles/stain-removal-cost/" className="text-[#6b4c8a] hover:underline">染み抜き</Link>で対処できるケースもあります。</p></div>
        </div>
      </div></section>

      <section id="value" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />虫干しと買取価格の関係</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>定期的な虫干しをしている着物は、カビ・虫食い・シミの発生が抑えられ、状態が良好に保たれます。着物の買取において最も重要な査定ポイントの一つが「状態」です。同じ種類・素材の着物でも、状態の良いものと悪いものでは買取価格に数倍の差がつくことがあります。</p>
          <p>虫干しは着物の価値を守るための投資と考えましょう。ただし、もう着る予定がなく、いずれ売却を考えているのであれば、保管にコストと手間をかけ続けるよりも、状態の良いうちに<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>を受けて売却するのも賢い選択です。</p>
          <p>特に、虫干しをしていたつもりでもカビやシミが発見された場合は、これ以上の劣化を防ぐためにも早めの売却を検討してください。<Link href="/articles/sell-high-tips/" className="text-[#6b4c8a] hover:underline">高く売るコツ</Link>を実践すれば、少しでも高い査定額を引き出せます。</p>
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
          <Link href="/articles/mold-removal/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物のカビ取り方法</h3><p className="text-xs text-gray-600">カビが生えてしまった場合の対処法と費用。</p></Link>
          <Link href="/articles/storage-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の保管方法ガイド</h3><p className="text-xs text-gray-600">桐箪笥・たとう紙・防虫剤の正しい使い方。</p></Link>
          <Link href="/articles/cleaning-before-selling/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">クリーニングしてから売るべき？</h3><p className="text-xs text-gray-600">売却前のクリーニングの必要性を徹底解説。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">虫干しが面倒なら、売却も一つの選択肢</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">着物の保管・お手入れに手間を感じているなら、状態の良いうちに売却するのも賢い選択。無料査定で現在の価値を確認してみませんか。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
