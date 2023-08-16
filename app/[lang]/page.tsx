import { BiSolidDownArrow } from "react-icons/bi";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { BarCodeCenter, BarCodeRight, IntroSection } from "./components/home";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  const header = page.home.headline;
  const words = header.split(" ");
  const firstWord = words[0];
  const secondWord = words[1];
  const thirdWord = words[2];

  return (
    <main className="flex flex-col">
      <div className="relative flex w-screen max-w-full">
        <div className="absolute top-[91px] sm:top-28 h-96 left-[2%] w-[96%] -z-10 bg-hero bg-no-repeat bg-center bg-cover brightness-50 outline outline-offset-2 outline-2 outline-amber-600 rounded-s-3xl" />
        <div className="absolute top-0 left-0 sm:left-[79px] w-[1px] h-screen bg-gradient-to-b from-amber-600 to-transparent -z-20" />
        <div className="absolute top-[90px] sm:top-28 right-1 sm:right-5 w-16 h-96 backdrop-blur-[1px]" />

        <div className="flex flex-col items-center w-screen max-w-full py-12 px-2">
          <div className="flex flex-col items-center w-full sm:max-w-xl px-3 sm:px-7">
            <h1 className="flex tracking-[-5px] text-5xl sm:text-7xl font-bold">
              <span className="z-20 ml-4">{firstWord}</span>
            </h1>
            <h2 className="relative flex tracking-[-3px] text-4xl sm:text-5xl font-bold -mt-3 ml-12 text-amber-600">
              <span className="absolute top-0 sm:-top-3 -left-14 sm:-left-16 text-4xl sm:text-5xl bg-stone-800 text-amber-600 px-3.5 border border-amber-600 z-0 sm:py-2 rounded-full">
                {secondWord}
              </span>
              <span>{thirdWord}</span>
            </h2>
          </div>

          <div className="flex w-full sm:max-w-xl px-2 sm:px-7 mt-20 justify-center">
            <div className="flex p-3 border uppercase backdrop-blur-[1px] border-amber-600 font-bold text-lg w-fit my-8 text-amber-600 rounded">
              {page.home.visit}
            </div>
          </div>
          <div className="flex">
            <BiSolidDownArrow className="w-5 h-5 text-amber-600" />
          </div>

          <BarCodeCenter />
          <BarCodeRight />
        </div>
      </div>

      <IntroSection home={page.home} />
    </main>
  );
}

{
  /* <span className="absolute top-10 left-20 border-b-2 sm:border-b-4 border-amber-600 w-14" /> */
}
