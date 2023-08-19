import type { IntroSectionProps } from "../../types";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export async function IntroSection({ home, lang }: IntroSectionProps) {
  const { navigation } = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <h1 className="shadow-inner ml-24 mr-4 w-[100% - 7rem] mt-5 shadow-stone-800 p-5 rounded text-stone-600 leading-7 underline decoration-[10px] underline-offset-8 decoration-amber-600 sm:text-center text-2xl sm:text-3xl font-bold">
        {home.welcome} {home.title}
      </h1>

      {/* <div className="relative flex w-screen justify-center mt-28 mb-10">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l from-amber-600 to-transparent " />

        <div className="flex mb-3 w-full justify-center items-center">
          <span className="flex text-amber-600">░</span>
          <h1 className="font-semibold -ml-1">{home.about}</h1>
        </div>
      </div> */}

      <div className="flex"></div>

      {/* <Link href={`/${lang}/about`} className="menu-link font-semibold -ml-1">
            {home.about}
          </Link> */}
    </div>
  );
}
