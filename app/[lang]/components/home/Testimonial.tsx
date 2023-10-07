import Image from "next/image";
import avatar from "../../assets/hero/avatar.png";

export function Testimonial() {
  return (
    <div className="flex justify-center items-center w-screen max-w-6xl mx-auto mr-5">
      <div className="flex">
        <figure className="relative overflow-hidden mr-2 w-64">
          <span className="absolute top-3 left-3 text-5xl text-amber-600 z-20">“</span>
          <span className="absolute bottom-20 right-3 text-5xl text-amber-600 z-20">„</span>
          <p className="relative -mb-10 rounded-lg bg-stone-800 text-sm text-white pt-9 pb-12 px-5">
            The apartment was spacious and super clean with everything you'd need. It is located close to downtown and I
            parked my vehicle and walked to buy groceries and get to a bank. I received help with my bags both arriving
            and leaving as well as...
          </p>
          <div className="relative flex justify-end items-center h-20">
            <Image
              src={avatar}
              height={80}
              width={80}
              alt="avatar"
              className="absolute right-1/2 rounded-full mr-4 z-10"
            />
            <div className="flex flex-col justify-center items-start w-1/2">
              <p className="uppercase text-amber-600 font-bold">Milutinovic</p>
              <span className="text-sm text-stone-700 font-bold">Canada</span>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
