import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物の仕立て直し費用と期間｜サイズ直しで価値は上がる？",
  description:
    "着物の仕立て直し（サイズ直し・洗い張り・裏地交換など）の費用と期間を作業内容別に解説。売却前に仕立て直しをすべきかの判断基準や、仕立て直しで価値が上がるケースと上がらないケースも紹介します。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/alteration-cost/" },
  openGraph: { title: "着物の仕立て直し費用と期間｜サイズ直しで価値は上がる？", description: "着物の仕立て直し費用・期間・売却前の判断基準を解説。", url: "https://kimonokaitori-biyori.com/articles/alteration-cost/", siteName: "着物の買取びより", type: "article", locale: "ja_JP" },
};

const faqs = [
  { question: "着物の仕立て直しにはどのくらいの期間がかかりますか？", answer: "作業内容によって異なりますが、身丈直しなど部分的な寸法直しで2〜4週間、洗い張り＋仕立て直し（全面的なリメイク）で1〜2か月程度です。繁忙期（成人式・卒業式シーズン前）は通常より時間がかかることがあります。急ぎの場合は割増料金が発生する店もありますので、事前に確認しましょう。" },
  { question: "着物のサイズが合わない場合、仕立て直しで調整できますか？", answer: "はい、多くの場合サイズ調整は可能です。身丈・裄丈・身幅いずれも直せます。ただし、生地の余り（縫い代）がどれだけあるかによって調整範囲が変わります。縫い代が十分にあれば大きくすることもできますが、縫い代が少ないと限界があります。一般的に、身丈は最大5〜10cm、裄丈は最大3〜5cmの調整が可能です。" },
  { question: "仕立て直しをすれば着物の買取価格は上がりますか？", answer: "必ずしも上がるわけではありません。仕立て直しの費用が3万円で、買取価格が5万円アップするなら得ですが、一般的な着物では仕立て直し費用を回収できないケースが多いです。買取業者は自社のネットワークで安価に仕立て直しができるため、お客様が事前に仕立て直す必要は通常ありません。高額な作家物で、サイズが極端に小さい場合のみ検討の余地があります。" },
  { question: "洗い張りとは何ですか？", answer: "洗い張りとは、着物の仕立てを全て解き、反物の状態に戻してから水洗いする技法です。着物全体の汚れを落とし、生地をリフレッシュさせることができます。洗い張り後は再度仕立て直す必要があるため、洗い張り代と仕立て代の両方がかかります。費用は洗い張りだけで1万〜2万円、仕立て直しを含めると3万〜8万円程度です。" },
  { question: "母や祖母の着物を自分のサイズに仕立て直すことはできますか？", answer: "はい、可能です。ただし、元の着物のサイズと自分のサイズの差が大きいと、縫い代が足りずに調整しきれないことがあります。特に身長差が10cm以上ある場合は、身丈の調整が難しいケースがあります。仕立て直し費用と買い替え費用を比較し、費用対効果を検討しましょう。使わない場合は、思い切って買取に出す方が合理的なケースも多いです。" },
];

const articleStructuredData = { "@context": "https://schema.org", "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png", headline: "着物の仕立て直し費用と期間｜サイズ直しで価値は上がる？", description: "着物の仕立て直し費用・期間・売却前の判断基準を解説。", datePublished: "2026-05-17", dateModified: "2026-05-17", author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" }, publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/alteration-cost/" } };
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" }, { "@type": "ListItem", position: 3, name: "着物の仕立て直し費用と期間", item: "https://kimonokaitori-biyori.com/articles/alteration-cost/" }] };

export default function AlterationCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の仕立て直し費用と期間" }]} />

      <SoubaNote />

      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/alteration-cost.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}><div className="max-w-4xl mx-auto px-4"><div className="text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">Know型ガイド</span>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-gradient">着物の仕立て直し費用と期間</span><span className="block mt-2 text-lg md:text-2xl text-gray-700">サイズ直しで価値は上がる？</span></h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">母や祖母から譲り受けた着物、サイズが合わなくなった着物。仕立て直しをすれば再び着ることができますが、費用と期間はどれくらいかかるのか。そして、売却前に仕立て直しをすれば価値は上がるのか。この記事では、仕立て直しのあらゆる疑問にお答えします。</p>
        <p className="mt-3 text-xs text-gray-400">最終更新：2026年5月17日</p>
      </div></div></section>

      <section className="py-10"><div className="max-w-4xl mx-auto px-4"><div className="card">
        <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次</h2>
        <nav><ol className="space-y-2 text-sm">
          <li><a href="#what-is" className="text-[#6b4c8a] hover:underline">1. 仕立て直しとは</a></li>
          <li><a href="#types" className="text-[#6b4c8a] hover:underline">2. 仕立て直しの種類</a></li>
          <li><a href="#cost-table" className="text-[#6b4c8a] hover:underline">3. 作業内容別の費用と期間</a></li>
          <li><a href="#size" className="text-[#6b4c8a] hover:underline">4. サイズ直しの調整範囲</a></li>
          <li><a href="#araibari" className="text-[#6b4c8a] hover:underline">5. 洗い張りの特徴と費用</a></li>
          <li><a href="#before-sell" className="text-[#6b4c8a] hover:underline">6. 売る前に仕立て直しすべきか</a></li>
          <li><a href="#inherit" className="text-[#6b4c8a] hover:underline">7. 譲り受けた着物の活用法</a></li>
          <li><a href="#faq" className="text-[#6b4c8a] hover:underline">8. よくある質問</a></li>
        </ol></nav>
      </div></div></section>

      <section id="what-is" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />仕立て直しとは</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>着物の仕立て直しとは、既に仕立てられた着物のサイズを変更したり、傷んだ部分を修繕したりする作業です。着物は洋服と異なり、直線的な裁断で仕立てられているため、縫い代（ぬいしろ）を利用してサイズの調整が可能です。</p>
          <p>仕立て直しには、部分的な寸法直し（身丈直し・裄直し・身幅直しなど）と、全面的な仕立て直し（洗い張り後に最初から仕立て直す）があります。作業の規模によって費用と期間が大きく異なります。</p>
          <p>仕立て直しは専門の和裁士（わさいし）が行います。近年は和裁士の数が減少しているため、信頼できる仕立て職人を見つけることが重要です。<Link href="/articles/size-and-price/" className="text-[#6b4c8a] hover:underline">着物のサイズと買取価格の関係</Link>も参考にしてください。</p>
        </div>
      </div></section>

      <section id="types" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />仕立て直しの種類</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">部分的な寸法直し</h3><p className="text-sm leading-relaxed text-gray-700">身丈（身長に合わせた丈）、裄丈（腕の長さ）、身幅（胴回り）など、特定の寸法だけを変更する方法です。着物を全部解く必要がなく、費用も比較的安価で期間も短いのが特徴です。ただし、調整範囲は縫い代の量に依存します。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">全面的な仕立て直し（解き洗い＋仕立て）</h3><p className="text-sm leading-relaxed text-gray-700">着物の縫い目をすべて解き、反物の状態に戻してから水洗い（洗い張り）を行い、一から仕立て直す方法です。生地がリフレッシュされ、サイズも自由に変更できます。費用は高額ですが、古い着物を新品同様に蘇らせることができます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">裏地の交換</h3><p className="text-sm leading-relaxed text-gray-700"><Link href="/articles/lining-guide/" className="text-[#6b4c8a] hover:underline">八掛（はっかけ）や胴裏（どううら）</Link>が傷んでいる場合、裏地だけを交換することができます。表地はそのままで裏地を新しくするため、比較的短期間・低費用で着物をリフレッシュできます。</p></div>
        </div>
      </div></section>

      <section id="cost-table" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />作業内容別の費用と期間</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#6b4c8a] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">作業内容</th>
              <th className="px-4 py-3 text-left font-semibold">費用目安</th>
              <th className="px-4 py-3 text-left font-semibold">期間</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">身丈直し</td><td className="px-4 py-3 text-gray-700">8,000円〜1.5万円</td><td className="px-4 py-3 text-gray-700">2〜3週間</td><td className="px-4 py-3 text-gray-700">縫い代の範囲で調整</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">裄直し</td><td className="px-4 py-3 text-gray-700">5,000円〜1万円</td><td className="px-4 py-3 text-gray-700">1〜2週間</td><td className="px-4 py-3 text-gray-700">袖幅と肩幅を調整</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">身幅直し</td><td className="px-4 py-3 text-gray-700">8,000円〜2万円</td><td className="px-4 py-3 text-gray-700">2〜3週間</td><td className="px-4 py-3 text-gray-700">前幅・後幅を調整</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">八掛替え</td><td className="px-4 py-3 text-gray-700">2万〜4万円</td><td className="px-4 py-3 text-gray-700">2〜4週間</td><td className="px-4 py-3 text-gray-700">八掛素材代込み</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">洗い張り</td><td className="px-4 py-3 text-gray-700">1万〜2万円</td><td className="px-4 py-3 text-gray-700">2〜3週間</td><td className="px-4 py-3 text-gray-700">解き・洗い・湯のし</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">仕立て直し（全面）</td><td className="px-4 py-3 text-gray-700">2万〜5万円</td><td className="px-4 py-3 text-gray-700">3〜6週間</td><td className="px-4 py-3 text-gray-700">手縫いかミシン縫いで異なる</td></tr>
              <tr className="bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">洗い張り＋仕立て直し</td><td className="px-4 py-3 text-gray-700">3万〜8万円</td><td className="px-4 py-3 text-gray-700">1〜2か月</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">フルリメイク</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">※ 費用は店舗・着物の種類・作業の複雑さにより変動します。必ず事前に見積もりを取りましょう。</p>
      </div></section>

      <section id="size" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />サイズ直しの調整範囲</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-[#c9a76c] text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">寸法</th>
              <th className="px-4 py-3 text-left font-semibold">大きくする場合</th>
              <th className="px-4 py-3 text-left font-semibold">小さくする場合</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">注意点</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">身丈</td><td className="px-4 py-3 text-gray-700">+5〜10cm（内揚げの量による）</td><td className="px-4 py-3 text-gray-700">-10cm以上も可能</td><td className="px-4 py-3 text-gray-700">内揚げ（おはしょりの中の縫い込み）がなければ大きくできない</td></tr>
              <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white"><td className="px-4 py-3 font-semibold text-[#6b4c8a]">裄丈</td><td className="px-4 py-3 text-gray-700">+2〜5cm（縫い代による）</td><td className="px-4 py-3 text-gray-700">-5cm以上も可能</td><td className="px-4 py-3 text-gray-700">袖幅と肩幅の両方を調整する場合が多い</td></tr>
              <tr className="bg-white hover:bg-[#faf8f5]"><td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">身幅</td><td className="px-4 py-3 text-gray-700">+3〜5cm（縫い代による）</td><td className="px-4 py-3 text-gray-700">-5cm以上も可能</td><td className="px-4 py-3 text-gray-700 rounded-br-lg">前幅と後幅のバランスに注意</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">重要ポイント：</strong>着物のサイズは買取価格に大きく影響します。現代の標準サイズ（身丈160cm前後、裄丈67cm前後）に近い着物ほど需要が高く、買取価格も高くなります。小さすぎる着物は着用できる人が限られるため、査定でマイナスになることがあります。<Link href="/articles/size-and-price/" className="text-[#6b4c8a] hover:underline">サイズと買取価格の関係</Link>も参考にしてください。</p>
        </div>
      </div></section>

      <section id="araibari" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />洗い張りの特徴と費用</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>洗い張り（あらいはり）は、着物のお手入れの中で最も本格的な方法です。着物の縫い目をすべて解いて反物の状態に戻し、水と石鹸で全体を洗います。洗浄後は「湯のし」（蒸気を当てて生地を伸ばす）を行い、反物の幅を整えます。</p>
          <p>洗い張りを行うと、長年の汚れや臭いが落ち、生地がリフレッシュされて光沢が蘇ります。染め直しと組み合わせれば、古い着物を全く新しい印象に生まれ変わらせることもできます。</p>
          <p>ただし、洗い張りの後は必ず仕立て直しが必要になるため、洗い張り代（1万〜2万円）に加えて仕立て代（2万〜5万円）がかかります。合計で3万〜8万円の出費になるため、費用対効果を慎重に検討する必要があります。</p>
        </div>
      </div></section>

      <section id="before-sell" className="py-10"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />売る前に仕立て直しすべきか</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">仕立て直しが有利なケース</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>高額な作家物・伝統工芸品で、サイズが極端に小さい場合</li>
              <li>サイズ直しにより大幅な査定アップが見込める場合</li>
              <li>売却ではなく自分で着る予定がある場合</li>
            </ul>
          </div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#c9a76c] mb-2 text-base">そのまま売る方が有利なケース（大半）</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>一般的な着物で買取相場が数千円〜数万円程度</li>
              <li>仕立て直し費用が買取価格に近い、または超える場合</li>
              <li>買取業者が自社で仕立て直しできる場合（大手業者は対応可能）</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
          <p className="text-sm leading-relaxed"><strong className="text-[#6b4c8a]">結論：</strong>ほとんどの場合、売却前の仕立て直しは不要です。大手の買取業者は自社のネットワークで安価に仕立て直しができるため、お客様が高額な仕立て直し費用を負担する必要はありません。まずは現状のまま<Link href="/articles/free-appraisal/" className="text-[#6b4c8a] hover:underline">無料査定</Link>を受けて、現在の価値を確認しましょう。</p>
        </div>
      </div></section>

      <section id="inherit" className="py-10 section-light"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2"><span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />譲り受けた着物の活用法</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">選択肢1：仕立て直して自分で着る</h3><p className="text-sm leading-relaxed text-gray-700">母や祖母の着物に思い入れがあり、自分で着たい場合は仕立て直しが最適です。サイズを自分に合わせ、傷んだ裏地を交換すれば、新品同様に蘇ります。<Link href="/articles/mother-kimono/" className="text-[#6b4c8a] hover:underline">母親の着物の活用法</Link>も参考にしてください。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">選択肢2：買取に出す</h3><p className="text-sm leading-relaxed text-gray-700">着る予定がない場合は、仕立て直しをせずにそのまま買取に出すのが最も経済的です。<Link href="/articles/estate-kimono/" className="text-[#6b4c8a] hover:underline">遺品整理での着物買取</Link>にも対応している業者であれば、大量の着物もまとめて引き取ってくれます。</p></div>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5"><h3 className="font-bold text-[#6b4c8a] mb-2 text-base">選択肢3：リメイクする</h3><p className="text-sm leading-relaxed text-gray-700">着物としては着ないが手放したくない場合は、<Link href="/articles/remake/" className="text-[#6b4c8a] hover:underline">着物リメイク</Link>という選択肢もあります。バッグ、ストール、クッションカバーなど、日常使いできるアイテムに生まれ変わらせることができます。</p></div>
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
          <Link href="/articles/size-and-price/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">サイズと買取価格の関係</h3><p className="text-xs text-gray-600">身丈・裄丈が査定額に与える影響を解説。</p></Link>
          <Link href="/articles/lining-guide/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">裏地（八掛・胴裏）ガイド</h3><p className="text-xs text-gray-600">裏地の素材と査定への影響を解説。</p></Link>
          <Link href="/articles/mother-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block"><h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">母親の着物の活用法</h3><p className="text-xs text-gray-600">譲り受けた着物の仕立て直し・売却・リメイク。</p></Link>
        </div>
      </div></section>

      <section className="py-12 md:py-16 section-primary-light"><div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">仕立て直し不要、そのままの状態で査定OK</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">サイズが合わない着物も、裏地が傷んだ着物も、そのままの状態で無料査定が可能です。まずは現在の価値を確認してみましょう。</p>
        <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
      </div></section>
    </>
  );
}
