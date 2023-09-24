"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImg from "../../assets/ten.svg";
import type { IHome } from "../../types";
import AnimatedCounter from "./AnimatedCounter";

export function ReviewCard({ home }: IHome) {
  const categories = [
    { title: home.staff, rating: 9.9 },
    { title: home.facilities, rating: 9.8 },
    { title: home.cleanliness, rating: 9.9 },
    { title: home.comfort, rating: 9.8 },
    { title: home.value, rating: 9.8 },
    { title: home.location, rating: 9.9 },
    { title: home.wifi, rating: 9.9 },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center mb-10 w-screen mx-auto">
      <Image
        src={bgImg}
        alt="home"
        width="1200"
        height="600"
        sizes="100vw"
        quality={100}
        style={{ objectFit: "cover" }}
        className="absolute top-10 transform left-1/2 -translate-x-1/2 h-full w-full opacity-5 -z-10"
      />

      <div className="flex flex-col text-xl w-screen justify-center items-center pt-5 pb-10 font-bold text-white bg-stone-800">
        <p>{home.welcome}</p>
        <p>{home.title}</p>
      </div>

      <div className="flex justify-between items-center my-10 -z-10">
        <div className="flex bg-stone-800 text-amber-600 text-sm font-semibold py-2 px-3 rounded-s">
          <AnimatedCounter from={0} to={9.8} className="flex justify-center w-10" />
        </div>
        <div className="flex text-sm font-semibold text-stone-700 bg-amber-600 py-2 px-3 rounded-e uppercase">
          {home.booking}
        </div>
      </div>

      <div className="flex -z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <div key={i} className="w-60 bg-stone-800/10 rounded-e-lg p-2">
              <div className="text-sm font-medium text-stone-700 tracking-wide">{category.title}</div>
              <div className="flex items-center mb-3">
                <div className="w-full bg-stone-800 rounded h-3 mr-2">
                  <motion.div
                    className="h-3 bg-amber-600 rounded"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.rating * 10}%`, transition: { duration: 1 + i * 0.5 } }}
                  />
                </div>

                <span className="flex justify-center items-center text-sm font-medium h-11 w-11 bg-amber-600 p-2 rounded-full text-white text-shadow-sm shadow-stone-800 border-2 border-stone-400">
                  <AnimatedCounter
                    className="flex justify-center items-center w-11 h-11"
                    from={0}
                    to={category.rating}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
