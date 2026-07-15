import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import SoubaNote from "../../components/SoubaNote";

export const metadata: Metadata = {
  title: "【2026年最新】久米島紬の買取相場｜重要無形文化財・泥染めと証紙で価値が変わる",
  description:
    "久米島紬（沖縄県久米島町）の買取相場と高く売る方法を解説。1975年に国の伝統的工芸品、2004年に製作技術が国の重要無形文化財に指定された絹織物です。泥染め・ユウナ染めなど天然染料の味わい、一人の織子が全工程を担う一貫制作、証紙の有無で価値が変わる点を、公開オークションの実売データとあわせてまとめました。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/kumejima-tsumugi/",
  },
  openGraph: {
    title: "【2026年最新】久米島紬の買取相場｜重要無形文化財・泥染めと証紙で価値が変わる",
    description:
      "久米島紬（沖縄県久米島町）の買取相場と高く売る方法。重要無形文化財の一貫制作・泥染め・証紙の有無で価値が変わる点を実売データとあわせて解説。",
    url: "https://kimonokaitori-biyori.com/articles/kumejima-tsumugi/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "久米島紬はどのくらいで買い取ってもらえますか？",
    answer:
      "買取価格は証紙の有無、染め（泥染め・ユウナ染めなどの天然染料か）、状態によって大きく変わるため一概には言えません。参考として、公開オークションの実売データでは、タイトルに「久米島紬」を含む単品出品281件の平均落札価格は約17,732円、中央値は8,151円、最高は198,000円でした（2026年1月17日〜7月12日、2026年7月16日取得）。これは個人間取引の実売価格であり、買取査定額は一般にこれより低くなります。正確な価値は着物専門業者の無料査定で確認しましょう。",
  },
  {
    question: "久米島紬はなぜ重要無形文化財なのですか？",
    answer:
      "久米島紬は、養蚕・糸作り・手くくり絣・天然染料による染色・手織りといった古来の技法を手作業で伝承しており、2004年（平成16年）にその製作技術が国の重要無形文化財に指定されました（保持団体として久米島紬保持団体が認定）。材料のほとんどが島内産の天然素材でまかなわれる点も特色とされています。それに先立つ1975年（昭和50年）には、国の伝統的工芸品にも指定されています。",
  },
  {
    question: "久米島紬の泥染め・ユウナ染めとは何ですか？",
    answer:
      "久米島紬は、テカチ（車輪梅）やグール（サルトリイバラの根）、ユウナなど島の植物染料で糸を染め、泥染めを併用して発色させるのが特徴です。泥の中の鉄分と植物染料のタンニンが反応することで、久米島紬らしい深い黒褐色が生まれます。ユウナ染めは銀鼠系のやわらかな色合いで知られます。こうした天然染料・草木染の風合いは久米島紬の評価の核心であり、査定でも重視されるポイントです。",
  },
  {
    question: "証紙がない久米島紬でも売れますか？",
    answer:
      "証紙がなくても買取自体は可能ですが、本場の久米島紬かどうかの判別が難しくなるため、査定額は下がりやすくなります。産地組合（久米島紬事業協同組合）の検査を経た証紙は、産地と品質の重要な裏付けです。購入時の証紙・たとう紙・箱などが残っていれば、必ず一緒に査定に出しましょう。",
  },
  {
    question: "久米島紬を高く売るにはどうすればよいですか？",
    answer:
      "証紙・付属品をそろえること、沖縄の織物に詳しい着物専門業者を選ぶこと、複数社で相見積もりを取ることが基本です。泥染め・草木染の手織り品や重要無形文化財に関わる品は業者によって評価が分かれやすいため、相見積もりが特に重要です。絹織物は日焼けや汗染みで価値が下がるため、状態が良いうちに早めに査定へ出すのがおすすめです。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://kimonokaitori-biyori.com/og-image.png",
  headline: "久米島紬の買取相場｜重要無形文化財・泥染めと証紙で価値が変わる",
  description:
    "久米島紬（沖縄県久米島町）の買取相場と高く売る方法。重要無形文化財の一貫制作・泥染め・証紙の有無で価値が変わる点を実売データとあわせて解説。",
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
    "@id": "https://kimonokaitori-biyori.com/articles/kumejima-tsumugi/",
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
      name: "久米島紬",
      item: "https://kimonokaitori-biyori.com/articles/kumejima-tsumugi/",
    },
  ],
};

export default function KumejimaTsumugiPage() {
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
          { label: "久米島紬" },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#b5402f] text-white mb-4 tracking-wide">
              沖縄・重要無形文化財／伝統的工芸品
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">久米島紬の買取相場</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">
                重要無形文化財・泥染めと証紙で価値が変わる
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              久米島紬（くめじまつむぎ）は、沖縄県島尻郡久米島町に伝わる絹織物です。1975年に国の伝統的工芸品、2004年にはその製作技術が国の重要無形文化財に指定されました。泥染め・ユウナ染めなど島の天然染料と、一人の織子が全工程を担う一貫制作が特徴で、証紙や染めの種類によって買取価値が変わります。公開オークションの実売データとあわせて、見分け方と高く売るポイントを解説します。
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
                    1. 久米島紬とは？一人の織子が全工程を担う島の絹織物
                  </a>
                </li>
                <li>
                  <a href="#types" className="text-[#6b4c8a] hover:underline">
                    2. 久米島紬の染めと技法
                  </a>
                </li>
                <li>
                  <a href="#price" className="text-[#6b4c8a] hover:underline">
                    3. 久米島紬の買取相場の傾向
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-[#6b4c8a] hover:underline">
                    4. 重要無形文化財・伝統的工芸品の指定と証紙
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-[#6b4c8a] hover:underline">
                    5. 久米島紬を高く売るポイント
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

      {/* 久米島紬とは */}
      <section id="about" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            久米島紬とは？一人の織子が全工程を担う島の絹織物
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              久米島紬（くめじまつむぎ）は、沖縄本島の西の海上に浮かぶ<strong>沖縄県島尻郡久米島町</strong>に伝わる絹織物です。久米島では古くから養蚕が行われ、琉球王国時代には貢納布として絹織物が織られてきました。江戸時代には「琉球紬」の名で本土にも知られ、日本各地の紬に影響を与えた源流のひとつともいわれています。
            </p>
            <p>
              最大の特徴は、図案の選定から染色、絣括り、織り、仕上げまで、<strong>一貫した手作業を一人の織子（作り手）が行う</strong>ことです。分業制が一般的な織物産地のなかで、一反ごとに作り手の個性が反映される制作体制が今も守られています。
            </p>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mt-4">
              <h3 className="font-bold text-[#6b4c8a] mb-3">久米島紬の主な特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>沖縄県島尻郡久米島町に伝わる絹織物（先染めの紬）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>図案・染色・絣括り・織り・仕上げまで一人の織子が一貫制作</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>テカチ（車輪梅）・グール・ユウナなど島の植物染料と泥染めによる深い色合い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>1975年（昭和50年）に国の伝統的工芸品に指定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] mt-0.5">&#9670;</span>
                  <span>2004年（平成16年）に製作技術が国の重要無形文化財に指定</span>
                </li>
              </ul>
            </div>
            <p>
              同じ沖縄の織物でも、那覇市首里の
              <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline font-medium">
                首里織
              </Link>
              や南風原町を中心とする
              <Link href="/articles/ryukyu-gasuri/" className="text-[#6b4c8a] underline font-medium">
                琉球絣
              </Link>
              、宮古島の
              <Link href="/articles/miyako-jofu/" className="text-[#6b4c8a] underline font-medium">
                宮古上布
              </Link>
              とは産地も技法も異なります。沖縄県内での買取業者の選び方は
              <Link href="/articles/okinawa/" className="text-[#6b4c8a] underline font-medium">
                沖縄の着物買取おすすめ業者
              </Link>
              をご覧ください。本ページは「久米島紬という織物の価値と見分け方」を中心に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* 染めと技法 */}
      <section id="types" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            久米島紬の染めと技法
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            久米島紬の価値の核心は、島の天然染料による染めと、古来の手仕事による技法にあります。どの染め・技法かによって評価が変わるため、代表的なものを知っておくと査定の参考になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                    染め・技法
                  </th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    泥染め
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    テカチ（車輪梅）などの植物染料で染め重ねた糸を鉄分を含む泥で媒染。タンニンと鉄分が反応し、久米島紬を象徴する深い黒褐色が生まれる
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    ユウナ染め
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    海辺に育つユウナの木を使った染め。銀鼠系のやわらかな色合いで知られ、愛好家からの人気が高い
                  </td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">
                    草木染（グール・ヤマモモなど）
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    グール（サルトリイバラの根）やヤマモモなど島の植物染料による染色。黄系・茶系の自然な色調が特徴
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">
                    手くくり絣・手織り・砧打ち
                  </td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">
                    絣は手くくりで括り、手投杼（てなげひ）による手織りで織り上げる。仕上げの砧打ちでしなやかな光沢を出す。織りまでの準備に数ヶ月を要する
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※
            泥染め・ユウナ染めなど天然染料による手織りの品は、久米島紬のなかでも特に評価されやすい傾向があります。
          </p>
        </div>
      </section>

      {/* 相場の傾向 */}
      <section id="price" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            久米島紬の買取相場の傾向
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            久米島紬の買取価格は、証紙の有無・染めの種類・状態によって大きく変わります。以下は一般的な傾向であり、実際の金額は需要や業者によって変動します（実際に売買された価格の集計は後述の実売データをご覧ください）。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                証紙あり・天然染料の手織り品が高評価
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                最も評価されやすいのは、産地組合の検査を経た証紙がそろった、泥染め・ユウナ染め・草木染など天然染料による手織りの品です。重要無形文化財の技術に連なる一貫制作の品は、確かな裏付けがあるほど高く評価される傾向があります。逆に、証紙がなく産地を確認できないものは評価が控えめになりやすくなります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                着物・反物・帯で評価が異なる
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久米島紬は着物（着尺・仕立て済み）として流通する量が多く、帯や小物は比較的少数です。未仕立ての反物や状態の良い品は需要があり、評価されやすいことがあります。仕立て済みの着物はサイズも評価に影響します。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                沖縄の染織とのまとめ売り
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久米島紬の品と、
                <Link href="/articles/bingata/" className="text-[#6b4c8a] underline">
                  琉球紅型
                </Link>
                や
                <Link href="/articles/shuri-ori/" className="text-[#6b4c8a] underline">
                  首里織
                </Link>
                などの沖縄の染織をまとめて査定に出すと、全体として評価されやすくなります。和装小物や帯と合わせて一緒に出すのもおすすめです。
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
            重要無形文化財・伝統的工芸品の指定と証紙
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              久米島紬にまつわる公的な指定を正しく理解しておくと、査定の場で品物の価値を説明しやすくなります。ここでは確認できる事実を整理します。
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                国の重要無形文化財（2004年）
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久米島紬は、養蚕・糸作り・手くくり絣・天然染料による染色・手織りなど、手作業による古来の技法を伝承していることが評価され、<strong>2004年（平成16年）に製作技術が国の重要無形文化財に指定</strong>されました。保持団体として<strong>久米島紬保持団体</strong>が認定されており、技の保存と伝承者の養成が行われています。材料のほとんどが島内産の天然素材である点も特色とされています。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3 text-base">
                伝統的工芸品の指定と証紙
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久米島紬は、<strong>1975年（昭和50年）2月に国の伝統的工芸品</strong>に指定されています。産地組合は<strong>久米島紬事業協同組合</strong>で、検査を経た品に付く証紙は産地と品質の裏付けになります。証紙がそろっているものは査定でも評価されやすくなります（
                <a
                  href="https://kougeihin.jp/craft/0126/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#6b4c8a] underline"
                >
                  出典：伝統工芸 青山スクエア「久米島紬」
                </a>
                ）。
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-3">証紙・付属品ありの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>本場久米島紬であることが証明される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>重要無形文化財・伝統的工芸品としての価値が認められやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">&#10003;</span>
                  <span>染めの種類（泥染め・ユウナ染めなど）に応じた評価が期待できる</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-3">証紙・付属品なしの場合</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>本場か「久米島紬風」かの判別が難しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#10007;</span>
                  <span>ほかの泥染め系の紬との区別がつきにくくなる</span>
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
            久米島紬を高く売るポイント
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント1：証紙・付属品をそろえて査定に出す
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                証紙・購入時の箱・しおりなどは、本場久米島紬であることを示す重要な手がかりです。たとう紙や箱の中に保管されていることが多いので、必ず探して一緒に査定に出しましょう。付属品の有無で評価が変わることがあります。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント2：沖縄の織物に詳しい専門業者を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                久米島紬は染めの種類や証紙の有無で価値が大きく変わるため、沖縄の染織に詳しい査定員がいる業者を選ぶことが大切です。一般的なリサイクルショップでは価値が見過ごされることがあるため、着物専門の買取業者に依頼しましょう。
              </p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">
                ポイント3：複数業者で相見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                重要無形文化財に関わる品や天然染料の手織り品は、業者によって評価や販路が異なり、査定額に差が出ることがあります。最低でも複数社に無料査定を依頼し、提示された金額と説明を比較してから売却先を決めましょう。
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
            【実売データ】公開オークションでの久米島紬のリアルな落札相場
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            ここで紹介するのは「買取相場」ではなく、公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額ではなく、個人間取引で実際に成立した落札価格のため、相場の“幅”を知るためのリアルな一次データとしてご覧ください。
          </p>
          <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 mb-6">
            <h3 className="font-bold text-[#6b4c8a] mb-4 text-base">
              久米島紬 全体の集計（着物・帯・反物の合算、小物等除く）
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">落札件数</p>
                <p className="text-lg font-bold text-[#6b4c8a]">281件</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">平均落札価格</p>
                <p className="text-lg font-bold text-[#6b4c8a]">約17,732円</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">中央値</p>
                <p className="text-lg font-bold text-[#6b4c8a]">8,151円</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">最高落札価格</p>
                <p className="text-lg font-bold text-[#6b4c8a]">198,000円</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">落札件数</th>
                  <th className="px-4 py-3 text-left font-semibold">平均落札価格</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">最高落札価格</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">着物</td>
                  <td className="px-4 py-3 font-medium">280件</td>
                  <td className="px-4 py-3 font-medium">約17,656円</td>
                  <td className="px-4 py-3 font-medium rounded-br-lg">198,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            出典：
            <a
              href="https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E4%B9%85%E7%B1%B3%E5%B3%B6%E7%B4%AC"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#6b4c8a] hover:underline"
            >
              Yahoo!オークション「久米島紬」の落札相場
            </a>
            （集計期間：2026年1月17日〜2026年7月12日・約180日相当、2026年7月16日取得）
            <br />
            ※ タイトルに「久米島紬」を含む単品出品のみを集計し、まとめ売り・複数点ロットは除外。小物・ハギレ等は表から除外しています。帯は期間内の該当が1件のみだったため、区分としては掲載していません。
            <br />
            ※ 平均（約17,732円）と中央値（8,151円）の開きが大きいのが久米島紬の特徴です。ゆうな染め・草木染・手織の証紙付きや、重要無形文化財に関わる品が上限側を押し上げる一方、証紙のない普及品は下限側に分布しており、価格差が大きいのが実情です。
          </p>

          <div className="bg-[#faf7f3] border-l-4 border-[#6b4c8a] p-4 rounded-r-lg text-sm text-gray-700 mt-6">
            <p className="leading-relaxed">
              ⚠ 上記は公開オークションで実際に売買された“実売価格”の集計です。買取業者の査定額（買取価格）とは異なり、一般に買取価格は実売価格より低くなります。証紙なし・状態不良の品や、逆に重要無形文化財に関わる品・天然染料の手織り品では価格が大きく上下するため、上表の平均はあくまで価格帯の“目安”としてご覧ください。金額は取得時点のもので、相場は時期・状態・証紙・染めの種類で大きく変動し、査定額を保証するものではありません。
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            ※ 調査方法：本データは公開オークションの落札相場集計から、品目・落札件数・平均落札価格・中央値・最高落札価格・出典・取得日を記録したものです（取得：2026年7月16日）。詳しくは<Link href="/articles/souba-method/" className="text-[#6b4c8a] underline">相場データの調査方法</Link>をご覧ください。
          </p>

          <div className="mt-6">
            <Link href="/ranking/" className="text-sm text-[#6b4c8a] font-semibold hover:underline">
              証紙あり・天然染料の久米島紬は査定額の差が出やすいため、複数社で相見積もりを取れる「着物買取おすすめランキング」で比較するのがおすすめです →
            </Link>
          </div>
        </div>
      </section>

      {/* 状態別の買取価値 */}
      <section id="condition" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />
            状態別の買取価値（証紙・染め・状態でどう変わるか）
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            同じ久米島紬でも、証紙の有無、染めの種類、保存状態によって査定額は大きく変わります。前述の実売データに見られる価格の“幅”も、多くはこうした状態差から生まれています。下表のような条件で評価が上下します。
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
                  ["証紙あり（久米島紬事業協同組合の検査済み）", "◎ 大きくプラス", "産地組合の検査を経た証紙は本場久米島紬の裏付けです。証紙がそろっていると産地・品質が証明され、評価が安定します。"],
                  ["証紙なし", "△ 下がりやすい", "本場の久米島紬か、他産地の泥染め系の紬かの判別が難しくなり、慎重な査定になりがち。たとう紙・箱など他の手がかりが重要になります。"],
                  ["泥染め・ユウナ染め・草木染など天然染料", "◎ 高評価", "島の植物染料と泥染めによる深い色合いは久米島紬の評価の核心。天然染料の手仕事が確認できる品は評価されやすい傾向があります。"],
                  ["重要無形文化財に関わる品", "◎ 別格の評価", "重要無形文化財の指定要件（手くくり絣・天然染料・手織り等）を満たす一貫制作の品は、確かな裏付けがあれば特に高く評価されます。"],
                  ["手織りの一点物か量産品か", "◎／△", "一人の織子による手織りの一点物は評価が高い傾向。機械織りや「久米島紬風」の品は、意匠が似ていても評価は控えめになりやすい。"],
                  ["未仕立ての反物・未使用品", "○ プラス", "未仕立ての反物やしつけ付きの未使用品は需要があり、評価されやすいことがあります。"],
                  ["仕立て済み着物のサイズ", "○ 需要で変動", "仕立て済みの着物は身丈・裄などのサイズも評価に影響します。現代の体型に合う大きめサイズは需要があります。"],
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

      {/* この着物を売るなら（条件別CTA） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#faf7f3] border border-[#e8ddd0] rounded-xl p-6 md:p-7">
            <h2 className="text-lg md:text-xl font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-[#6b4c8a] rounded-full inline-block" />
              久米島紬を売るなら｜状況別のおすすめ買取方法
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              久米島紬は証紙・染め・状態によって評価が大きく変わります。あなたの状況に合わせて、最適な売り方を選びましょう。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/ranking/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙あり・天然染料・状態が良い</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">複数社の相見積もりで高価買取を狙う</h3>
                <p className="text-xs text-gray-600">価値の高い久米島紬は業者で査定額の差が出やすいため、おすすめ買取業者ランキングで複数社を比較するのが有利です。</p>
              </Link>
              <Link href="/articles/shutcho-kaitori/" className="block bg-white border border-[#e8ddd0] rounded-lg p-5 hover:border-[#6b4c8a] transition-colors group">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">証紙なし・状態に不安・他の着物もまとめて</p>
                <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] text-sm mb-1">出張買取でまとめて査定してもらう</h3>
                <p className="text-xs text-gray-600">枚数が多い・運ぶのが大変な場合は、自宅で完結する出張買取が便利です。その場で査定額を確認できます。</p>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 査定額は証紙・染め・状態・サイズ・時期で変動します。複数社で無料査定を比較し、納得のうえで売却しましょう。
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
              href="/articles/miyako-jofu/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                宮古上布の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                重要無形文化財・宮古島の麻織物。実売データと高く売るポイントを解説。
              </p>
            </Link>
            <Link
              href="/articles/shuri-ori/"
              className="card hover:border-[#6b4c8a] transition-colors group block"
            >
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">
                首里織の買取相場
              </h3>
              <p className="text-xs text-gray-600">
                那覇市首里に伝わる織技法の総称。人間国宝・宮平初子の作品と証紙を解説。
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            久米島紬の正確な価値を知りたい方へ
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            久米島紬の買取相場はあくまで目安です。証紙・染めの種類・状態によって実際の査定額は大きく変わります。着物専門の査定員に無料査定を依頼して、お手持ちの久米島紬の正確な価値を確認しましょう。
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
