import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="パンくずリスト"
      className="max-w-4xl mx-auto px-4 py-3 text-xs text-gray-500"
    >
      <ol className="flex items-center gap-1 flex-wrap">
        <li>
          <Link href="/" className="hover:text-[#6b4c8a] transition-colors">
            ホーム
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#6b4c8a] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
