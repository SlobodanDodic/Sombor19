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

import Image from "next/image";

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

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
      {images.map((image, index) => (
        <div key={index} className="relative w-40 md:w-44 h-40">
          <Image
            src={image.src}
            alt={image.alt}
            className="rounded-lg"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}
