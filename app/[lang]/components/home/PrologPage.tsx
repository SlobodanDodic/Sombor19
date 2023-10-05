"use client";
import type { CombinedProps } from "../../types";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

export function PrologPage({ home, lang, navigation }: CombinedProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [180, 400], [-20, 215]);
  const y2 = useTransform(scrollY, [0, 400], [20, -90]);
  const y3 = useTransform(scrollY, [0, 400], [10, -20]);

  return (
    <div className="relative w-screen h-[400px] mx-auto flex flex-col items-center mt-28">
      <motion.h3 style={{ y: y1, x: 0 }} className="px-7 w-screen h-[75px] md:h-[100px] lg:h-[50px] max-w-3xl">
        {home.accommodation}
      </motion.h3>
      <motion.h4 style={{ y: y2, x: 0 }} className="px-7 h-[250px] md:h-[200px] lg:h-[300px] max-w-3xl bg-white">
        {home.introText}
      </motion.h4>

      <motion.div style={{ y: y3, x: 0 }} className="relative w-screen flex justify-center mb-10">
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
