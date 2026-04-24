"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "トップ", href: "/" },
  { label: "おすすめ5選", href: "/ranking/" },
  { label: "買取相場", href: "/market-price/" },
  { label: "業者レビュー", href: "/reviews/" },
  { label: "お役立ち情報", href: "/articles/" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e8ddd0] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-gradient">着物の買取びより</span>
          <span className="text-[10px] text-gray-500 tracking-wide">
            着物買取おすすめ業者を徹底比較
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-[#6b4c8a] hover:bg-[#f3eef7] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="ml-2 text-[10px] text-gray-400">PRを含みます</span>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-600 hover:text-[#6b4c8a] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-[#e8ddd0] bg-white/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-3 text-sm font-medium text-gray-700 hover:text-[#6b4c8a] hover:bg-[#f3eef7] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
