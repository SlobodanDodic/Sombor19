"use client";
import { CircleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[2px] backdrop-brightness-50 bg-black/20 z-50">
      <CircleLoader color="#d97705" size={80} />
    </div>
  );
}
