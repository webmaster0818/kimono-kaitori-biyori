import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】阿波しじら織の買取相場｜正藍染で価値が変わる・実売データつき",
  description:
    "阿波しじら織（徳島県徳島市）の買取相場を実売データで解説。シボと呼ばれる独特の凹凸が特徴の木綿織物で、天然阿波藍で染めた「阿波正藍しじら織」は国の伝統的工芸品。公開オークションの落札データ（86件・平均 約7,515円）と高く売るポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/awa-shijira/",
  },
  openGraph: {
    title: "【2026年最新】阿波しじら織の買取相場｜正藍染で価値が変わる・実売データつき",
    description:
      "阿波しじら織の買取相場と高く売る方法。シボのある木綿織物。「阿波正藍しじら織」は国の伝統的工芸品。実売データつきで解説。",
    url: "https://kimonokaitori-biyori.com/articles/awa-shijira/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "阿波しじら織はどのくらいで買い取ってもらえますか？",
    answer:
      "阿波しじら織は普段着・夏の木綿着物として現役で生産・着用されている織物です。公開オークションの実売データ（2026年7月16日取得・約180日相当の集計）では、単品出品86件で平均 約7,515円・中央値 4,104円・最高 39,980円でした。これは個人間取引の実売価格であり、買取業者の査定額は一般にこれより低くなります。正藍染の良品かどうか、状態、仕立ての有無で変わるため、正確な金額は無料査定で確認しましょう。",
  },
  {
    question: "阿波しじら織とはどんな織物ですか？",
    answer:
      "阿波しじら織は、徳島県徳島市で織られてきた木綿織物です。経糸の張力差を利用して生み出される「シボ」と呼ばれる独特の凹凸が特徴で、肌に張り付きにくく軽くて涼しいため、夏の着物や浴衣、普段着として親しまれてきました。明治時代の初め、阿波地方で織られていた木綿縞「たたえ織」に改良が加えられて生まれたとされ、干していた布が雨に濡れて縮んだことがシボ誕生のヒントになったと伝えられています。",
  },
  {
    question: "「阿波正藍しじら織」と「阿波しじら織」は違うものですか？",
    answer:
      "国の伝統的工芸品に指定されているのは「阿波正藍しじら織（あわしょうあいしじらおり）」で、1978年（昭和53年）7月22日に指定されました。指定の対象は、藍を原料とする植物性染料で手作業により染める正藍染めなど、定められた技法で作られたものです。市場で「阿波しじら織」として流通する製品には化学染料で染めたものも含まれるため、天然藍による正藍染めかどうかが査定でも価値の分かれ目のひとつになります。",
  },
  {
    question: "阿波しじら織は反物や生地でも売れますか？",
    answer:
      "売れます。阿波しじら織は現役で生産・着用されている木綿織物のため、反物・生地の流通が多いのが特徴です。実売データでも反物・生地は着物とほぼ同水準で取引されており、未使用の反物は仕立ての自由度から需要があります。自分で仕立てる方や洋装・小物へのリメイク需要もあるため、反物のままでも遠慮なく査定に出しましょう。",
  },
  {
    question: "阿波しじら織を高く売るにはどうすればよいですか？",
    answer:
      "天然藍による正藍染めの品や仕立て済みの単衣の良品は評価されやすい傾向があるため、購入時のタグ・ラベル・たとう紙など、染めや製造元がわかる付属品をそろえて査定に出すことが大切です。木綿の普段着として流通量が多い織物なので、他の着物や浴衣とまとめて出す、複数社で相見積もりを取る、状態が良いうちに早めに売る、といった基本も有効です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "阿波しじら織の買取相場｜正藍染で価値が変わる・実売データつき",
  description:
    "阿波しじら織の買取相場と高く売る方法。シボのある木綿織物。「阿波正藍しじら織」は国の伝統的工芸品。実売データつきで解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/awa-shijira/",
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
      name: "阿波しじら織",
      item: "https://kimonokaitori-biyori.com/articles/awa-shijira/",
    },
  ],
};

export default function AwaShijiraPage() {
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
          { label: "阿波しじら織" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#2b4a6f] text-white mb-4 tracking-wide">
              徳島・伝統的工芸品（阿波正藍しじら織）
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">阿波しじら織の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                正藍染で価値が変わる・実売データつき
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              阿波しじら織（あわしじらおり）は、徳島県徳島市で織られてきた木綿織物です。「シボ」と呼ばれる独特の凹凸が肌に心地よく、夏の着物・浴衣・普段着として現在も生産され続けています。天然の阿波藍で染めた「阿波正藍しじら織」は1978年に国の伝統的工芸品に指定されています。公開オークションの実売データをもとに、相場感と高く売るポイントを解説します。
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
                    1. 阿波しじら織とは？シボが生きる夏の木綿
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 阿波しじら織の技法とシボの仕組み
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 阿波しじら織の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と正藍染め
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 阿波しじら織を高く売るポイント
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

      {/* 阿波しじら織とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            阿波しじら織とは？シボが生きる夏の木綿
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              阿波しじら織（あわしじらおり）は、<strong>徳島県徳島市</strong>で織られてきた<strong>綿100%の先染め織物</strong>です。最大の特徴は、布の表面に浮かぶ「<strong>シボ</strong>」と呼ばれる細かな凹凸。肌に触れる面積が少ないためさらりとして張り付きにくく、軽くて涼しいことから、夏の着物・浴衣・普段着として長く親しまれてきました。
            </p>
            <p>
              その起源は、18世紀末に阿波地方で盛んに織られていた木綿縞「たたえ織」にさかのぼり、明治時代の初めに改良が加えられて現在の形になったとされています。干していた布がにわか雨に濡れて縮み、独特のシボが生まれたことが改良のきっかけと伝えられています。徳島は天然藍「阿波藍」の産地でもあり、藍で染めたしじら織は阿波の風土を象徴する織物です。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">阿波しじら織の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>徳島県徳島市で織られる綿100%の先染め織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>経糸の張力差が生む「シボ」の凹凸で、涼しく肌離れが良い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>夏の着物・浴衣・普段着として現在も生産・着用が続く現役の織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>天然阿波藍で染めた「阿波正藍しじら織」は1978年（昭和53年）7月22日に国の伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>反物・生地としての流通も多く、リメイク需要もある</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              参考：
              <a
                href="https://kougeihin.jp/craft/0122/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                伝統的工芸品産業振興協会「阿波正藍しじら織」
              </a>
              ・
              <a
                href="https://www.pref.tokushima.lg.jp/japanese/specialty/traditional/shiziraori"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#6b4c8a] hover:underline"
              >
                徳島県「阿波正藍しじら織」
              </a>
            </p>
            <p>
              徳島の藍染め全般の価値や買取傾向については
              <Link href="/articles/awa-aizome/" className="text-[#6b4c8a] underline font-medium">
                阿波藍染の買取相場
              </Link>
              もあわせてご覧ください。本ページは「阿波しじら織という織物の価値と実売データ」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 技法とシボの仕組み */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            阿波しじら織の技法とシボの仕組み
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            阿波しじら織の価値を支えているのは、シボを生み出す独特の織りと、阿波藍による染めです。査定でも「どう作られた品か」が評価の手がかりになります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    技法・要素
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    シボ（凹凸）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    経糸の張力差を利用して布面に生み出す細かな凹凸。肌離れが良く、軽くて涼しい着心地の源
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    混合組織
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    先染めの平織りと緯畝織りを組み合わせ、「地たて糸」と「たたえ糸」を手作業で引き込んで織る。シボ出しは「湯もみ」で行う
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    正藍染め
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    藍を原料とする植物性染料を用いた手作業の浸染。天然阿波藍による深い藍色が「阿波正藍しじら織」の核
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    素材
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    綿糸のみを使用。絹物と違い家庭で扱いやすく、普段着として現役で着用される
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            技法の内容は伝統的工芸品「阿波正藍しじら織」の指定内容に基づきます。市場に流通する「阿波しじら織」には化学染料で染めた製品も含まれます。
          </p>
        </div>
      </section>

      {/* 相場 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            阿波しじら織の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            阿波しじら織の買取価格は、染め（正藍染めか化学染料か）・仕立ての有無・状態によって変わります。ここでは金額ではなく、査定で評価が分かれる「傾向」を整理します。具体的な実売価格は後述の
            <a href="#auction-data" className="text-[#6b4c8a] underline">実売データ</a>
            をご覧ください。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                正藍染・仕立て済み単衣の良品が上位
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                公開オークションの実売データでは、正藍染の品や仕立て済み単衣の良品が上位の落札に入る傾向が見られました。天然阿波藍による染めは「阿波正藍しじら織」の核となる価値であり、査定でも化学染料の量産品とは分けて評価されやすいポイントです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                反物・生地の流通が多いのが特徴
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                阿波しじら織は現役で生産・着用される普段着の木綿のため、中古市場でも反物・生地の流通が多いのが特徴です。実売データでも反物・生地は着物とほぼ同水準で取引されており、未使用の反物は仕立てやリメイクの自由度から需要があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                木綿の普段着としては手堅い需要
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                高級絹織物のような高額査定は期待しにくい一方、夏に気軽に着られる木綿着物としての実用需要が安定しています。同じ木綿絣の
                <Link href="/articles/kurume-gasuri/" className="text-[#6b4c8a] underline">
                  久留米絣
                </Link>
                と同様、「着るための古着」としての需要が価格を支えている織物です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 指定と正藍染め */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品の指定と正藍染め
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              阿波しじら織にまつわる公的な指定と名称の関係を整理しておくと、査定の場で品物を説明しやすくなります。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                国の伝統的工芸品は「阿波正藍しじら織」
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                国（経済産業大臣）の伝統的工芸品に指定されているのは<strong>「阿波正藍しじら織」で、1978年（昭和53年）7月22日</strong>に指定されました。藍を原料とする植物性染料を用いた手作業の浸染（正藍染め）や、経糸の張力差によるシボ出しなど、定められた技法で作られたものが対象です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                正藍染めか化学染料かが価値の分かれ目
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                市場で「阿波しじら織」として流通する製品には、天然藍による正藍染めのものと、化学染料で染めた普及品の両方が含まれます。<strong>タグ・ラベル・購入時の説明書きなど、染めや製造元がわかる付属品</strong>は査定の重要な手がかりになるため、残っていれば必ず一緒に査定へ出しましょう。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">評価されやすい阿波しじら織</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>天然阿波藍による正藍染めの品</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>仕立て済み単衣の良品・現代サイズ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>未使用の反物・タグやラベル付き</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">評価が控えめになりやすいもの</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>染めや製造元の手がかりがない量産品</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>色あせ・シミ・スレなど着用感が目立つもの</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>サイズが小さく再着用しにくいもの</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong className="text-[#6b4c8a]">関連：</strong>
              阿波藍・藍染め製品全般の価値については
              <Link href="/articles/awa-aizome/" className="text-[#6b4c8a] underline">
                阿波藍染の買取相場
              </Link>
              、木綿の織物のもう一方の代表格については
              <Link href="/articles/kurume-gasuri/" className="text-[#6b4c8a] underline">
                久留米絣の買取相場
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
            阿波しじら織を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：染め・製造元がわかる付属品をそろえる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                正藍染めかどうかは査定の分かれ目です。タグ・ラベル・購入時の説明書き・たとう紙など、染めや織元がわかるものは必ず一緒に査定へ出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：反物は仕立てず、そのまま出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                未使用の反物は仕立ての自由度があり、そのままの状態に需要があります。売却前に仕立てる必要はありません。保管時の折りジワ程度なら大きな問題になりにくいため、現状のまま査定に出しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：夏物需要の時期も意識する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                阿波しじら織は夏の普段着として着られる現役の木綿です。着用シーズンに向けて需要が動く品目のため、状態が良いうちに、着る人が探し始める時期までに手放すとスムーズです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                木綿の普段着は業者によって扱いの得意・不得意が分かれます。正藍染めの良品ほど評価差が出やすいため、複数社に無料査定を依頼し、金額と説明を比較してから売却先を決めましょう。
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
            【実売データ】公開オークションでの阿波しじら織のリアルな落札相場
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">全体</td>
                  <td className="px-4 py-3 font-medium">86件</td>
                  <td className="px-4 py-3 font-medium">約7,515円</td>
                  <td className="px-4 py-3 font-medium">4,104円</td>
                  <td className="px-4 py-3 font-medium">39,980円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物</td>
                  <td className="px-4 py-3 font-medium">48件</td>
                  <td className="px-4 py-3 font-medium">約6,917円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium">39,980円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">反物・生地</td>
                  <td className="px-4 py-3 font-medium">37件</td>
                  <td className="px-4 py-3 font-medium">約7,914円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">29,300円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E9%98%BF%E6%B3%A2%E3%81%97%E3%81%98%E3%82%89"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「阿波しじら」の落札相場
            </a>
            （集計期間：2026年1月17日〜2026年7月15日・2026年7月16日取得）
            <br />
            ※ タイトルに「阿波しじら」を含む単品出品のみを集計し、まとめ売り・複数点ロット（203件）は除外しています。阿波しじら織は浴衣・反物の量販が多く、まとめ売りでの流通が特に多い品目です。
            <br />
            ※ 傾向として、正藍染・仕立て済み単衣の良品が上位に入っていました。反物・生地の落札件数が着物に迫る規模である点も、現役で生産・着用される普段着木綿ならではの特徴です。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。正藍染めの良品と化学染料の量産品では価格が大きく異なるため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・染め・仕立てで変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              正藍染の良品は業者によって査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（染め・仕立て・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ阿波しじら織でも、染めの種類・仕立ての有無・保存状態によって査定額は変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["天然阿波藍による正藍染め", "◎ 大きくプラス", "「阿波正藍しじら織」の核となる価値です。タグ・ラベル・説明書きなどで裏付けられると評価が安定します。"],
                  ["化学染料の普及品", "○〜△ 控えめ", "実用品としての需要はありますが、正藍染めの品とは分けて評価されるのが一般的です。"],
                  ["仕立て済み単衣の良品", "◎ 評価されやすい", "実売データでも上位に入る傾向が見られた形態です。すぐ着られる状態と現代サイズが揃うと有利です。"],
                  ["未使用の反物・生地", "○ 需要あり", "反物流通が多いのが阿波しじら織の特徴で、仕立てやリメイクの自由度から未使用反物には固有の需要があります。"],
                  ["タグ・ラベル・付属品あり", "○ プラス", "染めや織元の裏付けになります。木綿の普段着では数少ない「証明」の手がかりです。"],
                  ["色あせ・シミ・スレなど着用感", "△ マイナス", "普段着として着られてきた品は着用感が出やすく、状態不良は減額対象です。現状のまま査定に出しましょう。"],
                  ["サイズが小さい・裄丈が短い", "△ 控えめ", "「着るための古着」需要が中心のため、再着用しにくいサイズは評価が控えめになりがちです。"],
                  ["浴衣・量販品・まとめ売り", "○ 現実的な選択肢", "量販の浴衣などは単品で金額がつきにくいことがあります。他の着物・浴衣とまとめて出すと全体で評価されやすくなります。"],
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
            ※ 上表は一般的な評価傾向で、実際の査定額は現物の状態・需要・各業者の基準により異なります。とくに正藍染めの良品は業者による差が出やすいため、複数社で相見積もりを取ると安心です。
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
              阿波しじら織を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              阿波しじら織は染め・仕立て・状態によって評価が変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">正藍染・仕立て済みの良品・未使用反物</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで比較する</h3>
                <p className="text-xs text-gray-600">正藍染の良品は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">量販品・状態に不安・他の着物や浴衣もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は染め・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/awa-aizome/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                阿波藍染の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                徳島が誇る天然藍「阿波藍」。藍染め製品の価値と買取傾向を実売データつきで解説。
              </p>
            </Link>
            <Link
              href="/articles/kurume-gasuri/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                久留米絣の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                同じ木綿の織物の代表格・久留米絣。特徴と買取傾向を実売データつきで解説。
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
                当サイトの実売データ（落札相場）の集め方・出典・更新方針を公開しています。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            阿波しじら織の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            阿波しじら織の実売データはあくまで目安です。染め・仕立て・状態によって実際の査定額は変わります。着物専門の査定員に無料査定を依頼して、お手持ちの阿波しじら織の正確な価値を確認しましょう。
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
