import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】秩父銘仙の買取相場｜ほぐし捺染の特徴・玉虫効果と高く売るコツ",
  description:
    "秩父銘仙（ちちぶめいせん）の買取相場を徹底解説。埼玉・秩父の平織絹織物、ほぐし捺染による表裏のない鮮やかな柄と玉虫効果、2013年に国の伝統的工芸品に指定された背景、アンティーク着物として高く売るポイントを買取の視点で正直にまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/chichibu-meisen/",
  },
  openGraph: {
    title: "【2026年最新】秩父銘仙の買取相場｜ほぐし捺染の特徴と高く売るコツ",
    description:
      "秩父銘仙の買取相場と高く売る方法を解説。埼玉・秩父の平織絹織物、状態と柄が査定の鍵。",
    url: "https://kimonokaitori-biyori.com/articles/chichibu-meisen/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "秩父銘仙はどのくらいの価格で買い取ってもらえますか？",
    answer:
      "秩父銘仙は普段着・おしゃれ着として親しまれてきた絹織物で、買取では一般に高額になりにくい傾向があります。状態やデザインにもよりますが、相場の目安はおおむね数千円〜一万円前後とされることが多いです。一方で、保存状態が良く、大柄でモダンな配色のアンティーク着物として人気のある柄は、リメイク素材としての需要もあり、相場の上限に近い査定になることもあります。",
  },
  {
    question: "秩父銘仙の特徴である「ほぐし捺染」とは何ですか？",
    answer:
      "ほぐし捺染（ほぐし織り）は、そろえた経糸に緯糸を粗く仮織りし、そこに型紙で柄を染めてから、仮織りの緯糸を手でほぐしながら本織りしていく技法です。糸の段階で型染めをするため表裏が同じように染まり、裏表のない生地に仕上がります。柄の輪郭にわずかなにじみが出ることで、銘仙らしい柔らかく温かみのある風合いが生まれます。",
  },
  {
    question: "秩父銘仙の「玉虫効果」とはどのようなものですか？",
    answer:
      "玉虫効果とは、経糸の型染めの色と緯糸の色との関係によって、見る角度を変えると布地の色の見え方が変わって見える現象です。秩父銘仙ではこの玉虫効果が見られる場合があり、光の当たり方で表情が変わる華やかさが、銘仙ならではの魅力として知られています。",
  },
  {
    question: "秩父銘仙は伝統的工芸品に指定されていますか？",
    answer:
      "はい。秩父銘仙は2013年（平成25年）12月26日に国の伝統的工芸品（経済産業大臣指定）に指定されています。埼玉県秩父地域で受け継がれてきた平織の絹織物で、ほぐし捺染による表裏のない鮮やかな柄が評価されました。指定後の2015年には秩父銘仙協同組合が設立され、産地として技術の保存・振興が図られています。",
  },
  {
    question: "秩父銘仙を高く売るにはどうすればよいですか？",
    answer:
      "秩父銘仙はアンティーク着物としての価値で評価されることが多いため、まずは状態を良好に保つことが大切です。シミ・ヤケ・虫食いがあると価値が下がりやすいので、たとう紙に包んで保管し、早めに査定へ出しましょう。そのうえで、アンティーク着物や銘仙の取り扱いに詳しい専門業者を選び、複数社の無料査定を比較することが重要です。大柄でモダンな柄ほど需要が高い傾向があります。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "秩父銘仙の買取相場｜ほぐし捺染の特徴と玉虫効果",
  description:
    "秩父銘仙の買取相場と高く売る方法を解説。埼玉・秩父の平織絹織物、状態と柄が査定の鍵。",
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
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
    "@id": "https://kimonokaitori-biyori.com/articles/chichibu-meisen/",
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
      name: "秩父銘仙",
      item: "https://kimonokaitori-biyori.com/articles/chichibu-meisen/",
    },
  ],
};

export default function ChichibuMeisenPage() {
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
          { label: "秩父銘仙" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">秩父銘仙の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                ほぐし捺染の特徴・玉虫効果と高く売るコツ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              秩父銘仙（ちちぶめいせん）は、埼玉県秩父地域で織られてきた平織の絹織物です。「ほぐし捺染」による表裏のない鮮やかな柄が特徴で、大正から昭和初期にかけて普段着・おしゃれ着として全国的に流行しました。買取の現実的な相場や、アンティーク着物として価値が出るポイントを正直に解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年6月14日</p>
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
                    1. 秩父銘仙とは？埼玉・秩父の平織絹織物
                  </a>
                </li>
                <li>
                  <a
                    href="#price-by-type"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    2. 【種類別】秩父銘仙の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#characteristics" className="text-[#6b4c8a] hover:underline">
                    3. ほぐし捺染と玉虫効果という特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    className="text-[#6b4c8a] hover:underline"
                  >
                    4. 伝統的工芸品指定と組合の証
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 秩父銘仙を高く売るポイント
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

      {/* 秩父銘仙とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            秩父銘仙とは？埼玉・秩父の平織絹織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              秩父銘仙（ちちぶめいせん）は、<strong>埼玉県秩父地域</strong>で織られてきた<strong>平織の絹織物</strong>です。秩父はかつて養蚕が盛んな土地で、絹織物が地域の暮らしを支えてきました。明治から昭和初期にかけて、丈夫で手頃な普段着・おしゃれ着として全国的に流行し、<strong>2013年（平成25年）12月26日に国の伝統的工芸品</strong>に指定されています。
            </p>
            <p>
              秩父銘仙の最大の特徴は、<strong>「ほぐし捺染（ほぐし織り）」</strong>と呼ばれる独特の技法です。糸の段階で型染めを行うため、表裏のない鮮やかな柄が生まれ、見る角度によって色が変わって見える<strong>玉虫効果</strong>が現れることもあります。大柄でモダンな図案が多く、大正ロマンを感じさせる華やかさが今も人気です。
            </p>
            <p>
              用途としては普段着・おしゃれ着の着物が中心で、礼装用の高級絹織物とは性格が異なります。そのため買取市場では、後述するようにアンティーク着物としての魅力や状態が価値を左右する点を押さえておくことが大切です。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">秩父銘仙の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>埼玉県秩父地域で織られる平織の絹織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>ほぐし捺染による表裏のない鮮やかな柄</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>2013年に国の伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>大柄・モダンな図案の普段着・おしゃれ着</span>
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
            【種類別】秩父銘仙の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            秩父銘仙は普段着の絹織物のため、買取では一般に高額になりにくい傾向があります。価格を左右するのは、状態・柄の魅力・アンティークとしての需要です。以下は一般的な傾向の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    種類・状態
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
                    一般的な銘仙の着物
                  </td>
                  <td className="px-4 py-3 text-gray-700">普段着・おしゃれ着</td>
                  <td className="px-4 py-3 font-medium">数百円〜数千円</td>
                  <td className="px-4 py-3 text-gray-700">状態・柄による</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    状態の良いアンティーク
                  </td>
                  <td className="px-4 py-3 text-gray-700">大柄・モダンな配色</td>
                  <td className="px-4 py-3 font-medium">数千円〜一万円前後</td>
                  <td className="px-4 py-3 text-gray-700">人気の柄ほど高め</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    リメイク向けの反物・端切れ
                  </td>
                  <td className="px-4 py-3 text-gray-700">素材としての需要</td>
                  <td className="px-4 py-3 font-medium">柄・量による</td>
                  <td className="px-4 py-3 text-gray-700">華やかな柄が有利</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    難あり（シミ・ヤケ等）
                  </td>
                  <td className="px-4 py-3 text-gray-700">状態に難あり</td>
                  <td className="px-4 py-3 font-medium">大きく下がる</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    値が付かない場合も
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 上記はあくまで一般的な傾向の目安です。柄の人気度、保存状態、サイズ、業者の販路によって実際の査定額は大きく変動します。
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                銘仙は「高額になりにくい」のが正直なところ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                秩父銘仙は伝統的工芸品に指定された価値ある織物ですが、もともと普段着・おしゃれ着として広く作られた絹物であるため、礼装用の高級織物のような高額査定にはなりにくいのが実情です。査定で価値が出るのは、産地名そのものよりも、<strong>大柄でモダンな柄の魅力</strong>と<strong>保存状態の良さ</strong>です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                アンティーク需要が価格を押し上げる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                一方で、大正ロマンを感じさせる華やかな銘仙は、アンティーク着物やリメイク素材として根強い人気があります。状態が良く、配色や柄に魅力があるものは、相場の上限に近い査定や一万円以上の買取につながることもあります。状態とデザイン次第で評価が大きく変わる織物だといえます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ほぐし捺染と玉虫効果 */}
      <section id="characteristics" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            ほぐし捺染と玉虫効果という特徴
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              秩父銘仙の魅力を支えているのが、<strong>「ほぐし捺染（ほぐし織り）」</strong>という独特の技法です。そろえた経糸に緯糸を粗く仮織りし、そこに型紙で柄を染めてから、仮織りした緯糸を手でほぐしながら本織りしていきます。糸の段階で型染めを行うため、<strong>表裏のない鮮やかな柄</strong>が生まれるのが特徴です。
            </p>
            <p>
              この技法では、柄の輪郭にわずかなにじみやズレが生まれ、それが銘仙らしい柔らかく温かみのある風合いになります。さらに、<strong>経糸の型染めの色と緯糸の色との関係</strong>によって、見る角度を変えると色の見え方が変わる<strong>「玉虫効果」</strong>が現れることもあります。
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">ほぐし捺染のポイント</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>仮織りした経糸に型紙で柄を染める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>緯糸をほぐしながら本織りする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>糸を染めるため表裏のない生地になる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">玉虫効果のポイント</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>経糸と緯糸の色の組み合わせで生まれる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>見る角度で色の見え方が変化する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>光による表情の変化が銘仙の華やかさ</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 mt-5">
            ほぐし捺染ならではの鮮やかさと玉虫効果は、銘仙の柄の魅力を大きく高める要素です。買取査定でも、こうした<strong>柄の華やかさ・デザイン性</strong>が評価につながる重要なポイントになります。アンティーク着物の価値の見方については
            <Link
              href="/articles/antique-kimono/"
              className="text-[#6b4c8a] font-semibold hover:underline"
            >
              アンティーク着物の買取相場
            </Link>
            もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 伝統的工芸品指定と組合の証 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            伝統的工芸品指定と組合の証
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              秩父銘仙は、<strong>2013年（平成25年）12月26日に国の伝統的工芸品（経済産業大臣指定）</strong>に指定されました。長く秩父地域の暮らしを支えてきた絹織物の技術が評価されたもので、指定後の<strong>2015年には秩父銘仙協同組合</strong>が設立され、産地として技術の保存と振興に取り組んでいます。
            </p>
          </div>
          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              査定で手がかりになる情報
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>証紙・組合の表示</strong>（秩父産であることを示す手がかり）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>
                  <strong>たとう紙・購入時の資料</strong>（産地や購入時の情報）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                <span>ほぐし捺染ならではの表裏のない柄・玉虫効果</span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700 mt-4">
              証紙や組合の表示が残っていれば秩父産であることの手がかりになりますが、銘仙は古い普段着のため証紙が残っていないことも珍しくありません。その場合でも、ほぐし捺染による表裏のない柄など、銘仙特有の風合いから産地や価値を判断できる専門業者を選ぶことが大切です。
            </p>
          </div>
          <div className="mt-6 bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              証紙の見方や種類については
              <Link
                href="/articles/certificate-guide/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                着物の証紙ガイド
              </Link>
              、埼玉県の着物・織物の買取相場については
              <Link
                href="/articles/saitama/"
                className="text-[#6b4c8a] font-semibold hover:underline"
              >
                埼玉県の着物買取相場
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
            秩父銘仙を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：状態を良好に保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                秩父銘仙はアンティーク着物としての価値で評価されることが多く、シミ・ヤケ・虫食いがあると価値が大きく下がります。古い絹物は傷みやすいため、たとう紙に包んで湿気を避けて保管し、売ると決めたら早めに査定へ出すのがおすすめです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：アンティーク・銘仙に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                一般的なリサイクルショップでは、銘仙は「古い普段着」として安く査定されがちです。アンティーク着物や銘仙の柄の価値を理解している専門業者であれば、大柄・モダンな図案やほぐし捺染の魅力を踏まえた適正な査定が期待できます。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                銘仙の価値は、業者の販路や在庫状況、リメイク需要によって査定額に差が出ることがあります。最低でも3社に無料査定を依頼し、最も高い価格を提示した業者を選びましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：証紙や購入時の資料を一緒に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙や組合の表示、たとう紙などが残っていれば、秩父産であることの手がかりになり評価につながりやすくなります。なくても査定は可能ですが、産地が分かる資料があれば必ず帯や着物と一緒に査定へ出しましょう。
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

      {/* この着物を売るなら（条件別CTA） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              秩父銘仙を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              秩父銘仙は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い秩父銘仙は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/antique-kimono/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                アンティーク着物の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                銘仙・大正ロマンなど、アンティーク着物が高く売れる見分け方を解説。
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
                証紙の見方と査定への影響を解説。産地が分かると評価が変わります。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            秩父銘仙の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            秩父銘仙の買取相場はあくまで目安です。柄の魅力・保存状態・アンティーク需要によって実際の査定額は大きく変わります。アンティーク着物に詳しい査定員に無料査定を依頼して、お手持ちの秩父銘仙の正確な価値を確認しましょう。
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
