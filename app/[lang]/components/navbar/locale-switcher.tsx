"use client";
import type { ILang } from "../../types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n } from "@/i18n.config";

export default function LocaleSwitcher({ lang }: ILang) {
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
    <div className="relative flex">
      <div
        onClick={toggleLang}
        className="flex items-center justify-center rounded hover:cursor-pointer h-11 w-11 z-50"
      >
        <div className="flex items-center justify-center hover:text-bold p-2">{lang}</div>
      </div>
      {showLang ? (
        <div className="absolute top-0 right-0 bg-white w-11 flex flex-col items-center rounded-full pt-10 pb-5 border border-amber-600 text-stone-800 z-40">
          {i18n.locales.map((locale) => {
            return (
              <p
                key={locale}
                className="py-1 text-stone-600 hover:font-bold hover:underline hover:underline-offset-2 hover:decoration-1 hover:decoration-wavy hover:decoration-amber-600"
              >
                <Link href={redirectedPathName(locale)}>{locale}</Link>
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
