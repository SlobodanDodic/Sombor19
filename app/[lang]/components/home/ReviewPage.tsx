"use client";
import type { IHome } from "../../types";
import { motion } from "framer-motion";
import { CounterPage } from "./CounterPage";

export function ReviewPage({ home }: IHome) {
  const categories = [
    { title: home.booking.staff, rating: 9.9 },
    { title: home.booking.facilities, rating: 9.8 },
    { title: home.booking.cleanliness, rating: 9.9 },
    { title: home.booking.comfort, rating: 9.8 },
    { title: home.booking.value, rating: 9.8 },
    { title: home.booking.location, rating: 9.9 },
    { title: home.booking.wifi, rating: 9.9 },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center mb-10 w-screen mx-auto">
      <div className="flex flex-col text-xl w-screen justify-center items-center pt-5 pb-10 font-bold text-white bg-stone-800">
        <p>{home.welcome}</p>
        <p>{home.central}</p>
        <p>{home.apartment} 19</p>
      </div>

      <div className="flex justify-between items-center my-10 -z-10">
        <div className="flex bg-stone-800 text-amber-600 text-sm font-semibold py-2 px-3 rounded-s">
          <CounterPage from={0} to={9.8} className="flex justify-center w-10" />
        </div>
        <div className="flex text-sm font-semibold text-stone-700 bg-amber-600 py-2 px-3 rounded-e uppercase">
          {home.booking.average}
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
                  <CounterPage className="flex justify-center items-center w-11 h-11" from={0} to={category.rating} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
