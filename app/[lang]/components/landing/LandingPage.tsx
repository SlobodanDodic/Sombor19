"use client";
import type { IHome } from "../../types";
import Link from "next/link";
import Inputs from "../inputs";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiSolidDownArrow } from "react-icons/bi";
import Image from "next/image";
import HomeImg from "../../assets/hero.jpg";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// style={{ y }}

export function LandingPage({ home, lang }: IHome) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-10%"]);

  return (
    <div ref={ref} className="flex flex-col pt-5 h-[100svh] mx-auto overflow-hidden">
      <div className="relative w-screen h-[75svh] sm:h-[83svh] 2xl:h-[90svh]">
        <div className="absolute clippy h-[calc(100%-7rem)] w-full top-[5rem] left-0 bg-amber-600 flex z-30">
          <div className="absolute clippy clippy-bg h-[calc(100%-1rem)] w-full top-[0.5rem] left-0">
            <Image
              src={HomeImg}
              alt="home"
              priority={true}
              placeholder="blur"
              quality={100}
              style={{ objectFit: "cover" }}
              className="h-full brightness-[80%] bg-stone-800 z-10"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1/2 w-screen bg-stone-800 border-t-8 border-amber-600 -z-10" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 backdrop-blur-[1px] bg-white/80 border-y-4 border-amber-600 backdrop-brightness-75 text-center">
        <div className="w-screen font-thin text-shadow-sm shadow-stone-800 py-4 text-4xl sm:text-5xl tracking-tighter text-white border-y border-white/20">
          {/* {home.headline} */}
        </div>
      </div>

      <div className="absolute bottom-5 lg:bottom-6 2xl:bottom-9 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center justify-center w-screen px-2 font-semibold">
        <p className="px-5 py-4 text-center text-xs text-shadow-sm shadow-black text-white/90">{home.query.visit}</p>
        <Inputs home={home} />
        <Link
          href={`/${lang}/contact`}
          className="flex w-[200px] sm:w-[308px] h-7 rounded border-0 text-xs text-start sm:text-center items-center justify-center text-white/90 ring-2 ring-white/70 bg-amber-600/60"
        >
          {home.query.submit}
        </Link>

        <BiSolidDownArrow className="mt-3 h-5 w-5 text-amber-600" />
      </div>
    </div>
  );
}
