import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】上田紬の買取相場｜信州紬の一つ・縞と格子の丈夫な織物",
  description:
    "上田紬（長野県上田市）の買取相場を実売データ付きで解説。真田氏ゆかりの約400年の歴史、縞・格子柄の特徴、「信州紬」として国の伝統的工芸品（1975年指定）に含まれる位置づけ、証紙の見方、公開オークションの落札実績、高く売るポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/ueda-tsumugi/",
  },
  openGraph: {
    title: "【2026年最新】上田紬の買取相場｜信州紬の一つ・縞と格子の丈夫な織物",
    description:
      "上田紬の買取相場と高く売る方法を実売データ付きで解説。信州紬としての位置づけと証紙の見方も整理します。",
    url: "https://kimonokaitori-biyori.com/articles/ueda-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "上田紬はどのくらいで買い取ってもらえますか？",
    answer:
      "上田紬の買取価格は、証紙の有無、状態、着物か帯かによって大きく変わります。参考として、公開オークションでの実売データでは、単品出品32件の平均落札価格は約7,814円（中央値4,730円）、最高落札価格は39,600円でした（2026年7月16日取得・実売価格は買取査定額とは異なります）。件数が少なめのため平均は振れやすく、あくまで幅の参考です。買取価格は実売価格より低くなるのが一般的で、具体的な金額は着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "上田紬は国の伝統的工芸品ですか？",
    answer:
      "上田紬は、長野県の紬織物の総称である「信州紬」の一つとして、国（経済産業大臣）の伝統的工芸品に含まれています。信州紬は1975年（昭和50年）2月17日に指定され、産地には上田市のほか長野市・松本市・岡谷市・飯田市・駒ヶ根市などが含まれます。産地組合は長野県織物工業組合です。証紙に「信州紬」「上田紬」のどちらが書かれているかを確認すると、位置づけがわかりやすくなります。",
  },
  {
    question: "上田紬はどんな織物ですか？",
    answer:
      "上田紬は、長野県上田市で織られる絹織物です。信州上田観光協会によると、およそ400年前、真田氏の上田城築城の頃に地場産業として奨励されたことに始まり、真田家がつくった「真田織」が元になっていると伝えられています。縞と格子柄が特徴で、糸を細かくしっかりと打ち込むことで生まれる丈夫でしなやかな風合いが持ち味です。結城紬・大島紬と並ぶ「日本三大紬」の一つに数えられることもあります。",
  },
  {
    question: "上田紬と他の信州紬（松本紬・飯田紬など）の違いは何ですか？",
    answer:
      "「信州紬」は長野県内の複数の産地で織られる紬の総称で、上田・松本・飯田・伊那などの産地ごとに呼び名と特色があります。上田紬は縞・格子柄と丈夫さで知られる上田市の紬です。いずれも先染めの平織で、手織りなどの伝統的な技法が用いられます。産地までは証紙や織元の情報で確認するのが確実で、査定でも産地と作り手がわかるほうが評価されやすくなります。",
  },
  {
    question: "上田紬を高く売るにはどうすればよいですか？",
    answer:
      "第一に、証紙や購入時の付属品をそろえて査定に出すことです。実売データでは、証紙のある新品・未使用の帯が高値になるなど、帯の平均が着物を上回る傾向が見られました。第二に、紬に詳しい着物専門の買取業者を選ぶことです。第三に、複数社で相見積もりを取り、日焼けやシミが進む前に早めに査定へ出すことが大切です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "上田紬の買取相場｜信州紬の一つ・縞と格子の丈夫な織物",
  description:
    "上田紬の買取相場と高く売る方法を実売データ付きで解説。信州紬としての位置づけと証紙の見方も整理します。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/ueda-tsumugi/",
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
      name: "上田紬",
      item: "https://kimonokaitori-biyori.com/articles/ueda-tsumugi/",
    },
  ],
};

export default function UedaTsumugiPage() {
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
          { label: "上田紬" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              長野・信州紬（伝統的工芸品）
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">上田紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                縞と格子が映える真田氏ゆかりの丈夫な織物
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              上田紬（うえだつむぎ）は、長野県上田市で織られる絹織物です。およそ400年前、真田氏の上田城築城の頃に奨励されたことに始まると伝えられ、縞・格子柄と丈夫でしなやかな風合いが持ち味です。長野県の紬の総称「信州紬」の一つとして国の伝統的工芸品（1975年指定）に含まれます。本ページでは、公開オークションの実売データとあわせて、証紙の見方と高く売るポイントを解説します。
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
                    1. 上田紬とは？真田氏ゆかりの縞・格子の紬
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 信州紬と上田紬の関係
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 上田紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 上田紬を高く売るポイント
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

      {/* 上田紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            上田紬とは？真田氏ゆかりの縞・格子の紬
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              上田紬（うえだつむぎ）は、<strong>長野県上田市</strong>で織られる絹織物です。信州上田観光協会によると、およそ400年前、<strong>真田氏の上田城築城の頃に地場産業として奨励</strong>されたことに始まり、真田家がつくった「真田織」が元になっていると伝えられています。当初は麻製で、江戸時代の城主・仙石忠政の時代に絹糸が採り入れられたとされています。
            </p>
            <p>
              持ち味は<strong>縞と格子柄</strong>、そして糸を細かくしっかりと打ち込むことで生まれる<strong>丈夫でしなやかな風合い</strong>です。結城紬・大島紬と並ぶ「日本三大紬」の一つに数えられることもあります。かつて60軒ほどあった織元は現在では数軒に減っており、手織りを守る工房の作品は希少になっています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">上田紬の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>産地は長野県上田市。約400年の歴史を持つと伝えられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>縞・格子柄が代表的な意匠</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>細かくしっかり打ち込んだ、丈夫でしなやかな地風</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>「信州紬」として1975年（昭和50年）に国の伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>織元が減少し、手織りの現行品は希少</span>
                </li>
              </ul>
            </div>
            <p>
              長野県内の織物では、安曇野の希少な
              <Link href="/articles/tensan-tsumugi/" className="text-[#6b4c8a] underline font-medium">
                天蚕紬
              </Link>
              も知られています。長野県での着物の売り方は
              <Link href="/articles/nagano/" className="text-[#6b4c8a] underline font-medium">
                長野県の着物買取
              </Link>
              のページをご覧ください。本ページは「上田紬という織物の価値と見分け方」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 信州紬との関係 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            信州紬と上田紬の関係
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            「信州紬」は長野県内の複数の産地で織られる紬の総称で、上田紬はその一つです。混同されやすい名称を整理しておくと、証紙の確認や査定の場で役立ちます。
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
                    信州紬（総称）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    長野県内で織られる先染め・平織の紬織物の総称。1975年（昭和50年）2月17日に国の伝統的工芸品に指定。産地は上田市・長野市・松本市・岡谷市・飯田市・駒ヶ根市など
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    上田紬
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    上田市の紬。縞・格子柄と、細かく打ち込んだ丈夫な地風が特徴。真田氏ゆかりの歴史を持つと伝えられる
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    松本紬・飯田紬・伊那紬など
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    信州紬に含まれる各産地の紬。産地ごとに糸使いや意匠に特色がある
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    山繭紬（山繭糸の紬）
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    野生の山繭（天蚕）の糸を使った信州の特産品。天蚕糸を使う織物は
                    希少で、詳しくは天蚕紬のページで解説
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 信州紬の指定日・産地・技法は
            <a
              href="https://kougeihin.jp/craft/0117/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              伝統工芸 青山スクエア（伝統的工芸品産業振興協会）「信州紬」
            </a>
            、上田紬の歴史・特徴は
            <a
              href="https://ueda-kanko.or.jp/blog/special_tsumugi/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              信州上田観光協会
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
            上田紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            上田紬の買取価格は、証紙の有無・織元・状態・着物か帯かによって大きく変わります。以下は一般的な傾向で、実際の金額は需要や業者によって変動します（実売データは後述の
            <a href="#auction-data" className="text-[#6b4c8a] underline">実売データ</a>
            をご覧ください）。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙あり・未使用の良品が高評価
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                信州紬の証紙がそろい、未使用・美品の状態が保たれている品は評価されやすくなります。実売データでも、証紙のある新品・未使用の帯が高値になる例が見られました。産地の裏付けがない品は評価が控えめになりがちです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                流通量が少なく、評価は業者差が出やすい
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                上田紬は織元が減少しており、市場での流通量は多くありません。出回る数が少ないぶん、紬の知識がある業者かどうかで査定額の差が出やすい織物です。複数社での相見積もりが特に有効です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                帯・反物・着物で評価が異なる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                上田紬は着物（着尺）のほか帯も作られており、評価軸が異なります。実売データでは帯の平均が着物を上回る傾向が見られました（証紙付きの未使用帯などが押し上げ）。
                <Link href="/articles/tsumugi-types/" className="text-[#6b4c8a] underline">
                  紬の種類と買取相場
                </Link>
                もあわせて参考にしてください。
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
              上田紬にまつわる公的な指定を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは公式に確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                「信州紬」として国の伝統的工芸品に指定
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                上田紬は、長野県の紬織物の総称<strong>「信州紬」の一つとして、1975年（昭和50年）2月17日に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。信州紬は先染めの平織物で、経糸に生糸・山繭糸・玉糸・真綿の手紡ぎ糸、緯糸に玉糸か真綿の手紡ぎ糸を使い、手投げ杼を用いる手織りなどの伝統的な技法が要件です。産地組合は<strong>長野県織物工業組合</strong>です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙と織元の情報が価値の裏付けに
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                伝統的工芸品の要件を満たす信州紬（上田紬）には伝統証紙が付くものがあり、産地・品質の裏付けになります。また、上田紬は織元が数軒に限られるため、織元の名前やしおり・落款が確認できると評価の助けになります。証紙・付属品は反物の端やたとう紙の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。
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
                  <span>伝統的工芸品（信州紬）としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>織元・作り手に応じた評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地・織元の特定が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>ほかの紬との区別がつきにくくなる</span>
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
              、「日本三大紬」と並び称されることもある
              <Link href="/articles/yuki-tsumugi/" className="text-[#6b4c8a] underline">
                結城紬
              </Link>
              ・
              <Link href="/articles/oshima-tsumugi/" className="text-[#6b4c8a] underline">
                大島紬
              </Link>
              の相場ページもあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 高く売るポイント */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            上田紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・織元のしおり・購入時の箱は、産地と作り手を示す重要な手がかりです。実売データでも証紙のある未使用帯が高値になる傾向が見られました。たとう紙や箱の中を必ず確認しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：紬に詳しい着物専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                上田紬は流通量が少なく、一般的なリサイクルショップでは他の紬と区別されずに扱われることがあります。信州紬・産地織物の知識がある着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                流通量が少ない織物は業者によって評価や販路が異なり、査定額に差が出やすくなります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                丈夫な地風で知られる上田紬も、日焼けや湿気、汗染み、虫食いで価値が下がりやすくなります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めの査定がおすすめです。
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
            【実売データ】公開オークションでの上田紬のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。上田紬は流通量が少なく、半年で数十件規模の出品にとどまる希少な織物です。
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
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">上田紬 全体（着物・帯・反物）</td>
                  <td className="px-4 py-3 font-medium">32件</td>
                  <td className="px-4 py-3 font-medium">約7,814円</td>
                  <td className="px-4 py-3 font-medium">4,730円</td>
                  <td className="px-4 py-3 font-medium">39,600円</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">着物</td>
                  <td className="px-4 py-3 font-medium">24件</td>
                  <td className="px-4 py-3 font-medium">約6,188円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium">39,600円</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">帯</td>
                  <td className="px-4 py-3 font-medium">7件</td>
                  <td className="px-4 py-3 font-medium">約14,364円</td>
                  <td className="px-4 py-3 font-medium">—</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">28,050円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E4%B8%8A%E7%94%B0%E7%B4%AC"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「上田紬」の落札相場
            </a>
            （集計期間：2026年1月25日〜2026年7月13日・2026年7月16日取得）
            <br />
            ※ タイトルに「上田紬」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外しています。小物・ハギレ等は表から除外しています。
            <br />
            ※ 件数が少なめのため、平均は個々の高額落札に引っ張られて振れやすい点にご注意ください。傾向として、帯の平均が着物を上回っており、証紙のある新品・未使用の帯などが押し上げています。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品と、証紙付きの未使用品では価格が大きく上下するため、上表の平均・中央値はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・織元で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・未使用の上田紬は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・織元・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ上田紬でも、証紙の有無、織元の確認可否、保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（信州紬の伝統証紙など）", "◎ 大きくプラス", "産地・品質の裏付けになり、評価が安定します。信州紬（上田紬）としての価値が認められやすくなります。"],
                  ["証紙なし", "△ 下がりやすい", "上田紬か、他産地の類似の縞・格子の紬かの判別が難しくなり、慎重な査定になりがち。織元のしおり・落款など他の手がかりが重要になります。"],
                  ["織元・作り手が確認できる", "◎ 高評価", "織元が数軒に限られるため、どの工房の品か確認できると評価の助けになります。"],
                  ["未使用・しつけ糸付き", "◎ プラス", "実売データでも証紙のある新品・未使用の帯が高値になる傾向。未使用・美品は状態評価が高くなります。"],
                  ["帯（証紙付き・状態良好）", "○〜◎", "上田紬は帯の評価が着物を上回る例も見られます。証紙と状態がそろった帯は需要があります。"],
                  ["反物（未仕立て）", "○ 需要で変動", "未仕立ての反物は用途の自由度が高く、状態が良ければ評価されやすいことがあります。"],
                  ["手織りか量産か", "◎／△", "手投げ杼による手織りなど伝統的技法の品は評価が高い傾向。量産品や上田紬「風」の品は評価が控えめになりやすい。"],
                  ["日焼け・汗染み・難あり", "△ マイナス", "絹の織物は日焼け・汗染み・虫食いで価値が下がりやすく、状態不良は減額対象。自己クリーニングは避け、現状のまま査定へ。"],
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
              上田紬を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              上田紬は証紙・織元・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・未使用・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の裏付けがある上田紬は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・織元・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/tensan-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                天蚕紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                同じ長野県・安曇野の希少な織物。野生の山繭（天蚕）の糸を使う天蚕紬を解説。
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
                上田紬の査定に対応した着物専門買取業者を比較。相見積もりで高価買取を狙えます。
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
              href="/articles/yuki-tsumugi/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                結城紬の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                「日本三大紬」に数えられる結城紬の証紙・種類と実売データ。
              </p>
            </Link>
            <Link
              href="/articles/nagano/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                長野県の着物買取
              </h3>
              <p className="text-xs text-gray-600">
                長野県で着物を高く売る方法と、出張・持込・宅配に対応した業者の選び方。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            上田紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            上田紬の買取相場はあくまで目安です。証紙・織元・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの上田紬の正確な価値を確認しましょう。
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
