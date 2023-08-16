import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

interface NavbarProps {
  lang: Locale;
}

export default async function Menubar({ lang }: NavbarProps) {
  const { navigation } = await getDictionary(lang);

  const navbarLinks = [
    {
      title: navigation[1],
      description: "See'em all!",
      href: `/${lang}`,
    },
    {
      title: navigation[2],
      description: "Fine tunings!",
      href: `/${lang}/about`,
    },
    {
      title: navigation[3],
      description: "It'was mine!",
      href: `/${lang}/service`,
    },
    {
      title: navigation[4],
      description: "Spin around!",
      href: `/${lang}/contact`,
    },
  ];

  return (
    <div className="flex pl-5">
      {navbarLinks.map((link) => (
        <Link href={link.href} key={link.title} className="text-sm tracking-tight px-2">
          {link.title}
        </Link>
      ))}
    </div>
  );
}
