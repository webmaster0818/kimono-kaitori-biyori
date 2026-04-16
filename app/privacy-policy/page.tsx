import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 着物の買取びより",
  description:
    "着物の買取びよりのプライバシーポリシーです。個人情報の取り扱いについてご説明します。",
  alternates: {
    canonical: "https://kimono-kaitori-biyori.pages.dev/privacy-policy/",
  },
  openGraph: {
    title: "プライバシーポリシー | 着物の買取びより",
    description:
      "着物の買取びよりのプライバシーポリシーです。個人情報の取り扱いについてご説明します。",
    url: "https://kimono-kaitori-biyori.pages.dev/privacy-policy/",
    siteName: "着物の買取びより",
    type: "website",
    locale: "ja_JP",
  },
};

const sections = [
  {
    title: "1. 個人情報の定義",
    content:
      "本プライバシーポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、氏名、メールアドレス、その他の記述等により特定の個人を識別できる情報をいいます。",
  },
  {
    title: "2. 個人情報の取得方法",
    content:
      "当サイトでは、お問い合わせフォームをご利用いただく際に、氏名・メールアドレス等の個人情報をご提供いただく場合があります。また、当サイトへのアクセス時に、IPアドレス、ブラウザの種類、アクセス日時等の情報が自動的に記録される場合があります。",
  },
  {
    title: "3. 個人情報の利用目的",
    content:
      "当サイトが取得した個人情報は、以下の目的で利用いたします。\n\n・お問い合わせへの回答・対応\n・当サイトのサービス改善・コンテンツの充実\n・利用状況の分析（アクセス解析）\n・重要なお知らせの送信\n・その他、上記利用目的に付随する業務",
  },
  {
    title: "4. 個人情報の第三者提供",
    content:
      "当サイトは、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。\n\n・利用者本人の同意がある場合\n・法令に基づく場合\n・人の生命・身体・財産の保護に必要な場合\n・公衆衛生・児童の健全育成に特に必要な場合\n・国の機関等への協力が必要な場合",
  },
  {
    title: "5. 個人情報の管理",
    content:
      "当サイトは、利用者の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩等を防止するため、セキュリティの維持・管理体制の整備等、必要な措置を講じます。",
  },
  {
    title: "6. 開示・訂正・利用停止",
    content:
      "利用者は、当サイトが保有する自己の個人情報について、開示・訂正・追加・削除・利用停止を請求する権利を有しています。ご希望の場合は、下記のお問い合わせ窓口までご連絡ください。本人確認の上、速やかに対応いたします。",
  },
  {
    title: "7. Cookie等の利用",
    content:
      "当サイトでは、利用状況の把握やサービス改善のためにGoogleアナリティクスを使用しています。Googleアナリティクスは、Cookieを使用してデータを収集しますが、個人を特定する情報は含まれません。\n\nGoogleアナリティクスによるデータ収集を無効にしたい場合は、Googleが提供する「Googleアナリティクス オプトアウト アドオン」をご利用ください。\n\n詳細はGoogleのプライバシーポリシー（https://policies.google.com/privacy）をご確認ください。",
  },
  {
    title: "8. 広告について",
    content:
      "当サイトは、アフィリエイトプログラムに参加しています。当サイト内のリンクを通じて買取業者のサービスを申し込まれた場合、当サイト運営者が成果報酬を受け取ることがあります。アフィリエイトプログラムの利用にあたり、利用者の個人情報が提携先に提供されることはありません。",
  },
  {
    title: "9. 免責事項",
    content:
      "当サイトからリンクやバナー等によって他のサイトに移動された場合、移動先サイトで提供される情報やサービスについて、当サイトは一切の責任を負いません。各リンク先のプライバシーポリシーをご確認の上、ご利用ください。",
  },
  {
    title: "10. プライバシーポリシーの変更",
    content:
      "当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。",
  },
  {
    title: "11. お問い合わせ窓口",
    content:
      "本プライバシーポリシーに関するお問い合わせは、以下の窓口までお願いいたします。\n\n運営者：株式会社MediaX\n所在地：東京都渋谷区",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4c8a] mb-8 text-center">
          プライバシーポリシー
        </h1>

        <div className="bg-white rounded-xl border border-[#e8ddd0] p-6 md:p-10">
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            「着物の買取びより」（以下「当サイト」といいます）は、利用者の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-lg font-bold text-[#6b4c8a] mb-3">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-8 text-right">
            制定日：2025年1月1日
          </p>
        </div>
      </main>
    </>
  );
}
