import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export default async function Navbar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <main className="absolute top-0 left-0 flex w-screen text-white items-center z-50 p-5">
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-[1px] w-5/6 border border-amber-600" /> */}

      <div className="flex items-center">
        <Link
          className="flex justify-center items-center w-11 h-11 rounded-full pt-1 font-medium text-xl text-amber-600/50 hover:text-amber-600/80 border border-amber-600 z-50 bg-stone-800"
          href={`/${lang}`}
        >
          XIX
        </Link>
      </div>

      <div className="flex flex-auto justify-center sm:justify-end items-center sm:pr-5 text-shadow shadow-stone-800">
        <Link href={`/${lang}/about`} className="menu-link">
          {navigation.about}
        </Link>

        <div className="flex text-amber-600">░</div>

        <Link href={`/${lang}/contact`} className="menu-link">
          {navigation.contact}
        </Link>

        <div className="flex text-amber-600">░</div>
      </div>

      <div className="flex justify-center items-center">
        <LocaleSwitcher lang={lang} />
      </div>
    </main>
  );
}
