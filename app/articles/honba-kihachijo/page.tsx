import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】本場黄八丈の買取相場｜八丈島の草木染｜証紙・作家で価格が変わる",
  description:
    "本場黄八丈（東京都八丈島）の買取相場を解説。コブナグサの黄・マダミの樺・椎の黒による草木染、黄八丈めゆ工房や山下八百子（東京都指定無形文化財）など、黄八丈織物協同組合の証紙の見方、高く売るポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/honba-kihachijo/",
  },
  openGraph: {
    title: "【2026年最新】本場黄八丈の買取相場｜八丈島の草木染｜証紙・作家で価格が変わる",
    description:
      "本場黄八丈の買取相場と高く売る方法を解説。草木染の縞・格子、証紙の有無が査定を左右します。",
    url: "https://kimonokaitori-biyori.com/articles/honba-kihachijo/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "本場黄八丈はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "本場黄八丈の買取相場は、証紙・作家の有無や状態によって幅があります。証紙付きの本場黄八丈は中古の紬・織物の中でも比較的評価されやすい傾向があり、山下八百子・山下めゆといった著名作家の銘や落款があるとさらに高く評価される傾向があります。一方で証紙がない場合や、八丈島産以外の黄八丈（秋田産など）と区別がつかない場合は評価が下がりやすくなります。具体的な金額は状態によって大きく変わるため、無料査定での確認をおすすめします。",
  },
  {
    question: "本場黄八丈と普通の黄八丈の違いは何ですか？",
    answer:
      "「黄八丈」は秋田県などでも生産されており、東京都八丈島で織られたものを区別して「本場黄八丈」と呼びます。本場黄八丈はコブナグサ（八丈刈安）による黄、マダミ（タブノキ）の樹皮による樺色（鳶色）、椎（スダジイ）の樹皮と泥染めによる黒という、島の植物を使った草木染が特徴です。八丈島産であることは黄八丈織物協同組合の証紙で確認するのが最も確実です。",
  },
  {
    question: "本場黄八丈に証紙が付いていないと売れませんか？",
    answer:
      "証紙がなくても買取自体は可能ですが、八丈島産である証明ができないため評価は下がりやすくなります。本場黄八丈には八丈島の黄八丈織物協同組合が発行する証紙や、伝統的工芸品の伝統証紙が付くのが一般的です。証紙はたとう紙や購入時の箱に保管されていることが多いので、必ず探して一緒に査定に出しましょう。",
  },
  {
    question: "本場黄八丈は人間国宝の作品ですか？",
    answer:
      "本場黄八丈に関する公的な認定として確認できるのは、東京都指定無形文化財（工芸技術）の保持者です。山下めゆ・山下八百子といった作家が東京都指定無形文化財の保持者として認定されています。国の重要無形文化財（人間国宝）として黄八丈が指定された事実は確認できていません。著名作家の銘がある作品は中古市場でも評価されやすい傾向があります。",
  },
  {
    question: "本場黄八丈を高く売るにはどうすればいいですか？",
    answer:
      "第一に、黄八丈織物協同組合の証紙や伝統証紙を必ずセットで査定に出すことです。第二に、草木染の織物に詳しい着物専門の買取業者を選ぶことです。一般的なリサイクルショップでは本場黄八丈の価値が正しく評価されないことがあります。第三に、複数業者で相見積もりを取り、日焼け・シミ・カビなどの劣化が進む前に早めに査定に出すことが大切です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline:
    "本場黄八丈の買取相場｜八丈島の草木染と証紙の見方",
  description:
    "本場黄八丈の買取相場と高く売る方法を解説。草木染の縞・格子、証紙の有無が査定を左右します。",
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  author: { "@type": "Person", name: "着物の買取びより 編集部", url: "https://kimonokaitori-biyori.com/author/" },
  publisher: {
    "@type": "Organization",
    name: "着物の買取びより",
    url: "https://kimonokaitori-biyori.com",
    logo: {
      "@type": "ImageObject",
      url: "https://kimonokaitori-biyori.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://kimonokaitori-biyori.com/articles/honba-kihachijo/",
  },
};

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

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://kimonokaitori-biyori.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "買取相場",
      item: "https://kimonokaitori-biyori.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "本場黄八丈",
      item: "https://kimonokaitori-biyori.com/articles/honba-kihachijo/",
    },
  ],
};

export default function HonbaKihachijoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Breadcrumb
        items={[
          { label: "買取相場", href: "/articles/" },
          { label: "本場黄八丈" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40))", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">本場黄八丈の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                八丈島の草木染と証紙の見方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              本場黄八丈（ほんばきはちじょう）は、東京都八丈島で織られる草木染の絹織物です。コブナグサの黄、マダミの樺、椎の黒という島の植物による染色と、縞・格子の柄が特徴。証紙や著名作家の有無が買取価格を左右します。相場の傾向や高く売るためのポイントを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年6月13日
            </p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />
              この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-[#6b4c8a] hover:underline">
                    1. 本場黄八丈とは？島の草木染
                  </a>
                </li>
                <li>
                  <a href="#dye" className="text-[#6b4c8a] hover:underline">
                    2. 黄・樺・黒を生む3つの染料
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 【種類別】本場黄八丈の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#artist" className="text-[#6b4c8a] hover:underline">
                    4. 工房・作家と評価への影響
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    5. 黄八丈織物協同組合の証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 本場黄八丈を高く売るポイント
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    7. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 本場黄八丈とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            本場黄八丈とは？島の草木染
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              本場黄八丈（ほんばきはちじょう）は、<strong>東京都八丈島</strong>で生産される先染めの絹織物です。室町時代には白紬を貢納した記録があり、江戸時代後期には歌舞伎の衣装などを通じて広く知られるようになりました。1977年（昭和52年）に国の伝統的工芸品に指定され、1982年（昭和57年）には東京都伝統工芸品にも指定されています。
            </p>
            <p>
              「黄八丈」は秋田県などでも生産されているため、八丈島で織られたものを区別して<strong>「本場黄八丈」</strong>と呼びます。八丈島に自生する植物を使った草木染と、手織りによる縞・格子の柄が最大の特徴です。
            </p>
            <p>
              地色によって、黄色を基調とする<strong>黄八丈</strong>、樺色（鳶色・茶色）を基調とする<strong>鳶八丈（茶八丈）</strong>、黒を基調とする<strong>黒八丈</strong>に大別されます。いずれも縞や格子の組み合わせで、落ち着いた中にも力強さのある意匠が生まれます。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                本場黄八丈の主な特徴
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    東京都八丈島で織られる先染めの絹織物（草木染）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    黄・樺（鳶）・黒の地色と、縞・格子の柄
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    島に自生する植物（コブナグサ・マダミ・椎）による染色
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    1977年に国の伝統的工芸品に指定
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    八丈島産の証明は黄八丈織物協同組合の証紙で確認できる
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 染料 */}
      <section id="dye" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            黄・樺・黒を生む3つの染料
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            本場黄八丈の色は、化学染料ではなく八丈島に自生する植物の草木染で生み出されます。3つの基調色は、それぞれ異なる植物と媒染によって染められます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    色
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    染料となる植物
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    黄色
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    コブナグサ（八丈刈安）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    椿や榊の灰汁で媒染。鮮やかな黄
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    樺色（鳶色）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    マダミ（タブノキ）の樹皮
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    赤みのある茶色。鳶八丈の地色
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    黒色
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    椎（スダジイ）の樹皮
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    染色を繰り返し、泥染め（鉄媒染）で深い黒に
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              特に黒八丈は、染色を何度も繰り返したうえで泥染めを行うため非常に手間がかかります。こうした草木染と手織りの手間が、本場黄八丈の価値の背景にあります。色味の深さや手織りの丁寧さは、査定でも評価のポイントになります。
            </p>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】本場黄八丈の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            本場黄八丈の買取価格は、証紙・作家の有無、着物か反物か、状態によって大きく変わります。以下は一般的な傾向を整理したものです（具体的な金額は状態によって変動します）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    評価の傾向
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    ポイント
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    証紙付き・著名作家
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    高く評価されやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    山下八百子・山下めゆなどの銘・落款
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    証紙付き・一般
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    一定の評価が期待できる
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    八丈島産の証明があることが前提
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    反物（未仕立て）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    仕立て済みより評価されやすい傾向
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    シミ・折れがないか確認される
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    証紙なし
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    評価が下がりやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    八丈島産の証明が難しくなる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は傾向の整理であり、特定の金額を保証するものではありません。状態・需要・取扱業者によって査定額は変動します。
          </p>
        </div>
      </section>

      {/* 工房・作家 */}
      <section id="artist" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            工房・作家と評価への影響
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              本場黄八丈は、染めと織りを担う工房・作家によって評価が変わります。中でも著名な工房・作家の作品は、中古市場でも評価されやすい傾向があります。以下は実在が確認できる代表的な工房・作家です。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                黄八丈めゆ工房
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                八丈島で染めと織りを一貫して手がける工房です。一般に分業となる工程を一貫制作することで知られ、本場黄八丈を代表する作り手のひとつです。工房の作品であることが分かると、買取でも評価のポイントになります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                山下めゆ・山下八百子（東京都指定無形文化財）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                山下めゆは、めゆ工房に名を残す作り手で、東京都指定無形文化財の技術保持者に認定されました。山下八百子（1920年生まれ、2009年没）も東京都指定無形文化財（工芸技術）の保持者に認定され、2002年に名誉都民として表彰されています。これらの作家の銘・落款がある作品は、買取でも高く評価されやすい傾向があります。
              </p>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">補足：</strong>
              本場黄八丈について確認できる公的な認定は「東京都指定無形文化財」です。国の重要無形文化財（人間国宝）として黄八丈が指定された事実は確認できていません。作家の評価は銘・落款や証紙によって裏付けられるため、これらが揃っているかどうかが重要です。
            </p>
          </div>
        </div>
      </section>

      {/* 証紙 */}
      <section id="certificate" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            黄八丈織物協同組合の証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              本場黄八丈の買取では、<strong>八丈島産であることの証明</strong>が査定額を大きく左右します。最も確実な証明が、八丈島の<strong>黄八丈織物協同組合</strong>が発行する証紙です。あわせて、伝統的工芸品の<strong>伝統証紙</strong>が付くこともあります。
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                証紙ありの場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>八丈島産であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>本場黄八丈としての真贋が裏付けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>作家銘とあわせて高めの評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">
                証紙なしの場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>八丈島産であることの証明が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>秋田産など他産地との区別がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>評価が下がりやすくなる</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-5 leading-relaxed">
            証紙は反物の端、たとう紙の中、購入時の箱などに保管されていることが多いです。証紙の見方をより詳しく知りたい方は
            <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">着物の証紙の見方ガイド</Link>
            も参考にしてください。
          </p>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            本場黄八丈を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙を必ずセットで査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                黄八丈織物協同組合の証紙や伝統証紙は、八丈島産であることを証明する最も重要な書類です。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。証紙があるかどうかで評価が大きく変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：草木染の織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                本場黄八丈は作家や産地の知識がないと正しく評価できません。一般的なリサイクルショップでは安く買い取られてしまうことがあります。
                <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">紬の種類</Link>
                や草木染に詳しい着物専門の買取業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                本場黄八丈は業者の販路や在庫状況によって査定額が変わります。最低でも3社に
                <Link href="/articles/free-appraisal/" className="text-[#6b4c8a] underline">無料査定</Link>
                を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                草木染の絹織物は、日焼けや湿気、カビに弱い素材です。特に色味は日焼けで褪色しやすく、一度褪色すると価値が下がります。たとう紙に包んで暗所で保管し、売ると決めたら早めに査定に出しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group"
              >
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <span className="text-[#c9a76c] font-bold text-lg">
                      Q.
                    </span>
                    {faq.question}
                  </span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">
                    +
                  </span>
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

      {/* 関連ページ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と買取相場
              </h3>
              <p className="text-xs text-gray-600">
                大島紬・結城紬・牛首紬など主要な紬の種類と特徴を解説。
              </p>
            </Link>
            <Link
              href="/articles/dye-vs-weave/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                染めと織りの違い
              </h3>
              <p className="text-xs text-gray-600">
                染めの着物と織りの着物の違い、買取での評価ポイントを解説。
              </p>
            </Link>
            <Link
              href="/articles/tokyo/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                東京の着物買取
              </h3>
              <p className="text-xs text-gray-600">
                東京で着物を売るなら。おすすめ業者と買取の流れを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            本場黄八丈の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            本場黄八丈の買取相場はあくまで目安です。証紙・作家・状態によって実際の査定額は大きく変わります。草木染の織物に詳しい査定員に無料査定を依頼して、お手持ちの本場黄八丈の正確な価値を確認しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">
            おすすめ買取業者ランキングを見る
          </Link>
        </div>
      </section>

      <SoubaNote />
    </>
  );
}
