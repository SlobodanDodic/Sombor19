"use client";
import React, { useState, SetStateAction, Dispatch } from "react";
import Image from "next/image";
import { VscEyeClosed } from "react-icons/vsc";

import sombor1 from "../../assets/about/gallery/sombor-1.jpg";
import sombor2 from "../../assets/about/gallery/sombor-2.jpg";
import sombor3 from "../../assets/about/gallery/sombor-3.jpg";
import sombor4 from "../../assets/about/gallery/sombor-4.jpg";
import sombor5 from "../../assets/about/gallery/sombor-5.jpg";
import sombor6 from "../../assets/about/gallery/sombor-6.jpg";
import sombor7 from "../../assets/about/gallery/sombor-7.jpg";
import sombor8 from "../../assets/about/gallery/sombor-8.jpg";
import sombor9 from "../../assets/about/gallery/sombor-9.jpg";
import sombor10 from "../../assets/about/gallery/sombor-10.jpg";
import sombor11 from "../../assets/about/gallery/sombor-11.jpg";
import sombor12 from "../../assets/about/gallery/sombor-12.jpg";

const images = [
  { src: sombor1, alt: "Sombor 1" },
  { src: sombor2, alt: "Sombor 2" },
  { src: sombor3, alt: "Sombor 3" },
  { src: sombor4, alt: "Sombor 4" },
  { src: sombor5, alt: "Sombor 5" },
  { src: sombor6, alt: "Sombor 6" },
  { src: sombor7, alt: "Sombor 7" },
  { src: sombor8, alt: "Sombor 8" },
  { src: sombor9, alt: "Sombor 9" },
  { src: sombor10, alt: "Sombor 10" },
  { src: sombor11, alt: "Sombor 11" },
  { src: sombor12, alt: "Sombor 12" },
];

const initialState: number | null = null;

export default function Gallery() {
  const [selectedImage, setSelectedImage]: [number | null, Dispatch<SetStateAction<number | null>>] =
    useState(initialState);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const gotoPrevious = () => {
    setSelectedImage((prevIndex) => {
      if (prevIndex !== null) {
        return (prevIndex - 1 + images.length) % images.length;
      }
      return null;
    });
  };

  const gotoNext = () => {
    setSelectedImage((prevIndex) => {
      if (prevIndex !== null) {
        return (prevIndex + 1) % images.length;
      }
      return null;
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
      {images.map((image, index) => (
        <div key={index} className="relative w-40 md:w-44 h-40 cursor-pointer" onClick={() => openLightbox(index)}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 780px) 176px, 160px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      ))}

      {selectedImage !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" onClick={closeLightbox}>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing the lightbox when clicking the button
              gotoPrevious();
            }}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 border border-white rounded-full p-2 text-white bg-stone-800 text-xl md:text-2xl cursor-pointer z-10"
          >
            &lt;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing the lightbox when clicking the button
              gotoNext();
            }}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 border border-white rounded-full p-2 text-white bg-stone-800 text-xl md:text-2xl cursor-pointer z-10"
          >
            &gt;
          </button>

          <div className="relative flex justify-center items-center h-full p-4 md:p-8">
            <button
              onClick={closeLightbox}
              className="absolute top-4 left-1/2 -translate-x-1/2 border border-white rounded-lg px-3 py-1 text-white bg-stone-800 text-xl md:text-2xl cursor-pointer z-10"
            >
              <VscEyeClosed />
            </button>

            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              style={{ objectFit: "cover", borderRadius: "20px", maxHeight: "90vh", height: "auto" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
