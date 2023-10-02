"use client";
import type { IHome } from "../../types";
import Link from "next/link";
// import Inputs from "../inputs";
// import { BiSolidDownArrow } from "react-icons/bi";
// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
// import Typewriter from "../typewriter";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

export function IntroPage({ home, lang }: IHome) {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 300);

  return (
    <div className="relative w-screen mx-auto overflow-hidden flex flex-col items-center mt-7">
      {/* <div className="number" /> */}
      <div className="flex flex-wrap w-screen justify-start md:justify-center">
        <h1 className="relative text-5xl md:text-6xl xl:text-7xl shadow-stone-800 tracking-[1px] text-shadow-heading font-extrabold px-3 z-0">
          {home.central}
        </h1>
        <h1 className="relative text-5xl md:text-6xl xl:text-7xl shadow-stone-800 tracking-[1px] text-shadow-heading font-extrabold px-3 z-0">
          {home.apartment}
        </h1>
        <h1 className="relative text-5xl md:text-6xl xl:text-7xl shadow-stone-800 tracking-[1px] text-shadow-heading font-extrabold px-3 z-0">
          19
          <span className="absolute top-1 lg:top-1 right-3 md:right-5 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-[#57534e] -z-10" />
        </h1>
        <h1 className="w-full text-5xl md:text-6xl xl:text-7xl justify-start md:justify-center shadow-stone-800 tracking-[1px] text-shadow-heading font-extrabold px-3 mb-3 z-0">
          S<span className="text-[31px] md:text-[40px] xl:text-[50px] mt-3 md:mt-[15px] lg:mt-[17px]">☯</span>
          mb
          <span className="text-[31px] md:text-[40px] xl:text-[50px] mt-3 md:mt-[15px] lg:mt-[17px]">☯</span>r
        </h1>
      </div>

      {/* <Typewriter
        text={home.title}
        delay={100}
        className="text-6xl md:text-7xl xl:text-8xl shadow-stone-800 text-shadow-drop -mt-24 px-4 z-0"
      /> */}

      {/* <div className="">
        <p className="">{home.query.visit}</p>
        <Inputs home={home} />
        <Link
          href={`/${lang}/contact`}
          className="flex w-[200px] sm:w-[308px] h-7 rounded border-0 text-xs text-start sm:text-center items-center justify-center text-white/90 ring-2 ring-white/70 bg-amber-600/60"
        >
          {home.query.submit}
        </Link>

        <BiSolidDownArrow className="mt-3 h-5 w-5 text-amber-600" />
      </div> */}

      <h3 className="p-4 max-w-3xl ">{home.introText}</h3>
      <h3 className="p-4 max-w-3xl ">{home.introText}</h3>
      <h3 className="p-4 max-w-3xl ">{home.introText}</h3>
      <h3 className="p-4 max-w-3xl ">{home.introText}</h3>
      <h3 className="p-4 max-w-3xl ">{home.introText}</h3>
      <h3 className="p-4 max-w-3xl ">{home.introText}</h3>

      <Link
        href={`/${lang}/about`}
        className="w-screen flex justify-center items-center my-10 p-5 bg-amber-600 text-white"
      >
        My story
      </Link>
    </div>
  );
}
