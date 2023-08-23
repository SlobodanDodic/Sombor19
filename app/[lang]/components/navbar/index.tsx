import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionary";
import Menu from "./Menu";
import MenuLinks from "./MenuLinks";

export default async function Navbar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <main className="absolute top-0 left-0 backdrop-blur-sm border-b border-white/20 flex w-screen justify-between text-white items-center z-50 p-5">
      <div className="flex items-center">
        <Menu lang={lang} navigation={navigation} />
      </div>

      <div className="hidden sm:flex flex-auto justify-center sm:justify-end items-center sm:pr-5 text-shadow-sm shadow-stone-800">
        <MenuLinks lang={lang} navigation={navigation} className="flex mr-3" />
      </div>

      <div className="flex justify-center items-center">
        <LocaleSwitcher lang={lang} />
      </div>
    </main>
  );
}
