import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】阿波藍染の買取相場｜本藍染の見分け方と証紙で価値が変わる",
  description:
    "阿波藍染（徳島・阿波藍）の買取相場と高く売る方法を解説。天然灰汁発酵建てによる本藍染と化学染料の違い、選定保存技術「阿波藍製造」、阿波正藍しじら織の証紙の見方まで。本藍染かどうかの見分け方と査定のポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/awa-aizome/",
  },
  openGraph: {
    title: "【2026年最新】阿波藍染の買取相場｜本藍染の見分け方と証紙で価値が変わる",
    description:
      "阿波藍染（徳島・阿波藍）の買取相場と高く売る方法。本藍染と化学染料の違い、証紙の見方を解説。",
    url: "https://kimonokaitori-biyori.com/articles/awa-aizome/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "阿波藍染の着物はどのくらいで買い取ってもらえますか？",
    answer:
      "阿波藍染の買取価格は、本藍染（天然灰汁発酵建て）か化学染料か、素材（木綿か正絹か）、証紙や付属品の有無によって大きく変わります。一般的に阿波正藍しじら織などの木綿織物は正絹の紬ほど高額にはなりにくいものの、本藍染の上質品や証紙付きのものは評価されます。具体的な金額は状態や需要、取扱業者によって変動するため、複数の着物専門業者で無料査定を受けて確認するのが確実です。",
  },
  {
    question: "本藍染（天然藍）と化学染料の藍染はどう見分けますか？",
    answer:
      "繊維には組成表示の義務がありますが、染料には法的な表示義務がありません。そのため本藍染かどうかを確実に見分けるには、第三者団体の証紙や認定の有無を確認するのが手がかりになります。天然灰汁発酵建てによる本藍染は色移り・色落ちが起こりにくいといわれる点が化学染料との違いとして説明されますが、最終的な真贋判断は専門の査定員に委ねるのが安全です。",
  },
  {
    question: "阿波藍染に証紙や付属品がない場合でも売れますか？",
    answer:
      "証紙がなくても買取自体は可能ですが、本藍染であることや産地の証明が難しくなるため、査定額が下がりやすくなります。日本藍染文化協会などが本藍染製品に認定証紙を発行しており、購入時の箱・証紙・説明書などの付属品が残っていれば一緒に査定に出すことで評価が上がる可能性があります。まずは付属品をすべて探してから査定に出しましょう。",
  },
  {
    question: "阿波藍染と阿波しじら織は何が違いますか？",
    answer:
      "阿波藍染は、徳島県で製造される天然藍染料「阿波藍（すくも）」を使った藍染そのものを指します。一方「阿波正藍しじら織」は、その阿波藍で染めた木綿の織物で、湯もみによる凹凸（しぼ＝しじら）が特徴です。阿波正藍しじら織は1978年に国の伝統的工芸品に指定されています。藍染の生地・反物・着物・帯など、形態によって買取の評価軸が変わります。",
  },
  {
    question: "阿波藍染を高く売るにはどうすればよいですか？",
    answer:
      "証紙や付属品をそろえて出すこと、本藍染や徳島の織物に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。藍染は日焼けや湿気で色合いが変化することがあるため、たとう紙に包んで暗所で保管し、売ると決めたら早めに査定に出すのがおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "阿波藍染の買取相場｜本藍染の見分け方と証紙で価値が変わる",
  description:
    "阿波藍染（徳島・阿波藍）の買取相場と高く売る方法。本藍染と化学染料の違い、証紙の見方を解説。",
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  author: {
    "@type": "Person",
    name: "着物の買取びより 編集部",
    url: "https://kimonokaitori-biyori.com/author/",
  },
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
    "@id": "https://kimonokaitori-biyori.com/articles/awa-aizome/",
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
      name: "阿波藍染",
      item: "https://kimonokaitori-biyori.com/articles/awa-aizome/",
    },
  ],
};

export default function AwaAizomePage() {
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
          { label: "阿波藍染" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#2b4a6f] text-white mb-4 tracking-wide">
              徳島・阿波藍
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">阿波藍染の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                本藍染の見分け方と証紙で価値が変わる
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              阿波藍染は、徳島県で受け継がれてきた天然藍染料「阿波藍」による藍染です。すくもを用いた天然灰汁発酵建てによる本藍染は深く澄んだ藍色が特徴で、化学染料とは区別されます。本藍染の見分け方や証紙の有無による買取価値の違い、高く売るためのポイントを詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月13日</p>
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
                    1. 阿波藍染とは？阿波藍とすくもの文化
                  </a>
                </li>
                <li>
                  <a href="#price-by-type" className="text-[#6b4c8a] hover:underline">
                    2. 【種類別】阿波藍染の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#honaizome" className="text-[#6b4c8a] hover:underline">
                    3. 本藍染と化学染料の見分け方
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 阿波藍染の指定・証紙と作り手
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 阿波藍染を高く売るポイント
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#6b4c8a] hover:underline">
                    6. よくある質問
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 阿波藍染とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            阿波藍染とは？阿波藍とすくもの文化
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              阿波藍染（あわあいぞめ）は、徳島県で製造される天然藍染料「<strong>阿波藍</strong>」を使った藍染です。阿波藍は、タデ科の植物「藍（タデアイ）」の葉を乾燥させ、約100日にわたって発酵させて作る「<strong>すくも</strong>」と呼ばれる染料が原料です。すくもの製造には約1年を要するといわれ、現在も全国で使われるすくもの多くが徳島で作られています。
            </p>
            <p>
              徳島での藍づくりは江戸時代に阿波藩（蜂須賀家）の保護を受けて大きく発展し、明治時代の最盛期には全国の市場を支える一大産業となりました。明治後半以降、インド藍や合成藍の輸入によって衰退しましたが、天然藍の伝統技術は今も藍師たちの手によって受け継がれています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">阿波藍染の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>原料は徳島産の天然藍染料「すくも（阿波藍）」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    すくもを灰汁（あく）で溶かす「天然灰汁発酵建て」による本藍染
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>布を繰り返し浸けて空気にさらし、染め重ねて深い藍色を出す</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>「ジャパンブルー」とも称される澄んだ藍の発色</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    阿波藍で染めた木綿織物「阿波正藍しじら織」は国の伝統的工芸品
                  </span>
                </li>
              </ul>
            </div>
            <p>
              なお、徳島県全体での着物買取の方法や地元業者の選び方については
              <Link href="/articles/tokushima/" className="text-[#6b4c8a] underline font-medium">
                徳島の着物買取おすすめ業者
              </Link>
              のページもあわせてご覧ください。本ページは「阿波藍染という織物・染めの価値や見分け方」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】阿波藍染の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            阿波藍染の買取価格は、品物の種類・素材・本藍染か否か・証紙の有無によって幅があります。以下は一般的な傾向をまとめたものです。実際の金額は状態や需要、業者によって大きく変わります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    価値が上がる条件
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    阿波正藍しじら織
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    阿波藍で染めた木綿織物。伝統的工芸品
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    証紙あり・本藍染・美品
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    本藍染の反物・着尺
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    天然灰汁発酵建てによる染め
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    認定証紙・付属品あり
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    藍染の帯・小物
                  </td>
                  <td className="px-4 py-3 text-gray-700">名古屋帯・半幅帯など</td>
                  <td className="px-4 py-3 text-gray-700">柄・状態・本藍染の証明</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    化学染料の藍系木綿
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    天然藍ではない藍色の木綿
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    一般的な木綿着物として評価
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            木綿織物は正絹の紬・訪問着に比べて相場が控えめになりやすい傾向があります。正絹の着物・帯と一緒にまとめて査定に出すと、全体の買取額が上がりやすくなります。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                本藍染・証紙ありが評価されやすい
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                阿波藍染で評価されやすいのは、天然灰汁発酵建てによる本藍染で、なおかつ証紙や付属品がそろっているものです。とくに阿波正藍しじら織は国の伝統的工芸品であり、伝統マークの証紙が付いていれば産地と品質の裏付けになります。逆に、染料の種類が確認できないものは一般的な木綿着物としての評価になりやすく、価格は控えめになる傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                正絹の紬・友禅とのまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                木綿の藍染は、正絹の
                <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                  紬
                </Link>
                や
                <Link href="/articles/yuzen-types/" className="text-[#6b4c8a] underline">
                  友禅
                </Link>
                ほど高額になりにくいのが一般的です。タンスにある着物・帯・和装小物をまとめて査定に出すことで、1点では値がつきにくい品も含めて全体として評価されやすくなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 本藍染の見分け方 */}
      <section id="honaizome" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            本藍染と化学染料の見分け方
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              藍染の買取で価値を左右するのが、<strong>天然の本藍染か、化学染料（合成インディゴ）による藍色か</strong>という点です。ただし、繊維には組成表示の義務がある一方で、<strong>染料には法的な表示義務がありません</strong>。そのため、見た目だけで確実に判断するのは専門家でも難しい場合があります。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                見分けの手がかりになるポイント
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>証紙・認定の有無：</strong>
                    第三者団体（日本藍染文化協会など）の認定証紙があれば本藍染の裏付けになる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>色合いの深み：</strong>
                    染め重ねた本藍染は奥行きのある藍色になるとされる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>色落ちのしにくさ：</strong>
                    天然灰汁発酵建ての本藍染は色移り・色落ちが起こりにくいといわれる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    <strong>付属品の記載：</strong>
                    購入時の箱・説明書・しおりに「本藍染」「阿波藍」などの記載があるか
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
              <p className="text-sm leading-relaxed text-gray-700">
                <strong className="text-[#6b4c8a]">注意：</strong>
                上記はあくまで一般的な傾向であり、これだけで真贋を断定することはできません。確実な判断は、藍染や徳島の織物に詳しい着物専門の査定員に委ねるのが安全です。染めの種類や産地が証紙で証明できるものは、それだけで査定の信頼性が高まります。証紙の見方については
                <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">
                  着物の証紙ガイド
                </Link>
                もあわせてご覧ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定・証紙と作り手 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            阿波藍染の指定・証紙と作り手
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              阿波藍染にまつわる公的な指定や団体を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                選定保存技術「阿波藍製造」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                阿波藍の原料となる「すくも」を作る技術は、1978年（昭和53年）に国の<strong>選定保存技術「阿波藍製造」</strong>に選定されています。保持団体は「阿波藍製造技術保存会」です。これは染料そのものを作る技術への評価であり、いわゆる「人間国宝（重要無形文化財保持者）」とは別の制度である点に注意が必要です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                伝統的工芸品「阿波正藍しじら織」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                阿波藍で染めた木綿織物「阿波正藍しじら織」は、1978年（昭和53年）に国の伝統的工芸品に指定されています。綿糸を用い、藍を原料とする植物性染料で手作業の浸染を行うのが特徴で、伝統的工芸品には伝統マークの証紙が付きます。証紙がそろっているものは産地と品質の裏付けになり、査定でも評価されやすくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙を発行する団体と藍師
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                本藍染（天然灰汁発酵建て）の製品には、日本藍染文化協会が認定証紙を発行しています。染料には表示義務がないため、こうした第三者の証紙が消費者の判断材料になります。また、すくもを作る藍師のなかには、国の選定保存技術「阿波藍製造」の無形文化財保持者として活動する佐藤昭人（さとう あきひと）氏や、現代の名工に選ばれた新居修（にい おさむ）氏など、技術を受け継ぐ作り手が現存します。こうした作り手による証明や付属品が残っているものは、査定の信頼性が高まります。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>本藍染・産地・品質の裏付けになる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>査定の上限に近い価格が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>本藍染かどうかの証明が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>一般的な木綿着物としての評価になりやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が下がる傾向がある</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            阿波藍染を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・購入時の箱・説明書・しおりなどは、本藍染や産地を示す重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。付属品の有無で評価が変わることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：藍染・徳島の織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                本藍染と化学染料の区別や、阿波正藍しじら織の価値を理解している査定員がいる業者を選ぶことが大切です。一般的なリサイクルショップでは木綿着物として一律に安く扱われることもあるため、着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                業者によって藍染への評価や販路が異なるため、査定額に差が出ることがあります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：色合いを保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                藍染は日焼けや湿気によって色合いが変化したり、カビが生じたりすることがあります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
              </p>
            </div>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">関連：</strong>
              染めの着物と織りの着物では評価軸が異なります。違いについては
              <Link href="/articles/dye-vs-weave/" className="text-[#6b4c8a] underline">
                染めと織りの違い
              </Link>
              の解説もご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの阿波藍染のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。「阿波藍染」を明記した出品は数が少なく、本藍染・化学染料・状態が入り混じるため、価格帯は大きくばらつきます。また阿波正藍しじら織は木綿織物のため、正絹の紬などに比べて実売価格も控えめな水準です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">阿波藍染（全般）</td>
                  <td className="px-4 py-3 font-medium">約8,808円</td>
                  <td className="px-4 py-3 font-medium">66,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">阿波しじら織</td>
                  <td className="px-4 py-3 font-medium">約4,620円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">39,980円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E9%98%BF%E6%B3%A2%E8%97%8D%E6%9F%93/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション 落札相場「阿波藍染」
            </a>
            ／
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E9%98%BF%E6%B3%A2%E3%81%97%E3%81%98%E3%82%89%E7%B9%94/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              同「阿波しじら織」
            </a>
            （いずれも180日間の集計・2026年7月取得。取得時点の落札件数は「阿波藍染」64件・「阿波しじら織」252件）
            <br />
            参考：産地を限定しない
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E8%97%8D%E6%9F%93%20%E7%9D%80%E7%89%A9/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              同「藍染 着物」
            </a>
            全般では約1,374件・平均約9,783円・最高1,190,000円（2026年7月取得）と、作家物・アンティークを含めて価格の幅が非常に大きくなっています。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。100円〜の極端な安値は化学染料の藍色木綿・証紙なし・状態不良・入札不成立に近い例も含み、数万円台の高値は本藍染（天然灰汁発酵建て）の上質品や証紙付きの美品などごく一部です。「阿波藍染」を明記した出品は数が少ないため平均値の振れも大きく、価格帯の“幅”の参考としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・本藍染かどうかで大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・本藍染の阿波藍染は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（本藍染・証紙・保存状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ阿波藍染でも、本藍染（天然灰汁発酵建て）か化学染料か、証紙の有無、素材、保存状態によって査定額は大きく変わります。前述の実売データの“幅”も、多くはこうした状態差から生まれています。染料には法的な表示義務がないため、証紙や付属品が本藍染であることを示す重要な手がかりになります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">状態・条件</th>
                  <th className="px-4 py-3 text-left font-semibold">査定への影響</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">解説</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["本藍染（天然灰汁発酵建て）か化学染料か", "◎〜△ 最大の分かれ目", "徳島産すくもを天然灰汁発酵建てで染めた本藍染は評価されやすく、化学染料の藍色木綿は一般的な木綿着物としての評価になりやすい、最も大きな分かれ目です。"],
                  ["日本藍染文化協会の認定証紙あり", "◎ 大きくプラス", "染料には表示義務がないため、本藍染製品に発行される第三者団体の認定証紙は本藍染の最も確かな裏付けになり、評価が安定します。"],
                  ["阿波正藍しじら織の伝統的工芸品証紙（伝統マーク）", "○〜◎ プラス", "阿波正藍しじら織は1978年に国の伝統的工芸品に指定されており、伝統マークの証紙は産地と品質の裏付けになります。"],
                  ["素材（木綿か正絹か）", "○〜△", "阿波正藍しじら織など木綿織物は、正絹の紬・訪問着に比べて相場が控えめになりやすい傾向です。正絹の藍染は素材面で有利になります。"],
                  ["反物（未仕立て）か仕立て上がりか", "○〜△", "反物は仕立ての自由度があり評価されやすい一方、仕立て上がりは寸法が現代向けかどうかで評価が分かれます。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様は最も高くなりやすい状態。保管ジワのみなら特に有利です。"],
                  ["シミ・日焼け・カビ・難あり", "△ マイナス", "藍染は日焼けや湿気で色合いが変化しやすく、シミ・カビとあわせて減額対象。難の程度・範囲で幅があります。自己クリーニングは避け、現状のまま査定へ。"],
                  ["付属品（箱・説明書・しおり）あり", "○ プラス", "購入時の箱・説明書・しおりに「本藍染」「阿波藍」などの記載があれば、染めや産地を示す手がかりとして評価の助けになります。"],
                ].map(([cond, impact, note], i) => (
                  <tr key={cond} className={`border-b border-[#e8ddd0] ${i % 2 ? "bg-[#faf8f5]" : "bg-white"} hover:bg-white transition-colors`}>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{cond}</td>
                    <td className="px-4 py-3 font-medium text-[#6b4c8a] whitespace-nowrap">{impact}</td>
                    <td className="px-4 py-3 text-gray-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「証紙なし」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
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
                    <span className="text-[#c9a76c] font-bold text-lg">Q.</span>
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

      {/* この着物を売るなら（条件別CTA） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              阿波藍染を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              阿波藍染は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い阿波藍染は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・作家・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/articles/tokushima/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                徳島の着物買取おすすめ
              </h3>
              <p className="text-xs text-gray-600">
                徳島県で着物を高く売る方法と、出張・持込・宅配に対応したおすすめ業者を比較。
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
                染めの着物と織りの着物の違いと、買取での評価軸を解説。
              </p>
            </Link>
            <Link
              href="/articles/certificate-guide/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物の証紙ガイド
              </h3>
              <p className="text-xs text-gray-600">
                証紙の見方と、買取価格への影響をわかりやすく解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            阿波藍染の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            阿波藍染の買取相場はあくまで目安です。本藍染か否か・素材・状態・証紙の有無によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの阿波藍染の正確な価値を確認しましょう。
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
