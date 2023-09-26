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
    <>
      <div className={`menu-icon ${navActive ? "nav-active" : ""}`} onClick={toggleNav}>
        {/* <div className="fixed w-10 h-10 -top-4 -left-2 bg-white/80 rounded-full" /> */}
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
        className={`clippy-bg-null fixed top-0 left-0 w-screen h-screen flex flex-col bg-black/70 z-40 ${
          navActive ? "clippy-bg" : ""
        }`}
      />
      <Link
        href={`/${lang}/`}
        className={`clippy-one-null fixed top-0 left-0 w-screen h-screen flex bg-amber-800/95 z-40 ${
          navActive ? "clippy-one" : ""
        }`}
      >
        <h1 className="fixed top-16 left-1/4 transform -translate-x-1/2 text-stone-800">{navigation.home}</h1>
      </Link>
      <Link
        href={`/${lang}/about`}
        className={`clippy-two-null fixed top-1 -left-1 w-screen h-screen flex bg-amber-600/95 z-40 ${
          navActive ? "clippy-two" : ""
        }`}
      >
        <h1 className="fixed top-[60%] left-[20%] text-stone-800 capitalize">{navigation.about}</h1>
      </Link>
      <Link
        href={`/${lang}/rooms`}
        className={`clippy-three-null fixed -top-[1px] left-1 w-screen h-screen flex bg-amber-400/95 z-40 ${
          navActive ? "clippy-three" : ""
        }`}
      >
        <h1 className="fixed top-[30%] right-[15%] text-stone-800 capitalize">{navigation.rooms}</h1>
      </Link>
      <Link
        href={`/${lang}/contact`}
        className={`clippy-four-null fixed top-0 left-0 w-screen h-screen flex bg-amber-400/95 z-40 ${
          navActive ? "clippy-four" : ""
        }`}
      >
        <h1 className="fixed top-[90%] right-1/4 transform translate-x-1/2 text-stone-800">{navigation.contact}</h1>
      </Link>
    </>
  );
}
