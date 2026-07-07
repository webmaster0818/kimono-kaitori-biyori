import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】首里織の買取相場｜人間国宝・宮平初子の作品と証紙で価値が変わる",
  description:
    "首里織（沖縄・那覇市首里）の買取相場と高く売る方法を解説。花倉織・道屯織・首里花織など多彩な織技法の総称で、1983年に伝統的工芸品に指定。人間国宝・宮平初子の作品や証紙の有無で価値が変わる点、査定のポイントをまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/shuri-ori/",
  },
  openGraph: {
    title: "【2026年最新】首里織の買取相場｜人間国宝・宮平初子の作品と証紙で価値が変わる",
    description:
      "首里織（沖縄・那覇市首里）の買取相場と高く売る方法。作家物・証紙の有無で価値が変わる点を解説。",
    url: "https://kimonokaitori-biyori.com/articles/shuri-ori/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "首里織はどのくらいで買い取ってもらえますか？",
    answer:
      "首里織の買取価格は、織りの種類（花倉織・道屯織・首里花織など）、作家物かどうか、証紙の有無、状態によって大きく変わります。人間国宝・宮平初子をはじめとする著名作家の作品は高く評価される傾向があります。一方、作家不明で証紙のないものは評価が控えめになりがちです。具体的な金額は需要や取扱業者によっても変動するため、着物専門業者の無料査定で確認するのが確実です。",
  },
  {
    question: "首里織に人間国宝はいますか？",
    answer:
      "はい。宮平初子（みやひら はつこ、1922〜2022）氏が、1998年に国の重要無形文化財「首里の織物」の保持者（各個認定＝人間国宝）に認定されています。沖縄県内の女性として初の人間国宝でした。なお、首里の織物の重要無形文化財は2023年に祝嶺恭子氏も認定されており、両者は別の人物です。",
  },
  {
    question: "首里織はどんな織物ですか？",
    answer:
      "首里織は、沖縄県那覇市首里に伝わる多彩な紋織・絣の織技法の総称です。代表的なものに、花織と絽織を組み合わせた最高級品の花倉織（はなくらおり）、両面に使える道屯織（どうとんおり）、浮き織りの首里花織などがあります。琉球王府の城下町・首里で、王族・士族向けの高級織物として発達しました。1983年（昭和58年）に国の伝統的工芸品に指定されています。",
  },
  {
    question: "首里織に証紙がない場合でも売れますか？",
    answer:
      "証紙がなくても買取は可能ですが、産地や作家の特定が難しくなるため査定額は下がりやすくなります。伝統的工芸品の首里織には那覇伝統織物事業協同組合の検査を経た証紙が付き、これがそろっていると産地と品質の裏付けになります。購入時の証紙・たとう紙・箱などの付属品が残っていれば、一緒に査定に出すことで評価が上がる可能性があります。",
  },
  {
    question: "首里織を高く売るにはどうすればよいですか？",
    answer:
      "証紙や付属品をそろえること、沖縄の織物に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。作家物は業者によって評価が分かれやすいため、相見積もりが特に重要です。日焼けや汗染みが進む前に、状態が良いうちに早めの査定がおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "首里織の買取相場｜作家物・証紙で価値が変わる",
  description:
    "首里織（沖縄・那覇市首里）の買取相場と高く売る方法。作家物・証紙の有無で価値が変わる点を解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/shuri-ori/",
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
      name: "首里織",
      item: "https://kimonokaitori-biyori.com/articles/shuri-ori/",
    },
  ],
};

export default function ShuriOriPage() {
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
          { label: "首里織" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#b5402f] text-white mb-4 tracking-wide">
              沖縄・伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">首里織の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                作家物・証紙で価値が変わる
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              首里織（しゅりおり）は、琉球王府の城下町・那覇市首里に伝わる多彩な織技法の総称です。花倉織・道屯織・首里花織など、王族・士族向けに磨かれた高級織物で、1983年に国の伝統的工芸品に指定されています。人間国宝・宮平初子の作品をはじめ、作家物や証紙の有無で買取価値が変わります。見分け方と高く売るポイントを解説します。
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
                    1. 首里織とは？王府が育てた織りの総称
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 首里織の代表的な織りの種類
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 首里織の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 人間国宝・指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 首里織を高く売るポイント
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

      {/* 首里織とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            首里織とは？王府が育てた織りの総称
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              首里織（しゅりおり）は、沖縄県那覇市首里に伝わる<strong>多彩な紋織・絣の織技法の総称</strong>です。約500年にわたり琉球王国の王都として栄えた首里では、中国や東南アジア諸国の影響を受けつつ独自の染織が発達し、優れた織物は主に<strong>王族・士族の衣服</strong>として用いられました。
            </p>
            <p>
              首里織は単一の織り方を指すのではなく、首里に伝わる複数の織りの総称である点が特徴です。素材は絹が中心で、ほかに苧麻（ちょま）や糸芭蕉が用いられることもあります。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">首里織の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>那覇市首里に伝わる紋織・絣の織技法の総称</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>琉球王府の城下町で王族・士族向けに発達した高級織物</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>花倉織・道屯織・首里花織など多彩な技法を含む</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>素材は絹を中心に、苧麻・糸芭蕉なども使われる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1983年（昭和58年）に国の伝統的工芸品に指定</span>
                </li>
              </ul>
            </div>
            <p>
              沖縄全体での着物買取の方法や地元業者の選び方については
              <Link href="/articles/okinawa/" className="text-[#6b4c8a] underline font-medium">
                沖縄の着物買取おすすめ業者
              </Link>
              のページもあわせてご覧ください。本ページは「首里織という織物の価値や見分け方」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 織りの種類 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            首里織の代表的な織りの種類
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            首里織は複数の織技法の総称です。どの織りかによって希少性や評価が変わるため、代表的なものを知っておくと査定の参考になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    織りの種類
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    花倉織（はなくらおり）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    花織と絽織を組み合わせた織物。王朝時代に王妃や王女の夏衣に用いられた最高級品
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    道屯織（どうとんおり）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    経糸を浮かせて織る両面浮きの織り。男物の官衣に使われ、表裏どちらも使える
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    首里花織
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    浮き織りによる紋織。手花織（てぃばなおり）など複数の種類を含む
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    そのほかの技法
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    諸取切（むるどぅっち）・手縞（てぃじま）・煮綛芭蕉布・花織手巾なども首里織に含まれる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            織りの種類によって希少性が異なります。花倉織のような最高級品は特に評価されやすい傾向があります。
          </p>
        </div>
      </section>

      {/* 相場 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            首里織の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            首里織の買取価格は、織りの種類・作家物か否か・証紙の有無・状態によって大きく変わります。以下は一般的な傾向であり、実際の金額は需要や業者によって変動します。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                作家物・証紙ありが高評価
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                首里織で最も評価されやすいのは、人間国宝や著名作家の作品で、証紙がそろっているものです。とくに花倉織のような希少な技法や、手織りの一点物は高く評価される傾向があります。逆に、作家や産地が確認できないものは評価が控えめになりやすい傾向があります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                帯・反物・着物で評価が異なる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                首里織は着物（着尺）のほか、帯としても多く作られています。帯・反物・仕立て済みの着物では評価軸が異なります。未仕立ての反物や状態の良い帯は需要があり、評価されやすいことがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                沖縄の染織とのまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                首里織の品と、
                <Link href="/articles/bingata/" className="text-[#6b4c8a] underline">
                  琉球紅型
                </Link>
                などの沖縄の染織をまとめて査定に出すと、全体として評価されやすくなります。和装小物や帯と合わせて一緒に出すのもおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 人間国宝・指定と証紙 */}
      <section id="certificate" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            人間国宝・指定と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              首里織にまつわる公的な指定や作り手を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                人間国宝・宮平初子
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                宮平初子（みやひら はつこ、1922〜2022）氏は、1998年に国の重要無形文化財「首里の織物」の保持者（各個認定）に認定された<strong>人間国宝</strong>です。沖縄県内の女性として初の人間国宝でした。戦後に衰退した首里織を、歴史資料に基づいて復興し、技術継承と後継者育成に尽力しました。なお、「首里の織物」の重要無形文化財は2023年に祝嶺恭子（しゅくみね きょうこ）氏も認定されており、宮平初子とは別の人物です。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                伝統的工芸品の指定と証紙
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                首里織は、<strong>1983年（昭和58年）に国（経済産業大臣）の伝統的工芸品</strong>に指定されています。検査機関である<strong>那覇伝統織物事業協同組合</strong>の検査を経た品には伝統マークと合格証（証紙）が貼られ、産地と品質の裏付けになります。証紙がそろっているものは査定でも評価されやすくなります。
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
                  <span>伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>作家の知名度に応じた評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>産地・作家の特定が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>ほかの織物との区別がつきにくくなる</span>
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
              、紬をはじめとする織りの着物の種類については
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
            首里織を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・購入時の箱・しおりなどは、産地や作家を示す重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。付属品の有無で評価が変わることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：沖縄の織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                首里織は織りの種類や作家によって価値が大きく変わるため、沖縄の染織に詳しい査定員がいる業者を選ぶことが大切です。一般的なリサイクルショップでは作家物でも安く扱われることがあるため、着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                作家物は業者によって評価や販路が異なり、査定額に差が出ることがあります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント4：状態を保ち、早めに売る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                絹の織物は、日焼けや湿気、汗染み、虫食いによって価値が下がりやすくなります。たとう紙に包んで暗所で保管し、売ると決めたら状態が良いうちに早めに査定へ出すのがおすすめです。
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
            【実売データ】公開オークションでの首里織のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。首里織は沖縄の希少な織物で、公開オークションでの出品自体が少ない品目です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数（180日集計）</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">首里織</td>
                  <td className="px-4 py-3 font-medium">11件</td>
                  <td className="px-4 py-3 font-medium">約40,795円</td>
                  <td className="px-4 py-3 font-medium">143,000円</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">首里花織</td>
                  <td className="px-4 py-3 font-medium">13件</td>
                  <td className="px-4 py-3 font-medium">約40,914円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">121,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E9%A6%96%E9%87%8C%E7%B9%94/0/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「首里織」「首里花織」の落札相場
            </a>
            （180日の集計・2026年7月取得）
            <br />
            ※ 首里織は出品数が非常に少なく、180日でも十数件規模です。件数が少ないため、証紙・作家の有無や織りの種類によって平均が大きく振れやすく、上表の数値は“幅”の参考としてご覧ください。作家物・希少な技法の一点物が上限を押し上げる一方、産地不明の品は下限に沈むなど、価格差が大きいのが実情です。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・作家不明・状態不良の品や、逆に人間国宝・著名作家の作品、花倉織など希少な技法では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・作家・織りの種類で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・最高落札価格・出典・取得日を記録したものです（取得：2026年7月）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・作家物の首里織は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・作家・織りの種類でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ首里織でも、証紙・落款の有無、作家物か否か、織りの種類や保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（那覇伝統織物事業協同組合の検査・伝統マーク）", "◎ 大きくプラス", "伝統的工芸品の首里織には、産地の検査を経た伝統マークと合格証（証紙）が付きます。証紙がそろっていると産地・品質の裏付けになり、評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "本場の首里織か、他産地の類似織物かの判別が難しくなり、慎重な査定になりがち。落款・付属品（箱・しおり）など他の手がかりが重要になります。"],
                  ["作家物・落款あり", "◎ 高評価", "著名作家の落款がある作品は評価が高くなりやすい要素です。証紙・付属品とあわせて作り手が確認できると有利です。"],
                  ["人間国宝・重要無形文化財に関わる作品", "◎ 別格の評価", "重要無形文化財「首里の織物」の保持者（宮平初子・祝嶺恭子）に連なる作品は別格の評価。確かな裏付けがあれば特に高く評価されます。"],
                  ["織りの種類（花倉織・道屯織・首里花織など）", "◎〜○", "花倉織のような最高級・希少な技法は特に評価されやすい傾向。技法によって希少性が異なり、査定額の幅につながります。"],
                  ["手織りの一点物か機械織り・量産か", "◎／△", "手織りの一点物は評価が高い傾向。機械織りや量産品、首里織「風」の品は、意匠が似ていても評価は控えめになりやすい。"],
                  ["帯・反物・仕立て済み着物の別", "○ 需要で変動", "未仕立ての反物や状態の良い帯は需要があり評価されやすいことがあります。仕立て済みの着物はサイズも評価に影響します。"],
                  ["日焼け・汗染み・難あり", "△ マイナス", "絹の織物は日焼け・汗染み・虫食いで価値が下がりやすく、状態不良は減額対象。難の程度・範囲で幅があります。自己クリーニングは避け、現状のまま査定へ。"],
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
              首里織を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              首里織は証紙・作家・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・作家物・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い首里織は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
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
              href="/articles/okinawa/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                沖縄の着物買取おすすめ
              </h3>
              <p className="text-xs text-gray-600">
                沖縄県で着物を高く売る方法と、出張・持込・宅配に対応したおすすめ業者を比較。
              </p>
            </Link>
            <Link
              href="/articles/bingata/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                琉球紅型の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                沖縄を代表する型染め、琉球紅型の特徴と買取相場の傾向を解説。
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
            首里織の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            首里織の買取相場はあくまで目安です。織りの種類・作家・証紙・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの首里織の正確な価値を確認しましょう。
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
