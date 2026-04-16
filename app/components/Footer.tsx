import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site info */}
          <div>
            <p className="text-lg font-bold mb-2">着物の買取びより</p>
            <p className="text-sm text-purple-200 leading-relaxed">
              着物買取業者を実際に比較し、
              正直な情報をお届けするレビューサイトです。
              大切な着物を納得のいく価格で手放すお手伝いをします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold mb-3 text-purple-200">
              ページ一覧
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-purple-100 hover:text-white transition-colors"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking/"
                  className="text-sm text-purple-100 hover:text-white transition-colors"
                >
                  おすすめ5選
                </Link>
              </li>
              <li>
                <Link
                  href="/market-price/"
                  className="text-sm text-purple-100 hover:text-white transition-colors"
                >
                  買取相場
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews/"
                  className="text-sm text-purple-100 hover:text-white transition-colors"
                >
                  業者レビュー
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/"
                  className="text-sm text-purple-100 hover:text-white transition-colors"
                >
                  お役立ち情報
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-sm font-semibold mb-3 text-purple-200">
              カテゴリー
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ranking/"
                  className="text-sm text-purple-100 hover:text-white transition-colors"
                >
                  ランキング・比較
                </Link>
              </li>
              <li>
                <span className="text-sm text-purple-100">口コミ・評判</span>
              </li>
              <li>
                <span className="text-sm text-purple-100">買取相場・査定情報</span>
              </li>
              <li>
                <span className="text-sm text-purple-100">着物の種類・価値</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-purple-900/50 text-center">
          <div className="flex justify-center gap-6 mt-6">
            <Link href="/terms/" className="text-xs text-purple-300 hover:text-white transition-colors">利用規約</Link>
            <Link href="/privacy-policy/" className="text-xs text-purple-300 hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="text-xs text-purple-300 hover:text-white transition-colors">記事制作ポリシー</Link>
          </div>
          <p className="text-xs text-purple-300 mt-4">
            &copy; {new Date().getFullYear()} 着物の買取びより All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
