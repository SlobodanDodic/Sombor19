import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Menubar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  const navbarLinks = [
    {
      title: navigation[1],
      href: `/${lang}`,
    },
    {
      title: navigation[2],
      href: `/${lang}/about`,
    },
    {
      title: navigation[3],
      href: `/${lang}/service`,
    },
    {
      title: navigation[4],
      href: `/${lang}/contact`,
    },
  ];

  return (
    <div className="flex pl-5">
      {navbarLinks.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          className="text-sm font-semibold tracking-tight mx-2 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-amber-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
