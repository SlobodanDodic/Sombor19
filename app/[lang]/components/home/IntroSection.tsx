import Image from "next/image";
import type { IntroSectionProps } from "../../types";
import tree from "../../assets/tree.png";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export async function IntroSection({ home, lang }: IntroSectionProps) {
  const { navigation } = await getDictionary(lang);

  return (
    <div className="relative flex flex-col items-center mx-2">
      <Image src={tree} alt="tree" width={235} height={204} loading="lazy" className="z-0" />
      <h1 className="shadow-inner shadow-stone-800 text-center p-3 rounded text-stone-800 text-3xl font-bold -mt-32 -z-10">
        {home.welcome}
        <span className="ml-2 shadow-inner shadow-stone-800 bg-amber-600 py-1 px-2 rounded-full">19</span>
      </h1>

      <div className="relative flex w-screen justify-center mt-28 mb-10">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l from-amber-600 to-transparent " />

        <div className="flex mb-3 w-full justify-center items-center">
          <span className="flex text-amber-600">░</span>
          <h1 className="font-semibold -ml-1">{home.about}</h1>
          {/* <Link href={`/${lang}/about`} className="menu-link font-semibold -ml-1">
            {home.about}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
