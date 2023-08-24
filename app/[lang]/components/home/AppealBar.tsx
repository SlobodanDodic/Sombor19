"use client";
import type { IHome } from "../../types";
import Link from "next/link";
import Inputs from "../inputs";

export function AppealBar({ home, lang }: IHome) {
  const header = home.headline;
  const words = header.split(" ");
  const firstWord = words[0];
  const secondWord = words[1];
  const thirdWord = words[2];

  return (
    <div className="mt-[40svh] text-xs">
      <div className="flex flex-col text-center pb-20 font-bold text-shadow-sm shadow-stone-800 z-10">
        <span className="text-3xl sm:text-5xl tracking-tight text-amber-600/60">
          {firstWord} {secondWord}
        </span>
        <span className="text-5xl sm:text-7xl -mt-6 tracking-tight text-amber-600/70">{thirdWord}</span>
      </div>

      <h1 className="p-3 text-center text-white/90">{home.visit}</h1>

      <div className="flex flex-col items-center justify-center w-screen px-2 font-semibold">
        <Inputs home={home} />

        <Link
          href={`/${lang}/contact`}
          className="flex w-[200px] sm:w-[308px] h-7 rounded border-0 text-start sm:text-center items-center justify-center text-white/90 ring-2 ring-white/70 bg-amber-600/60"
        >
          {home.submit}
        </Link>
      </div>
    </div>
  );
}
