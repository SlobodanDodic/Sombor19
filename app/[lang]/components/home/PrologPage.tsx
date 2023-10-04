import type { IHome } from "../../types";
import Link from "next/link";
import Inputs from "../inputs";

export function PrologPage({ home, lang }: IHome) {
  return (
    <div className="relative w-screen mx-auto flex flex-col items-center mt-20">
      <h3 className="px-7 mb-4 w-screen max-w-3xl">Accomodation in Central Apartment 19</h3>
      <h4 className="px-7 max-w-3xl">{home.introText}</h4>

      <Link
        href={`/${lang}/about`}
        className="w-screen flex justify-center items-center my-5 p-5 bg-amber-600 text-white"
      >
        My story
      </Link>

      {/* <div className="">
        <p className="">{home.query.visit}</p>
        <Inputs home={home} />
        <Link
          href={`/${lang}/contact`}
          className="flex w-[200px] sm:w-[308px] h-7 rounded border-0 text-xs text-start sm:text-center items-center justify-center text-white/90 ring-2 ring-white/70 bg-amber-600/60"
        >
          {home.query.submit}
        </Link>
      </div> */}
    </div>
  );
}
