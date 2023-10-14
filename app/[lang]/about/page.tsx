import me1 from "../assets/about/me-1.png";
import me2 from "../assets/about/me-2.jpg";
import throne from "../assets/about/throne.png";
import brush1 from "../assets/about/brush-1.png";
import brush2 from "../assets/about/brush-2.png";
import stain from "../assets/about/stain.png";
import Gallery from "../components/about/Gallery";
import { SimpleImage } from "../components/custom-img";

export default function About() {
  return (
    <div className="flex flex-col items-center pt-10 w-screen max-w-6xl mx-auto">
      <h1>Who am I?</h1>

      <div className="relative flex flex-col md:flex-row justify-center items-center w-screen max-w-3xl pt-4">
        <SimpleImage
          src={throne}
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 md:-left-7 md:-translate-x-0 w-[19rem] md:w-64 h-auto -z-10"
        />
        <div className="relative flex w-64 justify-center items-center md:items-end drop-shadow-[2px_4px_6px_black]">
          <SimpleImage src={me1} style={{ objectFit: "contain" }} className="w-full h-full rounded-3xl" />
        </div>

        <div className="relative flex w-full min-h-[192px] justify-center items-center md:items-end md:mt-4">
          <p className="text-sm md:text-base text-right md:text-left pl-8 pr-12 py-6 md:py-0 font-bold text-stone-600">
            Greetings! I&apos;m your friendly host in Sombor, passionate about welcoming travelers to my beautiful
            apartments. Traveling is my ultimate joy, allowing me to explore diverse cultures and make lifelong friends.
            I cherish the friendship of my extensive social circle and love connecting with people from all walks of
            life. As an easy-going individual, I find immense pleasure in creating a warm and inviting atmosphere for my
            guests.
          </p>
        </div>

        <SimpleImage
          src={brush1}
          priority={true}
          className="absolute -bottom-3 md:-bottom-16 left-0 w-full -rotate-6 -z-10"
        />
      </div>

      <div className="relative flex w-full max-w-3xl justify-center items-center mt-20">
        <div className="relative">
          <SimpleImage
            src={me2}
            className="w-52 h-52 rounded-full float-right mx-4 drop-shadow-sm"
            style={{ shapeOutside: "circle(50%)" }}
          />
          <p className="text-justify md:text-right text-sm md:text-base font-bold text-stone-600 px-8 md:pt-4">
            In my apartments, you&apos;ll discover more than just a place to stay; you&apos;ll find a home away from
            home. I pour my love for travel and life into every detail, ensuring your stay is not just comfortable but
            also filled with delightful moments. Join me on this journey in Sombor, where you can experience the
            city&apos;s beauty and culture through my eyes. Prepare for a memorable adventure, full of laughter, new
            friendships, cherished memories, and unique local experiences. Can&apos;t wait to welcome you!
          </p>
        </div>
      </div>

      <div className="relative mt-16">
        <SimpleImage
          src={stain}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-80 -z-10"
        />

        <h1>My hometown</h1>
        <h1>Sombor</h1>
      </div>

      <div className="relative flex flex-col w-full max-w-3xl justify-center items-center mt-5">
        <p className="text-sm md:text-base font-bold text-stone-600 px-8 py-4">
          Nestled within the heart of Serbia, my hometown Sombor combines the charm of a cozy café with the vibrancy of
          an artistic haven. After a day of dedicated work, I seek solace in the rhythmic pedal strokes along our
          picturesque canal, savor invigorating swims in the Danube, and relish the aroma of freshly brewed coffee
          drifting from our myriad cafes. As evening descends, Sombor transforms into a culinary paradise where I
          indulge in elegant dining at fine restaurants. It&apos;s a sanctuary of tranquility, inviting weary souls to
          unwind amidst the gentle ebb of time, a stark contrast to the hurried pace of urban life.
        </p>

        <Gallery />

        <div className="relative flex flex-col">
          <SimpleImage src={brush2} className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 rotate-6 -z-10" />

          <p className="text-sm md:text-base font-bold text-stone-600 px-8 py-8">
            However, tranquility here does not mean monotony. Sombor teems with opportunities for adventure. Embark on
            horseback journeys, explore waterways by boat, pedal through scenic trails, dance to your heart&apos;s
            content, or take a plunge into the refreshing waters. Our cultural tapestry is woven with diverse threads,
            from gripping theatrical performances to the thrill of fishing. Sombor isn&apos;t just a location; it&apos;s
            a vibrant canvas awaiting the strokes of exploration, inviting travelers to immerse themselves in a plethora
            of enriching experiences.
          </p>
          <p className="text-sm md:text-base font-bold text-stone-600 px-8 pb-4">
            Adding to its allure, Sombor (Serbian Cyrillic: Сомбор) stands as a city and the administrative center of
            the West Bačka District in the autonomous province of Vojvodina, Serbia. The city boasts a population of
            41,814, while its administrative area, encompassing neighboring villages, shelters 71,521 inhabitants. This
            rich cultural tapestry, combined with the city&apos;s tranquil charm, creates a unique haven for travelers
            seeking both serenity and excitement.
          </p>
        </div>
      </div>
    </div>
  );
}
