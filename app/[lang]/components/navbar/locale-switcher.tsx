"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n } from "@/i18n.config";
import { PiTranslateThin } from "react-icons/pi";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const [showLang, setShowLang] = useState(false);

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
      <div
        onClick={toggleLang}
        className="flex items-center justify-center rounded hover:cursor-pointer h-11 w-11 z-40"
      >
        <PiTranslateThin className="w-11 h-11 p-2 bg-stone-800 text-amber-600 border-amber-600 border rounded-full" />
      </div>
      {showLang ? (
        <div className="absolute top-10 bg-stone-800 z-30 right-1 sm:right-7 w-11 flex flex-col items-center rounded-b-full py-8 border border-amber-600 text-amber-600">
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
