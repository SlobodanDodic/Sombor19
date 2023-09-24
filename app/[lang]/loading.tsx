"use client";
import { ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[1px] backdrop-brightness-50 bg-black/70 z-50">
      <div className="flex flex-col justify-center items-center">
        <ScaleLoader color="#d97705" />
        <h3 className="my-5 text-amber-600">Loading</h3>
      </div>
    </div>
  );
}
