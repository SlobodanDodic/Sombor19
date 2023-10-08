"use client";
import type { ITestimonials } from "../../types";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Testimonial } from "./Testimonial";

export function TestimonialsPage({ testimonials }: ITestimonials) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="testimonials relative w-screen max-w-6xl mx-auto mb-7">
      <div className="flex w-screen max-w-6xl mx-auto justify-center items-center">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
          <circle cx="50" cy="50" r="30" pathLength="1" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-amber-600"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
      </div>
      <div ref={ref} className="flex py-5 mx-auto overflow-x-scroll ml-4 lg:ml-0">
        {testimonials?.map((testimonial, i) => (
          <Testimonial key={i} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
