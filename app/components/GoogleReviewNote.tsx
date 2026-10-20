import { GOOGLE_REVIEWS } from "../lib/googleReviews";

/**
 * Googleクチコミの実査結果を表示する。
 *
 * Googleのクチコミは店舗・事業所ごとに付くため、「会社全体の評価」という数値は存在しない。
 * そのため、どのリスティングを見た数値なのかを明記し、出典リンクを必ず添える。
 * クチコミ本文は投稿者に著作権があるため転載しない。
 */
export default function GoogleReviewNote({ slug }: { slug: string }) {
  const data = GOOGLE_REVIEWS[slug];
  if (!data) return null;

  const mapsUrl = (name: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

  return (
    <div className="space-y-4">
      <p className="text-gray-700 text-sm leading-relaxed">
        Googleのクチコミは、店舗や事業所ごとに付きます。会社全体の評価という数値は存在しないため、
        当サイトが実際に確認したリスティングを個別に掲載します。
        数値は{data.checked}に確認した時点のもので、クチコミが増えれば変わります。
      </p>

      {data.listings.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#e8ddd0]">
              <thead>
                <tr className="bg-[#faf7f2]">
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left font-semibold text-gray-900">
                    リスティング
                  </th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left font-semibold text-gray-900 whitespace-nowrap">
                    評価
                  </th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left font-semibold text-gray-900 whitespace-nowrap">
                    クチコミ件数
                  </th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left font-semibold text-gray-900 whitespace-nowrap">
                    出典
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.listings.map((l) => (
                  <tr key={l.name}>
                    <td className="border border-[#e8ddd0] px-3 py-2 text-gray-700">
                      {l.name}
                      {l.kind ? (
                        <span className="block text-xs text-gray-500">{l.kind}</span>
                      ) : null}
                    </td>
                    <td className="border border-[#e8ddd0] px-3 py-2 text-gray-700 whitespace-nowrap">
                      {l.rating}
                    </td>
                    <td className="border border-[#e8ddd0] px-3 py-2 text-gray-700 whitespace-nowrap">
                      {l.count}件
                    </td>
                    <td className="border border-[#e8ddd0] px-3 py-2 whitespace-nowrap">
                      <a
                        href={mapsUrl(l.name)}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#6b4c8a] underline"
                      >
                        Googleマップ
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {data.spreadNote ? (
            <p className="text-xs text-gray-600 leading-relaxed">{data.spreadNote}</p>
          ) : null}
        </>
      ) : (
        <div className="rounded-lg border border-[#e8ddd0] bg-[#faf7f2] p-4">
          <p className="text-sm text-gray-700 leading-relaxed">{data.noneReason}</p>
        </div>
      )}

      <div className="rounded-lg border border-[#e8ddd0] bg-[#faf7f2] p-4">
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-semibold text-[#6b4c8a]">クチコミの扱いについて</span>
          <br />
          クチコミの本文は投稿した方に著作権があるため、当サイトでは転載していません。本文は出典リンク先でご確認ください。
          また、当サイトは利用者から体験談の投稿を受け付けていないため、
          当サイトが作成した体験談・口コミは掲載していません。
        </p>
      </div>
    </div>
  );
}
