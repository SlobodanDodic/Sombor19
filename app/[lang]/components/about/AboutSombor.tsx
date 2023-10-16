import type { IAbout } from "../../types";
import { SimpleImage } from "../custom-img";
import { Gallery } from "./Gallery";
import brush2 from "../../assets/about/brush-2.png";
import stain from "../../assets/about/stain.png";

export function AboutSombor({ about }: IAbout) {
  return (
    <>
      <div className="relative mt-16">
        <SimpleImage
          src={stain}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 -z-10"
        />
        <h1>{about.hometown}</h1>
        <h1>{about.sombor}</h1>
      </div>

      <div className="relative flex flex-col w-full max-w-3xl justify-center items-center mt-5">
        <p className="text-sm md:text-base font-bold text-stone-600 px-8 py-4">{about.soText1}</p>

        <Gallery />

        <div className="relative flex flex-col">
          <SimpleImage src={brush2} className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 rotate-6 -z-10" />

          <p className="text-sm md:text-base font-bold text-stone-600 px-8 py-8">{about.soText2}</p>
          <p className="text-sm md:text-base font-bold text-stone-600 px-8 pb-4">{about.soText3}</p>
        </div>
      </div>
    </>
  );
}
