import { BiSolidDownArrow } from "react-icons/bi";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { BarCodeCenter, BarCodeTop, IntroSection } from "./components/home";
import Image from "next/image";
import HomeImg from "./assets/hero.jpg";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  const header = page.home.headline;
  const words = header.split(" ");
  const firstWord = words[0];
  const secondWord = words[1];
  const thirdWord = words[2];

  return (
    <main className="flex flex-col overflow-hidden">
      <div className="relative flex w-screen max-w-full">
        <BarCodeTop />
        <div className="absolute bg-white top-[91px] sm:top-28 h-[400px] left-[2%] w-[96%] z-10 outline outline-amber-600 -skew-y-3 rounded drop-shadow-xl">
          <Image
            src={HomeImg}
            alt="home"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1080px) 983px, 91.45vw"
            style={{ objectFit: "cover" }}
            className=" brightness-[65%] contrast-125 rounded"
          />
        </div>
        <div className="absolute top-0 left-0 sm:left-[79px] w-[1px] h-screen bg-gradient-to-b from-amber-600 to-transparent -z-20" />
        <div className="absolute top-0 left-0 w-[1px] h-[70vh] bg-gradient-to-b from-amber-600 to-transparent -z-20" />

        <div className="flex flex-col items-center w-screen max-w-full py-12 px-2">
          <div className="flex flex-col items-center w-full sm:max-w-xl px-3 sm:px-7">
            <h1 className="flex tracking-[-5px] text-5xl sm:text-7xl font-bold">
              <span className="ml-4 z-0">{firstWord}</span>
            </h1>
            <h2 className="relative flex z-10 tracking-[-3px] text-4xl sm:text-5xl font-bold -mt-2 ml-12 text-amber-600">
              <span className="absolute -top-1 sm:-top-3 -left-11 sm:-left-16 text-4xl sm:text-5xl bg-stone-800 text-amber-600 border border-amber-600 w-4 h-4 flex items-center justify-center p-6 sm:p-8 rounded-full">
                {secondWord}
              </span>
              <span>{thirdWord}</span>
            </h2>
          </div>

          <div className="flex w-full sm:max-w-xl px-2 sm:px-7 mt-20 justify-center z-10">
            <div className="flex p-3 border uppercase backdrop-blur-[1px] border-amber-600 font-bold text-sm sm:text-lg w-fit my-8 text-amber-600 rounded">
              {page.home.visit}
            </div>
          </div>
          <div className="flex z-10">
            <BiSolidDownArrow className="w-5 h-5 text-amber-600 animate-bounce" />
          </div>

          <BarCodeCenter />
        </div>

        <div className="absolute triangle flex justify-center items-center -bottom-36 sm:-bottom-32 left-1/2 w-72 h-72 bg-amber-600 transform -translate-x-1/2 -z-20" />
      </div>

      <IntroSection home={page.home} lang={lang} />
    </main>
  );
}
