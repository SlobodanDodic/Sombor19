"use client";
import type { IMenu } from "../../types";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function Menu({ lang, navigation }: IMenu) {
  const [isOpen, setOpen] = useState(false);

  const navigationLinks = [
    { lang: lang, href: `/`, text: navigation.home },
    { lang: lang, href: `/about`, text: navigation.about },
    { lang: lang, href: `/rooms`, text: navigation.rooms },
    { lang: lang, href: `/contact`, text: navigation.contact },
  ];

  return (
    <>
      <div className="z-50">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          color={isOpen ? "white" : "#44403c"}
          rounded
          label="Show menu"
        />
      </div>
      <div className={`wrapper ${isOpen ? "active" : ""}`}>
        {isOpen ? (
          <div className="absolute top-28 left-0 w-screen h-screen bg-[#292524] text-white z-50 transition-all flex flex-col items-center">
            {navigationLinks.map((link, index) => (
              <div key={index} className="flex items-center pb-5" onClick={() => setOpen(false)}>
                <Link href={`/${link.lang}${link.href}`}>
                  <h1 data-name={link.text}>{link.text}</h1>
                </Link>
                <div className="text-4xl pl-3 text-amber-600">░</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
