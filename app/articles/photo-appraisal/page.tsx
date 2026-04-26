import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の写真査定のやり方ガイド｜撮影のコツと査定精度",
  description:
    "着物の写真査定のやり方を徹底解説。スマホで撮影するコツ、送るべき写真の枚数、査定精度を上げるポイントを紹介。買取大吉・ウリエル・RECLOなど写真査定に対応したおすすめ業者も比較します。",
  alternates: {
    canonical: "https://kimonokaitori-biyori.com/articles/photo-appraisal/",
  },
  openGraph: {
    title: "着物の写真査定のやり方ガイド｜撮影のコツと査定精度",
    description: "着物の写真査定のやり方と撮影のコツを解説。査定精度を上げるポイントも紹介。",
    url: "https://kimonokaitori-biyori.com/articles/photo-appraisal/",
    siteName: "着物の買取びより",
    type: "article",
    locale: "ja_JP",
  },
};

const faqs = [
  {
    question: "写真査定に必要な写真は何枚ですか？",
    answer: "最低でも4枚は撮影しましょう。着物の全体像（表）、柄のアップ、証紙・落款の写真、シミや汚れがある場合はその箇所の写真が必要です。理想的には6〜8枚程度撮影すると、査定員がより正確な概算額を出せます。",
  },
  {
    question: "写真査定はスマホのカメラで十分ですか？",
    answer: "はい、スマホのカメラで十分です。最近のスマホは高画質なカメラを搭載しているため、一眼レフなどの高級カメラを使う必要はありません。ただし、撮影時は手ブレに注意し、ピントが合った鮮明な写真を撮ることが重要です。",
  },
  {
    question: "写真査定と実物査定で金額が大きく変わることはありますか？",
    answer: "写真では判断しにくい素材の質感、裏地の状態、微細なシミなどがあるため、実物査定で金額が変わることはあります。ただし、大手の着物買取業者であれば、概算額と実際の買取額の差は概ね10〜20%以内です。写真を正確に撮影することで、差を最小限に抑えられます。",
  },
  {
    question: "暗い場所で撮った写真でも査定してもらえますか？",
    answer: "写真が暗すぎると着物の色味や柄が正確に判断できないため、査定の精度が低下します。できるだけ自然光の入る明るい場所で撮影してください。蛍光灯の下でもある程度は査定可能ですが、色合いが変わることがあるため、査定額に影響する場合があります。",
  },
  {
    question: "写真査定で着物の素材（正絹・化繊）は判断できますか？",
    answer: "写真だけでは素材を正確に判断するのは難しいことがあります。特に正絹とポリエステルは写真だけでは見分けにくい場合があります。そのため、写真査定の際は「正絹」「化繊」「不明」など素材の情報をテキストで補足すると査定精度が上がります。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "着物の写真査定のやり方ガイド｜撮影のコツと査定精度",
  description: "着物の写真査定のやり方と撮影のコツを解説。査定精度を上げるポイントも紹介。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com" },
  publisher: { "@type": "Organization", name: "着物の買取びより", url: "https://kimonokaitori-biyori.com", logo: { "@type": "ImageObject", url: "https://kimonokaitori-biyori.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kimonokaitori-biyori.com/articles/photo-appraisal/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kimonokaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://kimonokaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "写真査定ガイド", item: "https://kimonokaitori-biyori.com/articles/photo-appraisal/" },
  ],
};

export default function PhotoAppraisalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Breadcrumb items={[{ label: "コラム", href: "/articles/" }, { label: "写真査定ガイド" }]} />

      {/* Hero */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">2026年最新版</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-gradient">着物の写真査定のやり方ガイド</span>
              <br className="md:hidden" />
              <span className="block mt-2 text-lg md:text-2xl text-gray-700">撮影のコツと査定精度</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              着物の写真を撮って送るだけで概算の買取額がわかる「写真査定」。正しい撮り方をすれば査定精度が大幅にアップします。必要な写真の枚数、撮影のコツ、対応業者を詳しく解説します。
            </p>
            <p className="mt-3 text-xs text-gray-400">最終更新：2026年4月26日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h2 className="text-lg font-bold text-[#6b4c8a] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#c9a76c] rounded-full inline-block" />この記事の目次
            </h2>
            <nav>
              <ol className="space-y-2 text-sm">
                <li><a href="#what-is" className="text-[#6b4c8a] hover:underline">1. 写真査定とは？</a></li>
                <li><a href="#photos" className="text-[#6b4c8a] hover:underline">2. 必要な写真チェックリスト</a></li>
                <li><a href="#tips" className="text-[#6b4c8a] hover:underline">3. 撮影のコツ7選</a></li>
                <li><a href="#services" className="text-[#6b4c8a] hover:underline">4. 写真査定対応のおすすめ業者</a></li>
                <li><a href="#accuracy" className="text-[#6b4c8a] hover:underline">5. 写真査定の精度と注意点</a></li>
                <li><a href="#flow" className="text-[#6b4c8a] hover:underline">6. 写真査定から売却までの流れ</a></li>
                <li><a href="#faq" className="text-[#6b4c8a] hover:underline">7. よくある質問</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 写真査定とは */}
      <section id="what-is" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />写真査定とは？
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>写真査定とは、着物の写真をメールやLINE、ウェブフォームなどで買取業者に送り、<strong>概算の買取額を教えてもらうサービス</strong>です。自宅にいながら着物の価値を確認でき、わざわざ店舗に持ち込んだり出張買取を依頼したりする前に、大まかな金額がわかります。</p>
            <p>写真査定は<strong>完全無料</strong>で利用でき、査定額に納得できなければ断ることもできます。まず写真査定で概算額を把握し、その後に正式な査定（出張買取・宅配買取・持ち込み買取）に進むのが効率的な流れです。</p>
          </div>
        </div>
      </section>

      {/* 必要な写真 */}
      <section id="photos" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />必要な写真チェックリスト
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            写真査定で正確な概算額を得るために、以下の写真を撮影しましょう。最低4枚、理想的には6〜8枚あると査定精度が上がります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">写真</th>
                  <th className="px-4 py-3 text-left font-semibold">撮り方</th>
                  <th className="px-4 py-3 text-left font-semibold">重要度</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">目的</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">全体像（表）</td>
                  <td className="px-4 py-3 text-gray-700">着物を広げて全体を撮影</td>
                  <td className="px-4 py-3 font-bold text-red-500">必須</td>
                  <td className="px-4 py-3 text-gray-700">種類・柄・色の確認</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">柄のアップ</td>
                  <td className="px-4 py-3 text-gray-700">柄の細部がわかるように接写</td>
                  <td className="px-4 py-3 font-bold text-red-500">必須</td>
                  <td className="px-4 py-3 text-gray-700">手描き・型染めの判別</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">証紙</td>
                  <td className="px-4 py-3 text-gray-700">文字が読めるようにアップで撮影</td>
                  <td className="px-4 py-3 font-bold text-red-500">必須</td>
                  <td className="px-4 py-3 text-gray-700">産地・作家の証明</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">落款・サイン</td>
                  <td className="px-4 py-3 text-gray-700">裏地の落款部分をアップで</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">推奨</td>
                  <td className="px-4 py-3 text-gray-700">作家物の証明</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">シミ・汚れ箇所</td>
                  <td className="px-4 py-3 text-gray-700">該当箇所のアップ写真</td>
                  <td className="px-4 py-3 font-bold text-[#c9a76c]">該当時必須</td>
                  <td className="px-4 py-3 text-gray-700">減額幅の判断</td>
                </tr>
                <tr className="bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">裏地</td>
                  <td className="px-4 py-3 text-gray-700">着物をめくって裏地を撮影</td>
                  <td className="px-4 py-3 font-bold text-gray-500">あれば尚良</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">素材・状態の確認</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 撮影のコツ */}
      <section id="tips" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />撮影のコツ7選
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">1. 自然光で撮影する</h3>
              <p className="text-sm leading-relaxed text-gray-700">蛍光灯は着物の色を正確に再現できません。窓際や屋外の日陰など、自然光の入る場所で撮影しましょう。直射日光は色が飛ぶので避けてください。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">2. 白い背景で撮る</h3>
              <p className="text-sm leading-relaxed text-gray-700">畳やフローリングの上に広げるよりも、白いシーツや布の上に広げた方が着物の色が正確に映ります。背景が暗いと着物の色合いが変わって見えます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">3. 真上から撮影する</h3>
              <p className="text-sm leading-relaxed text-gray-700">着物を床に広げて真上から撮影すると、歪みが少なく全体像が正確に伝わります。斜めから撮ると柄や色の正確な判断が難しくなります。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">4. ピントをしっかり合わせる</h3>
              <p className="text-sm leading-relaxed text-gray-700">特に証紙や落款のアップ撮影では、文字が読めるレベルにピントを合わせることが重要です。スマホの場合、画面をタップしてピントを合わせてから撮影しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">5. フラッシュは使わない</h3>
              <p className="text-sm leading-relaxed text-gray-700">フラッシュを使うと色が飛んだり、テカリが出たりして正確な色合いが伝わりません。自然光が十分でない場合は、部屋の照明を複数つけて明るさを確保しましょう。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">6. シミ・汚れは隠さず撮る</h3>
              <p className="text-sm leading-relaxed text-gray-700">シミや汚れを隠して撮影すると、実物査定時に大きなギャップが生まれます。正直に撮影した方が信頼性のある概算額が得られ、後のトラブルも防げます。</p>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">7. テキストで情報を補足する</h3>
              <p className="text-sm leading-relaxed text-gray-700">素材（正絹・化繊）、購入時期・購入場所、着用回数、身丈・裄丈のサイズなどを写真と一緒にテキストで伝えると、査定精度が大幅に向上します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 対応業者 */}
      <section id="services" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />写真査定対応のおすすめ業者
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#6b4c8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">業者名</th>
                  <th className="px-4 py-3 text-left font-semibold">LINE査定</th>
                  <th className="px-4 py-3 text-left font-semibold">メール査定</th>
                  <th className="px-4 py-3 text-left font-semibold">ウェブ査定</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">返信速度</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">買取大吉</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">最短数時間</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ウリエル</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">1〜2営業日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">RECLO</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">1〜2営業日</td>
                </tr>
                <tr className="border-b border-[#e8ddd0] bg-[#faf8f5] hover:bg-white transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a]">ティファナ</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700">1〜3営業日</td>
                </tr>
                <tr className="bg-white hover:bg-[#faf8f5] transition-colors">
                  <td className="px-4 py-3 font-semibold text-[#6b4c8a] rounded-bl-lg">ヒカカク</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 text-green-600 font-bold">&#10003;</td>
                  <td className="px-4 py-3 text-gray-700 rounded-br-lg">業者により異なる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 精度と注意点 */}
      <section id="accuracy" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />写真査定の精度と注意点
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>写真査定は概算額を知るためのサービスであり、<strong>最終的な買取額は実物査定で確定</strong>します。写真査定の精度は以下の要因に影響されます。</p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-[#6b4c8a] mb-2 text-base">精度が高くなるケース</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>証紙がある（産地・作家が明確）</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>状態が良い（シミ・汚れなし）</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>明るく鮮明な写真</span></li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span><span>テキストで素材やサイズを補足</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-2 text-base">精度が低くなるケース</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>暗い・ブレた写真</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>証紙がなく素材不明</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>シミ・汚れを隠している</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>写真の枚数が少ない（1〜2枚のみ）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 売却までの流れ */}
      <section id="flow" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />写真査定から売却までの流れ
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1">複数業者に写真査定を依頼</h3><p className="text-sm text-gray-700">3社以上に写真を送って概算額を比較します。買取大吉・ウリエル・RECLOなど。</p></div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1">概算額を比較</h3><p className="text-sm text-gray-700">各社の概算額を比較し、最も高い業者を2〜3社ピックアップします。</p></div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#6b4c8a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1">正式査定を依頼</h3><p className="text-sm text-gray-700">出張買取・宅配買取・持ち込み買取のいずれかで正式な査定を受けます。</p></div>
            </div>
            <div className="bg-white border border-[#e8ddd0] rounded-xl p-5 flex items-start gap-4">
              <span className="bg-[#c9a76c] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div><h3 className="font-bold text-[#6b4c8a] mb-1">最終額に納得したら売却</h3><p className="text-sm text-gray-700">実物査定の結果に納得したら、その場で買取成立。即日現金化も可能です。</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 section-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-[#e8ddd0] rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm md:text-base hover:bg-[#faf8f5] transition-colors list-none flex items-center justify-between">
                  <span className="flex items-center gap-3"><span className="text-[#c9a76c] font-bold text-lg">Q.</span>{faq.question}</span>
                  <span className="text-[#6b4c8a] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-gray-700 border-t border-[#e8ddd0] pt-4">
                  <span className="text-[#6b4c8a] font-bold mr-1">A.</span>{faq.answer}
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
            <span className="w-1.5 h-8 bg-[#6b4c8a] rounded-full inline-block" />関連ページ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">着物買取おすすめランキング</h3>
              <p className="text-xs text-gray-600">おすすめ5社を徹底比較。</p>
            </Link>
            <Link href="/articles/line-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">LINE査定おすすめ業者</h3>
              <p className="text-xs text-gray-600">スマホで手軽に査定依頼。</p>
            </Link>
            <Link href="/articles/bulk-appraisal/" className="card hover:border-[#6b4c8a] transition-colors group block">
              <h3 className="font-bold text-[#6b4c8a] group-hover:text-[#5a3d75] mb-2 text-sm">一括査定おすすめ</h3>
              <p className="text-xs text-gray-600">複数業者を一括比較。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">まずは写真査定で着物の価値を確認しましょう</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            スマホで写真を撮って送るだけ。完全無料で着物の概算買取額がわかります。
          </p>
          <Link href="/ranking/" className="btn-cta text-base">おすすめ買取業者ランキングへ</Link>
        </div>
      </section>
    </>
  );
}
