import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionary";
import Menu from "./Menu";

export default async function Navbar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <main className="fixed flex w-screen justify-between bg-white items-center p-5 z-40">
      <div className="flex flex-1 justify-start items-center p-2">
        <Menu lang={lang} navigation={navigation} />
      </div>

      <div className="flex flex-auto justify-center items-center">
        <p className="flex font-serif text-6xl font-bold -z-10 text-white text-shadow shadow-stone-800/10">XIX</p>
        <p className="absolute top-9 left-1/2 transform -translate-x-1/2 text-center tracking-[0.15em] font-thin text-stone-700">
          ap<span className="text-amber-600">art</span>ments
        </p>
      </div>

      <div className="flex flex-1 justify-end items-center">
        <LocaleSwitcher lang={lang} />
      </div>
    </main>
  );
}
