"use client";
import { useEffect, useState } from "react";
import type { IHome } from "../../types";
import Typewriter from "../typewriter";
import SvgFilter from "./SvgFilter";

export function HeadingPage({ home }: IHome) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="absolute top-1 left-0 w-[90%] md:w-screen md:left-1/2 md:transform md:-translate-x-1/2 max-w-6xl flex">
      <div className="flex justify-start pl-4 ml-[5%] md:ml-[33%] mt-4 svg-parent">
        <h1 className="text-4xl lg:text-5xl tracking-[1px]">
          <span className="relative text-7xl lg:text-8xl -mt-1 px-1">
            <SvgFilter />
            <span
              className={`absolute letter-a-null rounded-lg top-0 left-0 w-full h-full bg-amber-600 transition-all duration-1000 -z-10 ${
                isLoaded ? "letter-a" : ""
              }`}
            />
            {home.apartment.substring(0, 1)}
          </span>
        </h1>
      </div>
      <div className="flex mt-4">
        <Typewriter text={home.apartment.substring(1)} delay={200} className="text-4xl lg:text-5xl tracking-[1px]" />
      </div>
    </div>
  );
}

{
  /*
  <div className={`absolute bottom-0 left-0 h-6 shadow-md shadow-stone-950 bg-amber-600 transition-all duration-[1200ms] z-0 ${ isLoaded ? "w-screen" : "w-0" }`} /> 
  <span className="mr-3 text-amber-600">⊹</span>
*/
}
