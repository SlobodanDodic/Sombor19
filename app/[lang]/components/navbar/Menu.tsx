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
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#44403c" rounded label="Show menu" />

      {isOpen ? (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#292524] text-white z-50 transition-all">
          <div className="h-1/6 p-7">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#ffffff" rounded label="Show menu" />
          </div>

          <div className="flex flex-col h-4/6 w-full items-center justify-between">
            {navigationLinks.map((link, index) => (
              <div key={index} className="flex items-center" onClick={() => setOpen(false)}>
                <Link href={`/${link.lang}${link.href}`}>
                  <h1 data-name={link.text}>{link.text}</h1>
                </Link>
                <div className="text-4xl pl-3 text-amber-600">░</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
