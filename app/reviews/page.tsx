import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { GOOGLE_REVIEWS } from "../lib/googleReviews";

export const metadata: Metadata = {
  title: "着物買取業者11社のレビュー一覧｜Googleクチコミの実査と公式情報の比較",
  description:
    "着物買取の主要11社を、各社の公式サイトで確認した情報と、Googleクチコミで実際に確認した評価・件数（確認日つき）で比較した一覧です。クチコミの本文は投稿者に著作権があるため転載せず、評価・件数と出典リンクを掲載しています。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/reviews/" },
};

const companies: { slug: string; name: string; label: string }[] = [
  { slug: "buysell", name: "バイセル", label: "バイセルの着物買取｜口コミ・評判・買取実績を検証" },
  { slug: "daikichi", name: "買取大吉", label: "買取大吉の着物買取｜口コミ・評判・買取実績を検証" },
  { slug: "fukuchan", name: "福ちゃん", label: "福ちゃんの着物買取｜口コミ・評判・買取実績を検証" },
  { slug: "hikakaku", name: "ヒカカク！", label: "ヒカカクで着物を売る｜一括査定の使い方と口コミ・評判" },
  { slug: "komehyo", name: "コメ兵", label: "コメ兵の着物買取｜ブランド買取大手の実力を検証" },
  { slug: "mangakuya", name: "まんがく屋", label: "まんがく屋の着物買取｜口コミ・評判を検証" },
  { slug: "otakaraya", name: "おたからや", label: "おたからやの着物買取｜フランチャイズ店の実力を検証" },
  { slug: "reclo", name: "RECLO", label: "RECLO（リクロ）の着物買取｜宅配買取の評判・口コミを検証" },
  { slug: "the-gold", name: "ザ・ゴールド", label: "ザ・ゴールドの着物買取｜口コミ・評判を検証" },
  { slug: "tifana", name: "ティファナ", label: "ティファナの着物買取｜総合リサイクル店の実力を検証" },
  { slug: "uriel", name: "ウリエル", label: "ウリエルの着物買取｜出張買取の評判・口コミを検証" },
];

export default function ReviewsIndex() {
  return (
    <>
      <Breadcrumb items={[{ label: "業者レビュー" }]} />
      <section className="py-10 md:py-14 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">業者レビュー</span>
          <h1 className="text-2xl md:text-3xl font-bold mb-3"><span className="text-gradient">着物買取業者11社のレビュー</span></h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            主要な着物買取業者を、各社の公式サイトで確認した情報と、Googleクチコミで実際に確認した評価・件数で比較しました。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-3">Googleクチコミの評価（実査）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Googleのクチコミは会社単位ではなく<strong>店舗・事業所ごと</strong>に付きます。そのため「会社全体の評価」という数値は存在しません。
            下の表は、各社のリスティングをGoogleマップで1件ずつ開いて確認した評価と件数です。リスティング名が一致したものだけを採用しています。
            クチコミの本文は投稿者に著作権があるため転載していません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#faf7f3]">
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">業者</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">確認したリスティング</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left whitespace-nowrap">評価（件数）</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left whitespace-nowrap">確認日</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {companies.map((c) => {
                  const g = GOOGLE_REVIEWS[c.slug];
                  if (!g) return null;
                  if (g.listings.length === 0) {
                    return (
                      <tr key={c.slug}>
                        <td className="border border-[#e8ddd0] px-3 py-2 font-medium">
                          <Link href={`/reviews/${c.slug}/`} className="text-[#6b4c8a] underline">{c.name}</Link>
                        </td>
                        <td className="border border-[#e8ddd0] px-3 py-2" colSpan={2}>
                          該当なし{g.noneReason ? `（${g.noneReason}）` : ""}
                        </td>
                        <td className="border border-[#e8ddd0] px-3 py-2 whitespace-nowrap">{g.checked}</td>
                      </tr>
                    );
                  }
                  return g.listings.map((l, i) => (
                    <tr key={`${c.slug}-${i}`}>
                      {i === 0 && (
                        <td className="border border-[#e8ddd0] px-3 py-2 font-medium align-top" rowSpan={g.listings.length}>
                          <Link href={`/reviews/${c.slug}/`} className="text-[#6b4c8a] underline">{c.name}</Link>
                        </td>
                      )}
                      <td className="border border-[#e8ddd0] px-3 py-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6b4c8a] underline"
                        >
                          {l.name}
                        </a>
                        {l.kind ? <span className="block text-xs text-gray-500">{l.kind}</span> : null}
                      </td>
                      <td className="border border-[#e8ddd0] px-3 py-2 whitespace-nowrap">{l.rating}（{l.count}件）</td>
                      {i === 0 && (
                        <td className="border border-[#e8ddd0] px-3 py-2 whitespace-nowrap align-top" rowSpan={g.listings.length}>
                          {g.checked}
                        </td>
                      )}
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3 leading-relaxed">
            評価は確認日時点の表示値です。店舗ごとに数値が違うため、実際に申し込む店舗の評価は個別にご確認ください。
            各社の買取方法・対応エリア・手数料は、下の各ページで公式サイトの記載と確認日を示しています。
          </p>
        </section>

        <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-3">各社の検証ページ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {companies.map((c) => (
            <Link
              key={c.slug}
              href={`/reviews/${c.slug}/`}
              className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]"
            >
              {c.label}
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/ranking/" className="btn-cta text-base">おすすめ業者ランキングを見る</Link>
        </div>
      </div>
    </>
  );
}
