import no1 from "../../assets/rooms/gallery/1.jpeg";
import no2 from "../../assets/rooms/gallery/2.jpeg";
import no3 from "../../assets/rooms/gallery/3.jpeg";
import no4 from "../../assets/rooms/gallery/4.jpeg";
import no5 from "../../assets/rooms/gallery/5.jpeg";
import no6 from "../../assets/rooms/gallery/6.jpeg";
import no7 from "../../assets/rooms/gallery/7.jpeg";

export function IntroGallery() {
  const images = [no1, no2, no3, no4, no5, no6, no7];

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] auto-rows-[120px] md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] md:auto-rows-[240px] w-screen md:max-w-3xl lg:max-w-5xl">
      {images.map((url, index) => (
        <div
          key={index}
          className={
            index === 0
              ? "card card-tall card-wide"
              : index === 1
              ? "card card-tall"
              : index === 6
              ? "card card-wide"
              : "card"
          }
          style={{ backgroundImage: `url(${url.src})` }}
        />
      ))}
    </div>
  );
}
