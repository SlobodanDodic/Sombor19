import homeLeft from "../../assets/hero/hero-left.jpg";
import homeUp from "../../assets/hero/hero-up.jpg";
import homeDown from "../../assets/hero/hero-down.jpg";
import homeRight from "../../assets/hero/hero-right.jpg";
import CustomImage from "../custom-img";
import SvgFilter from "./SvgFilter";

export function SvgPage() {
  return (
    <div className="flex pt-16 mx-auto w-screen max-w-6xl">
      <div className="hidden relative md:flex flex-col mt-10 w-[33%] svg-parent">
        <SvgFilter />
        <CustomImage src={homeLeft} alt="homeLeft" className="flex hexa w-full" />
      </div>

      <div className="flex flex-col justify-center w-[90%] mx-auto md:w-[34%] svg-parent">
        <SvgFilter />
        <div className="flex">
          <CustomImage src={homeUp} alt="homeUp" className="flex hexa w-[70%]" />
          <div className="flex w-[29%] ml-[2%] -mt-14 parallel-up bg-stone-800 bg-19 bg-contain bg-top bg-no-repeat z-0" />
        </div>

        <div className="flex -mt-8 md:-mt-6 lg:-mt-10">
          <div className="flex w-[29%] mr-[2%] parallel-down bg-amber-600 h-[125%] z-0" />
          <CustomImage src={homeDown} alt="homeDown" className="flex hexa w-[70%]" />
        </div>
      </div>

      <div className="hidden md:flex flex-col mt-10 w-[33%] svg-parent">
        <SvgFilter />
        <CustomImage src={homeRight} alt="homeRight" className="flex hexa w-full" />
      </div>
    </div>
  );
}
