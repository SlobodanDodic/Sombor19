import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionary";
import Menu from "./Menu";

export default async function Navbar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <main className="sticky top-0 flex w-screen bg-white z-40">
      <div className="absolute bottom-0 w-screen h-[1px] bg-gradient-to-r from-amber-600/0 via-amber-600 via-50% to-amber-600/from-amber-600/0 z-40" />
      <div className="flex w-screen max-w-6xl mx-auto justify-between items-center p-2">
        <div className="flex flex-1 justify-start items-center">
          <Menu lang={lang} navigation={navigation} />
        </div>

        <div className="relative flex flex-auto justify-center items-center bg-navbar bg-center bg-contain bg-no-repeat">
          <p className="flex font-serif text-5xl font-bold text-white text-shadow-md shadow-stone-800/30">XIX</p>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center tracking-[0.2em] font-light text-stone-700">
            ap<span className="font-medium text-amber-600">art</span>ment
          </p>
        </div>

        <div className="flex flex-1 justify-end items-center">
          <LocaleSwitcher lang={lang} />
        </div>
      </div>
    </main>
  );
}
