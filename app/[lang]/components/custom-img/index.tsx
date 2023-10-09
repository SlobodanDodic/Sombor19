import Image, { StaticImageData } from "next/image";

interface ICustomImage {
  src: StaticImageData;
  alt: string;
  className: string;
}

export default function CustomImage({ src, alt, className }: ICustomImage) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        priority={true}
        style={{ objectFit: "cover" }}
        className="h-full brightness-[80%] bg-stone-800 z-10"
      />
    </div>
  );
}
