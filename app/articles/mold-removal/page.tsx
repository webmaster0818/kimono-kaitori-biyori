import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物のカビ取り方法｜自宅でできる応急処置と専門店の費用",
  description:
    "着物にカビが生えてしまった場合の対処法を徹底解説。自宅でできる応急処置の方法、専門店（悉皆）に依頼した場合の費用相場、カビの予防策、カビがある着物の買取可否まで詳しく紹介します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/mold-removal/" },
  openGraph: { title: "着物のカビ取り方法｜自宅でできる応急処置と専門店の費用", description: "着物のカビ取り方法と費用を解説。カビ着物の買取可否も。", url: "https://kimonokaitori-biyori.com/articles/mold-removal/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物に白カビが生えた場合、自宅で対処できますか？", answer: "白カビ（初期段階）であれば、自宅での応急処置が可能です。まず着物を風通しの良い日陰に広げ、十分に乾燥させます。その後、柔らかいブラシ（着物用ブラシが理想）でカビを表面から優しく払い落とします。ただし、カビの根は残っている可能性が高いため、応急処置後はできるだけ早く専門店に持ち込むことをおすすめします。" },
  { question: "カビ取りの専門店での費用はいくらですか？", answer: "専門店でのカビ取り費用は、カビの程度と着物の状態によって異なります。軽度の白カビ（表面のみ）であれば5,000円〜1万円程度、中程度のカビ（生地に浸透）で1万円〜2万円程度、重度のカビ（変色・黒カビ）で2万円〜5万円以上かかることがあります。洗い張り（着物を解いて洗う）まで必要な場合は3万円〜8万円程度です。" },
  { question: "黒カビが生えた着物は買取してもらえますか？", answer: "黒カビが広範囲に発生している着物の買取は難しい場合が多いです。ただし、大島紬や結城紬などの高級品、人間国宝の作品など希少性の高い着物であれば、カビがあっても値段がつくことがあります。まずは複数の買取業者に査定を依頼して、現在の価値を確認することをおすすめします。" },
  { question: "カビの予防にはどうすればいいですか？", answer: "カビ予防のポイントは湿度管理です。桐箪笥での保管が理想的で、たとう紙で包み、定期的に交換します。年に2〜3回の虫干し（陰干し）を行い、防湿剤や防カビ剤を適切に使用します。除湿機やシリカゲルで保管場所の湿度を60%以下に保つことが重要です。押し入れの中にスノコを敷いて通気性を確保するのも効果的です。" },
  { question: "カビ取りしてから売るのと、そのまま売るのではどちらが得ですか？", answer: "多くの場合、カビ取りの費用（数千円〜数万円）を差し引いても買取価格のアップ分の方が大きいかどうかは微妙です。軽度のカビなら自宅で応急処置してから売るのが無難です。重度のカビの場合は、カビ取りに高額な費用がかかるため、そのまま査定に出して買取業者に判断を仰ぐのがおすすめです。業者によっては自社でクリーニングできるため、カビありでも買取してくれます。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png", headline: "着物のカビ取り方法｜自宅でできる応急処置と専門店の費用", description: "着物のカビ取り方法と費用を解説。カビ着物の買取可否も。", datePublished: "2026-05-17", dateModified: "2026-05-17", author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/mold-removal/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物のカビ取り方法", item: "https://kimonokaitori-biyori.com/articles/mold-removal/" }] };

export default function MoldRemovalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物のカビ取り方法" }]} />

      <SoubaNote />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4"><div className="text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-gradient">着物のカビ取り方法</span>
            <span className="block mt-2 text-lg md:text-2xl text-gray-700">自宅でできる応急処置と専門店の費用</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            久しぶりに箪笥を開けたら着物にカビが生えていた...。そんな経験をお持ちの方は少なくありません。この記事では、カビの種類別の対処法、自宅でできる応急処置、専門店に依頼した場合の費用、そしてカビ予防の方法まで詳しく解説します。
          </p>
          <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
        </div></div>
      </section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#types" className="text-[#6b4c8a] hover:underline">1. カビの種類と危険度</a></li>
          <li><a href="#home" className="text-[#6b4c8a] hover:underline">2. 自宅でできる応急処置</a></li>
          <li><a href="#pro" className="text-[#6b4c8a] hover:underline">3. 専門店でのカビ取り費用</a></li>
          <li><a href="#ng" className="text-[#6b4c8a] hover:underline">4. やってはいけないNG対処法</a></li>
          <li><a href="#prevention" className="text-[#6b4c8a] hover:underline">5. カビを防ぐ保管方法</a></li>
          <li><a href="#sell" className="text-[#6b4c8a] hover:underline">6. カビが生えた着物の買取について</a></li>
          <li><a href="#judge" className="text-[#6b4c8a] hover:underline">7. カビ取りして売るか、そのまま売るか</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="types" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />カビの種類と危険度</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">白カビ（初期段階）</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の表面に白い粉状のものが付着している状態です。カビの初期段階で、比較的対処しやすいです。放置すると生地の奥まで浸透し、除去が困難になります。発見したらすぐに対処しましょう。自宅での応急処置も可能ですが、根の除去は専門店に依頼するのが確実です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">黄カビ・茶カビ（中期段階）</h3>
              <p className="text-sm leading-relaxed text-gray-700">白カビが進行し、黄色や茶色の斑点（シミ）として定着した状態です。この段階になると自宅での除去は困難で、専門店での処理が必要です。洗い張りや染み抜きの技術を持つ悉皆（しっかい）店に相談しましょう。費用は1万円〜3万円程度かかりますが、生地へのダメージが少なければ回復の可能性があります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-gray-600 mb-2 text-base">黒カビ（重度）</h3>
              <p className="text-sm leading-relaxed text-gray-700">黒い斑点が広がった状態で、最も除去が困難です。生地の繊維自体が侵されている可能性が高く、専門店でも完全に除去できないケースがあります。処理費用は2万円〜5万円以上と高額になり、高級着物でなければ費用対効果が悪い場合もあります。この状態の着物の買取は難しいことが多いですが、<Link href="/articles/old-stained-kimono/" className="text-[#6b4c8a] hover:underline">古くてシミのある着物の買取</Link>に対応する業者もあります。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="home" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />自宅でできる応急処置</h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順1：風通しの良い場所で乾燥させる</h3>
              <p className="text-sm leading-relaxed text-gray-700">カビが生えた着物を箪笥から取り出し、直射日光の当たらない風通しの良い場所に広げます。衣紋掛け（着物ハンガー）に掛けるのが理想です。最低でも半日〜1日は乾燥させましょう。湿気がカビの原因なので、まず乾燥させることが最も重要です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順2：カビを払い落とす</h3>
              <p className="text-sm leading-relaxed text-gray-700">十分に乾燥させたら、着物用の柔らかいブラシ（なければ柔らかい歯ブラシ）で、カビを優しく払い落とします。この作業は必ず屋外で行い、カビの胞子を室内に飛散させないようにしましょう。マスクの着用も推奨します。強くこすると生地を傷めるので、あくまで軽く払うように動かします。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順3：乾いた布で拭き取る</h3>
              <p className="text-sm leading-relaxed text-gray-700">ブラシで落としきれないカビは、乾いた柔らかい布で軽く拭き取ります。消毒用エタノールを少量含ませた布で拭くとカビの殺菌効果がありますが、色落ちの可能性があるため、目立たない場所で試してから行ってください。絶対に水で濡らした布は使わないでください。水分はカビの繁殖を促進します。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">手順4：新しいたとう紙で保管する</h3>
              <p className="text-sm leading-relaxed text-gray-700">応急処置後は、古いたとう紙（カビの胞子が付着している可能性あり）は処分し、新しいたとう紙に包んで保管します。防カビ剤を一緒に入れておくと再発防止になります。ただし、これはあくまで応急処置であり、カビの根は残っている可能性が高いです。売却予定がある場合は早めに査定に出すことをおすすめします。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pro" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />専門店でのカビ取り費用</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-[#6b4c8a] text-white">
                <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">カビの程度</th>
                <th className="px-4 py-3 text-left font-semibold">処理内容</th>
                <th className="px-4 py-3 text-left font-semibold">費用目安</th>
                <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">期間</th>
              </tr></thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">軽度（白カビ）</td><td className="px-4 py-3 text-gray-700">ドライクリーニング＋カビ除去</td><td className="px-4 py-3 text-gray-700">5,000円〜1万円</td><td className="px-4 py-3 text-gray-700">1〜2週間</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">中度（黄カビ）</td><td className="px-4 py-3 text-gray-700">丸洗い＋染み抜き＋カビ除去</td><td className="px-4 py-3 text-gray-700">1万〜2万円</td><td className="px-4 py-3 text-gray-700">2〜3週間</td></tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">重度（黒カビ）</td><td className="px-4 py-3 text-gray-700">洗い張り＋染み抜き＋カビ除去</td><td className="px-4 py-3 text-gray-700">2万〜5万円</td><td className="px-4 py-3 text-gray-700">3〜6週間</td></tr>
                <tr className="bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">最重度</td><td className="px-4 py-3 text-gray-700">洗い張り＋仕立て直し</td><td className="px-4 py-3 text-gray-700">5万〜10万円</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">1〜2か月</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="ng" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />やってはいけないNG対処法</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">NG1：水で洗う</h3>
              <p className="text-sm leading-relaxed text-gray-700">正絹の着物を水で洗うと、生地が縮み、風合いが損なわれ、取り返しのつかないダメージになります。カビが生えたからといって自宅で水洗いは絶対にしないでください。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">NG2：漂白剤を使う</h3>
              <p className="text-sm leading-relaxed text-gray-700">漂白剤は着物の染色を脱色させ、生地の繊維を傷めます。市販のカビ取り剤（カビキラーなど）も着物には絶対に使用しないでください。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">NG3：直射日光に当てて干す</h3>
              <p className="text-sm leading-relaxed text-gray-700">カビを乾燥させるために天日干しをする方がいますが、直射日光は着物の色褪せの原因になります。必ず日陰の風通しの良い場所で陰干ししてください。<Link href="/articles/airing-guide/" className="text-[#6b4c8a] hover:underline">虫干しの正しい方法</Link>も参考にしてください。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">NG4：アイロンで熱処理する</h3>
              <p className="text-sm leading-relaxed text-gray-700">熱でカビを殺菌しようとアイロンを当てるのは逆効果です。正絹の着物はアイロンの熱で光沢が失われたり、テカリが出たりします。また、カビの色素が熱で定着し、余計に取れにくくなることがあります。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="prevention" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />カビを防ぐ保管方法</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">湿度管理が最重要</h3>
              <p className="text-sm leading-relaxed text-gray-700">カビが発生する条件は、湿度65%以上・温度20〜30度・栄養分（汚れ・皮脂など）の3つが揃った時です。このうち最もコントロールしやすいのが湿度です。保管場所の湿度を60%以下に保つことで、カビの発生リスクを大幅に下げられます。除湿剤の定期的な交換、除湿機の使用が効果的です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">定期的な虫干し</h3>
              <p className="text-sm leading-relaxed text-gray-700">年に2〜3回の<Link href="/articles/airing-guide/" className="text-[#6b4c8a] hover:underline">虫干し</Link>を行いましょう。着物を箪笥から出して風を通すことで、湿気を逃がし、カビの予防になります。虫干しの際にカビの早期発見もできるため、一石二鳥です。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">桐箪笥での保管</h3>
              <p className="text-sm leading-relaxed text-gray-700">桐箪笥は湿度を自動的に調節する機能があり、着物の保管に最適です。桐材は湿度が高いと膨張して外気を遮断し、湿度が低いと収縮して通気を確保します。桐箪笥がない場合は、プラスチックケースにスノコと除湿剤を入れて代用できます。<Link href="/articles/storage-guide/" className="text-[#6b4c8a] hover:underline">保管方法の詳細</Link>はこちらをご覧ください。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sell" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />カビが生えた着物の買取について</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>カビが生えた着物でも、買取してもらえるケースは少なくありません。大手の買取業者は自社でクリーニングや修復のネットワークを持っているため、軽度〜中度のカビであれば問題なく買取対象となります。</p>
            <p>ただし、カビの程度によっては査定額が下がることがあります。白カビの場合は査定額への影響は軽微ですが、黒カビが広範囲に広がっている場合は買取不可になることもあります。</p>
            <p>カビがある着物の売却を検討している場合は、<Link href="/articles/old-stained-kimono/" className="text-[#6b4c8a] hover:underline">シミ・汚れのある着物の買取</Link>に強い業者を選ぶことが重要です。<Link href="/ranking/" className="text-[#6b4c8a] hover:underline">おすすめ買取業者</Link>なら、カビの状態も含めて適正に評価してくれます。</p>
          </div>
        </div>
      </section>

      <section id="judge" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />カビ取りして売るか、そのまま売るか</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">カビ取りしてから売る方がよいケース</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>軽度の白カビで自宅対処できる場合</li>
                <li>高額な着物（作家物・伝統工芸品）</li>
                <li>カビ取り費用が数千円程度で済む場合</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#c9a76c] mb-2 text-base">そのまま売る方がよいケース</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>カビ取り費用が高額（2万円以上）になる場合</li>
                <li>一般的な着物で買取相場が低い場合</li>
                <li>黒カビで完全除去が見込めない場合</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">迷ったらまず無料査定を：</strong><Link href="/articles/cleaning-before-selling/" className="text-[#6b4c8a] hover:underline">クリーニングしてから売るべきか</Link>で悩む方は多いですが、まず買取業者の無料査定でカビの状態を見てもらい、プロの意見を聞くのが最善の方法です。</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4"><span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/articles/airing-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">虫干しの方法と時期</h3><p className="text-xs text-gray-600">カビ予防に効果的な虫干しの正しい方法を解説。</p></Link>
            <Link href="/articles/storage-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物の保管方法ガイド</h3><p className="text-xs text-gray-600">桐箪笥・たとう紙・防虫剤の正しい使い方。</p></Link>
            <Link href="/articles/stain-removal-cost/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">染み抜き費用と方法</h3><p className="text-xs text-gray-600">着物の染み抜き費用相場と売る前にやるべきか。</p></Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">カビがあっても査定は無料です</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">カビの状態もプロの査定員が適正に評価。カビ取りの判断に迷ったら、まず無料査定でご相談ください。</p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
