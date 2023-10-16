"use client";
import type { CombinedProps } from "../../types";
import Link from "next/link";

export function PrologPage({ home, lang, navigation }: CombinedProps) {
  return (
    <div className="relative w-screen mx-auto flex flex-col items-center mt-24">
      <h3 className="px-7 w-screen max-w-3xl">{home.accommodation}</h3>

      <h4 className="px-7 py-2 my-4 max-w-3xl bg-white">{home.introText}</h4>

      <div className="relative w-screen flex justify-center mt-4 mb-10">
        <div className="flex px-12 border-x md:border-x-2 border-stone-800">
          <div className="flex px-4 bg-white">
            <Link className="btn" href={`/${lang}/about`}>
              {navigation.about}
            </Link>
          </div>
        </div>
        <span className="absolute top-1/2 left-0 -translate-y-1/2 w-screen h-[1px] md:h-[2px] bg-stone-800 -z-10" />
      </div>
    </div>
  );
}
