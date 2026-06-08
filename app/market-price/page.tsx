import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物の買取相場一覧｜種類別の価格目安まとめ",
  description:
    "振袖・訪問着・留袖・大島紬・加賀友禅・帯など、着物の種類別の買取相場を一覧でまとめました。お持ちの着物の価値の目安を確認できます。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/market-price/" },
};

export default function MarketPriceIndex() {
  return (
    <>
      <Breadcrumb items={[{ label: "買取相場" }]} />
      <section className="py-10 md:py-14 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">買取相場</span>
          <h1 className="text-2xl md:text-3xl font-bold mb-3"><span className="text-gradient">着物の買取相場</span></h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">着物の種類別に買取相場の目安をまとめました。お持ちの着物がどのくらいで売れるか、種類から確認してみましょう。</p>
          <p className="mt-3 text-xs text-gray-400">※掲載の相場はあくまで目安です。実際の査定額は状態・需要・業者により変動します。</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        <Link href="/articles/accessories-price/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">和装小物（帯締め・帯揚げ・草履）の買取相場まとめ</Link>
        <Link href="/articles/antique-kimono/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">【2026年最新】アンティーク着物の買取相場｜大正・昭和の価値と高く売る方法</Link>
        <Link href="/articles/dye-vs-weave/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">着物の染めと織りの違い｜価値が高いのはどっち？</Link>
        <Link href="/articles/fabric-guide/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">着物の素材の見分け方｜正絹・化繊・ウール・木綿の特徴と買取価格</Link>
        <Link href="/articles/furisode/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">振袖の買取相場｜成人式後に売る方法と高価買取のコツ</Link>
        <Link href="/articles/houmongi-tomesode/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">【2026年最新】訪問着・留袖の買取相場｜高く売れる条件と相場価格</Link>
        <Link href="/articles/kaga-yuzen/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">【2026年最新】加賀友禅の買取相場｜作家物は100万円超｜証紙・落款で価格倍増</Link>
        <Link href="/articles/kimono-market-price/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">着物買取の相場一覧【2026年最新】種類別の買取価格まとめ</Link>
        <Link href="/articles/kimono-rank/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">【着物初心者必見】着物の格付け一覧｜留袖→訪問着→付け下げ→小紋→紬</Link>
        <Link href="/articles/kimono-types-guide/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">着物の種類一覧｜普段着から礼装まで完全ガイド</Link>
        <Link href="/articles/komon-tsukesage/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">小紋・付け下げの買取相場｜江戸小紋の三役は高額査定</Link>
        <Link href="/articles/lining-guide/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">着物の裏地（八掛・胴裏）の素材と査定への影響</Link>
        <Link href="/articles/living-national-treasure/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">人間国宝の着物一覧｜作家別の買取相場と見分け方</Link>
        <Link href="/articles/mens-kimono/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">【2026年最新】男性着物の買取相場｜紋付袴・着流し・羽織の価格目安</Link>
        <Link href="/articles/montsuki/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">紋付き着物の買取相場｜五つ紋・三つ紋・一つ紋の価値の違い</Link>
        <Link href="/articles/obi-price/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">帯の買取相場｜袋帯・名古屋帯・丸帯の値段と高く売る方法</Link>
        <Link href="/articles/oshima-tsumugi/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">大島紬の買取相場と高く売るコツ【2026年最新】</Link>
        <Link href="/articles/popular-patterns/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">【2026年最新】着物の人気柄ランキング｜昭和レトロ・古典柄・モダン柄の相場</Link>
        <Link href="/articles/shibori/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">絞り染め着物の買取相場｜有松絞り・京鹿の子絞りの価値</Link>
        <Link href="/articles/size-and-price/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">着物のサイズ（身丈・裄丈）と買取価格の関係を解説</Link>
        <Link href="/articles/summer-kimono/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">夏着物（絽・紗・麻）の買取相場｜シーズンと売り時</Link>
        <Link href="/articles/tanmono/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">反物の買取相場｜着物より高く売れるケースも？種類別に解説</Link>
        <Link href="/articles/tsumugi-types/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">紬の種類と買取相場まとめ｜大島紬・結城紬・塩沢紬・牛首紬</Link>
        <Link href="/articles/yuki-tsumugi/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">結城紬の買取相場と高く売るコツ【重要無形文化財の価値】</Link>
        <Link href="/articles/yuzen-types/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">【2026年最新】友禅の種類と買取相場｜加賀友禅・京友禅・東京友禅の見分け方</Link>
        </div>
        <div className="text-center">
          <Link href="/articles/" className="btn-outline">お役立ち情報をすべて見る</Link>
        </div>
      </div>
    </>
  );
}
