import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export default async function Navbar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <main className="flex w-screen relative items-center border-b-2 border-amber-600">
      <div className="flex items-center">
        <Link
          href={`/${lang}`}
          className="flex text-amber-600 text-4xl items-center justify-center bg-stone-800 w-20 h-20"
        >
          XIX
        </Link>
      </div>

      <div className="flex flex-auto justify-center sm:justify-end items-center sm:pr-5">
        <Link href={`/${lang}/about`} className="menu-link">
          {navigation.about}
        </Link>

        <div className="flex text-amber-600">░</div>

        <Link href={`/${lang}/contact`} className="menu-link">
          {navigation.contact}
        </Link>

        <div className="flex text-amber-600">░</div>
      </div>

      <div className="flex justify-center items-center mr-1 sm:mr-7">
        <LocaleSwitcher />
      </div>
    </main>
  );
}
