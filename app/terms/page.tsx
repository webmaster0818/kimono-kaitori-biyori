import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約 | 着物の買取びより",
  description:
    "着物の買取びよりの利用規約です。当サイトをご利用いただく前に必ずお読みください。",
  alternates: {
    canonical: "https://kimono-kaitori-biyori.pages.dev/terms/",
  },
  openGraph: {
    title: "利用規約 | 着物の買取びより",
    description:
      "着物の買取びよりの利用規約です。当サイトをご利用いただく前に必ずお読みください。",
    url: "https://kimono-kaitori-biyori.pages.dev/terms/",
    siteName: "着物の買取びより",
    type: "website",
    locale: "ja_JP",
  },
};

const articles = [
  {
    title: "第1条（本サービスの目的）",
    content:
      "「着物の買取びより」（以下「当サイト」といいます）は、着物買取業者の比較・レビュー情報を提供し、ユーザーが最適な買取業者を選択できるようサポートすることを目的としています。当サイトは、買取大吉・ウリエル・RECLO・ティファナ・ヒカカクをはじめとする着物買取業者に関する情報を掲載しています。",
  },
  {
    title: "第2条（本規約の適用）",
    content:
      "本利用規約（以下「本規約」といいます）は、当サイトが提供するすべてのサービスの利用条件を定めるものです。当サイトを利用されるすべてのユーザー（以下「利用者」といいます）は、本規約に同意したものとみなします。",
  },
  {
    title: "第3条（利用条件）",
    content:
      "当サイトは、日本国内に居住する方を対象としたサービスです。利用者は、本規約および関連する法令を遵守して当サイトを利用するものとします。未成年者が当サイトを利用する場合は、保護者の同意を得た上でご利用ください。",
  },
  {
    title: "第4条（掲載業者について）",
    content:
      "当サイトに掲載されている買取業者の情報は、各社の公式サイトおよび公開情報に基づいて作成しています。掲載情報の正確性には細心の注意を払っておりますが、各業者のサービス内容・買取価格・対応エリア等は予告なく変更される場合があります。最新の情報は各業者の公式サイトにてご確認ください。",
  },
  {
    title: "第5条（アフィリエイトリンクについて）",
    content:
      "当サイトは、アフィリエイトプログラムに参加しています。当サイト内のリンクを経由して買取業者のサービスをご利用いただいた場合、当サイト運営者が紹介報酬を受け取ることがあります。ただし、アフィリエイト報酬の有無が掲載業者の評価やランキングに影響を与えることはありません。",
  },
  {
    title: "第6条（禁止行為）",
    content:
      "利用者は、当サイトの利用にあたり、以下の行為を行ってはなりません。\n\n・当サイトのコンテンツを無断で複製、転載、改変する行為\n・当サイトの運営を妨害する行為\n・他の利用者や第三者の権利を侵害する行為\n・不正アクセスやサーバーへの過度な負荷をかける行為\n・虚偽の情報を投稿する行為\n・その他、法令または公序良俗に反する行為",
  },
  {
    title: "第7条（免責事項）",
    content:
      "当サイトは着物買取業者の比較情報を提供するものであり、特定の業者を推奨するものではありません。買取価格・査定結果について、当サイトは一切の保証をいたしません。買取業者との取引は利用者ご自身の責任において行ってください。当サイトの情報を利用したことにより生じた損害について、当サイト運営者は一切の責任を負いません。",
  },
  {
    title: "第8条（著作権）",
    content:
      "当サイトに掲載されているコンテンツ（文章、画像、デザイン等）の著作権は、当サイト運営者または正当な権利者に帰属します。著作権法上認められた範囲を超えて、これらのコンテンツを無断で使用することを禁止します。",
  },
  {
    title: "第9条（規約の変更）",
    content:
      "当サイト運営者は、必要に応じて本規約を変更することができるものとします。規約を変更した場合は、当サイト上に変更後の規約を掲載することで利用者への通知とします。変更後の規約は、掲載時から効力を生じるものとします。",
  },
  {
    title: "第10条（準拠法・管轄裁判所）",
    content:
      "本規約の解釈および適用は、日本法に準拠するものとします。当サイトに関連して紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "利用規約" }]} />

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4c8a] mb-8 text-center">
          利用規約
        </h1>

        <div className="bg-white rounded-xl border border-[#e8ddd0] p-6 md:p-10">
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            この利用規約（以下「本規約」といいます）は、「着物の買取びより」（以下「当サイト」といいます）の利用条件を定めるものです。当サイトをご利用いただくにあたり、以下の規約をよくお読みください。
          </p>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <section key={index}>
                <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#e8ddd0]">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">
              運営者情報
            </h2>
            <dl className="text-sm text-gray-700 space-y-2">
              <div className="flex gap-4">
                <dt className="font-semibold min-w-[80px]">運営者</dt>
                <dd>株式会社MediaX</dd>
              </div>
              <div className="flex gap-4">
                <dt className="font-semibold min-w-[80px]">所在地</dt>
                <dd>東京都渋谷区</dd>
              </div>
            </dl>
          </div>

          <p className="text-xs text-gray-400 mt-8 text-right">
            制定日：2025年1月1日
          </p>
        </div>
      </main>
    </>
  );
}
