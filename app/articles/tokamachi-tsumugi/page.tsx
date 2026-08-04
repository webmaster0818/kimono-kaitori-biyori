import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】十日町紬の買取相場｜十日町絣との関係と証紙の見方",
  description:
    "十日町紬（新潟県十日町市周辺の絹織物）の買取相場を実売データ付きで解説。国の伝統的工芸品「十日町絣」「十日町明石ちぢみ」との関係、塩沢紬との違い、十日町織物工業協同組合の証紙、公開オークションの落札実績、高く売るポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/tokamachi-tsumugi/",
  },
  openGraph: {
    title: "【2026年最新】十日町紬の買取相場｜十日町絣との関係と証紙の見方",
    description:
      "十日町紬の買取相場と高く売る方法を実売データ付きで解説。十日町絣・塩沢紬との違いも整理します。",
    url: "https://kimonokaitori-biyori.com/articles/tokamachi-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "十日町紬はどのくらいで買い取ってもらえますか？",
    answer:
      "十日町紬の買取価格は、証紙の有無、伝統工芸士など作り手の確認可否、仕立てや状態によって大きく変わります。参考として、公開オークションでの実売データでは、単品出品123件の平均落札価格は約4,767円（中央値3,109円）、最高落札価格は23,080円でした（2026年7月16日取得・実売価格は買取査定額とは異なります）。買取価格は実売価格より低くなるのが一般的で、具体的な金額は業者や需要によっても変わるため、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "十日町紬と十日町絣の違いは何ですか？",
    answer:
      "「十日町紬」は、新潟県十日町市周辺で織られる紬・絣の絹織物を指す呼び名として市場で広く使われています。一方、国（経済産業大臣）の伝統的工芸品として指定されている正式名称は「十日町絣」と「十日町明石ちぢみ」で、いずれも1982年（昭和57年）11月1日に指定されています。十日町絣は、越後縮の技法を19世紀中頃に絹織物へ応用して生まれた絣織物で、産地組合は十日町織物工業協同組合です。お手元の品の証紙にどちらの名称が書かれているかを確認すると、正確な種類がわかります。",
  },
  {
    question: "十日町紬と塩沢紬の違いは何ですか？",
    answer:
      "どちらも新潟県の絹織物ですが、産地が異なります。十日町紬（十日町絣）は十日町市・津南町周辺、塩沢紬は南魚沼市（旧塩沢町）周辺の織物です。いずれも麻織物（越後縮・越後上布）の技術を絹に応用して生まれたという共通の背景を持つため混同されやすいのですが、産地も証紙を発行する組合も別です。証紙で産地を確認するのが確実です。",
  },
  {
    question: "十日町紬に証紙がない場合でも売れますか？",
    answer:
      "証紙がなくても買取は可能ですが、産地や品質の裏付けが難しくなるため査定額は下がりやすくなります。十日町の織物には産地組合（十日町織物工業協同組合）の証紙が付くものがあり、伝統的工芸品の十日町絣・十日町明石ちぢみには伝統証紙が付くものもあります。証紙は反物の端やたとう紙の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。",
  },
  {
    question: "十日町紬を高く売るにはどうすればよいですか？",
    answer:
      "第一に、証紙や購入時の付属品をそろえて査定に出すことです。第二に、紬や絣の織物に詳しい着物専門の買取業者を選ぶことです。実売データでは伝統工芸士の作品や単衣仕立ての良品が上位に入る傾向があり、作り手や仕立てを正しく評価できる業者かどうかで差が出ます。第三に、複数社で相見積もりを取り、日焼けやシミが進む前に早めに査定へ出すことが大切です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "十日町紬の買取相場｜十日町絣との関係と証紙の見方",
  description:
    "十日町紬の買取相場と高く売る方法を実売データ付きで解説。十日町絣・塩沢紬との違いも整理します。",
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
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
    "@id": "https://kimonokaitori-biyori.com/articles/tokamachi-tsumugi/",
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
      name: "十日町紬",
      item: "https://kimonokaitori-biyori.com/articles/tokamachi-tsumugi/",
    },
  ],
};

const datasetStructuredData = {"@context": "https://schema.org", "@type": "Dataset", "name": "十日町紬の実売相場データ（公開オークション落札相場）", "description": "十日町紬について、公開オークション（Yahoo!オークションの落札相場）で実際に売買が成立した落札件数・平均落札価格・最高落札価格を集計した実売データ（一次情報）です。買取業者の査定額ではなく、個人間取引で成立した実売価格の集計値です。", "creator": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "publisher": {"@type": "Organization", "name": "着物の買取びより", "url": "https://kimonokaitori-biyori.com"}, "isBasedOn": "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E5%8D%81%E6%97%A5%E7%94%BA%E7%B4%AC", "variableMeasured": ["落札件数", "平均落札価格", "最高落札価格"], "measurementTechnique": "公開オークションの落札相場ページの手動集計（推定値・出典不明の数値は不採用）", "temporalCoverage": "P180D", "dateModified": "2026-07-16", "url": "https://kimonokaitori-biyori.com/articles/tokamachi-tsumugi/#auction-data", "isAccessibleForFree": true};

export default function TokamachiTsumugiPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetStructuredData) }}
      />

      <Breadcrumb
        items={[
          { label: "買取相場", href: "/articles/" },
          { label: "十日町紬" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              新潟・きもの総合産地
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">十日町紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                十日町絣との関係と証紙の見方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              十日町紬（とおかまちつむぎ）は、新潟県十日町市周辺で織られる紬・絣の絹織物を指す呼び名として広く使われています。国の伝統的工芸品として指定されているのは「十日町絣」と「十日町明石ちぢみ」（いずれも1982年指定）で、十日町は全国有数のきもの総合産地として知られます。本ページでは、公開オークションの実売データとあわせて、証紙の見方や高く売るポイントを解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年7月16日</p>
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
                    1. 十日町紬とは？きもの総合産地・十日町の織物
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 十日町絣・十日町明石ちぢみとの関係
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 十日町紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 十日町紬を高く売るポイント
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

      {/* 十日町紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            十日町紬とは？きもの総合産地・十日町の織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              十日町紬（とおかまちつむぎ）は、<strong>新潟県十日町市周辺で織られる紬・絣の絹織物</strong>を指す呼び名として、市場や買取の現場で広く使われています。十日町は豪雪地帯の織物のまちとして発展し、新潟県も「全国有数のきもの総合産地」と紹介する一大産地です。
            </p>
            <p>
              このあたりの織物は、麻織物である<strong>越後縮（えちごちぢみ）の技法を19世紀中頃に絹織物へ応用</strong>して生まれたとされています。先染めの絣織物（十日町絣・十日町明石ちぢみ）で栄えたのち、1960年代後半からは後染めの友禅（十日町友禅の振袖・訪問着など）にも展開し、先染め・後染めの両方を手がける総合産地となりました。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">十日町の織物の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>産地は新潟県十日町市・中魚沼郡津南町周辺</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>越後縮の技法を絹に応用して生まれたとされる先染めの絣織物が源流</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>「十日町絣」「十日町明石ちぢみ」が1982年（昭和57年）に国の伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>産地組合は十日町織物工業協同組合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>後染めの十日町友禅も含む、先染め・後染めの総合産地</span>
                </li>
              </ul>
            </div>
            <p>
              同じ新潟県の紬では、南魚沼市の
              <Link href="/articles/shiozawa-tsumugi/" className="text-[#6b4c8a] underline font-medium">
                塩沢紬・本塩沢
              </Link>
              と混同されやすいので注意しましょう。どちらも越後の麻織物の技術を絹に応用した背景を持ちますが、産地も証紙を発行する組合も別の織物です。麻織物そのものについては
              <Link href="/articles/echigo-jofu/" className="text-[#6b4c8a] underline font-medium">
                越後上布
              </Link>
              ・
              <Link href="/articles/ojiya-chijimi/" className="text-[#6b4c8a] underline font-medium">
                小千谷縮
              </Link>
              のページで解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* 十日町絣との関係 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            十日町絣・十日町明石ちぢみとの関係
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            「十日町紬」という呼び名は広く使われていますが、国の伝統的工芸品の指定名称は「十日町絣」「十日町明石ちぢみ」です。お手元の品がどれに当たるかは、証紙の名称で確認できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    名称
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    位置づけ・特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    十日町絣（とおかまちがすり）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    経絣と緯絣を組み合わせた民芸調の絣織物。絹独特の艶と風合いが特徴。1982年（昭和57年）11月1日に国の伝統的工芸品に指定
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    十日町明石ちぢみ
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    緯糸に強撚糸を使い、シボのある涼やかな薄地に仕上げた夏向きの織物。十日町絣と同日に国の伝統的工芸品に指定
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    十日町紬（呼び名）
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    十日町産の紬・絣の絹織物を指す市場での呼び名。伝統的工芸品の指定名称ではないため、証紙で正確な種類を確認するのが確実
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 指定名称・指定日は
            <a
              href="https://kougeihin.jp/craft/0115/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              伝統工芸 青山スクエア（伝統的工芸品産業振興協会）「十日町絣」
            </a>
            および
            <a
              href="https://www.pref.niigata.lg.jp/sec/chiikishinko/1293144423501.html"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              新潟県公式サイト
            </a>
            で確認しています（確認日：2026年7月16日）。
          </p>
        </div>
      </section>

      {/* 相場の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            十日町紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            十日町紬の買取価格は、証紙の有無・作り手（伝統工芸士など）の確認可否・仕立て・状態によって大きく変わります。以下は一般的な傾向で、実際の金額は需要や業者によって変動します（実売データは後述の
            <a href="#auction-data" className="text-[#6b4c8a] underline">実売データ</a>
            をご覧ください）。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙あり・作り手がわかる品が高評価
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地組合の証紙や伝統証紙がそろい、伝統工芸士など作り手が確認できる品は評価されやすくなります。実売データでも、伝統工芸士の作品や単衣仕立ての良品が上位に入る傾向が見られました。逆に、産地の裏付けがない品は評価が控えめになりがちです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                流通量が多く、まとめ売りも多い産地
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                十日町は生産量の多い総合産地のため、市場での流通量も比較的多く、まとめ売り・複数点ロットでの出品が目立ちます。一点ずつの価値を評価してほしい場合は、証紙付きの品を単品で査定してもらい、複数社で比較するのがおすすめです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                ほかの紬・着物とのまとめ査定
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                十日町紬のほかに
                <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                  紬の着物
                </Link>
                や帯・和装小物をお持ちの場合は、まとめて査定に出すと全体として評価されやすくなります。単品の価値と点数のバランスを見ながら売り方を選びましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定と証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品の指定と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              十日町の織物にまつわる公的な指定を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは公式に確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                国の伝統的工芸品「十日町絣」「十日町明石ちぢみ」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                <strong>1982年（昭和57年）11月1日</strong>に、「十日町絣」と「十日町明石ちぢみ」が国（経済産業大臣）の伝統的工芸品に指定されています。産地は十日町市・中魚沼郡津南町周辺で、産地組合は<strong>十日町織物工業協同組合</strong>です。十日町絣は、生糸・玉糸・真綿の紡ぎ糸などを使い、手作業のくびり（括り）や摺り込みで染めた絣糸で細かな模様を織り出します。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                「十日町紬」表記の品は証紙で種類を確認
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                「十日町紬」として流通している品には、伝統的工芸品の十日町絣に当たるもの、産地組合の検査を経た十日町産の織物、産地の裏付けがないものなどが混在しています。反物の端やたとう紙に付いた証紙の名称・組合名を確認することで、正確な種類と価値の裏付けがわかります。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>産地・品質が証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統的工芸品（十日町絣など）としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>伝統工芸士など作り手に応じた評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地・種類の特定が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>塩沢紬など他産地の織物との区別がつきにくくなる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>査定額が下がる傾向がある</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              証紙の見方については
              <Link href="/articles/certificate-guide/" className="text-[#6b4c8a] underline">
                着物の証紙ガイド
              </Link>
              、紬全般の種類と相場については
              <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                紬の種類と買取相場
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
            十日町紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                産地組合の証紙・伝統証紙・購入時の箱やしおりは、産地と種類を示す重要な手がかりです。「十日町紬」か「十日町絣」か「明石ちぢみ」かで評価の軸が変わるため、証紙の名称がわかる状態で査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：まとめ売りにする前に単品の価値を確認する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                十日町の織物は流通量が多く、まとめ売りでは一点ごとの価値が埋もれがちです。証紙付きの品や伝統工芸士の作品が混ざっている場合は、単品としての評価を業者に確認してから売り方を決めると損を避けられます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：紬に詳しい専門業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                一般的なリサイクルショップでは、十日町絣と他産地の紬の区別がつかず一律に扱われることがあります。着物専門の買取業者に依頼し、最低でも複数社で相見積もりを取って評価と説明を比較しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                絹の織物は、日焼け・湿気・汗染み・虫食いで価値が下がりやすくなります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めの査定がおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実売データ */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの十日町紬のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold">中央値</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">十日町紬 全体（着物・帯・反物）</td>
                  <td className="px-4 py-3 font-medium">123件</td>
                  <td className="px-4 py-3 font-medium">約4,767円</td>
                  <td className="px-4 py-3 font-medium">3,109円</td>
                  <td className="px-4 py-3 font-medium">23,080円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物</td>
                  <td className="px-4 py-3 font-medium">96件</td>
                  <td className="px-4 py-3 font-medium">約5,142円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium">23,080円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯</td>
                  <td className="px-4 py-3 font-medium">27件</td>
                  <td className="px-4 py-3 font-medium">約3,435円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">5,800円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E5%8D%81%E6%97%A5%E7%94%BA%E7%B4%AC"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「十日町紬」の落札相場
            </a>
            （集計期間：2026年1月18日〜2026年7月15日［約180日相当］・2026年7月16日取得）
            <br />
            ※ タイトルに「十日町紬」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外しています（まとめ売りが多い産地のため97件を除外）。小物・ハギレ等は表から除外しています。
            <br />
            ※ 傾向として、伝統工芸士の作品や単衣仕立ての良品が上位に入っています。産地の裏付けがない品との価格差が大きく、上表の平均・中央値は“幅”の参考としてご覧ください。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品と、伝統工芸士の作品や証紙付きの良品では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・作り手で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・伝統工芸士の十日町紬は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・作り手・仕立てでどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ十日町紬でも、証紙の有無、作り手の確認可否、仕立てや保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（十日町織物工業協同組合・伝統証紙）", "◎ 大きくプラス", "産地組合の検査を経た証紙は産地・品質の裏付けになり、評価が安定します。伝統的工芸品（十日町絣・十日町明石ちぢみ）に当たるかどうかも証紙で確認できます。"],
                  ["証紙なし", "△ 下がりやすい", "十日町産か、塩沢紬など他産地の類似織物かの判別が難しくなり、慎重な査定になりがち。落款・付属品など他の手がかりが重要になります。"],
                  ["伝統工芸士など作り手が確認できる", "◎ 高評価", "実売データでも伝統工芸士の作品が上位に入る傾向があります。証紙・付属品とあわせて作り手が確認できると有利です。"],
                  ["単衣仕立ての良品", "○ 評価されやすい", "実売データでは単衣仕立ての良品が上位に入る傾向が見られました。仕立ての質とサイズも評価に影響します。"],
                  ["未使用・しつけ糸付き", "◎ プラス", "未使用品や美品は状態評価が高く、同じ種類でも使用感のある品より評価されやすくなります。"],
                  ["反物（未仕立て）", "○ 需要で変動", "未仕立ての反物は用途の自由度が高く、状態が良ければ評価されやすいことがあります。"],
                  ["まとめ売り・ロットの一部", "△ 単品評価が埋もれる", "まとめ売りでは一点ごとの価値が反映されにくくなります。証紙付き・作り手がわかる品は単品査定を検討しましょう。"],
                  ["日焼け・シミ・カビ・難あり", "△ マイナス", "絹の織物は日焼け・汗染み・虫食いで価値が下がりやすく、状態不良は減額対象。自己クリーニングは避け、現状のまま査定へ。"],
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

      {/* 条件別CTA */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              十日町紬を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              十日町紬は証紙・作り手・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・伝統工芸士の作品・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の裏付けがある十日町紬は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・作り手・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/shiozawa-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                塩沢紬・本塩沢の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                同じ新潟県・南魚沼の絹織物。十日町紬と混同されやすい塩沢紬の特徴と証紙の見方。
              </p>
            </Link>
            <Link
              href="/articles/souba-method/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                相場データの調査方法
              </h3>
              <p className="text-xs text-gray-600">
                本サイトの実売データ（落札相場）の集め方・出典・更新方針を公開しています。
              </p>
            </Link>
            <Link
              href="/ranking/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                着物買取おすすめランキング
              </h3>
              <p className="text-xs text-gray-600">
                十日町紬の査定に対応した着物専門買取業者を比較。相見積もりで高価買取を狙えます。
              </p>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Link
              href="/articles/tsumugi-types/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                紬の種類と買取相場
              </h3>
              <p className="text-xs text-gray-600">
                結城紬・大島紬をはじめとする紬の種類ごとの特徴と相場の傾向を整理。
              </p>
            </Link>
            <Link
              href="/articles/echigo-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                越後上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                十日町の織物の源流となった越後の麻織物。重要無形文化財の越後上布を解説。
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
            十日町紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            十日町紬の買取相場はあくまで目安です。証紙・作り手・仕立て・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの十日町紬の正確な価値を確認しましょう。
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
