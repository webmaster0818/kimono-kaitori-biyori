import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "着物買取業者レビュー一覧｜口コミ・評判を徹底検証",
  description:
    "着物買取の主要業者を実際に比較・検証したレビュー一覧。買取大吉・バイセル・福ちゃん・ウリエル・RECLOなど、各社の口コミ・評判・買取実績を正直にレビューします。",
  alternates: { canonical: "https://kimonokaitori-biyori.com/reviews/" },
};

export default function ReviewsIndex() {
  return (
    <>
      <Breadcrumb items={[{ label: "業者レビュー" }]} />
      <section className="py-10 md:py-14 section-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-[#6b4c8a] text-white mb-4 tracking-wide">業者レビュー</span>
          <h1 className="text-2xl md:text-3xl font-bold mb-3"><span className="text-gradient">着物買取業者レビュー</span></h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">主要な着物買取業者を実際に比較・検証しました。各社の口コミ・評判・買取実績を確認して、納得のいく業者を見つけましょう。</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        <Link href="/reviews/buysell/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">バイセルの着物買取｜口コミ・評判・買取実績を徹底検証</Link>
        <Link href="/reviews/daikichi/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">買取大吉の着物買取｜口コミ・評判・買取実績を徹底検証</Link>
        <Link href="/reviews/fukuchan/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">福ちゃんの着物買取｜口コミ・評判・買取実績を徹底検証</Link>
        <Link href="/reviews/hikakaku/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">ヒカカクで着物を売る｜一括査定の使い方と口コミ・評判</Link>
        <Link href="/reviews/komehyo/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">コメ兵の着物買取｜ブランド買取大手の実力を検証</Link>
        <Link href="/reviews/mangakuya/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">まんがく屋の着物買取｜口コミ・評判を徹底検証</Link>
        <Link href="/reviews/otakaraya/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">おたからやの着物買取｜フランチャイズ店の実力を検証</Link>
        <Link href="/reviews/reclo/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">RECLO（リクロ）の着物買取｜宅配買取の評判・口コミを検証</Link>
        <Link href="/reviews/the-gold/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">ザ・ゴールドの着物買取｜口コミ・評判を徹底検証</Link>
        <Link href="/reviews/tifana/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">ティファナの着物買取｜総合リサイクル店の実力を検証</Link>
        <Link href="/reviews/uriel/" className="block px-4 py-3 rounded-lg border border-[#e8ddd0] bg-white hover:border-[#6b4c8a] hover:bg-[#faf7f3] transition-colors text-sm text-gray-700 hover:text-[#6b4c8a]">ウリエルの着物買取｜出張買取の評判・口コミを検証</Link>
        </div>
        <div className="text-center">
          <Link href="/ranking/" className="btn-cta text-base">おすすめ業者ランキングを見る</Link>
        </div>
      </div>
    </>
  );
}
