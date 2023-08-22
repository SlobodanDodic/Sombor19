"use client";
import type { LangProps } from "../../types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n } from "@/i18n.config";

export default function LocaleSwitcher({ lang }: LangProps) {
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
        <div className="w-11 h-11 flex items-center justify-center font-medium bg-stone-800 text-amber-600/60 hover:text-amber-600/80 border-amber-600 border rounded-full">
          {lang}
        </div>
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
