"use client";
import type { IMenu } from "../../types";
import { useState } from "react";
import Link from "next/link";

export default function Menu({ lang, navigation }: IMenu) {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <div className={`menu-icon ${navActive ? "nav-active" : ""}`} onClick={toggleNav}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line menu-icon__line-center"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      <div
        className={`clippy-bg-null fixed top-0 left-0 w-screen h-screen flex flex-col bg-black/70 z-40 ${
          navActive ? "clippy-bg" : ""
        }`}
      />
      <Link
        href={`/${lang}/`}
        className={`clippy-one-null fixed top-0 left-0 w-screen h-[100svh] flex bg-amber-600/95 hover:bg-amber-800 group z-40 ${
          navActive ? "clippy-one" : ""
        }`}
      >
        <h2 className="absolute top-20 left-1/2 transform -translate-x-1/2 group-hover:text-stone-800">
          {navigation.home}
          <span className="ml-2">♜</span>
        </h2>
      </Link>
      <Link
        href={`/${lang}/about`}
        className={`clippy-two-null fixed top-2 -left-[1%] scale-x-[0.98] w-screen h-[100svh] flex bg-amber-500/95 hover:bg-amber-800 group z-40 ${
          navActive ? "clippy-two" : ""
        }`}
      >
        <h2 className="absolute top-[60%] left-[20%] group-hover:text-stone-800">
          {navigation.about}
          <span className="ml-2">♞</span>
        </h2>
      </Link>
      <Link
        href={`/${lang}/rooms`}
        className={`clippy-three-null fixed top-1 left-1 w-screen h-[100svh] flex bg-amber-400/95 hover:bg-amber-800 group z-40 ${
          navActive ? "clippy-three" : ""
        }`}
      >
        <h2 className="absolute top-[30%] right-[15%] group-hover:text-stone-800">
          {navigation.rooms}
          <span className="ml-2">♛</span>
        </h2>
      </Link>
      <Link
        href={`/${lang}/contact`}
        className={`clippy-four-null fixed top-4 left-0 w-screen h-[100svh] flex bg-amber-700/95 hover:bg-amber-800 group z-40 ${
          navActive ? "clippy-four" : ""
        }`}
      >
        <h2 className="absolute bottom-14 right-1/2 transform translate-x-1/2 group-hover:text-stone-800">
          {navigation.contact}
          <span className="ml-2">♟</span>
        </h2>
      </Link>
    </>
  );
}
