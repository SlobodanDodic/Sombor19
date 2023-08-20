import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import HomeImg from "./assets/hero.jpg";
import { SearchBar } from "./components/home";
// import { IntroSection } from "./components/home";
// import { BiSolidDownArrow } from "react-icons/bi";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  const header = page.home.headline;
  const words = header.split(" ");
  const firstWord = words[0];
  const secondWord = words[1];
  const thirdWord = words[2];

  return (
    <div className="flex flex-col">
      <div className="relative h-[75vh] w-screen">
        <div className="absolute -top-4 left-16 w-8 h-8 flex items-center justify-center rounded-full text-2xl bg-stone-800 z-10 border border-amber-600">
          <span className="mt-1">{page.home.flag}</span>
        </div>

        <Image
          src={HomeImg}
          alt="home"
          priority
          fill
          placeholder="blur"
          sizes="100vw"
          quality={100}
          style={{ objectFit: "cover" }}
          className="brightness-[39%] z-0"
        />
        <div className="flex w-20 h-[75vh] backdrop-grayscale brightness-125 border-r border-amber-600" />

        <div className="absolute -bottom-8 border border-amber-600 underline decoration-1 underline-offset-4 decoration-amber-600 left-12 w-16 h-16 rounded-full backdrop-brightness-50 z-30 overflow-hidden shadow-lg backdrop-blur-sm">
          <span className="flex pr-[1px] justify-center font-thin text-6xl  text-amber-600 -z-20">XIX</span>
        </div>

        <div className="absolute flex flex-col text-4xl sm:text-5xl top-1 left-20 text-amber-600 p-3 font-bold text-shadow shadow-stone-800 rounded">
          <span>
            {firstWord} {secondWord}
          </span>
          <span>{thirdWord}</span>
        </div>
      </div>

      <SearchBar />

      {/* <IntroSection home={page.home} lang={lang} /> */}
    </div>
  );
}
