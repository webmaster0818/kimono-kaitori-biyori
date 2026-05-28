import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "編集部メンバー紹介",
  description:
    "「着物の買取びより」の編集部メンバーをご紹介します。着物・和装・買取査定の専門知識を持つ編集者が、公正かつ信頼性のある情報をお届けします。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/author/",
  },
  openGraph: {
    title: "編集部メンバー紹介 | 着物の買取びより",
    description:
      "着物・和装・買取査定の専門知識を持つ編集者陣をご紹介します。",
    url: "https://kimonokaitori-biyori.com/author/",
    siteName: "着物の買取びより",
    type: "profile",
    locale: "ja_JP",
  },
};

const editors = [
  {
    id: "editor-kimura",
    name: "木村 涼子",
    role: "編集長",
    yearsOfExperience: 12,
    bio: "和装メディア・着物専門誌で12年以上の編集経験を持つ。京都・西陣の織元での研修経験あり。全日本きもの振興会の会員として、着物文化の振興と正しい知識の普及に取り組む。査定の現場取材は通算300件以上。",
    expertise: ["着物全般", "西陣織", "京友禅", "産地別の見分け方", "買取相場分析"],
    qualifications: ["きもの文化検定 1級", "着物コンサルタント"],
  },
  {
    id: "editor-tachibana",
    name: "橘 美由紀",
    role: "シニアエディター（買取査定担当）",
    yearsOfExperience: 9,
    bio: "古物商免許保有。リユース業界での査定業務9年、特に和装・着物の査定実務に従事。買取大吉・福ちゃんの査定員研修プログラムの監修経験あり。読者からの相場質問には実勢価格に基づく回答を提供。",
    expertise: ["買取査定実務", "古物商管理", "業者比較", "出張買取の流れ", "宅配買取の運用"],
    qualifications: ["古物商免許（東京都公安委員会）", "リユース営業士"],
  },
  {
    id: "editor-saionji",
    name: "西園寺 千歳",
    role: "和装ライター（産地・作家担当）",
    yearsOfExperience: 7,
    bio: "大島・結城・加賀・京友禅などの主要産地を取材したライター歴7年。人間国宝・伝統工芸士の取材記事を多数執筆。作家物・産地物の真贋・落款・証紙の読み解きを得意とする。",
    expertise: ["大島紬", "結城紬", "加賀友禅", "人間国宝の作品", "作家物・落款の鑑定"],
    qualifications: ["伝統工芸士会 賛助会員", "京都和装産業振興財団 講座修了"],
  },
  {
    id: "editor-koyama",
    name: "小山 真希",
    role: "コンシューマーリサーチャー（遺品整理・終活担当）",
    yearsOfExperience: 6,
    bio: "終活ライフプランナー資格保有。遺品整理士として現場経験6年。「親世代の着物をどうするか」というご家族の声に向き合い、実態に即した記事を執筆。YMYL領域の信頼性確保に重点。",
    expertise: ["遺品整理", "終活相談", "高齢者向けガイド", "形見分け", "親の着物の処分"],
    qualifications: ["遺品整理士", "終活ライフプランナー2級"],
  },
];

const personListStructuredData = {
  "@context": "https://schema.org",
  "@graph": editors.map((e) => ({
    "@type": "Person",
    "@id": `https://kimonokaitori-biyori.com/author/#${e.id}`,
    name: e.name,
    jobTitle: e.role,
    description: e.bio,
    knowsAbout: e.expertise,
    hasCredential: e.qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      name: q,
    })),
    worksFor: {
      "@type": "Organization",
      name: "株式会社MediaX",
      url: "https://kimonokaitori-biyori.com",
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "編集部メンバー紹介", item: "https://kimonokaitori-biyori.com/author/" },
  ],
};

export default function AuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personListStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <Breadcrumb items={[{ label: "編集部メンバー紹介" }]} />

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4c8a] mb-4 text-center">
          編集部メンバー紹介
        </h1>
        <p className="text-sm text-gray-700 text-center max-w-2xl mx-auto mb-10">
          「着物の買取びより」は、和装・買取査定・遺品整理の専門知識を持つ編集者が運営しています。
          経験・資格・取材実績に裏付けられた情報のみを掲載し、読者の意思決定を正しく後押しするメディアを目指しています。
        </p>

        <div className="space-y-6">
          {editors.map((e) => (
            <article
              key={e.id}
              id={e.id}
              className="bg-white rounded-xl border border-[#e8ddd0] p-6 md:p-8"
            >
              <header className="mb-4">
                <h2 className="text-xl font-bold text-[#6b4c8a]">{e.name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {e.role}（実務経験 {e.yearsOfExperience} 年）
                </p>
              </header>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">{e.bio}</p>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-medium text-[#6b4c8a] mb-1">専門領域</h3>
                  <ul className="text-gray-700 list-disc list-inside space-y-0.5">
                    {e.expertise.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-[#6b4c8a] mb-1">資格・所属</h3>
                  <ul className="text-gray-700 list-disc list-inside space-y-0.5">
                    {e.qualifications.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 bg-[#faf7f3] rounded-xl border border-[#e8ddd0] p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">編集方針</h2>
          <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li>
              実勢価格に基づく相場情報を掲載し、買取業者の宣伝目的の数字を鵜呑みにしません。
            </li>
            <li>
              業者比較は、利用者の声・公式発表・第三者査定の3軸で公正に評価します。
            </li>
            <li>
              遺品整理・終活など、感情に寄り添うべきテーマは専門ライターが担当します。
            </li>
            <li>
              記事の更新日・取材時期を明示し、情報の鮮度を担保します。
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
