import type { IHome } from "../../types";
import Inputs from "../inputs";
import Link from "next/link";

export function QueryPage({ home, lang }: IHome) {
  return (
    <div className="flex flex-col w-screen justify-center items-center my-10">
      <div></div>

      <h4 className="mb-5 px-10 text-center font-semibold">{home.query.visit}</h4>

      <div className="flex flex-col md:flex-row w-screen items-center justify-center">
        <Inputs home={home} />
        <Link
          href={`/${lang}/contact`}
          className="flex w-[200px] h-7 rounded border-0 text-xs uppercase font-bold tracking-[1px] items-center justify-center text-white ring-2 ring-white/70 bg-amber-600"
        >
          {home.query.submit}
        </Link>
      </div>
    </div>
  );
}
