import type { IHome } from "../../types";
import CustomImage from "../custom-img";
import Inputs from "../inputs";
import Link from "next/link";
import SvgFilter from "./SvgFilter";
import homeQuery from "../../assets/hero/hero-query.jpeg";

export function QueryPage({ home, lang }: IHome) {
  return (
    <div className="flex flex-col w-screen justify-center items-center my-10">
      <div className="flex svg-parent my-5">
        <SvgFilter />
        <div className="flex w-[30%] ml-[4%] parallel-up bg-stone-800 z-0" />
        <CustomImage src={homeQuery} alt="homeUp" className="flex hexa w-[65%]" />
        <div className="flex w-[30%] mr-[4%] parallel-down bg-amber-600 z-0" />
      </div>

      <h4 className="mb-5 px-10 text-center font-semibold">{home.query.visit}</h4>

      <div className="flex flex-col md:flex-row w-screen items-center justify-center">
        <Inputs home={home} />
        <Link
          href={`/${lang}/contact`}
          className="flex w-[200px] h-7 rounded border-0 text-sm capitalize font-normal items-center justify-center text-white ring-2 ring-white/70 bg-amber-600"
        >
          {home.query.submit}
        </Link>
      </div>
    </div>
  );
}
