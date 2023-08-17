import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export default async function Navbar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <main className="main relative items-center bg-white">
      <div className="flex items-center">
        <Link
          href={`/${lang}`}
          className="flex font-thin text-amber-600 text-6xl items-center justify-center bg-stone-800 w-20 h-20"
        >
          19
        </Link>
      </div>

      <div className="flex flex-auto justify-center items-center">
        <Link href={`/${lang}/about`} className="menu-link">
          {navigation[1]}
        </Link>

        <div className="flex text-amber-600">░</div>

        <Link href={`/${lang}/contact`} className="menu-link">
          {navigation[2]}
        </Link>
      </div>

      <div className="flex justify-center items-center mr-5">
        <LocaleSwitcher />
      </div>
    </main>
  );
}
