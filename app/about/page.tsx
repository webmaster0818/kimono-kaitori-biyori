import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報 | 着物の買取びより",
  description:
    "着物の買取びよりの運営者情報・編集方針・免責事項についてご説明します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/about/",
  },
  openGraph: {
    title: "運営者情報 | 着物の買取びより",
    description:
      "着物の買取びよりの運営者情報・編集方針・免責事項についてご説明します。",
    url: "https://kimonokaitori-biyori.com/about/",
    siteName: "着物の買取びより",
    type: "website",
    locale: "ja_JP",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "運営者情報" }]} />

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4c8a] mb-8 text-center">
          運営者情報
        </h1>

        <div className="bg-white rounded-xl border border-[#e8ddd0] p-6 md:p-10">
          {/* サイトについて */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">
              サイトについて
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              「着物の買取びより」は、着物買取のおすすめ業者を比較する専門メディアです。着物の買取を検討されている方に向けて、各買取業者の特徴・口コミ・買取実績などを独自に調査し、正直にお伝えすることを目的としています。
            </p>
          </section>

          {/* 運営会社 */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">
              運営会社
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-[#e8ddd0]">
                    <th className="py-3 px-4 text-left font-medium text-gray-600 bg-[#faf7f3] w-1/3">
                      会社名
                    </th>
                    <td className="py-3 px-4 text-gray-700">
                      株式会社MediaX
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <th className="py-3 px-4 text-left font-medium text-gray-600 bg-[#faf7f3] w-1/3">
                      所在地
                    </th>
                    <td className="py-3 px-4 text-gray-700">東京都渋谷区</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <th className="py-3 px-4 text-left font-medium text-gray-600 bg-[#faf7f3] w-1/3">
                      事業内容
                    </th>
                    <td className="py-3 px-4 text-gray-700">
                      Webメディアの企画・運営
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <th className="py-3 px-4 text-left font-medium text-gray-600 bg-[#faf7f3] w-1/3">
                      運営サイト
                    </th>
                    <td className="py-3 px-4 text-gray-700">
                      着物の買取びより（https://kimonokaitori-biyori.com）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 編集方針 */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">
              編集方針
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                当サイトでは、以下の方針に基づいてコンテンツを制作しています。
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  各買取業者のサービス内容・口コミ・買取実績を独自に調査し、正確な情報を掲載するよう努めます。
                </li>
                <li>
                  特定の業者を不当に優遇・排除することなく、公正な比較情報を提供します。
                </li>
                <li>
                  掲載情報は定期的に見直し、最新の状態を維持するよう努めます。
                </li>
                <li>
                  当サイトはアフィリエイトプログラムに参加しており、掲載リンクを通じてサービスの申し込みがあった場合、当サイト運営者が報酬を受け取ることがあります。ただし、報酬の有無が評価やランキングに影響を与えることはありません。
                </li>
              </ul>
            </div>
          </section>

          {/* 免責事項 */}
          <section>
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">
              免責事項
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                当サイトのコンテンツは、可能な限り正確な情報を掲載するよう努めておりますが、情報の正確性・完全性・最新性を保証するものではありません。
              </p>
              <p>
                当サイトに掲載された情報を利用したことにより生じた損害について、当サイト運営者は一切の責任を負いかねます。各サービスの詳細については、必ず公式サイトにてご確認ください。
              </p>
              <p>
                当サイトからリンクやバナー等で他のサイトに移動された場合、移動先サイトで提供される情報やサービスについて、当サイトは一切の責任を負いません。
              </p>
            </div>
          </section>

          <p className="text-xs text-gray-400 mt-8 text-right">
            最終更新日：2026年5月20日
          </p>
        </div>
      </main>
    </>
  );
}
