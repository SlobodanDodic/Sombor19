import Image, { StaticImageData } from "next/image";

interface ICustomImage {
  src: StaticImageData;
  alt: string;
  className: string;
}

export function CustomImage({ src, alt, className }: ICustomImage) {
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

interface ISimpleImage {
  src: StaticImageData;
  className: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export function SimpleImage({ src, priority, className, style }: ISimpleImage) {
  return (
    <Image
      src={src}
      alt="about image"
      priority={priority}
      // loading="lazy"
      decoding="async"
      data-nimg="1"
      className={className}
      style={style}
    />
  );
}
