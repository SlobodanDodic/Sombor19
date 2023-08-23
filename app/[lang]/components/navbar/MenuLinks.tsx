import Link from "next/link";
import type { MenuProps } from "../../types";

export default function MenuLinks({ lang, navigation, className }: MenuProps) {
  const navigationLinks = [
    { lang: lang, href: `/`, text: navigation.home },
    { lang: lang, href: `/about`, text: navigation.about },
    { lang: lang, href: `/rooms`, text: navigation.rooms },
    { lang: lang, href: `/contact`, text: navigation.contact },
  ];

  return (
    <>
      {navigationLinks.map((link, index) => (
        <div key={index} className={className}>
          <Link href={`/${link.lang}${link.href}`} className="menu-link">
            {link.text}
          </Link>
          <div className="flex text-amber-600">░</div>
        </div>
      ))}
    </>
  );
}
