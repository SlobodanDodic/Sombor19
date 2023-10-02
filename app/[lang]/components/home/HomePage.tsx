"use client";
import { useEffect, useState } from "react";
import type { IHome } from "../../types";
import Image from "next/image";
import homeLeft from "../../assets/hero/hero-left.jpg";
import homeUp from "../../assets/hero/hero-up.jpg";
import homeDown from "../../assets/hero/hero-down.jpg";
import homeRight from "../../assets/hero/hero-right.jpg";
import SvgFilter from "./SvgFilter";

export function HomePage({ home }: IHome) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-screen h-auto">
      <div
        className={`absolute top-4 right-0 h-6 z-10 shadow-md shadow-black/60 bg-stone-800 transition-all duration-1000 ${
          isLoaded ? "w-screen" : "w-0"
        }`}
      />

      <div className="absolute w-screen top-4 left-0 h-6 z-10">
        <div
          className={`absolute rounded-tl-2xl top-16 right-0 shadow-md shadow-black/60 h-6 bg-stone-800 transition-all duration-[1500ms] ${
            isLoaded ? "w-[47%]" : "w-0"
          } z-10`}
        />

        <div className="flex w-screen max-w-6xl mx-auto">
          <div className="hidden md:flex w-[33%]" />
          <div className="relative flex flex-col justify-end items-end w-screen md:w-[34%] shadow-black/60 text-shadow-heading pr-4 -mt-6">
            <h1 className="text-5xl text-stone-800 font-extrabold tracking-[1px]">{home.apartment}</h1>
            <h1 className="text-6xl text-stone-800 font-extrabold tracking-[1px] pt-4 z-20">19</h1>
          </div>
          <div className="hidden md:flex w-[33%]" />
        </div>
      </div>

      <div className="absolute -bottom-14 left-0 w-screen h-6">
        <div
          className={`h-6 shadow-md shadow-black/60 bg-amber-600 transition-all duration-[1200ms] ${
            isLoaded ? "w-screen" : "w-0"
          } z-10`}
        />
        <div className="flex w-screen max-w-6xl mx-auto">
          <div className="hidden md:flex w-[33%]" />
          <div className="flex justify-start items-start w-screen md:w-[34%] pl-4">
            <h1 className="text-5xl -mt-12 text-amber-600 font-extrabold shadow-black/60 text-shadow-heading z-20">
              {home.welcome}
            </h1>
          </div>
          <div className="hidden md:flex w-[33%]" />
        </div>
      </div>

      <div className="flex pt-20 mt-10 mx-auto w-screen max-w-6xl">
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

        <div className="flex flex-col w-screen md:w-[34%] svg-parent">
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
            <div className="flex w-[29%] ml-[1%] -mt-28 parallel-up bg-stone-800 z-0" />
          </div>

          <div className="flex -mt-11 md:-mt-8 lg:-mt-10 xl:-mt-12">
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
