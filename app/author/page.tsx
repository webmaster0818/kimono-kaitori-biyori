import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "編集部について",
  description:
    "「着物の買取びより」編集部の体制と、記事を作るときに何をどう確認しているかをまとめています。掲載している数値には出典と確認日を付けています。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/author/",
  },
  openGraph: { images: ["/og-default.png"],
    title: "編集部について | 着物の買取びより",
    description:
      "編集部の体制と、記事の数値をどこで確認しているかをまとめています。",
    url: "https://kimonokaitori-biyori.com/author/",
    siteName: "着物の買取びより",
    type: "website",
    locale: "ja_JP",
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kimonokaitori-biyori.com/author/#editorial",
  name: "着物の買取びより 編集部",
  url: "https://kimonokaitori-biyori.com/author/",
  publishingPrinciples: "https://kimonokaitori-biyori.com/about/",
  knowsAbout: ["着物買取", "着物の買取相場", "産地織物", "買取業者の比較", "クーリングオフ"],
  parentOrganization: {
    "@type": "Organization",
    name: "株式会社MediaX",
    url: "https://kimonokaitori-biyori.com",
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "編集部について", item: "https://kimonokaitori-biyori.com/author/" },
  ],
};

const checks = [
  {
    title: "買取業者の情報",
    body: "会社名・買取方法・対応エリア・手数料は、各社の公式サイトで1項目ずつ確認し、確認した月を各ページに記載しています。公式サイトで確認できなかった項目は、推測で埋めずに「未確認」と書きます。",
  },
  {
    title: "買取相場",
    body: "公開オークションの落札実績を当サイトで集計し、件数・平均・最高値を出典URLと取得日つきで掲載しています。集計の手順と、まとめ売りや別商品を除外した基準は調査方法のページに公開しています。実売価格は買取査定額とは別のものである点も各ページに明記しています。",
  },
  {
    title: "クチコミ・評価",
    body: "出典のないクチコミや、当サイトが付けた星による評価は掲載しません。業者ページに載せているのは、Googleのクチコミで実際に確認できた対象・評価・件数・確認日と、その出典リンクです。クチコミの本文は投稿者に著作権があるため転載していません。",
  },
  {
    title: "公的な情報",
    body: "クーリングオフの期間や各地の消費生活センターの連絡先は、法令と自治体の公式ページで確認し、リンク先が開くことを確かめてから掲載しています。",
  },
];

export default function AuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <Breadcrumb items={[{ label: "編集部について" }]} />

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4c8a] mb-4 text-center">
          編集部について
        </h1>
        <p className="text-sm text-gray-700 text-center max-w-2xl mx-auto mb-10">
          「着物の買取びより」は株式会社MediaXの編集部が運営する、着物買取の比較・情報メディアです。
          当サイトは買取業者ではありません。記事は編集部として作成しており、個人名での署名は行っていません。
        </p>

        <section className="bg-white rounded-xl border border-[#e8ddd0] p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#6b4c8a] mb-4">記事を作るときに確認していること</h2>
          <div className="space-y-5">
            {checks.map((c) => (
              <div key={c.title}>
                <h3 className="font-medium text-[#6b4c8a] mb-1 text-sm">{c.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 bg-[#faf7f3] rounded-xl border border-[#e8ddd0] p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">編集方針</h2>
          <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li>
              相場は公開オークションの落札実績にもとづいて掲載し、根拠を示せない数値は載せません。
            </li>
            <li>
              業者の比較は、公式サイトで確認できる項目（買取方法・対応エリア・手数料・店舗数）をそろえて行います。
            </li>
            <li>
              架空のクチコミ・体験談・人物は作成しません。していない体験を書きません。
            </li>
            <li>
              掲載内容の確認日を明示し、確認できていないことは「未確認」と書きます。
            </li>
            <li>
              広告・アフィリエイトの有無が順位や評価に影響しないようにしています。
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            詳しい検証体制は
            <a href="/about/" className="text-[#6b4c8a] underline">運営者情報</a>
            、相場データの集め方は
            <a href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</a>
            に記載しています。
          </p>
        </section>
      </main>
    </>
  );
}
