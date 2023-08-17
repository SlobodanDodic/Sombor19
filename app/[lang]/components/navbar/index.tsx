import { Locale } from "@/i18n.config";
import Menubar from "./Menubar";
import LocaleSwitcher from "./locale-switcher";

export default async function Navbar({ lang }: { lang: Locale }) {
  return (
    <main className="navbar relative items-center bg-white">
      <div className="absolute top-[1px] left-0 w-full h-full bg-gradient-to-r from-amber-600 to-transparent -z-10" />

      <div className="flex items-center">
        <div className="flex font-thin text-amber-600 text-6xl items-center justify-center bg-stone-800 w-20 h-20">
          19
        </div>
        <div className="hidden sm:block">
          <Menubar lang={lang} />
        </div>
      </div>
      <div className="flex justify-center items-center mr-5">
        <LocaleSwitcher />
      </div>
    </main>
  );
}
