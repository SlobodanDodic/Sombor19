"use client";
import type { CombinedProps } from "../../types";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

export function PrologPage({ home, lang, navigation }: CombinedProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [10, -90]);
  const y2 = useTransform(scrollY, [0, 300], [10, -50]);

  return (
    <div className="relative w-screen mx-auto flex flex-col items-center mt-28">
      <h3 className="px-7 mb-8 w-screen max-w-3xl">{home.accommodation}</h3>
      <motion.h4 style={{ y: y1, x: 0 }} className="px-7 py-2 max-w-3xl bg-white">
        {home.introText}
      </motion.h4>

      <motion.div style={{ y: y2, x: 0 }} className="relative w-screen flex justify-center my-10">
        <div className="flex px-12 border-x md:border-x-2 border-stone-800">
          <div className="flex px-4 bg-white">
            <Link className="btn" href={`/${lang}/about`}>
              {navigation.about}
            </Link>
          </div>
        </div>
        <span className="absolute top-1/2 left-0 -translate-y-1/2 w-screen h-[1px] md:h-[2px] bg-stone-800 -z-10" />
      </motion.div>
    </div>
  );
}
