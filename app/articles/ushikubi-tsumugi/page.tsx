import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】牛首紬の買取相場｜石川県白山市｜釘抜紬・玉繭と証紙の見方",
  description:
    "牛首紬（石川県白山市白峰）の買取相場を解説。釘抜紬の異名、玉繭から座繰りで引く玉糸、白山工房・加藤改石の証紙、石川県牛首紬生産振興協同組合の産地証明、伝統的工芸品指定（1988年）と高く売るポイントをまとめました。",
  alternates: {
    canonical:
      "https://kimonokaitori-biyori.com/articles/ushikubi-tsumugi/",
  },
  openGraph: {
    title: "【2026年最新】牛首紬の買取相場｜石川県白山市｜釘抜紬・玉繭と証紙の見方",
    description:
      "牛首紬の買取相場と高く売る方法を解説。証紙の有無が査定を左右します。",
    url: "https://kimonokaitori-biyori.com/articles/ushikubi-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "牛首紬はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "牛首紬の買取相場は、証紙の有無や状態によって幅があります。生産する工房が限られ希少性が高いことから、紬の中でも比較的評価されやすい傾向があります。白山工房や加藤改石（加藤機業場）といった織元の証紙・落款があると評価されやすく、証紙がない場合や劣化がある場合は評価が下がりやすくなります。具体的な金額は状態によって変動するため、無料査定での確認をおすすめします。",
  },
  {
    question: "牛首紬はなぜ『釘抜紬』と呼ばれるのですか？",
    answer:
      "牛首紬は「釘抜紬（くぎぬきつむぎ）」という異名を持ちます。これは、着物が釘に引っ掛かっても生地が破れず、逆に釘のほうが抜けてしまうほど丈夫だ、という耐久性の高さに由来する呼び名です。牛首紬の丈夫さは、玉繭から引いた玉糸を使うことによる独特の風合いと強さに支えられています。",
  },
  {
    question: "牛首紬はどんな糸から作られていますか？",
    answer:
      "牛首紬は、2匹の蚕が共同で1つの繭を作る「玉繭（たままゆ）」を主原料とします。玉繭は糸が2本絡んでいて通常の製糸には不向きですが、これを座繰りで手挽きして「玉糸」を作ります。組合の定義では、経糸に生糸、緯糸に座繰りの玉糸を使い、平織りで織り上げるとされています。この玉糸が、牛首紬独特の節のある風合いと丈夫さを生みます。",
  },
  {
    question: "牛首紬の証紙はどこを見ればわかりますか？",
    answer:
      "牛首紬には、織元ごとの証紙が付きます。白山工房は「角」印、加藤改石（加藤機業場）は「石」印の証紙が知られています。あわせて、石川県牛首紬生産振興協同組合による産地証明や、伝統的工芸品の伝統証紙が付くこともあります。証紙は反物の端やたとう紙の中、購入時の箱などに保管されていることが多いので、必ず探して一緒に査定に出しましょう。",
  },
  {
    question: "牛首紬を高く売るにはどうすればいいですか？",
    answer:
      "第一に、織元の証紙や産地証明を必ずセットで査定に出すことです。第二に、紬に詳しい着物専門の買取業者を選ぶことです。牛首紬は類似品・模倣品も流通しており真贋判定が難しいため、専門の査定員がいる業者が安心です。第三に、複数業者で相見積もりを取り、シミ・カビ・日焼けなどの劣化が進む前に早めに査定に出すことが大切です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline:
    "牛首紬の買取相場｜釘抜紬・玉繭と証紙の見方",
  description:
    "牛首紬の買取相場と高く売る方法を解説。証紙の有無が査定を左右します。",
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
      "https://kimonokaitori-biyori.com/articles/ushikubi-tsumugi/",
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
      name: "牛首紬",
      item: "https://kimonokaitori-biyori.com/articles/ushikubi-tsumugi/",
    },
  ],
};

export default function UshikubiTsumugiPage() {
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
          { label: "牛首紬" },
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
              <span className="text-gradient">牛首紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                釘抜紬・玉繭と証紙の見方
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              牛首紬（うしくびつむぎ）は、石川県白山市白峰で織られる丈夫な絹織物です。「釘抜紬」の異名を持ち、玉繭から座繰りで引いた玉糸を使う独特の風合いが特徴。白山工房や加藤改石などの織元の証紙の有無が買取価格を左右します。相場の傾向や高く売るためのポイントを詳しく解説します。
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
                    1. 牛首紬とは？白峰の釘抜紬
                  </a>
                </li>
                <li>
                  <a href="#tamamayu" className="text-[#6b4c8a] hover:underline">
                    2. 玉繭から生まれる丈夫な玉糸
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    3. 【種類別】牛首紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#maker" className="text-[#6b4c8a] hover:underline">
                    4. 織元（白山工房・加藤改石）と証紙
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    5. 産地証明と伝統的工芸品指定
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    6. 牛首紬を高く売るポイント
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

      {/* 牛首紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            牛首紬とは？白峰の釘抜紬
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              牛首紬（うしくびつむぎ）は、<strong>石川県白山市白峰地区（旧白峰村）</strong>で織られる絹織物です。名前は、この地が明治初期まで「牛首」と称されていたことに由来します。起源は平安後期に始まったと伝えられ、白山のふもとで受け継がれてきました。1988年（昭和63年）6月9日に国の伝統的工芸品に指定されています。
            </p>
            <p>
              牛首紬の最大の特徴は、その<strong>丈夫さ</strong>です。「釘抜紬（くぎぬきつむぎ）」という異名は、着物が釘に引っ掛かっても破れず、逆に釘のほうが抜けてしまうほど丈夫だ、という言い伝えに由来します。節のある独特の風合いと、しなやかで強い生地が愛好されています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">
                牛首紬の主な特徴
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    石川県白山市白峰で織られる丈夫な絹織物
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    「釘抜紬」と呼ばれるほどの丈夫さ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    玉繭から座繰りで引いた玉糸を使う
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    1988年に国の伝統的工芸品、1979年に石川県指定無形文化財に指定
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>
                    産地証明は石川県牛首紬生産振興協同組合・織元の証紙で確認できる
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              ※ 牛首紬の起源には源氏の落人が機織を伝えたとする伝承があります（諸説あります）。
            </p>
          </div>
        </div>
      </section>

      {/* 玉繭 */}
      <section id="tamamayu" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            玉繭から生まれる丈夫な玉糸
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              牛首紬の丈夫さと独特の風合いを支えているのが、<strong>「玉繭（たままゆ）」</strong>という特殊な繭です。玉繭は、2匹の蚕が共同で1つの繭を作ったもので、通常の養蚕では一部しか発生しません。
            </p>
            <p>
              玉繭は2本の糸が絡み合っているため、通常の製糸機械では糸を引きにくく、一般的な絹糸の生産には不向きとされます。牛首紬では、この玉繭を<strong>「座繰り」</strong>という昔ながらの手法で1本ずつ手挽きして<strong>「玉糸」</strong>を作ります。
            </p>
            <p>
              組合の定義によれば、経糸（たていと）に生糸、緯糸（よこいと）に座繰りの玉糸を使い、平織りで織り上げるとされています。玉糸特有の節（ふし）が、牛首紬ならではの素朴で力強い風合いと、釘抜紬と呼ばれる丈夫さを生み出しています。
            </p>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5 mt-2">
              <p className="text-sm leading-relaxed text-gray-700">
                <strong className="text-[#6b4c8a]">ポイント：</strong>
                玉繭の確保や座繰りの手間がかかること、生産する工房が限られていることから、牛首紬は希少性の高い紬として知られています。この希少性が、買取市場での評価にもつながっています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場 */}
      <section id="price-by-type" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】牛首紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            牛首紬の買取価格は、証紙・織元の有無、着物か反物か、状態によって大きく変わります。以下は一般的な傾向を整理したものです（具体的な金額は状態によって変動します）。
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
                    証紙付き・有名織元
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    高く評価されやすい
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    白山工房・加藤改石などの証紙・落款
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
                    産地証明があることが前提
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
                    牛首紬であることの証明が難しい
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

      {/* 織元と証紙 */}
      <section id="maker" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            織元（白山工房・加藤改石）と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              牛首紬は、織元によって証紙の印が異なります。代表的な織元と証紙を知っておくと、お手持ちの牛首紬の出どころを確認しやすくなります。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                白山工房（はくさんこうぼう）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                石川県白山市白峰にある牛首紬の織元です。証紙には「角」印が用いられることで知られています。国指定伝統的工芸品の牛首紬を製造する代表的な工房のひとつです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                加藤改石（かとうかいせき・加藤機業場）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                白山工房とは別の独立した織元で、「加藤手織牛首つむぎ」として知られます。証紙には「石」印が用いられます。手織りにこだわった牛首紬の作り手として評価されています。
              </p>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">補足：</strong>
              牛首紬は「結城紬・大島紬・牛首紬」を日本三大紬の一つに数える紹介をされることがありますが、第三を塩沢紬や上田紬とする説もあり、公的に確定した定義ではありません（諸説あります）。いずれにせよ、牛首紬が紬愛好家に高く支持されている織物であることは確かです。
            </p>
          </div>
        </div>
      </section>

      {/* 産地証明 */}
      <section id="certificate" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            産地証明と伝統的工芸品指定
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              牛首紬の買取では、<strong>産地証明</strong>が査定額を大きく左右します。<strong>石川県牛首紬生産振興協同組合</strong>が牛首紬の定義やラベル表示を定め、産地証明の役割を担っています。あわせて、織元ごとの証紙や、伝統的工芸品の伝統証紙が付くこともあります。
            </p>
            <p>
              牛首紬は<strong>1988年（昭和63年）6月9日に国の伝統的工芸品</strong>に、<strong>1979年（昭和54年）7月24日に石川県指定無形文化財</strong>に指定されており、保持団体として「牛首紬技術保存会」があります。
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
                  <span>牛首紬であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>織元が分かり真贋が裏付けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>有名織元であればさらに高めの評価が期待できる</span>
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
                  <span>牛首紬であることの証明が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>類似品・模倣品との区別がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>評価が下がりやすくなる</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-5 leading-relaxed">
            証紙の見方をより詳しく知りたい方は
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
            牛首紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・産地証明を必ずセットで査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                織元の証紙や産地証明は、牛首紬であることを証明する最も重要な書類です。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。証紙の有無で評価が大きく変わります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：紬に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                牛首紬は類似品・模倣品も流通しており、真贋判定には専門知識が必要です。一般的なリサイクルショップでは安く買い取られてしまうことがあります。
                <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">紬の種類</Link>
                に詳しい着物専門の買取業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                牛首紬は業者の販路や在庫状況によって査定額が変わります。最低でも3社に
                <Link href="/articles/free-appraisal/" className="text-[#6b4c8a] underline">無料査定</Link>
                を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                牛首紬は丈夫な織物ですが、正絹のため湿気やカビ、日焼けには弱い面があります。シミやカビが出ると価値が下がります。たとう紙に包んで暗所で保管し、売ると決めたら早めに査定に出しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* 実売データ（公開オークション落札相場） */}
      <section id="auction-data" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【実売データ】公開オークションでの牛首紬のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed">
            以下は買取相場ではなく、公開オークション（Yahoo!オークション）で実際に売買された「実売価格」の集計です。リアルな取引価格帯の参考としてご覧ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">区分</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">平均落札価格</th>
                  <th className="border border-[#e8ddd0] px-3 py-2 text-left">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                  <tr><td className="border border-[#e8ddd0] px-3 py-2">牛首紬（全般）</td><td className="border border-[#e8ddd0] px-3 py-2">約19,493円</td><td className="border border-[#e8ddd0] px-3 py-2">242,000円</td></tr>
                  <tr><td className="border border-[#e8ddd0] px-3 py-2">仕立て上がり（色無地）</td><td className="border border-[#e8ddd0] px-3 py-2">約18,887円</td><td className="border border-[#e8ddd0] px-3 py-2">39,050円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            出典：<a href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E7%89%9B%E9%A6%96%E7%B4%AC/0/" target="_blank" rel="noopener noreferrer" className="text-[#6b4c8a] underline">Yahoo!オークション 落札相場</a>（2026年6月取得）
          </p>
          <div className="bg-[#fdf6f6] border border-[#e8b4b4] rounded-lg p-4 mt-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-[#b5402f] mb-1">※実売価格と買取価格の違い</p>
            上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。1円〜の極端な安値は証紙なし・状態不良・入札不成立に近い例も含むため、価格帯の“幅”の参考としてご覧ください。牛首紬は証紙と状態で価値が変わります。金額は取得時点のもので、相場は時期・状態により変動し、査定額を保証するものではありません。
          </div>
          <p className="text-xs text-gray-500 mt-3">
            本データは公開オークションの落札済み一覧から、品目・状態・落札価格・出典・取得日を記録したものです（取得：2026年6月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>
          <div className="mt-5">
            <Link href="/ranking/" className="text-[#6b4c8a] underline font-medium">証紙・作家物がそろうなら、複数社の相見積もり（おすすめランキング）で最も高い1社を選ぶのが確実です →</Link>
          </div>
        </div>
      </section>

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

      {/* この着物を売るなら（条件別CTA） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              牛首紬を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              牛首紬は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い牛首紬は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/oshima-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                大島紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                泥染め・絣の本場大島紬の買取相場と証紙の見方を解説。
              </p>
            </Link>
            <Link
              href="/articles/kanazawa/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                金沢・石川の着物買取
              </h3>
              <p className="text-xs text-gray-600">
                石川県で着物を売るなら。おすすめ業者と買取の流れを解説。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            牛首紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            牛首紬の買取相場はあくまで目安です。証紙・織元・状態によって実際の査定額は大きく変わります。紬に詳しい査定員に無料査定を依頼して、お手持ちの牛首紬の正確な価値を確認しましょう。
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
