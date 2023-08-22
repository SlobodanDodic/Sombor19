"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bgImg from "../../assets/ten.svg";

export function ReviewCard() {
  const [isLoaded, setIsLoaded] = useState(false);

  const reviewCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
    );

    if (reviewCardRef.current) {
      observer.observe(reviewCardRef.current);
    }

    return () => {
      if (reviewCardRef.current) {
        observer.unobserve(reviewCardRef.current);
      }
    };
  }, []);

  const categories = [
    { title: "Staff", rating: 9.9 },
    { title: "Facilities", rating: 9.8 },
    { title: "Cleanliness", rating: 9.9 },
    { title: "Comfort", rating: 9.8 },
    { title: "Value for money", rating: 9.8 },
    { title: "Location", rating: 9.9 },
    { title: "Free WiFi", rating: 9.9 },
  ];

  return (
    <div ref={reviewCardRef} className="relative flex flex-col items-center justify-center mb-8 w-screen mx-auto">
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

      <div className="flex justify-between items-center my-10">
        <div className="flex bg-stone-800 text-amber-600 text-sm font-semibold py-2 px-3 rounded-s">9.8</div>
        <div className="flex text-sm font-semibold text-stone-700 bg-amber-600 py-2 px-3 rounded-e uppercase">
          booking average rating
        </div>
      </div>

      <div className="flex">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <div key={i} className="w-60 bg-stone-800/10 rounded-e-lg p-2">
              <div className="text-sm font-medium text-stone-700 tracking-wide">{category.title}</div>
              <div className="flex items-center mb-3">
                <div className="w-full bg-stone-800 rounded h-3 mr-2">
                  <div
                    className={`h-3 bg-amber-600 rounded ${isLoaded ? "transition-width" : ""}`}
                    style={{
                      width: isLoaded ? `${category.rating * 10}%` : "0",
                      transitionDuration: isLoaded ? "2s" : "0s",
                    }}
                  />
                </div>
                <span className="text-sm font-medium bg-amber-600 p-2 rounded-full text-white text-shadow-sm shadow-stone-800 border-2 border-stone-400">
                  {isLoaded ? (
                    category.rating
                  ) : (
                    <svg className="animate-spin h-4 w-4 text-stone-700" viewBox="0 0 24 24">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}