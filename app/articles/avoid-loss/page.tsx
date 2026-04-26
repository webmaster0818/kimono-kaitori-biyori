import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取で損しないための10の知識",
  description:
    "着物買取で損しないための10の重要知識を解説。買取相場の調べ方、悪質業者の見分け方、高額査定を引き出すテクニックなど、売る前に知っておくべきポイントをまとめました。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/articles/avoid-loss/" },
  openGraph: {
    title: "着物買取で損しないための10の知識",
    description: "着物買取で損しないための重要知識を解説。高額査定を引き出すポイントをまとめました。",
    url: "https://kimonokaitori-biyori.com/articles/avoid-loss/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物買取で最もよくある失敗は何ですか？",
    answer:
      "最もよくある失敗は「1社だけで売ってしまうこと」です。業者によって査定額が数倍違うことがあるため、必ず3社以上で比較しましょう。ヒカカクの一括比較を使えば効率的に最高額を見つけられます。",
  },
  {
    question: "リサイクルショップで着物を売るのは損ですか？",
    answer:
      "総合リサイクルショップでは着物の専門知識がないスタッフが査定することが多く、大島紬や加賀友禅などの高級着物の価値を見落とされるリスクがあります。買取大吉やウリエルなど着物専門の査定員がいる業者に依頼しましょう。",
  },
  {
    question: "証紙がない場合、どのくらい査定額が下がりますか？",
    answer:
      "証紙がない場合、一般的に査定額は2〜5割程度下がる傾向があります。ただし、経験豊富な査定員なら生地の質感や織り方から産地を判断できる場合もあります。証紙がなくても買取大吉やウリエルに一度査定を依頼してみましょう。",
  },
  {
    question: "着物の買取相場はどうやって調べればよいですか？",
    answer:
      "最も確実なのは複数の業者に無料査定を依頼することです。インターネットの相場情報はあくまで目安で、着物の状態・サイズ・産地・作家によって大きく変動します。買取大吉・ウリエル・RECLOなどの無料査定を活用しましょう。",
  },
  {
    question: "着物を売る前にクリーニングに出すべきですか？",
    answer:
      "いいえ、クリーニングに出す必要はありません。着物のクリーニング代は高額（数千円〜1万円以上）なため、クリーニング代が買取額を上回ってしまうリスクがあります。軽くシワを伸ばして畳んでおく程度で十分です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物買取で損しないための10の知識",
  description: "着物買取で損しないための重要知識を解説。高額査定を引き出すポイントをまとめました。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/avoid-loss/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "着物買取で損しないための知識", item: "https://kimonokaitori-biyori.com/articles/avoid-loss/" },
  ],
};

const tips = [
  { title: "知識1：1社だけで売らない", desc: "着物の買取額は業者によって数倍の差がつくことがあります。必ず3社以上に査定を依頼して比較しましょう。ヒカカクの一括比較サービスを使えば、一度の申し込みで複数社の査定額を比較できます。面倒でも比較する手間が数万円の差を生むことがあります。" },
  { title: "知識2：着物専門の業者を選ぶ", desc: "総合リサイクルショップでは着物の専門知識がないスタッフが査定することが多く、大島紬や加賀友禅など高級着物の価値を見落とされるリスクがあります。買取大吉やウリエルなど、着物専門の査定員がいる業者を選びましょう。" },
  { title: "知識3：証紙は最大の武器", desc: "産地の証紙（大島紬の地球印、結城紬の卸商協同組合証紙など）は着物の産地と品質を証明する最も重要な書類です。証紙の有無で買取額が2〜5倍変わることも。たとう紙の中やタンスの引き出しに紛れていないか必ず確認しましょう。" },
  { title: "知識4：落款を確認する", desc: "手描き友禅や作家物の着物には、作家の落款（サイン）が入っています。落款は裾裏やおくみ下部にあることが多いです。人間国宝や著名作家の落款が見つかれば、査定額が数倍〜数十倍になることもあります。" },
  { title: "知識5：クリーニングは不要", desc: "着物のクリーニング代は高額（丸洗い5,000円〜、しみ抜き1万円以上）なため、クリーニング代が買取額を上回るリスクがあります。軽く陰干しして風を通す程度で十分。シミがあっても買取大吉やウリエルは査定してくれます。" },
  { title: "知識6：帯と着物はセットで出す", desc: "着物と帯をコーディネートとしてセットで出すと、単体で出すよりも高額査定になる可能性があります。和装小物（帯締め・帯揚げ・草履・バッグなど）もまとめて出すことでプラス査定が期待できます。" },
  { title: "知識7：サイズは大きいほど高い", desc: "着物の買取ではサイズ（身丈・裄丈）が大きいほど高く評価されます。身丈160cm以上、裄丈67cm以上が理想的。サイズが小さい着物は仕立て直しが難しいため買取額が下がる傾向があります。" },
  { title: "知識8：悪質業者を見分ける", desc: "「何でも高価買取」と謳いながら実際は二束三文で買い叩く業者、出張費やキャンセル料を請求する業者、買取金額を明示せずにまとめて引き取ろうとする業者には要注意。買取大吉・ウリエルなど大手業者は透明性の高い査定を行っています。" },
  { title: "知識9：売り時を見極める", desc: "着物には売り時があります。夏着物は春先（3〜5月）、袷の着物は秋（9〜10月）がベスト。ただし、需要が高い大島紬・結城紬・加賀友禅などは年間を通じて高額買取が期待できます。状態が劣化する前に早めに売ることも大切です。" },
  { title: "知識10：買取方法を使い分ける", desc: "出張買取は大量の着物を売る場合に最適。宅配買取は忙しい方や地方在住の方に便利。持ち込み買取はすぐに現金化したい場合に向いています。状況に応じて最適な買取方法を選びましょう。RECLOの宅配買取は海外販路による高額査定も期待できます。" },
];

export default function AvoidLossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "着物買取で損しないための知識" }]} />

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              知識ガイド
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取で損しない</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                ための10の知識
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物を売る前に知っておくべき10の重要知識を解説。買取相場の調べ方、悪質業者の見分け方、高額査定を引き出すテクニックなど、損しないためのポイントをまとめました。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年4月26日
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />
              この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                {tips.map((tip, i) => (
                  <li key={i}>
                    <a href={`#tip${i + 1}`} className="text-[#6b4c8a] hover:underline">
                      {tip.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {tips.map((tip, i) => (
        <section
          key={i}
          id={`tip${i + 1}`}
          className={`py-10 ${i % 2 === 0 ? "section-light" : ""}`}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
              {tip.title}
            </h2>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-6">
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                {tip.desc}
              </p>
            </div>
          </div>
        </section>
      ))}

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

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">買取大吉・ウリエルなどおすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/sell-high-tips/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物を高く売るコツ</h3>
              <p className="text-xs text-gray-600">査定額アップのための実践テクニック。</p>
            </Link>
            <Link href="/articles/trouble-prevention/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取トラブル防止</h3>
              <p className="text-xs text-gray-600">悪質業者の手口と対策を詳しく解説。</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            損しない着物売却は、まず無料査定から
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            複数業者の無料査定で最高額を確認。着物専門の査定員に正しく評価してもらいましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングへ
          </Link>
        </div>
      </section>
    </>
  );
}
