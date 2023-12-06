"use client";
import React, { useState, SetStateAction, Dispatch } from "react";
import Image, { StaticImageData } from "next/image";
import { VscEyeClosed } from "react-icons/vsc";

interface IImageProps {
  images: IImage[];
}

interface IImage {
  src: StaticImageData;
  alt: string;
}

const initialState: number | null = null;

export function Gallery({ images }: IImageProps) {
  const [selectedImage, setSelectedImage]: [number | null, Dispatch<SetStateAction<number | null>>] = useState(initialState);

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
      {images?.map((image, index) => (
        <div key={index} className="relative w-40 md:w-44 h-40 cursor-pointer" onClick={() => openLightbox(index)}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            quality={100}
            sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
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
