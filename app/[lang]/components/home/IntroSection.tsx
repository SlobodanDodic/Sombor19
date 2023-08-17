import Image from "next/image";
import { IntroSectionProps } from "../../types";
import tree from "../../assets/tree.png";

export const IntroSection = ({ home }: IntroSectionProps) => {
  return (
    <div className="relative flex flex-col items-center mx-2">
      <div className="absolute flex justify-center items-center -top-32 left-1/2 w-52 h-52 border border-stone-800 bg-amber-600 rotate-45 transform -translate-x-1/2 -z-20" />
      <Image src={tree} alt="tree" width={235} className="z-0 opacity-90" />
      <h1 className="shadow-inner shadow-stone-800 text-center p-2 text-stone-800 text-3xl font-bold -mt-32 -z-10">
        {home.welcome}
        <span className="ml-2 shadow-inner shadow-stone-800 bg-amber-600 py-1 px-2 rounded-full">19</span>
      </h1>

      <h1 className="py-28">Something</h1>
    </div>
  );
};
