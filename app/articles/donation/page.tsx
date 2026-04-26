import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の寄付ができる場所一覧｜売れない着物の活用法",
  description:
    "着物を寄付できる団体・施設の一覧と寄付の方法を紹介。売れない着物の有効活用法として、NPO・福祉施設・海外支援への寄付方法や注意点を詳しく解説します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/donation/",
  },
  openGraph: {
    title: "着物の寄付ができる場所一覧｜売れない着物の活用法",
    description: "着物を寄付できる団体・施設の一覧と寄付の方法。売れない着物の有効活用法を紹介。",
    url: "https://kimonokaitori-biyori.com/articles/donation/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の寄付は無料でできますか？",
    answer:
      "多くの受け入れ団体では着物の寄付を無料で受け付けています。ただし、送料は寄付者負担のケースがほとんどです。一部の団体では着払いで受け付けている場合もあるため、事前に確認しましょう。",
  },
  {
    question: "シミや汚れのある着物でも寄付できますか？",
    answer:
      "団体によって異なります。リサイクル目的の団体はシミ・汚れがあっても受け入れてくれる場合がありますが、着用目的（留学生の着付け体験など）の団体は美品のみ受け入れるケースが多いです。事前に確認しましょう。",
  },
  {
    question: "寄付する前に買取査定を受けた方がよいですか？",
    answer:
      "はい、寄付する前にまず無料査定を受けることをおすすめします。「売れないと思っていた着物に値段がついた」というケースも珍しくありません。買取大吉やウリエルの無料査定を利用してみましょう。",
  },
  {
    question: "着物の寄付で税制上のメリットはありますか？",
    answer:
      "認定NPO法人への寄付の場合、寄附金控除が受けられる場合があります。ただし着物の現物寄付の場合は時価評価が必要になるため、寄付先の団体に領収書の発行が可能か確認しましょう。",
  },
  {
    question: "帯や和装小物も寄付できますか？",
    answer:
      "はい、多くの団体では帯・帯締め・帯揚げ・草履・バッグなどの和装小物も受け入れています。着付け体験用として小物類も需要があるため、着物と一緒にまとめて寄付できます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の寄付ができる場所一覧｜売れない着物の活用法",
  description: "着物を寄付できる団体・施設の一覧と寄付の方法。売れない着物の有効活用法を紹介。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/donation/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "着物の寄付ができる場所", item: "https://kimonokaitori-biyori.com/articles/donation/" },
  ],
};

export default function DonationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物の寄付ができる場所" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">活用ガイド</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物の寄付ができる場所</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">売れない着物の活用法一覧</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              買取では値段がつかなかった着物も、寄付なら有効活用できます。NPO・福祉施設・海外支援など着物を寄付できる場所と方法を一覧でまとめました。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />
              この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li><a href="#first" className="text-[#6b4c8a] hover:underline">1. 寄付の前にまず無料査定を</a></li>
                <li><a href="#where" className="text-[#6b4c8a] hover:underline">2. 着物を寄付できる場所一覧</a></li>
                <li><a href="#how" className="text-[#6b4c8a] hover:underline">3. 着物を寄付する流れ</a></li>
                <li><a href="#merit" className="text-[#6b4c8a] hover:underline">4. 着物を寄付するメリット</a></li>
                <li><a href="#caution" className="text-[#6b4c8a] hover:underline">5. 寄付の注意点</a></li>
                <li><a href="#other" className="text-[#6b4c8a] hover:underline">6. 寄付以外の着物活用法</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* まず無料査定 */}
      <section id="first" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            寄付の前にまず無料査定を
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              「売れないだろう」と思い込んでいた着物に、実は値段がつくケースが少なくありません。寄付を決める前に、まずは<strong>買取大吉やウリエルの無料査定で買取額を確認</strong>しましょう。
            </p>
            <p>
              査定は完全無料で、値段に納得できなければ売らなくてもOKです。査定の結果、値段がつかなかった着物を寄付に回すのが最も合理的な流れです。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">おすすめの流れ</h3>
            <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
              <span className="bg-[#6b4c8a] text-white rounded-full px-4 py-2 font-semibold">1. 無料査定を受ける</span>
              <span className="text-[#c9a76c] font-bold text-lg hidden md:block">&rarr;</span>
              <span className="text-[#c9a76c] font-bold text-lg md:hidden">&darr;</span>
              <span className="bg-[#c9a76c] text-white rounded-full px-4 py-2 font-semibold">2. 値段がついた物は売る</span>
              <span className="text-[#c9a76c] font-bold text-lg hidden md:block">&rarr;</span>
              <span className="text-[#c9a76c] font-bold text-lg md:hidden">&darr;</span>
              <span className="bg-[#e8a0b6] text-white rounded-full px-4 py-2 font-semibold">3. 残りを寄付する</span>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付先一覧 */}
      <section id="where" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物を寄付できる場所一覧
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">NPO法人・認定NPO法人</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物の再利用やリサイクルを行うNPO団体。寄付された着物を販売してその売上を社会貢献活動に充てる団体もあります。認定NPO法人への寄付は税制優遇の対象になる場合もあります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">国際支援団体</h3>
              <p className="text-sm leading-relaxed text-gray-700">海外での着物文化紹介や、着物生地をリサイクルして途上国支援に活用する団体。日本文化の発信と国際支援を同時に実現できます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">着付け教室・日本文化体験施設</h3>
              <p className="text-sm leading-relaxed text-gray-700">着付け教室や留学生の文化体験施設では、練習用・体験用の着物が不足していることがあります。特に浴衣や訪問着など着やすい着物が喜ばれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">福祉施設・障がい者支援施設</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物のリメイク作業を通じて障がい者の就労支援を行う施設。寄付された着物がバッグや小物にリメイクされ、販売収益が施設の運営に役立てられます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">劇団・コスプレ団体</h3>
              <p className="text-sm leading-relaxed text-gray-700">時代劇の衣装として着物を使用する劇団や、コスプレイベント用に着物を求めている団体もあります。柄が華やかな着物が特に喜ばれます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">自治体のリサイクルセンター</h3>
              <p className="text-sm leading-relaxed text-gray-700">一部の自治体では衣類のリサイクル回収で着物も受け入れています。バザーや古着として再利用されます。お住まいの自治体に確認してみましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付の流れ */}
      <section id="how" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物を寄付する流れ
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">寄付先を選ぶ</h3>
                <p className="text-sm leading-relaxed text-gray-700">受け入れ条件（着物の状態・種類・送料負担など）を確認して寄付先を選びましょう。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">事前連絡・確認</h3>
                <p className="text-sm leading-relaxed text-gray-700">いきなり送るのではなく、事前に団体に連絡して受け入れ可能か確認しましょう。</p>
              </div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex gap-4 items-start">
              <span className="bg-[#6b4c8a] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div>
                <h3 className="font-bold text-[#6b4c8a] mb-1 text-base">梱包・発送</h3>
                <p className="text-sm leading-relaxed text-gray-700">着物を綺麗に畳んで段ボールに梱包し、指定の住所に発送します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メリット */}
      <section id="merit" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物を寄付するメリット
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#6b4c8a] mb-2">社会貢献</p>
              <p className="text-sm text-gray-600">着物が社会のために役立つ</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-2">廃棄回避</p>
              <p className="text-sm text-gray-600">ゴミにせず有効活用できる</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-[#e8a0b6] mb-2">心の整理</p>
              <p className="text-sm text-gray-600">誰かの役に立つ安心感</p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section id="caution" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            寄付の注意点
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">注意1：送料は自己負担のケースが多い</h3>
              <p className="text-sm leading-relaxed text-gray-700">多くの団体では送料は寄付者負担です。大量の着物を送ると送料が高額になるため、事前に確認しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">注意2：受け入れ条件を確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">団体によって受け入れ可能な着物の状態や種類が異なります。化繊はNG、正絹のみなど条件がある場合があるため、事前に確認しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">注意3：事前連絡なしに送らない</h3>
              <p className="text-sm leading-relaxed text-gray-700">受け入れ態勢が整っていない団体に突然着物を送ると迷惑になることがあります。必ず事前に連絡して受け入れ可否を確認しましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付以外の活用法 */}
      <section id="other" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            寄付以外の着物活用法
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">リメイク</h3>
              <p className="text-sm leading-relaxed text-gray-700">バッグ・ドレス・日傘など、着物の生地を活かしたアイテムにリメイク。思い出の着物を形を変えて残せます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">フリマアプリでの販売</h3>
              <p className="text-sm leading-relaxed text-gray-700">メルカリやラクマなどのフリマアプリで個人販売。買取業者では値段がつかなかった着物でも、個人間では需要がある場合があります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">知人・友人に譲る</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物に興味のある知人や友人に譲るのも一つの方法。着付け教室に通っている方や、お茶・お花を習っている方に喜ばれることが多いです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <span className="text-[#c9a76c] font-bold text-lg">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">寄付の前にまず無料査定で買取額を確認。</p>
            </Link>
            <Link href="/articles/remake/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物リメイク業者おすすめ</h3>
              <p className="text-xs text-gray-600">バッグ・ドレスに生まれ変わるリメイク業者。</p>
            </Link>
            <Link href="/articles/old-stained-kimono/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">古い着物・シミあり着物の買取</h3>
              <p className="text-xs text-gray-600">状態が悪くても売れる可能性があります。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            寄付の前に、まず無料査定で価値を確認
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            売れないと思っていた着物に値段がつくことも。まずは複数業者の無料査定で確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
