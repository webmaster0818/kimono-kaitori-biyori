import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "着物買取おすすめ業者5社を徹底比較【2026年最新】",
  description:
    "着物買取のおすすめ業者5社を徹底比較。買取大吉・ウリエル・RECLO・ティファナ・ヒカカクの口コミ・評判・買取実績を正直にレビュー。大切な着物を納得の価格で売りたい方必見。",
  alternates: {
    canonical: "https://kimono-kaitori-biyori.pages.dev/",
  },
};

const companies = [
  {
    name: "買取大吉",
    tagline: "全国1,300店舗以上の圧倒的ネットワーク",
    points: [
      "店頭・出張・宅配の3つの買取方法",
      "着物専門の査定士が在籍",
      "査定料・キャンセル料無料",
    ],
    accent: "#6b4c8a",
    badge: "総合力No.1",
  },
  {
    name: "ウリエル",
    tagline: "出張買取に特化した丁寧な対応",
    points: [
      "女性査定士の指名が可能",
      "出張買取の満足度が高い",
      "着物以外もまとめて査定OK",
    ],
    accent: "#c9a76c",
    badge: "出張買取",
  },
  {
    name: "RECLO",
    tagline: "ブランド着物・作家物に強い",
    points: [
      "高級着物の査定に強み",
      "オンライン完結で手軽",
      "ブランド品との同時査定可能",
    ],
    accent: "#e8a0b6",
    badge: "高級着物",
  },
  {
    name: "ティファナ",
    tagline: "スピード査定で即日現金化",
    points: [
      "最短即日で現金化",
      "大量の着物もまとめて対応",
      "シミ・汚れありでも査定可能",
    ],
    accent: "#5b8a6b",
    badge: "スピード",
  },
  {
    name: "ヒカカク",
    tagline: "複数業者を一括比較できるプラットフォーム",
    points: [
      "最大20社の査定額を比較",
      "口コミ・評判が豊富",
      "利用料完全無料",
    ],
    accent: "#4c6e8a",
    badge: "一括比較",
  },
];

const reasons = [
  {
    title: "実際に比較",
    description:
      "5つの着物買取業者を買取方法・査定額・対応の丁寧さなど複数の観点から徹底比較。わかりやすく整理しています。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "正直レビュー",
    description:
      "メリットだけでなくデメリットも正直にお伝え。実際の口コミも含めて偏りのない情報を提供します。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "相場情報",
    description:
      "着物の種類別の買取相場を掲載。大島紬・加賀友禅・振袖など、お持ちの着物の価値の目安がわかります。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "着物の買取相場はどのくらいですか？",
    answer:
      "着物の買取相場は種類や状態によって大きく異なります。一般的な訪問着で3,000円〜30,000円、大島紬や加賀友禅などの有名産地物は10,000円〜100,000円以上になることもあります。作家物や人間国宝の作品はさらに高額になる場合があります。",
  },
  {
    question: "古い着物やシミがある着物でも売れますか？",
    answer:
      "はい、多くの買取業者では古い着物やシミ・汚れがある着物でも査定を受け付けています。ただし状態が良いものと比べると買取額は下がります。まずは無料査定を利用して、実際の価値を確認されることをおすすめします。",
  },
  {
    question: "出張買取と宅配買取、どちらがおすすめですか？",
    answer:
      "点数が多い場合や重い着物を運ぶのが大変な場合は出張買取がおすすめです。自分のペースで進めたい方や、対面でのやり取りが苦手な方は宅配買取が便利です。いずれも査定料・送料は無料の業者がほとんどです。",
  },
  {
    question: "着物を高く売るコツはありますか？",
    answer:
      "証紙（産地証明）や落款があれば必ず一緒に出しましょう。また、複数の業者に査定を依頼して比較することで、より高い価格で売却できる可能性が高まります。保管状態を良くしておくことも大切です。",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f3eef7] via-[#faf5ee] to-[#fdf2f6]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#6b4c8a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#e8a0b6]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c9a76c]/8 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="inline-block text-xs font-semibold text-[#c9a76c] bg-[#faf5ee] px-4 py-1.5 rounded-full mb-6 tracking-wider border border-[#e8ddd0]">
            着物買取おすすめ業者比較 2026年版
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            大切な着物を、
            <br />
            <span className="text-gradient">納得の価格で。</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            お母さまから譲り受けた着物、タンスに眠ったままの振袖。
            <br className="hidden md:block" />
            着物買取の人気5社を徹底比較して、
            <br className="hidden md:block" />
            信頼できる業者選びをお手伝いします。
          </p>
          <Link href="/ranking/" className="btn-cta text-base md:text-lg">
            おすすめ5社を比較する
          </Link>
        </div>
      </section>

      {/* Company highlights */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
            比較する5つの着物買取業者
          </h2>
          <p className="text-sm text-gray-500 text-center mb-10">
            それぞれの特徴をひと目で確認できます
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div key={company.name} className="card flex flex-col relative">
                <span
                  className="absolute -top-3 left-4 text-[11px] font-bold text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: company.accent }}
                >
                  {company.badge}
                </span>
                <div
                  className="h-1 rounded-full mb-4 mt-2"
                  style={{
                    background: `linear-gradient(90deg, ${company.accent}, ${company.accent}80)`,
                  }}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {company.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{company.tagline}</p>
                <ul className="space-y-2 mb-4 flex-1">
                  {company.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span
                        className="mt-0.5 shrink-0"
                        style={{ color: company.accent }}
                      >
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#6b4c8a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#c9a76c]/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
            着物の買取びよりが選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#f3eef7] to-[#faf5ee] text-[#6b4c8a] mb-4 shadow-sm">
                  {reason.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-[#e8ddd0] rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-[#f3eef7] rounded-xl transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[#6b4c8a] shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-primary-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#c9a76c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#6b4c8a]/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            まずは無料査定で
            <br />
            お持ちの着物の価値を確認
          </h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            5つの着物買取業者を比較して、
            <br className="hidden md:block" />
            あなたに合った業者を見つけてください。
            <br className="hidden md:block" />
            査定は無料。納得いかなければキャンセルもOKです。
          </p>
          <Link href="/ranking/" className="btn-cta text-base md:text-lg">
            おすすめ5社の比較を見る
          </Link>
        </div>
      </section>
    </>
  );
}
