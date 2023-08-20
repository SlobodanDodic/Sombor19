import type { IntroSectionProps } from "../../types";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import chairsImg from "../../assets/chairs.jpg";
import Link from "next/link";

export async function IntroSection({ home, lang }: IntroSectionProps) {
  const { navigation } = await getDictionary(lang);

  return (
    <div className="relative flex flex-col">
      <div className="absolute top-0 left-0 w-20 h-full border-r border-amber-600 z-10" />
      <div className="absolute top-0 left-0 w-20 h-full bg-stone-800 -z-10" />
      {/* <h1 className="absolute top-28 -left-14 -rotate-90 z-30 text-white/50 font-thin text-2xl">
        .-- . .-.. -.-. --- -- .
      </h1> */}

      {/* <div className="flex w-[100vw-5rem] justify-end z-30 sm:ml-20 -mt-10 pb-5">
        <Image src={chairsImg} alt="door" width={120} height={120} className="rounded-lg shadow-md shadow-stone-800" />
      </div> */}

      <div className="relative flex flex-col sm:items-center pt-11">
        <h1 className="absolute z-20 text-center sm:ml-10 top-14 left-1/2 transform -translate-x-1/2 text-white tracking-tight text-shadow-sm shadow-stone-800 text-4xl sm:text-4xl font-bold">
          {home.welcome}
        </h1>
        <div className="flex justify-center sm:ml-20 z-10">
          <Image
            src={chairsImg}
            alt="door"
            width={250}
            height={250}
            className="rounded-lg shadow-md skew-x-3 shadow-stone-800"
          />
        </div>
        <h1 className="absolute z-10 text-center sm:ml-10 bottom-2 left-1/2 transform -translate-x-1/2 backdrop-blur-sm text-shadow shadow-white rounded p-2 text-stone-800 border shadow-sm text-2xl sm:text-2xl font-bold">
          {home.title}
        </h1>
      </div>

      <div className="relative flex w-screen justify-center my-10 pl-10">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l from-amber-600 to-transparent " />

        <div className="flex mb-3 w-full justify-center items-center">
          <span className="flex text-amber-600">░</span>
          <h1 className="font-semibold -ml-1">{home.about}</h1>
        </div>
      </div>

      {/* <Link href={`/${lang}/about`} className="menu-link font-semibold -ml-1">
            {home.about}
          </Link> */}
    </div>
  );
}
