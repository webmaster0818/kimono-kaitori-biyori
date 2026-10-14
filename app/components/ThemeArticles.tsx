import Link from "next/link";
import { themeGroups } from "../lib/themeGroups";

// 同じテーマのページどうしを相互に張る（一覧からしか張られていないページの孤立を解消）
export default function ThemeArticles({ current }: { current: string }) {
  const group = themeGroups.find((g) => g.items.some((i) => i.href === current));
  if (!group) return null;
  const others = group.items.filter((i) => i.href !== current);
  return (
    <section className="max-w-4xl mx-auto px-4 pb-12">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{group.name}</h2>
      <ul className="grid sm:grid-cols-2 gap-3">
        {others.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="block bg-white border border-[#e8ddd0] rounded-lg p-4 text-sm font-bold text-gray-900 hover:bg-[#faf8f5] hover:text-[#6b4c8a] transition-colors">
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
