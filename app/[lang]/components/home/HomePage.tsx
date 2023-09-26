import Image from "next/image";
import homeLeft from "../../assets/hero/hero-left.jpg";
import homeUp from "../../assets/hero/hero-up.jpg";
import homeDown from "../../assets/hero/hero-down.jpg";
import homeRight from "../../assets/hero/hero-right.jpg";

export function HomePage() {
  return (
    <div className="flex pt-10 mx-auto w-screen max-w-6xl svg-parent">
      <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="flt_tag"
            />
            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="hidden relative md:flex flex-col mt-10 w-[33%]">
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

      <div className="flex flex-col w-screen md:w-[34%]">
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
          <div className="flex w-[30%] parallel-up bg-amber-600"></div>
        </div>

        <div className="flex -mt-10">
          <div className="flex w-[30%] parallel-down bg-stone-800"></div>

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

      <div className="hidden md:flex flex-col mt-10 w-[33%]">
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
  );
}
