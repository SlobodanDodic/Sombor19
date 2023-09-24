"use client";
import type { IHome } from "../../types";
import { Fade } from "react-awesome-reveal";
import Typewriter from "../typewriter";

export function IntroPage({ home, lang }: IHome) {
  return (
    <div className="relative flex flex-col bg-white mx-auto w-screen max-w-6xl md:justify-center mt-10 md:mt-14">
      <div className="w-screen max-w-6xl justify-center mt-5 mb-14">
        <Fade direction="up" delay={1500} duration={4000}>
          <h1 className="w-screen max-w-6xl justify-center text-center text-4xl md:text-6xl xl:text-7xl shadow-black text-shadow-md">
            {home.title}
            {/* {`⋆ ` + home.title + ` ⋆`} */}
          </h1>
        </Fade>
        <Typewriter
          text={home.welcome}
          delay={200}
          className="absolute w-screen tracking-wide -top-5 left-1/2 transform -translate-x-1/2 lowercase text-white text-shadow-down shadow-stone-600"
        />
      </div>

      <Fade direction="left" cascade={true} duration={1500} triggerOnce={true} className="relative">
        <h3 className="px-4 font-bold">{home.headline}</h3>
        <div className="absolute bottom-0 left-2 w-full max-w-xs h-10 triangle bg-amber-600" />
      </Fade>

      <Fade duration={3000}>
        <h3 className="px-4 py-2">{home.introText}</h3>
      </Fade>
    </div>
  );
}
