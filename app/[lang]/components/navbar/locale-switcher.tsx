"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n } from "@/i18n.config";
import { PiTranslateThin } from "react-icons/pi";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const [showLang, setShowLang] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLang = () => {
    setShowLang(!showLang);
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex">
      {showMenu ? (
        <RxCross2
          onClick={toggleMenu}
          className="mr-2 z-[51] block sm:hidden w-11 h-11 p-2 bg-stone-800 text-amber-600 border-amber-600 border rounded-full"
        />
      ) : (
        <HiOutlineBars2
          onClick={toggleMenu}
          className="mr-2 z-[51] block sm:hidden w-11 h-11 p-2 bg-stone-800 text-amber-600 border-amber-600 border rounded-full"
        />
      )}

      {/* Mobile menu */}
      {showMenu ? <div className="absolute top-0 z-50 left-0 w-screen h-screen bg-black/80">show</div> : null}

      <div
        onClick={toggleLang}
        className="flex items-center justify-center rounded hover:cursor-pointer h-11 w-11 z-40"
      >
        <PiTranslateThin className="w-11 h-11 p-2 bg-stone-800 text-amber-600 border-amber-600 border rounded-full" />
      </div>
      {showLang ? (
        <div className="absolute top-10 bg-stone-800 z-30 right-5 w-11 flex flex-col items-center rounded-b-full py-8 border border-amber-600 text-amber-600">
          {i18n.locales.map((locale) => {
            return (
              <p key={locale} className="text-xs hover:font-bold uppercase py-1">
                <Link href={redirectedPathName(locale)}>{locale}</Link>
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
