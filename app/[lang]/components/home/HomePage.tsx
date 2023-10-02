"use client";
import { useEffect, useState } from "react";
import type { IHome } from "../../types";
import Image from "next/image";
import homeLeft from "../../assets/hero/hero-left.jpg";
import homeUp from "../../assets/hero/hero-up.jpg";
import homeDown from "../../assets/hero/hero-down.jpg";
import homeRight from "../../assets/hero/hero-right.jpg";
import Typewriter from "../typewriter";
import SvgFilter from "./SvgFilter";

export function HomePage({ home }: IHome) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-screen">
      <div
        className={`absolute bottom-0 left-0 h-6 shadow-md shadow-stone-950 bg-amber-600 transition-all duration-[1200ms] z-0 ${
          isLoaded ? "w-screen" : "w-0"
        }`}
      />

      <div className="absolute w-screen top-8 left-0 h-6 z-10">
        <div className="flex w-[80%] max-w-6xl mx-auto">
          <div className="hidden md:flex w-[33%]" />
          <div className="relative flex flex-col justify-end items-end w-screen md:w-[34%] text-stone-900 shadow-stone-950 text-shadow-heading">
            <h1 className="relative text-stone-800 font-extrabold tracking-[2px] pr-4 animate-fade-down animate-duration-[2000ms]">
              <span className="mr-3 text-amber-600">⊹</span>
              {home.apartment}
            </h1>
            <span
              className={`absolute circle-null -top-3 left-1/2 transform -translate-x-1/2 rounded-full w-16 h-16 shadow-inner shadow-stone-800 bg-amber-600 -z-10 transition-all duration-1000 ${
                isLoaded ? "circle" : ""
              }`}
            />
            <h1 className="text-5xl bg-[#383533] font-extrabold tracking-[1px] h-16 w-16 rounded-full text-stone-800 shadow-inner shadow-stone-950 mr-2 pt-3 z-20">
              19
            </h1>
          </div>
          <div className="hidden md:flex w-[33%]" />
        </div>
      </div>

      <div className="absolute -bottom-20 left-8 w-screen h-6">
        <div className="flex w-screen max-w-6xl mx-auto">
          <div className="hidden md:flex w-[33%]" />
          <div className="flex justify-start items-start w-screen md:w-[34%] pl-4">
            <Typewriter
              text={home.welcome}
              delay={200}
              className="-mt-12 text-amber-600 font-extrabold shadow-stone-950 text-shadow-heading tracking-[1px] z-20"
            />
          </div>
          <div className="hidden md:flex w-[33%]" />
        </div>
      </div>

      <div className="flex pt-20 mx-auto w-screen max-w-6xl">
        <div className="hidden relative md:flex flex-col mt-10 w-[33%] svg-parent">
          <SvgFilter />
          <div className="flex hexa w-full">
            <Image
              src={homeLeft}
              alt="homeLeft"
              priority={true}
              placeholder="blur"
              quality={100}
              style={{ objectFit: "cover" }}
              className="h-full brightness-[80%] bg-stone-800 z-10"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center w-[80%] mx-auto md:w-[34%] svg-parent">
          <SvgFilter />

          <div className="flex">
            <div className="flex hexa w-[70%]">
              <Image
                src={homeUp}
                alt="homeUp"
                priority={true}
                placeholder="blur"
                quality={100}
                style={{ objectFit: "cover" }}
                className="h-full brightness-[80%] bg-stone-800 z-10"
              />
            </div>
            <div className="flex w-[29%] ml-[1%] -mt-16 parallel-up bg-stone-800 z-0" />
          </div>

          <div className="flex -mt-7 md:-mt-8 lg:-mt-10 xl:-mt-12">
            <div className="flex w-[29%] mr-[1%] parallel-down bg-amber-600 h-[150%] z-0" />

            <div className="flex hexa w-[70%]">
              <Image
                src={homeDown}
                alt="homeDown"
                priority={true}
                placeholder="blur"
                quality={100}
                style={{ objectFit: "cover" }}
                className="h-full brightness-[80%] bg-stone-800 z-10"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col mt-10 w-[33%] svg-parent">
          <SvgFilter />

          <div className="flex hexa w-full">
            <Image
              src={homeRight}
              alt="homeRight"
              priority={true}
              placeholder="blur"
              quality={100}
              style={{ objectFit: "cover" }}
              className="h-full brightness-[80%] bg-stone-800 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
