"use client";
import type { IAbout } from "../../types";
import me1 from "../../assets/about/me-1.png";
import me2 from "../../assets/about/me-2.jpg";
import throne from "../../assets/about/throne.png";
import brush1 from "../../assets/about/brush-1.png";
import { SimpleImage } from "../custom-img";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutMe({ about }: IAbout) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [10, 30]);

  return (
    <div ref={ref}>
      <h1>{about.title}</h1>

      <div className="relative flex flex-col md:flex-row justify-center items-center w-screen max-w-3xl pt-4">
        <SimpleImage
          src={throne}
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 md:-left-7 md:-translate-x-0 w-[19rem] md:w-64 h-auto -z-10"
        />
        <div className="relative flex w-64 justify-center items-center md:items-end drop-shadow-[2px_4px_6px_black]">
          <SimpleImage src={me1} style={{ objectFit: "contain" }} className="w-full h-full rounded-3xl" />
        </div>

        <div className="relative flex w-full min-h-[192px] justify-center items-center md:items-end md:mt-4">
          <motion.p
            style={{ y: y, x: 0 }}
            className="text-sm md:text-base text-right md:text-left pl-8 pr-12 py-6 md:py-0 font-bold text-stone-600"
          >
            {about.greetings}
          </motion.p>
        </div>

        <SimpleImage
          src={brush1}
          priority={true}
          className="absolute -bottom-3 md:-bottom-16 left-0 w-full -rotate-6 -z-10"
        />
      </div>

      <div className="relative flex w-full max-w-3xl justify-center items-center mt-20">
        <div className="relative">
          <SimpleImage
            src={me2}
            className="w-44 h-44 md:w-52 md:h-52 rounded-full float-right mx-4 drop-shadow-sm"
            style={{ shapeOutside: "circle(50%)" }}
          />
          <p className="text-justify md:text-right text-sm md:text-base font-bold text-stone-600 px-8 md:pt-4">
            {about.prolog}
          </p>
        </div>
      </div>
    </div>
  );
}
