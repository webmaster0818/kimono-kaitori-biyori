import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事制作ポリシー | 着物の買取びより",
  description:
    "着物の買取びよりの記事制作ポリシーです。ユーザーファーストの姿勢で、正確かつ中立な着物買取情報をお届けする方針をご紹介します。",
  alternates: {
    canonical: "https://kimono-kaitori-biyori.pages.dev/content-policy/",
  },
  openGraph: {
    title: "記事制作ポリシー | 着物の買取びより",
    description:
      "着物の買取びよりの記事制作ポリシーです。ユーザーファーストの姿勢で、正確かつ中立な着物買取情報をお届けします。",
    url: "https://kimono-kaitori-biyori.pages.dev/content-policy/",
    siteName: "着物の買取びより",
    type: "website",
    locale: "ja_JP",
  },
};

const principles = [
  {
    number: "01",
    title: "ユーザーファースト",
    description:
      "着物を売りたい方の多様なニーズに対応し、各買取業者の特性や強みをわかりやすく発信します。「初めて着物を売る方」「高額査定を目指す方」「手間をかけずに売りたい方」など、さまざまな状況に合わせた最適な業者選びをサポートします。",
    points: [
      "着物を売りたい方の多様なニーズに対応",
      "各買取業者の特性・強みをわかりやすく発信",
      "利用者の状況に合わせた最適な業者選びをサポート",
    ],
  },
  {
    number: "02",
    title: "正確かつ最新な情報発信",
    description:
      "買取相場・業者情報は常に最新の状態を保つよう、定期的な更新を行います。掲載情報は各買取業者の公式サイトを確認した上で作成し、正確性を重視しています。",
    points: [
      "買取相場・業者情報の定期更新",
      "各社公式サイトの確認に基づく情報作成",
      "変更があった場合の速やかな反映",
    ],
  },
  {
    number: "03",
    title: "中立的な口コミ・評価",
    description:
      "良い口コミも悪い口コミも公平に掲載し、利用者が正しい判断を下せるよう努めます。口コミの参照元を明確にし、中立性を保った評価を行います。",
    points: [
      "良い口コミも悪い口コミも公平に掲載",
      "口コミの参照元・出典を明確に記載",
      "アフィリエイト報酬に左右されない中立的な評価",
    ],
  },
  {
    number: "04",
    title: "分かりやすさの追求",
    description:
      "比較表を活用して業者の違いを一目で理解できるようにするほか、着物特有の専門用語（証紙、亀甲、紬、友禅など）をわかりやすく解説します。着物買取が初めての方でも安心して読める記事づくりを心がけています。",
    points: [
      "比較表を活用した業者の特徴整理",
      "専門用語（証紙、亀甲等）のわかりやすい解説",
      "初心者にも理解しやすい記事構成",
    ],
  },
];

const workflow = [
  {
    step: "STEP 1",
    title: "企画設計",
    description:
      "着物を売りたいユーザーのニーズを調査し、どのような情報が求められているかを分析します。検索キーワードやユーザーの疑問点を洗い出し、記事の構成を設計します。",
  },
  {
    step: "STEP 2",
    title: "調査・ライティング",
    description:
      "各買取業者の公式サイト、実際の利用者の口コミ、買取相場データなどを調査します。複数の情報源を照合し、正確性を確認した上で記事を執筆します。",
  },
  {
    step: "STEP 3",
    title: "公開",
    description:
      "事実関係の最終確認、誤字脱字チェック、情報の正確性の検証を行った上で記事を公開します。",
  },
  {
    step: "STEP 4",
    title: "更新",
    description:
      "公開後も定期的に情報を見直し、買取相場の変動や業者のサービス変更に合わせて記事を更新します。古くなった情報は速やかに修正し、常に最新の情報を提供します。",
  },
];

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "記事制作ポリシー" }]} />

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4c8a] mb-4 text-center">
          記事制作ポリシー
        </h1>
        <p className="text-sm text-gray-600 text-center mb-10 leading-relaxed">
          「着物の買取びより」は、以下のポリシーに基づいて記事を制作しています。
        </p>

        {/* Principles */}
        <div className="space-y-6 mb-14">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="bg-white rounded-xl border border-[#e8ddd0] p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl font-bold text-[#c9a76c] leading-none">
                  {principle.number}
                </span>
                <h2 className="text-lg font-bold text-[#6b4c8a]">
                  {principle.title}
                </h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {principle.description}
              </p>
              <ul className="space-y-2">
                {principle.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="text-[#e8a0b6] mt-0.5">&#9679;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <h2 className="text-xl font-bold text-[#6b4c8a] mb-6 text-center">
          記事制作フロー
        </h2>
        <div className="bg-white rounded-xl border border-[#e8ddd0] p-6 md:p-8">
          <div className="space-y-6">
            {workflow.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-10 h-10 rounded-full bg-[#6b4c8a] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  {index < workflow.length - 1 && (
                    <div className="w-0.5 h-full bg-[#e8ddd0] mt-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-xs text-[#c9a76c] font-semibold mb-1">
                    {item.step}
                  </p>
                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
