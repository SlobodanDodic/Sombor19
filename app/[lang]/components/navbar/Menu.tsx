"use client";
import type { MenuProps } from "../../types";
import { useState } from "react";
import Image from "next/image";
import menuImg from "../../assets/menu.jpg";
import MenuLinks from "./MenuLinks";

export default function Menu({ lang, navigation }: MenuProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center">
      <div className="h-full z-50">
        <button
          className="relative flex sm:hidden justify-center items-center w-11 h-11 pt-1 rounded-full font-medium text-xl text-amber-600/50 hover:text-amber-600/80 border border-amber-600 bg-stone-800"
          onClick={() => setVisible(true)}
        >
          XIX
        </button>
        <button className="relative hidden sm:flex justify-center items-center w-11 h-11 pt-1 rounded-full font-medium text-xl text-amber-600/50 hover:cursor-default border border-amber-600 bg-stone-800">
          XIX
        </button>

        <div className={visible ? "visibleStyle" : "hiddenStyle"}>
          <button
            className="relative flex sm:hidden justify-center items-center w-11 h-11 pt-1 rounded-full font-medium text-xl text-amber-600/50 hover:text-amber-600/80 border border-amber-600 bg-stone-800"
            onClick={() => setVisible(false)}
          >
            X
          </button>
          <div className="flex flex-col py-3">
            <MenuLinks
              lang={lang}
              navigation={navigation}
              className="flex flex-row-reverse justify-end rounded p-4 my-3 border border-amber-600 backdrop-blur-sm text-shadow shadow-stone-800"
            />
            <Image
              src={menuImg}
              alt="menu"
              placeholder="blur"
              width="700"
              height="300"
              sizes="100vw"
              quality={100}
              style={{ objectFit: "cover" }}
              className="absolute top-0 left-0 h-full w-full brightness-[39%] -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
