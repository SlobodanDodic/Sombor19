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
        className={`clippy-bg-one-null fixed top-0 left-0 w-screen h-screen flex flex-col bg-black/50 z-40 ${
          navActive ? "clippy-bg-one" : ""
        }`}
      />
      <div
        className={`clippy-bg-two-null fixed top-0 left-0 w-screen h-screen flex flex-col bg-black/50 z-40 ${
          navActive ? "clippy-bg-two" : ""
        }`}
      />

      <Link
        onClick={toggleNav}
        href={`/${lang}/`}
        className={`clippy-one-null fixed top-0 left-0 w-screen h-[100svh] bg-amber-600/95 flex group z-40 ${
          navActive ? "clippy-one" : ""
        }`}
      >
        <div className="bg-png bg-home top-1 left-10 sm:left-[20%] xl:left-[35%]" />

        <h2 className="absolute top-16 lg:top-20 left-1/2 transform -translate-x-1/2">
          {navigation.home}
          <span className="span-main">
            <span className="span-circle-inner" />
            <span className="span-circle" /> ♜
          </span>
        </h2>
      </Link>
      <Link
        onClick={toggleNav}
        href={`/${lang}/about`}
        className={`clippy-two-null fixed top-2 -left-[1%] scale-x-[0.98] w-screen h-[100svh] bg-amber-500/95 flex group z-40 ${
          navActive ? "clippy-two" : ""
        }`}
      >
        <div className="bg-png bg-about top-[30%] left-[10%] md:left-[25%]" />

        <h2 className="absolute top-[60%] left-[10%]">
          {navigation.about}
          <span className="span-main">
            <span className="span-circle-inner" />
            <span className="span-circle" />♚
          </span>
        </h2>
      </Link>
      <Link
        onClick={toggleNav}
        href={`/${lang}/rooms`}
        className={`clippy-three-null fixed top-1 left-1 w-screen h-[100svh] bg-amber-400/95 flex group z-40 ${
          navActive ? "clippy-three" : ""
        }`}
      >
        <div className="bg-png bg-rooms top-[45%] right-0 md:right-[10%]" />

        <h2 className="absolute top-[35%] right-[15%]">
          {navigation.rooms}
          <span className="span-main">
            <span className="span-circle-inner" />
            <span className="span-circle" />♛
          </span>
        </h2>
      </Link>
      <Link
        onClick={toggleNav}
        href={`/${lang}/contact`}
        className={`clippy-four-null fixed top-4 left-0 w-screen h-[100svh] bg-amber-700/95 flex group z-40 ${
          navActive ? "clippy-four" : ""
        }`}
      >
        <div className="bg-png bg-contact bottom-4 right-1/2" />

        <h2 className="absolute bottom-24 left-1/2 trasnform -translate-x-1/2">
          {navigation.contact}
          <span className="span-main">
            <span className="span-circle-inner" />
            <span className="span-circle" />♞
          </span>
        </h2>
      </Link>
    </>
  );
}
