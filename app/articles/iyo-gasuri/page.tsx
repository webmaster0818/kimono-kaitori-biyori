import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】伊予絣の買取相場｜日本三大絣・愛媛の絣を高く売る方法",
  description:
    "伊予絣（愛媛・松山）の買取相場と高く売る方法を解説。鍵谷カナが考案した日本三大絣のひとつで、藍染・木綿の絣括りが特徴。愛媛県指定無形文化財への指定や証紙の有無による価値の違い、査定のポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/iyo-gasuri/",
  },
  openGraph: {
    title: "【2026年最新】伊予絣の買取相場｜日本三大絣・愛媛の絣を高く売る方法",
    description:
      "伊予絣（愛媛・松山）の買取相場と高く売る方法。藍染・木綿の絣括りが特徴。証紙の見方も解説。",
    url: "https://kimonokaitori-biyori.com/articles/iyo-gasuri/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "伊予絣はどのくらいで買い取ってもらえますか？",
    answer:
      "伊予絣は木綿の絣（かすり）のため、正絹の紬や訪問着に比べると買取相場は控えめになる傾向があります。証紙の有無、保存状態（色褪せ・ほつれ・汗染みの有無）、絣の精緻さによって評価が変わります。具体的な金額は需要や取扱業者によっても変動するため、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "伊予絣は伝統的工芸品に指定されていますか？",
    answer:
      "伊予絣は、国（経済産業大臣）が指定する伝統的工芸品ではありません。一方で、1980年（昭和55年）に愛媛県指定の伝統的特産品となり、2025年（令和7年）2月には愛媛県指定無形文化財（工芸技術）に指定されています。国指定の有無を正しく理解しておくと、査定の場で品物の位置づけを説明しやすくなります。",
  },
  {
    question: "伊予絣とはどんな織物ですか？",
    answer:
      "伊予絣は、愛媛県松山市を中心に作られてきた藍の先染めによる平織の木綿絣です。江戸後期に鍵谷カナ（かぎや かな）が考案したとされ、久留米絣・備後絣とともに日本三大絣のひとつに数えられます。糸を括って防染する「絣括り」によって、白と藍の文様を織り出すのが特徴です。",
  },
  {
    question: "伊予絣に証紙がない場合でも売れますか？",
    answer:
      "証紙がなくても買取は可能ですが、産地や品質の証明が難しくなるため査定額は下がりやすくなります。購入時の証紙・たとう紙・箱などの付属品が残っていれば、一緒に査定に出すことで評価が上がる可能性があります。まずは付属品をすべて探してから査定に出しましょう。",
  },
  {
    question: "伊予絣を高く売るにはどうすればよいですか？",
    answer:
      "証紙や付属品をそろえること、絣や愛媛の織物に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。木綿の絣は単独では値がつきにくいこともあるため、正絹の着物・帯と一緒にまとめて査定に出すと全体の買取額が上がりやすくなります。色褪せや汗染みが進む前に、早めの査定がおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "伊予絣の買取相場｜日本三大絣・愛媛の絣を高く売る方法",
  description:
    "伊予絣（愛媛・松山）の買取相場と高く売る方法。藍染・木綿の絣括りが特徴。証紙の見方も解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/iyo-gasuri/",
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
      name: "伊予絣",
      item: "https://kimonokaitori-biyori.com/articles/iyo-gasuri/",
    },
  ],
};

export default function IyoGasuriPage() {
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
          { label: "伊予絣" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#2b4a6f] text-white mb-4 tracking-wide">
              愛媛・日本三大絣
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">伊予絣の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                日本三大絣・愛媛の絣を高く売る方法
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              伊予絣は、愛媛県松山市で受け継がれてきた藍染・木綿の絣です。江戸後期に鍵谷カナが考案したとされ、久留米絣・備後絣とともに日本三大絣のひとつに数えられます。絣括りによる白と藍の文様が特徴で、証紙や状態によって買取価値が変わります。見分け方と高く売るためのポイントを解説します。
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
                    1. 伊予絣とは？鍵谷カナと日本三大絣
                  </a>
                </li>
                <li>
                  <a href="#price-by-type" className="text-[#6b4c8a] hover:underline">
                    2. 伊予絣の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#designation" className="text-[#6b4c8a] hover:underline">
                    3. 指定の有無と証紙・織元
                  </a>
                </li>
                <li>
                  <a href="#how-to-see" className="text-[#6b4c8a] hover:underline">
                    4. 伊予絣の見分け方・確認ポイント
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 伊予絣を高く売るポイント
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

      {/* 伊予絣とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伊予絣とは？鍵谷カナと日本三大絣
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              伊予絣（いよがすり）は、愛媛県松山市を中心に作られてきた<strong>藍の先染めによる平織の木綿絣</strong>です。江戸後期、伊予郡今出（現在の松山市西垣生町付近）の<strong>鍵谷カナ（かぎや かな、1782〜1864）</strong>が考案したと伝えられています。鍵谷カナの墓は県の指定文化財として現存し、その功績を顕彰する「鍵谷カナ頌功堂（しょうこうどう）」も建立されています。
            </p>
            <p>
              伊予絣は、<strong>久留米絣（福岡）・備後絣（広島）とともに「日本三大絣」</strong>のひとつに数えられます。糸を括って防染する「絣括り（かすりくくり）」と、藍染、織りの技術が結びついて、白と藍のコントラストによる文様が生まれます。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">伊予絣の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>愛媛県松山市を中心に作られる藍染・木綿の絣</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>江戸後期に鍵谷カナが考案したと伝わる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>久留米絣・備後絣とともに日本三大絣のひとつ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>糸を括って防染する「絣括り」で文様を織り出す</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>染め・括り・織りの高度な染織技術の結晶</span>
                </li>
              </ul>
            </div>
            <p>
              愛媛県全体での着物買取の方法や地元業者の選び方については
              <Link href="/articles/ehime/" className="text-[#6b4c8a] underline font-medium">
                愛媛の着物買取おすすめ業者
              </Link>
              のページもあわせてご覧ください。本ページは「伊予絣という織物の価値や見分け方」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伊予絣の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            伊予絣は木綿の絣のため、正絹の紬や訪問着に比べると買取相場は控えめになる傾向があります。証紙の有無、保存状態、絣の精緻さによって評価が変わります。以下は一般的な傾向であり、実際の金額は需要や業者によって大きく変わります。
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
                    伊予絣の反物・着尺
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    未仕立ての反物、絣の精緻なもの
                  </td>
                  <td className="px-4 py-3 text-gray-700">証紙あり・美品</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    伊予絣の着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    仕立て済みの木綿の絣着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    色褪せ・汗染みがない
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    証紙・付属品なし
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    産地証明が確認できないもの
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
            木綿の絣は正絹の着物より相場が控えめになりやすい傾向があります。正絹の着物・帯と一緒にまとめて査定に出すと、全体の買取額が上がりやすくなります。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙と状態が評価を左右する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                伊予絣の買取では、証紙の有無と保存状態が大きく影響します。証紙があれば産地の裏付けになり、評価が上がりやすくなります。一方、色褪せ・ほつれ・汗染みなどがあると減額の対象になります。絣の文様が細かく精緻なものほど手間がかかっており、評価されやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                正絹の紬とのまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                木綿の絣は、正絹の
                <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                  紬
                </Link>
                ほど高額になりにくいのが一般的です。タンスにある着物・帯・和装小物をまとめて査定に出すことで、1点では値がつきにくい品も含めて全体として評価されやすくなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定と証紙 */}
      <section id="designation" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            指定の有無と証紙・織元
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              伊予絣にまつわる公的な指定を正しく理解しておくと、査定の場で品物の位置づけを説明しやすくなります。ここでは確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                国指定ではなく、愛媛県の指定
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                伊予絣は、国（経済産業大臣）が指定する伝統的工芸品ではありません。一方で、<strong>1980年（昭和55年）に愛媛県指定の伝統的特産品</strong>となり、<strong>2025年（令和7年）2月には愛媛県指定無形文化財（工芸技術）</strong>に指定されています。国指定の久留米絣などとは指定の枠組みが異なる点に注意が必要です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙と現存する織元
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                伊予絣は、かつて「伊予織物同業組合」が存在し産地を支えていました。現在では伊予絣を製造する事業者は限られており、<strong>白方興業（しらかたこうぎょう）</strong>などが製造・販売を継続しています。同社は藍染体験や販売を行う拠点も運営しています。証紙の有無で査定額が変わるため、購入時の証紙や付属品が残っているか確認しておきましょう。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>産地・品質の裏付けになる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伊予絣としての評価が受けやすい</span>
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
                  <span>産地の証明が難しい</span>
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

      {/* 見分け方 */}
      <section id="how-to-see" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伊予絣の見分け方・確認ポイント
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              伊予絣かどうか、また価値の高い品かどうかを確認するときは、以下のポイントが手がかりになります。最終的な判断は専門の査定員に委ねるのが安全です。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>証紙・付属品：</strong>
                  産地や織元を示す証紙、購入時のしおりや箱があるか
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>素材：</strong>
                  木綿の平織で、藍の先染めによる絣であること
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>絣の精緻さ：</strong>
                  文様の細かさ・絣足（かすりあし）のにじみ具合
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>状態：</strong>
                  色褪せ・ほつれ・汗染み・虫食いがないか
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              絣は「織り」の着物の代表格です。染めの着物との評価の違いについては
              <Link href="/articles/dye-vs-weave/" className="text-[#6b4c8a] underline">
                染めと織りの違い
              </Link>
              、証紙の見方については
              <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">
                着物の証紙ガイド
              </Link>
              もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伊予絣を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・購入時の箱・しおりなどは、産地や品質を示す手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。付属品の有無で評価が変わることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：絣・愛媛の織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                伊予絣の価値を理解している査定員がいる業者を選ぶことが大切です。一般的なリサイクルショップでは木綿着物として一律に安く扱われることもあるため、着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                業者によって絣への評価や販路が異なるため、査定額に差が出ることがあります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                木綿の絣は、汗染みや色褪せ、虫食いが進むと価値が下がりやすくなります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの伊予絣のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。伊予絣は木綿の絣のため、正絹の紬などと比べると実売価格は総じて控えめです。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">伊予絣（全般）</td>
                  <td className="px-4 py-3 font-medium">約5,108円</td>
                  <td className="px-4 py-3 font-medium">44,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">伊予絣 反物</td>
                  <td className="px-4 py-3 font-medium">約6,309円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">44,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%BC%8A%E4%BA%88%E7%B5%A3/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション 落札相場「伊予絣」
            </a>
            ／
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E4%BC%8A%E4%BA%88%E7%B5%A3%20%E5%8F%8D%E7%89%A9/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              同「伊予絣 反物」
            </a>
            （2026年7月取得）
            <br />
            参考：
            <a
              href="https://aucfan.com/intro/q-~b0cbcdbde5b3/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              オークファン（aucfan）
            </a>
            の集計では、直近30日の落札件数30件・平均落札価格約5,435円。伊予絣は最安200円台の落札例もあり、状態・証紙の有無で幅があります。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。数百円台の安値は証紙なし・状態不良・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。木綿の絣は正絹の着物より相場が控えめになりやすく、金額は取得時点のもので、相場は時期・状態・証紙で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・状態の良い伊予絣は業者で査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ伊予絣でも、証紙・産地表示の有無、絣の質、保存状態によって評価は上下します。前提として伊予絣は木綿の絣（日常着系）のため、正絹の紬や訪問着ほど高額にはなりにくいものの、上質品・希少なものはその中で相対的に評価されます。前述の実売データの“幅”も、多くはこうした状態差から生まれています。
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
                  ["証紙・産地表示あり", "◎ プラス", "織元や産地を示す証紙・産地表示があると、伊予絣としての裏付けになり評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "産地の証明が難しく、一般的な木綿着物として慎重に査定されがち。たとう紙や箱など他の手がかりが重要に。"],
                  ["藍染め・精緻な絣柄の上質品", "◎ プラス", "手間のかかる細かい絣括りや、深みのある本藍染めの上質なものは、木綿絣の中では相対的に高く評価されやすいです。"],
                  ["木綿絣（日常着）", "△〜○ 控えめ", "伊予絣は普段着として織られた木綿絣が中心のため、正絹の着物ほど高額にはなりにくいのが正直なところです。状態が良ければ日常着需要で値がつきます。"],
                  ["作家物・希少柄", "◎ プラス", "作家名や希少な絵絣・凝った文様が確認できるものは、コレクター需要もあり別格の評価になることがあります。"],
                  ["未使用・しつけ糸付き", "◎ 高評価", "新品同様・未仕立てに近いものは、木綿絣の中では最も高くなりやすい状態です。反物なら好みのサイズに仕立てられ需要も広がります。"],
                  ["美品（着用少・難なし）", "○ 良好", "目立つシミ・色あせ・ほつれがなければ、安定した評価が期待できます。"],
                  ["シミ・色あせ・難あり", "△ マイナス", "汗染み・色あせ・虫食い・ほつれなどは減額対象。木綿は色あせが進みやすいため、状態が良いうちの査定がおすすめです。自己クリーニングは避け現状のまま。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに「証紙なし」「難あり」は業者による差が出やすいため、状態に不安がある場合ほど複数社で相見積もりを取ると安心です。木綿絣は単体で値がつきにくいこともあるため、正絹の着物・帯とまとめて査定に出すと全体の評価が上がりやすくなります。
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
              伊予絣を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              伊予絣は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い伊予絣は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/ehime/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                愛媛の着物買取おすすめ
              </h3>
              <p className="text-xs text-gray-600">
                愛媛県で着物を高く売る方法と、出張・持込・宅配に対応したおすすめ業者を比較。
              </p>
            </Link>
            <Link
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と買取相場
              </h3>
              <p className="text-xs text-gray-600">
                各地の紬の種類と特徴、買取相場の傾向をまとめて解説。
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
            伊予絣の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            伊予絣の買取相場はあくまで目安です。証紙の有無・状態・絣の精緻さによって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの伊予絣の正確な価値を確認しましょう。
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
