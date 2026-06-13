import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】天蚕紬の買取相場｜繊維のダイヤモンド・希少な天蚕糸の価値と高く売るコツ",
  description:
    "天蚕紬（てんさんつむぎ）の買取相場を徹底解説。天蚕（ヤママユ）の希少な天然糸が生む緑がかった光沢、長野県安曇野・穂高の産地背景、証紙や状態で変わる査定額の傾向、高く売るポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/tensan-tsumugi/",
  },
  openGraph: {
    title:
      "【2026年最新】天蚕紬の買取相場｜繊維のダイヤモンド・希少な天蚕糸の価値",
    description:
      "天蚕紬の買取相場と高く売る方法を解説。希少な天蚕糸の緑がかった光沢が特徴。",
    url: "https://kimonokaitori-biyori.com/articles/tensan-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "天蚕紬はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "天蚕紬の買取相場は、使われている天蚕糸の割合や着物の種類、状態によって幅があります。天蚕糸を一部に使った紬で数千円〜数万円、天蚕糸を多く使った希少な反物や状態の良い作品では十万円前後になることもあります。天蚕は飼育数が限られる希少な糸のため、産地や品質を証明できる情報があるかどうかで査定額が大きく変わります。",
  },
  {
    question: "天蚕紬と普通の紬の違いは何ですか？",
    answer:
      "天蚕紬は、家蚕（かさん／一般的なカイコ）ではなく天蚕（てんさん＝ヤママユガの繭）から採れる糸を使った紬です。天蚕糸は染めなくても淡い緑がかった黄緑色をしており、独特の上品な光沢があるのが特徴です。軽くて丈夫、保温性に優れる希少な糸で「繊維のダイヤモンド」とも呼ばれます。普通の紬（白い家蚕糸）とは色味と質感が異なります。",
  },
  {
    question: "天蚕紬の産地はどこですか？",
    answer:
      "天蚕の人工飼育は長野県安曇野市（旧穂高町有明地区）が国内発祥とされ、天明年間（1781〜1789年）に始まったと伝えられています。200年以上の歴史を持つ天蚕の里として知られ、安曇野市天蚕センターでは天蚕の生態や織りを紹介しています。「穂高天蚕」の商標は1984年に登録されました。なお、天蚕糸は各地の織り手にも使われており、産地表示は作品ごとに確認が必要です。",
  },
  {
    question: "天蚕紬に証紙はありますか？",
    answer:
      "天蚕紬は天蚕糸を使った紬の総称で、加賀友禅や西陣織のような統一された組合証紙が必ず付くわけではありません。産地や工房によっては独自のラベルや説明書、購入時の証明書が添えられている場合があります。天蚕糸の使用を示す資料・たとう紙・購入時の書類が残っていれば、希少性の証明になり査定にプラスに働くため、必ず一緒に査定へ出しましょう。",
  },
  {
    question: "天蚕紬を高く売るにはどうすればよいですか？",
    answer:
      "天蚕紬は希少な天蚕糸の価値を正しく評価できる専門業者を選ぶことが最も重要です。一般的なリサイクルショップでは天蚕糸の希少性が見落とされ、普通の紬として安く査定されることがあります。たとう紙・証明書・購入時の資料を揃え、紬や産地織物に詳しい着物専門の買取業者で、複数社の無料査定を比較するのがおすすめです。日焼けやシミは価値を下げるため、早めの査定が有利です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "天蚕紬の買取相場｜繊維のダイヤモンド・希少な天蚕糸の価値",
  description:
    "天蚕紬の買取相場と高く売る方法を解説。希少な天蚕糸の緑がかった光沢が特徴。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/tensan-tsumugi/",
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
      name: "天蚕紬",
      item: "https://kimonokaitori-biyori.com/articles/tensan-tsumugi/",
    },
  ],
};

export default function TensanTsumugiPage() {
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
          { label: "天蚕紬" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              希少な天然糸の紬
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">天蚕紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                繊維のダイヤモンド・希少な天蚕糸の価値
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              天蚕紬（てんさんつむぎ）は、ヤママユガの繭から採れる希少な「天蚕糸」を使った紬です。染めなくても淡い緑がかった黄緑色と上品な光沢を放ち、「繊維のダイヤモンド」とも称されます。長野県安曇野・穂高の産地背景や、希少性が買取価格に与える影響、高く売るためのポイントを詳しく解説します。
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
                    1. 天蚕紬とは？繊維のダイヤモンドと呼ばれる理由
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】天蚕紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#origin" className="text-[#6b4c8a] hover:underline">
                    3. 天蚕の産地・安曇野と穂高天蚕
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 天蚕紬の証明と査定ポイント
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 天蚕紬を高く売るポイント
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

      {/* 天蚕紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            天蚕紬とは？繊維のダイヤモンドと呼ばれる理由
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              天蚕紬（てんさんつむぎ）は、一般的なカイコ（家蚕＝かさん）ではなく、<strong>天蚕（てんさん）</strong>と呼ばれるヤママユガの繭から採れる糸を使って織られた紬です。天蚕は屋外のクヌギやナラの木で育つ野蚕（やさん）の一種で、家蚕に比べて飼育が難しく、得られる糸の量もごくわずかです。
            </p>
            <p>
              天蚕糸の最大の特徴は、<strong>染めなくても淡い緑がかった黄緑色</strong>をしていることです。独特の上品な光沢があり、軽くて丈夫、保温性に優れるという希少な性質を併せ持つことから、<strong>「繊維のダイヤモンド」</strong>とも称されます。家蚕の白い絹糸とは色味も質感も異なり、天蚕糸ならではの落ち着いた風合いが珍重されてきました。
            </p>
            <p>
              天蚕糸は採れる量が非常に限られるため、反物全体を天蚕糸だけで織るのは難しく、家蚕糸と組み合わせて一部に天蚕糸を使う作品も多くあります。どの程度天蚕糸が使われているか、産地や織りの背景が確認できるかが、価値を判断するうえで重要になります。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">天蚕紬の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    天蚕（ヤママユ）の繭から採れる希少な天然糸を使用
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    染めなくても淡い緑がかった黄緑色と上品な光沢を放つ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>軽く丈夫で保温性に優れる「繊維のダイヤモンド」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    採取量が少なく、家蚕糸と組み合わせた作品も多い
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】天蚕紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            天蚕紬の買取価格は、使われている天蚕糸の割合や着物・反物の種類、状態によって大きく異なります。希少な糸であることから、品質や産地を証明できる情報があるかどうかが査定の鍵になります。以下は一般的な傾向の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    買取相場の傾向
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    天蚕糸を一部に使った紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    家蚕糸との組み合わせ
                  </td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">
                    状態・産地証明で変動
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    天蚕糸を多く使った反物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    希少性が高い未仕立て品
                  </td>
                  <td className="px-4 py-3 font-medium">数万円〜十万円前後</td>
                  <td className="px-4 py-3 text-gray-700">
                    希少性と状態が価格を左右
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    天蚕紬の着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">仕立て済みの紬</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700">
                    サイズ・状態に左右される
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    天蚕糸の帯
                  </td>
                  <td className="px-4 py-3 text-gray-700">名古屋帯・袋帯</td>
                  <td className="px-4 py-3 font-medium">数千円〜数万円</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    織りの精緻さで変動
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記は美品の場合の傾向の目安です。天蚕糸の使用割合、産地証明の有無、状態、サイズによって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                天蚕糸の希少性が価格を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                天蚕糸は採取量がごくわずかな希少素材のため、反物全体に多く使われているほど価値が高くなる傾向があります。一方で、天蚕糸が一部にしか使われていない場合や、天蚕糸であることを証明できる資料がない場合は、一般的な紬として評価されることもあります。希少性を正しく伝えられるかどうかが、査定額の分かれ目になります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が価値に直結する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                天蚕紬は正絹の紬であり、日焼け・シミ・カビなどがあると価値が大きく下がります。特に天蚕糸ならではの淡い緑がかった色味は、日焼けによる褪色で本来の魅力が損なわれやすい点に注意が必要です。保管状態が良いうちに早めに査定へ出すことが、価値を守るうえで大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 産地 */}
      <section id="origin" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            天蚕の産地・安曇野と穂高天蚕
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              天蚕の人工飼育は、<strong>長野県安曇野市（旧穂高町有明地区）</strong>が国内発祥とされています。天明年間（1781〜1789年）に飼育が始まったと伝えられ、<strong>200年以上の歴史</strong>を持つ天蚕の里として知られてきました。
            </p>
            <p>
              安曇野市天蚕センターでは、天蚕の歴史や生態が紹介され、併設の工房では天蚕織りの様子を見ることができます。地域ブランドとしての<strong>「穂高天蚕」の商標は1984年に登録</strong>されました。安曇野は今も天蚕糸を象徴する産地として広く知られています。
            </p>
            <p>
              なお、天蚕糸は安曇野以外の織り手の手でも作品に使われています。そのため、お手持ちの天蚕紬がどこで織られたものかは、たとう紙や購入時の資料、織り元の情報などから作品ごとに確認することが大切です。
            </p>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              長野県の織物・紬の買取相場については、
              <Link
                href="/articles/nagano/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                長野県の着物買取相場
              </Link>
              のページもあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 証明と査定ポイント */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            天蚕紬の証明と査定ポイント
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              天蚕紬は天蚕糸を使った紬の総称であり、加賀友禅や西陣織のように統一された組合の証紙が必ず付くわけではありません。そのため、天蚕糸であることや産地を示す資料が残っているかどうかが、査定で特に重要になります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                証明資料がある場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>天蚕糸の使用・産地が証明され、希少性を評価しやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>たとう紙・説明書・購入時の書類が査定の根拠になる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>相場の上限に近い査定が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">
                証明資料がない場合
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>天蚕糸の希少性が伝わらず、一般の紬扱いになりやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地や織り元が特定できず、評価が難しくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>専門知識のない業者では安く査定される可能性がある</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-[#6b4c8a]">ポイント：</strong>
              紬には産地ごとにさまざまな種類があり、評価の基準も異なります。紬全体の見分け方や種類については
              <Link
                href="/articles/tsumugi-types/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                紬の種類と見分け方
              </Link>
              、織りの着物と染めの着物の違いについては
              <Link
                href="/articles/dye-vs-weave/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                染めと織りの違い
              </Link>
              もあわせてご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            天蚕紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証明資料・たとう紙を必ず一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                天蚕糸の使用や産地を示す説明書・購入時の書類・たとう紙があれば、希少性の証明になり査定額が上がりやすくなります。箱や引き出しの中などに保管されていることが多いので、必ず探して一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：紬・産地織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                天蚕糸の希少性を正しく評価できる業者を選ぶことが何より重要です。一般的なリサイクルショップでは普通の紬として安く査定されることがあります。紬や産地織物の知識を持つ着物専門の買取業者であれば、天蚕紬の価値を踏まえた査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                天蚕紬のような希少な織物は、業者の知識や販路によって査定額に差が出やすいものです。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                天蚕紬は正絹のため、湿気やカビ、日焼けに弱い素材です。特に天蚕糸の淡い緑がかった色味は日焼けで褪色しやすく、一度褪色すると価値が下がります。たとう紙に包んで暗所で保管し、売ると決めたら早めに査定に出すのがおすすめです。
              </p>
            </div>
          </div>
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

      {/* 関連ページ */}
      <section className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/ranking/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取おすすめランキング
              </h3>
              <p className="text-xs text-gray-600">
                買取大吉・ウリエルなどおすすめ5社を徹底比較。口コミ・評判・買取実績まで。
              </p>
            </Link>
            <Link
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と見分け方
              </h3>
              <p className="text-xs text-gray-600">
                大島紬・結城紬など、産地別の紬の特徴と買取相場をまとめて解説。
              </p>
            </Link>
            <Link
              href="/articles/yuki-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                結城紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                重要無形文化財・結城紬の亀甲別買取相場。200亀甲以上は超高額査定。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            天蚕紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            天蚕紬の買取相場はあくまで目安です。天蚕糸の使用割合・産地・状態・証明資料の有無によって実際の査定額は大きく変わります。紬に詳しい着物専門の査定員に無料査定を依頼して、お手持ちの天蚕紬の正確な価値を確認しましょう。
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
