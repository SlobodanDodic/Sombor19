"use client";
import type { IMenu } from "../../types";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function Menu({ lang, navigation }: IMenu) {
  const [navActive, setNavActive] = useState(false);

  const navigationLinks = [
    { lang: lang, href: `/`, text: navigation.home },
    { lang: lang, href: `/about`, text: navigation.about },
    { lang: lang, href: `/rooms`, text: navigation.rooms },
    { lang: lang, href: `/contact`, text: navigation.contact },
  ];

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <div className={`menu-icon ${navActive ? "nav-active" : ""}`} onClick={toggleNav}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line menu-icon__line-center"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      {/* {navActive ? (
      ) : null} */}

      {/* {navigationLinks.map((link, index) => (
            <div key={index} className="flex h-full justify-center items-center" onClick={toggleNav}>
              <Link href={`/${link.lang}${link.href}`}>
                <h1 data-name={link.text}>{link.text}</h1>
              </Link>
            </div>
          ))} */}

      <div
        className={
          navActive ? "absolute top-0 left-0 w-screen h-screen bg-black/70 text-stone-600 z-50 flex flex-col" : "hidden"
        }
      />
      <div
        className={`clippy-one-null absolute top-0 left-0 w-screen h-screen flex bg-amber-800/95 z-50 ${
          navActive ? "clippy-one" : ""
        }`}
      ></div>
      <div
        className={`clippy-two-null absolute top-1 -left-1 w-screen h-screen flex bg-amber-600/95 z-50 ${
          navActive ? "clippy-two" : ""
        }`}
      ></div>
      <div
        className={`clippy-three-null absolute -top-[1px] left-1 w-screen h-screen flex bg-amber-500/95 z-50 ${
          navActive ? "clippy-three" : ""
        }`}
      ></div>
      <div
        className={`clippy-four-null absolute top-0 left-0 w-screen h-screen flex bg-amber-400/95 z-50 ${
          navActive ? "clippy-four" : ""
        }`}
      ></div>
    </div>
  );
}
