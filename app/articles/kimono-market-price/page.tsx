import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "着物買取の相場一覧【2026年最新】振袖・留袖・訪問着など種類別の買取価格",
  description:
    "着物（和服）買取の相場を種類別に解説。振袖・訪問着・留袖・小紋・付け下げは実際の落札データ（件数・平均・最高値・出典つき）を掲載。値段がつく条件と高く売るコツもまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/kimono-market-price/",
  },
  openGraph: { images: ["/og-default.png"],
    title: "着物買取の相場一覧【2026年最新】振袖・留袖・訪問着など種類別の買取価格",
    description:
      "着物（和服）買取の相場を種類別に解説。振袖・訪問着・留袖・小紋・付け下げの落札データ（出典つき）と高く売るコツ。",
    url: "https://kimonokaitori-biyori.com/articles/kimono-market-price/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "着物の買取相場は平均いくらくらいですか？",
    answer:
      "着物の買取相場は種類や状態によって大きく異なります。当サイトで集計した直近30日の落札データでは、平均落札価格は振袖 約6,269円・訪問着 約4,820円・小紋 約2,474円で、どの種類も数千円台です。10万円を超える落札は人間国宝や老舗の作品・時代物に限られます。買取価格は一般に落札価格より低くなります。",
  },
  {
    question: "古い着物でも買い取ってもらえますか？",
    answer:
      "はい、古い着物でも買取対象になることが多く見られます。ただし、経年劣化によるシミ・カビ・色あせがある場合は査定額が大幅に下がります。逆にアンティーク着物として価値が認められるケースもあり、大正〜昭和初期の状態の良い着物は高額になることもあります。まずは無料査定で確認することをおすすめします。",
  },
  {
    question: "証紙がないと買取価格は下がりますか？",
    answer:
      "証紙がない場合、買取価格は2〜5割ほど下がる傾向があります。証紙は着物の産地や品質を公的に証明するもので、特に大島紬・結城紬・加賀友禅などの高級着物では査定額に大きな差が出ます。証紙がなくても買取自体は可能ですが、できるだけ探して一緒に出すことをおすすめします。",
  },
  {
    question: "着物を高く売るベストなタイミングはいつですか？",
    answer:
      "着物の需要が高まる時期の1〜2ヶ月前が売り時です。具体的には、成人式前の10月〜12月（振袖）、卒業式前の1月〜2月（袴・訪問着）、七五三前の8月〜9月が狙い目です。また、着物市場全体の傾向として、早めに売るほど状態が良いため高値がつきやすくなります。",
  },
  {
    question: "着物と帯はセットで売った方が高くなりますか？",
    answer:
      "はい、着物と帯、さらに帯締め・帯揚げなどの和装小物をセットで査定に出すと、単品よりも高額になるケースが多く見られます。特にコーディネートが揃っている場合や、同じ作家・ブランドで統一されている場合は、セットとしての付加価値が認められやすくなります。不要な着物関連品はまとめて査定に出してください。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "着物買取の相場一覧【2026年最新】振袖・留袖・訪問着など種類別の買取価格",
  description:
    "着物（和服）買取の相場を種類別に解説。振袖・訪問着・留袖・小紋・付け下げの落札データ（出典つき）と高く売るコツ。",
  datePublished: "2026-04-15",
  dateModified: "2026-10-29",
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
    "@id": "https://kimonokaitori-biyori.com/articles/kimono-market-price/",
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
      name: "相場一覧",
      item: "https://kimonokaitori-biyori.com/articles/kimono-market-price/",
    },
  ],
};

export default function KimonoMarketPricePage() {
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
          { label: "相場一覧" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light" style={{ backgroundImage: "linear-gradient(135deg, rgba(248,243,250,0.45), rgba(252,248,242,0.40)), url('/images/heroes/kimono-market-price.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">
              2026年最新版
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物買取の相場一覧</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                種類別の買取価格まとめ
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              振袖・訪問着・留袖・小紋・付け下げの実際の落札データ（件数・平均・最高値・出典つき）をまとめました。高額買取になる条件や高く売るコツも解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">
              最終更新：2026年10月29日
            </p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700">
          <p className="font-bold text-gray-900 mb-1">この記事の結論</p>
          <p>実際の落札データ（直近30日）では、平均落札価格は振袖 約6,269円・訪問着 約4,820円・小紋 約2,474円と、どの種類も数千円台です。10万円を超える落札は、人間国宝や老舗の作品・時代物に限られます。買取価格は一般に落札価格より低くなります。</p>
        </div>
      </div>

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
                  <a href="#overview" className="text-[#6b4c8a] hover:underline">
                    1. 着物買取の相場はどのくらい？全体像を把握
                  </a>
                </li>
                <li>
                  <a href="#price-table" className="text-[#6b4c8a] hover:underline">
                    2. 【種類別】着物の落札相場（実売データ）
                  </a>
                </li>
                <li>
                  <a href="#high-price-conditions" className="text-[#6b4c8a] hover:underline">
                    3. 高額買取になる条件
                  </a>
                </li>
                <li>
                  <a href="#low-price-conditions" className="text-[#6b4c8a] hover:underline">
                    4. 相場が下がる条件
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 着物を高く売る5つのコツ
                  </a>
                </li>
                <li>
                  <a href="#obi-komono" className="text-[#6b4c8a] hover:underline">
                    6. 帯・和装小物の買取相場
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

      {/* 全体像 */}
      <section id="overview" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物買取の相場はどのくらい？全体像を把握
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              着物の買取相場は、種類・素材・状態・作家・産地によって大きく異なります。一般的な着物の場合、数百円〜数千円程度が中心ですが、有名作家の作品や人気産地の紬などは数万円〜数十万円の値がつくこともあります。
            </p>
            <p>
              特に重要なのは<strong>素材</strong>と<strong>状態</strong>です。正絹（しょうけん）の着物は化繊やウールと比べて圧倒的に高値がつきやすく、シミ・カビ・色あせがなく、保管状態が良好であれば相場の上限に近い価格が期待できます。
            </p>
            <p>
              また、<strong>証紙</strong>（産地証明書）の有無も査定額に大きく影響します。大島紬や結城紬、加賀友禅などの高級着物では、証紙があるかないかで買取価格が2倍以上変わることもあります。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-6">
              <h3 className="font-bold text-[#6b4c8a] mb-3">着物買取の相場を左右する主な要素</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>種類</strong>：振袖・訪問着は需要が高く、小紋・浴衣は低め</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>素材</strong>：正絹が最も高く、化繊・ウールは値がつきにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>状態</strong>：未使用・美品は高額、シミ・汚れがあると大幅減額</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>作家・ブランド</strong>：人間国宝や有名作家の作品は数十万円以上も</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>産地</strong>：大島紬・結城紬・加賀友禅などは高い評価</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span><strong>証紙の有無</strong>：あれば産地・品質の証明になり査定額UP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 種類別相場一覧表 */}
      <section id="price-table" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            【種類別】着物の落札相場（実売データ）
          </h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed">
            買取価格は、業者・状態・素材・作家物かどうかで大きく変わり、公的な統計もありません。そのため当サイトでは、根拠を示せない「買取価格の目安」は載せず、実際に売買された価格（オークションの落札データ）を出典つきで掲載しています。種類ごとの詳しい解説は各ページをご覧ください。
          </p>
          <ul className="flex flex-wrap gap-2 text-sm mb-2">
            {[
              ["/articles/furisode/", "振袖"],
              ["/articles/houmongi/", "訪問着"],
              ["/articles/tomesode/", "留袖（黒留袖・色留袖）"],
              ["/articles/komon-tsukesage/", "小紋・付け下げ"],
              ["/articles/oshima-tsumugi/", "大島紬"],
              ["/articles/yuki-tsumugi/", "結城紬"],
              ["/articles/tsumugi-types/", "紬（その他）"],
              ["/articles/iromuji/", "色無地"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="inline-block px-3 py-1.5 rounded-full border border-[#e8ddd0] bg-white text-[#6b4c8a] hover:bg-[#faf8f5]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div id="furisode-tomesode" className="bg-white border-2 border-[#6b4c8a] rounded-xl p-5 mt-6">
            <h3 className="font-bold text-[#6b4c8a] mb-2">振袖・留袖・訪問着・小紋・付け下げ・色無地・喪服・羽織・道行コート・塩沢紬の実売データ（オークションの落札相場）</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              実際に個人間で売買された価格（落札価格）を、当サイトの各ページで集計しています。買取価格は一般に落札価格より低くなります。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#6b4c8a] text-white">
                    <th className="border border-[#e8ddd0] px-3 py-2 text-left">種類</th>
                    <th className="border border-[#e8ddd0] px-3 py-2 text-left">落札件数</th>
                    <th className="border border-[#e8ddd0] px-3 py-2 text-left">平均落札価格</th>
                    <th className="border border-[#e8ddd0] px-3 py-2 text-left">最高落札価格（単品）</th>
                    <th className="border border-[#e8ddd0] px-3 py-2 text-left">取得日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2"><Link href="/articles/furisode/" className="text-[#6b4c8a] underline">振袖</Link></td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2,666件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約6,269円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">275,000円（藤娘きぬたやの総絞り振袖）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月20日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2"><Link href="/articles/houmongi/" className="text-[#6b4c8a] underline">訪問着</Link></td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2,297件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約4,820円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">363,000円（加賀友禅・初代 由水十久の未使用品）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月19日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2"><Link href="/articles/tomesode/" className="text-[#6b4c8a] underline">黒留袖</Link></td>
                    <td className="border border-[#e8ddd0] px-3 py-2">1,225件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約2,733円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">154,000円（人間国宝・森口華弘の作品）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月18日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2"><Link href="/articles/tomesode/" className="text-[#6b4c8a] underline">色留袖</Link></td>
                    <td className="border border-[#e8ddd0] px-3 py-2">295件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約4,169円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">200,000円（江戸時代のアンティーク）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月18日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2"><Link href="/articles/komon-tsukesage/" className="text-[#6b4c8a] underline">小紋</Link></td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2,908件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約2,474円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">242,000円（浦野理一の型染小紋・未使用）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月21日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2"><Link href="/articles/komon-tsukesage/" className="text-[#6b4c8a] underline">付け下げ</Link></td>
                    <td className="border border-[#e8ddd0] px-3 py-2">230件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約3,871円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">107,800円（志ま亀の付け下げ）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月21日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2"><Link href="/articles/iromuji/" className="text-[#6b4c8a] underline">色無地</Link></td>
                    <td className="border border-[#e8ddd0] px-3 py-2">826件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約3,499円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">176,000円（銀座もとじの男性用・夏物〈紗〉の色無地）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月27日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2">喪服</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">10件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約2,203円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">10,900円（五つ紋付の黒喪服）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月27日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2">羽織</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">733件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約5,143円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">132,000円（銀座もとじの男性用長羽織・絽）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月28日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2">道行コート</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">147件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約3,691円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">69,300円（青山八木の道行コート・ロング丈）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月29日</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e8ddd0] px-3 py-2">塩沢紬</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">14件（直近30日）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">約3,570円</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">75,000円（初代 林宗平作の本場塩沢紬・出品名に「新品」）</td>
                    <td className="border border-[#e8ddd0] px-3 py-2">2026年10月29日</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              出典：オークファン（aucfan.com）・Yahoo!オークション落札相場（振袖はまとめ売りなどを除いた集計。最高落札価格は、同じ「振袖」の語を含む日本刀〈振袖茎〉や人形用の衣装の出品を除いた着物単品です。小紋の最高落札価格は、出品名から帯か着物かを判別できない出品を除いています。喪服の最高落札価格は、まとめ売りと「色喪服にも」と書かれた色無地を除いた単品です。喪服は直近30日の落札が10件と少なく、平均は参考値です。羽織の最高落札価格は、着物とのアンサンブル・セット出品と、中国の古い衣装〈古玩〉の出品を除いた羽織単品です。道行コートは「道行 コート 正絹」で集計しました。塩沢紬は直近30日の落札が14件と少なく、平均は参考値です。最高落札価格は、まとめ売り・草履や下駄の鼻緒・リメイク品を除いた単品です）。小紋・付け下げも平均落札額は数千円台です。留袖は家紋入りが多く買い手が限られるため、未使用品でも平均は低めです。黒留袖より色留袖の平均が高いのは、色留袖は一つ紋にすると着られる場面が広がり、需要が黒留袖より残っているためと考えられます。10万円を超える落札は人間国宝や老舗の作品・時代物に限られ、平均落札額はどちらも数千円台です。区分別の内訳と読み方は<Link href="/articles/furisode/" className="text-[#6b4c8a] underline">振袖の買取相場</Link>・<Link href="/articles/houmongi/" className="text-[#6b4c8a] underline">訪問着の買取相場</Link>・<Link href="/articles/tomesode/" className="text-[#6b4c8a] underline">留袖（黒留袖・色留袖）の買取相場</Link>をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 高額買取になる条件 */}
      <section id="high-price-conditions" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            高額買取になる条件
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            同じ種類の着物でも、以下の条件に当てはまると買取価格が大きく上がります。特に「作家物」「証紙あり」「正絹」「状態良好」の4つが揃うと、相場の上限を超える高額査定が期待できます。
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                人間国宝・有名作家の作品
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久保田一竹（辻が花染め）、羽田登喜男（友禅）、志村ふくみ（紬織）などの人間国宝や、北村武資、森口華弘といった有名作家の作品は、数十万円〜百万円以上の買取価格がつくことがあります。落款（作家のサイン）が確認できれば査定額は大幅にアップします。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙（産地証明書）あり
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大島紬の「本場大島紬」証紙、結城紬の「本場結城紬」証紙、加賀友禅の「加賀染振興協会」証紙など、公的な証紙があると産地と品質が保証されるため、査定額が大幅に上がります。証紙がないと同じ着物でも半額以下になることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                正絹（しょうけん）素材
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の素材として最も高く評価されるのが正絹（シルク100%）です。化繊やウール、木綿の着物は買取対象外の業者もありますが、正絹であれば幅広い業者で買取してもらえます。正絹かどうかは手触りや燃やした際の匂いで判別できますが、証紙で確認するのが確実です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                状態が良好（未使用・美品）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着用回数が少なく、シミ・汚れ・カビ・色あせ・虫食いなどがない美品は高額査定が期待できます。特に「しつけ糸付き」の未使用品は新品同様と評価され、相場の上限に近い価格がつきやすくなります。たとう紙に入った状態で保管されていると好印象です。
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[#e8ddd0] rounded-xl p-5">
            <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
              そのほか高額になりやすい条件
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#6b4c8a]">
                    <th className="px-3 py-2 text-left font-semibold text-[#6b4c8a]">条件</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#6b4c8a]">詳細</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#6b4c8a]">影響度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">有名産地物</td>
                    <td className="px-3 py-2 text-gray-700">大島紬・結城紬・加賀友禅・京友禅など</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">非常に大きい</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">有名ブランド</td>
                    <td className="px-3 py-2 text-gray-700">千總・龍村美術織物・川島織物など</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">大きい</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">丈が長い</td>
                    <td className="px-3 py-2 text-gray-700">身丈160cm以上・裄丈67cm以上</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">中程度</td>
                  </tr>
                  <tr className="border-b border-[#e8ddd0]">
                    <td className="px-3 py-2 font-medium">流行の色柄</td>
                    <td className="px-3 py-2 text-gray-700">落ち着いた色味、上品な柄が人気</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">中程度</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">セット品</td>
                    <td className="px-3 py-2 text-gray-700">帯・帯締め・帯揚げとコーディネート一式</td>
                    <td className="px-3 py-2 text-[#c9a76c] font-bold">中程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 相場が下がる条件 */}
      <section id="low-price-conditions" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            相場が下がる条件
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            逆に、以下の条件に該当すると買取価格は相場より低くなります。場合によっては買取不可になることもありますので、事前にご確認ください。
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-red-300">
                      <th className="px-3 py-2 text-left font-semibold text-red-600">マイナス条件</th>
                      <th className="px-3 py-2 text-left font-semibold text-red-600">影響</th>
                      <th className="px-3 py-2 text-left font-semibold text-red-600">対策</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">シミ・汚れ</td>
                      <td className="px-3 py-2 text-gray-700">30〜70%減額</td>
                      <td className="px-3 py-2 text-gray-700">クリーニングは費用対効果を要検討</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">カビ・虫食い</td>
                      <td className="px-3 py-2 text-gray-700">50〜90%減額</td>
                      <td className="px-3 py-2 text-gray-700">防湿剤と定期的な風通しで予防</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">色あせ・退色</td>
                      <td className="px-3 py-2 text-gray-700">30〜50%減額</td>
                      <td className="px-3 py-2 text-gray-700">直射日光を避けて保管</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">化繊・ウール素材</td>
                      <td className="px-3 py-2 text-gray-700">大幅減額〜買取不可</td>
                      <td className="px-3 py-2 text-gray-700">正絹以外でも対応する業者を選ぶ</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">証紙なし</td>
                      <td className="px-3 py-2 text-gray-700">20〜50%減額</td>
                      <td className="px-3 py-2 text-gray-700">購入時の証紙を必ず保管しておく</td>
                    </tr>
                    <tr className="border-b border-[#e8ddd0]">
                      <td className="px-3 py-2 font-medium">サイズが小さい</td>
                      <td className="px-3 py-2 text-gray-700">10〜30%減額</td>
                      <td className="px-3 py-2 text-gray-700">仕立て直しの余地があれば評価される</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">流行遅れの柄</td>
                      <td className="px-3 py-2 text-gray-700">10〜30%減額</td>
                      <td className="px-3 py-2 text-gray-700">古典柄は影響が少ない</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-xl p-5">
              <p className="text-sm leading-relaxed">
                <strong className="text-[#6b4c8a]">ポイント：</strong>
                状態が悪い着物でも、無料査定を行っている業者に依頼すれば費用はかかりません。「値段がつかないかも」と思っても、まずは複数業者に相談してみることが大切です。思わぬ価値が見つかることもあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 高く売るコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            着物を高く売る5つのコツ
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ1：複数の業者に査定を依頼する
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の査定基準は業者によって異なります。同じ着物でも業者Aでは5,000円、業者Bでは2万円ということも珍しくありません。最低でも3社以上に無料査定を依頼し、最も高い金額を提示した業者に売ることが高額買取への近道です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ2：証紙・落款を必ず添える
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙（産地証明書）や落款（作家のサイン）は、着物の価値を証明する最も重要な要素です。購入時のたとう紙の中や箱の中に入っていることが多いので、査定前に必ず探して一緒に提出してください。証紙があるだけで査定額が2倍以上になることもあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ3：帯・小物もセットで出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物単体よりも、帯・帯締め・帯揚げ・草履・バッグなどのセットで出すと、コーディネートとしての付加価値が認められて査定額がアップします。使わない着物関連品があれば、まとめて査定に出すのがおすすめです。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ4：保管状態に気を配る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                査定前に、着物の状態をできるだけ良くしておいてください。たとう紙に包み、防湿剤と一緒に桐たんすで保管するのが理想です。売ると決めたら早めに査定に出すことも大切です。時間が経つほど状態が悪化するリスクがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                コツ5：需要が高まる時期に売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                着物の需要は季節によって変動します。振袖は成人式の2〜3ヶ月前（10月〜12月）、訪問着は結婚式シーズンの春・秋、袴は卒業式前の1月〜2月に需要が高まります。需要期の少し前に売ることで、通常より高い査定額が期待できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 帯・和装小物の相場 */}
      <section id="obi-komono" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            帯・和装小物の買取相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            着物だけでなく、帯や和装小物にも買取価値があります。特に袋帯や名古屋帯は単体でも数千円〜数万円の値がつくことがあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c9a76c] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">品目</th>
                  <th className="px-4 py-3 text-left font-semibold">一般品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold">高級品の相場</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">袋帯</td>
                  <td className="px-4 py-3">1,000円〜1万円</td>
                  <td className="px-4 py-3">1万円〜3万円以上</td>
                  <td className="px-4 py-3 text-gray-600">西陣織・川島織物は高額</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">名古屋帯</td>
                  <td className="px-4 py-3">500円〜5,000円</td>
                  <td className="px-4 py-3">5,000円〜1万円以上</td>
                  <td className="px-4 py-3 text-gray-600">博多織が人気</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold">丸帯</td>
                  <td className="px-4 py-3">5,000円〜2万円</td>
                  <td className="px-4 py-3">2万円〜5万円以上</td>
                  <td className="px-4 py-3 text-gray-600">アンティーク品に需要あり</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold">帯締め・帯揚げ</td>
                  <td className="px-4 py-3">100円〜500円</td>
                  <td className="px-4 py-3">500円〜3,000円</td>
                  <td className="px-4 py-3 text-gray-600">単体だと低額が多い</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold rounded-bl-lg">草履・バッグ</td>
                  <td className="px-4 py-3">100円〜1,000円</td>
                  <td className="px-4 py-3">1,000円〜5,000円</td>
                  <td className="px-4 py-3 text-gray-600 rounded-br-lg">ブランド品は高め</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 帯や小物は着物とセットで出すことで、全体の査定額がアップする傾向があります。
          </p>
        </div>
      </section>

      {/* がっかりする理由と対策 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-[#e8ddd0]">
            着物買取で「がっかり」する理由と対策
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            「着物を売ったら100円にしかならなかった」「期待していたのにがっかり」という声は珍しくありません。着物の買取価格は<strong>「格・産地・技法・作家」の4つの要素</strong>で決まります。がっかりする理由と、その対策を理解しておいてください。
          </p>

          <p className="text-sm font-bold text-gray-900 mb-2">がっかりする主な理由</p>
          <div className="space-y-2 mb-5">
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>ノーブランド品：</strong>産地物や作家物でない着物は、中古市場での需要が低く、数百円程度の査定になることが多く見られます。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>状態が悪い：</strong>シミ・カビ・虫食いなどがあると大幅に減額されます。特に裏地の変色は見落としがちです。
              </p>
            </div>
            <div className="bg-[#faf8f5] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>需要がない柄・色：</strong>流行から外れた柄や、着用シーンが限られる色味の着物は買い手がつきにくい傾向があります。
              </p>
            </div>
          </div>

          <p className="text-sm font-bold text-gray-900 mb-2">がっかりしないための対策</p>
          <div className="space-y-2">
            <div className="bg-gradient-to-r from-[#f3eef7] to-[#fdf2f6] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>1. 着物専門の買取業者を選ぶ：</strong>総合リサイクルショップではなく、着物の価値がわかる専門業者に依頼することをおすすめします。査定額が数倍変わることがあります。
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#f3eef7] to-[#fdf2f6] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>2. 複数業者で相見積もりを取る：</strong>最低2〜3社に査定を依頼し、最も高い金額を提示した業者を選ぶことをおすすめします。
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#f3eef7] to-[#fdf2f6] border border-[#e8ddd0] rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>3. 証紙を必ず確認：</strong>証紙（産地証明書）は着物の価値を証明する最も重要な書類です。紛失していないか、査定前に必ずご確認ください。
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※ 着物の買取価格は「格・産地・技法・作家」の4要素で決まります。これらの要素が揃った着物ほど、高額査定が期待できます。
          </p>
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
      <section className="py-10">
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
                買取大吉・ウリエルなどおすすめ5社を比較。口コミ・評判・買取実績まで。
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
                泥染め・藍大島・白大島など種類別の買取価格と高く売るコツを解説。
              </p>
            </Link>
            <Link
              href="/articles/furisode/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                振袖の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                成人式後に振袖を売る方法と、高価買取のコツをまとめました。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            着物の買取相場を調べたら、まずは無料査定へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            相場はあくまで目安です。実際の買取価格はお手持ちの着物の状態・作家・産地によって大きく変わります。まずは信頼できる業者に無料査定を依頼して、正確な買取価格をご確認ください。
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
